import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { INVENTORY_DIR, readJson } from './lib/paths';
import type { BundleInventory } from './inventory/esbuild';

function main(): void {
  const args = process.argv.slice(2);
  const moduleId = args[0];
  if (!moduleId) {
    console.error('usage: bun scripts/recover/slice.ts <moduleId> [--out path]');
    process.exit(1);
  }
  let out: string | null = null;
  for (let index = 1; index < args.length; index += 1) {
    if (args[index] === '--out' && args[index + 1]) {
      out = args[index + 1];
      index += 1;
    }
  }
  const inventory = readJson<{ bundles: BundleInventory[] }>(join(INVENTORY_DIR, 'bundles.json'));
  for (const bundle of inventory.bundles) {
    const segment = bundle.segments.find((item) => item.id === moduleId);
    if (!segment) {
      continue;
    }
    const text = readFileSync(join(process.cwd(), bundle.bundle), 'utf8');
    const code = text.slice(segment.charStart, segment.charEnd);
    const header = [
      '// @recovered-by cursor-re',
      '// artifact: ' + bundle.bundle + ' sha256:' + bundle.sha256,
      '// module: ' + (segment.basename ?? '(prelude)') + ' range:' + String(segment.charStart) + '..' + String(segment.charEnd),
      '// basis: esbuild-wrapper confidence: B',
      '// method: split',
      '',
    ].join('\n');
    if (out) {
      writeFileSync(out, header + code);
      console.log('[recover] wrote ' + out);
    } else {
      console.log(header + code);
    }
    return;
  }
  console.error('module not found: ' + moduleId);
  process.exit(1);
}

main();
