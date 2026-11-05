import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { parse } from '@babel/parser';

const DIR = 'recovered/app/glass/composer';
const HEADER_PREFIXES = ['// @recovered-by ', '// artifact: ', '// module: ', '// basis: ', '// confidence: ', '// method: ', '// run: '];

function stripHeader(text: string): { header: string[]; body: string } {
  const lines = text.split('\n');
  let i = 0;
  while (i < lines.length && HEADER_PREFIXES.some((p) => lines[i].startsWith(p))) i++;
  const header = lines.slice(0, i);
  while (i < lines.length && lines[i].trim() === '') i++;
  return { header, body: lines.slice(i).join('\n') };
}

function tryParse(code: string) {
  for (const opts of [
    { sourceType: 'module', plugins: ['typescript', 'jsx'] },
    { sourceType: 'script', plugins: [] },
  ] as const) {
    try {
      return { ast: parse(code, opts as never) as any, mode: opts.sourceType };
    } catch {}
  }
  return null;
}

function decls(ast: any) {
  const out: any[] = [];
  for (const node of ast.program.body) {
    if (node.type === 'FunctionDeclaration') out.push({ kind: 'function', name: node.id?.name, params: node.params.length, lines: node.loc.end.line - node.loc.start.line + 1, async: node.async, generator: node.generator });
    else if (node.type === 'VariableDeclaration') {
      for (const d of node.declarations) {
        const init = d.init;
        let initKind = init?.type ?? null;
        let extra: any = {};
        if (init?.type === 'ObjectExpression') extra.props = init.properties.length;
        if (init?.type === 'ArrowFunctionExpression' || init?.type === 'FunctionExpression') extra.params = init.params.length;
        out.push({ kind: node.kind, name: d.id?.type === 'Identifier' ? d.id.name : null, initKind, ...extra, lines: (d.loc?.end.line ?? node.loc.end.line) - (d.loc?.start.line ?? node.loc.start.line) + 1 });
      }
    } else if (node.type === 'ClassDeclaration') out.push({ kind: 'class', name: node.id?.name, lines: node.loc.end.line - node.loc.start.line + 1 });
  }
  return out;
}

const rows: any[] = [];
for (const file of readdirSync(DIR).filter((f) => f.endsWith('.js')).sort()) {
  const text = readFileSync(join(DIR, file), 'utf8');
  const { header, body } = stripHeader(text);
  const parsed = tryParse(body);
  const wrapper = /^([A-Za-z_$][\w$]*) = ([A-Za-z_$][\w$]*)\(\{ "([^"]+)"\(\) \{/.exec(body);
  const firstLine = body.split('\n').slice(0, 3).join(' ');
  const deps = [...body.matchAll(/([A-Za-z_$][\w$]*)\(\)/g)].slice(0, 80).map((m) => m[1]);
  const strings = [...body.matchAll(/"([^"\\]{3,80})"/g)].map((m) => m[1]).filter((s) => !s.includes('ui-') && !s.includes('$') && !s.startsWith('.')).slice(0, 8);
  rows.push({
    file,
    headerModule: header.find((l) => l.startsWith('// module: '))?.slice(11),
    wrapperInit: wrapper?.[1] ?? null,
    wrapperFn: wrapper?.[2] ?? null,
    wrapperOK: Boolean(wrapper),
    parse: parsed?.mode ?? null,
    decls: parsed ? decls(parsed.ast) : [],
    bodyLines: body.split('\n').length,
    deps: deps.length,
    depsSample: deps.slice(0, 12),
    strings,
    tail: body.trimEnd().split('\n').slice(-1)[0].slice(0, 100),
    firstLine: firstLine.slice(0, 120),
  });
}
writeFileSync('scripts/recover/glass/p0-composer/analysis.json', JSON.stringify(rows, null, 1));
const parseable = rows.filter((r) => r.parse);
console.log('modules', rows.length, 'wrapperOK', rows.filter((r) => r.wrapperOK).length, 'parseable', parseable.length);
console.log('parseable basenames:');
console.log(parseable.map((r) => r.file).join('\n'));
