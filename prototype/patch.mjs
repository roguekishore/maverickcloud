// Adds module imports/exports to the extracted files and applies small logic changes.
import fs from 'fs';
import path from 'path';
const root = path.dirname(new URL(import.meta.url).pathname).replace(/^\/([A-Za-z]:)/, '$1');
const f = (n) => path.join(root, 'src/core', n);
const edit = (n, fn) => fs.writeFileSync(f(n), fn(fs.readFileSync(f(n), 'utf8')));
const must = (s, a, b) => { if (!s.includes(a)) throw new Error('missing: ' + a.slice(0, 60)); return s.replace(a, b); };

edit('themes.js', (s) => {
  s = must(s, 'var themeFromPreset = (id) => JSON.parse(JSON.stringify({ ...PRESET_BY[id], presetId: id }));',
    'var themeFromPreset = (id) => JSON.parse(JSON.stringify({ button: "solid", textSize: "m", ...PRESET_BY[id], presetId: id }));');
  s = must(s, '"--s-space": (SPACING[theme.spacing] || 88) + "px",',
    '"--s-space": (typeof theme.spacing === "number" ? theme.spacing : SPACING[theme.spacing] || 88) + "px",\n      "--s-base": ({ s: 15, m: 16, l: 17 })[theme.textSize || "m"] + "px",');
  s = must(s, '"--s-radius-btn": theme.radius >= 20 ? "999px" : theme.radius + "px",',
    '"--s-radius-btn": theme.button === "pill" || theme.radius >= 20 ? "999px" : theme.radius + "px",');
  return s + '\nexport { FONTS, FONT_BY, fontStack, COLOR_KEYS, RADII, WIDTHS, SPACING, PRESETS, PRESET_BY, themeFromPreset, lum, onColor, isHex, themeVars };\n';
});

edit('templates.js', (s) => "import { themeFromPreset } from './themes.js';\n" + s +
  '\nexport { TEMPLATES, TEMPLATE_BY, INDUSTRIES, S, N, B, L, page, notFound, coll };\n');

edit('art.js', (s) => s + '\nexport { artSrc };\n');

edit('media.js', (s) => "import { artSrc } from './art.js';\n" + s + '\nexport { DEFS, FILES, stockMedia, mediaSrc };\n');

edit('model.js', (s) => {
  s = "import { BLOCKS } from './schema.js';\nimport { TEMPLATES, TEMPLATE_BY } from './templates.js';\n" + s;
  // Page header/footer can be false ("None on this page", from 2).
  // Wildcard redirects ("/old/*" -> "/new/*", from 2).
  s = must(s, '    const r = site.redirects.find((x) => x.from.replace(/\\/+$/, "") === path);',
    '    const r = matchRedirect(site, path);');
  s = must(s, '    if (r && depth < 5) return { ...route(site, r.to, depth + 1), redirectedFrom: path };',
    '    if (r && depth < 5) return { ...route(site, r.target, depth + 1), redirectedFrom: path, redirect: r.rule };');
  s += `
function matchRedirect(site, path) {
  for (const x of site.redirects) {
    const from = x.from.replace(/\\/+$/, "") || "/";
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
`;
  return s;
});
console.log('patched');
