import { HalodentalOpusProduct, type HalodentalOpusProductProps } from "@foundry/halodental-opus-product";
import type { AdapterContext } from "../../lib/context";
import { icon, link, media, richText } from "../../lib/render";
import type { Icon, Item, Link, Media, RichText } from "../../lib/values";

export interface Values {
  title: string;
  text?: RichText;
  features?: Item<{ icon?: Icon; label: string }>[];
  cta?: Link;
  slides: Item<{ media: Media }>[];
}

export const component = HalodentalOpusProduct;

export function adapt(v: Values, ctx: AdapterContext): HalodentalOpusProductProps {
  return {
    title: v.title,
    text: richText(v.text, ctx),
    features: (v.features ?? []).map((f) => ({ icon: icon(f.icon), label: f.label })),
    cta: link(v.cta, ctx),
    // the thumbnail's screen-reader name is the photo's alt text, not a second field
    slides: v.slides.map((s) => ({ media: media(s.media, ctx, { sizes: "(min-width: 1024px) 50vw, 100vw" }), label: s.media.alt ?? "" })),
    active: 0,
  };
}
