import { AnchorageStats, type AnchorageStatsProps } from "@foundry/anchorage-stats";
import type { AdapterContext } from "../../lib/context";
import type { Item } from "../../lib/values";

export interface Values {
  title: string;
  stats: Item<{ value: string; label: string }>[];
}

export const component = AnchorageStats;

export function adapt(v: Values, _ctx: AdapterContext): AnchorageStatsProps {
  return { title: v.title, stats: v.stats.map((s) => ({ value: s.value, label: s.label })), glow: true };
}
