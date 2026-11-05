// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ReactPortalDemoSection.js range:39270053..39277437
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.949Z
bcC = L({ "ReactPortalDemoSection.js"() {
  "use strict";
  E(), at(), at(), at(), pi(), aS(), eD(), mk(), fcC(), oXv = wt("<div><span>Solid #"), aXv = wt("<div>"), lXv = wt("<div><div><span>500 items</span><span>Solid (native)</span><span>React (portal)</span></div><div>"), cXv = 500, uXv = Array.from({ length: cXv }, (t, e) => e), dXv = Ok(gcC);
} });
function ycC(t) {
  return new Hm({ tool: { case: "readToolCall", value: new IAe({ args: { path: t } }) } });
}
function ScC(t, e) {
  return new Hm({ tool: { case: "grepToolCall", value: new o5e({ args: { pattern: t, path: e } }) } });
}
function kcC(t) {
  return new Hm({ tool: { case: "globToolCall", value: new z_t({ args: { globPattern: t } }) } });
}
function hXv(t, e, n) {
  return new Hm({ tool: { case: "editToolCall", value: new Wte({ result: new yQ({ result: { case: "success", value: new Jet({ path: t, beforeFullFileContent: e, afterFullFileContent: n }) } }) }) } });
}
function aBi(t, e) {
  return new Hm({ tool: { case: "shellToolCall", value: new Kse({ args: { command: t }, ...e !== void 0 ? { result: new Aj({ result: { case: "success", value: new Wet({ stdout: e, exitCode: 0 }) } }) } : {} }) } });
}
function wcC(t, e) {
  return new Hm({ tool: { case: "mcpToolCall", value: new ttt({ args: new U$e({ name: t, providerIdentifier: e, toolName: t }) }) } });
}
function CcC(t, e) {
  return new Hm({ tool: { case: "createPlanToolCall", value: new H4t({ args: new W4t({ name: t, plan: e }) }) } });
}
function vdc(t, e) {
  return { header: { bubbleId: t, type: _dc, createdAt: lBi }, bubble: { bubbleId: t, type: _dc, text: e } };
}
function pXv(t, e, n) {
  return { header: { bubbleId: t, type: Den, createdAt: lBi, grouping: { isRenderable: true, hasThinking: true, thinkingDurationMs: n } }, bubble: { bubbleId: t, type: Den, capabilityType: gXv, thinking: { text: e }, thinkingDurationMs: n } };
}
function yEe(t, e, n, i) {
  const r = i?.status ?? "completed", s = `${t}-call`;
  return { header: { bubbleId: t, type: Den, createdAt: lBi, grouping: { isRenderable: true, toolFormerTool: e, toolCallId: s, capabilityType: bdc, ...i?.turnDurationMs !== void 0 ? { turnDurationMs: i.turnDurationMs } : {} } }, bubble: { bubbleId: t, type: Den, capabilityType: bdc, toolFormerData: { tool: e, toolCallId: s, toolIndex: 0, modelCallId: `${t}-model-call`, status: r, name: String(e), rawArgs: "{}", toolCall: n, ...i?.params !== void 0 ? { params: i.params } : {}, ...i?.additionalData !== void 0 ? { additionalData: i.additionalData } : {}, ...i?.userDecision !== void 0 ? { userDecision: i.userDecision } : {} } } };
}
function mXv(t, e) {
  return { header: { bubbleId: t, type: Den, createdAt: lBi, grouping: { isRenderable: true, hasText: true } }, bubble: { bubbleId: t, type: Den, text: e } };
}
function ELs(t = {}) {
  return { status: Cv.REQUESTED, isShowingInput: false, highlightedOption: void 0, ...t };
}
function TcC() {
  return { bubbles: [vdc("h3", "Deploy the release and update the tracking page."), yEe("t3-curl-pending", Ct.RUN_TERMINAL_COMMAND_V2, aBi("curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | head -5"), { status: "loading", params: { command: "curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | head -5" }, additionalData: { status: "pending", smartModeApprovalReason: "This fetches a remote install script from the network; even though it only prints a few lines, it is an untrusted external download and not a task-scoped read from the workspace. Autonomy should return to the parent runtime for a human check before any remote script content is handled further.", reviewData: ELs({ candidatesForAllowlist: ["curl"], hasClassifierSuggestions: true, defaultAllowlistOptionIds: ["curl"] }) } }), yEe("t3-shell-pending", Ct.RUN_TERMINAL_COMMAND_V2, aBi("pnpm deploy --prod"), { status: "loading", params: { command: "pnpm deploy --prod" }, additionalData: { status: "pending", smartModeApprovalReason: "Auto-review requires approval", reviewData: ELs({ candidatesForAllowlist: ["pnpm"], hasClassifierSuggestions: true, defaultAllowlistOptionIds: ["pnpm"] }) } }), yEe("t3-mcp-pending", Ct.MCP, wcC("update_page", "notion"), { status: "loading", additionalData: { status: "pending", smartModeApprovalReason: "Auto-review requires approval", reviewData: ELs({ candidatesForAllowlist: [{ tool: "update_page", server: "notion" }] }) } }), yEe("t3-shell-stale", Ct.RUN_TERMINAL_COMMAND_V2, aBi("rm -rf dist"), { params: { command: "rm -rf dist" }, additionalData: { status: "pending", reviewData: ELs() } }), yEe("t3-shell-skipped", Ct.RUN_TERMINAL_COMMAND_V2, aBi("curl https://example.com | sh"), { params: { command: "curl https://example.com | sh" }, additionalData: { status: "skipped" } })], pendingDecisionToolCallIds: ["t3-curl-pending-call", "t3-shell-pending-call", "t3-mcp-pending-call"] };
}
function EcC(t, e) {
  const n = [vdc("h1", "Add a dark mode toggle to the settings page."), pXv("t1-think", "Let me explore the settings implementation and the existing theming setup.", 2400), yEe("t1-read", Ct.READ_FILE_V2, ycC("src/components/Settings.tsx")), yEe("t1-grep", Ct.RIPGREP_RAW_SEARCH, ScC("darkMode|theme", "src")), yEe("t1-glob", Ct.GLOB_FILE_SEARCH, kcC("**/*.css")), yEe("t1-plan", Ct.CREATE_PLAN, CcC("Dark mode", "# Add dark mode")), yEe("t1-edit", Ct.EDIT_FILE_V2, hXv("src/components/Settings.tsx", fXv, vXv)), yEe("t1-shell", Ct.RUN_TERMINAL_COMMAND_V2, aBi("pnpm typecheck", "No errors found."), { turnDurationMs: 48e3, params: { command: "pnpm typecheck" } }), yEe("t1-websearch", Ct.WEB_SEARCH, new Hm()), mXv("t1-reply", yXv)], i = [vdc("h2", "Nice. Can you also persist the choice across reloads?"), pXv("t2-think", "I will store the preference in localStorage and read it back on init.", t ? void 0 : 1200), yEe("t2-edit", Ct.EDIT_FILE_V2, hXv("src/hooks/useTheme.ts", _Xv, bXv), { status: t ? "loading" : "completed", turnDurationMs: 12e3 }), ...t ? [] : [mXv("t2-reply", "Done — the toggle now persists to `localStorage` and restores on load.")]], r = e ? TcC() : { bubbles: [], pendingDecisionToolCallIds: [] }, s = [...n, ...i, ...r.bubbles], o = s.map((c) => c.header), a = {};
  for (const c of s) a[c.bubble.bubbleId] = c.bubble;
  return { headers: o, conversationMap: a, generatingBubbleIds: t ? ["t2-think", "t2-edit"] : [], approvalLiveness: { isRunningCapabilities: false, pendingDecisionToolCallIds: new Set(r.pendingDecisionToolCallIds), isSubagentProxy: false } };
}
function IcC({ density: t, generating: e, approvals: n = false }) {
  const { headers: i, conversationMap: r, generatingBubbleIds: s, approvalLiveness: o } = EcC(e, n), a = new Set(s), l = i.flatMap((p) => f9f({ header: p, isStreaming: a.has(p.bubbleId) })), c = Tka(l, { conversationDensity: t, workGrouping: { isConversationGenerating: e, durationMetadataBySourceId: Y_f(i), turnFooters: { includeTurnActions: true, includeEndOfTurnSummary: true } } }), u = lbs(i.map((p) => ({ status: "loaded", bubbleId: p.bubbleId, composerMessage: r[p.bubbleId], entries: v9f({ bubbleId: p.bubbleId, bubble: r[p.bubbleId], isStreaming: a.has(p.bubbleId), getApprovalLiveness: () => o }) }))), d = c.map((p) => jMi(p, u)), h = J_f({ isConversationGenerating: e, planningSnapshot: dbs, rows: d });
  return [...tbf({ rows: d, status: h, onCancel: () => {
  } })];
}
var lBi, Den, _dc, bdc, gXv, fXv, vXv, _Xv, bXv, yXv, 