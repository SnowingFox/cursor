/**
 * Shared helpers for W2 ext-agent extension recovery.
 *
 * Writes only under recovered/extensions/agent/** and
 * recovery/mappings/extensions-agent.json; reads app/extensions read-only.
 */

import { createHash } from 'node:crypto';
import { mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import path from 'node:path';

export const ROOT = process.cwd();
export const EXT_DIR = path.join(ROOT, 'app/extensions');
export const OUT_ROOT = path.join(ROOT, 'recovered/extensions/agent');
export const MAPPING_FILE = path.join(ROOT, 'recovery/mappings/extensions-agent.json');
export const RUN_ID = 'ext-agent';
export const NOW = new Date().toISOString();

/** Extensions owned by W2 ext-agent (the cursor-* set left over after W1 ext-p0, plus theme-cursor). */
export const TARGETS = [
	'cursor-always-local',
	'cursor-retrieval',
	'cursor-commits',
	'cursor-socket',
	'cursor-checkout',
	'cursor-explorer',
	'cursor-deeplink',
	'cursor-file-service',
	'cursor-shadow-workspace',
	'cursor-polyfills-remote',
	'cursor-worktree-textmate',
	'theme-cursor',
	// not named in the brief but remaining cursor-* extensions with shipped bundles
	'cursor-agent-worker',
	'cursor-browser-automation',
	'cursor-ndjson-ingest',
	'cursor-resolver-helper',
] as const;

export function sha256(data: Buffer | string): string {
	return createHash('sha256').update(data).digest('hex');
}

export function relPath(abs: string): string {
	return path.relative(ROOT, abs).split(path.sep).join('/');
}

export function walkFiles(dir: string, out: string[] = []): string[] {
	let entries;
	try {
		entries = readdirSync(dir, { withFileTypes: true });
	} catch {
		return out;
	}
	for (const entry of entries) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			if (entry.name === 'node_modules' || entry.name === '.git') continue;
			walkFiles(full, out);
		} else {
			out.push(full);
		}
	}
	return out;
}

export function writeJson(file: string, value: unknown): void {
	mkdirSync(path.dirname(file), { recursive: true });
	writeFileSync(file, JSON.stringify(value, null, 1) + '\n');
}

export function readJson(file: string): any {
	return JSON.parse(readFileSync(file, 'utf8'));
}

export function provenanceHeader(options: {
	artifact: string;
	sha: string;
	module: string;
	range: string;
	basis: string;
	confidence: string;
	method: string;
	run?: string;
}): string {
	return [
		'// @recovered-by cursor-re',
		'// artifact: ' + options.artifact + ' sha256:' + options.sha,
		'// module: ' + options.module + ' range:' + options.range,
		'// basis: ' + options.basis + ' confidence: ' + options.confidence,
		'// method: ' + options.method,
		'// run: ' + (options.run ?? RUN_ID) + ' ' + NOW,
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

/** Cursor id literals found in a module body, used for command/setting spot checks. */
export function cursorLiterals(text: string, limit = 8): string[] {
	const out: string[] = [];
	const seen = new Set<string>();
	const re = /["'\x60](cursor\.[A-Za-z0-9_.-]{2,64})["'\x60]/g;
	let match: RegExpExecArray | null;
	while ((match = re.exec(text)) !== null && out.length < limit) {
		if (seen.has(match[1])) continue;
		seen.add(match[1]);
		out.push(match[1]);
	}
	return out;
}

/** Exported symbol names hinted by the module body (webpack .d() table / exports.X). */
export function exportsHint(text: string, limit = 16): string[] {
	const out: string[] = [];
	const seen = new Set<string>();
	const table = /\.d\(\s*[A-Za-z_$][\w$]*\s*,\s*\{([^}]{0,600})\}/g;
	let match: RegExpExecArray | null;
	while ((match = table.exec(text)) !== null) {
		const names = /(?:([A-Za-z_$][\w$]*)\s*:|"([^"]+)"\s*:)/g;
		let name: RegExpExecArray | null;
		while ((name = names.exec(match[1])) !== null) {
			const value = name[1] ?? name[2];
			if (value && !seen.has(value) && out.length < limit) {
				seen.add(value);
				out.push(value);
			}
		}
	}
	const direct = /\.exports\.([A-Za-z_$][\w$]*)\s*=/g;
	while ((match = direct.exec(text)) !== null && out.length < limit) {
		if (!seen.has(match[1])) {
			seen.add(match[1]);
			out.push(match[1]);
		}
	}
	return out;
}

export function fileCategory(rel: string): string {
	if (rel.endsWith('package.nls.json')) return 'nls';
	if (/^schemas\//.test(rel) || rel.includes('/schemas/')) return 'schema';
	if (rel.includes('/syntaxes/') || rel.includes('/grammars/')) return 'grammar';
	if (rel.includes('/themes/')) return 'theme';
	if (rel === 'package.json') return 'manifest';
	if (/\.schema\.json$/.test(rel)) return 'schema';
	if (/tsconfig.*\.json$/.test(rel)) return 'tsconfig';
	if (/\.(cjs|mjs)$/.test(rel)) return 'config';
	if (/(webpack|pre-compile)[^/]*\.(js|ts)$/.test(rel)) return 'config';
	if (/\.(md|txt)$/.test(rel) && !rel.includes('LICENSE')) return 'doc';
	if (rel.includes('LICENSE')) return 'license';
	if (rel.startsWith('media/') || /\.(css|png|svg|jpg)$/.test(rel)) return 'media';
	if (rel.endsWith('.yml') || rel.endsWith('.yaml')) return 'policy';
	if (rel.endsWith('.gitignore') || rel.endsWith('BUILD.bazel')) return 'build-extra';
	return 'other';
}

/** Summary of package.json contributes, kept small but specific for spot checks. */
export function contributesSummary(contributes: any): Record<string, unknown> {
	const out: Record<string, unknown> = {};
	if (!contributes || typeof contributes !== 'object') return out;
	for (const [key, value] of Object.entries<any>(contributes)) {
		if (Array.isArray(value)) {
			out[key] = value.length;
			if (['commands', 'languages', 'grammars', 'themes', 'jsonValidation', 'views'].includes(key)) {
				const ids = value
					.map((entry: any) =>
						entry && typeof entry === 'object'
							? (entry.command ?? entry.id ?? entry.language ?? entry.scopeName ?? entry.path ?? entry.url ?? null)
							: null,
					)
					.filter((entry: any): entry is string => typeof entry === 'string');
				if (ids.length) out[key + 'Ids'] = ids.slice(0, 200);
			}
		} else if (value && typeof value === 'object') {
			const properties = (value as any).properties;
			if (properties && typeof properties === 'object') {
				const keys = Object.keys(properties);
				out[key] = keys.length;
				out[key + 'Keys'] = keys.slice(0, 200);
			} else {
				out[key] = 'object';
			}
		} else {
			out[key] = value === null ? 'null' : typeof value;
		}
	}
	return out;
}
