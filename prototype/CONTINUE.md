# Continue: merged "selfsite editor"

An earlier session got about a third of the way through this build and was stopped. Pick up from where it left off.

## Setup

- Repo `roguekishore/maverickcloud`, branch `prototype`. Work in `prototype/`.
- Read these in order:
  1. `prototype/BRIEF.md`: the original task and its rules. Follow all of it.
  2. `prototype/INVENTORY.md`: the agreed feature list, saying what comes from 1, 2 and 3 and what is dropped. Build exactly this.
  3. The code in `prototype/src/`.
- References:
  - `prototype/ref/artifact-1/project/*.dc.html` is artifact 1, the look. `Main.dc.html` has the `.ss` tokens and component CSS.
  - `prototype/ref/a2.js` and `prototype/ref/a3.js` are readable copies of artifacts 2 and 3.
  - You can also read the live artifacts with the Artifact tool (links in BRIEF.md). Don't change them.
- Run `npm install` in `prototype/`. The dependencies are already listed: esbuild, react, react-dom, playwright-core, acorn and prettier.

## Where it stopped

Done:
- `src/core/`: model, schema, catalog, templates, themes, media, art, text, icons, ai
- `src/site/site.jsx`: renders the customer's site
- `src/ui/kit.jsx` and `src/ui/ctx.js`: base controls in 1's style

Next, in this order:
1. The inspector field controls: AI rewrite, rich text, link chip and link picker, image field, icon picker, list field, and the field list.
2. The shell: top bar, sidebar, canvas with the device frame and edit chrome, inspector, and the phone bottom bar and sheets.
3. The workspaces: Focus editor, Collections, Media, Site design, Menus, Redirects, Publish and history, Command menu, and Start gallery.
4. An esbuild script that bundles everything into one self-contained `prototype/dist/selfsite-editor.html`. Commit the built file even though `dist/` is in `.gitignore` (`git add -f`).

Reuse what exists. Don't rewrite finished modules unless they're broken.

## Finish

- If a headless browser is available, load the page at 1440×900 and 390×844 in both light and dark. Check for console errors and for anything clipped or overlapping, and fix what you find.
- Commit as you go with short conventional messages (`feat(prototype): …`). Use the author `Kishore N E <contactforkishore@gmail.com>` and end each message with the trailer `Co-Authored-By: Maverick Agent <agent@maverickai.dev>`. Push to `prototype`, never to `main`.
- Publish `dist/selfsite-editor.html` as a new private artifact titled "selfsite editor" (icon: `edit`). If you don't have the Artifact tool, commit the built file, say so, and I'll publish it.
- Reply with the link (or the file path), what's done, and anything from INVENTORY.md you couldn't build.
