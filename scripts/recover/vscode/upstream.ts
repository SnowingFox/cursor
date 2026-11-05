// @recovered-by cursor-re
// W1-3 stage 1: upstream src/vs index + nls reconciliation.
import { readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import {
  INVENTORY_DIR,
  OUT_DIR,
  VSCODE_DIR,
  VSCODE_SRC,
  VSCODE_TAG,
  VSCODE_COMMIT,
  anchorsOf,
  ensureDir,
  importsOf,
  listFiles,
  readJson,
  relVendor,
  sha256File,
  stripExt,
  typeOf,
  writeJson,
} from './lib';

interface UpstreamFile {
  path: string;
  sha256: string;
  type: string;
  size: number;
}

export interface UpstreamIndex {
  generatedAt: string;
  source: { dir: string; tag: string; commit: string; root: string };
  counts: Record<string, number>;
  files: UpstreamFile[];
}

function buildUpstreamIndex(): UpstreamIndex {
  const files = listFiles(join(VSCODE_SRC)).sort();
  const entries: UpstreamFile[] = [];
  const counts: Record<string, number> = {};
  for (const file of files) {
    const type = typeOf(file);
    counts[type] = (counts[type] ?? 0) + 1;
    entries.push({
      path: relVendor(file),
      sha256: sha256File(file),
      type,
      size: statSync(file).size,
    });
  }
  counts.total = entries.length;
  return {
    generatedAt: new Date().toISOString(),
    source: {
      dir: '.vendor/vscode-1.128.0',
      tag: VSCODE_TAG,
      commit: VSCODE_COMMIT,
      root: 'src/vs',
    },
    counts,
    files: entries,
  };
}

interface NlsRaw {
  modules: number;
  entries: { module: string; keys: number; upstream: boolean; upstreamFile: string | null }[];
}

function buildNlsMap(index: UpstreamIndex) {
  const byPath = new Map(index.files.map((f) => [f.path, f]));
  const byBase = new Map<string, UpstreamFile[]>();
  for (const f of index.files) {
    const base = stripExt(f.path.split('/').pop() ?? '');
    const arr = byBase.get(base) ?? [];
    arr.push(f);
    byBase.set(base, arr);
  }
  const raw = readJson<NlsRaw>(join(INVENTORY_DIR, 'nls.json'));
  const entries = [] as Record<string, unknown>[];
  let present = 0;
  let absent = 0;
  for (const item of raw.entries) {
    const module = item.module;
    const base = module.split('/').pop() ?? module;
    let upstreamFile: string | null = null;
    for (const ext of ['.ts', '.tsx', '.js']) {
      const candidate = 'src/' + module + ext;
      if (byPath.has(candidate)) {
        upstreamFile = candidate;
        break;
      }
    }
    const variants: { path: string; basis: string; sha256?: string }[] = [];
    if (upstreamFile) {
      present += 1;
      for (const ext of ['.ts', '.tsx', '.js']) {
        const p = 'src/' + module + ext;
        const hit = byPath.get(p);
        if (hit && p !== upstreamFile) {
          variants.push({ path: p, basis: 'extension-variant', sha256: hit.sha256 });
        }
      }
    } else {
      absent += 1;
      const dir = module.slice(0, module.lastIndexOf('/'));
      const candidates = (byBase.get(base) ?? [])
        .slice()
        .sort((a, b) => {
          const da = commonPrefix(a.path, 'src/' + dir);
          const db = commonPrefix(b.path, 'src/' + dir);
          return db - da || a.path.localeCompare(b.path);
        })
        .slice(0, 6)
        .map((f) => ({ path: f.path, basis: 'same-basename', sha256: f.sha256 }));
      variants.push(...candidates);
    }
    const hit = upstreamFile ? byPath.get(upstreamFile) : undefined;
    entries.push({
      module,
      keys: item.keys,
      status: upstreamFile ? 'present' : 'absent',
      upstreamFile,
      upstreamSha256: hit?.sha256 ?? null,
      upstreamType: hit?.type ?? null,
      upstreamSize: hit?.size ?? null,
      candidates: variants,
      note: upstreamFile ? null : 'cursor-added or renamed in 1.128.0',
    });
  }
  return {
    generatedAt: new Date().toISOString(),
    source: { nls: 'app/out/nls.keys.json', inventory: 'recovery/inventory/nls.json' },
    totals: { modules: raw.modules, keys: raw.entries.reduce((a, b) => a + b.keys, 0), present, absent },
    expected: { present: 970, absent: 180 },
    entries,
  };
}

function commonPrefix(a: string, b: string): number {
  const as = a.split('/');
  const bs = b.split('/');
  let i = 0;
  while (i < as.length && i < bs.length && as[i] === bs[i]) {
    i += 1;
  }
  return i;
}

/** Corpus used by the module matcher: non-test src/vs sources with imports + anchors. */
export interface CorpusFile {
  path: string;
  base: string;
  dir: string;
  sha256: string;
  size: number;
  imports: string[];
  anchors: string[];
}

export async function buildCorpus(index: UpstreamIndex): Promise<{
  files: CorpusFile[];
  anchors: Map<string, { paths: string[] }>;
}> {
  const files: CorpusFile[] = [];
  const anchorDf = new Map<string, string[]>();
  for (const entry of index.files) {
    if (!/^(ts|tsx|js)$/.test(entry.type)) {
      continue;
    }
    if (entry.path.includes('/test/') || entry.path.includes('.test.')) {
      continue;
    }
    const abs = join(VSCODE_DIR, entry.path);
    const text = readFileSync(abs, 'utf8');
    const info = importsOf(abs, text);
    const anchors = anchorsOf(text);
    files.push({
      path: entry.path,
      base: stripExt(entry.path.split('/').pop() ?? ''),
      dir: entry.path.slice(0, entry.path.lastIndexOf('/')),
      sha256: entry.sha256,
      size: statSync(abs).size,
      imports: [...info.internalBases].sort(),
      anchors: [...anchors.values].sort(),
    });
    for (const a of anchors.values) {
      const arr = anchorDf.get(a);
      if (arr) {
        if (arr.length < 60) {
          arr.push(entry.path);
        }
      } else {
        anchorDf.set(a, [entry.path]);
      }
    }
  }
  return { files, anchors: new Map([...anchorDf].map(([a, p]) => [a, { paths: p }])) };
}

export async function stageUpstream(): Promise<{ index: UpstreamIndex; corpus: Awaited<ReturnType<typeof buildCorpus>> }> {
  ensureDir(OUT_DIR);
  const index = buildUpstreamIndex();
  writeJson(join(OUT_DIR, 'upstream-index.json'), index);
  console.log(
    '[vscode] upstream-index: ' + index.counts.total + ' files ' + JSON.stringify(index.counts)
  );
  const nlsMap = buildNlsMap(index);
  writeJson(join(OUT_DIR, 'nls-map.json'), nlsMap);
  console.log(
    '[vscode] nls-map: ' + nlsMap.totals.modules + ' modules, present ' + nlsMap.totals.present + ', absent ' + nlsMap.totals.absent
  );
  const corpus = await buildCorpus(index);
  return { index, corpus };
}

if (import.meta.main) {
  const { index } = await stageUpstream();
  console.log('[vscode] done: ' + index.counts.total + ' upstream files indexed');
}
