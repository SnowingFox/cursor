// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/src/backends/windows/conformance-vectors.test-support.ts sha256:2cbce5c23eed5a1ef62c601e26f2e00a2203b3974d47b576bc199474e6f6f974
// module: (adopted file)
// basis: shipped-source confidence: A
// method: adopted-source
// run: ext-p0 2026-11-05T10:09:48.889Z

/**
 * Reader for the shared cross-language conformance vectors in
 * `packages/computer-use/conformance/predicate-vectors.json`.
 *
 * **Test-only.** It reads a file from the repository at call time, so nothing
 * shipped may import it — the extension is webpack-bundled and that path does
 * not exist at runtime. The suffix keeps it out of the vitest `*.test.ts` glob
 * while leaving it type-checked.
 *
 * The vectors exist because the Windows SID rule is implemented by hand on both
 * sides of the Rust/TypeScript boundary and drifted once already. See that
 * directory's README for the format and the rule about changing it.
 */

import { readFileSync } from 'node:fs';
import * as path from 'node:path';

const VECTORS_PATH = path.join(
	__dirname,
	'..',
	'..',
	'..',
	'..',
	'..',
	'..',
	'packages',
	'computer-use',
	'conformance',
	'predicate-vectors.json'
);

export interface ConformanceCase {
	input: string;
	expect: boolean;
	note: string;
}

interface VectorFile {
	version?: unknown;
	suites?: Record<string, { cases?: unknown } | undefined>;
}

/**
 * The raw cases of one suite, for suites that declare their own `caseShape`.
 * The caller narrows each entry; this only guarantees the suite exists and is
 * non-empty, for the same reason `conformanceCases` does.
 */
export function conformanceSuite(suiteId: string): unknown[] {
	let parsed: VectorFile;
	try {
		parsed = JSON.parse(readFileSync(VECTORS_PATH, 'utf8')) as VectorFile;
	} catch (error) {
		throw new Error(
			`could not read conformance vectors at ${VECTORS_PATH}: ${error instanceof Error ? error.message : String(error)
			}`
		);
	}
	if (parsed.version !== 1) {
		throw new Error(
			`conformance vectors are version ${String(parsed.version)}, this reader understands 1`
		);
	}
	const cases = parsed.suites?.[suiteId]?.cases;
	if (!Array.isArray(cases) || cases.length === 0) {
		throw new Error(`conformance suite "${suiteId}" is missing or empty`);
	}
	return cases;
}

/**
 * The cases for one boolean-predicate suite.
 *
 * Throws rather than returning empty for a missing file or suite. A reader
 * that quietly passes when the vectors move is the failure mode that would let
 * this guard rot without anyone noticing.
 */
export function conformanceCases(suiteId: string): ConformanceCase[] {
	return conformanceSuite(suiteId).map((entry, index) => {
		const value = entry as Partial<ConformanceCase>;
		if (
			typeof value.input !== 'string' ||
			typeof value.expect !== 'boolean' ||
			typeof value.note !== 'string'
		) {
			throw new Error(
				`conformance suite "${suiteId}" case ${index} is malformed`
			);
		}
		return { input: value.input, expect: value.expect, note: value.note };
	});
}
