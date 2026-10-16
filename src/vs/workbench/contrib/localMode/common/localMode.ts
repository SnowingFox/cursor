/**
 * Local mode: run Cursor's agent harness against user-configured OpenAI /
 * Anthropic compatible endpoints, with no Cursor account or backend.
 *
 * Shared by the agent window (renderer) and the cursor-agent-exec extension
 * host, so this file must stay free of DOM and Node APIs.
 */

export const API_TYPES = ['openai-chat', 'openai-responses', 'anthropic'] as const;
export type ApiType = (typeof API_TYPES)[number];

export const API_TYPE_LABELS: Record<ApiType, string> = {
	'openai-chat': 'OpenAI Chat Completions',
	'openai-responses': 'OpenAI Responses',
	anthropic: 'Anthropic Messages',
};

export const BASE_URL_HINTS: Record<ApiType, string> = {
	'openai-chat': 'https://api.openai.com/v1',
	'openai-responses': 'https://api.openai.com/v1',
	anthropic: 'https://api.anthropic.com',
};

export interface CustomModel {
	id: string;
	enabled?: boolean;
	/** Overrides the context window reported by /models (or the Claude default). */
	contextWindow?: number;
	maxOutputTokens?: number;
	vision?: boolean;
}

export interface CustomProvider {
	name: string;
	/** Picker IDs are `<prefix>/<model>`; the prefix is stripped before a request goes out. */
	prefix: string;
	apiType: ApiType;
	baseUrl: string;
	apiKey: string;
	/** Extra request headers, one `Name: value` per line. */
	headers: string;
	enabled?: boolean;
	models: CustomModel[];
}

/** Application-scoped storage key holding `{ version: 1, providers }`. */
export const STORAGE_KEY = 'cursorLocalMode.customProviders';

/**
 * Attached by the renderer to every local agent / inference request it routes
 * to a custom provider, so the extension host speaks the provider's wire format.
 */
export interface ProviderDescriptor {
	apiType: ApiType;
	contextLengths: Record<string, number>;
	maxOutputTokens: Record<string, number>;
	/** Set on the Settings page's model listing request. */
	listing?: boolean;
}

/** One row of a provider's /models response, as returned to the Settings page. */
export interface ListedModel {
	id: string;
	contextWindow?: number;
	maxOutputTokens?: number;
}

export type Effort = 'none' | 'minimal' | 'low' | 'medium' | 'high' | 'xhigh' | 'max';

export const EFFORT_LABELS: Record<Effort, string> = {
	none: 'Off',
	minimal: 'Minimal',
	low: 'Low',
	medium: 'Medium',
	high: 'High',
	xhigh: 'Extra High',
	max: 'Max',
};

export interface EffortTiers {
	values: Effort[];
	default: Effort;
}
