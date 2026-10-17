#!/usr/bin/env node
// Assembles "dist/Cursor RE.app" from the stock Electron runtime (same version
// that upstream ships, installed from npm) plus the ./app tree.
//
//   bun run package              # dev build: Resources/app is a symlink to ./app
//   bun run package:standalone   # standalone build: ./app is copied into the bundle
//
// The bundle, its executable and Electron's helper apps are renamed to the
// product name ("Cursor RE", or CURSOR_RE_PRODUCT_NAME) so the build is easy to
// tell apart from an installed Cursor in the Dock, menu bar and Activity
// Monitor. product.json is left alone: the app keeps Cursor's data folder
// (~/.cursor) and cursor:// URL scheme.
//
// Upstream Cursor has the OnlyLoadAppFromAsar / asar-integrity fuses disabled,
// so the stock Electron binary loads Resources/app as a plain directory exactly
// like the official build does.

import { spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { cp, readFile, readdir, rename, rm, symlink, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { APP_DIR, DIST_DIR, ROOT, UPSTREAM_DIR, log, parseArgs, run } from './lib/util.mjs';

export const PRODUCT_NAME = process.env.CURSOR_RE_PRODUCT_NAME || 'Cursor RE';
export const BUNDLE = path.join(DIST_DIR, `${PRODUCT_NAME}.app`);
export const EXECUTABLE = path.join(BUNDLE, 'Contents/MacOS', PRODUCT_NAME);
const ELECTRON_APP = path.join(ROOT, 'node_modules/electron/dist/Electron.app');
const BUNDLE_ID = process.env.CURSOR_RE_BUNDLE_ID || 'dev.snowingfox.cursor-re';
/** Bundles produced before the rename. */
const LEGACY_BUNDLES = [path.join(DIST_DIR, 'Cursor.app')];

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
        `\`bun add -d electron@${upstream.electronVersion}\`.`,
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
  await cp(path.join(UPSTREAM_DIR, 'darwin/Info.plist'), plist);
  const set = (key, type, value) => run('plutil', ['-replace', key, `-${type}`, value, plist]);
  set('CFBundleExecutable', 'string', PRODUCT_NAME);
  set('CFBundleName', 'string', PRODUCT_NAME);
  set('CFBundleDisplayName', 'string', PRODUCT_NAME);
  set('CFBundleIdentifier', 'string', BUNDLE_ID);
  for (const key of ['ElectronAsarIntegrity', 'ElectronTeamID', 'SUFeedURL']) {
    // Keys may be absent; plutil exits non-zero in that case, which is fine.
    spawnSync('plutil', ['-remove', key, plist], { stdio: 'ignore' });
  }
}

/**
 * Renames the main executable and Electron's helper apps. Electron looks for
 * helpers named "<CFBundleName> Helper (<kind>).app" once the stock
 * "Electron Helper" ones are gone, so the names must match PRODUCT_NAME.
 */
async function renameExecutables() {
  await rename(path.join(BUNDLE, 'Contents/MacOS/Electron'), EXECUTABLE);
  const frameworks = path.join(BUNDLE, 'Contents/Frameworks');
  const helpers = [];
  for (const name of await readdir(frameworks)) {
    const m = /^Electron Helper(.*)\.app$/.exec(name);
    if (!m) {
      continue;
    }
    const helperName = `${PRODUCT_NAME} Helper${m[1]}`;
    const helper = path.join(frameworks, `${helperName}.app`);
    await rename(path.join(frameworks, name), helper);
    await rename(path.join(helper, 'Contents/MacOS', `Electron Helper${m[1]}`), path.join(helper, 'Contents/MacOS', helperName));
    const plist = path.join(helper, 'Contents/Info.plist');
    const kind = m[1].replace(/[^A-Za-z]/g, '');
    for (const [key, value] of [
      ['CFBundleExecutable', helperName],
      ['CFBundleName', helperName],
      ['CFBundleDisplayName', helperName],
      ['CFBundleIdentifier', `${BUNDLE_ID}.helper${kind ? `.${kind}` : ''}`],
    ]) {
      run('plutil', ['-replace', key, '-string', value, plist]);
    }
    helpers.push(helper);
  }
  return helpers;
}

async function main() {
  const { flags } = parseArgs(process.argv.slice(2));
  if (os.platform() !== 'darwin') {
    throw new Error('Only macOS bundles are supported for now.');
  }
  if (!existsSync(path.join(APP_DIR, 'package.json'))) {
    throw new Error('app/ is missing. Run `bun run extract -- <Cursor.dmg>` first.');
  }
  if (!existsSync(path.join(ROOT, 'node_modules/electron'))) {
    throw new Error('Electron package not found. Run `bun install` first.');
  }
  if (!existsSync(ELECTRON_APP)) {
    // The electron package downloads its binary lazily (no postinstall), so fetch it now.
    log('downloading Electron runtime');
    run(process.execPath, [path.join(ROOT, 'node_modules/electron/install.js')]);
  }
  const upstream = await checkElectronVersion();

  log(`assembling ${path.relative(ROOT, BUNDLE)} (Cursor ${upstream.version}, Electron ${upstream.electronVersion})`);
  for (const bundle of [BUNDLE, ...LEGACY_BUNDLES]) {
    await rm(bundle, { recursive: true, force: true });
  }
  run('ditto', [ELECTRON_APP, BUNDLE]);
  const helpers = await renameExecutables();

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
  // Renaming and editing Info.plists invalidates Electron's ad-hoc signatures;
  // re-sign ad-hoc, helpers first, so macOS keeps launching the bundle.
  for (const helper of helpers) {
    run('codesign', ['--force', '--sign', '-', helper], { stdio: 'ignore' });
  }
  run('codesign', ['--force', '--sign', '-', BUNDLE], { stdio: 'ignore' });

  await writeFile(
    path.join(DIST_DIR, 'build.json'),
    JSON.stringify({ mode: flags.copy ? 'copy' : 'link', productName: PRODUCT_NAME, bundleId: BUNDLE_ID, ...upstream }, null, 2) + '\n',
  );
  log(`done: ${path.relative(ROOT, BUNDLE)} (${flags.copy ? 'standalone copy' : 'linked to ./app'})`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((err) => {
    console.error(err.message ?? err);
    process.exit(1);
  });
}
