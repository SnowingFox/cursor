import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { INVENTORY_DIR, RAW_DIR, readJson, sha256 } from './lib/paths';
import { verifyBundle, writeSplitFiles, type BundleInventory } from './inventory/esbuild';

interface Args {
  split: boolean;
  only: string | null;
}

function parseArgs(argv: string[]): Args {
  let split = false;
  let only: string | null = null;
  for (const arg of argv) {
    if (arg === '--split' || arg === '--write') {
      split = true;
    } else if (arg.startsWith('--bundle=')) {
      only = arg.slice('--bundle='.length);
    }
  }
  return { split, only };
}

function safeId(bundle: string): string {
  return bundle.replace(/[^A-Za-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function verifySplitFiles(bundle: BundleInventory): { ok: boolean; reason: string } {
  const dir = join(RAW_DIR, safeId(bundle.bundle));
  let index: string;
  try {
    index = readFileSync(join(dir, '_index.txt'), 'utf8');
  } catch {
    return { ok: false, reason: 'missing _index.txt in ' + dir };
  }
  const entries = index
    .split('\n')
    .filter((line) => line.includes('\t') && !line.startsWith('#'))
    .map((line) => {
      const [name, id, digest] = line.split('\t');
      return { name, id, digest };
    });
  const expected = bundle.segments.length;
  if (entries.length !== expected) {
    return { ok: false, reason: 'index entries ' + String(entries.length) + ' != segments ' + String(expected) };
  }
  const files = new Set(readdirSync(dir).filter((name) => name !== '_index.txt'));
  for (const entry of entries) {
    if (!files.has(entry.name)) {
      return { ok: false, reason: 'missing split file ' + entry.name };
    }
    const digest = sha256(readFileSync(join(dir, entry.name), 'utf8'));
    if (digest !== entry.digest) {
      return { ok: false, reason: 'split file hash mismatch ' + entry.name };
    }
  }
  return { ok: true, reason: String(entries.length) + ' split files verified' };
}

function main(): void {
  const args = parseArgs(process.argv.slice(2));
  const file = join(INVENTORY_DIR, 'bundles.json');
  const inventory = readJson<{ bundles: BundleInventory[] }>(file);
  let failures = 0;
  for (const bundle of inventory.bundles) {
    if (args.only && !bundle.bundle.includes(args.only)) {
      continue;
    }
    const result = verifyBundle(bundle);
    if (!result.ok) {
      failures += 1;
      console.error('[recover] FAIL ' + bundle.bundle + ': ' + result.reason);
      continue;
    }
    console.log(
      '[recover] OK   ' +
        bundle.bundle +
        ': ' +
        String(bundle.moduleCount) +
        ' modules, ' +
        String(bundle.segments.length) +
        ' segments, ' +
        result.reason,
    );
    if (args.split) {
      const dir = writeSplitFiles(bundle);
      const check = verifySplitFiles(bundle);
      if (!check.ok) {
        failures += 1;
        console.error('[recover] FAIL split files ' + dir + ': ' + check.reason);
      } else {
        console.log('[recover]      split -> ' + dir + ' (' + check.reason + ')');
      }
    }
  }
  if (failures > 0) {
    process.exit(1);
  }
}

main();
