# Storage and media (2026-10-18)

Everything about customer uploads, how they're processed and stored, and how media is
delivered. From the conversations of 2026-10-17 and 2026-10-18. Status tags: **FIXED**
(the user's word) · **AGREED** (user said yes to Claude's proposal) · **PROPOSED**
(Claude's recommendation, not yet confirmed) · **LATER** · **OPEN**.

Context: hosting is FIXED as one Caddy EC2 in Mumbai serving every site's HTML, plus one
CloudFront distribution on `media.selfsite.in` for assets and images (see SCRATCHPAD.md,
"Hosting"). Content JSON stores a media ID, never a URL (FRONTEND-CONTENT-MODEL.md §3).

---

## 1. Where things live

- **FIXED (hosting):** S3 is the source of truth for every built site (HTML + assets)
  and for uploads.
- **PROPOSED:** keep uploads and served files apart, so nothing private can ever be
  reached through CloudFront:

```
uploads bucket (private, never behind CloudFront)
  incoming/<site-id>/<media-id>          ← browser uploads land here; lifecycle: delete after 1 day
  originals/<site-id>/<media-id>.<ext>   ← paid plans only, kept forever

media bucket (private, read only by CloudFront via OAC) → media.selfsite.in
  <site-id>/m_<id>-<width>.webp          ← processed images, video, poster frames, etc.
  <site-id>/_astro/...                   ← hashed CSS / JS / fonts from builds
  templates/<template>/<version>/        ← template packages (sections.js, fields.json, theme.css)
```

- **FIXED:** originals are stored in **S3 Standard**, no Glacier for now.

## 2. Delivery (`media.selfsite.in`)

- **FIXED (hosting):** one CloudFront distribution on one domain for hashed CSS / JS /
  fonts and images, served from S3. One ACM certificate (**us-east-1**), nothing per
  customer. Astro `build.assetsPrefix` points the HTML at it.
- **FIXED (hosting):** hashed assets and images get new names on every change, so they're
  cached for a year and **never invalidated**. HTML is served fresh by Caddy.
  - PROPOSED: if an asset is ever re-processed, the outputs get a new version in the name
    (`m_<id>-v2-<width>.webp`), so "cached forever" stays true.
- **FIXED:** pages use the compressed versions, delivered with **`srcset`** (the browser
  picks the size it needs; Astro writes the tags).
- Gotchas (hosting): CloudFront must send `Access-Control-Allow-Origin` (fonts and
  `type="module"` scripts load cross-origin); CDN paths use the site ID, not the domain;
  `<link rel="preconnect">` to the CDN in every page.
- PROPOSED (checklist, app-side security): the media bucket is private and readable only
  by CloudFront (OAC).
- PROPOSED: CloudFront response headers on media: `X-Content-Type-Options: nosniff`, and
  a CSP that stops an SVG running anything if it is opened directly.
- Hotlinking: cost abuse, not a security issue. A Referer rule only if it ever happens.
- LATER (cost guard, user): media CDN on a CloudFront flat-rate plan.

## 3. Upload flow

- **FIXED:** uploads go straight to S3, never through the box.
- **FIXED:** processing runs on **Lambda**: **sharp** for images, plus an **ffmpeg**
  function for video (videos are allowed and get optimised).
- PROPOSED, the wiring:
  1. The CMS asks Java for an upload slot. Java checks the quota and the per-identity
     upload limit, reserves the file's size against the quota, and returns a **presigned
     POST** (its policy caps the file size at S3; a presigned PUT can't).
  2. The browser uploads to `incoming/`.
  3. The browser tells Java it's done.
     - **Photos and small files:** Java invokes the Lambda **synchronously** and waits
       (a few seconds), then writes the MySQL row and answers the browser.
     - **Video:** Java invokes the Lambda **asynchronously** and returns at once. The
       asset shows "Processing…" in the library while the customer keeps editing. The
       Lambda writes a status file to S3 when done (or on failure); the CMS asks Java
       every few seconds and Java reads that file.
  4. Java tells the Lambda whether to keep the original (paid plans) or not (₹1,000
     sites).
- Lambda setup: arm64, linux-arm64 sharp build bundled, ~1.5 GB memory (CPU grows with
  memory), outside the VPC (reaches S3 directly). ffmpeg as a static arm64 binary.
- The CMS shows the picked file immediately from the device (local preview + progress
  bar) and swaps in the processed version when ready.

### Browser pre-shrink (photos)

- PROPOSED: before uploading, the browser decodes the photo (`createImageBitmap`, which
  applies EXIF rotation), draws it on a canvas with the long edge capped at **2560 px**,
  and exports **JPEG/WebP at quality 0.92**. 6 MB → ~600–900 KB, 0.2–0.8 s on a
  mid-range Android, run in a Web Worker. The canvas drops all EXIF, including GPS.
- Skip pre-shrink (upload as-is, the Lambda handles it): HEIC in Chrome (can't decode),
  animated GIF (canvas keeps one frame), SVG, files under ~1 MB. PNGs with transparency
  export as WebP (JPEG would turn transparency black). Very large photos (e.g. 108 MP):
  decode scaled down or send to the Lambda, to avoid crashing low-end phones.

### Rough timings on Indian 4G (Claude's estimates, not measured)

| What | Total |
|---|---|
| Photo (6 MB phone JPEG) | 3–5 s |
| Video (1-minute phone clip, ~100–150 MB) | 2–4 min (upload is most of it; transcode 30–90 s) |
| Audio / PDF / font | a few seconds |

## 4. Allowed types and checks

- **FIXED:** allowed: **images, SVG, video, audio, PDF, fonts.** Nothing else: no HTML,
  JS, executables, archives. (An HTML page on `media.selfsite.in` could get the whole of
  `selfsite.in` flagged by Google Safe Browsing.)
- **FIXED:** the CMS refuses other files in the browser.
- PROPOSED: the Lambda rejects them too. The browser filter is for the customer; someone
  can skip the CMS and use the presigned link directly. The Lambda reads every file
  anyway, so it costs nothing.
- PROPOSED checks in the Lambda:
  - Detect the type from the file's first bytes, never its name or the browser's
    Content-Type; the Lambda sets the Content-Type on the outputs itself.
  - Cap pixel dimensions (~40 MP) against decompression bombs.
  - Rotate upright from EXIF, **then** strip metadata (otherwise phone photos go sideways).
  - SVG: strip scripts and event handlers.
- **FIXED:** the Free tier is much later or never, so no further upload scrutiny for now.

## 5. Processing and quality

- **FIXED (user): the loss from optimising must be invisible to the human eye.** Settings
  are Claude's call within that bar.
- **FIXED:** **all metadata is stripped from everything**, including stored originals
  (GPS etc.). Only the media itself is kept. Stripping is done without re-encoding, so
  originals keep full quality.
- Claude's settings (chosen with a margin above "good enough"):

| Type | Output |
|---|---|
| Photos | WebP **q85** at widths ~480 / 960 / 1600 / 2400 (no AVIF for now: slow to encode) |
| Logos / graphics (PNG) | **lossless** WebP |
| Animated GIF | animated WebP (or MP4) |
| SVG | sanitised, otherwise unchanged |
| Video | H.264 MP4, **CRF 20** (18 is the usual "visually lossless" mark), max **1080p**, `faststart`, plus a **poster frame** image |
| Audio | AAC ~160 kbps (transparent for most listeners) |
| Fonts | WOFF2 (lossless) |
| PDF | stored as-is |

- Why video can shrink ~150 MB → ~25 MB without visible loss: phones record at ~17 Mbps
  for editing and big screens; ~3 Mbps at 1080p looks the same inside a website. It is
  lossy, not lossless. Where loss could show: fast motion, dark gradients. CRF (a quality
  target, not a fixed size) gives busy scenes more data.

## 6. Originals and quota

- **FIXED: paid plans keep originals forever** (S3 Standard). The site is served from the
  compressed versions.
- **FIXED: the 500 MB quota counts whatever the customer uploads** (the originals). The
  compressed copies are our overhead.
- **FIXED: ₹1,000 lifetime sites don't store originals.** Only the compressed versions
  are kept and counted, and these sites get a **smaller storage allowance** than
  Standard (amount: OPEN, the user sets it).
- **FIXED (user's assumption): a ₹1,000 site never upgrades to Standard**, so there's no
  upgrade path to design.
- PROPOSED: for ₹1,000 sites the compressed size is only known after processing. Java
  reserves the uploaded size at upload, then lowers it to the real compressed size when
  processing finishes.
- PROPOSED: keep browser pre-shrink on paid plans too, so the photo "original" is the
  2560 px q0.92 master (more than any website size needs; uploads stay fast).
- Storage cost (from the hosting cost model): ~500 MB ≈ ₹1/month per customer. Worst case
  with every site at the 500 MB cap: 1,000 sites ≈ ₹1,200/month.

## 7. Named assets

- **FIXED:** the customer names each upload; the name shows in the section pickers and
  can be changed at any time.
- **FIXED:** every asset has a **unique ID** behind the name; the content JSON refers to
  the ID. Renaming = one MySQL row; nothing in the site changes, no republish.
- File URLs use the ID, never the name, so a rename never breaks a link or the cache.
- **FIXED:** Phase 1: pick a named asset in a section's field. Plus/Premium: drop in an
  image section and pick an asset.
- OPEN (left open by the user): must names be unique within a site? Claude suggests yes.

## 8. Deleting

- **FIXED:** deleting an asset the live site still uses: hidden from the library at once,
  actually deleted (with its original) at the next publish that no longer uses it.
  - **FIXED (user, 2026-10-19):** the deletion is permanent; photos are not kept for
    rollback. A rollback to a build that used a deleted photo shows a placeholder and
    blocks save and publish until it's replaced. See DECISIONS.md, "Publishing".

---

## 9. Open list

1. Storage allowance for ₹1,000 sites — the user sets it.
2. Unique asset names within a site — left open.

## 10. Not yet discussed

1. Per-file size caps and a maximum video length (a Lambda run stops at 15 minutes; a
   single presigned POST tops out at 5 GB).
2. Resumable uploads for large videos on flaky 4G (S3 multipart with presigned parts).
3. Alt text for images (accessibility and SEO; AI could draft it).
4. Fitting images to template shapes (16:9 hero, square tiles): focal point + CSS crop
   at launch, a cropper later.
5. What happens to a paid customer's media and originals when they leave (download offer,
   then delete after N days).
6. Video delivery: plain MP4 now; adaptive streaming (HLS) only if long videos appear.
7. ~~Backups for the media and uploads buckets~~ **FIXED (user, 2026-10-19): no S3
   versioning on originals.** See DECISIONS.md, "Backups".
