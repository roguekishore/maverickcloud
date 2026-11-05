# selfsite: ten mobile-first wireframe directions

Ten one-file HTML pages, each a wireframe set plus a visual direction for the selfsite
owner app. The owner is a small-business person editing on a phone. These pages are
inspiration for the owner, not a working editor.

## 1. Product facts (binding)

Source: `DECISIONS.md` and the owner's own words. Do not use `SCRATCHPAD.md` for scope.

- **selfsite** is the CMS sold with Maverick Creatives websites (a freelance web design
  agency). The CMS is the edge over city competitors. The brand in every UI is "selfsite".
- **Who edits:** owners of small local businesses, on phones (about 99% of end users are
  mobile; the CMS is **mobile-first**). Desktop and tablet adapt from the phone design.
- **Core jobs** (the whole product, in this order of importance):
  1. see the site (preview);
  2. edit content: words, links, **timings**, **contact info**;
  3. AI-assisted editing: rewrite a text, write alt text, write from a few notes. Each action
     costs a fixed number of credits shown on its button (use "1 credit"); the owner sees a
     monthly allowance, shown as `[CREDITS]`;
  4. manage photos (about 500 MB per site, meter shown);
  5. Draft, then Publish; a trial or plan note may appear but never a price.
- Plans are Free, Standard, Plus, Premium. Show **no plan prices and no invented numbers**
  (customers, ratings, visits, percentages). Use placeholders: `[PRICE]`, `[CREDITS]`,
  `[PHONE]`, `[NUMBER]`.
- **Out of scope, do not draw:** marketing landing page, pricing page, internal tools
  (CRM, Prospector, admin), template showcase or demo galleries, analytics dashboards,
  login and onboarding. The names SITEFOUNDRY and Storefront must not appear.
- Sample business (use it in every variant, so the ten read as one comparison):
  **Lakshmi Salon**, a hair and beauty salon. Site sections: Header, Hero, Services (list,
  prices as `[PRICE]`), About, Gallery, Reviews placeholder, Opening hours, Contact (phone,
  WhatsApp, address, map link), Footer. Collections: Offers and Blog.
- Sections are real blocks owners can reorder (up/down buttons on phone, not drag), hide
  and edit; the design lives in code and the owner edits only values. Shared values
  (phone, timings) are edited once and appear everywhere.

## 2. The inspiration: artifacts 1, 2 and 3 (read them first)

Private artifacts on claude.ai, all three by this owner:

- **1** `https://claude.ai/artifact/6ABaR2xuAiWVokViQTu5j1`: a Design canvas, 20 frames.
  Page editor, Focus editor (keyboard, `/` insert), Collections with rich text and version
  history, Site design panel, block picker with in-page ghost preview, Draft/Published,
  AI credits, mobile bottom tabs and bottom sheets. Inter + Manrope, accent #2563EB.
- **2** `https://claude.ai/artifact/RMx7eCW85fpZTKPLdeRk18`: single-page editor, desktop
  three-pane, inspector fields, link picker, block library, redirects, SEO and share-card
  previews, command menu, AI rewrite.
- **3** `https://claude.ai/artifact/49h9MPXaWd9hnq4mcWuZTm`: the most complete: template
  gallery, page tree and add-page templates, navigation editor, media library, collections,
  publish checklist, command menu, tablet drawer, many theme presets.

Repo copies: `prototype/ref/artifact-1/project/*.dc.html`, `prototype/ref/a2.js`,
`prototype/ref/a3.js`; the earlier merge plan is `prototype/INVENTORY.md`.

All three share one look: calm neutral greys and a single cobalt accent, desktop-shaped,
panel-heavy. That is the baseline. **Each variant must depart from it** in structure and in
visual language, while borrowing named ideas from 1, 2 and 3.

## 3. What every variant page contains

One self-contained `.html` (inline CSS, tiny inline JS allowed, no frameworks, Google Fonts
`<link>` is the only external resource). `<title>` is exactly `nightrunN`. Mobile-first
layout, readable at 390px wide and as a presentation board on desktop.

1. **Header strip:** `nightrunN`, the direction's name, one sentence of its idea.
2. **Six phone frames, 390×844, in this flow, in a horizontal scroll row** (each with a
   small caption under it):
   1. Home (what the owner sees on opening the app)
   2. Edit one thing (timings or contact: the most common job)
   3. Photos
   4. AI help (rewrite or write from notes, with credits shown)
   5. Preview of the site
   6. Publish (draft changes, checks, publish)
3. **Two adaptation frames:** tablet 820×1180 and desktop 1280×800 of the Home or Edit
   screen, showing how the same structure widens.
4. **Visual notes panel:** palette swatches with hex and role, type specimens (heading,
   body, label), shape rules (radius, borders, shadows), spacing and density, motion hints
   (words only), and "from 1/2/3" (3 ideas kept, with which artifact) and "new" (3 ideas
   that are not in any of them).

Wireframe fidelity: real layout, real labels and sample copy, image slots as labelled
placeholder boxes (no photographs, no stock art), icons as simple inline SVG strokes.
The direction's palette, type and shapes are applied (so it is also a visual reference),
but it is not a finished UI and nothing needs to work. Static is fine; CSS-only toggles
are welcome where they explain a state (sheet open, tab selected).

Quality bar: real `<button>`/`<input>`/`<label>`, text contrast 4.5:1 (check light and any
dark parts), touch targets at least 44px on phone frames, nothing clipped or overlapping,
no emoji, no lorem ipsum, no gradient-wash or left-border-card clichés, no `SITEFOUNDRY`,
no prices.

## 4. The ten directions

Each is a structure (how the owner moves) plus a look. They must be clearly different
from each other and from the 1/2/3 baseline.

| N | Name | Structure | Look |
|---|---|---|---|
| 1 | Today | Home is "What do you want to change today?": six big job cards (Timings, Photos, Offer, Contact, Words, Links). Each opens a single-purpose sheet. A small site peek and a sticky Publish bar. From 1: bottom sheets, quick add. | Warm paper #FAF6EE, ink #1F1B16, marigold #E8A317 as fill only (dark text on it), Fraunces + Inter, 20px radius, 1.5px ink outlines, no shadows. |
| 2 | Say it | Assistant-led. A composer docked at the bottom is the main control ("Change Sunday hours to 10 to 6"). Results come back as proposed-change cards with Apply and Undo, credits on each. Browse is a secondary tab. From 3: rewrite tones; from 1: credits. | Graphite #0E1116, text #E8ECF1, mint #7CF0A8 accent, Space Grotesk + JetBrains Mono, 8px radius, hairlines. |
| 3 | Tap the page | The live page fills the screen. Tapping any element opens a bottom sheet editor with peek, half and full snap points. A slim toolbar: undo, redo, preview, publish. From 1: tap-to-edit, block ghost preview, sheets. | Swiss: white, black, signal red #D92D20 accent, Archivo + Archivo Narrow, 0 radius, hairline rules, strict grid. |
| 4 | Profile first | Business profile as grouped settings lists (Basics, Hours, Contact, Social, Photos). Edit a value once and see which sections use it. Page sections are derived. From 2 and 3: inspector fields, page settings. | Cool grey #F2F4F7, white cards, teal #0F766E, DM Sans, inset grouped lists like system settings, 12px radius. |
| 5 | Card deck | One full-width card per website section, swipe left and right with progress dots; each card holds that section's few fields and an Up/Down/Hide row. From 1: bottom tabs; from 3: block library reduced to "Add a card". | Pastel colour-blocking per section (peach #FFD9C7, sage #CFE6D3, lilac #DCD6F7, butter #FBEFB2) with ink #1B1B1F, Bricolage Grotesque, 28px radius. |
| 6 | Coach | A guided to-do: progress ring and "3 things before you publish" (missing alt text, empty hours, broken link), each fixable inline in two taps. Publish is the end of the list. From 3: publish checklist; from 1: Draft/Published. | Clinical calm: white, deep green #14532D, pale mint #E7F4EC, Plus Jakarta Sans, tabular figures, 10px radius. |
| 7 | Photos first | The media wall is home. Tap a photo to see where it is used, write alt text with AI, replace it; a camera/upload action; long-press a photo to place it into a slot. Storage meter. From 3: media library; from 1: alt-text AI. | Gallery dark #121110, cream #F2EBDD text, Instrument Serif italic captions + Inter, full-bleed placeholders, 4px radius. |
| 8 | Split peek | A live mini-preview pinned in the top 40% (scaled phone render), edit controls below in tabs; choosing a field highlights its place above. On tablet it becomes a true side-by-side split. From 3: device frame and scaling; from 1: Site design preview. | Blueprint: paper #EAF0F7, navy #0B2545 lines, dashed guides, IBM Plex Sans + IBM Plex Mono, 4px radius. |
| 9 | Find it | Search-first. A large search field ("hours, phone, photo, menu...") on Home; results are inline editors for that field, with Recents. No tree to learn. From 2, 3 and 1: command menu, `/` insert. | Neo-brutalist: white and black, tangerine #FF5A1F accent, 2px black borders, hard offset shadows, Manrope + Space Mono. |
| 10 | This week | Time-centric. Home is a week strip: festival closures, offer end dates, holiday hours, scheduled posts; tapping a day edits what is true that day. Site editing sits under "Site". From 1: Collections status chips (Scheduled); from 3: timings. | Editorial: cream #FBF5EA, deep red #9B1C31, ink #201A17, Playfair Display + Work Sans, hairline rules and column feel, 2px radius. |

Palette values are starting points: adjust a hex only to reach 4.5:1 contrast. Fonts are
Google Fonts.

## 5. Deliverable and publishing

- Write the page to `{{REPORTS}}/nightrunN.html` (the reports folder, not the repo).
- Check it with `python3 ~/runs/selfsite-wire/check.py N` (the same check the driver runs).
- If `node ~/runs/selfsite-wire/shot.mjs <file.html> <out.png> <width> <height>` works,
  take screenshots at 1440×900 and 390×844 into `{{REPORTS}}/shots/` and fix clipping.
- Publishing: this instance's `claude -p` has **no Artifact tool**, so do not try. The
  operator publishes each page as a private artifact named `nightrunN`.

## 6. Out of scope for the whole run

Any change inside the repo. No real photography, no logo design, no backend, no auth, no
working state or persistence, no changes to artifacts 1, 2, 3.
