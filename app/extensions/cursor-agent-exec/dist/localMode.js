Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
//#region \0rolldown/runtime.js
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule || !__hasOwnProp.call(mod, "default") ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));
//#endregion
let node_crypto = require("node:crypto");
let node_child_process = require("node:child_process");
let node_fs = require("node:fs");
let node_fs_promises = require("node:fs/promises");
let node_net = require("node:net");
let node_path = require("node:path");
node_path = __toESM(node_path, 1);
//#region src/vs/workbench/contrib/localMode/common/subscriptions.ts
var ACCOUNT_TYPES = [
	"claude",
	"codex",
	"xai"
];
/** Wire format the agent runtime speaks to the sidecar for each account type's models. */
var ACCOUNT_API_TYPES = {
	claude: "anthropic",
	codex: "openai-responses",
	xai: "openai-responses"
};
function isAccountType(value) {
	return typeof value === "string" && ACCOUNT_TYPES.includes(value);
}
var ROUTING_STRATEGIES = [
	"round-robin",
	"weighted-round-robin",
	"fill-first"
];
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
/**
* The sidecar settings that apply without a restart, in CLIProxyAPI's v8
* config layout: written to config.yaml on start, PATCHed in when they change.
*/
function sidecarSettings(config) {
	const r = routingSettings(config.routing);
	return {
		routing: {
			strategy: ROUTING_STRATEGIES.includes(config.strategy ?? "") ? config.strategy : "round-robin",
			"session-affinity": r.sessionAffinity,
			"session-affinity-ttl": `${r.affinityTtlMinutes}m`,
			"session-affinity-rebind-on": r.rebindOn,
			retry: {
				"request-retry": r.retries,
				"max-retry-interval": r.retryWaitSeconds
			},
			cooldown: { "disable-cooling": !r.cooling }
		},
		upstream: {
			claude: { "model-level-cooling": r.modelCooling },
			codex: { "model-level-cooling": r.modelCooling }
		},
		requests: {
			"proxy-url": config.proxyUrl ?? "",
			streaming: { "bootstrap-retries": r.streamRetries }
		}
	};
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
function num(value) {
	const n = typeof value === "string" && value.trim() !== "" ? Number(value) : value;
	return typeof n === "number" && Number.isFinite(n) ? n : void 0;
}
function percent(value) {
	return Math.min(100, Math.max(0, value));
}
/** Epoch seconds, epoch ms or an ISO date, as epoch ms. */
function timestamp(value) {
	const n = num(value);
	if (n !== void 0) return n > 0xe8d4a51000 ? n : n * 1e3;
	if (typeof value === "string") {
		const ms = Date.parse(value);
		return Number.isNaN(ms) ? void 0 : ms;
	}
}
function obj(value) {
	return value !== null && typeof value === "object" && !Array.isArray(value) ? value : void 0;
}
/** "5-hour", "Weekly", … from a window length. */
function windowLabel(seconds) {
	const known = {
		3600: "Hourly",
		18e3: "5-hour",
		86400: "Daily",
		604800: "Weekly",
		2592e3: "Monthly"
	};
	if (known[seconds] !== void 0) return known[seconds];
	return seconds % 86400 === 0 ? `${seconds / 86400}-day` : `${Math.round(seconds / 3600)}-hour`;
}
function titleCase$1(text) {
	return text.replace(/[_-]+/gu, " ").replace(/\b\w/gu, (c) => c.toUpperCase());
}
function codexWindow(slot, now, prefix = "") {
	const w = obj(slot);
	const used = num(w?.used_percent);
	const minutes = num(w?.window_minutes);
	const seconds = num(w?.limit_window_seconds) ?? (minutes === void 0 ? void 0 : minutes * 60);
	if (w === void 0 || used === void 0 || seconds === 0) return;
	const after = num(w.reset_after_seconds);
	return {
		label: prefix + (seconds === void 0 ? "Limit" : windowLabel(seconds)),
		usedPercent: percent(used),
		resetsAt: timestamp(w.reset_at) ?? (after === void 0 ? void 0 : now + after * 1e3)
	};
}
function codexCredits(credits) {
	const c = obj(credits);
	if (c?.unlimited === true) return "Unlimited credits";
	const balance = num(c?.balance);
	return c?.has_credits === true && balance !== void 0 ? `Credits: ${balance.toFixed(2)}` : void 0;
}
/** GET https://chatgpt.com/backend-api/wham/usage */
function codexUsageQuota(body, now) {
	const b = obj(body) ?? {};
	const limits = obj(b.rate_limit) ?? obj(b.rate_limits) ?? {};
	const windows = [codexWindow(limits.primary_window, now), codexWindow(limits.secondary_window, now)].filter((w) => w !== void 0);
	for (const extra of Array.isArray(b.additional_rate_limits) ? b.additional_rate_limits : []) {
		const e = obj(extra);
		const name = String(e?.limit_name ?? e?.metered_feature ?? "").trim();
		const l = obj(e?.rate_limit) ?? e;
		for (const slot of [l?.primary_window, l?.secondary_window]) {
			const w = codexWindow(slot, now, name ? `${titleCase$1(name)} · ` : "");
			w && windows.push(w);
		}
	}
	const notes = [limits.limit_reached === true ? "Limit reached" : void 0, codexCredits(b.credits)].filter((n) => n !== void 0);
	return {
		checkedAt: now,
		source: "usage",
		plan: typeof b.plan_type === "string" && b.plan_type ? titleCase$1(b.plan_type) : void 0,
		windows,
		notes
	};
}
var CLAUDE_BUCKETS = {
	five_hour: "5-hour",
	seven_day: "Weekly",
	seven_day_opus: "Weekly · Opus",
	seven_day_sonnet: "Weekly · Sonnet"
};
/** GET https://api.anthropic.com/api/oauth/usage */
function claudeUsageQuota(body, now) {
	const b = obj(body) ?? {};
	const windows = [];
	for (const [key, value] of Object.entries(b)) {
		const label = CLAUDE_BUCKETS[key] ?? (/^seven_day_/u.test(key) ? `Weekly · ${titleCase$1(key.slice(10))}` : void 0);
		const used = num(obj(value)?.utilization);
		if (label !== void 0 && used !== void 0) windows.push({
			label,
			usedPercent: percent(used),
			resetsAt: timestamp(obj(value)?.resets_at)
		});
	}
	for (const limit of Array.isArray(b.limits) ? b.limits : []) {
		const l = obj(limit);
		const used = num(l?.percent) ?? num(l?.utilization);
		const model = String(l?.scope?.model?.display_name ?? "").trim();
		if (l?.kind === "weekly_scoped" && used !== void 0 && model) windows.push({
			label: `Weekly · ${model}`,
			usedPercent: percent(used),
			resetsAt: timestamp(l.resets_at)
		});
	}
	const order = (w) => w.label === "5-hour" ? 0 : w.label === "Weekly" ? 1 : 2;
	windows.sort((x, y) => order(x) - order(y));
	const extra = obj(b.extra_usage);
	const extraUsed = num(extra?.utilization);
	if (extra?.is_enabled === true && extraUsed !== void 0) windows.push({
		label: "Extra usage",
		usedPercent: percent(extraUsed)
	});
	return {
		checkedAt: now,
		source: "usage",
		windows,
		notes: []
	};
}
var CLAUDE_TIERS = {
	default_claude_max_20x: "Max 20x",
	default_claude_max_5x: "Max 5x",
	default_claude_ai: "Pro",
	claude_pro: "Pro"
};
/** Plan from GET https://api.anthropic.com/api/oauth/profile. */
function claudeProfilePlan(body) {
	const b = obj(body);
	const tier = String(b?.organization?.rate_limit_tier ?? "").trim();
	if (CLAUDE_TIERS[tier] !== void 0) return CLAUDE_TIERS[tier];
	if (b?.account?.has_claude_max === true) return "Max";
	if (b?.account?.has_claude_pro === true) return "Pro";
}
var GROK_PERIODS = {
	USAGE_PERIOD_TYPE_DAILY: "Daily",
	USAGE_PERIOD_TYPE_WEEKLY: "Weekly",
	USAGE_PERIOD_TYPE_MONTHLY: "Monthly"
};
/** GET <grok base>/billing?format=credits */
function grokBillingQuota(body, now) {
	const config = obj(obj(body)?.config) ?? {};
	const period = obj(config.currentPeriod);
	const label = GROK_PERIODS[String(period?.type ?? "")] ?? "Billing period";
	const resetsAt = timestamp(period?.end) ?? timestamp(config.billingPeriodEnd);
	let used = num(config.creditUsagePercent);
	if (used === void 0) {
		const limit = num(obj(config.monthlyLimit)?.val);
		const spent = num(obj(config.used)?.val);
		used = limit !== void 0 && limit > 0 && spent !== void 0 ? spent / limit * 100 : void 0;
	}
	return {
		checkedAt: now,
		source: "usage",
		windows: used === void 0 ? [] : [{
			label,
			usedPercent: percent(used),
			resetsAt
		}],
		notes: []
	};
}
/**
* Limits the provider reported on the account's last response (CLIProxyAPI's
* passive `quota.signals`): Claude's anthropic-ratelimit-unified-* (fractions)
* and Codex's x-codex-* headers.
*/
function headerQuota(type, signals, observedAt) {
	const s = new Map(Object.entries(obj(signals) ?? {}).map(([k, v]) => [k.toLowerCase(), Array.isArray(v) ? v[0] : v]));
	const windows = [];
	const notes = [];
	let plan;
	if (type === "claude") {
		for (const [key, label] of [["5h", "5-hour"], ["7d", "Weekly"]]) {
			const used = num(s.get(`anthropic-ratelimit-unified-${key}-utilization`));
			if (used !== void 0) windows.push({
				label,
				usedPercent: percent(used * 100),
				resetsAt: timestamp(s.get(`anthropic-ratelimit-unified-${key}-reset`))
			});
		}
		s.get("anthropic-ratelimit-unified-status") === "rejected" && notes.push("Limit reached");
	} else if (type === "codex") {
		for (const slot of ["primary", "secondary"]) {
			const used = num(s.get(`x-codex-${slot}-used-percent`));
			const minutes = num(s.get(`x-codex-${slot}-window-minutes`));
			const after = num(s.get(`x-codex-${slot}-reset-after-seconds`));
			if (used !== void 0 && minutes !== 0) windows.push({
				label: minutes === void 0 ? "Limit" : windowLabel(minutes * 60),
				usedPercent: percent(used),
				resetsAt: timestamp(s.get(`x-codex-${slot}-reset-at`)) ?? (after === void 0 ? void 0 : observedAt + after * 1e3)
			});
		}
		const p = s.get("x-codex-plan-type");
		plan = typeof p === "string" && p ? titleCase$1(p) : void 0;
		s.get("x-codex-limit-reached") === "true" && notes.push("Limit reached");
	}
	return windows.length === 0 && notes.length === 0 ? void 0 : {
		checkedAt: observedAt,
		source: "headers",
		plan,
		windows,
		notes
	};
}
var EFFORTS = [
	"none",
	"minimal",
	"low",
	"medium",
	"high",
	"xhigh",
	"max"
];
/** Turns a CLIProxyAPI model definition into a picker-ready model; undefined for non-chat models. */
function subscriptionModel(type, id, definition) {
	const d = obj(definition) ?? {};
	const outputs = Array.isArray(d.supportedOutputModalities) ? d.supportedOutputModalities : void 0;
	if (/(?:^|[-_.])(?:image|imagine|video|tts|voice|embedding|transcribe|audio)(?:$|[-_.\d])/iu.test(id) || outputs !== void 0 && !outputs.includes("text")) return;
	const levels = (Array.isArray(d.thinking?.levels) ? d.thinking.levels : []).filter((l) => EFFORTS.includes(String(l)));
	const inputs = Array.isArray(d.supportedInputModalities) ? d.supportedInputModalities : void 0;
	const context = num(d.context_length);
	const output = num(d.max_completion_tokens);
	return {
		id,
		type,
		...typeof d.display_name === "string" && d.display_name ? { displayName: d.display_name } : {},
		...context !== void 0 && context > 0 ? { contextWindow: context } : {},
		...output !== void 0 && output > 0 ? { maxOutputTokens: output } : {},
		...levels.length > 0 ? { efforts: levels } : {},
		...inputs === void 0 ? {} : { vision: inputs.includes("image") }
	};
}
//#endregion
//#region extensions/cursor-agent-exec/src/sidecar.ts
/**
* The CLIProxyAPI sidecar behind the Subscriptions provider.
*
* Started on demand (the Settings page or the first turn routed to it) with a
* generated config under the provider's data directory, bound to 127.0.0.1
* and gated by the provider's API key. It runs with CLIProxyAPI's local
* password, which turns on a keep-alive watchdog: the sidecar exits once
* nobody has pinged it for 10 seconds, so it never outlives Cursor. A new
* extension host (window reload, `bun run dev` reload) adopts a sidecar that
* is still alive instead of racing it for the port.
*/
globalThis.__cursorLocalModeSidecar ??= {
	current: void 0,
	queue: Promise.resolve()
};
var state = globalThis.__cursorLocalModeSidecar;
var KEEP_ALIVE_MS = 3e3;
var START_TIMEOUT_MS = 2e4;
var NOT_INSTALLED = "CLIProxyAPI is not installed. Run `bun run cliproxyapi` in the cursor-re checkout, `brew install cliproxyapi`, or set CURSOR_CLIPROXYAPI_BIN.";
/**
* CURSOR_CLIPROXYAPI_BIN, then the copy `bun run cliproxyapi` puts in
* app/resources/cliproxyapi, then PATH (plus Homebrew, which an app started
* from the Dock does not have on its PATH).
*/
function findBinary(env = process.env, dir = __dirname) {
	const override = env.CURSOR_CLIPROXYAPI_BIN?.trim();
	if (override) return override;
	const bundled = node_path.default.resolve(dir, "../../../resources/cliproxyapi/cli-proxy-api");
	if ((0, node_fs.existsSync)(bundled)) return bundled;
	const dirs = [
		...(env.PATH ?? "").split(node_path.default.delimiter),
		"/opt/homebrew/bin",
		"/usr/local/bin"
	];
	for (const d of dirs.filter(Boolean)) for (const name of ["cli-proxy-api", "cliproxyapi"]) {
		const file = node_path.default.join(d, name);
		if ((0, node_fs.existsSync)(file)) return file;
	}
}
var yaml = (value) => JSON.stringify(value);
/** Block-style YAML for nested maps of scalars (JSON strings are valid YAML scalars). */
function toYaml(map, indent = "") {
	return Object.entries(map).flatMap(([k, v]) => v !== null && typeof v === "object" ? [`${indent}${k}:`, ...toYaml(v, `${indent}  `)] : [`${indent}${k}: ${JSON.stringify(v)}`]);
}
/** config.yaml for one start (CLIProxyAPI v8 layout). */
function renderConfig(config, mgmtKey) {
	return [
		"# Generated by Cursor RE (Settings > Models > Subscriptions) on every start; edits are lost.",
		"config-version: 8",
		"server:",
		"  host: \"127.0.0.1\"",
		`  port: ${config.port}`,
		"management:",
		"  allow-remote: false",
		`  secret-key: ${yaml(mgmtKey)}`,
		"  disable-control-panel: true",
		"access:",
		"  api-keys:",
		`    - ${yaml(config.apiKey)}`,
		...toYaml(sidecarSettings(config)),
		"oauth:",
		`  auth-dir: ${yaml(node_path.default.join(config.dataDir, "auths"))}`,
		"observability:",
		"  usage:",
		"    usage-statistics-enabled: false",
		""
	].join("\n");
}
function restartKey(config) {
	return JSON.stringify([
		config.port,
		config.apiKey,
		config.dataDir
	]);
}
function checkConfig(config) {
	if (!Number.isInteger(config?.port) || config.port < 1024 || config.port > 65535) throw new Error("The Subscriptions port must be a number from 1024 to 65535.");
	if (typeof config.apiKey !== "string" || config.apiKey.trim() === "") throw new Error("The Subscriptions provider has no local API key.");
	if (typeof config.dataDir !== "string" || !node_path.default.isAbsolute(config.dataDir)) throw new Error("The Subscriptions data directory is not an absolute path.");
}
function alive(pid) {
	try {
		process.kill(pid, 0);
		return true;
	} catch {
		return false;
	}
}
async function waitFor(check, timeoutMs) {
	const deadline = Date.now() + timeoutMs;
	while (Date.now() < deadline) {
		if (await check()) return true;
		await new Promise((r) => setTimeout(r, 150));
	}
	return false;
}
async function ping(port, mgmtKey) {
	try {
		return (await fetch(`http://127.0.0.1:${port}/keep-alive`, {
			headers: { authorization: `Bearer ${mgmtKey}` },
			signal: AbortSignal.timeout(2e3)
		})).ok;
	} catch {
		return false;
	}
}
/** CLIProxyAPI's version, which only management responses carry. */
async function version(port, mgmtKey) {
	try {
		return (await fetch(`http://127.0.0.1:${port}/v8/management/config/server/port`, {
			headers: { authorization: `Bearer ${mgmtKey}` },
			signal: AbortSignal.timeout(2e3)
		})).headers.get("x-cpa-version") || void 0;
	} catch {
		return;
	}
}
function keepAlive(sidecar) {
	let misses = 0;
	const timer = setInterval(async () => {
		if (await ping(sidecar.config.port, sidecar.mgmtKey)) misses = 0;
		else if (++misses >= 3 || !alive(sidecar.pid)) markExited(sidecar);
	}, KEEP_ALIVE_MS);
	timer.unref?.();
	return timer;
}
function markExited(sidecar) {
	sidecar.exited = true;
	clearInterval(sidecar.timer);
	if (state.current === sidecar) state.current = void 0;
}
var savedPath = (config) => node_path.default.join(config.dataDir, "sidecar.json");
async function readSaved(config) {
	try {
		const s = JSON.parse(await (0, node_fs_promises.readFile)(savedPath(config), "utf8"));
		return typeof s?.pid === "number" && typeof s?.mgmtKey === "string" ? s : void 0;
	} catch {
		return;
	}
}
/**
* A sidecar a previous extension host started on this data directory: adopted
* when it matches, stopped when it doesn't (it holds the auth directory).
*/
async function adopt(config) {
	const saved = await readSaved(config);
	if (saved === void 0 || !alive(saved.pid) || !await ping(saved.port, saved.mgmtKey)) return;
	if (saved.port === config.port && saved.apiKey === config.apiKey) {
		const sidecar = {
			config: { ...config },
			mgmtKey: saved.mgmtKey,
			pid: saved.pid,
			binary: saved.binary,
			version: await version(saved.port, saved.mgmtKey),
			exited: false,
			timer: void 0
		};
		sidecar.timer = keepAlive(sidecar);
		return sidecar;
	}
	try {
		process.kill(saved.pid, "SIGTERM");
	} catch {}
	await waitFor(() => !alive(saved.pid), 5e3);
}
async function tail(file, lines = 12) {
	try {
		return (await (0, node_fs_promises.readFile)(file, "utf8")).trimEnd().split("\n").slice(-lines).join("\n");
	} catch {
		return "";
	}
}
function listening(port) {
	return new Promise((resolve) => {
		const socket = (0, node_net.connect)({
			host: "127.0.0.1",
			port
		});
		const done = (busy) => {
			socket.destroy();
			resolve(busy);
		};
		socket.once("connect", () => done(true));
		socket.once("error", () => done(false));
		socket.setTimeout(1e3, () => done(false));
	});
}
var portInUse = (port) => /* @__PURE__ */ new Error(`Port ${port} is already in use. Pick another port under Advanced.`);
async function start(config) {
	const binary = findBinary();
	if (binary === void 0) throw new Error(NOT_INSTALLED);
	if (await listening(config.port)) throw portInUse(config.port);
	await (0, node_fs_promises.mkdir)(node_path.default.join(config.dataDir, "auths"), {
		recursive: true,
		mode: 448
	});
	await (0, node_fs_promises.chmod)(config.dataDir, 448);
	const mgmtKey = (0, node_crypto.randomBytes)(24).toString("hex");
	const configFile = node_path.default.join(config.dataDir, "config.yaml");
	await (0, node_fs_promises.writeFile)(configFile, renderConfig(config, mgmtKey), { mode: 384 });
	await (0, node_fs_promises.chmod)(configFile, 384);
	const logFile = node_path.default.join(config.dataDir, "sidecar.log");
	const log = (0, node_fs.openSync)(logFile, "w", 384);
	const env = { ...process.env };
	delete env.MANAGEMENT_PASSWORD;
	let sidecar;
	let child;
	try {
		child = (0, node_child_process.spawn)(binary, [
			"-config",
			configFile,
			"-password",
			mgmtKey
		], {
			cwd: config.dataDir,
			stdio: [
				"ignore",
				log,
				log
			],
			env
		});
	} finally {
		(0, node_fs.closeSync)(log);
	}
	let exit;
	child.once("error", (e) => {
		exit = e.message;
	});
	child.once("exit", (code, signal) => {
		exit ??= signal ? `killed by ${signal}` : `exit code ${code}`;
		sidecar !== void 0 && markExited(sidecar);
	});
	const up = await waitFor(async () => exit !== void 0 || await ping(config.port, mgmtKey), START_TIMEOUT_MS);
	if (exit !== void 0 || !up) {
		child.kill();
		const output = await tail(logFile);
		if (/address already in use/iu.test(output)) throw portInUse(config.port);
		throw new Error(`CLIProxyAPI (${binary}) did not start${exit ? ` (${exit})` : ""}.${output ? `\n\n${output}` : ""}`);
	}
	sidecar = {
		config: { ...config },
		mgmtKey,
		pid: child.pid,
		binary,
		version: await version(config.port, mgmtKey),
		exited: false,
		timer: void 0,
		applied: JSON.stringify(sidecarSettings(config))
	};
	sidecar.timer = keepAlive(sidecar);
	const saved = {
		pid: sidecar.pid,
		port: config.port,
		apiKey: config.apiKey,
		mgmtKey,
		binary
	};
	await (0, node_fs_promises.writeFile)(savedPath(config), JSON.stringify(saved), { mode: 384 });
	return sidecar;
}
/** Applies the settings that don't need a restart (strategy, routing, default proxy). */
async function apply(sidecar, config) {
	const settings = sidecarSettings(config);
	if (sidecar.applied === JSON.stringify(settings)) return;
	await management(sidecar, "PATCH", "/config", settings);
	sidecar.config = {
		...sidecar.config,
		strategy: config.strategy,
		proxyUrl: config.proxyUrl,
		routing: config.routing
	};
	sidecar.applied = JSON.stringify(settings);
}
/** The running sidecar for `config`, started (or restarted) as needed. */
function ensureSidecar(config) {
	const run = state.queue.then(async () => {
		checkConfig(config);
		let sidecar = state.current;
		if (sidecar !== void 0 && (sidecar.exited || restartKey(sidecar.config) !== restartKey(config))) {
			await stopSidecar();
			sidecar = void 0;
		}
		if (sidecar === void 0) {
			sidecar = await adopt(config) ?? await start(config);
			state.current = sidecar;
		}
		await apply(sidecar, config);
		return sidecar;
	});
	state.queue = run.catch(() => {});
	return run;
}
async function stopSidecar() {
	const sidecar = state.current;
	if (sidecar === void 0) return;
	markExited(sidecar);
	if (alive(sidecar.pid)) {
		try {
			process.kill(sidecar.pid, "SIGTERM");
		} catch {}
		await waitFor(() => !alive(sidecar.pid), 5e3);
	}
}
/** Calls CLIProxyAPI's management API (v8). */
async function management(sidecar, method, pathAndQuery, body, timeoutMs = 15e3) {
	const url = `http://127.0.0.1:${sidecar.config.port}/v8/management${pathAndQuery}`;
	let res;
	try {
		res = await fetch(url, {
			method,
			headers: {
				authorization: `Bearer ${sidecar.mgmtKey}`,
				...body === void 0 ? {} : { "content-type": "application/json" }
			},
			body: body === void 0 ? void 0 : JSON.stringify(body),
			signal: AbortSignal.timeout(timeoutMs)
		});
	} catch (e) {
		throw new Error(`CLIProxyAPI did not answer ${method} ${pathAndQuery}: ${e.message}`);
	}
	const text = await res.text();
	let json;
	try {
		json = text === "" ? {} : JSON.parse(text);
	} catch {
		json = void 0;
	}
	if (!res.ok) throw new Error(String(json?.error ?? json?.message ?? `HTTP ${res.status} from CLIProxyAPI`));
	return json ?? {};
}
/** Opens a sign-in page in the user's browser. */
function openExternal(url) {
	if (process.platform === "darwin" && /^https?:\/\//iu.test(url)) (0, node_child_process.execFile)("/usr/bin/open", [url], () => {});
}
//#endregion
//#region extensions/cursor-agent-exec/src/subscriptions.ts
/**
* Requests from the Settings page's Subscriptions provider, served against the
* CLIProxyAPI sidecar's management API (sidecar.ts). They arrive over the
* local-provider model listing IPC (see build/patches, agent-exec/list-models).
*
* Tokens never leave the sidecar: usage endpoints are called through its
* api-call route, which fills in the account's token and proxy.
*/
var CODEX_USER_AGENT = "codex-tui/0.154.0 (Mac OS 26.5.2; arm64) iTerm.app/3.6.11 (codex-tui; 0.154.0)";
var CLAUDE_USER_AGENT = "claude-cli/2.1.280 (external, cli)";
var GROK_CLIENT_VERSION = "1.0.62";
globalThis.__cursorLocalModeQuotas ??= /* @__PURE__ */ new Map();
var quotas = globalThis.__cursorLocalModeQuotas;
async function credentials(sidecar) {
	const body = await management(sidecar, "GET", "/credentials");
	return Array.isArray(body?.files) ? body.files : [];
}
async function credential(sidecar, name) {
	const row = (await credentials(sidecar)).find((r) => r.name === name);
	if (row === void 0) throw new Error(`Account ${name} is not signed in anymore.`);
	return row;
}
async function credentialFile(row) {
	if (!row.path) return {};
	try {
		const f = JSON.parse(await (0, node_fs_promises.readFile)(row.path, "utf8"));
		const text = (v) => typeof v === "string" && v.trim() !== "" ? v.trim() : void 0;
		return {
			proxy_url: text(f?.proxy_url),
			plan_type: text(f?.plan_type),
			account_id: text(f?.account_id),
			base_url: text(f?.base_url),
			email: text(f?.email)
		};
	} catch {
		return {};
	}
}
var typeOf = (row) => String(row.type ?? row.provider ?? "").toLowerCase();
function titleCase(text) {
	return text.replace(/[_-]+/gu, " ").replace(/\b\w/gu, (c) => c.toUpperCase());
}
async function toAccount(row) {
	const type = typeOf(row);
	const file = await credentialFile(row);
	const observed = Date.parse(row.quota?.observed_at ?? "");
	const fromHeaders = Number.isNaN(observed) ? void 0 : headerQuota(type, row.quota?.signals, observed);
	const fetched = quotas.get(row.name);
	const quota = fetched !== void 0 && (fromHeaders === void 0 || fetched.checkedAt >= fromHeaders.checkedAt) ? fetched : fromHeaders;
	const plan = fetched?.plan ?? fromHeaders?.plan ?? row.id_token?.plan_type ?? file.plan_type;
	const retry = Date.parse(row.next_retry_after ?? "");
	return {
		name: row.name,
		type,
		email: row.email ?? file.email ?? (row.label && row.label !== row.name ? row.label : void 0),
		plan: plan ? titleCase(plan) : void 0,
		disabled: row.disabled === true,
		status: row.disabled === true ? "disabled" : String(row.status ?? "active"),
		statusMessage: row.status_message || void 0,
		coolingUntil: Number.isNaN(retry) || retry <= Date.now() ? void 0 : retry,
		proxyUrl: file.proxy_url,
		priority: typeof row.priority === "number" ? row.priority : void 0,
		weight: typeof row.weight === "number" ? row.weight : void 0,
		success: Number(row.success ?? 0),
		failed: Number(row.failed ?? 0),
		quota
	};
}
async function status(sidecar) {
	const rows = await credentials(sidecar);
	return {
		running: true,
		version: sidecar.version,
		binary: sidecar.binary,
		accounts: await Promise.all(rows.map(toAccount))
	};
}
async function login(sidecar, type) {
	if (!isAccountType(type)) throw new Error(`Unknown account type ${type}.`);
	let manual = false;
	let r;
	try {
		r = await management(sidecar, "GET", `/oauth/auth-url?provider=${type}&is_webui=true`);
	} catch (e) {
		if (!/callback server/iu.test(e.message)) throw e;
		r = await management(sidecar, "GET", `/oauth/auth-url?provider=${type}`);
		manual = true;
	}
	if (typeof r?.url !== "string" || typeof r?.state !== "string") throw new Error("CLIProxyAPI did not return a sign-in link.");
	openExternal(r.url);
	const device = r.flow === "device";
	const expiresIn = Number(r.expires_in);
	return {
		state: r.state,
		url: r.url,
		flow: device ? "device" : "browser",
		...typeof r.user_code === "string" && r.user_code ? { userCode: r.user_code } : {},
		expiresAt: Date.now() + (Number.isFinite(expiresIn) && expiresIn > 0 ? expiresIn * 1e3 : 3e5),
		...manual ? { manual } : {}
	};
}
async function loginStatus(sidecar, state) {
	const r = await management(sidecar, "GET", `/oauth/status?state=${encodeURIComponent(state)}`);
	const s = r?.status === "ok" || r?.status === "error" ? r.status : "wait";
	return s === "error" ? {
		status: s,
		error: String(r?.error ?? "Sign-in failed.")
	} : { status: s };
}
async function loginCallback(sidecar, state, input) {
	const parsed = parseCallbackInput(input);
	if (parsed === void 0) throw new Error("Paste the address the browser landed on, or the code it showed.");
	await management(sidecar, "POST", "/oauth/callback", {
		state,
		..."redirectUrl" in parsed ? { redirect_url: parsed.redirectUrl } : { code: parsed.code }
	});
	return loginStatus(sidecar, state);
}
async function update(sidecar, name, patch) {
	if (patch.disabled !== void 0) await management(sidecar, "PATCH", "/credentials/status", {
		name,
		disabled: patch.disabled
	});
	const fields = {};
	if (patch.proxyUrl !== void 0) {
		const error = validateProxyUrl(patch.proxyUrl);
		if (error !== void 0) throw new Error(error);
		fields.proxy_url = patch.proxyUrl.trim();
	}
	if (patch.priority !== void 0) fields.priority = Math.trunc(patch.priority);
	if (patch.weight !== void 0) fields.weight = Math.max(0, Math.min(1e6, Math.trunc(patch.weight)));
	if (Object.keys(fields).length > 0) await management(sidecar, "PATCH", "/credentials/fields", {
		name,
		...fields
	});
	return status(sidecar);
}
/** Lets a benched account serve again right away. */
async function resetCooldown(sidecar, name) {
	await management(sidecar, "POST", "/routing/cooldown/reset", { auth_index: (await credential(sidecar, name)).auth_index });
	return status(sidecar);
}
async function remove(sidecar, name) {
	await management(sidecar, "DELETE", `/credentials?name=${encodeURIComponent(name)}`);
	quotas.delete(name);
	return status(sidecar);
}
/** CLIProxyAPI's api-call says only "request failed" when it could not connect. */
function unreachable(e, url, proxyUrl) {
	if (e.message !== "request failed") return e;
	const via = proxyUrl ? ` through ${maskProxyUrl(proxyUrl)}` : "";
	return /* @__PURE__ */ new Error(`Could not connect to ${new URL(url).host}${via}. Check the network or the proxy.`);
}
/** An upstream call made by the sidecar with the account's token ($TOKEN$) and proxy. */
async function upstream(sidecar, row, url, header) {
	let r;
	try {
		r = await management(sidecar, "POST", "/requests/api-call", {
			auth_index: row.auth_index,
			method: "GET",
			url,
			header: {
				Authorization: "Bearer $TOKEN$",
				...header
			}
		}, 7e4);
	} catch (e) {
		throw unreachable(e, url, (await credentialFile(row)).proxy_url ?? sidecar.config.proxyUrl);
	}
	let body = r?.body;
	try {
		body = typeof r?.body === "string" ? JSON.parse(r.body) : r?.body;
	} catch {}
	return {
		status: Number(r?.status_code),
		body
	};
}
function upstreamError(what, r) {
	if (r.status === 401 || r.status === 403) return /* @__PURE__ */ new Error(`${what}: the sign-in was rejected (HTTP ${r.status}). Sign in to this account again.`);
	if (r.status === 426) return /* @__PURE__ */ new Error(`${what}: xAI asks for a newer Grok CLI version (HTTP 426).`);
	const text = typeof r.body === "string" ? r.body : JSON.stringify(r.body ?? "");
	return /* @__PURE__ */ new Error(`${what}: HTTP ${r.status}${text ? ` ${text.slice(0, 200)}` : ""}`);
}
async function fetchQuota(sidecar, name) {
	const row = await credential(sidecar, name);
	const type = typeOf(row);
	const file = await credentialFile(row);
	const now = Date.now();
	let quota;
	if (type === "codex") {
		const accountId = row.id_token?.chatgpt_account_id ?? file.account_id;
		const r = await upstream(sidecar, row, "https://chatgpt.com/backend-api/wham/usage", {
			Accept: "application/json",
			"User-Agent": CODEX_USER_AGENT,
			Originator: "codex-tui",
			...accountId ? { "ChatGPT-Account-Id": accountId } : {}
		});
		if (r.status !== 200) throw upstreamError("Codex usage", r);
		quota = codexUsageQuota(r.body, now);
	} else if (type === "claude") {
		const headers = {
			Accept: "application/json, text/plain, */*",
			"Content-Type": "application/json",
			"User-Agent": CLAUDE_USER_AGENT,
			"anthropic-beta": "oauth-2025-04-20"
		};
		const [usage, profile] = await Promise.all([upstream(sidecar, row, "https://api.anthropic.com/api/oauth/usage", headers), quotas.get(name)?.plan === void 0 ? upstream(sidecar, row, "https://api.anthropic.com/api/oauth/profile", headers).catch(() => void 0) : Promise.resolve(void 0)]);
		if (usage.status !== 200) throw upstreamError("Claude usage", usage);
		quota = claudeUsageQuota(usage.body, now);
		quota.plan = (profile?.status === 200 ? claudeProfilePlan(profile.body) : void 0) ?? quotas.get(name)?.plan;
	} else if (type === "xai") {
		const r = await upstream(sidecar, row, `${(file.base_url ?? "https://cli-chat-proxy.grok.com/v1").replace(/\/+$/u, "")}/billing?format=credits`, {
			Accept: "application/json",
			"User-Agent": `grok-shell/${GROK_CLIENT_VERSION} (macos; aarch64)`,
			"X-XAI-Token-Auth": "xai-grok-cli",
			"x-grok-client-version": GROK_CLIENT_VERSION,
			"x-grok-client-identifier": "grok-shell",
			"x-grok-client-mode": "headless"
		});
		if (r.status !== 200) throw upstreamError("Grok usage", r);
		quota = grokBillingQuota(r.body, now);
	} else throw new Error(`Usage limits are not available for ${type} accounts.`);
	quotas.set(name, quota);
	return quota;
}
/** Chat models of the signed-in, enabled accounts, with what CLIProxyAPI knows about them. */
async function models(sidecar) {
	const rows = (await credentials(sidecar)).filter((r) => r.disabled !== true && isAccountType(typeOf(r)));
	const byType = /* @__PURE__ */ new Map();
	await Promise.all(rows.map(async (row) => {
		const body = await management(sidecar, "GET", `/credentials/models?name=${encodeURIComponent(row.name)}`);
		const type = typeOf(row);
		const ids = byType.get(type) ?? /* @__PURE__ */ new Set();
		for (const m of Array.isArray(body?.models) ? body.models : []) typeof m?.id === "string" && m.id && ids.add(m.id);
		byType.set(type, ids);
	}));
	const listed = [];
	for (const [type, ids] of byType) {
		const defs = await management(sidecar, "GET", `/routing/model-definitions/${type}`).catch(() => ({}));
		const known = new Map((Array.isArray(defs?.models) ? defs.models : []).map((d) => [String(d?.id), d]));
		for (const id of ids) {
			const m = subscriptionModel(type, id, known.get(id));
			if (m !== void 0) listed.push({
				id: m.id,
				apiType: ACCOUNT_API_TYPES[type],
				contextWindow: m.contextWindow,
				maxOutputTokens: m.maxOutputTokens,
				...m.efforts === void 0 ? {} : { efforts: m.efforts },
				...m.vision === void 0 ? {} : { vision: m.vision }
			});
		}
	}
	return { cursorLocalModels: listed };
}
var PROXY_TARGETS = {
	claude: "https://api.anthropic.com/",
	codex: "https://chatgpt.com/",
	xai: "https://auth.x.ai/.well-known/openid-configuration"
};
/** Reaches the account type's provider through `proxyUrl`. */
async function checkProxy(sidecar, proxyUrl, type) {
	const error = validateProxyUrl(proxyUrl);
	if (error !== void 0 || proxyUrl.trim() === "") return {
		ok: false,
		ms: 0,
		text: error ?? "Enter a proxy URL first."
	};
	const target = PROXY_TARGETS[type] ?? PROXY_TARGETS.claude;
	const started = Date.now();
	try {
		const r = await management(sidecar, "POST", "/requests/api-call", {
			method: "GET",
			url: target,
			proxy_url: proxyUrl.trim(),
			header: { "User-Agent": "Cursor" }
		}, 3e4);
		const ms = Date.now() - started;
		const code = Number(r?.status_code);
		return {
			ok: code > 0,
			ms,
			text: `Reached ${new URL(target).host} in ${ms} ms (HTTP ${code}).`
		};
	} catch (e) {
		return {
			ok: false,
			ms: Date.now() - started,
			text: unreachable(e, target, proxyUrl).message
		};
	}
}
async function handle(request) {
	if (request === null || typeof request !== "object" || request.sidecar === void 0) throw new Error("Malformed subscriptions request.");
	let sidecar;
	try {
		sidecar = await ensureSidecar(request.sidecar);
	} catch (e) {
		if (request.op === "status") return {
			running: false,
			error: e.message,
			accounts: []
		};
		throw e;
	}
	switch (request.op) {
		case "status": return status(sidecar);
		case "login": return login(sidecar, request.type);
		case "login-status": return loginStatus(sidecar, request.state);
		case "login-callback": return loginCallback(sidecar, request.state, request.input);
		case "login-cancel":
			await management(sidecar, "DELETE", `/oauth/session?state=${encodeURIComponent(request.state)}`).catch(() => {});
			return {
				status: "error",
				error: "Cancelled."
			};
		case "update": return update(sidecar, request.name, request.patch ?? {});
		case "remove": return remove(sidecar, request.name);
		case "reset-cooldown": return resetCooldown(sidecar, request.name);
		case "quota": return fetchQuota(sidecar, request.name);
		case "models": return models(sidecar);
		case "check-proxy": return checkProxy(sidecar, request.proxyUrl, request.type);
		default: throw new Error(`Unknown subscriptions request ${request.op}.`);
	}
}
//#endregion
//#region extensions/cursor-agent-exec/src/localMode.ts
/**
* Local mode support inside cursor-agent-exec (extension host).
*
* The renderer attaches a `cursorLocalProvider` descriptor to every local agent
* / local inference request it routes to a custom provider. It is remembered
* per base URL so that every helper that later resolves the same endpoint
* (agent loop, smart-mode classifier, chat titles, commit messages) speaks the
* provider's wire format.
*
* Built to app/extensions/cursor-agent-exec/dist/localMode.js and required by
* the patched dist/main.js (build/patches/inject/agent-exec-host.js).
*/
globalThis.__cursorLocalModeProviders ??= /* @__PURE__ */ new Map();
var providers = globalThis.__cursorLocalModeProviders;
function key(baseUrl) {
	return typeof baseUrl === "string" ? baseUrl.trim().replace(/\/+$/u, "") : "";
}
function positive(value) {
	return typeof value === "number" && Number.isFinite(value) && value > 0 ? Math.floor(value) : void 0;
}
/** Remembers the request's provider; a subscriptions provider's sidecar is started first. */
async function register(request) {
	const descriptor = request?.cursorLocalProvider;
	if (descriptor === null || typeof descriptor !== "object" || typeof request?.baseUrl !== "string") return;
	providers.set(key(request.baseUrl), descriptor);
	if (descriptor.sidecar !== void 0) await ensureSidecar(descriptor.sidecar);
}
/** A Settings page request for the Subscriptions provider (see subscriptions.ts). */
function subscriptions(request) {
	return handle(request);
}
function kind(baseUrl) {
	return providers.get(key(baseUrl));
}
function contextLength(baseUrl, modelId) {
	return positive(kind(baseUrl)?.contextLengths?.[modelId]);
}
function maxOutputTokens(baseUrl, modelId) {
	return positive(kind(baseUrl)?.maxOutputTokens?.[modelId]);
}
/**
* The effort values the picker offered for the model. The runtime's own table
* only knows gpt-5.x, so without this it drops the effort of every other
* OpenAI-compatible model (gpt-6-*, grok-*, a custom provider's models).
*/
function effortValues(baseUrl, modelId) {
	const values = kind(baseUrl)?.efforts?.[modelId];
	return Array.isArray(values) && values.length > 0 ? values : void 0;
}
/** The effort a turn asks for, read the way the runtime reads it (off: undefined). */
function requestedEffort(modelParameters) {
	const p = Array.isArray(modelParameters) ? modelParameters.find((x) => [
		"reasoning",
		"effort",
		"thought_level"
	].includes(x?.id)) : void 0;
	return typeof p?.value === "string" && p.value !== "" && p.value !== "none" ? p.value : void 0;
}
/**
* Wraps the Responses fetch of a subscriptions model so that, when thinking is
* on, it asks for reasoning summaries: what the transcript shows as thinking.
* The runtime's own wrapper (called next) sets the effort. Only for the
* sidecar: the OpenAI API rejects summaries for unverified organizations.
*/
function reasoningFetch(baseUrl, modelId, modelParameters, fetch) {
	const effort = requestedEffort(modelParameters);
	if (kind(baseUrl)?.sidecar === void 0 || effort === void 0 || !effortValues(baseUrl, modelId)?.includes(effort)) return fetch;
	return (input, init) => fetch(input, withSummary(init));
}
function withSummary(init) {
	if (typeof init?.body !== "string") return init;
	try {
		const body = JSON.parse(init.body);
		if (body === null || typeof body !== "object" || Array.isArray(body)) return init;
		const reasoning = body.reasoning !== null && typeof body.reasoning === "object" ? body.reasoning : {};
		return {
			...init,
			body: JSON.stringify({
				...body,
				reasoning: {
					summary: "auto",
					...reasoning
				}
			})
		};
	} catch {
		return init;
	}
}
/** OpenAI's limit on tool call ids (`call_id`, `tool_call_id`). */
var TOOL_ID_LIMIT = 64;
var ANTHROPIC_TOOL_ID = /^[a-zA-Z0-9_-]+$/u;
/**
* A tool call id this provider accepts. A chat keeps the ids of every model it
* ran on, and Codex call ids (Subscriptions) run past 64 characters: CLIProxyAPI
* shortens them for Codex, but a direct endpoint rejects the next turn ("Invalid
* 'input[n].call_id': string too long"). Overlong ids, and ids Anthropic's
* pattern rejects, become a prefix plus a hash, the same in every request, so
* calls and their results still pair up.
*/
function shortToolId(id, anthropic) {
	if (id.length <= TOOL_ID_LIMIT && (!anthropic || ANTHROPIC_TOOL_ID.test(id))) return id;
	const hash = (0, node_crypto.createHash)("sha256").update(id).digest("hex").slice(0, 16);
	return `${id.replace(/[^a-zA-Z0-9_-]/gu, "_").slice(0, TOOL_ID_LIMIT - hash.length - 1)}_${hash}`;
}
/** Rewrites the tool call ids of a Responses, Chat Completions or Messages body; undefined if none changed. */
function shortenToolIds(body) {
	if (body === null || typeof body !== "object" || Array.isArray(body)) return;
	const b = body;
	let changed = false;
	const fix = (id, anthropic) => {
		if (typeof id !== "string") return id;
		const short = shortToolId(id, anthropic);
		changed ||= short !== id;
		return short;
	};
	const input = Array.isArray(b.input) ? b.input.map((item) => item !== null && typeof item === "object" && "call_id" in item ? {
		...item,
		call_id: fix(item.call_id, false)
	} : item) : b.input;
	const messages = Array.isArray(b.messages) ? b.messages.map((m) => {
		if (m === null || typeof m !== "object") return m;
		const next = { ...m };
		if (Array.isArray(next.tool_calls)) next.tool_calls = next.tool_calls.map((c) => c !== null && typeof c === "object" ? {
			...c,
			id: fix(c.id, false)
		} : c);
		if ("tool_call_id" in next) next.tool_call_id = fix(next.tool_call_id, false);
		if (Array.isArray(next.content)) next.content = next.content.map((part) => part?.type === "tool_use" ? {
			...part,
			id: fix(part.id, true)
		} : part?.type === "tool_result" ? {
			...part,
			tool_use_id: fix(part.tool_use_id, true)
		} : part);
		return next;
	}) : b.messages;
	return changed ? {
		...b,
		...input === void 0 ? {} : { input },
		...messages === void 0 ? {} : { messages }
	} : void 0;
}
/** Wraps a custom provider's fetch with shortenToolIds. The sidecar does its own. */
function toolIdFetch(baseUrl, fetch) {
	const provider = kind(baseUrl);
	if (provider === void 0 || provider.sidecar !== void 0) return fetch;
	return (input, init) => {
		if (typeof init?.body !== "string") return fetch(input, init);
		let body;
		try {
			body = shortenToolIds(JSON.parse(init.body));
		} catch {
			body = void 0;
		}
		return fetch(input, body === void 0 ? init : {
			...init,
			body: JSON.stringify(body)
		});
	};
}
/** Parses OpenAI, Anthropic and OpenRouter-style /models rows. */
function parseModelList(body) {
	const b = body;
	return (Array.isArray(b?.data) ? b.data : Array.isArray(b?.models) ? b.models : Array.isArray(b) ? b : []).flatMap((row) => {
		const r = row;
		const id = typeof row === "string" ? row : r?.id ?? r?.name;
		if (typeof id !== "string" || id.trim() === "") return [];
		return [{
			id: id.trim(),
			contextWindow: positive(r?.max_input_tokens) ?? positive(r?.context_length) ?? positive(r?.context_window) ?? positive(r?.capabilities?.context_length) ?? positive(r?.top_provider?.context_length),
			maxOutputTokens: positive(r?.max_tokens) ?? positive(r?.max_output_tokens) ?? positive(r?.capabilities?.max_output_tokens)
		}];
	});
}
/** GET <baseUrl>/models for the Settings page, with the provider's auth scheme. */
async function listModels(request) {
	const anthropic = request.cursorLocalProvider?.apiType === "anthropic";
	const headers = {
		accept: "application/json",
		...request.customHeaders ?? {}
	};
	if (request.apiKey) {
		if (anthropic) headers["x-api-key"] = request.apiKey;
		else headers.authorization = `Bearer ${request.apiKey}`;
	}
	if (anthropic) headers["anthropic-version"] ??= "2023-06-01";
	const url = `${key(request.baseUrl)}/models${anthropic ? "?limit=1000" : ""}`;
	let response;
	try {
		response = await fetch(url, {
			headers,
			signal: AbortSignal.timeout(2e4)
		});
	} catch (e) {
		throw new Error(`Could not reach ${url}: ${describeFetchError(e)}`);
	}
	const text = await response.text();
	if (!response.ok) throw new Error(`GET ${url} returned HTTP ${response.status}: ${text.slice(0, 300)}`);
	let body;
	try {
		body = JSON.parse(text);
	} catch {
		throw new Error(`GET ${url} did not return JSON`);
	}
	return { cursorLocalModels: parseModelList(body) };
}
var NETWORK_ERRORS = {
	ECONNREFUSED: "connection refused. Is the server running?",
	ENOTFOUND: "host not found.",
	EAI_AGAIN: "DNS lookup failed. Check the network.",
	ECONNRESET: "the connection was reset.",
	ETIMEDOUT: "the connection timed out.",
	UND_ERR_CONNECT_TIMEOUT: "the connection timed out."
};
/**
* Node's fetch throws "fetch failed" and hides the reason in `cause`, often an
* AggregateError with an empty message (one attempt per resolved address).
*/
function describeFetchError(e) {
	if (!(e instanceof Error)) return String(e);
	if (e.name === "TimeoutError") return "no response within 20 seconds.";
	const cause = e.cause;
	const code = cause?.code ?? cause?.errors?.find((x) => x.code)?.code;
	if (code !== void 0) return NETWORK_ERRORS[code] ?? (cause?.message || code);
	return cause?.message || e.message;
}
//#endregion
exports.contextLength = contextLength;
exports.describeFetchError = describeFetchError;
exports.effortValues = effortValues;
exports.kind = kind;
exports.listModels = listModels;
exports.maxOutputTokens = maxOutputTokens;
exports.parseModelList = parseModelList;
exports.reasoningFetch = reasoningFetch;
exports.register = register;
exports.requestedEffort = requestedEffort;
exports.shortToolId = shortToolId;
exports.shortenToolIds = shortenToolIds;
exports.subscriptions = subscriptions;
exports.toolIdFetch = toolIdFetch;
exports.withSummary = withSummary;
