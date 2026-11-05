import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { INVENTORY_DIR, SDK_VENDOR_DIR, listFiles, readJson, relRoot, writeJson, writeText } from '../lib/paths';

interface SdkInventory {
  moduleKeys: Array<{ file: string; key: string; kind: string }>;
  dtsSources: string[];
  ownSourcePaths: string[];
}

function main(): void {
  const inventory = readJson<SdkInventory>(join(INVENTORY_DIR, 'sdk.json'));
  const defined = new Set(inventory.moduleKeys.map((item) => item.key));
  const dts = new Set(inventory.dtsSources);
  const allJs = listFiles(join(SDK_VENDOR_DIR, 'dist', 'esm')).filter((file) => file.endsWith('.js'));
  const references = new Map<string, string[]>();
  for (const file of allJs) {
    const text = readFileSync(file, 'utf8');
    const matches = text.matchAll(/"(?:\.\/)(src\/[^"]+\.(?:ts|tsx|js|mjs|cjs))"/g);
    for (const match of matches) {
      const key = './' + match[1];
      const list = references.get(key) ?? [];
      list.push(relRoot(file));
      references.set(key, list);
    }
  }
  const universe = new Set<string>([...inventory.ownSourcePaths, ...inventory.dtsSources]);
  const records = Array.from(universe)
    .sort()
    .map((path) => {
      const key = './' + path;
      return {
        path,
        defined: defined.has(key),
        referenced: references.get(key)?.length ?? 0,
        dts: dts.has(path),
        files: Array.from(new Set(references.get(key) ?? [])),
      };
    });
  const counts = {
    universe: records.length,
    defined: records.filter((record) => record.defined).length,
    referenced: records.filter((record) => record.referenced > 0).length,
    dts: records.filter((record) => record.dts).length,
    definedAndDts: records.filter((record) => record.defined && record.dts).length,
    dtsOnly: records.filter((record) => record.dts && !record.defined).length,
    definedOnly: records.filter((record) => record.defined && !record.dts).length,
  };
  writeJson(join(INVENTORY_DIR, 'sdk-coverage.json'), {
    generatedAt: new Date().toISOString(),
    counts,
    records,
  });
  const lines = [
    '# SDK source coverage',
    '',
    '| Metric | Value |',
    '|---|---|',
  ];
  for (const [key, value] of Object.entries(counts)) {
    lines.push('| ' + key + ' | ' + String(value) + ' |');
  }
  lines.push('', '## Defined module keys', '');
  for (const record of records.filter((item) => item.defined)) {
    lines.push('- ' + record.path);
  }
  lines.push('', '## Declaration-only modules (no explicit webpack module key; may be scope-hoisted or type-only)', '');
  for (const record of records.filter((item) => !item.defined)) {
    lines.push('- ' + record.path + (record.referenced > 0 ? ' (referenced in ' + String(record.referenced) + ' files)' : ''));
  }
  writeText(join(INVENTORY_DIR, 'sdk-coverage.md'), lines.join('\n') + '\n');
  console.log('[recover] SDK coverage: ' + JSON.stringify(counts));
}

main();
