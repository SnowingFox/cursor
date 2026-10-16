#!/usr/bin/env node
// Extracts the Cursor application sources from an official macOS DMG (or an
// already-installed Cursor.app) into ./app, then reformats every first-party
// JavaScript bundle with esbuild so it is readable *and* still runnable.
//
//   node scripts/extract.mjs ~/Downloads/Cursor-darwin-arm64.dmg
//   node scripts/extract.mjs /Applications/Cursor.app --no-beautify
//
// Outputs:
//   app/                     the runnable application tree (Contents/Resources/app)
//   upstream/upstream.json   version / commit / electron metadata of the source build
//   upstream/manifest.json   sha256 of every original file (before reformatting)
//   upstream/darwin/         original Info.plist and .icns resources used by `bun run package`

import { existsSync } from 'node:fs';
import { cp, mkdir, mkdtemp, readFile, readdir, rm, stat, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { transform } from 'esbuild';
import { APP_DIR, UPSTREAM_DIR, capture, log, parseArgs, pool, run, sha256File, walk } from './lib/util.mjs';

const JS_EXT = /\.(c|m)?js$/;

async function withMountedDmg(dmg, fn) {
  const mnt = await mkdtemp(path.join(os.tmpdir(), 'cursor-dmg-'));
  run('hdiutil', ['attach', '-readonly', '-nobrowse', '-noverify', '-mountpoint', mnt, dmg], { stdio: 'ignore' });
  try {
    const appName = (await readdir(mnt)).find((n) => n.endsWith('.app'));
    if (!appName) {
      throw new Error(`No .app bundle found in ${dmg}`);
    }
    return await fn(path.join(mnt, appName));
  } finally {
    run('hdiutil', ['detach', mnt, '-force'], { stdio: 'ignore' });
    await rm(mnt, { recursive: true, force: true });
  }
}

function electronVersionOf(bundle) {
  const plist = path.join(bundle, 'Contents/Frameworks/Electron Framework.framework/Resources/Info.plist');
  return capture('plutil', ['-extract', 'CFBundleVersion', 'raw', '-o', '-', plist]).trim();
}

async function copyBundle(bundle, sourceLabel) {
  const src = path.join(bundle, 'Contents/Resources/app');
  log(`copying ${src} -> app/`);
  await rm(APP_DIR, { recursive: true, force: true });
  // ditto preserves symlinks, permissions and extended attributes.
  run('ditto', [src, APP_DIR]);

  const darwin = path.join(UPSTREAM_DIR, 'darwin');
  await rm(darwin, { recursive: true, force: true });
  await mkdir(darwin, { recursive: true });
  await cp(path.join(bundle, 'Contents/Info.plist'), path.join(darwin, 'Info.plist'));
  for (const name of await readdir(path.join(bundle, 'Contents/Resources'))) {
    if (name.endsWith('.icns')) {
      await cp(path.join(bundle, 'Contents/Resources', name), path.join(darwin, name));
    }
  }

  const pkg = JSON.parse(await readFile(path.join(APP_DIR, 'package.json'), 'utf8'));
  const product = JSON.parse(await readFile(path.join(APP_DIR, 'product.json'), 'utf8'));
  return {
    source: sourceLabel,
    name: product.nameLong,
    version: pkg.version,
    commit: product.commit,
    date: product.date,
    vscodeVersion: product.vscodeVersion,
    electronVersion: electronVersionOf(bundle),
  };
}

async function writeManifest() {
  const files = [];
  for await (const f of walk(APP_DIR)) {
    files.push(f);
  }
  files.sort();
  const manifest = {};
  await pool(files, 32, async (f) => {
    manifest[f] = await sha256File(path.join(APP_DIR, f));
  });
  const sorted = Object.fromEntries(files.map((f) => [f, manifest[f]]));
  await writeFile(path.join(UPSTREAM_DIR, 'manifest.json'), JSON.stringify(sorted, null, 1) + '\n');
  return files;
}

/**
 * Reformat first-party bundles. Third-party `node_modules` trees are left
 * untouched so they stay byte-identical with their published packages.
 */
async function beautify(files) {
  const targets = files.filter((f) => JS_EXT.test(f) && !f.split('/').includes('node_modules'));
  log(`reformatting ${targets.length} JavaScript files with esbuild`);
  const failures = [];
  let done = 0;
  await pool(targets, Math.max(2, os.cpus().length - 1), async (f) => {
    const file = path.join(APP_DIR, f);
    const code = await readFile(file, 'utf8');
    try {
      const out = await transform(code, {
        loader: 'js',
        charset: 'utf8',
        legalComments: 'inline',
        logLevel: 'silent',
      });
      const s = await stat(file);
      await writeFile(file, out.code, { mode: s.mode });
    } catch (err) {
      failures.push({ file: f, error: String(err.errors?.[0]?.text ?? err.message) });
    }
    if (++done % 500 === 0) {
      log(`  ${done}/${targets.length}`);
    }
  });
  if (failures.length) {
    log(`left ${failures.length} files unformatted (not parseable as plain JS):`);
    for (const { file, error } of failures) {
      log(`  ${file}: ${error}`);
    }
  }
  return { formatted: targets.length - failures.length, unformatted: failures.map((f) => f.file) };
}

/**
 * The shipped product.json carries checksums for core files; VS Code warns that
 * the installation is "corrupt" when they no longer match. The tree is meant to
 * be edited, so drop them.
 */
async function patchProduct() {
  const file = path.join(APP_DIR, 'product.json');
  const product = JSON.parse(await readFile(file, 'utf8'));
  delete product.checksums;
  await writeFile(file, JSON.stringify(product, null, '\t') + '\n');
}

async function main() {
  const { positional, flags } = parseArgs(process.argv.slice(2));
  const input = positional[0];
  if (!input || !existsSync(input)) {
    console.error('usage: node scripts/extract.mjs <Cursor.dmg | Cursor.app> [--no-beautify]');
    process.exit(1);
  }
  await mkdir(UPSTREAM_DIR, { recursive: true });

  const resolved = path.resolve(input);
  const meta = resolved.endsWith('.dmg')
    ? await withMountedDmg(resolved, (bundle) => copyBundle(bundle, path.basename(resolved)))
    : await copyBundle(resolved, path.basename(resolved));
  if (resolved.endsWith('.dmg')) {
    meta.dmgSha256 = await sha256File(resolved);
  }

  log('hashing original files');
  const files = await writeManifest();
  meta.fileCount = files.length;

  if (!flags['no-beautify']) {
    meta.beautify = await beautify(files);
  }
  await patchProduct();

  await writeFile(path.join(UPSTREAM_DIR, 'upstream.json'), JSON.stringify(meta, null, 2) + '\n');
  log(`done: ${meta.name} ${meta.version} (commit ${meta.commit}, Electron ${meta.electronVersion})`);
  log('next: bun run build && bun run start');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
