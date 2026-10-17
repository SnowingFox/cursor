import { type ReactNode, useState } from 'react';
import { cursorHost } from '../../../../../glass/host/cursorHost.js';
import { API_TYPE_LABELS, API_TYPE_SHORT_LABELS, BASE_URL_HINTS, type CustomProvider } from '../../common/localMode.js';
import { Icon } from './icons.js';
import { ModelList } from './ModelList.js';

/** Result of the last "Test connection" / model fetch. */
export interface ConnectionCheck {
	ok: boolean;
	text: string;
}

// Anthropic first: most custom providers here are Claude gateways.
const API_FORMAT_ORDER = ['anthropic', 'openai-chat', 'openai-responses'] as const;

const AVATAR_HUES = ['blue', 'purple', 'orange', 'green', 'cyan', 'magenta'] as const;

export function ProviderAvatar({ name, size = 'md' }: { name: string; size?: 'sm' | 'md' }): ReactNode {
	const label = name.trim() || '?';
	let h = 0;
	for (const c of label) {
		h = (h * 31 + c.charCodeAt(0)) >>> 0;
	}
	return (
		<span className="local-mode-avatar" data-size={size} data-hue={AVATAR_HUES[h % AVATAR_HUES.length]}>
			{label[0].toUpperCase()}
		</span>
	);
}

function Field(props: { label: string; hint?: ReactNode; children: ReactNode }): ReactNode {
	return (
		// biome-ignore lint/a11y/noLabelWithoutControl: the control is passed in as children.
		<label className="local-mode-field">
			<span className="local-mode-field-label">{props.label}</span>
			{props.children}
			{props.hint ? <span className="local-mode-hint">{props.hint}</span> : null}
		</label>
	);
}

export function ProviderCard(props: {
	provider: CustomProvider;
	busy: boolean;
	check: ConnectionCheck | undefined;
	onChange: (patch: Partial<CustomProvider>) => void;
	onRemove: () => void;
	onFetch: () => void;
}): ReactNode {
	const { Switch } = cursorHost().cursor.ui;
	const { provider: p, busy, check, onChange, onRemove, onFetch } = props;
	const [showKey, setShowKey] = useState(false);
	const [advanced, setAdvanced] = useState(false);
	const anthropic = p.apiType === 'anthropic';
	const on = p.enabled !== false;
	const models = p.models ?? [];
	const firstModel = models.find((m) => m.enabled !== false)?.id ?? models[0]?.id ?? 'model';

	return (
		<div className="local-mode-card" data-off={!on || undefined}>
			<div className="local-mode-card-header">
				<ProviderAvatar name={p.name} />
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
							? `${API_TYPE_LABELS[p.apiType] ?? p.apiType} · ${models.filter((m) => m.enabled !== false).length} model(s) in the picker`
							: 'Off: hidden from the model picker'}
					</span>
				</div>
				<Switch checked={on} onCheckedChange={(enabled) => onChange({ enabled })} />
				<button
					type="button"
					className="local-mode-icon-button"
					aria-label="Remove provider"
					title="Remove provider"
					onClick={onRemove}
				>
					<Icon name="trash" size={14} />
				</button>
			</div>

			<div className="local-mode-block">
				<div className="local-mode-block-title">Connection</div>
				<Field label="API format">
					<div className="local-mode-segmented local-mode-segmented-fill">
						{API_FORMAT_ORDER.map((t) => (
							<button
								key={t}
								type="button"
								aria-pressed={p.apiType === t}
								data-active={p.apiType === t || undefined}
								title={API_TYPE_LABELS[t]}
								onClick={() => onChange({ apiType: t })}
							>
								{API_TYPE_SHORT_LABELS[t]}
							</button>
						))}
					</div>
				</Field>
				<Field
					label="Base URL"
					hint={
						anthropic
							? 'Like ANTHROPIC_BASE_URL: /v1 is added when missing.'
							: 'The OpenAI-compatible base, usually ending in /v1.'
					}
				>
					<input
						value={p.baseUrl}
						placeholder={BASE_URL_HINTS[p.apiType]}
						spellCheck={false}
						autoComplete="off"
						className="local-mode-input"
						onChange={(e) => onChange({ baseUrl: e.target.value })}
					/>
				</Field>
				<Field
					label="API key"
					hint={anthropic ? 'Sent as the x-api-key header.' : 'Sent as Authorization: Bearer <key>.'}
				>
					<span className="local-mode-input-group">
						<input
							type={showKey ? 'text' : 'password'}
							value={p.apiKey}
							placeholder={anthropic ? 'sk-ant-…' : 'sk-…'}
							spellCheck={false}
							autoComplete="off"
							className="local-mode-input"
							onChange={(e) => onChange({ apiKey: e.target.value })}
						/>
						<button
							type="button"
							className="local-mode-icon-button"
							aria-label={showKey ? 'Hide key' : 'Show key'}
							title={showKey ? 'Hide key' : 'Show key'}
							onClick={(e) => {
								e.preventDefault();
								setShowKey(!showKey);
							}}
						>
							<Icon name={showKey ? 'eyeOff' : 'eye'} size={14} />
						</button>
					</span>
				</Field>
				<div className="local-mode-check-row">
					<button type="button" className="local-mode-button" disabled={busy || !p.baseUrl.trim()} onClick={onFetch}>
						{busy ? 'Connecting…' : 'Test connection'}
					</button>
					{check ? (
						<span className="local-mode-check" data-ok={check.ok || undefined}>
							<Icon name={check.ok ? 'check' : 'alert'} size={13} />
							<span>{check.text}</span>
						</span>
					) : (
						<span className="local-mode-hint">Lists the endpoint's models to check the URL and key.</span>
					)}
				</div>

				<button
					type="button"
					className="local-mode-disclosure"
					aria-expanded={advanced}
					onClick={() => setAdvanced(!advanced)}
				>
					<Icon name="chevron" size={12} />
					Advanced
					{advanced ? null : <span className="local-mode-hint">prefix {p.prefix || '?'}, extra headers</span>}
				</button>
				{advanced ? (
					<div className="local-mode-advanced">
						<Field
							label="Model prefix"
							hint={
								<>
									Picker IDs become <code>{`${p.prefix || '?'}/${firstModel}`}</code> so they never collide with
									Cursor's models. Stripped before the request is sent.
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
						<Field label="Extra headers" hint='Optional, one "Name: value" per line.'>
							<textarea
								value={p.headers ?? ''}
								rows={2}
								placeholder="X-Team: platform"
								spellCheck={false}
								className="local-mode-input local-mode-mono local-mode-textarea"
								onChange={(e) => onChange({ headers: e.target.value })}
							/>
						</Field>
					</div>
				) : null}
			</div>

			<ModelList
				prefix={p.prefix}
				models={models}
				busy={busy}
				onChange={(next) => onChange({ models: next })}
				onFetch={onFetch}
			/>
		</div>
	);
}
