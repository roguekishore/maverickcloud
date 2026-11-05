# Content model v1 stress test: report

Everything here is **PROPOSED**. Nothing is decided until you say so.

## Verdict

- The draft v1 handled all 15 SITE-FOUNDRY blocks and a full two-page sample clinic site. Every adapter type-checks against the blocks' real props and renders to static HTML.
- Nothing needed a change to the outer shape. The gaps are a few field types and marks that can be added later without touching stored content: a table type, a strike-through mark, and a price type.
- The change path works: a demo template change ran over the stored site, passed the new validator, and kept every id and every other value.

## How to run

```
node content-model-v1-draft/check.mjs
```

It borrows SITE-FOUNDRY's installed packages from `D:\PROJECTS\SITEFOUNDRY\node_modules` (set `SITEFOUNDRY_DIR` if it moves) and writes nothing there. It prints one PASS/FAIL line per check and exits non-zero on any failure.

## What was tested

15 blocks:
- `halodental-opus-header`: nav links, plus icon tiles for WhatsApp and directions
- `halodental-opus-footer`: link columns, each with a list of links
- `halodental-opus-hero`: a video backdrop in a media slot
- `functionhealth-heading`: emphasis parts
- `halodental-opus-product`: features with icons, and photo/video slides
- `storeyarchitecture-testimonial`: a carousel that needs JavaScript
- `plumeform-pricing`: plans, a price switch and a comparison table
- `plumeform-faq`: rich-text answers
- `neko-locations`: a branch carousel with addresses
- `storeyarchitecture-contact`: a form, plus the business details
- `anchorage-stats`
- `cursor-logos`
- `halodental-opus-about`: the CTA
- `halodental-opus-news`: the posts list
- `functionhealth-press`: `Tile[][]`, with award and quote tiles

They are put together as one made-up local clinic site: `site.sample.json`, with two pages and a shared header and footer.

## What fit

- **ReactNode slots** (1,950 in SITE-FOUNDRY): the adapter builds them. Media becomes `<img>` or `<video>`, icons come from a pinned set, and rich text becomes elements. Nothing in storage is a React concept.
- **Emphasis headings** (`HeadingPart`, `{ italic }`): stored as `richline` with an `em` mark. Each adapter maps that mark to its block's own format.
- **Nested arrays and mixed tiles** (`Tile[][]`): a list of lists, where the inner list uses `kinds` (award | quote).
- **Local business data**: a fixed `business` object (phone, WhatsApp, address, map, hours, social) plus `action:call`, `action:whatsapp`, `action:email` and `action:directions` links. Change the phone once, and the header's Call button, the WhatsApp tile and the contact form's footer all follow.
- **Links by id**: `page:p_care#s_pricing` survives a page being renamed or moved. The validator catches links to a deleted page or section.
- **Forms**: each form field is named by its stable id, so renaming a label never splits earlier submissions.

## What didn't fit, and why

1. **The footer has no address or hours slot.** SaaS designs don't have one. The adapter adds the address, phone and WhatsApp as a "Visit us" link column, but the hours had nowhere to go. This is a block design issue, not a model issue: local-business templates need blocks with those slots.
2. **Tables** (pricing comparison) are stored as lists of lists, with an id on every cell. It works, but it's wordy, and nothing checks that each row has as many cells as there are columns. A `table` type could come later as an addition.
3. **Strike-through** (one heading style in functionhealth) has no v1 mark, so it is dropped. A `strike` mark could be added later.
4. **Prices are text** (`"₹1,200"`), so search engines can't read them as prices. A `price` type could come later.
5. **Block quirks, found by the render check:**
   - `plumeform-pricing` shows a price's note *instead of* the plan description when there is a price switch, so "Up to four people" never appears.
   - The testimonial carousel puts only the first slide in static HTML; the rest appear after JavaScript loads (an SEO cost).

   The content reaches both components; the blocks choose not to show it.
6. **The form block has no phone input**, so a phone field falls back to plain text.
7. **One business address.** Branches live in a section's list. If each branch needs its own search listing later, a `business.locations` list can be added.
8. **Reserved names.** List items reserve `id` and `kind`, and the definition checker enforces it. It caught a contact field called `kind`, which was renamed to `input`.

## The proposed v1

**Outer shape** (`envelope.schema.json`):

```
schema, template, locale, theme, business, shared, layout{before,after}, pages[]
page    = { id, path, title, description?, sections[] }
section = { id, type, variant?, hidden?, values }
```

**Field types (18)** (`field-types.md`): text, longtext, richline, richtext, link, media, icon, number, toggle, choice, color, phone, email, date, hours, address, group, list (with `kinds` for mixed lists).

**Changes from FRONTEND-CONTENT-MODEL.md §3:**
- a `schema` version field
- `business` is fixed by the model, not defined by each template
- `layout`, so the header and footer are stored once instead of on every page
- `locale`
- every list item is an object with an id
- links point to pages by id, and `action:` links exist
- `link` and `media` are objects
- media covers both images and videos

## Verification (exact)

- **Type-check: 0 errors** (tsc 6.0.3, strict) across all 15 adapters and the lib, validator, migration and check code, against the real SITE-FOUNDRY prop types. A deliberately broken probe file produced 2 errors as expected, and was then deleted.
- **Runtime: 68/68 passed** (rerun by the main session on 2026-11-05, exit 0):
  - the template definitions are well-formed, and all 15 blocks are complete
  - `site.sample.json` has 0 errors and 0 warnings
  - all 15 block samples are valid
  - all 15 blocks render with `renderToString`; every owner text reaches the component, and only the two blocks in item 5 leave some text out of the static HTML
  - the whole site renders (2 pages, 18 section renders)
  - 25 broken documents are each rejected with the expected message
  - 9 migration checks pass: it ran, passed the v2 validator, left the input untouched, kept the ids, changed only the stats section, rendered with the v2 adapter, did nothing on a second run, stopped with a clear message on an unreadable value, and refused a newer model
- **Demo migration:** template `stress-test@1 → @2`. The stats figure moves from text to a number plus a prefix and suffix: `"8,000+"` becomes `8000` and `"+"`. (Chosen over a text-to-link change because a link needs an address the old text doesn't have.)
- **Not run:**
  - real browsers, hydration and visual appearance
  - theme colours and fonts applied as CSS (they are validated, not applied)
  - the Java validator, which doesn't exist yet; `validator/validate.ts` is the spec for it
  - the CMS editor and the Astro build
  - real media: the library is faked in `checks/media.json`
  - SITE-FOUNDRY's own checks
- **Known shortcut:** each adapter's `Values` type is written by hand next to its fields.json. In the real build these types should be generated from fields.json, so the two can't drift.

## Open decisions

1. **UI wording** (Menu, Previous/Next, "Visit us", screen-reader labels): keep it as template constants, or make it owner-editable? *Recommend constants*, translated later through a per-template word list keyed by locale. Tradeoff: an owner can't reword "Menu" without the agency.
2. **How much rich text:** v1 allows bold, emphasis, links, line breaks and paragraphs, with no bullet lists, headings, colours or underline. *Recommend keeping it this small*; more marks can be added later without migrations. Tradeoff: bullet points inside a paragraph field aren't possible; repeating items must come from list fields.
3. **Business details fixed by the model, or defined per template?** *Recommend fixed*: every site gets the same Business screen, the same call/WhatsApp/directions links, and the same search-engine data. Tradeoff: a template can't rename or reshape those fields, only choose not to show them.
