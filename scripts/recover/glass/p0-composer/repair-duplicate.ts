import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { parse } from '@babel/parser';

const ROOT = process.cwd();
function readJson(p: string) { return JSON.parse(readFileSync(join(ROOT, p), 'utf8')); }
function splitAll(text: string) {
  const lines = text.split('\n');
  let i = 0;
  while (i < lines.length && (lines[i].startsWith('// ') || lines[i].trim() === '')) i++;
  return { header: lines.slice(0, i), body: lines.slice(i).join('\n') };
}
function parseAny(c: string) {
  for (const o of [{ sourceType: 'module', plugins: ['typescript', 'jsx'] }, { sourceType: 'script', plugins: [] }] as const) {
    try { return parse(c, o as never) as any; } catch {}
  }
  return null;
}
function walk(n: any, f: (x: any) => void) {
  if (!n || typeof n !== 'object') return;
  if (Array.isArray(n)) { n.forEach((x) => walk(x, f)); return; }
  if (typeof n.type === 'string') f(n);
  for (const k of Object.keys(n)) { if (['loc','start','end','leadingComments','trailingComments'].includes(k)) continue; walk(n[k], f); }
}
const mapping = readJson('recovery/mappings/p0-composer.json');
const manifest = readJson('recovered/app/glass/composer/_manifest.json');
const byId = new Map<string, any>(manifest.modules.map((m: any) => [m.moduleId, m]));
const applied = readJson('scripts/recover/glass/p0-composer/maps/applied.json');
const appliedBy = new Map<string, any>(applied.results.map((r: any) => [r.basename, r]));
let repaired = 0;
for (const rec of mapping.records) {
  const m = byId.get(rec.moduleId);
  if (!m) continue;
  const want = m.file;
  if (rec.emittedFile === want) continue;
  repaired++;
  rec.emittedFile = want;
  const fileText = readFileSync(join(ROOT, want), 'utf8');
  const { header, body } = splitAll(fileText);
  const wrapper = /^(var\s+)?([A-Za-z_$][\w$]*)\s*=\s*([A-Za-z_$][\w$]*)\(\{\s*"([^"]+)"\(\)\s*\{/.exec(body);
  rec.wrapperInit = wrapper?.[2] ?? null;
  rec.wrapperFactory = wrapper?.[3] ?? null;
  rec.wrapperInitKind = wrapper?.[1] ? 'var' : wrapper ? 'assignment' : null;
  const strictIdx = body.indexOf('"use strict";');
  let deps: string[] = [];
  if (strictIdx >= 0) {
    const after = body.slice(strictIdx + 13, strictIdx + 4000);
    const end = after.search(/[A-Za-z_$][\w$]*\s*=|[;}]/);
    const prefix = end > 0 ? after.slice(0, end) : after;
    deps = [...prefix.matchAll(/([A-Za-z_$][\w$]*)\(\)/g)].map((x) => x[1]);
  }
  rec.deps = deps;
  rec.depCount = deps.length;
  const ast = parseAny(body);
  rec.parseable = Boolean(ast);
  const decls: any[] = [];
  if (ast) for (const node of ast.program.body) {
    if (node.type === 'FunctionDeclaration' && node.id) decls.push({ name: node.id.name, kind: 'function', lines: node.loc.end.line - node.loc.start.line + 1, params: node.params.length });
    if (node.type === 'VariableDeclaration') for (const d of node.declarations) if (d.id?.type === 'Identifier') decls.push({ name: d.id.name, kind: node.kind, init: d.init?.type ?? null, lines: (d.loc?.end.line ?? node.loc.end.line) - (d.loc?.start.line ?? node.loc.start.line) + 1 });
  }
  rec.topLevelDecls = decls;
  rec.notes = [rec.parseable ? 'body parses as standalone program' : 'segment ends mid-statement at next wrapper start; body does not parse standalone (byte-faithful fragment)',
    'trailing hoisted declarations precede the next wrapper; ownership inferred for next segment ' + (rec.hoistedOwner?.basename ?? '(none)'),
    'wrapper init symbol ' + (rec.wrapperInit ?? '(none)') + ' belongs to this basename (esbuild wrapper key)',
    'duplicate basename in cluster; emitted as ' + want.split('/').pop() + ' by cluster emitter'];
  const renames: Record<string, string> = appliedBy.get(rec.basename)?.renames ?? {};
  rec.renamed = false;
  rec.renames = {};
  rec.basis = rec.path ? 'nls-exact + esbuild-wrapper' : 'esbuild-wrapper + inferred';
  rec.confidence = rec.path ? 'B' : 'C';
  rec.method = 'split';
  const moduleLine = header.find((l) => l.startsWith('// module: ')) ?? '';
  const artifactLine = header.find((l) => l.startsWith('// artifact: ')) ?? '';
  const extra = [
    '// deps: ' + (deps.length ? deps.join(', ') : '(none observed in wrapper prefix)'),
    '// wrapper-init: ' + (rec.wrapperInit ?? '(not detected)'),
    '// hoisted-owner: ' + (rec.hoistedOwner ? rec.hoistedOwner.basename + ' (' + rec.hoistedOwner.moduleId + '); trailing declarations ownership inferred from segment adjacency' : 'none (last segment)'),
    '// path: ' + (rec.path ?? 'null (no unique nls candidate; inferred only)'),
    '// renamed: none',
  ];
  const newHeader = ['// @recovered-by cursor-re', artifactLine, moduleLine, '// basis: ' + rec.basis, '// confidence: ' + rec.confidence, '// method: ' + rec.method, '// run: glass-composer ' + new Date().toISOString(), ...extra].join('\n');
  writeFileSync(join(ROOT, want), newHeader + '\n\n' + body);
  const mrec = byId.get(rec.moduleId);
  mrec.basis = rec.basis; mrec.confidence = rec.confidence; mrec.method = rec.method; mrec.renamed = false; mrec.renames = {}; mrec.parseable = rec.parseable; mrec.hoistedOwner = rec.hoistedOwner;
}
writeFileSync(join(ROOT, 'recovery/mappings/p0-composer.json'), JSON.stringify(mapping, null, 1) + '\n');
writeFileSync(join(ROOT, 'recovered/app/glass/composer/_manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
console.log('repaired', repaired);
