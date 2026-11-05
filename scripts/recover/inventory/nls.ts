import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { APP_DIR, VSCODE_VENDOR_DIR, writeJson } from '../lib/paths';

interface NlsEntry {
  module: string;
  keys: number;
  upstream: boolean;
  upstreamFile: string | null;
}

export function inventoryNls(): { entries: NlsEntry[]; present: number; missing: number } {
  const raw = JSON.parse(readFileSync(join(APP_DIR, 'out', 'nls.keys.json'), 'utf8')) as Array<
    [string, string[]]
  >;
  const entries: NlsEntry[] = [];
  let present = 0;
  let missing = 0;
  for (const item of raw) {
    const module = item[0];
    let upstreamFile: string | null = null;
    for (const ext of ['.ts', '.tsx', '.js']) {
      const candidate = join(VSCODE_VENDOR_DIR, 'src', module + ext);
      if (existsSync(candidate)) {
        upstreamFile = 'src/' + module + ext;
        break;
      }
    }
    const upstream = upstreamFile !== null;
    if (upstream) {
      present += 1;
    } else {
      missing += 1;
    }
    entries.push({ module, keys: item[1].length, upstream, upstreamFile });
  }
  return { entries, present, missing };
}

export function writeNlsInventory(file: string): void {
  const inventory = inventoryNls();
  writeJson(file, {
    generatedAt: new Date().toISOString(),
    modules: inventory.entries.length,
    presentUpstream: inventory.present,
    missingUpstream: inventory.missing,
    vscodeVendor: existsSync(VSCODE_VENDOR_DIR),
    entries: inventory.entries,
  });
  console.log(
    '[recover] nls: ' +
      String(inventory.entries.length) +
      ' modules, upstream ' +
      String(inventory.present) +
      ', absent ' +
      String(inventory.missing),
  );
}
