// Prepares 3's templates for this editor: section backgrounds, HTML rich text, 1's new
// block variants, collection entry fields from 1, and the no-invented-numbers scrub.
import { BLOCKS, CATEGORIES } from './schema.js';
import { TEMPLATES, TEMPLATE_BY, S, B, L } from './templates.js';
import { mdToHtml, scrub, htmlText } from './text.js';
import { sampleWorkspace, clone, slugify, pageById, assignAnchors } from './model.js';

const DEFAULTS = {
  'hero-split': { layout: 'split' },
  'gallery-grid': { columns: '3', shape: 'landscape', captions: true },
  'cta-banner': { style: 'banner' },
  'news-list': { linkText: '', showMeta: true },
  'footer-columns': { badge: true },
  'footer-simple': { badge: true },
  'hero-slides': { auto: true },
  'contact-split': { showForm: false, showMap: false }
};

function htmlFields(fields, values) {
  fields.forEach((f) => {
    if (f.type === 'richtext' && typeof values[f.key] === 'string') values[f.key] = mdToHtml(values[f.key]);
    if (f.type === 'list' && Array.isArray(values[f.key])) values[f.key].forEach((it) => htmlFields(f.fields, it));
  });
}

export function normalizeSection(sec) {
  if (!sec || !BLOCKS[sec.type]) return sec;
  const v = sec.values || (sec.values = {});
  if (!sec.tone) sec.tone = v.dark ? 'dark' : v.tinted ? 'muted' : 'default';
  delete v.tinted;
  delete v.dark;
  delete v.logoMark;
  const d = DEFAULTS[sec.type];
  if (d) Object.keys(d).forEach((k) => { if (v[k] === undefined) v[k] = d[k]; });
  htmlFields(BLOCKS[sec.type].fields, v);
  return sec;
}

const COLL_META = {
  services: { name: 'Services', singular: 'Service', fields: [['price', 'Price'], ['duration', 'Duration'], ['summary', 'Summary', 'area']] },
  blog: { name: 'Blog', singular: 'Post', fields: [['date', 'Date'], ['author', 'Author'], ['excerpt', 'Excerpt', 'area']] }
};
export const collMeta = (c) => ({ ...(COLL_META[c.id] || COLL_META.blog), name: c.name || (COLL_META[c.id] || COLL_META.blog).name });

const TAGS_FOR = {
  services: [['Cosmetic'], ['Treatment'], ['Treatment', 'Implants'], ['Orthodontics'], ['Kids'], ['Cleaning']],
  blog: [['Prevention'], ['Cosmetic'], ['Orthodontics'], ['Kids', 'Prevention']]
};
export const ENTRY_FIELDS = ['title', 'slug', 'image', 'body', 'summary', 'excerpt', 'price', 'duration', 'date', 'author', 'tags', 'seoTitle', 'seoDesc'];
export const entrySnap = (it) => Object.fromEntries(ENTRY_FIELDS.map((k) => [k, it[k] === undefined ? null : it[k]]));

function prepItem(it, i, collId) {
  it.body = mdToHtml(it.body);
  if (!it.tags) it.tags = (TAGS_FOR[collId] || [])[i] ? [...TAGS_FOR[collId][i]] : [];
  if (it.seoTitle === undefined) it.seoTitle = '';
  if (it.seoDesc === undefined) it.seoDesc = '';
  it.status = it.status === 'draft' ? 'draft' : 'live';
  it.pub = it.status === 'live' ? entrySnap(it) : null;
  it.history = it.status === 'live'
    ? [{ id: 'h' + i + 'b', at: (it.date || '20 Oct 2026') + ', 4:12 pm', by: it.author || 'Kavya Mehta', kind: 'Published', changes: ['Published'], snap: entrySnap(it) },
       { id: 'h' + i + 'a', at: '18 Oct 2026, 11:30 am', by: it.author || 'Ananya Mehta', kind: 'Created', changes: ['First draft'], snap: { ...entrySnap(it), title: it.title } }]
    : [];
}

TEMPLATES.forEach((t) => {
  [t.header, t.footer, ...t.pages.flatMap((p) => p.sections)].forEach(normalizeSection);
  Object.values(t.collections || {}).forEach((c) => {
    c.name = collMeta(c).name;
    c.items.forEach((it, i) => prepItem(it, i, c.id));
  });
  t.brand = { logoImage: null, logoShow: 'both', logoSize: 28 };
});

// 1's block variants, placed in templates so they show up in the block library.
const add = (tplId, pageId, at, sec) => {
  const p = TEMPLATE_BY[tplId].pages.find((x) => x.id === pageId);
  if (p) p.sections.splice(at < 0 ? p.sections.length : at, 0, normalizeSection(sec));
};
add('clinic', 'about', 2, S('image-single', { image: 'm-cl-room', caption: 'Treatment room 2, with daylight from the garden side', width: 'contained' }));
add('clinic', 'about', -1, S('text-block', { eyebrow: 'Our promise', title: 'You decide, after you understand', body: 'Every first visit ends with a written plan and a written estimate. Take it home, show your family, ask us anything on WhatsApp.\n\nIf a treatment can wait, we tell you. If it cannot, we tell you why.', columns: '2', align: 'left' }));
add('clinic', 'contact', -1, S('cta-banner', { title: 'Talk to a dentist on WhatsApp', text: 'Send a photo and a short question. A dentist replies within the day.', button: B('Start a chat', L.wa('+91 98450 21734', 'Hi, I have a question for a dentist.')), secondary: { label: '', link: null }, style: 'card', tone: 'soft' }));
add('ember', 'home', 3, S('gallery-grid', { eyebrow: '', title: 'From the counter this week', intro: '', layout: 'carousel', columns: '3', shape: 'portrait', captions: true, images: [{ image: 'm-ember-buns', caption: 'Cardamom buns' }, { image: 'm-ember-latte', caption: 'Flat white' }, { image: 'm-ember-filter', caption: 'Filter coffee' }, { image: 'm-ember-beans', caption: 'Thursday roast' }] }));
add('atelier', 'projects', 1, S('image-single', { image: 'm-at-court', caption: 'Neem courtyard, seen from the roof', width: 'full' }));
add('atelier', 'studio', -1, S('text-block', { eyebrow: '', title: 'A small studio, on purpose', body: 'We take on a handful of projects a year, so the architect drawing your plans is the one who visits your site.', columns: '1', align: 'center' }));
add('vow', 'weddings', -1, S('gallery-grid', { eyebrow: 'Details', title: 'The small things guests remember', intro: '', layout: 'masonry', columns: '3', shape: 'landscape', captions: true, images: [{ image: 'm-vow-marigold', caption: 'Haldi strings' }, { image: 'm-vow-rings', caption: 'Rings on silk' }, { image: 'm-vow-diyas', caption: 'Sangeet diyas' }, { image: 'm-vow-arches', caption: 'Haveli arches' }, { image: 'm-vow-mandap', caption: 'Mandap' }] }));
add('midnight', 'plans', -1, S('text-block', { eyebrow: '', title: 'How engagements work', body: 'Every engagement starts with a short discovery call.\n\n- Fixed scope, written up before we start\n- A demo every two weeks\n- You own the code from day one', columns: '2', align: 'left' }));
(() => {
  const home = TEMPLATE_BY.estate.pages.find((p) => p.id === 'home');
  const hero = home && home.sections.find((s) => s.type === 'hero-split');
  if (hero) hero.values.layout = 'behind';
  const about = TEMPLATE_BY.estate.pages.find((p) => p.id === 'about');
  const vowStory = TEMPLATE_BY.vow.pages.find((p) => p.id === 'story');
  if (vowStory) vowStory.sections.unshift(normalizeSection(S('hero-split', { eyebrow: 'Our story', title: 'Weddings planned like family functions', body: 'Two sisters, one notebook of family recipes for a good wedding, and a team that has grown up around them.', primary: B('See packages', L.page('packages')), secondary: { label: '', link: null }, image: 'm-vow-mandap', note: '', layout: 'centered', reverse: false })));
  return about;
})();

TEMPLATES.forEach((t) => scrub(t));

// Block library: every block variant used by any template (3), keyed by variant so
// 1's layouts (centred hero, masonry, carousel, WhatsApp card) appear separately.
const VARIANT = {
  'hero-split': (v) => ({ split: '', centered: 'Centred', behind: 'Photo behind' })[v.layout] || '',
  'gallery-grid': (v) => ({ grid: 'Grid', mosaic: 'Mosaic', masonry: 'Masonry', carousel: 'Carousel', strip: 'Strip' })[v.layout] || '',
  'cta-banner': (v) => (v.style === 'card' ? 'WhatsApp card' : v.tone === 'invert' ? 'Dark band' : v.tone === 'soft' ? 'Soft band' : ''),
  'text-block': (v) => (v.columns === '2' ? 'Heading beside text' : v.align === 'center' ? 'Centred' : ''),
  'image-single': (v) => ({ contained: 'Contained', wide: 'Wide', full: 'Full width' })[v.width] || '',
  'features-grid': (v) => (v.showImages ? 'With photos' : v.style === 'plain' ? 'Plain' : ''),
  'news-list': (v) => (v.source === 'services' ? 'Services' : 'Posts')
};
export const LIBRARY = (() => {
  const seen = new Map();
  TEMPLATES.forEach((t) => {
    const addE = (sec) => {
      const variant = VARIANT[sec.type] ? VARIANT[sec.type](sec.values) : '';
      const key = t.id + ':' + sec.type + ':' + variant + ':' + (sec.tone || '');
      if (seen.has(key)) return;
      seen.set(key, { key, templateId: t.id, templateName: t.name, type: sec.type, values: sec.values, tone: sec.tone || 'default', category: BLOCKS[sec.type].category, variant });
    };
    addE(t.header);
    t.pages.forEach((p) => p.sections.forEach(addE));
    addE(t.footer);
  });
  const order = CATEGORIES.map((c) => c.id);
  return [...seen.values()].sort((a, b) => order.indexOf(a.category) - order.indexOf(b.category));
})();
export const entryName = (e) => (BLOCKS[e.type].title + (e.variant ? ' · ' + e.variant : ''));

// The sample workspace: Smile Studio Dental with publish history (3), entry statuses (1).
export function buildWorkspace() {
  const ws = sampleWorkspace();
  const fix = (site) => {
    site.pages.forEach((p) => p.sections.forEach(normalizeSection));
    if (!site.brand) site.brand = { logoImage: null, logoShow: 'both', logoSize: 28 };
    if (!site.theme.button) site.theme.button = 'solid';
    if (!site.theme.textSize) site.theme.textSize = 'm';
    site.pages.forEach(assignAnchors);
    scrub(site);
    return site;
  };
  fix(ws.site);
  ws.versions.forEach((v) => fix(v.snapshot));
  const blog = ws.site.collections.blog;
  const edited = blog.items.find((x) => x.id === 'post-cleaning');
  if (edited) edited.excerpt = 'Twice a year is the usual advice. Your gums decide the real answer, and here is how we read them.';
  const sched = blog.items.find((x) => x.id === 'post-kids');
  if (sched) { sched.status = 'scheduled'; sched.when = '12 Nov 2026, 9:00 am'; sched.pub = null; sched.history = sched.history.slice(1); }
  const draft = blog.items.find((x) => x.id === 'post-aligners');
  if (draft) { draft.status = 'draft'; draft.pub = null; draft.history = draft.history.slice(1); draft.seoDesc = ''; }
  ws.site.redirects.push({ id: 'r3', from: '/treatments/*', to: '/services/*', code: 301, auto: false, note: 'Old treatment pages' });
  return ws;
}

export function newSiteFrom(tpl, createSite, opts) {
  const s = createSite(tpl, opts);
  s.brand = clone(tpl.brand || { logoImage: null, logoShow: 'both', logoSize: 28 });
  s.pages.forEach(assignAnchors);
  return s;
}

export const excerptOf = (it) => it.excerpt || it.summary || htmlText(it.body).slice(0, 150);
export { slugify, pageById };
