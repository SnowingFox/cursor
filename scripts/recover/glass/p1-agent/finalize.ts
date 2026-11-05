import { readFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join } from 'node:path';

const ROOT = process.cwd();
const DIR = 'recovered/app/glass/agent';
const MAP = 'recovery/mappings/p1-agent.json';
const MANIFEST = DIR + '/_manifest.json';
const RENAME_LOG = 'scripts/recover/glass/p1-agent/rename-log.json';
const MAPS_DIR = 'scripts/recover/glass/p1-agent/maps';

const HEADER_PREFIXES = ['// @recovered-by ', '// artifact: ', '// module: ', '// basis: ', '// confidence: ', '// method: ', '// run: '];

type Record = Record<string, any>;
const mapping = JSON.parse(readFileSync(join(ROOT, MAP), 'utf8')) as { counts: Record<string, number>; records: Record[] };
const oldManifest = JSON.parse(readFileSync(join(ROOT, MANIFEST), 'utf8')) as { modules: Array<Record> };
const oldByBase = new Map(oldManifest.modules.map((m) => [m.basename, m]));
const renameLog = JSON.parse(readFileSync(join(ROOT, RENAME_LOG), 'utf8')) as { results: Array<Record> };
const renameByBase = new Map(renameLog.results.map((r) => [r.basename, r]));
const maps = new Map<string, Record>();
for (const f of readdirSync(join(ROOT, MAPS_DIR))) {
  if (f.endsWith('.json')) { const j = JSON.parse(readFileSync(join(ROOT, MAPS_DIR, f), 'utf8')) as Record; maps.set(j.basename, j); }
}

function sha256(text: string): string { return createHash('sha256').update(text).digest('hex'); }

function annotate(file: string, record: Record, rename: Record | undefined): { text: string; changed: boolean } {
  const text = readFileSync(file, 'utf8');
  const lines = text.split('\n');
  let i = 0;
  while (i < lines.length && HEADER_PREFIXES.some((p) => lines[i].startsWith(p))) i += 1;
  if (i === 0) return { text, changed: false };
  if (lines.slice(0, i).some((l) => l.startsWith('// fragment: '))) return { text, changed: false };
  const extra: string[] = ['// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module'];
  const deps: string[] = record.deps ?? [];
  if (deps.length) extra.push('// deps: ' + deps.slice(0, 8).join(', ') + (deps.length > 8 ? ', +' + String(deps.length - 8) + ' more' : ''));
  const anchors = record.anchors ?? {};
  const anchorBits: string[] = [];
  if ((anchors.classNames ?? []).length) anchorBits.push('classes=' + (anchors.classNames as string[]).slice(0, 6).join(','));
  if ((anchors.ids ?? []).length) anchorBits.push('ids=' + (anchors.ids as string[]).slice(0, 4).join(','));
  if ((anchors.displayNames ?? []).length) anchorBits.push('displayName=' + (anchors.displayNames as string[]).join(','));
  if (anchorBits.length) extra.push('// anchors: ' + anchorBits.join(' | '));
  if (record.path) extra.push('// path-candidate: ' + record.path + ' (' + record.pathBasis + ')');
  else extra.push('// path-candidate: none (no nls basename match; path inferred, confidence C)');
  if (rename && rename.status === 'applied') {
    const pairs = Object.entries(rename.renames as Record<string, string>).map(([a, b]) => a + '->' + b);
    extra.push('// renamed: ' + pairs.join(', ') + ' (apply-map, script-equivalent AST)');
  } else if (rename && rename.status === 'blocked-parse') {
    extra.push('// renamed: none (fragment not parseable as a program; rename map kept in scripts/recover/glass/p1-agent/maps)');
  }
  const out = [...lines.slice(0, i), ...extra, ...lines.slice(i)];
  return { text: out.join('\n'), changed: true };
}

const manifestModules: Array<Record> = [];
let annotated = 0, renamed = 0, blocked = 0, missing = 0;
for (const record of mapping.records) {
  const base = String(record.basename);
  const file = join(ROOT, DIR, base);
  if (!existsSync(file)) { missing += 1; continue; }
  const rename = renameByBase.get(base);
  const a = annotate(file, record, rename);
  if (a.changed) { writeFileSync(file, a.text); annotated += 1; }
  const finalText = readFileSync(file, 'utf8');
  const status = rename?.status ?? 'no-proposals';
  if (status === 'applied' || status === 'already-applied') renamed += 1;
  if (status === 'blocked-parse') blocked += 1;
  record.emittedFile = DIR + '/' + base;
  record.sha256 = sha256(finalText);
  record.renames = status === 'applied' || status === 'already-applied' ? rename?.renames ?? {} : {};
  record.renameStatus = status;
  if (rename?.reason) record.renameBlockedReason = rename.reason;
  const old = oldByBase.get(base);
  manifestModules.push({
    moduleId: record.id,
    basename: base,
    file: DIR + '/' + base,
    range: record.charRange,
    sha256: record.sha256,
    sha256Original: old?.sha256 ?? null,
    renamed: Object.keys(record.renames).length > 0,
    renames: record.renames,
    confidence: record.confidence,
    pathBasis: record.pathBasis,
    path: record.path,
    deps: record.deps,
  });
}

const pathBasisCounts: Record<string, number> = {};
for (const r of mapping.records) pathBasisCounts[String(r.pathBasis)] = (pathBasisCounts[String(r.pathBasis)] ?? 0) + 1;
const depsResolved = mapping.records.filter((r) => (r.deps ?? []).length > 0).length;
const withJsx = mapping.records.filter((r) => (r.jsxFunctions ?? []).length > 0).length;
mapping.counts = { ...mapping.counts, emittedFiles: manifestModules.length, annotated, renamedFiles: renamed, blockedRenames: blocked, missing, totalRenames: manifestModules.reduce((n, m) => n + Object.keys(m.renames as Record<string, string>).length, 0), pathBasisCounts, depsResolved, modulesWithJsxComponent: withJsx };
mapping.note = 'path=null means no exact nls candidate; candidates[] records basename-index evidence only, not a path claim. renames applied only via scripts/recover/rename/apply-map.ts with AST equivalence.';
writeFileSync(join(ROOT, MAP), JSON.stringify(mapping, null, 2) + '\n');
writeFileSync(join(ROOT, MANIFEST), JSON.stringify({
  generatedAt: new Date().toISOString(),
  cluster: 'p1-agent',
  outDir: DIR,
  tooling: {
    mapping: 'scripts/recover/glass/p1-agent/build-mapping.ts',
    renames: 'scripts/recover/glass/p1-agent/apply-renames.ts -> scripts/recover/rename/apply-map.ts',
    annotate: 'scripts/recover/glass/p1-agent/finalize.ts',
  },
  counts: mapping.counts,
  modules: manifestModules,
}, null, 2) + '\n');
console.log(JSON.stringify({ files: manifestModules.length, annotated, renamed, blocked, missing }));
