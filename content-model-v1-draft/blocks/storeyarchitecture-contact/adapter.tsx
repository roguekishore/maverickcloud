import { StoreyarchitectureContact, type StoreyarchitectureContactProps } from "@foundry/storeyarchitecture-contact";
import type { AdapterContext } from "../../lib/context";
import { addressLine, hoursLines, phoneDisplay } from "../../lib/render";
import type { Item } from "../../lib/values";

export interface Values {
  heading: string;
  intro?: string;
  formTitle?: string;
  formMark?: string;
  fields: Item<{ label: string; input: "text" | "email" | "phone" | "message" | "choice"; options?: Item<{ text: string }>[] }>[];
  submitLabel: string;
}

export const component = StoreyarchitectureContact;

export function adapt(v: Values, ctx: AdapterContext): StoreyarchitectureContactProps {
  const b = ctx.business;
  return {
    heading: v.heading,
    intro: v.intro ?? "",
    formTitle: (v.formTitle ?? "").split("\n").filter(Boolean),
    formMark: v.formMark ?? "",
    brand: b.name,
    fields: v.fields.map((f) => ({
      label: f.label,
      // the item's stable id names the field, so renaming a label never splits past submissions
      name: f.id,
      // the block has no phone kind; a phone field falls back to plain text
      kind: f.input === "phone" ? "text" : f.input,
      options: f.options?.map((o) => o.text),
    })),
    submitLabel: v.submitLabel,
    // the paper's foot shows the business details, edited once on the Business screen
    footer: [phoneDisplay(b.phone), b.email ?? "", addressLine(b.address), ...hoursLines(b.hours)].filter(Boolean),
    action: ctx.formAction(ctx.section.id),
  };
}
