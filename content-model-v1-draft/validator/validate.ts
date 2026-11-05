// The content validator (PROPOSED v1): the outer shape against envelope.schema.json, then every
// value against the template's fields.json. Java's validator will implement the same rules; this
// one is the executable spec for it. No I/O: callers pass the document, template and media list.
import Ajv from "ajv";
import envelope from "../envelope.schema.json";
import type { MediaInfo } from "../lib/context";
import type { ContentDocument, Section } from "../lib/values";
import { BUSINESS_FIELDS } from "./business";
import { FIELD_TYPES, type FieldDef, type FieldType, type Fields, type SectionDef, type TemplateDef } from "./definitions";

export interface Issue {
  path: string;
  message: string;
  level: "error" | "warning";
}

export interface ValidateOptions {
  /** the site's media library: id → kind and size (Java: the media table, scoped to the site) */
  media: Record<string, MediaInfo>;
  iconExists(value: string): boolean;
}

const ajv = new Ajv({ allErrors: true });
const checkEnvelope = ajv.compile(envelope);

const DEFAULT_MAX: Partial<Record<FieldType, number>> = { text: 200, longtext: 2000, richline: 300, richtext: 5000 };
const ID = /^[A-Za-z0-9_-]{2,40}$/;
const PHONE = /^\+[1-9]\d{6,14}$/;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TIME = /^([01]\d|2[0-3]):[0-5]\d$/;
const CONTROL = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/;
const DAYS = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ACTION_NEEDS: Record<string, string[]> = { call: ["phone"], whatsapp: ["whatsapp"], email: ["email"], directions: ["map", "address"] };

interface Env {
  issues: Issue[];
  opts: ValidateOptions;
  /** every id seen so far → where (ids are unique across the whole document) */
  ids: Map<string, string>;
  /** page id → ids of its sections */
  pages: Map<string, Set<string>>;
  layoutSections: Set<string>;
  /** the page being checked; null inside layout sections */
  pageId: string | null;
  business: Record<string, unknown>;
}

const isObj = (v: unknown): v is Record<string, unknown> => typeof v === "object" && v !== null && !Array.isArray(v);
const err = (env: Env, path: string, message: string) => void env.issues.push({ path, message, level: "error" });
const warn = (env: Env, path: string, message: string) => void env.issues.push({ path, message, level: "warning" });

function isEmpty(v: unknown): boolean {
  if (v === undefined || v === "") return true;
  if (Array.isArray(v)) return v.length === 0;
  if (isObj(v) && "href" in v) return !v.href;
  return false;
}

function registerId(id: unknown, path: string, env: Env) {
  if (typeof id !== "string" || !ID.test(id)) return err(env, path, "needs a stable id (2–40 of A–Z a–z 0–9 _ -)");
  const seen = env.ids.get(id);
  if (seen) return err(env, path, `id "${id}" is already used at ${seen}`);
  env.ids.set(id, path);
}

function checkKeys(v: Record<string, unknown>, allowed: string[], path: string, env: Env) {
  for (const k of Object.keys(v)) if (!allowed.includes(k)) err(env, `${path}.${k}`, "unknown key");
}

function checkString(v: unknown, def: FieldDef, path: string, env: Env, multiline: boolean): v is string {
  if (typeof v !== "string") return err(env, path, "must be text"), false;
  if (CONTROL.test(v)) err(env, path, "contains control characters");
  if (!multiline && v.includes("\n")) err(env, path, "must be one line");
  const max = def.max ?? DEFAULT_MAX[def.type] ?? 200;
  if (v.length > max) err(env, path, `longer than ${max} characters`);
  if (def.min !== undefined && v.length < def.min) err(env, path, `shorter than ${def.min} characters`);
  return true;
}

function checkHref(href: unknown, path: string, env: Env) {
  if (typeof href !== "string" || !href) return err(env, path, "needs an href");
  if (href.length > 2000) return err(env, path, "href too long");
  if (/^https?:\/\//.test(href)) {
    try {
      if (!new URL(href).hostname.includes(".")) err(env, path, "not a public web address");
    } catch {
      err(env, path, "not a valid web address");
    }
    return;
  }
  if (href.startsWith("mailto:")) return void (EMAIL.test(href.slice(7).split("?")[0]) || err(env, path, "not a valid email link"));
  if (href.startsWith("tel:")) return void (PHONE.test(href.slice(4)) || err(env, path, "phone links need +country format"));
  if (href.startsWith("page:")) {
    const [pageId, anchor] = href.slice(5).split("#");
    const sections = env.pages.get(pageId);
    if (!sections) return err(env, path, `links to page "${pageId}", which doesn't exist`);
    if (anchor && !sections.has(anchor) && !env.layoutSections.has(anchor)) err(env, path, `links to section "${anchor}", not on that page`);
    return;
  }
  if (href.startsWith("#")) {
    const anchor = href.slice(1);
    const here = env.pageId ? env.pages.get(env.pageId) : undefined;
    const found = env.layoutSections.has(anchor) || (here ? here.has(anchor) : [...env.pages.values()].some((s) => s.has(anchor)));
    if (!found) err(env, path, `links to section "${anchor}", which doesn't exist`);
    return;
  }
  if (href.startsWith("action:")) {
    const needs = ACTION_NEEDS[href.slice(7)];
    if (!needs) return err(env, path, `unknown action "${href.slice(7)}"`);
    if (needs.every((k) => isEmpty(env.business[k]))) err(env, path, `${href} needs business.${needs.join(" or business.")}`);
    return;
  }
  err(env, path, "this kind of link isn't allowed (use https, mailto, tel, page, # or action)");
}

function checkRuns(runs: unknown, def: FieldDef, path: string, env: Env): string {
  if (!Array.isArray(runs)) return err(env, path, "must be a list of text runs"), "";
  const marks = def.marks ?? ["strong", "em", "link"];
  let text = "";
  runs.forEach((r, i) => {
    const p = `${path}[${i}]`;
    if (typeof r === "string") return void (text += r);
    if (!isObj(r) || typeof r.text !== "string") return err(env, p, "a run is a string or { text, strong?, em?, href? }");
    checkKeys(r, ["text", "strong", "em", "href"], p, env);
    if (r.strong !== undefined && (r.strong !== true || !marks.includes("strong"))) err(env, `${p}.strong`, "bold isn't allowed here");
    if (r.em !== undefined && (r.em !== true || !marks.includes("em"))) err(env, `${p}.em`, "emphasis isn't allowed here");
    if (r.href !== undefined) {
      if (!marks.includes("link")) err(env, `${p}.href`, "links aren't allowed here");
      else checkHref(r.href, `${p}.href`, env);
    }
    text += r.text;
  });
  if (CONTROL.test(text)) err(env, path, "contains control characters");
  return text;
}

function checkValue(v: unknown, def: FieldDef, path: string, env: Env) {
  switch (def.type) {
    case "text":
      return void checkString(v, def, path, env, false);
    case "longtext":
      return void checkString(v, def, path, env, true);
    case "richline": {
      const text = checkRuns(v, def, path, env);
      const max = def.max ?? DEFAULT_MAX.richline!;
      if (text.length > max) err(env, path, `longer than ${max} characters`);
      return;
    }
    case "richtext": {
      if (!Array.isArray(v)) return err(env, path, "must be a list of paragraphs");
      let total = 0;
      v.forEach((b, i) => {
        if (!isObj(b) || !Array.isArray(b.p)) return err(env, `${path}[${i}]`, "a paragraph is { p: [runs] }");
        checkKeys(b, ["p"], `${path}[${i}]`, env);
        total += checkRuns(b.p, def, `${path}[${i}].p`, env).length;
      });
      const max = def.max ?? DEFAULT_MAX.richtext!;
      if (total > max) err(env, path, `longer than ${max} characters`);
      return;
    }
    case "link": {
      if (!isObj(v)) return err(env, path, "a link is { href, label? }");
      checkKeys(v, ["href", "label"], path, env);
      checkHref(v.href, `${path}.href`, env);
      const mode = def.linkText ?? "required";
      if (mode === "none" && v.label !== undefined) err(env, `${path}.label`, "this link has no text");
      if (mode === "required" && (typeof v.label !== "string" || !v.label.trim())) err(env, `${path}.label`, "needs link text");
      if (v.label !== undefined) checkString(v.label, { type: "text", max: 80 }, `${path}.label`, env, false);
      return;
    }
    case "media": {
      if (!isObj(v) || typeof v.id !== "string") return err(env, path, "media is { id, alt? }");
      checkKeys(v, ["id", "alt"], path, env);
      const info = env.opts.media[v.id];
      if (!info) err(env, `${path}.id`, `no media "${v.id}" in this site's library`);
      else if (!(def.accept ?? ["image"]).includes(info.kind)) err(env, `${path}.id`, `a ${info.kind} isn't allowed here`);
      if (v.alt !== undefined) checkString(v.alt, { type: "text", max: 250 }, `${path}.alt`, env, false);
      return;
    }
    case "icon":
      if (typeof v !== "string" || !env.opts.iconExists(v)) err(env, path, `unknown icon ${JSON.stringify(v)}`);
      return;
    case "number":
      if (typeof v !== "number" || !Number.isFinite(v)) return err(env, path, "must be a number");
      if (def.integer && !Number.isInteger(v)) err(env, path, "must be a whole number");
      if (def.min !== undefined && v < def.min) err(env, path, `below ${def.min}`);
      if (def.max !== undefined && v > def.max) err(env, path, `above ${def.max}`);
      return;
    case "toggle":
      if (typeof v !== "boolean") err(env, path, "must be true or false");
      return;
    case "choice":
      if (!def.options?.some((o) => o.value === v)) err(env, path, `not one of the options`);
      return;
    case "color":
      if (typeof v !== "string" || !/^#[0-9a-fA-F]{6}$/.test(v)) err(env, path, "a colour is #RRGGBB");
      return;
    case "phone":
      if (typeof v !== "string" || !PHONE.test(v)) err(env, path, "a phone number is stored as +<country><number>, digits only");
      return;
    case "email":
      if (typeof v !== "string" || v.length > 254 || !EMAIL.test(v)) err(env, path, "not a valid email address");
      return;
    case "date": {
      const ok = typeof v === "string" && /^\d{4}-\d{2}-\d{2}$/.test(v) && new Date(`${v}T00:00:00Z`).toISOString().startsWith(v);
      if (!ok) err(env, path, "a date is YYYY-MM-DD");
      return;
    }
    case "hours": {
      if (!isObj(v) || !Array.isArray(v.slots)) return err(env, path, "hours are { slots: [...], note? }");
      checkKeys(v, ["slots", "note"], path, env);
      if (v.slots.length > 14) err(env, `${path}.slots`, "at most 14 slots");
      v.slots.forEach((s, i) => {
        const p = `${path}.slots[${i}]`;
        if (!isObj(s)) return err(env, p, "a slot is { id, days, open, close }");
        checkKeys(s, ["id", "days", "open", "close"], p, env);
        registerId(s.id, `${p}.id`, env);
        const days = s.days;
        if (!Array.isArray(days) || !days.length || days.some((d) => !DAYS.includes(d as string)) || new Set(days).size !== days.length)
          err(env, `${p}.days`, "days are a non-empty list of mon…sun without repeats");
        const open = s.open, close = s.close;
        if (typeof open !== "string" || !TIME.test(open)) err(env, `${p}.open`, "a time is HH:MM");
        if (typeof close !== "string" || !(TIME.test(close) || close === "24:00")) err(env, `${p}.close`, "a time is HH:MM (or 24:00)");
        else if (typeof open === "string" && close <= open) err(env, `${p}.close`, "closes before it opens");
      });
      if (v.note !== undefined) checkString(v.note, { type: "text", max: 120 }, `${path}.note`, env, false);
      return;
    }
    case "address": {
      if (!isObj(v)) return err(env, path, "an address is an object");
      checkKeys(v, ["line1", "line2", "area", "city", "state", "postcode", "country", "geo"], path, env);
      for (const k of ["line1", "city"]) if (typeof v[k] !== "string" || !(v[k] as string).trim()) err(env, `${path}.${k}`, "required");
      for (const k of ["line1", "line2", "area", "city", "state", "postcode"])
        if (v[k] !== undefined) checkString(v[k], { type: "text", max: 100 }, `${path}.${k}`, env, false);
      if (typeof v.country !== "string" || !/^[A-Z]{2}$/.test(v.country)) err(env, `${path}.country`, "a two-letter country code, e.g. IN");
      if (v.country === "IN" && v.postcode !== undefined && !/^\d{6}$/.test(String(v.postcode))) err(env, `${path}.postcode`, "an Indian PIN code has 6 digits");
      if (v.geo !== undefined) {
        const g = v.geo;
        const ok = isObj(g) && typeof g.lat === "number" && typeof g.lng === "number" && Math.abs(g.lat) <= 90 && Math.abs(g.lng) <= 180;
        if (!ok) err(env, `${path}.geo`, "geo is { lat, lng }");
      }
      return;
    }
    case "group":
      return checkFields(v, def.fields ?? {}, path, env, []);
    case "list": {
      if (!Array.isArray(v)) return err(env, path, "must be a list");
      if (def.max !== undefined && v.length > def.max) err(env, path, `at most ${def.max} items`);
      if (def.min !== undefined && v.length < def.min) err(env, path, `at least ${def.min} items`);
      v.forEach((item, i) => {
        const p = `${path}[${i}]`;
        if (!isObj(item)) return err(env, p, "a list item is an object with an id");
        registerId(item.id, `${p}.id`, env);
        if (def.kinds) {
          const kind = def.kinds[item.kind as string];
          if (!kind) return err(env, `${p}.kind`, `must be one of: ${Object.keys(def.kinds).join(", ")}`);
          checkFields(item, kind.fields, p, env, ["id", "kind"]);
        } else checkFields(item, def.fields ?? {}, p, env, ["id"]);
      });
      return;
    }
  }
}

function checkFields(values: unknown, fields: Fields, path: string, env: Env, reserved: string[]) {
  if (!isObj(values)) return err(env, path, "must be an object");
  for (const k of Object.keys(values)) if (!(k in fields) && !reserved.includes(k)) err(env, `${path}.${k}`, "not an editable field");
  for (const [k, def] of Object.entries(fields)) {
    const v = values[k];
    if (v === null) {
      err(env, `${path}.${k}`, "leave an empty field out instead of null");
      continue;
    }
    if (isEmpty(v)) {
      if (def.required) err(env, `${path}.${k}`, "required");
      continue;
    }
    checkValue(v, def, `${path}.${k}`, env);
  }
}

function checkSection(s: Section, def: SectionDef | undefined, path: string, env: Env) {
  if (!def) return err(env, `${path}.type`, `the template has no section "${s.type}"`);
  if (s.variant !== undefined && !def.variants?.some((v) => v.value === s.variant)) err(env, `${path}.variant`, "not a variant of this section");
  checkFields(s.values, def.fields, `${path}.values`, env, []);
  for (const u of def.uses ?? []) if (isEmpty(env.business[u])) warn(env, path, `shows business.${u}, which is empty`);
}

function newEnv(doc: ContentDocument, opts: ValidateOptions): Env {
  const pages = new Map(doc.pages.map((p) => [p.id, new Set(p.sections.map((s) => s.id))]));
  const layoutSections = new Set([...doc.layout.before, ...doc.layout.after].map((s) => s.id));
  return { issues: [], opts, ids: new Map(), pages, layoutSections, pageId: null, business: doc.business as unknown as Record<string, unknown> };
}

export function validateDocument(doc: unknown, t: TemplateDef, opts: ValidateOptions): Issue[] {
  if (!checkEnvelope(doc)) {
    return (checkEnvelope.errors ?? []).map((e) => ({ path: `$${e.instancePath.replace(/\//g, ".")}`, message: e.message ?? "invalid", level: "error" as const }));
  }
  const d = doc as unknown as ContentDocument;
  const env = newEnv(d, opts);
  if (d.template !== `${t.id}@${t.version}`) err(env, "$.template", `this template definition is ${t.id}@${t.version}`);

  const paths = new Set<string>();
  d.pages.forEach((p, i) => {
    registerId(p.id, `$.pages[${i}].id`, env);
    if (paths.has(p.path)) err(env, `$.pages[${i}].path`, `two pages at ${p.path}`);
    paths.add(p.path);
  });
  if (!paths.has("/")) err(env, "$.pages", "needs a home page at /");

  checkFields(d.theme, t.theme, "$.theme", env, []);
  checkFields(d.business, BUSINESS_FIELDS, "$.business", env, []);
  checkFields(d.shared, t.shared, "$.shared", env, []);

  for (const where of ["before", "after"] as const) {
    d.layout[where].forEach((s, i) => {
      const path = `$.layout.${where}[${i}]`;
      registerId(s.id, `${path}.id`, env);
      checkSection(s, t.sections[s.type], path, env);
    });
  }
  d.pages.forEach((p, i) => {
    env.pageId = p.id;
    p.sections.forEach((s, j) => {
      const path = `$.pages[${i}].sections[${j}]`;
      registerId(s.id, `${path}.id`, env);
      checkSection(s, t.sections[s.type], path, env);
    });
  });
  return env.issues;
}

/** One section on its own (a block's sample), with links checked against `doc`'s pages and business. */
export function validateSection(s: Section, def: SectionDef, doc: ContentDocument, opts: ValidateOptions): Issue[] {
  const env = newEnv(doc, opts);
  env.pageId = doc.pages.find((p) => p.sections.some((x) => x.id === s.id))?.id ?? null;
  registerId(s.id, "$.id", env);
  checkSection(s, def, "$", env);
  return env.issues;
}

const DEF_KEYS = ["type", "label", "help", "required", "max", "min", "integer", "marks", "linkText", "accept", "options", "fields", "kinds"];

/** Checks fields.json itself, so a typo in a template is caught before any content is. */
export function checkDefinitions(fields: Fields, path: string, depth = 0): Issue[] {
  const issues: Issue[] = [];
  const bad = (p: string, message: string) => issues.push({ path: p, message, level: "error" });
  if (depth > 3) bad(path, "lists and groups nest at most 3 deep");
  for (const [k, def] of Object.entries(fields)) {
    const p = `${path}.${k}`;
    if (!/^[a-z][A-Za-z0-9]*$/.test(k) || k === "id" || k === "kind") bad(p, "field names are camelCase and not id/kind");
    if (!FIELD_TYPES.includes(def.type)) {
      bad(p, `unknown field type "${def.type}"`);
      continue;
    }
    for (const key of Object.keys(def)) if (!DEF_KEYS.includes(key)) bad(`${p}.${key}`, "unknown option");
    if (def.type === "choice" && !def.options?.length) bad(p, "a choice needs options");
    if (def.marks?.some((m) => !["strong", "em", "link"].includes(m))) bad(`${p}.marks`, "marks are strong, em, link");
    if (def.accept?.some((a) => !["image", "video"].includes(a))) bad(`${p}.accept`, "accept is image and/or video");
    if (def.type === "group") issues.push(...checkDefinitions(def.fields ?? {}, p, depth + 1));
    if (def.type === "list") {
      if (!!def.fields === !!def.kinds) bad(p, "a list has either fields or kinds");
      if (def.fields) issues.push(...checkDefinitions(def.fields, p, depth + 1));
      for (const [kk, kind] of Object.entries(def.kinds ?? {})) issues.push(...checkDefinitions(kind.fields, `${p}.kinds.${kk}`, depth + 1));
    }
  }
  return issues;
}

export function checkTemplate(t: TemplateDef): Issue[] {
  const issues = [...checkDefinitions(t.theme, "theme"), ...checkDefinitions(t.shared, "shared")];
  for (const [type, s] of Object.entries(t.sections)) {
    issues.push(...checkDefinitions(s.fields, `sections.${type}`));
    for (const u of s.uses ?? [])
      if (!(u in BUSINESS_FIELDS)) issues.push({ path: `sections.${type}.uses`, message: `business has no "${u}"`, level: "error" });
  }
  return issues;
}
