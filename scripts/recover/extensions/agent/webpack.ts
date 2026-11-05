// Local copy of scripts/recover/extensions/webpack.ts (ext-p0 / W1-4), unchanged.
// W2 ext-agent keeps its own copy so it never depends on another worker's file
// and so the copy can be audited against the original by sha256.
// source-sha256: 6b63d76820a970b78cf2cbb16bb4f4094648e8f5d639367cdbaaf151cbc9e7db

/**
 * Custom parser for webpack module maps shipped in Cursor extension bundles.
 *
 * The bundles are pretty-printed by the same toolchain, so each module entry
 * after the first starts on its own line as:
 *
 *     }, 337: (e, t, r) => {
 *
 * and the map closes as "  } }, __webpack_module_cache__ = {};" (entry point)
 * or "} };" (async chunk). Webpack 5 ESM maps may use quoted path keys
 * ("\"./src/agent/foo.ts\": (e, t, r) => {") which preserve the original path.
 *
 * Rather than building an AST for 16 MB artifacts, we locate entry boundaries
 * by line shape, slice entries byte-for-byte, and cross-check the result by
 * reassembling the artifact from the emitted parts (verify.ts).
 *
 * This is a line-shape parser, not a JavaScript parser: it intentionally
 * rejects artifacts whose entries are not formatted one-per-boundary-line.
 */

export interface WebpackModuleEntry {
	/** Module key as written: numeric id or quoted path. */
	key: string;
	keyType: 'number' | 'string';
	/** Character offset of the key in the artifact. */
	start: number;
	/** Character offset just past the entry value (after its closing brace). */
	end: number;
	/** Text between this entry and the next (", " and similar); "" for the last. */
	separator: string;
	/** Exact source text of the entry, from key through closing brace. */
	text: string;
}

export interface WebpackModuleMap {
	/** Offset of the "{" that opens the module map. */
	open: number;
	/** Offset of the matching "}". */
	close: number;
	entries: WebpackModuleEntry[];
	/** Assignment target before the "{", for tracing only. */
	container: string;
	/** Set when the parser had to fall back to a lexical scan. */
	notes: string[];
}

const CONTAINERS = [
	/__webpack_modules__\s*=\s*\{/g,
	/__webpack_esm_modules__\s*=\s*\{/g,
	/exports\.modules\s*=\s*\{/g,
	/\bmodules\s*=\s*\{/g,
];

const BOUNDARY = /^( {0,2})\}, ((?:\d+)|'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"): (?:\(|function)/gm;
const FIRST_ENTRY = /^\s*((?:\d+)|'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*")\s*:\s*(?:\(|function)/;
const CLOSE_LINE = /^( {0,2})\}( \}|;)/gm;

function unquote(raw: string): string {
	return raw.startsWith("'") || raw.startsWith('"') ? raw.slice(1, -1) : raw;
}

function boundaryMatches(text: string, from: number): Array<{ key: string; lineStart: number; indent: number; keyStart: number }> {
	const out: Array<{ key: string; lineStart: number; indent: number; keyStart: number }> = [];
	BOUNDARY.lastIndex = from;
	let match: RegExpExecArray | null;
	while ((match = BOUNDARY.exec(text)) !== null) {
		const indent = match[1].length;
		out.push({
			key: unquote(match[2]),
			lineStart: match.index,
			indent,
			keyStart: match.index + indent + 3,
		});
	}
	return out;
}

function findClose(text: string, from: number): { close: number; bodyEnd: number } | null {
	CLOSE_LINE.lastIndex = from;
	const match = CLOSE_LINE.exec(text);
	if (!match) return null;
	const bodyEnd = match.index + match[1].length + 1;
	if (match[2] === ';') return { close: bodyEnd, bodyEnd };
	// "} }" - the second brace closes the module map.
	const close = text.indexOf('}', bodyEnd);
	if (close === -1) return null;
	return { close, bodyEnd };
}

function looksLikeMap(text: string, open: number): { firstKey: string; firstStart: number } | null {
	const window = text.slice(open + 1, open + 1 + 200);
	const match = FIRST_ENTRY.exec(window);
	if (!match) return null;
	return { firstKey: unquote(match[1]), firstStart: open + 1 + (match.index ?? 0) + window.indexOf(match[1]) };
}

/** Parse a webpack module map starting at the given "{" offset. */
export function parseModuleMapAt(text: string, open: number): WebpackModuleMap | null {
	const first = looksLikeMap(text, open);
	if (!first) return null;
	const boundaries = boundaryMatches(text, first.firstStart + 1);
	const starts = [first.firstStart, ...boundaries.map((b) => b.keyStart)];
	const keys = [first.firstKey, ...boundaries.map((b) => b.key)];
	const ends: number[] = [];
	for (let index = 0; index < boundaries.length; index += 1) {
		ends.push(boundaries[index].lineStart + boundaries[index].indent + 1);
	}
	const lastStart = starts[starts.length - 1];
	const closeInfo = findClose(text, lastStart);
	if (!closeInfo) return null;
	ends.push(closeInfo.bodyEnd);
	if (closeInfo.close <= closeInfo.bodyEnd) return null;

	const entries: WebpackModuleEntry[] = [];
	for (let index = 0; index < starts.length; index += 1) {
		const start = starts[index];
		const end = ends[index];
		if (!(start >= open + 1 && end > start && end <= closeInfo.close)) return null;
		const key = keys[index];
		entries.push({
			key,
			keyType: /^\d+$/.test(key) ? 'number' : 'string',
			start,
			end,
			separator: index + 1 < starts.length ? text.slice(end, starts[index + 1]) : text.slice(end, closeInfo.close),
			text: text.slice(start, end),
		});
	}
	// Every entry must look like "key: (..." or "key: function".
	for (const entry of entries) {
		if (!/^(?:\d+|'[^']*'|"[^"]*")\s*:\s*(?:\(|function\b)/.test(entry.text)) return null;
	}
	// Separators may only be punctuation/whitespace; anything else means the
	// line-shape assumption broke (e.g. a regex spoofed a boundary).
	for (const entry of entries) {
		if (!/^[\s,]*$/.test(entry.separator)) return null;
	}
	// Duplicate ids indicate a false boundary inside a module body.
	const seen = new Set<string>();
	for (const entry of entries) {
		if (seen.has(entry.key)) return null;
		seen.add(entry.key);
	}
	const before = text.slice(Math.max(0, open - 200), open);
	const containerMatch = /([\w$.]+)\s*=\s*$/.exec(before);
	return {
		open,
		close: closeInfo.close,
		entries,
		container: containerMatch ? containerMatch[1] : '',
		notes: [],
	};
}

/** Locate the webpack module map of an artifact, if any. */
export function findModuleMap(text: string): WebpackModuleMap | null {
	const candidates = new Set<number>();
	for (const pattern of CONTAINERS) {
		pattern.lastIndex = 0;
		let match: RegExpExecArray | null;
		while ((match = pattern.exec(text)) !== null) candidates.add(match.index + match[0].length - 1);
	}
	// Generic fallback: any object literal whose first entry is a module function.
	const generic = /=\s*\{/g;
	let match: RegExpExecArray | null;
	while ((match = generic.exec(text)) !== null) {
		const open = match.index + match[0].length - 1;
		candidates.add(open);
	}
	let best: WebpackModuleMap | null = null;
	for (const open of candidates) {
		const parsed = parseModuleMapAt(text, open);
		if (parsed && (!best || parsed.entries.length > best.entries.length)) best = parsed;
	}
	return best;
}

/** Chunk id of an async chunk ("exports.id = 709") or null. */
export function chunkIdOf(text: string): number | null {
	const match = /(?:^|\n)\s*exports\.id\s*=\s*(\d+)/.exec(text);
	return match ? Number(match[1]) : null;
}

/** Sanitize a module key into a file name that keeps the original path visible. */
export function moduleFileName(key: string): string {
	if (/^\d+$/.test(key)) return key + '.js';
	const cleaned = key.replace(/^\.\//, '').replace(/[^A-Za-z0-9._-]+/g, '__');
	return 'path__' + cleaned.replace(/^__+/, '');
}