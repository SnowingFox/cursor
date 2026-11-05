import { join } from 'node:path';
import { INVENTORY_DIR, RECOVERY_DIR, ensureDir, writeJson, writeText } from '../lib/paths';
import { DEFAULT_BUNDLES, inventoryAll, type BundleInventory } from './esbuild';
import { writeSdkInventory } from './sdk';
import { writeExtensionsInventory } from './extensions';
import { writeNlsInventory } from './nls';
import { writeClusters } from '../clusters';

function main(): void {
  ensureDir(INVENTORY_DIR);
  ensureDir(RECOVERY_DIR);
  const inventories = inventoryAll(DEFAULT_BUNDLES);
  writeJson(join(INVENTORY_DIR, 'bundles.json'), {
    generatedAt: new Date().toISOString(),
    bundles: inventories,
  });
  const modules = inventories.flatMap((bundle: BundleInventory) =>
    bundle.segments
      .filter((segment) => segment.basename !== null)
      .map((segment) => ({
        id: segment.id,
        bundle: segment.bundle,
        basename: segment.basename,
        kind: segment.kind,
        charStart: segment.charStart,
        charEnd: segment.charEnd,
        sha256: segment.sha256,
      })),
  );
  writeJson(join(INVENTORY_DIR, 'modules.json'), {
    generatedAt: new Date().toISOString(),
    count: modules.length,
    modules,
  });
  writeSdkInventory(join(INVENTORY_DIR, 'sdk.json'));
  writeExtensionsInventory(join(INVENTORY_DIR, 'extensions.json'));
  writeNlsInventory(join(INVENTORY_DIR, 'nls.json'));
  writeClusters();
  const lines = ['# Inventory summary', '', '| Bundle | Modules | Segments | Chars |', '|---|---|---|---|'];
  for (const bundle of inventories) {
    lines.push(
      '| ' +
        bundle.bundle +
        ' | ' +
        String(bundle.moduleCount) +
        ' | ' +
        String(bundle.segments.length) +
        ' | ' +
        String(bundle.sizeChars) +
        ' |',
    );
  }
  writeText(join(INVENTORY_DIR, 'summary.md'), lines.join('\n') + '\n');
  console.log('[recover] inventory written to recovery/inventory');
}

main();
