import { join } from 'node:path';
import { CLUSTERS_DIR, INVENTORY_DIR, MAPPINGS_DIR, readJson, writeJson } from '../lib/paths';

interface BundleInventory {
  bundle: string;
  segments: Array<{ id: string; basename: string | null; kind: string }>;
}

interface BasenameIndex {
  index: Record<string, Array<{ module: string; upstream: boolean; upstreamFile: string | null }>>;
}

interface ClusterIndex {
  clusters: Array<{ name: string; count: number }>;
}

interface Cluster {
  name: string;
  modules: Array<{ id: string; basename: string }>;
}

function main(): void {
  const bundles = readJson<{ bundles: BundleInventory[] }>(join(INVENTORY_DIR, 'bundles.json'));
  const glass = bundles.bundles.find((bundle) => bundle.bundle.includes('workbench.glass.main.js'));
  if (!glass) {
    throw new Error('glass bundle missing');
  }
  const basenames = readJson<BasenameIndex>(join(MAPPINGS_DIR, 'basename-index.json')).index;
  const clusterIndex = readJson<ClusterIndex>(join(CLUSTERS_DIR, 'index.json'));
  const records: Array<Record<string, unknown>> = [];
  const counts = { exact: 0, ambiguous: 0, none: 0 };
  for (const clusterSummary of clusterIndex.clusters) {
    const cluster = readJson<Cluster>(join(CLUSTERS_DIR, clusterSummary.name + '.json'));
    for (const module of cluster.modules) {
      const stem = module.basename.replace(/\.(?:js|mjs|cjs|ts|tsx|jsx)$/, '');
      const candidates = basenames[stem] ?? [];
      let path: string | null = null;
      let basis = 'inferred';
      let confidence = 'C';
      if (candidates.length === 1) {
        path = 'src/' + candidates[0].module + (candidates[0].module.endsWith('.react') ? '.tsx' : '.ts');
        basis = 'nls-exact';
        confidence = 'B';
        counts.exact += 1;
      } else if (candidates.length > 1) {
        basis = 'nls-ambiguous';
        counts.ambiguous += 1;
      } else {
        counts.none += 1;
      }
      records.push({
        moduleId: module.id,
        basename: module.basename,
        cluster: clusterSummary.name,
        candidatePath: path,
        candidateCount: candidates.length,
        candidates: candidates.map((candidate) => candidate.module),
        basis,
        confidence,
      });
    }
  }
  writeJson(join(MAPPINGS_DIR, 'glass-tree.json'), {
    generatedAt: new Date().toISOString(),
    counts,
    records,
  });
  console.log('[recover] glass tree candidates: ' + JSON.stringify(counts));
}

main();
