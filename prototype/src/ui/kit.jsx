import React, { useCallback, useEffect, useLayoutEffect, useRef, useState, forwardRef } from 'react';
import { createPortal } from 'react-dom';
import { Icon } from '../core/icons.jsx';
import { cx } from '../site/site.jsx';
export { cx };

// ---------- layout ----------
const mqPhone = typeof window !== 'undefined' ? window.matchMedia('(max-width: 759px)') : null;
const mqTablet = typeof window !== 'undefined' ? window.matchMedia('(max-width: 1199px)') : null;
export function useLayoutKind() {
  const get = () => (mqPhone && mqPhone.matches ? 'phone' : mqTablet && mqTablet.matches ? 'tablet' : 'desktop');
  const [k, setK] = useState(get);
  useEffect(() => {
    const f = () => setK(get());
    mqPhone.addEventListener('change', f); mqTablet.addEventListener('change', f);
    return () => { mqPhone.removeEventListener('change', f); mqTablet.removeEventListener('change', f); };
  }, []);
  return k;
}
export const isMac = (() => { try { return /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent || ''); } catch (e) { return true; } })();
export const MOD = isMac ? '⌘' : 'Ctrl';

// ---------- buttons ----------
export function Btn({ variant, size, icon, iconRight, children, className, type = 'button', ...p }) {
  return <button type={type} className={cx('btn', variant && 'btn-' + variant, size && 'btn-' + size, className)} {...p}>{icon && <Icon name={icon} size={size === 'sm' ? 14 : 16} />}{children}{iconRight && <Icon name={iconRight} size={14} />}</button>;
}
export function IconBtn({ icon, label, size, active, danger, tip, className, children, ...p }) {
  return <button type="button" className={cx('ibtn', size && 'ibtn-' + size, danger && 'ibtn-danger', className)} aria-label={label} aria-pressed={active == null ? undefined : !!active} data-tip={tip || undefined} {...p}><Icon name={icon} size={size === 'sm' ? 14 : 16} />{children}</button>;
}
export function Seg({ options, value, onChange, label, full, size, className }) {
  return <div className={cx('seg', full && 'seg-full', size && 'seg-' + size, className)} role="group" aria-label={label}>{options.map((o) => (
    <button key={String(o.value)} type="button" aria-pressed={value === o.value} onClick={() => onChange(o.value)} aria-label={o.label ? undefined : o.aria} title={o.title} data-tip={o.tip}>
      {o.icon && <Icon name={o.icon} size={14} />}{o.label}{o.count != null && <span className="seg-n">{o.count}</span>}
    </button>))}</div>;
}
export function Switch({ checked, onChange, label, hint, id, disabled }) {
  return <div className={cx('switch-row', disabled && 'is-disabled')}><label htmlFor={id} className="switch-text"><span>{label}</span>{hint && <span className="hint">{hint}</span>}</label><button id={id} type="button" role="switch" aria-checked={!!checked} disabled={disabled} className="switch" onClick={() => onChange(!checked)} /></div>;
}
export function Badge({ tone, dot, children, className, title }) {
  return <span className={cx('badge', tone && 'badge-' + tone, className)} title={title}>{dot && <span className="dot" />}{children}</span>;
}
export const Kbd = ({ children }) => <kbd className="kbd">{children}</kbd>;
export function Spinner({ size = 14 }) { return <Icon name="refresh" size={size} className="spin" />; }

// ---------- fields ----------
export function Field({ label, htmlFor, hint, error, warn, count, action, children, id, className }) {
  return (
    <div className={cx('field', className)} id={id}>
      {(label || action || count) && <div className="label">{htmlFor ? <label htmlFor={htmlFor}>{label}</label> : <span>{label}</span>}<span className="label-end">{count}{action}</span></div>}
      {children}
      {error && <p className="field-msg err"><Icon name="alertCircle" size={13} />{error}</p>}
      {warn && !error && <p className="field-msg warn"><Icon name="alert" size={13} />{warn}</p>}
      {hint && !error && <p className="hint">{hint}</p>}
    </div>
  );
}
export const Count = ({ n, max }) => <span className={cx('hint count', n > max && 'over')}>{n} / {max}</span>;
export const Input = forwardRef(function Input({ className, prefix, suffix, ...p }, ref) {
  if (prefix || suffix) return <div className={cx('affix', className)}>{prefix && <span className="affix-pre">{prefix}</span>}<input ref={ref} className="bare" {...p} />{suffix && <span className="affix-post">{suffix}</span>}</div>;
  return <input ref={ref} className={cx('input', className)} {...p} />;
});
export const TextArea = forwardRef(function TextArea({ className, ...p }, ref) { return <textarea ref={ref} className={cx('textarea', className)} {...p} />; });
export function Select({ value, onChange, options, className, ...p }) {
  return <div className={cx('select', className)}><select value={value == null ? '' : value} onChange={(e) => onChange(e.target.value)} {...p}>{options.map((o) => <option key={String(o.value)} value={o.value} disabled={o.disabled}>{o.label}</option>)}</select><Icon name="chevUpDown" size={14} /></div>;
}
export function Stepper({ value, onChange, min = 0, max = 99, id, label }) {
  const v = Number(value) || 0;
  return <div className="stepper"><IconBtn icon="minus" size="sm" label={'Fewer ' + (label || '')} disabled={v <= min} onClick={() => onChange(Math.max(min, v - 1))} /><input id={id} className="input" inputMode="numeric" value={v} onChange={(e) => onChange(Math.max(min, Math.min(max, Number(e.target.value.replace(/\D/g, '')) || min)))} /><IconBtn icon="plus" size="sm" label={'More ' + (label || '')} disabled={v >= max} onClick={() => onChange(Math.min(max, v + 1))} /></div>;
}
export function Empty({ icon = 'layers', title, children, action }) {
  return <div className="empty"><span className="empty-ic"><Icon name={icon} size={18} /></span><p className="empty-title">{title}</p>{children && <p className="empty-text">{children}</p>}{action}</div>;
}
export function Banner({ icon = 'info', tone = 'plain', children }) {
  return <div className={cx('banner', 'banner-' + tone)}><Icon name={icon} />{<div className="banner-body">{children}</div>}</div>;
}

// ---------- popovers and menus ----------
export function Popover({ anchor, open, onClose, children, width = 240, placement = 'bottom-start', className }) {
  const ref = useRef(null);
  const [pos, setPos] = useState(null);
  useLayoutEffect(() => {
    if (!open || !anchor) return;
    const place = () => {
      const r = anchor.getBoundingClientRect();
      const el = ref.current;
      const h = el ? el.offsetHeight : 200;
      const w = Math.min(width, window.innerWidth - 16);
      let left = placement.endsWith('end') ? r.right - w : r.left;
      left = Math.max(8, Math.min(left, window.innerWidth - w - 8));
      let top = placement.startsWith('top') ? r.top - h - 6 : r.bottom + 6;
      if (top + h > window.innerHeight - 8 && r.top - h - 6 > 8) top = r.top - h - 6;
      if (top < 8) top = Math.min(r.bottom + 6, window.innerHeight - h - 8);
      setPos({ left, top: Math.max(8, top), width: w });
    };
    place();
    const t = setTimeout(place, 0);
    window.addEventListener('resize', place);
    return () => { clearTimeout(t); window.removeEventListener('resize', place); };
  }, [open, anchor, width, placement]);
  useEffect(() => {
    if (!open) return;
    const down = (e) => { if (ref.current && !ref.current.contains(e.target) && !(anchor && anchor.contains(e.target))) onClose(); };
    const key = (e) => { if (e.key === 'Escape') { e.stopPropagation(); onClose(); if (anchor) anchor.focus(); } };
    window.addEventListener('pointerdown', down, true);
    window.addEventListener('keydown', key, true);
    return () => { window.removeEventListener('pointerdown', down, true); window.removeEventListener('keydown', key, true); };
  }, [open, anchor, onClose]);
  useEffect(() => { if (open && ref.current) { const f = ref.current.querySelector('button:not([disabled]), input, [tabindex="0"]'); if (f) setTimeout(() => f.focus({ preventScroll: true }), 0); } }, [open]);
  if (!open) return null;
  return createPortal(<div ref={ref} className={cx('pop menu', className)} style={pos ? { left: pos.left, top: pos.top, width: pos.width } : { left: -9999, top: 0, width }}>{children}</div>, document.body);
}
export function MenuItems({ items, onClose }) {
  const onKey = (e) => {
    if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
    e.preventDefault();
    const all = [...e.currentTarget.querySelectorAll('button.item:not([disabled])')];
    const i = all.indexOf(document.activeElement);
    const n = all[(i + (e.key === 'ArrowDown' ? 1 : -1) + all.length) % all.length];
    if (n) n.focus();
  };
  return <div role="menu" onKeyDown={onKey}>{items.filter(Boolean).map((it, i) => {
    if (it === '-') return <div key={i} className="sep" />;
    if (it.heading) return <div key={i} className="menu-head">{it.heading}</div>;
    return <button key={i} type="button" role="menuitem" className={cx('item', it.danger && 'item-danger')} data-active={it.on ? 'true' : undefined} disabled={it.disabled} title={it.title}
      onClick={() => { onClose && onClose(); it.onClick && it.onClick(); }}>
      {it.icon ? <Icon name={it.icon} /> : it.on !== undefined ? <span className="item-check">{it.on && <Icon name="check" />}</span> : null}
      <span className="item-label">{it.label}{it.sub && <span className="hint item-sub">{it.sub}</span>}</span>{it.hint && <span className="item-hint">{it.hint}</span>}
    </button>;
  })}</div>;
}
export function MenuButton({ icon = 'dots', label = 'More', items, size = 'sm', children, width = 230, placement = 'bottom-end', className, btnClass }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const close = useCallback(() => setOpen(false), []);
  return (
    <>
      {children
        ? <button ref={ref} type="button" className={btnClass} aria-haspopup="menu" aria-expanded={open} onClick={(e) => { e.stopPropagation(); setOpen((o) => !o); }}>{children}</button>
        : <button ref={ref} type="button" className={cx('ibtn', size && 'ibtn-' + size, className)} aria-label={label} aria-haspopup="menu" aria-expanded={open} onClick={(e) => { e.stopPropagation(); setOpen((o) => !o); }}><Icon name={icon} size={size === 'sm' ? 14 : 16} /></button>}
      <Popover anchor={ref.current} open={open} onClose={close} width={width} placement={placement}><MenuItems items={typeof items === 'function' ? items() : items} onClose={close} /></Popover>
    </>
  );
}

// ---------- dialogs: centred on desktop, bottom sheets on phones (1's .sheet) ----------
let zTop = 200;
export function Dialog({ onClose, title, subtitle, children, footer, size = 'md', headExtra, bodyClass, className, align, noHead, label, phone }) {
  const [z] = useState(() => ++zTop);
  const panel = useRef(null);
  useEffect(() => {
    const prev = document.activeElement;
    const f = (e) => {
      if (e.key === 'Escape') { e.stopPropagation(); onClose && onClose(); }
      if (e.key === 'Tab' && panel.current) {
        const all = [...panel.current.querySelectorAll('button:not([disabled]), input:not([disabled]), textarea, select, a[href], [tabindex="0"], [contenteditable="true"]')].filter((x) => x.offsetParent !== null);
        if (!all.length) return;
        const first = all[0], last = all[all.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener('keydown', f, true);
    setTimeout(() => {
      if (!panel.current || panel.current.contains(document.activeElement)) return;
      const a = panel.current.querySelector('[data-autofocus]') || panel.current.querySelector('.dlg-body input, .dlg-body textarea, .dlg-body button, .dlg-foot .btn-primary') || panel.current;
      try { a.focus({ preventScroll: true }); } catch (x) { /* no-op */ }
    }, 30);
    return () => { window.removeEventListener('keydown', f, true); if (prev && prev.focus) try { prev.focus({ preventScroll: true }); } catch (x) { /* no-op */ } };
  }, []);
  return createPortal(
    <div className={cx('ov', phone ? 'ov-sheet' : 'ov-dialog', align === 'top' && 'ov-top', className)} style={{ zIndex: z }}>
      <button type="button" className="scrim" aria-label="Close" tabIndex={-1} onClick={onClose} />
      <div ref={panel} className={cx(phone ? 'sheet dlg-sheet' : 'modal', 'size-' + size)} role="dialog" aria-modal="true" aria-label={label || (typeof title === 'string' ? title : undefined)} tabIndex={-1}>
        {phone && <button type="button" className="grab" aria-label="Close" onClick={onClose} />}
        {!noHead && <div className="dlg-head"><div className="dlg-titles"><h2 className="dlg-title">{title}</h2>{subtitle && <p className="hint">{subtitle}</p>}</div>{headExtra}<IconBtn icon="x" label="Close" onClick={onClose} /></div>}
        <div className={cx('dlg-body scroll', bodyClass)}>{children}</div>
        {footer && <div className="dlg-foot">{footer}</div>}
      </div>
    </div>, document.body);
}

// A bottom sheet docked over the canvas on phones (1's Main mobile sheets).
export function Sheet({ title, sub, onClose, children, actions, height, className, head }) {
  return (
    <>
      <button type="button" className="scrim scrim-light" aria-label="Close panel" onClick={onClose} />
      <section className={cx('sheet dock', className)} style={height ? { maxHeight: height } : undefined} aria-label={typeof title === 'string' ? title : undefined}>
        <button type="button" className="grab" aria-label="Close panel" onClick={onClose} />
        {head || <div className="sheet-head"><div className="sheet-titles"><span className="sheet-title">{title}</span>{sub && <span className="hint">{sub}</span>}</div>{actions}<IconBtn icon="x" label="Close" onClick={onClose} /></div>}
        <div className="sheet-body scroll">{children}</div>
      </section>
    </>
  );
}

// ---------- toasts (1's dark pill, 3's stacking and actions) ----------
let pushToast = null;
let tid = 0;
export function toast(text, opts = {}) {
  if (!pushToast) return;
  const id = ++tid;
  pushToast((t) => [...t.slice(-2), { id, text, ...opts }]);
  setTimeout(() => pushToast && pushToast((t) => t.filter((x) => x.id !== id)), opts.duration || 4200);
}
export function Toaster({ bottom }) {
  const [items, setItems] = useState([]);
  useEffect(() => { pushToast = setItems; return () => { pushToast = null; }; }, []);
  return <div className="toasts" style={bottom ? { bottom } : undefined} aria-live="polite">{items.map((t) => (
    <div key={t.id} className={cx('toast', t.tone && 'toast-' + t.tone)} role="status">
      {t.icon && <Icon name={t.icon} size={15} />}<span>{t.text}</span>
      {t.action && <button type="button" onClick={() => { t.action.onClick(); setItems((x) => x.filter((y) => y.id !== t.id)); }}>{t.action.label}</button>}
      <button type="button" className="toast-x" aria-label="Dismiss" onClick={() => setItems((x) => x.filter((y) => y.id !== t.id))}><Icon name="x" size={13} /></button>
    </div>))}</div>;
}

// ---------- drag to reorder (3's pointer list, works with touch) ----------
export function moveBlock(arr, from, to, len = 1) { const a = arr.slice(); const b = a.splice(from, len); a.splice(to, 0, ...b); return a; }
export function DragList({ items, getKey, renderItem, onMove, nest = false, className }) {
  const ref = useRef(null);
  const dref = useRef(null);
  const [drag, setDrag] = useState(null);
  const start = (e, index) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    e.preventDefault(); e.stopPropagation();
    const rows = [...ref.current.children].filter((c) => c.hasAttribute('data-drow'));
    const rects = rows.map((r) => r.getBoundingClientRect());
    let len = 1;
    if (nest && !items[index].depth) while (index + len < items.length && items[index + len].depth > 0) len++;
    const st = { from: index, len, x0: e.clientX, y0: e.clientY, rects, dx: 0, dy: 0, target: index, depth: items[index].depth || 0, startDepth: items[index].depth || 0 };
    dref.current = st; setDrag(st);
    const move = (ev) => {
      const d = dref.current; if (!d) return;
      const dy = ev.clientY - d.y0, dx = ev.clientX - d.x0;
      const center = (d.rects[d.from].top + d.rects[d.from + d.len - 1].bottom) / 2 + dy;
      let k = 0;
      d.rects.forEach((r, i) => { if ((i < d.from || i >= d.from + d.len) && (r.top + r.bottom) / 2 < center) k++; });
      let depth = d.startDepth;
      if (nest) { depth = Math.max(0, Math.min(1, d.startDepth + Math.round(dx / 28))); if (k === 0 || d.len > 1) depth = 0; }
      const nd = { ...d, dx, dy, target: k, depth };
      dref.current = nd; setDrag(nd);
    };
    const up = () => {
      window.removeEventListener('pointermove', move); window.removeEventListener('pointerup', up); window.removeEventListener('pointercancel', up);
      const d = dref.current; dref.current = null; setDrag(null);
      if (d && (d.target !== d.from || d.depth !== d.startDepth)) onMove(d.from, d.target, d.depth, d.len);
    };
    window.addEventListener('pointermove', move); window.addEventListener('pointerup', up); window.addEventListener('pointercancel', up);
  };
  const shiftFor = (i) => {
    if (!drag) return 0;
    const { from, len, target, rects } = drag;
    if (i >= from && i < from + len) return drag.dy;
    const H = rects[from + len - 1].bottom - rects[from].top;
    const j = i < from ? i : i - len;
    if (i < from && j >= target) return H;
    if (i >= from + len && j < target) return -H;
    return 0;
  };
  return <div ref={ref} className={cx('dlist', drag && 'is-dragging', className)}>{items.map((it, i) => {
    const inBlock = drag && i >= drag.from && i < drag.from + drag.len;
    const depth = inBlock && i === drag.from ? drag.depth : it.depth || 0;
    return <div key={getKey(it)} data-drow="" className={cx('drow', inBlock && 'is-lifted')} style={{ transform: drag ? `translateY(${shiftFor(i)}px)` : undefined, transition: inBlock ? 'none' : undefined, zIndex: inBlock ? 5 : undefined }}>
      {renderItem(it, i, { handle: { onPointerDown: (e) => start(e, i), className: 'grip-h', 'aria-hidden': 'true' }, depth, dragging: !!inBlock })}
    </div>;
  })}</div>;
}

export function copyText(t) {
  try {
    navigator.clipboard.writeText(t).then(() => toast('Copied ' + t, { icon: 'check' })).catch(() => toast(t));
  } catch (e) { toast(t); }
}
