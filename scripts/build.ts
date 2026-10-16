#!/usr/bin/env bun
// Builds our sources into app/ (Vite) and applies the bundle patches.
//
//   bun run build

import path from 'node:path';
import { build } from 'vite';
import { log, ROOT, run } from './lib/util.mjs';

for (const mode of ['glass', 'exthost'] as const) {
	log(`vite build --mode ${mode}`);
	await build({ root: ROOT, mode, logLevel: 'warn' });
}

run(process.execPath, [path.join(ROOT, 'build/patches/apply.mjs')]);
