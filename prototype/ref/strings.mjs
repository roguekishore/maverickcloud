import * as acorn from 'acorn';
import fs from 'fs';
const src = fs.readFileSync(process.argv[2], 'utf8');
const out = [];
for (const t of acorn.tokenizer(src, { ecmaVersion: 'latest' })) {
  if (t.type.label === 'string' || t.type.label === 'template') {
    const v = String(t.value);
    if ((v.length >= 3 && /[A-Za-z]/.test(v) && !/^[\w.#:/-]+$/.test(v)) || (v.length > 3 && / /.test(v))) out.push(v.replace(/\n/g, '\\n'));
  }
}
fs.writeFileSync(process.argv[3], out.join('\n'));
console.log(out.length);
