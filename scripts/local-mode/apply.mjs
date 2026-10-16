#!/usr/bin/env node
// Applies the "local mode" patches to ./app.
//
//   node scripts/local-mode/apply.mjs           # apply every patch
//   node scripts/local-mode/apply.mjs --check   # verify every anchor, change nothing
//
// Each patched file is rebuilt from its pristine copy in the latest
// "Import Cursor ..." commit (what scripts/extract.mjs produced), so re-running
// after editing patches.mjs or inject/* replaces the previous result instead of
// stacking on top of it. Every patch is an exact string replacement whose anchor
// must match exactly once in the pristine file.

import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { existsSync } from 'node:fs';
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { APP_DIR, ROOT, log } from '../lib/util.mjs';
import { patches } from './patches.mjs';

const check = process.argv.includes('--check');
const byFile = new Map();
for (const p of patches) {
  if (!byFile.has(p.file)) byFile.set(p.file, []);
  byFile.get(p.file).push(p);
}

const git = (...args) => execFileSync('git', args, { cwd: ROOT, encoding: 'utf8', maxBuffer: 1 << 30 });
const importCommit = git('log', '-1', '--format=%H', '--grep=^Import Cursor', '--', 'app').trim();
if (!importCommit) {
  console.error('no "Import Cursor ..." commit found; commit the extracted app/ first');
  process.exit(1);
}
const pristine = (file) => git('show', `${importCommit}:${path.posix.join('app', file)}`);
log(`pristine sources: ${importCommit.slice(0, 10)}`);

let failed = 0;
for (const [file, list] of byFile) {
  const abs = path.join(APP_DIR, file);
  let src = pristine(file);
  for (const p of list) {
    const count = src.split(p.find).length - 1;
    if (count !== 1) {
      log(`! ${p.id}: anchor matched ${count} times in ${file}`);
      failed++;
      continue;
    }
    log(`+ ${p.id}`);
    src = src.replace(p.find, () => p.replace);
  }
  if (!check && src !== (await readFile(abs, 'utf8'))) await writeFile(abs, src);
}
if (failed) {
  console.error(`${failed} patch(es) could not be applied`);
  process.exit(1);
}

// The extension host refuses to load Cursor's own extensions unless every
// .js file matches the sha256 recorded in extensionHostProcess.js. Recompute the
// table from what is on disk (reformatted + patched files) so the check stays
// on but describes the files this repo actually ships.
const EXT_HOST = path.join(APP_DIR, 'out/vs/workbench/api/node/extensionHostProcess.js');
const extHostSrc = pristine('out/vs/workbench/api/node/extensionHostProcess.js');
const table = /^var kde = (\{.*\});$/m.exec(extHostSrc);
if (!table) {
  console.error('extension hash table (var kde) not found in extensionHostProcess.js');
  process.exit(1);
}
const expected = new Function(`return ${table[1]}`)();
let rehashed = 0;
async function rehash(node, dir) {
  for (const [name, value] of Object.entries(node)) {
    const p = path.join(dir, name);
    if (typeof value === 'object') {
      await rehash(value, p);
    } else if (existsSync(p)) {
      const digest = createHash('sha256').update(await readFile(p)).digest('hex');
      if (digest !== value) {
        node[name] = digest;
        rehashed++;
      }
    }
  }
}
for (const [id, files] of Object.entries(expected)) {
  await rehash(files, path.join(APP_DIR, 'extensions', id.slice(id.indexOf('.') + 1)));
}
log(`+ extension hashes: ${rehashed} file(s) differ from upstream`);
if (!check) {
  await writeFile(EXT_HOST, extHostSrc.replace(table[0], () => `var kde = ${JSON.stringify(expected)};`));
}
