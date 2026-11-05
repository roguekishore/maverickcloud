// Text helpers: 3 stored rich text as light markdown; 1 and 2 edit HTML. Everything is
// converted to HTML once, at load, and kept as HTML.

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const inline = (s) => esc(s).replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>').replace(/\*([^*]+)\*/g, '<em>$1</em>');

export function mdToHtml(md) {
  const s = String(md || '').trim();
  if (!s) return '';
  if (/^<(p|ul|ol|h2|h3|blockquote)[\s>]/i.test(s)) return s;
  const out = [];
  s.split(/\n\s*\n/).forEach((block) => {
    const lines = block.split('\n').filter((l) => l.trim());
    if (!lines.length) return;
    if (lines.every((l) => /^\s*-\s+/.test(l))) {
      out.push('<ul>' + lines.map((l) => '<li>' + inline(l.replace(/^\s*-\s+/, '')) + '</li>').join('') + '</ul>');
      return;
    }
    if (lines.length === 1 && /^##\s/.test(lines[0])) { out.push('<h2>' + inline(lines[0].slice(3)) + '</h2>'); return; }
    if (lines.every((l) => /^>\s/.test(l))) { out.push('<blockquote>' + inline(lines.map((l) => l.slice(2)).join(' ')) + '</blockquote>'); return; }
    out.push('<p>' + lines.map(inline).join('<br>') + '</p>');
  });
  return out.join('');
}

// 1's collection bodies are line arrays ("## ", "- ", "> ").
export function linesToHtml(lines) {
  const out = [];
  let ul = null;
  (lines || []).forEach((ln) => {
    if (ln.startsWith('- ')) { if (!ul) { ul = []; out.push(ul); } ul.push(inline(ln.slice(2))); return; }
    ul = null;
    if (ln.startsWith('## ')) out.push('<h2>' + inline(ln.slice(3)) + '</h2>');
    else if (ln.startsWith('> ')) out.push('<blockquote>' + inline(ln.slice(2)) + '</blockquote>');
    else out.push('<p>' + inline(ln) + '</p>');
  });
  return out.map((x) => (Array.isArray(x) ? '<ul>' + x.map((li) => '<li>' + li + '</li>').join('') + '</ul>' : x)).join('');
}

const ALLOWED = new Set(['P', 'BR', 'STRONG', 'B', 'EM', 'I', 'UL', 'OL', 'LI', 'A', 'H2', 'H3', 'BLOCKQUOTE']);
export function sanitize(html) {
  if (typeof document === 'undefined') return html;
  const box = document.createElement('div');
  box.innerHTML = html;
  const walk = (node) => {
    [...node.childNodes].forEach((ch) => {
      if (ch.nodeType === 3) return;
      if (ch.nodeType !== 1) { ch.remove(); return; }
      walk(ch);
      let el = ch;
      if (el.tagName === 'DIV') {
        const p = document.createElement('p');
        while (el.firstChild) p.appendChild(el.firstChild);
        el.replaceWith(p);
        el = p;
      } else if (el.tagName === 'H1' || el.tagName === 'H4') {
        const h = document.createElement(el.tagName === 'H1' ? 'h2' : 'h3');
        while (el.firstChild) h.appendChild(el.firstChild);
        el.replaceWith(h);
        el = h;
      } else if (!ALLOWED.has(el.tagName)) {
        while (el.firstChild) el.parentNode.insertBefore(el.firstChild, el);
        el.remove();
        return;
      }
      [...el.attributes].forEach((a) => { if (!(el.tagName === 'A' && a.name === 'href')) el.removeAttribute(a.name); });
      if (el.tagName === 'A') {
        const h = el.getAttribute('href') || '';
        if (/^\s*javascript:/i.test(h)) el.setAttribute('href', '#');
      }
    });
  };
  walk(box);
  return box.innerHTML.replace(/<p><br><\/p>$/g, '');
}

export const htmlText = (html) => String(html || '').replace(/<\/(p|li|h2|h3|blockquote)>/g, ' ').replace(/<br\s*\/?>/g, ' ').replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/\s+/g, ' ').trim();
export const wordCount = (html) => { const t = htmlText(html); return t ? t.split(' ').length : 0; };
export const firstSentence = (html) => { const t = htmlText(html); const m = t.match(/^[^.!?]+[.!?]/); return m ? m[0] : t.slice(0, 150); };

// The user's rule: no invented prices or stats in sample content. Prices become
// [PRICE], key-number values become [NUMBER], percentages become [NUMBER]%.
export function scrub(v, key) {
  if (typeof v === 'string') {
    let s = v.replace(/(?:₹|Rs\.?\s?)\s?[\d,]+(?:\.\d+)?(?:\s?(?:L|Cr|lakh|crore))?/g, '[PRICE]');
    s = s.replace(/\b\d+(?:\.\d+)?%/g, '[NUMBER]%');
    if (key === 'note' && /review|rating|google|patients|average/i.test(s)) {
      let first = true;
      s = s.replace(/\d[\d.,]*\+?/g, () => { const r = first ? '[RATING]' : '[NUMBER]'; first = false; return r; });
    }
    return s;
  }
  if (Array.isArray(v)) return v.map((x) => scrub(x, key));
  if (v && typeof v === 'object') {
    for (const k of Object.keys(v)) {
      if (k === 'id' || k === 'image' || k === 'pageId' || k === 'sectionId' || k === 'art') continue;
      if (k === 'stats' && Array.isArray(v[k])) { v[k] = v[k].map((st) => ({ ...st, value: '[NUMBER]' })); continue; }
      v[k] = scrub(v[k], k);
    }
  }
  return v;
}
