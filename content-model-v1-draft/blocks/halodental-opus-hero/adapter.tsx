import { HalodentalOpusHero, type HalodentalOpusHeroProps } from "@foundry/halodental-opus-hero";
import type { AdapterContext } from "../../lib/context";
import { link, media } from "../../lib/render";
import type { Link, Media } from "../../lib/values";

export interface Values {
  wordmark?: string;
  tagline: string;
  video?: Link;
  media?: Media;
}

export const component = HalodentalOpusHero;

export function adapt(v: Values, ctx: AdapterContext): HalodentalOpusHeroProps {
  return {
    wordmark: v.wordmark ?? ctx.business.name,
    tagline: v.tagline,
    video: link(v.video, ctx),
    media: media(v.media, ctx, { sizes: "100vw" }),
  };
}
