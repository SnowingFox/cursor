/**
 * Adopt shipped engineering files (configs, schemas, package.nls, tsconfigs,
 * grammars, themes, media, notices, bundled native-package JS) byte-for-byte
 * with a provenance manifest.
 *
 *   bun scripts/recover/extensions/agent/adopt.ts [--ext name ...]
 *
 * Layout: recovered/extensions/agent/<ext>/shipped/<same relative path>
 * JSON/YAML/grammar/theme/binary files are byte-identical; .js/.cjs files carry
 * a provenance header and are proven lossless by stripping it and comparing
 * sha256 to the source file. Every file is recorded in ADOPTED.json.
 */

import { mkdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import {
	EXT_DIR,
	NOW,
	OUT_ROOT,
	TARGETS,
	fileCategory,
	provenanceHeader,
	relPath,
	sha256,
	stripProvenance,
	walkFiles,
	writeJson,
} from './lib.ts';

const MAX_COPY_BYTES = 2_000_000;
const SOURCE_LIKE = /\.(js|cjs|mjs|ts)$/;

export interface AdoptedFile {
	source: string;
	dest: string;
	bytes: number;
	sha256: string;
	emittedSha256: string | null;
	byteIdentical: boolean;
	category: string;
	basis: string;
	method: string;
	confidence: string;
	note?: string;
}

export interface ExtensionAdoption {
	extension: string;
	generatedAt: string;
	sourceDir: string;
	files: AdoptedFile[];
	skipped: Array<{ source: string; reason: string; bytes: number }>;
	totals: { files: number; bytes: number; byteIdentical: number; headed: number; skipped: number };
}

function basisFor(category: string, rel: string): { basis: string; method: string; confidence: string } {
	if (rel.includes('node_modules/')) return { basis: 'shipped-source', method: 'vendored', confidence: 'A' };
	if (category === 'doc' || category === 'license') return { basis: 'vendored', method: 'vendored', confidence: 'A' };
	if (/BUILD\.bazel$|pre-compile\.js$|webpack\.config\.js$|eslint\.config\.cjs$/.test(rel)) {
		// real build/config source shipped in the extension: basis shipped-source,
		// provenance method stays "shipped-config" (documented method vocabulary).
		return { basis: 'shipped-source', method: 'shipped-config', confidence: 'A' };
	}
	return { basis: 'shipped-config', method: 'shipped-config', confidence: 'A' };
}

function adoptExtension(extension: string): ExtensionAdoption {
	const sourceDir = path.join(EXT_DIR, extension);
	const outDir = path.join(OUT_ROOT, extension, 'shipped');
	const files: AdoptedFile[] = [];
	const skipped: ExtensionAdoption['skipped'] = [];

	for (const file of walkFiles(sourceDir).sort()) {
		const rel = path.relative(sourceDir, file).split(path.sep).join('/');
		const bytes = statSync(file).size;
		const source = relPath(file);
		if (rel.startsWith('dist/') && rel.endsWith('.js')) continue; // split, not adopted
		if (rel.endsWith('.node')) {
			skipped.push({ source, reason: 'native binding binary (sha256 recorded in INVENTORY.json), not copied', bytes });
			continue;
		}
		if (/LICENSE(\.txt)?$/i.test(path.basename(rel))) {
			skipped.push({ source, reason: 'license bundle recorded in INVENTORY.json, not copied', bytes });
			continue;
		}
		if (rel.endsWith('.map')) {
			skipped.push({ source, reason: 'sourcemap (governed by app/ policy)', bytes });
			continue;
		}
		if (bytes > MAX_COPY_BYTES) {
			skipped.push({ source, reason: 'larger than copy limit', bytes });
			continue;
		}
		const destAbs = path.join(outDir, rel);
		mkdirSync(path.dirname(destAbs), { recursive: true });
		const buffer = readFileSync(file);
		const category = fileCategory(rel);
		const { basis, method, confidence } = basisFor(category, rel);
		let emittedSha: string | null = null;
		let byteIdentical = true;
		if (SOURCE_LIKE.test(rel)) {
			const text = buffer.toString('utf8');
			const head = provenanceHeader({
				artifact: source,
				sha: sha256(buffer),
				module: (rel.startsWith('node_modules/') ? 'vendored:' : 'shipped:') + rel,
				range: '0..' + String(bytes),
				basis,
				confidence,
				method,
			});
			const emitted = head + text;
			writeFileSync(destAbs, emitted);
			emittedSha = sha256(emitted);
			byteIdentical = false;
			const stripped = stripProvenance(emitted);
			if (sha256(stripped) !== sha256(buffer)) {
				throw new Error('adopt header is not lossless for ' + source);
			}
		} else {
			writeFileSync(destAbs, buffer);
			emittedSha = sha256(readFileSync(destAbs));
			if (emittedSha !== sha256(buffer)) throw new Error('byte copy mismatch for ' + source);
		}
		files.push({
			source,
			dest: relPath(destAbs),
			bytes,
			sha256: sha256(buffer),
			emittedSha256: emittedSha,
			byteIdentical,
			category,
			basis,
			method,
			confidence,
			note: byteIdentical ? 'byte-identical copy; provenance in this manifest' : 'provenance header added; body proven lossless by sha256',
		});
	}

	const record: ExtensionAdoption = {
		extension,
		generatedAt: NOW,
		sourceDir: relPath(sourceDir),
		files,
		skipped,
		totals: {
			files: files.length,
			bytes: files.reduce((sum, entry) => sum + entry.bytes, 0),
			byteIdentical: files.filter((entry) => entry.byteIdentical).length,
			headed: files.filter((entry) => !entry.byteIdentical).length,
			skipped: skipped.length,
		},
	};
	writeJson(path.join(OUT_ROOT, extension, 'ADOPTED.json'), record);
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
	let totalFiles = 0;
	let totalBytes = 0;
	for (const extension of targets) {
		const record = adoptExtension(extension);
		totalFiles += record.totals.files;
		totalBytes += record.totals.bytes;
		console.log(
			extension +
				': ' +
				String(record.totals.files) +
				' adopted (' +
				String(record.totals.byteIdentical) +
				' byte-identical, ' +
				String(record.totals.headed) +
				' with header), ' +
				String(record.totals.skipped) +
				' skipped',
		);
	}
	console.log('adopt total: ' + String(totalFiles) + ' files, ' + String(totalBytes) + ' bytes');
}

if (import.meta.main) main();
