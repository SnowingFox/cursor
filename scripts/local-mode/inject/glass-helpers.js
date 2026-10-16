// [cursor-re local mode] Custom providers configured on Settings > Models.
//
// Stored (application scope) as { version: 1, providers: [{ name, prefix,
// apiType, baseUrl, apiKey, headers, models: [{ id, enabled, contextWindow }] }] }.
// A model shows up in the picker as "<prefix>/<id>"; the prefix keeps custom
// models apart from Cursor's catalog and is stripped before the request goes out.
var __lcpStorageKey = "cursorLocalMode.customProviders";
var __lcpApiTypes = ["openai-chat", "openai-responses", "anthropic"];
function __lcpRead(storageService) {
  try {
    const v = JSON.parse(storageService.get(__lcpStorageKey, -1) ?? "null");
    return Array.isArray(v?.providers) ? v.providers.filter((p) => p !== null && typeof p === "object") : [];
  } catch {
    return [];
  }
}
function __lcpWrite(storageService, providers) {
  storageService.store(__lcpStorageKey, JSON.stringify({ version: 1, providers }), -1, 1);
}
function __lcpModelId(provider, model) {
  const prefix = String(provider.prefix ?? "").trim();
  return prefix ? `${prefix}/${model.id}` : model.id;
}
function __lcpEnabledModels(providers) {
  return providers.flatMap((p) => p.enabled === false ? [] : (p.models ?? []).filter((m) => m?.id && m.enabled !== false).map((m) => ({ provider: p, model: m, id: __lcpModelId(p, m) })));
}
function __lcpResolve(providers, modelId) {
  const id = typeof modelId === "string" ? modelId.trim() : "";
  return id ? __lcpEnabledModels(providers).find((e) => e.id === id) : void 0;
}
// Explicit setting, else what /models reported, else 1M for current Claude
// models (200K for the Claude 3 / early Claude 4 generations).
function __lcpContextWindow(model) {
  const n = Number(model.contextWindow);
  if (Number.isFinite(n) && n > 0) return Math.floor(n);
  if (!/^claude-/i.test(model.id)) return;
  return /^claude-(?:3|(?:opus|sonnet|haiku)-4(?:-[0-5])?(?:-\d{8})?$|(?:opus|sonnet|haiku)-4-[0-5]-)/i.test(model.id) ? 2e5 : 1e6;
}
function __lcpEndpoint(provider) {
  let baseUrl = String(provider.baseUrl ?? "").trim().replace(/\/+$/u, "");
  if (provider.apiType === "anthropic") {
    baseUrl = baseUrl.replace(/\/messages$/u, ""), /\/v\d+$/u.test(baseUrl) || (baseUrl += "/v1");
  } else baseUrl = baseUrl.replace(/\/(?:chat\/completions|responses)$/u, "");
  const headers = {};
  for (const line of String(provider.headers ?? "").split(/\r?\n/u)) {
    const i = line.indexOf(":");
    i > 0 && (headers[line.slice(0, i).trim()] = line.slice(i + 1).trim());
  }
  return { baseUrl, apiKey: String(provider.apiKey ?? "").trim() || void 0, headers };
}
function __lcpMaxOutputTokens(model) {
  const n = Number(model.maxOutputTokens);
  return Number.isFinite(n) && n > 0 ? Math.floor(n) : void 0;
}
function __lcpDescriptor(provider) {
  const contextLengths = {}, maxOutputTokens = {};
  for (const m of provider.models ?? []) {
    if (!m?.id) continue;
    const context = __lcpContextWindow(m), output = __lcpMaxOutputTokens(m);
    context !== void 0 && (contextLengths[m.id] = context), output !== void 0 && (maxOutputTokens[m.id] = output);
  }
  return { apiType: __lcpApiTypes.includes(provider.apiType) ? provider.apiType : "openai-chat", contextLengths, maxOutputTokens };
}
// Reasoning-effort tiers the local runtime applies per model (mirrors the
// model table in cursor-agent-exec): Anthropic models take output_config.effort
// (adaptive thinking), OpenAI-compatible ones reasoning_effort.
var __lcpEffortLabels = { none: "Off", minimal: "Minimal", low: "Low", medium: "Medium", high: "High", xhigh: "Extra High", max: "Max" };
function __lcpEffortTiers(provider, modelId) {
  const id = String(modelId).trim().toLowerCase().replace(/^.*\//u, "").replace(/@.*$/u, ""), anthropic = provider.apiType === "anthropic", all = ["low", "medium", "high", "xhigh", "max"];
  if (anthropic) {
    if (/^claude-(?:opus|haiku)-5[-.]5$/u.test(id)) return { values: all, default: "medium" };
    if (/^claude-(?:opus-5|opus-4[-.][78]|sonnet-5(?:[-.]5)?)$/u.test(id)) return { values: all, default: "high" };
    if (/^claude-(?:opus-4[-.][56]|sonnet-4[-.]6)$/u.test(id)) return { values: ["low", "medium", "high", "max"], default: "high" };
    return;
  }
  if (/^grok-4[.-](?:3|[56](?:-(?:batch|build|nocomp))?)$|^grok-build-latest$/u.test(id)) return { values: ["minimal", "low", "medium", "high", "xhigh"], default: "high" };
  if (/^grok-4[.-]7$|^gpt-5[.-]6-(?:luna|sol|terra)$|^gpt-5(?:\.\d+)?$/u.test(id)) return { values: ["low", "medium", "high", "xhigh"], default: "medium" };
}
// Rewrites one agent turn onto the custom provider that owns its model.
function __lcpRouteTurn(storageService, modelDetails, runOptions) {
  const providers = __lcpRead(storageService), models = __lcpEnabledModels(providers);
  if (models.length === 0) return;
  const requested = runOptions.requestedModel?.modelId?.trim() || modelDetails?.modelId?.trim() || void 0;
  let hit = __lcpResolve(providers, runOptions.requestedModel?.modelId) ?? __lcpResolve(providers, modelDetails?.modelId);
  if (hit === void 0) {
    if (requested !== void 0 && requested !== "default") throw new Error(`Model "${requested}" is not configured. Add it under Settings > Models > Custom Providers, or pick one of: ${models.map((e) => e.id).join(", ")}.`);
    hit = models[0];
  }
  const bare = hit.model.id, endpoint = __lcpEndpoint(hit.provider);
  let requestedModel = runOptions.requestedModel;
  requestedModel !== void 0 && (requestedModel = requestedModel.clone(), requestedModel.modelId = bare);
  let details = modelDetails;
  details !== void 0 ? (details = details.clone(), details.modelId = bare) : requestedModel === void 0 && (details = new Ove({ modelId: bare, displayModelId: bare, displayName: bare, displayNameShort: bare }));
  return { modelDetails: details, runOptions: { ...runOptions, requestedModel }, providerConfig: { baseUrl: endpoint.baseUrl, apiKey: endpoint.apiKey, customHeaders: endpoint.headers }, availableModelIds: (hit.provider.models ?? []).filter((m) => m?.id && m.enabled !== false).map((m) => m.id), cursorLocalProvider: __lcpDescriptor(hit.provider) };
}
// Provider for one-shot local inference (chat titles, commit messages): the
// composer's selected custom model, else the first enabled one.
function __lcpInferenceConfig(storageService, modelConfigService, userAgent) {
  const providers = __lcpRead(storageService), models = __lcpEnabledModels(providers);
  if (models.length === 0) return;
  let selected;
  try {
    selected = modelConfigService.getModelConfig("composer")?.selectedModels?.[0]?.modelId;
  } catch {
  }
  const hit = __lcpResolve(providers, selected) ?? models[0], endpoint = __lcpEndpoint(hit.provider);
  return { baseUrl: endpoint.baseUrl, apiKey: endpoint.apiKey, userAgent, customHeaders: endpoint.headers, modelId: hit.model.id, cursorLocalProvider: __lcpDescriptor(hit.provider) };
}
// Local mode's model catalog: the enabled custom models, no backend round trip.
async function __lcpRefreshModels(aiService) {
  const entries = __lcpEnabledModels(__lcpRead(aiService._storageService));
  const rows = entries.map(({ provider, model, id }) => {
    const context = __lcpContextWindow(model), source = provider.name || provider.prefix || "custom provider", effort = __lcpEffortTiers(provider, model.id);
    const parameterDefinitions = effort === void 0 ? [] : [{ id: "reasoning", name: "Reasoning", markdownTooltip: "How much the model thinks before answering.", parameterType: { enumParameter: { values: effort.values.map((v) => ({ value: v, displayName: __lcpEffortLabels[v] ?? v })) } }, isCycleableByHotkey: true }];
    const variants = effort === void 0 ? [{ parameterValues: [], displayName: id, displayNameOutsidePicker: id, isMaxMode: false, isDefaultNonMaxConfig: true, isDefaultMaxConfig: true }] : effort.values.map((v) => ({ parameterValues: [{ id: "reasoning", value: v }], displayName: `${id} ${__lcpEffortLabels[v] ?? v}`, displayNameOutsidePicker: `${id} ${__lcpEffortLabels[v] ?? v}`, isMaxMode: false, isDefaultNonMaxConfig: v === effort.default, isDefaultMaxConfig: v === effort.default }));
    return { name: id, serverModelName: id, clientDisplayName: id, inputboxShortModelName: id, defaultOn: true, supportsAgent: true, supportsPlanMode: true, supportsSandboxing: true, supportsMaxMode: false, supportsNonMaxMode: true, supportsCmdK: false, supportsThinking: effort !== void 0, supportsImages: model.vision !== false, tagline: source, namedModelSectionIndex: 1, legacySlugs: [], idAliases: [], parameterDefinitions, variants, tooltipData: { markdownContent: [`Served by ${source} (${__lcpEndpoint(provider).baseUrl}).`, context === void 0 ? void 0 : `Context: ${context.toLocaleString()} tokens.`, effort === void 0 ? void 0 : `Reasoning: ${effort.values.map((v) => __lcpEffortLabels[v] ?? v).join(", ")}.`].filter(Boolean).join("\n\n") } };
  });
  const models = aiService.deserializePickerModels(rows).map((m) => Ipn(m)), ids = models.map((m) => m.name);
  Qm(() => {
    aiService.persistAvailableDefaultModels(models), aiService._reactiveStorageService.setApplicationUserPersistentStorage("localProviderModelIds", ids), aiService._reactiveStorageService.setApplicationUserPersistentStorage("localProviderAgentModelIds", ids);
  });
  try {
    aiService._modelConfigService.triggerParameterizedModelConfigMigration();
  } catch {
  }
  const stored = aiService._modelConfigService.getStoredModelConfig("composer"), current = stored?.selectedModels?.[0]?.modelId ?? stored?.modelName?.split(",")[0]?.trim();
  if (ids.length > 0 && !ids.includes(current)) {
    const first = entries.find((e) => e.id === ids[0]), effort = first === void 0 ? void 0 : __lcpEffortTiers(first.provider, first.model.id);
    aiService._modelConfigService.setModelConfig("composer", { modelName: ids[0], selectedModels: [{ modelId: ids[0], parameters: effort === void 0 ? [] : [{ id: "reasoning", value: effort.default }] }], maxMode: false });
  }
  aiService._aiSettingsService.handleAvailableModelsChange();
}
