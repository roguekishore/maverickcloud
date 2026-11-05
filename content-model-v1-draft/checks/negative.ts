// Broken copies of the sample site, each of which the validator must reject with the expected
// message. Without these, a validator that accepts everything would also "pass".
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ContentDocument } from "../lib/values";

const sec = (d: any, id: string): any => {
  const s = [...d.layout.before, ...d.layout.after, ...d.pages.flatMap((p: any) => p.sections)].find((x: any) => x.id === id);
  if (!s) throw new Error(`sample site has no section ${id}`);
  return s.values;
};

export const negativeCases: { name: string; expect: string; mutate(d: ContentDocument): void }[] = [
  { name: "unknown field in a section", expect: "not an editable field", mutate: (d) => void (sec(d, "s_hero").subtitle = "x") },
  { name: "text longer than its max", expect: "longer than 60", mutate: (d) => void (sec(d, "s_hero").tagline = "x".repeat(61)) },
  { name: "line break in a one-line field", expect: "must be one line", mutate: (d) => void (sec(d, "s_hero").tagline = "a\nb") },
  { name: "missing required field", expect: "required", mutate: (d) => void delete sec(d, "s_hero").tagline },
  { name: "null instead of leaving the field out", expect: "instead of null", mutate: (d) => void (sec(d, "s_hero").video = null) },
  { name: "link to a page that doesn't exist", expect: "doesn't exist", mutate: (d) => void (sec(d, "s_header").cta.href = "page:p_nope") },
  { name: "link to a section not on that page", expect: "not on that page", mutate: (d) => void (sec(d, "s_header").cta.href = "page:p_home#s_faq") },
  { name: "javascript: link", expect: "isn't allowed", mutate: (d) => void (sec(d, "s_footer").legal[0].link.href = "javascript:alert(1)") },
  { name: "link with no text where text is required", expect: "needs link text", mutate: (d) => void delete sec(d, "s_header").cta.label },
  { name: "action:whatsapp with no WhatsApp number", expect: "needs business.whatsapp", mutate: (d) => void delete d.business.whatsapp },
  { name: "list item without an id", expect: "stable id", mutate: (d) => void delete sec(d, "s_header").links[0].id },
  { name: "the same id twice", expect: "already used", mutate: (d) => void (sec(d, "s_header").links[1].id = "s_hero") },
  { name: "too many list items", expect: "at most 6", mutate: (d) => void sec(d, "s_header").links.push(...[1, 2, 3].map((n) => ({ id: `i_extra${n}`, link: { label: "x", href: "page:p_home" } }))) },
  { name: "unknown icon", expect: "unknown icon", mutate: (d) => void (sec(d, "s_header").tiles[0].icon = "lucide:not-an-icon") },
  { name: "video in an image-only slot", expect: "a video isn't allowed", mutate: (d) => void (sec(d, "s_about").media.id = "m_hero_video") },
  { name: "media that isn't in the site's library", expect: "no media", mutate: (d) => void (sec(d, "s_logos").logos[0].logo.id = "m_missing") },
  { name: "bold where only emphasis is allowed", expect: "bold isn't allowed", mutate: (d) => void (sec(d, "s_heading_home").title[1].strong = true) },
  { name: "wrong kind in a list of kinds", expect: "must be one of", mutate: (d) => void (sec(d, "s_press").columns[0].tiles[0].kind = "video") },
  { name: "choice outside its options", expect: "not one of the options", mutate: (d) => void (d.theme.font = "comic-sans") },
  { name: "phone not stored as +country digits", expect: "+<country>", mutate: (d) => void (d.business.phone = "98430 12345") },
  { name: "opening hours closing before opening", expect: "closes before it opens", mutate: (d) => void (d.business.hours!.slots[0].close = "08:00") },
  { name: "Indian PIN code with 5 digits", expect: "6 digits", mutate: (d) => void (d.business.address!.postcode = "64101") },
  { name: "unknown section type", expect: "no section", mutate: (d) => void (d.pages[0].sections[0].type = "carousel-3d") },
  { name: "unknown top-level key (envelope)", expect: "additional properties", mutate: (d) => void ((d as any).extra = 1) },
  { name: "two pages at the same path", expect: "two pages", mutate: (d) => void (d.pages[1].path = "/") },
];
