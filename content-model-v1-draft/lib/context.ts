// What an adapter gets besides its section's values. The CMS preview and the Astro build each
// create one; adapters never read the document directly.
import type { Business, ContentDocument, Page, Section } from "./values";

export interface MediaInfo {
  kind: "image" | "video";
  width: number;
  height: number;
  mime?: string;
  /** media id of a video's poster frame */
  poster?: string;
}

export interface AdapterContext {
  business: Business;
  shared: Record<string, unknown>;
  page: Page;
  section: Section;
  mediaInfo(id: string): MediaInfo | undefined;
  /** CDN address of a media item at a width (the build picks the nearest stored size) */
  mediaUrl(id: string, width?: number): string;
  /** turns page:, action: and # hrefs into real ones */
  href(href: string): string;
  /** where a section's form posts */
  formAction(sectionId: string): string;
  year: number;
}

export interface ContextOptions {
  doc: ContentDocument;
  page: Page;
  section: Section;
  media: Record<string, MediaInfo>;
  mediaBase: string;
  formBase: string;
  year: number;
}

const digits = (phone: string) => phone.replace(/\D/g, "");

export function resolveHref(href: string, doc: ContentDocument, page: Page): string {
  const b = doc.business;
  if (href.startsWith("page:")) {
    const [pageId, anchor] = href.slice(5).split("#");
    const target = doc.pages.find((p) => p.id === pageId);
    if (!target) throw new Error(`unknown page ${pageId}`);
    return anchor ? (target.id === page.id ? `#${anchor}` : `${target.path}#${anchor}`) : target.path;
  }
  if (href.startsWith("action:")) {
    const action = href.slice(7);
    if (action === "call" && b.phone) return `tel:${b.phone}`;
    if (action === "whatsapp" && b.whatsapp) return `https://wa.me/${digits(b.whatsapp)}`;
    if (action === "email" && b.email) return `mailto:${b.email}`;
    if (action === "directions") {
      if (b.map) return b.map.href;
      if (b.address) {
        const a = b.address;
        const q = [a.line1, a.line2, a.area, a.city, a.state, a.postcode].filter(Boolean).join(", ");
        return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
      }
    }
    throw new Error(`${href}: the business detail it needs is empty`);
  }
  return href;
}

export function createContext(o: ContextOptions): AdapterContext {
  return {
    business: o.doc.business,
    shared: o.doc.shared,
    page: o.page,
    section: o.section,
    mediaInfo: (id) => o.media[id],
    mediaUrl: (id, width) => `${o.mediaBase}/${id}${width ? `/${width}` : ""}`,
    href: (href) => resolveHref(href, o.doc, o.page),
    formAction: (sectionId) => `${o.formBase}/${sectionId}`,
    year: o.year,
  };
}
