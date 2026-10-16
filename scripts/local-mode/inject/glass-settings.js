import { useState as __lcpUseState } from "./react-runtime/react/esm-index-production.js";
import { jsx as __lcpJsx, jsxs as __lcpJsxs } from "./react-runtime/react/esm-jsx-runtime-production.js";
// [cursor-re local mode] Settings > Models > Custom Providers.
var __lcpApiTypeLabels = { "openai-chat": "OpenAI Chat Completions", "openai-responses": "OpenAI Responses", anthropic: "Anthropic Messages" };
var __lcpBaseUrlHints = { "openai-chat": "https://api.openai.com/v1", "openai-responses": "https://api.openai.com/v1", anthropic: "https://api.anthropic.com" };
var __lcpInputStyle = { width: "min(340px, 100%)", boxSizing: "border-box", padding: "4px 8px", fontSize: "12px", fontFamily: "inherit", color: "var(--vscode-input-foreground)", background: "var(--vscode-input-background)", border: "1px solid var(--vscode-settings-dropdownBorder, var(--vscode-input-border, transparent))", borderRadius: "4px", outline: "none" };
function __lcpNewProvider(existing) {
  let n = existing.length + 1, prefix = "custom-provider";
  for (const used = new Set(existing.map((p) => p.prefix)); used.has(prefix); ) prefix = `custom-provider-${++n}`;
  return { name: prefix, prefix, apiType: "openai-chat", baseUrl: "", apiKey: "", headers: "", models: [] };
}
function __lcpValidate(providers) {
  const prefixes = /* @__PURE__ */ new Set();
  for (const p of providers) {
    const label = p.name?.trim() || "(unnamed provider)";
    if (!p.name?.trim()) return "Every provider needs a name.";
    if (!/^[A-Za-z0-9][A-Za-z0-9._-]*$/u.test(p.prefix ?? "")) return `${label}: the prefix may only contain letters, digits, ".", "_" and "-".`;
    if (prefixes.has(p.prefix)) return `Prefix "${p.prefix}" is used by more than one provider.`;
    prefixes.add(p.prefix);
    try {
      const u = new URL(__lcpEndpoint(p).baseUrl);
      if (u.protocol !== "http:" && u.protocol !== "https:") throw new Error();
    } catch {
      return `${label}: base URL must be an http(s) URL.`;
    }
    const ids = /* @__PURE__ */ new Set();
    for (const m of p.models ?? []) {
      if (ids.has(m.id)) return `${label}: model "${m.id}" is listed twice.`;
      ids.add(m.id);
    }
  }
}
function __lcpField(label, description, control) {
  return __lcpJsx(Hs.Entry, { label, description, layout: "row", children: control });
}
function __lcpTextInput(value, onChange, opts = {}) {
  return __lcpJsx("input", { type: opts.type ?? "text", value: value ?? "", placeholder: opts.placeholder, "aria-label": opts.ariaLabel, spellCheck: false, autoComplete: "off", style: { ...__lcpInputStyle, ...opts.style }, onChange: (e) => onChange(e.target.value) });
}
function __lcpProviderCard({ provider: p, index, busy, onChange, onRemove, onFetch }) {
  const [newModel, setNewModel] = __lcpUseState("");
  const models = p.models ?? [], setModels = (next) => onChange({ models: next }), patchModel = (i, patch) => setModels(models.map((m, j) => j === i ? { ...m, ...patch } : m));
  const addModel = () => {
    const id = newModel.trim();
    id && !models.some((m) => m.id === id) && setModels([...models, { id, enabled: true }]), setNewModel("");
  };
  const modelRows = models.map((m, i) => {
    const auto = __lcpContextWindow({ id: m.id });
    return __lcpJsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px", padding: "4px 0" }, children: [__lcpJsx(qx, { checked: m.enabled !== false, onCheckedChange: (v) => patchModel(i, { enabled: v }) }), __lcpJsx("span", { title: m.id, style: { flex: "1 1 auto", minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontSize: "12px", fontFamily: "var(--monaco-monospace-font)", opacity: m.enabled === false ? 0.6 : 1 }, children: `${p.prefix || "?"}/${m.id}` }), __lcpTextInput(m.contextWindow === void 0 ? "" : String(m.contextWindow), (v) => {
      const n = Number(v.replace(/[_,\s]/gu, ""));
      patchModel(i, { contextWindow: v.trim() === "" || !Number.isFinite(n) || n <= 0 ? void 0 : Math.floor(n) });
    }, { placeholder: auto === void 0 ? "context (auto)" : `context ${auto.toLocaleString()}`, ariaLabel: `Context window for ${m.id}`, style: { width: "150px" } }), __lcpJsx(An, { size: "sm", variant: "ghost", onClick: () => setModels(models.filter((_, j) => j !== i)), children: "Remove" })] }, m.id);
  });
  return __lcpJsx(Tf, { title: p.name?.trim() || "Untitled provider", description: `${__lcpApiTypeLabels[p.apiType] ?? p.apiType} · models appear as "${p.prefix || "?"}/<model>"`, trailing: __lcpJsx(qx, { checked: p.enabled !== false, onCheckedChange: (v) => onChange({ enabled: v }) }), children: __lcpJsxs(Hs.Root, { accessibleLabel: `Custom provider ${p.name}`, children: [
    __lcpField("Name", "Shown in the model picker tooltip.", __lcpTextInput(p.name, (v) => onChange({ name: v }), { ariaLabel: "Provider name" })),
    __lcpField("Prefix", "Model IDs become <prefix>/<model>, so they never collide with Cursor's models. Stripped before the request is sent.", __lcpTextInput(p.prefix, (v) => onChange({ prefix: v.trim() }), { ariaLabel: "Model prefix" })),
    __lcpField("API", "Wire format the endpoint speaks.", __lcpJsx("select", { value: p.apiType, "aria-label": "API type", style: __lcpInputStyle, onChange: (e) => onChange({ apiType: e.target.value }), children: __lcpApiTypes.map((t) => __lcpJsx("option", { value: t, children: __lcpApiTypeLabels[t] }, t)) })),
    __lcpField("Base URL", p.apiType === "anthropic" ? "Like ANTHROPIC_BASE_URL: /v1 is appended when missing." : "OpenAI-compatible base, usually ending in /v1.", __lcpTextInput(p.baseUrl, (v) => onChange({ baseUrl: v }), { placeholder: __lcpBaseUrlHints[p.apiType], ariaLabel: "Base URL" })),
    __lcpField("API Key", p.apiType === "anthropic" ? "Sent as x-api-key." : "Sent as Authorization: Bearer.", __lcpTextInput(p.apiKey, (v) => onChange({ apiKey: v }), { type: "password", ariaLabel: "API key" })),
    __lcpField("Extra headers", "Optional, one \"Name: value\" per line.", __lcpJsx("textarea", { value: p.headers ?? "", rows: 2, spellCheck: false, "aria-label": "Extra headers", style: { ...__lcpInputStyle, resize: "vertical" }, onChange: (e) => onChange({ headers: e.target.value }) })),
    __lcpField("Models", models.length === 0 ? "Fetch the endpoint's /models list or add model IDs by hand." : `${models.filter((m) => m.enabled !== false).length} of ${models.length} shown in the model picker.`, __lcpJsxs("div", { style: { display: "flex", gap: "6px", flexWrap: "wrap", justifyContent: "flex-end" }, children: [__lcpJsx(An, { size: "sm", variant: "secondary", disabled: busy, onClick: onFetch, children: busy ? "Fetching…" : "Fetch models" }), models.length > 0 ? __lcpJsx(An, { size: "sm", variant: "ghost", onClick: () => setModels(models.map((m) => ({ ...m, enabled: true }))), children: "Enable all" }) : null, models.length > 0 ? __lcpJsx(An, { size: "sm", variant: "ghost", onClick: () => setModels(models.map((m) => ({ ...m, enabled: false }))), children: "Disable all" }) : null] })),
    __lcpJsxs("div", { style: { padding: "4px 12px 8px" }, children: [...modelRows, __lcpJsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px", paddingTop: "6px" }, children: [__lcpJsx("input", { type: "text", value: newModel, placeholder: "Add model ID, e.g. claude-opus-5-5", spellCheck: false, "aria-label": "New model ID", style: { ...__lcpInputStyle, flex: "1 1 auto", width: "auto" }, onChange: (e) => setNewModel(e.target.value), onKeyDown: (e) => e.key === "Enter" && addModel() }), __lcpJsx(An, { size: "sm", variant: "secondary", disabled: newModel.trim() === "", onClick: addModel, children: "Add model" })] })] }),
    __lcpField("Remove provider", void 0, __lcpJsx(An, { size: "sm", variant: "ghost", onClick: onRemove, children: "Remove" }))
  ] }) }, index);
}
function __lcpProvidersSettings() {
  const storage = et(ki), aiService = et(jl), inference = et(VW_);
  const [providers, setProviders] = __lcpUseState(() => __lcpRead(storage)), [dirty, setDirty] = __lcpUseState(false), [busy, setBusy] = __lcpUseState(-1), [status, setStatus] = __lcpUseState(void 0);
  const update = (i, patch) => {
    setProviders((ps) => ps.map((p, j) => j === i ? { ...p, ...patch } : p)), setDirty(true), setStatus(void 0);
  };
  const save = async () => {
    const cleaned = providers.map((p) => ({ ...p, name: p.name.trim(), prefix: (p.prefix ?? "").trim(), baseUrl: p.baseUrl.trim(), apiKey: p.apiKey.trim() })), error = __lcpValidate(cleaned);
    if (error !== void 0) return setStatus({ error: true, text: error });
    __lcpWrite(storage, cleaned), setProviders(cleaned), setDirty(false);
    try {
      await aiService.refreshDefaultModels(), setStatus({ error: false, text: `Saved. ${__lcpEnabledModels(cleaned).length} custom model(s) in the model picker.` });
    } catch (e) {
      setStatus({ error: true, text: `Saved, but refreshing the model picker failed: ${e instanceof Error ? e.message : String(e)}` });
    }
  };
  const fetchModels = async (i) => {
    const p = providers[i], endpoint = __lcpEndpoint(p);
    setBusy(i), setStatus(void 0);
    try {
      const result = await inference.fetchLocalProviderModels({ baseUrl: endpoint.baseUrl, apiKey: endpoint.apiKey, customHeaders: endpoint.headers, userAgent: "Cursor", cursorLocalProvider: { apiType: p.apiType, listing: true } }), listed = result?.cursorLocalModels;
      if (!Array.isArray(listed)) throw new Error("the agent runtime did not return a model list");
      const known = new Map((p.models ?? []).map((m) => [m.id, m])), merged = [...p.models ?? []];
      for (const m of listed) {
        const fetched = { ...m.contextWindow === void 0 ? {} : { contextWindow: m.contextWindow }, ...m.maxOutputTokens === void 0 ? {} : { maxOutputTokens: m.maxOutputTokens } }, existing = known.get(m.id);
        existing === void 0 ? merged.push({ id: m.id, enabled: false, ...fetched }) : merged[merged.indexOf(existing)] = { ...fetched, ...existing, ...existing.contextWindow === void 0 ? {} : { contextWindow: existing.contextWindow } };
      }
      update(i, { models: merged }), setStatus({ error: false, text: `${p.name}: ${listed.length} model(s) from ${endpoint.baseUrl}/models. Turn on the ones you want, then Save.` });
    } catch (e) {
      setStatus({ error: true, text: `${p.name}: ${e instanceof Error ? e.message.replace(/^Error invoking remote method '[^']*': (Error: )?/u, "") : String(e)}` });
    } finally {
      setBusy(-1);
    }
  };
  return __lcpJsxs("div", { style: { display: "flex", flexDirection: "column", gap: "12px" }, children: [__lcpJsx(Tf, { title: "Custom Providers", description: "Run agents against your own OpenAI- or Anthropic-compatible endpoints. The agent harness runs locally; requests go straight from this machine to the endpoint.", trailing: __lcpJsxs("div", { style: { display: "flex", gap: "6px" }, children: [__lcpJsx(An, { size: "sm", variant: "secondary", onClick: () => {
    setProviders((ps) => [...ps, __lcpNewProvider(ps)]), setDirty(true);
  }, children: "Add provider" }), __lcpJsx(An, { size: "sm", variant: "primary", disabled: !dirty, onClick: save, children: "Save" })] }), children: status === void 0 && providers.length > 0 ? null : __lcpJsx("div", { style: { padding: "8px 12px", fontSize: "12px", color: status?.error ? "var(--vscode-errorForeground)" : "var(--vscode-descriptionForeground)" }, children: status?.text ?? "No providers yet. Add one to get started." }) }), ...providers.map((p, i) => __lcpJsx(__lcpProviderCard, { provider: p, index: i, busy: busy === i, onChange: (patch) => update(i, patch), onRemove: () => {
    setProviders((ps) => ps.filter((_, j) => j !== i)), setDirty(true);
  }, onFetch: () => fetchModels(i) }, i))] });
}
