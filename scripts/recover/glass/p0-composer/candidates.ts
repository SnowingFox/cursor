import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { parse } from '@babel/parser';

const DIR = 'recovered/app/glass/composer';
const HEADER_PREFIXES = ['// @recovered-by ', '// artifact: ', '// module: ', '// basis: ', '// confidence: ', '// method: ', '// run: '];
function bodyOf(text: string) {
  const lines = text.split('\n');
  let i = 0;
  while (i < lines.length && HEADER_PREFIXES.some((p) => lines[i].startsWith(p))) i++;
  while (i < lines.length && lines[i].trim() === '') i++;
  return lines.slice(i).join('\n');
}
function tryParse(code: string) {
  for (const opts of [
    { sourceType: 'module', plugins: ['typescript', 'jsx'] },
    { sourceType: 'script', plugins: [] },
  ] as const) {
    try { return parse(code, opts as never) as any; } catch {}
  }
  return null;
}
function walk(node: any, visit: (n: any) => void) {
  if (!node || typeof node !== 'object') return;
  if (Array.isArray(node)) { node.forEach((n) => walk(n, visit)); return; }
  if (typeof node.type === 'string') visit(node);
  for (const k of Object.keys(node)) {
    if (k === 'loc' || k === 'start' || k === 'end' || k === 'leadingComments' || k === 'trailingComments') continue;
    walk(node[k], visit);
  }
}
function pascal(base: string) {
  return base.replace(/\.react$/, '').replace(/\.js$/, '').split(/[^A-Za-z0-9]+/).filter(Boolean).map((s) => s[0].toUpperCase() + s.slice(1)).join('');
}
function camel(base: string) {
  const p = pascal(base);
  return p ? p[0].toLowerCase() + p.slice(1) : 'module';
}

const rows: any[] = [];
for (const file of readdirSync(DIR).filter((f) => f.endsWith('.js')).sort()) {
  const body = bodyOf(readFileSync(join(DIR, file), 'utf8'));
  const ast = tryParse(body);
  if (!ast) continue;
  const jsxAliases = new Set<string>();
  for (const node of ast.program.body) {
    if (node.type !== 'ImportDeclaration') continue;
    const src = String(node.source.value);
    if (!src.includes('esm-jsx-runtime') && !src.includes('esm-compiler-runtime')) continue;
    for (const spec of node.specifiers) {
      if (spec.type === 'ImportSpecifier') {
        const imported = spec.imported.name ?? spec.imported.value;
        if (imported === 'jsx' || imported === 'jsxs') jsxAliases.add(spec.local.name);
      }
    }
  }
  const wrappers: any[] = [];
  const comps: any[] = [];
  for (const node of ast.program.body) {
    if (node.type === 'FunctionDeclaration' && node.id) {
      let jsxCalls = 0;
      walk(node.body, (n) => {
        if (n.type === 'CallExpression' && n.callee.type === 'Identifier' && jsxAliases.has(n.callee.name)) jsxCalls++;
      });
      comps.push({ name: node.id.name, jsxCalls, lines: node.loc.end.line - node.loc.start.line + 1, params: node.params.length });
    }
    if (node.type === 'VariableDeclaration') {
      for (const d of node.declarations) {
        if (!d.id || d.id.type !== 'Identifier') continue;
        const init = d.init;
        if (!init) continue;
        if (init.type === 'CallExpression' && init.callee.type === 'Identifier' && /^[A-Za-z_$][\w$]*$/.test(init.callee.name)) {
          const arg = init.arguments?.[0];
          if (arg && arg.type === 'ObjectExpression' && arg.properties?.length === 1 && arg.properties[0].type === 'ObjectMethod') wrappers.push(d.id.name);
        }
        if (init.type === 'ArrowFunctionExpression' || init.type === 'FunctionExpression') {
          let jsxCalls = 0;
          walk(init.body, (n) => { if (n.type === 'CallExpression' && n.callee.type === 'Identifier' && jsxAliases.has(n.callee.name)) jsxCalls++; });
          if (jsxCalls > 0) comps.push({ name: d.id.name, jsxCalls, lines: init.loc.end.line - init.loc.start.line + 1, params: init.params.length, arrow: true });
        }
      }
    }
  }
  rows.push({ file, jsxAliases: [...jsxAliases], wrappers, comps });
}
const compCandidates = rows.filter((r) => r.comps.length === 1);
console.log('parseable', rows.length, 'with jsx aliases', rows.filter((r) => r.jsxAliases.length).length, 'single-component candidates', compCandidates.length);
for (const r of compCandidates) {
  const c = r.comps[0];
  console.log(r.file.padEnd(52), 'fn=' + c.name.padEnd(6), 'jsx=' + String(c.jsxCalls).padEnd(3), 'lines=' + c.lines, 'init=' + (r.wrappers[0] ?? '-'));
}
writeFileSync('scripts/recover/glass/p0-composer/candidates.json', JSON.stringify(rows, null, 1));
