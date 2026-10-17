#!/usr/bin/env node
// Installs CLIProxyAPI, the sidecar behind Settings > Models > Subscriptions,
// to app/resources/cliproxyapi/cli-proxy-api (not committed; ~65 MB).
//
//   bun run cliproxyapi                     # pinned release for darwin-arm64, sha256-checked
//   bun run cliproxyapi -- --source <dir>   # build a CLIProxyAPI checkout with Go instead
//
// At runtime the extension host also accepts CURSOR_CLIPROXYAPI_BIN or a
// cli-proxy-api / cliproxyapi on PATH (e.g. `brew install cliproxyapi`).

import { createHash } from 'node:crypto';
import { existsSync } from 'node:fs';
import { chmod, copyFile, mkdir, mkdtemp, rename, rm, stat, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { APP_DIR, log, parseArgs, run } from './lib/util.mjs';

const VERSION = '8.0.32';
const ASSET = `CLIProxyAPI_${VERSION}_darwin_aarch64.tar.gz`;
const SHA256 = '48fe6a391a01e730ee6ebe3f1609ff92578a97a7a9a44579013ca8f3a6d58d51';
const DOWNLOAD_URL = `https://github.com/router-for-me/CLIProxyAPI/releases/download/v${VERSION}/${ASSET}`;

const OUT_DIR = path.join(APP_DIR, 'resources/cliproxyapi');
const OUT = path.join(OUT_DIR, 'cli-proxy-api');

async function download(tmp) {
  log(`downloading ${DOWNLOAD_URL}`);
  const res = await fetch(DOWNLOAD_URL);
  if (!res.ok) {
    throw new Error(`GET ${DOWNLOAD_URL} returned HTTP ${res.status}`);
  }
  const data = Buffer.from(await res.arrayBuffer());
  const digest = createHash('sha256').update(data).digest('hex');
  if (digest !== SHA256) {
    throw new Error(`${ASSET}: sha256 ${digest}, expected ${SHA256}`);
  }
  const archive = path.join(tmp, ASSET);
  await writeFile(archive, data);
  run('tar', ['-xzf', archive, '-C', tmp, 'cli-proxy-api', 'LICENSE']);
  return { binary: path.join(tmp, 'cli-proxy-api'), license: path.join(tmp, 'LICENSE') };
}

function build(source, tmp) {
  const dir = path.resolve(source);
  if (!existsSync(path.join(dir, 'cmd/server'))) {
    throw new Error(`${dir} is not a CLIProxyAPI checkout (no cmd/server)`);
  }
  const binary = path.join(tmp, 'cli-proxy-api');
  log(`go build ${dir}/cmd/server`);
  run('go', ['-C', dir, 'build', '-buildvcs=false', '-trimpath', '-ldflags', '-s -w', '-o', binary, './cmd/server']);
  const license = path.join(dir, 'LICENSE');
  return { binary, license: existsSync(license) ? license : undefined };
}

async function main() {
  const { positional, flags } = parseArgs(process.argv.slice(2));
  const source = flags.source === true ? positional[0] : flags.source;
  if (flags.source === true && source === undefined) {
    throw new Error('--source needs the path of a CLIProxyAPI checkout');
  }
  const tmp = await mkdtemp(path.join(os.tmpdir(), 'cliproxyapi-'));
  try {
    const { binary, license } = source === undefined ? await download(tmp) : build(source, tmp);
    await mkdir(OUT_DIR, { recursive: true });
    // Copies: the temp dir may be on another volume, and LICENSE may be the checkout's own.
    await copyFile(binary, `${OUT}.new`);
    await chmod(`${OUT}.new`, 0o755);
    await rename(`${OUT}.new`, OUT);
    if (license !== undefined) {
      await copyFile(license, path.join(OUT_DIR, 'LICENSE'));
    }
    const mb = ((await stat(OUT)).size / 1e6).toFixed(1);
    log(`installed ${path.relative(process.cwd(), OUT)} (${source === undefined ? `v${VERSION}` : 'built from source'}, ${mb} MB)`);
  } finally {
    await rm(tmp, { recursive: true, force: true });
  }
}

main().catch((err) => {
  console.error(err.message ?? err);
  process.exit(1);
});
