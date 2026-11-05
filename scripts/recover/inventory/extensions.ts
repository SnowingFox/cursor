import { existsSync, readFileSync, statSync } from 'node:fs';
import { extname, join } from 'node:path';
import { APP_DIR, ROOT, listFiles, relRoot, writeJson } from '../lib/paths';

interface ExtensionRecord {
  name: string;
  dir: string;
  packageName: string | null;
  version: string | null;
  publisher: string | null;
  main: string | null;
  enabledApiProposals: string[];
  dist: {
    jsFiles: number;
    totalBytes: number;
    largest: Array<{ file: string; bytes: number }>;
    chunks: string[];
    format: 'webpack' | 'esbuild' | 'mixed' | 'unknown';
    webpackModuleHits: number;
    esbuildWrappers: number;
    validatedModules: number | null;
    reassembly: string | null;
  };
  shippedSources: {
    ts: string[];
    configs: string[];
    schemas: string[];
  };
}

const WEBPACK_HEAD = /__webpack_modules__|__webpack_require__/;
const WEBPACK_ESM = /__webpack_esm_modules__/;
const ESBUILD_WRAPPER = /"([^"]+\.(?:js|mjs|cjs|ts|tsx|jsx))"\(\)\s*\{/g;

function countMatches(text: string, pattern: RegExp): number {
  let count = 0;
  for (const _match of text.matchAll(pattern)) {
    count += 1;
  }
  return count;
}

function inspectExtension(dir: string): ExtensionRecord {
  const pkgPath = join(dir, 'package.json');
  let pkg: Record<string, unknown> = {};
  if (existsSync(pkgPath)) {
    pkg = JSON.parse(readFileSync(pkgPath, 'utf8')) as Record<string, unknown>;
  }
  const distDir = join(dir, 'dist');
  const distFiles = listFiles(distDir);
  const jsFiles = distFiles.filter((f) => f.endsWith('.js'));
  const largest = jsFiles
    .map((file) => ({ file: relRoot(file), bytes: statSync(file).size }))
    .sort((a, b) => b.bytes - a.bytes)
    .slice(0, 5);
  let webpackModules = 0;
  let esbuildWrappers = 0;
  let hasWebpack = false;
  let hasEsbuild = false;
  for (const file of jsFiles) {
    const text = readFileSync(file, 'utf8');
    if (WEBPACK_HEAD.test(text) || WEBPACK_ESM.test(text)) {
      hasWebpack = true;
      webpackModules += countMatches(text, /\b\d+:\s*\(/g);
      webpackModules += countMatches(text, /\b\d+:\s*\([^)]*\)\s*=>/g);
    }
    const wrappers = countMatches(text, ESBUILD_WRAPPER);
    if (wrappers > 0) {
      hasEsbuild = true;
      esbuildWrappers += wrappers;
    }
  }
  const format = hasWebpack && hasEsbuild ? 'mixed' : hasWebpack ? 'webpack' : hasEsbuild ? 'esbuild' : 'unknown';
  const allFiles = listFiles(dir);
  const shippedSources = {
    ts: allFiles
      .filter((f) => f.endsWith('.ts') && !f.endsWith('.d.ts') && !f.includes(join('dist', '')))
      .map(relRoot)
      .slice(0, 500),
    configs: allFiles
      .filter((f) => {
        const base = f.split('/').pop() ?? '';
        return (
          (extname(base) === '.js' || extname(base) === '.cjs' || base.endsWith('.json')) &&
          !f.includes(join('dist', '')) &&
          (base.includes('webpack') || base.includes('tsconfig') || base.includes('vitest') || base.includes('eslint') || base.endsWith('.nls.json'))
        );
      })
      .map(relRoot),
    schemas: allFiles.filter((f) => f.endsWith('.schema.json')).map(relRoot),
  };
  const name = dir.split('/').pop() ?? dir;
  let validatedModules: number | null = null;
  let reassembly: string | null = null;
  const moduleManifest = [
    join(ROOT, 'recovered', 'extensions', name, 'MODULES.json'),
    join(ROOT, 'recovered', 'extensions', 'agent', name, 'MODULES.json'),
  ].find((candidate) => existsSync(candidate));
  if (moduleManifest) {
    try {
      const parsed = JSON.parse(readFileSync(moduleManifest, 'utf8')) as {
        artifacts?: Array<{ modules?: unknown[]; reassembly?: string }>;
      };
      const artifacts = parsed.artifacts ?? [];
      validatedModules = artifacts.reduce((sum, artifact) => sum + (artifact.modules?.length ?? 0), 0);
      const statuses = new Set(artifacts.map((artifact) => artifact.reassembly ?? 'unknown'));
      reassembly = statuses.size === 1 ? String(Array.from(statuses)[0]) : 'mixed';
    } catch {
      validatedModules = null;
    }
  }
  return {
    name: dir.split('/').pop() ?? dir,
    dir: relRoot(dir),
    packageName: typeof pkg.name === 'string' ? pkg.name : null,
    version: typeof pkg.version === 'string' ? pkg.version : null,
    publisher: typeof pkg.publisher === 'string' ? pkg.publisher : null,
    main: typeof pkg.main === 'string' ? pkg.main : null,
    enabledApiProposals: Array.isArray(pkg.enabledApiProposals)
      ? pkg.enabledApiProposals.filter((v): v is string => typeof v === 'string')
      : [],
    dist: {
      jsFiles: jsFiles.length,
      totalBytes: jsFiles.reduce((sum, file) => sum + statSync(file).size, 0),
      largest,
      chunks: jsFiles.map((f) => relRoot(f)).filter((f) => /\/dist\/[0-9]+\.js$/.test(f)).slice(0, 500),
      format,
      webpackModuleHits: webpackModules,
      esbuildWrappers,
      validatedModules,
      reassembly,
    },
    shippedSources,
  };
}

export function inventoryExtensions(): ExtensionRecord[] {
  const extRoot = join(APP_DIR, 'extensions');
  const entries = listFiles(extRoot);
  const dirs = new Set<string>();
  for (const file of entries) {
    const rel = file.slice(extRoot.length + 1);
    const name = rel.split('/')[0];
    if (name.startsWith('cursor-') || name === 'theme-cursor') {
      dirs.add(join(extRoot, name));
    }
  }
  return Array.from(dirs)
    .sort()
    .map(inspectExtension);
}

export function writeExtensionsInventory(file: string): ExtensionRecord[] {
  const inventory = inventoryExtensions();
  writeJson(file, { generatedAt: new Date().toISOString(), extensions: inventory });
  const totalModules = inventory.reduce((sum, e) => sum + (e.dist.validatedModules ?? e.dist.webpackModuleHits), 0);
  console.log(
    '[recover] extensions: ' +
      String(inventory.length) +
      ' cursor extensions, ' +
      String(totalModules) +
      ' webpack module hits',
  );
  return inventory;
}
