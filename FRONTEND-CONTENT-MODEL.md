# Frontend stack and content model (2026-10-17)

From the conversation of 2026-10-17, updated 2026-11-05. Status tags: **FIXED** (the
user's word) · **AGREED** (the user said yes to a proposal) · **LEANING** (explained and
accepted in discussion, not formally fixed) · **DEFERRED** (to decide when building the CMS
or designing the backend).

> **2026-11-05: the content model is not frozen.** It starts as **v1** and changes by the
> rules in §3 "Rules for change". v1 is decided after the SITE-FOUNDRY stress test (§4).

---

## 1. Stack — FIXED

| Part | Stack |
|---|---|
| Backend | **Java + MySQL** |
| Customer websites | **Astro** |
| CMS (`app.selfsite.in`) | **React + Vite, in TypeScript** |

How the pieces work:

- **Astro** is a page generator. At publish time it calls the site's components with the
  content and writes plain `.html` / `.css` / image files to `dist/`. Nothing runs after
  that; Caddy serves the files.
- **The CMS** is a client-side app. `vite build` produces static files (one `index.html`
  + JS + CSS). The browser runs the JS, which draws the screens and calls the Java API.
- **No server-side rendering (no Next.js).** Node runs only at build time, never in
  production. Java is the only server.
  - SSR's advantages (SEO, fast first paint, per-request data, server-side secrets) don't
    apply: customer sites get SEO and speed from static generation; the CMS is behind a
    login; secrets and logic live in Java.
- **TypeScript** = JavaScript with types, checked at build time like `javac`. Catches
  typos and shape errors, gives autocomplete, and (with types generated from the Java
  API's OpenAPI spec) keeps the frontend and the backend in sync.

---

## 2. Website sections are React components — FIXED

Each section (Header, Hero, Services, Contact…) is a React component, used twice:

```
EDITING   owner types in the CMS → CMS state changes → component re-renders → live preview
PUBLISH   Java saves content JSON → Astro build calls the same component → static HTML
```

- The preview and the published site come from the same file, so they can't differ.
- **State lives in the CMS editor.** Sections stay pure: values in, HTML out (Astro only
  calls them once at build time).
- Visitors get plain HTML. Interactive parts (menu, carousel, 3D) ship JS only for that
  section: small plain scripts, or Astro hydration (`client:visible` etc.) where needed.
- Rejected: sections as `.astro` files. Browsers can't run them, so preview would need an
  Astro build per change (seconds, Node needed during editing) or a second React copy.

---

## 3. Content model — LEANING

### The design lives in code; the JSON holds only what the owner can edit
- Each section is like a Java class implementing an interface: the renderer only knows
  "give me values, I return HTML". Inside, anything goes (carousel, three.js, animation).
- A carousel = a **list of images** in the JSON; its motion stays in code. A 3D scene may
  expose nothing, or one option such as an accent colour. A section may have no editable
  fields at all.
- So agency designs can vary freely. The format describes editable data, not the design.

### Content JSON: simple, like i18n keys (nested, with lists)
```json
{
  "template": "lakshmi-salon@1",
  "theme":    { "primary": "#8B1E3F", "font": "Poppins" },
  "shared":   { "business": { "name": "Lakshmi Salon", "phone": "+91 98430 12345" },
                "timings":  [ { "days": "Mon–Sat", "hours": "9–20" } ] },
  "pages": [
    { "path": "/", "title": "Home",
      "sections": [
        { "id": "s1", "type": "header", "variant": "centered",
          "values": { "logo": "media/ab12.webp" } },
        { "id": "s2", "type": "hero", "variant": "image-left",
          "values": { "title": "Look your best",
                      "slides": [ { "image": "media/7f3a.webp", "caption": "" } ] } }
      ] }
  ]
}
```
- Shared values (phone, timings) are edited once and used by every section that shows them.
- Images are stored as a media ID / path, never a full URL. The build turns it into the
  CDN address and sizes.
- One shape everywhere: CMS memory → API request → Java validation → MySQL → Astro build.
- The example predates the rules for change: v1 adds a schema version field and IDs on
  list items (exact names come from the stress test, §4).

### Field description (`fields.json`), written once per template
```json
"hero": {
  "title":  { "type": "text", "label": "Heading", "max": 60 },
  "slides": { "type": "list", "label": "Photos", "max": 8,
              "item": { "image": "image", "caption": "text" } }
}
```
- Like Bean Validation annotations on a DTO: the CMS uses it to draw the form; Java uses it
  to validate. Anything not listed is not editable.

### Template package (one per design, versioned)
```
media.selfsite.in/templates/<template>/<version>/
  sections.js   ← the section components, built into one JS file
  fields.json   ← what's editable and each field's type
  theme.css     ← styles
```
- A handcrafted agency site = a template used by one site. A converted SITE-FOUNDRY design
  = a template shared by many. Same mechanism.
- The CMS contains no designs; it loads the site's package at runtime. A new site = upload
  a new package, no CMS redeploy.

### How `app.selfsite.in` renders and restricts editing
```
1. Owner logs in → CMS calls GET /api/site → content JSON + "template": "x@1"
2. CMS loads templates/x/1/sections.js + fields.json
3. PREVIEW (in an iframe, so site CSS and CMS CSS don't clash):
   for each section in the JSON → its component from sections.js → render with values
4. EDIT PANEL: for each field in fields.json → input by type
   (text → text box, phone → phone input, image → picker, list → add/remove/reorder)
   Nothing outside fields.json gets an input, so nothing else is editable.
5. Typing → state changes → preview re-renders instantly
6. Save → PUT /api/site/content → Java checks it against the same fields.json
   (unknown key / wrong type / too long / list over max → rejected) → MySQL draft
7. Publish → Astro build with the same sections.js + saved content → HTML
```
- Java is the real gatekeeper; the form alone isn't enough because a browser can be
  tampered with.

### Editing levels
| Level | Owner can change | Plan |
|---|---|---|
| 1. Values | Text, phone, timings, images, links in a fixed design | **At launch** |
| 2. Structure | Add / remove / reorder sections; add pages | Later (e.g. Plus) |
| 3. Options | Choices the template exposes: variant, colours, show/hide, alignment | Later |
| 4. Div level | Any element, any style (a Wix/Webflow-style designer) | Not planned |

- The JSON carries pages, sections and variants from day one; the editor only enables
  what a plan allows. Later levels need no data rework.
- Level 4 is advised against: the JSON would become the whole HTML tree, owners on phones
  could break designs, and Java couldn't validate meaningfully. Level 3 gives div-level
  control wherever the template chooses to expose it.

### Rules for change — AGREED 2026-11-05

The model is built to change. v1 fixes only the outer shape (version, template, theme,
shared values, pages → sections → values) and the starting field types; everything else
grows.

1. **Every content document carries a schema version; shape changes ship as migrations**
   (FIXED, DECISIONS "Content model"). Like Flyway for the JSON: a v1→v2 change comes
   with an upgrade function that runs over every stored site and is tested against sample
   sites. Old content is upgraded, never misread.
2. **Content is stored as one JSON document per revision** (FIXED), not a table per
   field, so a model change never needs a database change.
3. **Stored content is not component props.** Each section has a small **adapter** that
   turns stored values into its component's props. A component can be redesigned without
   touching saved content, and the reverse. (SITE-FOUNDRY shows why: 1,950 of its props
   are `ReactNode`, which JSON can't hold.)
4. **Stable IDs on sections and on list items**, so reordering, AI edits and later
   features never depend on positions.
5. **A new design need = a new field type** (video, map pin, price menu, 3D model upload):
   add the type, one editor input, one Java validation rule. Existing content is untouched.
6. **Never change what an existing type means; add a new type instead.**
7. **A template's own fields change with a version bump** (`@1` → `@2`) and a one-time
   update of the sites using it (an agency template is used by one site).

---

## 4. v1 — decided after the SITE-FOUNDRY stress test

v1 settles these, since they're stored for every site or shared by the CMS, Java and
Astro. Each can still change later by the rules for change (§3).

1. The outer shape of the content JSON, including the version field and IDs.
2. The launch field types and how each value is stored. Started as ~10 (text, long text,
   phone, email, link, image, list, choice, colour, yes/no); a scan of SITE-FOUNDRY's
   props (2026-11-05) adds candidates:
   - **link as label + address**, not just a URL (737 props)
   - **media as image or video** (239 mentions of video)
   - **light emphasis in headings** (bold/accent words; 42 files)
   - choice (630 props) and yes/no (364) for when level 3 comes
3. The `fields.json` format (type, label, required, max, list items, references to
   shared values).
4. The template package format, and the section adapter (stored values → props).
5. Draft vs published content (mostly part of the database design).

**Approach (AGREED 2026-11-05):** an agent drafts v1 plus adapters for ~15 varied
SITE-FOUNDRY blocks, with local-business shared values (name, phone, timings…), and
reports what didn't fit. The user reviews the report and decides v1. SITE-FOUNDRY is a
range of designs to test against, not a format to adopt. Draft and report:
`content-model-v1-draft/`.

Can come whenever needed: enabling levels 2–3, new field types, click-to-edit in the
preview (`data-field` attributes), exact theme values, how AI rewrites plug in.

---

## 5. Other LEANINGS from the discussion

- Caddy serves the CMS's static files at `app.selfsite.in` and forwards `/api/*` to Java
  on the same domain (simple login cookies, no cross-domain setup).
- Supporting libraries, suggestions only: TanStack Query (API calls), React Router,
  React Hook Form, shadcn/ui (CMS components), OpenAPI-generated TypeScript types.
- Open question: will owners mostly edit on phones? If yes, the CMS is designed
  mobile-first.
