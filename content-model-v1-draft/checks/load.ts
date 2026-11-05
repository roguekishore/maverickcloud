// Loads the test template: template.json names a block folder per section type, and each
// block's fields.json is that section's definition. (A real template package inlines them.)
import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { MediaInfo } from "../lib/context";
import { iconExists } from "../lib/render";
import type { ContentDocument } from "../lib/values";
import type { SectionDef, TemplateDef } from "../validator/definitions";
import type { ValidateOptions } from "../validator/validate";
import media from "./media.json";

export const root = process.env.CHECK_ROOT ?? process.cwd();
export const read = <T>(...p: string[]): T => JSON.parse(readFileSync(join(root, ...p), "utf8")) as T;

type TemplateFile = Omit<TemplateDef, "sections"> & { sections: Record<string, string> };

export function loadTemplate(file = "template.json"): TemplateDef {
  const t = read<TemplateFile>(file);
  const sections = Object.fromEntries(Object.entries(t.sections).map(([type, block]) => [type, read<SectionDef>("blocks", block, "fields.json")]));
  return { ...t, sections };
}

export const loadSite = () => read<ContentDocument>("site.sample.json");

export const mediaLibrary = media as Record<string, MediaInfo>;
export const validateOptions: ValidateOptions = { media: mediaLibrary, iconExists };
