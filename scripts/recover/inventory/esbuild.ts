import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { basename, join, relative } from 'node:path';
import { APP_DIR, RAW_DIR, ROOT, sha256, writeJson } from '../lib/paths';

export type SegmentKind = 'esm' | 'commonjs' | 'prefix';

export interface ModuleSegment {
  id: string;
  bundle: string;
  bundleSha256: string;
  ordinal: number;
  kind: SegmentKind;
  basename: string | null;
  initSymbol: string | null;
  charStart: number;
  charEnd: number;
  charLength: number;
  sha256: string;
  note: string;
}

export interface BundleInventory {
  bundle: string;
  sha256: string;
  sizeChars: number;
  moduleCount: number;
  segments: ModuleSegment[];
}

const ESM_WRAPPER =
  /([A-Za-z_$][\w$]*)\s*=\s*[A-Za-z_$][\w$]*\(\{\s*"([^"]+\.(?:js|mjs|cjs|ts|tsx|jsx))"\(\)\s*\{/g;
const CJS_WRAPPER =
  /([A-Za-z_$][\w$]*)\s*=\s*[A-Za-z_$][\w$]*\(\{\s*"([^"]+\.(?:js|mjs|cjs|ts|tsx|jsx))"\(([A-Za-z_$][\w$]*)\s*,\s*([A-Za-z_$][\w$]*)\)\s*\{/g;

interface Found {
  index: number;
  basename: string;
  initSymbol: string;
  kind: 'esm' | 'commonjs';
}

function safeId(bundle: string): string {
  return bundle.replace(/[^A-Za-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function findWrappers(text: string): Found[] {
  const found: Found[] = [];
  for (const match of text.matchAll(ESM_WRAPPER)) {
    found.push({
      index: match.index ?? 0,
      basename: match[2],
      initSymbol: match[1],
      kind: 'esm',
    });
  }
  for (const match of text.matchAll(CJS_WRAPPER)) {
    found.push({
      index: match.index ?? 0,
      basename: match[2],
      initSymbol: match[1],
      kind: 'commonjs',
    });
  }
  found.sort((a, b) => a.index - b.index);
  const deduped: Found[] = [];
  for (const item of found) {
    const previous = deduped[deduped.length - 1];
    if (previous && item.index < previous.index) {
      continue;
    }
    deduped.push(item);
  }
  return deduped;
}

function adjustedStart(text: string, index: number): number {
  const before = text.slice(Math.max(0, index - 16), index);
  const match = /(?:^|[^A-Za-z0-9_$])((?:var|let|const)\s+)$/.exec(before);
  if (!match) {
    return index;
  }
  return index - match[1].length;
}

export function inventoryBundle(bundleRel: string): BundleInventory {
  const bundle = join(ROOT, bundleRel);
  const text = readFileSync(bundle, 'utf8');
  const bundleSha = sha256(text);
  const id = safeId(bundleRel);
  const wrappers = findWrappers(text);
  const starts = wrappers.map((wrapper) => adjustedStart(text, wrapper.index));
  const segments: ModuleSegment[] = [];
  let ordinal = 0;
  if (wrappers.length === 0) {
    segments.push({
      id: id + ':0000',
      bundle: bundleRel,
      bundleSha256: bundleSha,
      ordinal: 0,
      kind: 'prefix',
      basename: null,
      initSymbol: null,
      charStart: 0,
      charEnd: text.length,
      charLength: text.length,
      sha256: sha256(text),
      note: 'no module wrappers found',
    });
  } else {
    if (starts[0] > 0) {
      const prefix = text.slice(0, starts[0]);
      segments.push({
        id: id + ':0000',
        bundle: bundleRel,
        bundleSha256: bundleSha,
        ordinal: 0,
        kind: 'prefix',
        basename: null,
        initSymbol: null,
        charStart: 0,
        charEnd: starts[0],
        charLength: prefix.length,
        sha256: sha256(prefix),
        note: 'bundle prelude',
      });
      ordinal = 1;
    }
    for (let index = 0; index < wrappers.length; index += 1) {
      const current = wrappers[index];
      const start = starts[index];
      const end = index + 1 < starts.length ? starts[index + 1] : text.length;
      const slice = text.slice(start, end);
      segments.push({
        id: id + ':' + String(ordinal).padStart(4, '0'),
        bundle: bundleRel,
        bundleSha256: bundleSha,
        ordinal,
        kind: current.kind,
        basename: current.basename,
        initSymbol: current.initSymbol,
        charStart: start,
        charEnd: end,
        charLength: slice.length,
        sha256: sha256(slice),
        note: 'segment runs to the next wrapper; may contain declarations hoisted outside the wrapper body',
      });
      ordinal += 1;
    }
  }
  return {
    bundle: bundleRel,
    sha256: bundleSha,
    sizeChars: text.length,
    moduleCount: wrappers.length,
    segments,
  };
}

export function verifyBundle(inventory: BundleInventory): { ok: boolean; reason: string } {
  const bundle = join(ROOT, inventory.bundle);
  const text = readFileSync(bundle, 'utf8');
  if (sha256(text) !== inventory.sha256) {
    return { ok: false, reason: 'bundle sha256 changed since inventory' };
  }
  let cursor = 0;
  const pieces: string[] = [];
  for (const segment of inventory.segments) {
    if (segment.charStart !== cursor) {
      return { ok: false, reason: 'segment gap at ' + segment.id + ' cursor=' + String(cursor) };
    }
    const slice = text.slice(segment.charStart, segment.charEnd);
    if (sha256(slice) !== segment.sha256) {
      return { ok: false, reason: 'segment hash mismatch at ' + segment.id };
    }
    pieces.push(slice);
    cursor = segment.charEnd;
  }
  if (cursor !== text.length) {
    return { ok: false, reason: 'segments do not reach end of bundle' };
  }
  if (sha256(pieces.join('')) !== inventory.sha256) {
    return { ok: false, reason: 'reassembled bundle hash mismatch' };
  }
  return { ok: true, reason: 'reassembled byte-for-byte' };
}

export function writeSplitFiles(inventory: BundleInventory): string {
  const outDir = join(RAW_DIR, safeId(inventory.bundle));
  mkdirSync(outDir, { recursive: true });
  const text = readFileSync(join(ROOT, inventory.bundle), 'utf8');
  const lines: string[] = ['# ' + inventory.bundle, ''];
  for (const segment of inventory.segments) {
    const name =
      String(segment.ordinal).padStart(4, '0') +
      '-' +
      (segment.basename ? segment.basename.replace(/[^A-Za-z0-9.@_-]/g, '_') : 'prelude.js');
    writeFileSync(join(outDir, name), text.slice(segment.charStart, segment.charEnd));
    lines.push(name + '\t' + segment.id + '\t' + segment.sha256);
  }
  writeText(join(outDir, '_index.txt'), lines.join('\n') + '\n');
  return relative(ROOT, outDir);
}

function writeText(file: string, value: string): void {
  writeFileSync(file, value);
}

export const DEFAULT_BUNDLES = [
  'app/out/main.js',
  'app/out/vs/workbench/workbench.desktop.main.js',
  'app/out/vs/workbench/workbench.glass.main.js',
  'app/out/vs/workbench/api/node/extensionHostProcess.js',
];

export function inventoryAll(bundles: string[] = DEFAULT_BUNDLES): BundleInventory[] {
  return bundles.map((bundle) => {
    const inventory = inventoryBundle(bundle);
    console.log(
      '[recover] ' +
        bundle +
        ': ' +
        String(inventory.moduleCount) +
        ' modules, ' +
        String(inventory.segments.length) +
        ' segments, ' +
        String(inventory.sizeChars) +
        ' chars',
    );
    return inventory;
  });
}

export function writeBundlesInventory(inventories: BundleInventory[], file: string): void {
  writeJson(file, {
    generatedAt: new Date().toISOString(),
    bundles: inventories,
  });
}

export { APP_DIR, basename, writeFileSync };
