#!/usr/bin/env bun
// Development loop with hot reload:
//
//   bun run dev [-- <args passed to Cursor>]
//
//   * agent window: local mode is served by the Vite dev server; saving a file
//     under src/ hot-swaps it in the running window (no reload);
//   * extension host: extensions/cursor-agent-exec/src is rebuilt on save and
//     reloaded in place by the patched cursor-agent-exec;
//   * build/patches changes need a restart of `bun run dev`.
//
// The app runs with the isolated ./.cursor-dev profile (see scripts/start.mjs).
// On exit the dev-only patches are reverted, so app/ is left as `bun run build`
// would produce it.

import { spawn } from 'node:child_process';
import path from 'node:path';
import { build, createServer, type Rolldown } from 'vite';
import { DEV_SERVER_PORT, GLASS_ENTRY } from '../vite.config.js';
import { log, ROOT, run } from './lib/util.mjs';

const apply = (...flags: string[]) => run(process.execPath, [path.join(ROOT, 'build/patches/apply.mjs'), ...flags]);

log('building extension host sources (watching)');
const watcher = (await build({
	root: ROOT,
	mode: 'exthost',
	logLevel: 'warn',
	build: { watch: {} },
})) as Rolldown.RolldownWatcher;
await new Promise<void>((resolve, reject) => {
	watcher.on('event', (event) => {
		if (event.code === 'END') {
			log('extension host sources built');
			resolve();
		} else if (event.code === 'ERROR') {
			log(`extension host build failed: ${event.error.message}`);
			reject(event.error);
		}
	});
});

apply('--dev');

const server = await createServer({ root: ROOT, mode: 'glass' });
await server.listen();
const devUrl = `http://localhost:${DEV_SERVER_PORT}/${GLASS_ENTRY}`;
log(`vite dev server: ${devUrl}`);

let stopping = false;
async function stop(code: number): Promise<never> {
	if (!stopping) {
		stopping = true;
		await Promise.allSettled([server.close(), watcher.close()]);
		apply();
	}
	process.exit(code);
}

const app = spawn(process.execPath, [path.join(ROOT, 'scripts/start.mjs'), ...process.argv.slice(2)], {
	stdio: 'inherit',
	env: { ...process.env, CURSOR_LOCAL_MODE_DEV: '1', CURSOR_LOCAL_MODE_DEV_URL: devUrl },
});
app.on('exit', (code) => void stop(code ?? 0));
for (const signal of ['SIGINT', 'SIGTERM'] as const) {
	process.on(signal, () => {
		app.kill(signal);
		void stop(130);
	});
}
