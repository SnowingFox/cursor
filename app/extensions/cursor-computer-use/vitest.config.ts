import { resolve } from 'node:path';
import { defineConfig } from 'vitest/config';

const vscodeRoot = resolve(__dirname, '../..');

export default defineConfig({
	resolve: {
		// Resolve workspace packages (@anysphere/context, @anysphere/utils)
		// from their TypeScript sources so tests do not depend on built dists.
		conditions: ['anysphere-source'],
		// The shared protocol package is externalized to Node resolution by
		// vitest, which would require a built dist; alias it to source like
		// the webpack config does.
		alias: [
			{
				// Vite 6 rewrites `.js` -> `.ts` only when the importer is
				// TypeScript. Generated protos are `.js` and import the
				// bufbuild shim, which exists only as `protobuf.ts`.
				find: /^(?:\.\.\/)+external\/bufbuild\/protobuf\.js$/,
				replacement: resolve(vscodeRoot, 'src/external/bufbuild/protobuf.ts'),
			},
			{
				find: '@anysphere/computer-use/protocol',
				replacement: resolve(
					__dirname,
					'../../../packages/computer-use/protocol/sidecar-protocol.ts'
				),
			},
			{
				find: '@anysphere/computer-use/windows/profiles/cursor-product-profile.json',
				replacement: resolve(
					__dirname,
					'../../../packages/computer-use/windows/profiles/cursor-product-profile.json'
				),
			},
			// Generated protos, as the tsconfig `proto/*` path maps them.
			{
				find: 'proto',
				replacement: resolve(vscodeRoot, 'src/proto'),
			},
		],
	},
	server: {
		fs: {
			allow: [vscodeRoot, resolve(__dirname, '../../../packages')],
		},
	},
	test: {
		environment: 'node',
		include: ['src/**/*.test.ts'],
		exclude: ['out/**', 'dist/**'],
	},
});
