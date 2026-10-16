import {
	cursorHost,
	type ModelConfigService,
	type ModelDetails,
	type RequestedModel,
	type StorageService,
} from '../../../../glass/host/cursorHost.js';
import type { ProviderDescriptor } from '../common/localMode.js';
import { descriptor, enabledModels, endpoint, resolveModel } from '../common/providers.js';
import { readProviders } from './providerStorage.js';

export interface RunOptions {
	conversationId?: string;
	requestedModel?: RequestedModel;
	[key: string]: unknown;
}

export interface RoutedTurn {
	modelDetails: ModelDetails | undefined;
	runOptions: RunOptions;
	providerConfig: { baseUrl: string; apiKey: string | undefined; customHeaders: Record<string, string> };
	availableModelIds: string[];
	cursorLocalProvider: ProviderDescriptor;
}

/**
 * Rewrites one agent turn onto the custom provider that owns its model:
 * `<prefix>/<model>` becomes the bare model ID plus that provider's endpoint.
 * Returns undefined when no custom models are configured (upstream behavior).
 */
export function routeTurn(
	storage: StorageService,
	modelDetails: ModelDetails | undefined,
	runOptions: RunOptions,
): RoutedTurn | undefined {
	const providers = readProviders(storage);
	const models = enabledModels(providers);
	if (models.length === 0) {
		return undefined;
	}
	const requested = runOptions.requestedModel?.modelId?.trim() || modelDetails?.modelId?.trim() || undefined;
	let hit =
		resolveModel(providers, runOptions.requestedModel?.modelId) ?? resolveModel(providers, modelDetails?.modelId);
	if (hit === undefined) {
		if (requested !== undefined && requested !== 'default') {
			throw new Error(
				`Model "${requested}" is not configured. Add it under Settings > Models > Custom Providers, or pick one of: ${models.map((e) => e.id).join(', ')}.`,
			);
		}
		hit = models[0];
	}
	const bare = hit.model.id;
	const target = endpoint(hit.provider);

	let requestedModel = runOptions.requestedModel;
	if (requestedModel !== undefined) {
		requestedModel = requestedModel.clone();
		requestedModel.modelId = bare;
	}
	let details = modelDetails;
	if (details !== undefined) {
		details = details.clone();
		details.modelId = bare;
	} else if (requestedModel === undefined) {
		const { ModelDetails } = cursorHost().cursor;
		details = new ModelDetails({ modelId: bare, displayModelId: bare, displayName: bare, displayNameShort: bare });
	}
	return {
		modelDetails: details,
		runOptions: { ...runOptions, requestedModel },
		providerConfig: { baseUrl: target.baseUrl, apiKey: target.apiKey, customHeaders: target.headers },
		availableModelIds: (hit.provider.models ?? []).filter((m) => m?.id && m.enabled !== false).map((m) => m.id),
		cursorLocalProvider: descriptor(hit.provider),
	};
}

/**
 * Provider for one-shot local inference (chat titles, commit messages): the
 * composer's selected custom model, else the first enabled one.
 */
export function inferenceConfig(storage: StorageService, modelConfigService: ModelConfigService, userAgent: string) {
	const providers = readProviders(storage);
	const models = enabledModels(providers);
	if (models.length === 0) {
		return undefined;
	}
	let selected: string | undefined;
	try {
		selected = modelConfigService.getModelConfig('composer')?.selectedModels?.[0]?.modelId;
	} catch {}
	const hit = resolveModel(providers, selected) ?? models[0];
	const target = endpoint(hit.provider);
	return {
		baseUrl: target.baseUrl,
		apiKey: target.apiKey,
		userAgent,
		customHeaders: target.headers,
		modelId: hit.model.id,
		cursorLocalProvider: descriptor(hit.provider),
	};
}
