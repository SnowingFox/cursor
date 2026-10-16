import { type ReactNode, useState } from 'react';
import { cursorHost } from '../../../../../glass/host/cursorHost.js';
import type { CustomProvider, ListedModel } from '../../common/localMode.js';
import {
	cleanProviders,
	enabledModels,
	endpoint,
	mergeListedModels,
	newProvider,
	validateProviders,
} from '../../common/providers.js';
import { readProviders, writeProviders } from '../providerStorage.js';
import { ProviderCard } from './ProviderCard.js';

interface Status {
	error: boolean;
	text: string;
}

function errorMessage(e: unknown): string {
	// IPC errors arrive wrapped as "Error invoking remote method '…': Error: …".
	return e instanceof Error ? e.message.replace(/^Error invoking remote method '[^']*': (Error: )?/u, '') : String(e);
}

/** Settings > Models > Custom Providers (replaces the "Gateway" section in local mode). */
export function CustomProvidersSettings(): ReactNode {
	const { useService, services, ui } = cursorHost().cursor;
	const { Section, Button } = ui;
	const storage = useService(services.storage);
	const aiService = useService(services.ai);
	const inference = useService(services.localInference);

	const [providers, setProviders] = useState<CustomProvider[]>(() => readProviders(storage));
	const [dirty, setDirty] = useState(false);
	const [busy, setBusy] = useState(-1);
	const [status, setStatus] = useState<Status | undefined>(undefined);

	const update = (i: number, patch: Partial<CustomProvider>) => {
		setProviders((ps) => ps.map((p, j) => (j === i ? { ...p, ...patch } : p)));
		setDirty(true);
		setStatus(undefined);
	};

	const save = async () => {
		const cleaned = cleanProviders(providers);
		const error = validateProviders(cleaned);
		if (error !== undefined) {
			setStatus({ error: true, text: error });
			return;
		}
		writeProviders(storage, cleaned);
		setProviders(cleaned);
		setDirty(false);
		try {
			await aiService.refreshDefaultModels();
			setStatus({ error: false, text: `Saved. ${enabledModels(cleaned).length} custom model(s) in the model picker.` });
		} catch (e) {
			setStatus({ error: true, text: `Saved, but refreshing the model picker failed: ${errorMessage(e)}` });
		}
	};

	// Listing goes through the extension host: the renderer's CSP blocks
	// arbitrary origins, and the provider may need custom headers.
	const fetchModels = async (i: number) => {
		const p = providers[i];
		const target = endpoint(p);
		setBusy(i);
		setStatus(undefined);
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
			update(i, { models: mergeListedModels(p.models ?? [], listed as ListedModel[]) });
			setStatus({
				error: false,
				text: `${p.name}: ${listed.length} model(s) from ${target.baseUrl}/models. Turn on the ones you want, then Save.`,
			});
		} catch (e) {
			setStatus({ error: true, text: `${p.name}: ${errorMessage(e)}` });
		} finally {
			setBusy(-1);
		}
	};

	return (
		<div className="local-mode-settings">
			<Section
				title="Custom Providers"
				description="Run agents against your own OpenAI- or Anthropic-compatible endpoints. The agent harness runs locally; requests go straight from this machine to the endpoint."
				trailing={
					<div className="local-mode-actions">
						<Button
							size="sm"
							variant="secondary"
							onClick={() => {
								setProviders((ps) => [...ps, newProvider(ps)]);
								setDirty(true);
							}}
						>
							Add provider
						</Button>
						<Button size="sm" variant="primary" disabled={!dirty} onClick={save}>
							Save
						</Button>
					</div>
				}
			>
				{status === undefined && providers.length > 0 ? null : (
					<div className="local-mode-status" data-error={status?.error || undefined}>
						{status?.text ?? 'No providers yet. Add one to get started.'}
					</div>
				)}
			</Section>
			{providers.map((p, i) => (
				<ProviderCard
					// Index keys: name and prefix change while the user types.
					key={i}
					provider={p}
					busy={busy === i}
					onChange={(patch) => update(i, patch)}
					onRemove={() => {
						setProviders((ps) => ps.filter((_, j) => j !== i));
						setDirty(true);
					}}
					onFetch={() => fetchModels(i)}
				/>
			))}
		</div>
	);
}
