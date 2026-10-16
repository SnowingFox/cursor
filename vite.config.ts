/**
 * Builds our sources into the app/ tree, next to the Cursor bundles that load them:
 *
 *   --mode glass    src/vs/workbench/contrib/localMode/browser/localMode.ts
 *                   -> app/out/vs/workbench/contrib/localMode/browser/localMode.js (ESM)
 *   --mode exthost  extensions/cursor-agent-exec/src/localMode.ts
 *                   -> app/extensions/cursor-agent-exec/dist/localMode.js (CJS)
 *
 * The dev server (glass only) serves the same entry with HMR to the running
 * app; see scripts/dev.ts.
 */
import path from 'node:path';
import type { UserConfig } from 'vite';
import { defineConfig } from 'vitest/config';

const root = import.meta.dirname;
const r = (p: string) => path.resolve(root, p);

export const GLASS_ENTRY = 'src/vs/workbench/contrib/localMode/browser/localMode.ts';
export const EXTHOST_ENTRY = 'extensions/cursor-agent-exec/src/localMode.ts';
export const DEV_SERVER_PORT = 5173;

// Our modules must share the agent window's React instance.
const reactAliases = [
	{ find: /^react$/, replacement: r('src/vs/glass/host/react.ts') },
	{ find: /^react\/jsx-(?:dev-)?runtime$/, replacement: r('src/vs/glass/host/jsxRuntime.ts') },
];

const glass: UserConfig = {
	resolve: { alias: reactAliases },
	// The app ships a production React: no dev JSX (jsxDEV) or Fast Refresh.
	oxc: { jsx: { runtime: 'automatic', development: false } },
	optimizeDeps: { noDiscovery: true, include: [] },
	server: {
		port: DEV_SERVER_PORT,
		strictPort: true,
		// The agent window's origin is vscode-file://vscode-app.
		cors: { origin: /^vscode-file:\/\// },
		// The Vite client runs inside Cursor's whole window; don't mirror all of
		// its console output into the terminal.
		forwardConsole: false,
	},
	build: {
		lib: { entry: r(GLASS_ENTRY), formats: ['es'], fileName: () => 'localMode.js' },
		outDir: r('app/out/vs/workbench/contrib/localMode/browser'),
		emptyOutDir: true,
		target: 'chrome140',
		minify: false,
		reportCompressedSize: false,
	},
};

const exthost: UserConfig = {
	build: {
		lib: { entry: r(EXTHOST_ENTRY), formats: ['cjs'], fileName: () => 'localMode.js' },
		outDir: r('app/extensions/cursor-agent-exec/dist'),
		// dist/ holds the extension's own webpack output.
		emptyOutDir: false,
		target: 'node22',
		minify: false,
		reportCompressedSize: false,
		rolldownOptions: { external: [/^node:/] },
	},
};

export default defineConfig(({ mode }) => ({
	...(mode === 'exthost' ? exthost : glass),
	test: {
		include: ['src/**/*.test.ts', 'extensions/*/src/**/*.test.ts'],
		environment: 'node',
	},
}));
