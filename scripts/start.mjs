#!/usr/bin/env node
// Launches "dist/Cursor RE.app" (building it first if needed).
//
// By default the app runs with an isolated profile under ./.cursor-dev so it
// never touches an installed Cursor's settings, extensions, keychain or login state:
//
//   bun run start                       # isolated profile
//   bun run start -- --real-profile     # use ~/Library/Application Support/Cursor + ~/.cursor/extensions
//   bun run start -- /path/to/folder    # any other args are passed through to Cursor

import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { DIST_DIR, ROOT, log, run } from './lib/util.mjs';
import { EXECUTABLE, PRODUCT_NAME } from './package-app.mjs';

const PROFILE_DIR = process.env.CURSOR_RE_PROFILE || path.join(ROOT, '.cursor-dev');

async function needsBuild() {
  if (!existsSync(EXECUTABLE)) {
    return true;
  }
  const build = JSON.parse(await readFile(path.join(DIST_DIR, 'build.json'), 'utf8'));
  const upstream = JSON.parse(await readFile(path.join(ROOT, 'upstream/upstream.json'), 'utf8'));
  return (
    build.version !== upstream.version ||
    build.electronVersion !== upstream.electronVersion ||
    build.productName !== PRODUCT_NAME
  );
}

async function main() {
  const argv = process.argv.slice(2);
  if (await needsBuild()) {
    run(process.execPath, [path.join(ROOT, 'scripts/package-app.mjs')]);
  }

  const realProfile = argv.includes('--real-profile');
  const args = argv.filter((a) => a !== '--real-profile');
  if (!realProfile) {
    args.unshift(
      `--user-data-dir=${path.join(PROFILE_DIR, 'user-data')}`,
      `--extensions-dir=${path.join(PROFILE_DIR, 'extensions')}`,
      // Keep secrets out of the login keychain; otherwise macOS prompts for the
      // installed Cursor's "Cursor Safe Storage" item.
      '--use-mock-keychain',
    );
  }

  log(`launching ${path.relative(ROOT, EXECUTABLE)} ${args.join(' ')}`);
  const child = spawn(EXECUTABLE, args, { stdio: 'inherit', env: { ...process.env, ELECTRON_RUN_AS_NODE: undefined } });
  child.on('exit', (code, signal) => process.exit(signal ? 1 : (code ?? 0)));
}

main().catch((err) => {
  console.error(err.message ?? err);
  process.exit(1);
});
