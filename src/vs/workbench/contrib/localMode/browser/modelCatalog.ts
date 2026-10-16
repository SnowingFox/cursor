import { type AiService, cursorHost } from '../../../../glass/host/cursorHost.js';
import { EFFORT_LABELS } from '../common/localMode.js';
import { contextWindow, effortTiers, enabledModels, endpoint } from '../common/providers.js';
import { readProviders } from './providerStorage.js';

/**
 * Local mode's model catalog: the enabled custom models, no backend round trip.
 * Replaces AIService.refreshDefaultModels.
 */
export async function refreshModels(aiService: AiService): Promise<void> {
	const { cursor } = cursorHost();
	const entries = enabledModels(readProviders(aiService._storageService));

	const rows = entries.map(({ provider, model, id }) => {
		const context = contextWindow(model);
		const source = provider.name || provider.prefix || 'custom provider';
		const effort = effortTiers(provider, model.id);
		const label = (v: keyof typeof EFFORT_LABELS) => EFFORT_LABELS[v] ?? v;
		const parameterDefinitions =
			effort === undefined
				? []
				: [
						{
							id: 'reasoning',
							name: 'Reasoning',
							markdownTooltip: 'How much the model thinks before answering.',
							parameterType: {
								enumParameter: { values: effort.values.map((v) => ({ value: v, displayName: label(v) })) },
							},
							isCycleableByHotkey: true,
						},
					];
		const variants =
			effort === undefined
				? [
						{
							parameterValues: [],
							displayName: id,
							displayNameOutsidePicker: id,
							isMaxMode: false,
							isDefaultNonMaxConfig: true,
							isDefaultMaxConfig: true,
						},
					]
				: effort.values.map((v) => ({
						parameterValues: [{ id: 'reasoning', value: v }],
						displayName: `${id} ${label(v)}`,
						displayNameOutsidePicker: `${id} ${label(v)}`,
						isMaxMode: false,
						isDefaultNonMaxConfig: v === effort.default,
						isDefaultMaxConfig: v === effort.default,
					}));
		const tooltip = [
			`Served by ${source} (${endpoint(provider).baseUrl}).`,
			context === undefined ? undefined : `Context: ${context.toLocaleString()} tokens.`,
			effort === undefined ? undefined : `Reasoning: ${effort.values.map(label).join(', ')}.`,
		]
			.filter(Boolean)
			.join('\n\n');
		return {
			name: id,
			serverModelName: id,
			clientDisplayName: id,
			inputboxShortModelName: id,
			defaultOn: true,
			supportsAgent: true,
			supportsPlanMode: true,
			supportsSandboxing: true,
			supportsMaxMode: false,
			supportsNonMaxMode: true,
			supportsCmdK: false,
			supportsThinking: effort !== undefined,
			supportsImages: model.vision !== false,
			tagline: source,
			namedModelSectionIndex: 1,
			legacySlugs: [],
			idAliases: [],
			parameterDefinitions,
			variants,
			tooltipData: { markdownContent: tooltip },
		};
	});

	const models = aiService.deserializePickerModels(rows).map((m) => cursor.toAvailableModel(m));
	const ids = models.map((m) => m.name);
	cursor.batch(() => {
		aiService.persistAvailableDefaultModels(models);
		aiService._reactiveStorageService.setApplicationUserPersistentStorage('localProviderModelIds', ids);
		aiService._reactiveStorageService.setApplicationUserPersistentStorage('localProviderAgentModelIds', ids);
	});
	try {
		aiService._modelConfigService.triggerParameterizedModelConfigMigration();
	} catch {}

	// Keep the composer on a model that still exists.
	const stored = aiService._modelConfigService.getStoredModelConfig('composer');
	const current = stored?.selectedModels?.[0]?.modelId ?? stored?.modelName?.split(',')[0]?.trim();
	if (ids.length > 0 && (current === undefined || !ids.includes(current))) {
		const first = entries.find((e) => e.id === ids[0]);
		const effort = first === undefined ? undefined : effortTiers(first.provider, first.model.id);
		aiService._modelConfigService.setModelConfig('composer', {
			modelName: ids[0],
			selectedModels: [
				{ modelId: ids[0], parameters: effort === undefined ? [] : [{ id: 'reasoning', value: effort.default }] },
			],
			maxMode: false,
		});
	}
	aiService._aiSettingsService.handleAvailableModelsChange();
}
