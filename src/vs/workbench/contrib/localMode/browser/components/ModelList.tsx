import { type ReactNode, useState } from 'react';
import { cursorHost } from '../../../../../glass/host/cursorHost.js';
import { formatContextWindow, parseTokenCount } from '../../common/format.js';
import type { CustomModel } from '../../common/localMode.js';
import { contextWindow } from '../../common/providers.js';
import { Icon } from './icons.js';

type Filter = 'all' | 'on' | 'off';

const isOn = (m: CustomModel) => m.enabled !== false;

/** "1M ctx" chip; click to type an override ("200k", "1m", …), empty resets it. */
function ContextChip(props: { model: CustomModel; onChange: (contextWindow: number | undefined) => void }): ReactNode {
	const { model, onChange } = props;
	const [draft, setDraft] = useState<string | undefined>(undefined);
	const value = contextWindow(model);
	const overridden = model.contextWindow !== undefined;

	if (draft !== undefined) {
		const parsed = draft.trim() === '' ? undefined : parseTokenCount(draft);
		const valid = draft.trim() === '' || parsed !== undefined;
		// Enter keeps a bad value open to fix; leaving the field drops it.
		const commit = (close: boolean) => {
			if (valid) {
				onChange(parsed);
			}
			if (valid || close) {
				setDraft(undefined);
			}
		};
		return (
			<input
				// biome-ignore lint/a11y/noAutofocus: opened by an explicit click on the chip.
				autoFocus
				value={draft}
				placeholder="auto"
				title="Tokens, e.g. 200k or 1m. Leave empty for the default."
				aria-label={`Context window for ${model.id}`}
				aria-invalid={!valid}
				spellCheck={false}
				className="local-mode-context-input"
				onFocus={(e) => e.target.select()}
				onChange={(e) => setDraft(e.target.value)}
				onBlur={() => commit(true)}
				onKeyDown={(e) => {
					if (e.key === 'Enter') {
						commit(false);
					} else if (e.key === 'Escape') {
						setDraft(undefined);
					}
				}}
			/>
		);
	}
	return (
		<button
			type="button"
			className="local-mode-context-chip"
			data-auto={!overridden || undefined}
			title={
				value === undefined
					? 'Context window: decided by the agent runtime. Click to set one.'
					: `Context window: ${value.toLocaleString()} tokens. Click to change.`
			}
			onClick={() => setDraft(model.contextWindow === undefined ? '' : formatContextWindow(model.contextWindow))}
		>
			{value === undefined ? 'auto' : formatContextWindow(value)}
		</button>
	);
}

export function ModelList(props: {
	prefix: string;
	models: CustomModel[];
	busy: boolean;
	onChange: (models: CustomModel[]) => void;
	onFetch: () => void;
}): ReactNode {
	const { Switch } = cursorHost().cursor.ui;
	const { prefix, models, busy, onChange, onFetch } = props;
	const [query, setQuery] = useState('');
	const [filter, setFilter] = useState<Filter>('all');
	const [newModel, setNewModel] = useState('');

	const onCount = models.filter(isOn).length;
	const q = query.trim().toLowerCase();
	const shown = models.filter(
		(m) => (filter === 'all' || (filter === 'on') === isOn(m)) && (q === '' || m.id.toLowerCase().includes(q)),
	);
	const shownIds = new Set(shown.map((m) => m.id));
	const setShown = (enabled: boolean) => onChange(models.map((m) => (shownIds.has(m.id) ? { ...m, enabled } : m)));
	const patch = (id: string, values: Partial<CustomModel>) =>
		onChange(models.map((m) => (m.id === id ? { ...m, ...values } : m)));
	const addModel = () => {
		const id = newModel.trim();
		if (id && !models.some((m) => m.id === id)) {
			onChange([...models, { id, enabled: true }]);
		}
		setNewModel('');
	};

	const counts: Record<Filter, number> = { all: models.length, on: onCount, off: models.length - onCount };

	return (
		<div className="local-mode-block">
			<div className="local-mode-block-header">
				<div>
					<div className="local-mode-block-title">Models</div>
					<div className="local-mode-hint">
						{models.length === 0
							? 'Fetch the list from the endpoint, or add model IDs by hand.'
							: `${onCount} of ${models.length} in the model picker, as ${prefix || '?'}/<model>`}
					</div>
				</div>
				<button type="button" className="local-mode-link-button" disabled={busy} onClick={onFetch}>
					<span className="local-mode-spin" data-active={busy || undefined}>
						<Icon name="refresh" size={13} />
					</span>
					{busy ? 'Fetching…' : models.length === 0 ? 'Fetch models' : 'Refresh'}
				</button>
			</div>

			{models.length > 0 ? (
				<div className="local-mode-model-toolbar">
					<label className="local-mode-search">
						<Icon name="search" size={13} />
						<input
							value={query}
							placeholder={`Search ${models.length} models`}
							aria-label="Search models"
							spellCheck={false}
							onChange={(e) => setQuery(e.target.value)}
						/>
						{query ? (
							<button type="button" aria-label="Clear search" onClick={() => setQuery('')}>
								<Icon name="x" size={12} />
							</button>
						) : null}
					</label>
					<div className="local-mode-segmented" role="tablist" aria-label="Show models">
						{(['all', 'on', 'off'] as const).map((f) => (
							<button
								key={f}
								type="button"
								role="tab"
								aria-selected={filter === f}
								data-active={filter === f || undefined}
								onClick={() => setFilter(f)}
							>
								{f === 'all' ? 'All' : f === 'on' ? 'On' : 'Off'}
								<span className="local-mode-count">{counts[f]}</span>
							</button>
						))}
					</div>
				</div>
			) : null}

			{models.length > 0 ? (
				<ul className="local-mode-model-list">
					{shown.length === 0 ? (
						<li className="local-mode-empty-row">No models match.</li>
					) : (
						shown.map((m) => (
							<li key={m.id} className="local-mode-model-row" data-off={!isOn(m) || undefined}>
								<Switch checked={isOn(m)} onCheckedChange={(enabled) => patch(m.id, { enabled })} />
								<span className="local-mode-model-name" title={`${prefix}/${m.id}`}>
									{m.id}
								</span>
								<ContextChip model={m} onChange={(contextWindow) => patch(m.id, { contextWindow })} />
								<button
									type="button"
									className="local-mode-icon-button local-mode-row-action"
									aria-label={`Remove ${m.id}`}
									title="Remove"
									onClick={() => onChange(models.filter((x) => x.id !== m.id))}
								>
									<Icon name="x" size={13} />
								</button>
							</li>
						))
					)}
				</ul>
			) : null}

			<div className="local-mode-model-footer">
				<div className="local-mode-add-model">
					<Icon name="plus" size={13} />
					<input
						value={newModel}
						placeholder="Add a model ID, e.g. claude-opus-5-5"
						aria-label="New model ID"
						spellCheck={false}
						onChange={(e) => setNewModel(e.target.value)}
						onKeyDown={(e) => e.key === 'Enter' && addModel()}
					/>
					{newModel.trim() ? (
						<button type="button" className="local-mode-link-button" onClick={addModel}>
							Add
						</button>
					) : null}
				</div>
				{shown.length > 0 ? (
					<div className="local-mode-bulk">
						<button type="button" className="local-mode-link-button" onClick={() => setShown(true)}>
							{shown.length === models.length ? 'Enable all' : `Enable ${shown.length} shown`}
						</button>
						<button type="button" className="local-mode-link-button" onClick={() => setShown(false)}>
							{shown.length === models.length ? 'Disable all' : `Disable ${shown.length} shown`}
						</button>
					</div>
				) : null}
			</div>
		</div>
	);
}
