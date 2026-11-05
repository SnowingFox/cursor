import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { CLUSTERS_DIR, INVENTORY_DIR, ROOT, ensureDir, readJson, relRoot } from '../lib/paths';
import type { BundleInventory } from '../inventory/esbuild';

interface ClusterModule {
  id: string;
  basename: string;
  kind: string;
  charLength: number;
  note: string;
}

interface Cluster {
  name: string;
  bundle: string;
  count: number;
  chars: number;
  modules: ClusterModule[];
}

function main(): void {
  const argv = process.argv.slice(2);
  let clusterName = '';
  let outDir = '';
  let basis = 'inferred';
  let confidence = 'C';
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === '--cluster') {
      clusterName = argv[index + 1] ?? '';
      index += 1;
    } else if (arg === '--out') {
      outDir = argv[index + 1] ?? '';
      index += 1;
    } else if (arg === '--basis') {
      basis = argv[index + 1] ?? basis;
      index += 1;
    } else if (arg === '--confidence') {
      confidence = argv[index + 1] ?? confidence;
      index += 1;
    }
  }
  if (!clusterName || !outDir) {
    console.error('usage: bun scripts/recover/emit/cluster.ts --cluster p0-composer --out recovered/app/glass/composer');
    process.exit(1);
  }
  const cluster = readJson<Cluster>(join(CLUSTERS_DIR, clusterName + '.json'));
  const bundles = readJson<{ bundles: BundleInventory[] }>(join(INVENTORY_DIR, 'bundles.json'));
  const bundle = bundles.bundles.find((item) => item.bundle === cluster.bundle);
  if (!bundle) {
    throw new Error('bundle not found: ' + cluster.bundle);
  }
  const text = readFileSync(join(ROOT, bundle.bundle), 'utf8');
  ensureDir(join(ROOT, outDir));
  const manifest: Array<Record<string, unknown>> = [];
  const used = new Map<string, number>();
  for (const module of cluster.modules) {
    const segment = bundle.segments.find((item) => item.id === module.id);
    if (!segment) {
      continue;
    }
    const base = module.basename || 'module.js';
    const count = (used.get(base) ?? 0) + 1;
    used.set(base, count);
    const fileName = count === 1 ? base : base.replace(/(.[^.]+)$/, '.' + String(count) + '$1');
    const code = text.slice(segment.charStart, segment.charEnd);
    const header = [
      '// @recovered-by cursor-re',
      '// artifact: ' + bundle.bundle + ' sha256:' + bundle.sha256,
      '// module: ' + base + ' range:' + String(segment.charStart) + '..' + String(segment.charEnd),
      '// basis: ' + basis,
      '// confidence: ' + confidence,
      '// method: split',
      '// run: main ' + new Date().toISOString(),
      '',
    ].join('\n');
    const out = join(ROOT, outDir, fileName);
    writeFileSync(out, header + code);
    manifest.push({
      moduleId: module.id,
      basename: base,
      file: relRoot(out),
      range: [segment.charStart, segment.charEnd],
      sha256: segment.sha256,
      note: module.note,
    });
  }
  writeFileSync(
    join(ROOT, outDir, '_manifest.json'),
    JSON.stringify({ generatedAt: new Date().toISOString(), cluster: clusterName, outDir, modules: manifest }, null, 2) + '\n',
  );
  console.log('[recover] emitted ' + String(manifest.length) + ' modules to ' + outDir);
}

main();
