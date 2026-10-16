#!/usr/bin/env node
// Assembles dist/Cursor.app from the stock Electron runtime (same version that
// upstream ships, installed from npm) plus the ./app tree.
//
//   node scripts/package-app.mjs          # dev build: Resources/app is a symlink to ./app
//   node scripts/package-app.mjs --copy   # standalone build: ./app is copied into the bundle
//
// Upstream Cursor has the OnlyLoadAppFromAsar / asar-integrity fuses disabled,
// so the stock Electron binary loads Resources/app as a plain directory exactly
// like the official build does.

import { spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { cp, readFile, readdir, rm, symlink, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { APP_DIR, DIST_DIR, ROOT, UPSTREAM_DIR, capture, log, parseArgs, run } from './lib/util.mjs';

export const BUNDLE = path.join(DIST_DIR, 'Cursor.app');
export const EXECUTABLE = path.join(BUNDLE, 'Contents/MacOS/Electron');
const ELECTRON_APP = path.join(ROOT, 'node_modules/electron/dist/Electron.app');
const BUNDLE_ID = process.env.CURSOR_RE_BUNDLE_ID || 'dev.snowingfox.cursor-re';

async function readJson(file) {
  return JSON.parse(await readFile(file, 'utf8'));
}

async function checkElectronVersion() {
  const upstream = await readJson(path.join(UPSTREAM_DIR, 'upstream.json'));
  const installed = (await readJson(path.join(ROOT, 'node_modules/electron/package.json'))).version;
  if (installed !== upstream.electronVersion) {
    throw new Error(
      `node_modules/electron is ${installed} but upstream Cursor ${upstream.version} ships Electron ` +
        `${upstream.electronVersion}. Native modules in app/ are built for that ABI; run ` +
        `\`npm install electron@${upstream.electronVersion}\`.`,
    );
  }
  return upstream;
}

/**
 * Start from upstream's Info.plist (document types, URL scheme, usage strings)
 * but point it at the stock Electron executable and a separate bundle id so the
 * build never collides with an installed Cursor.
 */
async function writeInfoPlist() {
  const plist = path.join(BUNDLE, 'Contents/Info.plist');
  const electronPlist = JSON.parse(capture('plutil', ['-convert', 'json', '-o', '-', plist]));
  await cp(path.join(UPSTREAM_DIR, 'darwin/Info.plist'), plist);
  const set = (key, type, value) => run('plutil', ['-replace', key, `-${type}`, value, plist]);
  set('CFBundleExecutable', 'string', electronPlist.CFBundleExecutable);
  set('CFBundleIdentifier', 'string', BUNDLE_ID);
  for (const key of ['ElectronAsarIntegrity', 'ElectronTeamID', 'SUFeedURL']) {
    // Keys may be absent; plutil exits non-zero in that case, which is fine.
    spawnSync('plutil', ['-remove', key, plist], { stdio: 'ignore' });
  }
}

async function main() {
  const { flags } = parseArgs(process.argv.slice(2));
  if (os.platform() !== 'darwin') {
    throw new Error('Only macOS bundles are supported for now.');
  }
  if (!existsSync(path.join(APP_DIR, 'package.json'))) {
    throw new Error('app/ is missing. Run `npm run extract -- <Cursor.dmg>` first.');
  }
  if (!existsSync(path.join(ROOT, 'node_modules/electron'))) {
    throw new Error('Electron package not found. Run `npm install` first.');
  }
  if (!existsSync(ELECTRON_APP)) {
    // The electron package downloads its binary lazily (no postinstall), so fetch it now.
    log('downloading Electron runtime');
    run(process.execPath, [path.join(ROOT, 'node_modules/electron/install.js')]);
  }
  const upstream = await checkElectronVersion();

  log(`assembling ${path.relative(ROOT, BUNDLE)} (Cursor ${upstream.version}, Electron ${upstream.electronVersion})`);
  await rm(BUNDLE, { recursive: true, force: true });
  run('ditto', [ELECTRON_APP, BUNDLE]);

  const resources = path.join(BUNDLE, 'Contents/Resources');
  await rm(path.join(resources, 'default_app.asar'), { force: true });
  await rm(path.join(resources, 'electron.icns'), { force: true });
  for (const name of await readdir(path.join(UPSTREAM_DIR, 'darwin'))) {
    if (name.endsWith('.icns')) {
      await cp(path.join(UPSTREAM_DIR, 'darwin', name), path.join(resources, name));
    }
  }

  const appTarget = path.join(resources, 'app');
  if (flags.copy) {
    run('ditto', [APP_DIR, appTarget]);
  } else {
    await symlink(APP_DIR, appTarget);
  }

  await writeInfoPlist();
  // Editing Info.plist invalidates Electron's ad-hoc signature; re-sign the outer
  // bundle ad-hoc so macOS keeps launching it (nested helpers keep their own signatures).
  run('codesign', ['--force', '--sign', '-', BUNDLE], { stdio: 'ignore' });

  await writeFile(
    path.join(DIST_DIR, 'build.json'),
    JSON.stringify({ mode: flags.copy ? 'copy' : 'link', bundleId: BUNDLE_ID, ...upstream }, null, 2) + '\n',
  );
  log(`done: ${path.relative(ROOT, BUNDLE)} (${flags.copy ? 'standalone copy' : 'linked to ./app'})`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((err) => {
    console.error(err.message ?? err);
    process.exit(1);
  });
}
