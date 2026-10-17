/**
 * The DEV pill and panel (after luna-PC's tweakpane debugger): app info, local
 * sign-in, providers, recent requests and a few window utilities. Mounted at
 * the agent window root in every local mode build, so it is also reachable
 * from the sign-in screen.
 */
import { type ReactNode, useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { cursorHost, type LocalAccount } from '../../../../../glass/host/cursorHost.js';
import { formatCost, formatDuration, formatTokenCount } from '../../common/format.js';
import { API_TYPE_SHORT_LABELS } from '../../common/localMode.js';
import { sampleUsage } from '../../common/sampleUsage.js';
import { recordCost, totalTokens } from '../../common/usage.js';
import { readProviders } from '../providerStorage.js';
import { addUsageRecords, clearUsage, subscribeUsage, usageRecords } from '../usageStore.js';
import { Icon } from './icons.js';

const OPEN_KEY = 'cursorLocalMode.devtool.open';
const POSITION_KEY = 'cursorLocalMode.devtool.top';
const FOLDERS_KEY = 'cursorLocalMode.devtool.folders';

interface ProductInfo {
	nameLong?: string;
	version?: string;
	commit?: string;
}

declare global {
	var vscode:
		| {
				process?: { versions?: Record<string, string | undefined> };
				context?: { configuration?: () => { product?: ProductInfo } | undefined };
		  }
		| undefined;
}

function readJson<T>(key: string, fallback: T): T {
	try {
		const value = globalThis.localStorage?.getItem(key);
		return value === null || value === undefined ? fallback : (JSON.parse(value) as T);
	} catch {
		return fallback;
	}
}

function writeJson(key: string, value: unknown): void {
	try {
		globalThis.localStorage?.setItem(key, JSON.stringify(value));
	} catch {}
}

/** useState persisted in localStorage. */
function useStored<T>(key: string, fallback: T): [T, (value: T) => void] {
	const [value, setValue] = useState<T>(() => readJson(key, fallback));
	return [
		value,
		(next: T) => {
			setValue(next);
			writeJson(key, next);
		},
	];
}

function Folder(props: { title: string; trailing?: ReactNode; children: ReactNode }): ReactNode {
	const [closed, setClosed] = useStored<string[]>(FOLDERS_KEY, []);
	const open = !closed.includes(props.title);
	return (
		<section className="lm-dev-folder">
			<button
				type="button"
				className="lm-dev-folder-title"
				aria-expanded={open}
				onClick={() => setClosed(open ? [...closed, props.title] : closed.filter((t) => t !== props.title))}
			>
				<Icon name="chevron" size={12} />
				<span>{props.title}</span>
				{props.trailing === undefined ? null : <span className="lm-dev-folder-trailing">{props.trailing}</span>}
			</button>
			{open ? <div className="lm-dev-folder-body">{props.children}</div> : null}
		</section>
	);
}

function Row(props: { label: string; children: ReactNode; title?: string }): ReactNode {
	return (
		<div className="lm-dev-row">
			<span className="lm-dev-label">{props.label}</span>
			<span className="lm-dev-value" title={props.title}>
				{props.children}
			</span>
		</div>
	);
}

function DevButton(props: {
	onClick: () => void;
	children: ReactNode;
	danger?: boolean;
	disabled?: boolean;
}): ReactNode {
	return (
		<button
			type="button"
			className="lm-dev-button"
			data-danger={props.danger || undefined}
			disabled={props.disabled}
			onClick={props.onClick}
		>
			{props.children}
		</button>
	);
}

/** Text input that commits on Enter or blur, and reverts on Escape. */
function TextField(props: { label: string; value: string; onCommit: (value: string) => void }): ReactNode {
	const [draft, setDraft] = useState(props.value);
	useEffect(() => setDraft(props.value), [props.value]);
	const commit = () => {
		const value = draft.trim();
		if (value === '') {
			setDraft(props.value);
		} else if (value !== props.value) {
			props.onCommit(value);
		}
	};
	return (
		<Row label={props.label}>
			<input
				className="lm-dev-input"
				value={draft}
				spellCheck={false}
				aria-label={props.label}
				onChange={(e) => setDraft(e.target.value)}
				onBlur={commit}
				onKeyDown={(e) => {
					if (e.key === 'Enter') {
						e.currentTarget.blur();
					} else if (e.key === 'Escape') {
						setDraft(props.value);
					}
				}}
			/>
		</Row>
	);
}

function AppFolder(): ReactNode {
	const product = globalThis.vscode?.context?.configuration?.()?.product;
	const versions = globalThis.vscode?.process?.versions ?? {};
	return (
		<Folder title="App">
			<Row label="Version" title={product?.commit}>
				{product?.version ?? '—'}
				{product?.commit ? <span className="lm-dev-muted"> · {product.commit.slice(0, 7)}</span> : null}
			</Row>
			<Row label="Local mode">{import.meta.env.DEV ? 'Vite dev server' : 'Bundled'}</Row>
			<Row label="Electron">{versions.electron ?? '—'}</Row>
			<Row label="Chromium">{versions.chrome ?? '—'}</Row>
			<Row label="Node">{versions.node ?? '—'}</Row>
		</Folder>
	);
}

function AccountFolder(): ReactNode {
	const host = cursorHost();
	const auth = host.cursor.useService(host.cursor.services.auth);
	const account = useSyncExternalStore(host.account.subscribe, host.account.get);
	const update = (patch: Partial<LocalAccount>) => host.account.set(auth, patch);
	return (
		<Folder
			title="Account"
			trailing={
				<span className="lm-dev-status" data-on={account.signedIn || undefined}>
					{account.signedIn ? 'Signed in' : 'Signed out'}
				</span>
			}
		>
			<TextField label="Name" value={account.name} onCommit={(name) => update({ name })} />
			<TextField label="Email" value={account.email} onCommit={(email) => update({ email })} />
			<Row label="Plan">
				Ultra <span className="lm-dev-muted">· local mode</span>
			</Row>
			<DevButton onClick={() => update({ signedIn: !account.signedIn })}>
				{account.signedIn ? 'Sign out' : 'Sign in locally'}
			</DevButton>
			<p className="lm-dev-note">Local sign-in: stays on this machine, nothing is sent to Cursor.</p>
		</Folder>
	);
}

function ProvidersFolder(): ReactNode {
	const { useService, services } = cursorHost().cursor;
	const storage = useService(services.storage);
	const aiService = useService(services.ai);
	const [refreshing, setRefreshing] = useState(false);
	const providers = readProviders(storage);
	return (
		<Folder title="Providers" trailing={providers.length}>
			{providers.length === 0 ? (
				<p className="lm-dev-note">No custom providers yet. Add one in Settings → Models.</p>
			) : (
				providers.map((p) => (
					<Row key={p.prefix} label={p.name || p.prefix} title={p.baseUrl}>
						<span className="lm-dev-muted">{API_TYPE_SHORT_LABELS[p.apiType]}</span>{' '}
						{p.enabled === false ? 'off' : plural(p.models.filter((m) => m.enabled !== false).length, 'model')}
					</Row>
				))
			)}
			<DevButton
				disabled={refreshing}
				onClick={() => {
					setRefreshing(true);
					aiService.refreshDefaultModels().finally(() => setRefreshing(false));
				}}
			>
				{refreshing ? 'Refreshing…' : 'Refresh model picker'}
			</DevButton>
		</Folder>
	);
}

const plural = (n: number, word: string) => `${n} ${word}${n === 1 ? '' : 's'}`;

const timeFormat = new Intl.DateTimeFormat(undefined, { hour: '2-digit', minute: '2-digit', second: '2-digit' });

function RequestsFolder(): ReactNode {
	const records = useSyncExternalStore(subscribeUsage, usageRecords);
	const [confirmClear, setConfirmClear] = useState(false);
	const recent = records.slice(-6).reverse();
	return (
		<Folder title="Requests" trailing={records.length.toLocaleString()}>
			{recent.length === 0 ? (
				<p className="lm-dev-note">Nothing recorded yet. Requests served by a custom provider show up here.</p>
			) : (
				<ul className="lm-dev-requests">
					{recent.map((r) => {
						const cost = recordCost(r);
						return (
							<li key={r.id} title={`${r.provider} · ${r.id}`}>
								<span className="lm-dev-muted">{timeFormat.format(r.at)}</span>
								<span className="lm-dev-request-model">{r.model}</span>
								<span>{formatTokenCount(totalTokens(r))}</span>
								<span className="lm-dev-muted">
									{formatDuration(r.endedAt - r.at)}
									{cost === undefined ? '' : ` · ${formatCost(cost)}`}
								</span>
							</li>
						);
					})}
				</ul>
			)}
			<div className="lm-dev-buttons">
				<DevButton onClick={() => addUsageRecords(sampleUsage(Date.now(), 120))}>Seed sample usage</DevButton>
				<DevButton
					danger
					disabled={records.length === 0}
					onClick={() => {
						if (confirmClear) {
							clearUsage();
						}
						setConfirmClear(!confirmClear);
					}}
				>
					{confirmClear ? 'Confirm clear' : 'Clear history'}
				</DevButton>
			</div>
		</Folder>
	);
}

function WindowFolder(): ReactNode {
	const { useService, services } = cursorHost().cursor;
	const commands = useService(services.commands);
	const run = (id: string) => void commands.executeCommand(id).catch((e) => console.error(`[devtool] ${id}`, e));
	return (
		<Folder title="Window">
			<div className="lm-dev-buttons">
				<DevButton onClick={() => run('workbench.action.toggleDevTools')}>Toggle DevTools</DevButton>
				<DevButton onClick={() => run('workbench.action.reloadWindow')}>Reload window</DevButton>
			</div>
		</Folder>
	);
}

/** Vertical position of the pill, as a fraction of the window height. */
function clampTop(top: number): number {
	return Math.min(0.92, Math.max(0.08, top));
}

export function DevTool(): ReactNode {
	const [open, setOpen] = useStored(OPEN_KEY, false);
	const [top, setTop] = useStored(POSITION_KEY, 0.62);
	const drag = useRef<{ startY: number; startTop: number; moved: boolean } | undefined>(undefined);

	useEffect(() => {
		if (!open) {
			return;
		}
		const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
		window.addEventListener('keydown', onKey);
		return () => window.removeEventListener('keydown', onKey);
	});

	return (
		<div className="lm-dev">
			<button
				type="button"
				className="lm-dev-pill"
				style={{ top: `${clampTop(top) * 100}%` }}
				aria-expanded={open}
				aria-label="Developer tools"
				title="Developer tools (drag to move)"
				onPointerDown={(e) => {
					e.currentTarget.setPointerCapture(e.pointerId);
					drag.current = { startY: e.clientY, startTop: clampTop(top), moved: false };
				}}
				onPointerMove={(e) => {
					const d = drag.current;
					if (d === undefined || (!d.moved && Math.abs(e.clientY - d.startY) < 4)) {
						return;
					}
					d.moved = true;
					e.currentTarget.style.top = `${clampTop(d.startTop + (e.clientY - d.startY) / window.innerHeight) * 100}%`;
				}}
				onPointerUp={(e) => {
					const d = drag.current;
					drag.current = undefined;
					if (d?.moved) {
						setTop(clampTop(d.startTop + (e.clientY - d.startY) / window.innerHeight));
					} else {
						setOpen(!open);
					}
				}}
			>
				DEV
			</button>
			{open ? (
				<div className="lm-dev-panel" role="dialog" aria-label="Developer tools">
					<div className="lm-dev-header">
						<span>Cursor RE · DevTool</span>
						<button type="button" className="lm-dev-close" aria-label="Close" onClick={() => setOpen(false)}>
							<Icon name="x" size={14} />
						</button>
					</div>
					<div className="lm-dev-scroll">
						<AppFolder />
						<AccountFolder />
						<ProvidersFolder />
						<RequestsFolder />
						<WindowFolder />
					</div>
				</div>
			) : null}
		</div>
	);
}
