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
	shortenToolIds,
	shortToolId,
	toolIdFetch,
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

describe('tool call ids', () => {
	// 83 characters, like the Codex call ids a direct endpoint rejected.
	const long = `call_${'a'.repeat(24)}|fc_${'b'.repeat(50)}`;

	it('shortens overlong ids the same way every time and keeps short ones', () => {
		const short = shortToolId(long, false);
		expect(short).toHaveLength(64);
		expect(short).toMatch(/^[a-zA-Z0-9_-]+$/u);
		expect(shortToolId(long, false)).toBe(short);
		expect(shortToolId(`${long}x`, false)).not.toBe(short);
		expect(shortToolId('call_abc', false)).toBe('call_abc');
		// Anthropic also rejects characters outside its pattern.
		expect(shortToolId('call|x', true)).toMatch(/^call_x_[0-9a-f]{16}$/u);
		expect(shortToolId('call|x', false)).toBe('call|x');
	});

	it('rewrites Responses, Chat Completions and Messages bodies consistently', () => {
		const short = shortToolId(long, false);
		expect(
			shortenToolIds({
				model: 'gpt-6.1-sol',
				input: [
					{ type: 'function_call', call_id: long, name: 'Read', arguments: '{}' },
					{ type: 'function_call_output', call_id: long, output: 'ok' },
					{ role: 'user', content: 'hi' },
				],
			}),
		).toEqual({
			model: 'gpt-6.1-sol',
			input: [
				{ type: 'function_call', call_id: short, name: 'Read', arguments: '{}' },
				{ type: 'function_call_output', call_id: short, output: 'ok' },
				{ role: 'user', content: 'hi' },
			],
		});
		expect(
			shortenToolIds({
				messages: [
					{
						role: 'assistant',
						content: null,
						tool_calls: [{ id: long, type: 'function', function: { name: 'Read' } }],
					},
					{ role: 'tool', tool_call_id: long, content: 'ok' },
				],
			}),
		).toEqual({
			messages: [
				{ role: 'assistant', content: null, tool_calls: [{ id: short, type: 'function', function: { name: 'Read' } }] },
				{ role: 'tool', tool_call_id: short, content: 'ok' },
			],
		});
		const anthropic = shortToolId(long, true);
		expect(
			shortenToolIds({
				messages: [
					{ role: 'assistant', content: [{ type: 'tool_use', id: long, name: 'Read', input: {} }] },
					{
						role: 'user',
						content: [
							{ type: 'tool_result', tool_use_id: long, content: 'ok' },
							{ type: 'text', text: 'go' },
						],
					},
				],
			}),
		).toEqual({
			messages: [
				{ role: 'assistant', content: [{ type: 'tool_use', id: anthropic, name: 'Read', input: {} }] },
				{
					role: 'user',
					content: [
						{ type: 'tool_result', tool_use_id: anthropic, content: 'ok' },
						{ type: 'text', text: 'go' },
					],
				},
			],
		});
		expect(shortenToolIds({ input: [{ type: 'function_call_output', call_id: 'call_abc' }] })).toBeUndefined();
	});

	it('only wraps custom providers, not the sidecar', async () => {
		const seen: unknown[] = [];
		const fetch = async (_input: unknown, init?: { body?: unknown }) => {
			seen.push(init?.body);
			return 'response';
		};
		register({
			baseUrl: 'https://direct.example.com/v1',
			cursorLocalProvider: { ...descriptor, apiType: 'openai-responses' },
		});
		// Registered directly: register() would start the sidecar.
		globalThis.__cursorLocalModeProviders?.set('http://127.0.0.1:18321/v1', {
			...descriptor,
			apiType: 'openai-responses',
			sidecar: { port: 18321, apiKey: 'sk-local', dataDir: '/tmp/none' },
		});
		const body = JSON.stringify({ input: [{ type: 'function_call_output', call_id: long, output: 'ok' }] });
		await toolIdFetch('https://direct.example.com/v1', fetch)('u', { body });
		expect(JSON.parse(seen[0] as string).input[0].call_id).toBe(shortToolId(long, false));
		expect(toolIdFetch('http://127.0.0.1:18321/v1', fetch)).toBe(fetch);
		expect(toolIdFetch('https://unknown.example.com/v1', fetch)).toBe(fetch);
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
