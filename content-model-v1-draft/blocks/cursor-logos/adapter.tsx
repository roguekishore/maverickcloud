import { CursorLogos, type CursorLogosProps } from "@foundry/cursor-logos";
import type { AdapterContext } from "../../lib/context";
import { media } from "../../lib/render";
import type { Item, Media } from "../../lib/values";

export interface Values {
  caption: string;
  logos: Item<{ name: string; logo: Media }>[];
}

export const component = CursorLogos;

export function adapt(v: Values, ctx: AdapterContext): CursorLogosProps {
  return {
    caption: v.caption,
    logos: v.logos.map((l) => ({ name: l.name, logo: media({ ...l.logo, alt: l.logo.alt ?? l.name }, ctx, { className: "h-7 w-auto object-contain" }) })),
  };
}
