import { describe, expect, it } from 'vitest';
import type { CustomProvider } from '../../common/localMode.js';
import {
	contextWindow,
	descriptor,
	effortTiers,
	enabledModels,
	endpoint,
	mergeListedModels,
	newProvider,
	parseProviders,
	resolveModel,
	serializeProviders,
	validateProviders,
} from '../../common/providers.js';

function provider(overrides: Partial<CustomProvider> = {}): CustomProvider {
	return {
		name: 'Gateway',
		prefix: 'gw',
		apiType: 'anthropic',
		baseUrl: 'https://gateway.example.com',
		apiKey: 'key',
		headers: '',
		models: [{ id: 'claude-opus-5', enabled: true }],
		...overrides,
	};
}

describe('storage format', () => {
	it('round-trips and tolerates garbage', () => {
		const providers = [provider()];
		expect(parseProviders(serializeProviders(providers))).toEqual(providers);
		expect(parseProviders(undefined)).toEqual([]);
		expect(parseProviders('{not json')).toEqual([]);
		expect(parseProviders('{"providers":[null,1,{"name":"x"}]}')).toEqual([{ name: 'x' }]);
	});
});

describe('enabledModels / resolveModel', () => {
	it('prefixes model ids and skips disabled models and providers', () => {
		const providers = [
			provider({
				models: [
					{ id: 'a', enabled: true },
					{ id: 'b', enabled: false },
				],
			}),
			provider({ prefix: 'off', enabled: false, models: [{ id: 'c' }] }),
		];
		expect(enabledModels(providers).map((e) => e.id)).toEqual(['gw/a']);
		expect(resolveModel(providers, ' gw/a ')?.model.id).toBe('a');
		expect(resolveModel(providers, 'gw/b')).toBeUndefined();
		expect(resolveModel(providers, 42)).toBeUndefined();
	});
});

describe('contextWindow', () => {
	it('prefers explicit values', () => {
		expect(contextWindow({ id: 'claude-opus-5', contextWindow: 123_456.7 })).toBe(123_456);
	});

	it('defaults current Claude models to 1M and older ones to 200K', () => {
		expect(contextWindow({ id: 'claude-opus-5-5' })).toBe(1_000_000);
		expect(contextWindow({ id: 'claude-sonnet-5' })).toBe(1_000_000);
		expect(contextWindow({ id: 'claude-3-5-sonnet-20241022' })).toBe(200_000);
		expect(contextWindow({ id: 'claude-sonnet-4-5' })).toBe(200_000);
		expect(contextWindow({ id: 'claude-opus-4-1-20250805' })).toBe(200_000);
	});

	it('leaves other models to the runtime', () => {
		expect(contextWindow({ id: 'gpt-5' })).toBeUndefined();
	});
});

describe('endpoint', () => {
	it('normalizes Anthropic base URLs like ANTHROPIC_BASE_URL', () => {
		expect(endpoint(provider({ baseUrl: 'https://a.example.com/' })).baseUrl).toBe('https://a.example.com/v1');
		expect(endpoint(provider({ baseUrl: 'https://a.example.com/v1/messages' })).baseUrl).toBe(
			'https://a.example.com/v1',
		);
		expect(endpoint(provider({ baseUrl: 'https://a.example.com/v2' })).baseUrl).toBe('https://a.example.com/v2');
	});

	it('strips OpenAI operation paths', () => {
		const p = provider({ apiType: 'openai-chat', baseUrl: 'https://o.example.com/v1/chat/completions' });
		expect(endpoint(p).baseUrl).toBe('https://o.example.com/v1');
		expect(endpoint({ ...p, apiType: 'openai-responses', baseUrl: 'https://o.example.com/v1/responses' }).baseUrl).toBe(
			'https://o.example.com/v1',
		);
	});

	it('parses extra headers and blank keys', () => {
		const e = endpoint(provider({ apiKey: '  ', headers: 'X-Team: core\r\nbad line\nX-Url: a:b' }));
		expect(e.apiKey).toBeUndefined();
		expect(e.headers).toEqual({ 'X-Team': 'core', 'X-Url': 'a:b' });
	});
});

describe('descriptor', () => {
	it('carries per-model limits and falls back to openai-chat', () => {
		const d = descriptor(
			provider({
				apiType: 'bogus' as never,
				models: [{ id: 'claude-opus-5', maxOutputTokens: 64_000 }, { id: 'gpt-5' }],
			}),
		);
		expect(d).toEqual({
			apiType: 'openai-chat',
			contextLengths: { 'claude-opus-5': 1_000_000 },
			maxOutputTokens: { 'claude-opus-5': 64_000 },
		});
	});
});

describe('effortTiers', () => {
	it('mirrors the agent runtime table', () => {
		const anthropic = { apiType: 'anthropic' } as const;
		expect(effortTiers(anthropic, 'gw/claude-opus-5-5')?.default).toBe('medium');
		expect(effortTiers(anthropic, 'claude-opus-5')).toEqual({
			values: ['low', 'medium', 'high', 'xhigh', 'max'],
			default: 'high',
		});
		expect(effortTiers(anthropic, 'claude-sonnet-4-6')?.values).toEqual(['low', 'medium', 'high', 'max']);
		expect(effortTiers(anthropic, 'claude-3-haiku')).toBeUndefined();
		expect(effortTiers({ apiType: 'openai-chat' }, 'gpt-5.2')?.default).toBe('medium');
		expect(effortTiers({ apiType: 'openai-chat' }, 'claude-opus-5')).toBeUndefined();
	});
});

describe('newProvider / validateProviders', () => {
	it('picks a free prefix', () => {
		expect(newProvider([]).prefix).toBe('custom-provider');
		expect(newProvider([provider({ prefix: 'custom-provider' })]).prefix).toBe('custom-provider-3');
	});

	it('reports the first problem', () => {
		expect(validateProviders([provider()])).toBeUndefined();
		expect(validateProviders([provider({ name: ' ' })])).toBe('Every provider needs a name.');
		expect(validateProviders([provider({ prefix: 'has space' })])).toMatch(/prefix may only contain/);
		expect(validateProviders([provider(), provider({ name: 'Other' })])).toMatch(/used by more than one/);
		expect(validateProviders([provider({ baseUrl: 'ftp://x' })])).toMatch(/http\(s\) URL/);
		expect(validateProviders([provider({ models: [{ id: 'a' }, { id: 'a' }] })])).toMatch(/listed twice/);
	});
});

describe('mergeListedModels', () => {
	it('adds new models switched off and keeps user overrides', () => {
		const merged = mergeListedModels(
			[
				{ id: 'kept', enabled: true, contextWindow: 50_000 },
				{ id: 'filled', enabled: true },
			],
			[
				{ id: 'kept', contextWindow: 1_000_000, maxOutputTokens: 8_000 },
				{ id: 'filled', contextWindow: 200_000 },
				{ id: 'new', contextWindow: 128_000 },
			],
		);
		expect(merged).toEqual([
			{ id: 'kept', enabled: true, contextWindow: 50_000, maxOutputTokens: 8_000 },
			{ id: 'filled', enabled: true, contextWindow: 200_000 },
			{ id: 'new', enabled: false, contextWindow: 128_000 },
		]);
	});
});
