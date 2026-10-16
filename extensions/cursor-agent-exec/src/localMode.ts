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
import type { ListedModel, ProviderDescriptor } from '../../../src/vs/workbench/contrib/localMode/common/localMode.js';

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

export function register(request: ProviderRequest | undefined): void {
	const descriptor = request?.cursorLocalProvider;
	if (descriptor === null || typeof descriptor !== 'object' || typeof request?.baseUrl !== 'string') {
		return;
	}
	providers.set(key(request.baseUrl), descriptor);
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
		const cause = e instanceof Error ? ((e.cause as Error | undefined)?.message ?? e.message) : String(e);
		throw new Error(`Could not reach ${url}: ${cause}`);
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
