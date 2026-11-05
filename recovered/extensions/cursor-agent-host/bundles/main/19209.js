// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 19209 range:4358114..4363230
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
19209: (e, t, r) => {
    "use strict";
    r.d(t, { K1: () => l, aK: () => a, kr: () => m, n$: () => i, pr: () => d, sK: () => u, xL: () => p });
    var n = r(2798), s = r(69584);
    const o = /* @__PURE__ */ new WeakMap();
    function i(e2) {
      return "injectContextAction" === e2.action.case;
    }
    function a(e2, t2, r2) {
      o.set(e2, { expectedRunId: t2, injectionLedger: new n.y(t2), actionManagerAcceptedIds: /* @__PURE__ */ new Set(), hostOwnedSteers: /* @__PURE__ */ new Map(), hostDeliveredIds: /* @__PURE__ */ new Set(), sendInteractionUpdate: r2, inFlightHandoff: Promise.resolve() }), (function(e3) {
        const t3 = e3.conversationActionManager, r3 = t3.run.bind(t3);
        t3.run = (t4, n2) => r3(t4, { write: async (t5) => {
          if (await n2.write(t5), "injectContextAction" !== t5.action.case) return;
          const r4 = t5.action.value.injectionId;
          "" !== r4 && c(e3)?.actionManagerAcceptedIds.add(r4);
        } });
      })(e2);
    }
    function c(e2) {
      return o.get(e2);
    }
    function l(e2) {
      const t2 = c(e2);
      if (void 0 === t2) return [];
      const r2 = [];
      for (const e3 of t2.injectionLedger.retagQueuedUserInjectionsToNextTurn()) {
        const n2 = t2.hostOwnedSteers.get(e3);
        void 0 === n2 ? t2.actionManagerAcceptedIds.has(e3) || t2.sendInteractionUpdate(new s.Uq({ message: { case: "contextInjectionState", value: { injectionId: e3, state: { state: { case: "queuedForNextTurn", value: {} } } } } })) : t2.hostDeliveredIds.has(e3) || r2.push(n2);
      }
      return t2.hostOwnedSteers.clear(), t2.injectionLedger.endRun(), r2;
    }
    function u(e2, t2) {
      if ("contextInjectionState" !== t2.message.case) return false;
      const { injectionId: r2, state: n2 } = t2.message.value, s2 = c(e2);
      return !(void 0 === s2 || !s2.hostOwnedSteers.has(r2)) && ("delivered" === n2?.state.case ? (s2.hostDeliveredIds.add(r2), false) : "queuedForNextTurn" === n2?.state.case && (s2.hostDeliveredIds.delete(r2), true));
    }
    async function d(e2) {
      e2.conversationActionManager.close(), await (async function(e3) {
        const t2 = c(e3);
        void 0 !== t2 && await t2.inFlightHandoff;
      })(e2);
    }
    function p(e2, t2, r2 = "client") {
      if (!i(t2)) return { kind: "enqueue", action: t2 };
      const n2 = (function(e3, t3, r3 = "client") {
        if (!i(t3)) return { kind: "enqueue", action: t3 };
        const n3 = t3.action.value;
        if ("systemContext" === n3.payload.case) return { kind: "rejected", reason: "producer_not_allowlisted" };
        if ("userContext" !== n3.payload.case || void 0 === n3.payload.value.userMessage) return { kind: "rejected", reason: "invalid_payload" };
        const o2 = (function(e4) {
          if (!i(e4)) return;
          const t4 = e4.action.value.payload;
          if ("userContext" !== t4.case || void 0 === t4.value.userMessage) return;
          return new s.QFf({ triggeringAuthId: e4.triggeringAuthId, triggeringUserInfo: e4.triggeringUserInfo, action: { case: "userMessageAction", value: new s.Vtf({ userMessage: t4.value.userMessage, requestContext: t4.value.requestContext }) } });
        })(t3);
        if (void 0 === o2) return { kind: "rejected", reason: "invalid_payload" };
        if ("" === n3.injectionId) return { kind: "enqueue", action: o2 };
        if (e3.awaitingInputCount > 0) return { kind: "enqueue", action: o2 };
        const a2 = (function(e4, t4) {
          for (const r4 of e4.turns.values()) if ("running" === r4.state && !r4.cancelled && c(r4)?.expectedRunId === t4) return r4;
          return;
        })(e3, n3.expectedRunId);
        if (void 0 === a2) return { kind: "enqueue", action: o2 };
        const l2 = c(a2);
        if (void 0 === l2) return { kind: "enqueue", action: o2 };
        const u2 = l2.injectionLedger.admit({ injectionId: n3.injectionId, expectedRunId: n3.expectedRunId, source: "user", payload: t3 });
        if ("duplicate" === u2.kind) return { kind: "duplicate", turnId: a2.turnId };
        if ("rejected" === u2.kind) return "run_mismatch" === u2.reason || "empty_injection_id" === u2.reason ? { kind: "enqueue", action: o2 } : { kind: "rejected", reason: u2.reason };
        if ("queued_for_next_turn" === u2.kind) return { kind: "enqueue", action: o2 };
        "host" === r3 && l2.hostOwnedSteers.set(n3.injectionId, o2);
        return (function(e4, t4) {
          const r4 = c(e4);
          if (void 0 === r4) return;
          const n4 = e4.conversationActionManager.submitConversationAction(t4).catch(() => {
          });
          r4.inFlightHandoff = Promise.all([r4.inFlightHandoff, n4]).then(() => {
          });
        })(a2, t3), { kind: "steered", turnId: a2.turnId };
      })(e2, t2, r2);
      return "steered" === n2.kind || "duplicate" === n2.kind ? { kind: "steer", turnId: n2.turnId } : "rejected" === n2.kind ? { kind: "reject", reason: n2.reason } : n2;
    }
    function m(e2) {
      for (const t2 of e2.turns.values()) if ("running" === t2.state && !t2.cancelled) return c(t2)?.expectedRunId ?? t2.turnId;
    }
  }