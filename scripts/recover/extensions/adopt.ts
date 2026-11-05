/**
 * Adopt cursor-computer-use's shipped TypeScript sources into the recovery tree.
 *
 *   bun scripts/recover/extensions/adopt.ts
 *
 * The extension ships 64 real source files (src/**) plus configs. Sources are
 * copied with a provenance header (method: adopted-source, confidence: A).
 * JSON files are byte-identical and get their provenance from MANIFEST.json.
 *
 * Workspace packages and npm deps that the artifact does not ship are replaced
 * by explicit stubs under stubs/ (TODO(stub), any-typed). See stubs.ts.
 */

import { createHash } from 'node:crypto';
import { readFileSync, readdirSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { STUB_README, STUBS } from './stubs.ts';

const ROOT = process.cwd();
const SRC = path.join(ROOT, 'app/extensions/cursor-computer-use');
const OUT = path.join(ROOT, 'recovered/extensions/cursor-computer-use');
const NOW = new Date().toISOString();
const RUN_ID = 'ext-p0';

function sha256(data: Buffer | string): string {
	return createHash('sha256').update(data).digest('hex');
}

function walk(dir: string, base = dir, out: string[] = []): string[] {
	for (const entry of readdirSync(dir, { withFileTypes: true })) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) walk(full, base, out);
		else out.push(path.relative(base, full));
	}
	return out;
}

function header(artifact: string, sha: string): string {
	return [
		'// @recovered-by cursor-re',
		'// artifact: ' + artifact + ' sha256:' + sha,
		'// module: (adopted file)',
		'// basis: shipped-source confidence: A',
		'// method: adopted-source',
		'// run: ' + RUN_ID + ' ' + NOW,
		'',
	].join('\n') + '\n';
}

const adopted: Array<{ path: string; artifact: string; sha256: string; bytes: number; method: string; confidence: string; header: boolean }> = [];

function adopt(rel: string, withHeader: boolean): void {
	const artifactRel = path.relative(ROOT, path.join(SRC, rel));
	const buffer = readFileSync(path.join(SRC, rel));
	const sha = sha256(buffer);
	const target = path.join(OUT, rel);
	mkdirSync(path.dirname(target), { recursive: true });
	writeFileSync(target, withHeader ? header(artifactRel, sha) + buffer.toString('utf8') : buffer);
	adopted.push({ path: rel, artifact: artifactRel, sha256: sha, bytes: buffer.length, method: 'adopted-source', confidence: 'A', header: withHeader });
}

rmSync(path.join(OUT, 'src'), { recursive: true, force: true });
for (const rel of walk(path.join(SRC, 'src'))) {
	adopt(path.join('src', rel), !rel.endsWith('.json'));
}
for (const rel of ['extension.webpack.config.js', 'vitest.config.ts']) adopt(rel, true);
adopt('tsconfig.json', false);

mkdirSync(path.join(OUT, 'upstream'), { recursive: true });
for (const rel of ['tsconfig.json', 'vitest.config.ts', 'extension.webpack.config.js']) {
	writeFileSync(path.join(OUT, 'upstream', rel), readFileSync(path.join(SRC, rel)));
}

writeFileSync(
	path.join(OUT, 'package.json'),
	JSON.stringify(
		{
			name: '@cursor-re/cursor-computer-use',
			private: true,
			version: '0.0.0',
			description: 'Recovered copy of the shipped cursor-computer-use extension (local study only; not published).',
			type: 'module',
			cursorRe: {
				run: RUN_ID,
				adoptedFrom: 'app/extensions/cursor-computer-use',
				note: 'Adapted for local typecheck only; the original workspace layout is documented in upstream/ and MANIFEST.json.',
			},
			scripts: { typecheck: 'tsc -p tsconfig.json', 'test:local': 'vitest run --config vitest.local.config.ts' },
		},
		null,
		2,
	) + '\n',
);

const stubPaths: Record<string, string> = {
	'@anysphere/computer-use/protocol': './stubs/anysphere-computer-use-protocol.d.ts',
	'@anysphere/computer-use/windows/profiles/cursor-product-profile.json': './stubs/computer-use-product-profile.json',
	'@anysphere/context': './stubs/anysphere-context.d.ts',
	'@anysphere/utils': './stubs/anysphere-utils.d.ts',
	'@anysphere/utils/image-resize': './stubs/anysphere-utils-image-resize.d.ts',
	'@anysphere/utils/jimp-minimal': './stubs/anysphere-utils-jimp-minimal.d.ts',
	'@cursor/types': './stubs/cursor-types.d.ts',
	'@jsquash/webp/codec/enc/webp_enc.js': './stubs/jsquash-webp.d.ts',
	'@jsquash/webp/codec/enc/webp_enc_simd.js': './stubs/jsquash-webp.d.ts',
	'@jsquash/webp/decode.js': './stubs/jsquash-webp.d.ts',
	'@jsquash/webp/meta.js': './stubs/jsquash-webp.d.ts',
	'@jsquash/webp/utils.js': './stubs/jsquash-webp.d.ts',
	'proto/aiserver/v1/aiserver_connectweb.js': './stubs/proto-aiserver.d.ts',
	'proto/aiserver/v1/aiserver_pb.js': './stubs/proto-aiserver.d.ts',
	vscode: './stubs/vscode.d.ts',
	yauzl: './stubs/yauzl.d.ts',
	'@connectrpc/connect': './stubs/connectrpc.d.ts',
	'@connectrpc/connect-node': './stubs/connectrpc.d.ts',
	// zod is not a workspace package: the app's tracked node_modules copy is
	// used read-only so z.infer/z.enum type-check against the real library.
	zod: '../../../app/node_modules/zod/index.d.cts',
	'zod/v3': '../../../app/node_modules/zod/v3/index.d.cts',
};

const tsconfig = {
	'//': 'ADAPTED from upstream/tsconfig.json for local typecheck: tsconfig.base.json, src/proto, src/external/bufbuild, packages/* and src/vscode-dts are not shipped. Those imports now point at stubs/ (TODO(stub)); zod is aliased to the app node_modules copy. Tests are excluded, as upstream did.',
	compilerOptions: {
		target: 'ES2022',
		module: 'ESNext',
		moduleResolution: 'Bundler',
		lib: ['ES2022'],
		strict: true,
		// TODO(stub): callback parameters cannot be inferred from any-typed stubs;
		// implicit-any diagnostics are tracked in the REPORT instead of hidden.
		noImplicitAny: false,
		skipLibCheck: true,
		esModuleInterop: true,
		resolveJsonModule: true,
		forceConsistentCasingInFileNames: true,
		noEmit: true,
		types: ['node'],
		paths: Object.fromEntries(Object.entries(stubPaths).map(([key, value]) => [key, [value]])),
	},
	include: ['src/**/*.ts'],
	exclude: ['src/**/*.test.ts'],
};
writeFileSync(path.join(OUT, 'tsconfig.json'), JSON.stringify(tsconfig, null, 2) + '\n');

const vitestLocal = [
	'// @recovered-by cursor-re',
	'// module: adapted vitest config (stub-free scoped subset)',
	'// basis: shipped-config confidence: A',
	'// method: adopted-source',
	'// run: ' + RUN_ID + ' ' + NOW,
	'// note: upstream vitest.config.ts aliases workspace sources that are not shipped.',
	'// This scoped config runs only tests whose import closure is local + node.',
	"import { defineConfig } from 'vitest/config';",
	'',
	'export default defineConfig({',
	'\troot: import.meta.dirname,',
	'\ttest: {',
	"\t\tenvironment: 'node',",
	'\t\tinclude: [',
	"\t\t\t'src/backends/common/sidecar-install-lock.test.ts',",
	"\t\t\t'src/mcp/mac-mode.test.ts',",
	'\t\t],',
	'\t},',
	'});',
	'',
].join('\n');
writeFileSync(path.join(OUT, 'vitest.local.config.ts'), vitestLocal);

mkdirSync(path.join(OUT, 'stubs'), { recursive: true });
for (const [name, content] of Object.entries(STUBS)) writeFileSync(path.join(OUT, 'stubs', name), content);
writeFileSync(path.join(OUT, 'stubs/README.md'), STUB_README);

writeFileSync(
	path.join(OUT, 'MANIFEST.json'),
	JSON.stringify(
		{
			generatedAt: NOW,
			run: RUN_ID,
			extension: 'cursor-computer-use',
			sourceDir: path.relative(ROOT, SRC),
			adopted,
			adapted: ['package.json', 'tsconfig.json'],
			stubs: Object.keys(STUBS).map((name) => 'stubs/' + name),
			externalAliases: ['zod -> app/node_modules/zod (tracked, read-only)'],
			note: 'JSON files are byte-identical to the artifact and carry no header; their provenance is the sha256 recorded here.',
		},
		null,
		1,
	) + '\n',
);

console.log('adopted ' + String(adopted.length) + ' files, wrote ' + String(Object.keys(STUBS).length) + ' stubs');
