// Local mode: run the agent harness in-process against user-configured
// OpenAI / Anthropic compatible endpoints, with no Cursor account or backend.
//
// Cursor already ships most of this behind the `localMode` build flag (the
// "Local Private Inference" product): AgentClientService.run hands each turn to
// cursor-agent-exec's LocalAgentClient, which runs the agent loop locally and
// talks to an HTTP gateway. Upstream still expects a signed-in Cursor account,
// a single gateway, and the backend's model catalog. The patches below:
//
//   * turn the build flag into a runtime switch (product.json `cursorLocalMode`,
//     overridden by CURSOR_LOCAL_MODE=1/0) and drop the account requirement;
//   * add "Custom Providers" to the agent window's Settings > Models page: any
//     number of providers (OpenAI Chat Completions, OpenAI Responses, Anthropic
//     Messages), each with a model prefix and a model list fetched from /models;
//   * build the model picker from those providers instead of the backend, and
//     route every turn to the provider that owns the selected `<prefix>/<model>`.

import { readFileSync } from 'node:fs';

const GLASS = 'out/vs/workbench/workbench.glass.main.js';
const GLASS_CSS = 'out/vs/workbench/workbench.glass.main.css';
const AGENT_EXEC = 'extensions/cursor-agent-exec/dist/main.js';

const inject = (name) => readFileSync(new URL(`./inject/${name}`, import.meta.url), 'utf8');

// Evaluated once when the renderer's buildFlags module initializes; by then the
// preload has resolved the window configuration (product.json + user env).
const LOCAL_MODE_EXPR = `(() => {
    try {
      const e = globalThis.vscode?.process?.env?.CURSOR_LOCAL_MODE?.trim().toLowerCase();
      if (e === "1" || e === "true") return true;
      if (e === "0" || e === "false") return false;
      return globalThis.vscode?.context?.configuration?.()?.product?.cursorLocalMode === true;
    } catch {
      return false;
    }
  })()`;

export const patches = [
  {
    id: 'product/local-mode-default',
    file: 'product.json',
    find: '{\n\t"quality": "stable",',
    replace: '{\n\t"cursorLocalMode": true,\n\t"quality": "stable",',
  },

  // --- agent window (glass) renderer ---------------------------------------
  {
    id: 'glass/build-flag',
    file: GLASS,
    find: 'cursorPredictionOptions: false, localMode: false };',
    replace: `cursorPredictionOptions: false, localMode: ${LOCAL_MODE_EXPR} };`,
  },
  {
    id: 'glass/auth-is-authenticated',
    file: GLASS,
    find: `  isAuthenticated() {
    const t = this.accessToken(), e = this.refreshToken();`,
    replace: `  isAuthenticated() {
    if (vl.localMode) return true;
    const t = this.accessToken(), e = this.refreshToken();`,
  },
  {
    id: 'glass/auth-team-membership',
    file: GLASS,
    find: 'this.hasResolvedTeamMembership = () => this.hasRefreshedMembership,',
    replace: 'this.hasResolvedTeamMembership = () => vl.localMode || this.hasRefreshedMembership,',
  },
  {
    // No Cursor plan in local mode: report the top tier so the client drops
    // the free-plan model lock and upgrade prompts (usage is billed by the
    // user's own provider, not Cursor).
    id: 'glass/auth-membership-type',
    file: GLASS,
    find: 'this.membershipType = () => GBp(this._membershipType())',
    replace: 'this.membershipType = () => vl.localMode ? Fr.ULTRA : GBp(this._membershipType())',
  },
  {
    id: 'glass/auth-membership-refresh',
    file: GLASS,
    find: `this.refreshMembership = async (j) => {
      this.authDebugLog("refreshMembership: called"), j?.throwIfAborted();`,
    replace: `this.refreshMembership = async (j) => {
      if (vl.localMode) return this._reactiveStorageService.applicationUserPersistentStorage.membershipType !== Fr.ULTRA && this._reactiveStorageService.setApplicationUserPersistentStorage("membershipType", Fr.ULTRA), void 0;
      this.authDebugLog("refreshMembership: called"), j?.throwIfAborted();`,
  },
  {
    id: 'glass/custom-provider-helpers',
    file: GLASS,
    find: 'function nMe(t) {\n  const e = t?.trim();',
    replace: `${inject('glass-helpers.js')}function nMe(t) {\n  const e = t?.trim();`,
  },
  {
    id: 'glass/model-catalog-from-custom-providers',
    file: GLASS,
    find: '  async refreshDefaultModels() {\n',
    replace: '  async refreshDefaultModels() {\n    if (vl.localMode) return __lcpRefreshModels(this);\n',
  },
  {
    id: 'glass/route-turn-to-custom-provider',
    file: GLASS,
    find: `async runLocalAgentInExtensionHost(t, e, n, i, r, s, o, a, l, c) {
      const u = await this.getLocalAgentProviderConfig(i, c), d = this.reactiveStorageService.applicationUserPersistentStorage.localProviderAgentModelIds ?? [],`,
    replace: `async runLocalAgentInExtensionHost(t, e, n, i, r, s, o, a, l, c) {
      const __lcp = __lcpRouteTurn(this.storageService, i, c);
      __lcp !== void 0 && (i = __lcp.modelDetails, c = __lcp.runOptions);
      const u = __lcp?.providerConfig ?? await this.getLocalAgentProviderConfig(i, c), d = __lcp?.availableModelIds ?? this.reactiveStorageService.applicationUserPersistentStorage.localProviderAgentModelIds ?? [],`,
  },
  {
    id: 'glass/route-turn-provider-descriptor',
    file: GLASS,
    find: 'const g = { baseUrl: u.baseUrl, apiKey: u.apiKey, userAgent: ',
    replace: 'const g = { ...__lcp === void 0 ? {} : { cursorLocalProvider: __lcp.cursorLocalProvider }, baseUrl: u.baseUrl, apiKey: u.apiKey, userAgent: ',
  },
  {
    id: 'glass/route-inference-to-custom-provider',
    file: GLASS,
    find: '  async getLocalInferenceProviderConfig() {\n',
    replace: `  async getLocalInferenceProviderConfig() {
    const __lcp = vl.localMode ? __lcpInferenceConfig(this._storageService, this._modelConfigService, \`Cursor/\${this.productService.version}\`) : void 0;
    if (__lcp !== void 0) return __lcp;
`,
  },
  {
    id: 'glass/settings-custom-providers',
    file: GLASS,
    find: 'function RVw(t) {\n',
    replace: `${inject('glass-settings.js')}function RVw(t) {\n  if (vl.localMode) return __lcpJsx(__lcpProvidersSettings, {});\n`,
  },
  {
    id: 'glass/turn-status-component',
    file: GLASS,
    find: 'function ftp(t) {\n',
    replace: `${inject('glass-turn-status.js')}function ftp(t) {\n`,
  },
  {
    // Work-group header: "Working  12s · ↓ 1.2k tokens · thinking with high effort".
    id: 'glass/turn-status-header',
    file: GLASS,
    find: 'K = "ui-step-group-collapsible agent-transcript-work-group-collapsible", V = _e,',
    replace: 'K = "ui-step-group-collapsible agent-transcript-work-group-collapsible", V = vl.localMode && !se ? __lcpTurnJsx(__lcpTurnDetails, { turnKey: n.turnHumanRowId, active: n.state.kind === "active", durationMs: n.state.durationMs, fallback: _e }) : _e,',
  },
  {
    // Tail status rows ("Planning next moves", "Running …") learn which turn
    // they belong to, so they can show the same live stats as the header.
    id: 'glass/turn-status-tail-key',
    file: GLASS,
    find: '  if (e === void 0) return BUS(i);\n  const r = Nka({ rows: i, status: e, expandedActivityGroupRowIds: n })',
    replace: '  if (e === void 0) return BUS(i);\n  const __lcpTailKey = vl.localMode ? __lcpTurnKeyFromRows(i) : void 0;\n  __lcpTailKey !== void 0 && (e = { ...e, lcpTurnKey: __lcpTailKey });\n  const r = Nka({ rows: i, status: e, expandedActivityGroupRowIds: n })',
  },
  {
    id: 'glass/turn-status-tail-key-copy',
    file: GLASS,
    find: 'function vnp(t) {\n  return { action: t.action, loading: true, priority: t.priority, ',
    replace: 'function vnp(t) {\n  return { action: t.action, loading: true, priority: t.priority, ...t.lcpTurnKey === void 0 ? {} : { lcpTurnKey: t.lcpTurnKey }, ',
  },
  {
    // "Planning next moves  12s · ↓ 1.2k tokens · thinking with high effort"
    id: 'glass/turn-status-tail',
    file: GLASS,
    find: '"data-priority": n.priority, role: "status", tabIndex: b, "aria-label": y, onClick: S, onKeyDown: k, children: [C, T] })',
    replace: '"data-priority": n.priority, role: "status", tabIndex: b, "aria-label": y, onClick: S, onKeyDown: k, children: [C, n.loading && typeof n.lcpTurnKey === "string" ? __lcpTurnJsx(__lcpTurnStatusSuffix, { turnKey: n.lcpTurnKey }) : null, T] })',
  },
  {
    // Native "Thinking" row while the model reasons: "Thinking  4s · high effort".
    id: 'glass/turn-status-thinking',
    file: GLASS,
    find: '(Y = BFr(zY, { className: M.className, action: "Thinking", expandable: G, open: q, onOpenChange: K, loading: true, children: V })',
    replace: '(Y = BFr(zY, { className: M.className, action: "Thinking", details: vl.localMode ? __lcpTurnJsx(__lcpThinkingDetails, {}) : void 0, expandable: G, open: q, onOpenChange: K, loading: true, children: V })',
  },
  {
    // Same for the activity-group header that shows "Thinking" in grouped transcripts.
    id: 'glass/turn-status-thinking-group',
    file: GLASS,
    find: '(Ye = v2e(zY, { action: Pe.action, className: $e.className, details: De, ',
    replace: '(Ye = v2e(zY, { action: Pe.action, className: $e.className, details: vl.localMode && Oe && Pe.action === "Thinking" ? __lcpTurnJsx(__lcpThinkingDetails, {}) : De, ',
  },
  {
    id: 'glass/turn-status-begin',
    file: GLASS,
    find: '      __lcp !== void 0 && (i = __lcp.modelDetails, c = __lcp.runOptions);\n',
    replace: '      __lcp !== void 0 && (i = __lcp.modelDetails, c = __lcp.runOptions);\n      const __lcpTurnKey = __lcpTurnBegin(c.conversationId, n, c.requestedModel);\n',
  },
  {
    id: 'glass/turn-status-updates',
    file: GLASS,
    find: 'f = { sendInteractionUpdate: async (b) => {\n          const y = ok.fromBinary(b.buffer);\n',
    replace: 'f = { sendInteractionUpdate: async (b) => {\n          const y = ok.fromBinary(b.buffer);\n          __lcpTurnUpdate(__lcpTurnKey, y);\n',
  },
  {
    // Models often open a reply with a newline, which renders as an empty
    // line at the top of the message.
    // Also keeps the live turn stats right after the tail status text.
    id: 'glass-css/no-leading-break-in-markdown',
    file: GLASS_CSS,
    find: '*--------------------------------------------------------*/.monaco-aria-container{',
    replace: '*--------------------------------------------------------*/.ui-markdown>*>br:first-child{display:none}.agent-transcript-tail-status:has(>[data-slot=local-turn-stats])>:first-child{flex:0 1 auto;width:auto}.monaco-aria-container{',
  },
  {
    // The single-gateway dialog is superseded by Custom Providers.
    id: 'glass/no-gateway-dialog-on-startup',
    file: GLASS,
    find: '  async maybeShowAfterOnboarding() {\n',
    replace: '  async maybeShowAfterOnboarding() {\n    return;\n',
  },
  {
    id: 'glass/not-configured-message',
    file: GLASS,
    find: 'zss = `Configure your API key and base URL to use the local agent.',
    replace: 'zss = `Add a provider under Settings > Models > Custom Providers, then pick one of its models.',
  },

  // --- cursor-agent-exec (local agent runtime) --------------------------------
  {
    id: 'agent-exec/custom-provider-helpers',
    file: AGENT_EXEC,
    find: '(() => {\n  var __webpack_modules__ = {',
    replace: `(() => {\n${inject('agent-exec-helpers.js')}  var __webpack_modules__ = {`,
  },
  {
    id: 'agent-exec/anthropic-endpoint-detection',
    file: AGENT_EXEC,
    find: 'function ZIe(e10) {\n',
    replace: 'function ZIe(e10) {\n      const __lcp = __lcpKind(e10);\n      if (void 0 !== __lcp) return "anthropic" === __lcp.apiType;\n',
  },
  {
    id: 'agent-exec/openai-endpoint-selection',
    file: AGENT_EXEC,
    find: 'function wRe(e10, t10) {\n',
    replace: 'function wRe(e10, t10) {\n      const __lcp = void 0 === t10?.endpoint ? __lcpKind(t10?.baseUrl) : void 0;\n      if (void 0 !== __lcp && "anthropic" !== __lcp.apiType) return "openai-responses" === __lcp.apiType ? "responses" : "chat_completions";\n',
  },
  {
    id: 'agent-exec/context-length-override',
    file: AGENT_EXEC,
    find: '})(o10, n10, a10), l10 = n10.contextLength ?? (function(e11) {',
    replace: '})(o10, n10, a10), l10 = __lcpContextLength(r10.baseUrl, e10.modelId) ?? n10.contextLength ?? (function(e11) {',
  },
  {
    // Custom providers get the same reasoning-effort / output-cap treatment as
    // Cursor's own gateway (otherwise Anthropic thinking is silently dropped).
    id: 'agent-exec/custom-provider-capabilities',
    file: AGENT_EXEC,
    find: 'i10 = s10.apiType ?? n10.apiType, a10 = n10.extendedCapabilitiesDetected ?? false',
    replace: 'i10 = s10.apiType ?? n10.apiType, a10 = void 0 !== __lcpKind(r10.baseUrl) || (n10.extendedCapabilitiesDetected ?? false)',
  },
  {
    id: 'agent-exec/custom-provider-max-output',
    file: AGENT_EXEC,
    find: 'P({ modelId: o10.modelId, advertisedMaxOutputTokens: n10.maxOutputTokens, extendedCapabilitiesDetected: a10 })',
    replace: 'P({ modelId: o10.modelId, advertisedMaxOutputTokens: __lcpMaxOutputTokens(r10.baseUrl, e10.modelId) ?? n10.maxOutputTokens, extendedCapabilitiesDetected: a10 })',
  },
  {
    // A custom provider that is down should fail the turn in seconds, not
    // after ten silent rounds of retries (each round already retries twice).
    id: 'agent-exec/custom-provider-retries',
    file: AGENT_EXEC,
    find: 'privacyMode: t2.privacyMode, maxRetries: 10,',
    replace: 'privacyMode: t2.privacyMode, maxRetries: void 0 !== t2.cursorLocalProvider ? 1 : 10,',
  },
  {
    id: 'agent-exec/register-run',
    file: AGENT_EXEC,
    find: 'async runLocalAgent(t2, r2, n2) {\n',
    replace: 'async runLocalAgent(t2, r2, n2) {\n        __lcpRegister(t2);\n',
  },
  {
    id: 'agent-exec/register-inference',
    file: AGENT_EXEC,
    find: 'async runLocalInference(e2) {\n',
    replace: 'async runLocalInference(e2) {\n        __lcpRegister(e2);\n',
  },
  {
    id: 'agent-exec/list-models',
    file: AGENT_EXEC,
    find: 'async fetchLocalProviderModels(e2) {\n',
    replace: 'async fetchLocalProviderModels(e2) {\n        if (true === e2?.cursorLocalProvider?.listing) return __lcpListModels(e2);\n',
  },
];
