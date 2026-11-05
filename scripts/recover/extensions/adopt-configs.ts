/**
 * Adopt shipped, hand-written extension engineering files (webpack configs,
 * package.nls.json, schemas, eslint configs, worker tsconfigs, loader/bundle
 * helper scripts) with confidence A.
 *
 *   bun scripts/recover/extensions/adopt-configs.ts
 *
 * Text files get a provenance header; JSON files are byte-identical and their
 * provenance is recorded in <ext>/CONFIGS.json (sha256).
 */

import { createHash } from 'node:crypto';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const OUT = path.join(ROOT, 'recovered/extensions');
const NOW = new Date().toISOString();
const RUN_ID = 'ext-p0';

const FILES: Record<string, string[]> = {
	'cursor-agent-exec': ['package.json'],
	'cursor-agent-host': ['package.json', 'scripts/ensure-agent-host-daemon-dist.cjs', 'scripts/tsc-some-files.sh'],
	'cursor-local-agent-runtime': ['package.json'],
	'cursor-resolver': ['package.json', 'extension-browser.webpack.config.js', 'rewrite-bufbuild-loader.js'],
	'cursor-mcp': ['package.json', 'eslint.config.cjs'],
	'cursor-always-local': ['package.json', 'package.nls.json', 'eslint.config.cjs', 'schemas/environment.schema.json', 'schemas/permissions.schema.json'],
	'cursor-commits': ['package.json', 'worker/pre-compile.js', 'worker/tsconfig.json'],
	'cursor-retrieval': ['package.json', 'package.nls.json', 'eslint.config.cjs', 'worker/tsconfig.json', 'schemas/package.schema.json'],
	'cursor-socket': ['package.json', 'extension.webpack.config.js'],
	'cursor-checkout': ['package.json', 'extension.webpack.config.js'],
	'cursor-polyfills-remote': ['package.json', 'eslint.config.cjs'],
};

interface ConfigRecord {
	path: string;
	artifact: string;
	sha256: string;
	bytes: number;
	method: 'adopted-source';
	confidence: 'A';
	header: boolean;
}

const manifests: Record<string, ConfigRecord[]> = {};

for (const [extension, files] of Object.entries(FILES)) {
	manifests[extension] = [];
	for (const rel of files) {
		const artifactRel = path.join('app/extensions', extension, rel);
		const source = path.join(ROOT, artifactRel);
		const buffer = readFileSync(source);
		const sha = createHash('sha256').update(buffer).digest('hex');
		const target = path.join(OUT, extension, rel);
		mkdirSync(path.dirname(target), { recursive: true });
		const isJson = rel.endsWith('.json');
		if (isJson) {
			writeFileSync(target, buffer);
		} else {
			const header = [
				'// @recovered-by cursor-re',
				'// artifact: ' + artifactRel + ' sha256:' + sha,
				'// module: (adopted engineering file)',
				'// basis: shipped-config confidence: A',
				'// method: adopted-source',
				'// run: ' + RUN_ID + ' ' + NOW,
				'',
				'',
			].join('\n');
			writeFileSync(target, header + buffer.toString('utf8'));
		}
		manifests[extension].push({ path: rel, artifact: artifactRel, sha256: sha, bytes: buffer.length, method: 'adopted-source', confidence: 'A', header: !isJson });
	}
}

for (const [extension, records] of Object.entries(manifests)) {
	writeFileSync(
		path.join(OUT, extension, 'CONFIGS.json'),
		JSON.stringify(
			{
				generatedAt: NOW,
				run: RUN_ID,
				extension,
				adopted: records,
				note: 'JSON files are byte-identical to the artifact; text files carry a provenance header. Verify sha256 against app/extensions/<extension>/<path> after stripping the header.',
			},
			null,
			1,
		) + '\n',
	);
	console.log(extension + ': ' + String(records.length) + ' config files adopted');
}
