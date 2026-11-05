// @recovered-by cursor-re
// W1-3 stage 2: match bundle modules to upstream src/vs, classify, extract patch evidence.
import { readFileSync, readdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import {
  INVENTORY_DIR,
  NLS_CALL_RE,
  OUT_DIR,
  PATCH_DIR,
  ROOT,
  VSCODE_DIR,
  anchorsOf,
  depsOfSegment,
  ensureDir,
  readJson,
  moduleBody,
  stripExt,
  walkWrapperSymbols,
  writeJson,
  writeText,
} from './lib';
import { stageUpstream, type CorpusFile } from './upstream';

const BUNDLE_ORDER = [
  'app/out/main.js',
  'app/out/vs/workbench/workbench.desktop.main.js',
  'app/out/vs/workbench/workbench.glass.main.js',
  'app/out/vs/workbench/api/node/extensionHostProcess.js',
];

const THIRD_PARTY_BASES = new Set([
  'tslib',
  'tslib.es6',
  'react',
  'react-dom',
  'react-dom-client',
  'scheduler',
  'elk.bundled',
  'elk.bundled2',
  'vscode-textmate',
  'vscode-oniguruma',
  'onig',
  'lodash',
  'ajv',
  'semver',
  'yaml',
  'jsonc-parser',
  'fast-deep-equal',
  'protobufjs',
  'dompurify',
  'marked',
  'linkify',
  'chart',
  'd3',
  'monaco-editor',
  'xterm',
]);

const THIRD_PARTY_MARKERS = [
  '@babel/runtime',
  'react.element',
  'react.production',
  'scheduler',
  'elkjs',
  'vscode-textmate',
  'oniguruma',
  'webpackChunk',
];

interface ModuleRecord {
  id: string;
  bundle: string;
  basename: string | null;
  kind: string;
  charStart: number;
  charEnd: number;
  sha256: string;
}

interface NlsEntry {
  module: string;
  keys: number;
  status: string;
  upstreamFile: string | null;
}

interface NlsRange {
  module: string;
  start: number;
  end: number;
  upstreamFile: string | null;
  status: string;
}

interface Candidate {
  path: string;
  score: number;
  dep: number;
  depInter: number;
  shared: number;
  sharedWeight: number;
  uniqueBase: boolean;
  base: string;
  nls: boolean;
}

interface DiffAnchor {
  anchor: string;
  count: number;
}

interface MatchResult {
  mod: ModuleRecord;
  status: 'matched' | 'unresolved';
  basis: string | null;
  confidence: 'A' | 'B' | 'C' | null;
  classification: string;
  upstreamPath: string | null;
  upstreamSha256: string | null;
  candidates: Candidate[];
  deps: string[];
  bodyStart: number;
  bodyEnd: number;
  depOverlap: number;
  nlsModule: string | null;
  nlsHits: number;
  nlsTotal: number;
  anchorTotal: number;
  sharedAnchors: number;
  segOnly: DiffAnchor[];
  segOnlyTotal: number;
  upOnlyTotal: number;
  anchors: string[];
  note: string | null;
  pendingDiff: DiffAnchor[] | null;
  exactness: number | null;
}

function loadNlsRanges(nlsMap: { entries: NlsEntry[] }): NlsRange[] {
  let offset = 0;
  const ranges: NlsRange[] = [];
  for (const e of nlsMap.entries) {
    ranges.push({
      module: e.module,
      start: offset,
      end: offset + Math.max(1, e.keys),
      upstreamFile: e.upstreamFile,
      status: e.status,
    });
    offset += Math.max(1, e.keys);
  }
  return ranges;
}

function lookupNls(ranges: NlsRange[], idx: number): NlsRange | null {
  let lo = 0;
  let hi = ranges.length - 1;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    const r = ranges[mid];
    if (idx < r.start) {
      hi = mid - 1;
    } else if (idx >= r.end) {
      lo = mid + 1;
    } else {
      return r;
    }
  }
  return null;
}

function context(text: string, start: number, end: number, pad = 70): string {
  const from = Math.max(0, start - pad);
  const to = Math.min(text.length, end + pad);
  return text
    .slice(from, to)
    .replace(/\s+/g, ' ')
    .replace(/\|/g, '\\|')
    .trim();
}

function sanitize(name: string): string {
  return name.replace(/[^A-Za-z0-9_.-]+/g, '_').slice(0, 90);
}

function bundleTag(bundle: string): string {
  if (bundle.includes('workbench.glass')) {
    return 'glass';
  }
  if (bundle.includes('workbench.desktop')) {
    return 'desktop';
  }
  if (bundle.includes('extensionHostProcess')) {
    return 'exthost';
  }
  return 'main';
}

export async function stageModules(onlyBundle?: string): Promise<{ patchCount: number }> {
  const { corpus } = await stageUpstream();
  const nlsMap = readJson<{ entries: NlsEntry[] }>(join(OUT_DIR, 'nls-map.json'));
  const nlsRanges = loadNlsRanges(nlsMap);
  const absentNls = new Set(nlsMap.entries.filter((e) => e.status === 'absent').map((e) => e.module));
  const absentByBase = new Map<string, NlsEntry[]>();
  for (const e of nlsMap.entries) {
    if (e.status !== 'absent') {
      continue;
    }
    const b = e.module.split('/').pop() ?? e.module;
    const arr = absentByBase.get(b) ?? [];
    arr.push(e);
    absentByBase.set(b, arr);
  }
  const bundlesJson = readJson<{ bundles: { bundle: string; sha256: string }[] }>(
    join(INVENTORY_DIR, 'bundles.json')
  );

  const byBase = new Map<string, CorpusFile[]>();
  for (const f of corpus.files) {
    const arr = byBase.get(f.base) ?? [];
    arr.push(f);
    byBase.set(f.base, arr);
  }

  const anchorSetCache = new Map<string, Set<string>>();
  const importSetCache = new Map<string, Set<string>>();
  const anchorSetOf = (f: CorpusFile): Set<string> => {
    let s = anchorSetCache.get(f.path);
    if (!s) {
      s = new Set(f.anchors);
      anchorSetCache.set(f.path, s);
    }
    return s;
  };
  const importSetOf = (f: CorpusFile): Set<string> => {
    let s = importSetCache.get(f.path);
    if (!s) {
      s = new Set(f.imports);
      importSetCache.set(f.path, s);
    }
    return s;
  };
  const fileByPath = new Map(corpus.files.map((f) => [f.path, f]));
  const globalStringAnchors = new Set([...corpus.anchors.keys()].filter((a) => a.startsWith('s:')));
  const upstreamTextCache = new Map<string, string>();
  const upstreamTextOf = (path: string): string => {
    let t = upstreamTextCache.get(path);
    if (t === undefined) {
      t = readFileSync(join(VSCODE_DIR, path), 'utf8');
      upstreamTextCache.set(path, t);
    }
    return t;
  };

  const inventory = readJson<{ modules: ModuleRecord[] }>(join(INVENTORY_DIR, 'modules.json'));
  const moduleMap: Record<string, unknown>[] = [];
  const byBundle: Record<string, { path: string; sha256: string; modules: number; matched: number }> =
    {};
  const allPatchEvidence: Record<string, unknown>[] = [];
  let patchCount = 0;
  const stats = {
    modules: 0,
    matched: 0,
    unresolved: 0,
    exact: 0,
    modified: 0,
    added: 0,
    thirdParty: 0,
    unknown: 0,
  };

  const bundles = BUNDLE_ORDER.filter((b) => !onlyBundle || b.includes(onlyBundle));
  for (const bundle of bundles) {
    const text = readFileSync(join(ROOT, bundle), 'utf8');
    const symbolToBase = walkWrapperSymbols(text);
    const mods = inventory.modules.filter((m) => m.bundle === bundle);
    const results: MatchResult[] = [];

    for (const mod of mods) {
      const base = mod.basename ? stripExt(mod.basename) : null;
      const body = moduleBody(text, mod.charStart, mod.charEnd);
      const slice = text.slice(body.start, body.end);
      const deps = depsOfSegment(slice, symbolToBase, mod.basename ?? null);

      const nlsCounts = new Map<string, number>();
      let nlsTotal = 0;
      NLS_CALL_RE.lastIndex = 0;
      let nm: RegExpExecArray | null;
      while ((nm = NLS_CALL_RE.exec(slice)) !== null) {
        const r = lookupNls(nlsRanges, Number(nm[2]));
        if (r) {
          nlsCounts.set(r.module, (nlsCounts.get(r.module) ?? 0) + 1);
          nlsTotal += 1;
        }
      }
      let nlsModule: string | null = null;
      let nlsHits = 0;
      for (const [m, c] of nlsCounts) {
        if (c > nlsHits) {
          nlsHits = c;
          nlsModule = m;
        }
      }
      const nlsRange = nlsModule ? nlsRanges.find((r) => r.module === nlsModule) ?? null : null;
      const nlsPath = nlsRange?.upstreamFile ?? null;
      const nlsBase = nlsModule ? (nlsModule.split('/').pop() ?? '') : '';
      const nlsBasenameAgrees = nlsBase === base;

      const anchor = anchorsOf(slice, 200);
      const candidates: Candidate[] = [];
      const baseCandidates = base ? byBase.get(base) ?? [] : [];
      const uniqueBase = baseCandidates.length === 1;
      for (const f of baseCandidates) {
        const imports = importSetOf(f);
        let inter = 0;
        for (const d of deps) {
          if (imports.has(d)) {
            inter += 1;
          }
        }
        const dep = inter / Math.max(1, deps.size);
        const fAnchors = anchorSetOf(f);
        let shared = 0;
        let sharedWeight = 0;
        for (const a of anchor.values) {
          if (fAnchors.has(a)) {
            shared += 1;
            sharedWeight += 1 / Math.max(1, corpus.anchors.get(a)?.paths.length ?? 20);
          }
        }
        const isNls = nlsPath !== null && nlsPath === f.path;
        const score =
          3 * dep +
          Math.min(shared, 8) / 8 +
          0.4 * Math.min(sharedWeight, 6) +
          (uniqueBase ? 0.3 : 0) +
          (isNls ? 6 : 0);
        candidates.push({
          path: f.path,
          score,
          dep,
          depInter: inter,
          shared,
          sharedWeight,
          uniqueBase,
          base: f.base,
          nls: isNls,
        });
      }
      candidates.sort((a, b) => b.score - a.score);
      const best = candidates[0] ?? null;

      let status: 'matched' | 'unresolved' = 'unresolved';
      let confidence: 'A' | 'B' | 'C' | null = null;
      let basis: string | null = null;
      let upstreamPath: string | null = null;
      let upstreamSha256: string | null = null;
      let classification = 'unknown';
      let note: string | null = null;
      let pendingDiff: DiffAnchor[] | null = null;
      let exactness: number | null = null;

      if (best) {
        const strongNls = nlsBasenameAgrees && nlsHits >= 1 && nlsPath === best.path;
        if (
          strongNls ||
          (best.dep >= 0.55 && best.shared >= 4) ||
          (uniqueBase && best.dep >= 0.45 && best.shared >= 3)
        ) {
          status = 'matched';
          confidence = 'A';
          basis = strongNls ? 'nls-index' : best.dep >= 0.4 ? 'import-graph' : 'anchor-overlap';
        } else if (
          (best.dep >= 0.3 && best.shared >= 2) ||
          (best.dep >= 0.5 && best.shared >= 1) ||
          (uniqueBase && best.shared >= 2) ||
          (nlsBasenameAgrees && nlsHits >= 2)
        ) {
          status = 'matched';
          confidence = 'B';
          basis =
            nlsBasenameAgrees && nlsHits >= 2
              ? 'nls-index'
              : best.dep >= 0.3
                ? 'import-graph'
                : 'anchor-overlap';
        } else if (uniqueBase || best.shared >= 1) {
          confidence = 'C';
          basis = uniqueBase ? 'basename-unique' : 'anchor-overlap';
          note = 'candidate only; no strong content evidence';
          if (best.shared === 0) {
            note = 'basename-only candidate; no shared anchors';
          }
        }
        if (status === 'matched') {
          upstreamPath = best.path;
          upstreamSha256 = fileByPath.get(best.path)?.sha256 ?? null;
          const f = fileByPath.get(best.path);
          if (f) {
            const fAnchors = anchorSetOf(f);
            const diff: DiffAnchor[] = [];
            for (const a of anchor.values) {
              if (!fAnchors.has(a)) {
                diff.push({ anchor: a, count: 1 });
              }
            }
            pendingDiff = diff;
            if (anchor.total >= 6) {
              exactness = 1 - Math.min(diff.length, anchor.total) / anchor.total;
            }
          }
        }
      }

      // classification for matched modules is finalised after the bundle anchor df pass
      if (status === 'matched' && upstreamPath) {
        classification = 'pending';
        if (anchor.total < 6) {
          classification = 'unknown';
          note = 'matched but insufficient content anchors to judge exactness';
        }
      } else if (nlsModule && absentNls.has(nlsModule) && nlsBasenameAgrees) {
        classification = 'cursor-added';
        note = 'nls path absent from VS Code 1.128.0';
        if (nlsHits >= 1 && status !== 'matched') {
          status = 'matched';
          confidence = confidence ?? 'A';
          basis = 'nls-index';
        }
      } else if (base && !byBase.has(base)) {
        const absentHits = absentByBase.get(base) ?? [];
        const markers = THIRD_PARTY_MARKERS.filter((m) => slice.includes(m)).length;
        if (THIRD_PARTY_BASES.has(base) || markers >= 2) {
          classification = 'third-party';
          confidence = confidence ?? 'C';
          note = 'no upstream basename; package markers=' + markers;
        } else if (absentHits.length === 1) {
          classification = 'cursor-added';
          basis = basis ?? 'nls-path-absent';
          confidence = confidence ?? 'C';
          note = 'no upstream basename; matches cursor-only nls path ' + absentHits[0].module;
        }
      }
      results.push({
        mod,
        status,
        basis,
        confidence,
        classification,
        upstreamPath,
        upstreamSha256,
        candidates: candidates.slice(0, 3),
        deps: [...deps],
        bodyStart: body.start,
        bodyEnd: body.end,
        depOverlap: best?.dep ?? 0,
        nlsModule,
        nlsHits,
        nlsTotal,
        anchorTotal: anchor.total,
        sharedAnchors: best?.shared ?? 0,
        segOnly: [],
        segOnlyTotal: 0,
        upOnlyTotal: 0,
        anchors: [...anchor.values].slice(0, 200),
        note,
        pendingDiff,
        exactness,
      });
    }

    const bundleDf = new Map<string, number>();
    for (const r of results) {
      for (const a of r.anchors) {
        bundleDf.set(a, (bundleDf.get(a) ?? 0) + 1);
      }
    }
    const noiseCut = Math.max(30, Math.floor(results.length * 0.02));

    for (const r of results) {
      if (r.status === 'matched' && r.upstreamPath && r.pendingDiff) {
        const upText = upstreamTextOf(r.upstreamPath);
        // Only string anchors count as diff evidence: esbuild export wiring creates property
        // anchors for identifiers (e.foo = ...) and enum members compile to string literals.
        const diff = r.pendingDiff.filter((d) => {
          if (d.anchor.startsWith('p:')) {
            return false;
          }
          const raw = d.anchor.slice(2);
          if (upText.includes(raw)) {
            return false;
          }
          return (bundleDf.get(d.anchor) ?? 0) < noiseCut;
        });
        r.segOnly = diff.slice(0, 60);
        r.segOnlyTotal = diff.length;
        const f = fileByPath.get(r.upstreamPath);
        if (f) {
          const fAnchors = anchorSetOf(f);
          let upOnly = 0;
          const segSet = new Set(r.anchors);
          for (const a of fAnchors) {
            if (!segSet.has(a)) {
              upOnly += 1;
            }
          }
          r.upOnlyTotal = upOnly;
        }
        if (r.classification !== 'unknown') {
          const filteredExactness = 1 - diff.length / Math.max(1, r.anchorTotal);
          r.exactness = filteredExactness;
          r.classification =
            diff.length === 0 || (diff.length === 1 && filteredExactness >= 0.9)
              ? 'upstream-exact'
              : 'upstream-modified';
        }
      }
      if (r.status === 'matched') {
        stats.matched += 1;
        if (r.classification === 'upstream-exact') {
          stats.exact += 1;
        } else if (r.classification === 'upstream-modified') {
          stats.modified += 1;
        } else if (r.classification === 'cursor-added') {
          stats.added += 1;
        } else if (r.classification === 'third-party') {
          stats.thirdParty += 1;
        } else {
          stats.unknown += 1;
        }
      } else {
        stats.unresolved += 1;
        if (r.classification === 'cursor-added') {
          stats.added += 1;
        } else if (r.classification === 'third-party') {
          stats.thirdParty += 1;
        } else {
          stats.unknown += 1;
        }
      }
      stats.modules += 1;
      moduleMap.push({
        id: r.mod.id,
        bundle: r.mod.bundle,
        basename: r.mod.basename,
        kind: r.mod.kind,
        charStart: r.mod.charStart,
        charEnd: r.mod.charEnd,
        range: r.mod.charStart + '..' + r.mod.charEnd,
        bodyRange: r.bodyStart + '..' + r.bodyEnd,
        status: r.status,
        basis: r.basis,
        confidence: r.status === 'matched' ? r.confidence : null,
        classification: r.classification,
        upstreamPath: r.upstreamPath,
        upstreamSha256: r.upstreamSha256,
        evidence: {
          deps: r.deps.length,
          depOverlap: Number(r.depOverlap.toFixed(3)),
          nlsModule: r.nlsModule,
          nlsHits: r.nlsHits,
          nlsTotal: r.nlsTotal,
          anchors: r.anchorTotal,
          sharedAnchors: r.sharedAnchors,
          segOnly: r.segOnlyTotal,
          upOnly: r.upOnlyTotal,
          exactness: r.exactness === null ? null : Number(r.exactness.toFixed(3)),
        },
        candidates: r.candidates.map((c) => ({
          path: c.path,
          score: Number(c.score.toFixed(3)),
          dep: Number(c.dep.toFixed(3)),
          shared: c.shared,
          uniqueBase: c.uniqueBase,
        })),
        unresolvedReason:
          r.status === 'unresolved'
            ? r.candidates.length > 0
              ? 'upstream basename exists, no content evidence'
              : r.nlsModule
                ? 'nls module known, basename does not match upstream'
                : 'no upstream basename'
            : null,
        note: r.note,
      });

      if (
        r.status === 'matched' &&
        r.upstreamPath &&
        r.classification === 'upstream-modified' &&
        (r.confidence === 'A' || (r.confidence === 'B' && r.segOnlyTotal >= 3))
      ) {
        const positions: {
          anchor: string;
          charStart: number;
          charEnd: number;
          absentGlobally: boolean;
          context: string;
        }[] = [];
        const body = moduleBody(text, r.mod.charStart, r.mod.charEnd);
        const segText = text.slice(body.start, body.end);
        for (const d of r.segOnly) {
          const raw = d.anchor.slice(2);
          const idx = segText.indexOf(raw);
          if (idx >= 0) {
            const absStart = body.start + idx;
            positions.push({
              anchor: raw,
              charStart: absStart,
              charEnd: absStart + raw.length,
              absentGlobally: !globalStringAnchors.has('s:' + raw),
              context: context(text, absStart, absStart + raw.length),
            });
          }
        }
        allPatchEvidence.push({
          id: r.mod.id,
          bundle: r.mod.bundle,
          basename: r.mod.basename,
          charStart: r.mod.charStart,
          charEnd: r.mod.charEnd,
          bodyStart: moduleBody(text, r.mod.charStart, r.mod.charEnd).start,
          bodyEnd: moduleBody(text, r.mod.charStart, r.mod.charEnd).end,
          upstreamPath: r.upstreamPath,
          upstreamSha256: r.upstreamSha256,
          confidence: r.confidence,
          basis: r.basis,
          evidence: {
            depOverlap: Number(r.depOverlap.toFixed(3)),
            sharedAnchors: r.sharedAnchors,
            segOnly: r.segOnlyTotal,
            upOnly: r.upOnlyTotal,
            exactness: r.exactness === null ? null : Number(r.exactness.toFixed(3)),
          },
          anchors: positions,
        });
      }
    }

    byBundle[bundle] = {
      path: bundle,
      sha256: bundlesJson.bundles.find((b) => b.bundle === bundle)?.sha256 ?? '',
      modules: mods.length,
      matched: results.filter((r) => r.status === 'matched').length,
    };
    console.log('[vscode] ' + bundle + ': ' + mods.length + ' modules, matched ' + byBundle[bundle].matched);
  }

  writeJson(join(OUT_DIR, 'patch-evidence.json'), {
    generatedAt: new Date().toISOString(),
    source: 'module-map.json + bundle slices',
    count: allPatchEvidence.length,
    entries: allPatchEvidence,
  });
  ensureDir(PATCH_DIR);
  for (const name of readdirSync(PATCH_DIR)) {
    if (name.endsWith('.md')) {
      rmSync(join(PATCH_DIR, name), { force: true });
    }
  }
  const top = allPatchEvidence
    .slice()
    .sort(
      (a, b) =>
        (b as { anchors: unknown[] }).anchors.length - (a as { anchors: unknown[] }).anchors.length
    )
    .slice(0, 200);
  for (const entry of top) {
    const e = entry as {
      id: string;
      bundle: string;
      basename: string;
      charStart: number;
      charEnd: number;
      upstreamPath: string;
      upstreamSha256: string;
      confidence: string;
      basis: string;
      evidence: Record<string, number>;
      anchors: {
        anchor: string;
        charStart: number;
        charEnd: number;
        absentGlobally: boolean;
        context: string;
      }[];
    };
    const tag = bundleTag(e.bundle);
    const ordinal = e.id.slice(e.id.lastIndexOf(':') + 1);
    const file = join(PATCH_DIR, tag + '-' + ordinal + '-' + sanitize(e.basename || 'module') + '.md');
    const upText = readFileSync(join(VSCODE_DIR, e.upstreamPath), 'utf8');
    const upLines = upText.split('\n');
    const upOnly: { anchor: string; line: number }[] = [];
    const segSet = new Set(e.anchors.map((a) => a.anchor));
    const seenUp = new Set<string>();
    for (let i = 0; i < upLines.length && upOnly.length < 40; i += 1) {
      const lineText = upLines[i];
      if (/^\s*(import|export)\b/.test(lineText)) {
        continue;
      }
      const m = lineText.match(/"((?:[^"\\]|\\.){4,160})"|'((?:[^'\\]|\\.){4,160})'/);
      const raw = m ? (m[1] ?? m[2]) : null;
      if (raw && raw.length >= 6 && !raw.startsWith('.') && !raw.includes('=>') && !segSet.has(raw) && !seenUp.has(raw)) {
        seenUp.add(raw);
        upOnly.push({ anchor: raw, line: i + 1 });
      }
    }
    const lines = [
      '# Patch evidence: ' + (e.basename || e.id),
      '',
      '- module: ' + e.id,
      '- bundle: ' + e.bundle + ' range ' + e.charStart + '..' + e.charEnd,
      '- upstream: ' + e.upstreamPath + ' sha256:' + e.upstreamSha256,
      '- basis: ' + e.basis + ' confidence: ' + e.confidence + ' classification: upstream-modified',
      '- dependency overlap: ' +
        e.evidence.depOverlap +
        '; shared rare anchors: ' +
        e.evidence.sharedAnchors,
      '- bundle-only anchors: ' +
        e.evidence.segOnly +
        '; upstream anchors absent from bundle: ' +
        e.evidence.upOnly,
      '',
      '## Bundle-only anchors (candidate Cursor changes)',
      '',
      '| anchor | bundle char range | absent from all of src/vs | context |',
      '|---|---|---|---|',
      ...e.anchors.map(
        (a) =>
          '| ' +
          a.anchor.replace(/\|/g, '\\|') +
          ' | ' +
          a.charStart +
          '..' +
          a.charEnd +
          ' | ' +
          (a.absentGlobally ? 'yes' : 'no (exists elsewhere upstream)') +
          ' | ' +
          a.context +
          ' |'
      ),
      '',
      '## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)',
      '',
      '| anchor | upstream line |',
      '|---|---|',
      ...upOnly.map((u) => '| ' + u.anchor.replace(/\|/g, '\\|') + ' | ' + u.line + ' |'),
      '',
    ];
    writeText(file, lines.join('\n') + '\n');
    patchCount += 1;
  }

  writeJson(join(OUT_DIR, 'module-map.json'), {
    generatedAt: new Date().toISOString(),
    source: {
      upstream: {
        dir: '.vendor/vscode-1.128.0',
        tag: '1.128.0',
        commit: 'fc3def6774c76082adf699d366f31a557ce5573f',
      },
      inventory: 'recovery/inventory/modules.json',
      bundles: byBundle,
      method: 'nls-index > import-graph > anchor-overlap > basename-unique; see patch-report.md',
    },
    totals: stats,
    modules: moduleMap,
  });
  console.log('[vscode] module-map: ' + JSON.stringify(stats));
  console.log('[vscode] patches written: ' + patchCount + ', patch-evidence: ' + allPatchEvidence.length);
  return { patchCount };
}

if (import.meta.main) {
  await stageModules();
}
