import { afterEach, describe, expect, it, vi } from 'vitest';
import { contextLength, kind, listModels, maxOutputTokens, parseModelList, register } from '../localMode.js';

const descriptor = {
	apiType: 'anthropic' as const,
	contextLengths: { 'claude-opus-5': 1_000_000 },
	maxOutputTokens: { 'claude-opus-5': 64_000 },
};

describe('provider registry', () => {
	it('remembers descriptors per normalized base URL', () => {
		register({ baseUrl: 'https://gw.example.com/v1/', cursorLocalProvider: descriptor });
		expect(kind('https://gw.example.com/v1')).toBe(descriptor);
		expect(contextLength(' https://gw.example.com/v1 ', 'claude-opus-5')).toBe(1_000_000);
		expect(maxOutputTokens('https://gw.example.com/v1', 'claude-opus-5')).toBe(64_000);
		expect(contextLength('https://gw.example.com/v1', 'unknown')).toBeUndefined();
	});

	it('ignores requests without a descriptor', () => {
		register({ baseUrl: 'https://plain.example.com/v1' });
		register({ baseUrl: 42, cursorLocalProvider: descriptor });
		expect(kind('https://plain.example.com/v1')).toBeUndefined();
	});
});

describe('parseModelList', () => {
	it('understands OpenAI, Anthropic and OpenRouter rows', () => {
		expect(
			parseModelList({
				data: [
					{ id: 'gpt-5', context_window: 400_000, max_output_tokens: 128_000 },
					{ id: 'claude-opus-5', type: 'model', max_input_tokens: 1_000_000, max_tokens: 64_000 },
					{ id: 'or/model', top_provider: { context_length: 131_072 } },
					{ id: ' ' },
					{ name: 'named' },
				],
			}),
		).toEqual([
			{ id: 'gpt-5', contextWindow: 400_000, maxOutputTokens: 128_000 },
			{ id: 'claude-opus-5', contextWindow: 1_000_000, maxOutputTokens: 64_000 },
			{ id: 'or/model', contextWindow: 131_072, maxOutputTokens: undefined },
			{ id: 'named', contextWindow: undefined, maxOutputTokens: undefined },
		]);
		expect(parseModelList(['a', 'b'])).toEqual([
			{ id: 'a', contextWindow: undefined, maxOutputTokens: undefined },
			{ id: 'b', contextWindow: undefined, maxOutputTokens: undefined },
		]);
		expect(parseModelList({ models: [] })).toEqual([]);
		expect(parseModelList(null)).toEqual([]);
	});
});

describe('listModels', () => {
	afterEach(() => vi.unstubAllGlobals());

	it('uses the Anthropic auth scheme', async () => {
		const fetch = vi.fn(async () => new Response(JSON.stringify({ data: [{ id: 'claude-opus-5' }] })));
		vi.stubGlobal('fetch', fetch);
		const result = await listModels({
			baseUrl: 'https://gw.example.com/v1/',
			apiKey: 'secret',
			cursorLocalProvider: { ...descriptor, listing: true },
		});
		expect(result.cursorLocalModels.map((m) => m.id)).toEqual(['claude-opus-5']);
		const [url, init] = fetch.mock.calls[0] as unknown as [string, RequestInit];
		expect(url).toBe('https://gw.example.com/v1/models?limit=1000');
		expect(init.headers).toMatchObject({ 'x-api-key': 'secret', 'anthropic-version': '2023-06-01' });
	});

	it('uses bearer auth for OpenAI-compatible endpoints and reports HTTP errors', async () => {
		const fetch = vi.fn(async () => new Response('nope', { status: 401 }));
		vi.stubGlobal('fetch', fetch);
		await expect(
			listModels({
				baseUrl: 'https://o.example.com/v1',
				apiKey: 'k',
				cursorLocalProvider: { apiType: 'openai-chat', contextLengths: {}, maxOutputTokens: {} },
			}),
		).rejects.toThrow('GET https://o.example.com/v1/models returned HTTP 401: nope');
		const [, init] = fetch.mock.calls[0] as unknown as [string, RequestInit];
		expect(init.headers).toMatchObject({ authorization: 'Bearer k' });
	});
});
