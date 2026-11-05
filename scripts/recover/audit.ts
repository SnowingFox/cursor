import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { ROOT, listFiles } from './lib/paths';

const PROVENANCE = '@recovered-by cursor-re';
const BASES = new Set([
  'nls-exact',
  'upstream-exact',
  'basename-unique',
  'import-cluster',
  'dts-map',
  'webpack-key',
  'webpack-id',
  'webpack-container',
  'esbuild-wrapper',
  'adopted-source',
  'shipped-source',
  'shipped-config',
  'vendored',
  'generated',
  'stub',
  'inferred',
]);

interface Entry {
  file: string;
  confidence: string;
  basis: string;
}

function parseHeader(text: string): { artifact: string; module: string; basis: string; confidence: string; method: string } {
  const values: Record<string, string> = {};
  for (const line of text.split('\n').slice(0, 16)) {
    const match = /^\/\/ ([a-z-]+): (.*)$/.exec(line);
    if (match) {
      values[match[1]] = match[2];
    }
  }
  let basis = values.basis ?? '';
  let confidence = values.confidence ?? '';
  const combined = /^(.+?) confidence: (.+)$/.exec(basis);
  if (combined) {
    basis = combined[1];
    confidence = combined[2];
  }
  const firstConfidence = /^([ABC])\b/.exec(confidence);
  if (!confidence && firstConfidence) {
    confidence = firstConfidence[1];
  } else if (firstConfidence) {
    confidence = firstConfidence[1];
  }
  return {
    artifact: values.artifact ?? '',
    module: values.module ?? '',
    basis,
    confidence,
    method: values.method ?? '',
  };
}

function basisParts(basis: string): string[] {
  return basis
    .split(/\s*\+\s*/)
    .map((part) => part.trim())
    .filter(Boolean);
}

function shouldSkip(file: string): boolean {
  return (
    file.includes('/node_modules/') ||
    file.includes('/upstream/') ||
    file.includes('/dist/') ||
    file.includes('/raw/') ||
    file.includes('/recovered/vscode/') ||
    file.endsWith('.d.ts') ||
    file.endsWith('.d.ts.map') ||
    file.endsWith('.test.ts') ||
    file.endsWith('.test.tsx') ||
    file.endsWith('.config.ts') ||
    file.includes('/test/')
  );
}

function main(): void {
  const roots = [join(ROOT, 'recovered'), join(ROOT, 'packages')].filter((dir) => existsSync(dir));
  const files = roots.flatMap((dir) => listFiles(dir));
  const sourceFiles = files.filter((file) => /\.(ts|tsx|js|jsx|mjs|cjs)$/.test(file) && !shouldSkip(file));
  const violations: string[] = [];
  const entries: Entry[] = [];
  for (const file of sourceFiles) {
    const head = readFileSync(file, 'utf8').slice(0, 4096);
    if (!head.includes(PROVENANCE)) {
      violations.push('missing provenance: ' + file);
      continue;
    }
    const header = parseHeader(head);
    const stubLike = ['stub', 'vendored', 'generated', 'generated-barrel', 'adopted-source', 'adopted-config', 'shipped-config'].includes(
      header.method,
    );
    const requireModule = header.method !== 'generated-barrel';
    if (
      (!header.artifact && !stubLike) ||
      (requireModule && !header.module) ||
      !header.basis ||
      !header.confidence ||
      !header.method
    ) {
      violations.push('incomplete provenance: ' + file + ' ' + JSON.stringify(header));
      continue;
    }
    for (const part of basisParts(header.basis)) {
      if (!BASES.has(part)) {
        violations.push('unknown basis ' + part + ': ' + file);
      }
    }
    if (!['A', 'B', 'C'].includes(header.confidence)) {
      violations.push('unknown confidence ' + header.confidence + ': ' + file);
    }
    entries.push({ file, confidence: header.confidence, basis: header.basis });
  }
  const byConfidence: Record<string, number> = {};
  const byBasis: Record<string, number> = {};
  for (const entry of entries) {
    byConfidence[entry.confidence] = (byConfidence[entry.confidence] ?? 0) + 1;
    byBasis[entry.basis] = (byBasis[entry.basis] ?? 0) + 1;
  }
  console.log(
    '[recover] audit: ' +
      String(sourceFiles.length) +
      ' source files, ' +
      String(entries.length) +
      ' with provenance, ' +
      String(violations.length) +
      ' violations',
  );
  console.log('[recover] confidence: ' + JSON.stringify(byConfidence));
  console.log('[recover] basis: ' + JSON.stringify(byBasis));
  for (const violation of violations.slice(0, 20)) {
    console.error('[recover] ' + violation);
  }
  if (violations.length > 0) {
    process.exit(1);
  }
}

main();
