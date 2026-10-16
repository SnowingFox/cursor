import type { SpawnSyncOptions, SpawnSyncReturns } from 'node:child_process';

export const ROOT: string;
export const APP_DIR: string;
export const UPSTREAM_DIR: string;
export const DIST_DIR: string;
export function log(...args: unknown[]): void;
export function run(cmd: string, args: string[], opts?: SpawnSyncOptions): SpawnSyncReturns<Buffer>;
export function capture(cmd: string, args: string[], opts?: object): string;
export function sha256File(file: string): Promise<string>;
export function walk(root: string, rel?: string): AsyncGenerator<string>;
export function pool<T>(items: T[], limit: number, fn: (item: T, index: number) => Promise<void>): Promise<void>;
export function parseArgs(argv: string[]): { positional: string[]; flags: Record<string, string | true> };
