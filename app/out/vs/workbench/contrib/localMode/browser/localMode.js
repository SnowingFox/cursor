//#region src/vs/glass/host/cursorHost.ts
/** `vs/platform/storage` StorageScope.APPLICATION / StorageTarget.MACHINE. */
var StorageScope = { APPLICATION: -1 };
var StorageTarget = { MACHINE: 1 };
function cursorHost() {
	const host = globalThis.__cursorLocalMode;
	if (host === void 0) throw new Error("cursor host bridge is not installed (is the glass bundle patched?)");
	return host;
}
var { Children, Component, Fragment: Fragment$1, PureComponent, StrictMode, Suspense, cloneElement, createContext, createElement, createRef, forwardRef, isValidElement, lazy, memo, startTransition, use, useCallback, useContext, useDebugValue, useDeferredValue, useEffect, useId, useImperativeHandle, useInsertionEffect, useLayoutEffect, useMemo, useReducer, useRef, useState, useSyncExternalStore, useTransition } = cursorHost().react;
//#endregion
//#region src/vs/workbench/contrib/localMode/common/localMode.ts
/**
* Local mode: run Cursor's agent harness against user-configured OpenAI /
* Anthropic compatible endpoints, with no Cursor account or backend.
*
* Shared by the agent window (renderer) and the cursor-agent-exec extension
* host, so this file must stay free of DOM and Node APIs.
*/
var API_TYPES = [
	"openai-chat",
	"openai-responses",
	"anthropic"
];
var API_TYPE_LABELS = {
	"openai-chat": "OpenAI Chat Completions",
	"openai-responses": "OpenAI Responses",
	anthropic: "Anthropic Messages"
};
var BASE_URL_HINTS = {
	"openai-chat": "https://api.openai.com/v1",
	"openai-responses": "https://api.openai.com/v1",
	anthropic: "https://api.anthropic.com"
};
/** Application-scoped storage key holding `{ version: 1, providers }`. */
var STORAGE_KEY$1 = "cursorLocalMode.customProviders";
var EFFORT_LABELS = {
	none: "Off",
	minimal: "Minimal",
	low: "Low",
	medium: "Medium",
	high: "High",
	xhigh: "Extra High",
	max: "Max"
};
//#endregion
//#region src/vs/workbench/contrib/localMode/common/providers.ts
function parseProviders(json) {
	try {
		const value = JSON.parse(json ?? "null");
		return Array.isArray(value?.providers) ? value.providers.filter((p) => p !== null && typeof p === "object") : [];
	} catch {
		return [];
	}
}
function serializeProviders(providers) {
	return JSON.stringify({
		version: 1,
		providers
	});
}
function pickerModelId(provider, model) {
	const prefix = String(provider.prefix ?? "").trim();
	return prefix ? `${prefix}/${model.id}` : model.id;
}
function enabledModels(providers) {
	return providers.flatMap((provider) => provider.enabled === false ? [] : (provider.models ?? []).filter((m) => m?.id && m.enabled !== false).map((model) => ({
		provider,
		model,
		id: pickerModelId(provider, model)
	})));
}
function resolveModel(providers, modelId) {
	const id = typeof modelId === "string" ? modelId.trim() : "";
	return id ? enabledModels(providers).find((e) => e.id === id) : void 0;
}
var CLAUDE_200K = /^claude-(?:3|(?:opus|sonnet|haiku)-4(?:-[0-5])?(?:-\d{8})?$|(?:opus|sonnet|haiku)-4-[0-5]-)/i;
/**
* Explicit setting, else what /models reported, else 1M for current Claude
* models (200K for the Claude 3 / early Claude 4 generations).
*/
function contextWindow(model) {
	const n = Number(model.contextWindow);
	if (Number.isFinite(n) && n > 0) return Math.floor(n);
	if (!/^claude-/i.test(model.id)) return;
	return CLAUDE_200K.test(model.id) ? 2e5 : 1e6;
}
function maxOutputTokens(model) {
	const n = Number(model.maxOutputTokens);
	return Number.isFinite(n) && n > 0 ? Math.floor(n) : void 0;
}
/**
* Normalizes the user's base URL the way the agent runtime expects it:
* Anthropic endpoints end in `/vN` (like ANTHROPIC_BASE_URL plus `/v1`),
* OpenAI endpoints without the `/chat/completions` or `/responses` suffix.
*/
function endpoint(provider) {
	let baseUrl = String(provider.baseUrl ?? "").trim().replace(/\/+$/u, "");
	if (provider.apiType === "anthropic") {
		baseUrl = baseUrl.replace(/\/messages$/u, "");
		if (!/\/v\d+$/u.test(baseUrl)) baseUrl += "/v1";
	} else baseUrl = baseUrl.replace(/\/(?:chat\/completions|responses)$/u, "");
	const headers = {};
	for (const line of String(provider.headers ?? "").split(/\r?\n/u)) {
		const i = line.indexOf(":");
		if (i > 0) headers[line.slice(0, i).trim()] = line.slice(i + 1).trim();
	}
	return {
		baseUrl,
		apiKey: String(provider.apiKey ?? "").trim() || void 0,
		headers
	};
}
function descriptor(provider) {
	const contextLengths = {};
	const maxOutput = {};
	for (const m of provider.models ?? []) {
		if (!m?.id) continue;
		const context = contextWindow(m);
		const output = maxOutputTokens(m);
		if (context !== void 0) contextLengths[m.id] = context;
		if (output !== void 0) maxOutput[m.id] = output;
	}
	return {
		apiType: API_TYPES.includes(provider.apiType) ? provider.apiType : "openai-chat",
		contextLengths,
		maxOutputTokens: maxOutput
	};
}
/**
* Reasoning-effort tiers the local runtime applies per model (mirrors the model
* table in cursor-agent-exec): Anthropic models take `output_config.effort`
* (adaptive thinking), OpenAI-compatible ones `reasoning_effort`.
*/
function effortTiers(provider, modelId) {
	const id = String(modelId).trim().toLowerCase().replace(/^.*\//u, "").replace(/@.*$/u, "");
	if (provider.apiType === "anthropic") {
		if (/^claude-(?:opus|haiku)-5[-.]5$/u.test(id)) return {
			values: [
				"low",
				"medium",
				"high",
				"xhigh",
				"max"
			],
			default: "medium"
		};
		if (/^claude-(?:opus-5|opus-4[-.][78]|sonnet-5(?:[-.]5)?)$/u.test(id)) return {
			values: [
				"low",
				"medium",
				"high",
				"xhigh",
				"max"
			],
			default: "high"
		};
		if (/^claude-(?:opus-4[-.][56]|sonnet-4[-.]6)$/u.test(id)) return {
			values: [
				"low",
				"medium",
				"high",
				"max"
			],
			default: "high"
		};
		return;
	}
	if (/^grok-4[.-](?:3|[56](?:-(?:batch|build|nocomp))?)$|^grok-build-latest$/u.test(id)) return {
		values: [
			"minimal",
			"low",
			"medium",
			"high",
			"xhigh"
		],
		default: "high"
	};
	if (/^grok-4[.-]7$|^gpt-5[.-]6-(?:luna|sol|terra)$|^gpt-5(?:\.\d+)?$/u.test(id)) return {
		values: [
			"low",
			"medium",
			"high",
			"xhigh"
		],
		default: "medium"
	};
}
function newProvider(existing) {
	const used = new Set(existing.map((p) => p.prefix));
	let n = existing.length + 1;
	let prefix = "custom-provider";
	while (used.has(prefix)) prefix = `custom-provider-${++n}`;
	return {
		name: prefix,
		prefix,
		apiType: "openai-chat",
		baseUrl: "",
		apiKey: "",
		headers: "",
		models: []
	};
}
/** Returns a user-facing error for the first invalid provider, if any. */
function validateProviders(providers) {
	const prefixes = /* @__PURE__ */ new Set();
	for (const p of providers) {
		const label = p.name?.trim() || "(unnamed provider)";
		if (!p.name?.trim()) return "Every provider needs a name.";
		if (!/^[A-Za-z0-9][A-Za-z0-9._-]*$/u.test(p.prefix ?? "")) return `${label}: the prefix may only contain letters, digits, ".", "_" and "-".`;
		if (prefixes.has(p.prefix)) return `Prefix "${p.prefix}" is used by more than one provider.`;
		prefixes.add(p.prefix);
		let url;
		try {
			url = new URL(endpoint(p).baseUrl);
		} catch {}
		if (url === void 0 || url.protocol !== "http:" && url.protocol !== "https:") return `${label}: base URL must be an http(s) URL.`;
		const ids = /* @__PURE__ */ new Set();
		for (const m of p.models ?? []) {
			if (ids.has(m.id)) return `${label}: model "${m.id}" is listed twice.`;
			ids.add(m.id);
		}
	}
}
/** Trims the free-text fields before a save. */
function cleanProviders(providers) {
	return providers.map((p) => ({
		...p,
		name: p.name.trim(),
		prefix: (p.prefix ?? "").trim(),
		baseUrl: p.baseUrl.trim(),
		apiKey: p.apiKey.trim()
	}));
}
/**
* Merges a fresh /models listing into a provider's model list: new models are
* added switched off, existing ones keep the user's settings and pick up the
* reported limits unless the user overrode the context window.
*/
function mergeListedModels(current, listed) {
	const merged = [...current];
	const known = new Map(current.map((m) => [m.id, m]));
	for (const m of listed) {
		const fetched = {
			...m.contextWindow === void 0 ? {} : { contextWindow: m.contextWindow },
			...m.maxOutputTokens === void 0 ? {} : { maxOutputTokens: m.maxOutputTokens }
		};
		const existing = known.get(m.id);
		if (existing === void 0) merged.push({
			id: m.id,
			enabled: false,
			...fetched
		});
		else merged[merged.indexOf(existing)] = {
			...fetched,
			...existing,
			...existing.contextWindow === void 0 ? {} : { contextWindow: existing.contextWindow }
		};
	}
	return merged;
}
//#endregion
//#region src/vs/workbench/contrib/localMode/browser/providerStorage.ts
function readProviders(storage) {
	return parseProviders(storage.get(STORAGE_KEY$1, StorageScope.APPLICATION));
}
function writeProviders(storage, providers) {
	storage.store(STORAGE_KEY$1, serializeProviders(providers), StorageScope.APPLICATION, StorageTarget.MACHINE);
}
var { Fragment, jsx, jsxs } = cursorHost().jsxRuntime;
//#endregion
//#region src/vs/workbench/contrib/localMode/browser/components/ProviderCard.tsx
function TextInput({ value, onChange, ariaLabel, type = "text", placeholder, className }) {
	return /* @__PURE__ */ jsx("input", {
		type,
		value: value ?? "",
		placeholder,
		"aria-label": ariaLabel,
		spellCheck: false,
		autoComplete: "off",
		className: `local-mode-input ${className ?? ""}`,
		onChange: (e) => onChange(e.target.value)
	});
}
function ModelRow(props) {
	const { Button, Switch } = cursorHost().cursor.ui;
	const { prefix, model, onChange, onRemove } = props;
	const auto = contextWindow({ id: model.id });
	return /* @__PURE__ */ jsxs("div", {
		className: "local-mode-model-row",
		children: [
			/* @__PURE__ */ jsx(Switch, {
				checked: model.enabled !== false,
				onCheckedChange: (enabled) => onChange({ enabled })
			}),
			/* @__PURE__ */ jsx("span", {
				title: model.id,
				className: "local-mode-model-id",
				"data-disabled": model.enabled === false || void 0,
				children: `${prefix || "?"}/${model.id}`
			}),
			/* @__PURE__ */ jsx(TextInput, {
				value: model.contextWindow === void 0 ? "" : String(model.contextWindow),
				onChange: (v) => {
					const n = Number(v.replace(/[_,\s]/gu, ""));
					onChange({ contextWindow: v.trim() === "" || !Number.isFinite(n) || n <= 0 ? void 0 : Math.floor(n) });
				},
				placeholder: auto === void 0 ? "context (auto)" : `context ${auto.toLocaleString()}`,
				ariaLabel: `Context window for ${model.id}`,
				className: "local-mode-input-context"
			}),
			/* @__PURE__ */ jsx(Button, {
				size: "sm",
				variant: "ghost",
				onClick: onRemove,
				children: "Remove"
			})
		]
	});
}
function ProviderCard(props) {
	const { Section, Entries, Button, Switch } = cursorHost().cursor.ui;
	const { provider: p, busy, onChange, onRemove, onFetch } = props;
	const [newModel, setNewModel] = useState("");
	const models = p.models ?? [];
	const setModels = (next) => onChange({ models: next });
	const patchModel = (i, patch) => setModels(models.map((m, j) => j === i ? {
		...m,
		...patch
	} : m));
	const addModel = () => {
		const id = newModel.trim();
		if (id && !models.some((m) => m.id === id)) setModels([...models, {
			id,
			enabled: true
		}]);
		setNewModel("");
	};
	const anthropic = p.apiType === "anthropic";
	const enabledCount = models.filter((m) => m.enabled !== false).length;
	return /* @__PURE__ */ jsx(Section, {
		title: p.name?.trim() || "Untitled provider",
		description: `${API_TYPE_LABELS[p.apiType] ?? p.apiType} · models appear as "${p.prefix || "?"}/<model>"`,
		trailing: /* @__PURE__ */ jsx(Switch, {
			checked: p.enabled !== false,
			onCheckedChange: (enabled) => onChange({ enabled })
		}),
		children: /* @__PURE__ */ jsxs(Entries.Root, {
			accessibleLabel: `Custom provider ${p.name}`,
			children: [
				/* @__PURE__ */ jsx(Entries.Entry, {
					label: "Name",
					description: "Shown in the model picker tooltip.",
					layout: "row",
					children: /* @__PURE__ */ jsx(TextInput, {
						value: p.name,
						onChange: (name) => onChange({ name }),
						ariaLabel: "Provider name"
					})
				}),
				/* @__PURE__ */ jsx(Entries.Entry, {
					label: "Prefix",
					description: "Model IDs become <prefix>/<model>, so they never collide with Cursor's models. Stripped before the request is sent.",
					layout: "row",
					children: /* @__PURE__ */ jsx(TextInput, {
						value: p.prefix,
						onChange: (v) => onChange({ prefix: v.trim() }),
						ariaLabel: "Model prefix"
					})
				}),
				/* @__PURE__ */ jsx(Entries.Entry, {
					label: "API",
					description: "Wire format the endpoint speaks.",
					layout: "row",
					children: /* @__PURE__ */ jsx("select", {
						value: p.apiType,
						"aria-label": "API type",
						className: "local-mode-input",
						onChange: (e) => onChange({ apiType: e.target.value }),
						children: API_TYPES.map((t) => /* @__PURE__ */ jsx("option", {
							value: t,
							children: API_TYPE_LABELS[t]
						}, t))
					})
				}),
				/* @__PURE__ */ jsx(Entries.Entry, {
					label: "Base URL",
					description: anthropic ? "Like ANTHROPIC_BASE_URL: /v1 is appended when missing." : "OpenAI-compatible base, usually ending in /v1.",
					layout: "row",
					children: /* @__PURE__ */ jsx(TextInput, {
						value: p.baseUrl,
						onChange: (baseUrl) => onChange({ baseUrl }),
						placeholder: BASE_URL_HINTS[p.apiType],
						ariaLabel: "Base URL"
					})
				}),
				/* @__PURE__ */ jsx(Entries.Entry, {
					label: "API Key",
					description: anthropic ? "Sent as x-api-key." : "Sent as Authorization: Bearer.",
					layout: "row",
					children: /* @__PURE__ */ jsx(TextInput, {
						type: "password",
						value: p.apiKey,
						onChange: (apiKey) => onChange({ apiKey }),
						ariaLabel: "API key"
					})
				}),
				/* @__PURE__ */ jsx(Entries.Entry, {
					label: "Extra headers",
					description: "Optional, one \"Name: value\" per line.",
					layout: "row",
					children: /* @__PURE__ */ jsx("textarea", {
						value: p.headers ?? "",
						rows: 2,
						spellCheck: false,
						"aria-label": "Extra headers",
						className: "local-mode-input local-mode-textarea",
						onChange: (e) => onChange({ headers: e.target.value })
					})
				}),
				/* @__PURE__ */ jsx(Entries.Entry, {
					label: "Models",
					description: models.length === 0 ? "Fetch the endpoint's /models list or add model IDs by hand." : `${enabledCount} of ${models.length} shown in the model picker.`,
					layout: "row",
					children: /* @__PURE__ */ jsxs("div", {
						className: "local-mode-actions",
						children: [
							/* @__PURE__ */ jsx(Button, {
								size: "sm",
								variant: "secondary",
								disabled: busy,
								onClick: onFetch,
								children: busy ? "Fetching…" : "Fetch models"
							}),
							models.length > 0 ? /* @__PURE__ */ jsx(Button, {
								size: "sm",
								variant: "ghost",
								onClick: () => setModels(models.map((m) => ({
									...m,
									enabled: true
								}))),
								children: "Enable all"
							}) : null,
							models.length > 0 ? /* @__PURE__ */ jsx(Button, {
								size: "sm",
								variant: "ghost",
								onClick: () => setModels(models.map((m) => ({
									...m,
									enabled: false
								}))),
								children: "Disable all"
							}) : null
						]
					})
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "local-mode-models",
					children: [models.map((m, i) => /* @__PURE__ */ jsx(ModelRow, {
						prefix: p.prefix,
						model: m,
						onChange: (patch) => patchModel(i, patch),
						onRemove: () => setModels(models.filter((_, j) => j !== i))
					}, m.id)), /* @__PURE__ */ jsxs("div", {
						className: "local-mode-add-model",
						children: [/* @__PURE__ */ jsx("input", {
							type: "text",
							value: newModel,
							placeholder: "Add model ID, e.g. claude-opus-5-5",
							spellCheck: false,
							"aria-label": "New model ID",
							className: "local-mode-input local-mode-input-grow",
							onChange: (e) => setNewModel(e.target.value),
							onKeyDown: (e) => e.key === "Enter" && addModel()
						}), /* @__PURE__ */ jsx(Button, {
							size: "sm",
							variant: "secondary",
							disabled: newModel.trim() === "",
							onClick: addModel,
							children: "Add model"
						})]
					})]
				}),
				/* @__PURE__ */ jsx(Entries.Entry, {
					label: "Remove provider",
					layout: "row",
					children: /* @__PURE__ */ jsx(Button, {
						size: "sm",
						variant: "ghost",
						onClick: onRemove,
						children: "Remove"
					})
				})
			]
		})
	});
}
//#endregion
//#region src/vs/workbench/contrib/localMode/browser/components/CustomProvidersSettings.tsx
function errorMessage(e) {
	return e instanceof Error ? e.message.replace(/^Error invoking remote method '[^']*': (Error: )?/u, "") : String(e);
}
/** Settings > Models > Custom Providers (replaces the "Gateway" section in local mode). */
function CustomProvidersSettings() {
	const { useService, services, ui } = cursorHost().cursor;
	const { Section, Button } = ui;
	const storage = useService(services.storage);
	const aiService = useService(services.ai);
	const inference = useService(services.localInference);
	const [providers, setProviders] = useState(() => readProviders(storage));
	const [dirty, setDirty] = useState(false);
	const [busy, setBusy] = useState(-1);
	const [status, setStatus] = useState(void 0);
	const update = (i, patch) => {
		setProviders((ps) => ps.map((p, j) => j === i ? {
			...p,
			...patch
		} : p));
		setDirty(true);
		setStatus(void 0);
	};
	const save = async () => {
		const cleaned = cleanProviders(providers);
		const error = validateProviders(cleaned);
		if (error !== void 0) {
			setStatus({
				error: true,
				text: error
			});
			return;
		}
		writeProviders(storage, cleaned);
		setProviders(cleaned);
		setDirty(false);
		try {
			await aiService.refreshDefaultModels();
			setStatus({
				error: false,
				text: `Saved. ${enabledModels(cleaned).length} custom model(s) in the model picker.`
			});
		} catch (e) {
			setStatus({
				error: true,
				text: `Saved, but refreshing the model picker failed: ${errorMessage(e)}`
			});
		}
	};
	const fetchModels = async (i) => {
		const p = providers[i];
		const target = endpoint(p);
		setBusy(i);
		setStatus(void 0);
		try {
			const listed = (await inference.fetchLocalProviderModels({
				baseUrl: target.baseUrl,
				apiKey: target.apiKey,
				customHeaders: target.headers,
				userAgent: "Cursor",
				cursorLocalProvider: {
					apiType: p.apiType,
					listing: true
				}
			}))?.cursorLocalModels;
			if (!Array.isArray(listed)) throw new Error("the agent runtime did not return a model list");
			update(i, { models: mergeListedModels(p.models ?? [], listed) });
			setStatus({
				error: false,
				text: `${p.name}: ${listed.length} model(s) from ${target.baseUrl}/models. Turn on the ones you want, then Save.`
			});
		} catch (e) {
			setStatus({
				error: true,
				text: `${p.name}: ${errorMessage(e)}`
			});
		} finally {
			setBusy(-1);
		}
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "local-mode-settings",
		children: [/* @__PURE__ */ jsx(Section, {
			title: "Custom Providers",
			description: "Run agents against your own OpenAI- or Anthropic-compatible endpoints. The agent harness runs locally; requests go straight from this machine to the endpoint.",
			trailing: /* @__PURE__ */ jsxs("div", {
				className: "local-mode-actions",
				children: [/* @__PURE__ */ jsx(Button, {
					size: "sm",
					variant: "secondary",
					onClick: () => {
						setProviders((ps) => [...ps, newProvider(ps)]);
						setDirty(true);
					},
					children: "Add provider"
				}), /* @__PURE__ */ jsx(Button, {
					size: "sm",
					variant: "primary",
					disabled: !dirty,
					onClick: save,
					children: "Save"
				})]
			}),
			children: status === void 0 && providers.length > 0 ? null : /* @__PURE__ */ jsx("div", {
				className: "local-mode-status",
				"data-error": status?.error || void 0,
				children: status?.text ?? "No providers yet. Add one to get started."
			})
		}), providers.map((p, i) => /* @__PURE__ */ jsx(ProviderCard, {
			provider: p,
			busy: busy === i,
			onChange: (patch) => update(i, patch),
			onRemove: () => {
				setProviders((ps) => ps.filter((_, j) => j !== i));
				setDirty(true);
			},
			onFetch: () => fetchModels(i)
		}, i))]
	});
}
//#endregion
//#region src/vs/workbench/contrib/localMode/common/format.ts
function formatDuration(ms) {
	if (ms < 6e4) return `${Math.floor(ms / 1e3)}s`;
	let h = Math.floor(ms / 36e5);
	let m = Math.floor(ms % 36e5 / 6e4);
	let s = Math.round(ms % 6e4 / 1e3);
	if (s === 60) {
		s = 0;
		m++;
	}
	if (m === 60) {
		m = 0;
		h++;
	}
	return h > 0 ? `${h}h ${m}m ${s}s` : `${m}m ${s}s`;
}
var compactShort = new Intl.NumberFormat("en-US", {
	notation: "compact",
	maximumFractionDigits: 1,
	minimumFractionDigits: 0
});
var compactLong = new Intl.NumberFormat("en-US", {
	notation: "compact",
	maximumFractionDigits: 1,
	minimumFractionDigits: 1
});
function formatTokens(n) {
	return (n >= 1e3 ? compactLong : compactShort).format(n).toLowerCase();
}
//#endregion
//#region src/vs/workbench/contrib/localMode/browser/turnStats.ts
var STORAGE_KEY = "cursorLocalMode.turnStats";
var MAX_TURNS = 300;
globalThis.__cursorLocalModeTurnStats ??= {
	turns: load(),
	byConversation: /* @__PURE__ */ new Map(),
	listeners: /* @__PURE__ */ new Set(),
	notifyPending: false
};
var store = globalThis.__cursorLocalModeTurnStats;
function load() {
	try {
		const value = JSON.parse(globalThis.localStorage?.getItem(STORAGE_KEY) ?? "[]");
		return new Map(Array.isArray(value) ? value.filter((e) => Array.isArray(e) && typeof e[0] === "string" && e[1] && typeof e[1] === "object") : []);
	} catch {
		return /* @__PURE__ */ new Map();
	}
}
function save() {
	try {
		const finished = [...store.turns].filter(([, s]) => s.endedAt !== void 0).slice(-300);
		globalThis.localStorage?.setItem(STORAGE_KEY, JSON.stringify(finished));
	} catch {}
}
function notify() {
	if (store.notifyPending) return;
	store.notifyPending = true;
	queueMicrotask(() => {
		store.notifyPending = false;
		for (const listener of store.listeners) listener();
	});
}
function patch(key, values) {
	const prev = store.turns.get(key);
	if (prev !== void 0) {
		store.turns.set(key, {
			...prev,
			...values
		});
		notify();
	}
}
function subscribe(listener) {
	store.listeners.add(listener);
	return () => store.listeners.delete(listener);
}
function getTurn(key) {
	return store.turns.get(key);
}
/**
* Called once per local run. A new user message starts a turn; resumes and
* retries keep counting into the turn the conversation's last message started.
*/
function turnBegin(conversationId, action, requestedModel) {
	const messageId = action?.action?.case === "userMessageAction" ? action.action.value?.userMessage?.messageId : void 0;
	const key = messageId || store.byConversation.get(conversationId);
	if (!key) return;
	store.byConversation.set(conversationId, key);
	const effort = requestedModel?.parameters?.find((p) => p.id === "reasoning" || p.id === "effort")?.value || void 0;
	const prev = store.turns.get(key);
	store.turns.set(key, prev !== void 0 && messageId === void 0 ? {
		...prev,
		effort: effort ?? prev.effort,
		endedAt: void 0
	} : {
		startedAt: Date.now(),
		chars: 0,
		effort
	});
	for (const k of store.turns.keys()) {
		if (store.turns.size <= MAX_TURNS) break;
		store.turns.delete(k);
	}
	notify();
	return key;
}
function turnUpdate(key, update) {
	const s = key === void 0 ? void 0 : store.turns.get(key);
	if (key === void 0 || s === void 0) return;
	const m = update.message;
	const now = Date.now();
	const firstByteAt = s.firstByteAt ?? now;
	switch (m.case) {
		case "textDelta":
			patch(key, {
				chars: s.chars + m.value.text.length,
				firstByteAt,
				thinkingSince: void 0
			});
			return;
		case "thinkingDelta":
			patch(key, {
				chars: s.chars + m.value.text.length,
				firstByteAt,
				thinkingSince: s.thinkingSince ?? now
			});
			return;
		case "thinkingCompleted":
			patch(key, {
				firstByteAt,
				thinkingSince: void 0
			});
			return;
		case "partialToolCall":
			patch(key, {
				chars: s.chars + (m.value.argsTextDelta?.length ?? 0),
				firstByteAt,
				thinkingSince: void 0
			});
			return;
		case "toolCallStarted":
			patch(key, {
				firstByteAt,
				thinkingSince: void 0
			});
			return;
		case "turnEnded": {
			const out = m.value.outputTokens === void 0 ? void 0 : Number(m.value.outputTokens);
			patch(key, {
				endedAt: now,
				thinkingSince: void 0,
				outputTokens: out !== void 0 && out > 0 ? out : void 0
			});
			save();
			return;
		}
	}
}
/** "12s · ↓ 1.2k tokens · thinking with high effort" / "for 34s · ↓ 2.3k tokens". */
function turnText(s, active, durationMs, now = Date.now()) {
	const parts = [];
	if (active) {
		parts.push(formatDuration(now - s.startedAt));
		const tokens = Math.round(s.chars / 4);
		if (tokens > 0) parts.push(`${s.firstByteAt === void 0 ? "↑" : "↓"} ${formatTokens(tokens)} tokens`);
		else if (s.firstByteAt === void 0 && now - s.startedAt > 3e3) parts.push("waiting for the model");
		if (s.thinkingSince !== void 0) parts.push(s.effort ? `thinking with ${s.effort} effort` : "thinking");
	} else {
		const ms = durationMs ?? (s.endedAt === void 0 ? void 0 : s.endedAt - s.startedAt);
		if (ms !== void 0 && ms > 0) parts.push(`for ${formatDuration(ms)}`);
		const tokens = s.outputTokens ?? Math.round(s.chars / 4);
		if (tokens > 0) parts.push(`↓ ${formatTokens(tokens)} tokens`);
	}
	return parts.join(" · ");
}
/** "4s · high effort" for the native "Thinking" row. */
function thinkingText(s, now = Date.now()) {
	const parts = [formatDuration(now - (s.thinkingSince ?? now))];
	if (s.effort) parts.push(`${s.effort} effort`);
	return parts.join(" · ");
}
/**
* The native "Thinking" row has no turn id, so it follows the most recently
* started turn that is currently thinking.
*/
function currentThinkingTurn() {
	let best;
	for (const s of store.turns.values()) if (s.thinkingSince !== void 0 && s.endedAt === void 0 && (best === void 0 || s.startedAt > best.startedAt)) best = s;
	return best;
}
/**
* The transcript's tail status ("Planning next moves", "Running …") has no turn
* id of its own; it belongs to the conversation's last user message.
*/
function turnKeyFromRows(rows) {
	for (let i = rows.length - 1; i >= 0; i--) {
		const r = rows[i];
		if (r?.kind === "human") return r.rowId;
		if (typeof r?.turnHumanRowId === "string") return r.turnHumanRowId;
	}
}
/** Transcript row ids are `human:<messageId>`. */
function turnKeyFromRowId(rowId) {
	return typeof rowId === "string" ? rowId.replace(/^human:/u, "") : void 0;
}
//#endregion
//#region src/vs/workbench/contrib/localMode/browser/components/TurnStatus.tsx
/** Re-renders every second while `active`, for live elapsed time. */
function useTicker(active) {
	const [, setTick] = useState(0);
	useEffect(() => {
		if (!active) return;
		const handle = setInterval(() => setTick((x) => x + 1), 1e3);
		return () => clearInterval(handle);
	}, [active]);
}
/**
* Work-group header details: "Working 12s · ↓ 1.2k tokens · thinking with high
* effort", then "Worked for 34s · ↓ 2.3k tokens".
*/
function TurnDetails(props) {
	const { active, durationMs, fallback } = props;
	const key = turnKeyFromRowId(props.turnKey);
	const stats = useSyncExternalStore(subscribe, () => key === void 0 ? void 0 : getTurn(key));
	useTicker(active && stats !== void 0);
	if (stats === void 0 || !active && typeof fallback !== "string" && fallback != null) return fallback ?? null;
	const text = turnText(stats, active, durationMs);
	return text ? /* @__PURE__ */ jsx("span", {
		className: "local-mode-tabular",
		children: text
	}) : fallback ?? null;
}
/** Suffix for the tail status: "Planning next moves · 12s · ↓ 1.2k tokens". */
function TurnStatusSuffix(props) {
	const key = turnKeyFromRowId(props.turnKey);
	const stats = useSyncExternalStore(subscribe, () => key === void 0 ? void 0 : getTurn(key));
	const live = stats !== void 0 && stats.endedAt === void 0;
	useTicker(live);
	const text = live ? turnText(stats, true) : "";
	return text ? /* @__PURE__ */ jsxs("span", {
		"data-slot": "local-turn-stats",
		className: "local-mode-turn-stats",
		children: ["· ", text]
	}) : null;
}
/** Details for the native "Thinking" row: "4s · high effort". */
function ThinkingDetails(props) {
	const stats = useSyncExternalStore(subscribe, currentThinkingTurn);
	useTicker(stats !== void 0);
	return stats === void 0 ? props.fallback ?? null : /* @__PURE__ */ jsx("span", {
		className: "local-mode-tabular",
		children: thinkingText(stats)
	});
}
//#endregion
//#region src/vs/workbench/contrib/localMode/browser/localMode.css?inline
var localMode_default = "/* --- Transcript ------------------------------------------------------------ */\n\n/* Models often open a reply with a newline, which renders as an empty line\n   under the work-group header. */\n.ui-markdown > * > br:first-child {\n	display: none;\n}\n\n/* Keep the live turn stats right after the tail status text instead of\n   pushed to the far end of the row. */\n.agent-transcript-tail-status:has(> [data-slot=\"local-turn-stats\"]) > :first-child {\n	flex: 0 1 auto;\n	width: auto;\n}\n\n.local-mode-turn-stats {\n	flex-shrink: 0;\n	margin-right: auto;\n	color: var(--cursor-text-quaternary);\n	font-variant-numeric: tabular-nums;\n	white-space: nowrap;\n}\n\n.local-mode-tabular {\n	font-variant-numeric: tabular-nums;\n}\n\n/* --- Settings > Models > Custom Providers ---------------------------------- */\n\n.local-mode-settings {\n	display: flex;\n	flex-direction: column;\n	gap: 12px;\n}\n\n.local-mode-actions {\n	display: flex;\n	flex-wrap: wrap;\n	justify-content: flex-end;\n	gap: 6px;\n}\n\n.local-mode-status {\n	padding: 8px 12px;\n	font-size: 12px;\n	color: var(--vscode-descriptionForeground);\n}\n\n.local-mode-status[data-error] {\n	color: var(--vscode-errorForeground);\n}\n\n.local-mode-input {\n	width: min(340px, 100%);\n	box-sizing: border-box;\n	padding: 4px 8px;\n	font-size: 12px;\n	font-family: inherit;\n	color: var(--vscode-input-foreground);\n	background: var(--vscode-input-background);\n	border: 1px solid var(--vscode-settings-dropdownBorder, var(--vscode-input-border, transparent));\n	border-radius: 4px;\n	outline: none;\n}\n\n.local-mode-input:focus {\n	border-color: var(--vscode-focusBorder);\n}\n\n.local-mode-textarea {\n	resize: vertical;\n}\n\n.local-mode-input-context {\n	width: 150px;\n}\n\n.local-mode-input-grow {\n	flex: 1 1 auto;\n	width: auto;\n}\n\n.local-mode-models {\n	padding: 4px 12px 8px;\n}\n\n.local-mode-model-row,\n.local-mode-add-model {\n	display: flex;\n	align-items: center;\n	gap: 8px;\n	padding: 4px 0;\n}\n\n.local-mode-add-model {\n	padding-top: 6px;\n}\n\n.local-mode-model-id {\n	flex: 1 1 auto;\n	min-width: 0;\n	overflow: hidden;\n	text-overflow: ellipsis;\n	white-space: nowrap;\n	font-size: 12px;\n	font-family: var(--monaco-monospace-font);\n}\n\n.local-mode-model-id[data-disabled] {\n	opacity: 0.6;\n}\n";
//#endregion
//#region src/vs/workbench/contrib/localMode/browser/modelCatalog.ts
/**
* Local mode's model catalog: the enabled custom models, no backend round trip.
* Replaces AIService.refreshDefaultModels.
*/
async function refreshModels(aiService) {
	const { cursor } = cursorHost();
	const entries = enabledModels(readProviders(aiService._storageService));
	const rows = entries.map(({ provider, model, id }) => {
		const context = contextWindow(model);
		const source = provider.name || provider.prefix || "custom provider";
		const effort = effortTiers(provider, model.id);
		const label = (v) => EFFORT_LABELS[v] ?? v;
		const parameterDefinitions = effort === void 0 ? [] : [{
			id: "reasoning",
			name: "Reasoning",
			markdownTooltip: "How much the model thinks before answering.",
			parameterType: { enumParameter: { values: effort.values.map((v) => ({
				value: v,
				displayName: label(v)
			})) } },
			isCycleableByHotkey: true
		}];
		const variants = effort === void 0 ? [{
			parameterValues: [],
			displayName: id,
			displayNameOutsidePicker: id,
			isMaxMode: false,
			isDefaultNonMaxConfig: true,
			isDefaultMaxConfig: true
		}] : effort.values.map((v) => ({
			parameterValues: [{
				id: "reasoning",
				value: v
			}],
			displayName: `${id} ${label(v)}`,
			displayNameOutsidePicker: `${id} ${label(v)}`,
			isMaxMode: false,
			isDefaultNonMaxConfig: v === effort.default,
			isDefaultMaxConfig: v === effort.default
		}));
		const tooltip = [
			`Served by ${source} (${endpoint(provider).baseUrl}).`,
			context === void 0 ? void 0 : `Context: ${context.toLocaleString()} tokens.`,
			effort === void 0 ? void 0 : `Reasoning: ${effort.values.map(label).join(", ")}.`
		].filter(Boolean).join("\n\n");
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
			supportsThinking: effort !== void 0,
			supportsImages: model.vision !== false,
			tagline: source,
			namedModelSectionIndex: 1,
			legacySlugs: [],
			idAliases: [],
			parameterDefinitions,
			variants,
			tooltipData: { markdownContent: tooltip }
		};
	});
	const models = aiService.deserializePickerModels(rows).map((m) => cursor.toAvailableModel(m));
	const ids = models.map((m) => m.name);
	cursor.batch(() => {
		aiService.persistAvailableDefaultModels(models);
		aiService._reactiveStorageService.setApplicationUserPersistentStorage("localProviderModelIds", ids);
		aiService._reactiveStorageService.setApplicationUserPersistentStorage("localProviderAgentModelIds", ids);
	});
	try {
		aiService._modelConfigService.triggerParameterizedModelConfigMigration();
	} catch {}
	const stored = aiService._modelConfigService.getStoredModelConfig("composer");
	const current = stored?.selectedModels?.[0]?.modelId ?? stored?.modelName?.split(",")[0]?.trim();
	if (ids.length > 0 && (current === void 0 || !ids.includes(current))) {
		const first = entries.find((e) => e.id === ids[0]);
		const effort = first === void 0 ? void 0 : effortTiers(first.provider, first.model.id);
		aiService._modelConfigService.setModelConfig("composer", {
			modelName: ids[0],
			selectedModels: [{
				modelId: ids[0],
				parameters: effort === void 0 ? [] : [{
					id: "reasoning",
					value: effort.default
				}]
			}],
			maxMode: false
		});
	}
	aiService._aiSettingsService.handleAvailableModelsChange();
}
//#endregion
//#region src/vs/workbench/contrib/localMode/browser/turnRouting.ts
/**
* Rewrites one agent turn onto the custom provider that owns its model:
* `<prefix>/<model>` becomes the bare model ID plus that provider's endpoint.
* Returns undefined when no custom models are configured (upstream behavior).
*/
function routeTurn(storage, modelDetails, runOptions) {
	const providers = readProviders(storage);
	const models = enabledModels(providers);
	if (models.length === 0) return;
	const requested = runOptions.requestedModel?.modelId?.trim() || modelDetails?.modelId?.trim() || void 0;
	let hit = resolveModel(providers, runOptions.requestedModel?.modelId) ?? resolveModel(providers, modelDetails?.modelId);
	if (hit === void 0) {
		if (requested !== void 0 && requested !== "default") throw new Error(`Model "${requested}" is not configured. Add it under Settings > Models > Custom Providers, or pick one of: ${models.map((e) => e.id).join(", ")}.`);
		hit = models[0];
	}
	const bare = hit.model.id;
	const target = endpoint(hit.provider);
	let requestedModel = runOptions.requestedModel;
	if (requestedModel !== void 0) {
		requestedModel = requestedModel.clone();
		requestedModel.modelId = bare;
	}
	let details = modelDetails;
	if (details !== void 0) {
		details = details.clone();
		details.modelId = bare;
	} else if (requestedModel === void 0) {
		const { ModelDetails } = cursorHost().cursor;
		details = new ModelDetails({
			modelId: bare,
			displayModelId: bare,
			displayName: bare,
			displayNameShort: bare
		});
	}
	return {
		modelDetails: details,
		runOptions: {
			...runOptions,
			requestedModel
		},
		providerConfig: {
			baseUrl: target.baseUrl,
			apiKey: target.apiKey,
			customHeaders: target.headers
		},
		availableModelIds: (hit.provider.models ?? []).filter((m) => m?.id && m.enabled !== false).map((m) => m.id),
		cursorLocalProvider: descriptor(hit.provider)
	};
}
/**
* Provider for one-shot local inference (chat titles, commit messages): the
* composer's selected custom model, else the first enabled one.
*/
function inferenceConfig(storage, modelConfigService, userAgent) {
	const providers = readProviders(storage);
	const models = enabledModels(providers);
	if (models.length === 0) return;
	let selected;
	try {
		selected = modelConfigService.getModelConfig("composer")?.selectedModels?.[0]?.modelId;
	} catch {}
	const hit = resolveModel(providers, selected) ?? models[0];
	const target = endpoint(hit.provider);
	return {
		baseUrl: target.baseUrl,
		apiKey: target.apiKey,
		userAgent,
		customHeaders: target.headers,
		modelId: hit.model.id,
		cursorLocalProvider: descriptor(hit.provider)
	};
}
//#endregion
//#region src/vs/workbench/contrib/localMode/browser/localMode.ts
/**
* Entry point of local mode in the agent window.
*
* Loaded by the glass bundle's host loader (build/patches/inject/glass-host.js):
* in production from app/out/vs/workbench/contrib/localMode/browser/localMode.js,
* under `bun run dev` straight from the Vite dev server. Registering the
* implementation (again, on every hot update) swaps what the bundle's patch
* sites call and re-renders the mounted views.
*/
var STYLE_ID = "cursor-local-mode-styles";
function installStyles() {
	let style = document.getElementById(STYLE_ID);
	if (style === null) {
		style = document.createElement("style");
		style.id = STYLE_ID;
		document.head.append(style);
	}
	style.textContent = localMode_default;
}
var impl = {
	views: {
		CustomProvidersSettings,
		TurnDetails,
		TurnStatusSuffix,
		ThinkingDetails
	},
	refreshModels,
	routeTurn,
	inferenceConfig,
	turnBegin,
	turnUpdate,
	turnKeyFromRows
};
installStyles();
cursorHost().register(impl);
//#endregion
export { impl };
