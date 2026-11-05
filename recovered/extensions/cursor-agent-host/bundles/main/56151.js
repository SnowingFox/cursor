// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 56151 range:8703633..8708538
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
56151: (e, t, r) => {
    "use strict";
    r.d(t, { Am: () => c, Oc: () => p, ct: () => d, kI: () => f, lJ: () => v, qk: () => _, qo: () => u });
    var n = r(37949), s = r(98875), o = r(46144), i = r(51635);
    const a = (0, n.h)("@anysphere/agent-host:local-loop-turn-telemetry");
    function c(e2, t2) {
      return e2.with(s.b6, { ...e2.get(s.b6), requestId: t2.attemptRequestId, reqId: t2.attemptRequestId, "composer.id": t2.composerId, "agent_host.local_loop": true });
    }
    const l = "local_loop";
    function u(e2, t2) {
      const r2 = (0, n.o1)(e2, { loop: l });
      return r2.with(o.Fm, (0, o.ts)({ backend: r2.get(o.Fm), labels: { loop: l, ...t2 } }));
    }
    function d(e2, t2) {
      return void 0 === t2 || 0 === Object.keys(t2).length ? e2 : e2.with(o.Fm, (0, o.ts)({ backend: e2.get(o.Fm), labels: { ...t2 } }));
    }
    function p() {
      let e2 = [];
      return { sink: { book: (t2) => {
        e2.push(t2);
      } }, dropHeld: () => {
        e2 = [];
      }, flushHeld: (t2) => {
        const r2 = e2;
        e2 = [];
        for (const e3 of r2) try {
          e3();
        } catch (e4) {
          a.warn(t2, "Held turn teardown telemetry failed", { error: e4 instanceof Error ? e4.stack ?? e4.message : String(e4) });
        }
      } };
    }
    const m = "agent_host.local_loop.turn.result", h = "agent_host.local_loop.turn.duration_ms";
    function f(e2, t2, r2) {
      return void 0 === t2 ? e2 : { run: async (n2) => {
        const s2 = performance.now();
        let o2 = false;
        try {
          await e2.run(n2);
        } catch (e3) {
          throw o2 = true, e3;
        } finally {
          const e3 = performance.now() - s2, a2 = { ...r2, issubagent: (0, i.gy)(n2.runOptions) ? "true" : "false", outcome: g(n2, o2) };
          y(m, () => t2.increment?.({ stat: m, value: 1, tags: a2 })), y(h, () => t2.distribution({ stat: h, value: e3, tags: a2 }));
        }
      }, dispose: () => e2.dispose() };
    }
    function g(e2, t2) {
      return e2.ctx.canceled || e2.conversationActionManager.abortRequested ? "aborted" : t2 ? "error" : "success";
    }
    function y(e2, t2) {
      try {
        t2();
      } catch (t3) {
        console.warn(`${e2} not emitted`, t3 instanceof Error ? t3.name : typeof t3);
      }
    }
    const w = /* @__PURE__ */ new Set(["textDelta", "thinkingDelta", "partialToolCall", "toolCallStarted", "toolCallDelta"]);
    function v(e2) {
      const { onTtftBreakdown: t2 } = e2;
      if (void 0 === t2) return { beginAttempt: () => {
      }, markRunStreamStart: () => {
      }, markFirstInvocationStart: () => {
      }, wrapListener: (e3) => e3 };
      const r2 = e2.now ?? (() => performance.now());
      let n2, s2 = false;
      const o2 = (o3) => {
        const i2 = n2, c2 = i2?.runStreamStartedAt;
        if (s2 || void 0 === i2 || void 0 === c2) return;
        if (!(function(e3) {
          const t3 = e3.message.case;
          if (void 0 === t3 || !w.has(t3)) return false;
          if ("textDelta" === e3.message.case) {
            const t4 = e3.message.value;
            return !t4.isServerNotice && t4.text.length > 0;
          }
          return true;
        })(o3)) return;
        s2 = true;
        const l2 = r2(), { firstInvocationStartedAt: u2 } = i2, d2 = void 0 === u2 ? { providerTtftMs: l2 - c2 } : { providerTtftMs: l2 - u2, clientPrepMs: u2 - c2 };
        try {
          t2({ serverFirstTokenMs: l2 - i2.startedAt, preStreamSetupMs: c2 - i2.startedAt, waitForFirstEventMs: 0, ...d2, slowPoolWaitMs: 0, clock: "client" }, i2.attempt);
        } catch (t3) {
          a.warn(e2.ctx, "onTtftBreakdown callback failed", { requestId: e2.requestId, error: t3 instanceof Error ? t3.stack ?? t3.message : String(t3) });
        }
      };
      return { beginAttempt: (e3) => {
        n2 = { attempt: e3, startedAt: r2() };
      }, markRunStreamStart: () => {
        void 0 !== n2 && void 0 === n2.runStreamStartedAt && (n2.runStreamStartedAt = r2());
      }, markFirstInvocationStart: () => {
        void 0 !== n2 && void 0 !== n2.runStreamStartedAt && void 0 === n2.firstInvocationStartedAt && (n2.firstInvocationStartedAt = r2());
      }, wrapListener: (e3) => {
        const { enqueuePostTurnEndedWork: t3, flushPostTurnEndedWork: r3 } = e3;
        return { sendUpdate: (t4, r4) => (o2(r4), e3.sendUpdate(t4, r4)), query: (t4, r4) => e3.query(t4, r4), enqueuePostTurnEndedWork: void 0 === t3 ? void 0 : (r4) => t3.call(e3, r4), flushPostTurnEndedWork: void 0 === r3 ? void 0 : (t4) => r3.call(e3, t4) };
      } };
    }
    function _(e2) {
      try {
        const t2 = (0, s.mJ)(e2);
        if (void 0 === t2) return {};
        const r2 = `00-${t2.traceId}-${t2.spanId}-${t2.traceFlags.toString(16).padStart(2, "0")}`;
        return { traceparent: r2, "backend-traceparent": r2 };
      } catch {
        return {};
      }
    }
  }