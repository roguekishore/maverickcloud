// Runtime checks, bundled and run by check.mjs. Prints one PASS/FAIL line per check.
import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { createElement, isValidElement } from "react";
import { renderToString } from "react-dom/server";
import { adapters } from "../blocks";
import { createContext } from "../lib/context";
import type { ContentDocument, Link, Page, Run, Section } from "../lib/values";
import type { FieldDef, Fields, TemplateDef } from "../validator/definitions";
import { checkTemplate, validateDocument, validateSection, type Issue } from "../validator/validate";
import { migrationChecks } from "../migrations/migrate.test";
import { loadSite, loadTemplate, mediaLibrary, read, root, validateOptions } from "./load";
import { negativeCases } from "./negative";

type Result = { ok: boolean; name: string; detail?: string };
const results: Result[] = [];
export function check(name: string, fn: () => string | void) {
  try {
    results.push({ ok: true, name, detail: fn() || undefined });
  } catch (e) {
    results.push({ ok: false, name, detail: (e as Error).message });
  }
}

const errors = (issues: Issue[]) => issues.filter((i) => i.level === "error");
const show = (issues: Issue[]) => issues.map((i) => `${i.path}: ${i.message}`).join("; ");

function renderWithProps(doc: ContentDocument, page: Page, s: Section, t: TemplateDef): { html: string; props: object } {
  const def = t.sections[s.type];
  if (!def) throw new Error(`no section type ${s.type}`);
  const mod = adapters[def.block];
  if (!mod) throw new Error(`no adapter for ${def.block}`);
  const ctx = createContext({
    doc,
    page,
    section: s,
    media: mediaLibrary,
    mediaBase: "https://media.selfsite.in/site_demo",
    formBase: "https://app.selfsite.in/api/forms/site_demo",
    year: 2026,
  });
  const props = mod.adapt(s.values, ctx);
  return { html: renderToString(createElement(mod.component, props)), props };
}

export const renderSection = (doc: ContentDocument, page: Page, s: Section, t: TemplateDef) => renderWithProps(doc, page, s, t).html;

/** Every string inside the props, including the children of React elements the adapter built. */
function propTexts(x: unknown, out: string[] = [], depth = 0): string[] {
  if (depth > 30 || x == null || typeof x === "function") return out;
  if (typeof x === "string") out.push(x);
  else if (Array.isArray(x)) x.forEach((v) => propTexts(v, out, depth + 1));
  else if (isValidElement(x)) propTexts(x.props, out, depth + 1);
  else if (typeof x === "object") Object.values(x).forEach((v) => propTexts(v, out, depth + 1));
  return out;
}

const runTexts = (runs: Run[]) => runs.flatMap((r) => (typeof r === "string" ? r : r.text).split("\n"));

/** Every piece of owner text in a section's values, to look for in the rendered HTML. */
function ownerTexts(values: unknown, fields: Fields): string[] {
  const out: string[] = [];
  const walk = (v: unknown, def: FieldDef) => {
    if (v === undefined) return;
    if (def.type === "text" || def.type === "longtext") out.push(...String(v).split("\n"));
    else if (def.type === "richline") out.push(...runTexts(v as Run[]));
    else if (def.type === "richtext") for (const b of v as { p: Run[] }[]) out.push(...runTexts(b.p));
    else if (def.type === "link" && (v as Link).label) out.push((v as Link).label!);
    else if (def.type === "group") walkFields(v, def.fields ?? {});
    else if (def.type === "list")
      for (const item of v as Record<string, unknown>[]) walkFields(item, def.kinds ? def.kinds[item.kind as string].fields : (def.fields ?? {}));
  };
  const walkFields = (v: unknown, fields: Fields) => {
    for (const [k, d] of Object.entries(fields)) walk((v as Record<string, unknown>)[k], d);
  };
  walkFields(values, fields);
  return [...new Set(out.map((s) => s.trim()).filter(Boolean))];
}

const norm = (s: string) => s.replace(/\s+/g, " ").trim();
/** Visible text plus the text read out by screen readers (aria-label, alt, title). */
function htmlText(html: string): string {
  const spoken = [...html.matchAll(/\s(?:aria-label|alt|title)="([^"]*)"/g)].map((m) => m[1]).join(" ");
  const text = `${html.replace(/<[^>]+>/g, "")} ${spoken}`
    .replace(/&nbsp;/g, " ")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&amp;/g, "&");
  return norm(text);
}

// ——— checks ———
const template = loadTemplate();
const site = loadSite();
const blockDirs = readdirSync(join(root, "blocks"), { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name);

check("template: fields.json files are well-formed", () => {
  const issues = checkTemplate(template);
  if (issues.length) throw new Error(show(issues));
  return `${Object.keys(template.sections).length} section types`;
});

check("blocks: every folder has an adapter, a fields.json and a sample, and is in the template", () => {
  const types = new Set(Object.values(template.sections).map((s) => s.block));
  const problems = blockDirs.flatMap((b) => [
    ...(adapters[b] ? [] : [`${b}: not in blocks/index.ts`]),
    ...(types.has(b) ? [] : [`${b}: not in template.json`]),
    ...["fields.json", "adapter.tsx", "sample.json"].filter((f) => !existsSync(join(root, "blocks", b, f))).map((f) => `${b}: no ${f}`),
  ]);
  if (problems.length) throw new Error(problems.join("; "));
  return `${blockDirs.length} blocks`;
});

check("site.sample.json passes the validator", () => {
  const issues = validateDocument(site, template, validateOptions);
  if (errors(issues).length) throw new Error(show(errors(issues)));
  const warnings = issues.filter((i) => i.level === "warning");
  return `0 errors, ${warnings.length} warnings${warnings.length ? `: ${show(warnings)}` : ""}`;
});

for (const b of blockDirs) {
  const sample = read<Section>("blocks", b, "sample.json");
  const page = site.pages.find((p) => p.sections.some((s) => s.id === sample.id)) ?? site.pages[0];

  check(`sample valid: ${b}`, () => {
    const def = template.sections[sample.type];
    if (!def || def.block !== b) throw new Error(`sample type "${sample.type}" doesn't map to this block in template.json`);
    const issues = errors(validateSection(sample, def, site, validateOptions));
    if (issues.length) throw new Error(show(issues));
  });

  // Every owner text must reach the component's props (else the adapter dropped a field: FAIL).
  // Texts that reach the props but not the static HTML are reported: the block shows them only
  // after JavaScript runs (carousel slides) or never (a slot it shares with another prop).
  check(`renders: ${b}`, () => {
    const { html, props } = renderWithProps(site, page, sample, template);
    if (html.length < 50) throw new Error("rendered almost nothing");
    const unresolved = html.match(/href="(page|action):[^"]*"/g);
    if (unresolved) throw new Error(`unresolved links: ${unresolved.join(", ")}`);
    const text = htmlText(html);
    const passed = norm(propTexts(props).join(" | "));
    const wanted = ownerTexts(sample.values, template.sections[sample.type].fields);
    const dropped = wanted.filter((w) => !passed.includes(norm(w)));
    const notInHtml = wanted.filter((w) => !dropped.includes(w) && !text.includes(norm(w)));
    const q = (xs: string[]) => xs.map((m) => JSON.stringify(m)).join(", ");
    const detail =
      `${html.length} bytes of HTML; ${wanted.length - dropped.length}/${wanted.length} owner texts reach the component, ` +
      `${wanted.length - dropped.length - notInHtml.length} are in the static HTML` +
      (notInHtml.length ? `; passed but not in static HTML: ${q(notInHtml)}` : "");
    if (dropped.length) throw new Error(`the adapter drops: ${q(dropped)}; ${detail}`);
    return detail;
  });
}

check("whole site renders (every page, with header and footer)", () => {
  let count = 0;
  for (const page of site.pages) {
    for (const s of [...site.layout.before, ...page.sections, ...site.layout.after]) {
      if (s.hidden) continue;
      try {
        renderSection(site, page, s, template);
      } catch (e) {
        throw new Error(`${page.path} ${s.id}: ${(e as Error).message}`);
      }
      count++;
    }
  }
  return `${site.pages.length} pages, ${count} section renders`;
});

for (const c of negativeCases) {
  check(`rejects: ${c.name}`, () => {
    const broken = structuredClone(site);
    c.mutate(broken);
    const errs = errors(validateDocument(broken, template, validateOptions));
    if (!errs.length) throw new Error("the validator accepted it");
    const hit = errs.find((e) => e.message.includes(c.expect));
    if (!hit) throw new Error(`rejected, but not with "${c.expect}": ${show(errs)}`);
    return `${hit.path}: ${hit.message}`;
  });
}

for (const [name, fn] of migrationChecks({ site, template })) check(`migration: ${name}`, fn);

// ——— report ———
for (const r of results) console.log(`${r.ok ? "PASS" : "FAIL"}  ${r.name}${r.detail ? `  — ${r.detail}` : ""}`);
const failed = results.filter((r) => !r.ok).length;
console.log(`\n${results.length - failed}/${results.length} runtime checks passed`);
process.exit(failed ? 1 : 0);
