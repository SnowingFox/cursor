import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { parse } from '@babel/parser';
const DIR = 'recovered/app/glass/composer';
const HP = ['// @recovered-by ', '// artifact: ', '// module: ', '// basis: ', '// confidence: ', '// method: ', '// run: '];
function bodyOf(t) { const l = t.split('\n'); let i = 0; while (i < l.length && HP.some((p) => l[i].startsWith(p))) i++; while (i < l.length && l[i].trim() === '') i++; return l.slice(i).join('\n'); }
function parseAny(c) { for (const o of [{ sourceType: 'module', plugins: ['typescript', 'jsx'] }, { sourceType: 'script', plugins: [] }]) { try { return parse(c, o); } catch {} } return null; }
function walk(n, f) { if (!n || typeof n !== 'object') return; if (Array.isArray(n)) { n.forEach((x) => walk(x, f)); return; } if (typeof n.type === 'string') f(n); for (const k of Object.keys(n)) { if (['loc','start','end','leadingComments','trailingComments'].includes(k)) continue; walk(n[k], f); } }
let wrapperVars = 0, bareInits = 0;
for (const file of readdirSync(DIR).filter((f) => f.endsWith('.js')).sort()) {
  const body = bodyOf(readFileSync(join(DIR, file), 'utf8'));
  const ast = parseAny(body);
  if (!ast) continue;
  const m = /^(var\s+)?([A-Za-z_$][\w$]*)\s*=\s*([A-Za-z_$][\w$]*)\(\{\s*"([^"]+)"\(\)\s*\{/.exec(body);
  if (m) { if (m[1]) wrapperVars++; else bareInits++; }
  const anchors = [];
  for (const node of ast.program.body) {
    const isFn = node.type === 'FunctionDeclaration' && node.id;
    if (!isFn) continue;
    const found = [];
    walk(node.body, (n) => {
      if (n.type === 'CallExpression' && n.callee.type === 'Identifier' && n.arguments?.[0]?.type === 'StringLiteral') {
        const v = n.arguments[0].value;
        if (/^[A-Z][A-Za-z0-9]*(\.[A-Za-z0-9]+)+$/.test(v)) found.push('vjt:' + v);
      }
      if (n.type === 'StringLiteral' && n.value === 'data-component') found.push('data-component');
    });
    if (found.length) anchors.push(node.id.name + '[' + found.join(',') + ']');
  }
  const m2 = /^(var\s+)?([A-Za-z_$][\w$]*)\s*=\s*([A-Za-z_$][\w$]*)\(\{\s*"([^"]+)"\(\)\s*\{/.exec(body);
  if (anchors.length) console.log(file.padEnd(50), 'init=' + (m2 ? (m2[1] ? 'var ' : '') + m2[2] : '-'), 'anchors=' + anchors.join(' '));
}
console.log('wrapper var', wrapperVars, 'bare', bareInits);
