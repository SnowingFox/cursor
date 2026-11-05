// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 73877 range:11133794..11139303
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
73877: (e, t, r) => {
    "use strict";
    function n(e2, t2) {
      const r2 = e2;
      switch (t2.kind) {
        case "queued":
          return { _privacyMode: r2, state: { case: "queued", value: { _privacyMode: r2 } } };
        case "delivered":
          return { _privacyMode: r2, state: { case: "delivered", value: { _privacyMode: r2, step: t2.step, deliveryBatchId: t2.deliveryBatchId, deliveredAtMs: BigInt(t2.deliveredAtMs) } } };
        case "queued_for_next_turn":
          return { _privacyMode: r2, state: { case: "queuedForNextTurn", value: { _privacyMode: r2 } } };
        case "cancelled":
          return { _privacyMode: r2, state: { case: "cancelled", value: { _privacyMode: r2 } } };
        case "rejected":
          return { _privacyMode: r2, state: { case: "rejected", value: { _privacyMode: r2, reason: t2.reason } } };
      }
    }
    r.d(t, { P: () => s });
    const s = { textDelta(e2, t2) {
      const r2 = e2.__privacyMode;
      return { _privacyMode: r2, messageStartedAtMs: t2, message: { case: "textDelta", value: { _privacyMode: r2, text: e2, isServerNotice: false } } };
    }, toolCallStarted(e2, t2, r2) {
      const n2 = t2._privacyMode;
      return { _privacyMode: n2, messageStartedAtMs: t2.startedAtMs, message: { case: "toolCallStarted", value: { _privacyMode: n2, callId: e2, toolCall: t2, modelCallId: r2 } } };
    }, toolCallCompleted(e2, t2, r2) {
      const n2 = t2._privacyMode;
      return { _privacyMode: n2, messageStartedAtMs: t2.startedAtMs, message: { case: "toolCallCompleted", value: { _privacyMode: n2, callId: e2, toolCall: t2, modelCallId: r2 } } };
    }, toolCallDelta(e2, t2, r2, n2) {
      const s2 = t2._privacyMode;
      return { _privacyMode: s2, messageStartedAtMs: n2, message: { case: "toolCallDelta", value: { _privacyMode: s2, callId: e2, toolCallDelta: t2, modelCallId: r2 } } };
    }, thinkingDelta(e2, t2, r2) {
      const n2 = e2.__privacyMode;
      return { _privacyMode: n2, messageStartedAtMs: r2, message: { case: "thinkingDelta", value: { _privacyMode: n2, text: e2, thinkingStyle: t2 } } };
    }, thinkingCompleted: (e2, t2, r2) => ({ _privacyMode: e2, messageStartedAtMs: r2, message: { case: "thinkingCompleted", value: { _privacyMode: e2, thinkingDurationMs: t2 } } }), userMessageAppended(e2) {
      const t2 = e2._privacyMode;
      return { _privacyMode: t2, messageStartedAtMs: e2.startedAtMs, message: { case: "userMessageAppended", value: { _privacyMode: t2, userMessage: e2 } } };
    }, partialToolCall(e2, t2, r2, n2) {
      const s2 = t2._privacyMode;
      return { _privacyMode: s2, messageStartedAtMs: t2.startedAtMs, message: { case: "partialToolCall", value: { _privacyMode: s2, callId: e2, toolCall: t2, modelCallId: r2, argsTextDelta: n2 } } };
    }, tokenDelta: (e2, t2) => ({ _privacyMode: e2, message: { case: "tokenDelta", value: { _privacyMode: e2, tokens: t2 } } }), summary(e2) {
      const t2 = e2.__privacyMode;
      return { _privacyMode: t2, message: { case: "summary", value: { _privacyMode: t2, summary: e2 } } };
    }, summaryStarted: (e2) => ({ _privacyMode: e2, message: { case: "summaryStarted", value: { _privacyMode: e2 } } }), heartbeat: (e2) => ({ _privacyMode: e2, message: { case: "heartbeat", value: { _privacyMode: e2 } } }), contextInjectionState: (e2, t2, r2) => ({ _privacyMode: e2, message: { case: "contextInjectionState", value: { _privacyMode: e2, injectionId: t2, state: n(e2, r2) } } }), summaryCompleted: (e2, t2, r2) => ({ _privacyMode: e2, message: { case: "summaryCompleted", value: { _privacyMode: e2, hookMessage: t2, failed: r2 } } }), shellOutputDelta: (e2, t2) => ({ _privacyMode: e2, message: { case: "shellOutputDelta", value: { _privacyMode: e2, event: t2 } } }), turnEnded: (e2, t2, r2) => ({ _privacyMode: e2, message: { case: "turnEnded", value: { _privacyMode: e2, ...t2 && { inputTokens: BigInt(t2.inputTokens), outputTokens: BigInt(t2.outputTokens), cacheReadTokens: BigInt(t2.cacheReadTokens), cacheWriteTokens: BigInt(t2.cacheWriteTokens), reasoningTokens: BigInt(t2.reasoningTokens ?? 0) }, ...void 0 !== r2 ? { endedAtMs: r2 } : {} } } }), stepStarted: (e2, t2) => ({ _privacyMode: e2, message: { case: "stepStarted", value: { _privacyMode: e2, stepId: BigInt(t2) } } }), toolRequestsListed: (e2, t2) => ({ _privacyMode: e2, message: { case: "toolRequestsListed", value: { _privacyMode: e2, callCount: Math.max(0, t2) } } }), stepCompleted: (e2, t2, r2) => ({ _privacyMode: e2, message: { case: "stepCompleted", value: { _privacyMode: e2, stepId: BigInt(t2), stepDurationMs: BigInt(r2) } } }), promptSuggestion(e2) {
      const t2 = e2.__privacyMode;
      return { _privacyMode: t2, message: { case: "promptSuggestion", value: { _privacyMode: t2, suggestion: e2 } } };
    }, activeBranchChange(e2, t2) {
      const r2 = e2.__privacyMode;
      return { _privacyMode: r2, message: { case: "activeBranchChange", value: { _privacyMode: r2, path: e2, branchName: t2 } } };
    }, feedbackRequest(e2, t2, r2, n2, s2 = [], o = {}) {
      const i = (e3) => ({ _privacyMode: r2, id: e3.id, label: e3.label });
      return { _privacyMode: r2, message: { case: "feedbackRequest", value: { _privacyMode: r2, requestId: e2, canonicalModelName: t2, categories: n2.map(i), categoryGroups: s2.map((e3) => ({ _privacyMode: r2, id: e3.id, prompt: e3.prompt, categories: e3.categories.map(i) })), showFormImmediately: false, title: o.title, negativeTitle: o.negativeTitle, commentPlaceholder: o.commentPlaceholder } } };
    } };
  }