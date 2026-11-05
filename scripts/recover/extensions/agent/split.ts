/**
 * Split W2 ext-agent webpack bundles into per-module files, plus whole-file
 * fragments for esbuild single-entry bundles (no webpack module map).
 *
 *   bun scripts/recover/extensions/agent/split.ts [--ext name ...]
 *
 * Output: recovered/extensions/agent/<ext>/bundles/<chunk>/{_prelude.js,
 * <module-file>.js, _footer.js} and <ext>/MODULES.json.
 *
 * Numeric module ids have no path evidence -> confidence C, basis webpack-id.
 * Quoted keys keep their original path -> confidence B, basis webpack-key.
 * Every artifact is reassembled from the parts on disk and compared by sha256.
 */

import { mkdirSync, readFileSync, rmSync, statSync } from 'node:fs';
import path from 'node:path';
import { writeFileSync } from 'node:fs';
import { chunkIdOf, findModuleMap, moduleFileName } from './webpack.ts';
import {
	EXT_DIR,
	NOW,
	OUT_ROOT,
	TARGETS,
	cursorLiterals,
	exportsHint,
	provenanceHeader,
	relPath,
	sha256,
	stripProvenance,
	walkFiles,
	writeJson,
} from './lib.ts';

export interface ModuleRecord {
	key: string;
	keyType: 'number' | 'string';
	file: string;
	start: number;
	end: number;
	separator: string;
	basis: 'webpack-id' | 'webpack-key' | 'esbuild-wrapper';
	confidence: 'B' | 'C';
	cursorIds: string[];
	exportsHint: string[];
}

export interface ArtifactRecord {
	artifact: string;
	sha256: string;
	bytes: number;
	format: 'webpack' | 'esbuild-single-entry';
	chunk: string;
	chunkId: number | null;
	entry: boolean;
	moduleCount: number;
	keyTypes: { number: number; string: number };
	preludeBytes: number;
	footerBytes: number;
	reassembly: 'ok' | 'mismatch';
	reassembledSha256: string;
	notes: string[];
	modules: ModuleRecord[];
}

export interface ExtensionSplit {
	extension: string;
	generatedAt: string;
	sourceDir: string;
	artifacts: ArtifactRecord[];
	skipped: Array<{ file: string; reason: string; bytes: number }>;
	totals: { artifacts: number; modules: number; confidence: Record<string, number>; reassembly: 'ok' | 'mismatch' };
}

const MAX_ARTIFACT_BYTES = 25_000_000;

function chunkLabel(file: string, text: string): { label: string; chunkId: number | null; entry: boolean } {
	const base = path.basename(file);
	const id = chunkIdOf(text);
	if (base === 'main.js') return { label: 'main', chunkId: id, entry: true };
	if (base === 'extension.js') return { label: 'main', chunkId: id, entry: true };
	if (id !== null) return { label: 'chunk-' + String(id), chunkId: id, entry: false };
	return { label: path.basename(file, '.js').replace(/[^A-Za-z0-9._-]+/g, '_'), chunkId: null, entry: false };
}

export function splitArtifact(extension: string, artifactRel: string): ArtifactRecord {
	const artifactAbs = path.join(process.cwd(), artifactRel);
	const text = readFileSync(artifactAbs, 'utf8');
	const sha = sha256(text);
	const bytes = statSync(artifactAbs).size;
	const { label, chunkId, entry } = chunkLabel(artifactAbs, text);
	const chunkDir = path.join(OUT_ROOT, extension, 'bundles', label);
	rmSync(chunkDir, { recursive: true, force: true });
	mkdirSync(chunkDir, { recursive: true });

	const writePart = (file: string, moduleName: string, range: string, basis: string, confidence: string, content: string): void => {
		mkdirSync(chunkDir, { recursive: true });
		writeFileSync(
			path.join(chunkDir, file),
			provenanceHeader({ artifact: artifactRel, sha, module: moduleName, range, basis, confidence, method: 'split' }) + content,
		);
	};

	const found = findModuleMap(text);
	const notes: string[] = [];
	// A "map" of one numeric entry spanning most of the file is the generic
	// object-literal fallback misfiring on an esbuild bundle (e.g. explorer:
	// esbuild emits "var t = { 613: (t2) => { ..." with no entry separators).
	// Such artifacts are emitted as one whole-file fragment instead.
	const coverage = found && found.entries.length === 1 ? (found.entries[0].end - found.entries[0].start) / text.length : 0;
	const webpackContainer = found ? /^(__webpack_modules__|__webpack_esm_modules__|exports\.modules|modules)$/.test(found.container) : false;
	const singleNonWebpack = Boolean(found) && found!.entries.length === 1 && !webpackContainer;
	const map = singleNonWebpack ? null : found;
	if (found && !map) {
		notes.push(
			'one-entry map in generic object literal (container ' +
				(found.container || '?') +
				', coverage ' +
				coverage.toFixed(2) +
				') demoted to whole-file fragment',
		);
	}
	const modules: ModuleRecord[] = [];
	const used = new Set<string>();
	let preludeBytes = 0;
	let footerBytes = 0;
	let format: ArtifactRecord['format'] = 'webpack';
	const keyTypes = { number: 0, string: 0 };

	if (map && map.entries.length > 0) {
		const preludeEnd = map.entries[0].start;
		preludeBytes = Buffer.byteLength(text.slice(0, preludeEnd));
		footerBytes = Buffer.byteLength(text.slice(map.close));
		writePart('_prelude.js', '(prelude)', '0..' + String(preludeEnd), 'webpack-container', 'C', text.slice(0, preludeEnd));
		writePart('_footer.js', '(footer)', String(map.close) + '..' + String(text.length), 'webpack-container', 'C', text.slice(map.close));
		for (const moduleEntry of map.entries) {
			const file = moduleFileName(moduleEntry.key);
			if (used.has(file)) throw new Error('duplicate module file name ' + file + ' in ' + artifactRel);
			used.add(file);
			const basis: ModuleRecord['basis'] = moduleEntry.keyType === 'number' ? 'webpack-id' : 'webpack-key';
			const confidence: ModuleRecord['confidence'] = moduleEntry.keyType === 'number' ? 'C' : 'B';
			keyTypes[moduleEntry.keyType] += 1;
			writePart(
				file,
				moduleEntry.key,
				String(moduleEntry.start) + '..' + String(moduleEntry.end),
				basis,
				confidence,
				moduleEntry.text,
			);
			modules.push({
				key: moduleEntry.key,
				keyType: moduleEntry.keyType,
				file,
				start: moduleEntry.start,
				end: moduleEntry.end,
				separator: moduleEntry.separator,
				basis,
				confidence,
				cursorIds: cursorLiterals(moduleEntry.text),
				exportsHint: exportsHint(moduleEntry.text),
			});
		}
	} else {
		// esbuild single-entry bundle: no internal module boundaries are visible,
		// so the whole artifact is one lossless fragment.
		format = 'esbuild-single-entry';
		writePart('whole.js', '(whole esbuild entry)', '0..' + String(text.length), 'esbuild-wrapper', 'C', text);
		modules.push({
			key: '(whole)',
			keyType: 'number',
			file: 'whole.js',
			start: 0,
			end: text.length,
			separator: '',
			basis: 'esbuild-wrapper',
			confidence: 'C',
			cursorIds: cursorLiterals(text),
			exportsHint: exportsHint(text),
		});
	}

	// Reassembly gate: read parts back from disk, strip provenance, rebuild.
	const read = (file: string): string => stripProvenance(readFileSync(path.join(chunkDir, file), 'utf8'));
	let rebuilt = modules.length && format === 'webpack' ? read('_prelude.js') : '';
	for (const moduleRecord of modules) {
		rebuilt += read(moduleRecord.file) + moduleRecord.separator;
	}
	if (format === 'webpack') rebuilt += read('_footer.js');
	const reassembledSha = sha256(rebuilt);

	return {
		artifact: artifactRel,
		sha256: sha,
		bytes,
		format,
		chunk: label,
		chunkId,
		entry,
		moduleCount: modules.length,
		keyTypes,
		preludeBytes,
		footerBytes,
		reassembly: reassembledSha === sha ? 'ok' : 'mismatch',
		reassembledSha256: reassembledSha,
		notes,
		modules,
	};
}

export function splitExtension(extension: string): ExtensionSplit {
	const sourceDir = path.join(EXT_DIR, extension);
	const files = walkFiles(path.join(sourceDir, 'dist')).sort();
	const artifacts: ArtifactRecord[] = [];
	const skipped: ExtensionSplit['skipped'] = [];
	for (const file of files) {
		if (!file.endsWith('.js')) continue;
		const rel = relPath(file);
		const bytes = statSync(file).size;
		if (bytes > MAX_ARTIFACT_BYTES) {
			skipped.push({ file: rel, reason: 'larger than 25 MB limit', bytes });
			continue;
		}
		artifacts.push(splitArtifact(extension, rel));
	}
	const confidence: Record<string, number> = {};
	for (const artifact of artifacts) {
		for (const moduleRecord of artifact.modules) {
			confidence[moduleRecord.confidence] = (confidence[moduleRecord.confidence] ?? 0) + 1;
		}
	}
	const record: ExtensionSplit = {
		extension,
		generatedAt: NOW,
		sourceDir: relPath(sourceDir),
		artifacts,
		skipped,
		totals: {
			artifacts: artifacts.length,
			modules: artifacts.reduce((sum, artifact) => sum + artifact.moduleCount, 0),
			confidence,
			reassembly: artifacts.every((artifact) => artifact.reassembly === 'ok') ? 'ok' : 'mismatch',
		},
	};
	writeJson(path.join(OUT_ROOT, extension, 'MODULES.json'), record);
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
	let failures = 0;
	for (const extension of targets) {
		const record = splitExtension(extension);
		const bad = record.artifacts.filter((artifact) => artifact.reassembly !== 'ok');
		console.log(
			extension +
				': ' +
				String(record.totals.artifacts) +
				' artifacts, ' +
				String(record.totals.modules) +
				' modules, confidence ' +
				JSON.stringify(record.totals.confidence) +
				', reassembly ' +
				(bad.length ? 'FAILED (' + String(bad.length) + ')' : 'ok'),
		);
		for (const artifact of bad) {
			failures += 1;
			console.log('  MISMATCH ' + artifact.artifact + ' ' + artifact.sha256 + ' != ' + artifact.reassembledSha256);
		}
	}
	if (failures) process.exitCode = 1;
}

if (import.meta.main) main();
