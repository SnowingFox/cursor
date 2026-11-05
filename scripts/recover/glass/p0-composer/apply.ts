import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = process.cwd();
const MAPS = 'scripts/recover/glass/p0-composer/maps';
const results: any[] = [];
for (const file of readdirSync(join(ROOT, MAPS)).filter((f) => f.endsWith('.json') && !f.startsWith('_')).sort()) {
  const map = JSON.parse(readFileSync(join(ROOT, MAPS, file), 'utf8'));
  const target = map.source;
  const proc = Bun.spawnSync(['bun', 'scripts/recover/rename/apply-map.ts', '--in', target, '--out', target, '--map', join(MAPS, file)], { cwd: ROOT, stdout: 'pipe', stderr: 'pipe' });
  const stdout = proc.stdout.toString().trim();
  const stderr = proc.stderr.toString().trim();
  results.push({ file, moduleId: map.moduleId, basename: map.basename, renames: map.renames, ok: proc.exitCode === 0, astEquivalent: stdout.includes('AST equivalent: true'), stdout, stderr: stderr.slice(0, 500) });
}
writeFileSync(join(ROOT, MAPS, 'applied.json'), JSON.stringify({ appliedAt: new Date().toISOString(), total: results.length, ok: results.filter((r) => r.ok).length, failed: results.filter((r) => !r.ok).length, results }, null, 2) + '\n');
console.log('maps', results.length, 'ok', results.filter((r) => r.ok).length, 'failed', results.filter((r) => !r.ok).length);
for (const r of results.filter((x) => !x.ok)) console.log('FAIL', r.basename, r.stderr || r.stdout);
console.log(results.filter((r) => r.ok).slice(0, 6).map((r) => r.basename + ': ' + r.stdout.replace('\n', ' ')).join('\n'));
