/**
 * Inventory every W2 ext-agent extension: package.json contributions, shipped
 * engineering files, dist artifacts and webpack module-map shape.
 *
 *   bun scripts/recover/extensions/agent/inventory.ts [--ext name ...]
 *
 * Writes recovered/extensions/agent/<ext>/INVENTORY.json per extension and the
 * rollup recovery/mappings/extensions-agent.json.
 */

import { readFileSync, statSync } from 'node:fs';
import path from 'node:path';
import { chunkIdOf, findModuleMap } from './webpack.ts';
import {
	EXT_DIR,
	MAPPING_FILE,
	NOW,
	OUT_ROOT,
	RUN_ID,
	TARGETS,
	contributesSummary,
	fileCategory,
	relPath,
	sha256,
	walkFiles,
	writeJson,
} from './lib.ts';

export interface ShippedFile {
	path: string;
	bytes: number;
	sha256: string;
	category: string;
	copy: boolean;
}

export interface DistArtifact {
	path: string;
	bytes: number;
	sha256: string;
	webpack: boolean;
	modules: number;
	keyTypes: { number: number; string: number };
	chunkId: number | null;
	entry: boolean;
}

export interface ExtensionInventory {
	extension: string;
	generatedAt: string;
	sourceDir: string;
	package: {
		name: string | null;
		version: string | null;
		main: string | null;
		activationEvents: string[];
		enabledApiProposals: string[];
		dependencies: Record<string, string>;
		devDependencies: Record<string, string>;
		optionalDependencies: Record<string, string>;
		contributes: Record<string, unknown>;
		scripts: Record<string, string>;
	};
	distArtifacts: DistArtifact[];
	shippedFiles: ShippedFile[];
	thirdPartyAssets: Array<{ path: string; bytes: number; sha256: string; note: string }>;
	unresolved: Array<{ path: string; reason: string; bytes: number }>;
	totals: {
		bytes: number;
		distBytes: number;
		distArtifacts: number;
		webpackArtifacts: number;
		webpackModules: number;
		shippedFiles: number;
	};
}

const CONFIG_LIKE = new Set(['config', 'tsconfig', 'schema', 'nls', 'grammar', 'theme', 'policy', 'build-extra', 'doc', 'license', 'manifest', 'media']);

export function inventoryExtension(extension: string): ExtensionInventory {
	const sourceDir = path.join(EXT_DIR, extension);
	const packageJson = JSON.parse(readFileSync(path.join(sourceDir, 'package.json'), 'utf8'));
	const files = walkFiles(sourceDir).sort();
	const distArtifacts: DistArtifact[] = [];
	const shippedFiles: ShippedFile[] = [];
	const thirdPartyAssets: ExtensionInventory['thirdPartyAssets'] = [];
	const unresolved: ExtensionInventory['unresolved'] = [];
	let distBytes = 0;

	for (const file of files) {
		const rel = path.relative(sourceDir, file).split(path.sep).join('/');
		const bytes = statSync(file).size;
		const sha = sha256(readFileSync(file));
		if (rel.startsWith('dist/') && rel.endsWith('.js')) {
			const text = readFileSync(file, 'utf8');
			distBytes += bytes;
			const map = findModuleMap(text);
			let keyTypes = { number: 0, string: 0 };
			if (map) {
				for (const entry of map.entries) keyTypes[entry.keyType] += 1;
			}
			distArtifacts.push({
				path: relPath(file),
				bytes,
				sha256: sha,
				webpack: Boolean(map),
				modules: map ? map.entries.length : 0,
				keyTypes,
				chunkId: chunkIdOf(text),
				entry: path.basename(file) === 'main.js' || path.basename(file) === 'extension.js',
			});
			if (!map) unresolved.push({ path: relPath(file), reason: 'no webpack module map (worker/esbuild/asset script)', bytes });
			continue;
		}
		if (rel.startsWith('dist/')) {
			// .LICENSE.txt, worker assets and media shipped inside dist
			const category = /LICENSE/.test(rel) ? 'license' : 'dist-asset';
			if (/LICENSE/.test(rel)) {
				shippedFiles.push({ path: relPath(file), bytes, sha256: sha, category, copy: false });
			} else {
				thirdPartyAssets.push({ path: relPath(file), bytes, sha256: sha, note: category });
			}
			continue;
		}
		if (rel.startsWith('node_modules/')) {
			thirdPartyAssets.push({
				path: relPath(file),
				bytes,
				sha256: sha,
				note: rel.endsWith('.node') ? 'native binding (not copied)' : 'bundled dependency',
			});
			continue;
		}
		const category = fileCategory(rel);
		const copy = category !== 'dist-asset' && bytes <= 2_000_000 && !rel.endsWith('.node');
		shippedFiles.push({ path: relPath(file), bytes, sha256: sha, category, copy });
		if (!copy) unresolved.push({ path: relPath(file), reason: 'large/binary shipped file not copied', bytes });
	}

	const record: ExtensionInventory = {
		extension,
		generatedAt: NOW,
		sourceDir: relPath(sourceDir),
		package: {
			name: packageJson.name ?? null,
			version: packageJson.version ?? null,
			main: packageJson.main ?? null,
			activationEvents: packageJson.activationEvents ?? [],
			enabledApiProposals: packageJson.enabledApiProposals ?? [],
			dependencies: packageJson.dependencies ?? {},
			devDependencies: packageJson.devDependencies ?? {},
			optionalDependencies: packageJson.optionalDependencies ?? {},
			contributes: contributesSummary(packageJson.contributes),
			scripts: packageJson.scripts ?? {},
		},
		distArtifacts,
		shippedFiles,
		thirdPartyAssets,
		unresolved,
		totals: {
			bytes: files.reduce((sum, file) => sum + statSync(file).size, 0),
			distBytes,
			distArtifacts: distArtifacts.length,
			webpackArtifacts: distArtifacts.filter((artifact) => artifact.webpack).length,
			webpackModules: distArtifacts.reduce((sum, artifact) => sum + artifact.modules, 0),
			shippedFiles: shippedFiles.length,
		},
	};
	writeJson(path.join(OUT_ROOT, extension, 'INVENTORY.json'), record);
	return record;
}

function main(): void {
	const args = process.argv.slice(2);
	const only: string[] = [];
	for (let index = 0; index < args.length; index += 1) {
		if (args[index] === '--ext' && args[index + 1]) {
			only.push(args[index + 1]);
			index += 1;
		}
	}
	const targets = only.length ? only : [...TARGETS];
	const rollup: Array<Record<string, unknown>> = [];
	for (const extension of targets) {
		const record = inventoryExtension(extension);
		rollup.push({
			extension,
			totals: record.totals,
			distArtifacts: record.distArtifacts.map((artifact) => ({
				path: artifact.path,
				bytes: artifact.bytes,
				sha256: artifact.sha256,
				webpack: artifact.webpack,
				modules: artifact.modules,
				keyTypes: artifact.keyTypes,
			})),
			shippedFiles: record.shippedFiles.length,
			thirdPartyAssets: record.thirdPartyAssets.length,
			unresolved: record.unresolved.length,
		});
		console.log(
			extension +
				': ' +
				String(record.totals.distArtifacts) +
				' dist js (' +
				String(record.totals.webpackArtifacts) +
				' webpack, ' +
				String(record.totals.webpackModules) +
				' modules), ' +
				String(record.totals.shippedFiles) +
				' shipped files, ' +
				String(record.unresolved.length) +
				' unresolved',
		);
	}
	const totals = rollup.reduce(
		(acc, entry: any) => ({
			artifacts: acc.artifacts + (entry.totals.webpackArtifacts ?? 0),
			modules: acc.modules + (entry.totals.webpackModules ?? 0),
			shippedFiles: acc.shippedFiles + (entry.totals.shippedFiles ?? 0),
		}),
		{ artifacts: 0, modules: 0, shippedFiles: 0 },
	);
	writeJson(MAPPING_FILE, {
		generatedAt: NOW,
		run: RUN_ID,
		task: 'W2-4 ext-agent',
		sourceDir: 'app/extensions',
		extensions: rollup,
		totals,
	});
	console.log('rollup: ' + JSON.stringify(totals));
}

if (import.meta.main) main();
