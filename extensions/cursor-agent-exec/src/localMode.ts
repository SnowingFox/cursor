/**
 * Local mode support inside cursor-agent-exec (extension host).
 *
 * The renderer attaches a `cursorLocalProvider` descriptor to every local agent
 * / local inference request it routes to a custom provider. It is remembered
 * per base URL so that every helper that later resolves the same endpoint
 * (agent loop, smart-mode classifier, chat titles, commit messages) speaks the
 * provider's wire format.
 *
 * Built to app/extensions/cursor-agent-exec/dist/localMode.js and required by
 * the patched dist/main.js (build/patches/inject/agent-exec-host.js).
 */
import { createHash } from 'node:crypto';
import type { ListedModel, ProviderDescriptor } from '../../../src/vs/workbench/contrib/localMode/common/localMode.js';
import type { SubscriptionsRequest } from '../../../src/vs/workbench/contrib/localMode/common/subscriptions.js';
import { ensureSidecar } from './sidecar.js';
import { handle } from './subscriptions.js';

export interface ProviderRequest {
	baseUrl?: unknown;
	apiKey?: string;
	customHeaders?: Record<string, string>;
	cursorLocalProvider?: ProviderDescriptor | null;
}

declare global {
	var __cursorLocalModeProviders: Map<string, ProviderDescriptor> | undefined;
}

// On globalThis so a hot reload of this file (bun run dev) keeps registrations.
globalThis.__cursorLocalModeProviders ??= new Map();
const providers = globalThis.__cursorLocalModeProviders;

function key(baseUrl: unknown): string {
	return typeof baseUrl === 'string' ? baseUrl.trim().replace(/\/+$/u, '') : '';
}

function positive(value: unknown): number | undefined {
	return typeof value === 'number' && Number.isFinite(value) && value > 0 ? Math.floor(value) : undefined;
}

/** Remembers the request's provider; a subscriptions provider's sidecar is started first. */
export async function register(request: ProviderRequest | undefined): Promise<void> {
	const descriptor = request?.cursorLocalProvider;
	if (descriptor === null || typeof descriptor !== 'object' || typeof request?.baseUrl !== 'string') {
		return;
	}
	providers.set(key(request.baseUrl), descriptor);
	if (descriptor.sidecar !== undefined) {
		await ensureSidecar(descriptor.sidecar);
	}
}

/** A Settings page request for the Subscriptions provider (see subscriptions.ts). */
export function subscriptions(request: SubscriptionsRequest): Promise<unknown> {
	return handle(request);
}

export function kind(baseUrl: unknown): ProviderDescriptor | undefined {
	return providers.get(key(baseUrl));
}

export function contextLength(baseUrl: unknown, modelId: string): number | undefined {
	return positive(kind(baseUrl)?.contextLengths?.[modelId]);
}

export function maxOutputTokens(baseUrl: unknown, modelId: string): number | undefined {
	return positive(kind(baseUrl)?.maxOutputTokens?.[modelId]);
}

/**
 * The effort values the picker offered for the model. The runtime's own table
 * only knows gpt-5.x, so without this it drops the effort of every other
 * OpenAI-compatible model (gpt-6-*, grok-*, a custom provider's models).
 */
export function effortValues(baseUrl: unknown, modelId: string): string[] | undefined {
	const values = kind(baseUrl)?.efforts?.[modelId];
	return Array.isArray(values) && values.length > 0 ? values : undefined;
}

type Fetch = (input: unknown, init?: { body?: unknown } & Record<string, unknown>) => Promise<unknown>;

/** The effort a turn asks for, read the way the runtime reads it (off: undefined). */
export function requestedEffort(modelParameters: unknown): string | undefined {
	const p = Array.isArray(modelParameters)
		? modelParameters.find((x) => ['reasoning', 'effort', 'thought_level'].includes(x?.id))
		: undefined;
	return typeof p?.value === 'string' && p.value !== '' && p.value !== 'none' ? p.value : undefined;
}

/**
 * Wraps the Responses fetch of a subscriptions model so that, when thinking is
 * on, it asks for reasoning summaries: what the transcript shows as thinking.
 * The runtime's own wrapper (called next) sets the effort. Only for the
 * sidecar: the OpenAI API rejects summaries for unverified organizations.
 */
export function reasoningFetch(baseUrl: unknown, modelId: string, modelParameters: unknown, fetch: Fetch): Fetch {
	const effort = requestedEffort(modelParameters);
	if (
		kind(baseUrl)?.sidecar === undefined ||
		effort === undefined ||
		!effortValues(baseUrl, modelId)?.includes(effort)
	) {
		return fetch;
	}
	return (input, init) => fetch(input, withSummary(init));
}

export function withSummary<T extends { body?: unknown }>(init: T | undefined): T | undefined {
	if (typeof init?.body !== 'string') {
		return init;
	}
	try {
		const body = JSON.parse(init.body);
		if (body === null || typeof body !== 'object' || Array.isArray(body)) {
			return init;
		}
		const reasoning = body.reasoning !== null && typeof body.reasoning === 'object' ? body.reasoning : {};
		return { ...init, body: JSON.stringify({ ...body, reasoning: { summary: 'auto', ...reasoning } }) };
	} catch {
		return init;
	}
}

/** OpenAI's limit on tool call ids (`call_id`, `tool_call_id`). */
const TOOL_ID_LIMIT = 64;
const ANTHROPIC_TOOL_ID = /^[a-zA-Z0-9_-]+$/u;

/**
 * A tool call id this provider accepts. A chat keeps the ids of every model it
 * ran on, and Codex call ids (Subscriptions) run past 64 characters: CLIProxyAPI
 * shortens them for Codex, but a direct endpoint rejects the next turn ("Invalid
 * 'input[n].call_id': string too long"). Overlong ids, and ids Anthropic's
 * pattern rejects, become a prefix plus a hash, the same in every request, so
 * calls and their results still pair up.
 */
export function shortToolId(id: string, anthropic: boolean): string {
	if (id.length <= TOOL_ID_LIMIT && (!anthropic || ANTHROPIC_TOOL_ID.test(id))) {
		return id;
	}
	const hash = createHash('sha256').update(id).digest('hex').slice(0, 16);
	return `${id.replace(/[^a-zA-Z0-9_-]/gu, '_').slice(0, TOOL_ID_LIMIT - hash.length - 1)}_${hash}`;
}

/** Rewrites the tool call ids of a Responses, Chat Completions or Messages body; undefined if none changed. */
export function shortenToolIds(body: unknown): unknown {
	if (body === null || typeof body !== 'object' || Array.isArray(body)) {
		return undefined;
	}
	const b = body as { input?: unknown; messages?: unknown };
	let changed = false;
	const fix = (id: unknown, anthropic: boolean) => {
		if (typeof id !== 'string') {
			return id;
		}
		const short = shortToolId(id, anthropic);
		changed ||= short !== id;
		return short;
	};
	const input = Array.isArray(b.input)
		? b.input.map((item) =>
				item !== null && typeof item === 'object' && 'call_id' in item
					? { ...item, call_id: fix(item.call_id, false) }
					: item,
			)
		: b.input;
	const messages = Array.isArray(b.messages)
		? b.messages.map((m) => {
				if (m === null || typeof m !== 'object') {
					return m;
				}
				const next: Record<string, any> = { ...m };
				if (Array.isArray(next.tool_calls)) {
					next.tool_calls = next.tool_calls.map((c: any) =>
						c !== null && typeof c === 'object' ? { ...c, id: fix(c.id, false) } : c,
					);
				}
				if ('tool_call_id' in next) {
					next.tool_call_id = fix(next.tool_call_id, false);
				}
				if (Array.isArray(next.content)) {
					next.content = next.content.map((part: any) =>
						part?.type === 'tool_use'
							? { ...part, id: fix(part.id, true) }
							: part?.type === 'tool_result'
								? { ...part, tool_use_id: fix(part.tool_use_id, true) }
								: part,
					);
				}
				return next;
			})
		: b.messages;
	return changed
		? { ...b, ...(input === undefined ? {} : { input }), ...(messages === undefined ? {} : { messages }) }
		: undefined;
}

/** Wraps a custom provider's fetch with shortenToolIds. The sidecar does its own. */
export function toolIdFetch(baseUrl: unknown, fetch: Fetch): Fetch {
	const provider = kind(baseUrl);
	if (provider === undefined || provider.sidecar !== undefined) {
		return fetch;
	}
	return (input, init) => {
		if (typeof init?.body !== 'string') {
			return fetch(input, init);
		}
		let body: unknown;
		try {
			body = shortenToolIds(JSON.parse(init.body));
		} catch {
			body = undefined;
		}
		return fetch(input, body === undefined ? init : { ...init, body: JSON.stringify(body) });
	};
}

/** Parses OpenAI, Anthropic and OpenRouter-style /models rows. */
export function parseModelList(body: unknown): ListedModel[] {
	const b = body as { data?: unknown; models?: unknown } | unknown[] | null;
	const rows: unknown[] = Array.isArray((b as { data?: unknown })?.data)
		? (b as { data: unknown[] }).data
		: Array.isArray((b as { models?: unknown })?.models)
			? (b as { models: unknown[] }).models
			: Array.isArray(b)
				? b
				: [];
	return rows.flatMap((row): ListedModel[] => {
		const r = row as Record<string, any>;
		const id = typeof row === 'string' ? row : (r?.id ?? r?.name);
		if (typeof id !== 'string' || id.trim() === '') {
			return [];
		}
		return [
			{
				id: id.trim(),
				contextWindow:
					positive(r?.max_input_tokens) ??
					positive(r?.context_length) ??
					positive(r?.context_window) ??
					positive(r?.capabilities?.context_length) ??
					positive(r?.top_provider?.context_length),
				maxOutputTokens:
					positive(r?.max_tokens) ?? positive(r?.max_output_tokens) ?? positive(r?.capabilities?.max_output_tokens),
			},
		];
	});
}

/** GET <baseUrl>/models for the Settings page, with the provider's auth scheme. */
export async function listModels(request: ProviderRequest): Promise<{ cursorLocalModels: ListedModel[] }> {
	const anthropic = request.cursorLocalProvider?.apiType === 'anthropic';
	const headers: Record<string, string> = { accept: 'application/json', ...(request.customHeaders ?? {}) };
	if (request.apiKey) {
		if (anthropic) {
			headers['x-api-key'] = request.apiKey;
		} else {
			headers.authorization = `Bearer ${request.apiKey}`;
		}
	}
	if (anthropic) {
		headers['anthropic-version'] ??= '2023-06-01';
	}
	const url = `${key(request.baseUrl)}/models${anthropic ? '?limit=1000' : ''}`;
	let response: Response;
	try {
		response = await fetch(url, { headers, signal: AbortSignal.timeout(20_000) });
	} catch (e) {
		throw new Error(`Could not reach ${url}: ${describeFetchError(e)}`);
	}
	const text = await response.text();
	if (!response.ok) {
		throw new Error(`GET ${url} returned HTTP ${response.status}: ${text.slice(0, 300)}`);
	}
	let body: unknown;
	try {
		body = JSON.parse(text);
	} catch {
		throw new Error(`GET ${url} did not return JSON`);
	}
	return { cursorLocalModels: parseModelList(body) };
}

const NETWORK_ERRORS: Record<string, string> = {
	ECONNREFUSED: 'connection refused. Is the server running?',
	ENOTFOUND: 'host not found.',
	EAI_AGAIN: 'DNS lookup failed. Check the network.',
	ECONNRESET: 'the connection was reset.',
	ETIMEDOUT: 'the connection timed out.',
	UND_ERR_CONNECT_TIMEOUT: 'the connection timed out.',
};

/**
 * Node's fetch throws "fetch failed" and hides the reason in `cause`, often an
 * AggregateError with an empty message (one attempt per resolved address).
 */
export function describeFetchError(e: unknown): string {
	if (!(e instanceof Error)) {
		return String(e);
	}
	if (e.name === 'TimeoutError') {
		return 'no response within 20 seconds.';
	}
	const cause = e.cause as (Error & { code?: string; errors?: (Error & { code?: string })[] }) | undefined;
	const code = cause?.code ?? cause?.errors?.find((x) => x.code)?.code;
	if (code !== undefined) {
		return NETWORK_ERRORS[code] ?? (cause?.message || code);
	}
	return cause?.message || e.message;
}
