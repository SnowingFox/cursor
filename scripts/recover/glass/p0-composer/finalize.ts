import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = process.cwd();
const DIR = 'recovered/app/glass/composer';
const HP = ['// @recovered-by ', '// artifact: ', '// module: ', '// basis: ', '// confidence: ', '// method: ', '// run: '];
function readJson(p: string) { return JSON.parse(readFileSync(join(ROOT, p), 'utf8')); }
function sha256(s: string) { return createHash('sha256').update(s).digest('hex'); }
function split(text: string) {
  const lines = text.split('\n');
  let i = 0;
  while (i < lines.length && HP.some((p) => lines[i].startsWith(p))) i++;
  const header = lines.slice(0, i);
  while (i < lines.length && lines[i].trim() === '') i++;
  return { header, body: lines.slice(i).join('\n') };
}
const mapping = readJson('recovery/mappings/p0-composer.json');
const applied = readJson('scripts/recover/glass/p0-composer/maps/applied.json');
const appliedBy = new Map<string, any>(applied.results.map((r: any) => [r.basename, r]));
const now = new Date().toISOString();
let headerRewrites = 0;
let bodyChanges = 0;
const coverage = { total: 0, emitted: 0, renamedModules: 0, renamedIdentifiers: 0, exactPaths: 0, nullPaths: 0, parseable: 0, unparseableBlocked: 0, confA: 0, confB: 0, confC: 0, byHoistedOwner: {} as Record<string, number> };
const manifest = readJson(DIR + '/_manifest.json');
for (const rec of mapping.records) {
  coverage.total++;
  coverage.emitted++;
  const file = join(ROOT, rec.emittedFile);
  const current = readFileSync(file, 'utf8');
  const { header, body } = split(current);
  const before = sha256(body);
  const appliedRec = appliedBy.get(rec.basename);
  const renames: Record<string, string> = appliedRec?.renames ?? {};
  const renamed = Object.keys(renames).length > 0;
  const basis = rec.path ? 'nls-exact + esbuild-wrapper' : 'esbuild-wrapper + inferred';
  const confidence = rec.path ? 'B' : 'C';
  const method = renamed ? 'split+rename' : 'split';
  const moduleLine = header.find((l) => l.startsWith('// module: ')) ?? '// module: ' + rec.basename + ' range:' + (rec.range?.[0] ?? '?') + '..' + (rec.range?.[1] ?? '?');
  const artifactLine = header.find((l) => l.startsWith('// artifact: ')) ?? '';
  const extra = [
    '// deps: ' + (rec.deps.length ? rec.deps.join(', ') : '(none observed in wrapper prefix)'),
    '// wrapper-init: ' + (rec.wrapperInit ?? '(not detected)') + (renames[rec.wrapperInit ?? ''] ? ' -> ' + renames[rec.wrapperInit] : ''),
    '// hoisted-owner: ' + (rec.hoistedOwner ? rec.hoistedOwner.basename + ' (' + rec.hoistedOwner.moduleId + '); trailing declarations ownership inferred from segment adjacency' : 'none (last segment)'),
    '// path: ' + (rec.path ?? 'null (no unique nls candidate; inferred only)'),
    '// renamed: ' + (renamed ? Object.entries(renames).map(([a, b]) => a + ' -> ' + b).join('; ') + ' (apply-map AST equivalent)' : 'none'),
  ];
  const newHeader = ['// @recovered-by cursor-re', artifactLine, moduleLine, '// basis: ' + basis, '// confidence: ' + confidence, '// method: ' + method, '// run: glass-composer ' + now, ...extra].join('\n');
  const next = newHeader + '\n\n' + body;
  const after = sha256(split(next).body);
  if (after !== before) bodyChanges++;
  writeFileSync(file, next);
  headerRewrites++;
  rec.renamed = renamed;
  rec.renames = renames;
  rec.basis = basis;
  rec.confidence = confidence;
  rec.method = method;
  rec.bodySha256 = after;
  rec.headerNotes = extra;
  if (rec.path) coverage.exactPaths++; else coverage.nullPaths++;
  if (rec.parseable) coverage.parseable++; else coverage.unparseableBlocked++;
  coverage.confB += rec.confidence === 'B' ? 1 : 0;
  coverage.confC += rec.confidence === 'C' ? 1 : 0;
  if (rec.hoistedOwner) coverage.byHoistedOwner[rec.hoistedOwner.basename] = (coverage.byHoistedOwner[rec.hoistedOwner.basename] ?? 0) + 1;
  const mrec = manifest.modules.find((m: any) => m.moduleId === rec.moduleId);
  if (mrec) {
    mrec.basis = basis;
    mrec.confidence = confidence;
    mrec.method = method;
    mrec.renamed = renamed;
    mrec.renames = renames;
    mrec.renameMap = renamed ? 'scripts/recover/glass/p0-composer/maps/' + rec.basename.replace(/\.js$/, '') + '.json' : null;
    mrec.hoistedOwner = rec.hoistedOwner;
    mrec.parseable = rec.parseable;
  }
}
coverage.renamedModules = applied.results.filter((r: any) => Object.keys(r.renames).length > 0).length;
coverage.renamedIdentifiers = applied.results.reduce((n: number, r: any) => n + Object.keys(r.renames).length, 0);
coverage.confB = 0; coverage.confC = 0;
for (const r of mapping.records) { if (r.confidence === 'B') coverage.confB++; else coverage.confC++; }
mapping.counts = { ...mapping.counts, ...coverage };
mapping.generatedAt = mapping.generatedAt;
mapping.finalizedAt = now;
writeFileSync(join(ROOT, 'recovery/mappings/p0-composer.json'), JSON.stringify(mapping, null, 1) + '\n');
manifest.generatedAt = manifest.generatedAt;
manifest.finalizedAt = now;
manifest.counts = coverage;
writeFileSync(join(ROOT, DIR, '_manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
writeFileSync(join(ROOT, 'scripts/recover/glass/p0-composer/coverage.json'), JSON.stringify({ generatedAt: now, coverage, appliedMaps: applied.total, appliedOk: applied.ok }, null, 2) + '\n');
console.log(JSON.stringify({ headerRewrites, bodyChanges, coverage }, null, 2));
