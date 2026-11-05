// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 52883 range:8556294..8564152
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
52883: (e, t, r) => {
    "use strict";
    r.d(t, { AP: () => _, EL: () => y, He: () => w, VG: () => f, YF: () => S, ht: () => m, l$: () => g, rW: () => A, sN: () => u, sl: () => v });
    var n = r(3411), s = r(37949), o = r(98875), i = r(60525), a = r(19209);
    const c = (0, s.h)("agent-host:turn"), l = 8e3;
    function u(e2) {
      let t2;
      for (const r2 of e2.turns.values()) if ("running" === r2.state) {
        t2 = r2.turnId;
        break;
      }
      return { runningTurnId: t2, queuedTurnIds: e2.queuedRunOrder.filter((t3) => {
        const r2 = e2.turns.get(t3);
        return "queued" === r2?.state && !r2.cancelled;
      }) };
    }
    function d(e2, t2) {
      return e2.cancelled || t2.signal.aborted;
    }
    function p(e2, t2, r2, n2) {
      const s2 = e2.turns.get(t2);
      return void 0 !== s2 && "finished" !== s2.state && !s2.cancelled && (s2.cancelled = true, s2.cancelledReason = r2, s2.cancelledBy = n2?.initiatedBy, "running" === s2.state && true !== n2?.immediate ? (s2.conversationActionManager.abort(r2 ?? "turn interrupted"), s2.hardCancelTimer = setTimeout(() => {
        "finished" !== s2.state && s2.cancelTurn(r2);
      }, l)) : s2.cancelTurn(r2), e2.interactionRegistry.cancelTurn(t2, r2), "queued" !== s2.state || s2.cancelEventEmitted || (s2.cancelEventEmitted = true, e2.events.appendTurnCancelled(t2, r2, n2?.initiatedBy), (function(e3, t3) {
        E(e3, t3.turnId), I.delete(t3), e3.finishTurnLifecycle(t3.turnId), t3.state = "finished", t3.conversationActionManager.dispose(), e3.turns.delete(t3.turnId), e3.backgroundWorkRegistry.forgetWakeupTurnsForTurn(t3.turnId), e3.pendingTurns -= 1;
      })(e2, s2)), true);
    }
    function m(e2, t2, r2, n2) {
      const s2 = e2.turns.get(t2);
      return void 0 === s2 || "running" !== s2.state ? h(e2, t2, r2, n2) : p(e2, t2, r2, n2);
    }
    function h(e2, t2, r2, n2) {
      const s2 = e2.hostedTaskTurnAborts.get(t2);
      return void 0 !== s2 && (s2(r2, n2), e2.interactionRegistry.cancelTurn(t2, r2), true);
    }
    function f(e2, t2, r2, n2) {
      const s2 = e2.turns.get(t2);
      return void 0 !== s2 && "queued" === s2.state && p(e2, t2, r2, n2);
    }
    function g(e2, t2) {
      let r2 = 0;
      for (const n2 of [...e2.turns.keys()]) f(e2, n2, t2, { initiatedBy: i.TQ.HOST }) && (r2 += 1);
      return r2;
    }
    function y(e2, t2) {
      let r2 = 0;
      for (const n2 of [...e2.turns.keys()]) p(e2, n2, t2, { immediate: true, initiatedBy: i.TQ.HOST }) && (r2 += 1);
      for (const n2 of [...e2.hostedTaskTurnAborts.keys()]) h(e2, n2, t2, { immediate: true, initiatedBy: i.TQ.HOST }) && (r2 += 1);
      return r2;
    }
    function w(e2, t2, r2) {
      let n2 = 0;
      for (const s2 of [...e2.turns.keys()]) p(e2, s2, t2, r2) && (n2 += 1);
      for (const s2 of [...e2.hostedTaskTurnAborts.keys()]) h(e2, s2, t2, r2) && (n2 += 1);
      return n2;
    }
    function v(e2) {
      for (const t2 of e2.hostedTaskTurnCompleters.values()) t2();
      e2.hostedTaskTurnCompleters.clear();
    }
    function _(e2, t2) {
      const r2 = e2.turns.get(t2);
      void 0 === r2 || "queued" !== r2.state || r2.cancelled || b(e2, t2, true);
    }
    function A(e2) {
      const { ctx: t2, request: r2, session: s2, turnId: o2, modelDetails: i2, runOptions: c2, onSessionUpdated: l2, insertAtHead: u2 } = e2;
      s2.pendingTurns += 1;
      const [d2, p2] = t2.withDetached().withCancel(), m2 = d2.withName(`agent_host.${r2.sessionId}.${o2}`), h2 = { turnId: o2, cancelTurn: (e3) => {
        m2.signal.aborted || p2(e3);
      }, conversationActionManager: new n.h(), cancelled: false, cancelEventEmitted: false, state: "queued", queuedAction: r2.action };
      (0, a.aK)(h2, c2?.generationUUID ?? o2, (e3) => {
        s2.interactionListener.sendUpdate(t2, e3);
      }), s2.turns.set(o2, h2), b(s2, o2, true === u2), I.set(h2, { ctx: t2, request: r2, session: s2, turnId: o2, modelDetails: i2, runOptions: c2, onSessionUpdated: l2, namedTurnCtx: m2, turnEntry: h2 }), l2(s2), S(s2);
    }
    function S(e2) {
      if (e2.deleted || e2.hostedTaskTurnCompleters.size > 0) return;
      const { runningTurnId: t2, queuedTurnIds: r2 } = u(e2), n2 = r2[0];
      if (void 0 !== t2 || void 0 === n2) return;
      const s2 = e2.turns.get(n2), l2 = void 0 === s2 ? void 0 : I.get(s2);
      void 0 !== l2 && (function(e3) {
        const { ctx: t3, request: r3, session: n3, turnId: s3, modelDetails: l3, runOptions: u2, onSessionUpdated: p2, namedTurnCtx: m2, turnEntry: h2 } = e3;
        I.delete(h2);
        const f2 = async () => {
          await (0, a.pr)(h2);
          const e4 = (0, a.K1)(h2);
          if (!n3.deleted && true !== n3.disposing) for (const s4 of e4.reverse()) {
            const e5 = crypto.randomUUID();
            A({ ctx: t3, request: { sessionId: r3.sessionId, action: s4, requestContextDecoration: r3.requestContextDecoration }, session: n3, turnId: e5, modelDetails: l3, runOptions: { ...u2, generationUUID: e5 }, onSessionUpdated: p2, insertAtHead: true });
          }
        };
        E(n3, s3), h2.state = "running", p2(n3);
        const g2 = n3.turnChain.catch(() => {
        }).then(async () => {
          if (h2.cancelled || n3.deleted) return void (h2.cancelEventEmitted || (n3.events.appendTurnCancelled(s3, h2.cancelledReason, h2.cancelledBy), h2.cancelEventEmitted = true));
          let e4 = false;
          try {
            if (await (0, o.uj)(m2.withName("agent_host.turn"), async (t4, o2) => {
              o2.setAttribute("agent_host.session_id", r3.sessionId), o2.setAttribute("agent_host.turn_id", s3);
              const i2 = n3.beginBlobReadSummary(t4);
              try {
                void 0 !== r3.baseHistory && await n3.rebase(i2.ctx, r3.baseHistory), n3.events.appendTurnStarted(s3), e4 = true, "backgroundTaskCompletionAction" === r3.action?.action.case && n3.events.markBackgroundTaskCompletionsWoken(r3.action.action.value.completions), n3.interactionListener.setUpdateInterceptor((e5) => (0, a.sK)(h2, e5)), await n3.run({ ctx: i2.ctx, action: r3.action, modelDetails: l3, turnId: s3, runOptions: u2, conversationActionManager: h2.conversationActionManager, requestContextDecoration: r3.requestContextDecoration });
              } finally {
                i2.finish();
              }
            }), await f2(), d(h2, m2)) return void (h2.cancelEventEmitted || (n3.events.appendTurnCancelled(s3, h2.cancelledReason ?? (m2.signal.aborted ? "cancelled" : void 0), h2.cancelledBy), h2.cancelEventEmitted = true));
            n3.events.appendTurnCompleted(s3);
          } catch (t4) {
            if (await f2(), d(h2, m2)) return void (h2.cancelEventEmitted || (n3.events.appendTurnCancelled(s3, h2.cancelledReason ?? (t4 instanceof Error ? t4.message : String(t4)), h2.cancelledBy), h2.cancelEventEmitted = true));
            e4 || n3.events.appendTurnStarted(s3);
            n3.events.appendTurnSettledByError(s3, t4) === i.jz.FAILED && c.error(m2, "Agent host turn failed", t4, { sessionId: r3.sessionId, turnId: s3 });
          }
        }).finally(() => {
          n3.finishTurnLifecycle(s3), h2.state = "finished", void 0 !== h2.hardCancelTimer && clearTimeout(h2.hardCancelTimer), h2.conversationActionManager.dispose(), n3.interactionListener.setUpdateInterceptor(void 0), n3.turns.delete(s3), n3.backgroundWorkRegistry.forgetWakeupTurnsForTurn(s3), n3.pendingTurns -= 1, p2(n3), S(n3);
        });
        n3.turnChain = g2, g2.catch(() => {
        });
      })(l2);
    }
    function b(e2, t2, r2) {
      const n2 = e2.queuedRunOrder, s2 = n2.indexOf(t2);
      s2 >= 0 && n2.splice(s2, 1), r2 ? n2.unshift(t2) : n2.push(t2);
    }
    function E(e2, t2) {
      const r2 = e2.queuedRunOrder.indexOf(t2);
      r2 >= 0 && e2.queuedRunOrder.splice(r2, 1);
    }
    const I = /* @__PURE__ */ new WeakMap();
  }