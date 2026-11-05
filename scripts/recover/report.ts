import { existsSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { INVENTORY_DIR, RECOVERY_DIR, ROOT, ensureDir, readJson, writeJson } from './lib/paths';

interface BundleInventory {
  bundle: string;
  moduleCount: number;
  segments: Array<{ basename: string | null }>;
}

interface SdkInventory {
  counts: Record<string, number>;
  ownSourcePaths: string[];
  siblingPackages: Record<string, number>;
}

interface ExtensionsInventory {
  extensions: Array<{
    name: string;
    dist: { format: string; jsFiles: number; webpackModuleHits: number; validatedModules: number | null; reassembly: string | null };
    shippedSources: { ts: string[] };
  }>;
}

interface ClusterIndex {
  clusters: Array<{ name: string; count: number; chars: number }>;
}

function countFiles(dir: string): { files: number; bytes: number } {
  let files = 0;
  let bytes = 0;
  if (!existsSync(dir)) {
    return { files, bytes };
  }
  const walk = (current: string): void => {
    for (const entry of readdirSync(current, { withFileTypes: true })) {
      const p = join(current, entry.name);
      if (entry.isDirectory()) {
        walk(p);
      } else if (entry.isFile()) {
        files += 1;
        bytes += statSync(p).size;
      }
    }
  };
  walk(dir);
  return { files, bytes };
}

function main(): void {
  const bundles = readJson<{ bundles: BundleInventory[] }>(join(INVENTORY_DIR, 'bundles.json'));
  const sdk = readJson<SdkInventory>(join(INVENTORY_DIR, 'sdk.json'));
  const extensions = readJson<ExtensionsInventory>(join(INVENTORY_DIR, 'extensions.json'));
  const clusters = readJson<ClusterIndex>(join(RECOVERY_DIR, 'clusters', 'index.json'));

  const recoveredRoot = join(ROOT, 'recovered');
  const recovered = {
    all: countFiles(recoveredRoot),
    glass: countFiles(join(recoveredRoot, 'app', 'glass')),
    extensions: countFiles(join(recoveredRoot, 'extensions')),
    vscode: countFiles(join(recoveredRoot, 'vscode')),
  };

  const packages = existsSync(join(ROOT, 'packages'))
    ? readdirSync(join(ROOT, 'packages'))
        .filter((name) => existsSync(join(ROOT, 'packages', name)))
        .map((name) => ({ name, ...countFiles(join(ROOT, 'packages', name)) }))
    : [];

  const report = {
    generatedAt: new Date().toISOString(),
    bundles: bundles.bundles.map((bundle) => ({
      bundle: bundle.bundle,
      modules: bundle.moduleCount,
    })),
    sdk: {
      dts: sdk.counts.dts,
      moduleKeys: sdk.counts.moduleKeys,
      ownSourceKeys: sdk.counts.ownSourceKeys,
      siblingPackages: sdk.siblingPackages,
    },
    extensions: extensions.extensions.map((extension) => ({
      name: extension.name,
      format: extension.dist.format,
      jsFiles: extension.dist.jsFiles,
      webpackModuleHits: extension.dist.webpackModuleHits,
      validatedModules: extension.dist.validatedModules,
      reassembly: extension.dist.reassembly,
      shippedTs: extension.shippedSources.ts.length,
    })),
    clusters: clusters.clusters,
    recovered,
    packages,
  };
  ensureDir(RECOVERY_DIR);
  writeJson(join(RECOVERY_DIR, 'report.json'), report);

  const lines = [
    '# Recovery Report',
    '',
    'Generated: ' + report.generatedAt,
    '',
    '## Bundles',
    '',
    '| Bundle | Modules |',
    '|---|---|',
  ];
  for (const bundle of report.bundles) {
    lines.push('| ' + bundle.bundle + ' | ' + String(bundle.modules) + ' |');
  }
  lines.push('', '## Recovered tree', '', '| Area | Files | Bytes |', '|---|---|---|');
  for (const [name, value] of Object.entries(recovered)) {
    lines.push('| ' + name + ' | ' + String(value.files) + ' | ' + String(value.bytes) + ' |');
  }
  lines.push('', '## Packages', '');
  if (packages.length === 0) {
    lines.push('No packages yet (W1 SDK agents pending).');
  } else {
    lines.push('| Package | Files | Bytes |', '|---|---|---|');
    for (const pkg of packages) {
      lines.push('| ' + pkg.name + ' | ' + String(pkg.files) + ' | ' + String(pkg.bytes) + ' |');
    }
  }
  lines.push('', '## SDK', '');
  lines.push('- d.ts: ' + String(sdk.counts.dts));
  lines.push('- webpack module keys: ' + String(sdk.counts.moduleKeys));
  lines.push('- own source keys: ' + String(sdk.counts.ownSourceKeys));
  lines.push('- sibling packages: ' + JSON.stringify(sdk.siblingPackages));
  lines.push('', '## Clusters', '');
  for (const cluster of clusters.clusters) {
    lines.push('- ' + cluster.name + ': ' + String(cluster.count) + ' modules, ' + String(cluster.chars) + ' chars');
  }
  writeFileSync(join(RECOVERY_DIR, 'REPORT.md'), lines.join('\n') + '\n');
  console.log('[recover] report: ' + String(recovered.all.files) + ' recovered files, ' + String(packages.length) + ' packages');
}

main();
