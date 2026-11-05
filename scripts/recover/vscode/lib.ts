// @recovered-by cursor-re
// tooling for W1-3 vscode-baseline; not a recovered artifact
import { createHash } from 'node:crypto';
import {
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  statSync,
  writeFileSync,
} from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..', '..');
export const VSCODE_DIR = join(ROOT, '.vendor', 'vscode-1.128.0');
export const VSCODE_SRC = join(VSCODE_DIR, 'src', 'vs');
export const OUT_DIR = join(ROOT, 'recovery', 'vscode');
export const PATCH_DIR = join(OUT_DIR, 'patches');
export const INVENTORY_DIR = join(ROOT, 'recovery', 'inventory');
export const APP_DIR = join(ROOT, 'app');

export const VSCODE_TAG = '1.128.0';
export const VSCODE_COMMIT = 'fc3def6774c76082adf699d366f31a557ce5573f';

export function ensureDir(dir: string): void {
  mkdirSync(dir, { recursive: true });
}

export function readJson<T>(file: string): T {
  return JSON.parse(readFileSync(file, 'utf8')) as T;
}

export function writeJson(file: string, value: unknown): void {
  ensureDir(dirname(file));
  writeFileSync(file, JSON.stringify(value, null, 2) + '\n');
}

export function writeText(file: string, value: string): void {
  ensureDir(dirname(file));
  writeFileSync(file, value);
}

export function sha256(data: Buffer | string): string {
  return createHash('sha256').update(data).digest('hex');
}

export function sha256File(file: string): string {
  return sha256(readFileSync(file));
}

export function listFiles(dir: string): string[] {
  const out: string[] = [];
  const walk = (current: string): void => {
    for (const name of readdirSync(current)) {
      const p = join(current, name);
      const st = statSync(p);
      if (st.isDirectory()) {
        walk(p);
      } else if (st.isFile()) {
        out.push(p);
      }
    }
  };
  walk(dir);
  return out;
}

export function relVendor(file: string): string {
  return relative(VSCODE_DIR, file).split('\\').join('/');
}

export function typeOf(file: string): string {
  const name = file.split('/').pop() ?? '';
  if (name.endsWith('.d.ts')) {
    return 'dts';
  }
  if (name.endsWith('.ts')) {
    return 'ts';
  }
  if (name.endsWith('.tsx')) {
    return 'tsx';
  }
  if (name.endsWith('.js')) {
    return 'js';
  }
  if (name.endsWith('.jsx')) {
    return 'jsx';
  }
  const ext = name.includes('.') ? name.split('.').pop()! : 'other';
  return ext;
}

export function stripExt(name: string): string {
  return name.replace(/\.(d\.)?(ts|tsx|js|jsx|mjs|cjs)$/, '');
}

/** String-literal anchors: user-visible messages are stripped from the Cursor bundles
 *  (localize() calls become numeric indices), so only non-localized literals survive. */
const STR_DOUBLE = /"((?:[^"\\\n]|\\.){4,160})"/g;
const STR_SINGLE = /'((?:[^'\\\n]|\\.){4,160})'/g;
/** Property names are not mangled by the Cursor esbuild config; they survive minification. */
const PROP = /\.([A-Za-z_$][A-Za-z0-9_$]{5,})/g;

const STRING_OK = /^[A-Za-z][A-Za-z0-9_.:/@\- ]{3,}$/;
const STRING_DENY = new Set([
  'use strict',
  'use asm',
  'object',
  'function',
  'undefined',
  'boolean',
  'number',
  'string',
  'symbol',
]);

export interface AnchorSet {
  strings: Set<string>;
  props: Set<string>;
  values: Set<string>;
  total: number;
}

export function anchorsOf(text: string, cap = 1200): AnchorSet {
  const strings = new Set<string>();
  const props = new Set<string>();
  let m: RegExpExecArray | null;
  STR_DOUBLE.lastIndex = 0;
  while ((m = STR_DOUBLE.exec(text)) !== null) {
    const v = m[1];
    if (v.length >= 5 && STRING_OK.test(v) && !STRING_DENY.has(v) && !v.includes('  ')) {
      strings.add(v);
      if (strings.size >= cap) {
        break;
      }
    }
  }
  STR_SINGLE.lastIndex = 0;
  while ((m = STR_SINGLE.exec(text)) !== null) {
    const v = m[1];
    if (v.length >= 5 && STRING_OK.test(v) && !STRING_DENY.has(v) && !v.includes('  ')) {
      strings.add(v);
      if (strings.size >= cap) {
        break;
      }
    }
  }
  PROP.lastIndex = 0;
  while ((m = PROP.exec(text)) !== null) {
    props.add(m[1]);
    if (props.size >= cap) {
      break;
    }
  }
  const values = new Set<string>();
  for (const s of strings) {
    values.add('s:' + s);
  }
  for (const p of props) {
    values.add('p:' + p);
  }
  return { strings, props, values, total: values.size };
}

const IMPORT_RE = /(?:from\s*|import\s*\(\s*|require\s*\(\s*)['"]([^'"]+)['"]/g;
const SIDE_EFFECT_IMPORT_RE = /import\s*['"]([^'"]+)['"]/g;

export interface ImportInfo {
  /** basenames (no extension) of internal src/vs imports that could be resolved */
  internalBases: Set<string>;
  /** raw specifiers that did not resolve inside src/vs */
  unresolved: Set<string>;
  /** package roots for external imports */
  externals: Set<string>;
}

export function resolveUpstreamImport(fromFile: string, spec: string): string | null {
  const tryExts = ['', '.ts', '.tsx', '.js', '/index.ts', '/index.js'];
  let base: string;
  if (spec.startsWith('.')) {
    base = resolve(dirname(fromFile), spec);
  } else if (spec.startsWith('vs/') || spec.startsWith('src/vs/')) {
    const rel = spec.replace(/^src\//, '');
    base = join(VSCODE_DIR, 'src', rel);
  } else {
    return null;
  }
  for (const ext of tryExts) {
    const p = base + ext;
    if (existsSync(p) && statSync(p).isFile()) {
      return p;
    }
  }
  return null;
}

export function packageRoot(spec: string): string {
  const parts = spec.split('/');
  if (spec.startsWith('@') && parts.length >= 2) {
    return parts[0] + '/' + parts[1];
  }
  return parts[0];
}

export function importsOf(file: string, text: string): ImportInfo {
  const internalBases = new Set<string>();
  const unresolved = new Set<string>();
  const externals = new Set<string>();
  const scan = (re: RegExp): void => {
    re.lastIndex = 0;
    let m: RegExpExecArray | null;
    while ((m = re.exec(text)) !== null) {
      const spec = m[1];
      if (spec.startsWith('.') || spec.startsWith('vs/') || spec.startsWith('src/vs/')) {
        const resolved = resolveUpstreamImport(file, spec);
        if (resolved) {
          internalBases.add(stripExt(resolved.split('/').pop() ?? ''));
        } else {
          unresolved.add(spec);
          internalBases.add(stripExt(spec.split('/').pop() ?? ''));
        }
      } else {
        externals.add(packageRoot(spec));
      }
    }
  };
  scan(IMPORT_RE);
  scan(SIDE_EFFECT_IMPORT_RE);
  return { internalBases, unresolved, externals };
}

/** The inventory segment runs to the next wrapper and includes hoisted declarations of the
 *  following module. The real module body is [after "() {" .. first "\n} })"]. */
export function moduleBody(text: string, charStart: number, charEnd: number): { start: number; end: number } {
  const headEnd = Math.min(charEnd, charStart + 160);
  const head = text.slice(charStart, headEnd);
  const open = head.indexOf('() {');
  const start = open >= 0 ? charStart + open + 4 : charStart;
  const closing = '\n} })';
  const idx = text.indexOf(closing, start);
  const end = idx >= 0 && idx < charEnd ? idx : charEnd;
  return { start, end };
}

/** esbuild module wrapper: name = helper({ "basename.js"() { ... } }) */
export const WRAPPER_RE =
  /([A-Za-z_$][A-Za-z0-9_$]*)\s*=\s*[A-Za-z_$][A-Za-z0-9_$]*\(\{\s*"([^"]+\.js)"\s*\(\)/g;

export function walkWrapperSymbols(bundleText: string): Map<string, string> {
  const symbolToBase = new Map<string, string>();
  WRAPPER_RE.lastIndex = 0;
  let m: RegExpExecArray | null;
  while ((m = WRAPPER_RE.exec(bundleText)) !== null) {
    if (!symbolToBase.has(m[1])) {
      symbolToBase.set(m[1], m[2]);
    }
  }
  return symbolToBase;
}

/** calls to other module init symbols at the top of a wrapper body */
export function depsOfSegment(
  text: string,
  symbolToBase: Map<string, string>,
  ownBase: string | null
): Set<string> {
  const window = text.slice(0, 2400);
  const deps = new Set<string>();
  const CALL = /([A-Za-z_$][A-Za-z0-9_$]{0,7})\(\)/g;
  let m: RegExpExecArray | null;
  CALL.lastIndex = 0;
  while ((m = CALL.exec(window)) !== null) {
    const base = symbolToBase.get(m[1]);
    if (base && base !== ownBase) {
      deps.add(stripExt(base));
    }
  }
  return deps;
}

/** numeric localize()/localize2() calls: localize(1234, null) / localize2(1234, "text") */
export const NLS_CALL_RE = /([A-Za-z_$][A-Za-z0-9_$]*)\((\d{1,5}),\s*null/g;
