// The business details are fixed by the model, not by templates: every site has the same
// Business screen, and the link actions (call, WhatsApp, email, directions), JSON-LD and any
// later Google Business sync read them the same way on every template.
import type { Fields } from "./definitions";

export const BUSINESS_FIELDS: Fields = {
  name: { type: "text", label: "Business name", required: true, max: 80 },
  tagline: { type: "text", label: "Tagline", max: 120 },
  logo: { type: "media", label: "Logo", accept: ["image"] },
  phone: { type: "phone", label: "Phone" },
  whatsapp: { type: "phone", label: "WhatsApp number" },
  email: { type: "email", label: "Email" },
  address: { type: "address", label: "Address" },
  map: { type: "link", label: "Google Maps link", linkText: "none" },
  hours: { type: "hours", label: "Opening hours" },
  social: {
    type: "list",
    label: "Social links",
    max: 8,
    fields: {
      network: {
        type: "choice",
        label: "Network",
        required: true,
        options: [
          { value: "instagram", label: "Instagram" },
          { value: "facebook", label: "Facebook" },
          { value: "youtube", label: "YouTube" },
          { value: "x", label: "X" },
          { value: "linkedin", label: "LinkedIn" },
          { value: "google", label: "Google reviews" },
        ],
      },
      link: { type: "link", label: "Profile link", required: true, linkText: "none" },
    },
  },
};
