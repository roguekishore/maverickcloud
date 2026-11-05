import { StoreyarchitectureTestimonial, type StoreyarchitectureTestimonialProps } from "@foundry/storeyarchitecture-testimonial";
import type { AdapterContext } from "../../lib/context";
import { media } from "../../lib/render";
import type { Item, Media } from "../../lib/values";

export interface Values {
  slides: Item<{ quote: string; name: string; company?: string; media?: Media; thumb?: Media }>[];
  paragraphs?: Item<{ text: string }>[];
  interval?: number;
}

export const component = StoreyarchitectureTestimonial;

export function adapt(v: Values, ctx: AdapterContext): StoreyarchitectureTestimonialProps {
  return {
    slides: v.slides.map((s) => ({
      quote: s.quote,
      name: s.name,
      company: s.company ?? "",
      media: media(s.media, ctx, { sizes: "(min-width: 1024px) 40vw, 100vw" }),
      thumb: media(s.thumb, ctx, { sizes: "64px" }),
    })),
    paragraphs: (v.paragraphs ?? []).map((p) => p.text),
    slideLabel: "Testimonial",
    interval: v.interval ? v.interval * 1000 : undefined,
  };
}
