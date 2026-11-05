import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { SDK_VENDOR_DIR, VSCODE_VENDOR_DIR, sha256File } from './paths';

export interface PinnedArtifact {
  name: string;
  version: string;
  sha256: string;
  url: string;
  dir: string;
}

export const SDK_ARTIFACT: PinnedArtifact = {
  name: '@cursor/sdk',
  version: '1.3.1',
  sha256: '30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6',
  url: 'https://registry.npmjs.org/@cursor/sdk/-/sdk-1.3.1.tgz',
  dir: SDK_VENDOR_DIR,
};

export const VSCODE_COMMIT = 'fc3def6774c76082adf699d366f31a557ce5573f';
export const VSCODE_TAG = '1.128.0';
export const VSCODE_DIR = VSCODE_VENDOR_DIR;

export function sdkPackageJsonPath(): string {
  return join(SDK_VENDOR_DIR, 'package.json');
}

export function sdkReady(): boolean {
  return existsSync(join(SDK_VENDOR_DIR, 'dist', 'esm', 'index.js'));
}

export function vscodeReady(): boolean {
  return existsSync(join(VSCODE_VENDOR_DIR, 'src', 'vs'));
}

export function assertSdkSha(file: string): string {
  const digest = sha256File(file);
  if (digest !== SDK_ARTIFACT.sha256) {
    throw new Error('SDK sha256 mismatch: ' + digest);
  }
  return digest;
}

export function readSdkPackageJson(): Record<string, unknown> {
  return JSON.parse(readFileSync(sdkPackageJsonPath(), 'utf8')) as Record<string, unknown>;
}
