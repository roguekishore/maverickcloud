// Proves the change path: the sample site, stored as stress-test@1, is migrated to @2, passes the
// v2 validator, keeps every id and every other value, and renders with the v2 adapter.
import { createElement } from "react";
import { renderToString } from "react-dom/server";
import { createContext } from "../lib/context";
import type { ContentDocument, Section } from "../lib/values";
import type { SectionDef, TemplateDef } from "../validator/definitions";
import { validateDocument } from "../validator/validate";
import { mediaLibrary, read, validateOptions } from "../checks/load";
import { migrate, MODEL_VERSION } from "./index";
import * as statsV2 from "./v2/stats-adapter";

type Check = [name: string, fn: () => string | void];

const allSections = (d: ContentDocument): Section[] => [...d.layout.before, ...d.layout.after, ...d.pages.flatMap((p) => p.sections)];

export function migrationChecks({ site, template }: { site: ContentDocument; template: TemplateDef }): Check[] {
  const templateV2: TemplateDef = {
    ...template,
    version: 2,
    sections: { ...template.sections, stats: read<SectionDef>("migrations", "v2", "stats.fields.json") },
  };
  const before = JSON.stringify(site);
  let migrated: ContentDocument | undefined;
  const result = () => (migrated ??= migrate(site, { template: "stress-test@2" }).doc);

  return [
    [
      "stress-test@1 → @2 runs over the sample site",
      () => {
        const { doc, applied } = migrate(site, { template: "stress-test@2" });
        if (doc.template !== "stress-test@2") throw new Error(`template is ${doc.template}`);
        if (applied.length !== 1) throw new Error(`applied ${applied.length} steps`);
        return applied[0];
      },
    ],
    [
      "the migrated site passes the v2 validator",
      () => {
        const errs = validateDocument(result(), templateV2, validateOptions).filter((i) => i.level === "error");
        if (errs.length) throw new Error(errs.map((e) => `${e.path}: ${e.message}`).join("; "));
      },
    ],
    [
      "the unmigrated site fails the v2 validator (the v2 definition really differs)",
      () => {
        const errs = validateDocument(site, templateV2, validateOptions).filter((i) => i.level === "error");
        if (!errs.length) throw new Error("v1 content passed as v2");
        return `${errs.length} errors, e.g. ${errs[0].path}: ${errs[0].message}`;
      },
    ],
    [
      "the stored v1 document is left untouched",
      () => {
        result();
        if (JSON.stringify(site) !== before) throw new Error("migrate() changed its input");
      },
    ],
    [
      "figures converted, ids kept, every other section identical",
      () => {
        const oldS = allSections(site);
        const newS = allSections(result());
        if (oldS.map((s) => s.id).join() !== newS.map((s) => s.id).join()) throw new Error("section ids or order changed");
        const changed = newS.filter((s, i) => JSON.stringify(s) !== JSON.stringify(oldS[i])).map((s) => s.type);
        if (changed.some((t) => t !== "stats")) throw new Error(`non-stats sections changed: ${changed.join(", ")}`);
        const stats = newS.find((s) => s.type === "stats")!.values.stats as { id: string; number: number; prefix?: string; suffix?: string }[];
        const oldStats = oldS.find((s) => s.type === "stats")!.values.stats as { id: string; value: string }[];
        if (stats.map((s) => s.id).join() !== oldStats.map((s) => s.id).join()) throw new Error("item ids changed");
        return oldStats.map((o, i) => `"${o.value}" → ${JSON.stringify({ number: stats[i].number, prefix: stats[i].prefix, suffix: stats[i].suffix })}`).join(", ");
      },
    ],
    [
      "the v2 adapter renders the migrated figures",
      () => {
        const d = result();
        const page = d.pages.find((p) => p.sections.some((s) => s.type === "stats"))!;
        const section = page.sections.find((s) => s.type === "stats")!;
        const ctx = createContext({ doc: d, page, section, media: mediaLibrary, mediaBase: "https://media.selfsite.in/x", formBase: "https://app.selfsite.in/api/forms/x", year: 2026 });
        const html = renderToString(createElement(statsV2.component, statsV2.adapt(section.values as unknown as statsV2.Values, ctx)));
        const label = (section.values.stats as { label: string }[])[0].label;
        if (!html.includes(label)) throw new Error("the first caption isn't in the HTML");
        return `${html.length} bytes of HTML`;
      },
    ],
    [
      "running it again on the migrated site does nothing",
      () => {
        const again = migrate(result(), { template: "stress-test@2" });
        if (again.applied.length || JSON.stringify(again.doc) !== JSON.stringify(result())) throw new Error("not a no-op");
      },
    ],
    [
      "a figure it can't read stops the migration, naming the section and item",
      () => {
        const bad = structuredClone(site);
        const s = allSections(bad).find((x) => x.type === "stats")!;
        (s.values.stats as { id: string; value: string }[])[0].value = "lots";
        try {
          migrate(bad, { template: "stress-test@2" });
        } catch (e) {
          const msg = (e as Error).message;
          if (!msg.includes(s.id)) throw new Error(`stopped, but without the section id: ${msg}`);
          return msg;
        }
        throw new Error("it converted an unreadable figure");
      },
    ],
    [
      "a document from a newer content model is refused",
      () => {
        try {
          migrate({ ...site, schema: MODEL_VERSION + 1 });
        } catch (e) {
          return (e as Error).message;
        }
        throw new Error("accepted it");
      },
    ],
  ];
}
