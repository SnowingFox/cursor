import { readFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import {
  SDK_VENDOR_DIR,
  listFiles,
  relRoot,
  writeJson,
} from '../lib/paths';
import { readSdkPackageJson, sdkReady } from '../lib/artifacts';

export interface SdkModuleKey {
  file: string;
  key: string;
  kind: 'esm' | 'cjs';
  exports: Array<{ name: string; localName: string }>;
}

export interface SdkInventory {
  generatedAt: string;
  packageJson: Record<string, unknown>;
  files: {
    dts: string[];
    dtsMaps: string[];
    jsEsm: string[];
    jsCjs: string[];
    bundled: string[];
  };
  counts: {
    dts: number;
    dtsMaps: number;
    jsEsm: number;
    jsCjs: number;
    moduleKeys: number;
    ownSourceKeys: number;
  };
  moduleKeys: SdkModuleKey[];
  ownSourcePaths: string[];
  dtsSources: string[];
  dtsSourcesByModule: Record<string, string[]>;
  siblingPackages: Record<string, number>;
}

const MODULE_DEF =
  /"((?:\.\.?\/)[^"]+\.(?:ts|tsx|js|mjs|cjs|json))"\(([A-Za-z_$][\w$]*)(?:\s*,\s*[A-Za-z_$][\w$]*)*\)\s*\{/g;
const EXPORT_TABLE =
  /([A-Za-z_$][\w$]*)\.d\(([A-Za-z_$][\w$]*),\{([^}]*)\}\)/g;
const EXPORT_ENTRY = /([A-Za-z_$][\w$]*):\(\)=>([A-Za-z_$][\w$]*)/g;

function collectExports(text: string): Array<{ name: string; localName: string }> {
  const out: Array<{ name: string; localName: string }> = [];
  for (const table of text.matchAll(EXPORT_TABLE)) {
    const body = table[3];
    for (const entry of body.matchAll(EXPORT_ENTRY)) {
      out.push({ name: entry[1], localName: entry[2] });
    }
  }
  return out;
}

function scanJs(file: string, kind: 'esm' | 'cjs'): SdkModuleKey[] {
  const text = readFileSync(file, 'utf8');
  const modules: SdkModuleKey[] = [];
  const exports = collectExports(text);
  for (const match of text.matchAll(MODULE_DEF)) {
    modules.push({
      file: relRoot(file),
      key: match[1],
      kind,
      exports: exports.slice(0, 200),
    });
  }
  return modules;
}

function normalizeSource(source: string): string {
  const cleaned = source.replace(/^(?:\.\.\/)+/, '');
  if (cleaned.startsWith('src/')) {
    return cleaned;
  }
  if (cleaned.startsWith('agent/')) {
    return 'src/' + cleaned;
  }
  return cleaned;
}

export function inventorySdk(): SdkInventory {
  if (!sdkReady()) {
    throw new Error('SDK vendor missing; run bun scripts/recover/fetch-artifacts.ts');
  }
  const esmDir = join(SDK_VENDOR_DIR, 'dist', 'esm');
  const cjsDir = join(SDK_VENDOR_DIR, 'dist', 'cjs');
  const all = listFiles(SDK_VENDOR_DIR);
  const dts = all.filter((f) => f.endsWith('.d.ts'));
  const dtsMaps = all.filter((f) => f.endsWith('.d.ts.map'));
  const jsEsm = all.filter((f) => f.startsWith(esmDir) && f.endsWith('.js'));
  const jsCjs = all.filter((f) => f.startsWith(cjsDir) && f.endsWith('.js'));
  const bundled = all.filter((f) => f.includes(join('dist', 'bundled')) && f.endsWith('.js'));

  const moduleKeys: SdkModuleKey[] = [];
  for (const file of jsEsm) {
    moduleKeys.push(...scanJs(file, 'esm'));
  }
  for (const file of jsCjs) {
    moduleKeys.push(...scanJs(file, 'cjs'));
  }

  const ownSourcePaths = Array.from(
    new Set(
      moduleKeys
        .map((m) => m.key)
        .filter((key) => key.startsWith('./src/'))
        .map((key) => key.slice(2)),
    ),
  ).sort();

  const dtsSources: string[] = [];
  const dtsSourcesByModule: Record<string, string[]> = {};
  for (const file of dtsMaps) {
    const parsed = JSON.parse(readFileSync(file, 'utf8')) as {
      sources?: string[];
      file?: string;
    };
    const sources = (parsed.sources ?? []).map(normalizeSource);
    dtsSources.push(...sources);
    dtsSourcesByModule[relative(SDK_VENDOR_DIR, file)] = sources;
  }
  const uniqueSources = Array.from(new Set(dtsSources)).sort();

  const siblingPackages: Record<string, number> = {};
  for (const module of moduleKeys) {
    if (!module.key.startsWith('../')) {
      continue;
    }
    const parts = module.key.split('/');
    const name = parts[0] === '..' && parts[1] ? parts[1] : parts[0];
    if (name === '..' || name.startsWith('.') || name.startsWith('node_modules')) {
      continue;
    }
    siblingPackages[name] = (siblingPackages[name] ?? 0) + 1;
  }

  return {
    generatedAt: new Date().toISOString(),
    packageJson: readSdkPackageJson(),
    files: {
      dts: dts.map(relRoot),
      dtsMaps: dtsMaps.map(relRoot),
      jsEsm: jsEsm.map(relRoot),
      jsCjs: jsCjs.map(relRoot),
      bundled: bundled.map(relRoot),
    },
    counts: {
      dts: dts.length,
      dtsMaps: dtsMaps.length,
      jsEsm: jsEsm.length,
      jsCjs: jsCjs.length,
      moduleKeys: moduleKeys.length,
      ownSourceKeys: ownSourcePaths.length,
    },
    moduleKeys,
    ownSourcePaths,
    dtsSources: uniqueSources,
    dtsSourcesByModule,
    siblingPackages,
  };
}

export function writeSdkInventory(file: string): SdkInventory {
  const inventory = inventorySdk();
  writeJson(file, inventory);
  console.log(
    '[recover] SDK: ' +
      String(inventory.counts.dts) +
      ' d.ts, ' +
      String(inventory.counts.moduleKeys) +
      ' module keys (' +
      String(inventory.counts.ownSourceKeys) +
      ' own), ' +
      String(inventory.dtsSources.length) +
      ' d.ts sources',
  );
  return inventory;
}
