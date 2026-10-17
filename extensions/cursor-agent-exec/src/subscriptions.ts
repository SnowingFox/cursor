/**
 * Requests from the Settings page's Subscriptions provider, served against the
 * CLIProxyAPI sidecar's management API (sidecar.ts). They arrive over the
 * local-provider model listing IPC (see build/patches, agent-exec/list-models).
 *
 * Tokens never leave the sidecar: usage endpoints are called through its
 * api-call route, which fills in the account's token and proxy.
 */
import { readFile } from 'node:fs/promises';
import type { ListedModel } from '../../../src/vs/workbench/contrib/localMode/common/localMode.js';
import {
	ACCOUNT_API_TYPES,
	type Account,
	type AccountType,
	claudeProfilePlan,
	claudeUsageQuota,
	codexUsageQuota,
	grokBillingQuota,
	headerQuota,
	isAccountType,
	type LoginStart,
	type LoginStatus,
	maskProxyUrl,
	type ProxyCheck,
	parseCallbackInput,
	type Quota,
	type SubscriptionsRequest,
	type SubscriptionsStatus,
	subscriptionModel,
	validateProxyUrl,
} from '../../../src/vs/workbench/contrib/localMode/common/subscriptions.js';
import { ensureSidecar, management, openExternal, type Sidecar } from './sidecar.js';

// Client identities the usage endpoints expect (the ones CLIProxyAPI itself
// uses for these accounts' traffic).
const CODEX_USER_AGENT = 'codex-tui/0.154.0 (Mac OS 26.5.2; arm64) iTerm.app/3.6.11 (codex-tui; 0.154.0)';
const CLAUDE_USER_AGENT = 'claude-cli/2.1.280 (external, cli)';
const GROK_CLIENT_VERSION = '1.0.62';

/** Usage fetched on request, kept for the life of the extension host. */
declare global {
	var __cursorLocalModeQuotas: Map<string, Quota> | undefined;
}
globalThis.__cursorLocalModeQuotas ??= new Map();
const quotas = globalThis.__cursorLocalModeQuotas;

interface CredentialRow {
	name: string;
	type?: string;
	provider?: string;
	auth_index?: string;
	email?: string;
	label?: string;
	status?: string;
	status_message?: string;
	disabled?: boolean;
	unavailable?: boolean;
	success?: number;
	failed?: number;
	priority?: number;
	path?: string;
	next_retry_after?: string;
	quota?: { observed_at?: string; signals?: Record<string, unknown> };
	id_token?: { chatgpt_account_id?: string; plan_type?: string };
}

/** The non-secret fields of an account's credential file. */
interface CredentialFile {
	proxy_url?: string;
	plan_type?: string;
	account_id?: string;
	base_url?: string;
	email?: string;
}

async function credentials(sidecar: Sidecar): Promise<CredentialRow[]> {
	const body = await management(sidecar, 'GET', '/credentials');
	return Array.isArray(body?.files) ? body.files : [];
}

async function credential(sidecar: Sidecar, name: string): Promise<CredentialRow> {
	const row = (await credentials(sidecar)).find((r) => r.name === name);
	if (row === undefined) {
		throw new Error(`Account ${name} is not signed in anymore.`);
	}
	return row;
}

async function credentialFile(row: CredentialRow): Promise<CredentialFile> {
	if (!row.path) {
		return {};
	}
	try {
		const f = JSON.parse(await readFile(row.path, 'utf8'));
		const text = (v: unknown) => (typeof v === 'string' && v.trim() !== '' ? v.trim() : undefined);
		return {
			proxy_url: text(f?.proxy_url),
			plan_type: text(f?.plan_type),
			account_id: text(f?.account_id),
			base_url: text(f?.base_url),
			email: text(f?.email),
		};
	} catch {
		return {};
	}
}

const typeOf = (row: CredentialRow) => String(row.type ?? row.provider ?? '').toLowerCase();

function titleCase(text: string): string {
	return text.replace(/[_-]+/gu, ' ').replace(/\b\w/gu, (c) => c.toUpperCase());
}

async function toAccount(row: CredentialRow): Promise<Account> {
	const type = typeOf(row);
	const file = await credentialFile(row);
	const observed = Date.parse(row.quota?.observed_at ?? '');
	const fromHeaders = Number.isNaN(observed) ? undefined : headerQuota(type, row.quota?.signals, observed);
	const fetched = quotas.get(row.name);
	const quota =
		fetched !== undefined && (fromHeaders === undefined || fetched.checkedAt >= fromHeaders.checkedAt)
			? fetched
			: fromHeaders;
	const plan = fetched?.plan ?? fromHeaders?.plan ?? row.id_token?.plan_type ?? file.plan_type;
	const retry = Date.parse(row.next_retry_after ?? '');
	return {
		name: row.name,
		type,
		email: row.email ?? file.email ?? (row.label && row.label !== row.name ? row.label : undefined),
		plan: plan ? titleCase(plan) : undefined,
		disabled: row.disabled === true,
		status: row.disabled === true ? 'disabled' : String(row.status ?? 'active'),
		statusMessage: row.status_message || undefined,
		coolingUntil: Number.isNaN(retry) || retry <= Date.now() ? undefined : retry,
		proxyUrl: file.proxy_url,
		priority: typeof row.priority === 'number' ? row.priority : undefined,
		success: Number(row.success ?? 0),
		failed: Number(row.failed ?? 0),
		quota,
	};
}

async function status(sidecar: Sidecar): Promise<SubscriptionsStatus> {
	const rows = await credentials(sidecar);
	return {
		running: true,
		version: sidecar.version,
		binary: sidecar.binary,
		accounts: await Promise.all(rows.map(toAccount)),
	};
}

async function login(sidecar: Sidecar, type: AccountType): Promise<LoginStart> {
	if (!isAccountType(type)) {
		throw new Error(`Unknown account type ${type}.`);
	}
	let manual = false;
	let r: any;
	try {
		// is_webui: CLIProxyAPI listens on the provider's fixed redirect port
		// (Codex 1455, Claude 54545) and forwards the browser back to itself.
		r = await management(sidecar, 'GET', `/oauth/auth-url?provider=${type}&is_webui=true`);
	} catch (e) {
		if (!/callback server/iu.test((e as Error).message)) {
			throw e;
		}
		// The redirect port is taken (another CLI signing in?): the browser
		// lands on a page that does not load and the user pastes its address.
		r = await management(sidecar, 'GET', `/oauth/auth-url?provider=${type}`);
		manual = true;
	}
	if (typeof r?.url !== 'string' || typeof r?.state !== 'string') {
		throw new Error('CLIProxyAPI did not return a sign-in link.');
	}
	openExternal(r.url);
	const device = r.flow === 'device';
	const expiresIn = Number(r.expires_in);
	return {
		state: r.state,
		url: r.url,
		flow: device ? 'device' : 'browser',
		...(typeof r.user_code === 'string' && r.user_code ? { userCode: r.user_code } : {}),
		expiresAt: Date.now() + (Number.isFinite(expiresIn) && expiresIn > 0 ? expiresIn * 1000 : 5 * 60_000),
		...(manual ? { manual } : {}),
	};
}

async function loginStatus(sidecar: Sidecar, state: string): Promise<LoginStatus> {
	const r = await management(sidecar, 'GET', `/oauth/status?state=${encodeURIComponent(state)}`);
	const s = r?.status === 'ok' || r?.status === 'error' ? r.status : 'wait';
	return s === 'error' ? { status: s, error: String(r?.error ?? 'Sign-in failed.') } : { status: s };
}

async function loginCallback(sidecar: Sidecar, state: string, input: string): Promise<LoginStatus> {
	const parsed = parseCallbackInput(input);
	if (parsed === undefined) {
		throw new Error('Paste the address the browser landed on, or the code it showed.');
	}
	// Our state, not the pasted one: it names the pending sign-in.
	await management(sidecar, 'POST', '/oauth/callback', {
		state,
		...('redirectUrl' in parsed ? { redirect_url: parsed.redirectUrl } : { code: parsed.code }),
	});
	return loginStatus(sidecar, state);
}

async function update(
	sidecar: Sidecar,
	name: string,
	patch: { disabled?: boolean; proxyUrl?: string; priority?: number },
): Promise<SubscriptionsStatus> {
	if (patch.disabled !== undefined) {
		await management(sidecar, 'PATCH', '/credentials/status', { name, disabled: patch.disabled });
	}
	const fields: Record<string, unknown> = {};
	if (patch.proxyUrl !== undefined) {
		const error = validateProxyUrl(patch.proxyUrl);
		if (error !== undefined) {
			throw new Error(error);
		}
		fields.proxy_url = patch.proxyUrl.trim();
	}
	if (patch.priority !== undefined) {
		fields.priority = Math.trunc(patch.priority);
	}
	if (Object.keys(fields).length > 0) {
		await management(sidecar, 'PATCH', '/credentials/fields', { name, ...fields });
	}
	return status(sidecar);
}

async function remove(sidecar: Sidecar, name: string): Promise<SubscriptionsStatus> {
	await management(sidecar, 'DELETE', `/credentials?name=${encodeURIComponent(name)}`);
	quotas.delete(name);
	return status(sidecar);
}

interface UpstreamResponse {
	status: number;
	body: unknown;
}

/** CLIProxyAPI's api-call says only "request failed" when it could not connect. */
function unreachable(e: unknown, url: string, proxyUrl: string | undefined): Error {
	const message = (e as Error).message;
	if (message !== 'request failed') {
		return e as Error;
	}
	const via = proxyUrl ? ` through ${maskProxyUrl(proxyUrl)}` : '';
	return new Error(`Could not connect to ${new URL(url).host}${via}. Check the network or the proxy.`);
}

/** An upstream call made by the sidecar with the account's token ($TOKEN$) and proxy. */
async function upstream(
	sidecar: Sidecar,
	row: CredentialRow,
	url: string,
	header: Record<string, string>,
): Promise<UpstreamResponse> {
	let r: any;
	try {
		r = await management(
			sidecar,
			'POST',
			'/requests/api-call',
			{ auth_index: row.auth_index, method: 'GET', url, header: { Authorization: 'Bearer $TOKEN$', ...header } },
			70_000,
		);
	} catch (e) {
		throw unreachable(e, url, (await credentialFile(row)).proxy_url ?? sidecar.config.proxyUrl);
	}
	let body: unknown = r?.body;
	try {
		body = typeof r?.body === 'string' ? JSON.parse(r.body) : r?.body;
	} catch {}
	return { status: Number(r?.status_code), body };
}

function upstreamError(what: string, r: UpstreamResponse): Error {
	if (r.status === 401 || r.status === 403) {
		return new Error(`${what}: the sign-in was rejected (HTTP ${r.status}). Sign in to this account again.`);
	}
	if (r.status === 426) {
		return new Error(`${what}: xAI asks for a newer Grok CLI version (HTTP 426).`);
	}
	const text = typeof r.body === 'string' ? r.body : JSON.stringify(r.body ?? '');
	return new Error(`${what}: HTTP ${r.status}${text ? ` ${text.slice(0, 200)}` : ''}`);
}

async function fetchQuota(sidecar: Sidecar, name: string): Promise<Quota> {
	const row = await credential(sidecar, name);
	const type = typeOf(row);
	const file = await credentialFile(row);
	const now = Date.now();
	let quota: Quota;
	if (type === 'codex') {
		const accountId = row.id_token?.chatgpt_account_id ?? file.account_id;
		const r = await upstream(sidecar, row, 'https://chatgpt.com/backend-api/wham/usage', {
			Accept: 'application/json',
			'User-Agent': CODEX_USER_AGENT,
			Originator: 'codex-tui',
			...(accountId ? { 'ChatGPT-Account-Id': accountId } : {}),
		});
		if (r.status !== 200) {
			throw upstreamError('Codex usage', r);
		}
		quota = codexUsageQuota(r.body, now);
	} else if (type === 'claude') {
		const headers = {
			Accept: 'application/json, text/plain, */*',
			'Content-Type': 'application/json',
			'User-Agent': CLAUDE_USER_AGENT,
			'anthropic-beta': 'oauth-2025-04-20',
		};
		const [usage, profile] = await Promise.all([
			upstream(sidecar, row, 'https://api.anthropic.com/api/oauth/usage', headers),
			quotas.get(name)?.plan === undefined
				? upstream(sidecar, row, 'https://api.anthropic.com/api/oauth/profile', headers).catch(() => undefined)
				: Promise.resolve(undefined),
		]);
		if (usage.status !== 200) {
			throw upstreamError('Claude usage', usage);
		}
		quota = claudeUsageQuota(usage.body, now);
		quota.plan = (profile?.status === 200 ? claudeProfilePlan(profile.body) : undefined) ?? quotas.get(name)?.plan;
	} else if (type === 'xai') {
		const base = (file.base_url ?? 'https://cli-chat-proxy.grok.com/v1').replace(/\/+$/u, '');
		const r = await upstream(sidecar, row, `${base}/billing?format=credits`, {
			Accept: 'application/json',
			'User-Agent': `grok-shell/${GROK_CLIENT_VERSION} (macos; aarch64)`,
			'X-XAI-Token-Auth': 'xai-grok-cli',
			'x-grok-client-version': GROK_CLIENT_VERSION,
			'x-grok-client-identifier': 'grok-shell',
			'x-grok-client-mode': 'headless',
		});
		if (r.status !== 200) {
			throw upstreamError('Grok usage', r);
		}
		quota = grokBillingQuota(r.body, now);
	} else {
		throw new Error(`Usage limits are not available for ${type} accounts.`);
	}
	quotas.set(name, quota);
	return quota;
}

/** Chat models of the signed-in, enabled accounts, with what CLIProxyAPI knows about them. */
async function models(sidecar: Sidecar): Promise<{ cursorLocalModels: ListedModel[] }> {
	const rows = (await credentials(sidecar)).filter((r) => r.disabled !== true && isAccountType(typeOf(r)));
	const byType = new Map<AccountType, Set<string>>();
	await Promise.all(
		rows.map(async (row) => {
			const body = await management(sidecar, 'GET', `/credentials/models?name=${encodeURIComponent(row.name)}`);
			const type = typeOf(row) as AccountType;
			const ids = byType.get(type) ?? new Set();
			for (const m of Array.isArray(body?.models) ? body.models : []) {
				typeof m?.id === 'string' && m.id && ids.add(m.id);
			}
			byType.set(type, ids);
		}),
	);
	const listed: ListedModel[] = [];
	for (const [type, ids] of byType) {
		const defs = await management(sidecar, 'GET', `/routing/model-definitions/${type}`).catch(() => ({}));
		const known = new Map<string, unknown>(
			(Array.isArray(defs?.models) ? defs.models : []).map((d: any) => [String(d?.id), d]),
		);
		for (const id of ids) {
			const m = subscriptionModel(type, id, known.get(id));
			if (m !== undefined) {
				listed.push({
					id: m.id,
					apiType: ACCOUNT_API_TYPES[type],
					contextWindow: m.contextWindow,
					maxOutputTokens: m.maxOutputTokens,
					...(m.efforts === undefined ? {} : { efforts: m.efforts }),
					...(m.vision === undefined ? {} : { vision: m.vision }),
				});
			}
		}
	}
	return { cursorLocalModels: listed };
}

const PROXY_TARGETS: Record<AccountType, string> = {
	claude: 'https://api.anthropic.com/',
	codex: 'https://chatgpt.com/',
	xai: 'https://auth.x.ai/.well-known/openid-configuration',
};

/** Reaches the account type's provider through `proxyUrl`. */
async function checkProxy(sidecar: Sidecar, proxyUrl: string, type: AccountType): Promise<ProxyCheck> {
	const error = validateProxyUrl(proxyUrl);
	if (error !== undefined || proxyUrl.trim() === '') {
		return { ok: false, ms: 0, text: error ?? 'Enter a proxy URL first.' };
	}
	const target = PROXY_TARGETS[type] ?? PROXY_TARGETS.claude;
	const started = Date.now();
	try {
		const r = await management(
			sidecar,
			'POST',
			'/requests/api-call',
			{ method: 'GET', url: target, proxy_url: proxyUrl.trim(), header: { 'User-Agent': 'Cursor' } },
			30_000,
		);
		const ms = Date.now() - started;
		const code = Number(r?.status_code);
		return { ok: code > 0, ms, text: `Reached ${new URL(target).host} in ${ms} ms (HTTP ${code}).` };
	} catch (e) {
		return { ok: false, ms: Date.now() - started, text: unreachable(e, target, proxyUrl).message };
	}
}

export async function handle(request: SubscriptionsRequest): Promise<unknown> {
	if (request === null || typeof request !== 'object' || request.sidecar === undefined) {
		throw new Error('Malformed subscriptions request.');
	}
	let sidecar: Sidecar;
	try {
		sidecar = await ensureSidecar(request.sidecar);
	} catch (e) {
		if (request.op === 'status') {
			return { running: false, error: (e as Error).message, accounts: [] } satisfies SubscriptionsStatus;
		}
		throw e;
	}
	switch (request.op) {
		case 'status':
			return status(sidecar);
		case 'login':
			return login(sidecar, request.type);
		case 'login-status':
			return loginStatus(sidecar, request.state);
		case 'login-callback':
			return loginCallback(sidecar, request.state, request.input);
		case 'login-cancel':
			await management(sidecar, 'DELETE', `/oauth/session?state=${encodeURIComponent(request.state)}`).catch(() => {});
			return { status: 'error', error: 'Cancelled.' } satisfies LoginStatus;
		case 'update':
			return update(sidecar, request.name, request.patch ?? {});
		case 'remove':
			return remove(sidecar, request.name);
		case 'quota':
			return fetchQuota(sidecar, request.name);
		case 'models':
			return models(sidecar);
		case 'check-proxy':
			return checkProxy(sidecar, request.proxyUrl, request.type);
		default:
			throw new Error(`Unknown subscriptions request ${(request as { op?: unknown }).op}.`);
	}
}
