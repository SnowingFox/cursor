// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 90417 range:13025308..13029423
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
90417: (e, t, r) => {
    "use strict";
    r.d(t, { G5: () => d, Gj: () => a, J2: () => i, Pb: () => g, WI: () => m, jz: () => h, pA: () => c });
    var n = r(6688), s = r(27322), o = r(69584);
    function i(e2, t2) {
      return new o.QFf({ action: { case: "userMessageAction", value: new o.Vtf({ userMessage: new o.RGk({ text: e2, messageId: t2 }) }) } });
    }
    function a(e2, t2, r2) {
      const n2 = void 0 === t2 || "" === t2 ? crypto.randomUUID() : t2;
      return new o.QFf({ action: { case: "injectContextAction", value: new o.hGJ({ injectionId: n2, expectedRunId: r2, payload: { case: "userContext", value: new o.oW$({ userMessage: new o.RGk({ text: e2, messageId: n2 }) }) } }) } });
    }
    function c(e2) {
      if (void 0 !== e2) return { generationUUID: e2.generationUuid, agentSessionId: e2.agentSessionId, ...l(e2.customSystemPrompt, e2.systemPromptSpec), excludeWorkspaceContext: e2.excludeWorkspaceContext, enableAgentRetries: e2.enableAgentRetries, fixedRetryDelayMs: e2.fixedRetryDelayMs, endlessRetries: true === e2.endlessRetries ? () => true : void 0, isRunningInTest: e2.isRunningInTest, stallDetectorConfig: v(e2), selectedSubagentModels: e2.selectedSubagentModels, subagentModelOverrides: e2.subagentModelOverrides, requestContextBlobTransportMode: w(e2.requestContextBlobTransportMode), requestContextBlobMaxBytes: e2.requestContextBlobMaxBytes, requestContextDynamicInlineMaxBytes: e2.requestContextDynamicInlineMaxBytes, suggestNextPrompt: e2.suggestNextPrompt, headers: g(f(e2.requestHeaders), h(e2.blobEncryptionKey)), clientSupportsInlineImages: e2.clientSupportsInlineImages, clientSupportsPreviewCard: e2.clientSupportsPreviewCard, clientSupportsSendToUser: e2.clientSupportsSendToUser, clientSupportsRoutedModelUpdate: e2.clientSupportsRoutedModelUpdate, canCreateCloudSubagents: e2.canCreateCloudSubagents, localLoopGateEnabled: e2.localLoopGateEnabled, maxSteps: 0 === e2.maxSteps ? void 0 : e2.maxSteps, toolRestriction: d(e2), startedAsNewProject: e2.startedAsNewProject, firstProjectOnboarding: e2.firstProjectOnboarding, harness: y(e2.harness) };
    }
    function l(e2, t2) {
      const r2 = t2?.spec;
      if (void 0 === r2 || void 0 === r2.case || "" === r2.value) return { customSystemPrompt: y(e2) };
      switch (r2.case) {
        case "replace":
          return { customSystemPrompt: r2.value };
        case "append":
          return { systemPromptSpec: t2 };
        default:
          return r2;
      }
    }
    class u extends Error {
      constructor(e2, t2) {
        super(`${e2} must be ToolCall field names such as read_tool_call; no tool is named ${t2.join(", ")}`), this.name = "AgentHostUnknownToolError";
      }
    }
    function d(e2) {
      const t2 = p("allowedTools", e2?.allowedTools ?? []), r2 = p("excludedTools", e2?.excludedTools ?? []);
      if (0 !== t2.length || 0 !== r2.length) return 0 === t2.length ? { excluded: r2 } : { allowed: t2, excluded: r2 };
    }
    function p(e2, t2) {
      const r2 = [], s2 = [];
      for (const e3 of t2) {
        const t3 = (0, n._Mz)(e3);
        void 0 === t3 ? s2.push(e3) : r2.push(t3);
      }
      if (s2.length > 0) throw new u(e2, s2);
      return r2;
    }
    const m = "x-blob-encryption-key";
    function h(e2) {
      if ((0, s.TU)(e2)) return { [m]: e2 };
    }
    function f(e2) {
      if (void 0 === e2) return;
      const t2 = Object.entries(e2).map(([e3, t3]) => [e3.toLowerCase(), t3]).filter(([e3]) => e3 !== m);
      return 0 !== t2.length ? Object.fromEntries(t2) : void 0;
    }
    function g(e2, t2) {
      return void 0 === e2 ? t2 : void 0 === t2 ? e2 : { ...e2, ...t2 };
    }
    function y(e2) {
      return void 0 === e2 || "" === e2 ? void 0 : e2;
    }
    function w(e2) {
      switch (e2) {
        case "legacy":
        case "dual":
        case "ref_only":
          return e2;
        default:
          return;
      }
    }
    function v(e2) {
      const { stallAdvisoryTimeoutMs: t2, stallFailTimeoutMs: r2 } = e2;
      if (void 0 !== t2 || void 0 !== r2) return { advisoryTimeoutMs: t2, failTimeoutMs: r2 };
    }
  }