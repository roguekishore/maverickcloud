# selfsite editor: feature inventory (1 + 2 + 3)

Look: 1 only (.ss tokens, Inter + Manrope, #2563EB, greys, radii, shadows, dark theme,
btn / ibtn / seg / menu / item / sheet / toast / badge / switch / kbd, 16px stroke icons).
Logic is ported from 3 (readable source) and extended with 1's and 2's behaviour.
Sample site: Smile Studio Dental, Indiranagar (3's clinic). Prices and stats in sample
content become [PRICE] / [NUMBER]. selfsite facts used: plans Free / Standard / Plus /
Premium (no prices), 500 MB media per site (DECISIONS.md), credits per action shown on
the button, monthly allowance = [CREDITS].

## Shell and layout
| Feature | From | Notes |
|---|---|---|
| Top bar: mark, site switcher, page switcher, Edit/Preview, Draft/Published badge, theme toggle, open live, Publish | 1 | + 3's save state ("Saved") in the badge hint |
| Device widths phone / tablet / desktop, scale-to-fit, zoom % | 3 | 1 had desktop/phone only |
| Left sidebar: Pages / Collections / Media / Site design / Menus nav, page tree, Blocks on page list, AI credits | 1 + 3 | tree, nesting, entries under collection pages from 3 |
| Right inspector, Content / Style tabs, block header with move/delete/close | 1 | fields engine from 3, Style tab from 2 |
| Page settings when nothing is selected, with tip banner | 1 | 3's idle tips moved into it |
| Tablet: inspector as drawer | 2 | |
| Phone: full-bleed canvas, bottom bar (Pages, Blocks, Add, Design, More), bottom sheets, block settings sheet | 1 | 3's selbar actions folded into the sheet header |
| Light/dark follows system + toggle (System/Light/Dark in More) | 1 + 3 | |
| URL bar with back/forward, type a path, redirects, 404, status chip | 3 | drawn inside 1's frame top bar |
| Undo / redo with coalescing, labelled undo toasts | 3 + 2 | |
| Toasts with Undo / View actions | 1 + 3 | |

## Page editing
| Feature | From | Notes |
|---|---|---|
| Click block to select, hover outline + name tag, block toolbar (up, down, duplicate, swap, hide, delete) | 1 + 3 | swap/hide from 3 |
| Edit text in place on the page | 1 + 2 | 2's contentEditable approach |
| Hover between blocks for + Add | 1 | opens the block picker at that spot |
| Drag to reorder in Blocks list, arrows, delete with Undo | 1 + 3 | |
| Hidden sections shown as a strip with Show | 3 | |
| Shared header/footer, detach copy, use shared again, none on this page | 3 + 2 | "None on this page" from 2 |
| Section background Page / Muted / Dark, anchor name, hide toggle | 2 | Style tab |
| Inspector fields: text with counts, textarea, rich text, image + alt, button (label + link), toggle, select, number stepper, icon picker, collection, list (drag, duplicate, delete, max), menu note | 3 + 2 | stepper from 2 |
| Rich text toolbar (bold, italic, link, bullets, numbered, clear) | 2 + 1 | |
| Link picker: page, section, collection entry, web, phone, WhatsApp (+message), email (+subject), file; new tab; broken/hidden flags | 3 + 2 | |
| AI Rewrite with tones (Shorter, Warmer, More confident, Simpler), 1 credit each | 3 + 1 | credits from 1 |
| AI alt text, AI search description, Improve selection in rich text, 1 credit each | 1 + 3 | |
| AI credits counter: used this month, allowance [CREDITS], none-left state | 1 | 1's "38 of 50" was invented, replaced |

## Focus editor (1)
Full-screen page, floating toolbar (page switcher, ⌘K search, insert, undo, redo, preview,
theme, shortcuts, draft badge, Publish), block bar (edit text, move, duplicate, insert
below, settings, delete), keys J/K/↑↓, Enter, Esc, Home/End, /, ⌥↑↓, ⌘D, ⌫, ⌘Z, ⇧⌘Z,
P, ⌘↵, G then C/D/M/H/E, ?, slash menu with filter and arrows, shortcuts dialog, tooltips,
"click the page" hint, "Previewing as a visitor" pill. Same shortcuts work in the classic editor.

## Blocks
| Feature | From |
|---|---|
| 21 block types (headers, heroes, about, features, price list, plans, gallery, reviews, quote, FAQ, latest entries, entry page, contact, CTA, footers) | 3 |
| Text block (single/two columns, alignment), single image (contained/wide/full + caption), hero centered / photo-behind layouts, gallery masonry / carousel + columns + shape, WhatsApp card CTA | 1 |
| Rich text block, collection cards with prices, "Made with selfsite" toggle | 2 |
| Block picker with in-page ghost preview at the insertion point, position menu, categories, search, tags | 1 + 3 |
| Swap a block, carrying matching fields over | 3 |
| Block library cards rendered live in your theme, from every template | 3 |

## Pages, menus, redirects
Page tree with nesting, add page (blank / from template with live preview / duplicate),
delete page with references, redirect target and moved children, make home page,
visibility Live / Hidden / Draft, slug clash errors, automatic redirects on slug/parent
change, 404 page, collection list + detail pages with entry picker (3). Menus editor:
header and footer, drag to reorder and nest, add page / custom link, auto-add new pages (3).
Redirects: add, edit, 301/302, validation, try it in preview (3), * wildcards and the
"Try an address" tester (2).

## Collections (1 + 3 + 2)
Full workspace from 1: list with search, status chips (All, Published, Edited, Drafts,
Scheduled), tag filter, table / phone rows; entry editor with title, address (locked when
live, redirect note), cover image + alt (AI), rich text body with full toolbar, word count
and read time, tags with suggestions, Publishing card, Search and sharing card with SERP
preview, Save draft / Publish / Publish changes, per-entry version history with restore.
From 3: Services and Blog collections with price / duration / summary and date / author /
excerpt, list and detail pages, "Open its page", redirect on slug change.
From 2: duplicate-slug check, rename collection.

## Media (3 + 2 + 1)
Library workspace and picker: All / Images / Videos / Files / No alt text filters, upload
(real files, drag and drop), 500 MB meter, details (rename, alt text with AI, size,
dimensions, used in), delete blocked while in use, delete confirmation (2).

## Site design (1 + 3)
1's Site design workspace with live preview and device toggle. Merged settings: presets (3),
logo upload / mark and name / size (1), brand + accent colour with contrast check (1 + 3),
background (1), light/dark site mode and all colour tokens (3), heading and body fonts (1 + 3
font list), text size (1), section spacing (1 + 3), corners (1 + 3), button style (1), page
width (3), reset to preset.

## Publish and history
Publish dialog: Draft → Live cards, checklist (broken links, hidden/draft links, missing alt
text, missing search details) with Fix, change list, publishing steps, done state with copy
address (3). Header Draft / Publishing / Published states (1). Version history: view a
version read-only, Restore into draft, Discard draft changes (2).

## Command menu
⌘K with groups Selected block, Insert, Jump to page/entry, Open, View, Site, Go to, Help,
keyboard navigation, shortcuts shown (1 + 3).

## Start gallery (3 + 2)
Template gallery with business and style filters, live scaled previews, template preview
with clickable pages and devices, Name your site with address availability check, creation
steps, site switcher between sites.

## Dropped, and why
- 1's landing page (row 5): out of scope.
- 1's "Fields", "New collection", "Crop" and "Settings" buttons: static in 1, no behaviour to keep.
- 1's per-block "Save design" button: everything autosaves to the draft; one Publish is simpler.
- 1's quick 5-item add menu: replaced by the block picker opened at the same spot (it covers 25+ blocks and previews in place).
- 1's cycling canned rewrites: replaced by 3's tone picker, which shows options before replacing.
- 3's instant Roll back (goes live at once): replaced by 2's Restore into draft, which is safer.
- 2's hard publish block on errors: 3's "Publish anyway" with a clear warning is less of a dead end.
- 2's "Your plan keeps the last 10 versions" and 1's "38 of 50 credits", "up to 10 MB": invented numbers.
- 2's and 3's chrome styling, fonts list in the UI, cobalt accent: replaced by 1's system.
- "SITEFOUNDRY" string (2 UI, 3 CSS comment): not carried over.
