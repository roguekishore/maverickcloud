import { HalodentalOpusAbout, type HalodentalOpusAboutProps } from "@foundry/halodental-opus-about";
import type { AdapterContext } from "../../lib/context";
import { link, media, richText } from "../../lib/render";
import type { Link, Media, RichText } from "../../lib/values";

export interface Values {
  title: string;
  text: RichText;
  cta?: Link;
  media?: Media;
}

export const component = HalodentalOpusAbout;

export function adapt(v: Values, ctx: AdapterContext): HalodentalOpusAboutProps {
  return {
    title: v.title,
    text: richText(v.text, ctx),
    // an empty button falls back to the template's shared booking link
    cta: link(v.cta ?? (ctx.shared.booking as Link | undefined), ctx),
    media: media(v.media, ctx, { sizes: "(min-width: 1024px) 25vw, 50vw" }),
  };
}
