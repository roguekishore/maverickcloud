# Build "selfsite editor": one artifact merging 1, 2 and 3

I have three artifacts on claude.ai. Read all three fully with the Artifact tool (`action: "read"`). For 1, also list its files (`scope: "files"`) and read `project/canvas.json` and every `project/*.dc.html`. Do not change, republish or delete any of them.

- **1**, a Design canvas with 20 frames: https://claude.ai/artifact/6ABaR2xuAiWVokViQTu5j1. **Use this one's look.**
- **2**, a single-page app: https://claude.ai/artifact/RMx7eCW85fpZTKPLdeRk18
- **3**, a single-page app and the most complete of the three: https://claude.ai/artifact/49h9MPXaWd9hnq4mcWuZTm

If you don't have the Artifact tool or can't read these, stop and tell me. Don't guess what they contain.

## What to build

Build one working, clickable editor for selfsite, a CMS for small-business websites. Publish it as ONE new artifact: a single-page HTML app like 2 and 3, not a canvas.

- **Look: copy 1 exactly.** 1's tokens and components are the only visual system. That means:
  - the `.ss` variables: Inter + Manrope, accent #2563EB, the neutral greys, borders, radii, shadows and the dark theme
  - the buttons, inputs, segmented controls, menus, sheets, toasts, badges and switches
  - the stroke icon style, spacing and density

  Keep none of 2's or 3's styling. Rebuild their features in 1's style.
- **Features: everything from all three.**
  - 2 and 3 have the deeper editor settings: inspector fields, link picker, block library, page tree and add-page templates, navigation editor, media, collections, redirects, theme presets, colours and fonts, SEO and share-card previews, publish flow, command menu, AI rewrite and the start gallery.
  - 1 adds its own: a Focus editor with keyboard shortcuts and `/` to insert, collections with rich text and version history, a Site design panel, a block picker that previews the block where it will go, Draft/Published state, AI credits spent on Rewrite and alt text, and the mobile bottom-sheet layout.
- When two artifacts do the same job, keep the version that is more complete and easier for a non-technical shop owner to understand, and drop the other. Everything must actually work (state, undo, toasts). Nothing static.
- Layouts for desktop, tablet and phone. On phone, show the canvas with bottom tabs and sheets, as in 1. Light and dark themes follow the system and have a toggle.

## Before writing code

Write a short inventory in your working folder. List every feature and setting in 1, 2 and 3, which artifact you're taking each one from, and what you're dropping and why. Follow it while you build, and summarize it in your final reply.

## Rules

- Product facts: selfsite is the CMS sold with Maverick Creatives websites. The plans are Free, Standard, Plus and Premium. Show no plan prices and invent no numbers or stats; use placeholders like [PRICE]. Sample site content should be a realistic small business (any of the ones in 2 or 3 works).
- 3's code uses the name "SITEFOUNDRY". That name must not appear anywhere in the new UI; the brand is "selfsite".
- Out of scope: the marketing landing page (row 5 of 1), internal tools and pricing pages.
- Load the artifact-design skill before writing, if you have it. Build from source in `prototype/` (React bundled with esbuild). Publish one self-contained `.html` with everything inlined; Google Fonts is fine.
- Accessibility: real buttons, inputs and labels, visible focus, 4.5:1 text contrast in both themes, and 44px touch targets on phone.
- Before publishing, if you have a headless browser, load the page at 1440×900 and 390×844 in both light and dark. Check for console errors and for anything clipped or overlapping, and fix what you find.

## Publish

Publish it as a new private artifact titled "selfsite editor" (icon: `edit`). Reply with the link, the summary of what you kept and dropped, and anything you couldn't carry over.
