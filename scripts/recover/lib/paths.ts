import { createHash } from 'node:crypto';
import {
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  statSync,
  writeFileSync,
} from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..', '..');
export const RECOVERY_DIR = join(ROOT, 'recovery');
export const INVENTORY_DIR = join(RECOVERY_DIR, 'inventory');
export const MAPPINGS_DIR = join(RECOVERY_DIR, 'mappings');
export const CLUSTERS_DIR = join(RECOVERY_DIR, 'clusters');
export const RAW_DIR = join(RECOVERY_DIR, 'raw');
export const CACHE_DIR = join(RECOVERY_DIR, '.cache');
export const VENDOR_DIR = join(ROOT, '.vendor');
export const SDK_VENDOR_DIR = join(VENDOR_DIR, 'cursor-sdk-1.3.1');
export const VSCODE_VENDOR_DIR = join(VENDOR_DIR, 'vscode-1.128.0');
export const APP_DIR = join(ROOT, 'app');

export function ensureDir(dir: string): void {
  mkdirSync(dir, { recursive: true });
}

export function readJson<T>(file: string): T {
  return JSON.parse(readFileSync(file, 'utf8')) as T;
}

export function writeJson(file: string, value: unknown): void {
  ensureDir(dirname(file));
  writeFileSync(file, JSON.stringify(value, null, 2) + '\n');
}

export function writeText(file: string, value: string): void {
  ensureDir(dirname(file));
  writeFileSync(file, value);
}

export function sha256(data: string | Buffer): string {
  const hash = createHash('sha256');
  hash.update(data);
  return hash.digest('hex');
}

export function sha256File(file: string): string {
  return sha256(readFileSync(file));
}

export function relRoot(file: string): string {
  return relative(ROOT, file);
}

export function listFiles(dir: string): string[] {
  if (!existsSync(dir)) {
    return [];
  }
  const out: string[] = [];
  const walk = (current: string): void => {
    for (const name of readdirSync(current)) {
      const p = join(current, name);
      const st = statSync(p);
      if (st.isDirectory()) {
        walk(p);
      } else if (st.isFile()) {
        out.push(p);
      }
    }
  };
  walk(dir);
  return out;
}

export function fileSize(file: string): number {
  return statSync(file).size;
}
