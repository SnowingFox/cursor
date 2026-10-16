#!/usr/bin/env node
// Splits the large reformatted bundles into one file per original module so
// they are easier to browse/grep. The output in ./.modules is a read-only view
// (gitignored); edit the bundles under app/ — those are what actually runs.
//
//   bun run split                                   # default bundles
//   bun run split -- app/out/vs/workbench/workbench.desktop.main.js
//
// esbuild wraps every lazily-initialized module as
//   var X = __esm({ "moduleBasename.js"() { ... } });
// (the helper name is minified). Module names are basenames only; hoisted
// top-level functions that follow a wrapper are kept with that wrapper.

import { createReadStream } from 'node:fs';
import { mkdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import readline from 'node:readline';
import { ROOT, log, parseArgs } from './lib/util.mjs';

const DEFAULT_BUNDLES = [
  'app/out/main.js',
  'app/out/vs/workbench/workbench.desktop.main.js',
  'app/out/vs/workbench/workbench.glass.main.js',
  'app/out/vs/workbench/api/node/extensionHostProcess.js',
];
const WRAPPER = /^(?:var|let|const) (?:[\w$]+, )*[\w$]+ = [\w$]+\(\{ "([^"]+)"\(\) \{/;

async function split(bundle) {
  const rel = path.relative(path.join(ROOT, 'app'), bundle);
  const outDir = path.join(ROOT, '.modules', rel.replace(/\.js$/, ''));
  await rm(outDir, { recursive: true, force: true });
  await mkdir(outDir, { recursive: true });

  const index = [];
  const used = new Map();
  let current = { name: '_prelude.js', start: 1, lines: [] };

  const flush = async (end) => {
    if (!current.lines.length) {
      return;
    }
    const n = (used.get(current.name) ?? 0) + 1;
    used.set(current.name, n);
    const file = n === 1 ? current.name : current.name.replace(/(\.\w+)?$/, `.${n}$1`);
    const safe = file.replace(/[^\w.@-]/g, '_');
    await writeFile(path.join(outDir, safe), current.lines.join('\n') + '\n');
    index.push({ module: current.name, file: safe, lines: [current.start, end] });
  };

  let lineNo = 0;
  const rl = readline.createInterface({ input: createReadStream(bundle), crlfDelay: Infinity });
  for await (const line of rl) {
    lineNo++;
    const m = WRAPPER.exec(line);
    if (m) {
      await flush(lineNo - 1);
      current = { name: m[1], start: lineNo, lines: [] };
    }
    current.lines.push(line);
  }
  await flush(lineNo);
  await writeFile(path.join(outDir, '_index.json'), JSON.stringify(index, null, 1) + '\n');
  log(`${rel}: ${index.length} modules -> ${path.relative(ROOT, outDir)}`);
}

async function main() {
  const { positional } = parseArgs(process.argv.slice(2));
  const bundles = (positional.length ? positional : DEFAULT_BUNDLES).map((b) => path.resolve(ROOT, b));
  for (const b of bundles) {
    await split(b);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
