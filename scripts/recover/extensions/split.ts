/**
 * Split Cursor extension webpack bundles into per-module source files.
 *
 *   bun scripts/recover/extensions/split.ts [--ext cursor-agent-exec] [--all]
 *
 * Output (owned path):
 *   recovered/extensions/<ext>/bundles/<chunk>/_prelude.js
 *   recovered/extensions/<ext>/bundles/<chunk>/<moduleId>.js
 *   recovered/extensions/<ext>/bundles/<chunk>/_footer.js
 *   recovered/extensions/<ext>/MODULES.json
 *
 * Every emitted file carries a provenance header. Numeric ids cannot be mapped
 * to original source paths, so those modules are confidence C; quoted webpack
 * keys keep their path and are confidence B. After emitting, each artifact is
 * reassembled from the parts on disk and compared by sha256 to the artifact.
 */

import { createHash } from 'node:crypto';
import { readFileSync, readdirSync, statSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { chunkIdOf, findModuleMap, moduleFileName, type WebpackModuleMap } from './webpack.ts';

const ROOT = process.cwd();
const EXT_DIR = path.join(ROOT, 'app/extensions');
const OUT_DIR = path.join(ROOT, 'recovered/extensions');
const RUN_ID = 'ext-p0';
const NOW = new Date().toISOString();

export const PRIORITY_EXTENSIONS = [
	'cursor-computer-use',
	'cursor-agent-exec',
	'cursor-agent-host',
	'cursor-local-agent-runtime',
	'cursor-resolver',
	'cursor-mcp',
] as const;

export interface ModuleRecord {
	key: string;
	keyType: 'number' | 'string';
	file: string;
	start: number;
	end: number;
	separator: string;
	basis: 'webpack-id' | 'webpack-key';
	confidence: 'B' | 'C';
}

export interface ArtifactRecord {
	artifact: string;
	sha256: string;
	bytes: number;
	chunk: string;
	chunkId: number | null;
	entry: boolean;
	moduleCount: number;
	preludeBytes: number;
	footerBytes: number;
	reassembly: 'ok' | 'mismatch';
	reassembledSha256?: string;
	modules: ModuleRecord[];
}

export interface ExtensionRecord {
	extension: string;
	generatedAt: string;
	sourceDir: string;
	artifacts: ArtifactRecord[];
	skipped: Array<{ file: string; reason: string; bytes: number }>;
	totals: { artifacts: number; modules: number };
}

function sha256(data: Buffer | string): string {
	return createHash('sha256').update(data).digest('hex');
}

function walk(dir: string, out: string[] = []): string[] {
	for (const entry of readdirSync(dir, { withFileTypes: true })) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			if (entry.name === 'node_modules') continue;
			walk(full, out);
		} else if (entry.name.endsWith('.js')) {
			out.push(full);
		}
	}
	return out;
}

function headerFor(options: {
	artifact: string;
	sha: string;
	module: string;
	range: string;
	basis: string;
	confidence: string;
	method: string;
}): string {
	return [
		'// @recovered-by cursor-re',
		'// artifact: ' + options.artifact + ' sha256:' + options.sha,
		'// module: ' + options.module + ' range:' + options.range,
		'// basis: ' + options.basis + ' confidence: ' + options.confidence,
		'// method: ' + options.method,
		'// run: ' + RUN_ID + ' ' + NOW,
		'',
	].join('\n');
}

/** Remove the leading provenance block (all consecutive //-prefixed lines). */
export function stripProvenance(text: string): string {
	let index = 0;
	let lines = 0;
	while (index < text.length) {
		const next = text.indexOf('\n', index);
		const end = next === -1 ? text.length : next;
		if (!text.slice(index, end).startsWith('//')) break;
		index = next === -1 ? text.length : next + 1;
		lines += 1;
		if (lines > 20) break;
	}
	return text.slice(index);
}

function chunkLabel(file: string, text: string): { label: string; chunkId: number | null; entry: boolean } {
	const base = path.basename(file);
	const id = chunkIdOf(text);
	if (base === 'main.js') return { label: 'main', chunkId: null, entry: true };
	if (id !== null) return { label: 'chunk-' + String(id), chunkId: id, entry: false };
	return { label: path.basename(file, '.js').replace(/[^A-Za-z0-9._-]+/g, '_'), chunkId: null, entry: false };
}

export function splitArtifact(artifactRel: string): ArtifactRecord | null {
	const artifactAbs = path.join(ROOT, artifactRel);
	const text = readFileSync(artifactAbs, 'utf8');
	const map = findModuleMap(text);
	if (!map) return null;
	const sha = sha256(text);
	const { label, chunkId, entry } = chunkLabel(artifactAbs, text);
	const chunkDir = path.join(OUT_DIR, artifactRel.split('/')[2], 'bundles', label);
	rmSync(chunkDir, { recursive: true, force: true });
	mkdirSync(chunkDir, { recursive: true });

	const writePart = (file: string, moduleName: string, range: string, basis: string, confidence: string, content: string): void => {
		const header = headerFor({
			artifact: artifactRel,
			sha,
			module: moduleName,
			range,
			basis,
			confidence,
			method: 'split',
		});
		writeFileSync(path.join(chunkDir, file), header + content);
	};

	const preludeEnd = map.entries[0].start;
	writePart('_prelude.js', '(prelude)', '0..' + String(preludeEnd), 'webpack-container', 'C', text.slice(0, preludeEnd));
	writePart('_footer.js', '(footer)', String(map.close) + '..' + String(text.length), 'webpack-container', 'C', text.slice(map.close));

	const modules: ModuleRecord[] = [];
	const used = new Set<string>();
	for (const moduleEntry of map.entries) {
		const file = moduleFileName(moduleEntry.key);
		if (used.has(file)) throw new Error('duplicate module file name ' + file + ' in ' + artifactRel);
		used.add(file);
		const basis: ModuleRecord['basis'] = moduleEntry.keyType === 'number' ? 'webpack-id' : 'webpack-key';
		const confidence: ModuleRecord['confidence'] = moduleEntry.keyType === 'number' ? 'C' : 'B';
		writePart(file, moduleEntry.key, String(moduleEntry.start) + '..' + String(moduleEntry.end), basis, confidence, moduleEntry.text);
		modules.push({
			key: moduleEntry.key,
			keyType: moduleEntry.keyType,
			file,
			start: moduleEntry.start,
			end: moduleEntry.end,
			separator: moduleEntry.separator,
			basis,
			confidence,
		});
	}

	// Reassembly gate: read every part back from disk (headers stripped) and
	// rebuild the artifact byte-for-byte.
	const read = (file: string): string => stripProvenance(readFileSync(path.join(chunkDir, file), 'utf8'));
	let rebuilt = read('_prelude.js');
	for (const moduleRecord of modules) rebuilt += read(moduleRecord.file) + moduleRecord.separator;
	rebuilt += read('_footer.js');
	const reassembledSha = sha256(rebuilt);

	return {
		artifact: artifactRel,
		sha256: sha,
		bytes: Buffer.byteLength(text),
		chunk: label,
		chunkId,
		entry,
		moduleCount: modules.length,
		preludeBytes: Buffer.byteLength(text.slice(0, preludeEnd)),
		footerBytes: Buffer.byteLength(text.slice(map.close)),
		reassembly: reassembledSha === sha ? 'ok' : 'mismatch',
		reassembledSha256: reassembledSha,
		modules,
	};
}

export function splitExtension(extension: string): ExtensionRecord {
	const sourceDir = path.join(EXT_DIR, extension);
	const files = walk(path.join(sourceDir, 'dist')).sort();
	const artifacts: ArtifactRecord[] = [];
	const skipped: ExtensionRecord['skipped'] = [];
	for (const file of files) {
		const rel = path.relative(ROOT, file);
		const bytes = statSync(file).size;
		if (bytes > 25_000_000) {
			skipped.push({ file: rel, reason: 'larger than 25 MB limit', bytes });
			continue;
		}
		const record = splitArtifact(rel);
		if (record) artifacts.push(record);
		else skipped.push({ file: rel, reason: 'no webpack module map (esbuild bundle, asset or script)', bytes });
	}
	const record: ExtensionRecord = {
		extension,
		generatedAt: NOW,
		sourceDir: path.relative(ROOT, sourceDir),
		artifacts,
		skipped,
		totals: { artifacts: artifacts.length, modules: artifacts.reduce((sum, a) => sum + a.moduleCount, 0) },
	};
	mkdirSync(path.join(OUT_DIR, extension), { recursive: true });
	writeFileSync(path.join(OUT_DIR, extension, 'MODULES.json'), JSON.stringify(record, null, 1) + '\n');
	return record;
}

function main(): void {
	const args = process.argv.slice(2);
	const only: string[] = [];
	let all = false;
	for (let index = 0; index < args.length; index += 1) {
		if (args[index] === '--ext' && args[index + 1]) {
			only.push(args[index + 1]);
			index += 1;
		} else if (args[index] === '--all') {
			all = true;
		}
	}
	const targets = only.length ? only : all ? PRIORITY_EXTENSIONS : PRIORITY_EXTENSIONS;
	for (const extension of targets) {
		const record = splitExtension(extension);
		const mismatches = record.artifacts.filter((a) => a.reassembly !== 'ok');
		console.log(
			extension +
				': ' +
				String(record.totals.artifacts) +
				' webpack artifacts, ' +
				String(record.totals.modules) +
				' modules, ' +
				String(record.skipped.length) +
				' skipped, reassembly ' +
				(mismatches.length ? 'FAILED (' + String(mismatches.length) + ')' : 'ok'),
		);
		if (mismatches.length) {
			for (const bad of mismatches) console.log('  MISMATCH ' + bad.artifact + ' ' + String(bad.sha256) + ' != ' + String(bad.reassembledSha256));
			process.exitCode = 1;
		}
	}
}

if (import.meta.main) main();
