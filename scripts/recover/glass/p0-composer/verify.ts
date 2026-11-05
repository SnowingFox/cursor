import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { equivalent } from '../../lib/ast';

const ROOT = process.cwd();
function readJson(p: string) { return JSON.parse(readFileSync(join(ROOT, p), 'utf8')); }
function sha256(s: string) { return createHash('sha256').update(s).digest('hex'); }
function splitAll(text: string) {
  const lines = text.split('\n');
  let i = 0;
  while (i < lines.length && (lines[i].startsWith('// ') || lines[i].trim() === '')) i++;
  return { header: lines.slice(0, i), body: lines.slice(i).join('\n') };
}
const mapping = readJson('recovery/mappings/p0-composer.json');
const applied = readJson('scripts/recover/glass/p0-composer/maps/applied.json');
const appliedBy = new Map<string, any>(applied.results.map((r: any) => [r.basename, r]));
const inv = readJson('recovery/inventory/bundles.json');
const glass = inv.bundles.find((b: any) => String(b.bundle).includes('workbench.glass.main.js'));
const byId = new Map<string, any>(glass.segments.map((s: any) => [s.id, s]));
const text = readFileSync(join(ROOT, glass.bundle), 'utf8');

const out: any = { files: 0, byteExactUntouched: 0, astEquivalentRenamed: 0, byteMismatch: [], astFailures: [], missingHeaders: [], rangeMismatch: [], pathClaims: [], duplicateBasenames: [] };
const seen = new Set<string>();
for (const rec of mapping.records) {
  out.files++;
  const seg = byId.get(rec.moduleId);
  const file = readFileSync(join(ROOT, rec.emittedFile), 'utf8');
  const { header, body } = splitAll(file);
  const h = Object.fromEntries(header.filter((l) => /^\/\/ [a-z-]+: /.test(l)).map((l) => { const m = /^\/\/ ([a-z-]+): (.*)$/.exec(l); return [m![1], m![2]]; }));
  for (const required of ['artifact', 'module', 'basis', 'confidence', 'method', 'run']) if (!h[required]) out.missingHeaders.push({ basename: rec.basename, missing: required });
  if (!/range:\d+\.\.\d+/.test(h.module ?? '')) out.missingHeaders.push({ basename: rec.basename, missing: 'range' });
  if (seg && h.module !== rec.basename + ' range:' + seg.charStart + '..' + seg.charEnd) out.rangeMismatch.push({ basename: rec.basename, header: h.module });
  if (seen.has(rec.emittedFile)) out.duplicateBasenames.push(rec.emittedFile);
  seen.add(rec.emittedFile);
  if (rec.path && !/^(src\/vs\/|src\/)/.test(rec.path)) out.pathClaims.push(rec.basename);
  if (rec.path && h.basis !== 'nls-exact + esbuild-wrapper') out.pathClaims.push(rec.basename + ' basis=' + h.basis);
  const original = text.slice(seg.charStart, seg.charEnd);
  const renames: Record<string, string> = appliedBy.get(rec.basename)?.renames ?? {};
  rec.bodySha256 = sha256(body);
  rec.headerFields = h;
  if (Object.keys(renames).length === 0) {
    if (body === original) out.byteExactUntouched++;
    else out.byteMismatch.push(rec.basename);
  } else {
    let ok = false;
    try { ok = equivalent(original, body, renames); } catch (error) { out.astFailures.push({ basename: rec.basename, error: String(error).slice(0, 200) }); }
    if (ok) out.astEquivalentRenamed++; else out.astFailures.push({ basename: rec.basename, error: 'structural hash mismatch' });
  }
}
out.untouched = out.byteExactUntouched;
out.renamed = out.astEquivalentRenamed;
out.knownBasenameDuplicates = mapping.records.filter((x: any) => mapping.records.filter((y: any) => y.basename === x.basename).length > 1).map((x: any) => x.basename);
out.counts = { total: mapping.records.length, emitted: out.files, renamedModules: out.renamed, renamedIdentifiers: mapping.records.reduce((n: number, x: any) => n + Object.keys(x.renames ?? {}).length, 0), exactPaths: mapping.records.filter((x: any) => x.path).length, nullPaths: mapping.records.filter((x: any) => !x.path).length, parseable: mapping.records.filter((x: any) => x.parseable).length, unparseable: mapping.records.filter((x: any) => !x.parseable).length, confidenceB: mapping.records.filter((x: any) => x.confidence === 'B').length, confidenceC: mapping.records.filter((x: any) => x.confidence === 'C').length };
mapping.counts = { ...mapping.counts, ...out.counts, bodyChanges: 0 };
out.pass = out.missingHeaders.length === 0 && out.rangeMismatch.length === 0 && out.pathClaims.length === 0 && out.byteMismatch.length === 0 && out.astFailures.length === 0 && out.duplicateBasenames.length === 0;
writeFileSync(join(ROOT, 'recovery/mappings/p0-composer.json'), JSON.stringify(mapping, null, 1) + '\n');
writeFileSync(join(ROOT, 'scripts/recover/glass/p0-composer/verify.json'), JSON.stringify({ verifiedAt: new Date().toISOString(), ...out }, null, 2) + '\n');
console.log(JSON.stringify(out, null, 2));
process.exit(out.pass ? 0 : 1);