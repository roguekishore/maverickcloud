import { FunctionhealthPress, type FunctionhealthPressProps, type FunctionhealthPressTile } from "@foundry/functionhealth-press";
import type { AdapterContext } from "../../lib/context";
import { media, parts } from "../../lib/render";
import type { Item, Media, RichLine } from "../../lib/values";

type Tile = Item<{ kind: "award"; name: string; detail?: string }> | Item<{ kind: "quote"; quote: string; name: string; media?: Media }>;

export interface Values {
  title: RichLine;
  text?: string;
  /** a list of columns, each a list of tiles of two kinds: the block's Tile[][] */
  columns: Item<{ tiles: Tile[] }>[];
}

export const component = FunctionhealthPress;

export function adapt(v: Values, ctx: AdapterContext): FunctionhealthPressProps {
  const tile = (t: Tile): FunctionhealthPressTile =>
    t.kind === "award"
      ? { kind: "award", name: t.name, detail: t.detail }
      : { kind: "quote", quote: t.quote, name: t.name, media: media(t.media, ctx, { sizes: "(min-width: 1024px) 25vw, 50vw" }) };
  return {
    title: parts(v.title, (text) => ({ accent: text })),
    text: v.text,
    columns: v.columns.map((c) => c.tiles.map(tile)),
  };
}
