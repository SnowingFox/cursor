import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { INVENTORY_DIR, readJson, ROOT } from '../lib/paths';
import type { BundleInventory } from '../inventory/esbuild';

interface Args {
  moduleId: string | null;
  out: string | null;
  basis: string;
  confidence: string;
  method: string;
}

function parseArgs(argv: string[]): Args {
  const args: Args = { moduleId: null, out: null, basis: 'esbuild-wrapper', confidence: 'B', method: 'split' };
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === '--out') {
      args.out = argv[index + 1] ?? null;
      index += 1;
    } else if (arg === '--basis') {
      args.basis = argv[index + 1] ?? args.basis;
      index += 1;
    } else if (arg === '--confidence') {
      args.confidence = argv[index + 1] ?? args.confidence;
      index += 1;
    } else if (arg === '--method') {
      args.method = argv[index + 1] ?? args.method;
      index += 1;
    } else if (!args.moduleId) {
      args.moduleId = arg;
    }
  }
  return args;
}

function main(): void {
  const args = parseArgs(process.argv.slice(2));
  if (!args.moduleId || !args.out) {
    console.error('usage: bun scripts/recover/emit/module.ts <moduleId> --out <path> [--basis ..] [--confidence ..] [--method ..]');
    process.exit(1);
  }
  const inventory = readJson<{ bundles: BundleInventory[] }>(join(INVENTORY_DIR, 'bundles.json'));
  for (const bundle of inventory.bundles) {
    const segment = bundle.segments.find((item) => item.id === args.moduleId);
    if (!segment) {
      continue;
    }
    const text = readFileSync(join(ROOT, bundle.bundle), 'utf8');
    const code = text.slice(segment.charStart, segment.charEnd);
    const header = [
      '// @recovered-by cursor-re',
      '// artifact: ' + bundle.bundle + ' sha256:' + bundle.sha256,
      '// module: ' + (segment.basename ?? '(prelude)') + ' range:' + String(segment.charStart) + '..' + String(segment.charEnd),
      '// basis: ' + args.basis,
      '// confidence: ' + args.confidence,
      '// method: ' + args.method,
      '// run: main ' + new Date().toISOString(),
      '',
    ].join('\n');
    writeFileSync(args.out, header + code);
    console.log('[recover] emitted ' + args.moduleId + ' -> ' + args.out);
    return;
  }
  console.error('module not found: ' + args.moduleId);
  process.exit(1);
}

main();
