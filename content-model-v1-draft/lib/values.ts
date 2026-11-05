// Stored value shapes of content model v1 (PROPOSED). One per field type; field-types.md has the
// rules. These are what the CMS keeps in memory, the API stores and the build reads. They are
// never component props: each section's adapter turns them into props.

export type Id = string;

/** A run of inline text. A plain string is unformatted; "\n" inside it is a line break. */
export type Run = string | { text: string; strong?: boolean; em?: boolean; href?: string };
/** richline: one line of inline runs (headings with an emphasised word, a consent line). */
export type RichLine = Run[];
/** richtext: paragraphs of inline runs. Later block kinds (lists) are new keys, added beside "p". */
export type RichText = { p: Run[] }[];

/**
 * link: href forms are https:, http:, mailto:, tel:, page:<pageId>[#<sectionId>], #<sectionId>,
 * and action:call | action:whatsapp | action:email | action:directions (resolved from `business`).
 */
export interface Link {
  href: string;
  label?: string;
}

/** media: an id from the site's media library; kind, size and poster come from the library. */
export interface Media {
  id: string;
  alt?: string;
}

/** icon: "<set>:<name>", e.g. "lucide:phone". */
export type Icon = string;

export type Day = "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";
export interface HoursSlot {
  id: Id;
  days: Day[];
  /** "HH:MM", 24-hour */
  open: string;
  /** "HH:MM", later than open; "24:00" for midnight */
  close: string;
}
export interface Hours {
  slots: HoursSlot[];
  note?: string;
}

export interface Address {
  line1: string;
  line2?: string;
  area?: string;
  city: string;
  state?: string;
  postcode?: string;
  /** ISO 3166-1 alpha-2, e.g. "IN" */
  country: string;
  geo?: { lat: number; lng: number };
}

/** Every list item is an object with a stable id, so items can gain fields later. */
export type Item<T> = { id: Id } & T;

/** Fixed by the model (same on every site, every template): the business's own details. */
export interface Business {
  name: string;
  tagline?: string;
  logo?: Media;
  phone?: string;
  whatsapp?: string;
  email?: string;
  address?: Address;
  map?: Link;
  hours?: Hours;
  social?: Item<{ network: string; link: Link }>[];
}

export interface Section<V = Record<string, unknown>> {
  id: Id;
  /** the template's section type */
  type: string;
  variant?: string;
  hidden?: boolean;
  values: V;
}

export interface Page {
  id: Id;
  path: string;
  title: string;
  description?: string;
  sections: Section[];
}

export interface ContentDocument {
  /** content model version; bumped only with a migration */
  schema: number;
  /** "<template>@<version>" */
  template: string;
  locale: string;
  theme: Record<string, unknown>;
  business: Business;
  shared: Record<string, unknown>;
  /** sections on every page: header before, footer after */
  layout: { before: Section[]; after: Section[] };
  pages: Page[];
}
