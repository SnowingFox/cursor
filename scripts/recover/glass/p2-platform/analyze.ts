import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { parse } from '@babel/parser';
import { CLUSTERS_DIR, INVENTORY_DIR, MAPPINGS_DIR, ROOT, ensureDir, readJson, relRoot } from '../../lib/paths';

const OUT_DIR = join(ROOT, 'recovered/app/glass/platform');
const MAPS_DIR = join(ROOT, 'scripts/recover/glass/p2-platform/maps');
const MAPPING_FILE = join(MAPPINGS_DIR, 'p2-platform.json');

interface ClusterModule { id: string; basename: string; kind: string; charLength: number; note: string }
interface Cluster { name: string; bundle: string; count: number; chars: number; modules: ClusterModule[] }
interface Segment { id: string; basename?: string | null; charStart: number; charEnd: number; sha256: string; kind?: string }
interface BundleInventory { bundle: string; sha256: string; segments: Segment[] }

interface MapRecord { moduleId: string; basename: string; basis: string; confidence: string; evidence: string; renames: Record<string, string>; file: string }

type Node = Record<string, any>;

function parseBody(code: string): Node | null {
  const attempts: Array<() => Node> = [
    () => parse(code, { sourceType: 'module', plugins: ['typescript', 'jsx', 'decorators-legacy'] as never, errorRecovery: false }) as unknown as Node,
    () => parse(code, { sourceType: 'script', plugins: ['typescript', 'jsx', 'decorators-legacy'] as never, errorRecovery: false }) as unknown as Node,
  ];
  for (const attempt of attempts) {
    try { return attempt(); } catch { /* next */ }
  }
  return null;
}

const SKIP = new Set(['start', 'end', 'loc', 'range', 'extra', 'leadingComments', 'trailingComments', 'innerComments', 'comments', 'tokens', 'errors']);
function walk(node: unknown, fn: (n: Node) => void): void {
  if (Array.isArray(node)) { for (const item of node) walk(item, fn); return; }
  if (!node || typeof node !== 'object') return;
  const record = node as Node;
  if (typeof record.type === 'string') fn(record);
  for (const key of Object.keys(record)) {
    if (SKIP.has(key)) continue;
    walk(record[key], fn);
  }
}

function camelToKebab(value: string): string {
  return value.replace(/([a-z0-9])([A-Z])/g, '$1-$2').replace(/_/g, '-').toLowerCase();
}

function pascal(value: string): string {
  return value.split(/[^A-Za-z0-9]+/).filter(Boolean).map((part) => part[0].toUpperCase() + part.slice(1)).join('');
}

function stemOf(basename: string): string {
  const withoutExt = basename.replace(/\.(mjs|js)$/i, '');
  return withoutExt.replace(/\.(react|stylex|helpers|types|shared|search|utils|curatedCategories)$/i, '');
}

function stripHeaderText(text: string): { header: string; body: string } {
  const lines = text.split('\n');
  let index = 0;
  while (index < lines.length && lines[index].startsWith('// ')) index += 1;
  while (index < lines.length && lines[index].trim() === '') index += 1;
  return { header: lines.slice(0, index).join('\n'), body: lines.slice(index).join('\n') };
}

function collectStrings(ast: Node | null): string[] {
  const out = new Set<string>();
  if (!ast) return [];
  walk(ast, (node) => {
    if (node.type === 'StringLiteral' && typeof node.value === 'string') out.add(node.value);
    if (node.type === 'TemplateElement' && typeof node.value?.cooked === 'string') out.add(node.value.cooked);
  });
  return [...out];
}

function topLevelDecls(ast: Node | null, body: string): string[] {
  const out: string[] = [];
  if (ast) {
    for (const statement of ast.program?.body ?? []) {
      if ((statement.type === 'FunctionDeclaration' || statement.type === 'ClassDeclaration') && statement.id?.name) out.push(statement.id.name);
      if (statement.type === 'VariableDeclaration') {
        for (const declarator of statement.declarations ?? []) if (declarator.id?.type === 'Identifier') out.push(declarator.id.name);
      }
    }
    return out;
  }
  for (const match of body.matchAll(/\b(?:function|class)\s+([A-Za-z_$][\w$]*)/g)) out.push(match[1]);
  for (const match of body.matchAll(/^var\s+([A-Za-z_$][\w$]*)/gm)) out.push(match[1]);
  return [...new Set(out)];
}

function wrapperInfo(body: string, ast: Node | null): { init: string | null; key: string | null; deps: string[] } {
  const head = /^\s*(?:(?:var|let|const)\s+)?([A-Za-z_$][\w$]*)\s*=\s*[A-Za-z_$][\w$]*\(\{\s*["']([^"']+)["']\s*\(/.exec(body);
  const init = head?.[1] ?? null;
  const key = head?.[2] ?? null;
  const deps: string[] = [];
  if (ast && key) {
    walk(ast, (node) => {
      if (deps.length > 0 || node.type !== 'ObjectMethod' || node.key?.type !== 'StringLiteral' || node.key.value !== key) return;
      const statements = node.body?.body ?? [];
      const first = statements.find((statement: Node) => statement.type === 'ExpressionStatement');
      if (!first) return;
      walk(first, (inner) => {
        if (inner.type === 'CallExpression' && inner.callee?.type === 'Identifier' && Array.isArray(inner.arguments) && inner.arguments.length === 0) deps.push(inner.callee.name);
      });
    });
  }
  if (deps.length === 0 && key) {
    const start = body.indexOf('"' + key + '"');
    const scoped = start >= 0 ? body.slice(start, start + 1200) : body.slice(0, 600);
    const bounded = scoped.split(/}\s*\}\)/)[0] ?? scoped;
    for (const match of bounded.matchAll(/([A-Za-z_$][\w$]*)\(\)/g)) deps.push(match[1]);
  }
  const unique = [...new Set(deps)].filter((name) => name !== init);
  return { init, key, deps: unique.slice(0, 24) };
}

function anchorsOf(strings: string[]): { ids: string[]; kebab: string[]; urls: string[]; displayName: string[] } {
  const ids = new Set<string>(); const kebab = new Set<string>(); const urls = new Set<string>();
  for (const value of strings) {
    if (value.length < 4 || value.length > 200) continue;
    if (/^https?:\/\//.test(value)) { urls.add(value.slice(0, 120)); continue; }
    for (const match of value.matchAll(/\b[a-z][a-z0-9]*(?:\.[a-z][a-z0-9-]*){2,}\b/g)) ids.add(match[0]);
    for (const match of value.matchAll(/\b[a-z][a-z0-9]*(?:-[a-z0-9]+){2,}\b/g)) kebab.add(match[0]);
  }
  return { ids: [...ids].slice(0, 10), kebab: [...kebab].slice(0, 12), urls: [...urls].slice(0, 4), displayName: [] };
}

function groupOf(basename: string, text: string): string {
  const lower = text.toLowerCase();
  if (basename.endsWith('.mjs')) return 'third-party-build-mjs';
  if (/^\$_StatsigGlobal|^Statsig|^UrlConfiguration|^NetworkConfig|^StorageProvider|^CacheKey|^MemoKey|^Feature\.mjs|^DownloadConfigSpecsResponse/.test(basename) || lower.includes('statsig')) return 'third-party-statsig';
  if (/Plugin|Tokenizer|Extension|NodeView/.test(basename) && /decoration|nodeview|prosemirror|editorview|markdownit|shiki|tokeniz/.test(lower)) return 'editor-plugins-third-party';
  if (/Team/.test(basename) && /Marketplace|Plugin/.test(basename)) return 'team-marketplace';
  if (/Marketplace|Plugin/.test(basename)) return 'marketplace-plugins';
  if (/Model/.test(basename)) return 'model';
  if (/Usage|Quota|Credit/.test(basename)) return 'usage-billing';
  if (/Billing|Invoice|Payment|Pricing|Checkout/.test(basename)) return 'usage-billing';
  if (/Team/.test(basename)) return 'team';
  if (/Setting|Preference|Keybinding|Config|Token/.test(basename)) return 'settings';
  if (/Provider/.test(basename)) return 'provider';
  if (/Auth|Login|SignIn|SignUp|Logout|Authentication/.test(basename)) return 'auth';
  return 'unclassified';
}

function proposeRenames(ast: Node | null, basename: string, strings: string[], text: string, debug = false): { renames: Record<string, string>; evidence: string } | null {
  if (!ast) return null;
  const withoutDisplayLiterals = text.replace(/displayName\s*=\s*["'][^"']*["']/g, '');
  const display: Array<[string, string]> = [];
  for (const match of text.matchAll(/([A-Za-z_$][\w$]*)\.displayName\s*=\s*["']([A-Za-z_$][\w$ ]{2,})["']/g)) display.push([match[1], match[2].trim()]);
  if (display.length === 1) {
    const [oldName, newName] = display[0];
    if (newName !== oldName && !new RegExp('\\b' + newName + '\\b').test(withoutDisplayLiterals) && !/^(unknown|anonymous)$/i.test(newName)) {
      return { renames: { [oldName]: newName }, evidence: 'displayName literal "' + newName + '" assigned to ' + oldName };
    }
  }
  const stem = stemOf(basename);
  if (!/^[A-Z]/.test(stem) || stem.length < 6) return null;
  if (!ast.program) return null;
  const declared = new Set<string>();
  for (const statement of ast.program.body ?? []) {
    if ((statement.type === 'FunctionDeclaration' || statement.type === 'ClassDeclaration') && statement.id?.name) declared.add(statement.id.name);
    if (statement.type === 'VariableDeclaration') for (const declarator of statement.declarations ?? []) if (declarator.id?.type === 'Identifier') declared.add(declarator.id.name);
  }
  const wrapper = /^(?:\s*(?:var|let|const)\s+)?([A-Za-z_$][\w$]*)\s*=\s*[A-Za-z_$][\w$]*\(\{\s*["']([^"']+)["']\s*\(/.exec(text);
  if (wrapper) {
    const init = wrapper[1];
    const targetInit = pascal(stemOf(wrapper[2])) + 'Module';
    if (declared.has(init) && init !== targetInit && !new RegExp('\\b' + targetInit + '\\b').test(text)) {
      return { renames: { [init]: targetInit }, evidence: 'declared esbuild wrapper init for module "' + wrapper[2] + '"; synthetic module-scope name derived from basename (wrapper key is exact)' };
    }
  }
  for (const statement of ast.program.body ?? []) {
    if (statement.type !== 'FunctionDeclaration' || !statement.id?.name) continue;
    const statements = statement.body?.body ?? [];
    if (statements.length !== 1 || statements[0].type !== 'ReturnStatement' || !statements[0].argument) continue;
    const props: string[] = [];
    let node: Node | null = statements[0].argument;
    while (node && (node.type === 'MemberExpression' || node.type === 'OptionalMemberExpression') && !node.computed && node.property?.type === 'Identifier') {
      props.unshift(node.property.name);
      node = node.object;
    }
    if (!node || node.type !== 'Identifier' || props.length < 1) continue;
    const last = props[props.length - 1];
    if (last.length < 4 || /^(length|name|id|value|type|key|data|item|node|parent)$/.test(last) || /^(set|get|is|has|on)/.test(last)) continue;
    const getter = 'get' + pascal(last);
    if (getter === statement.id.name || new RegExp('\\b' + getter + '\\b').test(text)) continue;
    return { renames: { [statement.id.name]: getter }, evidence: 'single-return property getter over t.' + props.join('.') + '; name inferred from returned property chain' };
  }
  const target = pascal(stem);
  const kebab = camelToKebab(stem);
  const candidates: Array<{ name: string; anchor: string }> = [];
  for (const statement of ast.program.body ?? []) {
    if (statement.type !== 'FunctionDeclaration' || !statement.id?.name) continue;
    const fn = statement as Node;
    const bodyStrings: string[] = [];
    walk(fn.body, (node) => {
      if (node.type === 'StringLiteral' && typeof node.value === 'string') bodyStrings.push(node.value);
      if (node.type === 'TemplateElement' && typeof node.value?.cooked === 'string') bodyStrings.push(node.value.cooked);
    });
    const anchor = bodyStrings.find((value) => value.includes(kebab) || (stem.length >= 8 && value.toLowerCase().includes(stem.toLowerCase())));
    if (anchor) candidates.push({ name: fn.id.name, anchor });
  }
  if (debug) console.log('[debug] ' + basename + ' parseable fn-candidates=' + String(candidates.length) + (candidates.length ? ' [' + candidates.map((item) => item.name + ':' + item.anchor.slice(0, 40)).join(' | ') + ']' : ''));
  if (candidates.length !== 1) return null;
  const [candidate] = candidates;
  if (candidate.name === target || new RegExp('\\b' + target + '\\b').test(text)) return null;
  return { renames: { [candidate.name]: target }, evidence: 'module basename ' + basename + '; kebab/name anchor "' + candidate.anchor.slice(0, 80) + '" inside ' + candidate.name };
}

interface Args { headers: boolean; maps: boolean; debug: boolean }
function parseArgs(): Args {
  const argv = process.argv.slice(2);
  return { headers: argv.includes('--headers'), maps: !argv.includes('--no-maps'), debug: argv.includes('--debug') };
}

function main(): void {
  const args = parseArgs();
  const cluster = readJson<Cluster>(join(CLUSTERS_DIR, 'p2-platform.json'));
  const bundles = readJson<{ bundles: BundleInventory[] }>(join(INVENTORY_DIR, 'bundles.json'));
  const bundle = bundles.bundles.find((item) => item.bundle === cluster.bundle);
  if (!bundle) throw new Error('bundle not found');
  const bundleText = readFileSync(join(ROOT, bundle.bundle), 'utf8');
  ensureDir(OUT_DIR);
  if (args.maps) ensureDir(MAPS_DIR);
  const appliedFile = join(MAPS_DIR, 'APPLIED.json');
  const applied: string[] = existsSync(appliedFile) ? (JSON.parse(readFileSync(appliedFile, 'utf8')) as { applied: string[] }).applied : [];
  const records: unknown[] = [];
  const mapIndex: Array<{ moduleId: string; basename: string; file: string; map: string }> = [];
  let parseable = 0; let truncated = 0; let exact = 0; let mapCount = 0;
  const groups: Record<string, string[]> = {};
  for (const module of cluster.modules) {
    const segment = bundle.segments.find((item) => item.id === module.id);
    if (!segment) throw new Error('segment missing ' + module.id);
    const segmentText = bundleText.slice(segment.charStart, segment.charEnd);
    const filePath = join(OUT_DIR, module.basename);
    if (!existsSync(filePath)) throw new Error('emitted file missing ' + filePath);
    const fileText = readFileSync(filePath, 'utf8');
    const { body } = stripHeaderText(fileText);
    const renamed = applied.includes(module.basename);
    const ast = parseBody(body);
    if (ast) parseable += 1; else truncated += 1;
    const strings = collectStrings(ast);
    const info = wrapperInfo(body, ast);
    const anchors = anchorsOf(strings);
    const declarations = topLevelDecls(ast, body);
    const group = groupOf(module.basename, body);
    (groups[group] ??= []).push(module.basename);
    if (!renamed && body.replace(/\s+$/, '') === segmentText.replace(/\s+$/, '')) exact += 1;
    let proposed: { renames: Record<string, string>; evidence: string } | null = null;
    if (args.maps) proposed = proposeRenames(ast, module.basename, strings, body, args.debug);
    if (proposed) {
      mapCount += 1;
      const mapFile = join(MAPS_DIR, module.id.split(':').pop() + '-' + module.basename.replace(/[^A-Za-z0-9._-]/g, '_') + '.json');
      const record: MapRecord = { moduleId: module.id, basename: module.basename, basis: 'esbuild-wrapper + inferred', confidence: 'C', evidence: proposed.evidence, renames: proposed.renames, file: relRoot(filePath) };
      writeFileSync(mapFile, JSON.stringify(record, null, 2) + '\n');
      mapIndex.push({ moduleId: module.id, basename: module.basename, file: relRoot(filePath), map: relRoot(mapFile) });
    }
    records.push({
      moduleId: module.id,
      basename: module.basename,
      file: relRoot(filePath),
      range: [segment.charStart, segment.charEnd],
      sha256: segment.sha256,
      parseable: Boolean(ast),
      truncated: !ast,
      renamed,
      segmentExact: !renamed && body.replace(/\s+$/, '') === segmentText.replace(/\s+$/, ''),
      wrapperInitSymbol: info.init,
      wrapperKey: info.key,
      deps: info.deps,
      topLevelDeclarations: declarations,
      stringAnchors: anchors,
      displayNameAnchors: [...body.matchAll(/([A-Za-z_$][\w$]*)\.displayName\s*=\s*["']([^"']+)["']/g)].map((match) => ({ identifier: match[1], displayName: match[2] })),
      group,
      path: null,
      pathBasis: 'inferred',
      confidence: 'C',
      notes: 'esbuild wrapper boundary is exact; no nls/webpack-key evidence for a source path, so path is null and directory stays flat; fragment may cut declarations at segment edges',
    });
    if (args.headers) {
      const header = [
        '// @recovered-by cursor-re',
        '// artifact: ' + bundle.bundle + ' sha256:' + bundle.sha256,
        '// module: ' + module.basename + ' range:' + String(segment.charStart) + '..' + String(segment.charEnd),
        '// basis: esbuild-wrapper + inferred',
        '// confidence: C',
        '// method: split' + (renamed ? '+rename' : ''),
        '// run: glass-platform ' + new Date().toISOString(),
        '// wrapper: ' + (info.init ?? '(none visible)') + ' deps:' + String(info.deps.length) + (info.deps.length ? ' [' + info.deps.slice(0, 12).join(', ') + ']' : ''),
        '// declarations: ' + (declarations.length ? declarations.slice(0, 16).join(', ') : '(none in segment)') + (!ast ? ' (segment truncated)' : ''),
        '// anchors: ' + (anchors.kebab.slice(0, 4).join(', ') || '(none)'),
        '// group: ' + group,
        '// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only',
        '',
      ].join('\n');
      writeFileSync(filePath, header + body.replace(/\s+$/, '') + '\n');
    }
  }
  const mapping = {
    generatedAt: new Date().toISOString(),
    cluster: cluster.name,
    bundle: cluster.bundle,
    bundleSha256: bundle.sha256,
    counts: { modules: cluster.modules.length, parseable, truncated, segmentExact: exact, renames: Math.max(mapCount, applied.length), groups: Object.keys(groups).length },
    records,
  };
  ensureDir(MAPPINGS_DIR);
  writeFileSync(MAPPING_FILE, JSON.stringify(mapping, null, 2) + '\n');
  if (args.maps) {
    writeFileSync(join(MAPS_DIR, 'index.json'), JSON.stringify({ generatedAt: new Date().toISOString(), maps: mapIndex }, null, 2) + '\n');
  }
  const groupFile = join(OUT_DIR, '_groups.json');
  writeFileSync(groupFile, JSON.stringify({ generatedAt: new Date().toISOString(), groups }, null, 2) + '\n');
  const manifest = {
    generatedAt: new Date().toISOString(),
    cluster: cluster.name,
    outDir: 'recovered/app/glass/platform',
    modules: cluster.modules.map((module) => {
      const segment = bundle.segments.find((item) => item.id === module.id)!;
      return { moduleId: module.id, basename: module.basename, file: 'recovered/app/glass/platform/' + module.basename, range: [segment.charStart, segment.charEnd], sha256: segment.sha256, renamed: applied.includes(module.basename), group: groupOf(module.basename, readFileSync(join(OUT_DIR, module.basename), 'utf8')) };
    }),
  };
  writeFileSync(join(OUT_DIR, '_manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
  const indexLines = ['# Glass platform (p2) index', '', 'Cluster: p2-platform — ' + String(cluster.modules.length) + ' modules, all emitted flat because no nls/webpack-key evidence yields a source path.', '', '| group | count |', '|---|---|'];
  for (const key of Object.keys(groups).sort()) indexLines.push('| ' + key + ' | ' + String(groups[key].length) + ' |');
  indexLines.push('', 'Renames (' + String(Math.max(mapCount, applied.length)) + ') are recorded in scripts/recover/glass/p2-platform/maps/ and applied only through scripts/recover/rename/apply-map.ts with AST equivalence checks.', '');
  indexLines.push('| module | moduleId | group | parseable | renamed |', '|---|---|---|---|---|');
  for (const module of cluster.modules) {
    const parse = records.find((item) => (item as { basename: string }).basename === module.basename) as { parseable: boolean } | undefined;
    indexLines.push('| ' + module.basename + ' | ' + module.id.split(':').pop() + ' | ' + groupOf(module.basename, readFileSync(join(OUT_DIR, module.basename), 'utf8')) + ' | ' + (parse?.parseable ? 'yes' : 'no (truncated)') + ' | ' + (applied.includes(module.basename) ? 'yes' : '') + ' |');
  }
  indexLines.push('');
  writeFileSync(join(OUT_DIR, 'INDEX.md'), indexLines.join('\n'));
  console.log(JSON.stringify({ modules: cluster.modules.length, parseable, truncated, segmentExact: exact, renames: mapCount, groups: Object.keys(groups).length }) + ' applied=' + String(applied.length));
}
main();
