import { HalodentalOpusNews, type HalodentalOpusNewsProps } from "@foundry/halodental-opus-news";
import type { AdapterContext } from "../../lib/context";
import { link, media } from "../../lib/render";
import type { Item, Link, Media } from "../../lib/values";

export interface Values {
  title: string;
  link?: Link;
  items: Item<{ title: string; text: string; link: Link; date?: string; media?: Media }>[];
  more?: Link;
}

export const component = HalodentalOpusNews;

export function adapt(v: Values, ctx: AdapterContext): HalodentalOpusNewsProps {
  return {
    title: v.title,
    link: link(v.link, ctx),
    // the block has no date slot; the date is stored anyway (order, SEO) and simply not shown
    items: v.items.map((i) => ({
      title: i.title,
      text: i.text,
      href: ctx.href(i.link.href),
      linkLabel: `Read: ${i.title}`,
      media: media(i.media, ctx, { sizes: "(min-width: 768px) 240px, 100vw" }),
    })),
    more: link(v.more, ctx),
  };
}
