Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
//#region extensions/cursor-agent-exec/src/localMode.ts
globalThis.__cursorLocalModeProviders ??= /* @__PURE__ */ new Map();
var providers = globalThis.__cursorLocalModeProviders;
function key(baseUrl) {
	return typeof baseUrl === "string" ? baseUrl.trim().replace(/\/+$/u, "") : "";
}
function positive(value) {
	return typeof value === "number" && Number.isFinite(value) && value > 0 ? Math.floor(value) : void 0;
}
function register(request) {
	const descriptor = request?.cursorLocalProvider;
	if (descriptor === null || typeof descriptor !== "object" || typeof request?.baseUrl !== "string") return;
	providers.set(key(request.baseUrl), descriptor);
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
		const cause = e instanceof Error ? e.cause?.message ?? e.message : String(e);
		throw new Error(`Could not reach ${url}: ${cause}`);
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
//#endregion
exports.contextLength = contextLength;
exports.kind = kind;
exports.listModels = listModels;
exports.maxOutputTokens = maxOutputTokens;
exports.parseModelList = parseModelList;
exports.register = register;
