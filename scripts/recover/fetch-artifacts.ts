import { spawnSync } from 'node:child_process';
import { existsSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import {
  SDK_ARTIFACT,
  VSCODE_COMMIT,
  VSCODE_TAG,
  sdkReady,
  vscodeReady,
} from './lib/artifacts';
import {
  INVENTORY_DIR,
  VENDOR_DIR,
  ensureDir,
  relRoot,
  sha256File,
  writeJson,
} from './lib/paths';

function run(cmd: string, args: string[], cwd?: string): void {
  const result = spawnSync(cmd, args, { cwd, stdio: 'inherit' });
  if (result.status !== 0) {
    throw new Error(cmd + ' ' + args.join(' ') + ' exited with ' + String(result.status));
  }
}

async function downloadSdk(): Promise<string> {
  ensureDir(VENDOR_DIR);
  const cacheDir = join(VENDOR_DIR, 'cache');
  ensureDir(cacheDir);
  const tarball = join(cacheDir, 'cursor-sdk-1.3.1.tgz');
  if (!existsSync(tarball)) {
    console.log('[recover] downloading ' + SDK_ARTIFACT.url);
    const response = await fetch(SDK_ARTIFACT.url);
    if (!response.ok) {
      throw new Error('download failed: ' + String(response.status));
    }
    writeFileSync(tarball, Buffer.from(await response.arrayBuffer()));
  }
  const digest = sha256File(tarball);
  if (digest !== SDK_ARTIFACT.sha256) {
    throw new Error('SDK tarball sha256 mismatch: ' + digest);
  }
  if (!sdkReady()) {
    console.log('[recover] extracting SDK to ' + relRoot(SDK_ARTIFACT.dir));
    ensureDir(SDK_ARTIFACT.dir);
    run('tar', ['-xzf', tarball, '-C', SDK_ARTIFACT.dir, '--strip-components=1']);
  }
  return digest;
}

function cloneVscode(): void {
  if (vscodeReady()) {
    return;
  }
  console.log('[recover] cloning VS Code ' + VSCODE_TAG + ' (' + VSCODE_COMMIT + ')');
  ensureDir(VENDOR_DIR);
  const dir = join(VENDOR_DIR, 'vscode-1.128.0');
  run('git', [
    'clone',
    '--depth',
    '1',
    '--branch',
    VSCODE_TAG,
    'https://github.com/microsoft/vscode.git',
    dir,
  ]);
}

async function main(): Promise<void> {
  ensureDir(INVENTORY_DIR);
  const sdkDigest = await downloadSdk();
  cloneVscode();
  writeJson(join(INVENTORY_DIR, 'artifacts.json'), {
    generatedAt: new Date().toISOString(),
    sdk: {
      name: SDK_ARTIFACT.name,
      version: SDK_ARTIFACT.version,
      url: SDK_ARTIFACT.url,
      sha256: sdkDigest,
      dir: relRoot(SDK_ARTIFACT.dir),
    },
    vscode: {
      tag: VSCODE_TAG,
      commit: VSCODE_COMMIT,
      dir: relRoot(join(VENDOR_DIR, 'vscode-1.128.0')),
    },
  });
  console.log('[recover] artifacts ready');
}

main().catch((error) => {
  console.error('[recover] fetch-artifacts failed:', error);
  process.exit(1);
});
