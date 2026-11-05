// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 77095 range:11269978..11275433
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
77095: (e, t, r) => {
    "use strict";
    r.d(t, { Ti: () => g, q1: () => v, ir: () => w, gV: () => y });
    var n = r(17392), s = r(1429), o = r(55625), i = r(63070);
    const a = { loopNudge: void 0, progressReminderThreshold: void 0, longReasoningReminder: void 0, effortLevel: void 0, supportsAssistantMessagePrefill: true, enableLineNumbers: true, useSparseReadLineNumbers: false, postToolReminders: [] };
    function c(e2, t2) {
      return { ...t2, agentTokenLimit: e2.contextWindowTokens, estimatedCacheTtlMs: e2.cacheTtlMs ?? t2.estimatedCacheTtlMs, promptConfig: l(t2.promptConfig, e2.supportsAssistantPrefill) };
    }
    function l(e2, t2) {
      return void 0 === t2 ? e2 : { ...e2 ?? a, supportsAssistantMessagePrefill: t2 };
    }
    var u = r(6688);
    function d(e2, t2, r2) {
      const n2 = /* @__PURE__ */ new Map();
      for (const t3 of e2.models) n2.set(t3.id, { slug: t3.id, advertised: true, valid: true, blocked: false, requiresMaxMode: false, representativeCostDollars: 0 });
      return { kind: "config", config: { forcePolicy: u.KQr.None, forceModelId: void 0, parentMaxMode: false, parentRequestedModelName: t2.id, models: n2, aliasToSlug: /* @__PURE__ */ new Map(), overrides: m(r2, n2) } };
    }
    function p(e2) {
      const t2 = new Set(e2.models.map((e3) => e3.id));
      return async (e3) => {
        const r2 = /* @__PURE__ */ new Map();
        for (const n2 of e3) r2.set(n2, t2.has(n2) ? n2 : void 0);
        return r2;
      };
    }
    function m(e2, t2) {
      const r2 = {};
      for (const n2 of e2) {
        const e3 = (0, u.jyZ)(n2.subagentType);
        if (void 0 === e3) continue;
        const s2 = n2.selection;
        switch (s2.case) {
          case "disabled":
          case "inherit":
            true === s2.value && (r2[e3] = { type: s2.case });
            break;
          case "model":
            t2.has(s2.value.modelId) && (r2[e3] = { type: "model", modelId: s2.value.modelId });
        }
      }
      return r2;
    }
    const h = "reasoning", f = [h, "effort", "thought_level"];
    function g(e2, t2, r2, n2) {
      return async (a2) => {
        const l2 = (function(e3, t3) {
          const r3 = t3.parameters.find((e4) => e4.id === i.Qt && "" !== e4.value)?.value, n3 = (0, i.Rz)(e3), o2 = [n3.defaultTokens, n3.longTokens].filter((e4) => void 0 !== e4), a3 = void 0 === r3 ? n3.defaultTokens : o2.find((e4) => String(e4) === r3);
          if (void 0 === a3) {
            if (void 0 === n3.longTokens) return e3;
            throw new s.p("private-inference-context-not-supported", (0, s.t)({ modelId: e3.id, contextWindow: { requested: r3 ?? "", supported: o2 } }));
          }
          return a3 === e3.contextWindowTokens ? e3 : { ...e3, contextWindowTokens: a3 };
        })(y(t2, a2.requestedModel), a2.requestedModel);
        !(function(e3, t3) {
          if (e3.vision) return;
          const r3 = "userMessageAction" === t3.action.case ? t3.action.value.userMessage?.selectedContext?.selectedImages.length ?? 0 : 0;
          if (0 === r3) return;
          throw new s.p("private-inference-vision-not-supported", (0, s.t)({ modelId: e3.id, imageCount: r3 }));
        })(l2, a2.action);
        const u2 = w(l2, a2.requestedModel), m2 = await r2({ modelId: l2.providerModelId, promptModel: void 0 === l2.cursorModelId ? void 0 : { modelId: l2.cursorModelId, parameters: u2 }, conversationId: a2.runOptions.conversationId, attemptRequestId: a2.attemptRequestId, originalRequestId: a2.originalRequestId, signal: a2.signal });
        try {
          const r3 = void 0 === m2.resolvedModelMetadata ? void 0 : { ...c(l2, m2.resolvedModelMetadata), subagentModelConfig: d(t2, l2, a2.runOptions.subagentModelOverrides ?? []) }, s2 = await e2({ model: l2, modelParameters: u2, attemptRequestId: a2.attemptRequestId, originalRequestId: a2.originalRequestId, attempt: a2.attempt, signal: a2.signal, onUsage: m2.onUsage, promptMiddleware: (0, o.KW)(r3?.promptConfig) }), i2 = void 0 === n2 ? s2 : n2.wrapAttemptSession(a2, s2, l2.providerModelId);
          return { promptSession: i2.promptSession, promptToolSession: i2.promptToolSession, attempt: { resolvedModel: a2.requestedModel, supportsSelfSummary: false, routedModelDisplayName: void 0, resolvedModelMetadata: r3, resolveCustomSubagentModels: p(t2), nonFileRules: [], finish: m2.finish } };
        } catch (e3) {
          throw m2.finish(), e3;
        }
      };
    }
    function y(e2, t2) {
      const r2 = e2.models.find((e3) => e3.id === t2.modelId);
      if (void 0 !== r2) return r2;
      throw new s.p("private-inference-model-not-in-catalog", (0, s.t)({ modelId: t2.modelId || void 0, catalogModelIds: e2.models.map((e3) => e3.id) }));
    }
    function w(e2, t2) {
      const r2 = t2.parameters.find((e3) => f.includes(e3.id) && "" !== e3.value)?.value, n2 = e2.effort;
      if (void 0 === n2) return [];
      const o2 = r2 ?? n2.default, i2 = n2.tiers.find((e3) => e3.id === o2);
      if (void 0 === i2) throw new s.p("private-inference-reasoning-not-supported", (0, s.t)({ modelId: e2.id, reasoning: { requested: o2, supported: n2.tiers.map((e3) => e3.id) } }));
      return [{ id: h, value: i2.value }];
    }
    function v(e2) {
      return (t2) => {
        throw new n.SK("Private inference is not configured", { requestId: t2.attemptRequestId, displayInfo: { title: "Private inference not configured", detail: e2, isRetryable: false } });
      };
    }
  }