// Migrations move stored content forward, one version per step, like Flyway scripts:
// - model steps (content model n → n+1) run over every stored site when the model changes;
// - template steps (template x@n → x@n+1) run over a site when it moves to the new template version.
// Steps are pure (document in, new document out), tested over sample sites, and never edited
// once released. Readers only ever see the latest shape.
import type { ContentDocument } from "../lib/values";
import { statsValueToNumber } from "./stress-test-1-to-2";

export interface Step {
  id: string;
  description: string;
  from: { schema: number } | { template: string };
  up(doc: ContentDocument): ContentDocument;
}

export const MODEL_VERSION = 1;

export const steps: Step[] = [statsValueToNumber];

const parse = (t: string) => {
  const [id, v] = t.split("@");
  return { id, v: Number(v) };
};

export function migrate(doc: ContentDocument, target: { template?: string } = {}): { doc: ContentDocument; applied: string[] } {
  if (doc.schema > MODEL_VERSION) throw new Error(`written by content model ${doc.schema}; this code knows up to ${MODEL_VERSION}`);
  let d = structuredClone(doc);
  const applied: string[] = [];

  while (d.schema < MODEL_VERSION) {
    const from = d.schema;
    const step = steps.find((s) => "schema" in s.from && s.from.schema === from);
    if (!step) throw new Error(`no migration from content model ${from}`);
    d = step.up(structuredClone(d));
    if (d.schema !== from + 1) throw new Error(`${step.id} didn't move the model to ${from + 1}`);
    applied.push(step.id);
  }

  if (target.template) {
    const want = parse(target.template);
    let have = parse(d.template);
    if (have.id !== want.id) throw new Error(`moving from ${have.id} to ${want.id} is a template switch, not a migration`);
    if (have.v > want.v) throw new Error(`the site is already on ${d.template}`);
    while (have.v < want.v) {
      const from = d.template;
      const step = steps.find((s) => "template" in s.from && s.from.template === from);
      if (!step) throw new Error(`no migration from ${from}`);
      d = step.up(structuredClone(d));
      const next = parse(d.template);
      if (next.id !== have.id || next.v !== have.v + 1) throw new Error(`${step.id} didn't move the site to ${have.id}@${have.v + 1}`);
      applied.push(step.id);
      have = next;
    }
  }
  return { doc: d, applied };
}
