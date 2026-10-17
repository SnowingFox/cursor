import { type ReactNode, useEffect, useState } from 'react';
import { cursorHost } from '../../../../../glass/host/cursorHost.js';
import {
	type CustomProvider,
	type ListedModel,
	PROVIDER_PRESETS,
	type ProviderPreset,
} from '../../common/localMode.js';
import {
	cleanProviders,
	enabledModels,
	endpoint,
	mergeListedModels,
	newProvider,
	validateProviders,
} from '../../common/providers.js';
import { readProviders, writeProviders } from '../providerStorage.js';
import { Icon } from './icons.js';
import { type ConnectionCheck, ProviderAvatar, ProviderCard } from './ProviderCard.js';

interface Notice {
	error: boolean;
	text: string;
}

function errorMessage(e: unknown): string {
	// IPC errors arrive wrapped as "Error invoking remote method '…': Error: …".
	return e instanceof Error ? e.message.replace(/^Error invoking remote method '[^']*': (Error: )?/u, '') : String(e);
}

function PresetGrid(props: { onPick: (preset: ProviderPreset) => void; onCancel?: () => void }): ReactNode {
	return (
		<div className="local-mode-presets">
			<div className="local-mode-block-header">
				<div className="local-mode-block-title">Choose a starting point</div>
				{props.onCancel ? (
					<button type="button" className="local-mode-icon-button" aria-label="Cancel" onClick={props.onCancel}>
						<Icon name="x" size={14} />
					</button>
				) : null}
			</div>
			<div className="local-mode-preset-grid">
				{PROVIDER_PRESETS.map((preset) => (
					<button key={preset.id} type="button" className="local-mode-preset" onClick={() => props.onPick(preset)}>
						<ProviderAvatar name={preset.name} size="sm" />
						<span>
							<span className="local-mode-preset-name">{preset.name}</span>
							<span className="local-mode-hint">{preset.description}</span>
						</span>
					</button>
				))}
			</div>
		</div>
	);
}

/** Settings > Models > Custom Providers (replaces the "Gateway" section in local mode). */
export function CustomProvidersSettings(): ReactNode {
	const { useService, services, ui } = cursorHost().cursor;
	const { Section, Button } = ui;
	const storage = useService(services.storage);
	const aiService = useService(services.ai);
	const inference = useService(services.localInference);

	const [providers, setProviders] = useState<CustomProvider[]>(() => readProviders(storage));
	const [selected, setSelected] = useState(0);
	const [adding, setAdding] = useState(false);
	const [dirty, setDirty] = useState(false);
	const [busy, setBusy] = useState(-1);
	const [checks, setChecks] = useState<Map<number, ConnectionCheck>>(new Map());
	const [notice, setNotice] = useState<Notice | undefined>(undefined);

	// "Saved" fades out on its own; errors stay until the next edit.
	useEffect(() => {
		if (notice === undefined || notice.error || dirty) {
			return;
		}
		const t = setTimeout(() => setNotice(undefined), 4000);
		return () => clearTimeout(t);
	}, [notice, dirty]);

	const current = Math.min(selected, providers.length - 1);

	// Functional updates: a model fetch lands after an await and must not drop
	// edits made in the meantime.
	const edit = (next: (ps: CustomProvider[]) => CustomProvider[]) => {
		setProviders(next);
		setDirty(true);
		setNotice(undefined);
	};
	const update = (i: number, patch: Partial<CustomProvider>) =>
		edit((ps) => ps.map((p, j) => (j === i ? { ...p, ...patch } : p)));

	const add = (preset: ProviderPreset) => {
		edit((ps) => [...ps, newProvider(ps, preset)]);
		setSelected(providers.length);
		setAdding(false);
	};
	const remove = (i: number) => {
		edit((ps) => ps.filter((_, j) => j !== i));
		setChecks(new Map());
		setSelected(Math.max(0, i - 1));
	};

	const save = async () => {
		const cleaned = cleanProviders(providers);
		const error = validateProviders(cleaned);
		if (error !== undefined) {
			setNotice({ error: true, text: error });
			return;
		}
		writeProviders(storage, cleaned);
		setProviders(cleaned);
		setDirty(false);
		try {
			await aiService.refreshDefaultModels();
			setNotice({ error: false, text: `Saved. ${enabledModels(cleaned).length} custom model(s) in the model picker.` });
		} catch (e) {
			setNotice({ error: true, text: `Saved, but refreshing the model picker failed: ${errorMessage(e)}` });
		}
	};

	const discard = () => {
		setProviders(readProviders(storage));
		setDirty(false);
		setNotice(undefined);
		setChecks(new Map());
	};

	// Listing goes through the extension host: the renderer's CSP blocks
	// arbitrary origins, and the provider may need custom headers. It doubles
	// as the connection test.
	const fetchModels = async (i: number) => {
		const p = providers[i];
		const target = endpoint(p);
		const started = performance.now();
		setBusy(i);
		try {
			const result = await inference.fetchLocalProviderModels({
				baseUrl: target.baseUrl,
				apiKey: target.apiKey,
				customHeaders: target.headers,
				userAgent: 'Cursor',
				cursorLocalProvider: { apiType: p.apiType, listing: true },
			});
			const listed = result?.cursorLocalModels;
			if (!Array.isArray(listed)) {
				throw new Error('the agent runtime did not return a model list');
			}
			const known = new Set((p.models ?? []).map((m) => m.id));
			const fresh = (listed as ListedModel[]).filter((m) => !known.has(m.id)).length;
			edit((ps) =>
				ps.map((x, j) => (j === i ? { ...x, models: mergeListedModels(x.models ?? [], listed as ListedModel[]) } : x)),
			);
			const ms = Math.round(performance.now() - started);
			setChecks((c) =>
				new Map(c).set(i, {
					ok: true,
					text: `Connected · ${listed.length} models${fresh > 0 && known.size > 0 ? `, ${fresh} new` : ''} · ${ms} ms`,
				}),
			);
		} catch (e) {
			setChecks((c) => new Map(c).set(i, { ok: false, text: errorMessage(e) }));
		} finally {
			setBusy(-1);
		}
	};

	const p = providers[current];

	return (
		<div className="local-mode-settings">
			<Section
				title="Custom Providers"
				description="Run agents on your own OpenAI- or Anthropic-compatible endpoints. The agent runs on this machine and talks to the endpoint directly."
			/>

			{providers.length > 0 ? (
				<div className="local-mode-tabs" role="tablist" aria-label="Providers">
					{providers.map((x, i) => (
						<button
							// Index keys: names change while the user types.
							key={i}
							type="button"
							role="tab"
							aria-selected={i === current && !adding}
							data-active={(i === current && !adding) || undefined}
							data-off={x.enabled === false || undefined}
							className="local-mode-tab"
							onClick={() => {
								setSelected(i);
								setAdding(false);
							}}
						>
							<ProviderAvatar name={x.name} size="sm" />
							<span className="local-mode-tab-name">{x.name.trim() || 'Untitled'}</span>
							<span className="local-mode-count">{(x.models ?? []).filter((m) => m.enabled !== false).length}</span>
						</button>
					))}
					<button
						type="button"
						className="local-mode-tab local-mode-tab-add"
						data-active={adding || undefined}
						onClick={() => setAdding(!adding)}
					>
						<Icon name="plus" size={13} />
						Add provider
					</button>
				</div>
			) : null}

			{providers.length === 0 ? (
				<div className="local-mode-card local-mode-empty">
					<div className="local-mode-empty-title">Connect your first provider</div>
					<div className="local-mode-hint">
						Pick a service to prefill its endpoint. You can change everything afterwards.
					</div>
					<PresetGrid onPick={add} />
				</div>
			) : adding ? (
				<div className="local-mode-card">
					<PresetGrid onPick={add} onCancel={() => setAdding(false)} />
				</div>
			) : p !== undefined ? (
				<ProviderCard
					key={current}
					provider={p}
					busy={busy === current}
					check={checks.get(current)}
					onChange={(patch) => update(current, patch)}
					onRemove={() => remove(current)}
					onFetch={() => fetchModels(current)}
				/>
			) : null}

			{dirty || notice !== undefined ? (
				<div className="local-mode-savebar" data-error={notice?.error || undefined}>
					<span className="local-mode-savebar-text">
						{notice !== undefined ? (
							<>
								<Icon name={notice.error ? 'alert' : 'check'} size={13} />
								{notice.text}
							</>
						) : (
							'You have unsaved changes.'
						)}
					</span>
					{dirty ? (
						<span className="local-mode-savebar-actions">
							<Button size="sm" variant="ghost" onClick={discard}>
								Discard
							</Button>
							<Button size="sm" variant="primary" onClick={save}>
								Save
							</Button>
						</span>
					) : null}
				</div>
			) : null}
		</div>
	);
}
