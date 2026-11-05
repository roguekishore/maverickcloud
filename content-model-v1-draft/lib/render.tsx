// Helpers adapters share: stored values in, props-ready values out (ReactNode, strings, links).
import { Fragment, type ComponentType, type ReactNode } from "react";
import * as Lucide from "lucide-react";
import type { AdapterContext } from "./context";
import type { Address, Day, Hours, Icon, Link, Media, RichLine, RichText, Run } from "./values";

const WIDTHS = [480, 960, 1440, 1920];

/** An <img> or <video> for a media slot; undefined when empty or deleted (the block's placeholder shows). */
export function media(m: Media | undefined, ctx: AdapterContext, opts: { sizes?: string; className?: string } = {}): ReactNode {
  if (!m) return undefined;
  const info = ctx.mediaInfo(m.id);
  if (!info) return undefined;
  const className = opts.className ?? "h-full w-full object-cover";
  if (info.kind === "video") {
    return (
      <video
        className={className}
        src={ctx.mediaUrl(m.id)}
        poster={info.poster ? ctx.mediaUrl(info.poster, 1440) : undefined}
        aria-label={m.alt || undefined}
        autoPlay
        muted
        loop
        playsInline
      />
    );
  }
  if (info.mime === "image/svg+xml") {
    return <img className={className} src={ctx.mediaUrl(m.id)} width={info.width} height={info.height} alt={m.alt ?? ""} />;
  }
  const widths = WIDTHS.filter((w) => w < info.width).concat(info.width);
  return (
    <img
      className={className}
      src={ctx.mediaUrl(m.id, Math.min(info.width, 1440))}
      srcSet={widths.map((w) => `${ctx.mediaUrl(m.id, w)} ${w}w`).join(", ")}
      sizes={opts.sizes ?? "100vw"}
      width={info.width}
      height={info.height}
      alt={m.alt ?? ""}
      loading="lazy"
      decoding="async"
    />
  );
}

const lucide = Lucide as unknown as Record<string, ComponentType<{ className?: string; "aria-hidden"?: boolean }>>;
const pascal = (kebab: string) => kebab.split("-").map((s) => s.charAt(0).toUpperCase() + s.slice(1)).join("");

export function iconExists(value: string): boolean {
  const [set, name] = value.split(":");
  const c = set === "lucide" && name ? lucide[pascal(name)] : undefined;
  return !!c && (typeof c === "object" || typeof c === "function");
}

export function icon(value: Icon | undefined, className = "size-5"): ReactNode {
  if (!value) return undefined;
  const [set, name] = value.split(":");
  const C = set === "lucide" && name ? lucide[pascal(name)] : undefined;
  return C ? <C className={className} aria-hidden /> : undefined;
}

function lines(text: string): ReactNode {
  const parts = text.split("\n");
  return parts.map((p, i) => (
    <Fragment key={i}>
      {i > 0 && <br />}
      {p}
    </Fragment>
  ));
}

function run(r: Run, ctx: AdapterContext, key: number): ReactNode {
  if (typeof r === "string") return <Fragment key={key}>{lines(r)}</Fragment>;
  let n: ReactNode = lines(r.text);
  if (r.em) n = <em>{n}</em>;
  if (r.strong) n = <strong>{n}</strong>;
  if (r.href) n = <a href={ctx.href(r.href)}>{n}</a>;
  return <Fragment key={key}>{n}</Fragment>;
}

export function richLine(runs: RichLine | undefined, ctx: AdapterContext): ReactNode {
  if (!runs?.length) return undefined;
  return <>{runs.map((r, i) => run(r, ctx, i))}</>;
}

export function richText(blocks: RichText | undefined, ctx: AdapterContext): ReactNode {
  if (!blocks?.length) return undefined;
  return (
    <>
      {blocks.map((b, i) => (
        <p key={i}>{b.p.map((r, j) => run(r, ctx, j))}</p>
      ))}
    </>
  );
}

const runText = (r: Run) => (typeof r === "string" ? r : r.text);

/** The words only, for props that take a string. */
export function plain(value: RichLine | RichText | undefined): string {
  if (!value) return "";
  return value.map((x) => (typeof x === "object" && "p" in x ? x.p.map(runText).join("") : runText(x as Run))).join("\n");
}

/** Heading "parts" APIs (accent / italic objects): em runs become `accent(text)`, "\n" its own part. */
export function parts<T>(runs: RichLine | undefined, accent: (text: string) => T): (string | T)[] {
  const out: (string | T)[] = [];
  for (const r of runs ?? []) {
    const text = runText(r);
    const em = typeof r === "object" && r.em;
    text.split("\n").forEach((piece, i) => {
      if (i > 0) out.push("\n");
      if (piece) out.push(em ? accent(piece) : piece);
    });
  }
  return out;
}

export function link(l: Link | undefined, ctx: AdapterContext, fallbackLabel = ""): { label: string; href: string } | undefined {
  if (!l?.href) return undefined;
  return { label: l.label ?? fallbackLabel, href: ctx.href(l.href) };
}

export function addressLine(a: Address | undefined): string {
  if (!a) return "";
  return [a.line1, a.line2, a.area, a.city, a.postcode].filter(Boolean).join(", ");
}

const DAYS: Day[] = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const DAY_LABEL: Record<Day, string> = { mon: "Mon", tue: "Tue", wed: "Wed", thu: "Thu", fri: "Fri", sat: "Sat", sun: "Sun" };

function dayRange(days: Day[]): string {
  const idx = days.map((d) => DAYS.indexOf(d)).sort((a, b) => a - b);
  const contiguous = idx.every((v, i) => i === 0 || v === idx[i - 1] + 1);
  if (contiguous && idx.length > 2) return `${DAY_LABEL[DAYS[idx[0]]]}–${DAY_LABEL[DAYS[idx[idx.length - 1]]]}`;
  return idx.map((i) => DAY_LABEL[DAYS[i]]).join(", ");
}

/** One line per slot, e.g. "Mon–Sat 09:00–20:00". */
export function hoursLines(h: Hours | undefined): string[] {
  return (h?.slots ?? []).map((s) => `${dayRange(s.days)} ${s.open}–${s.close}`);
}

/** "+919000012345" → "+91 90000 12345"; other countries stay as stored. */
export function phoneDisplay(p: string | undefined): string {
  if (!p) return "";
  const m = /^\+91(\d{5})(\d{5})$/.exec(p);
  return m ? `+91 ${m[1]} ${m[2]}` : p;
}
