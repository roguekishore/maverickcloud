// The stats adapter as template v2 would ship it: same component, new stored shape.
import { AnchorageStats, type AnchorageStatsProps } from "@foundry/anchorage-stats";
import type { AdapterContext } from "../../lib/context";
import type { Item } from "../../lib/values";

export interface Values {
  title: string;
  stats: Item<{ number: number; prefix?: string; suffix?: string; label: string }>[];
}

export const component = AnchorageStats;

export function adapt(v: Values, _ctx: AdapterContext): AnchorageStatsProps {
  return {
    title: v.title,
    stats: v.stats.map((s) => ({ value: `${s.prefix ?? ""}${s.number.toLocaleString("en-IN")}${s.suffix ?? ""}`, label: s.label })),
    glow: true,
  };
}
