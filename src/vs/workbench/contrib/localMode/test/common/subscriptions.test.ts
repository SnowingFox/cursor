import { describe, expect, it } from 'vitest';
import {
	claudeProfilePlan,
	claudeUsageQuota,
	codexUsageQuota,
	grokBillingQuota,
	headerQuota,
	maskProxyUrl,
	parseCallbackInput,
	ROUTING_DEFAULTS,
	routingSettings,
	sidecarBaseUrl,
	sidecarSettings,
	subscriptionModel,
	validateProxyUrl,
	windowLabel,
} from '../../common/subscriptions.js';

const NOW = Date.UTC(2026, 9, 17, 12, 0, 0);

describe('parseCallbackInput', () => {
	it('takes the address the browser landed on, params in query or fragment', () => {
		expect(parseCallbackInput('http://localhost:1455/auth/callback?code=abc&state=xyz')).toEqual({
			redirectUrl: 'http://localhost:1455/auth/callback?code=abc&state=xyz',
		});
		expect(parseCallbackInput('  "localhost:54545/callback#code=abc&state=xyz"  ')).toEqual({
			redirectUrl: 'http://localhost:54545/callback?code=abc&state=xyz',
		});
		expect(parseCallbackInput('http://127.0.0.1:54545/callback?error=access_denied')).toEqual({
			redirectUrl: 'http://127.0.0.1:54545/callback?error=access_denied',
		});
	});

	it('takes code#state, a query string or a bare code', () => {
		expect(parseCallbackInput('abc#xyz')).toEqual({ code: 'abc', state: 'xyz' });
		expect(parseCallbackInput('?code=abc&state=xyz')).toEqual({ code: 'abc', state: 'xyz' });
		expect(parseCallbackInput('abc')).toEqual({ code: 'abc', state: undefined });
	});

	it('rejects nothing usable', () => {
		expect(parseCallbackInput('   ')).toBeUndefined();
		expect(parseCallbackInput('http://localhost:1455/auth/callback')).toBeUndefined();
	});
});

describe('proxy URLs', () => {
	it('accepts http(s) and socks5(h), direct and empty', () => {
		for (const ok of [
			'',
			'direct',
			'none',
			'socks5://127.0.0.1:1080',
			'socks5h://u:p@proxy:1080',
			'http://proxy:8080',
		]) {
			expect(validateProxyUrl(ok)).toBeUndefined();
		}
		expect(validateProxyUrl('ftp://proxy:21')).toMatch(/http/u);
		expect(validateProxyUrl('127.0.0.1:1080')).toBeDefined();
	});

	it('masks the password', () => {
		expect(maskProxyUrl('socks5://user:secret@proxy:1080')).toBe('socks5://user:•••@proxy:1080');
		expect(maskProxyUrl('socks5h://user@proxy:1080')).toBe('socks5h://user@proxy:1080');
		expect(maskProxyUrl('http://proxy:8080/')).toBe('http://proxy:8080');
	});
});

describe('sidecarBaseUrl', () => {
	it('gives each wire format its own base URL', () => {
		expect(sidecarBaseUrl(18317, 'anthropic')).toBe('http://127.0.0.1:18317');
		expect(sidecarBaseUrl(18317, 'openai-responses')).toBe('http://127.0.0.1:18317/backend-api/codex');
	});
});

describe('windowLabel', () => {
	it('names the usual windows', () => {
		expect(windowLabel(18_000)).toBe('5-hour');
		expect(windowLabel(604_800)).toBe('Weekly');
		expect(windowLabel(259_200)).toBe('3-day');
		expect(windowLabel(7200)).toBe('2-hour');
	});
});

describe('codexUsageQuota', () => {
	it('reads both windows, the plan and credits', () => {
		const q = codexUsageQuota(
			{
				plan_type: 'plus',
				rate_limit: {
					limit_reached: false,
					primary_window: { used_percent: 42, limit_window_seconds: 18_000, reset_after_seconds: 600 },
					secondary_window: { used_percent: 7.5, limit_window_seconds: 604_800, reset_at: 1_761_000_000 },
				},
				credits: { has_credits: true, unlimited: false, balance: '12.5' },
			},
			NOW,
		);
		expect(q).toEqual({
			checkedAt: NOW,
			source: 'usage',
			plan: 'Plus',
			windows: [
				{ label: '5-hour', usedPercent: 42, resetsAt: NOW + 600_000 },
				{ label: 'Weekly', usedPercent: 7.5, resetsAt: 1_761_000_000_000 },
			],
			notes: ['Credits: 12.50'],
		});
	});

	it('drops zero-length windows and notes a reached limit', () => {
		const q = codexUsageQuota(
			{
				rate_limit: {
					limit_reached: true,
					primary_window: { used_percent: 0, limit_window_seconds: 0 },
					secondary_window: { used_percent: 100, limit_window_seconds: 604_800 },
				},
				additional_rate_limits: [
					{ limit_name: 'code_review', rate_limit: { primary_window: { used_percent: 3, window_minutes: 300 } } },
				],
			},
			NOW,
		);
		expect(q.windows.map((w) => [w.label, w.usedPercent])).toEqual([
			['Weekly', 100],
			['Code Review · 5-hour', 3],
		]);
		expect(q.notes).toEqual(['Limit reached']);
	});
});

describe('claudeUsageQuota', () => {
	it('reads the buckets in a stable order', () => {
		const q = claudeUsageQuota(
			{
				seven_day_opus: { utilization: 10, resets_at: '2026-10-20T00:00:00Z' },
				seven_day: { utilization: 35.2, resets_at: '2026-10-20T00:00:00Z' },
				five_hour: { utilization: 81, resets_at: '2026-10-17T14:00:00+00:00' },
				seven_day_oauth_apps: null,
				extra_usage: { is_enabled: false, utilization: null },
			},
			NOW,
		);
		expect(q.windows).toEqual([
			{ label: '5-hour', usedPercent: 81, resetsAt: Date.UTC(2026, 9, 17, 14) },
			{ label: 'Weekly', usedPercent: 35.2, resetsAt: Date.UTC(2026, 9, 20) },
			{ label: 'Weekly · Opus', usedPercent: 10, resetsAt: Date.UTC(2026, 9, 20) },
		]);
	});

	it('reads scoped weekly limits and extra usage', () => {
		const q = claudeUsageQuota(
			{
				limits: [{ kind: 'weekly_scoped', scope: { model: { display_name: 'Fable' } }, percent: 55 }],
				extra_usage: { is_enabled: true, utilization: 20 },
			},
			NOW,
		);
		expect(q.windows.map((w) => [w.label, w.usedPercent])).toEqual([
			['Weekly · Fable', 55],
			['Extra usage', 20],
		]);
	});

	it('names the plan from the profile', () => {
		expect(claudeProfilePlan({ organization: { rate_limit_tier: 'default_claude_max_20x' } })).toBe('Max 20x');
		expect(claudeProfilePlan({ account: { has_claude_pro: true } })).toBe('Pro');
		expect(claudeProfilePlan({})).toBeUndefined();
	});
});

describe('grokBillingQuota', () => {
	it('reads the period and its credit usage', () => {
		expect(
			grokBillingQuota(
				{
					config: {
						currentPeriod: { type: 'USAGE_PERIOD_TYPE_WEEKLY', end: '2026-10-20T00:00:00Z' },
						creditUsagePercent: 12,
					},
				},
				NOW,
			).windows,
		).toEqual([{ label: 'Weekly', usedPercent: 12, resetsAt: Date.UTC(2026, 9, 20) }]);
	});

	it('falls back to the legacy monthly limit', () => {
		expect(grokBillingQuota({ config: { monthlyLimit: { val: 200 }, used: { val: 50 } } }, NOW).windows).toEqual([
			{ label: 'Billing period', usedPercent: 25, resetsAt: undefined },
		]);
		expect(grokBillingQuota({ config: { isUnifiedBillingUser: true } }, NOW).windows).toEqual([]);
	});
});

describe('headerQuota', () => {
	it('reads Claude unified rate-limit headers (fractions)', () => {
		const q = headerQuota(
			'claude',
			{
				'Anthropic-Ratelimit-Unified-5h-Utilization': '0.25',
				'Anthropic-Ratelimit-Unified-5h-Reset': '1760716800',
				'Anthropic-Ratelimit-Unified-7d-Utilization': ['0.5'],
				'Anthropic-Ratelimit-Unified-Status': 'rejected',
			},
			NOW,
		);
		expect(q).toEqual({
			checkedAt: NOW,
			source: 'headers',
			plan: undefined,
			windows: [
				{ label: '5-hour', usedPercent: 25, resetsAt: 1_760_716_800_000 },
				{ label: 'Weekly', usedPercent: 50, resetsAt: undefined },
			],
			notes: ['Limit reached'],
		});
	});

	it('reads Codex headers', () => {
		const q = headerQuota(
			'codex',
			{
				'x-codex-primary-used-percent': '10',
				'x-codex-primary-window-minutes': '300',
				'x-codex-primary-reset-after-seconds': '60',
				'x-codex-secondary-used-percent': '3',
				'x-codex-secondary-window-minutes': '10080',
				'x-codex-plan-type': 'pro',
			},
			NOW,
		);
		expect(q?.plan).toBe('Pro');
		expect(q?.windows).toEqual([
			{ label: '5-hour', usedPercent: 10, resetsAt: NOW + 60_000 },
			{ label: 'Weekly', usedPercent: 3, resetsAt: undefined },
		]);
	});

	it('is empty without signals', () => {
		expect(headerQuota('codex', {}, NOW)).toBeUndefined();
		expect(headerQuota('xai', { 'x-ratelimit-remaining-requests': '5' }, NOW)).toBeUndefined();
	});
});

describe('subscriptionModel', () => {
	it('keeps chat models with their limits, efforts and vision', () => {
		expect(
			subscriptionModel('claude', 'claude-opus-4-7', {
				context_length: 1_000_000,
				max_completion_tokens: 128_000,
				display_name: 'Claude Opus 4.7',
				supportedInputModalities: ['text', 'image'],
				supportedOutputModalities: ['text'],
				thinking: { levels: ['low', 'medium', 'high', 'xhigh', 'max', 'bogus'] },
			}),
		).toEqual({
			id: 'claude-opus-4-7',
			type: 'claude',
			displayName: 'Claude Opus 4.7',
			contextWindow: 1_000_000,
			maxOutputTokens: 128_000,
			efforts: ['low', 'medium', 'high', 'xhigh', 'max'],
			vision: true,
		});
		expect(subscriptionModel('xai', 'grok-build-0.1', undefined)).toEqual({ id: 'grok-build-0.1', type: 'xai' });
	});

	it('drops image, video and speech models', () => {
		for (const id of ['gpt-image-2', 'grok-imagine-video-1.5', 'grok-tts', 'grok-voice-tts-1.0']) {
			expect(subscriptionModel('xai', id, {})).toBeUndefined();
		}
		expect(subscriptionModel('codex', 'some-model', { supportedOutputModalities: ['image'] })).toBeUndefined();
	});
});

describe('routing settings', () => {
	it('fills in defaults and clamps', () => {
		expect(routingSettings(undefined)).toEqual(ROUTING_DEFAULTS);
		expect(
			routingSettings({ affinityTtlMinutes: 0, retries: 99, retryWaitSeconds: -5, rebindOn: 'bogus' as never }),
		).toMatchObject({ affinityTtlMinutes: 1, retries: 10, retryWaitSeconds: 0, rebindOn: 'any' });
		expect(routingSettings({ sessionAffinity: false, streamRetries: 2.4 })).toMatchObject({
			sessionAffinity: false,
			streamRetries: 2,
		});
	});

	it("maps to CLIProxyAPI's v8 config layout", () => {
		expect(
			sidecarSettings({
				strategy: 'weighted-round-robin',
				proxyUrl: 'socks5://127.0.0.1:1080',
				routing: { affinityTtlMinutes: 90, rebindOn: 'quota', cooling: false },
			}),
		).toEqual({
			routing: {
				strategy: 'weighted-round-robin',
				'session-affinity': true,
				'session-affinity-ttl': '90m',
				'session-affinity-rebind-on': 'quota',
				retry: { 'request-retry': 2, 'max-retry-interval': 30 },
				cooldown: { 'disable-cooling': true },
			},
			upstream: { claude: { 'model-level-cooling': true }, codex: { 'model-level-cooling': true } },
			requests: { 'proxy-url': 'socks5://127.0.0.1:1080', streaming: { 'bootstrap-retries': 1 } },
		});
		expect(sidecarSettings({ strategy: 'bogus' as never }).routing.strategy).toBe('round-robin');
	});
});
