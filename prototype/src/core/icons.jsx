import React from 'react';
import { SPEC } from './iconspec.js';

// 1's glyphs (Main / Focus / Collections / Design) added to 3's set.
Object.assign(SPEC, {
  wand: ['M5 19L15 9', 'M13 7l4 4', 'M18 3v4', 'M16 5h4', 'M7 4v2', 'M6 5h2'],
  keyboard: ['M3 6h18v12H3z', 'M7 10h.01', 'M11 10h.01', 'M15 10h.01', 'M7 14h10'],
  focus: ['M4 9V5a1 1 0 0 1 1-1h4', 'M15 4h4a1 1 0 0 1 1 1v4', 'M20 15v4a1 1 0 0 1-1 1h-4', 'M9 20H5a1 1 0 0 1-1-1v-4'],
  blocks: ['M12 3l9 5-9 5-9-5z', 'M3 13l9 5 9-5'],
  grid: ['M4 4h7v7H4z', 'M13 4h7v7h-7z', 'M4 13h7v7H4z', 'M13 13h7v7h-7z'],
  whatsapp: ['M20.5 12a8.5 8.5 0 0 1-12.4 7.6L3.5 20.5l1-4.4A8.5 8.5 0 1 1 20.5 12z'],
  call: ['M6.5 3.5h3l1.5 4.5-2 1.3a11 11 0 0 0 5.7 5.7l1.3-2 4.5 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7a2 2 0 0 1 2-2.2z'],
  video: ['r3 6 13 12 2', 'M16 10l5-3v10l-5-3'],
  tag: ['M3 12V4h8l10 10-8 8z', 'M7.5 7.5h.01'],
  quote: ['M5 18v-5a5 5 0 0 1 4-5', 'M5 13h4v5H5', 'M14 18v-5a5 5 0 0 1 4-5', 'M14 13h4v5h-4'],
  listOl: ['M10 6h10', 'M10 12h10', 'M10 18h10', 'M4 5l1.5-1v5', 'M4 14.5a1.5 1.5 0 0 1 3 .2c0 1.3-3 2.3-3 3.8h3'],
  clear: ['M6 5h12', 'M12 5l-4 14', 'M4 20l16-16'],
  panel: ['r3 4 18 16 2', 'M15 4v16'],
  sidebar: ['r3 4 18 16 2', 'M9 4v16'],
  publish: ['M12 15V4', 'M7.5 8.5L12 4l4.5 4.5', 'M4 15v4h16v-4'],
  pages: ['M6 3h8l4 4v14H6z', 'M14 3v4h4'],
  dbs: ['M4 6c0-1.66 3.58-3 8-3s8 1.34 8 3-3.58 3-8 3-8-1.34-8-3z', 'M4 6v12c0 1.66 3.58 3 8 3s8-1.34 8-3V6', 'M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3'],
  paint: ['M12 3a9 9 0 0 0 0 18c1.1 0 1.6-.7 1.6-1.5 0-1.1-.9-1.4-.9-2.4 0-.9.7-1.6 1.8-1.6H17a4 4 0 0 0 4-4C21 6.8 17 3 12 3z', 'M7.5 11.5h.01', 'M10 7.5h.01', 'M14.5 7.5h.01'],
  heading: ['M6 4v16', 'M18 4v16', 'M6 12h12'],
  filter: ['M4 5h16l-6 8v6l-4-2v-4z'],
  user: ['c12 8 4', 'M4 21a8 8 0 0 1 16 0'],
  restore: ['M9 14L4 9l5-5', 'M4 9h10.5a5.5 5.5 0 0 1 0 11H11']
});

const CACHE = {};
function draw(spec) {
  return spec.map((s, i) => {
    const t = s[0];
    if (t === 'c' || t === 'f') {
      const [x, y, r] = s.slice(1).trim().split(/\s+/).map(Number);
      return <circle key={i} cx={x} cy={y} r={r} fill={t === 'f' ? 'currentColor' : 'none'} stroke={t === 'f' ? 'none' : undefined} />;
    }
    if (t === 'r') {
      const [x, y, w, h, rx] = s.slice(1).trim().split(/\s+/).map(Number);
      return <rect key={i} x={x} y={y} width={w} height={h} rx={rx || 0} />;
    }
    return <path key={i} d={s} />;
  });
}

export function Icon({ name, size = 16, className = '', sw = 1.6, style, d }) {
  const body = d ? <path d={d} /> : CACHE[name] || (CACHE[name] = draw(SPEC[name] || SPEC.dot));
  return (
    <svg className={'ic ' + className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" style={style}>
      {body}
    </svg>
  );
}
export const SITE_ICONS = ['clock', 'shield', 'receipt', 'tooth', 'heart', 'leaf', 'flame', 'cup', 'code', 'mobile', 'sparkle', 'chart', 'layers', 'sun', 'hand', 'camera', 'flower', 'map', 'pin', 'key', 'fileText', 'home', 'star', 'users', 'wifi', 'car', 'ruler', 'rupee', 'calendar', 'check'];
