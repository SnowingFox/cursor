// @recovered-by cursor-re
// W1-3 stage 3: patch-report.md + unresolved.json from the generated maps.
import { join } from 'node:path';
import { OUT_DIR, readJson, writeJson, writeText } from './lib';

interface ModuleEntry {
  id: string;
  bundle: string;
  basename: string | null;
  charStart: number;
  charEnd: number;
  bodyRange?: string;
  status: string;
  basis: string | null;
  confidence: string | null;
  classification: string;
  upstreamPath: string | null;
  candidates: { path: string; score: number; dep: number; shared: number }[];
  evidence: Record<string, number | string | null>;
  note: string | null;
}

interface PatchEntry {
  id: string;
  bundle: string;
  basename: string;
  charStart: number;
  charEnd: number;
  upstreamPath: string;
  confidence: string;
  basis: string;
  evidence: Record<string, number | null>;
  anchors: { anchor: string; charStart: number; charEnd: number; absentGlobally: boolean }[];
}

function short(bundle: string): string {
  if (bundle.includes('workbench.glass')) {
    return 'glass';
  }
  if (bundle.includes('workbench.desktop')) {
    return 'desktop';
  }
  if (bundle.includes('extensionHostProcess')) {
    return 'extensionHostProcess';
  }
  if (bundle.endsWith('/main.js')) {
    return 'main';
  }
  return bundle;
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

function sanitize(name: string): string {
  return name.replace(/[^A-Za-z0-9_.-]+/g, '_').slice(0, 90);
}

function patchFileName(e: PatchEntry): string {
  const ordinal = e.id.slice(e.id.lastIndexOf(':') + 1);
  return 'patches/' + bundleTag(e.bundle) + '-' + ordinal + '-' + sanitize(e.basename || 'module') + '.md';
}

function pct(a: number, b: number): string {
  return b === 0 ? '0%' : ((100 * a) / b).toFixed(1) + '%';
}

export function stageReport(): void {
  const map = readJson<{
    generatedAt: string;
    totals: Record<string, number>;
    source: { bundles: Record<string, { modules: number; matched: number; sha256: string }> };
    modules: ModuleEntry[];
  }>(join(OUT_DIR, 'module-map.json'));
  const patch = readJson<{ count: number; entries: PatchEntry[] }>(
    join(OUT_DIR, 'patch-evidence.json')
  );
  const nls = readJson<{
    totals: { modules: number; keys: number; present: number; absent: number };
    entries: { module: string; status: string; keys: number; upstreamFile: string | null }[];
  }>(join(OUT_DIR, 'nls-map.json'));
  const bundlesJson = readJson<{
    bundles: { bundle: string; sha256: string; moduleCount: number; sizeChars: number }[];
  }>(join(OUT_DIR, '../inventory/bundles.json'));

  const mods = map.modules;
  const inBundle = (b: string): ModuleEntry[] => mods.filter((m) => m.bundle === b);
  const bundles = Object.keys(map.source.bundles);

  const rows = bundles.map((b) => {
    const list = inBundle(b);
    const matched = list.filter((m) => m.status === 'matched').length;
    const c = (k: string): number => list.filter((m) => m.classification === k).length;
    return {
      bundle: short(b),
      modules: list.length,
      matched,
      unresolved: list.length - matched,
      exact: c('upstream-exact'),
      modified: c('upstream-modified'),
      added: c('cursor-added'),
      thirdParty: c('third-party'),
      unknown: c('unknown'),
      pct: pct(matched, list.length),
    };
  });

  const total = mods.length;
  const matched = mods.filter((m) => m.status === 'matched').length;
  const klass = (k: string): ModuleEntry[] => mods.filter((m) => m.classification === k);

  const presentNls = nls.entries.filter((e) => e.status === 'present');
  const absentNls = nls.entries.filter((e) => e.status === 'absent');
  const nlsObserved = new Map<string, ModuleEntry>();
  for (const m of mods) {
    const nm = m.evidence.nlsModule;
    if (typeof nm === 'string' && !nlsObserved.has(nm)) {
      nlsObserved.set(nm, m);
    }
  }
  const presentObserved = presentNls.filter((e) => nlsObserved.has(e.module)).length;
  const absentObserved = absentNls.filter((e) => nlsObserved.has(e.module)).length;
  const cursorAdded = klass('cursor-added');
  const thirdParty = klass('third-party');
  const unresolved = mods.filter((m) => m.status === 'unresolved');

  const reason = (m: ModuleEntry): string => {
    if (m.candidates.length > 0) {
      return 'upstream basename exists, no content evidence (candidate C only)';
    }
    if (m.evidence.nlsModule) {
      return 'nls module known but basename does not match an upstream file';
    }
    return 'no upstream basename (Cursor or third-party module)';
  };
  const reasonCounts = new Map<string, number>();
  for (const m of unresolved) {
    reasonCounts.set(reason(m), (reasonCounts.get(reason(m)) ?? 0) + 1);
  }
  writeJson(join(OUT_DIR, 'unresolved.json'), {
    generatedAt: new Date().toISOString(),
    count: unresolved.length,
    note: 'Every entry is explicitly unresolved (no A/B evidence). candidates are basename-only possibilities and must not be treated as matches.',
    entries: unresolved.map((m) => ({
      id: m.id,
      bundle: m.bundle,
      basename: m.basename,
      range: m.charStart + '..' + m.charEnd,
      reason: reason(m),
      nlsModule: m.evidence.nlsModule,
      candidates: m.candidates.map((c) => c.path),
    })),
  });

  const conf = new Map<string, number>();
  for (const m of mods) {
    const k = m.status === 'matched' ? m.confidence ?? '?' : 'unresolved';
    conf.set(k, (conf.get(k) ?? 0) + 1);
  }
  const basis = new Map<string, number>();
  for (const m of mods) {
    if (m.status === 'matched') {
      basis.set(m.basis ?? '?', (basis.get(m.basis ?? '?') ?? 0) + 1);
    }
  }

  const modified = patch.entries.slice().sort((a, b) => b.anchors.length - a.anchors.length);
  const lines: string[] = [];
  lines.push('# VS Code 1.128.0 baseline: module map and patch report');
  lines.push('');
  lines.push('Generated by W1-3 vscode-baseline from fixed artifacts. No network, no app edits.');
  lines.push('');
  lines.push('- Upstream: microsoft/vscode tag 1.128.0, commit fc3def6774c76082adf699d366f31a557ce5573f, tree .vendor/vscode-1.128.0.');
  lines.push('- Bundle inventory: recovery/inventory/modules.json (14,450 modules) and bundles.json.');
  lines.push('- Outputs: upstream-index.json, nls-map.json, module-map.json, patch-evidence.json, unresolved.json, patches/*.md.');
  lines.push('');
  lines.push('## Coverage');
  lines.push('');
  lines.push('| bundle | modules | matched | unresolved | upstream-exact | upstream-modified | cursor-added | third-party | unknown | matched % |');
  lines.push('|---|---|---|---|---|---|---|---|---|---|');
  for (const r of rows) {
    lines.push(
      '| ' + r.bundle + ' | ' + r.modules + ' | ' + r.matched + ' | ' + r.unresolved + ' | ' + r.exact + ' | ' + r.modified + ' | ' + r.added + ' | ' + r.thirdParty + ' | ' + r.unknown + ' | ' + r.pct + ' |'
    );
  }
  lines.push(
    '| **total** | ' + total + ' | ' + matched + ' | ' + (total - matched) + ' | ' + klass('upstream-exact').length + ' | ' + klass('upstream-modified').length + ' | ' + cursorAdded.length + ' | ' + thirdParty.length + ' | ' + klass('unknown').length + ' | ' + pct(matched, total) + ' |'
  );
  lines.push('');
  lines.push(
    'Confidence: ' + [...conf.entries()].map(([k, v]) => k + '=' + v).join(', ') + '. Basis (matched only): ' + [...basis.entries()].map(([k, v]) => k + '=' + v).join(', ') + '.'
  );
  lines.push('');
  lines.push('## nls reconciliation');
  lines.push('');
  lines.push('app/out/nls.keys.json has ' + nls.totals.modules + ' modules / ' + nls.totals.keys + ' keys.');
  lines.push('');
  lines.push('| status | nls modules | resolved to upstream file | observed in bundles (nls index evidence) |');
  lines.push('|---|---|---|---|');
  lines.push('| present | ' + presentNls.length + ' | ' + presentNls.length + ' | ' + presentObserved + ' |');
  lines.push('| absent | ' + absentNls.length + ' | 0 | ' + absentObserved + ' |');
  lines.push('');
  lines.push('Absent entries are Cursor-only or renamed source paths. Each has same-basename candidate upstream files in nls-map.json (basis same-basename, never treated as a match).');
  lines.push('');
  lines.push('## Upstream-modified modules (patch evidence)');
  lines.push('');
  lines.push(
    patch.count + ' matched modules have at least one bundle string anchor absent from the matched upstream file after filtering. ' + modified.filter((m) => m.confidence === 'A').length + ' are confidence A, ' + modified.filter((m) => m.confidence === 'B').length + ' confidence B. Per-anchor bundle char ranges and contexts are in patch-evidence.json; markdown extraction covers ' + Math.min(200, patch.count) + ' highest-evidence modules under patches/.'
  );
  lines.push('');
  lines.push('| module | upstream | conf | diff anchors | patch file |');
  lines.push('|---|---|---|---|---|');
  for (const e of modified.slice(0, 60)) {
    lines.push('| ' + (e.basename || e.id) + ' (' + e.id + ') | ' + e.upstreamPath + ' | ' + e.confidence + ' | ' + String(e.evidence.segOnly) + ' (listed ' + e.anchors.length + ') | ' + patchFileName(e) + ' |');
  }
  lines.push('');
  lines.push('Strongest evidence (anchors absent from the whole src/vs tree):');
  lines.push('');
  for (const e of modified.filter((m) => m.anchors.some((a) => a.absentGlobally)).slice(0, 15)) {
    const strong = e.anchors.filter((a) => a.absentGlobally).slice(0, 4);
    lines.push('- ' + e.upstreamPath + ' <- ' + (e.basename || e.id) + ': ' + strong.map((a) => JSON.stringify(a.anchor) + ' @' + a.charStart).join(', '));
  }
  lines.push('');
  lines.push('## Cursor-added modules');
  lines.push('');
  lines.push(cursorAdded.length + ' modules are classified cursor-added from an absent nls source path or an absent nls path whose basename matches exactly one bundle module. No upstream file is claimed.');
  lines.push('');
  lines.push('| module | bundle | basis | nls module |');
  lines.push('|---|---|---|---|');
  for (const m of cursorAdded.slice(0, 60)) {
    lines.push('| ' + (m.basename || m.id) + ' | ' + short(m.bundle) + ' | ' + (m.basis ?? '') + ' | ' + String(m.evidence.nlsModule ?? '') + ' |');
  }
  lines.push('');
  lines.push('## Third-party modules');
  lines.push('');
  lines.push(thirdParty.length + ' modules identified by package basename or at least two bundled-package markers. No node_modules tree was indexed; this list is conservative.');
  lines.push('');
  for (const m of thirdParty) {
    lines.push('- ' + (m.basename || m.id) + ' (' + short(m.bundle) + ')');
  }
  lines.push('');
  lines.push('## Unresolved modules');
  lines.push('');
  lines.push(unresolved.length + ' modules are explicitly unresolved (status "unresolved" in module-map.json, full list in unresolved.json). No upstream path is asserted for them.');
  lines.push('');
  lines.push('| reason | modules |');
  lines.push('|---|---|');
  for (const [r, c] of [...reasonCounts.entries()].sort((a, b) => b[1] - a[1])) {
    lines.push('| ' + r + ' | ' + c + ' |');
  }
  lines.push('');
  lines.push('Most frequent unresolved basenames:');
  lines.push('');
  const baseCount = new Map<string, number>();
  for (const m of unresolved) {
    const b = m.basename ?? '(null)';
    baseCount.set(b, (baseCount.get(b) ?? 0) + 1);
  }
  lines.push('| basename | modules |');
  lines.push('|---|---|');
  for (const [b, c] of [...baseCount.entries()].sort((a, b) => b[1] - a[1]).slice(0, 25)) {
    lines.push('| ' + b + ' | ' + c + ' |');
  }
  lines.push('');
  lines.push('Candidate upstream paths for unresolved modules are recorded in module-map.json (candidates) and are C-confidence only; they are not matches.');
  lines.push('');
  lines.push('## Method');
  lines.push('');
  lines.push('1. upstream-index.json: sha256 + size + type for all 8,444 files under src/vs.');
  lines.push('2. nls-map.json: each of the 1,150 nls paths resolved to src/<path>.ts|.tsx|.js; absent paths get same-basename upstream candidates.');
  lines.push('3. Module bounds: the inventory segment runs to the next wrapper and includes hoisted code of the following module. The matcher uses only the wrapper body (from the wrapper opening brace to the first newline followed by "} })"), recorded as bodyRange.');
  lines.push('4. Evidence, in priority order: (a) nls index: Cursor bundles replace localize(key, msg) with localize(index, null) using the flat nls.messages.json order, so a module body whose numeric calls fall inside one nls module range identifies that source path; (b) import graph: wrapper init calls map to sibling module basenames via the wrapper declaration, compared to upstream import basenames; (c) literal anchors: string literals plus non-mangled property names, weighted by inverse document frequency; (d) unique basename.');
  lines.push('5. Confidence: A = nls index match with matching basename, or dep>=0.55 and >=4 shared rare anchors, or unique basename + dep>=0.45 + >=3 anchors; B = dep>=0.3 with >=2 anchors, unique basename with >=2 anchors, or >=2 nls hits; C = basename-only candidate (reported as unresolved); unresolved = no A/B evidence.');
  lines.push('6. Classification of matched modules: bundle body anchors are compared to the matched file. Property anchors are ignored for diffs because esbuild export wiring and TS enums synthesize them; string anchors that occur anywhere in the upstream file text are ignored (compiler-generated). 0-1 residual string anchors -> upstream-exact, otherwise upstream-modified. Files with fewer than 6 anchors -> unknown (matched but unverifiable).');
  lines.push('7. patches/*.md and patch-evidence.json list every residual bundle-only anchor with absolute bundle char range, plus a flag for strings absent from the entire src/vs tree (strongest evidence). No intent is inferred. Patch files are named <bundle-tag>-<ordinal>-<basename>.md so each bundle module gets a unique file.');
  lines.push('');
  lines.push('## Limitations');
  lines.push('');
  lines.push('- Cursor strips localized messages: localize calls become numeric indices, so English UI text is not available as an anchor. localize2 messages survive and do anchor matches.');
  lines.push('- esbuild hoists declarations outside wrapper bodies; the body bound loses code placed before the wrapper, so some modules have too few anchors to judge (reported unknown).');
  lines.push('- Bundles are minified; class/function/variable identifiers are gone. Matching relies on string literals, property names, import edges and nls indices.');
  lines.push('- A module can appear in several bundles (main/desktop/glass) with different minification; each bundle module is mapped independently.');
  lines.push('- The 180 absent nls paths cover Cursor-added workbench modules only where they emit localize keys; other Cursor modules stay unresolved.');
  lines.push('- No node_modules tree was indexed, so third-party classification is conservative (basename list + markers).');
  lines.push('');
  lines.push('## Reproduction');
  lines.push('');
  lines.push('    bun scripts/recover/vscode/upstream.ts   # upstream-index.json + nls-map.json');
  lines.push('    bun scripts/recover/vscode/modules.ts    # module-map.json + patch-evidence.json + patches/');
  lines.push('    bun scripts/recover/vscode/report.ts     # patch-report.md + unresolved.json');
  lines.push('    bun scripts/recover/vscode/materialize.ts --dry-run');
  lines.push('');
  lines.push('Bundle SHA-256 values:');
  lines.push('');
  for (const b of bundlesJson.bundles) {
    lines.push('- ' + b.bundle + ': ' + b.sha256);
  }
  lines.push('');
  writeText(join(OUT_DIR, 'patch-report.md'), lines.join('\n'));
  console.log('[vscode] patch-report.md written, unresolved ' + unresolved.length);
}

if (import.meta.main) {
  stageReport();
}
