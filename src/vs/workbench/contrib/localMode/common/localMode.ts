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

/** Short names for the API-format switch. */
export const API_TYPE_SHORT_LABELS: Record<ApiType, string> = {
	anthropic: 'Anthropic',
	'openai-chat': 'OpenAI Chat',
	'openai-responses': 'OpenAI Responses',
};

/** Starting points offered by "Add provider". */
export interface ProviderPreset {
	id: string;
	name: string;
	description: string;
	prefix: string;
	apiType: ApiType;
	baseUrl: string;
}

export const PROVIDER_PRESETS: ProviderPreset[] = [
	{
		id: 'anthropic',
		name: 'Anthropic',
		description: 'Claude via the Messages API',
		prefix: 'anthropic',
		apiType: 'anthropic',
		baseUrl: 'https://api.anthropic.com',
	},
	{
		id: 'openai',
		name: 'OpenAI',
		description: 'GPT via the Responses API',
		prefix: 'openai',
		apiType: 'openai-responses',
		baseUrl: 'https://api.openai.com/v1',
	},
	{
		id: 'openrouter',
		name: 'OpenRouter',
		description: 'Hundreds of models, one key',
		prefix: 'openrouter',
		apiType: 'openai-chat',
		baseUrl: 'https://openrouter.ai/api/v1',
	},
	{
		id: 'ollama',
		name: 'Ollama',
		description: 'Local models on port 11434',
		prefix: 'ollama',
		apiType: 'openai-chat',
		baseUrl: 'http://localhost:11434/v1',
	},
	{
		id: 'lmstudio',
		name: 'LM Studio',
		description: 'Local server on port 1234',
		prefix: 'lmstudio',
		apiType: 'openai-chat',
		baseUrl: 'http://localhost:1234/v1',
	},
	{
		id: 'custom',
		name: 'Custom',
		description: 'Any compatible endpoint or gateway',
		prefix: 'custom-provider',
		apiType: 'openai-chat',
		baseUrl: '',
	},
];

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
