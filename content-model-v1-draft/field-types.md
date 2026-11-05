# Field types, content model v1 — PROPOSED

18 types. For each: what is stored, the CMS input, and what the validator (and later Java)
checks. The executable version of these rules is `validator/validate.ts`.

**Rules for every type**
- An empty optional field is left out. `null` is rejected.
- Unknown keys are rejected, at every level.
- A type's meaning never changes. A new need gets a new type, or a new option on a field
  definition when the stored shape stays the same.
- `required: true` rejects missing values, `""`, `[]` and a link without an `href`.

## Text

**text**: one line of plain text.
- Stored: `"Gentle dentistry in Coimbatore"`
- CMS: a text box with a character counter.
- Checks: a string with no line breaks and no control characters. Length up to `max` (default 200) and at least `min`.

**longtext**: plain text over several lines.
- Stored: `"Appointment\nrequest"`
- CMS: a text area.
- Checks: like text, but line breaks are allowed. Default `max` is 2000.

**richline**: one line of formatted text, for headings with an emphasised word or a line with a link.
- Stored: a list of runs, `["Dental care that feels ", { "text": "easy", "em": true }]`. A run is a string or `{ text, strong?, em?, href? }`. `"\n"` inside a run is a line break.
- CMS: a one-line editor with only the buttons that `marks` allows.
- Checks: every run has a valid shape, and only the marks in `marks` (default: strong, em, link) appear. Run links follow the link rules below. Total text length is checked against `max` (default 300).

**richtext**: paragraphs of formatted text.
- Stored: `[{ "p": [runs] }, { "p": [runs] }]`. Later block kinds (such as bullet lists) would be new keys beside `"p"`.
- CMS: a small editor with paragraphs and the allowed marks.
- Checks: each paragraph is `{ p: runs }` with the same run rules. Total length is checked against `max` (default 5000).

## Links and media

**link**: a target, plus visible text when needed.
- Stored: `{ "label": "Book a visit", "href": "page:p_care#s_contact" }`
- CMS: a link picker with a page and section list, the business actions, or a web address.
- Checks: `href` must be one of these forms:
  - `https://…` or `http://…` with a public host
  - `mailto:` followed by a valid email
  - `tel:+…`
  - `page:<pageId>` or `page:<pageId>#<sectionId>`; the page and section must exist
  - `#<sectionId>`, for a section on the same page
  - `action:call`, `action:whatsapp`, `action:email` or `action:directions`; the business detail it needs must be filled in

  Anything else is rejected, including `javascript:`. The `linkText` option decides the label: `"required"` (the default), `"optional"` or `"none"`. A label can be up to 80 characters.

**media**: a photo or video from the site's media library.
- Stored: `{ "id": "m_hero_video", "alt": "A calm treatment room" }`. Kind, size and poster frame come from the library, never from the content.
- CMS: a picker from the media library, with an alt text box.
- Checks: the id exists in this site's library, and its kind is in `accept` (default `["image"]`). Alt text can be up to 250 characters.

**icon**: one icon from a pinned icon set.
- Stored: `"lucide:phone"`
- CMS: an icon picker.
- Checks: the name exists in the pinned set. This test used lucide-react 1.59.0. An icon set rename needs a migration.

## Simple values

**number**:
- Stored: `6`
- CMS: a number input.
- Checks: a finite number within `min`/`max`, and a whole number if `integer` is set.

**toggle**:
- Stored: `true`
- CMS: a switch.
- Checks: a boolean.

**choice**:
- Stored: the option's value, e.g. `"center"`
- CMS: a select or segmented control.
- Checks: the value is one of `options[].value`.

**color**:
- Stored: `"#0F766E"`
- CMS: a colour picker.
- Checks: `#RRGGBB`.

**phone**:
- Stored: `"+919000012345"` (E.164: digits only, with the country code)
- CMS: a phone input that shows the number in the national format.
- Checks: `+`, then 7–15 digits, not starting with 0.

**email**:
- Stored: `"hello@lumodental.example.com"`
- CMS: an email input.
- Checks: has an `@` and a dot, and is at most 254 characters.

**date**:
- Stored: `"2026-11-01"`
- CMS: a date picker.
- Checks: `YYYY-MM-DD`, and a real date.

## Local business

**hours**: weekly opening hours.
- Stored: `{ "slots": [{ "id": "h_week", "days": ["mon", "tue", "wed", "thu", "fri", "sat"], "open": "09:00", "close": "20:00" }], "note": "Closed on public holidays" }`. Structured, so the build can write opening hours for search engines and an "open now" badge later.
- CMS: rows of day chips with opening and closing times, plus a note box.
- Checks: at most 14 slots. Each slot has a stable id, a non-empty list of `mon`–`sun` without repeats, `HH:MM` times (close may be `24:00`), and closes after it opens. The note can be up to 120 characters.

**address**:
- Stored: `{ "line1", "line2"?, "area"?, "city", "state"?, "postcode"?, "country": "IN", "geo"?: { "lat", "lng" } }`
- CMS: address fields, with an optional pin on a map.
- Checks: `line1`, `city` and `country` (two letters) are required. Each line is up to 100 characters. An Indian PIN code has 6 digits. `geo` must be within range.

## Structure

**group**: named fields that belong together.
- Stored: an object with those fields.
- CMS: a fieldset.
- Checks: its `fields`, by the same rules.

**list**: repeating items.
- Stored: `[{ "id": "i_feat_xray", …fields }]`. **Every item is an object with a stable id**, so items can gain fields later without a migration, and translations, comments and AI edits can point at an item.
- CMS: add, remove and reorder.
- Checks: within `min`/`max` items. Each item has an id that is unique across the whole document, and its fields are checked by the same rules.
  - A list with `kinds` instead of `fields` holds items of several kinds, e.g. award or quote tiles. Each item stores `"kind"`, and is checked against that kind's fields.
  - `id` and `kind` are reserved names inside list items.
  - Lists and groups nest at most 3 levels deep.

## Field definition options (fields.json)

`type`, `label`, `help`, `required`, `max`, `min`, `integer` (number), `marks` (richline,
richtext), `linkText` (link), `accept` (media), `options` (choice), `fields` (group, list),
`kinds` (list). An unknown option, an unknown type, or a choice without options is rejected when
the template is loaded, before any content is checked.

## The business details (fixed by the model)

Every site has the same `business` object, checked with these same types: `name` (text,
required), `tagline`, `logo` (media), `phone`, `whatsapp` (phone), `email`, `address`, `map`
(link without text), `hours`, and `social` (a list of network + link). `action:` links read from
these fields. A section lists the ones it shows in `uses`, so the CMS can say "edited on the
Business screen".
