import { readFileSync, writeFileSync } from 'node:fs';
import { applyRenames, equivalent, stripHeader } from '../lib/ast';

function main(): void {
  const argv = process.argv.slice(2);
  let input: string | null = null;
  let output: string | null = null;
  let mapFile: string | null = null;
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === '--in') {
      input = argv[index + 1] ?? null;
      index += 1;
    } else if (arg === '--out') {
      output = argv[index + 1] ?? null;
      index += 1;
    } else if (arg === '--map') {
      mapFile = argv[index + 1] ?? null;
      index += 1;
    }
  }
  if (!input || !output || !mapFile) {
    console.error('usage: bun scripts/recover/rename/apply-map.ts --in file --out file --map map.json');
    process.exit(1);
  }
  const source = readFileSync(input, 'utf8');
  const { header, body } = stripHeader(source);
  const parsed = JSON.parse(readFileSync(mapFile, 'utf8')) as { renames?: Record<string, string> } | Record<string, string>;
  const renames = ('renames' in parsed && parsed.renames ? parsed.renames : parsed) as Record<string, string>;
  const renamed = applyRenames(body, renames);
  if (!equivalent(body, renamed, renames)) {
    console.error('[recover] AST equivalence check failed; refusing to write ' + output);
    process.exit(1);
  }
  writeFileSync(output, (header ? header + '\n\n' : '') + renamed + '\n');
  console.log('[recover] renamed ' + String(Object.keys(renames).length) + ' identifiers; AST equivalent: true');
}

main();
