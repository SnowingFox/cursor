/**
 * Independent verification of the W2 ext-agent extension recovery:
 *
 *   1. reassemble every split artifact from the files on disk and compare
 *      sha256 against the real app/ artifact (not just the recorded hash);
 *   2. re-verify every adopted file (byte-identical or header-stripped) against
 *      the source file in app/;
 *   3. spot-check command ids / configuration keys / schema paths from
 *      package.json against the split parts, recording where each id was found.
 *
 *   bun scripts/recover/extensions/agent/verify.ts
 *
 * Writes recovered/extensions/agent/VERIFY.json and exits non-zero on failure.
 */

import { readFileSync } from 'node:fs';
import path from 'node:path';
import { ROOT, TARGETS, OUT_ROOT, readJson, sha256, stripProvenance, writeJson } from './lib.ts';

interface Spot {
	total: number;
	found: number;
	literal: number;
	composed: number;
	schemaFiles: number;
	byLocation: Record<string, number>;
	missing: string[];
}

interface Result {
	extension: string;
	artifacts: number;
	modules: number;
	reassembly: 'ok' | 'mismatch';
	reassemblyErrors: string[];
	adopted: number;
	adoptErrors: string[];
	spotcheck: Spot;
}

function checkSplit(extension: string): { artifacts: number; modules: number; errors: string[] } {
	const file = path.join(OUT_ROOT, extension, 'MODULES.json');
	let record;
	try {
		record = readJson(file);
	} catch {
		return { artifacts: 0, modules: 0, errors: [] };
	}
	const errors: string[] = [];
	let modules = 0;
	for (const artifact of record.artifacts) {
		modules += artifact.modules.length;
		const chunkDir = path.join(OUT_ROOT, extension, 'bundles', artifact.chunk);
		const read = (name: string): string => stripProvenance(readFileSync(path.join(chunkDir, name), 'utf8'));
		let rebuilt = '';
		if (artifact.format === 'webpack') {
			rebuilt += read('_prelude.js');
			for (const moduleRecord of artifact.modules) rebuilt += read(moduleRecord.file) + moduleRecord.separator;
			rebuilt += read('_footer.js');
		} else {
			for (const moduleRecord of artifact.modules) rebuilt += read(moduleRecord.file) + moduleRecord.separator;
		}
		const actual = sha256(readFileSync(path.join(ROOT, artifact.artifact)));
		const got = sha256(rebuilt);
		if (got !== actual) errors.push(artifact.artifact + ' reassembled ' + got + ' != ' + actual);
		if (actual !== artifact.sha256) errors.push(artifact.artifact + ' recorded sha ' + artifact.sha256 + ' != current ' + actual);
	}
	return { artifacts: record.artifacts.length, modules, errors };
}

function checkAdopted(extension: string): { adopted: number; errors: string[] } {
	const file = path.join(OUT_ROOT, extension, 'ADOPTED.json');
	let record;
	try {
		record = readJson(file);
	} catch {
		return { adopted: 0, errors: [] };
	}
	const errors: string[] = [];
	for (const entry of record.files) {
		const source = readFileSync(path.join(ROOT, entry.source));
		const dest = readFileSync(path.join(ROOT, entry.dest));
		const body = entry.byteIdentical ? dest : Buffer.from(stripProvenance(dest.toString('utf8')), 'utf8');
		if (sha256(body) !== sha256(source)) errors.push(entry.source + ' adopted body differs from source');
	}
	return { adopted: record.files.length, errors };
}

/** Ordered search space: prelude, each module file, footer; label kept for the report. */
function partsOf(extension: string): Array<{ label: string; text: string }> {
	const record = readJson(path.join(OUT_ROOT, extension, 'MODULES.json'));
	const parts: Array<{ label: string; text: string }> = [];
	for (const artifact of record.artifacts) {
		const chunkDir = path.join(OUT_ROOT, extension, 'bundles', artifact.chunk);
		if (artifact.format === 'webpack') {
			parts.push({ label: artifact.chunk + '/_prelude.js', text: stripProvenance(readFileSync(path.join(chunkDir, '_prelude.js'), 'utf8')) });
		}
		for (const moduleRecord of artifact.modules) {
			parts.push({
				label: artifact.chunk + '/' + moduleRecord.file,
				text: stripProvenance(readFileSync(path.join(chunkDir, moduleRecord.file), 'utf8')),
			});
		}
		if (artifact.format === 'webpack') {
			parts.push({ label: artifact.chunk + '/_footer.js', text: stripProvenance(readFileSync(path.join(chunkDir, '_footer.js'), 'utf8')) });
		}
	}
	return parts;
}

function spotcheck(extension: string): Spot {
	const inventory = readJson(path.join(OUT_ROOT, extension, 'INVENTORY.json'));
	const contributes = inventory.package.contributes as Record<string, unknown>;
	const needles: string[] = [];
	const push = (value: unknown): void => {
		if (typeof value === 'string' && value.length > 3) needles.push(value);
	};
	for (const key of ['commandsIds', 'configurationKeys', 'jsonValidationIds']) {
		const value = contributes[key];
		if (Array.isArray(value)) value.forEach(push);
	}
	const empty: Spot = { total: 0, found: 0, literal: 0, composed: 0, schemaFiles: 0, byLocation: {}, missing: [] };
	if (!needles.length) return empty;
	const adoptedRecord = (() => {
		try {
			return readJson(path.join(OUT_ROOT, extension, 'ADOPTED.json'));
		} catch {
			return { files: [] as Array<{ source: string }> };
		}
	})();
	const parts = partsOf(extension);
	const byLocation: Record<string, number> = {};
	const missing: string[] = [];
	let found = 0;
	let literal = 0;
	let composed = 0;
	let schemaFiles = 0;
	for (const needle of needles) {
		// Contribution file paths ("./schemas/x.json") are resolved against the
		// adopted manifest, not against runtime strings.
		if (needle.startsWith('./')) {
			const target = 'app/extensions/' + extension + '/' + needle.slice(2);
			if (adoptedRecord.files.some((entry: { source: string }) => entry.source === target)) {
				schemaFiles += 1;
				found += 1;
				byLocation['adopted-file'] = (byLocation['adopted-file'] ?? 0) + 1;
			} else {
				missing.push(needle);
			}
			continue;
		}
		const hit = parts.find((part) => part.text.includes(needle));
		if (hit) {
			literal += 1;
			found += 1;
			const bucket = hit.label.includes('/_footer.js')
				? 'footer(entry module)'
				: hit.label.includes('/_prelude.js')
					? 'prelude(runtime)'
					: 'module';
			byLocation[bucket] = (byLocation[bucket] ?? 0) + 1;
			continue;
		}
		// Ids composed at runtime, e.g. PREFIX + ".canAttemptGithubLogin".
		const dot = needle.lastIndexOf('.');
		const prefix = dot > 0 ? needle.slice(0, dot) : needle;
		const suffix = dot > 0 ? needle.slice(dot + 1) : '';
		const composedHit = suffix.length > 4 && parts.some((part) => part.text.includes(prefix) && part.text.includes(suffix));
		if (composedHit) {
			composed += 1;
			found += 1;
			byLocation['composed-at-runtime'] = (byLocation['composed-at-runtime'] ?? 0) + 1;
			continue;
		}
		missing.push(needle);
	}
	return { total: needles.length, found, literal, composed, schemaFiles, byLocation, missing };
}

function main(): void {
	const results: Result[] = [];
	let failures = 0;
	for (const extension of TARGETS) {
		const split = checkSplit(extension);
		const adopted = checkAdopted(extension);
		const spot = spotcheck(extension);
		const result: Result = {
			extension,
			artifacts: split.artifacts,
			modules: split.modules,
			reassembly: split.errors.length ? 'mismatch' : 'ok',
			reassemblyErrors: split.errors,
			adopted: adopted.adopted,
			adoptErrors: adopted.errors,
			spotcheck: spot,
		};
		if (split.errors.length || adopted.errors.length) failures += 1;
		results.push(result);
		console.log(
			extension +
				': artifacts ' +
				String(result.artifacts) +
				' modules ' +
				String(result.modules) +
				' reassembly ' +
				result.reassembly +
				' | adopted ' +
				String(result.adopted) +
				' errors ' +
				String(adopted.errors.length) +
				' | ids ' +
				String(spot.found) +
				'/' +
				String(spot.total) +
				' (literal ' +
				String(spot.literal) +
				', composed ' +
				String(spot.composed) +
				', schema-file ' +
				String(spot.schemaFiles) +
				')' +
				(spot.missing.length ? ' missing ' + JSON.stringify(spot.missing.slice(0, 6)) : ''),
		);
	}
	const totals = {
		extensions: results.length,
		artifacts: results.reduce((sum, entry) => sum + entry.artifacts, 0),
		modules: results.reduce((sum, entry) => sum + entry.modules, 0),
		adopted: results.reduce((sum, entry) => sum + entry.adopted, 0),
		idsFound: results.reduce((sum, entry) => sum + entry.spotcheck.found, 0),
		idsTotal: results.reduce((sum, entry) => sum + entry.spotcheck.total, 0),
		idsLiteral: results.reduce((sum, entry) => sum + entry.spotcheck.literal, 0),
		idsComposed: results.reduce((sum, entry) => sum + entry.spotcheck.composed, 0),
		schemaFiles: results.reduce((sum, entry) => sum + entry.spotcheck.schemaFiles, 0),
	};
	writeJson(path.join(OUT_ROOT, 'VERIFY.json'), { generatedAt: new Date().toISOString(), run: 'ext-agent', totals, results });
	console.log('verify totals: ' + JSON.stringify(totals));
	if (failures) {
		console.error('verify FAILED for ' + String(failures) + ' extensions');
		process.exitCode = 1;
	}
}

main();