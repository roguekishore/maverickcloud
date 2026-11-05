import { HalodentalOpusHeader, type HalodentalOpusHeaderProps } from "@foundry/halodental-opus-header";
import type { AdapterContext } from "../../lib/context";
import { icon, link, media } from "../../lib/render";
import type { Icon, Item, Link } from "../../lib/values";

export interface Values {
  links?: Item<{ link: Link }>[];
  cta: Link;
  ctaShort?: string;
  tiles?: Item<{ icon: Icon; link: Link }>[];
}

export const component = HalodentalOpusHeader;

export function adapt(v: Values, ctx: AdapterContext): HalodentalOpusHeaderProps {
  return {
    brand: { name: ctx.business.name, href: "/", emblem: media(ctx.business.logo, ctx, { className: "size-full object-contain" }) },
    links: (v.links ?? []).flatMap((l) => link(l.link, ctx) ?? []),
    cta: link(v.cta, ctx)!,
    ctaShort: v.ctaShort,
    tiles: v.tiles?.map((t) => ({ content: icon(t.icon), href: ctx.href(t.link.href), ariaLabel: t.link.label })),
    // UI wording stays in the template (open decision in REPORT.md)
    menuLabel: "Menu",
    // design decision, not content: lie on the hero when the page starts with one
    overlay: ctx.page.sections[0]?.type === "hero",
  };
}
