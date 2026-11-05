import { join } from 'node:path';
import { INVENTORY_DIR, MAPPINGS_DIR, readJson, writeJson } from '../lib/paths';

interface NlsInventory {
  entries: Array<{ module: string; upstream: boolean; upstreamFile: string | null }>;
}

export function buildBasenameIndex(): Record<string, Array<{ module: string; upstream: boolean; upstreamFile: string | null }>> {
  const inventory = readJson<NlsInventory>(join(INVENTORY_DIR, 'nls.json'));
  const index: Record<string, Array<{ module: string; upstream: boolean; upstreamFile: string | null }>> = {};
  for (const entry of inventory.entries) {
    const base = entry.module.split('/').pop() ?? entry.module;
    (index[base] ??= []).push(entry);
  }
  return index;
}

export function writeBasenameIndex(): void {
  const index = buildBasenameIndex();
  writeJson(join(MAPPINGS_DIR, 'basename-index.json'), {
    generatedAt: new Date().toISOString(),
    note: 'nls module basename to candidate original source paths; duplicates are ambiguous',
    index,
  });
  console.log('[recover] basename index: ' + String(Object.keys(index).length) + ' basenames');
}

writeBasenameIndex();
