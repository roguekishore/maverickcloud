// Simulated AI actions. The rewrite engine is 3's; credit spending is 1's.
const FILLER = /\b(very|really|just|simply|actually|basically|truly|quite)\s+/gi;
const sentences = (t) => (String(t).match(/[^.!?]+[.!?]*/g) || [t]).map((s) => s.trim()).filter(Boolean);
const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
const end = (s) => (/[.!?”]$/.test(s) ? s : s + '.');

export function rewrite(text, tone, isHeading) {
  const t = String(text || '').trim();
  if (!t) return [];
  const first = sentences(t)[0];
  if (tone === 'shorter') {
    if (isHeading) {
      const words = t.replace(/[.]$/, '').split(/\s+/);
      const a2 = t.replace(/\s+(for|with|in|on|at|from|to|by|that|who)\s+.*$/i, '').replace(/[.]$/, '');
      const b3 = cap(words.slice(1).join(' '));
      const c2 = words.slice(0, Math.max(3, Math.ceil(words.length / 2))).join(' ');
      return [a2, b3, c2].filter((x, i, arr) => x && x.split(' ').length >= 2 && x !== t && arr.indexOf(x) === i).slice(0, 2);
    }
    const a = end(first.replace(FILLER, '').trim());
    const clause = t.replace(FILLER, '').split(/,\s+/)[0];
    const b2 = end(clause.split(/\s+/).slice(0, 14).join(' ').replace(/[,;:–-]+$/, ''));
    return [a, b2].filter((x, i, arr) => x && arr.indexOf(x) === i && x !== t);
  }
  if (tone === 'warmer') {
    const base = t.replace(/^We offer/i, 'We’re happy to offer').replace(/^Our /, 'Our friendly ');
    if (isHeading) return [base.replace(/\.$/, '') + ', with a smile', 'Come in. ' + cap(base.replace(/\.$/, ''))];
    return [end(base) + ' We’d love to see you.', 'You’re in good hands here. ' + base];
  }
  if (tone === 'confident') {
    const a = t.replace(/\b(we try to|try to|aim to|hope to|can help you|can help)\b\s*/gi, '').replace(/\bcan\b/g, 'will').replace(FILLER, '');
    return [cap(a), isHeading ? cap(first.replace(/\.$/, '')) + '. Guaranteed in writing' : end(cap(first.replace(FILLER, ''))) + ' No surprises.'];
  }
  const swap = [[/\butilise\b/gi, 'use'], [/\bapproximately\b/gi, 'about'], [/\bcommence\b/gi, 'start'], [/\badditional\b/gi, 'more'], [/\bassistance\b/gi, 'help'], [/\bin order to\b/gi, 'to'], [/\bprior to\b/gi, 'before'], [/\bpurchase\b/gi, 'buy'], [/\bresidence\b/gi, 'home']];
  let s = t;
  swap.forEach(([a, b]) => { s = s.replace(a, b); });
  const parts = s.split(/,\s+(?:and|but|so)\s+/);
  const b = parts.length > 1 ? parts.map((p) => end(cap(p.trim()))).join(' ') : sentences(s).map((x) => end(cap(x.replace(FILLER, '')))).join(' ');
  return [s === t ? s.replace(FILLER, '') : s, b].filter((x, i, arr) => arr.indexOf(x) === i && x);
}
export const TONES = [{ id: 'shorter', label: 'Shorter' }, { id: 'warmer', label: 'Warmer' }, { id: 'confident', label: 'More confident' }, { id: 'simpler', label: 'Simpler' }];

// Alt text from what the media library knows about the picture.
export function altFor(m, context) {
  if (!m) return '';
  if (m.hint) return m.hint;
  const base = m.name.replace(/\.[a-z0-9]+$/i, '').replace(/^IMG[_-]?\d+$/i, '').replace(/[-_]+/g, ' ').trim();
  if (base) return cap(base) + (context ? ', on the ' + context.toLowerCase() + ' page' : '');
  return 'Photo' + (context ? ' for ' + context : '');
}

export function describe(title, text, business) {
  const s = sentences(String(text || '').replace(/\s+/g, ' ')).slice(0, 2).join(' ');
  const out = s && s.length > 40 ? s : (title ? title + ' at ' + business + '.' : 'From ' + business + '.');
  return out.length > 158 ? out.slice(0, 155).replace(/\s+\S*$/, '') + '…' : out;
}
