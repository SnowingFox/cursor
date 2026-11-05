// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 26814 range:4727776..4733236
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
26814: (e, t, r) => {
    "use strict";
    r.d(t, { FG: () => u, Wt: () => f, Yg: () => m, cf: () => h });
    var n = r(6688), s = r(37949), o = r(33002), i = r(20859), a = r(33275);
    const c = (0, s.h)("@anysphere/agent-host:managed-local-model"), l = ["anthropic", "openai", "google", "xai", "zai", "cursor", "unknown"], u = ["dsv3-1018", "dsv3-1205", "cursor-0226", "latest", "gpt5-codex", "codex-cloud", "haiku"], d = ["low", "medium", "high", "extra-high", "xhigh", "max"], p = ["anonymous", "composer", "auto", "grok", "grok-4.5", "grok-4.6", "grok-4.7"];
    function m(e2) {
      return e2.nameWeTellTheModelToCallItself ?? "Cursor";
    }
    function h(e2) {
      return void 0 === e2.promptConfig ? void 0 : (0, n.op5)(e2.promptConfig.postToolReminders);
    }
    function f(e2, t2, r2 = (0, o.q6)()) {
      if (void 0 === e2) return;
      const n2 = Object.keys(e2.featureFlags).length > 0;
      return n2 || c.warn(r2, "run_ready carried no evaluated feature flags; the config paths keep their pinned fallback flags and the all-static tool layout", { resolvedModelId: t2 }), { promptModelInfo: _(e2, t2), nameWeTellTheModelToCallItself: "" === e2.selfIdentityName ? void 0 : e2.selfIdentityName, useDsv3Harness: e2.useDsv3Harness, dsv3IsThinking: e2.dsv3IsThinking, agentTokenLimit: e2.agentTokenLimit, estimatedCacheTtlMs: e2.estimatedCacheTtlMs, persona: p.find((t3) => t3 === e2.persona), featureFlags: n2 ? v(e2, t2, r2) : void 0, promptConfig: n2 ? y(e2, t2, r2) : void 0, modeConfig: (0, i.pI)(e2), askQuestionConfig: (0, i.nH)(e2), subagentModelConfig: (0, a._)(e2, t2, r2), enableSemanticSearch: e2.enableSemanticSearch, smartModeClassifier: g(e2) };
    }
    function g(e2) {
      if (void 0 !== e2.smartModeClassifierMode) return { mode: e2.smartModeClassifierMode, shadowMode: e2.smartModeClassifierShadowMode ?? false };
    }
    function y(e2, t2, r2) {
      const n2 = e2.longReasoningReminder, s2 = (function(e3) {
        switch (e3) {
          case "control":
          case "reminder_1000":
          case "reminder_2000":
            return e3;
          default:
            return;
        }
      })(n2?.arm);
      return { loopNudge: void 0 === e2.loopNudge ? void 0 : { minRepetitions: e2.loopNudge.minRepetitions, minMessageLength: e2.loopNudge.minMessageLength, injectReminder: e2.loopNudge.injectReminder }, progressReminderThreshold: e2.progressReminderThreshold, longReasoningReminder: void 0 === n2 || void 0 === s2 || n2.thresholdTokens <= 0 || 0 === n2.reminderText.length ? void 0 : { arm: s2, enabled: n2.enabled, thresholdTokens: n2.thresholdTokens, delayCalls: n2.delayCalls, reminderText: n2.reminderText }, effortLevel: e2.effortLevel, supportsAssistantMessagePrefill: e2.supportsAssistantMessagePrefill, enableLineNumbers: e2.enableLineNumbers, useSparseReadLineNumbers: e2.useSparseReadLineNumbers, postToolReminders: w(e2, t2, r2) };
    }
    function w(e2, t2, r2) {
      const s2 = [];
      for (const o2 of e2.postToolReminders) {
        const e3 = (0, n.oLV)({ id: o2.id, intervalToolCalls: o2.intervalToolCalls });
        e3.ok ? s2.push(e3.row) : c.warn(r2, "unknown-id" === e3.rejection.kind ? "run_ready post-tool reminder names a reminder this build does not know; leaving it uninstalled" : "run_ready post-tool reminder carries no usable interval; leaving it uninstalled", { reminderId: o2.id, intervalToolCalls: o2.intervalToolCalls, resolvedModelId: t2 });
      }
      return s2;
    }
    function v(e2, t2, r2) {
      const s2 = /* @__PURE__ */ new Map();
      for (const [t3, r3] of Object.entries(e2.featureFlags)) switch (r3.value.case) {
        case "boolValue":
        case "numberValue":
        case "stringValue":
          s2.set(t3, r3.value.value);
      }
      const o2 = (0, n.sDw)(s2, { onUnrecognizedValue: (e3) => {
        c.warn(r2, "run_ready feature flag value is not one this build knows; leaving the flag unset", { flag: e3.key, value: e3.value, knownValues: e3.knownValues, resolvedModelId: t2 });
      } });
      return s2.has("dynamicToolProfile") || c.warn(r2, "run_ready feature flags carry no dynamicToolProfile; the tool layout stays all-static", { resolvedModelId: t2 }), o2;
    }
    function _(e2, t2) {
      const r2 = "gemini" === e2.vendor ? "google" : l.find((t3) => t3 === e2.vendor), n2 = u.find((t3) => t3 === e2.promptVersion);
      if (void 0 === r2 || void 0 === n2) return;
      const s2 = d.find((t3) => t3 === e2.reasoningEffort);
      return { vendor: r2, modelName: t2, promptVersion: n2, isSonnet45: e2.isSonnet45, isGemini3: e2.isGemini3, isGpt51: e2.isGpt51, isGpt52: e2.isGpt52, isGpt5: e2.isGpt5, isGpt55: e2.isGpt55, isGpt56: e2.isGpt56, isSonnet4: e2.isSonnet4, isCodexFamily: e2.isCodexFamily, isGpt54: e2.isGpt54, isGpt52Codex: e2.isGpt52Codex, isGpt53Codex: e2.isGpt53Codex, isGpt53CodexSpark: e2.isGpt53CodexSpark, isClaude4X: e2.isClaude4x, isOpus45: e2.isOpus45, isOpus46: e2.isOpus46, isOpus48: e2.isOpus48, isOpus5: e2.isOpus5, isOpus55: e2.isOpus55, isFable5: e2.isFable5, isFable51: e2.isFable51, isFruitcake: e2.isFruitcake, isGpt5Family: e2.isGpt5Family, isComposer1: e2.isComposer1, isComposer15: e2.isComposer15, isComposer2: e2.isComposer2, isComposerMatterhorn: e2.isComposerMatterhorn, isGrok45ProductPrompt: e2.isGrok45ProductPrompt, isGrok46ProductPrompt: e2.isGrok46ProductPrompt, isRawTrainingSlug: e2.isRawTrainingSlug, ...void 0 === s2 ? {} : { reasoningEffort: s2 } };
    }
  }