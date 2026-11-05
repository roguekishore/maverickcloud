import { FunctionhealthHeading, type FunctionhealthHeadingProps } from "@foundry/functionhealth-heading";
import type { AdapterContext } from "../../lib/context";
import { parts } from "../../lib/render";
import type { RichLine } from "../../lib/values";

export interface Values {
  title: RichLine;
  text?: string;
  size?: "section" | "hero";
  align?: "center" | "start";
}

export const component = FunctionhealthHeading;

export function adapt(v: Values, ctx: AdapterContext): FunctionhealthHeadingProps {
  return {
    // emphasis → the block's accent part; it also has { strike }, which v1 has no mark for
    title: parts(v.title, (text) => ({ accent: text })),
    text: v.text,
    // the page's first section carries the h1; not the owner's call
    as: ctx.page.sections[0]?.id === ctx.section.id ? "h1" : "h2",
    size: v.size,
    align: v.align,
  };
}
