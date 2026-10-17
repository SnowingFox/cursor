import { type ReactNode, useEffect, useRef, useState } from 'react';
import { formatCountdown } from '../../common/format.js';
import {
	ACCOUNT_TYPE_HINTS,
	ACCOUNT_TYPE_LABELS,
	ACCOUNT_TYPES,
	type AccountType,
	type LoginStart,
	parseCallbackInput,
} from '../../common/subscriptions.js';
import type { SubscriptionsClient } from '../subscriptionsClient.js';
import { BrandMark, Icon } from './icons.js';

const POLL_MS = 1500;

// Where each provider sends the browser back to (CLIProxyAPI's redirect URIs).
const CALLBACK_EXAMPLES: Partial<Record<AccountType, string>> = {
	claude: 'http://localhost:54545/callback?code=…&state=…',
	codex: 'http://localhost:1455/auth/callback?code=…&state=…',
};

export function AccountAvatar({ type, size = 'md' }: { type: string; size?: 'sm' | 'md' }): ReactNode {
	if (!(ACCOUNT_TYPES as readonly string[]).includes(type)) {
		return (
			<span className="local-mode-avatar" data-size={size}>
				{(type[0] ?? '?').toUpperCase()}
			</span>
		);
	}
	return (
		<span className="local-mode-avatar" data-size={size} data-brand={type}>
			<BrandMark brand={type as AccountType} size={size === 'sm' ? 13 : 18} />
		</span>
	);
}

/** The Subscriptions provider's avatar: the three account types' marks, overlapped. */
export function SubscriptionsAvatar({ size = 'md' }: { size?: 'sm' | 'md' }): ReactNode {
	return (
		<span className="lm-sub-avatar" data-size={size} aria-hidden="true">
			{ACCOUNT_TYPES.map((type) => (
				<span key={type} className="lm-sub-avatar-mark" data-brand={type}>
					<BrandMark brand={type} size={size === 'sm' ? 6 : 9} />
				</span>
			))}
		</span>
	);
}

function errorText(e: unknown): string {
	return e instanceof Error ? e.message.replace(/^Error invoking remote method '[^']*': (Error: )?/u, '') : String(e);
}

function CopyButton({ text, label }: { text: string; label: string }): ReactNode {
	const [copied, setCopied] = useState(false);
	return (
		<button
			type="button"
			className="local-mode-link-button"
			onClick={() => {
				void navigator.clipboard.writeText(text).then(() => {
					setCopied(true);
					setTimeout(() => setCopied(false), 1500);
				});
			}}
		>
			<Icon name={copied ? 'check' : 'copy'} size={12} />
			{copied ? 'Copied' : label}
		</button>
	);
}

type Phase =
	| { kind: 'idle' }
	| { kind: 'starting'; type: AccountType }
	| { kind: 'waiting'; type: AccountType; login: LoginStart }
	| { kind: 'done'; type: AccountType }
	| { kind: 'error'; type: AccountType; text: string; login?: LoginStart };

/**
 * "Add account": one button per account type, then the sign-in in progress.
 * Browser flows (Claude, Codex) finish on their own when the browser comes
 * back to the sidecar; the address can be pasted when it can't. Grok uses a
 * device code.
 */
export function SubscriptionSignIn(props: {
	client: SubscriptionsClient;
	disabled: boolean;
	onSignedIn: () => void;
}): ReactNode {
	const { client, disabled, onSignedIn } = props;
	const [phase, setPhase] = useState<Phase>({ kind: 'idle' });
	const [paste, setPaste] = useState('');
	const [showPaste, setShowPaste] = useState(false);
	const [now, setNow] = useState(Date.now());
	const pending = useRef<string | undefined>(undefined);
	// Read at completion time, so a new callback each render doesn't restart polling.
	const signedIn = useRef(onSignedIn);
	signedIn.current = onSignedIn;

	// A sign-in left open when the page goes away is cancelled in the sidecar
	// (it would otherwise hold the callback port for 5 minutes).
	useEffect(
		() => () => {
			pending.current !== undefined && void client.loginCancel(pending.current).catch(() => {});
		},
		[client],
	);

	const waiting = phase.kind === 'waiting' ? phase : undefined;
	useEffect(() => {
		if (waiting === undefined) {
			return;
		}
		let stopped = false;
		const tick = async () => {
			setNow(Date.now());
			if (waiting.login.expiresAt !== undefined && Date.now() > waiting.login.expiresAt) {
				pending.current = undefined;
				setPhase({ kind: 'error', type: waiting.type, text: 'The sign-in link expired. Start again.' });
				return;
			}
			try {
				const s = await client.loginStatus(waiting.login.state);
				if (stopped) {
					return;
				}
				if (s.status === 'ok') {
					pending.current = undefined;
					setPhase({ kind: 'done', type: waiting.type });
					signedIn.current();
				} else if (s.status === 'error') {
					pending.current = undefined;
					setPhase({ kind: 'error', type: waiting.type, text: s.error ?? 'Sign-in failed.' });
				}
			} catch {
				// The sidecar restarts on settings changes; keep polling.
			}
		};
		const timer = setInterval(tick, POLL_MS);
		return () => {
			stopped = true;
			clearInterval(timer);
		};
	}, [waiting, client]);

	const start = async (type: AccountType) => {
		setPhase({ kind: 'starting', type });
		setPaste('');
		try {
			const login = await client.login(type);
			pending.current = login.state;
			setShowPaste(login.manual === true);
			setNow(Date.now());
			setPhase({ kind: 'waiting', type, login });
		} catch (e) {
			setPhase({ kind: 'error', type, text: errorText(e) });
		}
	};

	const cancel = () => {
		pending.current !== undefined && void client.loginCancel(pending.current).catch(() => {});
		pending.current = undefined;
		setPhase({ kind: 'idle' });
	};

	const submitPaste = async () => {
		if (waiting === undefined) {
			return;
		}
		try {
			const s = await client.loginCallback(waiting.login.state, paste);
			if (s.status === 'error') {
				pending.current = undefined;
				setPhase({ kind: 'error', type: waiting.type, text: s.error ?? 'Sign-in failed.' });
			}
		} catch (e) {
			setPhase({ kind: 'error', type: waiting.type, text: errorText(e), login: waiting.login });
		}
	};

	if (phase.kind === 'idle' || phase.kind === 'starting' || phase.kind === 'done') {
		return (
			<div className="lm-sub-add">
				{phase.kind === 'done' ? (
					<span className="local-mode-check" data-ok>
						<Icon name="check" size={13} />
						<span>{ACCOUNT_TYPE_LABELS[phase.type]} account signed in.</span>
					</span>
				) : null}
				<div className="lm-sub-add-grid">
					{ACCOUNT_TYPES.map((type) => (
						<button
							key={type}
							type="button"
							className="local-mode-preset"
							disabled={disabled || phase.kind === 'starting'}
							onClick={() => void start(type)}
						>
							<AccountAvatar type={type} size="sm" />
							<span>
								<span className="local-mode-preset-name">
									{phase.kind === 'starting' && phase.type === type
										? 'Opening sign-in…'
										: `Sign in to ${ACCOUNT_TYPE_LABELS[type]}`}
								</span>
								<span className="local-mode-hint">{ACCOUNT_TYPE_HINTS[type]}</span>
							</span>
						</button>
					))}
				</div>
			</div>
		);
	}

	const label = ACCOUNT_TYPE_LABELS[phase.type];
	const login = phase.login;
	const parsed = paste.trim() === '' ? undefined : parseCallbackInput(paste);
	return (
		<div className="lm-sub-signin" data-error={phase.kind === 'error' || undefined}>
			<div className="local-mode-block-header">
				<div className="lm-sub-signin-title">
					<AccountAvatar type={phase.type} size="sm" />
					<span>Sign in to {label}</span>
				</div>
				<button type="button" className="local-mode-icon-button" aria-label="Cancel sign-in" onClick={cancel}>
					<Icon name="x" size={14} />
				</button>
			</div>

			{phase.kind === 'error' ? (
				<span className="local-mode-check">
					<Icon name="alert" size={13} />
					<span>{phase.text}</span>
				</span>
			) : null}

			{waiting?.login.flow === 'device' ? (
				<div className="lm-sub-device">
					<span className="local-mode-hint">Enter this code on the page that opened in your browser:</span>
					<span className="lm-sub-code">{waiting.login.userCode ?? '—'}</span>
					{waiting.login.userCode ? <CopyButton text={waiting.login.userCode} label="Copy code" /> : null}
				</div>
			) : waiting !== undefined ? (
				<span className="local-mode-hint">
					{waiting.login.manual
						? `Approve access in the browser. It then lands on a page that does not load (another app holds the sign-in port): copy that page's address and paste it below.`
						: `Your browser opened the ${label} sign-in page. Approve access there; this updates on its own.`}
				</span>
			) : null}

			{login !== undefined ? (
				<div className="lm-sub-link">
					<span className="lm-sub-link-url" title={login.url}>
						{login.url}
					</span>
					<CopyButton text={login.url} label="Copy link" />
					<a className="local-mode-link-button" href={login.url} target="_blank" rel="noreferrer">
						<Icon name="external" size={12} />
						Open again
					</a>
				</div>
			) : null}

			{waiting !== undefined ? (
				<div className="local-mode-check-row">
					<span className="local-mode-spin" data-active>
						<Icon name="refresh" size={13} />
					</span>
					<span className="local-mode-hint">
						Waiting for you to finish signing in
						{waiting.login.expiresAt === undefined
							? '…'
							: ` · expires in ${formatCountdown(Math.max(0, waiting.login.expiresAt - now))}`}
					</span>
				</div>
			) : null}

			{waiting !== undefined && waiting.login.flow === 'browser' ? (
				showPaste ? (
					<div className="lm-sub-paste">
						<input
							value={paste}
							placeholder={CALLBACK_EXAMPLES[phase.type] ?? 'Address after sign-in'}
							aria-label="Address the browser landed on"
							spellCheck={false}
							className="local-mode-input local-mode-mono"
							onChange={(e) => setPaste(e.target.value)}
							onKeyDown={(e) => e.key === 'Enter' && parsed !== undefined && void submitPaste()}
						/>
						<button
							type="button"
							className="local-mode-button"
							disabled={parsed === undefined}
							onClick={() => void submitPaste()}
						>
							Finish sign-in
						</button>
					</div>
				) : (
					<button type="button" className="local-mode-disclosure" onClick={() => setShowPaste(true)}>
						<Icon name="chevron" size={12} />
						The page after sign-in didn't load?
					</button>
				)
			) : null}

			{phase.kind === 'error' ? (
				<div className="local-mode-check-row">
					<button type="button" className="local-mode-button" onClick={() => void start(phase.type)}>
						Try again
					</button>
					<button type="button" className="local-mode-link-button" onClick={cancel}>
						Close
					</button>
				</div>
			) : null}
		</div>
	);
}
