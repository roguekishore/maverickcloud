// Demo template step, stress-test@1 → @2. A plausible change: the stats section stored each figure
// as free text ("8,000+"); v2 stores a number with an optional prefix and suffix, so the count-up
// animation always gets a number and the CMS can show a number input. The step converts every
// stored figure, and stops with the section and item named if one can't be read.
import type { ContentDocument, Section } from "../lib/values";
import type { Step } from "./index";

type StatV1 = { id: string; value: string; label: string };
type StatV2 = { id: string; number: number; prefix?: string; suffix?: string; label: string };

const FIGURE = /^\s*([^\d\s]{0,4})\s*(\d{1,3}(?:,\d{2,3})*(?:\.\d+)?|\d+(?:\.\d+)?)\s*(\S{0,6})\s*$/;

export function toNumber(value: string, where: string): Omit<StatV2, "id" | "label"> {
  const m = FIGURE.exec(value);
  if (!m) throw new Error(`${where}: can't read a number from "${value}"; fix it by hand, then rerun`);
  return {
    number: Number(m[2].replace(/,/g, "")),
    ...(m[1] ? { prefix: m[1] } : {}),
    ...(m[3] ? { suffix: m[3] } : {}),
  };
}

export const statsValueToNumber: Step = {
  id: "stress-test@1→2: stats value becomes number + prefix/suffix",
  description: "stats.stats[].value (text) → number (number) + prefix (text) + suffix (text)",
  from: { template: "stress-test@1" },
  up(doc: ContentDocument): ContentDocument {
    const sections: Section[] = [...doc.layout.before, ...doc.layout.after, ...doc.pages.flatMap((p) => p.sections)];
    for (const s of sections) {
      if (s.type !== "stats") continue;
      const stats = (s.values.stats ?? []) as StatV1[];
      s.values.stats = stats.map(({ id, value, label }): StatV2 => ({ id, ...toNumber(value, `${s.id} ${id}`), label }));
    }
    doc.template = "stress-test@2";
    return doc;
  },
};
