//#region src/vs/glass/host/cursorHost.ts
/** `vs/platform/storage` StorageScope.APPLICATION / StorageTarget.MACHINE. */
var StorageScope = { APPLICATION: -1 };
var StorageTarget = { MACHINE: 1 };
function cursorHost() {
	const host = globalThis.__cursorLocalMode;
	if (host === void 0) throw new Error("cursor host bridge is not installed (is the workbench bundle patched?)");
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
		id: "subscriptions",
		name: "Subscriptions",
		description: "Sign in to Claude Code, Codex or Grok",
		prefix: "sub",
		apiType: "anthropic",
		baseUrl: "",
		kind: "subscriptions"
	},
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
//#region src/vs/workbench/contrib/localMode/common/subscriptions.ts
var ACCOUNT_TYPES = [
	"claude",
	"codex",
	"xai"
];
var ACCOUNT_TYPE_LABELS = {
	claude: "Claude Code",
	codex: "Codex",
	xai: "Grok"
};
/** What signing in looks like for each account type. */
var ACCOUNT_TYPE_HINTS = {
	claude: "Claude Pro or Max, signed in with your Claude account",
	codex: "ChatGPT Plus, Pro or Team, signed in with your ChatGPT account",
	xai: "SuperGrok or X Premium, signed in with your xAI account"
};
function isAccountType(value) {
	return typeof value === "string" && ACCOUNT_TYPES.includes(value);
}
var ROUTING_DEFAULTS = {
	sessionAffinity: true,
	affinityTtlMinutes: 60,
	rebindOn: "any",
	retries: 2,
	retryWaitSeconds: 30,
	cooling: true,
	modelCooling: true,
	streamRetries: 1
};
function bounded(value, min, max, fallback) {
	const n = Number(value);
	return value === void 0 || value === null || value === "" || !Number.isFinite(n) ? fallback : Math.min(max, Math.max(min, Math.round(n)));
}
/** Fills in defaults and clamps out-of-range values. */
function routingSettings(r) {
	const d = ROUTING_DEFAULTS;
	return {
		sessionAffinity: typeof r?.sessionAffinity === "boolean" ? r.sessionAffinity : d.sessionAffinity,
		affinityTtlMinutes: bounded(r?.affinityTtlMinutes, 1, 10080, d.affinityTtlMinutes),
		rebindOn: r?.rebindOn === "quota" || r?.rebindOn === "any" ? r.rebindOn : d.rebindOn,
		retries: bounded(r?.retries, 0, 10, d.retries),
		retryWaitSeconds: bounded(r?.retryWaitSeconds, 0, 3600, d.retryWaitSeconds),
		cooling: typeof r?.cooling === "boolean" ? r.cooling : d.cooling,
		modelCooling: typeof r?.modelCooling === "boolean" ? r.modelCooling : d.modelCooling,
		streamRetries: bounded(r?.streamRetries, 0, 5, d.streamRetries)
	};
}
/** Data directory under the app's user data folder. */
function sidecarDataDir(userDataDir) {
	return `${userDataDir.replace(/\/+$/u, "")}/cliproxyapi`;
}
/** The two endpoints the provider is exposed on (one wire format each). */
function sidecarBaseUrl(port, apiType) {
	return apiType === "anthropic" ? `http://127.0.0.1:${port}` : `http://127.0.0.1:${port}/backend-api/codex`;
}
function randomPort() {
	return 18e3 + Math.floor(Math.random() * 1e3);
}
function randomKey(prefix) {
	const bytes = /* @__PURE__ */ new Uint8Array(24);
	globalThis.crypto.getRandomValues(bytes);
	return prefix + Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
}
var PROXY_SCHEMES = [
	"http:",
	"https:",
	"socks5:",
	"socks5h:"
];
/** User-facing error for a bad proxy URL; empty, `direct` and `none` are fine. */
function validateProxyUrl(text) {
	const value = text.trim();
	if (value === "" || value === "direct" || value === "none") return;
	let url;
	try {
		url = new URL(value);
	} catch {
		return "Use a proxy URL like socks5://127.0.0.1:1080 or http://user:pass@proxy:8080.";
	}
	if (!PROXY_SCHEMES.includes(url.protocol)) return "The proxy must be http://, https://, socks5:// or socks5h://.";
	if (url.hostname === "") return "The proxy URL needs a host.";
}
/** Hides the password in a proxy URL for display. */
function maskProxyUrl(text) {
	try {
		const url = new URL(text);
		const user = url.username === "" ? "" : `${decodeURIComponent(url.username)}${url.password === "" ? "" : ":•••"}@`;
		return `${url.protocol}//${user}${url.host}${url.pathname === "/" ? "" : url.pathname}`;
	} catch {
		return text;
	}
}
/**
* What the user pasted to finish a sign-in: the address the browser landed on
* (with or without scheme, params in the query or fragment), `code#state`, or a
* bare code. Undefined when there is nothing usable.
*/
function parseCallbackInput(text) {
	const value = text.trim().replace(/^["'<]+|["'>]+$/gu, "");
	if (value === "") return;
	const urlish = /^https?:\/\//iu.test(value) ? value : /^(?:localhost|127\.0\.0\.1|\[::1\])(?::\d+)?\//iu.test(value) ? `http://${value}` : void 0;
	if (urlish !== void 0) {
		let url;
		try {
			url = new URL(urlish);
		} catch {
			return;
		}
		const params = new URLSearchParams(url.search);
		for (const [k, v] of new URLSearchParams(url.hash.replace(/^#/u, ""))) params.has(k) || params.set(k, v);
		if (!params.has("code") && !params.has("error")) return;
		url.search = params.toString();
		url.hash = "";
		return { redirectUrl: url.toString() };
	}
	if (/(?:^|[?&])code=/u.test(value)) {
		const params = new URLSearchParams(value.replace(/^.*?\?/u, ""));
		const code = params.get("code")?.trim();
		return code ? {
			code,
			state: params.get("state")?.trim() || void 0
		} : void 0;
	}
	const [code, state] = value.split("#", 2).map((s) => s.trim());
	return code ? {
		code,
		state: state || void 0
	} : void 0;
}
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
/**
* The enabled model a picker ID names. An ID without the prefix (how the agent
* runtime names a subagent's model) resolves when only one provider has it.
*/
function resolveModel(providers, modelId) {
	const id = typeof modelId === "string" ? modelId.trim() : "";
	if (!id) return;
	const models = enabledModels(providers);
	const bare = models.filter((e) => e.model.id === id);
	return models.find((e) => e.id === id) ?? (bare.length === 1 ? bare[0] : void 0);
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
/** Wire format of one of a subscriptions provider's models. */
function subscriptionApiType(model) {
	return model.apiType ?? (/^claude-/iu.test(model.id) ? "anthropic" : "openai-responses");
}
/**
* The providers turns are routed to. A subscriptions provider becomes one
* provider per wire format (Claude models on Anthropic Messages, Codex and
* Grok models on OpenAI Responses), each on its own sidecar base URL; prefix,
* name and key stay shared, so picker IDs don't change.
*/
function routableProviders(providers) {
	return providers.flatMap((p) => {
		if (p.kind !== "subscriptions") return [p];
		return ["anthropic", "openai-responses"].map((apiType) => ({
			...p,
			apiType,
			baseUrl: sidecarBaseUrl(Number(p.port), apiType),
			headers: "",
			models: (p.models ?? []).filter((m) => m?.id && subscriptionApiType(m) === apiType)
		}));
	});
}
/** How the extension host runs a subscriptions provider's sidecar. */
function sidecarConfig(provider, userDataDir) {
	return {
		port: Number(provider.port),
		apiKey: String(provider.apiKey ?? "").trim(),
		dataDir: sidecarDataDir(userDataDir),
		strategy: provider.strategy ?? "round-robin",
		proxyUrl: String(provider.proxyUrl ?? "").trim(),
		routing: routingSettings(provider.routing)
	};
}
/** `userDataDir` is required for subscriptions providers (the sidecar's data lives there). */
function descriptor(provider, userDataDir) {
	const contextLengths = {};
	const maxOutput = {};
	const efforts = {};
	for (const m of provider.models ?? []) {
		if (!m?.id) continue;
		const context = contextWindow(m);
		const output = maxOutputTokens(m);
		const tiers = modelEffortTiers(provider, m);
		if (context !== void 0) contextLengths[m.id] = context;
		if (output !== void 0) maxOutput[m.id] = output;
		if (tiers !== void 0) efforts[m.id] = tiers.values;
	}
	return {
		apiType: API_TYPES.includes(provider.apiType) ? provider.apiType : "openai-chat",
		contextLengths,
		maxOutputTokens: maxOutput,
		efforts,
		...provider.kind === "subscriptions" && userDataDir !== void 0 ? { sidecar: sidecarConfig(provider, userDataDir) } : {}
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
/**
* Effort tiers for one model: the levels the provider reported (subscriptions),
* else the built-in table.
*/
function modelEffortTiers(provider, model) {
	const values = model.efforts ?? [];
	if (values.length === 0) return effortTiers(provider, model.id);
	return {
		values,
		default: (provider.apiType === "anthropic" ? ["high", "medium"] : ["medium", "high"]).find((e) => values.includes(e)) ?? values[values.length - 1]
	};
}
function newProvider(existing, preset) {
	const base = preset?.prefix ?? "custom-provider";
	const used = new Set(existing.map((p) => p.prefix));
	let n = existing.length + 1;
	let prefix = base;
	while (used.has(prefix)) prefix = `${base}-${++n}`;
	if (preset?.kind === "subscriptions") return {
		name: preset.name,
		prefix,
		kind: "subscriptions",
		apiType: "anthropic",
		baseUrl: "",
		apiKey: randomKey("sk-local-"),
		headers: "",
		models: [],
		port: randomPort(),
		strategy: "round-robin"
	};
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
		if (p.kind === "subscriptions") {
			const error = validateSubscriptions(p, providers);
			if (error !== void 0) return `${label}: ${error}`;
			continue;
		}
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
function validateSubscriptions(p, providers) {
	if (providers.filter((x) => x.kind === "subscriptions").length > 1) return "only one Subscriptions provider is supported.";
	const port = Number(p.port);
	if (!Number.isInteger(port) || port < 1024 || port > 65535) return "the port must be a number from 1024 to 65535.";
	if (!String(p.apiKey ?? "").trim()) return "the local API key is missing.";
	const proxy = validateProxyUrl(p.proxyUrl ?? "");
	return proxy === void 0 ? void 0 : `default proxy: ${proxy}`;
}
/** Trims the free-text fields before a save. */
function cleanProviders(providers) {
	return providers.map((p) => ({
		...p,
		name: p.name.trim(),
		prefix: (p.prefix ?? "").trim(),
		baseUrl: p.baseUrl.trim(),
		apiKey: p.apiKey.trim(),
		...p.proxyUrl === void 0 ? {} : { proxyUrl: p.proxyUrl.trim() }
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
			...m.maxOutputTokens === void 0 ? {} : { maxOutputTokens: m.maxOutputTokens },
			...m.vision === void 0 ? {} : { vision: m.vision }
		};
		const facts = {
			...m.apiType === void 0 ? {} : { apiType: m.apiType },
			...m.efforts === void 0 ? {} : { efforts: m.efforts }
		};
		const existing = known.get(m.id);
		if (existing === void 0) merged.push({
			id: m.id,
			enabled: false,
			...fetched,
			...facts
		});
		else merged[merged.indexOf(existing)] = {
			...fetched,
			...existing,
			...existing.contextWindow === void 0 ? {} : { contextWindow: existing.contextWindow },
			...facts
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
//#endregion
//#region src/vs/workbench/contrib/localMode/browser/subscriptionsClient.ts
/** The app's user data folder, from the window configuration the preload exposes. */
function userDataDir() {
	const dir = globalThis.vscode?.context?.configuration?.()?.userDataDir;
	if (typeof dir !== "string" || dir === "") throw new Error("The user data folder is unknown: the window configuration is missing.");
	return dir;
}
/** Requests go out with the provider as currently edited (port, key, proxy, routing), saved or not. */
function subscriptionsClient(inference, provider) {
	const call = (body) => inference.fetchLocalProviderModels({ cursorLocalSubscriptions: {
		...body,
		sidecar: sidecarConfig(provider, userDataDir())
	} });
	return {
		status: () => call({ op: "status" }),
		login: (type) => call({
			op: "login",
			type
		}),
		loginStatus: (state) => call({
			op: "login-status",
			state
		}),
		loginCallback: (state, input) => call({
			op: "login-callback",
			state,
			input
		}),
		loginCancel: (state) => call({
			op: "login-cancel",
			state
		}),
		update: (name, patch) => call({
			op: "update",
			name,
			patch
		}),
		remove: (name) => call({
			op: "remove",
			name
		}),
		resetCooldown: (name) => call({
			op: "reset-cooldown",
			name
		}),
		quota: (name) => call({
			op: "quota",
			name
		}),
		models: async () => {
			const r = await call({ op: "models" });
			if (!Array.isArray(r?.cursorLocalModels)) throw new Error("the agent runtime did not return a model list");
			return r.cursorLocalModels;
		},
		checkProxy: (proxyUrl, type) => call({
			op: "check-proxy",
			proxyUrl,
			type
		})
	};
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
	trash: "M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6",
	copy: "M10 8h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2zM4 16a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2",
	external: "M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
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
var BRANDS = {
	claude: "m4.709 15.955 4.72-2.647.08-.23-.08-.128H9.2l-.79-.048-2.698-.073-2.339-.097-2.266-.122-.571-.121L0 11.784l.055-.352.48-.321.686.06 1.52.103 2.278.158 1.652.097 2.449.255h.389l.055-.157-.134-.098-.103-.097-2.358-1.596-2.552-1.688-1.336-.972-.724-.491-.364-.462-.158-1.008.656-.722.881.06.225.061.893.686 1.908 1.476 2.491 1.833.365.304.145-.103.019-.073-.164-.274-1.355-2.446-1.446-2.49-.644-1.032-.17-.619a2.97 2.97 0 0 1-.104-.729L6.283.134 6.696 0l.996.134.42.364.62 1.414 1.002 2.229 1.555 3.03.456.898.243.832.091.255h.158V9.01l.128-1.706.237-2.095.23-2.695.08-.76.376-.91.747-.492.584.28.48.685-.067.444-.286 1.851-.559 2.903-.364 1.942h.212l.243-.242.985-1.306 1.652-2.064.73-.82.85-.904.547-.431h1.033l.76 1.129-.34 1.166-1.064 1.347-.881 1.142-1.264 1.7-.79 1.36.073.11.188-.02 2.856-.606 1.543-.28 1.841-.315.833.388.091.395-.328.807-1.969.486-2.309.462-3.439.813-.042.03.049.061 1.549.146.662.036h1.622l3.02.225.79.522.474.638-.079.485-1.215.62-1.64-.389-3.829-.91-1.312-.329h-.182v.11l1.093 1.068 2.006 1.81 2.509 2.33.127.578-.322.455-.34-.049-2.205-1.657-.851-.747-1.926-1.62h-.128v.17l.444.649 2.345 3.521.122 1.08-.17.353-.608.213-.668-.122-1.374-1.925-1.415-2.167-1.143-1.943-.14.08-.674 7.254-.316.37-.729.28-.607-.461-.322-.747.322-1.476.389-1.924.315-1.53.286-1.9.17-.632-.012-.042-.14.018-1.434 1.967-2.18 2.945-1.726 1.845-.414.164-.717-.37.067-.662.401-.589 2.388-3.036 1.44-1.882.93-1.086-.006-.158h-.055L4.132 18.56l-1.13.146-.487-.456.061-.746.231-.243 1.908-1.312-.006.006z",
	codex: "M8.086.457a6.105 6.105 0 0 1 3.046-.415c1.333.153 2.521.72 3.564 1.7a.117.117 0 0 0 .107.029c1.408-.346 2.762-.224 4.061.366l.063.03.154.076c1.357.703 2.33 1.77 2.918 3.198a5.62 5.62 0 0 1 .421 2.126 5.655 5.655 0 0 1-.18 1.631.167.167 0 0 0 .04.155 5.982 5.982 0 0 1 1.578 2.891c.385 1.901-.01 3.615-1.183 5.14l-.182.22a6.063 6.063 0 0 1-2.934 1.851.162.162 0 0 0-.108.102c-.255.736-.511 1.364-.987 1.992-1.199 1.582-2.962 2.462-4.948 2.451-1.583-.008-2.986-.587-4.21-1.736a.145.145 0 0 0-.14-.032c-.518.167-1.04.191-1.604.185a5.924 5.924 0 0 1-2.595-.622 6.058 6.058 0 0 1-2.146-1.781c-.203-.269-.404-.522-.551-.821a7.74 7.74 0 0 1-.495-1.283 6.11 6.11 0 0 1-.017-3.064.166.166 0 0 0 .008-.074.115.115 0 0 0-.037-.064 5.958 5.958 0 0 1-1.38-2.202 5.196 5.196 0 0 1-.333-1.589 6.915 6.915 0 0 1 .188-2.132c.45-1.484 1.309-2.648 2.577-3.493.282-.188.55-.334.802-.438.286-.12.573-.22.861-.304a.129.129 0 0 0 .087-.087A6.016 6.016 0 0 1 5.635 2.31C6.315 1.464 7.132.846 8.086.457zm-.804 7.85a.848.848 0 0 0-1.473.842l1.694 2.965-1.688 2.848a.849.849 0 0 0 1.46.864l1.94-3.272a.849.849 0 0 0 .007-.854l-1.94-3.393zm5.446 6.24a.849.849 0 0 0 0 1.695h4.848a.849.849 0 0 0 0-1.696h-4.848z",
	xai: "M9.27 15.29l7.978-5.897c.391-.29.95-.177 1.137.272.98 2.369.542 5.215-1.41 7.169-1.951 1.954-4.667 2.382-7.149 1.406l-2.711 1.257c3.889 2.661 8.611 2.003 11.562-.953 2.341-2.344 3.066-5.539 2.388-8.42l.006.007c-.983-4.232.242-5.924 2.75-9.383.06-.082.12-.164.179-.248l-3.301 3.305v-.01L9.267 15.292M7.623 16.723c-2.792-2.67-2.31-6.801.071-9.184 1.761-1.763 4.647-2.483 7.166-1.425l2.705-1.25a7.808 7.808 0 00-1.829-1A8.975 8.975 0 005.984 5.83c-2.533 2.536-3.33 6.436-1.962 9.764 1.022 2.487-.653 4.246-2.34 6.022-.599.63-1.199 1.259-1.682 1.925l7.62-6.815"
};
function BrandMark({ brand, size = 16 }) {
	return /* @__PURE__ */ jsx("svg", {
		width: size,
		height: size,
		viewBox: "0 0 24 24",
		fill: "currentColor",
		fillRule: "evenodd",
		clipRule: "evenodd",
		"aria-hidden": "true",
		className: "local-mode-brand",
		"data-brand": brand,
		children: /* @__PURE__ */ jsx("path", { d: BRANDS[brand] })
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
/** Coarse time until something happens: "<1m", "12m", "3h 12m", "2d 4h". */
function formatCountdown(ms) {
	if (ms < 6e4) return "<1m";
	const m = Math.floor(ms / 6e4);
	if (m < 60) return `${m}m`;
	const h = Math.floor(m / 60);
	if (h < 24) return m % 60 === 0 ? `${h}h` : `${h}h ${m % 60}m`;
	const d = Math.floor(h / 24);
	return h % 24 === 0 ? `${d}d` : `${d}d ${h % 24}h`;
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
	const { prefix, models, busy, onChange, onFetch, badge, note } = props;
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
					children: models.length === 0 ? props.emptyHint ?? "Fetch the list from the endpoint, or add model IDs by hand." : `${onCount} of ${models.length} in the model picker, as ${prefix || "?"}/<model>`
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
			note,
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
						badge?.(m) ? /* @__PURE__ */ jsx("span", {
							className: "lm-model-badge",
							children: badge(m)
						}) : null,
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
//#region src/vs/workbench/contrib/localMode/browser/components/SubscriptionSignIn.tsx
var POLL_MS = 1500;
var CALLBACK_EXAMPLES = {
	claude: "http://localhost:54545/callback?code=…&state=…",
	codex: "http://localhost:1455/auth/callback?code=…&state=…"
};
function AccountAvatar({ type, size = "md" }) {
	if (!ACCOUNT_TYPES.includes(type)) return /* @__PURE__ */ jsx("span", {
		className: "local-mode-avatar",
		"data-size": size,
		children: (type[0] ?? "?").toUpperCase()
	});
	return /* @__PURE__ */ jsx("span", {
		className: "local-mode-avatar",
		"data-size": size,
		"data-brand": type,
		children: /* @__PURE__ */ jsx(BrandMark, {
			brand: type,
			size: size === "sm" ? 13 : 18
		})
	});
}
/** The Subscriptions provider's avatar: the three account types' marks, overlapped. */
function SubscriptionsAvatar({ size = "md" }) {
	return /* @__PURE__ */ jsx("span", {
		className: "lm-sub-avatar",
		"data-size": size,
		"aria-hidden": "true",
		children: ACCOUNT_TYPES.map((type) => /* @__PURE__ */ jsx("span", {
			className: "lm-sub-avatar-mark",
			"data-brand": type,
			children: /* @__PURE__ */ jsx(BrandMark, {
				brand: type,
				size: size === "sm" ? 6 : 9
			})
		}, type))
	});
}
function errorText$1(e) {
	return e instanceof Error ? e.message.replace(/^Error invoking remote method '[^']*': (Error: )?/u, "") : String(e);
}
function CopyButton({ text, label }) {
	const [copied, setCopied] = useState(false);
	return /* @__PURE__ */ jsxs("button", {
		type: "button",
		className: "local-mode-link-button",
		onClick: () => {
			navigator.clipboard.writeText(text).then(() => {
				setCopied(true);
				setTimeout(() => setCopied(false), 1500);
			});
		},
		children: [/* @__PURE__ */ jsx(Icon, {
			name: copied ? "check" : "copy",
			size: 12
		}), copied ? "Copied" : label]
	});
}
/**
* "Add account": one button per account type, then the sign-in in progress.
* Browser flows (Claude, Codex) finish on their own when the browser comes
* back to the sidecar; the address can be pasted when it can't. Grok uses a
* device code.
*/
function SubscriptionSignIn(props) {
	const { client, disabled, onSignedIn } = props;
	const [phase, setPhase] = useState({ kind: "idle" });
	const [paste, setPaste] = useState("");
	const [showPaste, setShowPaste] = useState(false);
	const [now, setNow] = useState(Date.now());
	const pending = useRef(void 0);
	const signedIn = useRef(onSignedIn);
	signedIn.current = onSignedIn;
	useEffect(() => () => {
		pending.current !== void 0 && client.loginCancel(pending.current).catch(() => {});
	}, [client]);
	const waiting = phase.kind === "waiting" ? phase : void 0;
	useEffect(() => {
		if (waiting === void 0) return;
		let stopped = false;
		const tick = async () => {
			setNow(Date.now());
			if (waiting.login.expiresAt !== void 0 && Date.now() > waiting.login.expiresAt) {
				pending.current = void 0;
				setPhase({
					kind: "error",
					type: waiting.type,
					text: "The sign-in link expired. Start again."
				});
				return;
			}
			try {
				const s = await client.loginStatus(waiting.login.state);
				if (stopped) return;
				if (s.status === "ok") {
					pending.current = void 0;
					setPhase({
						kind: "done",
						type: waiting.type
					});
					signedIn.current();
				} else if (s.status === "error") {
					pending.current = void 0;
					setPhase({
						kind: "error",
						type: waiting.type,
						text: s.error ?? "Sign-in failed."
					});
				}
			} catch {}
		};
		const timer = setInterval(tick, POLL_MS);
		return () => {
			stopped = true;
			clearInterval(timer);
		};
	}, [waiting, client]);
	const start = async (type) => {
		setPhase({
			kind: "starting",
			type
		});
		setPaste("");
		try {
			const login = await client.login(type);
			pending.current = login.state;
			setShowPaste(login.manual === true);
			setNow(Date.now());
			setPhase({
				kind: "waiting",
				type,
				login
			});
		} catch (e) {
			setPhase({
				kind: "error",
				type,
				text: errorText$1(e)
			});
		}
	};
	const cancel = () => {
		pending.current !== void 0 && client.loginCancel(pending.current).catch(() => {});
		pending.current = void 0;
		setPhase({ kind: "idle" });
	};
	const submitPaste = async () => {
		if (waiting === void 0) return;
		try {
			const s = await client.loginCallback(waiting.login.state, paste);
			if (s.status === "error") {
				pending.current = void 0;
				setPhase({
					kind: "error",
					type: waiting.type,
					text: s.error ?? "Sign-in failed."
				});
			}
		} catch (e) {
			setPhase({
				kind: "error",
				type: waiting.type,
				text: errorText$1(e),
				login: waiting.login
			});
		}
	};
	if (phase.kind === "idle" || phase.kind === "starting" || phase.kind === "done") return /* @__PURE__ */ jsxs("div", {
		className: "lm-sub-add",
		children: [phase.kind === "done" ? /* @__PURE__ */ jsxs("span", {
			className: "local-mode-check",
			"data-ok": true,
			children: [/* @__PURE__ */ jsx(Icon, {
				name: "check",
				size: 13
			}), /* @__PURE__ */ jsxs("span", { children: [ACCOUNT_TYPE_LABELS[phase.type], " account signed in."] })]
		}) : null, /* @__PURE__ */ jsx("div", {
			className: "lm-sub-add-grid",
			children: ACCOUNT_TYPES.map((type) => /* @__PURE__ */ jsxs("button", {
				type: "button",
				className: "local-mode-preset",
				disabled: disabled || phase.kind === "starting",
				onClick: () => void start(type),
				children: [/* @__PURE__ */ jsx(AccountAvatar, {
					type,
					size: "sm"
				}), /* @__PURE__ */ jsxs("span", { children: [/* @__PURE__ */ jsx("span", {
					className: "local-mode-preset-name",
					children: phase.kind === "starting" && phase.type === type ? "Opening sign-in…" : `Sign in to ${ACCOUNT_TYPE_LABELS[type]}`
				}), /* @__PURE__ */ jsx("span", {
					className: "local-mode-hint",
					children: ACCOUNT_TYPE_HINTS[type]
				})] })]
			}, type))
		})]
	});
	const label = ACCOUNT_TYPE_LABELS[phase.type];
	const login = phase.login;
	const parsed = paste.trim() === "" ? void 0 : parseCallbackInput(paste);
	return /* @__PURE__ */ jsxs("div", {
		className: "lm-sub-signin",
		"data-error": phase.kind === "error" || void 0,
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "local-mode-block-header",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "lm-sub-signin-title",
					children: [/* @__PURE__ */ jsx(AccountAvatar, {
						type: phase.type,
						size: "sm"
					}), /* @__PURE__ */ jsxs("span", { children: ["Sign in to ", label] })]
				}), /* @__PURE__ */ jsx("button", {
					type: "button",
					className: "local-mode-icon-button",
					"aria-label": "Cancel sign-in",
					onClick: cancel,
					children: /* @__PURE__ */ jsx(Icon, {
						name: "x",
						size: 14
					})
				})]
			}),
			phase.kind === "error" ? /* @__PURE__ */ jsxs("span", {
				className: "local-mode-check",
				children: [/* @__PURE__ */ jsx(Icon, {
					name: "alert",
					size: 13
				}), /* @__PURE__ */ jsx("span", { children: phase.text })]
			}) : null,
			waiting?.login.flow === "device" ? /* @__PURE__ */ jsxs("div", {
				className: "lm-sub-device",
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "local-mode-hint",
						children: "Enter this code on the page that opened in your browser:"
					}),
					/* @__PURE__ */ jsx("span", {
						className: "lm-sub-code",
						children: waiting.login.userCode ?? "—"
					}),
					waiting.login.userCode ? /* @__PURE__ */ jsx(CopyButton, {
						text: waiting.login.userCode,
						label: "Copy code"
					}) : null
				]
			}) : waiting !== void 0 ? /* @__PURE__ */ jsx("span", {
				className: "local-mode-hint",
				children: waiting.login.manual ? `Approve access in the browser. It then lands on a page that does not load (another app holds the sign-in port): copy that page's address and paste it below.` : `Your browser opened the ${label} sign-in page. Approve access there; this updates on its own.`
			}) : null,
			login !== void 0 ? /* @__PURE__ */ jsxs("div", {
				className: "lm-sub-link",
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "lm-sub-link-url",
						title: login.url,
						children: login.url
					}),
					/* @__PURE__ */ jsx(CopyButton, {
						text: login.url,
						label: "Copy link"
					}),
					/* @__PURE__ */ jsxs("a", {
						className: "local-mode-link-button",
						href: login.url,
						target: "_blank",
						rel: "noreferrer",
						children: [/* @__PURE__ */ jsx(Icon, {
							name: "external",
							size: 12
						}), "Open again"]
					})
				]
			}) : null,
			waiting !== void 0 ? /* @__PURE__ */ jsxs("div", {
				className: "local-mode-check-row",
				children: [/* @__PURE__ */ jsx("span", {
					className: "local-mode-spin",
					"data-active": true,
					children: /* @__PURE__ */ jsx(Icon, {
						name: "refresh",
						size: 13
					})
				}), /* @__PURE__ */ jsxs("span", {
					className: "local-mode-hint",
					children: ["Waiting for you to finish signing in", waiting.login.expiresAt === void 0 ? "…" : ` · expires in ${formatCountdown(Math.max(0, waiting.login.expiresAt - now))}`]
				})]
			}) : null,
			waiting !== void 0 && waiting.login.flow === "browser" ? showPaste ? /* @__PURE__ */ jsxs("div", {
				className: "lm-sub-paste",
				children: [/* @__PURE__ */ jsx("input", {
					value: paste,
					placeholder: CALLBACK_EXAMPLES[phase.type] ?? "Address after sign-in",
					"aria-label": "Address the browser landed on",
					spellCheck: false,
					className: "local-mode-input local-mode-mono",
					onChange: (e) => setPaste(e.target.value),
					onKeyDown: (e) => e.key === "Enter" && parsed !== void 0 && void submitPaste()
				}), /* @__PURE__ */ jsx("button", {
					type: "button",
					className: "local-mode-button",
					disabled: parsed === void 0,
					onClick: () => void submitPaste(),
					children: "Finish sign-in"
				})]
			}) : /* @__PURE__ */ jsxs("button", {
				type: "button",
				className: "local-mode-disclosure",
				onClick: () => setShowPaste(true),
				children: [/* @__PURE__ */ jsx(Icon, {
					name: "chevron",
					size: 12
				}), "The page after sign-in didn't load?"]
			}) : null,
			phase.kind === "error" ? /* @__PURE__ */ jsxs("div", {
				className: "local-mode-check-row",
				children: [/* @__PURE__ */ jsx("button", {
					type: "button",
					className: "local-mode-button",
					onClick: () => void start(phase.type),
					children: "Try again"
				}), /* @__PURE__ */ jsx("button", {
					type: "button",
					className: "local-mode-link-button",
					onClick: cancel,
					children: "Close"
				})]
			}) : null
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
function ProviderAvatar(props) {
	const { name, kind, size = "md" } = props;
	if (kind === "subscriptions") return /* @__PURE__ */ jsx(SubscriptionsAvatar, { size });
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
//#region src/vs/workbench/contrib/localMode/browser/components/SubscriptionsCard.tsx
var STATUS_REFRESH_MS = 6e4;
/** Usage fetched this recently (by the extension host) is not fetched again when the page opens. */
var USAGE_FRESH_MS = 6e5;
var STRATEGY_LABELS = {
	"round-robin": {
		label: "Round robin",
		hint: "Take turns between the accounts of a type."
	},
	"weighted-round-robin": {
		label: "Weighted",
		hint: "Take turns in proportion to each account's weight (account settings). Weight 0 skips an account."
	},
	"fill-first": {
		label: "Fill first",
		hint: "Use one account until it hits a limit, then the next."
	}
};
var IDLE_OPTIONS = [
	15,
	30,
	60,
	180,
	720,
	1440
].map((m) => ({
	value: m,
	label: minutes(m)
}));
var WAIT_OPTIONS = [
	0,
	10,
	30,
	60,
	120,
	300
].map((s) => ({
	value: s,
	label: s === 0 ? "Don't wait" : s < 60 ? `${s} s` : minutes(s / 60)
}));
var COUNT_OPTIONS = (max, none) => Array.from({ length: max + 1 }, (_, n) => ({
	value: n,
	label: n === 0 ? none : String(n)
}));
function minutes(m) {
	return m < 60 ? `${m} min` : m % 60 === 0 ? `${m / 60} hour${m === 60 ? "" : "s"}` : `${m} min`;
}
function errorText(e) {
	return e instanceof Error ? e.message.replace(/^Error invoking remote method '[^']*': (Error: )?/u, "") : String(e);
}
function ago(ms) {
	return ms < 6e4 ? "just now" : `${formatCountdown(ms)} ago`;
}
/** "Claude", "Codex" or "Grok" for a subscriptions model. */
function modelBadge(model) {
	if (subscriptionApiType(model) === "anthropic") return "Claude";
	return /^grok/iu.test(model.id) ? "Grok" : "Codex";
}
/** A text field that commits on Enter or blur, and only valid values; Escape reverts. */
function CommitInput(props) {
	const [draft, setDraft] = useState(void 0);
	const error = draft === void 0 ? void 0 : props.validate?.(draft.trim());
	const commit = () => {
		if (draft !== void 0 && error === void 0) {
			draft.trim() !== props.value && props.onCommit(draft.trim());
			setDraft(void 0);
		}
	};
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("input", {
		value: draft ?? props.value,
		placeholder: props.placeholder,
		"aria-label": props.label,
		"aria-invalid": error !== void 0,
		spellCheck: false,
		className: "local-mode-input local-mode-mono",
		onChange: (e) => setDraft(e.target.value),
		onBlur: commit,
		onKeyDown: (e) => {
			if (e.key === "Enter") commit();
			else if (e.key === "Escape") setDraft(void 0);
		}
	}), error === void 0 ? null : /* @__PURE__ */ jsxs("span", {
		className: "local-mode-check",
		children: [/* @__PURE__ */ jsx(Icon, {
			name: "alert",
			size: 13
		}), /* @__PURE__ */ jsx("span", { children: error })]
	})] });
}
/** A native select over a fixed list; a current value outside the list is kept as an extra option. */
function Choice(props) {
	const options = props.options.some((o) => o.value === props.value) ? props.options : [...props.options, {
		value: props.value,
		label: props.format?.(props.value) ?? String(props.value)
	}];
	return /* @__PURE__ */ jsxs("label", {
		className: "lm-select",
		children: [/* @__PURE__ */ jsx("select", {
			value: String(props.value),
			"aria-label": props.label,
			onChange: (e) => {
				const picked = options.find((o) => String(o.value) === e.target.value);
				picked !== void 0 && props.onChange(picked.value);
			},
			children: options.map((o) => /* @__PURE__ */ jsx("option", {
				value: String(o.value),
				children: o.label
			}, String(o.value)))
		}), /* @__PURE__ */ jsx(Icon, {
			name: "chevron",
			size: 12
		})]
	});
}
/** One setting: label and hint on the left, its control on the right. */
function SettingRow(props) {
	return /* @__PURE__ */ jsxs("div", {
		className: "lm-sub-setting",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "lm-sub-setting-text",
			children: [/* @__PURE__ */ jsx("span", {
				className: "lm-sub-setting-label",
				children: props.label
			}), /* @__PURE__ */ jsx("span", {
				className: "local-mode-hint",
				children: props.hint
			})]
		}), /* @__PURE__ */ jsx("div", {
			className: "lm-sub-setting-control",
			children: props.children
		})]
	});
}
/** Sticky sessions, retries and cooldowns (CLIProxyAPI routing; applied without a restart). */
function RoutingFields(props) {
	const { Switch } = cursorHost().cursor.ui;
	const r = routingSettings(props.routing);
	const set = props.onChange;
	return /* @__PURE__ */ jsxs("div", {
		className: "lm-sub-settings",
		children: [
			/* @__PURE__ */ jsx(SettingRow, {
				label: "Sticky sessions",
				hint: "Keep each conversation on one account, so its prompt cache keeps hitting. It moves only when that account can't serve.",
				children: /* @__PURE__ */ jsx(Switch, {
					checked: r.sessionAffinity,
					onCheckedChange: (on) => set({ sessionAffinity: on })
				})
			}),
			r.sessionAffinity ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(SettingRow, {
				label: "Release after",
				hint: "How long an idle conversation keeps its account.",
				children: /* @__PURE__ */ jsx(Choice, {
					label: "Release after",
					value: r.affinityTtlMinutes,
					options: IDLE_OPTIONS,
					format: minutes,
					onChange: (v) => set({ affinityTtlMinutes: v })
				})
			}), /* @__PURE__ */ jsx(SettingRow, {
				label: "Move a conversation on",
				hint: r.rebindOn === "quota" ? "Limits and sign-in errors only. A brief upstream error retries on another account once, then the conversation returns." : "Any error from its account, including brief upstream ones.",
				children: /* @__PURE__ */ jsx("div", {
					className: "local-mode-segmented",
					children: [["any", "Any error"], ["quota", "Limits only"]].map(([value, label]) => /* @__PURE__ */ jsx("button", {
						type: "button",
						"aria-pressed": r.rebindOn === value,
						"data-active": r.rebindOn === value || void 0,
						onClick: () => set({ rebindOn: value }),
						children: label
					}, value))
				})
			})] }) : null,
			/* @__PURE__ */ jsx(SettingRow, {
				label: "Retry rounds",
				hint: "When every account of a type failed (limit, 403, 5xx), go over them again this many times.",
				children: /* @__PURE__ */ jsx(Choice, {
					label: "Retry rounds",
					value: r.retries,
					options: COUNT_OPTIONS(5, "None"),
					onChange: (v) => set({ retries: v })
				})
			}),
			/* @__PURE__ */ jsx(SettingRow, {
				label: "Wait for a cooling account",
				hint: "If all of them are cooling down, wait up to this long for the first one to come back instead of failing.",
				children: /* @__PURE__ */ jsx(Choice, {
					label: "Wait for a cooling account",
					value: r.retryWaitSeconds,
					options: WAIT_OPTIONS,
					format: (v) => `${v} s`,
					onChange: (v) => set({ retryWaitSeconds: v })
				})
			}),
			/* @__PURE__ */ jsx(SettingRow, {
				label: "Cool down after errors",
				hint: "Rest an account for a while after a limit or error, so requests go to the others. Off: keep sending it requests.",
				children: /* @__PURE__ */ jsx(Switch, {
					checked: r.cooling,
					onCheckedChange: (on) => set({ cooling: on })
				})
			}),
			r.cooling ? /* @__PURE__ */ jsx(SettingRow, {
				label: "Per-model limits",
				hint: "A Claude or Codex limit on one model rests the account for that model only; its other models keep serving.",
				children: /* @__PURE__ */ jsx(Switch, {
					checked: r.modelCooling,
					onCheckedChange: (on) => set({ modelCooling: on })
				})
			}) : null,
			/* @__PURE__ */ jsx(SettingRow, {
				label: "Stream retries",
				hint: "Retry a response that fails before its first token, without the agent noticing.",
				children: /* @__PURE__ */ jsx(Choice, {
					label: "Stream retries",
					value: r.streamRetries,
					options: COUNT_OPTIONS(3, "None"),
					onChange: (v) => set({ streamRetries: v })
				})
			})
		]
	});
}
/** Proxy URL with "Test" (reaches the provider through it) and "Save". */
function ProxyField(props) {
	const [draft, setDraft] = useState(props.value);
	const [check, setCheck] = useState(void 0);
	const [testing, setTesting] = useState(false);
	useEffect(() => setDraft(props.value), [props.value]);
	const value = draft.trim();
	const error = validateProxyUrl(value);
	const changed = value !== props.value;
	const test = async () => {
		setTesting(true);
		try {
			setCheck(await props.onTest(value));
		} catch (e) {
			setCheck({
				ok: false,
				ms: 0,
				text: errorText(e)
			});
		} finally {
			setTesting(false);
		}
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "lm-sub-proxy",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "lm-sub-inline",
			children: [
				/* @__PURE__ */ jsx("input", {
					value: draft,
					placeholder: "socks5://127.0.0.1:1080",
					"aria-label": "Proxy URL",
					"aria-invalid": error !== void 0,
					spellCheck: false,
					autoComplete: "off",
					className: "local-mode-input local-mode-mono",
					onChange: (e) => {
						setDraft(e.target.value);
						setCheck(void 0);
					},
					onKeyDown: (e) => e.key === "Enter" && changed && error === void 0 && void props.onSave(value)
				}),
				/* @__PURE__ */ jsx("button", {
					type: "button",
					className: "local-mode-button",
					disabled: testing || error !== void 0 || value === "" || value === "direct" || value === "none",
					onClick: () => void test(),
					children: testing ? "Testing…" : "Test"
				}),
				changed ? /* @__PURE__ */ jsx("button", {
					type: "button",
					className: "local-mode-button",
					disabled: error !== void 0,
					onClick: () => void props.onSave(value),
					children: props.saveLabel
				}) : null
			]
		}), error !== void 0 ? /* @__PURE__ */ jsxs("span", {
			className: "local-mode-check",
			children: [/* @__PURE__ */ jsx(Icon, {
				name: "alert",
				size: 13
			}), /* @__PURE__ */ jsx("span", { children: error })]
		}) : check !== void 0 ? /* @__PURE__ */ jsxs("span", {
			className: "local-mode-check",
			"data-ok": check.ok || void 0,
			children: [/* @__PURE__ */ jsx(Icon, {
				name: check.ok ? "check" : "alert",
				size: 13
			}), /* @__PURE__ */ jsx("span", { children: check.text })]
		}) : null]
	});
}
function QuotaView(props) {
	const { quota, busy, error, now } = props;
	return /* @__PURE__ */ jsxs("div", {
		className: "lm-sub-quota",
		children: [
			quota?.windows.map((w) => {
				const left = Math.round(100 - w.usedPercent);
				return /* @__PURE__ */ jsxs("div", {
					className: "lm-sub-quota-row",
					"data-level": left <= 10 ? "low" : left <= 35 ? "mid" : void 0,
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "lm-sub-quota-label",
							children: w.label
						}),
						/* @__PURE__ */ jsx("span", {
							className: "lm-sub-quota-bar",
							"aria-hidden": "true",
							children: /* @__PURE__ */ jsx("span", { style: { width: `${left}%` } })
						}),
						/* @__PURE__ */ jsxs("span", {
							className: "lm-sub-quota-value",
							children: [left, "% left"]
						}),
						/* @__PURE__ */ jsx("span", {
							className: "lm-sub-quota-reset",
							title: w.resetsAt === void 0 ? void 0 : new Date(w.resetsAt).toLocaleString(),
							children: w.resetsAt === void 0 ? "" : w.resetsAt > now ? `resets in ${formatCountdown(w.resetsAt - now)}` : "reset"
						})
					]
				}, w.label);
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "lm-sub-quota-footer",
				children: [/* @__PURE__ */ jsx("span", {
					className: "local-mode-hint",
					children: [...quota?.notes ?? [], quota === void 0 ? "No usage data yet" : quota.windows.length === 0 ? `No limits reported · checked ${ago(now - quota.checkedAt)}` : quota.source === "headers" ? `From the last response, ${ago(now - quota.checkedAt)}` : `Checked ${ago(now - quota.checkedAt)}`].join(" · ")
				}), /* @__PURE__ */ jsxs("button", {
					type: "button",
					className: "local-mode-link-button",
					disabled: busy,
					onClick: props.onRefresh,
					children: [/* @__PURE__ */ jsx("span", {
						className: "local-mode-spin",
						"data-active": busy || void 0,
						children: /* @__PURE__ */ jsx(Icon, {
							name: "refresh",
							size: 12
						})
					}), busy ? "Checking…" : "Refresh usage"]
				})]
			}),
			error === void 0 ? null : /* @__PURE__ */ jsxs("span", {
				className: "local-mode-check",
				children: [/* @__PURE__ */ jsx(Icon, {
					name: "alert",
					size: 13
				}), /* @__PURE__ */ jsx("span", { children: error })]
			})
		]
	});
}
function accountState(a, now) {
	if (a.disabled) return {
		text: "Off",
		tone: "off"
	};
	if (a.coolingUntil !== void 0 && a.coolingUntil > now) return {
		text: `Resumes in ${formatCountdown(a.coolingUntil - now)}`,
		tone: "warn",
		title: a.statusMessage
	};
	if (a.status === "error" || a.status === "unavailable") return {
		text: "Error",
		tone: "err",
		title: a.statusMessage
	};
	if (a.quota?.windows.some((w) => w.usedPercent >= 100) || a.quota?.notes.includes("Limit reached")) return {
		text: "Limit reached",
		tone: "warn"
	};
	return {
		text: "Active",
		tone: "ok",
		title: a.statusMessage
	};
}
function AccountRow(props) {
	const { Switch } = cursorHost().cursor.ui;
	const { account: a, now } = props;
	const [open, setOpen] = useState(false);
	const [confirm, setConfirm] = useState(false);
	const type = isAccountType(a.type) ? a.type : void 0;
	const state = accountState(a, now);
	const details = [
		type === void 0 ? a.type : ACCOUNT_TYPE_LABELS[type],
		a.plan,
		a.priority ? `priority ${a.priority}` : void 0,
		a.weight !== void 0 && a.weight !== 1 ? `weight ${a.weight}` : void 0,
		a.proxyUrl ? `via ${maskProxyUrl(a.proxyUrl)}` : void 0
	].filter(Boolean);
	const cooling = !a.disabled && a.coolingUntil !== void 0 && a.coolingUntil > now;
	return /* @__PURE__ */ jsxs("li", {
		className: "lm-sub-account",
		"data-off": a.disabled || void 0,
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "lm-sub-account-head",
				children: [
					/* @__PURE__ */ jsx(AccountAvatar, { type: a.type }),
					/* @__PURE__ */ jsxs("div", {
						className: "local-mode-card-title",
						children: [/* @__PURE__ */ jsx("span", {
							className: "lm-sub-account-name",
							title: a.name,
							children: a.email ?? a.name
						}), /* @__PURE__ */ jsx("span", {
							className: "local-mode-hint",
							children: details.join(" · ")
						})]
					}),
					cooling ? /* @__PURE__ */ jsx("button", {
						type: "button",
						className: "local-mode-link-button",
						title: "Clear the cooldown and send it requests again now",
						onClick: () => void props.onResume(),
						children: "Resume now"
					}) : null,
					/* @__PURE__ */ jsx("span", {
						className: "lm-sub-pill",
						"data-tone": state.tone,
						title: state.title,
						children: state.text
					}),
					/* @__PURE__ */ jsx(Switch, {
						checked: !a.disabled,
						onCheckedChange: (on) => void props.onUpdate({ disabled: !on })
					}),
					/* @__PURE__ */ jsx("button", {
						type: "button",
						className: "local-mode-icon-button lm-sub-expand",
						"aria-expanded": open,
						"aria-label": "Account settings",
						title: "Account settings",
						onClick: () => {
							setOpen(!open);
							setConfirm(false);
						},
						children: /* @__PURE__ */ jsx(Icon, {
							name: "chevron",
							size: 13
						})
					})
				]
			}),
			a.disabled ? null : /* @__PURE__ */ jsx(QuotaView, {
				quota: a.quota,
				busy: props.quotaBusy,
				error: props.quotaError,
				now,
				onRefresh: props.onQuota
			}),
			open ? /* @__PURE__ */ jsxs("div", {
				className: "lm-sub-account-settings",
				children: [
					/* @__PURE__ */ jsx(Field, {
						label: "Proxy",
						hint: "This account's requests, token refresh and usage checks go through it. Empty: the default proxy under Advanced, if any.",
						children: /* @__PURE__ */ jsx(ProxyField, {
							value: a.proxyUrl ?? "",
							saveLabel: "Save proxy",
							onSave: (proxyUrl) => props.onUpdate({ proxyUrl }),
							onTest: (proxyUrl) => props.onCheckProxy(proxyUrl, type ?? "claude")
						})
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "lm-sub-account-grid",
						children: [/* @__PURE__ */ jsx(Field, {
							label: "Priority",
							hint: "Higher serves first; lower ones only when every higher account can't.",
							children: /* @__PURE__ */ jsx(CommitInput, {
								value: String(a.priority ?? 0),
								label: "Priority",
								validate: (v) => /^-?\d{1,6}$/u.test(v) ? void 0 : "Use a whole number.",
								onCommit: (v) => void props.onUpdate({ priority: Number(v) })
							})
						}), /* @__PURE__ */ jsx(Field, {
							label: "Weight",
							hint: "Share of requests when selection is Weighted. 0 skips this account.",
							children: /* @__PURE__ */ jsx(CommitInput, {
								value: String(a.weight ?? 1),
								label: "Weight",
								validate: (v) => /^\d{1,7}$/u.test(v) && Number(v) <= 1e6 ? void 0 : "Use a whole number from 0 to 1000000.",
								onCommit: (v) => void props.onUpdate({ weight: Number(v) })
							})
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "local-mode-check-row lm-sub-account-footer",
						children: [/* @__PURE__ */ jsxs("span", {
							className: "local-mode-hint",
							children: [
								a.success.toLocaleString(),
								" requests served",
								a.failed > 0 ? `, ${a.failed.toLocaleString()} failed` : "",
								a.statusMessage ? ` · ${a.statusMessage}` : ""
							]
						}), /* @__PURE__ */ jsxs("button", {
							type: "button",
							className: "local-mode-link-button",
							"data-danger": true,
							onClick: () => confirm ? void props.onRemove() : setConfirm(true),
							children: [/* @__PURE__ */ jsx(Icon, {
								name: "trash",
								size: 12
							}), confirm ? "Click again to sign out" : "Sign out"]
						})]
					})
				]
			}) : null
		]
	});
}
/**
* Settings > Models > Custom Providers, built-in "Subscriptions" provider: the
* user's Claude Code, Codex and Grok accounts, served by the CLIProxyAPI
* sidecar. Account changes apply right away (they live in the sidecar); the
* provider's own fields go through the page's Save bar like any provider.
*/
function SubscriptionsCard(props) {
	const { useService, services, ui } = cursorHost().cursor;
	const { Switch } = ui;
	const inference = useService(services.localInference);
	const { provider: p, busy, check, onChange, onRemove, onFetch } = props;
	const { port, apiKey, strategy, proxyUrl, routing } = p;
	const client = useMemo(() => subscriptionsClient(inference, {
		port,
		apiKey,
		strategy,
		proxyUrl,
		routing
	}), [
		inference,
		port,
		apiKey,
		strategy,
		proxyUrl,
		routing
	]);
	const [status, setStatus] = useState(void 0);
	const [loading, setLoading] = useState(false);
	const [actionError, setActionError] = useState(void 0);
	const [quotaBusy, setQuotaBusy] = useState(/* @__PURE__ */ new Set());
	const [quotaErrors, setQuotaErrors] = useState(/* @__PURE__ */ new Map());
	const [now, setNow] = useState(Date.now());
	const [advanced, setAdvanced] = useState(false);
	const [showKey, setShowKey] = useState(false);
	const refresh = useCallback(async () => {
		setLoading(true);
		try {
			setStatus(await client.status());
		} catch (e) {
			setStatus({
				running: false,
				error: errorText(e),
				accounts: []
			});
		} finally {
			setLoading(false);
			setNow(Date.now());
		}
	}, [client]);
	useEffect(() => {
		const t = setTimeout(() => void refresh(), 250);
		return () => clearTimeout(t);
	}, [refresh]);
	useEffect(() => {
		const timer = setInterval(() => void refresh(), STATUS_REFRESH_MS);
		const onFocus = () => void refresh();
		window.addEventListener("focus", onFocus);
		return () => {
			clearInterval(timer);
			window.removeEventListener("focus", onFocus);
		};
	}, [refresh]);
	const loadQuota = useCallback(async (name) => {
		setQuotaBusy((s) => new Set(s).add(name));
		setQuotaErrors((m) => {
			const next = new Map(m);
			next.delete(name);
			return next;
		});
		try {
			const quota = await client.quota(name);
			setStatus((s) => s && {
				...s,
				accounts: s.accounts.map((a) => a.name === name ? {
					...a,
					quota,
					plan: quota.plan ?? a.plan
				} : a)
			});
		} catch (e) {
			setQuotaErrors((m) => new Map(m).set(name, errorText(e)));
		} finally {
			setQuotaBusy((s) => {
				const next = new Set(s);
				next.delete(name);
				return next;
			});
			setNow(Date.now());
		}
	}, [client]);
	const checked = useRef(/* @__PURE__ */ new Set());
	useEffect(() => {
		for (const a of status?.accounts ?? []) {
			const fresh = a.quota?.source === "usage" && Date.now() - a.quota.checkedAt < USAGE_FRESH_MS;
			if (!a.disabled && !fresh && !checked.current.has(a.name)) {
				checked.current.add(a.name);
				loadQuota(a.name);
			}
		}
	}, [status, loadQuota]);
	const act = async (fn) => {
		setActionError(void 0);
		try {
			setStatus(await fn());
		} catch (e) {
			setActionError(errorText(e));
		}
	};
	const onSignedIn = useCallback(() => {
		refresh();
		onFetch();
	}, [refresh, onFetch]);
	const accounts = status?.accounts ?? [];
	const models = p.models ?? [];
	const on = p.enabled !== false;
	const running = status?.running === true;
	let dataDir = "";
	try {
		dataDir = sidecarDataDir(userDataDir());
	} catch {}
	return /* @__PURE__ */ jsxs("div", {
		className: "local-mode-card",
		"data-off": !on || void 0,
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "local-mode-card-header",
				children: [
					/* @__PURE__ */ jsx(ProviderAvatar, {
						name: p.name,
						kind: "subscriptions"
					}),
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
							children: on ? `Claude Code, Codex and Grok · ${accounts.length} account(s) · ${models.filter((m) => m.enabled !== false).length} model(s) in the picker` : "Off: hidden from the model picker"
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
						title: "Remove provider (accounts stay signed in)",
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
					/* @__PURE__ */ jsxs("div", {
						className: "local-mode-block-header",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
							className: "local-mode-block-title",
							children: "Accounts"
						}), /* @__PURE__ */ jsx("div", {
							className: "local-mode-hint",
							children: status === void 0 ? "Starting CLIProxyAPI…" : running ? `Served by CLIProxyAPI${status.version ? ` ${status.version}` : ""} on 127.0.0.1:${port}. Requests count against each account's own plan.` : "CLIProxyAPI is not running."
						})] }), /* @__PURE__ */ jsxs("button", {
							type: "button",
							className: "local-mode-link-button",
							disabled: loading,
							onClick: () => void refresh(),
							children: [/* @__PURE__ */ jsx("span", {
								className: "local-mode-spin",
								"data-active": loading || void 0,
								children: /* @__PURE__ */ jsx(Icon, {
									name: "refresh",
									size: 13
								})
							}), "Refresh"]
						})]
					}),
					status !== void 0 && !running ? /* @__PURE__ */ jsxs("div", {
						className: "lm-sub-error",
						children: [/* @__PURE__ */ jsxs("span", {
							className: "local-mode-check",
							children: [/* @__PURE__ */ jsx(Icon, {
								name: "alert",
								size: 13
							}), /* @__PURE__ */ jsx("span", { children: status.error ?? "CLIProxyAPI is not running." })]
						}), /* @__PURE__ */ jsx("button", {
							type: "button",
							className: "local-mode-button",
							onClick: () => void refresh(),
							children: "Retry"
						})]
					}) : null,
					actionError === void 0 ? null : /* @__PURE__ */ jsxs("span", {
						className: "local-mode-check",
						children: [/* @__PURE__ */ jsx(Icon, {
							name: "alert",
							size: 13
						}), /* @__PURE__ */ jsx("span", { children: actionError })]
					}),
					accounts.length > 0 ? /* @__PURE__ */ jsx("ul", {
						className: "lm-sub-accounts",
						children: accounts.map((a) => /* @__PURE__ */ jsx(AccountRow, {
							account: a,
							now,
							quotaBusy: quotaBusy.has(a.name),
							quotaError: quotaErrors.get(a.name),
							onQuota: () => void loadQuota(a.name),
							onUpdate: (patch) => act(() => client.update(a.name, patch)),
							onRemove: () => act(() => client.remove(a.name)),
							onResume: () => act(() => client.resetCooldown(a.name)),
							onCheckProxy: (url, type) => client.checkProxy(url, type)
						}, a.name))
					}) : running ? /* @__PURE__ */ jsx("span", {
						className: "local-mode-hint",
						children: "No accounts yet. Sign in to use your subscription's models here; tokens stay on this machine."
					}) : null,
					/* @__PURE__ */ jsx(SubscriptionSignIn, {
						client,
						disabled: !running,
						onSignedIn
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
									", port ",
									port,
									", ",
									STRATEGY_LABELS[strategy ?? "round-robin"].label.toLowerCase(),
									routingSettings(routing).sessionAffinity ? ", sticky sessions" : "",
									proxyUrl ? ", default proxy" : ""
								]
							})
						]
					}),
					advanced ? /* @__PURE__ */ jsxs("div", {
						className: "local-mode-advanced",
						children: [
							/* @__PURE__ */ jsx(Field, {
								label: "Model prefix",
								hint: /* @__PURE__ */ jsxs(Fragment, { children: [
									"Picker IDs become ",
									/* @__PURE__ */ jsx("code", { children: `${p.prefix || "?"}/${models[0]?.id ?? "claude-opus-4-7"}` }),
									". Stripped before the request is sent."
								] }),
								children: /* @__PURE__ */ jsx("input", {
									value: p.prefix,
									spellCheck: false,
									className: "local-mode-input local-mode-mono",
									onChange: (e) => onChange({ prefix: e.target.value.trim() })
								})
							}),
							/* @__PURE__ */ jsx(Field, {
								label: "Account selection",
								hint: STRATEGY_LABELS[strategy ?? "round-robin"].hint,
								children: /* @__PURE__ */ jsx("div", {
									className: "local-mode-segmented local-mode-segmented-fill",
									children: Object.keys(STRATEGY_LABELS).map((s) => /* @__PURE__ */ jsx("button", {
										type: "button",
										"aria-pressed": (strategy ?? "round-robin") === s,
										"data-active": (strategy ?? "round-robin") === s || void 0,
										onClick: () => onChange({ strategy: s }),
										children: STRATEGY_LABELS[s].label
									}, s))
								})
							}),
							/* @__PURE__ */ jsx(RoutingFields, {
								routing,
								onChange: (patch) => onChange({ routing: {
									...routing,
									...patch
								} })
							}),
							/* @__PURE__ */ jsx(Field, {
								label: "Default proxy",
								hint: "Sign-in, token refresh and every account without its own proxy. Empty: direct.",
								children: /* @__PURE__ */ jsx(ProxyField, {
									value: proxyUrl ?? "",
									saveLabel: "Use proxy",
									onSave: (url) => onChange({ proxyUrl: url }),
									onTest: (url) => client.checkProxy(url, "claude")
								})
							}),
							/* @__PURE__ */ jsx(Field, {
								label: "Local port",
								hint: "CLIProxyAPI listens on 127.0.0.1 only.",
								children: /* @__PURE__ */ jsx(CommitInput, {
									value: String(port ?? ""),
									label: "Local port",
									validate: (v) => /^\d+$/u.test(v) && Number(v) >= 1024 && Number(v) <= 65535 ? void 0 : "Use a port from 1024 to 65535.",
									onCommit: (v) => onChange({ port: Number(v) })
								})
							}),
							/* @__PURE__ */ jsx(Field, {
								label: "Local API key",
								hint: /* @__PURE__ */ jsxs(Fragment, { children: [
									"Other apps on this machine can use the same endpoint with this key:",
									" ",
									/* @__PURE__ */ jsx("code", { children: `http://127.0.0.1:${port}/v1` }),
									". Data: ",
									/* @__PURE__ */ jsx("code", { children: dataDir || "?" })
								] }),
								children: /* @__PURE__ */ jsxs("span", {
									className: "local-mode-input-group",
									children: [/* @__PURE__ */ jsx("input", {
										readOnly: true,
										type: showKey ? "text" : "password",
										value: apiKey,
										"aria-label": "Local API key",
										className: "local-mode-input local-mode-mono"
									}), /* @__PURE__ */ jsx("button", {
										type: "button",
										className: "local-mode-icon-button",
										"aria-label": showKey ? "Hide key" : "Show key",
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
							})
						]
					}) : null
				]
			}),
			/* @__PURE__ */ jsx(ModelList, {
				prefix: p.prefix,
				models,
				busy,
				badge: modelBadge,
				emptyHint: "Sign in to an account, then fetch the models it can use.",
				note: check === void 0 ? null : /* @__PURE__ */ jsxs("span", {
					className: "local-mode-check",
					"data-ok": check.ok || void 0,
					children: [/* @__PURE__ */ jsx(Icon, {
						name: check.ok ? "check" : "alert",
						size: 13
					}), /* @__PURE__ */ jsx("span", { children: check.text })]
				}),
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
					kind: preset.kind,
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
		const existing = preset.kind === void 0 ? -1 : providers.findIndex((x) => x.kind === preset.kind);
		if (existing >= 0) {
			setSelected(existing);
			setAdding(false);
			return;
		}
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
			let listed;
			if (p.kind === "subscriptions") listed = await subscriptionsClient(inference, p).models();
			else listed = (await inference.fetchLocalProviderModels({
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
			const counts = `${listed.length} models${fresh > 0 && known.size > 0 ? `, ${fresh} new` : ""}`;
			setChecks((c) => new Map(c).set(i, p.kind === "subscriptions" ? listed.length === 0 ? {
				ok: false,
				text: "No models yet: sign in to an account first."
			} : {
				ok: true,
				text: `${counts} from your accounts${fresh > 0 ? ". Turn on the ones you want." : ""}`
			} : {
				ok: true,
				text: `Connected · ${counts} · ${ms} ms`
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
							kind: x.kind,
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
			}) : p?.kind === "subscriptions" ? /* @__PURE__ */ jsx(SubscriptionsCard, {
				provider: p,
				busy: busy === current,
				check: checks.get(current),
				onChange: (patch) => update(current, patch),
				onRemove: () => remove(current),
				onFetch: () => fetchModels(current)
			}, current) : p !== void 0 ? /* @__PURE__ */ jsx(ProviderCard, {
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
	records: load$2(),
	pending: /* @__PURE__ */ new Map(),
	listeners: /* @__PURE__ */ new Set()
};
var store$1 = globalThis.__cursorLocalModeUsage;
function load$2() {
	try {
		const value = JSON.parse(globalThis.localStorage?.getItem(STORAGE_KEY$1) ?? "{}");
		return Array.isArray(value?.records) ? value.records.filter((r) => typeof r === "object" && r !== null && typeof r.at === "number") : [];
	} catch {
		return [];
	}
}
function save$2() {
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
	save$2();
	notify$1();
}
/** Adds records directly (tests and the devtool's sample data). */
function addUsageRecords(records) {
	store$1.records = [...store$1.records, ...records].sort((a, b) => a.at - b.at).slice(-2e4);
	save$2();
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
			/* @__PURE__ */ jsxs(Row, {
				label: "Plan",
				children: ["Ultra ", /* @__PURE__ */ jsx("span", {
					className: "lm-dev-muted",
					children: "· local mode"
				})]
			}),
			/* @__PURE__ */ jsx(DevButton, {
				onClick: () => update({ signedIn: !account.signedIn }),
				children: account.signedIn ? "Sign out" : "Sign in locally"
			}),
			/* @__PURE__ */ jsx("p", {
				className: "lm-dev-note",
				children: "Local sign-in: stays on this machine, nothing is sent to Cursor."
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
	turns: load$1(),
	byConversation: /* @__PURE__ */ new Map(),
	toolArgs: /* @__PURE__ */ new Map(),
	listeners: /* @__PURE__ */ new Set(),
	notifyPending: false
};
var store = globalThis.__cursorLocalModeTurnStats;
store.toolArgs ??= /* @__PURE__ */ new Map();
function load$1() {
	try {
		const value = JSON.parse(globalThis.localStorage?.getItem(STORAGE_KEY) ?? "[]");
		return new Map(Array.isArray(value) ? value.filter((e) => Array.isArray(e) && typeof e[0] === "string" && e[1] && typeof e[1] === "object") : []);
	} catch {
		return /* @__PURE__ */ new Map();
	}
}
function save$1() {
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
			save$1();
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
var localMode_default = "/* --- Transcript ------------------------------------------------------------ */\n\n/* Models often open a reply with a newline, which renders as an empty line\n   under the work-group header. */\n.ui-markdown > * > br:first-child {\n	display: none;\n}\n\n/* Keep the live turn stats right after the tail status text instead of\n   pushed to the far end of the row. */\n.agent-transcript-tail-status:has(> [data-slot=\"local-turn-stats\"]) > :first-child {\n	flex: 0 1 auto;\n	width: auto;\n}\n\n.local-mode-turn-stats {\n	flex-shrink: 0;\n	margin-right: auto;\n	color: var(--cursor-text-quaternary);\n	font-variant-numeric: tabular-nums;\n	white-space: nowrap;\n}\n\n.local-mode-tabular {\n	font-variant-numeric: tabular-nums;\n}\n\n/* --- Settings > Models > Custom Providers ---------------------------------- */\n\n.local-mode-settings {\n	--lm-radius: 12px;\n	--lm-fg: var(--cursor-text-primary, var(--vscode-foreground));\n	--lm-fg-2: var(--cursor-text-secondary, var(--vscode-descriptionForeground));\n	--lm-fg-3: var(--cursor-text-tertiary, var(--vscode-descriptionForeground));\n	--lm-bg: var(--cursor-bg-quinary, var(--vscode-editorWidget-background));\n	--lm-bg-hover: var(--cursor-bg-quaternary, var(--vscode-list-hoverBackground));\n	--lm-bg-track: var(--cursor-bg-tertiary, var(--vscode-list-hoverBackground));\n	--lm-bg-raised: var(--cursor-bg-elevated, var(--vscode-input-background));\n	--lm-line: var(--cursor-stroke-secondary, var(--vscode-widget-border, rgba(128, 128, 128, 0.2)));\n	--lm-line-2: var(--cursor-stroke-tertiary, rgba(128, 128, 128, 0.12));\n	--lm-focus: var(--cursor-stroke-focused, var(--vscode-focusBorder));\n	--lm-ok: var(--cursor-text-green-primary, var(--vscode-testing-iconPassed));\n	--lm-err: var(--cursor-text-red-primary, var(--vscode-errorForeground));\n	display: flex;\n	flex-direction: column;\n	gap: 12px;\n	color: var(--lm-fg);\n	font-size: 13px;\n}\n\n.local-mode-settings :where(button) {\n	font: inherit;\n	color: inherit;\n	cursor: pointer;\n}\n\n.local-mode-settings :where(button:disabled) {\n	cursor: default;\n	opacity: 0.5;\n}\n\n.local-mode-icon {\n	flex-shrink: 0;\n	display: block;\n}\n\n.local-mode-hint {\n	display: block;\n	font-size: 12px;\n	line-height: 1.45;\n	color: var(--lm-fg-3);\n}\n\n.local-mode-hint code {\n	padding: 0 4px;\n	border-radius: 4px;\n	background: var(--lm-bg-hover);\n	font-family: var(--monaco-monospace-font);\n	font-size: 11.5px;\n	color: var(--lm-fg-2);\n}\n\n.local-mode-count {\n	margin-left: 6px;\n	font-size: 11px;\n	font-variant-numeric: tabular-nums;\n	color: var(--lm-fg-3);\n}\n\n/* Provider tabs */\n\n.local-mode-tabs {\n	display: flex;\n	flex-wrap: wrap;\n	gap: 6px;\n}\n\n.local-mode-tab {\n	display: inline-flex;\n	align-items: center;\n	gap: 7px;\n	height: 30px;\n	max-width: 220px;\n	padding: 0 10px 0 5px;\n	border: 1px solid var(--lm-line-2);\n	border-radius: 8px;\n	background: transparent;\n	transition:\n		background-color 0.12s,\n		border-color 0.12s;\n}\n\n.local-mode-tab:hover {\n	background: var(--lm-bg-hover);\n}\n\n.local-mode-tab[data-active] {\n	background: var(--lm-bg-raised);\n	border-color: var(--lm-line);\n	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n\n.local-mode-tab[data-off] .local-mode-tab-name {\n	color: var(--lm-fg-3);\n	text-decoration: line-through;\n	text-decoration-color: var(--lm-line);\n}\n\n.local-mode-tab-name {\n	overflow: hidden;\n	text-overflow: ellipsis;\n	white-space: nowrap;\n	font-weight: 500;\n}\n\n.local-mode-tab .local-mode-count {\n	margin-left: 0;\n}\n\n.local-mode-tab-add {\n	padding-left: 9px;\n	border-style: dashed;\n	color: var(--lm-fg-2);\n}\n\n/* Avatar */\n\n.local-mode-avatar {\n	--hue: var(--cursor-blue, #3b82f6);\n	flex-shrink: 0;\n	display: inline-grid;\n	place-items: center;\n	width: 32px;\n	height: 32px;\n	border-radius: 8px;\n	font-weight: 600;\n	font-size: 14px;\n	color: var(--hue);\n	background: color-mix(in srgb, var(--hue) 16%, transparent);\n}\n\n.local-mode-avatar[data-size=\"sm\"] {\n	width: 20px;\n	height: 20px;\n	border-radius: 5px;\n	font-size: 11px;\n}\n\n.local-mode-avatar[data-hue=\"purple\"] {\n	--hue: var(--cursor-purple, #8b5cf6);\n}\n.local-mode-avatar[data-hue=\"orange\"] {\n	--hue: var(--cursor-orange, #f97316);\n}\n.local-mode-avatar[data-hue=\"green\"] {\n	--hue: var(--cursor-green, #22c55e);\n}\n.local-mode-avatar[data-hue=\"cyan\"] {\n	--hue: var(--cursor-cyan, #06b6d4);\n}\n.local-mode-avatar[data-hue=\"magenta\"] {\n	--hue: var(--cursor-magenta, #d946ef);\n}\n\n/* Subscriptions > Advanced: one setting per row, control on the right. */\n.lm-sub-settings {\n	display: flex;\n	flex-direction: column;\n	gap: 2px;\n	padding: 4px 0;\n}\n\n.lm-sub-setting {\n	display: grid;\n	grid-template-columns: minmax(0, 1fr) auto;\n	align-items: center;\n	gap: 16px;\n	padding: 7px 0;\n	border-top: 1px solid var(--lm-line-2);\n}\n\n.lm-sub-setting:first-child {\n	border-top: none;\n}\n\n.lm-sub-setting-text {\n	display: flex;\n	flex-direction: column;\n	gap: 2px;\n	min-width: 0;\n}\n\n.lm-sub-setting-label {\n	font-size: 12.5px;\n	font-weight: 500;\n}\n\n.lm-sub-setting-control {\n	display: flex;\n	align-items: center;\n	justify-content: flex-end;\n}\n\n.lm-sub-account-grid {\n	display: grid;\n	grid-template-columns: 1fr 1fr;\n	gap: 12px;\n}\n\n/* Brand marks: Claude in its clay orange, Codex and Grok in the text color. */\n.local-mode-avatar[data-brand=\"claude\"] {\n	--hue: #d97757;\n}\n.local-mode-avatar[data-brand=\"codex\"],\n.local-mode-avatar[data-brand=\"xai\"] {\n	--hue: var(--lm-fg, currentColor);\n	background: color-mix(in srgb, var(--hue) 9%, transparent);\n}\n\n/* Subscriptions: the three marks overlapped on one tile. */\n.lm-sub-avatar {\n	--ring: var(--lm-bg-raised, var(--vscode-input-background));\n	--mark: 15px;\n	position: relative;\n	flex-shrink: 0;\n	width: 32px;\n	height: 32px;\n	border-radius: 8px;\n	background: var(--ring);\n	box-shadow: inset 0 0 0 1px var(--lm-line-2, rgba(128, 128, 128, 0.12));\n}\n\n.lm-sub-avatar[data-size=\"sm\"] {\n	--mark: 10px;\n	width: 20px;\n	height: 20px;\n	border-radius: 5px;\n}\n\n.lm-sub-avatar-mark {\n	position: absolute;\n	display: grid;\n	place-items: center;\n	width: var(--mark);\n	height: var(--mark);\n	border-radius: 50%;\n	color: var(--ring);\n	background: var(--lm-fg, currentColor);\n	box-shadow: 0 0 0 1.5px var(--ring);\n}\n\n.lm-sub-avatar-mark[data-brand=\"claude\"] {\n	z-index: 1;\n	top: 3px;\n	left: calc(50% - var(--mark) / 2);\n	color: #fff;\n	background: #d97757;\n}\n.lm-sub-avatar-mark[data-brand=\"codex\"] {\n	bottom: 3px;\n	left: 3px;\n}\n.lm-sub-avatar-mark[data-brand=\"xai\"] {\n	bottom: 3px;\n	right: 3px;\n}\n\n.lm-sub-avatar[data-size=\"sm\"] .lm-sub-avatar-mark {\n	box-shadow: 0 0 0 1px var(--ring);\n}\n.lm-sub-avatar[data-size=\"sm\"] .lm-sub-avatar-mark[data-brand=\"claude\"] {\n	top: 1.5px;\n}\n.lm-sub-avatar[data-size=\"sm\"] .lm-sub-avatar-mark:not([data-brand=\"claude\"]) {\n	bottom: 1.5px;\n}\n.lm-sub-avatar[data-size=\"sm\"] .lm-sub-avatar-mark[data-brand=\"codex\"] {\n	left: 1.5px;\n}\n.lm-sub-avatar[data-size=\"sm\"] .lm-sub-avatar-mark[data-brand=\"xai\"] {\n	right: 1.5px;\n}\n\n/* Card */\n\n.local-mode-card {\n	display: flex;\n	flex-direction: column;\n	border-radius: var(--lm-radius);\n	background: var(--lm-bg);\n}\n\n.local-mode-card > * + * {\n	border-top: 1px solid var(--lm-line-2);\n}\n\n.local-mode-card-header {\n	display: flex;\n	align-items: center;\n	gap: 12px;\n	padding: 14px 16px;\n}\n\n.local-mode-card[data-off] .local-mode-block {\n	opacity: 0.55;\n}\n\n.local-mode-card-title {\n	flex: 1 1 auto;\n	min-width: 0;\n	display: flex;\n	flex-direction: column;\n	gap: 1px;\n}\n\n.local-mode-title-input {\n	width: 100%;\n	margin-left: -4px;\n	padding: 1px 4px;\n	border: 1px solid transparent;\n	border-radius: 5px;\n	background: transparent;\n	color: var(--lm-fg);\n	font: inherit;\n	font-size: 14px;\n	font-weight: 600;\n	outline: none;\n}\n\n.local-mode-title-input:hover {\n	border-color: var(--lm-line-2);\n}\n\n.local-mode-title-input:focus {\n	border-color: var(--lm-focus);\n	background: var(--lm-bg-raised);\n}\n\n.local-mode-block {\n	display: flex;\n	flex-direction: column;\n	gap: 12px;\n	padding: 14px 16px 16px;\n}\n\n.local-mode-block-header {\n	display: flex;\n	align-items: flex-start;\n	justify-content: space-between;\n	gap: 12px;\n}\n\n.local-mode-block-title {\n	font-size: 11px;\n	font-weight: 600;\n	letter-spacing: 0.04em;\n	text-transform: uppercase;\n	color: var(--lm-fg-3);\n}\n\n.local-mode-block-header .local-mode-hint {\n	margin-top: 3px;\n}\n\n/* Fields */\n\n.local-mode-field {\n	display: flex;\n	flex-direction: column;\n	gap: 5px;\n}\n\n.local-mode-field-label {\n	font-size: 12px;\n	font-weight: 500;\n	color: var(--lm-fg-2);\n}\n\n.local-mode-input {\n	width: 100%;\n	box-sizing: border-box;\n	height: 30px;\n	padding: 0 10px;\n	font: inherit;\n	font-size: 13px;\n	color: var(--vscode-input-foreground, var(--lm-fg));\n	background: var(--lm-bg-raised);\n	border: 1px solid var(--lm-line);\n	border-radius: 7px;\n	outline: none;\n	transition:\n		border-color 0.12s,\n		box-shadow 0.12s;\n}\n\n.local-mode-input:focus {\n	border-color: var(--lm-focus);\n	box-shadow: 0 0 0 3px color-mix(in srgb, var(--lm-focus) 18%, transparent);\n}\n\n.local-mode-input::placeholder,\n.local-mode-settings input::placeholder,\n.local-mode-settings textarea::placeholder {\n	color: var(--lm-fg-3);\n	opacity: 0.8;\n}\n\n.local-mode-mono {\n	font-family: var(--monaco-monospace-font);\n	font-size: 12px;\n}\n\n.local-mode-textarea {\n	height: auto;\n	padding: 6px 10px;\n	resize: vertical;\n}\n\n.local-mode-input-group {\n	position: relative;\n	display: block;\n}\n\n.local-mode-input-group .local-mode-input {\n	padding-right: 36px;\n}\n\n.local-mode-input-group .local-mode-icon-button {\n	position: absolute;\n	top: 3px;\n	right: 3px;\n}\n\n/* Buttons */\n\n.local-mode-icon-button {\n	display: inline-grid;\n	place-items: center;\n	width: 24px;\n	height: 24px;\n	padding: 0;\n	border: none;\n	border-radius: 6px;\n	background: transparent;\n	color: var(--lm-fg-3);\n}\n\n.local-mode-icon-button:hover {\n	background: var(--lm-bg-hover);\n	color: var(--lm-fg);\n}\n\n.local-mode-button {\n	flex-shrink: 0;\n	height: 28px;\n	padding: 0 12px;\n	border: 1px solid var(--lm-line);\n	border-radius: 7px;\n	background: var(--lm-bg-raised);\n	font-weight: 500;\n}\n\n.local-mode-button:not(:disabled):hover {\n	background: var(--lm-bg-hover);\n}\n\n.local-mode-link-button {\n	display: inline-flex;\n	align-items: center;\n	gap: 5px;\n	height: 24px;\n	padding: 0 6px;\n	border: none;\n	border-radius: 6px;\n	background: transparent;\n	font-size: 12px;\n	color: var(--lm-fg-2);\n	white-space: nowrap;\n}\n\n.local-mode-link-button:not(:disabled):hover {\n	background: var(--lm-bg-hover);\n	color: var(--lm-fg);\n}\n\n.local-mode-spin[data-active] .local-mode-icon {\n	animation: local-mode-spin 0.9s linear infinite;\n}\n\n@keyframes local-mode-spin {\n	to {\n		transform: rotate(360deg);\n	}\n}\n\n/* Segmented control */\n\n.local-mode-segmented {\n	display: inline-flex;\n	padding: 2px;\n	gap: 2px;\n	border-radius: 8px;\n	background: var(--lm-bg-track);\n}\n\n.local-mode-segmented button {\n	height: 24px;\n	padding: 0 10px;\n	border: none;\n	border-radius: 6px;\n	background: transparent;\n	font-size: 12px;\n	color: var(--lm-fg-2);\n	white-space: nowrap;\n}\n\n.local-mode-segmented button[data-active] {\n	background: var(--lm-bg-raised);\n	color: var(--lm-fg);\n	font-weight: 500;\n	box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n}\n\n.local-mode-segmented-fill {\n	display: flex;\n}\n\n.local-mode-segmented-fill button {\n	flex: 1 1 0;\n	height: 26px;\n}\n\n/* Connection check */\n\n.local-mode-check-row {\n	display: flex;\n	align-items: center;\n	gap: 10px;\n	min-height: 28px;\n}\n\n.local-mode-check {\n	display: inline-flex;\n	align-items: flex-start;\n	gap: 6px;\n	min-width: 0;\n	font-size: 12px;\n	line-height: 1.45;\n	color: var(--lm-err);\n	overflow-wrap: anywhere;\n}\n\n.local-mode-check .local-mode-icon {\n	margin-top: 2px;\n}\n\n.local-mode-check[data-ok] {\n	color: var(--lm-ok);\n}\n\n.local-mode-disclosure {\n	display: inline-flex;\n	align-items: center;\n	align-self: flex-start;\n	gap: 6px;\n	margin-left: -6px;\n	padding: 3px 6px;\n	border: none;\n	border-radius: 6px;\n	background: transparent;\n	font-size: 12px;\n	font-weight: 500;\n	color: var(--lm-fg-2);\n}\n\n.local-mode-disclosure:hover {\n	background: var(--lm-bg-hover);\n}\n\n.local-mode-disclosure .local-mode-icon {\n	transition: transform 0.15s;\n}\n\n.local-mode-disclosure[aria-expanded=\"true\"] .local-mode-icon {\n	transform: rotate(90deg);\n}\n\n.local-mode-disclosure .local-mode-hint {\n	font-weight: 400;\n}\n\n.local-mode-advanced {\n	display: flex;\n	flex-direction: column;\n	gap: 12px;\n	padding-left: 12px;\n	border-left: 2px solid var(--lm-line-2);\n}\n\n/* Models */\n\n.local-mode-model-toolbar {\n	display: flex;\n	align-items: center;\n	gap: 8px;\n}\n\n.local-mode-search {\n	flex: 1 1 auto;\n	display: flex;\n	align-items: center;\n	gap: 6px;\n	height: 28px;\n	padding: 0 8px;\n	border: 1px solid var(--lm-line);\n	border-radius: 7px;\n	background: var(--lm-bg-raised);\n	color: var(--lm-fg-3);\n}\n\n.local-mode-search:focus-within {\n	border-color: var(--lm-focus);\n}\n\n.local-mode-search input,\n.local-mode-add-model input {\n	flex: 1 1 auto;\n	min-width: 0;\n	padding: 0;\n	border: none;\n	outline: none;\n	background: transparent;\n	font: inherit;\n	font-size: 12.5px;\n	color: var(--lm-fg);\n}\n\n.local-mode-search button {\n	display: grid;\n	place-items: center;\n	padding: 2px;\n	border: none;\n	border-radius: 4px;\n	background: transparent;\n}\n\n.local-mode-model-list {\n	list-style: none;\n	max-height: 360px;\n	overflow-y: auto;\n	margin: 0 -6px;\n	padding: 0 6px;\n}\n\n.local-mode-model-row {\n	display: flex;\n	align-items: center;\n	gap: 10px;\n	height: 34px;\n	margin: 0 -6px;\n	padding: 0 6px;\n	border-radius: 7px;\n}\n\n.local-mode-model-row:hover {\n	background: var(--lm-bg-hover);\n}\n\n.local-mode-model-name {\n	flex: 1 1 auto;\n	min-width: 0;\n	overflow: hidden;\n	text-overflow: ellipsis;\n	white-space: nowrap;\n	font-family: var(--monaco-monospace-font);\n	font-size: 12.5px;\n}\n\n.local-mode-model-row[data-off] .local-mode-model-name {\n	color: var(--lm-fg-3);\n}\n\n.local-mode-row-action {\n	opacity: 0;\n}\n\n.local-mode-model-row:hover .local-mode-row-action,\n.local-mode-row-action:focus-visible {\n	opacity: 1;\n}\n\n.local-mode-context-chip,\n.local-mode-context-input {\n	box-sizing: border-box;\n	width: 64px;\n	height: 22px;\n	padding: 0 8px;\n	border-radius: 11px;\n	font-size: 11.5px;\n	font-variant-numeric: tabular-nums;\n	text-align: center;\n}\n\n.local-mode-context-chip {\n	border: 1px solid var(--lm-line);\n	background: var(--lm-bg-raised);\n	color: var(--lm-fg-2);\n}\n\n.local-mode-context-chip[data-auto] {\n	border-color: transparent;\n	background: transparent;\n	color: var(--lm-fg-3);\n}\n\n.local-mode-context-chip:hover {\n	border-color: var(--lm-line);\n	color: var(--lm-fg);\n}\n\n.local-mode-context-input {\n	border: 1px solid var(--lm-focus);\n	outline: none;\n	background: var(--lm-bg-raised);\n	color: var(--lm-fg);\n	font-family: inherit;\n}\n\n.local-mode-context-input[aria-invalid=\"true\"] {\n	border-color: var(--lm-err);\n	color: var(--lm-err);\n}\n\n.local-mode-empty-row {\n	padding: 14px 0;\n	text-align: center;\n	font-size: 12px;\n	color: var(--lm-fg-3);\n}\n\n.local-mode-model-footer {\n	display: flex;\n	align-items: center;\n	gap: 8px;\n}\n\n.local-mode-add-model {\n	flex: 1 1 auto;\n	display: flex;\n	align-items: center;\n	gap: 8px;\n	height: 28px;\n	padding: 0 8px;\n	border: 1px dashed var(--lm-line);\n	border-radius: 7px;\n	color: var(--lm-fg-3);\n}\n\n.local-mode-add-model:focus-within {\n	border-style: solid;\n	border-color: var(--lm-focus);\n}\n\n.local-mode-bulk {\n	display: flex;\n	gap: 2px;\n}\n\n/* Presets and empty state */\n\n.local-mode-presets {\n	display: flex;\n	flex-direction: column;\n	gap: 12px;\n	padding: 14px 16px 16px;\n}\n\n.local-mode-empty {\n	gap: 4px;\n	padding: 28px 24px;\n	align-items: stretch;\n	text-align: center;\n}\n\n.local-mode-empty > * + * {\n	border-top: none;\n}\n\n.local-mode-empty-title {\n	font-size: 15px;\n	font-weight: 600;\n}\n\n.local-mode-empty .local-mode-presets .local-mode-block-header {\n	display: none;\n}\n\n.local-mode-preset-grid {\n	display: grid;\n	grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));\n	gap: 8px;\n}\n\n.local-mode-preset {\n	display: flex;\n	align-items: center;\n	gap: 10px;\n	padding: 10px 12px;\n	border: 1px solid var(--lm-line-2);\n	border-radius: 8px;\n	background: var(--lm-bg-raised);\n	text-align: left;\n	transition:\n		border-color 0.12s,\n		transform 0.12s;\n}\n\n.local-mode-preset:hover {\n	border-color: var(--lm-focus);\n}\n\n.local-mode-preset .lm-sub-avatar {\n	--mark: 13px;\n	width: 28px;\n	height: 28px;\n	border-radius: 7px;\n}\n\n.local-mode-preset .local-mode-avatar {\n	width: 28px;\n	height: 28px;\n	border-radius: 7px;\n	font-size: 13px;\n}\n\n.local-mode-preset-name {\n	display: block;\n	font-weight: 500;\n}\n\n/* Save bar */\n\n.local-mode-savebar {\n	position: sticky;\n	bottom: 12px;\n	z-index: 2;\n	display: flex;\n	align-items: center;\n	gap: 12px;\n	min-height: 40px;\n	padding: 6px 6px 6px 14px;\n	border: 1px solid var(--lm-line);\n	border-radius: var(--lm-radius);\n	background: var(--lm-bg-raised);\n	box-shadow: 0 6px 24px rgba(0, 0, 0, 0.12);\n	animation: local-mode-rise 0.16s ease-out;\n}\n\n.local-mode-savebar-text {\n	flex: 1 1 auto;\n	display: flex;\n	align-items: center;\n	gap: 7px;\n	font-size: 12.5px;\n	color: var(--lm-fg-2);\n}\n\n.local-mode-savebar[data-error] .local-mode-savebar-text {\n	color: var(--lm-err);\n}\n\n.local-mode-savebar-actions {\n	display: flex;\n	gap: 6px;\n}\n\n@keyframes local-mode-rise {\n	from {\n		opacity: 0;\n		transform: translateY(6px);\n	}\n}\n\n/* Subscriptions provider (Claude Code, Codex, Grok accounts) */\n\n.lm-model-badge {\n	flex-shrink: 0;\n	padding: 0 6px;\n	border-radius: 9px;\n	font-size: 10.5px;\n	line-height: 17px;\n	color: var(--lm-fg-3);\n	background: var(--lm-bg-hover);\n}\n\n.lm-sub-accounts {\n	display: flex;\n	flex-direction: column;\n	gap: 8px;\n	margin: 0;\n	padding: 0;\n	list-style: none;\n}\n\n.lm-sub-account {\n	display: flex;\n	flex-direction: column;\n	gap: 10px;\n	padding: 12px;\n	border: 1px solid var(--lm-line-2);\n	border-radius: 10px;\n	background: var(--lm-bg-raised);\n}\n\n.lm-sub-account[data-off] .lm-sub-account-name {\n	color: var(--lm-fg-3);\n}\n\n.lm-sub-account-head {\n	display: flex;\n	align-items: center;\n	gap: 10px;\n}\n\n.lm-sub-account-name {\n	overflow: hidden;\n	text-overflow: ellipsis;\n	white-space: nowrap;\n	font-weight: 500;\n}\n\n.lm-sub-expand .local-mode-icon {\n	transform: rotate(90deg);\n	transition: transform 0.12s;\n}\n\n.lm-sub-expand[aria-expanded=\"true\"] .local-mode-icon {\n	transform: rotate(-90deg);\n}\n\n.lm-sub-pill {\n	flex-shrink: 0;\n	padding: 1px 8px;\n	border-radius: 10px;\n	font-size: 11px;\n	font-weight: 500;\n	white-space: nowrap;\n	color: var(--lm-fg-2);\n	background: var(--lm-bg-hover);\n}\n\n.lm-sub-pill[data-tone=\"ok\"] {\n	color: var(--lm-ok);\n	background: color-mix(in srgb, var(--lm-ok) 12%, transparent);\n}\n\n.lm-sub-pill[data-tone=\"warn\"] {\n	color: var(--cursor-text-yellow-primary, #ca8a04);\n	background: color-mix(in srgb, var(--cursor-text-yellow-primary, #ca8a04) 12%, transparent);\n}\n\n.lm-sub-pill[data-tone=\"err\"] {\n	color: var(--lm-err);\n	background: color-mix(in srgb, var(--lm-err) 12%, transparent);\n}\n\n.lm-sub-quota {\n	display: flex;\n	flex-direction: column;\n	gap: 6px;\n	padding-left: 42px;\n}\n\n.lm-sub-quota-row {\n	--lm-quota: var(--lm-ok);\n	display: grid;\n	grid-template-columns: 110px minmax(60px, 1fr) 64px 110px;\n	align-items: center;\n	gap: 10px;\n	font-size: 12px;\n}\n\n.lm-sub-quota-row[data-level=\"mid\"] {\n	--lm-quota: var(--cursor-text-yellow-primary, #ca8a04);\n}\n\n.lm-sub-quota-row[data-level=\"low\"] {\n	--lm-quota: var(--lm-err);\n}\n\n.lm-sub-quota-label {\n	overflow: hidden;\n	text-overflow: ellipsis;\n	white-space: nowrap;\n	color: var(--lm-fg-2);\n}\n\n.lm-sub-quota-bar {\n	height: 6px;\n	border-radius: 3px;\n	overflow: hidden;\n	background: var(--lm-bg-track);\n}\n\n.lm-sub-quota-bar > span {\n	display: block;\n	height: 100%;\n	border-radius: 3px;\n	background: var(--lm-quota);\n	transition: width 0.3s;\n}\n\n.lm-sub-quota-value {\n	text-align: right;\n	font-variant-numeric: tabular-nums;\n}\n\n.lm-sub-quota-reset {\n	color: var(--lm-fg-3);\n	font-variant-numeric: tabular-nums;\n	white-space: nowrap;\n}\n\n.lm-sub-quota-footer {\n	display: flex;\n	align-items: center;\n	justify-content: space-between;\n	gap: 8px;\n}\n\n.lm-sub-account-settings {\n	display: flex;\n	flex-direction: column;\n	gap: 10px;\n	padding: 10px 0 0 42px;\n	border-top: 1px solid var(--lm-line-2);\n}\n\n.lm-sub-account-footer {\n	justify-content: space-between;\n}\n\n.lm-sub-proxy {\n	display: flex;\n	flex-direction: column;\n	gap: 6px;\n}\n\n.lm-sub-inline {\n	display: flex;\n	gap: 6px;\n}\n\n.lm-sub-inline .local-mode-button {\n	height: 30px;\n}\n\n.lm-sub-error {\n	display: flex;\n	align-items: flex-start;\n	justify-content: space-between;\n	gap: 10px;\n	padding: 10px 12px;\n	border-radius: 8px;\n	background: color-mix(in srgb, var(--lm-err) 8%, transparent);\n	white-space: pre-wrap;\n}\n\n.lm-sub-add {\n	display: flex;\n	flex-direction: column;\n	gap: 8px;\n}\n\n.lm-sub-add-grid {\n	display: grid;\n	grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));\n	gap: 8px;\n}\n\n.lm-sub-signin {\n	display: flex;\n	flex-direction: column;\n	gap: 10px;\n	padding: 12px;\n	border: 1px solid var(--lm-focus);\n	border-radius: 10px;\n	background: var(--lm-bg-raised);\n}\n\n.lm-sub-signin[data-error] {\n	border-color: var(--lm-line);\n}\n\n.lm-sub-signin-title {\n	display: flex;\n	align-items: center;\n	gap: 8px;\n	font-weight: 600;\n}\n\n.lm-sub-link {\n	display: flex;\n	align-items: center;\n	gap: 4px;\n	padding: 4px 4px 4px 10px;\n	border-radius: 7px;\n	background: var(--lm-bg-hover);\n}\n\n.lm-sub-link-url {\n	flex: 1 1 auto;\n	min-width: 0;\n	overflow: hidden;\n	text-overflow: ellipsis;\n	white-space: nowrap;\n	font-family: var(--monaco-monospace-font);\n	font-size: 11.5px;\n	color: var(--lm-fg-2);\n}\n\n.lm-sub-link a.local-mode-link-button {\n	text-decoration: none;\n}\n\n.lm-sub-device {\n	display: flex;\n	align-items: center;\n	flex-wrap: wrap;\n	gap: 10px;\n}\n\n.lm-sub-code {\n	padding: 4px 12px;\n	border-radius: 7px;\n	background: var(--lm-bg-hover);\n	font-family: var(--monaco-monospace-font);\n	font-size: 16px;\n	font-weight: 600;\n	letter-spacing: 0.12em;\n}\n\n.lm-sub-paste {\n	display: flex;\n	gap: 6px;\n}\n\n.lm-sub-paste .local-mode-button {\n	height: 30px;\n}\n\n/* --- Settings > Usage ------------------------------------------------------ */\n\n.lm-usage {\n	--lm-input: rgb(14 165 233 / 0.85);\n	--lm-heat: var(--cursor-green, #22c55e);\n}\n\n.lm-muted {\n	font-size: 12px;\n	color: var(--lm-fg-3);\n	font-variant-numeric: tabular-nums;\n}\n\n.lm-spacer {\n	flex: 1 1 auto;\n}\n\n.lm-toolbar {\n	display: flex;\n	flex-wrap: wrap;\n	align-items: center;\n	gap: 8px;\n}\n\n.lm-select {\n	position: relative;\n	display: inline-flex;\n	align-items: center;\n	gap: 6px;\n	height: 28px;\n	padding: 0 8px;\n	border: 1px solid var(--lm-line);\n	border-radius: 7px;\n	background: var(--lm-bg-raised);\n}\n\n.lm-select select {\n	appearance: none;\n	padding: 0 14px 0 0;\n	border: none;\n	outline: none;\n	background: transparent;\n	font: inherit;\n	font-size: 12.5px;\n	color: var(--lm-fg);\n	cursor: pointer;\n}\n\n.lm-select > .local-mode-icon {\n	position: absolute;\n	right: 7px;\n	transform: rotate(90deg);\n	color: var(--lm-fg-3);\n	pointer-events: none;\n}\n\n/* Stat cards */\n\n.lm-stats {\n	display: grid;\n	grid-template-columns: repeat(4, minmax(0, 1fr));\n	gap: 8px;\n}\n\n.lm-stat {\n	display: flex;\n	flex-direction: column;\n	gap: 2px;\n	min-width: 0;\n	padding: 12px 14px;\n	border-radius: var(--lm-radius);\n	background: var(--lm-bg);\n}\n\n.lm-stat-label {\n	font-size: 12px;\n	color: var(--lm-fg-3);\n}\n\n.lm-stat-value {\n	font-size: 22px;\n	font-weight: 600;\n	letter-spacing: -0.01em;\n	font-variant-numeric: tabular-nums;\n}\n\n.lm-stat-sub {\n	font-size: 11.5px;\n	line-height: 1.35;\n	color: var(--lm-fg-3);\n}\n\n/* Panels */\n\n.lm-panel-header {\n	display: flex;\n	align-items: center;\n	justify-content: space-between;\n	gap: 12px;\n	padding: 12px 16px 0;\n}\n\n.local-mode-card > .lm-panel-body {\n	display: flex;\n	flex-direction: column;\n	gap: 14px;\n	padding: 12px 16px 16px;\n	border-top: none;\n}\n\n/* Daily chart */\n\n.lm-daily {\n	display: flex;\n	flex-direction: column;\n	gap: 6px;\n}\n\n.lm-daily-readout {\n	display: flex;\n	flex-wrap: wrap;\n	align-items: center;\n	gap: 4px 12px;\n	min-height: 20px;\n	font-size: 12px;\n	font-variant-numeric: tabular-nums;\n}\n\n.lm-daily-bars {\n	display: flex;\n	align-items: flex-end;\n	gap: 2px;\n	height: 140px;\n	padding-bottom: 1px;\n	border-bottom: 1px solid var(--lm-line);\n	background-image: linear-gradient(to top, var(--lm-line-2) 1px, transparent 1px);\n	background-size: 100% 25%;\n}\n\n.lm-daily-col {\n	flex: 1 1 0;\n	display: flex;\n	align-items: flex-end;\n	height: 100%;\n	min-width: 0;\n	border-radius: 3px 3px 0 0;\n}\n\n.lm-daily-col[data-hover] {\n	background: var(--lm-bg-hover);\n}\n\n.lm-daily-stack {\n	display: flex;\n	flex-direction: column-reverse;\n	width: 100%;\n	min-height: 0;\n	overflow: hidden;\n	border-radius: 3px 3px 0 0;\n}\n\n.lm-daily-stack > span {\n	flex-basis: 0;\n	min-height: 1px;\n}\n\n.lm-daily-axis {\n	display: flex;\n	gap: 2px;\n}\n\n.lm-daily-axis > span {\n	flex: 1 1 0;\n	min-width: 0;\n	overflow: visible;\n	white-space: nowrap;\n	font-size: 10.5px;\n	color: var(--lm-fg-3);\n	font-variant-numeric: tabular-nums;\n}\n\n/* Token mix */\n\n.lm-mix {\n	display: flex;\n	flex-direction: column;\n	gap: 8px;\n}\n\n.lm-mix-bar {\n	display: flex;\n	gap: 2px;\n	height: 8px;\n	overflow: hidden;\n	border-radius: 4px;\n	background: var(--lm-bg-hover);\n}\n\n.lm-mix-bar > span {\n	flex-basis: 0;\n}\n\n.lm-legend {\n	display: flex;\n	flex-wrap: wrap;\n	gap: 4px 16px;\n}\n\n.lm-legend-item {\n	display: inline-flex;\n	align-items: center;\n	gap: 6px;\n	font-size: 12px;\n	color: var(--lm-fg-2);\n	font-variant-numeric: tabular-nums;\n}\n\n.lm-legend-item i {\n	width: 8px;\n	height: 8px;\n	border-radius: 2px;\n}\n\n.lm-legend-item b {\n	font-weight: 600;\n	color: var(--lm-fg);\n}\n\n/* Provider tiles */\n\n.lm-tiles {\n	display: grid;\n	grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));\n	gap: 8px;\n}\n\n.lm-tile {\n	display: flex;\n	flex-direction: column;\n	align-items: stretch;\n	gap: 4px;\n	min-width: 0;\n	padding: 10px 12px 12px;\n	border: 1px solid var(--lm-line-2);\n	border-radius: 9px;\n	background: var(--lm-bg-raised);\n	text-align: left;\n	transition: border-color 0.12s;\n}\n\n.lm-tile:hover,\n.lm-tile[data-active] {\n	border-color: var(--lm-focus);\n}\n\n.lm-tile-head {\n	display: flex;\n	align-items: center;\n	gap: 8px;\n	min-width: 0;\n}\n\n.lm-tile-head .lm-cell-main {\n	flex: 1 1 auto;\n}\n\n.lm-tile-value {\n	font-size: 18px;\n	font-weight: 600;\n	font-variant-numeric: tabular-nums;\n}\n\n.lm-share {\n	display: block;\n	height: 3px;\n	margin-top: 4px;\n	overflow: hidden;\n	border-radius: 2px;\n	background: var(--lm-bg-hover);\n}\n\n.lm-share > span {\n	display: block;\n	height: 100%;\n	border-radius: 2px;\n	background: var(--lm-input);\n}\n\n/* Tables */\n\n.lm-table {\n	width: 100%;\n	border-collapse: collapse;\n	table-layout: fixed;\n	font-size: 12.5px;\n	font-variant-numeric: tabular-nums;\n}\n\n.lm-table th {\n	padding: 0 8px 8px;\n	border-bottom: 1px solid var(--lm-line);\n	text-align: left;\n	font-size: 11.5px;\n	font-weight: 500;\n	color: var(--lm-fg-3);\n}\n\n.lm-table td {\n	padding: 8px;\n	border-bottom: 1px solid var(--lm-line-2);\n	vertical-align: middle;\n}\n\n.lm-table tr:last-child td {\n	border-bottom: none;\n}\n\n.lm-table tbody tr:hover td {\n	background: var(--lm-bg-hover);\n}\n\n.lm-table th:first-child,\n.lm-table td:first-child {\n	padding-left: 0;\n}\n\n.lm-table th:last-child,\n.lm-table td:last-child {\n	padding-right: 0;\n}\n\n.lm-table .lm-num {\n	width: 84px;\n	text-align: right;\n	white-space: nowrap;\n}\n\n.lm-breakdown .lm-share {\n	max-width: 260px;\n}\n\n.lm-requests th:nth-child(1) {\n	width: 108px;\n}\n\n.lm-requests th:nth-child(2) {\n	width: 70px;\n}\n\n.lm-nowrap {\n	white-space: nowrap;\n}\n\n.lm-cell-main {\n	display: block;\n	overflow: hidden;\n	text-overflow: ellipsis;\n	white-space: nowrap;\n	font-weight: 500;\n}\n\n.lm-breakdown .lm-cell-main {\n	display: inline;\n	font-family: var(--monaco-monospace-font);\n	font-size: 12px;\n	font-weight: 400;\n}\n\n.lm-requests .lm-cell-main {\n	font-family: var(--monaco-monospace-font);\n	font-size: 12px;\n	font-weight: 400;\n}\n\n.lm-cell-sub {\n	display: block;\n	overflow: hidden;\n	text-overflow: ellipsis;\n	white-space: nowrap;\n	font-size: 11.5px;\n	color: var(--lm-fg-3);\n}\n\n.lm-badge {\n	display: inline-block;\n	padding: 1px 7px;\n	border-radius: 10px;\n	font-size: 11px;\n	font-weight: 500;\n	color: var(--lm-fg-2);\n	background: var(--lm-bg-hover);\n}\n\n.lm-badge[data-type=\"agent\"] {\n	color: rgb(14 165 233);\n	background: rgb(14 165 233 / 0.12);\n}\n\n.lm-pager {\n	display: flex;\n	align-items: center;\n	justify-content: flex-end;\n	gap: 4px;\n}\n\n.lm-pager .lm-muted {\n	margin-right: 8px;\n}\n\n/* Heatmap */\n\n.lm-heat {\n	display: flex;\n	gap: 6px;\n	overflow-x: auto;\n}\n\n.lm-heat-days {\n	display: grid;\n	grid-template-rows: 14px repeat(7, 11px);\n	row-gap: 3px;\n	font-size: 10px;\n	line-height: 11px;\n	color: var(--lm-fg-3);\n}\n\n.lm-heat-days > :first-child {\n	height: 14px;\n}\n\n.lm-heat-body {\n	display: flex;\n	flex-direction: column;\n	gap: 3px;\n	min-width: 0;\n}\n\n.lm-heat-months,\n.lm-heat-grid {\n	display: flex;\n	gap: 3px;\n}\n\n.lm-heat-months > span {\n	width: 11px;\n	height: 14px;\n	overflow: visible;\n	white-space: nowrap;\n	font-size: 10px;\n	color: var(--lm-fg-3);\n}\n\n.lm-heat-col {\n	display: flex;\n	flex-direction: column;\n	gap: 3px;\n}\n\n.lm-heat-cell {\n	display: inline-block;\n	width: 11px;\n	height: 11px;\n	border-radius: 3px;\n	background: var(--lm-bg-hover);\n}\n\n.lm-heat-cell[data-level=\"1\"] {\n	background: color-mix(in srgb, var(--lm-heat) 30%, transparent);\n}\n\n.lm-heat-cell[data-level=\"2\"] {\n	background: color-mix(in srgb, var(--lm-heat) 52%, transparent);\n}\n\n.lm-heat-cell[data-level=\"3\"] {\n	background: color-mix(in srgb, var(--lm-heat) 76%, transparent);\n}\n\n.lm-heat-cell[data-level=\"4\"] {\n	background: var(--lm-heat);\n}\n\n.lm-heat-cell[data-future] {\n	visibility: hidden;\n}\n\n.lm-heat-cell[data-today] {\n	outline: 1px solid var(--lm-fg-3);\n	outline-offset: 1px;\n}\n\n.lm-heat-footer {\n	display: flex;\n	align-items: center;\n	justify-content: space-between;\n}\n\n.lm-heat-legend {\n	display: inline-flex;\n	align-items: center;\n	gap: 3px;\n	font-size: 11px;\n	color: var(--lm-fg-3);\n}\n\n.lm-heat-legend > :first-of-type {\n	margin-left: 4px;\n}\n\n.lm-heat-legend > :last-of-type {\n	margin-right: 4px;\n}\n\n.lm-footer {\n	display: flex;\n	align-items: center;\n	justify-content: space-between;\n	gap: 12px;\n	padding: 0 4px 8px;\n}\n\n.local-mode-link-button[data-danger] {\n	color: var(--lm-err);\n}\n\n.local-mode-empty .local-mode-presets {\n	padding: 16px 0 0;\n}\n\n/* DevTool: DEV pill and panel (tweakpane-style, dark in every theme) */\n\n.lm-dev {\n	--dev-bg: rgb(32 33 38 / 0.97);\n	--dev-bg-2: rgb(255 255 255 / 0.06);\n	--dev-bg-3: rgb(255 255 255 / 0.11);\n	--dev-fg: rgb(240 241 245);\n	--dev-fg-2: rgb(240 241 245 / 0.62);\n	--dev-line: rgb(255 255 255 / 0.08);\n	--dev-accent: rgb(120 190 255);\n	font-family: var(--cursor-font-family-ui, system-ui), sans-serif;\n	font-size: 11.5px;\n	color: var(--dev-fg);\n}\n\n.lm-dev-pill {\n	position: fixed;\n	right: 0;\n	z-index: 100000;\n	padding: 6px 5px 6px 7px;\n	border: 1px solid var(--dev-line);\n	border-right: none;\n	border-radius: 8px 0 0 8px;\n	background: var(--dev-bg);\n	color: var(--dev-fg-2);\n	font:\n		600 10px / 1 ui-monospace,\n		SFMono-Regular,\n		Menlo,\n		monospace;\n	letter-spacing: 0.06em;\n	writing-mode: vertical-rl;\n	cursor: grab;\n	opacity: 0.55;\n	box-shadow: 0 2px 10px rgb(0 0 0 / 0.25);\n	transform: translateY(-50%);\n	transition:\n		opacity 120ms,\n		color 120ms;\n	touch-action: none;\n}\n\n.lm-dev-pill:hover,\n.lm-dev-pill[aria-expanded=\"true\"],\n.lm-dev-pill:focus-visible {\n	opacity: 1;\n	color: var(--dev-accent);\n}\n\n.lm-dev-pill:active {\n	cursor: grabbing;\n}\n\n.lm-dev-panel {\n	position: fixed;\n	top: 44px;\n	right: 34px;\n	z-index: 100000;\n	display: flex;\n	flex-direction: column;\n	width: 300px;\n	max-height: calc(100vh - 88px);\n	border: 1px solid var(--dev-line);\n	border-radius: 8px;\n	background: var(--dev-bg);\n	box-shadow: 0 12px 40px rgb(0 0 0 / 0.4);\n	backdrop-filter: blur(12px);\n}\n\n.lm-dev-header {\n	display: flex;\n	align-items: center;\n	justify-content: space-between;\n	padding: 7px 6px 7px 10px;\n	border-bottom: 1px solid var(--dev-line);\n	color: var(--dev-fg-2);\n	font-weight: 600;\n}\n\n.lm-dev-close {\n	display: grid;\n	place-items: center;\n	width: 22px;\n	height: 22px;\n	padding: 0;\n	border: none;\n	border-radius: 4px;\n	background: none;\n	color: var(--dev-fg-2);\n	cursor: pointer;\n}\n\n.lm-dev-close:hover {\n	background: var(--dev-bg-3);\n	color: var(--dev-fg);\n}\n\n.lm-dev-scroll {\n	overflow-y: auto;\n	padding: 4px;\n}\n\n.lm-dev-folder + .lm-dev-folder {\n	margin-top: 4px;\n}\n\n.lm-dev-folder-title {\n	display: flex;\n	align-items: center;\n	gap: 6px;\n	width: 100%;\n	padding: 5px 6px;\n	border: none;\n	border-radius: 4px;\n	background: var(--dev-bg-2);\n	color: var(--dev-fg);\n	font: inherit;\n	font-weight: 600;\n	text-align: left;\n	cursor: pointer;\n}\n\n.lm-dev-folder-title:hover {\n	background: var(--dev-bg-3);\n}\n\n.lm-dev-folder-title svg {\n	transition: transform 120ms;\n}\n\n.lm-dev-folder-title[aria-expanded=\"true\"] svg {\n	transform: rotate(90deg);\n}\n\n.lm-dev-folder-trailing {\n	margin-left: auto;\n	color: var(--dev-fg-2);\n	font-weight: 400;\n}\n\n.lm-dev-folder-body {\n	display: flex;\n	flex-direction: column;\n	gap: 3px;\n	padding: 6px 4px 4px 10px;\n}\n\n.lm-dev-row {\n	display: grid;\n	grid-template-columns: 76px minmax(0, 1fr);\n	align-items: center;\n	gap: 8px;\n	min-height: 22px;\n}\n\n.lm-dev-label {\n	overflow: hidden;\n	color: var(--dev-fg-2);\n	text-overflow: ellipsis;\n	white-space: nowrap;\n}\n\n.lm-dev-value {\n	overflow: hidden;\n	font-family: ui-monospace, SFMono-Regular, Menlo, monospace;\n	font-size: 11px;\n	text-overflow: ellipsis;\n	white-space: nowrap;\n}\n\n.lm-dev-muted {\n	color: var(--dev-fg-2);\n}\n\n.lm-dev-input {\n	box-sizing: border-box;\n	width: 100%;\n	height: 22px;\n	padding: 0 6px;\n	border: 1px solid transparent;\n	border-radius: 4px;\n	outline: none;\n	background: var(--dev-bg-2);\n	color: var(--dev-fg);\n	font: inherit;\n}\n\n.lm-dev-input:hover {\n	background: var(--dev-bg-3);\n}\n\n.lm-dev-input:focus {\n	border-color: var(--dev-accent);\n}\n\n.lm-dev-buttons {\n	display: flex;\n	gap: 4px;\n}\n\n.lm-dev-buttons .lm-dev-button {\n	flex: 1;\n}\n\n.lm-dev-button {\n	margin-top: 2px;\n	padding: 5px 8px;\n	border: none;\n	border-radius: 4px;\n	background: var(--dev-bg-3);\n	color: var(--dev-fg);\n	font: inherit;\n	cursor: pointer;\n}\n\n.lm-dev-button:hover:not(:disabled) {\n	background: rgb(255 255 255 / 0.17);\n}\n\n.lm-dev-button:disabled {\n	opacity: 0.45;\n	cursor: default;\n}\n\n.lm-dev-button[data-danger] {\n	color: rgb(255 140 140);\n}\n\n.lm-dev-status {\n	display: inline-flex;\n	align-items: center;\n	gap: 5px;\n}\n\n.lm-dev-status::before {\n	content: \"\";\n	width: 6px;\n	height: 6px;\n	border-radius: 50%;\n	background: var(--dev-fg-2);\n}\n\n.lm-dev-status[data-on]::before {\n	background: rgb(80 210 130);\n}\n\n.lm-dev-note {\n	margin: 2px 0 0;\n	color: var(--dev-fg-2);\n	font-size: 10.5px;\n	line-height: 1.4;\n}\n\n.lm-dev-requests {\n	display: flex;\n	flex-direction: column;\n	margin: 0;\n	padding: 0;\n	list-style: none;\n	font-family: ui-monospace, SFMono-Regular, Menlo, monospace;\n	font-size: 10.5px;\n}\n\n.lm-dev-requests li {\n	display: grid;\n	grid-template-columns: auto minmax(0, 1fr) auto;\n	column-gap: 8px;\n	padding: 3px 0;\n	border-bottom: 1px solid var(--dev-line);\n}\n\n.lm-dev-requests li > :last-child {\n	grid-column: 2 / 4;\n}\n\n.lm-dev-request-model {\n	overflow: hidden;\n	text-overflow: ellipsis;\n	white-space: nowrap;\n}\n";
//#endregion
//#region src/vs/workbench/contrib/localMode/common/marketplace.ts
/** Where Cursor's marketplace keeps partner plugins. */
var PARTNER_DIR = "third_party/";
/** localStorage key (shared by every window of the profile). */
var MARKETPLACE_STORAGE_KEY = "cursorLocalMode.marketplace";
var DEFAULT_SOURCES = [{
	id: sourceId("https://github.com/cursor/plugins"),
	gitUrl: "https://github.com/cursor/plugins",
	builtin: true,
	name: "cursor-public",
	displayName: "Cursor",
	featured: true
}, {
	id: sourceId("https://github.com/anthropics/claude-plugins-official"),
	gitUrl: "https://github.com/anthropics/claude-plugins-official",
	builtin: true,
	displayName: "Claude Code"
}];
/**
* cyrb53: a 53-bit string hash, so IDs fit in a JS number and a protobuf
* int64 alike. Never 0 (the page treats 0 as "no plugin").
*/
function stableId(key) {
	let h1 = 3735928559;
	let h2 = 1103547991;
	for (let i = 0; i < key.length; i++) {
		const c = key.charCodeAt(i);
		h1 = Math.imul(h1 ^ c, 2654435761);
		h2 = Math.imul(h2 ^ c, 1597334677);
	}
	h1 = Math.imul(h1 ^ h1 >>> 16, 2246822507) ^ Math.imul(h2 ^ h2 >>> 13, 3266489909);
	h2 = Math.imul(h2 ^ h2 >>> 16, 2246822507) ^ Math.imul(h1 ^ h1 >>> 13, 3266489909);
	const n = 4294967296 * (2097151 & h2) + (h1 >>> 0);
	return String(n === 0 ? 1 : n);
}
/** `https://github.com/o/r(.git)`, `github.com/o/r/tree/...`, `git@github.com:o/r.git` or `o/r`. */
function parseGitHubRepo(input) {
	const text = input.trim();
	const ssh = /^git@github\.com:([^/\s]+)\/([^/\s]+?)(?:\.git)?\/?$/iu.exec(text);
	const short = /^([\w.-]+)\/([\w.-]+)$/u.exec(text);
	let owner;
	let repo;
	if (ssh !== null) [, owner, repo] = ssh;
	else if (short !== null && !text.includes(".com")) [, owner, repo] = short;
	else {
		let url;
		try {
			url = new URL(/^[a-z][a-z0-9+.-]*:\/\//iu.test(text) ? text : `https://${text}`);
		} catch {
			return;
		}
		if (url.hostname.toLowerCase() !== "github.com" && url.hostname.toLowerCase() !== "www.github.com") return;
		[owner, repo] = url.pathname.split("/").filter(Boolean);
	}
	repo = repo?.replace(/\.git$/iu, "");
	if (!owner || !repo || !/^[\w.-]+$/u.test(owner) || !/^[\w.-]+$/u.test(repo)) return;
	return {
		owner,
		repo,
		url: `https://github.com/${owner}/${repo}`
	};
}
function sourceId(gitUrl) {
	return stableId(`marketplace:${(parseGitHubRepo(gitUrl)?.url ?? gitUrl.trim()).toLowerCase()}`);
}
function pluginId(source, name) {
	return stableId(`plugin:${source.id}/${name}`);
}
/** Joins manifest paths; undefined when one escapes the repository. */
function joinPath(...parts) {
	const out = [];
	for (const part of parts) for (const seg of String(part ?? "").split("/")) {
		if (seg === "" || seg === ".") continue;
		if (seg === "..") return;
		out.push(seg);
	}
	return out.join("/");
}
var text = (v) => typeof v === "string" && v.trim() !== "" ? v.trim() : void 0;
/**
* Where a manifest entry's plugin lives: a folder of the marketplace
* repository (`"./plugins/x"`, `"x"`) or another repository (Claude Code's
* `github` / `url` / `git-subdir` sources).
*/
function pluginLocation(source, pluginRoot) {
	if (typeof source === "string") {
		const path = source.trim().startsWith("./") ? joinPath(source) : joinPath(pluginRoot, source);
		return path === void 0 ? void 0 : {
			kind: "local",
			path
		};
	}
	if (source === null || typeof source !== "object") return;
	const s = source;
	const type = text(s.source) ?? text(s.type);
	const ref = text(s.sha) ?? text(s.ref);
	const path = text(s.path) === void 0 ? void 0 : joinPath(text(s.path));
	if (text(s.path) !== void 0 && path === void 0) return;
	let url;
	if (type === "github") {
		const repo = text(s.repo) ?? (text(s.owner) && text(s.name) ? `${text(s.owner)}/${text(s.name)}` : void 0);
		url = repo === void 0 ? void 0 : parseGitHubRepo(repo)?.url;
	} else if (type === "url" || type === "git" || type === "git-subdir") url = text(s.url);
	if (url === void 0 || !/^https:\/\//iu.test(url)) return;
	return {
		kind: "git",
		url: url.replace(/\.git$/iu, ""),
		...path ? { path } : {},
		...ref ? { ref } : {}
	};
}
/** "cursor-team-kit" → "Cursor Team Kit". */
function humanize(name) {
	return name.split(/[-_\s]+/u).filter(Boolean).map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}
var CATEGORY_KEYS = [
	[/^(?:productivity|workflow|automation)$/u, "PRODUCTIVITY"],
	[/^(?:design|ui|ux|figma)$/u, "DESIGN"],
	[/^(?:data|database|databases|analytics|data-analytics)$/u, "DATA_ANALYTICS"],
	[/^(?:infrastructure|deployment|devops|cloud|monitoring|observability|security)$/u, "INFRASTRUCTURE"],
	[/^(?:payments?|billing)$/u, "PAYMENTS"],
	[/^(?:research|learning|education)$/u, "RESEARCH"],
	[/^(?:documents?|docs|files)$/u, "DOCUMENTS_AND_FILES"],
	[/^(?:sales|crm|marketing)$/u, "SALES"],
	[/^(?:support|customer-support)$/u, "CUSTOMER_SUPPORT"],
	[/^(?:finance|legal|accounting)$/u, "FINANCE_AND_LEGAL"],
	[/^(?:scheduling|calendar)$/u, "SCHEDULING"],
	[/^(?:communication|collaboration|email|chat)$/u, "INBOX_AND_COLLABORATION"],
	[/^(?:agents?|orchestration|multi-agent)$/u, "AGENT_ORCHESTRATION"]
];
function categoryKeys(words) {
	const keys = [];
	for (const w of words) {
		const word = w.trim().toLowerCase();
		const key = CATEGORY_KEYS.find(([re]) => re.test(word))?.[1];
		if (key !== void 0 && !keys.includes(key)) keys.push(key);
	}
	return keys;
}
var stem = (file) => file.replace(/\.[^.]+$/u, "");
/** Skills, rules, commands, agents and hooks of the plugin in `dir`, from the repository's file list. */
function componentsFromTree(paths, dir) {
	const prefix = dir === "" ? "" : `${dir}/`;
	const out = {
		skills: [],
		rules: [],
		commands: [],
		subagents: [],
		hooks: []
	};
	for (const p of paths) {
		if (!p.startsWith(prefix)) continue;
		const rest = p.slice(prefix.length).split("/");
		const [top, second, third] = rest;
		if (top === "skills" && rest.length === 3 && third === "SKILL.md") out.skills.push({
			name: second,
			sourcePath: p
		});
		else if (top === "rules" && rest.length === 2 && /\.mdc?$/u.test(second)) out.rules.push({
			name: stem(second),
			sourcePath: p
		});
		else if (top === "commands" && rest.length === 2 && /\.md$/u.test(second)) out.commands.push({
			name: stem(second),
			sourcePath: p
		});
		else if (top === "agents" && rest.length === 2 && /\.md$/u.test(second)) out.subagents.push({
			name: stem(second),
			sourcePath: p
		});
		else if (top === "hooks" && rest.length === 2 && second === "hooks.json") out.hooks.push({
			name: "hooks.json",
			sourcePath: p
		});
	}
	return out;
}
/** The plugin manifest of the plugin in `dir`, if the repository has one. */
function pluginManifestPath(paths, dir) {
	return [
		".cursor-plugin/plugin.json",
		".claude-plugin/plugin.json",
		"plugin.json"
	].map((f) => joinPath(dir, f)).find((p) => paths.has(p));
}
/** The MCP config of the plugin in `dir`, if the repository has one. */
function mcpConfigPath(paths, dir) {
	return [".mcp.json", "mcp.json"].map((f) => joinPath(dir, f)).find((p) => paths.has(p));
}
function mcpServers(config) {
	const servers = config?.mcpServers;
	return servers !== null && typeof servers === "object" ? Object.keys(servers).map((name) => ({ name })) : [];
}
var rawUrl = (repo, ref, path) => `https://raw.githubusercontent.com/${repo.owner}/${repo.repo}/${ref}/${path}`;
function logoUrl(logo, repo, ref, dir) {
	const l = text(logo);
	if (l === void 0) return;
	if (/^https:\/\//iu.test(l)) return l;
	const path = joinPath(dir, l);
	return path === void 0 ? void 0 : rawUrl(repo, ref, path);
}
function authorName(author) {
	return text(author) ?? text(author?.name);
}
function words(...lists) {
	return lists.flatMap((l) => Array.isArray(l) ? l.filter((w) => typeof w === "string") : text(l) ? [l] : []);
}
/** The catalog of one marketplace from its manifest and what was read of its repository. */
function catalogFromManifest(source, manifest, contents, now) {
	const m = manifest ?? {};
	const metadata = m.metadata ?? {};
	const name = source.name ?? text(m.name) ?? contents.repo.repo;
	const plugins = [];
	const seen = /* @__PURE__ */ new Set();
	for (const raw of Array.isArray(m.plugins) ? m.plugins : []) {
		const entry = raw ?? {};
		const pluginName = text(entry.name);
		const minCursor = text(entry.minClientVersions?.cursor);
		if (pluginName === void 0 || seen.has(pluginName) || minCursor === "never") continue;
		const location = pluginLocation(entry.source ?? "./", text(metadata.pluginRoot));
		if (location === void 0) continue;
		seen.add(pluginName);
		const local = location.kind === "local";
		const dir = local ? location.path : "";
		const own = local ? contents.pluginManifests.get(dir) : void 0;
		const components = local && contents.paths !== void 0 ? componentsFromTree(contents.paths, dir) : void 0;
		const keywords = words(entry.category, entry.tags, entry.keywords, own?.keywords);
		const variables = own?.variables ?? entry.variables;
		plugins.push({
			id: pluginId(source, pluginName),
			name: pluginName,
			displayName: text(own?.displayName) ?? text(entry.displayName) ?? humanize(pluginName),
			description: text(own?.description) ?? text(entry.description) ?? "",
			marketplaceId: source.id,
			marketplaceName: name,
			gitUrl: local ? contents.repo.url : location.url,
			gitRef: local ? contents.ref : location.ref,
			...local ? dir === "" ? {} : { gitPath: dir } : location.path ? { gitPath: location.path } : {},
			local,
			logoUrl: local ? logoUrl(own?.logo ?? entry.logo, contents.repo, contents.ref, dir) : text(entry.logo),
			homepage: text(entry.homepage) ?? text(own?.homepage),
			author: authorName(own?.author) ?? authorName(entry.author),
			version: text(own?.version) ?? text(entry.version),
			tags: [...new Set(keywords.map((w) => w.toLowerCase()))],
			categoryKeys: [...source.featured && local && !`${dir}/`.startsWith(PARTNER_DIR) ? ["FEATURED"] : [], ...categoryKeys(keywords)],
			skills: components?.skills ?? [],
			rules: components?.rules ?? [],
			commands: components?.commands ?? [],
			subagents: components?.subagents ?? [],
			hooks: components?.hooks ?? [],
			mcpServers: local ? mcpServers(contents.mcpConfigs.get(dir) ?? own?.mcpServers) : [],
			...variables !== null && typeof variables === "object" && !Array.isArray(variables) ? { variables } : {}
		});
	}
	return {
		sourceId: source.id,
		name,
		displayName: source.displayName ?? text(m.displayName) ?? humanize(name),
		description: text(metadata.description) ?? text(m.description),
		gitUrl: contents.repo.url,
		gitRef: contents.ref,
		commitSha: contents.commitSha,
		fetchedAt: now,
		version: 1,
		plugins
	};
}
function isStale(snapshot, now) {
	return snapshot === void 0 || now - snapshot.fetchedAt > 216e5 || now < snapshot.fetchedAt;
}
/** Stored state, with the default marketplaces added and anything malformed dropped. */
function parseState(json) {
	let raw = {};
	try {
		const v = JSON.parse(json ?? "{}");
		raw = v !== null && typeof v === "object" ? v : {};
	} catch {}
	const sources = [...DEFAULT_SOURCES];
	for (const s of Array.isArray(raw.sources) ? raw.sources : []) if (typeof s?.gitUrl === "string" && typeof s.id === "string" && !sources.some((x) => x.id === s.id)) sources.push({
		id: s.id,
		gitUrl: s.gitUrl,
		...typeof s.gitRef === "string" ? { gitRef: s.gitRef } : {}
	});
	const snapshots = {};
	const stored = raw.snapshots !== null && typeof raw.snapshots === "object" ? raw.snapshots : {};
	for (const s of sources) {
		const snap = stored[s.id];
		if (snap?.version === 1 && Array.isArray(snap.plugins) && typeof snap.fetchedAt === "number") snapshots[s.id] = snap;
	}
	return {
		sources,
		snapshots,
		installs: (Array.isArray(raw.installs) ? raw.installs : []).filter((i) => typeof i?.plugin?.id === "string" && typeof i.plugin.name === "string")
	};
}
function serializeState(state) {
	return JSON.stringify({
		version: 1,
		sources: state.sources.filter((s) => !s.builtin).map(({ id, gitUrl, gitRef }) => ({
			id,
			gitUrl,
			gitRef
		})),
		snapshots: state.snapshots,
		installs: state.installs
	});
}
/** Every plugin of every followed marketplace, first marketplace first. */
function catalog(state) {
	return state.sources.flatMap((s) => state.snapshots[s.id]?.plugins ?? []);
}
/** A catalog plugin, or an installed one whose marketplace no longer lists it. */
function findPlugin(state, id) {
	return catalog(state).find((p) => p.id === id) ?? state.installs.find((i) => i.plugin.id === id)?.plugin;
}
/** The plugin folders a manifest has in the marketplace repository itself. */
function localPluginDirs(manifest) {
	const m = manifest ?? {};
	const root = text(m.metadata?.pluginRoot);
	const dirs = /* @__PURE__ */ new Set();
	for (const entry of Array.isArray(m.plugins) ? m.plugins : []) {
		const location = pluginLocation(entry?.source ?? "./", root);
		location?.kind === "local" && dirs.add(location.path);
	}
	return [...dirs];
}
/** A component list of a parsed plugin (`aiserver.v1.SkillDescriptor` and friends). */
function componentList(list) {
	return (Array.isArray(list) ? list : []).flatMap((c) => text(c?.name) ? [{
		name: c.name,
		...text(c.description) ? { description: c.description } : {}
	}] : []);
}
/** A catalog from the extension host's parse (a GitHub URL pasted on the page, a local folder). */
function snapshotFromParse(source, parsed, gitRef, now) {
	const ref = text(parsed.commitSha) ?? text(parsed.defaultBranch) ?? text(gitRef) ?? "HEAD";
	const name = source.name ?? text(parsed.marketplaceName);
	return {
		sourceId: source.id,
		name,
		displayName: source.displayName ?? humanize(name),
		description: text(parsed.marketplaceDescription),
		gitUrl: parsed.repositoryUrl,
		gitRef: ref,
		commitSha: text(parsed.commitSha),
		fetchedAt: now,
		version: 1,
		plugins: parsed.plugins.filter((p) => text(p.name) && !text(p.parseError)).map((p) => {
			const external = text(p.sourceGitUrl);
			return {
				id: pluginId(source, p.name),
				name: p.name,
				displayName: text(p.displayName) ?? humanize(p.name),
				description: text(p.description) ?? "",
				marketplaceId: source.id,
				marketplaceName: name,
				gitUrl: external ?? parsed.repositoryUrl,
				gitRef: external ? text(p.sourceGitRef) : ref,
				...text(p.gitPath) ? { gitPath: p.gitPath } : {},
				local: external === void 0,
				logoUrl: text(p.logoUrl),
				tags: [],
				categoryKeys: [],
				skills: componentList(p.skills),
				rules: componentList(p.rules),
				commands: componentList(p.commands),
				subagents: componentList(p.subagents),
				hooks: componentList(p.hooks),
				mcpServers: componentList(p.mcpServers),
				...p.variables !== void 0 ? { variables: p.variables } : {}
			};
		})
	};
}
/**
* An `aiserver.v1.Plugin` in its JSON form, as the extension host reads it: a
* marketplace plugin names its marketplace (installed from that clone), any
* other plugin is cloned from its own repository.
*/
function pluginJson(p, marketplaceRef) {
	return {
		id: p.id,
		name: p.name,
		displayName: p.displayName,
		description: p.description,
		gitUrl: p.gitUrl,
		...p.gitRef ? { gitRef: p.gitRef } : {},
		...p.gitPath ? { gitPath: p.gitPath } : {},
		fullRef: `${p.marketplaceName}/${p.name}`,
		isPublished: true,
		...p.local ? {
			marketplaceId: p.marketplaceId,
			marketplace: {
				id: p.marketplaceId,
				name: p.marketplaceName,
				gitUrl: p.gitUrl,
				gitRef: marketplaceRef ?? p.gitRef
			}
		} : {}
	};
}
/**
* `aiserver.v1.GetEffectiveUserPluginsResponse` in its JSON form: what the
* extension host clones and loads.
*/
function effectivePlugins(state) {
	const marketplaces = /* @__PURE__ */ new Map();
	return {
		plugins: state.installs.map(({ plugin: p, variables }) => {
			const json = pluginJson(p);
			if (json.marketplace !== void 0) marketplaces.set(p.marketplaceId, json.marketplace);
			return {
				plugin: json,
				isEnabled: true,
				isTeamRequired: false,
				hasTeamConfiguredVariables: false,
				...variables === void 0 ? {} : {
					configuredVariables: variables,
					configuredVariableKeys: Object.keys(variables)
				}
			};
		}),
		marketplaces: [...marketplaces.values()]
	};
}
/** Project installs name plugins `<name>` (Cursor's marketplace) or `<marketplace>/<name>`. */
function resolvePluginRefs(state, refs) {
	const all = [...catalog(state), ...state.installs.map((i) => i.plugin)];
	return refs.flatMap((ref) => {
		const market = text(ref.marketplaceName) ?? "cursor-public";
		const hit = all.find((p) => p.name === ref.name && p.marketplaceName === market);
		return hit === void 0 ? [] : [hit];
	});
}
//#endregion
//#region src/vs/workbench/contrib/localMode/browser/marketplace.ts
/**
* The local marketplace in the agent window (see common/marketplace.ts).
*
* Patched in for Cursor's backend (build/patches/patches.mjs, `marketplace-*`):
* `provider` answers the Customize page instead of DashboardService,
* `effectivePlugins` tells the extension host what to clone and load. The
* catalog is read from GitHub (the renderer's CSP allows https fetches) and
* kept in localStorage with the installs.
*/
var GITHUB_API = "https://api.github.com";
var FETCH_TIMEOUT_MS = 2e4;
var FETCH_CONCURRENCY = 12;
var TEAM_ONLY = "Team plugins need a Cursor team account, which local mode does not use.";
var cached;
globalThis.addEventListener?.("storage", (e) => {
	if (e.key === "cursorLocalMode.marketplace") cached = void 0;
});
function load() {
	if (cached === void 0) cached = parseState(globalThis.localStorage?.getItem(MARKETPLACE_STORAGE_KEY));
	return cached;
}
function save(state) {
	cached = state;
	try {
		globalThis.localStorage?.setItem(MARKETPLACE_STORAGE_KEY, serializeState(state));
	} catch (e) {
		console.warn("[local mode] could not save the marketplace", e);
	}
}
function update(change) {
	const next = change(load());
	save(next);
	return next;
}
async function get(url, accept) {
	const r = await fetch(url, {
		headers: accept === void 0 ? {} : { Accept: accept },
		signal: AbortSignal.timeout(FETCH_TIMEOUT_MS)
	});
	if (!r.ok) throw new Error(`${r.status} ${r.statusText || "error"} from ${url}`);
	return r;
}
var getJson = async (url) => (await get(url)).json();
async function eachLimit(items, limit, fn) {
	let next = 0;
	const worker = async () => {
		while (next < items.length) await fn(items[next++]);
	};
	await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker));
}
/**
* One marketplace: its commit and file list (GitHub API, two requests), its
* manifest and, for plugins inside the repository, their plugin.json and MCP
* config (raw.githubusercontent.com).
*/
async function readMarketplace(source, now = Date.now()) {
	const repo = parseGitHubRepo(source.gitUrl);
	if (repo === void 0) throw new Error(`${source.gitUrl} is not a GitHub repository.`);
	const api = `${GITHUB_API}/repos/${repo.owner}/${repo.repo}`;
	let commitSha;
	try {
		const sha = (await (await get(`${api}/commits/${encodeURIComponent(source.gitRef ?? "HEAD")}`, "application/vnd.github.sha")).text()).trim();
		commitSha = /^[0-9a-f]{40}$/u.test(sha) ? sha : void 0;
	} catch {}
	const ref = commitSha ?? source.gitRef ?? "HEAD";
	const raw = (path) => `https://raw.githubusercontent.com/${repo.owner}/${repo.repo}/${ref}/${path}`;
	let paths;
	try {
		paths = ((await getJson(`${api}/git/trees/${ref}?recursive=1`)).tree ?? []).flatMap((t) => t.type === "blob" && typeof t.path === "string" ? [t.path] : []);
	} catch {}
	const files = new Set(paths ?? []);
	const has = (path) => paths === void 0 || files.has(path);
	let manifest;
	for (const path of [".cursor-plugin/marketplace.json", ".claude-plugin/marketplace.json"]) if (manifest === void 0 && has(path)) try {
		manifest = await getJson(raw(path));
	} catch {}
	if (manifest === void 0) {
		const own = paths === void 0 ? void 0 : pluginManifestPath(files, "");
		const plugin = own === void 0 ? void 0 : await getJson(raw(own));
		if (plugin === void 0) throw new Error(`${repo.url} has no .cursor-plugin/marketplace.json or .claude-plugin/marketplace.json.`);
		const name = typeof plugin.name === "string" && plugin.name ? plugin.name : repo.repo;
		manifest = {
			name: repo.repo,
			plugins: [{
				name,
				source: "./",
				description: plugin.description
			}]
		};
	}
	const pluginManifests = /* @__PURE__ */ new Map();
	const mcpConfigs = /* @__PURE__ */ new Map();
	if (paths !== void 0) await eachLimit(localPluginDirs(manifest), FETCH_CONCURRENCY, async (dir) => {
		const own = pluginManifestPath(files, dir);
		const mcp = mcpConfigPath(files, dir);
		try {
			own !== void 0 && pluginManifests.set(dir, await getJson(raw(own)));
		} catch {}
		try {
			mcp !== void 0 && mcpConfigs.set(dir, await getJson(raw(mcp)));
		} catch {}
	});
	return catalogFromManifest(source, manifest, {
		repo,
		ref,
		commitSha,
		paths,
		pluginManifests,
		mcpConfigs
	}, now);
}
var inflight = /* @__PURE__ */ new Map();
function refresh(source) {
	let p = inflight.get(source.id);
	if (p === void 0) {
		p = readMarketplace(source).then((snapshot) => {
			update((s) => ({
				...s,
				snapshots: {
					...s.snapshots,
					[source.id]: snapshot
				}
			}));
			return snapshot;
		}).finally(() => inflight.delete(source.id));
		inflight.set(source.id, p);
	}
	return p;
}
/** Reads the marketplaces never read; stale ones refresh in the background. */
async function ensureCatalog() {
	const s = load();
	const now = Date.now();
	const readable = s.sources.filter((x) => parseGitHubRepo(x.gitUrl) !== void 0);
	for (const source of readable) if (s.snapshots[source.id] !== void 0 && isStale(s.snapshots[source.id], now)) refresh(source).catch((e) => console.warn(`[local mode] could not refresh ${source.gitUrl}`, e));
	await Promise.all(readable.filter((x) => s.snapshots[x.id] === void 0).map((source) => refresh(source).catch((e) => console.warn(`[local mode] could not read ${source.gitUrl}`, e))));
	return load();
}
/** Has the extension host reload plugins (clone new installs, drop removed ones). */
function reloadPlugins() {
	cursorHost().cursor.pluginsService?.requestPluginsRefresh().catch((e) => console.warn("[local mode] plugin reload failed", e));
}
var big = (id) => {
	try {
		return BigInt(id ?? 0);
	} catch {
		return 0n;
	}
};
function struct(json) {
	if (json === void 0) return;
	try {
		return cursorHost().cursor.proto.Struct.fromJson(json);
	} catch {
		return;
	}
}
function toJson(variables) {
	const json = variables?.toJson?.();
	return json !== null && typeof json === "object" && !Array.isArray(json) ? json : void 0;
}
function marketplaceMessage(source, snap) {
	return new (cursorHost()).cursor.proto.Marketplace({
		id: big(source.id),
		name: snap.name,
		...snap.displayName ? { displayName: snap.displayName } : {},
		...snap.description ? { description: snap.description } : {},
		gitUrl: snap.gitUrl,
		gitRef: snap.gitRef,
		...source.builtin ? {} : { userId: 0 },
		createdAt: 0n,
		updatedAt: big(snap.fetchedAt),
		lastIndexedAt: big(snap.fetchedAt),
		...snap.commitSha ? { lastIndexedCommitSha: snap.commitSha } : {}
	});
}
function pluginMessage(p, state) {
	const source = state.sources.find((s) => s.id === p.marketplaceId);
	const snap = state.snapshots[p.marketplaceId];
	const variables = struct(p.variables);
	return new (cursorHost()).cursor.proto.Plugin({
		id: big(p.id),
		name: p.name,
		displayName: p.displayName,
		description: p.description,
		status: 3,
		lifecycleState: 1,
		repositoryUrl: p.homepage ?? (p.local && p.gitPath ? `${p.gitUrl}/tree/${p.gitRef ?? "HEAD"}/${p.gitPath}` : p.gitUrl),
		tags: p.tags,
		...p.logoUrl ? { logoUrl: p.logoUrl } : {},
		isPublished: true,
		createdAt: 0n,
		updatedAt: big(snap?.fetchedAt),
		marketplaceId: big(p.marketplaceId),
		...source !== void 0 && snap !== void 0 ? { marketplace: marketplaceMessage(source, snap) } : {},
		...p.author ? { publisher: {
			id: big(stableId(`publisher:${p.author}`)),
			name: p.author,
			displayName: p.author,
			isUserOwned: false,
			isVerified: false
		} } : {},
		gitUrl: p.gitUrl,
		...p.gitRef ? { gitRef: p.gitRef } : {},
		...p.gitPath ? { gitPath: p.gitPath } : {},
		fullRef: `${p.marketplaceName}/${p.name}`,
		skills: p.skills,
		subagents: p.subagents,
		hooks: p.hooks,
		rules: p.rules,
		mcpServers: p.mcpServers,
		commands: p.commands,
		curatedCategoryKeys: p.categoryKeys,
		...variables === void 0 ? {} : { variables }
	});
}
function installMessage(p, installedAt, state) {
	return new (cursorHost()).cursor.proto.UserPluginInstall({
		userId: 0,
		pluginId: big(p.id),
		isEnabled: true,
		createdAt: big(installedAt),
		updatedAt: big(installedAt),
		plugin: pluginMessage(p, state)
	});
}
function addSource(gitUrl, gitRef) {
	const url = parseGitHubRepo(gitUrl)?.url ?? gitUrl.trim();
	const id = sourceId(url);
	const existing = load().sources.find((s) => s.id === id);
	if (existing !== void 0) return existing;
	const source = {
		id,
		gitUrl: url,
		...gitRef ? { gitRef } : {}
	};
	update((s) => ({
		...s,
		sources: [...s.sources, source]
	}));
	return source;
}
async function addGitHubMarketplace(gitUrl, gitRef) {
	if (!gitUrl || parseGitHubRepo(gitUrl) === void 0) throw new Error("Local mode can add marketplaces from GitHub repositories (https://github.com/<owner>/<repo>).");
	const source = addSource(gitUrl, gitRef);
	try {
		return await refresh(source);
	} catch (e) {
		update((s) => ({
			...s,
			sources: s.sources.filter((x) => x.id !== source.id || x.builtin)
		}));
		throw e;
	}
}
async function refreshPage() {
	const service = cursorHost().cursor.pluginsService;
	await service?._refreshMarketplacePluginsFromDashboardClient(service._getCurrentCacheKey(), { forceRefetch: true });
}
var provider = {
	async listMarketplacePlugins(request) {
		const s = await ensureCatalog();
		const id = request?.marketplaceId === void 0 ? void 0 : String(request.marketplaceId);
		return {
			plugins: (id === void 0 ? catalog(s) : s.snapshots[id]?.plugins ?? []).map((p) => pluginMessage(p, s)),
			nextPageToken: ""
		};
	},
	async listMarketplaces() {
		const s = await ensureCatalog();
		return { marketplaces: s.sources.flatMap((source) => {
			const snap = s.snapshots[source.id];
			return snap === void 0 ? [] : [marketplaceMessage(source, snap)];
		}) };
	},
	async listUserPluginInstalls() {
		const s = load();
		return { installs: s.installs.map((i) => installMessage(i.plugin, i.installedAt, s)) };
	},
	async getPlugin(request) {
		const s = load();
		const p = findPlugin(s, String(request?.pluginId));
		if (p === void 0) throw new Error("This plugin is not in any marketplace local mode knows.");
		return { plugin: pluginMessage(p, s) };
	},
	async installUserPlugin(request) {
		const p = findPlugin(await ensureCatalog(), String(request?.pluginId));
		if (p === void 0) throw new Error("This plugin is not in any marketplace local mode knows.");
		const variables = toJson(request?.variables);
		const installedAt = Date.now();
		const next = update((x) => ({
			...x,
			installs: [...x.installs.filter((i) => i.plugin.id !== p.id), {
				plugin: p,
				installedAt,
				...variables === void 0 ? {} : { variables }
			}]
		}));
		reloadPlugins();
		return { install: installMessage(p, installedAt, next) };
	},
	async updateUserPluginInstall(request) {
		const id = String(request?.pluginId);
		const variables = toJson(request?.variables);
		const next = update((x) => ({
			...x,
			installs: x.installs.map((i) => i.plugin.id === id && variables !== void 0 ? {
				...i,
				variables
			} : i)
		}));
		const install = next.installs.find((i) => i.plugin.id === id);
		reloadPlugins();
		return { install: install === void 0 ? void 0 : installMessage(install.plugin, install.installedAt, next) };
	},
	async uninstallUserPlugin(request) {
		const id = String(request?.pluginId);
		update((x) => ({
			...x,
			installs: x.installs.filter((i) => i.plugin.id !== id)
		}));
		reloadPlugins();
		return { success: true };
	},
	async installTeamPlugin() {
		throw new Error(TEAM_ONLY);
	},
	async uninstallTeamPlugin() {
		throw new Error(TEAM_ONLY);
	},
	async addMarketplace(request) {
		if (request?.teamId !== void 0) throw new Error(TEAM_ONLY);
		const snap = await addGitHubMarketplace(request?.gitUrl, request?.gitRef);
		return { marketplace: marketplaceMessage(load().sources.find((s) => s.id === snap.sourceId), snap) };
	},
	async removeMarketplace(request) {
		const id = String(request?.marketplaceId);
		if (load().sources.some((s) => s.id === id && s.builtin)) throw new Error("Local mode's built-in marketplaces can't be removed.");
		update((x) => {
			const { [id]: _, ...snapshots } = x.snapshots;
			return {
				...x,
				sources: x.sources.filter((s) => s.id !== id),
				snapshots
			};
		});
		return { success: true };
	},
	async registerMarketplaceAndPlugins(request) {
		const snap = await addGitHubMarketplace(request?.gitUrl, request?.gitRef);
		return {
			marketplaceId: big(snap.sourceId),
			plugins: snap.plugins.map((p) => ({
				pluginId: big(p.id),
				name: p.name
			}))
		};
	}
};
/**
* A marketplace the extension host parsed (a GitHub URL pasted into the page's
* search, or a local folder): kept as parsed; GitHub ones refresh like the rest.
*/
async function persistParsed({ gitRef, parseResult }) {
	const parsed = {
		...parseResult,
		plugins: parseResult.plugins.map((p) => ({
			...p,
			variables: toJson(p.variables)
		}))
	};
	const source = addSource(parsed.repositoryUrl, gitRef);
	const snapshot = snapshotFromParse(source, parsed, gitRef, Date.now());
	update((s) => ({
		...s,
		snapshots: {
			...s.snapshots,
			[source.id]: snapshot
		}
	}));
}
/** The Claude Code marketplaces this machine knows, added like any GitHub marketplace. */
async function importClaudeMarketplaces() {
	const result = {
		discovered: 0,
		registered: 0,
		failed: 0
	};
	const payloads = await (await cursorHost().cursor.pluginsService?._waitForProvider())?.discoverClaudeMarketplacePayloads([]) ?? [];
	result.discovered = payloads.length;
	for (const p of payloads) {
		if (parseGitHubRepo(p.gitUrl) === void 0) {
			result.failed++;
			continue;
		}
		addSource(p.gitUrl);
		result.registered++;
	}
	if (result.registered > 0) {
		await ensureCatalog();
		await refreshPage().catch(() => {});
	}
	return result;
}
var marketplace = {
	provider,
	effectivePlugins: () => effectivePlugins(load()),
	/** `$resolveProjectPlugins`: project installs (`.cursor/settings.json`) by name. */
	resolveProjectPlugins: (refs) => {
		const s = load();
		return { plugins: resolvePluginRefs(s, refs).map((p) => pluginJson(p, s.snapshots[p.marketplaceId]?.gitRef)) };
	},
	persistParsed,
	importClaudeMarketplaces
};
//#endregion
//#region src/vs/workbench/contrib/localMode/browser/modelCatalog.ts
/**
* Local mode's model catalog: the enabled custom models, no backend round trip.
* Replaces AIService.refreshDefaultModels.
*/
async function refreshModels(aiService) {
	const { cursor } = cursorHost();
	const entries = enabledModels(routableProviders(readProviders(aiService._storageService)));
	const bareIds = /* @__PURE__ */ new Map();
	for (const { model } of entries) bareIds.set(model.id, (bareIds.get(model.id) ?? 0) + 1);
	const rows = entries.map(({ provider, model, id }) => {
		const context = contextWindow(model);
		const source = provider.name || provider.prefix || "custom provider";
		const effort = modelEffortTiers(provider, model);
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
			idAliases: bareIds.get(model.id) === 1 ? [model.id] : [],
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
		const effort = first === void 0 ? void 0 : modelEffortTiers(first.provider, first.model);
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
function routedDescriptor(provider) {
	return descriptor(provider, provider.kind === "subscriptions" ? userDataDir() : void 0);
}
/**
* Rewrites one agent turn onto the custom provider that owns its model:
* `<prefix>/<model>` becomes the bare model ID plus that provider's endpoint.
* Returns undefined when no custom models are configured (upstream behavior).
*/
function routeTurn(storage, modelDetails, runOptions) {
	const providers = routableProviders(readProviders(storage));
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
		cursorLocalProvider: routedDescriptor(hit.provider),
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
	const providers = routableProviders(readProviders(storage));
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
		cursorLocalProvider: routedDescriptor(hit.provider)
	};
}
//#endregion
//#region src/vs/workbench/contrib/localMode/browser/localMode.ts
/**
* Entry point of local mode in the agent window and the IDE.
*
* Loaded by the workbench bundle's host loader (build/patches/inject/workbench-host.js):
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
	marketplace,
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
