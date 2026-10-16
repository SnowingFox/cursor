import { type ReactNode, useState } from 'react';
import { cursorHost } from '../../../../../glass/host/cursorHost.js';
import {
	API_TYPE_LABELS,
	API_TYPES,
	type ApiType,
	BASE_URL_HINTS,
	type CustomModel,
	type CustomProvider,
} from '../../common/localMode.js';
import { contextWindow } from '../../common/providers.js';

interface TextInputProps {
	value: string | undefined;
	onChange: (value: string) => void;
	ariaLabel: string;
	type?: 'text' | 'password';
	placeholder?: string;
	className?: string;
}

function TextInput({ value, onChange, ariaLabel, type = 'text', placeholder, className }: TextInputProps): ReactNode {
	return (
		<input
			type={type}
			value={value ?? ''}
			placeholder={placeholder}
			aria-label={ariaLabel}
			spellCheck={false}
			autoComplete="off"
			className={`local-mode-input ${className ?? ''}`}
			onChange={(e) => onChange(e.target.value)}
		/>
	);
}

function ModelRow(props: {
	prefix: string;
	model: CustomModel;
	onChange: (patch: Partial<CustomModel>) => void;
	onRemove: () => void;
}): ReactNode {
	const { Button, Switch } = cursorHost().cursor.ui;
	const { prefix, model, onChange, onRemove } = props;
	const auto = contextWindow({ id: model.id });
	return (
		<div className="local-mode-model-row">
			<Switch checked={model.enabled !== false} onCheckedChange={(enabled) => onChange({ enabled })} />
			<span title={model.id} className="local-mode-model-id" data-disabled={model.enabled === false || undefined}>
				{`${prefix || '?'}/${model.id}`}
			</span>
			<TextInput
				value={model.contextWindow === undefined ? '' : String(model.contextWindow)}
				onChange={(v) => {
					const n = Number(v.replace(/[_,\s]/gu, ''));
					onChange({ contextWindow: v.trim() === '' || !Number.isFinite(n) || n <= 0 ? undefined : Math.floor(n) });
				}}
				placeholder={auto === undefined ? 'context (auto)' : `context ${auto.toLocaleString()}`}
				ariaLabel={`Context window for ${model.id}`}
				className="local-mode-input-context"
			/>
			<Button size="sm" variant="ghost" onClick={onRemove}>
				Remove
			</Button>
		</div>
	);
}

export function ProviderCard(props: {
	provider: CustomProvider;
	busy: boolean;
	onChange: (patch: Partial<CustomProvider>) => void;
	onRemove: () => void;
	onFetch: () => void;
}): ReactNode {
	const { Section, Entries, Button, Switch } = cursorHost().cursor.ui;
	const { provider: p, busy, onChange, onRemove, onFetch } = props;
	const [newModel, setNewModel] = useState('');
	const models = p.models ?? [];
	const setModels = (next: CustomModel[]) => onChange({ models: next });
	const patchModel = (i: number, patch: Partial<CustomModel>) =>
		setModels(models.map((m, j) => (j === i ? { ...m, ...patch } : m)));
	const addModel = () => {
		const id = newModel.trim();
		if (id && !models.some((m) => m.id === id)) {
			setModels([...models, { id, enabled: true }]);
		}
		setNewModel('');
	};
	const anthropic = p.apiType === 'anthropic';
	const enabledCount = models.filter((m) => m.enabled !== false).length;

	return (
		<Section
			title={p.name?.trim() || 'Untitled provider'}
			description={`${API_TYPE_LABELS[p.apiType] ?? p.apiType} · models appear as "${p.prefix || '?'}/<model>"`}
			trailing={<Switch checked={p.enabled !== false} onCheckedChange={(enabled) => onChange({ enabled })} />}
		>
			<Entries.Root accessibleLabel={`Custom provider ${p.name}`}>
				<Entries.Entry label="Name" description="Shown in the model picker tooltip." layout="row">
					<TextInput value={p.name} onChange={(name) => onChange({ name })} ariaLabel="Provider name" />
				</Entries.Entry>
				<Entries.Entry
					label="Prefix"
					description="Model IDs become <prefix>/<model>, so they never collide with Cursor's models. Stripped before the request is sent."
					layout="row"
				>
					<TextInput value={p.prefix} onChange={(v) => onChange({ prefix: v.trim() })} ariaLabel="Model prefix" />
				</Entries.Entry>
				<Entries.Entry label="API" description="Wire format the endpoint speaks." layout="row">
					<select
						value={p.apiType}
						aria-label="API type"
						className="local-mode-input"
						onChange={(e) => onChange({ apiType: e.target.value as ApiType })}
					>
						{API_TYPES.map((t) => (
							<option key={t} value={t}>
								{API_TYPE_LABELS[t]}
							</option>
						))}
					</select>
				</Entries.Entry>
				<Entries.Entry
					label="Base URL"
					description={
						anthropic
							? 'Like ANTHROPIC_BASE_URL: /v1 is appended when missing.'
							: 'OpenAI-compatible base, usually ending in /v1.'
					}
					layout="row"
				>
					<TextInput
						value={p.baseUrl}
						onChange={(baseUrl) => onChange({ baseUrl })}
						placeholder={BASE_URL_HINTS[p.apiType]}
						ariaLabel="Base URL"
					/>
				</Entries.Entry>
				<Entries.Entry
					label="API Key"
					description={anthropic ? 'Sent as x-api-key.' : 'Sent as Authorization: Bearer.'}
					layout="row"
				>
					<TextInput type="password" value={p.apiKey} onChange={(apiKey) => onChange({ apiKey })} ariaLabel="API key" />
				</Entries.Entry>
				<Entries.Entry label="Extra headers" description='Optional, one "Name: value" per line.' layout="row">
					<textarea
						value={p.headers ?? ''}
						rows={2}
						spellCheck={false}
						aria-label="Extra headers"
						className="local-mode-input local-mode-textarea"
						onChange={(e) => onChange({ headers: e.target.value })}
					/>
				</Entries.Entry>
				<Entries.Entry
					label="Models"
					description={
						models.length === 0
							? "Fetch the endpoint's /models list or add model IDs by hand."
							: `${enabledCount} of ${models.length} shown in the model picker.`
					}
					layout="row"
				>
					<div className="local-mode-actions">
						<Button size="sm" variant="secondary" disabled={busy} onClick={onFetch}>
							{busy ? 'Fetching…' : 'Fetch models'}
						</Button>
						{models.length > 0 ? (
							<Button size="sm" variant="ghost" onClick={() => setModels(models.map((m) => ({ ...m, enabled: true })))}>
								Enable all
							</Button>
						) : null}
						{models.length > 0 ? (
							<Button
								size="sm"
								variant="ghost"
								onClick={() => setModels(models.map((m) => ({ ...m, enabled: false })))}
							>
								Disable all
							</Button>
						) : null}
					</div>
				</Entries.Entry>
				<div className="local-mode-models">
					{models.map((m, i) => (
						<ModelRow
							key={m.id}
							prefix={p.prefix}
							model={m}
							onChange={(patch) => patchModel(i, patch)}
							onRemove={() => setModels(models.filter((_, j) => j !== i))}
						/>
					))}
					<div className="local-mode-add-model">
						<input
							type="text"
							value={newModel}
							placeholder="Add model ID, e.g. claude-opus-5-5"
							spellCheck={false}
							aria-label="New model ID"
							className="local-mode-input local-mode-input-grow"
							onChange={(e) => setNewModel(e.target.value)}
							onKeyDown={(e) => e.key === 'Enter' && addModel()}
						/>
						<Button size="sm" variant="secondary" disabled={newModel.trim() === ''} onClick={addModel}>
							Add model
						</Button>
					</div>
				</div>
				<Entries.Entry label="Remove provider" layout="row">
					<Button size="sm" variant="ghost" onClick={onRemove}>
						Remove
					</Button>
				</Entries.Entry>
			</Entries.Root>
		</Section>
	);
}
