/**
 * Typed bridge to the agent window (glass) bundle.
 *
 * Our modules are built separately from Cursor's minified workbench bundle, so
 * they cannot import its internals. Instead, a small loader patched into the
 * bundle (build/patches/inject/glass-host.js) publishes the pieces we need on
 * `globalThis.__cursorLocalMode` under readable names, then imports our entry
 * point. This file is the only place that knows the shape of that object; when
 * a Cursor update renames things, only the loader's mapping changes.
 */
import type * as React from 'react';
import type * as JsxRuntime from 'react/jsx-runtime';

/** `vs/platform/storage` StorageScope.APPLICATION / StorageTarget.MACHINE. */
export const StorageScope = { APPLICATION: -1 } as const;
export const StorageTarget = { MACHINE: 1 } as const;

export interface StorageService {
	get(key: string, scope: number): string | undefined;
	store(key: string, value: string, scope: number, target: number): void;
}

/** A protobuf message (connect-es): enough surface for cloning a model selection. */
export interface ProtoMessage<T> {
	clone(): T;
}

export interface ModelParameter {
	id: string;
	value: string;
}

export interface RequestedModel extends ProtoMessage<RequestedModel> {
	modelId: string;
	parameters?: ModelParameter[];
}

export interface ModelDetails extends ProtoMessage<ModelDetails> {
	modelId: string;
}

export interface ModelConfig {
	modelName?: string;
	selectedModels?: { modelId: string; parameters: ModelParameter[] }[];
	maxMode?: boolean;
}

export interface ModelConfigService {
	getModelConfig(feature: 'composer'): ModelConfig | undefined;
	getStoredModelConfig(feature: 'composer'): ModelConfig | undefined;
	setModelConfig(feature: 'composer', config: ModelConfig): void;
	triggerParameterizedModelConfigMigration(): void;
}

export interface ReactiveStorageService {
	setApplicationUserPersistentStorage(key: string, value: unknown): void;
}

/** Cursor's AIService (only what local mode touches). */
export interface AiService {
	_storageService: StorageService;
	_modelConfigService: ModelConfigService;
	_reactiveStorageService: ReactiveStorageService;
	_aiSettingsService: { handleAvailableModelsChange(): void };
	deserializePickerModels(rows: unknown[]): PickerModel[];
	persistAvailableDefaultModels(models: AvailableModel[]): void;
	refreshDefaultModels(): Promise<void>;
}

export type PickerModel = { readonly __brand: 'PickerModel' };
export type AvailableModel = { name: string };

export interface LocalInferenceService {
	fetchLocalProviderModels(request: {
		baseUrl: string;
		apiKey: string | undefined;
		customHeaders: Record<string, string>;
		userAgent: string;
		cursorLocalProvider: { apiType: string; listing: true };
	}): Promise<{ cursorLocalModels?: unknown }>;
}

/** Cursor's authentication service (only what local sign-in touches). */
export interface AuthService {
	notifyLoginChangedListeners(signedIn: boolean): void;
}

/** The agent window's command service. */
export interface CommandService {
	executeCommand(id: string, ...args: unknown[]): Promise<unknown>;
}

/** Who local mode is signed in as (local sign-in). */
export interface LocalAccount {
	signedIn: boolean;
	name: string;
	email: string;
}

export interface LocalAccountStore {
	get(): LocalAccount;
	/** Updates the account; pass the auth service to make the workbench pick it up. */
	set(auth: AuthService | undefined, patch: Partial<LocalAccount>): void;
	subscribe(listener: () => void): () => void;
}

/** A dependency-injection service identifier (`createDecorator(...)`). */
export type ServiceIdentifier<T> = { readonly __service?: T };

type Component<P> = React.ComponentType<P>;

export interface CursorUi {
	/** A whole settings page: title, description and the constrained, padded column. */
	Page: Component<{ title: React.ReactNode; description?: React.ReactNode; children?: React.ReactNode }>;
	/** Settings section: titled card with optional trailing controls. */
	Section: Component<{
		title: React.ReactNode;
		description?: React.ReactNode;
		trailing?: React.ReactNode;
		children?: React.ReactNode;
	}>;
	/** Settings rows. */
	Entries: {
		Root: Component<{ accessibleLabel: string; children?: React.ReactNode }>;
		Entry: Component<{
			label: React.ReactNode;
			description?: React.ReactNode;
			layout?: 'row' | 'column';
			children?: React.ReactNode;
		}>;
	};
	Button: Component<{
		size?: 'sm' | 'md';
		variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'text';
		disabled?: boolean;
		onClick?: () => void;
		children?: React.ReactNode;
	}>;
	Switch: Component<{ checked: boolean; onCheckedChange: (checked: boolean) => void }>;
}

export interface CursorInternals {
	/** Renderer build flags; `localMode` is the runtime switch. */
	readonly buildFlags: { localMode: boolean };
	/** `new ModelDetails({...})` (protobuf). */
	readonly ModelDetails: new (
		init: Record<string, string>,
	) => ModelDetails;
	/** Converts a deserialized picker model into the stored AvailableModel shape. */
	toAvailableModel(model: PickerModel): AvailableModel;
	/** Runs `fn` as one reactive-storage transaction. */
	batch(fn: () => void): void;
	/** React hook resolving a workbench service. */
	useService<T>(id: ServiceIdentifier<T>): T;
	readonly services: {
		storage: ServiceIdentifier<StorageService>;
		ai: ServiceIdentifier<AiService>;
		localInference: ServiceIdentifier<LocalInferenceService>;
		auth: ServiceIdentifier<AuthService>;
		commands: ServiceIdentifier<CommandService>;
	};
	readonly ui: CursorUi;
}

/** Everything local mode exposes back to the bundle's patch sites. */
export interface LocalModeImpl {
	views: Record<string, Component<never>>;
	[name: string]: unknown;
}

export interface CursorHost {
	readonly react: typeof React;
	readonly jsxRuntime: typeof JsxRuntime;
	readonly cursor: CursorInternals;
	readonly account: LocalAccountStore;
	impl: LocalModeImpl | undefined;
	/** Installs (or hot-replaces) the implementation and re-renders mounted views. */
	register(impl: LocalModeImpl): void;
}

declare global {
	var __cursorLocalMode: CursorHost | undefined;
}

export function cursorHost(): CursorHost {
	const host = globalThis.__cursorLocalMode;
	if (host === undefined) {
		throw new Error('cursor host bridge is not installed (is the glass bundle patched?)');
	}
	return host;
}
