import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = process.cwd();
const MAPS = 'scripts/recover/glass/p1-agent/maps';
const OUT_LOG = 'scripts/recover/glass/p1-agent/rename-log.json';

type MapFile = { moduleId: string; basename: string; file: string; renames: Record<string, string>; notes: string[] };

const results: Array<Record<string, unknown>> = [];
for (const entry of readdirSync(join(ROOT, MAPS))) {
  if (!entry.endsWith('.json')) continue;
  const map = JSON.parse(readFileSync(join(ROOT, MAPS, entry), 'utf8')) as MapFile;
  const olds = Object.keys(map.renames);
  if (!olds.length) { results.push({ basename: map.basename, status: 'no-proposals', renames: {} }); continue; }
  const path = join(ROOT, map.file);
  let before: string;
  try { before = readFileSync(path, 'utf8'); } catch { results.push({ basename: map.basename, status: 'missing-file' }); continue; }
  const news = Object.values(map.renames);
  const alreadyApplied = news.some((n) => new RegExp('\\b' + n + '\\b').test(before)) && !olds.some((o) => new RegExp('\\b' + o.replace(/\$/g, '\\$') + '\\b').test(before));
  if (alreadyApplied) { results.push({ basename: map.basename, status: 'already-applied', renames: map.renames }); continue; }
  const proc = Bun.spawnSync({ cmd: ['bun', 'scripts/recover/rename/apply-map.ts', '--in', map.file, '--out', map.file, '--map', join(MAPS, entry)], stdout: 'pipe', stderr: 'pipe' });
  const ok = proc.exitCode === 0;
  const stderr = proc.stderr.toString().split('\n')[0];
  results.push({
    basename: map.basename,
    status: ok ? 'applied' : 'blocked-parse',
    renames: ok ? map.renames : {},
    ...(ok ? {} : { reason: 'fragment is not a standalone program (starts mid var-chain); apply-map parser rejects it' }),
    ...(ok ? {} : { parser: stderr.slice(0, 160) }),
  });
  if (ok) console.log('[applied] ' + map.basename + ' ' + proc.stdout.toString().trim());
  else console.log('[blocked] ' + map.basename + ' ' + stderr.slice(0, 120));
}

const summary = {
  generatedAt: new Date().toISOString(),
  tool: 'scripts/recover/rename/apply-map.ts (AST equivalence gate)',
  applied: results.filter((r) => r.status === 'applied' || r.status === 'already-applied').length,
  blocked: results.filter((r) => r.status === 'blocked-parse').length,
  results,
};
writeFileSync(join(ROOT, OUT_LOG), JSON.stringify(summary, null, 2) + '\n');
console.log(JSON.stringify({ applied: summary.applied, blocked: summary.blocked, total: results.length }));
