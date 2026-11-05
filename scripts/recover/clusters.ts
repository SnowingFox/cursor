import { join } from 'node:path';
import { CLUSTERS_DIR, readJson, writeJson } from './lib/paths';
import type { BundleInventory, ModuleSegment } from './inventory/esbuild';

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

const P0 = /(Composer|Transcript|ToolCall|Markdown|Chat|Diff|Artifact|Todo|Human|Message|Assistant|Prompt|RichText|Lexical)/;
const P1 = /(Agent|BackgroundComposer|Subagent|Canvas|Plan|Mcp|MCP|Browser|Cloud|Worktree|Anyrun|Environment|Run|Task|Memory|Skill|Rule|Terminal|Shell|Command|Tool)/;
const P2 = /(Auth|Billing|Usage|Model|Settings|Team|Account|Subscription|Onboarding|Marketplace|Extension|Plugin|Pricing|Login|Statsig|Feature|Experiment|Config|Token|Key|Provider)/;

function bucketOf(basename: string): { name: string; priority: number } {
  const component = basename.length > 0 && basename[0] === basename[0].toUpperCase();
  if (!component) {
    return { name: 'p4-lower', priority: 4 };
  }
  if (P0.test(basename)) {
    return { name: 'p0-composer', priority: 0 };
  }
  if (P1.test(basename)) {
    return { name: 'p1-agent', priority: 1 };
  }
  if (P2.test(basename)) {
    return { name: 'p2-platform', priority: 2 };
  }
  return { name: 'p3-ui', priority: 3 };
}

function toClusterModule(segment: ModuleSegment): ClusterModule {
  return {
    id: segment.id,
    basename: segment.basename ?? '',
    kind: segment.kind,
    charLength: segment.charLength,
    note: segment.note,
  };
}

export function buildClusters(): Cluster[] {
  const inventory = readJson<{ bundles: BundleInventory[] }>(join(CLUSTERS_DIR, '..', 'inventory', 'bundles.json'));
  const glass =
    inventory.bundles.find((bundle) => bundle.bundle.includes('workbench.glass.main.js')) ??
    inventory.bundles.find((bundle) => bundle.bundle.includes('workbench.desktop.main.js')) ??
    inventory.bundles[0];
  if (!glass) {
    throw new Error('no bundle inventory available');
  }
  const clusters = new Map<string, Cluster>();
  for (const segment of glass.segments) {
    if (!segment.basename) {
      continue;
    }
    const bucket = bucketOf(segment.basename);
    let cluster = clusters.get(bucket.name);
    if (!cluster) {
      cluster = { name: bucket.name, bundle: glass.bundle, count: 0, chars: 0, modules: [] };
      clusters.set(bucket.name, cluster);
    }
    cluster.modules.push(toClusterModule(segment));
    cluster.count += 1;
    cluster.chars += segment.charLength;
  }
  return Array.from(clusters.values()).sort((a, b) => a.name.localeCompare(b.name));
}

export function writeClusters(): Cluster[] {
  const clusters = buildClusters();
  for (const cluster of clusters) {
    cluster.modules.sort((a, b) => a.basename.localeCompare(b.basename));
    writeJson(join(CLUSTERS_DIR, cluster.name + '.json'), cluster);
  }
  writeJson(join(CLUSTERS_DIR, 'index.json'), {
    generatedAt: new Date().toISOString(),
    clusters: clusters.map((cluster) => ({
      name: cluster.name,
      bundle: cluster.bundle,
      count: cluster.count,
      chars: cluster.chars,
    })),
  });
  console.log(
    '[recover] clusters: ' +
      clusters.map((cluster) => cluster.name + '=' + String(cluster.count)).join(', '),
  );
  return clusters;
}
