import { HalodentalOpusFooter, type HalodentalOpusFooterGroup, type HalodentalOpusFooterProps } from "@foundry/halodental-opus-footer";
import type { AdapterContext } from "../../lib/context";
import { addressLine, link, media, phoneDisplay } from "../../lib/render";
import type { Item, Link, Media } from "../../lib/values";

export interface Values {
  groups?: Item<{ title: string; links?: Item<{ link: Link }>[] }>[];
  contactColumn?: boolean;
  primary?: Link;
  secondary?: Link;
  legal?: Item<{ link: Link }>[];
  copyright?: string;
  media?: Media;
}

export const component = HalodentalOpusFooter;

/** The footer has no slot for an address or hours, so the business details become a link column. */
function contactGroup(ctx: AdapterContext): HalodentalOpusFooterGroup {
  const b = ctx.business;
  const links = [
    b.address && { label: addressLine(b.address), href: ctx.href("action:directions") },
    b.phone && { label: phoneDisplay(b.phone), href: ctx.href("action:call") },
    b.whatsapp && { label: "WhatsApp", href: ctx.href("action:whatsapp") },
  ].filter((l): l is { label: string; href: string } => !!l);
  return { title: "Visit us", links };
}

export function adapt(v: Values, ctx: AdapterContext): HalodentalOpusFooterProps {
  const groups = (v.groups ?? []).map((g) => ({ title: g.title, links: (g.links ?? []).flatMap((l) => link(l.link, ctx) ?? []) }));
  if (v.contactColumn) groups.push(contactGroup(ctx));
  return {
    groups,
    primary: link(v.primary, ctx),
    secondary: link(v.secondary, ctx),
    legal: v.legal?.flatMap((l) => link(l.link, ctx) ?? []),
    copyright: v.copyright ?? `© ${ctx.year} ${ctx.business.name}`,
    media: media(v.media, ctx, { className: "size-full object-contain" }),
  };
}
