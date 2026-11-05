// Block types and their settings. Field engine from 3; text, single image, gallery
// variants, hero layouts and the WhatsApp card from 1; rich text, "Made with selfsite"
// and card options from 2. Section background (Page / Muted / Dark) is a section
// property (from 2) and replaces 3's per-block "tinted" and "dark" toggles.

export const CATEGORIES = [
  { id: 'header', label: 'Header' },
  { id: 'hero', label: 'Hero' },
  { id: 'text', label: 'Text' },
  { id: 'image', label: 'Image' },
  { id: 'about', label: 'About' },
  { id: 'features', label: 'Features' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'testimonials', label: 'Reviews' },
  { id: 'pricing', label: 'Prices' },
  { id: 'faq', label: 'Questions' },
  { id: 'news', label: 'Collections' },
  { id: 'contact', label: 'Contact' },
  { id: 'cta', label: 'Call to action' },
  { id: 'footer', label: 'Footer' }
];
export const TAGS = ['dark', 'minimal', 'big-type', 'editorial'];

const btn = (key, label) => ({ key, type: 'button', label });
const txt = (key, label, extra = {}) => ({ key, type: 'text', label, ...extra });
const area = (key, label, extra = {}) => ({ key, type: 'textarea', label, ...extra });
const rich = (key, label) => ({ key, type: 'richtext', label });
const img = (key, label) => ({ key, type: 'image', label });
const tog = (key, label, hint) => ({ key, type: 'toggle', label, hint });
const sel = (key, label, options, hint) => ({ key, type: 'select', label, options, hint });
const list = (key, label, itemLabel, fields, max = 12) => ({ key, type: 'list', label, itemLabel, fields, max });
const opts = (...a) => a.map(([value, label]) => ({ value, label }));
const headFields = [txt('eyebrow', 'Eyebrow'), txt('title', 'Heading', { max: 80 }), area('intro', 'Intro')];
const nav = (label) => ({ key: 'nav', type: 'nav', label });
const badge = tog('badge', 'Show “Made with selfsite”', 'A small line at the bottom of the footer.');

export const BLOCKS = {
  'header-bar': {
    category: 'header', title: 'Bar header', tags: ['minimal'],
    description: 'Logo on the left, menu and a button on the right. Collapses to a menu button on phones.',
    fields: [txt('logo', 'Business name', { hint: 'Logo picture, mark and size are in Site design.' }), btn('cta', 'Button'), tog('showCta', 'Show button'), tog('sticky', 'Stick to top while scrolling'), nav('Menu')]
  },
  'header-centered': {
    category: 'header', title: 'Centred header', tags: ['editorial'],
    description: 'Large centred name with the menu underneath and an announcement line on top.',
    fields: [txt('topline', 'Announcement line'), txt('logo', 'Business name'), tog('sticky', 'Stick to top while scrolling'), nav('Menu')]
  },
  'hero-split': {
    category: 'hero', title: 'Split hero', tags: [],
    description: 'Headline, text and two buttons beside a large photo.',
    fields: [txt('eyebrow', 'Eyebrow'), txt('title', 'Heading', { max: 80 }), rich('body', 'Text'), btn('primary', 'Main button'), btn('secondary', 'Second button'), img('image', 'Photo'), txt('note', 'Rating line'),
      sel('layout', 'Layout', opts(['split', 'Photo beside'], ['centered', 'Centred'], ['behind', 'Photo behind']), 'Photo beside puts the photo next to the text. Centred stacks it below.'),
      tog('reverse', 'Photo on the left')]
  },
  'hero-bigtype': {
    category: 'hero', title: 'Big type hero', tags: ['big-type', 'minimal'],
    description: 'An oversized headline with a short line of text. Optional wide photo below.',
    fields: [txt('eyebrow', 'Eyebrow'), area('title', 'Heading', { max: 90 }), rich('body', 'Text'), btn('button', 'Button'), list('meta', 'Facts', 'Fact', [txt('text', 'Text')], 4), tog('showImage', 'Show wide photo'), img('image', 'Photo')]
  },
  'hero-slides': {
    category: 'hero', title: 'Slideshow hero', tags: ['dark'],
    description: 'Full-width photos that change every few seconds, each with its own headline.',
    fields: [list('slides', 'Slides', 'Slide', [img('image', 'Photo'), txt('title', 'Heading'), area('caption', 'Caption')], 6), btn('button', 'Button'), tog('auto', 'Change slides automatically')]
  },
  'text-block': {
    category: 'text', title: 'Text', tags: ['minimal'],
    description: 'A heading with formatted text. Good for a story, a policy or a longer note.',
    fields: [txt('eyebrow', 'Eyebrow'), txt('title', 'Heading', { max: 80 }), rich('body', 'Text'),
      sel('columns', 'Layout', opts(['1', 'One column'], ['2', 'Heading beside text'])), sel('align', 'Alignment', opts(['left', 'Left'], ['center', 'Centre']))]
  },
  'image-single': {
    category: 'image', title: 'Image', tags: ['minimal'],
    description: 'One photo with a caption, contained, wide or edge to edge.',
    fields: [img('image', 'Photo'), txt('caption', 'Caption'), sel('width', 'Width', opts(['contained', 'Contained'], ['wide', 'Wide'], ['full', 'Full width']))]
  },
  'about-story': {
    category: 'about', title: 'Story with photo', tags: ['editorial'],
    description: 'A photo beside your story, with up to four key numbers.',
    fields: [txt('eyebrow', 'Eyebrow'), txt('title', 'Heading'), rich('body', 'Story'), img('image', 'Photo'), list('stats', 'Numbers', 'Number', [txt('value', 'Number'), txt('label', 'Label')], 4), btn('button', 'Button'), tog('imageRight', 'Photo on the right')]
  },
  'features-grid': {
    category: 'features', title: 'Feature grid', tags: [],
    description: 'Two to four columns of short points, each with an icon or a photo.',
    fields: [...headFields,
      list('items', 'Items', 'Item', [{ key: 'icon', type: 'icon', label: 'Icon' }, img('image', 'Photo'), txt('title', 'Title'), txt('meta', 'Detail line'), area('text', 'Text')], 8),
      sel('columns', 'Columns', opts(['2', '2'], ['3', '3'], ['4', '4'])), sel('style', 'Style', opts(['cards', 'Cards'], ['plain', 'Plain'])), tog('showImages', 'Use photos instead of icons')]
  },
  'menu-list': {
    category: 'pricing', title: 'Price list', tags: ['editorial'],
    description: 'Grouped items with prices, like a café menu or a list of fees.',
    fields: [...headFields, list('items', 'Items', 'Item', [txt('group', 'Group'), txt('name', 'Name'), txt('price', 'Price'), txt('desc', 'Description'), txt('tag', 'Badge')], 30), txt('note', 'Note under the list')]
  },
  'pricing-plans': {
    category: 'pricing', title: 'Package cards', tags: [],
    description: 'Two to four packages side by side, with one highlighted.',
    fields: [...headFields, list('plans', 'Packages', 'Package', [txt('name', 'Name'), txt('price', 'Price'), txt('period', 'Per'), area('desc', 'Description'), area('features', 'Included (one per line)'), { key: 'featured', type: 'toggle', label: 'Highlight' }, txt('flag', 'Highlight label'), btn('button', 'Button')], 4)]
  },
  'gallery-grid': {
    category: 'gallery', title: 'Photo gallery', tags: ['minimal'],
    description: 'A grid, mosaic, masonry wall, carousel or strip of photos with captions.',
    fields: [...headFields, list('images', 'Photos', 'Photo', [img('image', 'Photo'), txt('caption', 'Caption')], 12),
      sel('layout', 'Layout', opts(['grid', 'Grid'], ['mosaic', 'Mosaic'], ['masonry', 'Masonry'], ['carousel', 'Carousel'], ['strip', 'Strip'])),
      sel('columns', 'Columns on desktop', opts(['2', '2'], ['3', '3'], ['4', '4']), 'Phones always show two columns.'),
      sel('shape', 'Photo shape', opts(['landscape', 'Landscape'], ['square', 'Square'], ['portrait', 'Portrait'])), tog('captions', 'Show captions')]
  },
  'testimonials-cards': {
    category: 'testimonials', title: 'Review cards', tags: [],
    description: 'Three short reviews with names and photos.',
    fields: [...headFields, list('items', 'Reviews', 'Review', [area('quote', 'Quote'), txt('name', 'Name'), txt('role', 'Detail'), img('avatar', 'Photo'), { key: 'rating', type: 'number', label: 'Stars', min: 1, max: 5 }], 6), tog('showRating', 'Show star rating')]
  },
  'testimonial-quote': {
    category: 'testimonials', title: 'Big quote', tags: ['big-type', 'editorial'],
    description: 'One large review set in the display font.',
    fields: [area('quote', 'Quote'), txt('name', 'Name'), txt('role', 'Detail'), img('avatar', 'Photo')]
  },
  'faq-accordion': {
    category: 'faq', title: 'Questions', tags: ['minimal'],
    description: 'Questions that open to show the answer.',
    fields: [...headFields, list('items', 'Questions', 'Question', [txt('q', 'Question'), rich('a', 'Answer')], 12)]
  },
  'news-list': {
    category: 'news', title: 'Collection cards', tags: [],
    description: 'Cards filled from a collection, such as services or blog posts. Each card opens its own page.',
    fields: [...headFields, { key: 'source', type: 'collection', label: 'Show entries from' }, btn('button', '“View all” button'), txt('linkText', 'Card link text'),
      { key: 'limit', type: 'number', label: 'How many', min: 1, max: 12 }, tog('showImages', 'Show photos'), tog('showMeta', 'Show price or date line')]
  },
  'entry-detail': {
    category: 'news', title: 'Entry page', tags: ['editorial'], detail: true,
    description: 'Shows one collection entry: title, photo and full text. Used on entry pages.',
    fields: [txt('backLabel', 'Back link text'), btn('button', 'Button under the text'), tog('showImage', 'Show photo')]
  },
  'contact-split': {
    category: 'contact', title: 'Contact and form', tags: [],
    description: 'Address, phone, WhatsApp and hours beside an enquiry form and map.',
    fields: [...headFields, area('address', 'Address'), txt('phone', 'Phone'), txt('whatsapp', 'WhatsApp number'), txt('email', 'Email'),
      list('hours', 'Opening hours', 'Row', [txt('days', 'Days'), txt('time', 'Hours')], 7),
      txt('formTitle', 'Form heading'), txt('formButton', 'Form button'), txt('formSuccess', 'Message after sending'), img('map', 'Map image'),
      tog('showForm', 'Show enquiry form'), tog('showMap', 'Show map')]
  },
  'cta-banner': {
    category: 'cta', title: 'Call to action', tags: [],
    description: 'A short push towards one action, as a coloured band or a WhatsApp card.',
    fields: [txt('title', 'Heading'), area('text', 'Text'), btn('button', 'Button'), btn('secondary', 'Second button'),
      sel('style', 'Style', opts(['banner', 'Banner'], ['card', 'WhatsApp card'])), sel('tone', 'Colour', opts(['primary', 'Brand'], ['soft', 'Soft'], ['invert', 'Dark']))]
  },
  'footer-columns': {
    category: 'footer', title: 'Column footer', tags: [],
    description: 'Contact details beside columns of links.',
    fields: [txt('logo', 'Business name'), area('tagline', 'Short description'), area('address', 'Address'), txt('phone', 'Phone'), txt('email', 'Email'), list('social', 'Social profiles', 'Profile', [txt('handle', 'Handle'), txt('url', 'Address')], 5), txt('copyright', 'Copyright line'), nav('Footer menu'), badge]
  },
  'footer-simple': {
    category: 'footer', title: 'Simple footer', tags: ['minimal'],
    description: 'One line with your name, links and copyright.',
    fields: [txt('logo', 'Business name'), txt('tagline', 'Short line'), txt('copyright', 'Copyright line'), nav('Footer menu'), badge]
  }
};

export const isStyleField = (f) => f.type === 'toggle' || f.type === 'select' || f.type === 'number';

export function blockTags(type, values = {}, tone) {
  const b = BLOCKS[type];
  const t = new Set(b ? b.tags : []);
  if (tone === 'dark' || values.tone === 'invert' || type === 'hero-slides' || values.layout === 'behind') t.add('dark');
  return [...t];
}

// Short summary used in the Blocks list (1's "label + summary" rows).
export function blockSummary(sec) {
  const v = sec.values || {};
  if (v.title) return String(v.title).replace(/\n/g, ' ');
  if (v.quote) return v.quote;
  if (v.caption) return v.caption;
  if (v.logo) return v.logo;
  if (v.slides && v.slides[0]) return v.slides[0].title;
  if (v.images) return v.images.length + ' photos';
  if (v.backLabel) return 'Shows one entry';
  return BLOCKS[sec.type] ? BLOCKS[sec.type].description : '';
}

// 1's block icons for the Blocks list and picker.
export const CAT_ICON = {
  header: 'M4 5h16v4H4z M4 13h10 M4 17h7', hero: 'M4 4h16v16H4z M8 9h8 M8 13h5', text: 'M5 6h14 M5 10h14 M5 14h10 M5 18h7',
  image: 'M4 5h16v14H4z M4 16l5-5 4 4 2-2 5 5 M15 9h.01', about: 'M4 5h7v14H4z M14 7h6 M14 11h6 M14 15h4',
  features: 'M4 4h7v7H4z M13 4h7v7h-7z M4 13h7v7H4z M13 13h7v7h-7z', gallery: 'M4 4h7v7H4z M13 4h7v7h-7z M4 13h7v7H4z M13 13h7v7h-7z',
  testimonials: 'M5 18v-5a5 5 0 0 1 4-5 M5 13h4v5H5 M14 18v-5a5 5 0 0 1 4-5 M14 13h4v5h-4', pricing: 'M5 6h9 M5 12h9 M5 18h9 M17 6h2 M17 12h2 M17 18h2',
  faq: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6v.6 M12 17h.01',
  news: 'M4 6c0-1.66 3.58-3 8-3s8 1.34 8 3-3.58 3-8 3-8-1.34-8-3z M4 6v12c0 1.66 3.58 3 8 3s8-1.34 8-3V6 M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3',
  contact: 'M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z', cta: 'M3 7h18v10H3z M8 12h8',
  footer: 'M4 15h16v4H4z M4 7h10 M4 11h7'
};
export const blockIcon = (type) => CAT_ICON[(BLOCKS[type] || {}).category] || CAT_ICON.text;
