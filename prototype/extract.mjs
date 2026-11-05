// Pulls 3's reusable logic (not its styling) into source modules.
import fs from 'fs';
import path from 'path';
const root = path.dirname(new URL(import.meta.url).pathname).replace(/^\/([A-Za-z]:)/, '$1');
const lines = fs.readFileSync(path.join(root, 'ref/a3.js'), 'utf8').split('\n');
const L = (a, b) => lines.slice(a - 1, b).join('\n');
const w = (f, s) => fs.writeFileSync(path.join(root, 'src/core', f), s + '\n');
w('iconspec.js', '// Icon paths from artifact 3 (24px grid, round stroke).\nexport const SPEC = {\n' + L(23, 122) + '\n};');
w('themes.js', '// Theme presets and tokens from artifact 3, extended for 1\'s Site design.\n' + L(552, 727));
w('templates.js', L(730, 1254));
w('art.js', L(1256, 1579));
w('media.js', L(1581, 1660));
w('model.js', L(1662, 2224));
console.log('ok');
