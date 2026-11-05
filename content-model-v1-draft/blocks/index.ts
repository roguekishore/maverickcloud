// Block name → its adapter module. The registry is loosely typed on purpose: each adapter is
// type-checked in its own file against its component's real props.
import type { ComponentType } from "react";
import type { AdapterContext } from "../lib/context";
import * as anchorageStats from "./anchorage-stats/adapter";
import * as cursorLogos from "./cursor-logos/adapter";
import * as functionhealthHeading from "./functionhealth-heading/adapter";
import * as functionhealthPress from "./functionhealth-press/adapter";
import * as halodentalOpusAbout from "./halodental-opus-about/adapter";
import * as halodentalOpusFooter from "./halodental-opus-footer/adapter";
import * as halodentalOpusHeader from "./halodental-opus-header/adapter";
import * as halodentalOpusHero from "./halodental-opus-hero/adapter";
import * as halodentalOpusNews from "./halodental-opus-news/adapter";
import * as halodentalOpusProduct from "./halodental-opus-product/adapter";
import * as nekoLocations from "./neko-locations/adapter";
import * as plumeformFaq from "./plumeform-faq/adapter";
import * as plumeformPricing from "./plumeform-pricing/adapter";
import * as storeyarchitectureContact from "./storeyarchitecture-contact/adapter";
import * as storeyarchitectureTestimonial from "./storeyarchitecture-testimonial/adapter";

export interface SectionModule {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: ComponentType<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  adapt(values: any, ctx: AdapterContext): object;
}

export const adapters: Record<string, SectionModule> = {
  "anchorage-stats": anchorageStats,
  "cursor-logos": cursorLogos,
  "functionhealth-heading": functionhealthHeading,
  "functionhealth-press": functionhealthPress,
  "halodental-opus-about": halodentalOpusAbout,
  "halodental-opus-footer": halodentalOpusFooter,
  "halodental-opus-header": halodentalOpusHeader,
  "halodental-opus-hero": halodentalOpusHero,
  "halodental-opus-news": halodentalOpusNews,
  "halodental-opus-product": halodentalOpusProduct,
  "neko-locations": nekoLocations,
  "plumeform-faq": plumeformFaq,
  "plumeform-pricing": plumeformPricing,
  "storeyarchitecture-contact": storeyarchitectureContact,
  "storeyarchitecture-testimonial": storeyarchitectureTestimonial,
};
