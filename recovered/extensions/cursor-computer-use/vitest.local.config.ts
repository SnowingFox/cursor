// @recovered-by cursor-re
// module: adapted vitest config (stub-free scoped subset)
// basis: shipped-config confidence: A
// method: adopted-source
// run: ext-p0 2026-11-05T10:09:48.889Z
// note: upstream vitest.config.ts aliases workspace sources that are not shipped.
// This scoped config runs only tests whose import closure is local + node.
import { defineConfig } from 'vitest/config';

export default defineConfig({
	root: import.meta.dirname,
	test: {
		environment: 'node',
		include: [
			'src/backends/common/sidecar-install-lock.test.ts',
			'src/mcp/mac-mode.test.ts',
		],
	},
});
