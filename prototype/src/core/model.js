import { BLOCKS } from './schema.js';
import { TEMPLATES, TEMPLATE_BY } from './templates.js';
  var clone = (o) => o == null ? o : structuredClone(o);
  var uid = (p = "x") => p + Math.random().toString(36).slice(2, 9);
  var LINK_KINDS = /* @__PURE__ */ new Set(["page", "section", "item", "url", "phone", "whatsapp", "email", "file", "none"]);
  function slugify(s) {
    return String(s || "").toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g, "").replace(/&/g, " and ").replace(/['’]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 60);
  }
  var blockTitle = (sec) => sec && (sec.label || BLOCKS[sec.type] && BLOCKS[sec.type].title) || "Section";
  var isDetail = (p) => p && p.kind === "detail";
  var pageById = (site, id) => site.pages.find((p) => p.id === id);
  function pagePath(site, page2) {
    if (!page2) return null;
    if (page2.id === site.homeId) return "/";
    if (page2.kind === "404") return "/404";
    const segs = [];
    let p = page2, guard = 0;
    while (p && guard++ < 12) {
      if (p.id === site.homeId) break;
      segs.unshift(p.slug);
      p = p.parentId ? pageById(site, p.parentId) : null;
    }
    return "/" + segs.join("/");
  }
  var detailPageFor = (site, c2) => site.pages.find((p) => p.kind === "detail" && p.collection === c2);
  var listPageFor = (site, c2) => site.pages.find((p) => p.kind === "collection" && p.collection === c2);
  function itemPath(site, c2, item) {
    const d = detailPageFor(site, c2);
    if (!d || !item) return null;
    const base = d.parentId ? pagePath(site, pageById(site, d.parentId)) : "";
    return (base === "/" ? "" : base) + "/" + item.slug;
  }
  function locPath(site, loc) {
    if (loc.missing && loc.pageId === site.notFoundId) return loc.missing;
    const p = pageById(site, loc.pageId);
    if (!p) return "/";
    if (isDetail(p)) {
      const c2 = site.collections[p.collection];
      const it = c2 && (c2.items.find((i) => i.id === loc.itemId) || c2.items[0]);
      return itemPath(site, p.collection, it) || pagePath(site, p);
    }
    return pagePath(site, p);
  }
  function descendants(site, id) {
    const out = [];
    const walk = (pid) => site.pages.filter((p) => p.parentId === pid).forEach((p) => {
      out.push(p);
      walk(p.id);
    });
    walk(id);
    return out;
  }
  function pageTree(site) {
    const out = [];
    const kids = (pid) => site.pages.filter((p) => (p.parentId || null) === pid && p.kind !== "404");
    const walk = (pid, depth) => kids(pid).forEach((p) => {
      out.push({ page: p, depth });
      walk(p.id, depth + 1);
    });
    const roots = kids(null).slice().sort((a, b) => a.id === site.homeId ? -1 : b.id === site.homeId ? 1 : 0);
    roots.forEach((p) => {
      out.push({ page: p, depth: 0 });
      walk(p.id, 1);
    });
    return out;
  }
  function slugClash(site, page2) {
    if (!page2 || page2.kind === "404" || page2.id === site.homeId) return null;
    const path = pagePath(site, page2);
    return site.pages.find((p) => p.id !== page2.id && p.kind !== "404" && pagePath(site, p) === path) || null;
  }
  function uniqueSlug(site, base, parentId, exceptId) {
    let s = base || "page", i = 2;
    while (site.pages.some((p) => p.id !== exceptId && (p.parentId || null) === (parentId || null) && p.slug === s)) s = base + "-" + i++;
    return s;
  }
  var digits = (s) => String(s || "").replace(/[^\d+]/g, "");
  function resolveLink(site, link, mediaBy) {
    if (!link || !link.kind) return { href: "", text: "No link", empty: true };
    switch (link.kind) {
      case "none":
        return { href: "#", text: "No link set", broken: true };
      case "page": {
        const p = pageById(site, link.pageId);
        if (!p) return { href: "#", text: "Deleted page", broken: true };
        return { href: pagePath(site, p), text: p.title, hidden: p.status !== "live", page: p };
      }
      case "section": {
        const p = pageById(site, link.pageId);
        const s = p && p.sections.find((x) => x.id === link.sectionId);
        if (!p || !s) return { href: "#", text: p ? p.title + " \u203A deleted section" : "Deleted page", broken: true };
        return { href: pagePath(site, p) + "#" + s.anchor, text: p.title + " \u203A " + blockTitle(s), hidden: p.status !== "live" || s.hidden, page: p };
      }
      case "item": {
        const c2 = site.collections[link.collection];
        const it = c2 && c2.items.find((i) => i.id === link.itemId);
        const path = it && itemPath(site, link.collection, it);
        if (!it || !path) return { href: "#", text: it ? it.title + " (no entry page)" : "Deleted entry", broken: true };
        return { href: path, text: it.title, hidden: it.status === "draft" };
      }
      case "url":
        return { href: link.url || "", text: (link.url || "No address").replace(/^https?:\/\//, ""), external: true, broken: !link.url };
      case "phone":
        return { href: "tel:" + digits(link.phone), text: link.phone || "No number", external: true, broken: !link.phone };
      case "whatsapp":
        return { href: "https://wa.me/" + digits(link.phone).replace("+", "") + (link.message ? "?text=" + encodeURIComponent(link.message) : ""), text: "WhatsApp " + (link.phone || ""), external: true, broken: !link.phone };
      case "email":
        return { href: "mailto:" + (link.email || "") + (link.subject ? "?subject=" + encodeURIComponent(link.subject) : ""), text: link.email || "No address", external: true, broken: !link.email };
      case "file": {
        const m = mediaBy ? mediaBy[link.mediaId] : null;
        if (mediaBy && !m) return { href: "#", text: "Deleted file", broken: true };
        return { href: "/files/" + slugify(m ? m.name : "file"), text: m ? m.name : "File", external: true };
      }
      default:
        return { href: "#", text: "Link", broken: true };
    }
  }
  var LINK_KIND_LABEL = { page: "Page", section: "Section", item: "Collection item", url: "Web address", phone: "Phone", whatsapp: "WhatsApp", email: "Email", file: "File download", none: "No link" };
  function fieldLabel(type, path) {
    const b = BLOCKS[type];
    if (!b || !path.length) return "";
    const f = b.fields.find((x) => x.key === path[0]);
    if (!f) return "";
    if (f.type === "list" && typeof path[1] === "number") {
      const sub = f.fields.find((x) => x.key === path[2]);
      return `${f.itemLabel} ${path[1] + 1}${sub ? " \u203A " + sub.label : ""}`;
    }
    return f.label;
  }
  function walkLinks(site, cb, opts = {}) {
    const visit = (v, loc, path) => {
      if (!v || typeof v !== "object") return;
      if (Array.isArray(v)) {
        v.forEach((x, i) => visit(x, loc, [...path, i]));
        return;
      }
      if (typeof v.kind === "string" && LINK_KINDS.has(v.kind)) {
        cb(v, { ...loc, field: fieldLabel(loc.type, path), fieldKey: path[0] });
        return;
      }
      if ("label" in v && "link" in v && !v.link && v.label) {
        cb({ kind: "none" }, { ...loc, field: fieldLabel(loc.type, path), fieldKey: path[0] });
        return;
      }
      for (const k of Object.keys(v)) visit(v[k], loc, [...path, k]);
    };
    const sec = (s, scope, page2, label) => visit(s.values, { scope, pageId: page2 ? page2.id : null, sectionId: s.id, type: s.type, label }, []);
    sec(site.header, "header", null, "Shared header");
    sec(site.footer, "footer", null, "Shared footer");
    site.pages.forEach((p) => {
      if (!opts.includeDraft && p.status === "draft") return;
      if (p.header) sec(p.header, "header", p, p.title + " \u203A Header (this page only)");
      if (p.footer) sec(p.footer, "footer", p, p.title + " \u203A Footer (this page only)");
      p.sections.forEach((s) => {
        if (!s.hidden || opts.includeDraft) sec(s, "page", p, p.title + " \u203A " + blockTitle(s));
      });
    });
    ["header", "footer"].forEach((m) => site.nav[m].forEach((it) => cb(it.link || { kind: "none" }, { scope: "nav", menu: m, navId: it.id, label: (m === "header" ? "Header menu" : "Footer menu") + " \u203A " + it.label, field: "" })));
  }
  function findRefs(site, pageIds) {
    const ids = new Set(pageIds);
    const out = [];
    walkLinks(site, (link, loc) => {
      if ((link.kind === "page" || link.kind === "section") && ids.has(link.pageId) && !(loc.pageId && ids.has(loc.pageId))) out.push({ ...loc, link });
    }, { includeDraft: true });
    return out;
  }
  function relink(site, fromId, toId) {
    const fix = (v) => {
      if (!v || typeof v !== "object") return;
      if (Array.isArray(v)) return v.forEach(fix);
      if ((v.kind === "page" || v.kind === "section") && v.pageId === fromId) {
        v.kind = "page";
        v.pageId = toId;
        delete v.sectionId;
        return;
      }
      Object.values(v).forEach(fix);
    };
    fix(site.header.values);
    fix(site.footer.values);
    site.pages.forEach((p) => {
      fix(p.sections);
      if (p.header) fix(p.header);
      if (p.footer) fix(p.footer);
    });
    ["header", "footer"].forEach((m) => site.nav[m].forEach((n2) => fix(n2)));
  }
  function walkImages(site, cb) {
    const scan = (s, label, pageId, scope) => {
      const b = BLOCKS[s.type];
      if (!b) return;
      b.fields.forEach((f) => {
        const v = s.values[f.key];
        if (f.type === "image" && v) cb(v, { label: label + " \u203A " + f.label, pageId, sectionId: s.id, scope, fieldKey: f.key });
        if (f.type === "list" && Array.isArray(v)) v.forEach((it, i) => f.fields.forEach((sf) => {
          if (sf.type === "image" && it[sf.key]) cb(it[sf.key], { label: `${label} \u203A ${f.itemLabel} ${i + 1}`, pageId, sectionId: s.id, scope, fieldKey: f.key });
        }));
      });
    };
    scan(site.header, "Shared header", null, "header");
    scan(site.footer, "Shared footer", null, "footer");
    site.pages.forEach((p) => {
      if (p.status === "draft") return;
      p.sections.forEach((s) => {
        if (!s.hidden) scan(s, p.title + " \u203A " + blockTitle(s), p.id, "page");
      });
      if (p.seo && p.seo.image) cb(p.seo.image, { label: p.title + " \u203A Share image", pageId: p.id, scope: "pageSettings" });
    });
    Object.values(site.collections).forEach((c2) => {
      if (!listPageFor(site, c2.id)) return;
      c2.items.forEach((it) => {
        if (it.image && it.status !== "draft") cb(it.image, { label: c2.name + " \u203A " + it.title, scope: "collection", collection: c2.id, itemId: it.id });
      });
    });
  }
  function mediaUsage(site, mediaId) {
    const out = [];
    walkImages(site, (id, loc) => {
      if (id === mediaId) out.push(loc);
    });
    walkLinks(site, (l, loc) => {
      if (l.kind === "file" && l.mediaId === mediaId) out.push(loc);
    }, { includeDraft: true });
    return out;
  }
  function runChecks(site, media) {
    const mediaBy = Object.fromEntries(media.map((m) => [m.id, m]));
    const issues = [];
    let n2 = 0;
    walkLinks(site, (link, loc) => {
      const r = resolveLink(site, link, mediaBy);
      if (r.empty) return;
      const where = loc.label + (loc.field ? " \u203A " + loc.field : "");
      if (r.broken) issues.push({ id: "i" + n2++, kind: "broken", level: "error", title: link.kind === "none" ? "Button has no link" : "Link points to " + r.text.toLowerCase(), where, loc });
      else if (r.hidden) issues.push({ id: "i" + n2++, kind: "hidden", level: "warn", title: `Links to ${r.page && r.page.status === "draft" ? "draft" : "hidden"} page \u201C${r.page ? r.page.title : r.text}\u201D`, where, loc });
    });
    const seen = /* @__PURE__ */ new Set();
    walkImages(site, (id, loc) => {
      const m = mediaBy[id];
      if (!m || (m.alt || "").trim() || seen.has(id)) return;
      seen.add(id);
      issues.push({ id: "i" + n2++, kind: "alt", level: "warn", title: `${m.name} has no alt text`, where: loc.label, loc, mediaId: id });
    });
    site.pages.forEach((p) => {
      if (p.status === "draft" || p.kind === "detail" || p.kind === "404") return;
      const miss = [];
      if (!(p.seo.title || "").trim()) miss.push("title");
      if (!(p.seo.description || "").trim()) miss.push("description");
      if (miss.length) issues.push({ id: "i" + n2++, kind: "seo", level: "warn", title: `${p.title} has no search ${miss.join(" or ")}`, where: pagePath(site, p), loc: { scope: "pageSettings", pageId: p.id } });
      const c2 = slugClash(site, p);
      if (c2) issues.push({ id: "i" + n2++, kind: "broken", level: "error", title: `${p.title} and ${c2.title} share ${pagePath(site, p)}`, where: "Page settings \u203A Slug", loc: { scope: "pageSettings", pageId: p.id } });
    });
    return issues;
  }
  function sectionDelta(a, b) {
    const A3 = Object.fromEntries(a.map((s) => [s.id, JSON.stringify(s)]));
    const Bm = Object.fromEntries(b.map((s) => [s.id, JSON.stringify(s)]));
    let added = 0, removed = 0, edited = 0;
    b.forEach((s) => {
      if (!(s.id in A3)) added++;
      else if (A3[s.id] !== Bm[s.id]) edited++;
    });
    a.forEach((s) => {
      if (!(s.id in Bm)) removed++;
    });
    const moved = !added && !removed && a.map((s) => s.id).join() !== b.map((s) => s.id).join();
    const parts = [];
    if (edited) parts.push(edited + (edited > 1 ? " sections" : " section") + " edited");
    if (added) parts.push(added + " added");
    if (removed) parts.push(removed + " removed");
    if (moved) parts.push("reordered");
    return parts.join(", ");
  }
  function diffSites(pub, cur) {
    if (!pub) return cur.pages.filter((p) => p.status !== "draft").map((p) => ({ type: "added", pageId: p.id, title: p.title, path: pagePath(cur, p), detail: "First publish" }));
    const out = [];
    const pubBy = Object.fromEntries(pub.pages.map((p) => [p.id, p]));
    cur.pages.forEach((p) => {
      const o = pubBy[p.id];
      if (!o) {
        out.push({ type: "added", pageId: p.id, title: p.title, path: pagePath(cur, p), detail: p.status === "draft" ? "Draft, stays unpublished" : "New page" });
        return;
      }
      if (JSON.stringify(o) === JSON.stringify(p) && pagePath(pub, o) === pagePath(cur, p)) return;
      const what = [];
      const sd = sectionDelta(o.sections, p.sections);
      if (sd) what.push(sd);
      if (o.title !== p.title) what.push("title");
      if (pagePath(pub, o) !== pagePath(cur, p)) what.push("address " + pagePath(pub, o) + " \u2192 " + pagePath(cur, p));
      if (JSON.stringify(o.seo) !== JSON.stringify(p.seo)) what.push("search settings");
      if (o.status !== p.status) what.push("visibility");
      if (JSON.stringify(o.header) !== JSON.stringify(p.header) || JSON.stringify(o.footer) !== JSON.stringify(p.footer)) what.push("header or footer");
      out.push({ type: "edited", pageId: p.id, title: p.title, path: pagePath(cur, p), detail: what.join(", ") || "settings" });
    });
    pub.pages.forEach((o) => {
      if (!cur.pages.some((p) => p.id === o.id)) out.push({ type: "deleted", title: o.title, path: pagePath(pub, o), detail: "Removed" });
    });
    [["header", "Shared header"], ["footer", "Shared footer"], ["nav", "Menus"], ["theme", "Theme"], ["collections", "Collection entries"], ["redirects", "Redirects"]].forEach(([k, title]) => {
      if (JSON.stringify(pub[k]) !== JSON.stringify(cur[k])) out.push({ type: "site", key: k, title, detail: "Applies to every page" });
    });
    if (pub.homeId !== cur.homeId) out.push({ type: "site", key: "home", title: "Home page", detail: "Changed" });
    return out;
  }
  function assignAnchors(page2) {
    const used = /* @__PURE__ */ new Set();
    page2.sections.forEach((s) => {
      if (s.anchor && !used.has(s.anchor)) used.add(s.anchor);
      else s.anchor = "";
    });
    page2.sections.forEach((s) => {
      if (s.anchor) return;
      const base = BLOCKS[s.type] ? BLOCKS[s.type].category : "section";
      let a = base, i = 2;
      while (used.has(a)) a = base + "-" + i++;
      s.anchor = a;
      used.add(a);
    });
  }
  function replaceDeep(o, from, to) {
    if (!from || from === to) return o;
    if (typeof o === "string") return o.split(from).join(to);
    if (Array.isArray(o)) return o.map((x) => replaceDeep(x, from, to));
    if (o && typeof o === "object") {
      for (const k of Object.keys(o)) if (k !== "id" && k !== "pageId" && k !== "sectionId") o[k] = replaceDeep(o[k], from, to);
    }
    return o;
  }
  function createSite(tpl, { name, subdomain } = {}) {
    const t = clone(tpl);
    let site = {
      id: uid("site"),
      name: name || t.business,
      subdomain: subdomain || slugify(t.business).replace(/-/g, ""),
      templateId: t.id,
      theme: t.theme,
      header: t.header,
      footer: t.footer,
      nav: t.nav,
      pages: t.pages,
      homeId: "home",
      notFoundId: "p404",
      collections: t.collections,
      redirects: []
    };
    site.pages.forEach(assignAnchors);
    if (name && name !== t.business) {
      const shortLogo = t.header.values.logo;
      site = replaceDeep(site, t.business, name);
      if (shortLogo && shortLogo !== t.business) site = replaceDeep(site, shortLogo, name);
    }
    return site;
  }
  function remapLinks(values, tpl, site) {
    const fix = (v) => {
      if (!v || typeof v !== "object") return;
      if (Array.isArray(v)) return v.forEach(fix);
      if ((v.kind === "page" || v.kind === "section") && tpl) {
        if (pageById(site, v.pageId) && (v.kind === "page" || pageById(site, v.pageId).sections.some((s) => s.id === v.sectionId))) return;
        const src = tpl.pages.find((p) => p.id === v.pageId);
        const srcSec = src && v.kind === "section" ? src.sections.find((s) => s.id === v.sectionId) : null;
        let target = src && site.pages.find((p) => p.slug === src.slug && p.kind === src.kind);
        if (!target && src && src.kind !== "page") target = site.pages.find((p) => p.kind === src.kind && p.collection === src.collection);
        if (!target && srcSec) target = site.pages.find((p) => p.sections.some((s) => s.type === srcSec.type));
        if (!target) target = pageById(site, site.homeId);
        v.pageId = target.id;
        if (v.kind === "section") {
          const ts = srcSec && target.sections.find((s) => s.type === srcSec.type);
          if (ts) v.sectionId = ts.id;
          else {
            v.kind = "page";
            delete v.sectionId;
          }
        }
        return;
      }
      if (v.kind === "item") {
        const c2 = site.collections[v.collection];
        if (c2 && !c2.items.some((i) => i.id === v.itemId)) {
          if (c2.items[0]) v.itemId = c2.items[0].id;
        }
        return;
      }
      Object.values(v).forEach(fix);
    };
    fix(values);
    return values;
  }
  function sectionFromEntry(entry, site) {
    const tpl = TEMPLATE_BY[entry.templateId];
    return { id: uid("s"), type: entry.type, values: remapLinks(clone(entry.values), tpl, site), hidden: false, anchor: "" };
  }
  var ALIASES = { body: ["text", "intro", "caption"], text: ["body", "intro"], intro: ["body", "text"], primary: ["button", "cta"], button: ["primary", "cta"], cta: ["button", "primary"], quote: ["title"] };
  function carryOver(oldSec, entry, site) {
    const fresh = sectionFromEntry(entry, site);
    const oldB = BLOCKS[oldSec.type], newB = BLOCKS[entry.type];
    const kept = [];
    newB.fields.forEach((f) => {
      const cands = [f.key, ...ALIASES[f.key] || []];
      for (const k of cands) {
        const of = oldB.fields.find((x) => x.key === k);
        const ov = oldSec.values[k];
        if (!of || ov == null || ov === "" || Array.isArray(ov) && !ov.length) continue;
        const compatible = of.type === f.type || [of.type, f.type].every((t) => ["text", "textarea", "richtext"].includes(t));
        if (!compatible || f.type === "list") continue;
        fresh.values[f.key] = clone(ov);
        kept.push(f.label);
        break;
      }
    });
    fresh.id = oldSec.id;
    fresh.anchor = oldSec.anchor;
    return { section: fresh, kept };
  }
  function copyPageFromTemplate(tpl, srcPage, site) {
    const p = clone(srcPage);
    const idMap = {};
    p.id = uid("p");
    p.sections.forEach((s) => {
      const nid = uid("s");
      idMap[s.id] = nid;
      s.id = nid;
      s.values = remapLinks(s.values, tpl, site);
    });
    p.parentId = null;
    if (p.kind === "detail") {
      const list2 = listPageFor(site, p.collection);
      p.parentId = list2 ? list2.id : null;
    }
    p.slug = p.kind === "detail" ? ":slug" : uniqueSlug(site, srcPage.slug || slugify(srcPage.title), p.parentId);
    p.status = "live";
    p.header = null;
    p.footer = null;
    p.seo = { title: "", description: "", image: null };
    assignAnchors(p);
    return p;
  }
  var LIBRARY = (() => {
    const seen = /* @__PURE__ */ new Map();
    TEMPLATES.forEach((t) => {
      const add = (sec) => {
        const key = t.id + ":" + sec.type;
        if (!seen.has(key)) seen.set(key, { key, templateId: t.id, templateName: t.name, type: sec.type, values: sec.values, category: BLOCKS[sec.type].category });
      };
      add(t.header);
      t.pages.forEach((p) => p.sections.forEach(add));
      add(t.footer);
    });
    return [...seen.values()];
  })();
  function sampleWorkspace() {
    const draft = createSite(TEMPLATE_BY.clinic, { name: "Smile Studio Dental", subdomain: "smilestudio" });
    const P2 = (id) => pageById(draft, id);
    draft.pages.splice(2, 0, {
      id: "doctors",
      title: "Our doctors",
      slug: "our-doctors",
      parentId: "about",
      kind: "page",
      collection: null,
      status: "draft",
      header: null,
      footer: null,
      seo: { title: "Our dentists \xB7 Smile Studio Dental", description: "Meet the four specialist dentists at Smile Studio Dental, Indiranagar.", image: null },
      sections: [
        { id: "dr1", type: "hero-bigtype", anchor: "hero", hidden: false, values: { eyebrow: "Our doctors", title: "Four specialists, one team", body: "Each of our dentists holds a master\u2019s degree in their speciality and has practised for at least ten years.", button: { label: "", link: null }, meta: [], showImage: false } },
        { id: "dr2", type: "features-grid", anchor: "features", hidden: false, values: { eyebrow: "", title: "", intro: "", columns: "4", style: "plain", showImages: true, items: [
          { image: "m-cl-ananya", title: "Dr. Ananya Mehta", meta: "BDS, MDS (Prosthodontics)", text: "Implants, crowns and smile design. Co-founder." },
          { image: "m-cl-kavya", title: "Dr. Kavya Mehta", meta: "BDS, MDS (Endodontics)", text: "Single-sitting root canals and pain-free fillings. Co-founder." },
          { image: "m-cl-farhan", title: "Dr. Farhan Qureshi", meta: "BDS, MDS (Orthodontics)", text: "Braces and clear aligners for teenagers and adults." },
          { image: "m-cl-lakshmi", title: "Dr. Lakshmi Rao", meta: "BDS, MDS (Paediatric dentistry)", text: "Children from age two, including nervous first-timers." }
        ] } }
      ]
    });
    draft.nav.header.splice(2, 0, { id: "n-doctors", label: "Our doctors", link: { kind: "page", pageId: "doctors" }, depth: 1 });
    P2("about").sections[1].values.button = { label: "Meet our doctors", link: { kind: "page", pageId: "doctors" } };
    const homeCta = P2("home").sections.find((s) => s.id === "cl-home-cta");
    homeCta.values.title = "Diwali check-up week";
    homeCta.values.text = "Consultation with X-ray at \u20B9400 instead of \u20B9600, until 15 November.";
    homeCta.values.button = { label: "See the offer", link: { kind: "page", pageId: "diwali" } };
    P2("blog").seo.description = "";
    draft.redirects = [
      { id: "r1", from: "/treatments", to: "/services", code: 301, auto: true, note: "Added when Treatments was renamed to Services" },
      { id: "r2", from: "/team", to: "/about", code: 301, auto: false, note: "" }
    ];
    const v5 = clone(draft);
    const Q = (id) => pageById(v5, id);
    v5.pages = v5.pages.filter((p) => p.id !== "doctors");
    v5.nav.header = v5.nav.header.filter((n2) => !(n2.link && n2.link.pageId === "doctors"));
    Q("home").sections[0].values.title = "Gentle dental care in Indiranagar";
    Q("about").sections[1].values.button = { label: "Book a visit", link: { kind: "section", pageId: "contact", sectionId: "cl-visit" } };
    Q("fees").sections[1].values.items.find((i) => i.name.startsWith("Teeth whitening")).price = "\u20B98,000";
    Q("blog").seo.description = "Plain-language dental advice from the dentists at Smile Studio, Indiranagar.";
    const offer = {
      id: "diwali",
      title: "Diwali offer",
      slug: "diwali-offer",
      parentId: null,
      kind: "page",
      collection: null,
      status: "live",
      header: null,
      footer: null,
      seo: { title: "Diwali check-up week \xB7 Smile Studio Dental", description: "Consultation with X-ray at \u20B9400 until 15 November.", image: null },
      sections: [{ id: "dw1", type: "hero-bigtype", values: { eyebrow: "Until 15 November", title: "Diwali check-up week", body: "Consultation with X-ray at \u20B9400 instead of \u20B9600.", button: { label: "Book a visit", link: { kind: "section", pageId: "contact", sectionId: "cl-visit" } }, meta: [], showImage: false }, hidden: false, anchor: "hero" }]
    };
    v5.pages.splice(5, 0, offer);
    const v4 = clone(v5);
    pageById(v4, "contact").sections[0].values.hours = [{ days: "Monday to Saturday", time: "9:30 am \u2013 8:00 pm" }, { days: "Sunday", time: "Closed" }];
    const v3 = clone(v4);
    v3.pages = v3.pages.filter((p) => p.id !== "diwali");
    pageById(v3, "home").sections.find((s) => s.id === "cl-home-cta").values = clone(TEMPLATE_BY.clinic.pages[0].sections[4].values);
    const v2 = clone(v3);
    pageById(v2, "fees").sections[1].values.items.forEach((i) => {
      if (i.name.startsWith("Root canal")) i.price = "from \u20B95,500";
    });
    const v1 = clone(v2);
    v1.pages = v1.pages.filter((p) => p.id !== "blog" && p.id !== "post");
    v1.nav.header = v1.nav.header.filter((n2) => !(n2.link && n2.link.pageId === "blog"));
    v1.redirects = [];
    const versions = [
      { v: 1, at: "12 Mar 2026, 11:04 am", by: "Ananya Mehta", note: "First publish", snapshot: v1 },
      { v: 2, at: "2 Apr 2026, 6:12 pm", by: "Ananya Mehta", note: "Added the blog", snapshot: v2 },
      { v: 3, at: "19 Jun 2026, 10:30 am", by: "Kavya Mehta", note: "New fees; renamed Treatments to Services", snapshot: v3 },
      { v: 4, at: "8 Oct 2026, 9:47 pm", by: "Ananya Mehta", note: "Diwali offer page", snapshot: v4 },
      { v: 5, at: "24 Oct 2026, 6:40 pm", by: "Kavya Mehta", note: "Sunday hours", snapshot: v5 }
    ];
    return { site: draft, versions, liveV: 5 };
  }
  function linkToLoc(site, link) {
    if (!link) return null;
    if (link.kind === "page") return pageById(site, link.pageId) ? { pageId: link.pageId } : { pageId: site.notFoundId, broken: true };
    if (link.kind === "section") {
      const p = pageById(site, link.pageId);
      const s = p && p.sections.find((x) => x.id === link.sectionId);
      return p && s ? { pageId: p.id, hash: s.anchor } : { pageId: site.notFoundId, broken: true };
    }
    if (link.kind === "item") {
      const d = detailPageFor(site, link.collection);
      const c2 = site.collections[link.collection];
      const it = c2 && c2.items.find((i) => i.id === link.itemId);
      return d && it ? { pageId: d.id, itemId: it.id } : { pageId: site.notFoundId, broken: true };
    }
    if (link.kind === "none") return { pageId: site.notFoundId, broken: true };
    return { external: true };
  }
  function route(site, raw, depth = 0) {
    let [path, hash] = String(raw || "/").split("#");
    path = path.split("?")[0].trim().toLowerCase().replace(/^https?:\/\/[^/]+/, "");
    if (!path.startsWith("/")) path = "/" + path;
    if (path.length > 1) path = path.replace(/\/+$/, "");
    for (const p of site.pages) if (p.kind !== "detail" && pagePath(site, p) === path) return { pageId: p.id, hash };
    for (const d of site.pages.filter((p) => p.kind === "detail")) {
      const base = d.parentId ? pagePath(site, pageById(site, d.parentId)) : "";
      if (path.startsWith((base === "/" ? "" : base) + "/")) {
        const slug = path.slice((base === "/" ? "" : base).length + 1);
        const it = site.collections[d.collection] && site.collections[d.collection].items.find((i) => i.slug === slug);
        if (it) return { pageId: d.id, itemId: it.id, hash };
      }
    }
    const r = matchRedirect(site, path);
    if (r && depth < 5) return { ...route(site, r.target, depth + 1), redirectedFrom: path, redirect: r.rule };
    return { pageId: site.notFoundId, notFound: path, hash };
  }


function matchRedirect(site, path) {
  for (const x of site.redirects) {
    const from = x.from.replace(/\/+$/, "") || "/";
    if (from.endsWith("/*")) {
      const base = from.slice(0, -2);
      if (path === base || path.startsWith(base + "/")) {
        const rest = path.slice(base.length);
        const to = x.to.endsWith("/*") ? x.to.slice(0, -2) + rest : x.to;
        return { rule: x, target: to };
      }
    } else if (from === path) return { rule: x, target: x.to };
  }
  return null;
}
export { clone, uid, LINK_KINDS, slugify, blockTitle, isDetail, pageById, pagePath, detailPageFor, listPageFor, itemPath, locPath,
  descendants, pageTree, slugClash, uniqueSlug, resolveLink, LINK_KIND_LABEL, fieldLabel, walkLinks, findRefs, relink, walkImages,
  mediaUsage, runChecks, sectionDelta, diffSites, assignAnchors, replaceDeep, createSite, remapLinks, sectionFromEntry, carryOver,
  copyPageFromTemplate, sampleWorkspace, linkToLoc, route, matchRedirect };
