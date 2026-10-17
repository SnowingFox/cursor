import { afterEach, describe, expect, it, vi } from 'vitest';
import {
	contextLength,
	describeFetchError,
	effortValues,
	kind,
	listModels,
	maxOutputTokens,
	parseModelList,
	reasoningFetch,
	register,
	requestedEffort,
	withSummary,
} from '../localMode.js';

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

describe('reasoning', () => {
	const sidecar = { port: 18320, apiKey: 'sk-local', dataDir: '/tmp/none' };

	it('hands the picker efforts to the runtime', () => {
		register({
			baseUrl: 'https://efforts.example.com/v1',
			cursorLocalProvider: { ...descriptor, efforts: { 'gpt-6-astra': ['low', 'xhigh'], empty: [] } },
		});
		expect(effortValues('https://efforts.example.com/v1', 'gpt-6-astra')).toEqual(['low', 'xhigh']);
		expect(effortValues('https://efforts.example.com/v1', 'empty')).toBeUndefined();
		expect(effortValues('https://efforts.example.com/v1', 'other')).toBeUndefined();
	});

	it('asks for summaries without overriding what the request set', () => {
		expect(JSON.parse(withSummary({ body: '{"model":"m"}' })?.body as string)).toEqual({
			model: 'm',
			reasoning: { summary: 'auto' },
		});
		expect(
			JSON.parse(withSummary({ body: '{"reasoning":{"effort":"high","summary":"detailed"}}' })?.body as string),
		).toEqual({ reasoning: { effort: 'high', summary: 'detailed' } });
		const raw = { body: 'not json' };
		expect(withSummary(raw)).toBe(raw);
		expect(withSummary(undefined)).toBeUndefined();
	});

	it('only wraps sidecar models with thinking on', async () => {
		const efforts = { 'gpt-6-astra': ['low' as const, 'high' as const] };
		const local = 'http://127.0.0.1:18320/backend-api/codex';
		const fetch = vi.fn(async (_input: unknown, init?: { body?: unknown }) => init?.body);
		const high = [{ id: 'reasoning', value: 'high' }];
		// Registered directly: register() would start the sidecar.
		globalThis.__cursorLocalModeProviders?.set(local, { ...descriptor, efforts, sidecar });
		register({ baseUrl: 'https://plain.example.com/v2', cursorLocalProvider: { ...descriptor, efforts } });
		expect(reasoningFetch('https://plain.example.com/v2', 'gpt-6-astra', high, fetch)).toBe(fetch);
		expect(reasoningFetch(local, 'gpt-7', high, fetch)).toBe(fetch);
		expect(reasoningFetch(local, 'gpt-6-astra', [{ id: 'reasoning', value: 'none' }], fetch)).toBe(fetch);
		expect(reasoningFetch(local, 'gpt-6-astra', [{ id: 'reasoning', value: 'xhigh' }], fetch)).toBe(fetch);
		expect(reasoningFetch(local, 'gpt-6-astra', undefined, fetch)).toBe(fetch);
		const wrapped = reasoningFetch(local, 'gpt-6-astra', high, fetch);
		expect(JSON.parse((await wrapped('u', { body: '{}' })) as string)).toEqual({ reasoning: { summary: 'auto' } });
		expect(requestedEffort([{ id: 'effort', value: 'low' }])).toBe('low');
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

describe('describeFetchError', () => {
	it('explains the network error hidden in the cause', () => {
		const refused = Object.assign(new AggregateError([Object.assign(new Error(''), { code: 'ECONNREFUSED' })], ''), {
			code: 'ECONNREFUSED',
		});
		expect(describeFetchError(new TypeError('fetch failed', { cause: refused }))).toBe(
			'connection refused. Is the server running?',
		);
		const nested = new AggregateError([Object.assign(new Error(''), { code: 'ENOTFOUND' })], '');
		expect(describeFetchError(new TypeError('fetch failed', { cause: nested }))).toBe('host not found.');
		expect(describeFetchError(Object.assign(new Error('x'), { name: 'TimeoutError' }))).toBe(
			'no response within 20 seconds.',
		);
		expect(describeFetchError(new TypeError('fetch failed', { cause: new Error('self-signed certificate') }))).toBe(
			'self-signed certificate',
		);
		expect(describeFetchError('boom')).toBe('boom');
	});
});
