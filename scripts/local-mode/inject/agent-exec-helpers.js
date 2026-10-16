  // [cursor-re local mode] Custom providers.
  // The renderer attaches `cursorLocalProvider` ({ apiType, contextLengths }) to
  // every local agent / local inference request it routes to a custom provider.
  // The descriptor is remembered per base URL so that every helper that later
  // resolves the same endpoint (agent loop, smart-mode classifier, chat titles,
  // commit messages) speaks the provider's wire format.
  const __lcpProviders = new Map();
  function __lcpKey(baseUrl) {
    return "string" == typeof baseUrl ? baseUrl.trim().replace(/\/+$/u, "") : "";
  }
  function __lcpRegister(request) {
    const descriptor = request?.cursorLocalProvider;
    if (null === descriptor || "object" != typeof descriptor || "string" != typeof request.baseUrl) return;
    __lcpProviders.set(__lcpKey(request.baseUrl), descriptor);
  }
  function __lcpKind(baseUrl) {
    return __lcpProviders.get(__lcpKey(baseUrl));
  }
  function __lcpContextLength(baseUrl, modelId) {
    const n = __lcpKind(baseUrl)?.contextLengths?.[modelId];
    return "number" == typeof n && Number.isFinite(n) && n > 0 ? n : void 0;
  }
  function __lcpMaxOutputTokens(baseUrl, modelId) {
    const n = __lcpKind(baseUrl)?.maxOutputTokens?.[modelId];
    return "number" == typeof n && Number.isFinite(n) && n > 0 ? n : void 0;
  }
  // GET <baseUrl>/models for the Settings page, with the auth scheme of the
  // provider's API type. Understands OpenAI, Anthropic and OpenRouter-style rows.
  async function __lcpListModels(request) {
    const descriptor = request.cursorLocalProvider, baseUrl = __lcpKey(request.baseUrl), anthropic = "anthropic" === descriptor.apiType;
    const headers = { accept: "application/json", ...request.customHeaders ?? {} };
    if (request.apiKey) anthropic ? headers["x-api-key"] = request.apiKey : headers.authorization = `Bearer ${request.apiKey}`;
    anthropic && (headers["anthropic-version"] ??= "2023-06-01");
    const url = `${baseUrl}/models${anthropic ? "?limit=1000" : ""}`;
    let response;
    try {
      response = await fetch(url, { headers, signal: AbortSignal.timeout(2e4) });
    } catch (e) {
      throw new Error(`Could not reach ${url}: ${e instanceof Error ? e.cause?.message ?? e.message : String(e)}`);
    }
    const text = await response.text();
    if (!response.ok) throw new Error(`GET ${url} returned HTTP ${response.status}: ${text.slice(0, 300)}`);
    let body;
    try {
      body = JSON.parse(text);
    } catch {
      throw new Error(`GET ${url} did not return JSON`);
    }
    const rows = Array.isArray(body?.data) ? body.data : Array.isArray(body?.models) ? body.models : Array.isArray(body) ? body : [];
    const num = (v) => "number" == typeof v && Number.isFinite(v) && v > 0 ? Math.floor(v) : void 0;
    return { cursorLocalModels: rows.flatMap((row) => {
      const id = "string" == typeof row ? row : row?.id ?? row?.name;
      if ("string" != typeof id || "" === id.trim()) return [];
      return [{ id: id.trim(), contextWindow: num(row?.max_input_tokens) ?? num(row?.context_length) ?? num(row?.context_window) ?? num(row?.capabilities?.context_length) ?? num(row?.top_provider?.context_length), maxOutputTokens: num(row?.max_tokens) ?? num(row?.max_output_tokens) ?? num(row?.capabilities?.max_output_tokens) }];
    }) };
  }
