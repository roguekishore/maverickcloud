import { NekoLocations, type NekoLocationsProps } from "@foundry/neko-locations";
import type { AdapterContext } from "../../lib/context";
import { addressLine, media } from "../../lib/render";
import type { Address, Item, Link, Media } from "../../lib/values";

export interface Values {
  label?: string;
  title: string;
  locations: Item<{ city: string; name: string; address: Address; map?: Link; media?: Media }>[];
}

export const component = NekoLocations;

export function adapt(v: Values, ctx: AdapterContext): NekoLocationsProps {
  return {
    label: v.label,
    title: v.title,
    locations: v.locations.map((l) => ({
      city: l.city,
      name: l.name,
      address: addressLine(l.address),
      href: l.map ? ctx.href(l.map.href) : undefined,
      media: media(l.media, ctx, { sizes: "(min-width: 768px) 33vw, 85vw" }),
    })),
    prevLabel: "Previous",
    nextLabel: "Next",
  };
}
