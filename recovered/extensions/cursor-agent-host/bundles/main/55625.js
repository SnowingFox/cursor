// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 55625 range:8693006..8697095
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
55625: (e, t, r) => {
    "use strict";
    r.d(t, { KW: () => m, bJ: () => p });
    var n = r(6688), s = r(24804), o = r(83360), i = r(28963), a = r(51635), c = r(8844);
    function l(e2) {
      if ("userMessageAction" !== e2.action.case) return [];
      if (!(0, n.nl9)(e2)) return [];
      const t2 = e2.action.value.userMessage?.text;
      return void 0 === t2 || 0 === t2.trim().length ? [] : [new c.S0({ role: c.R8.USER, text: t2 })];
    }
    var u = r(26814), d = r(87159);
    function p(e2, t2) {
      return async (r2) => {
        const c2 = await (0, d.WZ)(e2, { agentModule: t2, conversationId: r2.runOptions.conversationId, conversationGroupId: r2.runOptions.conversationGroupId, requestedModel: r2.requestedModel, routingConversation: l(r2.action), agentMode: (p2 = r2.action, g = r2.conversationState, (0, s.zn)((0, a.au)(p2, g))), turnAgentMode: (0, i.p)(r2.conversationState), subagentTypeName: r2.runOptions.subagentTypeName || void 0, selectedSubagentModels: r2.runOptions.selectedSubagentModels ?? [], subagentModelOverrides: r2.runOptions.subagentModelOverrides ?? [], isSummarizeAction: "summarizeAction" === r2.action.action.case, previousRequestId: r2.previousRequestId, executePlan: f(r2.action), attemptRequestId: r2.attemptRequestId, originalRequestId: r2.originalRequestId, signal: r2.signal, ctx: r2.ctx, stallDetectorConfig: r2.runOptions.stallDetectorConfig, isRunningInTest: r2.runOptions.isRunningInTest, requestHeaders: r2.runOptions.headers, onHeader: r2.runOptions.onHeader, clientHeartbeatIntervalMs: r2.runOptions.clientHeartbeatIntervalMs });
        var p2, g;
        const y = (0, u.Wt)(c2.promptModelMetadata, c2.resolvedModel.modelId, r2.ctx), { onFirstInvocationStart: w } = r2, v = (0, o.Mm)(void 0 === w ? c2.inferenceClient : /* @__PURE__ */ (function(e3, t3) {
          let r3 = false;
          return { stream: (n2, s2) => (r3 || (r3 = true, t3()), e3.stream(n2, s2)) };
        })(c2.inferenceClient, w), c2.resolvedModel), _ = v.getSession(m(y?.promptConfig)), A = { getExecutor: (e3) => new n.Ycw(_.getExecutor(e3)) }, S = (0, o.Mm)(c2.inferenceClient, c2.resolvedModel).getSession(m(y?.promptConfig)), b = c2.summarization, E = void 0 === b ? void 0 : { promptSession: (0, o.Mm)(b.inferenceClient, b.model).getSession(h()), isFallbackToMainModel: b.isFallbackToMainModel, maxPromptChars: b.maxPromptChars };
        return { promptSession: _, promptToolSession: A, selfSummaryPromptSession: S, summarizationPromptSession: (0, o.Mm)(c2.inferenceClient, c2.resolvedModel).getSession(h()), attempt: { resolvedModel: c2.resolvedModel, supportsSelfSummary: c2.supportsSelfSummary, routedModelDisplayName: c2.routedModelDisplayName, resolvedModelMetadata: y, nonFileRules: c2.nonFileRules, metricLabels: c2.metricLabels, ...void 0 === E ? {} : { summarization: E }, ...void 0 === b?.backgroundProps ? {} : { backgroundSummarizationProps: b.backgroundProps }, kvBlobTelemetryEnabled: c2.kvBlobTelemetryEnabled, ...c2.agentRunRequestLogRequested ? { reportAgentRunRequest: c2.reportAgentRunRequest } : {}, agentEvents: c2.agentEvents, agentEventsAccepted: c2.acceptsAgentEvents, ...void 0 === c2.resolveCustomSubagentModels ? {} : { resolveCustomSubagentModels: c2.resolveCustomSubagentModels }, finish: c2.finish } };
      };
    }
    function m(e2) {
      return (0, n.sXH)((0, n.got)({ imageResizing: { webpWithoutCodec: "passthrough" }, configureDsv3Thinking: false, isSlopPromptSession: false, usesComposerFacade: false, safeTokenizationEnabled: false, ...void 0 === e2?.loopNudge ? {} : { loopNudge: e2.loopNudge }, ...void 0 === e2?.progressReminderThreshold ? {} : { progressReminderThreshold: e2.progressReminderThreshold }, ...void 0 === e2?.effortLevel ? {} : { effortLevel: e2.effortLevel }, supportsAssistantMessagePrefill: e2?.supportsAssistantMessagePrefill ?? true }, {}));
    }
    function h() {
      return m(void 0);
    }
    function f(e2) {
      if ("executePlanAction" === e2.action.case) return { planFileUri: e2.action.value.planFileUri, planFileContent: e2.action.value.planFileContent };
    }
  }