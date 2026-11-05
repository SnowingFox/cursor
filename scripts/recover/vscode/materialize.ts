// @recovered-by cursor-re
// W1-3 materializer: copy upstream-exact files into recovered/vscode/src.
// Dry-run by default. Never writes app/ or .vendor/.
import { copyFileSync, existsSync, mkdirSync, statSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { OUT_DIR, ROOT, VSCODE_DIR, readJson, sha256File, writeJson } from './lib';

interface MapEntry {
  id: string;
  status: string;
  confidence: string | null;
  classification: string;
  upstreamPath: string | null;
  upstreamSha256: string | null;
}

interface IndexFile {
  path: string;
  sha256: string;
  size: number;
  type: string;
}

interface Options {
  apply: boolean;
  classification: string;
  confidence: string;
  only: string | null;
  out: string;
  limit: number | null;
  force: boolean;
}

function parseArgs(argv: string[]): Options {
  const o: Options = {
    apply: false,
    classification: 'upstream-exact',
    confidence: 'A',
    only: null,
    out: join(ROOT, 'recovered', 'vscode', 'src'),
    limit: null,
    force: false,
  };
  for (let i = 0; i < argv.length; i += 1) {
    const a = argv[i];
    if (a === '--apply') {
      o.apply = true;
    } else if (a === '--dry-run') {
      o.apply = false;
    } else if (a === '--classification') {
      o.classification = argv[++i];
    } else if (a === '--confidence') {
      o.confidence = argv[++i];
    } else if (a === '--only') {
      o.only = argv[++i];
    } else if (a === '--out') {
      o.out = resolve(argv[++i]);
    } else if (a === '--limit') {
      o.limit = Number(argv[++i]);
    } else if (a === '--force') {
      o.force = true;
    } else if (a === '--help') {
      console.log(
        'usage: bun scripts/recover/vscode/materialize.ts [--apply] [--classification upstream-exact] [--confidence A] [--only substr] [--out dir] [--limit N] [--force]'
      );
      process.exit(0);
    }
  }
  return o;
}

function guardOut(out: string): void {
  const rel = relative(ROOT, out);
  if (rel.startsWith('app') || rel.startsWith('.vendor') || rel.startsWith('..')) {
    throw new Error('refusing to materialize into ' + out);
  }
}

function main(): void {
  const opts = parseArgs(process.argv.slice(2));
  guardOut(opts.out);
  const map = readJson<{ modules: MapEntry[] }>(join(OUT_DIR, 'module-map.json'));
  const index = readJson<{ files: IndexFile[] }>(join(OUT_DIR, 'upstream-index.json'));
  const byPath = new Map(index.files.map((f) => [f.path, f]));

  const allowedConf = new Set(opts.confidence.split(',').map((s) => s.trim().toUpperCase()));
  const selected = map.modules.filter((m) => {
    if (m.status !== 'matched' || !m.upstreamPath) {
      return false;
    }
    if (m.classification !== opts.classification) {
      return false;
    }
    if (!m.confidence || !allowedConf.has(m.confidence)) {
      return false;
    }
    if (opts.only && !m.upstreamPath.includes(opts.only)) {
      return false;
    }
    return true;
  });

  const files = new Map<string, string[]>();
  for (const m of selected) {
    const arr = files.get(m.upstreamPath!) ?? [];
    arr.push(m.id);
    files.set(m.upstreamPath!, arr);
  }

  let paths = [...files.keys()].sort();
  if (opts.limit !== null) {
    paths = paths.slice(0, opts.limit);
  }

  let bytes = 0;
  const missing: string[] = [];
  const mismatched: string[] = [];
  const entries = [] as {
    upstreamPath: string;
    target: string;
    sha256: string;
    size: number;
    moduleIds: string[];
  }[];
  for (const p of paths) {
    const entry = byPath.get(p);
    if (!entry) {
      missing.push(p);
      continue;
    }
    const abs = join(VSCODE_DIR, p);
    if (!existsSync(abs) || statSync(abs).size !== entry.size) {
      missing.push(p);
      continue;
    }
    const digest = sha256File(abs);
    if (digest !== entry.sha256) {
      mismatched.push(p);
      continue;
    }
    bytes += entry.size;
    const moduleIds = files.get(p) ?? [];
    entries.push({
      upstreamPath: p,
      target: join(opts.out, p.replace(/^src\//, '')),
      sha256: digest,
      size: entry.size,
      moduleIds,
    });
  }

  console.log('selection classification=' + opts.classification + ' confidence=' + opts.confidence);
  console.log('matched module entries: ' + selected.length + ', distinct upstream files: ' + files.size);
  console.log('verified files: ' + entries.length + ', bytes: ' + bytes);
  if (missing.length > 0) {
    console.log('missing files: ' + missing.length + ' ' + JSON.stringify(missing.slice(0, 5)));
  }
  if (mismatched.length > 0) {
    console.log('sha256 mismatches: ' + mismatched.length + ' ' + JSON.stringify(mismatched.slice(0, 5)));
  }
  for (const e of entries.slice(0, 15)) {
    console.log('  ' + e.upstreamPath + ' -> ' + relative(ROOT, e.target));
  }
  if (entries.length > 15) {
    console.log('  ... ' + (entries.length - 15) + ' more');
  }
  if (!opts.apply) {
    console.log('dry-run: no files written (pass --apply to copy)');
    return;
  }
  if (missing.length > 0 || mismatched.length > 0) {
    throw new Error('refusing --apply with unverified files');
  }
  for (const e of entries) {
    const target = join(opts.out, e.upstreamPath.replace(/^src\//, ''));
    if (existsSync(target) && !opts.force) {
      throw new Error('target exists (pass --force): ' + target);
    }
    mkdirSync(dirname(target), { recursive: true });
    copyFileSync(join(VSCODE_DIR, e.upstreamPath), target);
  }
  mkdirSync(opts.out, { recursive: true });
  copyFileSync(join(VSCODE_DIR, 'LICENSE.txt'), join(opts.out, 'LICENSE.txt'));
  writeJson(join(opts.out, 'materialize-manifest.json'), {
    generatedAt: new Date().toISOString(),
    'recovered-by': 'cursor-re W1-3 vscode-baseline (upstream-copy)',
    upstream: {
      dir: '.vendor/vscode-1.128.0',
      tag: '1.128.0',
      commit: 'fc3def6774c76082adf699d366f31a557ce5573f',
      license: 'MIT (LICENSE.txt copied)',
    },
    selection: {
      classification: opts.classification,
      confidence: opts.confidence,
      only: opts.only,
      modules: selected.length,
      files: entries.length,
    },
    files: entries,
  });
  console.log('copied ' + entries.length + ' files to ' + opts.out);
}

main();
