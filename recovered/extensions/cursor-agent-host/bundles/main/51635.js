// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 51635 range:8530756..8536853
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
51635: (e, t, r) => {
    "use strict";
    r.d(t, { QZ: () => h, au: () => p, gy: () => y, nn: () => u });
    var n = r(6688), s = r(37949), o = r(69584), i = r(1429);
    const a = "agent_host_local_loop", c = { "managed-local-unavailable": "expected", "managed-local-client-absent": "fallback", "gate-reader-unavailable": "fallback", "gate-check-failed": "fallback", "gate-off": "expected", "enrollment-denied": "expected", "subscription-notification-connect-routed": "fallback", "byok-connect-routed": "fallback", "private-inference-not-enrolled": "fallback" };
    function l(e2) {
      return { runtime: "connect", reason: e2, disposition: c[e2] };
    }
    const u = /* @__PURE__ */ new Set([o.xyI.AGENT, o.xyI.PLAN, o.xyI.ASK, o.xyI.DEBUG, o.xyI.MULTITASK]);
    function d(e2) {
      switch (e2.action.case) {
        case "userMessageAction":
          return e2.action.value.userMessage?.mode;
        case "executePlanAction":
          return e2.action.value.executionMode === o.xyI.UNSPECIFIED ? o.xyI.AGENT : e2.action.value.executionMode;
        default:
          return;
      }
    }
    function p(e2, t2) {
      return (0, n.wLs)(t2.mode, d(e2));
    }
    const m = (0, s.h)("@anysphere/agent-host:local-loop-turn-router");
    function h(e2) {
      return async (t2) => {
        if (void 0 !== e2.privateInference) return (async function(e3, t3, r3) {
          const n3 = g(r3);
          if (!e3) return f("private-inference-unavailable", n3);
          let s3;
          try {
            s3 = await t3.readTeamEnablement();
          } catch (e4) {
            m.warn(r3.ctx, "Private inference team enablement read threw", { error: e4 instanceof Error ? e4.stack ?? e4.message : String(e4) }), s3 = "unavailable";
          }
          switch (s3) {
            case "enabled":
              break;
            case "disabled":
              return t3.enrollmentUndecided ? l("private-inference-not-enrolled") : f("private-inference-disabled-for-team", n3);
            case "unavailable":
              return f("private-inference-enablement-unavailable", n3);
          }
          if (n3.hasModelCredentials) return f("private-inference-byok-not-supported", n3);
          const o3 = v(n3);
          if (void 0 !== o3) return f(o3, n3);
          return { runtime: "managed-local", reason: "private-inference-eligible" };
        })(e2.managedLocalAvailable, e2.privateInference, t2);
        if (void 0 !== e2.readEnrollmentAfterActivation && "enabled" === (function(e3, t3) {
          try {
            return e3();
          } catch (e4) {
            return m.warn(t3.ctx, "Private inference enrollment read threw", { error: e4 instanceof Error ? e4.stack ?? e4.message : String(e4) }), "unavailable";
          }
        })(e2.readEnrollmentAfterActivation, t2)) return f("private-inference-enrolled-after-activation", g(t2));
        if (!e2.managedLocalAvailable) return l(e2.localLoopRequested ?? e2.managedLocalAvailable ? "managed-local-client-absent" : "managed-local-unavailable");
        let r2;
        const n2 = t2.runOptions.localLoopGateEnabled;
        if (void 0 !== n2) r2 = n2;
        else {
          const n3 = e2.runtimeCapabilities;
          if (void 0 === n3 || void 0 === n3.checkFeatureGate) return l("gate-reader-unavailable");
          try {
            r2 = await n3.checkFeatureGate(a);
          } catch (e3) {
            return m.warn(t2.ctx, "Local loop gate check threw", { error: e3 instanceof Error ? e3.stack ?? e3.message : String(e3) }), l("gate-check-failed");
          }
        }
        const s2 = true === e2.enrollmentLatch?.observeGate(r2);
        if (!r2) return l("gate-off");
        if (s2) return l("enrollment-denied");
        if ("subscriptionNotificationAction" === t2.action.action.case) return l("subscription-notification-connect-routed");
        const o2 = g(t2);
        if (o2.hasModelCredentials) return l("byok-connect-routed");
        const i2 = v(o2);
        return void 0 !== i2 ? f(i2, o2) : { runtime: "managed-local", reason: "eligible" };
      };
    }
    function f(e2, t2) {
      return { runtime: "fail", reason: e2, error: new i.p(e2, { actionCase: t2.actionCase, turnModeName: o.xyI[t2.turnMode], modelId: t2.modelId }) };
    }
    function g(e2) {
      const t2 = e2.runOptions.requestedModel?.modelId, r2 = e2.modelDetails?.modelId;
      return { conversationId: e2.runOptions.conversationId, generationUUID: e2.runOptions.generationUUID, actionCase: e2.action.action.case, modelId: t2 || r2 || void 0, requestedMode: d(e2.action), turnMode: p(e2.action, e2.conversationState), hasModelCredentials: void 0 !== e2.runOptions.requestedModel?.credentials.case || void 0 !== e2.modelDetails?.credentials.case, hasCustomSystemPrompt: (e2.runOptions.customSystemPrompt ?? "").length > 0, unsupportedRunOptionReason: w(e2.runOptions), isHostedSubagentChild: y(e2.runOptions) };
    }
    function y(e2) {
      return Boolean(e2.subagentTypeName || e2.parentAgentToolCallId);
    }
    function w(e2) {
      return void 0 !== e2.harness ? "harness-not-supported" : true === e2.excludeWorkspaceContext ? "exclude-workspace-context-not-supported" : true === e2.directMetaParentChildSubagent ? "direct-meta-subagent-not-supported" : void 0;
    }
    function v(e2) {
      return "backgroundTaskCompletionAction" !== (t2 = e2.actionCase) && "resumeAction" !== t2 && "summarizeAction" !== t2 && "goalContinuationAction" !== t2 && "asyncAskQuestionCompletionAction" !== t2 && "shellCommandAction" !== t2 && "userMessageAction" !== e2.actionCase && "executePlanAction" !== e2.actionCase ? "action-not-supported" : (function(e3) {
        if (u.has(e3.turnMode)) return true;
        return e3.isHostedSubagentChild && e3.requestedMode === o.xyI.UNSPECIFIED;
      })(e2) ? (function(e3) {
        if (void 0 === e3.modelId) return "model-not-supported";
        if (e3.hasCustomSystemPrompt && e3.isHostedSubagentChild) return "custom-system-prompt-not-supported";
        return e3.unsupportedRunOptionReason;
      })(e2) : "mode-not-supported";
      var t2;
    }
  }