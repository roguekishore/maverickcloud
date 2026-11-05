// The shape of fields.json (PROPOSED v1): what a template declares as editable.

export const FIELD_TYPES = [
  "text",
  "longtext",
  "richline",
  "richtext",
  "link",
  "media",
  "icon",
  "number",
  "toggle",
  "choice",
  "color",
  "phone",
  "email",
  "date",
  "hours",
  "address",
  "group",
  "list",
] as const;
export type FieldType = (typeof FIELD_TYPES)[number];

export type Mark = "strong" | "em" | "link";

export interface FieldDef {
  type: FieldType;
  label?: string;
  help?: string;
  required?: boolean;
  /** text types: characters · number: value · list: items */
  max?: number;
  min?: number;
  /** number */
  integer?: boolean;
  /** richline / richtext: the formatting the owner may use (default: all) */
  marks?: Mark[];
  /** link: whether it carries visible text (default "required") */
  linkText?: "required" | "optional" | "none";
  /** media: which kinds the slot takes (default ["image"]) */
  accept?: ("image" | "video")[];
  /** choice */
  options?: { value: string; label: string }[];
  /** group, list */
  fields?: Fields;
  /** list whose items are one of several kinds; each item stores its `kind` */
  kinds?: Record<string, { label: string; fields: Fields }>;
}

export type Fields = Record<string, FieldDef>;

export interface SectionDef {
  schema: 1;
  label: string;
  /** the component this section renders with (a SITE-FOUNDRY item in this test) */
  block: string;
  /** business details the section shows, edited on the Business screen, not in the section */
  uses?: string[];
  variants?: { value: string; label: string }[];
  fields: Fields;
}

export interface TemplateDef {
  schema: 1;
  id: string;
  version: number;
  theme: Fields;
  shared: Fields;
  sections: Record<string, SectionDef>;
}
