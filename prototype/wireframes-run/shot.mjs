// node shot.mjs <file.html> <out.png> [width height] : full-page screenshot (needs playwright)
import { chromium } from 'playwright';
const [file, out, w = '1440', h = '900'] = process.argv.slice(2);
const b = await chromium.launch();
const pg = await b.newPage({ viewport: { width: +w, height: +h } });
const errs = [];
pg.on('console', m => m.type() === 'error' && errs.push(m.text()));
pg.on('pageerror', e => errs.push(String(e)));
await pg.goto('file://' + (await import('path')).resolve(file));
await pg.waitForTimeout(800);
await pg.screenshot({ path: out, fullPage: true });
await b.close();
if (errs.length) console.log('console errors:', errs.join(' | '));
