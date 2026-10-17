import { type ReactNode, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { cursorHost } from '../../../../../glass/host/cursorHost.js';
import { formatCountdown } from '../../common/format.js';
import type { CustomModel, CustomProvider } from '../../common/localMode.js';
import { subscriptionApiType } from '../../common/providers.js';
import {
	ACCOUNT_TYPE_LABELS,
	type Account,
	type AccountPatch,
	type AccountType,
	isAccountType,
	maskProxyUrl,
	type ProxyCheck,
	type Quota,
	type RoutingSettings,
	type RoutingStrategy,
	routingSettings,
	type SubscriptionsStatus,
	sidecarDataDir,
	validateProxyUrl,
} from '../../common/subscriptions.js';
import { subscriptionsClient, userDataDir } from '../subscriptionsClient.js';
import { Icon } from './icons.js';
import { ModelList } from './ModelList.js';
import { type ConnectionCheck, Field, ProviderAvatar } from './ProviderCard.js';
import { AccountAvatar, SubscriptionSignIn } from './SubscriptionSignIn.js';

const STATUS_REFRESH_MS = 60_000;
/** Usage fetched this recently (by the extension host) is not fetched again when the page opens. */
const USAGE_FRESH_MS = 10 * 60_000;

const STRATEGY_LABELS: Record<RoutingStrategy, { label: string; hint: string }> = {
	'round-robin': { label: 'Round robin', hint: 'Take turns between the accounts of a type.' },
	'weighted-round-robin': {
		label: 'Weighted',
		hint: "Take turns in proportion to each account's weight (account settings). Weight 0 skips an account.",
	},
	'fill-first': { label: 'Fill first', hint: 'Use one account until it hits a limit, then the next.' },
};

const IDLE_OPTIONS = [15, 30, 60, 180, 720, 1440].map((m) => ({ value: m, label: minutes(m) }));
const WAIT_OPTIONS = [0, 10, 30, 60, 120, 300].map((s) => ({
	value: s,
	label: s === 0 ? "Don't wait" : s < 60 ? `${s} s` : minutes(s / 60),
}));
const COUNT_OPTIONS = (max: number, none: string) =>
	Array.from({ length: max + 1 }, (_, n) => ({ value: n, label: n === 0 ? none : String(n) }));

function minutes(m: number): string {
	return m < 60 ? `${m} min` : m % 60 === 0 ? `${m / 60} hour${m === 60 ? '' : 's'}` : `${m} min`;
}

function errorText(e: unknown): string {
	return e instanceof Error ? e.message.replace(/^Error invoking remote method '[^']*': (Error: )?/u, '') : String(e);
}

function ago(ms: number): string {
	return ms < 60_000 ? 'just now' : `${formatCountdown(ms)} ago`;
}

/** "Claude", "Codex" or "Grok" for a subscriptions model. */
function modelBadge(model: CustomModel): string {
	if (subscriptionApiType(model) === 'anthropic') {
		return 'Claude';
	}
	return /^grok/iu.test(model.id) ? 'Grok' : 'Codex';
}

/** A text field that commits on Enter or blur, and only valid values; Escape reverts. */
function CommitInput(props: {
	value: string;
	label: string;
	placeholder?: string;
	validate?: (value: string) => string | undefined;
	onCommit: (value: string) => void;
}): ReactNode {
	const [draft, setDraft] = useState<string | undefined>(undefined);
	const error = draft === undefined ? undefined : props.validate?.(draft.trim());
	const commit = () => {
		if (draft !== undefined && error === undefined) {
			draft.trim() !== props.value && props.onCommit(draft.trim());
			setDraft(undefined);
		}
	};
	return (
		<>
			<input
				value={draft ?? props.value}
				placeholder={props.placeholder}
				aria-label={props.label}
				aria-invalid={error !== undefined}
				spellCheck={false}
				className="local-mode-input local-mode-mono"
				onChange={(e) => setDraft(e.target.value)}
				onBlur={commit}
				onKeyDown={(e) => {
					if (e.key === 'Enter') {
						commit();
					} else if (e.key === 'Escape') {
						setDraft(undefined);
					}
				}}
			/>
			{error === undefined ? null : (
				<span className="local-mode-check">
					<Icon name="alert" size={13} />
					<span>{error}</span>
				</span>
			)}
		</>
	);
}

/** A native select over a fixed list; a current value outside the list is kept as an extra option. */
function Choice<T extends string | number>(props: {
	value: T;
	options: { value: T; label: string }[];
	label: string;
	format?: (value: T) => string;
	onChange: (value: T) => void;
}): ReactNode {
	const options = props.options.some((o) => o.value === props.value)
		? props.options
		: [...props.options, { value: props.value, label: props.format?.(props.value) ?? String(props.value) }];
	return (
		<label className="lm-select">
			<select
				value={String(props.value)}
				aria-label={props.label}
				onChange={(e) => {
					const picked = options.find((o) => String(o.value) === e.target.value);
					picked !== undefined && props.onChange(picked.value);
				}}
			>
				{options.map((o) => (
					<option key={String(o.value)} value={String(o.value)}>
						{o.label}
					</option>
				))}
			</select>
			<Icon name="chevron" size={12} />
		</label>
	);
}

/** One setting: label and hint on the left, its control on the right. */
function SettingRow(props: { label: string; hint: ReactNode; children: ReactNode }): ReactNode {
	return (
		<div className="lm-sub-setting">
			<div className="lm-sub-setting-text">
				<span className="lm-sub-setting-label">{props.label}</span>
				<span className="local-mode-hint">{props.hint}</span>
			</div>
			<div className="lm-sub-setting-control">{props.children}</div>
		</div>
	);
}

/** Sticky sessions, retries and cooldowns (CLIProxyAPI routing; applied without a restart). */
function RoutingFields(props: {
	routing: RoutingSettings | undefined;
	onChange: (patch: RoutingSettings) => void;
}): ReactNode {
	const { Switch } = cursorHost().cursor.ui;
	const r = routingSettings(props.routing);
	const set = props.onChange;
	return (
		<div className="lm-sub-settings">
			<SettingRow
				label="Sticky sessions"
				hint="Keep each conversation on one account, so its prompt cache keeps hitting. It moves only when that account can't serve."
			>
				<Switch checked={r.sessionAffinity} onCheckedChange={(on) => set({ sessionAffinity: on })} />
			</SettingRow>
			{r.sessionAffinity ? (
				<>
					<SettingRow label="Release after" hint="How long an idle conversation keeps its account.">
						<Choice
							label="Release after"
							value={r.affinityTtlMinutes}
							options={IDLE_OPTIONS}
							format={minutes}
							onChange={(v) => set({ affinityTtlMinutes: v })}
						/>
					</SettingRow>
					<SettingRow
						label="Move a conversation on"
						hint={
							r.rebindOn === 'quota'
								? 'Limits and sign-in errors only. A brief upstream error retries on another account once, then the conversation returns.'
								: 'Any error from its account, including brief upstream ones.'
						}
					>
						<div className="local-mode-segmented">
							{(
								[
									['any', 'Any error'],
									['quota', 'Limits only'],
								] as const
							).map(([value, label]) => (
								<button
									key={value}
									type="button"
									aria-pressed={r.rebindOn === value}
									data-active={r.rebindOn === value || undefined}
									onClick={() => set({ rebindOn: value })}
								>
									{label}
								</button>
							))}
						</div>
					</SettingRow>
				</>
			) : null}
			<SettingRow
				label="Retry rounds"
				hint="When every account of a type failed (limit, 403, 5xx), go over them again this many times."
			>
				<Choice
					label="Retry rounds"
					value={r.retries}
					options={COUNT_OPTIONS(5, 'None')}
					onChange={(v) => set({ retries: v })}
				/>
			</SettingRow>
			<SettingRow
				label="Wait for a cooling account"
				hint="If all of them are cooling down, wait up to this long for the first one to come back instead of failing."
			>
				<Choice
					label="Wait for a cooling account"
					value={r.retryWaitSeconds}
					options={WAIT_OPTIONS}
					format={(v) => `${v} s`}
					onChange={(v) => set({ retryWaitSeconds: v })}
				/>
			</SettingRow>
			<SettingRow
				label="Cool down after errors"
				hint="Rest an account for a while after a limit or error, so requests go to the others. Off: keep sending it requests."
			>
				<Switch checked={r.cooling} onCheckedChange={(on) => set({ cooling: on })} />
			</SettingRow>
			{r.cooling ? (
				<SettingRow
					label="Per-model limits"
					hint="A Claude or Codex limit on one model rests the account for that model only; its other models keep serving."
				>
					<Switch checked={r.modelCooling} onCheckedChange={(on) => set({ modelCooling: on })} />
				</SettingRow>
			) : null}
			<SettingRow
				label="Stream retries"
				hint="Retry a response that fails before its first token, without the agent noticing."
			>
				<Choice
					label="Stream retries"
					value={r.streamRetries}
					options={COUNT_OPTIONS(3, 'None')}
					onChange={(v) => set({ streamRetries: v })}
				/>
			</SettingRow>
		</div>
	);
}

/** Proxy URL with "Test" (reaches the provider through it) and "Save". */
function ProxyField(props: {
	value: string;
	saveLabel: string;
	onSave: (proxyUrl: string) => void | Promise<void>;
	onTest: (proxyUrl: string) => Promise<ProxyCheck>;
}): ReactNode {
	const [draft, setDraft] = useState(props.value);
	const [check, setCheck] = useState<ProxyCheck | undefined>(undefined);
	const [testing, setTesting] = useState(false);
	useEffect(() => setDraft(props.value), [props.value]);
	const value = draft.trim();
	const error = validateProxyUrl(value);
	const changed = value !== props.value;
	const test = async () => {
		setTesting(true);
		try {
			setCheck(await props.onTest(value));
		} catch (e) {
			setCheck({ ok: false, ms: 0, text: errorText(e) });
		} finally {
			setTesting(false);
		}
	};
	return (
		<div className="lm-sub-proxy">
			<div className="lm-sub-inline">
				<input
					value={draft}
					placeholder="socks5://127.0.0.1:1080"
					aria-label="Proxy URL"
					aria-invalid={error !== undefined}
					spellCheck={false}
					autoComplete="off"
					className="local-mode-input local-mode-mono"
					onChange={(e) => {
						setDraft(e.target.value);
						setCheck(undefined);
					}}
					onKeyDown={(e) => e.key === 'Enter' && changed && error === undefined && void props.onSave(value)}
				/>
				<button
					type="button"
					className="local-mode-button"
					disabled={testing || error !== undefined || value === '' || value === 'direct' || value === 'none'}
					onClick={() => void test()}
				>
					{testing ? 'Testing…' : 'Test'}
				</button>
				{changed ? (
					<button
						type="button"
						className="local-mode-button"
						disabled={error !== undefined}
						onClick={() => void props.onSave(value)}
					>
						{props.saveLabel}
					</button>
				) : null}
			</div>
			{error !== undefined ? (
				<span className="local-mode-check">
					<Icon name="alert" size={13} />
					<span>{error}</span>
				</span>
			) : check !== undefined ? (
				<span className="local-mode-check" data-ok={check.ok || undefined}>
					<Icon name={check.ok ? 'check' : 'alert'} size={13} />
					<span>{check.text}</span>
				</span>
			) : null}
		</div>
	);
}

function QuotaView(props: {
	quota: Quota | undefined;
	busy: boolean;
	error: string | undefined;
	now: number;
	onRefresh: () => void;
}): ReactNode {
	const { quota, busy, error, now } = props;
	return (
		<div className="lm-sub-quota">
			{quota?.windows.map((w) => {
				const left = Math.round(100 - w.usedPercent);
				return (
					<div
						key={w.label}
						className="lm-sub-quota-row"
						data-level={left <= 10 ? 'low' : left <= 35 ? 'mid' : undefined}
					>
						<span className="lm-sub-quota-label">{w.label}</span>
						{/* The value is spelled out next to it. */}
						<span className="lm-sub-quota-bar" aria-hidden="true">
							<span style={{ width: `${left}%` }} />
						</span>
						<span className="lm-sub-quota-value">{left}% left</span>
						<span
							className="lm-sub-quota-reset"
							title={w.resetsAt === undefined ? undefined : new Date(w.resetsAt).toLocaleString()}
						>
							{w.resetsAt === undefined
								? ''
								: w.resetsAt > now
									? `resets in ${formatCountdown(w.resetsAt - now)}`
									: 'reset'}
						</span>
					</div>
				);
			})}
			<div className="lm-sub-quota-footer">
				<span className="local-mode-hint">
					{[
						...(quota?.notes ?? []),
						quota === undefined
							? 'No usage data yet'
							: quota.windows.length === 0
								? `No limits reported · checked ${ago(now - quota.checkedAt)}`
								: quota.source === 'headers'
									? `From the last response, ${ago(now - quota.checkedAt)}`
									: `Checked ${ago(now - quota.checkedAt)}`,
					].join(' · ')}
				</span>
				<button type="button" className="local-mode-link-button" disabled={busy} onClick={props.onRefresh}>
					<span className="local-mode-spin" data-active={busy || undefined}>
						<Icon name="refresh" size={12} />
					</span>
					{busy ? 'Checking…' : 'Refresh usage'}
				</button>
			</div>
			{error === undefined ? null : (
				<span className="local-mode-check">
					<Icon name="alert" size={13} />
					<span>{error}</span>
				</span>
			)}
		</div>
	);
}

function accountState(a: Account, now: number): { text: string; tone: 'ok' | 'warn' | 'err' | 'off'; title?: string } {
	if (a.disabled) {
		return { text: 'Off', tone: 'off' };
	}
	if (a.coolingUntil !== undefined && a.coolingUntil > now) {
		return { text: `Resumes in ${formatCountdown(a.coolingUntil - now)}`, tone: 'warn', title: a.statusMessage };
	}
	if (a.status === 'error' || a.status === 'unavailable') {
		return { text: 'Error', tone: 'err', title: a.statusMessage };
	}
	if (a.quota?.windows.some((w) => w.usedPercent >= 100) || a.quota?.notes.includes('Limit reached')) {
		return { text: 'Limit reached', tone: 'warn' };
	}
	return { text: 'Active', tone: 'ok', title: a.statusMessage };
}

function AccountRow(props: {
	account: Account;
	now: number;
	quotaBusy: boolean;
	quotaError: string | undefined;
	onQuota: () => void;
	onUpdate: (patch: AccountPatch) => Promise<void>;
	onRemove: () => Promise<void>;
	onResume: () => Promise<void>;
	onCheckProxy: (proxyUrl: string, type: AccountType) => Promise<ProxyCheck>;
}): ReactNode {
	const { Switch } = cursorHost().cursor.ui;
	const { account: a, now } = props;
	const [open, setOpen] = useState(false);
	const [confirm, setConfirm] = useState(false);
	const type = isAccountType(a.type) ? a.type : undefined;
	const state = accountState(a, now);
	const details = [
		type === undefined ? a.type : ACCOUNT_TYPE_LABELS[type],
		a.plan,
		a.priority ? `priority ${a.priority}` : undefined,
		a.weight !== undefined && a.weight !== 1 ? `weight ${a.weight}` : undefined,
		a.proxyUrl ? `via ${maskProxyUrl(a.proxyUrl)}` : undefined,
	].filter(Boolean);
	const cooling = !a.disabled && a.coolingUntil !== undefined && a.coolingUntil > now;

	return (
		<li className="lm-sub-account" data-off={a.disabled || undefined}>
			<div className="lm-sub-account-head">
				<AccountAvatar type={a.type} />
				<div className="local-mode-card-title">
					<span className="lm-sub-account-name" title={a.name}>
						{a.email ?? a.name}
					</span>
					<span className="local-mode-hint">{details.join(' · ')}</span>
				</div>
				{cooling ? (
					<button
						type="button"
						className="local-mode-link-button"
						title="Clear the cooldown and send it requests again now"
						onClick={() => void props.onResume()}
					>
						Resume now
					</button>
				) : null}
				<span className="lm-sub-pill" data-tone={state.tone} title={state.title}>
					{state.text}
				</span>
				<Switch checked={!a.disabled} onCheckedChange={(on) => void props.onUpdate({ disabled: !on })} />
				<button
					type="button"
					className="local-mode-icon-button lm-sub-expand"
					aria-expanded={open}
					aria-label="Account settings"
					title="Account settings"
					onClick={() => {
						setOpen(!open);
						setConfirm(false);
					}}
				>
					<Icon name="chevron" size={13} />
				</button>
			</div>
			{a.disabled ? null : (
				<QuotaView
					quota={a.quota}
					busy={props.quotaBusy}
					error={props.quotaError}
					now={now}
					onRefresh={props.onQuota}
				/>
			)}
			{open ? (
				<div className="lm-sub-account-settings">
					<Field
						label="Proxy"
						hint="This account's requests, token refresh and usage checks go through it. Empty: the default proxy under Advanced, if any."
					>
						<ProxyField
							value={a.proxyUrl ?? ''}
							saveLabel="Save proxy"
							onSave={(proxyUrl) => props.onUpdate({ proxyUrl })}
							onTest={(proxyUrl) => props.onCheckProxy(proxyUrl, type ?? 'claude')}
						/>
					</Field>
					<div className="lm-sub-account-grid">
						<Field label="Priority" hint="Higher serves first; lower ones only when every higher account can't.">
							<CommitInput
								value={String(a.priority ?? 0)}
								label="Priority"
								validate={(v) => (/^-?\d{1,6}$/u.test(v) ? undefined : 'Use a whole number.')}
								onCommit={(v) => void props.onUpdate({ priority: Number(v) })}
							/>
						</Field>
						<Field label="Weight" hint="Share of requests when selection is Weighted. 0 skips this account.">
							<CommitInput
								value={String(a.weight ?? 1)}
								label="Weight"
								validate={(v) =>
									/^\d{1,7}$/u.test(v) && Number(v) <= 1_000_000 ? undefined : 'Use a whole number from 0 to 1000000.'
								}
								onCommit={(v) => void props.onUpdate({ weight: Number(v) })}
							/>
						</Field>
					</div>
					<div className="local-mode-check-row lm-sub-account-footer">
						<span className="local-mode-hint">
							{a.success.toLocaleString()} requests served
							{a.failed > 0 ? `, ${a.failed.toLocaleString()} failed` : ''}
							{a.statusMessage ? ` · ${a.statusMessage}` : ''}
						</span>
						<button
							type="button"
							className="local-mode-link-button"
							data-danger
							onClick={() => (confirm ? void props.onRemove() : setConfirm(true))}
						>
							<Icon name="trash" size={12} />
							{confirm ? 'Click again to sign out' : 'Sign out'}
						</button>
					</div>
				</div>
			) : null}
		</li>
	);
}

/**
 * Settings > Models > Custom Providers, built-in "Subscriptions" provider: the
 * user's Claude Code, Codex and Grok accounts, served by the CLIProxyAPI
 * sidecar. Account changes apply right away (they live in the sidecar); the
 * provider's own fields go through the page's Save bar like any provider.
 */
export function SubscriptionsCard(props: {
	provider: CustomProvider;
	busy: boolean;
	check: ConnectionCheck | undefined;
	onChange: (patch: Partial<CustomProvider>) => void;
	onRemove: () => void;
	onFetch: () => void;
}): ReactNode {
	const { useService, services, ui } = cursorHost().cursor;
	const { Switch } = ui;
	const inference = useService(services.localInference);
	const { provider: p, busy, check, onChange, onRemove, onFetch } = props;
	const { port, apiKey, strategy, proxyUrl, routing } = p;
	const client = useMemo(
		() => subscriptionsClient(inference, { port, apiKey, strategy, proxyUrl, routing }),
		[inference, port, apiKey, strategy, proxyUrl, routing],
	);

	const [status, setStatus] = useState<SubscriptionsStatus | undefined>(undefined);
	const [loading, setLoading] = useState(false);
	const [actionError, setActionError] = useState<string | undefined>(undefined);
	const [quotaBusy, setQuotaBusy] = useState<ReadonlySet<string>>(new Set());
	const [quotaErrors, setQuotaErrors] = useState<ReadonlyMap<string, string>>(new Map());
	const [now, setNow] = useState(Date.now());
	const [advanced, setAdvanced] = useState(false);
	const [showKey, setShowKey] = useState(false);

	const refresh = useCallback(async () => {
		setLoading(true);
		try {
			setStatus(await client.status());
		} catch (e) {
			setStatus({ running: false, error: errorText(e), accounts: [] });
		} finally {
			setLoading(false);
			setNow(Date.now());
		}
	}, [client]);

	// Debounced: a settings change restarts or reconfigures the sidecar.
	useEffect(() => {
		const t = setTimeout(() => void refresh(), 250);
		return () => clearTimeout(t);
	}, [refresh]);
	useEffect(() => {
		const timer = setInterval(() => void refresh(), STATUS_REFRESH_MS);
		const onFocus = () => void refresh();
		window.addEventListener('focus', onFocus);
		return () => {
			clearInterval(timer);
			window.removeEventListener('focus', onFocus);
		};
	}, [refresh]);

	const loadQuota = useCallback(
		async (name: string) => {
			setQuotaBusy((s) => new Set(s).add(name));
			setQuotaErrors((m) => {
				const next = new Map(m);
				next.delete(name);
				return next;
			});
			try {
				const quota = await client.quota(name);
				setStatus(
					(s) =>
						s && {
							...s,
							accounts: s.accounts.map((a) => (a.name === name ? { ...a, quota, plan: quota.plan ?? a.plan } : a)),
						},
				);
			} catch (e) {
				setQuotaErrors((m) => new Map(m).set(name, errorText(e)));
			} finally {
				setQuotaBusy((s) => {
					const next = new Set(s);
					next.delete(name);
					return next;
				});
				setNow(Date.now());
			}
		},
		[client],
	);

	// Usage once per account while the page is open, unless it is fresh.
	const checked = useRef(new Set<string>());
	useEffect(() => {
		for (const a of status?.accounts ?? []) {
			const fresh = a.quota?.source === 'usage' && Date.now() - a.quota.checkedAt < USAGE_FRESH_MS;
			if (!a.disabled && !fresh && !checked.current.has(a.name)) {
				checked.current.add(a.name);
				void loadQuota(a.name);
			}
		}
	}, [status, loadQuota]);

	const act = async (fn: () => Promise<SubscriptionsStatus>) => {
		setActionError(undefined);
		try {
			setStatus(await fn());
		} catch (e) {
			setActionError(errorText(e));
		}
	};

	const onSignedIn = useCallback(() => {
		void refresh();
		onFetch();
	}, [refresh, onFetch]);

	const accounts = status?.accounts ?? [];
	const models = p.models ?? [];
	const on = p.enabled !== false;
	const running = status?.running === true;
	let dataDir = '';
	try {
		dataDir = sidecarDataDir(userDataDir());
	} catch {}

	return (
		<div className="local-mode-card" data-off={!on || undefined}>
			<div className="local-mode-card-header">
				<ProviderAvatar name={p.name} kind="subscriptions" />
				<div className="local-mode-card-title">
					<input
						value={p.name}
						placeholder="Provider name"
						aria-label="Provider name"
						spellCheck={false}
						className="local-mode-title-input"
						onChange={(e) => onChange({ name: e.target.value })}
					/>
					<span className="local-mode-hint">
						{on
							? `Claude Code, Codex and Grok · ${accounts.length} account(s) · ${models.filter((m) => m.enabled !== false).length} model(s) in the picker`
							: 'Off: hidden from the model picker'}
					</span>
				</div>
				<Switch checked={on} onCheckedChange={(enabled) => onChange({ enabled })} />
				<button
					type="button"
					className="local-mode-icon-button"
					aria-label="Remove provider"
					title="Remove provider (accounts stay signed in)"
					onClick={onRemove}
				>
					<Icon name="trash" size={14} />
				</button>
			</div>

			<div className="local-mode-block">
				<div className="local-mode-block-header">
					<div>
						<div className="local-mode-block-title">Accounts</div>
						<div className="local-mode-hint">
							{status === undefined
								? 'Starting CLIProxyAPI…'
								: running
									? `Served by CLIProxyAPI${status.version ? ` ${status.version}` : ''} on 127.0.0.1:${port}. Requests count against each account's own plan.`
									: 'CLIProxyAPI is not running.'}
						</div>
					</div>
					<button type="button" className="local-mode-link-button" disabled={loading} onClick={() => void refresh()}>
						<span className="local-mode-spin" data-active={loading || undefined}>
							<Icon name="refresh" size={13} />
						</span>
						Refresh
					</button>
				</div>

				{status !== undefined && !running ? (
					<div className="lm-sub-error">
						<span className="local-mode-check">
							<Icon name="alert" size={13} />
							<span>{status.error ?? 'CLIProxyAPI is not running.'}</span>
						</span>
						<button type="button" className="local-mode-button" onClick={() => void refresh()}>
							Retry
						</button>
					</div>
				) : null}
				{actionError === undefined ? null : (
					<span className="local-mode-check">
						<Icon name="alert" size={13} />
						<span>{actionError}</span>
					</span>
				)}

				{accounts.length > 0 ? (
					<ul className="lm-sub-accounts">
						{accounts.map((a) => (
							<AccountRow
								key={a.name}
								account={a}
								now={now}
								quotaBusy={quotaBusy.has(a.name)}
								quotaError={quotaErrors.get(a.name)}
								onQuota={() => void loadQuota(a.name)}
								onUpdate={(patch) => act(() => client.update(a.name, patch))}
								onRemove={() => act(() => client.remove(a.name))}
								onResume={() => act(() => client.resetCooldown(a.name))}
								onCheckProxy={(url, type) => client.checkProxy(url, type)}
							/>
						))}
					</ul>
				) : running ? (
					<span className="local-mode-hint">
						No accounts yet. Sign in to use your subscription's models here; tokens stay on this machine.
					</span>
				) : null}

				<SubscriptionSignIn client={client} disabled={!running} onSignedIn={onSignedIn} />

				<button
					type="button"
					className="local-mode-disclosure"
					aria-expanded={advanced}
					onClick={() => setAdvanced(!advanced)}
				>
					<Icon name="chevron" size={12} />
					Advanced
					{advanced ? null : (
						<span className="local-mode-hint">
							prefix {p.prefix || '?'}, port {port}, {STRATEGY_LABELS[strategy ?? 'round-robin'].label.toLowerCase()}
							{routingSettings(routing).sessionAffinity ? ', sticky sessions' : ''}
							{proxyUrl ? ', default proxy' : ''}
						</span>
					)}
				</button>
				{advanced ? (
					<div className="local-mode-advanced">
						<Field
							label="Model prefix"
							hint={
								<>
									Picker IDs become <code>{`${p.prefix || '?'}/${models[0]?.id ?? 'claude-opus-4-7'}`}</code>. Stripped
									before the request is sent.
								</>
							}
						>
							<input
								value={p.prefix}
								spellCheck={false}
								className="local-mode-input local-mode-mono"
								onChange={(e) => onChange({ prefix: e.target.value.trim() })}
							/>
						</Field>
						<Field label="Account selection" hint={STRATEGY_LABELS[strategy ?? 'round-robin'].hint}>
							<div className="local-mode-segmented local-mode-segmented-fill">
								{(Object.keys(STRATEGY_LABELS) as RoutingStrategy[]).map((s) => (
									<button
										key={s}
										type="button"
										aria-pressed={(strategy ?? 'round-robin') === s}
										data-active={(strategy ?? 'round-robin') === s || undefined}
										onClick={() => onChange({ strategy: s })}
									>
										{STRATEGY_LABELS[s].label}
									</button>
								))}
							</div>
						</Field>
						<RoutingFields routing={routing} onChange={(patch) => onChange({ routing: { ...routing, ...patch } })} />
						<Field
							label="Default proxy"
							hint="Sign-in, token refresh and every account without its own proxy. Empty: direct."
						>
							<ProxyField
								value={proxyUrl ?? ''}
								saveLabel="Use proxy"
								onSave={(url) => onChange({ proxyUrl: url })}
								onTest={(url) => client.checkProxy(url, 'claude')}
							/>
						</Field>
						<Field label="Local port" hint="CLIProxyAPI listens on 127.0.0.1 only.">
							<CommitInput
								value={String(port ?? '')}
								label="Local port"
								validate={(v) =>
									/^\d+$/u.test(v) && Number(v) >= 1024 && Number(v) <= 65_535
										? undefined
										: 'Use a port from 1024 to 65535.'
								}
								onCommit={(v) => onChange({ port: Number(v) })}
							/>
						</Field>
						<Field
							label="Local API key"
							hint={
								<>
									Other apps on this machine can use the same endpoint with this key:{' '}
									<code>{`http://127.0.0.1:${port}/v1`}</code>. Data: <code>{dataDir || '?'}</code>
								</>
							}
						>
							<span className="local-mode-input-group">
								<input
									readOnly
									type={showKey ? 'text' : 'password'}
									value={apiKey}
									aria-label="Local API key"
									className="local-mode-input local-mode-mono"
								/>
								<button
									type="button"
									className="local-mode-icon-button"
									aria-label={showKey ? 'Hide key' : 'Show key'}
									onClick={(e) => {
										e.preventDefault();
										setShowKey(!showKey);
									}}
								>
									<Icon name={showKey ? 'eyeOff' : 'eye'} size={14} />
								</button>
							</span>
						</Field>
					</div>
				) : null}
			</div>

			<ModelList
				prefix={p.prefix}
				models={models}
				busy={busy}
				badge={modelBadge}
				emptyHint="Sign in to an account, then fetch the models it can use."
				note={
					check === undefined ? null : (
						<span className="local-mode-check" data-ok={check.ok || undefined}>
							<Icon name={check.ok ? 'check' : 'alert'} size={13} />
							<span>{check.text}</span>
						</span>
					)
				}
				onChange={(next) => onChange({ models: next })}
				onFetch={onFetch}
			/>
		</div>
	);
}
