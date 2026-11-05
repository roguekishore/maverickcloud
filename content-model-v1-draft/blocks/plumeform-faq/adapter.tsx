import { PlumeformFaq, type PlumeformFaqProps } from "@foundry/plumeform-faq";
import type { AdapterContext } from "../../lib/context";
import { richLine, richText } from "../../lib/render";
import type { Item, RichLine, RichText } from "../../lib/values";

export interface Values {
  eyebrow?: string;
  title: RichLine;
  items: Item<{ question: string; answer: RichText }>[];
}

export const component = PlumeformFaq;

export function adapt(v: Values, ctx: AdapterContext): PlumeformFaqProps {
  return {
    eyebrow: v.eyebrow,
    title: richLine(v.title, ctx),
    items: v.items.map((i) => ({ question: i.question, answer: richText(i.answer, ctx) })),
    id: ctx.section.id,
  };
}
