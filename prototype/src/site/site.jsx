import React, { createContext, useContext, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { Icon } from '../core/icons.jsx';
import { BLOCKS, blockIcon } from '../core/schema.js';
import { themeVars } from '../core/themes.js';
import { mediaSrc } from '../core/media.js';
import { pageById, resolveLink, listPageFor, blockTitle } from '../core/model.js';
import { htmlText } from '../core/text.js';

export const SiteCtx = createContext(null);
const SecCtx = createContext(null);
const useS = () => useContext(SiteCtx);
export const cx = (...a) => a.filter(Boolean).join(' ');
const getPath = (o, p) => p.reduce((a, k) => (a == null ? a : a[k]), o);
const PLAIN = (() => { try { const e = document.createElement('div'); e.contentEditable = 'plaintext-only'; return e.contentEditable === 'plaintext-only'; } catch (e) { return false; } })();
const initials = (s = '') => s.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join('').toUpperCase();

// Text that becomes editable in place when its section is selected (1 and 2).
function E({ p, as: Tag = 'p', className, ml, ph, style }) {
  const ctx = useS();
  const sec = useContext(SecCtx);
  const path = Array.isArray(p) ? p : [p];
  const val = sec ? getPath(sec.values, path) : '';
  const v = val == null ? '' : String(val);
  if (sec && ctx.inlineId === sec.id && ctx.onInline) {
    return (
      <Tag key={v} className={cx(className, 's-ed')} style={style} data-field={path[0]} data-ph={ph || 'Type here'}
        contentEditable={PLAIN ? 'plaintext-only' : 'true'} suppressContentEditableWarning spellCheck
        role="textbox" aria-label={ph || 'Edit text'} aria-multiline={ml ? 'true' : 'false'}
        onClick={(e) => e.preventDefault()}
        onPaste={(e) => { if (!PLAIN) { e.preventDefault(); document.execCommand('insertText', false, e.clipboardData.getData('text/plain')); } }}
        onKeyDown={(e) => {
          e.stopPropagation();
          if (e.key === 'Enter' && !ml) { e.preventDefault(); e.currentTarget.blur(); }
          if (e.key === 'Escape') { e.currentTarget.innerText = v; e.currentTarget.blur(); }
        }}
        onBlur={(e) => {
          let t = e.currentTarget.innerText.replace(/ /g, ' ');
          if (!ml) t = t.replace(/\s*\n\s*/g, ' ');
          t = t.replace(/\n+$/, '');
          if (t !== v) ctx.onInline(sec.id, path, t);
        }}>{v}</Tag>
    );
  }
  if (!v) return null;
  return <Tag className={className} style={style} data-field={path[0]}>{v}</Tag>;
}

function A({ link, className = '', children, f, style }) {
  const ctx = useS();
  const p = ctx.linkProps(link);
  return <a className={cx(className, p.active && 'on')} href={p.href} onClick={p.onClick} data-field={f} data-broken={p.broken || undefined} style={style} target={p.newTab ? '_blank' : undefined} rel={p.newTab ? 'noreferrer' : undefined}>{children}</a>;
}
function Img({ id, className = '', f, alt }) {
  const ctx = useS();
  const m = ctx.media(id);
  if (!m || !m.src) return <div className={cx('s-img s-img-empty', className)} data-field={f}><Icon name="image" size={28} sw={1.2} /><span>{id ? 'Image removed, pick another' : 'Add an image'}</span></div>;
  return <div className={cx('s-img', className)} data-field={f}>{m.video ? <span className="s-play"><Icon name="play" size={22} /></span> : null}<img src={m.src} alt={alt != null ? alt : m.alt || ''} draggable="false" loading="lazy" /></div>;
}
function Btn({ p, ghost, sm, className }) {
  const ctx = useS();
  const sec = useContext(SecCtx);
  const path = Array.isArray(p) ? p : [p];
  const b = getPath(sec.values, path);
  if (!b || !b.label) return null;
  return <A link={b.link} f={path[0]} className={cx('s-btn', ghost && 'ghost', sm && 'sm', className)}>{ctx.inlineId === sec.id ? <E p={[...path, 'label']} as="span" ph="Button text" /> : b.label}</A>;
}
function Rich({ k, html, className, f }) {
  const sec = useContext(SecCtx);
  const h = html != null ? html : sec && sec.values[k];
  if (!h) return null;
  return <div className={cx('s-rich', className)} data-field={f || k} dangerouslySetInnerHTML={{ __html: h }} />;
}
function Head({ center }) {
  const sec = useContext(SecCtx);
  const v = sec.values;
  const ctx = useS();
  if (!v.eyebrow && !v.title && !v.intro && ctx.inlineId !== sec.id) return null;
  return <div className={cx('s-head', center && 'center')}><E p="eyebrow" className="s-eyebrow" ph="Eyebrow" /><E p="title" as="h2" className="s-h2" ph="Heading" /><E p="intro" className="s-lead" ml ph="Intro" /></div>;
}
const Stars = ({ n = 5 }) => <span className="s-stars" role="img" aria-label={n + ' out of 5'}>{Array.from({ length: 5 }, (_, i) => <Icon key={i} name="star" size={14} className={i < n ? 'on' : ''} />)}</span>;

function navTree(items = []) {
  const out = [];
  items.forEach((it) => { if (it.depth > 0 && out.length) out[out.length - 1].children.push(it); else out.push({ ...it, children: [] }); });
  return out;
}
function Logo({ big }) {
  const ctx = useS();
  const sec = useContext(SecCtx);
  const b = ctx.site.brand || {};
  const show = b.logoShow || 'both';
  const m = b.logoImage ? ctx.media(b.logoImage) : null;
  const name = sec.values.logo || ctx.site.name;
  return (
    <A link={{ kind: 'page', pageId: ctx.homeId }} className={cx('s-logo', big && 'big')} f="logo" style={{ '--s-mark': (b.logoSize || 28) + 'px' }}>
      {show !== 'name' && (m && m.src ? <img className="s-mark-img" src={m.src} alt={show === 'mark' ? name : ''} /> : <span className="s-mark" aria-hidden={show !== 'mark'}>{initials(name)}</span>)}
      {show !== 'mark' && <E p="logo" as="span" ph="Business name" />}
    </A>
  );
}
function NavLinks({ items, className }) {
  return <nav className={className} data-field="nav" aria-label="Menu">{items.map((it) => (
    <div className="s-nav-item" key={it.id}>
      <A link={it.link} className="s-nav-link">{it.label}{it.children.length > 0 && <Icon name="chevDown" size={14} />}</A>
      {it.children.length > 0 && <div className="s-dd">{it.children.map((c) => <A key={c.id} link={c.link}>{c.label}</A>)}</div>}
    </div>))}</nav>;
}
function Burger({ open, set }) {
  return <button type="button" className="s-burger" aria-label="Menu" aria-expanded={open} onClick={(e) => { e.stopPropagation(); set(!open); }}><Icon name={open ? 'x' : 'menu'} size={22} /></button>;
}
function MobileMenu({ items, open }) {
  if (!open) return null;
  return <div className="s-mmenu">{items.map((it) => <div key={it.id}><A link={it.link} className="s-mm-link">{it.label}</A>{it.children.map((c) => <A key={c.id} link={c.link} className="s-mm-link sub">{c.label}</A>)}</div>)}</div>;
}

function HeaderBar({ v }) {
  const ctx = useS();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [ctx.pageId]);
  const items = navTree(ctx.nav('header'));
  return <header className={cx('s-header', v.sticky && 'sticky')}><div className="s-wrap s-header-in"><Logo /><NavLinks items={items} className="s-nav" />{v.showCta && <Btn p="cta" sm className="s-head-cta" />}<Burger open={open} set={setOpen} /></div><MobileMenu items={items} open={open} /></header>;
}
function HeaderCentered({ v }) {
  const ctx = useS();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [ctx.pageId]);
  const items = navTree(ctx.nav('header'));
  return <header className={cx('s-header s-hc', v.sticky && 'sticky')}><E p="topline" className="s-topline" ph="Announcement line" /><div className="s-wrap s-hc-in"><Logo big /><Burger open={open} set={setOpen} /></div><div className="s-wrap"><NavLinks items={items} className="s-hc-nav" /></div><MobileMenu items={items} open={open} /></header>;
}
function HeroText({ v, h1 = 's-h1' }) {
  return <><E p="eyebrow" className="s-eyebrow" ph="Eyebrow" /><E p="title" as="h1" className={h1} ph="Heading" /><Rich k="body" className="s-lead" /><div className="s-btns"><Btn p="primary" /><Btn p="secondary" ghost /></div>{v.note && <p className="s-note" data-field="note"><Stars n={5} /> <E p="note" as="span" /></p>}</>;
}
function HeroSplit({ v }) {
  const layout = v.layout || 'split';
  if (layout === 'behind') {
    return <section className="s-sec s-behind"><div className="s-behind-media"><Img id={v.image} f="image" /></div><div className="s-wrap s-behind-in"><div className="s-behind-box"><HeroText v={v} /></div></div></section>;
  }
  return <section className="s-sec s-hero"><div className={cx('s-wrap s-hero-grid', layout === 'centered' && 'centered', v.reverse && 'rev')}><div className="s-hero-text"><HeroText v={v} /></div><div className="s-hero-media"><Img id={v.image} f="image" /></div></div></section>;
}
function HeroBigType({ v }) {
  return <section className="s-sec s-big"><div className="s-wrap"><E p="eyebrow" className="s-eyebrow" ph="Eyebrow" /><E p="title" as="h1" className="s-mega" ml ph="Heading" /><div className="s-big-row"><Rich k="body" className="s-lead" /><div className="s-btns"><Btn p="button" /></div></div>{v.meta && v.meta.length > 0 && <ul className="s-big-meta" data-field="meta">{v.meta.map((m, i) => <li key={i}><E p={['meta', i, 'text']} as="span" /></li>)}</ul>}</div>{v.showImage && v.image && <div className="s-wrap s-big-img"><Img id={v.image} f="image" /></div>}</section>;
}
function HeroSlides({ v }) {
  const ctx = useS();
  const slides = v.slides || [];
  const [i, setI] = useState(0);
  const n = slides.length;
  useEffect(() => { if (ctx.mode !== 'preview' || n < 2 || v.auto === false) return; const t = setInterval(() => setI((x) => (x + 1) % n), 4800); return () => clearInterval(t); }, [ctx.mode, n, v.auto]);
  const k = Math.min(i, Math.max(0, n - 1));
  const cur = slides[k] || {};
  return <section className="s-sec s-slides" data-field="slides"><div className="s-slides-media">{slides.map((s, j) => <div key={j} className={cx('s-slide', j === k && 'on')}><Img id={s.image} /></div>)}<div className="s-slide-shade" /></div><div className="s-wrap s-slide-text"><h1 className="s-h1">{cur.title}</h1>{cur.caption && <p className="s-lead">{cur.caption}</p>}<div className="s-btns"><Btn p="button" /></div>{n > 1 && <div className="s-dots">{slides.map((_, j) => <button key={j} type="button" aria-label={'Slide ' + (j + 1)} className={j === k ? 'on' : ''} onClick={(e) => { e.stopPropagation(); setI(j); }} />)}</div>}</div></section>;
}
function TextBlock({ v }) {
  const two = v.columns === '2';
  return <section className="s-sec s-text"><div className={cx('s-wrap', two ? 's-text-two' : 's-text-one', v.align === 'center' && 'center')}><div><E p="eyebrow" className="s-eyebrow" ph="Eyebrow" /><E p="title" as="h2" className="s-h2" ph="Heading" /></div><Rich k="body" className="s-body" /></div></section>;
}
function ImageSingle({ v }) {
  const w = v.width || 'wide';
  return <section className={cx('s-sec s-image', 'w-' + w)}><div className={w === 'full' ? '' : 's-wrap'}><figure className="s-figure"><Img id={v.image} f="image" /><E p="caption" as="figcaption" className={cx('s-cap', w === 'full' && 's-wrap')} ph="Add a caption" /></figure></div></section>;
}
function AboutStory({ v }) {
  return <section className="s-sec s-about"><div className={cx('s-wrap s-about-grid', v.imageRight && 'rev')}><div className="s-about-media"><Img id={v.image} f="image" /></div><div className="s-about-text"><E p="eyebrow" className="s-eyebrow" ph="Eyebrow" /><E p="title" as="h2" className="s-h2" ph="Heading" /><Rich k="body" className="s-body" />{v.stats && v.stats.length > 0 && <dl className="s-stats" data-field="stats">{v.stats.map((s, i) => <div key={i}><dt>{s.value}</dt><dd>{s.label}</dd></div>)}</dl>}<div className="s-btns"><Btn p="button" ghost /></div></div></div></section>;
}
function FeaturesGrid({ v }) {
  return <section className="s-sec s-features"><div className="s-wrap"><Head /><div className={cx('s-fgrid', 'cols-' + (v.columns || '3'), v.style || 'cards')} data-field="items">{(v.items || []).map((it, i) => (
    <article className="s-feature" key={i}>{v.showImages && it.image ? <div className="s-f-img"><Img id={it.image} /></div> : it.icon ? <span className="s-f-icon"><Icon name={it.icon} size={22} /></span> : null}
      <E p={['items', i, 'title']} as="h3" className="s-h3" />{it.meta && <p className="s-f-meta">{it.meta}</p>}<E p={['items', i, 'text']} className="s-muted" ml /></article>))}</div></div></section>;
}
function MenuList({ v }) {
  const groups = [];
  (v.items || []).forEach((it) => { const g = it.group || ''; let grp = groups.find((x) => x.name === g); if (!grp) groups.push(grp = { name: g, items: [] }); grp.items.push(it); });
  return <section className="s-sec s-menu"><div className="s-wrap"><Head /><div className="s-menu-groups" data-field="items">{groups.map((g, gi) => <div className="s-menu-group" key={gi}>{g.name && <h3 className="s-menu-gname">{g.name}</h3>}{g.items.map((it, i) => <div className="s-menu-row" key={i}><div className="s-menu-line"><span className="s-menu-name">{it.name}{it.tag && <span className="s-tag">{it.tag}</span>}</span><span className="s-menu-dots" /><span className="s-menu-price">{it.price}</span></div>{it.desc && <p className="s-muted s-small">{it.desc}</p>}</div>)}</div>)}</div><E p="note" className="s-small s-muted s-note-under" /></div></section>;
}
function PricingPlans({ v }) {
  return <section className="s-sec s-plans-sec"><div className="s-wrap"><Head center /><div className="s-plans" data-field="plans">{(v.plans || []).map((p, i) => <article className={cx('s-plan', p.featured && 'featured')} key={i}>{p.featured && <span className="s-plan-flag">{p.flag || 'Most chosen'}</span>}<h3 className="s-plan-name">{p.name}</h3><p className="s-plan-price"><span>{p.price}</span>{p.period && <span className="s-muted"> {p.period}</span>}</p>{p.desc && <p className="s-muted s-small">{p.desc}</p>}<ul className="s-plan-list">{String(p.features || '').split('\n').filter(Boolean).map((f, k) => <li key={k}><Icon name="check" size={16} />{f}</li>)}</ul><Btn p={['plans', i, 'button']} ghost={!p.featured} /></article>)}</div></div></section>;
}
function Carousel({ children }) {
  const ref = useRef(null);
  const go = (d) => (e) => { e.stopPropagation(); const el = ref.current; if (el) el.scrollBy({ left: d * el.clientWidth * 0.8, behavior: 'smooth' }); };
  return <div className="s-car"><div className="s-car-ctl"><button type="button" aria-label="Previous photos" onClick={go(-1)}><Icon name="chevLeft" /></button><button type="button" aria-label="Next photos" onClick={go(1)}><Icon name="chevRight" /></button></div><div className="s-car-track" ref={ref}>{children}</div></div>;
}
function GalleryGrid({ v }) {
  const layout = v.layout || 'grid';
  const items = (v.images || []).map((im, i) => <figure key={i} className="s-gal-item"><div className="s-gal-img"><Img id={im.image} /></div>{v.captions !== false && im.caption && <figcaption>{im.caption}</figcaption>}</figure>);
  return <section className="s-sec s-gallery"><div className="s-wrap"><Head />{layout === 'carousel' ? <Carousel>{items}</Carousel> : <div className={cx('s-gal', layout, 'cols-' + (v.columns || '3'), 'shape-' + (v.shape || 'landscape'))} data-field="images">{items}</div>}</div></section>;
}
function Testimonials({ v }) {
  return <section className="s-sec s-testi"><div className="s-wrap"><Head /><div className="s-tgrid" data-field="items">{(v.items || []).map((t, i) => <figure className="s-tcard" key={i}>{v.showRating && <Stars n={t.rating || 5} />}<blockquote>“<E p={['items', i, 'quote']} as="span" ml />”</blockquote><figcaption>{t.avatar && <span className="s-avatar"><Img id={t.avatar} alt="" /></span>}<span><strong>{t.name}</strong><span className="s-muted s-small">{t.role}</span></span></figcaption></figure>)}</div></div></section>;
}
function TestimonialQuote({ v }) {
  return <section className="s-sec s-quote"><div className="s-wrap s-quote-in"><blockquote className="s-display" data-field="quote">“<E p="quote" as="span" ml />”</blockquote><div className="s-quote-by">{v.avatar && <span className="s-avatar lg"><Img id={v.avatar} f="avatar" alt="" /></span>}<span><E p="name" as="strong" /><E p="role" as="span" className="s-muted" /></span></div></div></section>;
}
function Faq({ v }) {
  const [open, setOpen] = useState(0);
  return <section className="s-sec s-faq"><div className="s-wrap s-faq-grid"><Head /><div className="s-faq-list" data-field="items">{(v.items || []).map((q, i) => <div className={cx('s-qa', open === i && 'open')} key={i}><button type="button" className="s-q" aria-expanded={open === i} onClick={(e) => { e.stopPropagation(); setOpen(open === i ? -1 : i); }}><span>{q.q}</span><Icon name={open === i ? 'minus' : 'plus'} size={18} /></button>{open === i && <div className="s-a"><Rich html={q.a} /></div>}</div>)}</div></div></section>;
}
const visibleItems = (c) => (c ? c.items.filter((it) => it.status === 'live') : []);
function NewsList({ v }) {
  const ctx = useS();
  const c = ctx.collection(v.source || 'blog');
  const items = visibleItems(c).slice(0, Number(v.limit) || 3);
  const svc = v.source === 'services';
  const meta = (it) => (svc ? [it.price, it.duration] : [it.date, it.author]).filter(Boolean).join(' · ');
  return <section className="s-sec s-news"><div className="s-wrap"><div className="s-news-head"><Head /><Btn p="button" ghost sm /></div><div className={cx('s-ngrid', svc && 'svc')} data-field="source">{items.map((it) => <A key={it.id} link={{ kind: 'item', collection: v.source || 'blog', itemId: it.id }} className="s-ncard">{v.showImages !== false && <div className="s-ncard-img"><Img id={it.image} /></div>}{v.showMeta !== false && <p className="s-ncard-meta">{meta(it)}</p>}<h3 className="s-h3">{it.title}</h3><p className="s-muted">{svc ? it.summary : it.excerpt}</p><span className="s-more">{v.linkText || (svc ? 'Learn more' : 'Read')} <Icon name="arrowRight" size={15} /></span></A>)}{items.length === 0 && <p className="s-empty">No published entries yet. Add them in Collections.</p>}</div></div></section>;
}
function EntryDetail({ v }) {
  const ctx = useS();
  const c = ctx.collection(ctx.page && ctx.page.collection ? ctx.page.collection : 'blog');
  const it = ctx.item || (c && c.items[0]);
  if (!it) return <section className="s-sec"><div className="s-wrap s-empty">This collection has no entries yet.</div></section>;
  const svc = c && c.id === 'services';
  return <article className="s-sec s-entry"><div className="s-wrap s-entry-in">{ctx.listPage && <A link={{ kind: 'page', pageId: ctx.listPage.id }} className="s-back" f="backLabel"><Icon name="arrowLeft" size={15} /> {v.backLabel || 'Back'}</A>}<p className="s-eyebrow">{(svc ? [it.price, it.duration] : [it.date, it.author]).filter(Boolean).join(' · ')}</p><h1 className="s-h1">{it.title}</h1><p className="s-lead">{svc ? it.summary : it.excerpt}</p>{v.showImage !== false && it.image && <div className="s-entry-img"><Img id={it.image} /></div>}<Rich html={it.body} className="s-body s-entry-body" f="body" /><div className="s-btns"><Btn p="button" /></div></div></article>;
}
function ContactSplit({ v }) {
  const ctx = useS();
  const [sent, setSent] = useState(false);
  return <section className="s-sec s-contact"><div className="s-wrap s-ct-grid"><div className="s-ct-info"><Head /><dl className="s-ct-list">
    {v.address && <div data-field="address"><dt><Icon name="pin" size={18} /><span className="s-sr">Address</span></dt><dd>{v.address}</dd></div>}
    {v.phone && <div data-field="phone"><dt><Icon name="mobile" size={18} /><span className="s-sr">Phone</span></dt><dd><A link={{ kind: 'phone', phone: v.phone }}>{v.phone}</A></dd></div>}
    {v.whatsapp && <div data-field="whatsapp"><dt><Icon name="whatsapp" size={18} /><span className="s-sr">WhatsApp</span></dt><dd><A link={{ kind: 'whatsapp', phone: v.whatsapp, message: 'Hi, I found you on your website.' }}>WhatsApp {v.whatsapp}</A></dd></div>}
    {v.email && <div data-field="email"><dt><Icon name="mail" size={18} /><span className="s-sr">Email</span></dt><dd><A link={{ kind: 'email', email: v.email }}>{v.email}</A></dd></div>}
  </dl>{v.hours && v.hours.length > 0 && <div className="s-hours" data-field="hours">{v.hours.map((h, i) => <div key={i}><span>{h.days}</span><span>{h.time}</span></div>)}</div>}</div>
    <div className="s-ct-side">{v.showForm && <form className="s-form" data-field="formTitle" onSubmit={(e) => { e.preventDefault(); if (ctx.mode === 'preview') setSent(true); }}>{sent ? <div className="s-form-done" role="status"><Icon name="checkCircle" size={28} /><p className="s-h3">{v.formSuccess || 'Thanks. We will get back to you soon.'}</p></div> : <>
      <h3 className="s-h3">{v.formTitle}</h3>
      <label>Your name<input placeholder="Priya Sharma" readOnly={ctx.mode !== 'preview'} /></label>
      <label>Phone<input placeholder="+91 98xxx xxxxx" readOnly={ctx.mode !== 'preview'} inputMode="tel" /></label>
      <label>Message<textarea rows={3} placeholder="How can we help?" readOnly={ctx.mode !== 'preview'} /></label>
      <button type="submit" className="s-btn">{v.formButton || 'Send'}</button></>}</form>}
      {v.showMap && v.map && <div className="s-map"><Img id={v.map} f="map" /></div>}</div></div></section>;
}
function CtaBanner({ v }) {
  const tone = v.tone || 'primary';
  if (v.style === 'card') {
    const k = v.button && v.button.link && v.button.link.kind;
    return <section className="s-sec s-cta-card"><div className="s-wrap"><div className={cx('s-wa', 'tone-' + tone)}><span className="s-wa-ic"><Icon name={k === 'whatsapp' ? 'whatsapp' : k === 'phone' ? 'call' : 'arrowRight'} size={26} /></span><div className="s-wa-text"><E p="title" as="h2" className="s-h3" ph="Heading" /><E p="text" className="s-muted" ml ph="Text" /></div><div className="s-btns"><Btn p="button" /></div></div></div></section>;
  }
  return <section className={cx('s-sec s-cta', 'tone-' + tone)}><div className="s-wrap"><div className="s-cta-box"><div><E p="title" as="h2" className="s-h2" ph="Heading" /><E p="text" className="s-lead" ml ph="Text" /></div><div className="s-btns"><Btn p="button" /><Btn p="secondary" ghost /></div></div></div></section>;
}
function MadeWith({ v }) { return v.badge ? <span className="s-made">Made with selfsite</span> : null; }
function FooterColumns({ v }) {
  const ctx = useS();
  const tree = navTree(ctx.nav('footer'));
  const groups = tree.filter((t) => t.children.length);
  const loose = tree.filter((t) => !t.children.length);
  return <footer className="s-footer"><div className="s-wrap s-ft-grid"><div className="s-ft-brand"><Logo /><E p="tagline" className="s-muted" ml /><div className="s-ft-contact">{v.address && <p>{v.address}</p>}{v.phone && <p><A link={{ kind: 'phone', phone: v.phone }}>{v.phone}</A></p>}{v.email && <p><A link={{ kind: 'email', email: v.email }}>{v.email}</A></p>}</div></div>
    <div className="s-ft-cols" data-field="nav">{groups.map((g) => <div key={g.id} className="s-ft-col"><h4>{g.label}</h4>{g.children.map((c) => <A key={c.id} link={c.link}>{c.label}</A>)}</div>)}{loose.length > 0 && <div className="s-ft-col"><h4>Links</h4>{loose.map((c) => <A key={c.id} link={c.link}>{c.label}</A>)}</div>}</div></div>
    <div className="s-wrap s-ft-bottom"><E p="copyright" as="span" /><span className="s-ft-social">{(v.social || []).map((s, i) => <A key={i} link={{ kind: 'url', url: s.url, newTab: true }}><Icon name="at" size={14} />{s.handle}</A>)}</span><MadeWith v={v} /></div></footer>;
}
function FooterSimple({ v }) {
  const ctx = useS();
  const items = ctx.nav('footer');
  return <footer className="s-footer s-ft-simple"><div className="s-wrap s-fs-in"><Logo /><nav className="s-fs-nav" data-field="nav" aria-label="Footer">{items.map((it) => <A key={it.id} link={it.link}>{it.label}</A>)}</nav></div><div className="s-wrap s-ft-bottom"><E p="copyright" as="span" /><E p="tagline" as="span" className="s-muted" /><MadeWith v={v} /></div></footer>;
}

export const COMPONENTS = {
  'header-bar': HeaderBar, 'header-centered': HeaderCentered, 'hero-split': HeroSplit, 'hero-bigtype': HeroBigType, 'hero-slides': HeroSlides,
  'text-block': TextBlock, 'image-single': ImageSingle, 'about-story': AboutStory, 'features-grid': FeaturesGrid, 'menu-list': MenuList,
  'pricing-plans': PricingPlans, 'gallery-grid': GalleryGrid, 'testimonials-cards': Testimonials, 'testimonial-quote': TestimonialQuote,
  'faq-accordion': Faq, 'news-list': NewsList, 'entry-detail': EntryDetail, 'contact-split': ContactSplit, 'cta-banner': CtaBanner,
  'footer-columns': FooterColumns, 'footer-simple': FooterSimple
};

function Block({ sec }) {
  const C = COMPONENTS[sec.type];
  return C ? <SecCtx.Provider value={sec}><C v={sec.values} /></SecCtx.Provider> : null;
}

export const DEVICES = { desktop: { w: 1280, label: 'Desktop', icon: 'monitor' }, tablet: { w: 820, label: 'Tablet', icon: 'tablet' }, phone: { w: 390, label: 'Phone', icon: 'phone' } };

// One section on the canvas with its editing chrome (1's outline, tag and toolbar; 3's hidden strip and swap).
function Shell({ sec, scope, index, total, view, children, shared }) {
  const { edit, selected, chrome, onAction, labelFor, ghost } = view;
  const tone = 'tone-' + (sec.tone || 'default');
  if (!edit) return sec.hidden ? null : <div className={cx('s-blk', tone)} data-sid={sec.id} data-anchor={sec.anchor} data-scope={scope}>{children}</div>;
  if (sec.hidden) return <div className="ed-hidden" data-sid={sec.id} data-anchor={sec.anchor} data-scope={scope}><Icon name="eyeOff" size={14} /><span>Hidden: {blockTitle(sec)}</span>{chrome && <button type="button" onClick={(e) => { e.stopPropagation(); onAction('unhide', { id: sec.id, scope }); }}>Show</button>}</div>;
  const sel = selected === sec.id;
  const label = scope === 'header' ? (shared ? 'Header · shared by every page' : 'Header · this page only') : scope === 'footer' ? (shared ? 'Footer · shared by every page' : 'Footer · this page only') : blockTitle(sec);
  return (
    <div className={cx('ed-sec s-blk', tone, sel && 'is-sel', scope !== 'page' && 'is-global', ghost && 'is-ghost')} data-sid={sec.id} data-anchor={sec.anchor} data-scope={scope}>
      {!sel && !ghost && <button type="button" className="ed-hit" aria-label={'Edit ' + labelFor(sec, scope)} onClick={(e) => view.onHit(e, sec, scope)} tabIndex={chrome ? 0 : -1} />}
      {children}
      <span className="ed-tag"><Icon d={blockIcon(sec.type)} size={12} />{ghost ? 'Preview · ' + ghost : label}</span>
      {sel && chrome && view.renderBar && view.renderBar(sec, scope, index, total)}
    </div>
  );
}
function Insert({ index, view }) {
  if (!view.edit || !view.chrome || view.chrome === 'focus') return null;
  return <div className="ed-ins"><div className="ed-ins-hit"><button type="button" className="ed-ins-btn" aria-label="Add a block here" onClick={(e) => { e.stopPropagation(); view.onAction('insert', { index }); }}><Icon name="plus" size={13} />Add</button></div></div>;
}
const Marker = () => <div className="ed-marker" aria-hidden="true"><span><Icon name="plus" size={13} />New blocks go here</span></div>;

export function SiteView(props) {
  const { site, mediaBy, loc, mode = 'static', selection, onSelect, onNavigate, onAction, chrome = 'classic', published, inlineId, onInline, insert, slot, renderBar, focusField } = props;
  const page = pageById(site, loc.pageId) || pageById(site, site.homeId);
  const coll = page && page.collection ? site.collections[page.collection] : null;
  const item = page && page.kind === 'detail' && coll ? coll.items.find((i) => i.id === loc.itemId) || coll.items[0] : null;
  const edit = mode === 'edit';
  const vars = useMemo(() => themeVars(site.theme), [site.theme]);
  const ctx = {
    site, mode, page, pageId: page.id, homeId: site.homeId, item, inlineId: edit ? inlineId : null, onInline,
    listPage: page.kind === 'detail' ? pageById(site, page.parentId) || listPageFor(site, page.collection) : null,
    media: (id) => { const m = mediaBy[id]; return m ? { src: mediaSrc(m), alt: m.alt, video: m.kind === 'video' } : null; },
    collection: (c) => site.collections[c],
    nav: (menu) => {
      const items = site.nav[menu] || [];
      if (!published) return items;
      return items.filter((n) => !(n.link && n.link.kind === 'page' && (() => { const p = pageById(site, n.link.pageId); return !p || p.status !== 'live'; })()));
    },
    linkProps: (link) => {
      const r = resolveLink(site, link, mediaBy);
      const active = !!(link && link.kind === 'page' && (link.pageId === page.id || (page.parentId && link.pageId === page.parentId && page.kind === 'detail')));
      return { href: r.href || '#', broken: edit && r.broken, active, newTab: false, onClick: (e) => { e.preventDefault(); if (mode === 'preview' && onNavigate) onNavigate(link); } };
    }
  };
  const header = page.header === false ? null : page.header || site.header;
  const footer = page.footer === false ? null : page.footer || site.footer;
  const view = {
    edit, chrome: edit ? chrome : false, selected: selection && selection.id, onAction: onAction || (() => {}), renderBar,
    labelFor: (sec, scope) => (scope === 'page' ? blockTitle(sec) : scope) + ' block',
    onHit: (e, sec, scope) => {
      e.stopPropagation();
      let field = null;
      try { const els = document.elementsFromPoint(e.clientX, e.clientY); const f = els.find((x) => x.hasAttribute && x.hasAttribute('data-field')); if (f) field = f.getAttribute('data-field'); } catch (x) { /* no-op */ }
      onSelect && onSelect({ id: sec.id, scope, field, pageId: page.id });
    }
  };
  const ins = insert || {};
  const ghostEl = ins.ghost ? <Shell key="ghost" sec={{ id: 'ghost', type: ins.ghost.type, values: ins.ghost.values, tone: ins.ghost.tone, anchor: '' }} scope="page" view={{ ...view, edit: true, chrome: false, ghost: ins.ghost.label }}><Block sec={{ id: 'ghost', type: ins.ghost.type, values: ins.ghost.values }} /></Shell> : null;
  const mark = (i) => {
    if (slot && slot.at === i) return <React.Fragment key={'slot' + i}>{slot.node}</React.Fragment>;
    if (ins.at === i && !ins.swapId) return ghostEl ? <div key={'g' + i} className="ed-ghost-wrap">{ghostEl}</div> : ins.marker ? <Marker key={'m' + i} /> : null;
    return null;
  };
  const n = page.sections.length;
  const rows = [];
  page.sections.forEach((s, i) => {
    const m = mark(i);
    if (m) rows.push(m); else if (i > 0) rows.push(<Insert key={'i' + i} index={i} view={view} />);
    if (ins.swapId === s.id && ghostEl) rows.push(<div key={'sw' + s.id} className="ed-ghost-wrap">{ghostEl}</div>);
    else rows.push(<Shell key={s.id} sec={s} scope="page" index={i} total={n} view={view}><Block sec={s} /></Shell>);
  });
  const endMark = mark(n);
  if (endMark) rows.push(endMark); else if (n > 0) rows.push(<Insert key="iend" index={n} view={view} />);
  return (
    <SiteCtx.Provider value={ctx}>
      <div className={cx('site', edit && 'is-edit', mode === 'preview' && 'is-preview')} style={vars} data-btn={site.theme.button || 'solid'} data-focus-field={focusField || undefined}>
        {header && (ins.swapId === header.id && ghostEl ? <div className="ed-ghost-wrap">{ghostEl}</div> : <Shell sec={header} scope="header" view={view} shared={!page.header}><Block sec={header} /></Shell>)}
        <main>
          {rows}
          {edit && n === 0 && !(slot && slot.at === 0) && <div className="ed-empty"><Icon name="layers" size={22} /><p><strong>This page is empty</strong><br />Add a block to get started.</p><button type="button" className="btn btn-primary" onClick={(e) => { e.stopPropagation(); onAction && onAction('insert', { index: 0 }); }}><Icon name="plus" />Add block</button></div>}
        </main>
        {footer && (ins.swapId === footer.id && ghostEl ? <div className="ed-ghost-wrap">{ghostEl}</div> : <Shell sec={footer} scope="footer" view={view} shared={!page.footer}><Block sec={footer} /></Shell>)}
      </div>
    </SiteCtx.Provider>
  );
}

// A single block rendered in a site's theme (block picker cards, swap previews).
export function BlockPreview({ site, mediaBy, type, values, tone }) {
  const ctx = {
    site, mode: 'static', page: site.pages[0], pageId: site.pages[0] && site.pages[0].id, homeId: site.homeId, item: null, listPage: null,
    media: (id) => { const m = mediaBy[id]; return m ? { src: mediaSrc(m), alt: m.alt, video: m.kind === 'video' } : null; },
    collection: (c) => site.collections[c], nav: (m) => site.nav[m] || [], linkProps: () => ({ href: '#', onClick: (e) => e.preventDefault() })
  };
  return <SiteCtx.Provider value={ctx}><div className="site" style={themeVars(site.theme)} data-btn={site.theme.button || 'solid'}><div className={cx('s-blk', 'tone-' + (tone || 'default'))}><Block sec={{ id: 'p', type, values }} /></div></div></SiteCtx.Provider>;
}

// Renders children at a fixed width and scales them to fit (3), inside 1's frame.
export function Scaled({ width = 1200, maxHeight, children, className }) {
  const outer = useRef(null);
  const inner = useRef(null);
  const [st, setSt] = useState({ s: 0.25, h: 120 });
  useLayoutEffect(() => {
    const measure = () => { if (!outer.current || !inner.current) return; const s = outer.current.clientWidth / width; setSt({ s, h: inner.current.offsetHeight * s }); };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(outer.current); ro.observe(inner.current);
    return () => ro.disconnect();
  }, [width]);
  const h = maxHeight ? Math.min(st.h, maxHeight) : st.h;
  return <div ref={outer} className={cx('scaled', className)} style={{ height: h }} aria-hidden="true"><div ref={inner} className="scaled-in" style={{ width, transform: `scale(${st.s})` }}>{children}</div></div>;
}

export function DeviceFrame({ device, fill, scrollRef, onScale, top, children, className, padBottom }) {
  const wrap = useRef(null);
  const [box, setBox] = useState({ w: 0, h: 0 });
  useLayoutEffect(() => {
    const el = wrap.current;
    const measure = () => { const cs = getComputedStyle(el); setBox({ w: el.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight), h: el.clientHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom) }); };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  let W = box.w;
  if (!fill) W = device === 'desktop' ? Math.min(Math.max(box.w, 1024), 1280) : DEVICES[device].w;
  const s = fill || !box.w ? 1 : Math.min(1, box.w / W);
  const topH = top ? 40 : 0;
  const H = Math.max(0, box.h - topH) / s;
  useLayoutEffect(() => { onScale && onScale(s); }, [s]);
  return (
    <div ref={wrap} className={cx('frame-wrap', fill ? 'is-fill' : 'dev-' + device, className)}>
      {box.w > 0 && <div className="frame" style={{ width: Math.round(W * s), height: box.h }}>
        {top && <div className="frame-top">{top}</div>}
        <div className="frame-view" style={{ height: box.h - topH }}>
          <div className="frame-inner" ref={scrollRef} data-scale={s} style={{ width: W, height: H, transform: s !== 1 ? `scale(${s})` : undefined, '--k': 1 / s, paddingBottom: padBottom || undefined }}>{children}</div>
        </div>
      </div>}
    </div>
  );
}

export function scrollFrameTo(scroller, selector, smooth = true, offsetBottom = 0) {
  if (!scroller) return;
  const el = scroller.querySelector(selector);
  if (!el) return;
  const s = parseFloat(scroller.getAttribute('data-scale') || '1') || 1;
  const k = scroller.getBoundingClientRect();
  const r = el.getBoundingClientRect();
  const sticky = scroller.querySelector('.s-header.sticky');
  const off = sticky && !el.contains(sticky) ? sticky.offsetHeight : 0;
  const top = scroller.scrollTop + (r.top - k.top) / s - off - 12;
  const visH = (scroller.clientHeight - offsetBottom);
  const elH = r.height / s;
  const cur = scroller.scrollTop;
  if ((r.top - k.top) / s >= off && (r.top - k.top) / s + Math.min(elH, visH * 0.6) <= visH) return;
  try { scroller.scrollTo({ top: Math.max(0, top), behavior: smooth ? 'smooth' : 'auto' }); } catch (e) { scroller.scrollTop = Math.max(0, top); }
  return cur;
}
export { htmlText };
