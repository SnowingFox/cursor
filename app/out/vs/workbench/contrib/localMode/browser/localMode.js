//#region src/vs/glass/host/cursorHost.ts
/** `vs/platform/storage` StorageScope.APPLICATION / StorageTarget.MACHINE. */
var StorageScope = { APPLICATION: -1 };
var StorageTarget = { MACHINE: 1 };
function cursorHost() {
	const host = globalThis.__cursorLocalMode;
	if (host === void 0) throw new Error("cursor host bridge is not installed (is the glass bundle patched?)");
	return host;
}
//#endregion
//#region src/vs/workbench/contrib/localMode/common/sampleUsage.ts
var MODELS = [
	{
		provider: "AsterGate",
		model: "claude-opus-4-8",
		weight: 5,
		out: 3e3
	},
	{
		provider: "AsterGate",
		model: "claude-opus-5",
		weight: 3,
		out: 4e3
	},
	{
		provider: "AsterGate",
		model: "claude-haiku-4-5",
		weight: 2,
		out: 900
	},
	{
		provider: "OpenRouter",
		model: "gpt-5",
		weight: 2,
		out: 2500
	},
	{
		provider: "Ollama",
		model: "qwen3-coder:30b",
		weight: 1,
		out: 1200
	}
];
var PROJECTS = [
	"cursor",
	"web-client",
	"orca",
	"luna-PC"
];
/** mulberry32 */
function random(seed) {
	let a = seed >>> 0;
	return () => {
		a = a + 1831565813 >>> 0;
		let t = a;
		t = Math.imul(t ^ t >>> 15, t | 1);
		t ^= t + Math.imul(t ^ t >>> 7, t | 61);
		return ((t ^ t >>> 14) >>> 0) / 4294967296;
	};
}
function sampleUsage(now, days = 120, seed = 7) {
	const rand = random(seed);
	const pick = (items) => {
		let r = rand() * items.reduce((s, x) => s + x.weight, 0);
		for (const x of items) {
			r -= x.weight;
			if (r < 0) return x;
		}
		return items[0];
	};
	const records = [];
	for (let d = days - 1; d >= 0; d--) {
		const day = /* @__PURE__ */ new Date(now - d * 864e5);
		const weekend = day.getDay() === 0 || day.getDay() === 6;
		if (rand() < (weekend ? .55 : .12)) continue;
		const count = Math.round((2 + rand() * 14) * (1 + (days - d) / days) * (weekend ? .4 : 1));
		for (let i = 0; i < count; i++) {
			const m = pick(MODELS);
			const at = new Date(day);
			at.setHours(9 + Math.floor(rand() * 12), Math.floor(rand() * 60), Math.floor(rand() * 60), 0);
			if (at.getTime() > now) continue;
			const steps = 1 + Math.floor(rand() * rand() * 25);
			const context = 2e4 + Math.floor(rand() * 12e4);
			const cached = m.provider === "Ollama" ? 0 : Math.floor(context * steps * (.75 + rand() * .2));
			records.push({
				id: `sample-${d}-${i}`,
				conversationId: `sample-conv-${d}-${Math.floor(i / 3)}`,
				type: rand() < .1 ? "resume" : "agent",
				at: at.getTime(),
				endedAt: at.getTime() + steps * (2e3 + Math.floor(rand() * 9e3)),
				provider: m.provider,
				model: m.model,
				steps,
				input: Math.floor(context * (m.provider === "Ollama" ? steps : .15 + rand() * .3)),
				output: Math.floor(m.out * steps * (.4 + rand())),
				cacheRead: cached,
				cacheWrite: m.provider === "Ollama" ? 0 : Math.floor(context * (.1 + rand() * .3)),
				reasoning: 0,
				project: PROJECTS[Math.floor(rand() * rand() * PROJECTS.length)]
			});
		}
	}
	return records.sort((a, b) => a.at - b.at);
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
/** Short names for the API-format switch. */
var API_TYPE_SHORT_LABELS = {
	anthropic: "Anthropic",
	"openai-chat": "OpenAI Chat",
	"openai-responses": "OpenAI Responses"
};
var PROVIDER_PRESETS = [
	{
		id: "anthropic",
		name: "Anthropic",
		description: "Claude via the Messages API",
		prefix: "anthropic",
		apiType: "anthropic",
		baseUrl: "https://api.anthropic.com"
	},
	{
		id: "openai",
		name: "OpenAI",
		description: "GPT via the Responses API",
		prefix: "openai",
		apiType: "openai-responses",
		baseUrl: "https://api.openai.com/v1"
	},
	{
		id: "openrouter",
		name: "OpenRouter",
		description: "Hundreds of models, one key",
		prefix: "openrouter",
		apiType: "openai-chat",
		baseUrl: "https://openrouter.ai/api/v1"
	},
	{
		id: "ollama",
		name: "Ollama",
		description: "Local models on port 11434",
		prefix: "ollama",
		apiType: "openai-chat",
		baseUrl: "http://localhost:11434/v1"
	},
	{
		id: "lmstudio",
		name: "LM Studio",
		description: "Local server on port 1234",
		prefix: "lmstudio",
		apiType: "openai-chat",
		baseUrl: "http://localhost:1234/v1"
	},
	{
		id: "custom",
		name: "Custom",
		description: "Any compatible endpoint or gateway",
		prefix: "custom-provider",
		apiType: "openai-chat",
		baseUrl: ""
	}
];
/** Application-scoped storage key holding `{ version: 1, providers }`. */
var STORAGE_KEY$2 = "cursorLocalMode.customProviders";
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
function newProvider(existing, preset) {
	const base = preset?.prefix ?? "custom-provider";
	const used = new Set(existing.map((p) => p.prefix));
	let n = existing.length + 1;
	let prefix = base;
	while (used.has(prefix)) prefix = `${base}-${++n}`;
	return {
		name: preset === void 0 || preset.id === "custom" ? prefix : preset.name,
		prefix,
		apiType: preset?.apiType ?? "openai-chat",
		baseUrl: preset?.baseUrl ?? "",
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
	return parseProviders(storage.get(STORAGE_KEY$2, StorageScope.APPLICATION));
}
function writeProviders(storage, providers) {
	storage.store(STORAGE_KEY$2, serializeProviders(providers), StorageScope.APPLICATION, StorageTarget.MACHINE);
}
var { Fragment, jsx, jsxs } = cursorHost().jsxRuntime;
//#endregion
//#region src/vs/workbench/contrib/localMode/browser/components/icons.tsx
var PATHS = {
	plus: "M12 5v14M5 12h14",
	x: "M18 6 6 18M6 6l12 12",
	search: "M21 21l-4.3-4.3M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14z",
	eye: "M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
	eyeOff: "M9.9 4.2A9.8 9.8 0 0 1 12 4c6.5 0 10 8 10 8a17 17 0 0 1-2.2 3.2M6.6 6.6A17 17 0 0 0 2 12s3.5 8 10 8a9.7 9.7 0 0 0 5.4-1.6M14.1 14.1a3 3 0 0 1-4.2-4.2M2 2l20 20",
	refresh: "M21 12a9 9 0 1 1-2.6-6.4L21 8M21 3v5h-5",
	check: "M20 6 9 17l-5-5",
	alert: "M12 8v4M12 16h.01M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z",
	chevron: "m9 18 6-6-6-6",
	trash: "M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"
};
function Icon({ name, size = 14 }) {
	return /* @__PURE__ */ jsx("svg", {
		width: size,
		height: size,
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: 2,
		strokeLinecap: "round",
		strokeLinejoin: "round",
		"aria-hidden": "true",
		className: "local-mode-icon",
		children: /* @__PURE__ */ jsx("path", { d: PATHS[name] })
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
/** Usage page style: "999", "1.0K", "64.3M". */
function formatTokenCount(n) {
	return formatTokens(n).toUpperCase();
}
var contextFormat = new Intl.NumberFormat("en-US", {
	notation: "compact",
	maximumFractionDigits: 1
});
/** Context windows the way model cards print them: "1M", "200K", "128K". */
function formatContextWindow(n) {
	return contextFormat.format(n);
}
/** Parses "200000", "200_000", "200k", "1m" or "1.5M"; undefined for anything else. */
function parseTokenCount(text) {
	const m = /^(\d+(?:\.\d+)?)\s*([km]?)$/iu.exec(text.replace(/[_,\s]/gu, ""));
	if (m === null) return;
	const scale = {
		"": 1,
		k: 1e3,
		m: 1e6
	}[m[2].toLowerCase()];
	const n = Math.floor(Number(m[1]) * scale);
	return n > 0 ? n : void 0;
}
/** "$12.34", "<$0.01", "$1,204". */
function formatCost(usd) {
	if (usd === 0) return "$0.00";
	if (usd < .01) return "<$0.01";
	return usd < 1e3 ? `$${usd.toFixed(2)}` : `$${Math.round(usd).toLocaleString("en-US")}`;
}
//#endregion
//#region src/vs/workbench/contrib/localMode/browser/components/ModelList.tsx
var isOn = (m) => m.enabled !== false;
/** "1M ctx" chip; click to type an override ("200k", "1m", …), empty resets it. */
function ContextChip(props) {
	const { model, onChange } = props;
	const [draft, setDraft] = useState(void 0);
	const value = contextWindow(model);
	const overridden = model.contextWindow !== void 0;
	if (draft !== void 0) {
		const parsed = draft.trim() === "" ? void 0 : parseTokenCount(draft);
		const valid = draft.trim() === "" || parsed !== void 0;
		const commit = (close) => {
			if (valid) onChange(parsed);
			if (valid || close) setDraft(void 0);
		};
		return /* @__PURE__ */ jsx("input", {
			autoFocus: true,
			value: draft,
			placeholder: "auto",
			title: "Tokens, e.g. 200k or 1m. Leave empty for the default.",
			"aria-label": `Context window for ${model.id}`,
			"aria-invalid": !valid,
			spellCheck: false,
			className: "local-mode-context-input",
			onFocus: (e) => e.target.select(),
			onChange: (e) => setDraft(e.target.value),
			onBlur: () => commit(true),
			onKeyDown: (e) => {
				if (e.key === "Enter") commit(false);
				else if (e.key === "Escape") setDraft(void 0);
			}
		});
	}
	return /* @__PURE__ */ jsx("button", {
		type: "button",
		className: "local-mode-context-chip",
		"data-auto": !overridden || void 0,
		title: value === void 0 ? "Context window: decided by the agent runtime. Click to set one." : `Context window: ${value.toLocaleString()} tokens. Click to change.`,
		onClick: () => setDraft(model.contextWindow === void 0 ? "" : formatContextWindow(model.contextWindow)),
		children: value === void 0 ? "auto" : formatContextWindow(value)
	});
}
function ModelList(props) {
	const { Switch } = cursorHost().cursor.ui;
	const { prefix, models, busy, onChange, onFetch } = props;
	const [query, setQuery] = useState("");
	const [filter, setFilter] = useState("all");
	const [newModel, setNewModel] = useState("");
	const onCount = models.filter(isOn).length;
	const q = query.trim().toLowerCase();
	const shown = models.filter((m) => (filter === "all" || filter === "on" === isOn(m)) && (q === "" || m.id.toLowerCase().includes(q)));
	const shownIds = new Set(shown.map((m) => m.id));
	const setShown = (enabled) => onChange(models.map((m) => shownIds.has(m.id) ? {
		...m,
		enabled
	} : m));
	const patch = (id, values) => onChange(models.map((m) => m.id === id ? {
		...m,
		...values
	} : m));
	const addModel = () => {
		const id = newModel.trim();
		if (id && !models.some((m) => m.id === id)) onChange([...models, {
			id,
			enabled: true
		}]);
		setNewModel("");
	};
	const counts = {
		all: models.length,
		on: onCount,
		off: models.length - onCount
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "local-mode-block",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "local-mode-block-header",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
					className: "local-mode-block-title",
					children: "Models"
				}), /* @__PURE__ */ jsx("div", {
					className: "local-mode-hint",
					children: models.length === 0 ? "Fetch the list from the endpoint, or add model IDs by hand." : `${onCount} of ${models.length} in the model picker, as ${prefix || "?"}/<model>`
				})] }), /* @__PURE__ */ jsxs("button", {
					type: "button",
					className: "local-mode-link-button",
					disabled: busy,
					onClick: onFetch,
					children: [/* @__PURE__ */ jsx("span", {
						className: "local-mode-spin",
						"data-active": busy || void 0,
						children: /* @__PURE__ */ jsx(Icon, {
							name: "refresh",
							size: 13
						})
					}), busy ? "Fetching…" : models.length === 0 ? "Fetch models" : "Refresh"]
				})]
			}),
			models.length > 0 ? /* @__PURE__ */ jsxs("div", {
				className: "local-mode-model-toolbar",
				children: [/* @__PURE__ */ jsxs("label", {
					className: "local-mode-search",
					children: [
						/* @__PURE__ */ jsx(Icon, {
							name: "search",
							size: 13
						}),
						/* @__PURE__ */ jsx("input", {
							value: query,
							placeholder: `Search ${models.length} models`,
							"aria-label": "Search models",
							spellCheck: false,
							onChange: (e) => setQuery(e.target.value)
						}),
						query ? /* @__PURE__ */ jsx("button", {
							type: "button",
							"aria-label": "Clear search",
							onClick: () => setQuery(""),
							children: /* @__PURE__ */ jsx(Icon, {
								name: "x",
								size: 12
							})
						}) : null
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "local-mode-segmented",
					role: "tablist",
					"aria-label": "Show models",
					children: [
						"all",
						"on",
						"off"
					].map((f) => /* @__PURE__ */ jsxs("button", {
						type: "button",
						role: "tab",
						"aria-selected": filter === f,
						"data-active": filter === f || void 0,
						onClick: () => setFilter(f),
						children: [f === "all" ? "All" : f === "on" ? "On" : "Off", /* @__PURE__ */ jsx("span", {
							className: "local-mode-count",
							children: counts[f]
						})]
					}, f))
				})]
			}) : null,
			models.length > 0 ? /* @__PURE__ */ jsx("ul", {
				className: "local-mode-model-list",
				children: shown.length === 0 ? /* @__PURE__ */ jsx("li", {
					className: "local-mode-empty-row",
					children: "No models match."
				}) : shown.map((m) => /* @__PURE__ */ jsxs("li", {
					className: "local-mode-model-row",
					"data-off": !isOn(m) || void 0,
					children: [
						/* @__PURE__ */ jsx(Switch, {
							checked: isOn(m),
							onCheckedChange: (enabled) => patch(m.id, { enabled })
						}),
						/* @__PURE__ */ jsx("span", {
							className: "local-mode-model-name",
							title: `${prefix}/${m.id}`,
							children: m.id
						}),
						/* @__PURE__ */ jsx(ContextChip, {
							model: m,
							onChange: (contextWindow) => patch(m.id, { contextWindow })
						}),
						/* @__PURE__ */ jsx("button", {
							type: "button",
							className: "local-mode-icon-button local-mode-row-action",
							"aria-label": `Remove ${m.id}`,
							title: "Remove",
							onClick: () => onChange(models.filter((x) => x.id !== m.id)),
							children: /* @__PURE__ */ jsx(Icon, {
								name: "x",
								size: 13
							})
						})
					]
				}, m.id))
			}) : null,
			/* @__PURE__ */ jsxs("div", {
				className: "local-mode-model-footer",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "local-mode-add-model",
					children: [
						/* @__PURE__ */ jsx(Icon, {
							name: "plus",
							size: 13
						}),
						/* @__PURE__ */ jsx("input", {
							value: newModel,
							placeholder: "Add a model ID, e.g. claude-opus-5-5",
							"aria-label": "New model ID",
							spellCheck: false,
							onChange: (e) => setNewModel(e.target.value),
							onKeyDown: (e) => e.key === "Enter" && addModel()
						}),
						newModel.trim() ? /* @__PURE__ */ jsx("button", {
							type: "button",
							className: "local-mode-link-button",
							onClick: addModel,
							children: "Add"
						}) : null
					]
				}), shown.length > 0 ? /* @__PURE__ */ jsxs("div", {
					className: "local-mode-bulk",
					children: [/* @__PURE__ */ jsx("button", {
						type: "button",
						className: "local-mode-link-button",
						onClick: () => setShown(true),
						children: shown.length === models.length ? "Enable all" : `Enable ${shown.length} shown`
					}), /* @__PURE__ */ jsx("button", {
						type: "button",
						className: "local-mode-link-button",
						onClick: () => setShown(false),
						children: shown.length === models.length ? "Disable all" : `Disable ${shown.length} shown`
					})]
				}) : null]
			})
		]
	});
}
//#endregion
//#region src/vs/workbench/contrib/localMode/browser/components/ProviderCard.tsx
var API_FORMAT_ORDER = [
	"anthropic",
	"openai-chat",
	"openai-responses"
];
var AVATAR_HUES = [
	"blue",
	"purple",
	"orange",
	"green",
	"cyan",
	"magenta"
];
function ProviderAvatar({ name, size = "md" }) {
	const label = name.trim() || "?";
	let h = 0;
	for (const c of label) h = h * 31 + c.charCodeAt(0) >>> 0;
	return /* @__PURE__ */ jsx("span", {
		className: "local-mode-avatar",
		"data-size": size,
		"data-hue": AVATAR_HUES[h % AVATAR_HUES.length],
		children: label[0].toUpperCase()
	});
}
function Field(props) {
	return /* @__PURE__ */ jsxs("label", {
		className: "local-mode-field",
		children: [
			/* @__PURE__ */ jsx("span", {
				className: "local-mode-field-label",
				children: props.label
			}),
			props.children,
			props.hint ? /* @__PURE__ */ jsx("span", {
				className: "local-mode-hint",
				children: props.hint
			}) : null
		]
	});
}
function ProviderCard(props) {
	const { Switch } = cursorHost().cursor.ui;
	const { provider: p, busy, check, onChange, onRemove, onFetch } = props;
	const [showKey, setShowKey] = useState(false);
	const [advanced, setAdvanced] = useState(false);
	const anthropic = p.apiType === "anthropic";
	const on = p.enabled !== false;
	const models = p.models ?? [];
	const firstModel = models.find((m) => m.enabled !== false)?.id ?? models[0]?.id ?? "model";
	return /* @__PURE__ */ jsxs("div", {
		className: "local-mode-card",
		"data-off": !on || void 0,
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "local-mode-card-header",
				children: [
					/* @__PURE__ */ jsx(ProviderAvatar, { name: p.name }),
					/* @__PURE__ */ jsxs("div", {
						className: "local-mode-card-title",
						children: [/* @__PURE__ */ jsx("input", {
							value: p.name,
							placeholder: "Provider name",
							"aria-label": "Provider name",
							spellCheck: false,
							className: "local-mode-title-input",
							onChange: (e) => onChange({ name: e.target.value })
						}), /* @__PURE__ */ jsx("span", {
							className: "local-mode-hint",
							children: on ? `${API_TYPE_LABELS[p.apiType] ?? p.apiType} · ${models.filter((m) => m.enabled !== false).length} model(s) in the picker` : "Off: hidden from the model picker"
						})]
					}),
					/* @__PURE__ */ jsx(Switch, {
						checked: on,
						onCheckedChange: (enabled) => onChange({ enabled })
					}),
					/* @__PURE__ */ jsx("button", {
						type: "button",
						className: "local-mode-icon-button",
						"aria-label": "Remove provider",
						title: "Remove provider",
						onClick: onRemove,
						children: /* @__PURE__ */ jsx(Icon, {
							name: "trash",
							size: 14
						})
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "local-mode-block",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "local-mode-block-title",
						children: "Connection"
					}),
					/* @__PURE__ */ jsx(Field, {
						label: "API format",
						children: /* @__PURE__ */ jsx("div", {
							className: "local-mode-segmented local-mode-segmented-fill",
							children: API_FORMAT_ORDER.map((t) => /* @__PURE__ */ jsx("button", {
								type: "button",
								"aria-pressed": p.apiType === t,
								"data-active": p.apiType === t || void 0,
								title: API_TYPE_LABELS[t],
								onClick: () => onChange({ apiType: t }),
								children: API_TYPE_SHORT_LABELS[t]
							}, t))
						})
					}),
					/* @__PURE__ */ jsx(Field, {
						label: "Base URL",
						hint: anthropic ? "Like ANTHROPIC_BASE_URL: /v1 is added when missing." : "The OpenAI-compatible base, usually ending in /v1.",
						children: /* @__PURE__ */ jsx("input", {
							value: p.baseUrl,
							placeholder: BASE_URL_HINTS[p.apiType],
							spellCheck: false,
							autoComplete: "off",
							className: "local-mode-input",
							onChange: (e) => onChange({ baseUrl: e.target.value })
						})
					}),
					/* @__PURE__ */ jsx(Field, {
						label: "API key",
						hint: anthropic ? "Sent as the x-api-key header." : "Sent as Authorization: Bearer <key>.",
						children: /* @__PURE__ */ jsxs("span", {
							className: "local-mode-input-group",
							children: [/* @__PURE__ */ jsx("input", {
								type: showKey ? "text" : "password",
								value: p.apiKey,
								placeholder: anthropic ? "sk-ant-…" : "sk-…",
								spellCheck: false,
								autoComplete: "off",
								className: "local-mode-input",
								onChange: (e) => onChange({ apiKey: e.target.value })
							}), /* @__PURE__ */ jsx("button", {
								type: "button",
								className: "local-mode-icon-button",
								"aria-label": showKey ? "Hide key" : "Show key",
								title: showKey ? "Hide key" : "Show key",
								onClick: (e) => {
									e.preventDefault();
									setShowKey(!showKey);
								},
								children: /* @__PURE__ */ jsx(Icon, {
									name: showKey ? "eyeOff" : "eye",
									size: 14
								})
							})]
						})
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "local-mode-check-row",
						children: [/* @__PURE__ */ jsx("button", {
							type: "button",
							className: "local-mode-button",
							disabled: busy || !p.baseUrl.trim(),
							onClick: onFetch,
							children: busy ? "Connecting…" : "Test connection"
						}), check ? /* @__PURE__ */ jsxs("span", {
							className: "local-mode-check",
							"data-ok": check.ok || void 0,
							children: [/* @__PURE__ */ jsx(Icon, {
								name: check.ok ? "check" : "alert",
								size: 13
							}), /* @__PURE__ */ jsx("span", { children: check.text })]
						}) : /* @__PURE__ */ jsx("span", {
							className: "local-mode-hint",
							children: "Lists the endpoint's models to check the URL and key."
						})]
					}),
					/* @__PURE__ */ jsxs("button", {
						type: "button",
						className: "local-mode-disclosure",
						"aria-expanded": advanced,
						onClick: () => setAdvanced(!advanced),
						children: [
							/* @__PURE__ */ jsx(Icon, {
								name: "chevron",
								size: 12
							}),
							"Advanced",
							advanced ? null : /* @__PURE__ */ jsxs("span", {
								className: "local-mode-hint",
								children: [
									"prefix ",
									p.prefix || "?",
									", extra headers"
								]
							})
						]
					}),
					advanced ? /* @__PURE__ */ jsxs("div", {
						className: "local-mode-advanced",
						children: [/* @__PURE__ */ jsx(Field, {
							label: "Model prefix",
							hint: /* @__PURE__ */ jsxs(Fragment, { children: [
								"Picker IDs become ",
								/* @__PURE__ */ jsx("code", { children: `${p.prefix || "?"}/${firstModel}` }),
								" so they never collide with Cursor's models. Stripped before the request is sent."
							] }),
							children: /* @__PURE__ */ jsx("input", {
								value: p.prefix,
								spellCheck: false,
								className: "local-mode-input local-mode-mono",
								onChange: (e) => onChange({ prefix: e.target.value.trim() })
							})
						}), /* @__PURE__ */ jsx(Field, {
							label: "Extra headers",
							hint: "Optional, one \"Name: value\" per line.",
							children: /* @__PURE__ */ jsx("textarea", {
								value: p.headers ?? "",
								rows: 2,
								placeholder: "X-Team: platform",
								spellCheck: false,
								className: "local-mode-input local-mode-mono local-mode-textarea",
								onChange: (e) => onChange({ headers: e.target.value })
							})
						})]
					}) : null
				]
			}),
			/* @__PURE__ */ jsx(ModelList, {
				prefix: p.prefix,
				models,
				busy,
				onChange: (next) => onChange({ models: next }),
				onFetch
			})
		]
	});
}
//#endregion
//#region src/vs/workbench/contrib/localMode/browser/components/CustomProvidersSettings.tsx
function errorMessage(e) {
	return e instanceof Error ? e.message.replace(/^Error invoking remote method '[^']*': (Error: )?/u, "") : String(e);
}
function PresetGrid(props) {
	return /* @__PURE__ */ jsxs("div", {
		className: "local-mode-presets",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "local-mode-block-header",
			children: [/* @__PURE__ */ jsx("div", {
				className: "local-mode-block-title",
				children: "Choose a starting point"
			}), props.onCancel ? /* @__PURE__ */ jsx("button", {
				type: "button",
				className: "local-mode-icon-button",
				"aria-label": "Cancel",
				onClick: props.onCancel,
				children: /* @__PURE__ */ jsx(Icon, {
					name: "x",
					size: 14
				})
			}) : null]
		}), /* @__PURE__ */ jsx("div", {
			className: "local-mode-preset-grid",
			children: PROVIDER_PRESETS.map((preset) => /* @__PURE__ */ jsxs("button", {
				type: "button",
				className: "local-mode-preset",
				onClick: () => props.onPick(preset),
				children: [/* @__PURE__ */ jsx(ProviderAvatar, {
					name: preset.name,
					size: "sm"
				}), /* @__PURE__ */ jsxs("span", { children: [/* @__PURE__ */ jsx("span", {
					className: "local-mode-preset-name",
					children: preset.name
				}), /* @__PURE__ */ jsx("span", {
					className: "local-mode-hint",
					children: preset.description
				})] })]
			}, preset.id))
		})]
	});
}
/** Settings > Models > Custom Providers (replaces the "Gateway" section in local mode). */
function CustomProvidersSettings() {
	const { useService, services, ui } = cursorHost().cursor;
	const { Section, Button } = ui;
	const storage = useService(services.storage);
	const aiService = useService(services.ai);
	const inference = useService(services.localInference);
	const [providers, setProviders] = useState(() => readProviders(storage));
	const [selected, setSelected] = useState(0);
	const [adding, setAdding] = useState(false);
	const [dirty, setDirty] = useState(false);
	const [busy, setBusy] = useState(-1);
	const [checks, setChecks] = useState(/* @__PURE__ */ new Map());
	const [notice, setNotice] = useState(void 0);
	useEffect(() => {
		if (notice === void 0 || notice.error || dirty) return;
		const t = setTimeout(() => setNotice(void 0), 4e3);
		return () => clearTimeout(t);
	}, [notice, dirty]);
	const current = Math.min(selected, providers.length - 1);
	const edit = (next) => {
		setProviders(next);
		setDirty(true);
		setNotice(void 0);
	};
	const update = (i, patch) => edit((ps) => ps.map((p, j) => j === i ? {
		...p,
		...patch
	} : p));
	const add = (preset) => {
		edit((ps) => [...ps, newProvider(ps, preset)]);
		setSelected(providers.length);
		setAdding(false);
	};
	const remove = (i) => {
		edit((ps) => ps.filter((_, j) => j !== i));
		setChecks(/* @__PURE__ */ new Map());
		setSelected(Math.max(0, i - 1));
	};
	const save = async () => {
		const cleaned = cleanProviders(providers);
		const error = validateProviders(cleaned);
		if (error !== void 0) {
			setNotice({
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
			setNotice({
				error: false,
				text: `Saved. ${enabledModels(cleaned).length} custom model(s) in the model picker.`
			});
		} catch (e) {
			setNotice({
				error: true,
				text: `Saved, but refreshing the model picker failed: ${errorMessage(e)}`
			});
		}
	};
	const discard = () => {
		setProviders(readProviders(storage));
		setDirty(false);
		setNotice(void 0);
		setChecks(/* @__PURE__ */ new Map());
	};
	const fetchModels = async (i) => {
		const p = providers[i];
		const target = endpoint(p);
		const started = performance.now();
		setBusy(i);
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
			const known = new Set((p.models ?? []).map((m) => m.id));
			const fresh = listed.filter((m) => !known.has(m.id)).length;
			edit((ps) => ps.map((x, j) => j === i ? {
				...x,
				models: mergeListedModels(x.models ?? [], listed)
			} : x));
			const ms = Math.round(performance.now() - started);
			setChecks((c) => new Map(c).set(i, {
				ok: true,
				text: `Connected · ${listed.length} models${fresh > 0 && known.size > 0 ? `, ${fresh} new` : ""} · ${ms} ms`
			}));
		} catch (e) {
			setChecks((c) => new Map(c).set(i, {
				ok: false,
				text: errorMessage(e)
			}));
		} finally {
			setBusy(-1);
		}
	};
	const p = providers[current];
	return /* @__PURE__ */ jsxs("div", {
		className: "local-mode-settings",
		children: [
			/* @__PURE__ */ jsx(Section, {
				title: "Custom Providers",
				description: "Run agents on your own OpenAI- or Anthropic-compatible endpoints. The agent runs on this machine and talks to the endpoint directly."
			}),
			providers.length > 0 ? /* @__PURE__ */ jsxs("div", {
				className: "local-mode-tabs",
				role: "tablist",
				"aria-label": "Providers",
				children: [providers.map((x, i) => /* @__PURE__ */ jsxs("button", {
					type: "button",
					role: "tab",
					"aria-selected": i === current && !adding,
					"data-active": i === current && !adding || void 0,
					"data-off": x.enabled === false || void 0,
					className: "local-mode-tab",
					onClick: () => {
						setSelected(i);
						setAdding(false);
					},
					children: [
						/* @__PURE__ */ jsx(ProviderAvatar, {
							name: x.name,
							size: "sm"
						}),
						/* @__PURE__ */ jsx("span", {
							className: "local-mode-tab-name",
							children: x.name.trim() || "Untitled"
						}),
						/* @__PURE__ */ jsx("span", {
							className: "local-mode-count",
							children: (x.models ?? []).filter((m) => m.enabled !== false).length
						})
					]
				}, i)), /* @__PURE__ */ jsxs("button", {
					type: "button",
					className: "local-mode-tab local-mode-tab-add",
					"data-active": adding || void 0,
					onClick: () => setAdding(!adding),
					children: [/* @__PURE__ */ jsx(Icon, {
						name: "plus",
						size: 13
					}), "Add provider"]
				})]
			}) : null,
			providers.length === 0 ? /* @__PURE__ */ jsxs("div", {
				className: "local-mode-card local-mode-empty",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "local-mode-empty-title",
						children: "Connect your first provider"
					}),
					/* @__PURE__ */ jsx("div", {
						className: "local-mode-hint",
						children: "Pick a service to prefill its endpoint. You can change everything afterwards."
					}),
					/* @__PURE__ */ jsx(PresetGrid, { onPick: add })
				]
			}) : adding ? /* @__PURE__ */ jsx("div", {
				className: "local-mode-card",
				children: /* @__PURE__ */ jsx(PresetGrid, {
					onPick: add,
					onCancel: () => setAdding(false)
				})
			}) : p !== void 0 ? /* @__PURE__ */ jsx(ProviderCard, {
				provider: p,
				busy: busy === current,
				check: checks.get(current),
				onChange: (patch) => update(current, patch),
				onRemove: () => remove(current),
				onFetch: () => fetchModels(current)
			}, current) : null,
			dirty || notice !== void 0 ? /* @__PURE__ */ jsxs("div", {
				className: "local-mode-savebar",
				"data-error": notice?.error || void 0,
				children: [/* @__PURE__ */ jsx("span", {
					className: "local-mode-savebar-text",
					children: notice !== void 0 ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Icon, {
						name: notice.error ? "alert" : "check",
						size: 13
					}), notice.text] }) : "You have unsaved changes."
				}), dirty ? /* @__PURE__ */ jsxs("span", {
					className: "local-mode-savebar-actions",
					children: [/* @__PURE__ */ jsx(Button, {
						size: "sm",
						variant: "ghost",
						onClick: discard,
						children: "Discard"
					}), /* @__PURE__ */ jsx(Button, {
						size: "sm",
						variant: "primary",
						onClick: save,
						children: "Save"
					})]
				}) : null]
			}) : null
		]
	});
}
//#endregion
//#region src/vs/workbench/contrib/localMode/common/pricing.ts
var claude = (input, output) => ({
	input,
	output,
	cacheRead: input / 10,
	cacheWrite: input * 1.25
});
var openai = (input, output, cacheRead) => ({
	input,
	output,
	cacheRead,
	cacheWrite: input
});
/** First match wins, so more specific patterns come first. */
var PRICES = [
	[/fable-5(?![0-9])/u, claude(10, 50)],
	[/opus-5(?![0-9])/u, claude(5, 25)],
	[/opus-4-(?:5|6|7|8)(?![0-9])/u, claude(5, 25)],
	[/opus-4(?:-1)?(?![0-9])/u, claude(15, 75)],
	[/sonnet-5(?![0-9])/u, claude(2, 10)],
	[/sonnet-4|sonnet-3-[57]|3-[57]-sonnet/u, claude(3, 15)],
	[/haiku-4-5(?![0-9])/u, claude(1, 5)],
	[/haiku-3-5|3-5-haiku/u, {
		input: .8,
		output: 4,
		cacheRead: .08,
		cacheWrite: 1
	}],
	[/haiku-3(?![0-9-])|3-haiku/u, {
		input: .25,
		output: 1.25,
		cacheRead: .03,
		cacheWrite: .3
	}],
	[/gpt-5(?:-[0-9]+)?-nano/u, openai(.05, .4, .005)],
	[/gpt-5(?:-[0-9]+)?-mini/u, openai(.25, 2, .025)],
	[/gpt-5/u, openai(1.25, 10, .125)],
	[/gpt-4-1-nano/u, openai(.1, .4, .025)],
	[/gpt-4-1-mini/u, openai(.4, 1.6, .1)],
	[/gpt-4-1/u, openai(2, 8, .5)],
	[/gpt-4o-mini/u, openai(.15, .6, .075)],
	[/gpt-4o/u, openai(2.5, 10, 1.25)],
	[/o4-mini/u, openai(1.1, 4.4, .275)],
	[/(?:^|[/-])o3(?![0-9])/u, openai(2, 8, .5)]
];
/** "Claude-Opus-4.8-thinking" and "anthropic/claude-opus-4-8" both price as claude-opus-4-8. */
function priceFor(model) {
	const id = model.toLowerCase().trim().replace(/\./gu, "-");
	return PRICES.find(([pattern]) => pattern.test(id))?.[1];
}
/** Estimated USD, or undefined when the model has no known price. */
function estimateCost(model, tokens) {
	const p = priceFor(model);
	if (p === void 0) return;
	return (tokens.input * p.input + tokens.output * p.output + tokens.cacheRead * p.cacheRead + tokens.cacheWrite * p.cacheWrite) / 1e6;
}
//#endregion
//#region src/vs/workbench/contrib/localMode/common/usage.ts
var n = (v) => Math.max(0, Number(v ?? 0) || 0);
/**
* The runtime reports the whole prompt as inputTokens, cache reads and writes
* included, for every API format (measured against Anthropic and OpenAI
* responses). Split it so each kind is priced once.
*/
function normalizeUsage(raw) {
	const cacheRead = n(raw.cacheReadTokens);
	const cacheWrite = n(raw.cacheWriteTokens);
	return {
		input: Math.max(0, n(raw.inputTokens) - cacheRead - cacheWrite),
		output: n(raw.outputTokens),
		cacheRead,
		cacheWrite,
		reasoning: n(raw.reasoningTokens)
	};
}
var totalTokens = (r) => r.input + r.output + r.cacheRead + r.cacheWrite;
function recordCost(r) {
	return estimateCost(r.model, r);
}
/** Local calendar day, "2026-10-17". */
function dayKey(ms) {
	const d = new Date(ms);
	return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
function emptyTotals() {
	return {
		requests: 0,
		steps: 0,
		input: 0,
		output: 0,
		cacheRead: 0,
		cacheWrite: 0,
		reasoning: 0,
		tokens: 0,
		cost: 0,
		unpriced: 0,
		durationMs: 0
	};
}
function add(t, r) {
	t.requests++;
	t.steps += r.steps;
	t.input += r.input;
	t.output += r.output;
	t.cacheRead += r.cacheRead;
	t.cacheWrite += r.cacheWrite;
	t.reasoning += r.reasoning;
	t.tokens += totalTokens(r);
	t.durationMs += Math.max(0, r.endedAt - r.at);
	const cost = recordCost(r);
	if (cost === void 0) t.unpriced++;
	else t.cost += cost;
}
/** Share of prompt tokens served from cache: cacheRead / (input + cacheRead + cacheWrite). */
function cacheHitRate(t) {
	const prompt = t.input + t.cacheRead + t.cacheWrite;
	return prompt === 0 ? 0 : t.cacheRead / prompt;
}
function groupBy(records, key) {
	const groups = /* @__PURE__ */ new Map();
	for (const r of records) {
		const k = key(r);
		let g = groups.get(k);
		if (g === void 0) {
			g = {
				...emptyTotals(),
				key: k
			};
			groups.set(k, g);
		}
		add(g, r);
	}
	return [...groups.values()].sort((a, b) => b.tokens - a.tokens);
}
function summarize(records) {
	const totals = emptyTotals();
	const days = /* @__PURE__ */ new Map();
	for (const r of records) {
		add(totals, r);
		const k = dayKey(r.at);
		let d = days.get(k);
		if (d === void 0) {
			d = emptyTotals();
			days.set(k, d);
		}
		add(d, r);
	}
	return {
		totals,
		days,
		byModel: groupBy(records, (r) => `${r.provider}\u0000${r.model}`).map((g) => {
			const [provider, model] = g.key.split("\0");
			return {
				...g,
				key: model,
				provider
			};
		}),
		byProvider: groupBy(records, (r) => r.provider),
		byProject: groupBy(records, (r) => r.project || "No project"),
		activeDays: days.size
	};
}
/** Days in [from, to], oldest first. */
function dayRange(fromMs, toMs) {
	const out = [];
	const d = new Date(fromMs);
	d.setHours(12, 0, 0, 0);
	const end = dayKey(toMs);
	for (let i = 0; i < 4e3; i++) {
		const k = dayKey(d.getTime());
		out.push(k);
		if (k === end) break;
		d.setDate(d.getDate() + 1);
	}
	return out;
}
/** `weeks` columns of Sunday-to-Saturday cells ending with the current week. */
function heatmap(days, weeks, now) {
	const today = new Date(now);
	const start = new Date(today);
	start.setHours(12, 0, 0, 0);
	start.setDate(start.getDate() - start.getDay() - (weeks - 1) * 7);
	const keys = dayRange(start.getTime(), start.getTime() + (weeks * 7 - 1) * 864e5);
	const todayKey = dayKey(now);
	let max = 0;
	for (const k of keys) max = Math.max(max, days.get(k)?.tokens ?? 0);
	const cells = keys.map((k) => {
		const tokens = days.get(k)?.tokens ?? 0;
		const ratio = max === 0 ? 0 : tokens / max;
		return {
			day: k,
			tokens,
			level: tokens === 0 ? 0 : ratio <= .25 ? 1 : ratio <= .5 ? 2 : ratio <= .75 ? 3 : 4,
			future: k > todayKey
		};
	});
	return Array.from({ length: weeks }, (_, w) => cells.slice(w * 7, w * 7 + 7));
}
/** The day `delta` days after `key`. */
function shiftDay(key, delta) {
	const d = /* @__PURE__ */ new Date(`${key}T12:00:00`);
	d.setDate(d.getDate() + delta);
	return dayKey(d.getTime());
}
/** Consecutive active days ending today (or yesterday), and the longest run. */
function streaks(days, now) {
	let longest = 0;
	let run = 0;
	let prev;
	for (const k of [...days.keys()].sort()) {
		run = prev !== void 0 && shiftDay(prev, 1) === k ? run + 1 : 1;
		longest = Math.max(longest, run);
		prev = k;
	}
	let day = dayKey(now);
	if (!days.has(day)) day = shiftDay(day, -1);
	let current = 0;
	while (days.has(day)) {
		current++;
		day = shiftDay(day, -1);
	}
	return {
		current,
		longest
	};
}
var csvCell = (v) => {
	const s = String(v);
	return /[",\n]/u.test(s) ? `"${s.replaceAll("\"", "\"\"")}"` : s;
};
var TYPE_LABELS = {
	agent: "Agent",
	resume: "Resume"
};
/** Same columns as the Usage table, plus the token breakdown. Dates are UTC. */
function toCsv(records) {
	return [[
		"Date (UTC)",
		"Type",
		"Provider",
		"Model",
		"Input",
		"Output",
		"Cache Read",
		"Cache Write",
		"Total Tokens",
		"Cost (USD, est.)",
		"Duration (s)",
		"Steps",
		"Project",
		"Conversation",
		"Request ID"
	], ...records.map((r) => {
		const cost = recordCost(r);
		return [
			new Date(r.at).toISOString(),
			TYPE_LABELS[r.type] ?? r.type,
			r.provider,
			r.model,
			r.input,
			r.output,
			r.cacheRead,
			r.cacheWrite,
			totalTokens(r),
			cost === void 0 ? "" : cost.toFixed(4),
			((r.endedAt - r.at) / 1e3).toFixed(1),
			r.steps,
			r.project ?? "",
			r.conversationId,
			r.id
		];
	})].map((row) => row.map(csvCell).join(",")).join("\n");
}
//#endregion
//#region src/vs/workbench/contrib/localMode/browser/usageStore.ts
var STORAGE_KEY$1 = "cursorLocalMode.usage";
globalThis.__cursorLocalModeUsage ??= {
	records: load$1(),
	pending: /* @__PURE__ */ new Map(),
	listeners: /* @__PURE__ */ new Set()
};
var store$1 = globalThis.__cursorLocalModeUsage;
function load$1() {
	try {
		const value = JSON.parse(globalThis.localStorage?.getItem(STORAGE_KEY$1) ?? "{}");
		return Array.isArray(value?.records) ? value.records.filter((r) => typeof r === "object" && r !== null && typeof r.at === "number") : [];
	} catch {
		return [];
	}
}
function save$1() {
	try {
		globalThis.localStorage?.setItem(STORAGE_KEY$1, JSON.stringify({
			version: 1,
			records: store$1.records
		}));
	} catch {}
}
function notify$1() {
	for (const listener of store$1.listeners) listener();
}
function subscribeUsage(listener) {
	store$1.listeners.add(listener);
	return () => store$1.listeners.delete(listener);
}
/** Oldest first. The array is replaced on every change, so it works as a snapshot. */
function usageRecords() {
	return store$1.records;
}
function clearUsage() {
	store$1.records = [];
	save$1();
	notify$1();
}
/** Adds records directly (tests and the devtool's sample data). */
function addUsageRecords(records) {
	store$1.records = [...store$1.records, ...records].sort((a, b) => a.at - b.at).slice(-2e4);
	save$1();
	notify$1();
}
function projectName(paths) {
	return (paths?.find((p) => typeof p === "string" && p !== ""))?.replace(/[/\\]+$/u, "").split(/[/\\]/u).pop() || void 0;
}
function usageBegin(key, conversationId, action, requestedModel, context) {
	const route = context?.route;
	if (key === void 0 || route === void 0) return;
	const at = Date.now();
	const type = action?.action?.case === "userMessageAction" ? "agent" : "resume";
	store$1.pending.set(key, {
		id: context?.requestId || `${key}:${at}`,
		conversationId,
		type,
		at,
		provider: route.provider,
		model: route.model,
		apiType: route.apiType,
		effort: requestedModel?.parameters?.find((p) => p.id === "reasoning" || p.id === "effort")?.value || void 0,
		project: projectName(context?.workspace),
		steps: 0
	});
}
function usageUpdate(key, update) {
	const pending = key === void 0 ? void 0 : store$1.pending.get(key);
	if (key === void 0 || pending === void 0) return;
	const m = update.message;
	if (m.case === "stepCompleted") pending.steps++;
	else if (m.case === "turnEnded") {
		store$1.pending.delete(key);
		const tokens = normalizeUsage(m.value ?? {});
		if (tokens.input + tokens.output + tokens.cacheRead + tokens.cacheWrite === 0) return;
		addUsageRecords([{
			...pending,
			steps: Math.max(1, pending.steps),
			endedAt: Date.now(),
			...tokens
		}]);
	}
}
//#endregion
//#region src/vs/workbench/contrib/localMode/browser/components/DevTool.tsx
/**
* The DEV pill and panel (after luna-PC's tweakpane debugger): app info, local
* sign-in, providers, recent requests and a few window utilities. Mounted at
* the agent window root in every local mode build, so it is also reachable
* from the sign-in screen.
*/
var OPEN_KEY = "cursorLocalMode.devtool.open";
var POSITION_KEY = "cursorLocalMode.devtool.top";
var FOLDERS_KEY = "cursorLocalMode.devtool.folders";
var PLANS = [
	{
		id: "free",
		label: "Free"
	},
	{
		id: "pro",
		label: "Pro"
	},
	{
		id: "pro_plus",
		label: "Pro+"
	},
	{
		id: "ultra",
		label: "Ultra"
	}
];
function readJson(key, fallback) {
	try {
		const value = globalThis.localStorage?.getItem(key);
		return value === null || value === void 0 ? fallback : JSON.parse(value);
	} catch {
		return fallback;
	}
}
function writeJson(key, value) {
	try {
		globalThis.localStorage?.setItem(key, JSON.stringify(value));
	} catch {}
}
/** useState persisted in localStorage. */
function useStored(key, fallback) {
	const [value, setValue] = useState(() => readJson(key, fallback));
	return [value, (next) => {
		setValue(next);
		writeJson(key, next);
	}];
}
function Folder(props) {
	const [closed, setClosed] = useStored(FOLDERS_KEY, []);
	const open = !closed.includes(props.title);
	return /* @__PURE__ */ jsxs("section", {
		className: "lm-dev-folder",
		children: [/* @__PURE__ */ jsxs("button", {
			type: "button",
			className: "lm-dev-folder-title",
			"aria-expanded": open,
			onClick: () => setClosed(open ? [...closed, props.title] : closed.filter((t) => t !== props.title)),
			children: [
				/* @__PURE__ */ jsx(Icon, {
					name: "chevron",
					size: 12
				}),
				/* @__PURE__ */ jsx("span", { children: props.title }),
				props.trailing === void 0 ? null : /* @__PURE__ */ jsx("span", {
					className: "lm-dev-folder-trailing",
					children: props.trailing
				})
			]
		}), open ? /* @__PURE__ */ jsx("div", {
			className: "lm-dev-folder-body",
			children: props.children
		}) : null]
	});
}
function Row(props) {
	return /* @__PURE__ */ jsxs("div", {
		className: "lm-dev-row",
		children: [/* @__PURE__ */ jsx("span", {
			className: "lm-dev-label",
			children: props.label
		}), /* @__PURE__ */ jsx("span", {
			className: "lm-dev-value",
			title: props.title,
			children: props.children
		})]
	});
}
function DevButton(props) {
	return /* @__PURE__ */ jsx("button", {
		type: "button",
		className: "lm-dev-button",
		"data-danger": props.danger || void 0,
		disabled: props.disabled,
		onClick: props.onClick,
		children: props.children
	});
}
/** Text input that commits on Enter or blur, and reverts on Escape. */
function TextField(props) {
	const [draft, setDraft] = useState(props.value);
	useEffect(() => setDraft(props.value), [props.value]);
	const commit = () => {
		const value = draft.trim();
		if (value === "") setDraft(props.value);
		else if (value !== props.value) props.onCommit(value);
	};
	return /* @__PURE__ */ jsx(Row, {
		label: props.label,
		children: /* @__PURE__ */ jsx("input", {
			className: "lm-dev-input",
			value: draft,
			spellCheck: false,
			"aria-label": props.label,
			onChange: (e) => setDraft(e.target.value),
			onBlur: commit,
			onKeyDown: (e) => {
				if (e.key === "Enter") e.currentTarget.blur();
				else if (e.key === "Escape") setDraft(props.value);
			}
		})
	});
}
function AppFolder() {
	const product = globalThis.vscode?.context?.configuration?.()?.product;
	const versions = globalThis.vscode?.process?.versions ?? {};
	return /* @__PURE__ */ jsxs(Folder, {
		title: "App",
		children: [
			/* @__PURE__ */ jsxs(Row, {
				label: "Version",
				title: product?.commit,
				children: [product?.version ?? "—", product?.commit ? /* @__PURE__ */ jsxs("span", {
					className: "lm-dev-muted",
					children: [" · ", product.commit.slice(0, 7)]
				}) : null]
			}),
			/* @__PURE__ */ jsx(Row, {
				label: "Local mode",
				children: "Bundled"
			}),
			/* @__PURE__ */ jsx(Row, {
				label: "Electron",
				children: versions.electron ?? "—"
			}),
			/* @__PURE__ */ jsx(Row, {
				label: "Chromium",
				children: versions.chrome ?? "—"
			}),
			/* @__PURE__ */ jsx(Row, {
				label: "Node",
				children: versions.node ?? "—"
			})
		]
	});
}
function AccountFolder() {
	const host = cursorHost();
	const auth = host.cursor.useService(host.cursor.services.auth);
	const account = useSyncExternalStore(host.account.subscribe, host.account.get);
	const update = (patch) => host.account.set(auth, patch);
	return /* @__PURE__ */ jsxs(Folder, {
		title: "Account",
		trailing: /* @__PURE__ */ jsx("span", {
			className: "lm-dev-status",
			"data-on": account.signedIn || void 0,
			children: account.signedIn ? "Signed in" : "Signed out"
		}),
		children: [
			/* @__PURE__ */ jsx(TextField, {
				label: "Name",
				value: account.name,
				onCommit: (name) => update({ name })
			}),
			/* @__PURE__ */ jsx(TextField, {
				label: "Email",
				value: account.email,
				onCommit: (email) => update({ email })
			}),
			/* @__PURE__ */ jsx(Row, {
				label: "Plan",
				children: /* @__PURE__ */ jsx("span", {
					className: "lm-dev-segmented",
					children: PLANS.map((p) => /* @__PURE__ */ jsx("button", {
						type: "button",
						"aria-pressed": account.plan === p.id,
						onClick: () => update({ plan: p.id }),
						children: p.label
					}, p.id))
				})
			}),
			/* @__PURE__ */ jsx(DevButton, {
				onClick: () => update({ signedIn: !account.signedIn }),
				children: account.signedIn ? "Sign out" : "Sign in locally"
			}),
			/* @__PURE__ */ jsx("p", {
				className: "lm-dev-note",
				children: "Local sign-in: stays on this machine, nothing is sent to Cursor. Free and Pro bring back the plan's model limits."
			})
		]
	});
}
function ProvidersFolder() {
	const { useService, services } = cursorHost().cursor;
	const storage = useService(services.storage);
	const aiService = useService(services.ai);
	const [refreshing, setRefreshing] = useState(false);
	const providers = readProviders(storage);
	return /* @__PURE__ */ jsxs(Folder, {
		title: "Providers",
		trailing: providers.length,
		children: [providers.length === 0 ? /* @__PURE__ */ jsx("p", {
			className: "lm-dev-note",
			children: "No custom providers yet. Add one in Settings → Models."
		}) : providers.map((p) => /* @__PURE__ */ jsxs(Row, {
			label: p.name || p.prefix,
			title: p.baseUrl,
			children: [
				/* @__PURE__ */ jsx("span", {
					className: "lm-dev-muted",
					children: API_TYPE_SHORT_LABELS[p.apiType]
				}),
				" ",
				p.enabled === false ? "off" : plural(p.models.filter((m) => m.enabled !== false).length, "model")
			]
		}, p.prefix)), /* @__PURE__ */ jsx(DevButton, {
			disabled: refreshing,
			onClick: () => {
				setRefreshing(true);
				aiService.refreshDefaultModels().finally(() => setRefreshing(false));
			},
			children: refreshing ? "Refreshing…" : "Refresh model picker"
		})]
	});
}
var plural = (n, word) => `${n} ${word}${n === 1 ? "" : "s"}`;
var timeFormat$1 = new Intl.DateTimeFormat(void 0, {
	hour: "2-digit",
	minute: "2-digit",
	second: "2-digit"
});
function RequestsFolder() {
	const records = useSyncExternalStore(subscribeUsage, usageRecords);
	const [confirmClear, setConfirmClear] = useState(false);
	const recent = records.slice(-6).reverse();
	return /* @__PURE__ */ jsxs(Folder, {
		title: "Requests",
		trailing: records.length.toLocaleString(),
		children: [recent.length === 0 ? /* @__PURE__ */ jsx("p", {
			className: "lm-dev-note",
			children: "Nothing recorded yet. Requests served by a custom provider show up here."
		}) : /* @__PURE__ */ jsx("ul", {
			className: "lm-dev-requests",
			children: recent.map((r) => {
				const cost = recordCost(r);
				return /* @__PURE__ */ jsxs("li", {
					title: `${r.provider} · ${r.id}`,
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "lm-dev-muted",
							children: timeFormat$1.format(r.at)
						}),
						/* @__PURE__ */ jsx("span", {
							className: "lm-dev-request-model",
							children: r.model
						}),
						/* @__PURE__ */ jsx("span", { children: formatTokenCount(totalTokens(r)) }),
						/* @__PURE__ */ jsxs("span", {
							className: "lm-dev-muted",
							children: [formatDuration(r.endedAt - r.at), cost === void 0 ? "" : ` · ${formatCost(cost)}`]
						})
					]
				}, r.id);
			})
		}), /* @__PURE__ */ jsxs("div", {
			className: "lm-dev-buttons",
			children: [/* @__PURE__ */ jsx(DevButton, {
				onClick: () => addUsageRecords(sampleUsage(Date.now(), 120)),
				children: "Seed sample usage"
			}), /* @__PURE__ */ jsx(DevButton, {
				danger: true,
				disabled: records.length === 0,
				onClick: () => {
					if (confirmClear) clearUsage();
					setConfirmClear(!confirmClear);
				},
				children: confirmClear ? "Confirm clear" : "Clear history"
			})]
		})]
	});
}
function WindowFolder() {
	const { useService, services } = cursorHost().cursor;
	const commands = useService(services.commands);
	const run = (id) => void commands.executeCommand(id).catch((e) => console.error(`[devtool] ${id}`, e));
	return /* @__PURE__ */ jsx(Folder, {
		title: "Window",
		children: /* @__PURE__ */ jsxs("div", {
			className: "lm-dev-buttons",
			children: [/* @__PURE__ */ jsx(DevButton, {
				onClick: () => run("workbench.action.toggleDevTools"),
				children: "Toggle DevTools"
			}), /* @__PURE__ */ jsx(DevButton, {
				onClick: () => run("workbench.action.reloadWindow"),
				children: "Reload window"
			})]
		})
	});
}
/** Vertical position of the pill, as a fraction of the window height. */
function clampTop(top) {
	return Math.min(.92, Math.max(.08, top));
}
function DevTool() {
	const [open, setOpen] = useStored(OPEN_KEY, false);
	const [top, setTop] = useStored(POSITION_KEY, .62);
	const drag = useRef(void 0);
	useEffect(() => {
		if (!open) return;
		const onKey = (e) => e.key === "Escape" && setOpen(false);
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "lm-dev",
		children: [/* @__PURE__ */ jsx("button", {
			type: "button",
			className: "lm-dev-pill",
			style: { top: `${clampTop(top) * 100}%` },
			"aria-expanded": open,
			"aria-label": "Developer tools",
			title: "Developer tools (drag to move)",
			onPointerDown: (e) => {
				e.currentTarget.setPointerCapture(e.pointerId);
				drag.current = {
					startY: e.clientY,
					startTop: clampTop(top),
					moved: false
				};
			},
			onPointerMove: (e) => {
				const d = drag.current;
				if (d === void 0 || !d.moved && Math.abs(e.clientY - d.startY) < 4) return;
				d.moved = true;
				e.currentTarget.style.top = `${clampTop(d.startTop + (e.clientY - d.startY) / window.innerHeight) * 100}%`;
			},
			onPointerUp: (e) => {
				const d = drag.current;
				drag.current = void 0;
				if (d?.moved) setTop(clampTop(d.startTop + (e.clientY - d.startY) / window.innerHeight));
				else setOpen(!open);
			},
			children: "DEV"
		}), open ? /* @__PURE__ */ jsxs("div", {
			className: "lm-dev-panel",
			role: "dialog",
			"aria-label": "Developer tools",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "lm-dev-header",
				children: [/* @__PURE__ */ jsx("span", { children: "Cursor RE · DevTool" }), /* @__PURE__ */ jsx("button", {
					type: "button",
					className: "lm-dev-close",
					"aria-label": "Close",
					onClick: () => setOpen(false),
					children: /* @__PURE__ */ jsx(Icon, {
						name: "x",
						size: 14
					})
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "lm-dev-scroll",
				children: [
					/* @__PURE__ */ jsx(AppFolder, {}),
					/* @__PURE__ */ jsx(AccountFolder, {}),
					/* @__PURE__ */ jsx(ProvidersFolder, {}),
					/* @__PURE__ */ jsx(RequestsFolder, {}),
					/* @__PURE__ */ jsx(WindowFolder, {})
				]
			})]
		}) : null]
	});
}
//#endregion
//#region src/vs/workbench/contrib/localMode/browser/turnStats.ts
var STORAGE_KEY = "cursorLocalMode.turnStats";
var MAX_TURNS = 300;
globalThis.__cursorLocalModeTurnStats ??= {
	turns: load(),
	byConversation: /* @__PURE__ */ new Map(),
	toolArgs: /* @__PURE__ */ new Map(),
	listeners: /* @__PURE__ */ new Set(),
	notifyPending: false
};
var store = globalThis.__cursorLocalModeTurnStats;
store.toolArgs ??= /* @__PURE__ */ new Map();
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
	store.toolArgs.clear();
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
				firstByteAt,
				thinkingSince: void 0
			});
			return;
		case "toolCallDelta": {
			const delta = m.value.toolCallDelta?.delta?.value?.streamContentDelta;
			const n = typeof delta === "string" ? delta.length : 0;
			store.toolArgs.set(m.value.callId, (store.toolArgs.get(m.value.callId) ?? 0) + n);
			patch(key, {
				chars: s.chars + n,
				firstByteAt,
				thinkingSince: void 0
			});
			return;
		}
		case "toolCallStarted": {
			const total = argsLength(m.value.toolCall);
			const counted = store.toolArgs.get(m.value.callId) ?? 0;
			store.toolArgs.set(m.value.callId, Math.max(total, counted));
			patch(key, {
				chars: s.chars + Math.max(0, total - counted),
				firstByteAt,
				thinkingSince: void 0
			});
			return;
		}
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
/** Length of a tool call's arguments as JSON (a protobuf ToolCall: `tool` is a oneof). */
function argsLength(toolCall) {
	const args = toolCall?.tool?.value?.args;
	if (args === void 0 || args === null) return 0;
	try {
		return typeof args.toJsonString === "function" ? args.toJsonString().length : JSON.stringify(args, (_, v) => typeof v === "bigint" ? String(v) : v).length;
	} catch {
		return 0;
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
		const tokens = Math.max(s.outputTokens ?? 0, Math.round(s.chars / 4));
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
//#region src/vs/workbench/contrib/localMode/browser/components/UsageCharts.tsx
/** Token series, in stacking order (orca's palette). */
var SERIES = [
	{
		key: "input",
		label: "Input",
		color: "rgb(14 165 233 / 0.85)"
	},
	{
		key: "output",
		label: "Output",
		color: "rgb(16 185 129 / 0.85)"
	},
	{
		key: "cacheRead",
		label: "Cache read",
		color: "rgb(245 158 11 / 0.75)"
	},
	{
		key: "cacheWrite",
		label: "Cache write",
		color: "rgb(217 70 239 / 0.7)"
	}
];
var dayFormat = new Intl.DateTimeFormat(void 0, {
	weekday: "short",
	month: "short",
	day: "numeric"
});
var monthFormat = new Intl.DateTimeFormat(void 0, { month: "short" });
var parseDay = (key) => /* @__PURE__ */ new Date(`${key}T12:00:00`);
function formatDay(key) {
	return dayFormat.format(parseDay(key));
}
/** Proportional bar of the four token kinds, with a legend. */
function TokenMix({ totals }) {
	const sum = totals.input + totals.output + totals.cacheRead + totals.cacheWrite;
	return /* @__PURE__ */ jsxs("div", {
		className: "lm-mix",
		children: [/* @__PURE__ */ jsx("div", {
			className: "lm-mix-bar",
			role: "img",
			"aria-label": "Token mix",
			children: SERIES.map((s) => totals[s.key] > 0 ? /* @__PURE__ */ jsx("span", {
				style: {
					flexGrow: totals[s.key],
					background: s.color
				},
				title: s.label
			}, s.key) : null)
		}), /* @__PURE__ */ jsx("div", {
			className: "lm-legend",
			children: SERIES.map((s) => /* @__PURE__ */ jsxs("span", {
				className: "lm-legend-item",
				children: [
					/* @__PURE__ */ jsx("i", { style: { background: s.color } }),
					s.label,
					/* @__PURE__ */ jsx("b", { children: formatTokenCount(totals[s.key]) }),
					/* @__PURE__ */ jsx("span", {
						className: "lm-muted",
						children: sum === 0 ? "0%" : `${Math.round(totals[s.key] / sum * 100)}%`
					})
				]
			}, s.key))
		})]
	});
}
/** Stacked daily bars over [from, to] with a hover readout. */
function DailyChart(props) {
	const keys = dayRange(props.from, props.to);
	const [hover, setHover] = useState(void 0);
	const max = Math.max(1, ...keys.map((k) => props.days.get(k)?.tokens ?? 0));
	const shown = hover === void 0 ? void 0 : keys[hover];
	const shownTotals = shown === void 0 ? void 0 : props.days.get(shown);
	const labelEvery = Math.ceil(keys.length / 6);
	return /* @__PURE__ */ jsxs("div", {
		className: "lm-daily",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "lm-daily-readout",
				children: shown === void 0 ? /* @__PURE__ */ jsxs("span", {
					className: "lm-muted",
					children: [
						"Hover a day for details · peak ",
						formatTokenCount(max),
						" tokens"
					]
				}) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("b", { children: formatDay(shown) }), shownTotals === void 0 ? /* @__PURE__ */ jsx("span", {
					className: "lm-muted",
					children: "No requests"
				}) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("span", { children: [
					shownTotals.requests,
					" request",
					shownTotals.requests === 1 ? "" : "s"
				] }), SERIES.map((s) => /* @__PURE__ */ jsxs("span", {
					className: "lm-legend-item",
					children: [/* @__PURE__ */ jsx("i", { style: { background: s.color } }), formatTokenCount(shownTotals[s.key])]
				}, s.key))] })] })
			}),
			/* @__PURE__ */ jsx("div", {
				className: "lm-daily-bars",
				role: "img",
				"aria-label": `Daily tokens, peak ${formatTokenCount(max)}`,
				onPointerMove: (e) => {
					const r = e.currentTarget.getBoundingClientRect();
					setHover(Math.min(keys.length - 1, Math.max(0, Math.floor((e.clientX - r.left) / r.width * keys.length))));
				},
				onPointerLeave: () => setHover(void 0),
				children: keys.map((k, i) => {
					const t = props.days.get(k);
					return /* @__PURE__ */ jsx("div", {
						className: "lm-daily-col",
						"data-hover": hover === i || void 0,
						children: /* @__PURE__ */ jsx("div", {
							className: "lm-daily-stack",
							style: { height: `${(t?.tokens ?? 0) / max * 100}%` },
							children: t === void 0 ? null : SERIES.map((s) => t[s.key] > 0 ? /* @__PURE__ */ jsx("span", { style: {
								flexGrow: t[s.key],
								background: s.color
							} }, s.key) : null)
						})
					}, k);
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "lm-daily-axis",
				children: keys.map((k, i) => /* @__PURE__ */ jsx("span", { children: i % labelEvery === 0 ? parseDay(k).getDate() : "" }, k))
			})
		]
	});
}
/** GitHub-style activity grid: one column per week, Sunday on top. */
function Heatmap({ columns }) {
	const today = dayKey(Date.now());
	return /* @__PURE__ */ jsxs("div", {
		className: "lm-heat",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "lm-heat-days",
			"aria-hidden": "true",
			children: [
				/* @__PURE__ */ jsx("span", {}),
				/* @__PURE__ */ jsx("span", { children: "Mon" }),
				/* @__PURE__ */ jsx("span", {}),
				/* @__PURE__ */ jsx("span", { children: "Wed" }),
				/* @__PURE__ */ jsx("span", {}),
				/* @__PURE__ */ jsx("span", { children: "Fri" }),
				/* @__PURE__ */ jsx("span", {})
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "lm-heat-body",
			children: [/* @__PURE__ */ jsx("div", {
				className: "lm-heat-months",
				"aria-hidden": "true",
				children: columns.map((col, i) => {
					const first = parseDay(col[0].day);
					const prev = i === 0 ? void 0 : parseDay(columns[i - 1][0].day);
					return /* @__PURE__ */ jsx("span", { children: prev === void 0 || prev.getMonth() !== first.getMonth() ? monthFormat.format(first) : "" }, col[0].day);
				})
			}), /* @__PURE__ */ jsx("div", {
				className: "lm-heat-grid",
				children: columns.map((col) => /* @__PURE__ */ jsx("div", {
					className: "lm-heat-col",
					children: col.map((c) => /* @__PURE__ */ jsx("span", {
						className: "lm-heat-cell",
						"data-level": c.level,
						"data-future": c.future || void 0,
						"data-today": c.day === today || void 0,
						title: c.future ? void 0 : `${formatDay(c.day)}: ${formatTokenCount(c.tokens)} tokens`
					}, c.day))
				}, col[0].day))
			})]
		})]
	});
}
function HeatLegend() {
	return /* @__PURE__ */ jsxs("span", {
		className: "lm-heat-legend",
		children: [
			"Less",
			[
				0,
				1,
				2,
				3,
				4
			].map((l) => /* @__PURE__ */ jsx("span", {
				className: "lm-heat-cell",
				"data-level": l
			}, l)),
			"More"
		]
	});
}
/** Thin share-of-total bar for breakdown rows. */
function ShareBar({ value, max }) {
	return /* @__PURE__ */ jsx("span", {
		className: "lm-share",
		children: /* @__PURE__ */ jsx("span", { style: { width: `${max === 0 ? 0 : Math.max(2, value / max * 100)}%` } })
	});
}
//#endregion
//#region src/vs/workbench/contrib/localMode/browser/components/UsagePage.tsx
var RANGES = [
	{
		key: "7d",
		label: "7 days",
		days: 7
	},
	{
		key: "30d",
		label: "30 days",
		days: 30
	},
	{
		key: "90d",
		label: "90 days",
		days: 90
	},
	{
		key: "all",
		label: "All time"
	}
];
var PAGE_SIZE = 20;
var DAY_MS = 864e5;
var timeFormat = new Intl.DateTimeFormat(void 0, {
	month: "short",
	day: "numeric",
	hour: "2-digit",
	minute: "2-digit"
});
function startOfDay(ms) {
	const d = new Date(ms);
	d.setHours(0, 0, 0, 0);
	return d.getTime();
}
function download(name, text) {
	const url = URL.createObjectURL(new Blob([text], { type: "text/csv;charset=utf-8" }));
	const a = document.createElement("a");
	a.href = url;
	a.download = name;
	document.body.append(a);
	a.click();
	a.remove();
	setTimeout(() => URL.revokeObjectURL(url), 1e4);
}
function Stat(props) {
	return /* @__PURE__ */ jsxs("div", {
		className: "lm-stat",
		children: [
			/* @__PURE__ */ jsx("span", {
				className: "lm-stat-label",
				children: props.label
			}),
			/* @__PURE__ */ jsx("span", {
				className: "lm-stat-value",
				children: props.value
			}),
			/* @__PURE__ */ jsx("span", {
				className: "lm-stat-sub",
				children: props.sub
			})
		]
	});
}
function Panel(props) {
	return /* @__PURE__ */ jsxs("section", {
		className: "local-mode-card lm-panel",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "lm-panel-header",
			children: [/* @__PURE__ */ jsx("span", {
				className: "local-mode-block-title",
				children: props.title
			}), props.trailing]
		}), /* @__PURE__ */ jsx("div", {
			className: "lm-panel-body",
			children: props.children
		})]
	});
}
function costText(g) {
	return g.unpriced === g.requests ? "—" : formatCost(g.cost);
}
function Breakdown(props) {
	const max = props.groups[0]?.tokens ?? 0;
	return /* @__PURE__ */ jsxs("table", {
		className: "lm-table lm-breakdown",
		children: [/* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
			/* @__PURE__ */ jsx("th", { children: props.label }),
			/* @__PURE__ */ jsx("th", {
				className: "lm-num",
				children: "Requests"
			}),
			/* @__PURE__ */ jsx("th", {
				className: "lm-num",
				children: "Tokens"
			}),
			/* @__PURE__ */ jsx("th", {
				className: "lm-num",
				children: "Cost"
			})
		] }) }), /* @__PURE__ */ jsx("tbody", { children: props.groups.slice(0, 12).map((g) => /* @__PURE__ */ jsxs("tr", { children: [
			/* @__PURE__ */ jsxs("td", { children: [
				/* @__PURE__ */ jsx("span", {
					className: "lm-cell-main",
					title: g.key,
					children: g.key
				}),
				props.showProvider && g.provider ? /* @__PURE__ */ jsxs("span", {
					className: "lm-muted",
					children: [" · ", g.provider]
				}) : null,
				/* @__PURE__ */ jsx(ShareBar, {
					value: g.tokens,
					max
				})
			] }),
			/* @__PURE__ */ jsx("td", {
				className: "lm-num",
				children: g.requests.toLocaleString()
			}),
			/* @__PURE__ */ jsx("td", {
				className: "lm-num",
				children: formatTokenCount(g.tokens)
			}),
			/* @__PURE__ */ jsx("td", {
				className: "lm-num",
				children: costText(g)
			})
		] }, `${g.provider ?? ""}/${g.key}`)) })]
	});
}
function RequestsTable({ records }) {
	const [page, setPage] = useState(0);
	const newest = useMemo(() => [...records].reverse(), [records]);
	const pages = Math.max(1, Math.ceil(newest.length / PAGE_SIZE));
	const current = Math.min(page, pages - 1);
	const rows = newest.slice(current * PAGE_SIZE, (current + 1) * PAGE_SIZE);
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("table", {
		className: "lm-table lm-requests",
		children: [/* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
			/* @__PURE__ */ jsx("th", { children: "Date" }),
			/* @__PURE__ */ jsx("th", { children: "Type" }),
			/* @__PURE__ */ jsx("th", { children: "Model" }),
			/* @__PURE__ */ jsx("th", {
				className: "lm-num",
				children: "Tokens"
			}),
			/* @__PURE__ */ jsx("th", {
				className: "lm-num",
				children: "Cost"
			})
		] }) }), /* @__PURE__ */ jsx("tbody", { children: rows.map((r) => {
			const cost = recordCost(r);
			return /* @__PURE__ */ jsxs("tr", { children: [
				/* @__PURE__ */ jsx("td", {
					title: new Date(r.at).toISOString(),
					className: "lm-nowrap",
					children: timeFormat.format(r.at)
				}),
				/* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("span", {
					className: "lm-badge",
					"data-type": r.type,
					children: TYPE_LABELS[r.type] ?? r.type
				}) }),
				/* @__PURE__ */ jsxs("td", { children: [/* @__PURE__ */ jsx("span", {
					className: "lm-cell-main",
					title: `${r.provider} · ${r.model}`,
					children: r.model
				}), /* @__PURE__ */ jsxs("span", {
					className: "lm-cell-sub",
					children: [
						r.provider,
						" · ",
						r.steps,
						" call",
						r.steps === 1 ? "" : "s",
						" · ",
						formatDuration(r.endedAt - r.at)
					]
				})] }),
				/* @__PURE__ */ jsx("td", {
					className: "lm-num",
					title: `Input ${r.input.toLocaleString()}\nOutput ${r.output.toLocaleString()}\nCache read ${r.cacheRead.toLocaleString()}\nCache write ${r.cacheWrite.toLocaleString()}`,
					children: formatTokenCount(totalTokens(r))
				}),
				/* @__PURE__ */ jsx("td", {
					className: "lm-num",
					title: cost === void 0 ? "No list price for this model" : void 0,
					children: cost === void 0 ? "—" : formatCost(cost)
				})
			] }, r.id);
		}) })]
	}), pages > 1 ? /* @__PURE__ */ jsxs("div", {
		className: "lm-pager",
		children: [
			/* @__PURE__ */ jsxs("span", {
				className: "lm-muted",
				children: [
					current * PAGE_SIZE + 1,
					"–",
					Math.min(newest.length, (current + 1) * PAGE_SIZE),
					" of",
					" ",
					newest.length.toLocaleString()
				]
			}),
			/* @__PURE__ */ jsx("button", {
				type: "button",
				className: "local-mode-link-button",
				disabled: current === 0,
				onClick: () => setPage(current - 1),
				children: "Previous"
			}),
			/* @__PURE__ */ jsx("button", {
				type: "button",
				className: "local-mode-link-button",
				disabled: current >= pages - 1,
				onClick: () => setPage(current + 1),
				children: "Next"
			})
		]
	}) : null] });
}
/** Settings > Usage: what the custom providers have served on this machine. */
function UsagePage() {
	const { Page } = cursorHost().cursor.ui;
	const all = useSyncExternalStore(subscribeUsage, usageRecords);
	const [range, setRange] = useState("30d");
	const [provider, setProvider] = useState("");
	const [confirmClear, setConfirmClear] = useState(false);
	const providers = useMemo(() => [...new Set(all.map((r) => r.provider))].sort(), [all]);
	const now = useMemo(() => Date.now(), [all]);
	const days = RANGES.find((r) => r.key === range)?.days;
	const from = days === void 0 ? startOfDay(all[0]?.at ?? now) : startOfDay(now - (days - 1) * DAY_MS);
	const byProvider = useMemo(() => provider ? all.filter((r) => r.provider === provider) : all, [all, provider]);
	const records = useMemo(() => byProvider.filter((r) => r.at >= from), [byProvider, from]);
	const summary = useMemo(() => summarize(records), [records]);
	const history = useMemo(() => summarize(byProvider), [byProvider]);
	const heat = useMemo(() => heatmap(history.days, 26, now), [history, now]);
	const streak = streaks(history.days, now);
	const t = summary.totals;
	const chartFrom = Math.max(from, startOfDay(now - 89 * DAY_MS));
	const page = (children) => /* @__PURE__ */ jsx(Page, {
		title: "Usage",
		description: "Requests served by your custom providers, recorded on this machine. Costs are estimates from public list prices.",
		children: /* @__PURE__ */ jsx("div", {
			className: "local-mode-settings lm-usage",
			children
		})
	});
	if (all.length === 0) return page(/* @__PURE__ */ jsxs("div", {
		className: "local-mode-card local-mode-empty",
		children: [/* @__PURE__ */ jsx("div", {
			className: "local-mode-empty-title",
			children: "No usage yet"
		}), /* @__PURE__ */ jsx("div", {
			className: "local-mode-hint",
			children: "Run an agent on a custom provider model; every request will show up here with its tokens and cost."
		})]
	}));
	return page(/* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs("div", {
			className: "lm-toolbar",
			children: [
				/* @__PURE__ */ jsxs("label", {
					className: "lm-select",
					children: [
						provider ? /* @__PURE__ */ jsx(ProviderAvatar, {
							name: provider,
							size: "sm"
						}) : null,
						/* @__PURE__ */ jsxs("select", {
							value: provider,
							"aria-label": "Provider",
							onChange: (e) => setProvider(e.target.value),
							children: [/* @__PURE__ */ jsx("option", {
								value: "",
								children: "All providers"
							}), providers.map((p) => /* @__PURE__ */ jsx("option", {
								value: p,
								children: p
							}, p))]
						}),
						/* @__PURE__ */ jsx(Icon, {
							name: "chevron",
							size: 12
						})
					]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "local-mode-segmented",
					children: RANGES.map((r) => /* @__PURE__ */ jsx("button", {
						type: "button",
						"aria-pressed": range === r.key,
						"data-active": range === r.key || void 0,
						onClick: () => setRange(r.key),
						children: r.label
					}, r.key))
				}),
				/* @__PURE__ */ jsx("span", { className: "lm-spacer" }),
				/* @__PURE__ */ jsx("button", {
					type: "button",
					className: "local-mode-button lm-export",
					disabled: records.length === 0,
					onClick: () => download(`cursor-usage-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`, toCsv(records)),
					children: "Export CSV"
				})
			]
		}),
		/* @__PURE__ */ jsxs("div", {
			className: "lm-stats",
			children: [
				/* @__PURE__ */ jsx(Stat, {
					label: "Requests",
					value: t.requests.toLocaleString(),
					sub: `${t.steps.toLocaleString()} calls · ${summary.activeDays} active day${summary.activeDays === 1 ? "" : "s"}`
				}),
				/* @__PURE__ */ jsx(Stat, {
					label: "Tokens",
					value: formatTokenCount(t.tokens),
					sub: `${formatTokenCount(t.input + t.cacheRead + t.cacheWrite)} in · ${formatTokenCount(t.output)} out`
				}),
				/* @__PURE__ */ jsx(Stat, {
					label: "Est. cost",
					value: t.unpriced === t.requests ? "—" : formatCost(t.cost),
					sub: t.unpriced > 0 ? `${t.unpriced.toLocaleString()} unpriced` : t.requests > 0 ? `${formatCost(t.cost / t.requests)} per request` : "Nothing yet"
				}),
				/* @__PURE__ */ jsx(Stat, {
					label: "Cache hit rate",
					value: `${Math.round(cacheHitRate(t) * 100)}%`,
					sub: `${formatTokenCount(t.cacheRead)} read from cache`
				})
			]
		}),
		records.length === 0 ? /* @__PURE__ */ jsx("div", {
			className: "local-mode-card local-mode-empty",
			children: /* @__PURE__ */ jsx("div", {
				className: "local-mode-hint",
				children: "No requests in this period."
			})
		}) : /* @__PURE__ */ jsxs(Fragment, { children: [
			/* @__PURE__ */ jsxs(Panel, {
				title: "Daily tokens",
				trailing: /* @__PURE__ */ jsx("span", {
					className: "lm-muted",
					children: days === void 0 ? "last 90 days" : ""
				}),
				children: [/* @__PURE__ */ jsx(DailyChart, {
					days: summary.days,
					from: chartFrom,
					to: now
				}), /* @__PURE__ */ jsx(TokenMix, { totals: t })]
			}),
			/* @__PURE__ */ jsx(Panel, {
				title: "By provider",
				children: /* @__PURE__ */ jsx("div", {
					className: "lm-tiles",
					children: summary.byProvider.map((g) => /* @__PURE__ */ jsxs("button", {
						type: "button",
						className: "lm-tile",
						"data-active": provider === g.key || void 0,
						title: provider === g.key ? "Show all providers" : `Only ${g.key}`,
						onClick: () => setProvider(provider === g.key ? "" : g.key),
						children: [
							/* @__PURE__ */ jsxs("span", {
								className: "lm-tile-head",
								children: [
									/* @__PURE__ */ jsx(ProviderAvatar, {
										name: g.key,
										size: "sm"
									}),
									/* @__PURE__ */ jsx("span", {
										className: "lm-cell-main",
										children: g.key
									}),
									/* @__PURE__ */ jsxs("span", {
										className: "lm-muted",
										children: [Math.round(g.tokens / Math.max(1, t.tokens) * 100), "%"]
									})
								]
							}),
							/* @__PURE__ */ jsx("span", {
								className: "lm-tile-value",
								children: formatTokenCount(g.tokens)
							}),
							/* @__PURE__ */ jsxs("span", {
								className: "lm-muted",
								children: [
									g.requests.toLocaleString(),
									" requests · ",
									costText(g)
								]
							}),
							/* @__PURE__ */ jsx(ShareBar, {
								value: g.tokens,
								max: t.tokens
							})
						]
					}, g.key))
				})
			}),
			/* @__PURE__ */ jsx(Panel, {
				title: "By model",
				children: /* @__PURE__ */ jsx(Breakdown, {
					groups: summary.byModel,
					label: "Model",
					showProvider: !provider
				})
			}),
			summary.byProject.length > 1 || summary.byProject[0]?.key !== "No project" ? /* @__PURE__ */ jsx(Panel, {
				title: "By project",
				children: /* @__PURE__ */ jsx(Breakdown, {
					groups: summary.byProject,
					label: "Project"
				})
			}) : null,
			/* @__PURE__ */ jsx(Panel, {
				title: "Requests",
				trailing: /* @__PURE__ */ jsxs("span", {
					className: "lm-muted",
					children: [records.length.toLocaleString(), " in this period"]
				}),
				children: /* @__PURE__ */ jsx(RequestsTable, { records }, `${range}/${provider}`)
			})
		] }),
		/* @__PURE__ */ jsxs(Panel, {
			title: "Activity",
			trailing: /* @__PURE__ */ jsxs("span", {
				className: "lm-muted",
				children: [
					streak.current,
					" day streak · longest ",
					streak.longest,
					" · ",
					history.activeDays,
					" active days"
				]
			}),
			children: [/* @__PURE__ */ jsx(Heatmap, { columns: heat }), /* @__PURE__ */ jsxs("div", {
				className: "lm-heat-footer",
				children: [/* @__PURE__ */ jsxs("span", {
					className: "lm-muted",
					children: ["Last 26 weeks", provider ? ` · ${provider}` : ""]
				}), /* @__PURE__ */ jsx(HeatLegend, {})]
			})]
		}),
		/* @__PURE__ */ jsxs("div", {
			className: "lm-footer",
			children: [/* @__PURE__ */ jsxs("span", {
				className: "lm-muted",
				children: [
					all.length.toLocaleString(),
					" requests recorded since ",
					timeFormat.format(all[0].at),
					". Average request",
					" ",
					formatDuration(t.requests === 0 ? 0 : t.durationMs / t.requests),
					"."
				]
			}), /* @__PURE__ */ jsx("button", {
				type: "button",
				className: "local-mode-link-button",
				"data-danger": confirmClear || void 0,
				onBlur: () => setConfirmClear(false),
				onClick: () => {
					if (confirmClear) clearUsage();
					setConfirmClear(!confirmClear);
				},
				children: confirmClear ? "Click again to delete all usage history" : "Clear history"
			})]
		})
	] }));
}
//#endregion
//#region src/vs/workbench/contrib/localMode/browser/localMode.css?inline
var localMode_default = "/* --- Transcript ------------------------------------------------------------ */\n\n/* Models often open a reply with a newline, which renders as an empty line\n   under the work-group header. */\n.ui-markdown > * > br:first-child {\n	display: none;\n}\n\n/* Keep the live turn stats right after the tail status text instead of\n   pushed to the far end of the row. */\n.agent-transcript-tail-status:has(> [data-slot=\"local-turn-stats\"]) > :first-child {\n	flex: 0 1 auto;\n	width: auto;\n}\n\n.local-mode-turn-stats {\n	flex-shrink: 0;\n	margin-right: auto;\n	color: var(--cursor-text-quaternary);\n	font-variant-numeric: tabular-nums;\n	white-space: nowrap;\n}\n\n.local-mode-tabular {\n	font-variant-numeric: tabular-nums;\n}\n\n/* --- Settings > Models > Custom Providers ---------------------------------- */\n\n.local-mode-settings {\n	--lm-radius: 12px;\n	--lm-fg: var(--cursor-text-primary, var(--vscode-foreground));\n	--lm-fg-2: var(--cursor-text-secondary, var(--vscode-descriptionForeground));\n	--lm-fg-3: var(--cursor-text-tertiary, var(--vscode-descriptionForeground));\n	--lm-bg: var(--cursor-bg-quinary, var(--vscode-editorWidget-background));\n	--lm-bg-hover: var(--cursor-bg-quaternary, var(--vscode-list-hoverBackground));\n	--lm-bg-track: var(--cursor-bg-tertiary, var(--vscode-list-hoverBackground));\n	--lm-bg-raised: var(--cursor-bg-elevated, var(--vscode-input-background));\n	--lm-line: var(--cursor-stroke-secondary, var(--vscode-widget-border, rgba(128, 128, 128, 0.2)));\n	--lm-line-2: var(--cursor-stroke-tertiary, rgba(128, 128, 128, 0.12));\n	--lm-focus: var(--cursor-stroke-focused, var(--vscode-focusBorder));\n	--lm-ok: var(--cursor-text-green-primary, var(--vscode-testing-iconPassed));\n	--lm-err: var(--cursor-text-red-primary, var(--vscode-errorForeground));\n	display: flex;\n	flex-direction: column;\n	gap: 12px;\n	color: var(--lm-fg);\n	font-size: 13px;\n}\n\n.local-mode-settings :where(button) {\n	font: inherit;\n	color: inherit;\n	cursor: pointer;\n}\n\n.local-mode-settings :where(button:disabled) {\n	cursor: default;\n	opacity: 0.5;\n}\n\n.local-mode-icon {\n	flex-shrink: 0;\n	display: block;\n}\n\n.local-mode-hint {\n	display: block;\n	font-size: 12px;\n	line-height: 1.45;\n	color: var(--lm-fg-3);\n}\n\n.local-mode-hint code {\n	padding: 0 4px;\n	border-radius: 4px;\n	background: var(--lm-bg-hover);\n	font-family: var(--monaco-monospace-font);\n	font-size: 11.5px;\n	color: var(--lm-fg-2);\n}\n\n.local-mode-count {\n	margin-left: 6px;\n	font-size: 11px;\n	font-variant-numeric: tabular-nums;\n	color: var(--lm-fg-3);\n}\n\n/* Provider tabs */\n\n.local-mode-tabs {\n	display: flex;\n	flex-wrap: wrap;\n	gap: 6px;\n}\n\n.local-mode-tab {\n	display: inline-flex;\n	align-items: center;\n	gap: 7px;\n	height: 30px;\n	max-width: 220px;\n	padding: 0 10px 0 5px;\n	border: 1px solid var(--lm-line-2);\n	border-radius: 8px;\n	background: transparent;\n	transition:\n		background-color 0.12s,\n		border-color 0.12s;\n}\n\n.local-mode-tab:hover {\n	background: var(--lm-bg-hover);\n}\n\n.local-mode-tab[data-active] {\n	background: var(--lm-bg-raised);\n	border-color: var(--lm-line);\n	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n\n.local-mode-tab[data-off] .local-mode-tab-name {\n	color: var(--lm-fg-3);\n	text-decoration: line-through;\n	text-decoration-color: var(--lm-line);\n}\n\n.local-mode-tab-name {\n	overflow: hidden;\n	text-overflow: ellipsis;\n	white-space: nowrap;\n	font-weight: 500;\n}\n\n.local-mode-tab .local-mode-count {\n	margin-left: 0;\n}\n\n.local-mode-tab-add {\n	padding-left: 9px;\n	border-style: dashed;\n	color: var(--lm-fg-2);\n}\n\n/* Avatar */\n\n.local-mode-avatar {\n	--hue: var(--cursor-blue, #3b82f6);\n	flex-shrink: 0;\n	display: inline-grid;\n	place-items: center;\n	width: 32px;\n	height: 32px;\n	border-radius: 8px;\n	font-weight: 600;\n	font-size: 14px;\n	color: var(--hue);\n	background: color-mix(in srgb, var(--hue) 16%, transparent);\n}\n\n.local-mode-avatar[data-size=\"sm\"] {\n	width: 20px;\n	height: 20px;\n	border-radius: 5px;\n	font-size: 11px;\n}\n\n.local-mode-avatar[data-hue=\"purple\"] {\n	--hue: var(--cursor-purple, #8b5cf6);\n}\n.local-mode-avatar[data-hue=\"orange\"] {\n	--hue: var(--cursor-orange, #f97316);\n}\n.local-mode-avatar[data-hue=\"green\"] {\n	--hue: var(--cursor-green, #22c55e);\n}\n.local-mode-avatar[data-hue=\"cyan\"] {\n	--hue: var(--cursor-cyan, #06b6d4);\n}\n.local-mode-avatar[data-hue=\"magenta\"] {\n	--hue: var(--cursor-magenta, #d946ef);\n}\n\n/* Card */\n\n.local-mode-card {\n	display: flex;\n	flex-direction: column;\n	border-radius: var(--lm-radius);\n	background: var(--lm-bg);\n}\n\n.local-mode-card > * + * {\n	border-top: 1px solid var(--lm-line-2);\n}\n\n.local-mode-card-header {\n	display: flex;\n	align-items: center;\n	gap: 12px;\n	padding: 14px 16px;\n}\n\n.local-mode-card[data-off] .local-mode-block {\n	opacity: 0.55;\n}\n\n.local-mode-card-title {\n	flex: 1 1 auto;\n	min-width: 0;\n	display: flex;\n	flex-direction: column;\n	gap: 1px;\n}\n\n.local-mode-title-input {\n	width: 100%;\n	margin-left: -4px;\n	padding: 1px 4px;\n	border: 1px solid transparent;\n	border-radius: 5px;\n	background: transparent;\n	color: var(--lm-fg);\n	font: inherit;\n	font-size: 14px;\n	font-weight: 600;\n	outline: none;\n}\n\n.local-mode-title-input:hover {\n	border-color: var(--lm-line-2);\n}\n\n.local-mode-title-input:focus {\n	border-color: var(--lm-focus);\n	background: var(--lm-bg-raised);\n}\n\n.local-mode-block {\n	display: flex;\n	flex-direction: column;\n	gap: 12px;\n	padding: 14px 16px 16px;\n}\n\n.local-mode-block-header {\n	display: flex;\n	align-items: flex-start;\n	justify-content: space-between;\n	gap: 12px;\n}\n\n.local-mode-block-title {\n	font-size: 11px;\n	font-weight: 600;\n	letter-spacing: 0.04em;\n	text-transform: uppercase;\n	color: var(--lm-fg-3);\n}\n\n.local-mode-block-header .local-mode-hint {\n	margin-top: 3px;\n}\n\n/* Fields */\n\n.local-mode-field {\n	display: flex;\n	flex-direction: column;\n	gap: 5px;\n}\n\n.local-mode-field-label {\n	font-size: 12px;\n	font-weight: 500;\n	color: var(--lm-fg-2);\n}\n\n.local-mode-input {\n	width: 100%;\n	box-sizing: border-box;\n	height: 30px;\n	padding: 0 10px;\n	font: inherit;\n	font-size: 13px;\n	color: var(--vscode-input-foreground, var(--lm-fg));\n	background: var(--lm-bg-raised);\n	border: 1px solid var(--lm-line);\n	border-radius: 7px;\n	outline: none;\n	transition:\n		border-color 0.12s,\n		box-shadow 0.12s;\n}\n\n.local-mode-input:focus {\n	border-color: var(--lm-focus);\n	box-shadow: 0 0 0 3px color-mix(in srgb, var(--lm-focus) 18%, transparent);\n}\n\n.local-mode-input::placeholder,\n.local-mode-settings input::placeholder,\n.local-mode-settings textarea::placeholder {\n	color: var(--lm-fg-3);\n	opacity: 0.8;\n}\n\n.local-mode-mono {\n	font-family: var(--monaco-monospace-font);\n	font-size: 12px;\n}\n\n.local-mode-textarea {\n	height: auto;\n	padding: 6px 10px;\n	resize: vertical;\n}\n\n.local-mode-input-group {\n	position: relative;\n	display: block;\n}\n\n.local-mode-input-group .local-mode-input {\n	padding-right: 36px;\n}\n\n.local-mode-input-group .local-mode-icon-button {\n	position: absolute;\n	top: 3px;\n	right: 3px;\n}\n\n/* Buttons */\n\n.local-mode-icon-button {\n	display: inline-grid;\n	place-items: center;\n	width: 24px;\n	height: 24px;\n	padding: 0;\n	border: none;\n	border-radius: 6px;\n	background: transparent;\n	color: var(--lm-fg-3);\n}\n\n.local-mode-icon-button:hover {\n	background: var(--lm-bg-hover);\n	color: var(--lm-fg);\n}\n\n.local-mode-button {\n	flex-shrink: 0;\n	height: 28px;\n	padding: 0 12px;\n	border: 1px solid var(--lm-line);\n	border-radius: 7px;\n	background: var(--lm-bg-raised);\n	font-weight: 500;\n}\n\n.local-mode-button:not(:disabled):hover {\n	background: var(--lm-bg-hover);\n}\n\n.local-mode-link-button {\n	display: inline-flex;\n	align-items: center;\n	gap: 5px;\n	height: 24px;\n	padding: 0 6px;\n	border: none;\n	border-radius: 6px;\n	background: transparent;\n	font-size: 12px;\n	color: var(--lm-fg-2);\n	white-space: nowrap;\n}\n\n.local-mode-link-button:not(:disabled):hover {\n	background: var(--lm-bg-hover);\n	color: var(--lm-fg);\n}\n\n.local-mode-spin[data-active] .local-mode-icon {\n	animation: local-mode-spin 0.9s linear infinite;\n}\n\n@keyframes local-mode-spin {\n	to {\n		transform: rotate(360deg);\n	}\n}\n\n/* Segmented control */\n\n.local-mode-segmented {\n	display: inline-flex;\n	padding: 2px;\n	gap: 2px;\n	border-radius: 8px;\n	background: var(--lm-bg-track);\n}\n\n.local-mode-segmented button {\n	height: 24px;\n	padding: 0 10px;\n	border: none;\n	border-radius: 6px;\n	background: transparent;\n	font-size: 12px;\n	color: var(--lm-fg-2);\n	white-space: nowrap;\n}\n\n.local-mode-segmented button[data-active] {\n	background: var(--lm-bg-raised);\n	color: var(--lm-fg);\n	font-weight: 500;\n	box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n}\n\n.local-mode-segmented-fill {\n	display: flex;\n}\n\n.local-mode-segmented-fill button {\n	flex: 1 1 0;\n	height: 26px;\n}\n\n/* Connection check */\n\n.local-mode-check-row {\n	display: flex;\n	align-items: center;\n	gap: 10px;\n	min-height: 28px;\n}\n\n.local-mode-check {\n	display: inline-flex;\n	align-items: flex-start;\n	gap: 6px;\n	min-width: 0;\n	font-size: 12px;\n	line-height: 1.45;\n	color: var(--lm-err);\n	overflow-wrap: anywhere;\n}\n\n.local-mode-check .local-mode-icon {\n	margin-top: 2px;\n}\n\n.local-mode-check[data-ok] {\n	color: var(--lm-ok);\n}\n\n.local-mode-disclosure {\n	display: inline-flex;\n	align-items: center;\n	align-self: flex-start;\n	gap: 6px;\n	margin-left: -6px;\n	padding: 3px 6px;\n	border: none;\n	border-radius: 6px;\n	background: transparent;\n	font-size: 12px;\n	font-weight: 500;\n	color: var(--lm-fg-2);\n}\n\n.local-mode-disclosure:hover {\n	background: var(--lm-bg-hover);\n}\n\n.local-mode-disclosure .local-mode-icon {\n	transition: transform 0.15s;\n}\n\n.local-mode-disclosure[aria-expanded=\"true\"] .local-mode-icon {\n	transform: rotate(90deg);\n}\n\n.local-mode-disclosure .local-mode-hint {\n	font-weight: 400;\n}\n\n.local-mode-advanced {\n	display: flex;\n	flex-direction: column;\n	gap: 12px;\n	padding-left: 12px;\n	border-left: 2px solid var(--lm-line-2);\n}\n\n/* Models */\n\n.local-mode-model-toolbar {\n	display: flex;\n	align-items: center;\n	gap: 8px;\n}\n\n.local-mode-search {\n	flex: 1 1 auto;\n	display: flex;\n	align-items: center;\n	gap: 6px;\n	height: 28px;\n	padding: 0 8px;\n	border: 1px solid var(--lm-line);\n	border-radius: 7px;\n	background: var(--lm-bg-raised);\n	color: var(--lm-fg-3);\n}\n\n.local-mode-search:focus-within {\n	border-color: var(--lm-focus);\n}\n\n.local-mode-search input,\n.local-mode-add-model input {\n	flex: 1 1 auto;\n	min-width: 0;\n	padding: 0;\n	border: none;\n	outline: none;\n	background: transparent;\n	font: inherit;\n	font-size: 12.5px;\n	color: var(--lm-fg);\n}\n\n.local-mode-search button {\n	display: grid;\n	place-items: center;\n	padding: 2px;\n	border: none;\n	border-radius: 4px;\n	background: transparent;\n}\n\n.local-mode-model-list {\n	list-style: none;\n	max-height: 360px;\n	overflow-y: auto;\n	margin: 0 -6px;\n	padding: 0 6px;\n}\n\n.local-mode-model-row {\n	display: flex;\n	align-items: center;\n	gap: 10px;\n	height: 34px;\n	margin: 0 -6px;\n	padding: 0 6px;\n	border-radius: 7px;\n}\n\n.local-mode-model-row:hover {\n	background: var(--lm-bg-hover);\n}\n\n.local-mode-model-name {\n	flex: 1 1 auto;\n	min-width: 0;\n	overflow: hidden;\n	text-overflow: ellipsis;\n	white-space: nowrap;\n	font-family: var(--monaco-monospace-font);\n	font-size: 12.5px;\n}\n\n.local-mode-model-row[data-off] .local-mode-model-name {\n	color: var(--lm-fg-3);\n}\n\n.local-mode-row-action {\n	opacity: 0;\n}\n\n.local-mode-model-row:hover .local-mode-row-action,\n.local-mode-row-action:focus-visible {\n	opacity: 1;\n}\n\n.local-mode-context-chip,\n.local-mode-context-input {\n	box-sizing: border-box;\n	width: 64px;\n	height: 22px;\n	padding: 0 8px;\n	border-radius: 11px;\n	font-size: 11.5px;\n	font-variant-numeric: tabular-nums;\n	text-align: center;\n}\n\n.local-mode-context-chip {\n	border: 1px solid var(--lm-line);\n	background: var(--lm-bg-raised);\n	color: var(--lm-fg-2);\n}\n\n.local-mode-context-chip[data-auto] {\n	border-color: transparent;\n	background: transparent;\n	color: var(--lm-fg-3);\n}\n\n.local-mode-context-chip:hover {\n	border-color: var(--lm-line);\n	color: var(--lm-fg);\n}\n\n.local-mode-context-input {\n	border: 1px solid var(--lm-focus);\n	outline: none;\n	background: var(--lm-bg-raised);\n	color: var(--lm-fg);\n	font-family: inherit;\n}\n\n.local-mode-context-input[aria-invalid=\"true\"] {\n	border-color: var(--lm-err);\n	color: var(--lm-err);\n}\n\n.local-mode-empty-row {\n	padding: 14px 0;\n	text-align: center;\n	font-size: 12px;\n	color: var(--lm-fg-3);\n}\n\n.local-mode-model-footer {\n	display: flex;\n	align-items: center;\n	gap: 8px;\n}\n\n.local-mode-add-model {\n	flex: 1 1 auto;\n	display: flex;\n	align-items: center;\n	gap: 8px;\n	height: 28px;\n	padding: 0 8px;\n	border: 1px dashed var(--lm-line);\n	border-radius: 7px;\n	color: var(--lm-fg-3);\n}\n\n.local-mode-add-model:focus-within {\n	border-style: solid;\n	border-color: var(--lm-focus);\n}\n\n.local-mode-bulk {\n	display: flex;\n	gap: 2px;\n}\n\n/* Presets and empty state */\n\n.local-mode-presets {\n	display: flex;\n	flex-direction: column;\n	gap: 12px;\n	padding: 14px 16px 16px;\n}\n\n.local-mode-empty {\n	gap: 4px;\n	padding: 28px 24px;\n	align-items: stretch;\n	text-align: center;\n}\n\n.local-mode-empty > * + * {\n	border-top: none;\n}\n\n.local-mode-empty-title {\n	font-size: 15px;\n	font-weight: 600;\n}\n\n.local-mode-empty .local-mode-presets .local-mode-block-header {\n	display: none;\n}\n\n.local-mode-preset-grid {\n	display: grid;\n	grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));\n	gap: 8px;\n}\n\n.local-mode-preset {\n	display: flex;\n	align-items: center;\n	gap: 10px;\n	padding: 10px 12px;\n	border: 1px solid var(--lm-line-2);\n	border-radius: 8px;\n	background: var(--lm-bg-raised);\n	text-align: left;\n	transition:\n		border-color 0.12s,\n		transform 0.12s;\n}\n\n.local-mode-preset:hover {\n	border-color: var(--lm-focus);\n}\n\n.local-mode-preset .local-mode-avatar {\n	width: 28px;\n	height: 28px;\n	border-radius: 7px;\n	font-size: 13px;\n}\n\n.local-mode-preset-name {\n	display: block;\n	font-weight: 500;\n}\n\n/* Save bar */\n\n.local-mode-savebar {\n	position: sticky;\n	bottom: 12px;\n	z-index: 2;\n	display: flex;\n	align-items: center;\n	gap: 12px;\n	min-height: 40px;\n	padding: 6px 6px 6px 14px;\n	border: 1px solid var(--lm-line);\n	border-radius: var(--lm-radius);\n	background: var(--lm-bg-raised);\n	box-shadow: 0 6px 24px rgba(0, 0, 0, 0.12);\n	animation: local-mode-rise 0.16s ease-out;\n}\n\n.local-mode-savebar-text {\n	flex: 1 1 auto;\n	display: flex;\n	align-items: center;\n	gap: 7px;\n	font-size: 12.5px;\n	color: var(--lm-fg-2);\n}\n\n.local-mode-savebar[data-error] .local-mode-savebar-text {\n	color: var(--lm-err);\n}\n\n.local-mode-savebar-actions {\n	display: flex;\n	gap: 6px;\n}\n\n@keyframes local-mode-rise {\n	from {\n		opacity: 0;\n		transform: translateY(6px);\n	}\n}\n\n/* --- Settings > Usage ------------------------------------------------------ */\n\n.lm-usage {\n	--lm-input: rgb(14 165 233 / 0.85);\n	--lm-heat: var(--cursor-green, #22c55e);\n}\n\n.lm-muted {\n	font-size: 12px;\n	color: var(--lm-fg-3);\n	font-variant-numeric: tabular-nums;\n}\n\n.lm-spacer {\n	flex: 1 1 auto;\n}\n\n.lm-toolbar {\n	display: flex;\n	flex-wrap: wrap;\n	align-items: center;\n	gap: 8px;\n}\n\n.lm-select {\n	position: relative;\n	display: inline-flex;\n	align-items: center;\n	gap: 6px;\n	height: 28px;\n	padding: 0 8px;\n	border: 1px solid var(--lm-line);\n	border-radius: 7px;\n	background: var(--lm-bg-raised);\n}\n\n.lm-select select {\n	appearance: none;\n	padding: 0 14px 0 0;\n	border: none;\n	outline: none;\n	background: transparent;\n	font: inherit;\n	font-size: 12.5px;\n	color: var(--lm-fg);\n	cursor: pointer;\n}\n\n.lm-select > .local-mode-icon {\n	position: absolute;\n	right: 7px;\n	transform: rotate(90deg);\n	color: var(--lm-fg-3);\n	pointer-events: none;\n}\n\n/* Stat cards */\n\n.lm-stats {\n	display: grid;\n	grid-template-columns: repeat(4, minmax(0, 1fr));\n	gap: 8px;\n}\n\n.lm-stat {\n	display: flex;\n	flex-direction: column;\n	gap: 2px;\n	min-width: 0;\n	padding: 12px 14px;\n	border-radius: var(--lm-radius);\n	background: var(--lm-bg);\n}\n\n.lm-stat-label {\n	font-size: 12px;\n	color: var(--lm-fg-3);\n}\n\n.lm-stat-value {\n	font-size: 22px;\n	font-weight: 600;\n	letter-spacing: -0.01em;\n	font-variant-numeric: tabular-nums;\n}\n\n.lm-stat-sub {\n	font-size: 11.5px;\n	line-height: 1.35;\n	color: var(--lm-fg-3);\n}\n\n/* Panels */\n\n.lm-panel-header {\n	display: flex;\n	align-items: center;\n	justify-content: space-between;\n	gap: 12px;\n	padding: 12px 16px 0;\n}\n\n.local-mode-card > .lm-panel-body {\n	display: flex;\n	flex-direction: column;\n	gap: 14px;\n	padding: 12px 16px 16px;\n	border-top: none;\n}\n\n/* Daily chart */\n\n.lm-daily {\n	display: flex;\n	flex-direction: column;\n	gap: 6px;\n}\n\n.lm-daily-readout {\n	display: flex;\n	flex-wrap: wrap;\n	align-items: center;\n	gap: 4px 12px;\n	min-height: 20px;\n	font-size: 12px;\n	font-variant-numeric: tabular-nums;\n}\n\n.lm-daily-bars {\n	display: flex;\n	align-items: flex-end;\n	gap: 2px;\n	height: 140px;\n	padding-bottom: 1px;\n	border-bottom: 1px solid var(--lm-line);\n	background-image: linear-gradient(to top, var(--lm-line-2) 1px, transparent 1px);\n	background-size: 100% 25%;\n}\n\n.lm-daily-col {\n	flex: 1 1 0;\n	display: flex;\n	align-items: flex-end;\n	height: 100%;\n	min-width: 0;\n	border-radius: 3px 3px 0 0;\n}\n\n.lm-daily-col[data-hover] {\n	background: var(--lm-bg-hover);\n}\n\n.lm-daily-stack {\n	display: flex;\n	flex-direction: column-reverse;\n	width: 100%;\n	min-height: 0;\n	overflow: hidden;\n	border-radius: 3px 3px 0 0;\n}\n\n.lm-daily-stack > span {\n	flex-basis: 0;\n	min-height: 1px;\n}\n\n.lm-daily-axis {\n	display: flex;\n	gap: 2px;\n}\n\n.lm-daily-axis > span {\n	flex: 1 1 0;\n	min-width: 0;\n	overflow: visible;\n	white-space: nowrap;\n	font-size: 10.5px;\n	color: var(--lm-fg-3);\n	font-variant-numeric: tabular-nums;\n}\n\n/* Token mix */\n\n.lm-mix {\n	display: flex;\n	flex-direction: column;\n	gap: 8px;\n}\n\n.lm-mix-bar {\n	display: flex;\n	gap: 2px;\n	height: 8px;\n	overflow: hidden;\n	border-radius: 4px;\n	background: var(--lm-bg-hover);\n}\n\n.lm-mix-bar > span {\n	flex-basis: 0;\n}\n\n.lm-legend {\n	display: flex;\n	flex-wrap: wrap;\n	gap: 4px 16px;\n}\n\n.lm-legend-item {\n	display: inline-flex;\n	align-items: center;\n	gap: 6px;\n	font-size: 12px;\n	color: var(--lm-fg-2);\n	font-variant-numeric: tabular-nums;\n}\n\n.lm-legend-item i {\n	width: 8px;\n	height: 8px;\n	border-radius: 2px;\n}\n\n.lm-legend-item b {\n	font-weight: 600;\n	color: var(--lm-fg);\n}\n\n/* Provider tiles */\n\n.lm-tiles {\n	display: grid;\n	grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));\n	gap: 8px;\n}\n\n.lm-tile {\n	display: flex;\n	flex-direction: column;\n	align-items: stretch;\n	gap: 4px;\n	min-width: 0;\n	padding: 10px 12px 12px;\n	border: 1px solid var(--lm-line-2);\n	border-radius: 9px;\n	background: var(--lm-bg-raised);\n	text-align: left;\n	transition: border-color 0.12s;\n}\n\n.lm-tile:hover,\n.lm-tile[data-active] {\n	border-color: var(--lm-focus);\n}\n\n.lm-tile-head {\n	display: flex;\n	align-items: center;\n	gap: 8px;\n	min-width: 0;\n}\n\n.lm-tile-head .lm-cell-main {\n	flex: 1 1 auto;\n}\n\n.lm-tile-value {\n	font-size: 18px;\n	font-weight: 600;\n	font-variant-numeric: tabular-nums;\n}\n\n.lm-share {\n	display: block;\n	height: 3px;\n	margin-top: 4px;\n	overflow: hidden;\n	border-radius: 2px;\n	background: var(--lm-bg-hover);\n}\n\n.lm-share > span {\n	display: block;\n	height: 100%;\n	border-radius: 2px;\n	background: var(--lm-input);\n}\n\n/* Tables */\n\n.lm-table {\n	width: 100%;\n	border-collapse: collapse;\n	table-layout: fixed;\n	font-size: 12.5px;\n	font-variant-numeric: tabular-nums;\n}\n\n.lm-table th {\n	padding: 0 8px 8px;\n	border-bottom: 1px solid var(--lm-line);\n	text-align: left;\n	font-size: 11.5px;\n	font-weight: 500;\n	color: var(--lm-fg-3);\n}\n\n.lm-table td {\n	padding: 8px;\n	border-bottom: 1px solid var(--lm-line-2);\n	vertical-align: middle;\n}\n\n.lm-table tr:last-child td {\n	border-bottom: none;\n}\n\n.lm-table tbody tr:hover td {\n	background: var(--lm-bg-hover);\n}\n\n.lm-table th:first-child,\n.lm-table td:first-child {\n	padding-left: 0;\n}\n\n.lm-table th:last-child,\n.lm-table td:last-child {\n	padding-right: 0;\n}\n\n.lm-table .lm-num {\n	width: 84px;\n	text-align: right;\n	white-space: nowrap;\n}\n\n.lm-breakdown .lm-share {\n	max-width: 260px;\n}\n\n.lm-requests th:nth-child(1) {\n	width: 108px;\n}\n\n.lm-requests th:nth-child(2) {\n	width: 70px;\n}\n\n.lm-nowrap {\n	white-space: nowrap;\n}\n\n.lm-cell-main {\n	display: block;\n	overflow: hidden;\n	text-overflow: ellipsis;\n	white-space: nowrap;\n	font-weight: 500;\n}\n\n.lm-breakdown .lm-cell-main {\n	display: inline;\n	font-family: var(--monaco-monospace-font);\n	font-size: 12px;\n	font-weight: 400;\n}\n\n.lm-requests .lm-cell-main {\n	font-family: var(--monaco-monospace-font);\n	font-size: 12px;\n	font-weight: 400;\n}\n\n.lm-cell-sub {\n	display: block;\n	overflow: hidden;\n	text-overflow: ellipsis;\n	white-space: nowrap;\n	font-size: 11.5px;\n	color: var(--lm-fg-3);\n}\n\n.lm-badge {\n	display: inline-block;\n	padding: 1px 7px;\n	border-radius: 10px;\n	font-size: 11px;\n	font-weight: 500;\n	color: var(--lm-fg-2);\n	background: var(--lm-bg-hover);\n}\n\n.lm-badge[data-type=\"agent\"] {\n	color: rgb(14 165 233);\n	background: rgb(14 165 233 / 0.12);\n}\n\n.lm-pager {\n	display: flex;\n	align-items: center;\n	justify-content: flex-end;\n	gap: 4px;\n}\n\n.lm-pager .lm-muted {\n	margin-right: 8px;\n}\n\n/* Heatmap */\n\n.lm-heat {\n	display: flex;\n	gap: 6px;\n	overflow-x: auto;\n}\n\n.lm-heat-days {\n	display: grid;\n	grid-template-rows: 14px repeat(7, 11px);\n	row-gap: 3px;\n	font-size: 10px;\n	line-height: 11px;\n	color: var(--lm-fg-3);\n}\n\n.lm-heat-days > :first-child {\n	height: 14px;\n}\n\n.lm-heat-body {\n	display: flex;\n	flex-direction: column;\n	gap: 3px;\n	min-width: 0;\n}\n\n.lm-heat-months,\n.lm-heat-grid {\n	display: flex;\n	gap: 3px;\n}\n\n.lm-heat-months > span {\n	width: 11px;\n	height: 14px;\n	overflow: visible;\n	white-space: nowrap;\n	font-size: 10px;\n	color: var(--lm-fg-3);\n}\n\n.lm-heat-col {\n	display: flex;\n	flex-direction: column;\n	gap: 3px;\n}\n\n.lm-heat-cell {\n	display: inline-block;\n	width: 11px;\n	height: 11px;\n	border-radius: 3px;\n	background: var(--lm-bg-hover);\n}\n\n.lm-heat-cell[data-level=\"1\"] {\n	background: color-mix(in srgb, var(--lm-heat) 30%, transparent);\n}\n\n.lm-heat-cell[data-level=\"2\"] {\n	background: color-mix(in srgb, var(--lm-heat) 52%, transparent);\n}\n\n.lm-heat-cell[data-level=\"3\"] {\n	background: color-mix(in srgb, var(--lm-heat) 76%, transparent);\n}\n\n.lm-heat-cell[data-level=\"4\"] {\n	background: var(--lm-heat);\n}\n\n.lm-heat-cell[data-future] {\n	visibility: hidden;\n}\n\n.lm-heat-cell[data-today] {\n	outline: 1px solid var(--lm-fg-3);\n	outline-offset: 1px;\n}\n\n.lm-heat-footer {\n	display: flex;\n	align-items: center;\n	justify-content: space-between;\n}\n\n.lm-heat-legend {\n	display: inline-flex;\n	align-items: center;\n	gap: 3px;\n	font-size: 11px;\n	color: var(--lm-fg-3);\n}\n\n.lm-heat-legend > :first-of-type {\n	margin-left: 4px;\n}\n\n.lm-heat-legend > :last-of-type {\n	margin-right: 4px;\n}\n\n.lm-footer {\n	display: flex;\n	align-items: center;\n	justify-content: space-between;\n	gap: 12px;\n	padding: 0 4px 8px;\n}\n\n.local-mode-link-button[data-danger] {\n	color: var(--lm-err);\n}\n\n.local-mode-empty .local-mode-presets {\n	padding: 16px 0 0;\n}\n\n/* DevTool: DEV pill and panel (tweakpane-style, dark in every theme) */\n\n.lm-dev {\n	--dev-bg: rgb(32 33 38 / 0.97);\n	--dev-bg-2: rgb(255 255 255 / 0.06);\n	--dev-bg-3: rgb(255 255 255 / 0.11);\n	--dev-fg: rgb(240 241 245);\n	--dev-fg-2: rgb(240 241 245 / 0.62);\n	--dev-line: rgb(255 255 255 / 0.08);\n	--dev-accent: rgb(120 190 255);\n	font-family: var(--cursor-font-family-ui, system-ui), sans-serif;\n	font-size: 11.5px;\n	color: var(--dev-fg);\n}\n\n.lm-dev-pill {\n	position: fixed;\n	right: 0;\n	z-index: 100000;\n	padding: 6px 5px 6px 7px;\n	border: 1px solid var(--dev-line);\n	border-right: none;\n	border-radius: 8px 0 0 8px;\n	background: var(--dev-bg);\n	color: var(--dev-fg-2);\n	font:\n		600 10px / 1 ui-monospace,\n		SFMono-Regular,\n		Menlo,\n		monospace;\n	letter-spacing: 0.06em;\n	writing-mode: vertical-rl;\n	cursor: grab;\n	opacity: 0.55;\n	box-shadow: 0 2px 10px rgb(0 0 0 / 0.25);\n	transform: translateY(-50%);\n	transition:\n		opacity 120ms,\n		color 120ms;\n	touch-action: none;\n}\n\n.lm-dev-pill:hover,\n.lm-dev-pill[aria-expanded=\"true\"],\n.lm-dev-pill:focus-visible {\n	opacity: 1;\n	color: var(--dev-accent);\n}\n\n.lm-dev-pill:active {\n	cursor: grabbing;\n}\n\n.lm-dev-panel {\n	position: fixed;\n	top: 44px;\n	right: 34px;\n	z-index: 100000;\n	display: flex;\n	flex-direction: column;\n	width: 300px;\n	max-height: calc(100vh - 88px);\n	border: 1px solid var(--dev-line);\n	border-radius: 8px;\n	background: var(--dev-bg);\n	box-shadow: 0 12px 40px rgb(0 0 0 / 0.4);\n	backdrop-filter: blur(12px);\n}\n\n.lm-dev-header {\n	display: flex;\n	align-items: center;\n	justify-content: space-between;\n	padding: 7px 6px 7px 10px;\n	border-bottom: 1px solid var(--dev-line);\n	color: var(--dev-fg-2);\n	font-weight: 600;\n}\n\n.lm-dev-close {\n	display: grid;\n	place-items: center;\n	width: 22px;\n	height: 22px;\n	padding: 0;\n	border: none;\n	border-radius: 4px;\n	background: none;\n	color: var(--dev-fg-2);\n	cursor: pointer;\n}\n\n.lm-dev-close:hover {\n	background: var(--dev-bg-3);\n	color: var(--dev-fg);\n}\n\n.lm-dev-scroll {\n	overflow-y: auto;\n	padding: 4px;\n}\n\n.lm-dev-folder + .lm-dev-folder {\n	margin-top: 4px;\n}\n\n.lm-dev-folder-title {\n	display: flex;\n	align-items: center;\n	gap: 6px;\n	width: 100%;\n	padding: 5px 6px;\n	border: none;\n	border-radius: 4px;\n	background: var(--dev-bg-2);\n	color: var(--dev-fg);\n	font: inherit;\n	font-weight: 600;\n	text-align: left;\n	cursor: pointer;\n}\n\n.lm-dev-folder-title:hover {\n	background: var(--dev-bg-3);\n}\n\n.lm-dev-folder-title svg {\n	transition: transform 120ms;\n}\n\n.lm-dev-folder-title[aria-expanded=\"true\"] svg {\n	transform: rotate(90deg);\n}\n\n.lm-dev-folder-trailing {\n	margin-left: auto;\n	color: var(--dev-fg-2);\n	font-weight: 400;\n}\n\n.lm-dev-folder-body {\n	display: flex;\n	flex-direction: column;\n	gap: 3px;\n	padding: 6px 4px 4px 10px;\n}\n\n.lm-dev-row {\n	display: grid;\n	grid-template-columns: 76px minmax(0, 1fr);\n	align-items: center;\n	gap: 8px;\n	min-height: 22px;\n}\n\n.lm-dev-label {\n	overflow: hidden;\n	color: var(--dev-fg-2);\n	text-overflow: ellipsis;\n	white-space: nowrap;\n}\n\n.lm-dev-value {\n	overflow: hidden;\n	font-family: ui-monospace, SFMono-Regular, Menlo, monospace;\n	font-size: 11px;\n	text-overflow: ellipsis;\n	white-space: nowrap;\n}\n\n.lm-dev-muted {\n	color: var(--dev-fg-2);\n}\n\n.lm-dev-input {\n	box-sizing: border-box;\n	width: 100%;\n	height: 22px;\n	padding: 0 6px;\n	border: 1px solid transparent;\n	border-radius: 4px;\n	outline: none;\n	background: var(--dev-bg-2);\n	color: var(--dev-fg);\n	font: inherit;\n}\n\n.lm-dev-input:hover {\n	background: var(--dev-bg-3);\n}\n\n.lm-dev-input:focus {\n	border-color: var(--dev-accent);\n}\n\n.lm-dev-segmented {\n	display: flex;\n	gap: 2px;\n	padding: 2px;\n	border-radius: 5px;\n	background: var(--dev-bg-2);\n}\n\n.lm-dev-segmented button {\n	flex: 1;\n	padding: 2px 0;\n	border: none;\n	border-radius: 3px;\n	background: none;\n	color: var(--dev-fg-2);\n	font: inherit;\n	cursor: pointer;\n}\n\n.lm-dev-segmented button:hover {\n	color: var(--dev-fg);\n}\n\n.lm-dev-segmented button[aria-pressed=\"true\"] {\n	background: var(--dev-bg-3);\n	color: var(--dev-fg);\n}\n\n.lm-dev-buttons {\n	display: flex;\n	gap: 4px;\n}\n\n.lm-dev-buttons .lm-dev-button {\n	flex: 1;\n}\n\n.lm-dev-button {\n	margin-top: 2px;\n	padding: 5px 8px;\n	border: none;\n	border-radius: 4px;\n	background: var(--dev-bg-3);\n	color: var(--dev-fg);\n	font: inherit;\n	cursor: pointer;\n}\n\n.lm-dev-button:hover:not(:disabled) {\n	background: rgb(255 255 255 / 0.17);\n}\n\n.lm-dev-button:disabled {\n	opacity: 0.45;\n	cursor: default;\n}\n\n.lm-dev-button[data-danger] {\n	color: rgb(255 140 140);\n}\n\n.lm-dev-status {\n	display: inline-flex;\n	align-items: center;\n	gap: 5px;\n}\n\n.lm-dev-status::before {\n	content: \"\";\n	width: 6px;\n	height: 6px;\n	border-radius: 50%;\n	background: var(--dev-fg-2);\n}\n\n.lm-dev-status[data-on]::before {\n	background: rgb(80 210 130);\n}\n\n.lm-dev-note {\n	margin: 2px 0 0;\n	color: var(--dev-fg-2);\n	font-size: 10.5px;\n	line-height: 1.4;\n}\n\n.lm-dev-requests {\n	display: flex;\n	flex-direction: column;\n	margin: 0;\n	padding: 0;\n	list-style: none;\n	font-family: ui-monospace, SFMono-Regular, Menlo, monospace;\n	font-size: 10.5px;\n}\n\n.lm-dev-requests li {\n	display: grid;\n	grid-template-columns: auto minmax(0, 1fr) auto;\n	column-gap: 8px;\n	padding: 3px 0;\n	border-bottom: 1px solid var(--dev-line);\n}\n\n.lm-dev-requests li > :last-child {\n	grid-column: 2 / 4;\n}\n\n.lm-dev-request-model {\n	overflow: hidden;\n	text-overflow: ellipsis;\n	white-space: nowrap;\n}\n";
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
		cursorLocalProvider: descriptor(hit.provider),
		usage: {
			provider: hit.provider.name,
			model: bare,
			apiType: hit.provider.apiType
		}
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
		DevTool,
		TurnDetails,
		TurnStatusSuffix,
		ThinkingDetails,
		UsagePage
	},
	refreshModels,
	routeTurn,
	inferenceConfig,
	turnBegin(conversationId, action, requestedModel, context) {
		const key = turnBegin(conversationId, action, requestedModel);
		usageBegin(key, conversationId, action, requestedModel, context);
		return key;
	},
	turnUpdate(key, update) {
		turnUpdate(key, update);
		usageUpdate(key, update);
	},
	turnKeyFromRows,
	/** Also reachable from the console: `__cursorLocalMode.impl.debug`. */
	debug: {
		seedUsage: (days = 120) => addUsageRecords(sampleUsage(Date.now(), days)),
		clearUsage
	}
};
installStyles();
cursorHost().register(impl);
//#endregion
export { impl };
