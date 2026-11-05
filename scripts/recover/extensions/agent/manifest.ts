/**
 * Roll up the W2 ext-agent per-extension artifacts into one mapping document.
 *
 *   bun scripts/recover/extensions/agent/manifest.ts
 *
 * Reads recovered/extensions/agent/<ext>/{INVENTORY,ADOPTED,MODULES}.json and
 * writes recovery/mappings/extensions-agent.json (owned by ext-agent).
 */

import path from 'node:path';
import { NOW, OUT_ROOT, MAPPING_FILE, RUN_ID, TARGETS, readJson, writeJson } from './lib.ts';

function readOr(file: string, fallback: any): any {
	try {
		return readJson(file);
	} catch {
		return fallback;
	}
}

function main(): void {
	const extensions = TARGETS.map((extension) => {
		const dir = path.join(OUT_ROOT, extension);
		const inventory = readOr(path.join(dir, 'INVENTORY.json'), null);
		const adopted = readOr(path.join(dir, 'ADOPTED.json'), { files: [], skipped: [], totals: { files: 0 } });
		const modules = readOr(path.join(dir, 'MODULES.json'), { artifacts: [], skipped: [], totals: { artifacts: 0, modules: 0, confidence: {} } });
		const confidence: Record<string, number> = {};
		for (const artifact of modules.artifacts) {
			for (const moduleRecord of artifact.modules) {
				confidence[moduleRecord.confidence] = (confidence[moduleRecord.confidence] ?? 0) + 1;
			}
		}
		return {
			extension,
			sourceDir: 'app/extensions/' + extension,
			outputDir: 'recovered/extensions/agent/' + extension,
			package: inventory
				? {
						name: inventory.package.name,
						version: inventory.package.version,
						main: inventory.package.main,
						activationEvents: inventory.package.activationEvents,
						enabledApiProposals: inventory.package.enabledApiProposals,
						contributes: inventory.package.contributes,
					}
				: null,
			dist: inventory
				? {
						artifacts: inventory.distArtifacts.map((artifact: any) => ({
							path: artifact.path,
							bytes: artifact.bytes,
							sha256: artifact.sha256,
							webpack: artifact.webpack,
							modules: artifact.modules,
							keyTypes: artifact.keyTypes,
						})),
					}
				: { artifacts: [] },
			split: {
				artifacts: modules.totals.artifacts,
				modules: modules.totals.modules,
				confidence,
				reassembly: modules.totals.reassembly ?? 'ok',
				chunks: modules.artifacts.map((artifact: any) => ({
					artifact: artifact.artifact,
					format: artifact.format,
					chunk: artifact.chunk,
					chunkId: artifact.chunkId,
					modules: artifact.moduleCount,
					preludeBytes: artifact.preludeBytes,
					footerBytes: artifact.footerBytes,
					reassembly: artifact.reassembly,
				})),
			},
			adopted: {
				files: adopted.totals.files,
				byteIdentical: adopted.totals.byteIdentical,
				headed: adopted.totals.headed,
				byBasis: adopted.files.reduce((acc: Record<string, number>, entry: any) => {
					acc[entry.basis] = (acc[entry.basis] ?? 0) + 1;
					return acc;
				}, {}),
				entries: adopted.files.map((entry: any) => ({
					source: entry.source,
					dest: entry.dest,
					sha256: entry.sha256,
					basis: entry.basis,
					confidence: entry.confidence,
					byteIdentical: entry.byteIdentical,
				})),
			},
			unresolved: inventory ? inventory.unresolved : [],
			skippedAssets: adopted.skipped,
		};
	});
	const totals = {
		extensions: extensions.length,
		distArtifacts: extensions.reduce((sum: number, entry: any) => sum + entry.dist.artifacts.length, 0),
		webpackArtifacts: extensions.reduce(
			(sum: number, entry: any) => sum + entry.split.chunks.filter((chunk: any) => chunk.format === 'webpack').length,
			0,
		),
		singleEntryArtifacts: extensions.reduce(
			(sum: number, entry: any) => sum + entry.split.chunks.filter((chunk: any) => chunk.format === 'esbuild-single-entry').length,
			0,
		),
		splitModules: extensions.reduce((sum: number, entry: any) => sum + entry.split.modules, 0),
		adoptedFiles: extensions.reduce((sum: number, entry: any) => sum + entry.adopted.files, 0),
		confidence: extensions.reduce((acc: Record<string, number>, entry: any) => {
			for (const [key, value] of Object.entries<number>(entry.split.confidence)) acc[key] = (acc[key] ?? 0) + value;
			return acc;
		}, {}),
	};
	writeJson(MAPPING_FILE, {
		generatedAt: NOW,
		run: RUN_ID,
		task: 'W2-4 ext-agent',
		tooling: [
			'scripts/recover/extensions/agent/webpack.ts',
			'scripts/recover/extensions/agent/inventory.ts',
			'scripts/recover/extensions/agent/adopt.ts',
			'scripts/recover/extensions/agent/split.ts',
			'scripts/recover/extensions/agent/verify.ts',
		],
		totals,
		extensions,
	});
	console.log('mapping written: ' + JSON.stringify(totals));
}

main();
