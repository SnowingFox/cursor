import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = process.cwd();
const BUNDLE = 'app/out/vs/workbench/workbench.glass.main.js';
const CLUSTER = 'recovery/clusters/p1-agent.json';
const OUT_MAP = 'recovery/mappings/p1-agent.json';
const MAPS_DIR = 'scripts/recover/glass/p1-agent/maps';

type Seg = { id: string; basename: string; charStart: number; charEnd: number };
type BundleInv = { bundles: Array<{ bundle: string; segments: Seg[]; sha256?: string }> };

const HIGH_VALUE = /^(BackgroundComposer|Subagent|Canvas|Plan|Mcp|MCP|Browser|Cloud|Worktree|AgentHost)/;

function readJson<T>(p: string): T {
  return JSON.parse(readFileSync(join(ROOT, p), 'utf8')) as T;
}

/** Skip a string/template literal starting at text[i] (the opening quote). Returns index after the literal. */
function skipLiteral(text: string, i: number): number {
  const quote = text[i];
  let j = i + 1;
  while (j < text.length) {
    const ch = text[j];
    if (ch === '\\') { j += 2; continue; }
    if (quote === '`' && ch === '$' && text[j + 1] === '{') {
      j = skipBraces(text, j + 2);
      continue;
    }
    if (ch === quote) return j + 1;
    j += 1;
  }
  return j;
}

/** Blank out string/template literals and comments, preserving length, so identifier scans ignore text. */
function stripLiterals(text: string): string {
  const out = text.split('');
  let i = 0;
  while (i < text.length) {
    const ch = text[i];
    if (ch === '"' || ch === "'" || ch === '\u0060') {
      const end = skipLiteral(text, i);
      for (let k = i; k < end; k += 1) out[k] = ' ';
      i = end;
      continue;
    }
    if (ch === '/' && text[i + 1] === '/') { const nl = text.indexOf('\n', i); const end = nl < 0 ? text.length : nl; for (let k = i; k < end; k += 1) out[k] = ' '; i = end; continue; }
    if (ch === '/' && text[i + 1] === '*') { const e = text.indexOf('*/', i + 2); const end = e < 0 ? text.length : e + 2; for (let k = i; k < end; k += 1) out[k] = ' '; i = end; continue; }
    i += 1;
  }
  return out.join('');
}

/** Skip a brace block; text[i] is the char right after '{'. Returns index after matching '}'. */
function skipBraces(text: string, i: number): number {
  let depth = 1;
  let j = i;
  while (j < text.length) {
    const ch = text[j];
    if (ch === '"' || ch === "'" || ch === '`') { j = skipLiteral(text, j); continue; }
    if (ch === '/' && text[j + 1] === '/') { const nl = text.indexOf('\n', j); j = nl < 0 ? text.length : nl + 1; continue; }
    if (ch === '/' && text[j + 1] === '*') { const end = text.indexOf('*/', j + 2); j = end < 0 ? text.length : end + 2; continue; }
    if (ch === '{') depth += 1;
    if (ch === '}') { depth -= 1; if (depth === 0) return j + 1; }
    j += 1;
  }
  return j;
}

function main(): void {
  const cluster = readJson<{ modules: Array<{ id: string; basename: string }> }>(CLUSTER);
  const inv = readJson<BundleInv>('recovery/inventory/bundles.json');
  const bundle = inv.bundles.find((b) => b.bundle === BUNDLE);
  if (!bundle) throw new Error('bundle missing');
  const text = readFileSync(join(ROOT, BUNDLE), 'utf8');

  // symbol -> basename for every esbuild wrapper in the bundle
  const symbolToBase = new Map<string, string>();
  const wrapperRe = /([A-Za-z0-9_$]+)\s*=\s*L\(\{ "([^"]+)"\(\)/g;
  let m: RegExpExecArray | null;
  while ((m = wrapperRe.exec(text)) !== null) symbolToBase.set(m[1], m[2]);

  const glassTree = readJson<{ records: Array<{ moduleId: string; candidatePath: string | null; candidateCount: number; candidates: unknown[]; basis: string; confidence: string }> }>('recovery/mappings/glass-tree.json');
  const treeById = new Map(glassTree.records.map((r) => [r.moduleId, r]));
  const baseIndex = readJson<{ index: Record<string, Array<{ module: string; upstream?: boolean }>> }>('recovery/mappings/basename-index.json');

  mkdirSync(join(ROOT, MAPS_DIR), { recursive: true });
  const records: Array<Record<string, unknown>> = [];
  const maps: Array<Record<string, unknown>> = [];
  const stats = { emitted: 0, nlsExact: 0, nlsAmbiguous: 0, none: 0, inferred: 0, depResolved: 0, renamedFiles: 0, renames: 0 };

  for (const mod of cluster.modules) {
    const seg = bundle.segments.find((s) => s.id === mod.id);
    if (!seg) { records.push({ id: mod.id, basename: mod.basename, path: null, pathBasis: 'missing-segment', confidence: 'C' }); continue; }
    const slice = text.slice(seg.charStart, seg.charEnd);
    const start = slice.indexOf('L({ "' + mod.basename + '"()');
    if (start < 0) { records.push({ id: mod.id, basename: mod.basename, path: null, pathBasis: 'wrapper-not-found', confidence: 'C' }); continue; }

    // locate wrapper brace block
    const openBrace = start + 2; // '{' of L({ ...
    const afterWrapper = skipBraces(slice, openBrace + 1); // index after matching '}'
    const body = slice.slice(openBrace + 1, afterWrapper - 1);
    const tail = slice.slice(afterWrapper);

    // deps: init calls inside wrapper body
    const deps: string[] = [];
    const callRe = /([A-Za-z0-9_$]+)\(\),?/g;
    let c: RegExpExecArray | null;
    while ((c = callRe.exec(body)) !== null) {
      if (c[1] === 'function') continue;
      const base = symbolToBase.get(c[1]);
      if (base && !deps.includes(base)) deps.push(base);
    }
    if (deps.length) stats.depResolved += 1;

    // declared bindings in tail (function declarations are real bindings)
    const tailFns: Array<{ name: string; jsx: boolean }> = [];
    const fnRe = /^function ([A-Za-z0-9_$]+)\(/gm;
    let f: RegExpExecArray | null;
    while ((f = fnRe.exec(tail)) !== null) {
      const bodyStart = tail.indexOf('{', f.index);
      if (bodyStart < 0) continue;
      const bodyEnd = skipBraces(tail, bodyStart + 1);
      tailFns.push({ name: f[1], jsx: false });
      void bodyEnd;
    }

    // jsx runtime aliases visible in the slice
    const aliases: string[] = [];
    const importRe = /import \{ ([^}]+) \} from "\.\/react-runtime\/react\/esm-(?:jsx-runtime|jsx-dev-runtime|index)-production\.js"/g;
    let im: RegExpExecArray | null;
    while ((im = importRe.exec(slice)) !== null) {
      for (const part of im[1].split(',')) {
        const [orig, local] = part.trim().split(/\s+as\s+/);
        if (!local) continue;
        if (orig === 'jsx' || orig === 'jsxs' || orig === 'createElement' || orig === 'Fragment') aliases.push(local);
      }
    }
    for (const fn of tailFns) {
      const fnStart = tail.indexOf('function ' + fn.name + '(');
      const bStart = tail.indexOf('{', fnStart);
      const bEnd = skipBraces(tail, bStart + 1);
      const fbody = tail.slice(bStart, bEnd);
      fn.jsx = aliases.some((a) => new RegExp('\\b' + a.replace(/\$/g, '\\$') + '\\(').test(fbody));
    }

    // anchors: class names / ids / displayName
    const domClassTokens = Array.from(slice.matchAll(/class(?:Name)?="([^"]+)"/g))
      .flatMap((x) => x[1].split(/\s+/))
      .filter((token) => /^(ui-|cursor-ui-|browser|url-|tool|agent|plan|subagent|mcp|composer|glass|worktree)/i.test(token));
    const classAnchors = Array.from(new Set(domClassTokens)).slice(0, 8);
    const idAnchors = Array.from(new Set(Array.from(slice.matchAll(/"(cursor|workbench)\.[a-zA-Z0-9._-]{4,60}"/g)).map((x) => x[0].slice(1, -1)))).slice(0, 8);
    const displayNames = Array.from(new Set(Array.from(slice.matchAll(/\.displayName = "([^"]+)"/g)).map((x) => x[1])));

    // candidate path
    const tree = treeById.get(mod.id);
    let candidatePath: string | null = null;
    let pathBasis = 'inferred';
    let confidence = 'C';
    let candidates: string[] = [];
    if (tree && tree.candidatePath) { candidatePath = tree.candidatePath; pathBasis = 'nls-exact'; confidence = 'B'; stats.nlsExact += 1; }
    else if (tree && tree.candidateCount > 1) { pathBasis = 'nls-ambiguous'; candidates = (tree.candidates as string[]) ?? []; stats.nlsAmbiguous += 1; }
    else {
      const stem = mod.basename.replace(/\.react\.js$/, '').replace(/\.js$/, '').replace(/\.stylex$/, '');
      const key = stem.charAt(0).toLowerCase() + stem.slice(1);
      const hits = baseIndex.index[key];
      if (hits && hits.length === 1) { pathBasis = 'basename-unique'; candidates = [hits[0].module]; confidence = 'C'; }
      stats.none += 1;
      stats.inferred += 1;
    }

    // rename proposals (high-value modules only)
    const pascal = mod.basename.replace(/\.react\.js$/, '').replace(/\.js$/, '').replace(/\.stylex$/, '');
    const renames: Record<string, string> = {};
    const notes: string[] = [];
    if (HIGH_VALUE.test(mod.basename)) {
      const mVar = new RegExp('var\\s+([A-Za-z0-9_$]+)\\s*=\\s*L\\(\\{ "' + mod.basename.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '"\\(\\)').exec(slice);
      const allIds = new Set(Array.from(stripLiterals(slice).matchAll(/[A-Za-z_$][A-Za-z0-9_$]*/g)).map((x) => x[0]));
      const put = (from: string, to: string, why: string) => {
        if (!from || from === to || allIds.has(to) || Object.values(renames).includes(to)) return;
        renames[from] = to; notes.push(from + ' -> ' + to + ': ' + why);
      };
      if (mVar) put(mVar[1], pascal + 'Module', 'declared wrapper binding, evidence: esbuild init key "' + mod.basename + '"');
      const dn = /\.displayName = "([^"]+)"/.exec(slice);
      if (dn && /displayName/.test(slice)) {
        const before = slice.slice(0, dn.index);
        const idm = /([A-Za-z0-9_$]+)$/.exec(before);
        if (idm) put(idm[1], dn[1], 'assignment .displayName = "' + dn[1] + '" in module body');
      }
      const jsxFns = tailFns.filter((x) => x.jsx);
      if (jsxFns.length === 1) put(jsxFns[0].name, pascal, 'sole JSX-returning top-level function in module slice; name from wrapper basename');
      else if (jsxFns.length > 1) notes.push('component rename skipped: ' + jsxFns.length + ' JSX-returning functions (' + jsxFns.map((x) => x.name).join(', ') + ')');
    }
    if (Object.keys(renames).length) {
      stats.renamedFiles += 1; stats.renames += Object.keys(renames).length;
      maps.push({ moduleId: mod.id, basename: mod.basename, file: 'recovered/app/glass/agent/' + mod.basename, renames, notes });
    } else if (HIGH_VALUE.test(mod.basename)) {
      maps.push({ moduleId: mod.id, basename: mod.basename, file: 'recovered/app/glass/agent/' + mod.basename, renames: {}, notes });
    }

    records.push({
      id: mod.id,
      basename: mod.basename,
      path: candidatePath,
      pathBasis,
      confidence,
      candidates,
      charRange: [seg.charStart, seg.charEnd],
      sliceChars: slice.length,
      wrapperBodyChars: afterWrapper - openBrace,
      declaredInTail: tailFns.map((x) => x.name),
      jsxFunctions: tailFns.filter((x) => x.jsx).map((x) => x.name),
      deps,
      anchors: { classNames: classAnchors, ids: idAnchors, displayNames },
      notes: 'esbuild wrapper; slice = wrapper body + hoisted tail until next wrapper. Path inferred unless pathBasis=nls-exact.',
    });
    stats.emitted += 1;
  }

  writeFileSync(join(ROOT, OUT_MAP), JSON.stringify({
    generatedAt: new Date().toISOString(),
    cluster: 'p1-agent',
    bundle: BUNDLE,
    counts: { modules: cluster.modules.length, emitted: stats.emitted, nlsExact: stats.nlsExact, nlsAmbiguous: stats.nlsAmbiguous, inferred: stats.inferred, basenameUniqueCandidates: stats.none - stats.inferred + 0, renameFiles: stats.renamedFiles, renames: stats.renames, depResolvedModules: stats.depResolved },
    note: 'path=null means no exact nls candidate; basename-unique fallback recorded in candidates as evidence only, not a path claim.',
    records,
  }, null, 2) + '\n');

  for (const map of maps) {
    writeFileSync(join(ROOT, MAPS_DIR, String(map.basename).replace(/\.js$/, '') + '.json'), JSON.stringify(map, null, 2) + '\n');
  }
  console.log(JSON.stringify({ modules: cluster.modules.length, emitted: stats.emitted, nlsExact: stats.nlsExact, nlsAmbiguous: stats.nlsAmbiguous, renameMaps: maps.length, filesWithRenames: stats.renamedFiles, renames: stats.renames, depResolved: stats.depResolved }, null, 2));
}

main();
