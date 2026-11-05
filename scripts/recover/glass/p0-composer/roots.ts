import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { parse } from '@babel/parser';
const DIR = 'recovered/app/glass/composer';
const HP = ['// @recovered-by ', '// artifact: ', '// module: ', '// basis: ', '// confidence: ', '// method: ', '// run: '];
function bodyOf(t) { const l = t.split('\n'); let i = 0; while (i < l.length && HP.some((p) => l[i].startsWith(p))) i++; while (i < l.length && l[i].trim() === '') i++; return l.slice(i).join('\n'); }
function parseAny(c) { for (const o of [{ sourceType: 'module', plugins: ['typescript', 'jsx'] }, { sourceType: 'script', plugins: [] }]) { try { return parse(c, o); } catch {} } return null; }
function walk(n, f) { if (!n || typeof n !== 'object') return; if (Array.isArray(n)) { n.forEach((x) => walk(x, f)); return; } if (typeof n.type === 'string') f(n); for (const k of Object.keys(n)) { if (['loc','start','end','leadingComments','trailingComments'].includes(k)) continue; walk(n[k], f); } }
for (const file of readdirSync(DIR).filter((f) => f.endsWith('.js')).sort()) {
  const ast = parseAny(bodyOf(readFileSync(join(DIR, file), 'utf8')));
  if (!ast) continue;
  const aliases = new Set();
  for (const n of ast.program.body) if (n.type === 'ImportDeclaration' && String(n.source.value).includes('esm-jsx-runtime')) for (const s of n.specifiers) if (s.type === 'ImportSpecifier' && ['jsx','jsxs'].includes(s.imported.name ?? s.imported.value)) aliases.add(s.local.name);
  const out = [];
  for (const node of ast.program.body) {
    if (node.type !== 'FunctionDeclaration' || !node.id) continue;
    let jsx = 0; const dc = new Set(); const vjt = [];
    walk(node.body, (n) => {
      if (n.type === 'CallExpression' && aliases.has(n.callee?.name)) jsx++;
      if (n.type === 'ObjectProperty' && n.key?.name === 'data-component' || n.type === 'ObjectProperty' && n.key?.value === 'data-component') { const v = n.value?.value; if (typeof v === 'string') dc.add(v); }
      if (n.type === 'CallExpression' && n.callee?.name === 'vjt' && typeof n.arguments?.[0]?.value === 'string') vjt.push(n.arguments[0].value);
    });
    out.push(node.id.name + '{jsx:' + jsx + ',dc:' + [...dc].join('|') + ',vjt:' + vjt.join('|') + ',lines:' + (node.loc.end.line - node.loc.start.line + 1) + '}');
  }
  const interesting = out.filter((s) => !s.includes('jsx:0') || s.includes('vjt:'));
  if (interesting.length) console.log(file + ' => ' + interesting.join(' ; '));
}
