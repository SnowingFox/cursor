import {
	API_TYPES,
	type CustomModel,
	type CustomProvider,
	type EffortTiers,
	type ListedModel,
	type ProviderDescriptor,
	type ProviderPreset,
} from './localMode.js';

export interface EnabledModel {
	provider: CustomProvider;
	model: CustomModel;
	/** Picker ID, `<prefix>/<model>`. */
	id: string;
}

export interface Endpoint {
	baseUrl: string;
	apiKey: string | undefined;
	headers: Record<string, string>;
}

export function parseProviders(json: string | undefined): CustomProvider[] {
	try {
		const value = JSON.parse(json ?? 'null');
		return Array.isArray(value?.providers)
			? value.providers.filter((p: unknown) => p !== null && typeof p === 'object')
			: [];
	} catch {
		return [];
	}
}

export function serializeProviders(providers: CustomProvider[]): string {
	return JSON.stringify({ version: 1, providers });
}

export function pickerModelId(provider: CustomProvider, model: CustomModel): string {
	const prefix = String(provider.prefix ?? '').trim();
	return prefix ? `${prefix}/${model.id}` : model.id;
}

export function enabledModels(providers: CustomProvider[]): EnabledModel[] {
	return providers.flatMap((provider) =>
		provider.enabled === false
			? []
			: (provider.models ?? [])
					.filter((m) => m?.id && m.enabled !== false)
					.map((model) => ({ provider, model, id: pickerModelId(provider, model) })),
	);
}

export function resolveModel(providers: CustomProvider[], modelId: unknown): EnabledModel | undefined {
	const id = typeof modelId === 'string' ? modelId.trim() : '';
	return id ? enabledModels(providers).find((e) => e.id === id) : undefined;
}

const CLAUDE_200K = /^claude-(?:3|(?:opus|sonnet|haiku)-4(?:-[0-5])?(?:-\d{8})?$|(?:opus|sonnet|haiku)-4-[0-5]-)/i;

/**
 * Explicit setting, else what /models reported, else 1M for current Claude
 * models (200K for the Claude 3 / early Claude 4 generations).
 */
export function contextWindow(model: Pick<CustomModel, 'id' | 'contextWindow'>): number | undefined {
	const n = Number(model.contextWindow);
	if (Number.isFinite(n) && n > 0) {
		return Math.floor(n);
	}
	if (!/^claude-/i.test(model.id)) {
		return undefined;
	}
	return CLAUDE_200K.test(model.id) ? 200_000 : 1_000_000;
}

export function maxOutputTokens(model: Pick<CustomModel, 'maxOutputTokens'>): number | undefined {
	const n = Number(model.maxOutputTokens);
	return Number.isFinite(n) && n > 0 ? Math.floor(n) : undefined;
}

/**
 * Normalizes the user's base URL the way the agent runtime expects it:
 * Anthropic endpoints end in `/vN` (like ANTHROPIC_BASE_URL plus `/v1`),
 * OpenAI endpoints without the `/chat/completions` or `/responses` suffix.
 */
export function endpoint(provider: Pick<CustomProvider, 'apiType' | 'baseUrl' | 'apiKey' | 'headers'>): Endpoint {
	let baseUrl = String(provider.baseUrl ?? '')
		.trim()
		.replace(/\/+$/u, '');
	if (provider.apiType === 'anthropic') {
		baseUrl = baseUrl.replace(/\/messages$/u, '');
		if (!/\/v\d+$/u.test(baseUrl)) {
			baseUrl += '/v1';
		}
	} else {
		baseUrl = baseUrl.replace(/\/(?:chat\/completions|responses)$/u, '');
	}
	const headers: Record<string, string> = {};
	for (const line of String(provider.headers ?? '').split(/\r?\n/u)) {
		const i = line.indexOf(':');
		if (i > 0) {
			headers[line.slice(0, i).trim()] = line.slice(i + 1).trim();
		}
	}
	return { baseUrl, apiKey: String(provider.apiKey ?? '').trim() || undefined, headers };
}

export function descriptor(provider: CustomProvider): ProviderDescriptor {
	const contextLengths: Record<string, number> = {};
	const maxOutput: Record<string, number> = {};
	for (const m of provider.models ?? []) {
		if (!m?.id) {
			continue;
		}
		const context = contextWindow(m);
		const output = maxOutputTokens(m);
		if (context !== undefined) {
			contextLengths[m.id] = context;
		}
		if (output !== undefined) {
			maxOutput[m.id] = output;
		}
	}
	return {
		apiType: API_TYPES.includes(provider.apiType) ? provider.apiType : 'openai-chat',
		contextLengths,
		maxOutputTokens: maxOutput,
	};
}

/**
 * Reasoning-effort tiers the local runtime applies per model (mirrors the model
 * table in cursor-agent-exec): Anthropic models take `output_config.effort`
 * (adaptive thinking), OpenAI-compatible ones `reasoning_effort`.
 */
export function effortTiers(provider: Pick<CustomProvider, 'apiType'>, modelId: string): EffortTiers | undefined {
	const id = String(modelId).trim().toLowerCase().replace(/^.*\//u, '').replace(/@.*$/u, '');
	if (provider.apiType === 'anthropic') {
		if (/^claude-(?:opus|haiku)-5[-.]5$/u.test(id)) {
			return { values: ['low', 'medium', 'high', 'xhigh', 'max'], default: 'medium' };
		}
		if (/^claude-(?:opus-5|opus-4[-.][78]|sonnet-5(?:[-.]5)?)$/u.test(id)) {
			return { values: ['low', 'medium', 'high', 'xhigh', 'max'], default: 'high' };
		}
		if (/^claude-(?:opus-4[-.][56]|sonnet-4[-.]6)$/u.test(id)) {
			return { values: ['low', 'medium', 'high', 'max'], default: 'high' };
		}
		return undefined;
	}
	if (/^grok-4[.-](?:3|[56](?:-(?:batch|build|nocomp))?)$|^grok-build-latest$/u.test(id)) {
		return { values: ['minimal', 'low', 'medium', 'high', 'xhigh'], default: 'high' };
	}
	if (/^grok-4[.-]7$|^gpt-5[.-]6-(?:luna|sol|terra)$|^gpt-5(?:\.\d+)?$/u.test(id)) {
		return { values: ['low', 'medium', 'high', 'xhigh'], default: 'medium' };
	}
	return undefined;
}

export function newProvider(existing: CustomProvider[], preset?: ProviderPreset): CustomProvider {
	const base = preset?.prefix ?? 'custom-provider';
	const used = new Set(existing.map((p) => p.prefix));
	let n = existing.length + 1;
	let prefix = base;
	while (used.has(prefix)) {
		prefix = `${base}-${++n}`;
	}
	return {
		name: preset === undefined || preset.id === 'custom' ? prefix : preset.name,
		prefix,
		apiType: preset?.apiType ?? 'openai-chat',
		baseUrl: preset?.baseUrl ?? '',
		apiKey: '',
		headers: '',
		models: [],
	};
}

/** Returns a user-facing error for the first invalid provider, if any. */
export function validateProviders(providers: CustomProvider[]): string | undefined {
	const prefixes = new Set<string>();
	for (const p of providers) {
		const label = p.name?.trim() || '(unnamed provider)';
		if (!p.name?.trim()) {
			return 'Every provider needs a name.';
		}
		if (!/^[A-Za-z0-9][A-Za-z0-9._-]*$/u.test(p.prefix ?? '')) {
			return `${label}: the prefix may only contain letters, digits, ".", "_" and "-".`;
		}
		if (prefixes.has(p.prefix)) {
			return `Prefix "${p.prefix}" is used by more than one provider.`;
		}
		prefixes.add(p.prefix);
		let url: URL | undefined;
		try {
			url = new URL(endpoint(p).baseUrl);
		} catch {}
		if (url === undefined || (url.protocol !== 'http:' && url.protocol !== 'https:')) {
			return `${label}: base URL must be an http(s) URL.`;
		}
		const ids = new Set<string>();
		for (const m of p.models ?? []) {
			if (ids.has(m.id)) {
				return `${label}: model "${m.id}" is listed twice.`;
			}
			ids.add(m.id);
		}
	}
	return undefined;
}

/** Trims the free-text fields before a save. */
export function cleanProviders(providers: CustomProvider[]): CustomProvider[] {
	return providers.map((p) => ({
		...p,
		name: p.name.trim(),
		prefix: (p.prefix ?? '').trim(),
		baseUrl: p.baseUrl.trim(),
		apiKey: p.apiKey.trim(),
	}));
}

/**
 * Merges a fresh /models listing into a provider's model list: new models are
 * added switched off, existing ones keep the user's settings and pick up the
 * reported limits unless the user overrode the context window.
 */
export function mergeListedModels(current: CustomModel[], listed: ListedModel[]): CustomModel[] {
	const merged = [...current];
	const known = new Map(current.map((m) => [m.id, m]));
	for (const m of listed) {
		const fetched: Partial<CustomModel> = {
			...(m.contextWindow === undefined ? {} : { contextWindow: m.contextWindow }),
			...(m.maxOutputTokens === undefined ? {} : { maxOutputTokens: m.maxOutputTokens }),
		};
		const existing = known.get(m.id);
		if (existing === undefined) {
			merged.push({ id: m.id, enabled: false, ...fetched });
		} else {
			merged[merged.indexOf(existing)] = {
				...fetched,
				...existing,
				...(existing.contextWindow === undefined ? {} : { contextWindow: existing.contextWindow }),
			};
		}
	}
	return merged;
}
