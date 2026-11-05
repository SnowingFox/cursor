import { createHash } from 'node:crypto';
import { parse } from '@babel/parser';
import traverse from '@babel/traverse';
import generate from '@babel/generator';

type Node = Record<string, unknown> & { type?: string };

const SKIP_KEYS = new Set([
  'start',
  'end',
  'loc',
  'range',
  'extra',
  'leadingComments',
  'trailingComments',
  'innerComments',
  'comments',
  'tokens',
  'errors',
]);

export function parseCode(code: string): Node {
  try {
    return parse(code, {
      sourceType: 'module',
      plugins: ['typescript', 'jsx', 'decorators-legacy'] as never,
      errorRecovery: false,
    }) as unknown as Node;
  } catch (error) {
    return parse(code, { sourceType: 'script', errorRecovery: false }) as unknown as Node;
  }
}

function normalize(node: unknown, renames: Record<string, string>, inKey: boolean): unknown {
  if (Array.isArray(node)) {
    return node.map((item) => normalize(item, renames, false));
  }
  if (!node || typeof node !== 'object') {
    return node;
  }
  const record = node as Node;
  if (record.type === 'Identifier') {
    const name = String(record.name);
    if (!inKey && Object.prototype.hasOwnProperty.call(renames, name)) {
      return { type: 'Identifier', name: renames[name] };
    }
    return { type: 'Identifier', name };
  }
  if (record.type === 'JSXIdentifier') {
    const name = String(record.name);
    if (Object.prototype.hasOwnProperty.call(renames, name)) {
      return { type: 'JSXIdentifier', name: renames[name] };
    }
    return { type: 'JSXIdentifier', name };
  }
  const out: Record<string, unknown> = {};
  const isMember = record.type === 'MemberExpression';
  const isProperty = record.type === 'ObjectProperty' || record.type === 'ClassProperty' || record.type === 'ClassMethod' || record.type === 'ObjectMethod';
  for (const key of Object.keys(record)) {
    if (SKIP_KEYS.has(key)) {
      continue;
    }
    const value = record[key];
    if (key === 'key' && (isMember || isProperty) && !record.computed) {
      out[key] = normalize(value, renames, true);
      continue;
    }
    if (key === 'property' && isMember && !record.computed) {
      out[key] = normalize(value, renames, true);
      continue;
    }
    out[key] = normalize(value, renames, false);
  }
  return out;
}

export function structuralHash(code: string, renames: Record<string, string> = {}): string {
  const ast = parseCode(code);
  const normalized = normalize(ast, renames, false);
  return createHash('sha256').update(JSON.stringify(normalized)).digest('hex');
}

export function equivalent(before: string, after: string, renames: Record<string, string>): boolean {
  return structuralHash(before, renames) === structuralHash(after, {});
}

export function applyRenames(code: string, renames: Record<string, string>): string {
  const ast = parseCode(code) as never;
  const used = new Set<string>();
  traverse(ast, {
    Scope(path) {
      const scope = (path as unknown as { scope?: { bindings?: Record<string, unknown>; rename(oldName: string, newName: string): void } }).scope;
      if (!scope || !scope.bindings) {
        return;
      }
      for (const oldName of Object.keys(scope.bindings)) {
        const newName = renames[oldName];
        if (!newName || used.has(oldName + ':' + String(path.node?.type))) {
          continue;
        }
        try {
          scope.rename(oldName, newName);
          used.add(oldName + ':' + String(path.node?.type));
        } catch (error) {
          throw new Error('rename failed for ' + oldName + ' -> ' + newName + ': ' + String(error));
        }
      }
    },
  });
  const output = generate(ast as never, { retainLines: false, comments: true });
  return output.code;
}

const HEADER_PREFIXES = ['// @recovered-by ', '// artifact: ', '// module: ', '// basis: ', '// confidence: ', '// method: ', '// run: '];

export function stripHeader(code: string): { header: string; body: string } {
  const lines = code.split('\n');
  let index = 0;
  while (index < lines.length && HEADER_PREFIXES.some((prefix) => lines[index].startsWith(prefix))) {
    index += 1;
  }
  while (index < lines.length && lines[index].trim() === '') {
    index += 1;
  }
  return { header: lines.slice(0, index).join('\n'), body: lines.slice(index).join('\n') };
}
