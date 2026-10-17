/**
 * Subscriptions: Claude Code, Codex and Grok accounts the user signs in to,
 * served by a bundled CLIProxyAPI sidecar and exposed as one built-in provider.
 *
 * Shared by the agent window and the cursor-agent-exec extension host (which
 * runs the sidecar), so this file must stay free of DOM and Node APIs.
 */
import type { ApiType, Effort } from './localMode.js';

export const ACCOUNT_TYPES = ['claude', 'codex', 'xai'] as const;
export type AccountType = (typeof ACCOUNT_TYPES)[number];

export const ACCOUNT_TYPE_LABELS: Record<AccountType, string> = {
	claude: 'Claude Code',
	codex: 'Codex',
	xai: 'Grok',
};

/** What signing in looks like for each account type. */
export const ACCOUNT_TYPE_HINTS: Record<AccountType, string> = {
	claude: 'Claude Pro or Max, signed in with your Claude account',
	codex: 'ChatGPT Plus, Pro or Team, signed in with your ChatGPT account',
	xai: 'SuperGrok or X Premium, signed in with your xAI account',
};

/** Wire format the agent runtime speaks to the sidecar for each account type's models. */
export const ACCOUNT_API_TYPES: Record<AccountType, ApiType> = {
	claude: 'anthropic',
	codex: 'openai-responses',
	xai: 'openai-responses',
};

export function isAccountType(value: unknown): value is AccountType {
	return typeof value === 'string' && (ACCOUNT_TYPES as readonly string[]).includes(value);
}

export const ROUTING_STRATEGIES = ['round-robin', 'fill-first'] as const;
export type RoutingStrategy = (typeof ROUTING_STRATEGIES)[number];

/**
 * How the extension host runs the sidecar. Sent with every subscriptions
 * request and with every turn routed to it, so the sidecar can be (re)started
 * from whichever side needs it first.
 */
export interface SidecarConfig {
	port: number;
	/** Client key the sidecar requires on its inference routes (the provider's API key). */
	apiKey: string;
	/** Holds config.yaml, the signed-in accounts (auths/) and the log. */
	dataDir: string;
	/** Which account serves a request when several of the same type are signed in. */
	strategy?: RoutingStrategy;
	/** Default proxy: sign-in, token refresh and accounts without their own proxy. */
	proxyUrl?: string;
}

export interface QuotaWindow {
	/** "5-hour", "Weekly", "Weekly · Opus", … */
	label: string;
	/** 0–100. */
	usedPercent: number;
	/** Epoch ms. */
	resetsAt?: number;
}

export interface Quota {
	/** Epoch ms. */
	checkedAt: number;
	/** `usage`: the provider's usage endpoint; `headers`: limits reported on the last response. */
	source: 'usage' | 'headers';
	plan?: string;
	windows: QuotaWindow[];
	/** "Limit reached", "Credits: 12.50", … */
	notes: string[];
}

/** One signed-in account, as shown on the Settings page (never carries tokens). */
export interface Account {
	/** Credential file name; the account's ID in the sidecar. */
	name: string;
	type: string;
	email?: string;
	plan?: string;
	disabled: boolean;
	/** The sidecar's status: active, error, disabled, … */
	status: string;
	statusMessage?: string;
	/** Epoch ms until which the account is cooling down after a limit or error. */
	coolingUntil?: number;
	proxyUrl?: string;
	priority?: number;
	success: number;
	failed: number;
	/** Limits reported on the account's last response, if any. */
	quota?: Quota;
}

export interface SubscriptionsStatus {
	running: boolean;
	/** Why the sidecar is not running (missing binary, port in use, …). */
	error?: string;
	version?: string;
	binary?: string;
	accounts: Account[];
}

export interface LoginStart {
	state: string;
	url: string;
	/** `browser`: approve in the browser, which redirects back to the sidecar; `device`: enter `userCode`. */
	flow: 'browser' | 'device';
	userCode?: string;
	/** Epoch ms. */
	expiresAt?: number;
	/** The browser redirect can't reach the sidecar (callback port busy): the user pastes the address. */
	manual?: boolean;
}

export interface LoginStatus {
	status: 'wait' | 'ok' | 'error';
	error?: string;
}

export interface ProxyCheck {
	ok: boolean;
	ms: number;
	text: string;
}

export interface AccountPatch {
	disabled?: boolean;
	proxyUrl?: string;
	priority?: number;
}

export type SubscriptionsRequest = { sidecar: SidecarConfig } & (
	| { op: 'status' }
	| { op: 'login'; type: AccountType }
	| { op: 'login-status'; state: string }
	| { op: 'login-callback'; state: string; input: string }
	| { op: 'login-cancel'; state: string }
	| { op: 'update'; name: string; patch: AccountPatch }
	| { op: 'remove'; name: string }
	| { op: 'quota'; name: string }
	| { op: 'models' }
	| { op: 'check-proxy'; proxyUrl: string; type: AccountType }
);

/** Data directory under the app's user data folder. */
export function sidecarDataDir(userDataDir: string): string {
	return `${userDataDir.replace(/\/+$/u, '')}/cliproxyapi`;
}

/** The two endpoints the provider is exposed on (one wire format each). */
export function sidecarBaseUrl(port: number, apiType: ApiType): string {
	// Distinct base URLs: the extension host remembers a provider's wire format
	// per base URL, and both /v1/messages and /v1/responses live under /v1.
	// /backend-api/codex is CLIProxyAPI's alias for its Responses route.
	return apiType === 'anthropic' ? `http://127.0.0.1:${port}` : `http://127.0.0.1:${port}/backend-api/codex`;
}

export function randomPort(): number {
	return 18_000 + Math.floor(Math.random() * 1000);
}

export function randomKey(prefix: string): string {
	const bytes = new Uint8Array(24);
	globalThis.crypto.getRandomValues(bytes);
	return prefix + Array.from(bytes, (b) => b.toString(16).padStart(2, '0')).join('');
}

const PROXY_SCHEMES = ['http:', 'https:', 'socks5:', 'socks5h:'];

/** User-facing error for a bad proxy URL; empty, `direct` and `none` are fine. */
export function validateProxyUrl(text: string): string | undefined {
	const value = text.trim();
	if (value === '' || value === 'direct' || value === 'none') {
		return undefined;
	}
	let url: URL;
	try {
		url = new URL(value);
	} catch {
		return 'Use a proxy URL like socks5://127.0.0.1:1080 or http://user:pass@proxy:8080.';
	}
	if (!PROXY_SCHEMES.includes(url.protocol)) {
		return 'The proxy must be http://, https://, socks5:// or socks5h://.';
	}
	if (url.hostname === '') {
		return 'The proxy URL needs a host.';
	}
	return undefined;
}

/** Hides the password in a proxy URL for display. */
export function maskProxyUrl(text: string): string {
	try {
		const url = new URL(text);
		const user = url.username === '' ? '' : `${decodeURIComponent(url.username)}${url.password === '' ? '' : ':•••'}@`;
		return `${url.protocol}//${user}${url.host}${url.pathname === '/' ? '' : url.pathname}`;
	} catch {
		return text;
	}
}

export type CallbackInput = { redirectUrl: string } | { code: string; state?: string };

/**
 * What the user pasted to finish a sign-in: the address the browser landed on
 * (with or without scheme, params in the query or fragment), `code#state`, or a
 * bare code. Undefined when there is nothing usable.
 */
export function parseCallbackInput(text: string): CallbackInput | undefined {
	const value = text.trim().replace(/^["'<]+|["'>]+$/gu, '');
	if (value === '') {
		return undefined;
	}
	const urlish = /^https?:\/\//iu.test(value)
		? value
		: /^(?:localhost|127\.0\.0\.1|\[::1\])(?::\d+)?\//iu.test(value)
			? `http://${value}`
			: undefined;
	if (urlish !== undefined) {
		let url: URL;
		try {
			url = new URL(urlish);
		} catch {
			return undefined;
		}
		const params = new URLSearchParams(url.search);
		for (const [k, v] of new URLSearchParams(url.hash.replace(/^#/u, ''))) {
			params.has(k) || params.set(k, v);
		}
		if (!params.has('code') && !params.has('error')) {
			return undefined;
		}
		url.search = params.toString();
		url.hash = '';
		return { redirectUrl: url.toString() };
	}
	if (/(?:^|[?&])code=/u.test(value)) {
		const params = new URLSearchParams(value.replace(/^.*?\?/u, ''));
		const code = params.get('code')?.trim();
		return code ? { code, state: params.get('state')?.trim() || undefined } : undefined;
	}
	const [code, state] = value.split('#', 2).map((s) => s.trim());
	return code ? { code, state: state || undefined } : undefined;
}

// --- quota --------------------------------------------------------------------

function num(value: unknown): number | undefined {
	const n = typeof value === 'string' && value.trim() !== '' ? Number(value) : value;
	return typeof n === 'number' && Number.isFinite(n) ? n : undefined;
}

function percent(value: number): number {
	return Math.min(100, Math.max(0, value));
}

/** Epoch seconds, epoch ms or an ISO date, as epoch ms. */
function timestamp(value: unknown): number | undefined {
	const n = num(value);
	if (n !== undefined) {
		return n > 1e12 ? n : n * 1000;
	}
	if (typeof value === 'string') {
		const ms = Date.parse(value);
		return Number.isNaN(ms) ? undefined : ms;
	}
	return undefined;
}

function obj(value: unknown): Record<string, any> | undefined {
	return value !== null && typeof value === 'object' && !Array.isArray(value)
		? (value as Record<string, any>)
		: undefined;
}

/** "5-hour", "Weekly", … from a window length. */
export function windowLabel(seconds: number): string {
	const known: Record<number, string> = {
		3600: 'Hourly',
		18000: '5-hour',
		86400: 'Daily',
		604800: 'Weekly',
		2592000: 'Monthly',
	};
	if (known[seconds] !== undefined) {
		return known[seconds];
	}
	return seconds % 86_400 === 0 ? `${seconds / 86_400}-day` : `${Math.round(seconds / 3600)}-hour`;
}

function titleCase(text: string): string {
	return text.replace(/[_-]+/gu, ' ').replace(/\b\w/gu, (c) => c.toUpperCase());
}

function codexWindow(slot: unknown, now: number, prefix = ''): QuotaWindow | undefined {
	const w = obj(slot);
	const used = num(w?.used_percent);
	const minutes = num(w?.window_minutes);
	const seconds = num(w?.limit_window_seconds) ?? (minutes === undefined ? undefined : minutes * 60);
	if (w === undefined || used === undefined || seconds === 0) {
		return undefined;
	}
	const after = num(w.reset_after_seconds);
	return {
		label: prefix + (seconds === undefined ? 'Limit' : windowLabel(seconds)),
		usedPercent: percent(used),
		resetsAt: timestamp(w.reset_at) ?? (after === undefined ? undefined : now + after * 1000),
	};
}

function codexCredits(credits: unknown): string | undefined {
	const c = obj(credits);
	if (c?.unlimited === true) {
		return 'Unlimited credits';
	}
	const balance = num(c?.balance);
	return c?.has_credits === true && balance !== undefined ? `Credits: ${balance.toFixed(2)}` : undefined;
}

/** GET https://chatgpt.com/backend-api/wham/usage */
export function codexUsageQuota(body: unknown, now: number): Quota {
	const b = obj(body) ?? {};
	const limits = obj(b.rate_limit) ?? obj(b.rate_limits) ?? {};
	const windows = [codexWindow(limits.primary_window, now), codexWindow(limits.secondary_window, now)].filter(
		(w) => w !== undefined,
	);
	for (const extra of Array.isArray(b.additional_rate_limits) ? b.additional_rate_limits : []) {
		const e = obj(extra);
		const name = String(e?.limit_name ?? e?.metered_feature ?? '').trim();
		const l = obj(e?.rate_limit) ?? e;
		for (const slot of [l?.primary_window, l?.secondary_window]) {
			const w = codexWindow(slot, now, name ? `${titleCase(name)} · ` : '');
			w && windows.push(w);
		}
	}
	const notes = [limits.limit_reached === true ? 'Limit reached' : undefined, codexCredits(b.credits)].filter(
		(n) => n !== undefined,
	);
	const plan = typeof b.plan_type === 'string' && b.plan_type ? titleCase(b.plan_type) : undefined;
	return { checkedAt: now, source: 'usage', plan, windows, notes };
}

const CLAUDE_BUCKETS: Record<string, string> = {
	five_hour: '5-hour',
	seven_day: 'Weekly',
	seven_day_opus: 'Weekly · Opus',
	seven_day_sonnet: 'Weekly · Sonnet',
};

/** GET https://api.anthropic.com/api/oauth/usage */
export function claudeUsageQuota(body: unknown, now: number): Quota {
	const b = obj(body) ?? {};
	const windows: QuotaWindow[] = [];
	for (const [key, value] of Object.entries(b)) {
		const label =
			CLAUDE_BUCKETS[key] ?? (/^seven_day_/u.test(key) ? `Weekly · ${titleCase(key.slice(10))}` : undefined);
		const used = num(obj(value)?.utilization);
		if (label !== undefined && used !== undefined) {
			windows.push({ label, usedPercent: percent(used), resetsAt: timestamp(obj(value)?.resets_at) });
		}
	}
	for (const limit of Array.isArray(b.limits) ? b.limits : []) {
		const l = obj(limit);
		const used = num(l?.percent) ?? num(l?.utilization);
		const model = String(l?.scope?.model?.display_name ?? '').trim();
		if (l?.kind === 'weekly_scoped' && used !== undefined && model) {
			windows.push({ label: `Weekly · ${model}`, usedPercent: percent(used), resetsAt: timestamp(l.resets_at) });
		}
	}
	const order = (w: QuotaWindow) => (w.label === '5-hour' ? 0 : w.label === 'Weekly' ? 1 : 2);
	windows.sort((x, y) => order(x) - order(y));
	const extra = obj(b.extra_usage);
	const extraUsed = num(extra?.utilization);
	if (extra?.is_enabled === true && extraUsed !== undefined) {
		windows.push({ label: 'Extra usage', usedPercent: percent(extraUsed) });
	}
	return { checkedAt: now, source: 'usage', windows, notes: [] };
}

const CLAUDE_TIERS: Record<string, string> = {
	default_claude_max_20x: 'Max 20x',
	default_claude_max_5x: 'Max 5x',
	default_claude_ai: 'Pro',
	claude_pro: 'Pro',
};

/** Plan from GET https://api.anthropic.com/api/oauth/profile. */
export function claudeProfilePlan(body: unknown): string | undefined {
	const b = obj(body);
	const tier = String(b?.organization?.rate_limit_tier ?? '').trim();
	if (CLAUDE_TIERS[tier] !== undefined) {
		return CLAUDE_TIERS[tier];
	}
	if (b?.account?.has_claude_max === true) {
		return 'Max';
	}
	if (b?.account?.has_claude_pro === true) {
		return 'Pro';
	}
	return undefined;
}

const GROK_PERIODS: Record<string, string> = {
	USAGE_PERIOD_TYPE_DAILY: 'Daily',
	USAGE_PERIOD_TYPE_WEEKLY: 'Weekly',
	USAGE_PERIOD_TYPE_MONTHLY: 'Monthly',
};

/** GET <grok base>/billing?format=credits */
export function grokBillingQuota(body: unknown, now: number): Quota {
	const config = obj(obj(body)?.config) ?? {};
	const period = obj(config.currentPeriod);
	const label = GROK_PERIODS[String(period?.type ?? '')] ?? 'Billing period';
	const resetsAt = timestamp(period?.end) ?? timestamp(config.billingPeriodEnd);
	let used = num(config.creditUsagePercent);
	if (used === undefined) {
		const limit = num(obj(config.monthlyLimit)?.val);
		const spent = num(obj(config.used)?.val);
		used = limit !== undefined && limit > 0 && spent !== undefined ? (spent / limit) * 100 : undefined;
	}
	const windows = used === undefined ? [] : [{ label, usedPercent: percent(used), resetsAt }];
	return { checkedAt: now, source: 'usage', windows, notes: [] };
}

/**
 * Limits the provider reported on the account's last response (CLIProxyAPI's
 * passive `quota.signals`): Claude's anthropic-ratelimit-unified-* (fractions)
 * and Codex's x-codex-* headers.
 */
export function headerQuota(type: string, signals: unknown, observedAt: number): Quota | undefined {
	const s = new Map(Object.entries(obj(signals) ?? {}).map(([k, v]) => [k.toLowerCase(), Array.isArray(v) ? v[0] : v]));
	const windows: QuotaWindow[] = [];
	const notes: string[] = [];
	let plan: string | undefined;
	if (type === 'claude') {
		for (const [key, label] of [
			['5h', '5-hour'],
			['7d', 'Weekly'],
		] as const) {
			const used = num(s.get(`anthropic-ratelimit-unified-${key}-utilization`));
			if (used !== undefined) {
				windows.push({
					label,
					usedPercent: percent(used * 100),
					resetsAt: timestamp(s.get(`anthropic-ratelimit-unified-${key}-reset`)),
				});
			}
		}
		s.get('anthropic-ratelimit-unified-status') === 'rejected' && notes.push('Limit reached');
	} else if (type === 'codex') {
		for (const slot of ['primary', 'secondary']) {
			const used = num(s.get(`x-codex-${slot}-used-percent`));
			const minutes = num(s.get(`x-codex-${slot}-window-minutes`));
			const after = num(s.get(`x-codex-${slot}-reset-after-seconds`));
			if (used !== undefined && minutes !== 0) {
				windows.push({
					label: minutes === undefined ? 'Limit' : windowLabel(minutes * 60),
					usedPercent: percent(used),
					resetsAt:
						timestamp(s.get(`x-codex-${slot}-reset-at`)) ??
						(after === undefined ? undefined : observedAt + after * 1000),
				});
			}
		}
		const p = s.get('x-codex-plan-type');
		plan = typeof p === 'string' && p ? titleCase(p) : undefined;
		s.get('x-codex-limit-reached') === 'true' && notes.push('Limit reached');
	}
	return windows.length === 0 && notes.length === 0
		? undefined
		: { checkedAt: observedAt, source: 'headers', plan, windows, notes };
}

/** One row of the sidecar's model list, enriched from its model definitions. */
export interface SubscriptionModel {
	id: string;
	type: AccountType;
	displayName?: string;
	contextWindow?: number;
	maxOutputTokens?: number;
	efforts?: Effort[];
	vision?: boolean;
}

const EFFORTS: readonly string[] = ['none', 'minimal', 'low', 'medium', 'high', 'xhigh', 'max'];

/** Turns a CLIProxyAPI model definition into a picker-ready model; undefined for non-chat models. */
export function subscriptionModel(type: AccountType, id: string, definition: unknown): SubscriptionModel | undefined {
	const d = obj(definition) ?? {};
	const outputs = Array.isArray(d.supportedOutputModalities) ? d.supportedOutputModalities : undefined;
	if (
		/(?:^|[-_.])(?:image|imagine|video|tts|voice|embedding|transcribe|audio)(?:$|[-_.\d])/iu.test(id) ||
		(outputs !== undefined && !outputs.includes('text'))
	) {
		return undefined;
	}
	const levels = (Array.isArray(d.thinking?.levels) ? d.thinking.levels : []).filter((l: unknown) =>
		EFFORTS.includes(String(l)),
	) as Effort[];
	const inputs = Array.isArray(d.supportedInputModalities) ? d.supportedInputModalities : undefined;
	const context = num(d.context_length);
	const output = num(d.max_completion_tokens);
	return {
		id,
		type,
		...(typeof d.display_name === 'string' && d.display_name ? { displayName: d.display_name } : {}),
		...(context !== undefined && context > 0 ? { contextWindow: context } : {}),
		...(output !== undefined && output > 0 ? { maxOutputTokens: output } : {}),
		...(levels.length > 0 ? { efforts: levels } : {}),
		...(inputs === undefined ? {} : { vision: inputs.includes('image') }),
	};
}
