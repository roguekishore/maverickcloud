import { PlumeformPricing, type PlumeformPricingProps } from "@foundry/plumeform-pricing";
import type { AdapterContext } from "../../lib/context";
import { link, richLine, richText } from "../../lib/render";
import type { Item, Link, RichLine, RichText } from "../../lib/values";

type Price = Item<{ label?: string; amount: string; suffix?: string; note?: RichLine }>;
type Plan = Item<{
  name: string;
  description?: RichLine;
  prices: Price[];
  featured?: boolean;
  cta: Link;
  ctaNote?: RichLine;
  features?: Item<{ text: string }>[];
  footnote?: RichLine;
}>;

export interface Values {
  eyebrow?: string;
  title: RichLine;
  intro?: RichText;
  sideLink?: Link;
  plansLabel?: string;
  plans: Plan[];
  compare?: {
    title?: RichLine;
    columns?: Item<{ label?: string }>[];
    rows?: Item<{ cells?: Item<{ text?: string }>[]; ours?: boolean }>[];
    note?: RichLine;
  };
}

export const component = PlumeformPricing;

export function adapt(v: Values, ctx: AdapterContext): PlumeformPricingProps {
  const c = v.compare;
  return {
    eyebrow: v.eyebrow,
    title: richLine(v.title, ctx),
    as: ctx.page.sections[0]?.id === ctx.section.id ? "h1" : "h2",
    intro: richText(v.intro, ctx),
    sideLink: link(v.sideLink, ctx),
    plansLabel: v.plansLabel,
    plans: v.plans.map((p) => ({
      name: p.name,
      description: richLine(p.description, ctx),
      prices: p.prices.map((x) => ({ label: x.label, amount: x.amount, suffix: x.suffix, note: richLine(x.note, ctx) })),
      featured: p.featured,
      cta: link(p.cta, ctx)!,
      ctaNote: richLine(p.ctaNote, ctx),
      features: (p.features ?? []).map((f) => f.text),
      footnote: richLine(p.footnote, ctx),
    })),
    // a table is lists of lists here; v1 has no table type, so nothing checks rows against columns
    compare: c?.columns?.length
      ? {
          title: richLine(c.title, ctx),
          columns: c.columns.map((col) => col.label ?? ""),
          rows: (c.rows ?? []).map((r) => ({ cells: (r.cells ?? []).map((cell) => cell.text ?? ""), ours: r.ours })),
          note: richLine(c.note, ctx),
        }
      : undefined,
    id: ctx.section.id,
  };
}
