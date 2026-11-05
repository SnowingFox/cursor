import { readFileSync, readdirSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { parse } from '@babel/parser';

const ROOT = process.cwd();
const DIR = 'recovered/app/glass/composer';
const MAPS = 'scripts/recover/glass/p0-composer/maps';
const OUT = 'recovery/mappings/p0-composer.json';
const HP = ['// @recovered-by ', '// artifact: ', '// module: ', '// basis: ', '// confidence: ', '// method: ', '// run: '];

function readJson(path: string) { return JSON.parse(readFileSync(join(ROOT, path), 'utf8')); }
function stripHeader(t: string) {
  const lines = t.split('\n');
  let i = 0;
  while (i < lines.length && HP.some((p) => lines[i].startsWith(p))) i++;
  const header = lines.slice(0, i);
  while (i < lines.length && lines[i].trim() === '') i++;
  return { header, body: lines.slice(i).join('\n') };
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
  for (const k of Object.keys(n)) {
    if (['loc', 'start', 'end', 'leadingComments', 'trailingComments'].includes(k)) continue;
    walk(n[k], f);
  }
}
function pascal(base: string) {
  return base.replace(/\.react\.js$/, '').replace(/\.js$/, '').split(/[^A-Za-z0-9]+/).filter(Boolean).map((s) => s[0].toUpperCase() + s.slice(1)).join('');
}
function camel(base: string) { const p = pascal(base); return p ? p[0].toLowerCase() + p.slice(1) : 'module'; }

const cluster = readJson('recovery/clusters/p0-composer.json');
const tree = readJson('recovery/mappings/glass-tree.json');
const treeById = new Map<string, any>(tree.records.map((r: any) => [r.moduleId, r]));
const inv = readJson('recovery/inventory/bundles.json');
const glass = inv.bundles.find((b: any) => String(b.bundle).includes('workbench.glass.main.js'));
const segs = glass.segments.filter((s: any) => s.basename).sort((a: any, b: any) => a.charStart - b.charStart);
const segIndex = new Map<string, number>(segs.map((s: any, i: number) => [s.id, i]));
const segById = new Map<string, any>(segs.map((s: any) => [s.id, s]));

const records: any[] = [];
const maps: any[] = [];
const skipped: any[] = [];
const stats = { total: 0, parsed: 0, exact: 0, ambiguous: 0, none: 0, renamedModules: 0, renames: 0 };

for (const mod of cluster.modules) {
  stats.total++;
  const rec = treeById.get(mod.id) as any;
  const seg = segById.get(mod.id);
  const idx = segIndex.get(mod.id) as number;
  const prev = idx > 0 ? segs[idx - 1] : null;
  const next = idx >= 0 && idx + 1 < segs.length ? segs[idx + 1] : null;
  const file = join(DIR, mod.basename);
  const raw = readFileSync(join(ROOT, file), 'utf8');
  const { body } = stripHeader(raw);
  const ast = parseAny(body);
  const parsed = Boolean(ast);
  if (parsed) stats.parsed++;
  const exact = Boolean(rec?.candidatePath);
  if (exact) stats.exact++;
  else if ((rec?.candidateCount ?? 0) > 1) stats.ambiguous++;
  else stats.none += 1;

  const wrapper = /^(var\s+)?([A-Za-z_$][\w$]*)\s*=\s*([A-Za-z_$][\w$]*)\(\{\s*"([^"]+)"\(\)\s*\{/.exec(body);
  const wrapperKind = wrapper?.[1] ? 'var' : wrapper ? 'assignment' : null;
  const initSymbol = wrapper?.[2] ?? null;
  const factory = wrapper?.[3] ?? null;
  const strictIdx = body.indexOf('"use strict";');
  let deps: string[] = [];
  if (strictIdx >= 0) {
    const after = body.slice(strictIdx + 13, strictIdx + 4000);
    const end = after.search(/[A-Za-z_$][\w$]*\s*=|[;}]/);
    const prefix = end > 0 ? after.slice(0, end) : after;
    deps = [...prefix.matchAll(/([A-Za-z_$][\w$]*)\(\)/g)].map((m) => m[1]);
  }
  const decls: any[] = [];
  if (ast) {
    for (const node of ast.program.body) {
      if (node.type === 'FunctionDeclaration' && node.id) decls.push({ name: node.id.name, kind: 'function', lines: node.loc.end.line - node.loc.start.line + 1, params: node.params.length });
      if (node.type === 'VariableDeclaration') for (const d of node.declarations) if (d.id?.type === 'Identifier') decls.push({ name: d.id.name, kind: node.kind, init: d.init?.type ?? null, lines: (d.loc?.end.line ?? node.loc.end.line) - (d.loc?.start.line ?? node.loc.start.line) + 1 });
      if (node.type === 'ClassDeclaration' && node.id) decls.push({ name: node.id.name, kind: 'class', lines: node.loc.end.line - node.loc.start.line + 1 });
    }
  }
  const notes: string[] = [];
  notes.push(parsed ? 'body parses as standalone program' : 'segment ends mid-statement at next wrapper start; body does not parse standalone (byte-faithful fragment)');
  notes.push('trailing hoisted declarations precede the next wrapper; ownership inferred for next segment ' + (next ? next.basename : '(none)'));
  if (initSymbol) notes.push('wrapper init symbol ' + initSymbol + ' belongs to this basename (esbuild wrapper key)');
  if (exact) notes.push('path is nls-exact candidate; directory not claimed for non-exact modules');

  const mapping = {
    moduleId: mod.id,
    basename: mod.basename,
    emittedFile: 'recovered/app/glass/composer/' + mod.basename,
    range: [seg?.charStart ?? null, seg?.charEnd ?? null],
    sha256: seg?.sha256 ?? null,
    path: rec?.candidatePath ?? null,
    pathBasis: rec?.candidatePath ? 'nls-exact' : 'inferred',
    candidateCount: rec?.candidateCount ?? 0,
    candidates: (rec?.candidates ?? []).slice(0, 5),
    confidence: rec?.candidatePath ? 'B' : 'C',
    wrapperInit: initSymbol,
    wrapperFactory: factory,
    wrapperInitKind: wrapperKind,
    deps,
    depCount: deps.length,
    topLevelDecls: decls,
    parseable: parsed,
    hoistedOwner: next ? { moduleId: next.id, basename: next.basename } : null,
    moduleOwnHoistedPrefix: prev ? { moduleId: prev.id, basename: prev.basename } : null,
    notes,
  };
  records.push(mapping);

  if (parsed) {
    const jsxAliases = new Set<string>();
    for (const node of ast.program.body) {
      if (node.type !== 'ImportDeclaration') continue;
      const src = String(node.source.value);
      if (!src.includes('esm-jsx-runtime')) continue;
      for (const s of node.specifiers) if (s.type === 'ImportSpecifier' && ['jsx', 'jsxs'].includes(s.imported.name ?? s.imported.value)) jsxAliases.add(s.local.name);
    }
    const usedNames = new Set<string>();
    walk(ast.program, (n) => { if (n.type === 'Identifier') usedNames.add(n.name); if (n.type === 'JSXIdentifier') usedNames.add(n.name); });
    const renames: Record<string, string> = {};
    const evidence: any[] = [];
    const initName = initSymbol && wrapperKind === 'var' ? camel(mod.basename) + 'ModuleInit' : null;
    if (initName && initSymbol && !usedNames.has(initName)) {
      renames[initSymbol] = initName;
      evidence.push({ from: initSymbol, to: initName, kind: 'wrapper-init', basis: 'esbuild wrapper key basename' });
    }
    if (next && jsxAliases.size > 0) {
      const nextBase = next.basename ?? '';
      const isComponentName = /^[A-Z]/.test(nextBase) || nextBase.includes('.react.');
      const nextPascal = pascal(nextBase);
      const jsxFns = decls.filter((d) => d.kind === 'function').filter((d) => {
        const node = ast.program.body.find((n: any) => n.type === 'FunctionDeclaration' && n.id?.name === d.name);
        if (!node) return false;
        let hits = 0;
        walk(node.body, (n) => { if (n.type === 'CallExpression' && jsxAliases.has(n.callee?.name)) hits++; });
        return hits > 0;
      });
      if (isComponentName && nextPascal && jsxFns.length === 1 && !usedNames.has(nextPascal)) {
        renames[jsxFns[0].name] = nextPascal;
        evidence.push({ from: jsxFns[0].name, to: nextPascal, kind: 'component', basis: 'segment adjacency (hoisted decl precedes next wrapper) + JSX render + next basename', hoistedOwner: next.basename });
      }
    }
    if (Object.keys(renames).length > 0) {
      maps.push({ moduleId: mod.id, basename: mod.basename, emittedFile: mapping.emittedFile, renames, evidence, notes: ['renames only identifiers; statements/literals untouched', 'apply via scripts/recover/rename/apply-map.ts (AST equivalence enforced)'] });
      stats.renamedModules++;
      stats.renames += Object.keys(renames).length;
    } else {
      skipped.push({ moduleId: mod.id, basename: mod.basename, reason: 'parseable but no evidence-backed rename candidate' });
    }
  } else {
    skipped.push({ moduleId: mod.id, basename: mod.basename, reason: 'fragment unparseable (truncated at next wrapper); apply-map cannot certify AST equivalence' });
  }
}

mkdirSync(join(ROOT, MAPS), { recursive: true });
for (const file of readdirSync(join(ROOT, MAPS))) if (file.endsWith('.json')) writeFileSync(join(ROOT, MAPS, file), '');
for (const m of maps) writeFileSync(join(ROOT, MAPS, m.basename.replace(/\.js$/, '') + '.json'), JSON.stringify({ moduleId: m.moduleId, basename: m.basename, source: m.emittedFile, renames: m.renames, evidence: m.evidence, notes: m.notes }, null, 2) + '\n');
writeFileSync(join(ROOT, MAPS, '_index.json'), JSON.stringify({ generatedAt: new Date().toISOString(), cluster: 'p0-composer', modules: maps.length, renames: stats.renames, maps: maps.map((m) => ({ basename: m.basename, file: MAPS + '/' + m.basename.replace(/\.js$/, '') + '.json', renames: m.renames })), skipped }, null, 2) + '\n');

writeFileSync(join(ROOT, OUT), JSON.stringify({
  generatedAt: new Date().toISOString(),
  cluster: 'p0-composer',
  bundle: glass.bundle,
  bundleSha256: glass.sha256,
  counts: { ...stats, mapped: records.length, renameMaps: maps.length },
  conventions: { exactPaths: 'nls-exact only; null means no unique candidate (never claimed)', confidence: 'B only for nls-exact paths, C otherwise (weakest claim wins)', hoistedOwnership: 'trailing declarations in a file belong to the next bundle segment (verified against 4 vjt anchors and next basenames)' },
  records,
}, null, 1) + '\n');
console.log(JSON.stringify({ stats, skipped: skipped.length }, null, 2));
console.log('maps sample:', maps.slice(0, 8).map((m) => m.basename + ' => ' + JSON.stringify(m.renames)).join('\n'));
