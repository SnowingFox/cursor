import { describe, expect, it } from 'vitest';
import { type CustomProvider, PROVIDER_PRESETS } from '../../common/localMode.js';
import {
	contextWindow,
	descriptor,
	effortTiers,
	enabledModels,
	endpoint,
	mergeListedModels,
	modelEffortTiers,
	newProvider,
	parseProviders,
	resolveModel,
	routableProviders,
	serializeProviders,
	subscriptionApiType,
	validateProviders,
} from '../../common/providers.js';
import { ROUTING_DEFAULTS } from '../../common/subscriptions.js';

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

	it('resolves an ID without the prefix when only one provider has it', () => {
		const providers = [
			provider({ models: [{ id: 'a' }, { id: 'shared' }] }),
			provider({ prefix: 'two', models: [{ id: 'shared' }] }),
		];
		expect(resolveModel(providers, 'a')?.id).toBe('gw/a');
		expect(resolveModel(providers, 'shared')).toBeUndefined();
		expect(resolveModel(providers, 'two/shared')?.id).toBe('two/shared');
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
				models: [
					{ id: 'claude-opus-5', maxOutputTokens: 64_000 },
					{ id: 'gpt-5' },
					{ id: 'gpt-6-astra', efforts: ['low', 'high'] },
				],
			}),
		);
		expect(d).toEqual({
			apiType: 'openai-chat',
			contextLengths: { 'claude-opus-5': 1_000_000 },
			maxOutputTokens: { 'claude-opus-5': 64_000 },
			efforts: { 'gpt-5': ['low', 'medium', 'high', 'xhigh'], 'gpt-6-astra': ['low', 'high'] },
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

	it('starts from a preset', () => {
		const ollama = PROVIDER_PRESETS.find((p) => p.id === 'ollama')!;
		expect(newProvider([], ollama)).toMatchObject({
			name: 'Ollama',
			prefix: 'ollama',
			apiType: 'openai-chat',
			baseUrl: 'http://localhost:11434/v1',
		});
		expect(newProvider([provider({ prefix: 'ollama' })], ollama).prefix).toBe('ollama-3');
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

	it('takes the reported wire format and efforts over earlier ones', () => {
		const merged = mergeListedModels(
			[{ id: 'gpt-5.5', enabled: true, apiType: 'openai-chat', efforts: ['low'] }],
			[
				{ id: 'gpt-5.5', apiType: 'openai-responses', efforts: ['low', 'medium', 'high'], vision: true },
				{ id: 'claude-opus-4-7', apiType: 'anthropic', efforts: ['high'] },
			],
		);
		expect(merged).toEqual([
			{ id: 'gpt-5.5', enabled: true, apiType: 'openai-responses', efforts: ['low', 'medium', 'high'], vision: true },
			{ id: 'claude-opus-4-7', enabled: false, apiType: 'anthropic', efforts: ['high'] },
		]);
	});
});

describe('subscriptions provider', () => {
	const preset = PROVIDER_PRESETS.find((p) => p.kind === 'subscriptions')!;
	const subs = (overrides: Partial<CustomProvider> = {}): CustomProvider => ({
		...newProvider([], preset),
		port: 18_317,
		apiKey: 'sk-local-test',
		models: [
			{ id: 'claude-opus-4-7', enabled: true, apiType: 'anthropic', efforts: ['low', 'medium', 'high', 'max'] },
			{ id: 'gpt-5.5', enabled: true, apiType: 'openai-responses', efforts: ['low', 'medium', 'high', 'xhigh'] },
			{ id: 'grok-4.7', enabled: false },
			{ id: 'claude-sonnet-4-6', enabled: true },
		],
		...overrides,
	});

	it('is created with a local port and key', () => {
		const p = newProvider([], preset);
		expect(p).toMatchObject({ kind: 'subscriptions', name: 'Subscriptions', prefix: 'sub', strategy: 'round-robin' });
		expect(p.apiKey).toMatch(/^sk-local-[0-9a-f]{48}$/u);
		expect(p.port).toBeGreaterThanOrEqual(18_000);
		expect(p.port).toBeLessThan(19_000);
	});

	it('routes Claude models to Messages and the rest to Responses, on separate base URLs', () => {
		const [anthropic, responses] = routableProviders([subs()]);
		expect(anthropic).toMatchObject({ apiType: 'anthropic', baseUrl: 'http://127.0.0.1:18317', prefix: 'sub' });
		expect(anthropic.models.map((m) => m.id)).toEqual(['claude-opus-4-7', 'claude-sonnet-4-6']);
		expect(responses).toMatchObject({
			apiType: 'openai-responses',
			baseUrl: 'http://127.0.0.1:18317/backend-api/codex',
		});
		expect(responses.models.map((m) => m.id)).toEqual(['gpt-5.5', 'grok-4.7']);
		expect(endpoint(anthropic).baseUrl).toBe('http://127.0.0.1:18317/v1');
		expect(endpoint(responses)).toEqual({
			baseUrl: 'http://127.0.0.1:18317/backend-api/codex',
			apiKey: 'sk-local-test',
			headers: {},
		});
		expect(enabledModels(routableProviders([subs()])).map((e) => e.id)).toEqual([
			'sub/claude-opus-4-7',
			'sub/claude-sonnet-4-6',
			'sub/gpt-5.5',
		]);
		expect(resolveModel(routableProviders([subs()]), 'sub/gpt-5.5')?.provider.apiType).toBe('openai-responses');
	});

	it('leaves other providers alone', () => {
		const other = provider();
		expect(routableProviders([other])).toEqual([other]);
	});

	it('tells the extension host how to run the sidecar', () => {
		const [anthropic] = routableProviders([
			subs({ proxyUrl: 'socks5://127.0.0.1:1080', routing: { sessionAffinity: false } }),
		]);
		expect(descriptor(anthropic, '/data/user').sidecar).toEqual({
			port: 18_317,
			apiKey: 'sk-local-test',
			dataDir: '/data/user/cliproxyapi',
			strategy: 'round-robin',
			proxyUrl: 'socks5://127.0.0.1:1080',
			routing: { ...ROUTING_DEFAULTS, sessionAffinity: false },
		});
		expect(descriptor(provider(), '/data/user').sidecar).toBeUndefined();
	});

	it('uses the reported effort levels, with a per-format default', () => {
		const [anthropic, responses] = routableProviders([subs()]);
		expect(modelEffortTiers(anthropic, anthropic.models[0])).toEqual({
			values: ['low', 'medium', 'high', 'max'],
			default: 'high',
		});
		expect(modelEffortTiers(responses, responses.models[0])).toEqual({
			values: ['low', 'medium', 'high', 'xhigh'],
			default: 'medium',
		});
		expect(modelEffortTiers(responses, { id: 'grok-3-mini', efforts: ['none', 'low'] })?.default).toBe('low');
		// Without reported levels, the built-in table.
		expect(modelEffortTiers(anthropic, { id: 'claude-sonnet-4-6' })).toEqual(
			effortTiers(anthropic, 'claude-sonnet-4-6'),
		);
	});

	it('validates the port, key, proxy and that there is only one', () => {
		expect(validateProviders([subs()])).toBeUndefined();
		expect(validateProviders([subs({ port: 80 })])).toMatch(/port/u);
		expect(validateProviders([subs({ apiKey: ' ' })])).toMatch(/API key/u);
		expect(validateProviders([subs({ proxyUrl: 'ftp://x' })])).toMatch(/default proxy/u);
		expect(validateProviders([subs(), subs({ prefix: 'sub2' })])).toMatch(/only one/u);
		expect(validateProviders([subs({ prefix: 'gw' }), provider()])).toMatch(/used by more than one/u);
	});

	it('infers the wire format of hand-added models', () => {
		expect(subscriptionApiType({ id: 'claude-haiku-4-5' })).toBe('anthropic');
		expect(subscriptionApiType({ id: 'gpt-6-sol' })).toBe('openai-responses');
		expect(subscriptionApiType({ id: 'claude-x', apiType: 'openai-responses' })).toBe('openai-responses');
	});
});
