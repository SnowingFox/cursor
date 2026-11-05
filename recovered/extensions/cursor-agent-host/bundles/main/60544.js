// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 60544 range:9314975..9322165
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
60544: (e, t, r) => {
    "use strict";
    r.d(t, { Z9: () => b, QF: () => E });
    var n = r(9639), s = r(37949), o = r(33002), i = r(60525), a = r(89396);
    const c = 10485760;
    function l(...e2) {
      const t2 = /* @__PURE__ */ new Set(), r2 = [];
      for (const n2 of e2) for (const e3 of n2 ?? []) 0 === e3.length || t2.has(e3) || (t2.add(e3), r2.push(e3));
      return r2;
    }
    const u = (e2) => ({ fileContents: {}, fileCount: 0, prefetchedCount: 0, skippedLargeCount: 0, failedCount: 0, totalBytes: 0, prefetchMs: e2 });
    async function d(e2, t2, r2 = () => performance.now()) {
      const n2 = r2(), s2 = l(e2);
      if (0 === s2.length) return u(r2() - n2);
      let o2 = 0, i2 = 0, a2 = 0, d2 = 0;
      const p2 = {}, m2 = await Promise.all(s2.map(async (e3) => {
        try {
          if ((await t2.stat(e3)).size > c) return void i2++;
          const r3 = await t2.read(e3);
          return o2++, d2 += r3.byteLength, [e3, r3.contents];
        } catch {
          return void a2++;
        }
      }));
      for (const e3 of m2) void 0 !== e3 && (p2[e3[0]] = e3[1]);
      return { fileContents: p2, fileCount: s2.length, prefetchedCount: o2, skippedLargeCount: i2, failedCount: a2, totalBytes: d2, prefetchMs: r2() - n2 };
    }
    var p = r(18130), m = r(66608);
    const h = 25, f = 250, g = "Request context overlay missing on the first turn: refusing to start without renderer policy fields.", y = (0, s.h)("agent-host:own-request-context");
    function w(e2) {
      return { fileContents: {}, fileCount: 0, prefetchedCount: 0, skippedLargeCount: 0, failedCount: 0, totalBytes: 0, prefetchMs: e2 };
    }
    async function v(e2, t2) {
      const [r2, n2] = (0, o.q6)().withTimeoutAndCancel(t2);
      try {
        return await Promise.race([e2, new Promise((e3) => {
          r2.signal.aborted ? e3(void 0) : r2.signal.addEventListener("abort", () => e3(void 0), { once: true });
        })]);
      } finally {
        n2();
      }
    }
    async function _(e2) {
      const t2 = e2.graceAfterBaseMs ?? h, r2 = e2.firstTurnWaitMs ?? f, n2 = e2.now ?? (() => performance.now()), s2 = n2(), o2 = e2.baseExecutor.execute(e2.ctx, e2.args, e2.execOptions);
      let i2, c2 = "none";
      const u2 = (function(e3, t3) {
        return e3.mailbox.isExpected(e3.requestId) ? e3.mailbox.awaitOverlay(e3.requestId) : void 0 === e3.pullOverlay ? Promise.resolve(e3.mailbox.peek(e3.requestId)) : e3.pullOverlay().then((r3) => void 0 !== r3 ? (t3("pull", r3.sourceToolIds), r3.overlay) : e3.mailbox.peek(e3.requestId));
      })(e2, (e3, t3) => {
        c2 = e3, i2 = t3;
      });
      u2.then((t3) => {
        void 0 !== t3 && e2.mailbox.recordLast(e2.composerId, t3);
      });
      const _2 = l(e2.mailbox.peek(e2.requestId)?.prefetchFileUris, e2.mailbox.last(e2.composerId)?.prefetchFileUris), A2 = void 0 === e2.prefetchFileAccess ? Promise.resolve(w(0)) : d(_2, e2.prefetchFileAccess, n2), S2 = await o2, b2 = n2();
      let E2 = await v(u2, t2), I = false, C = false;
      if (void 0 === E2) {
        const t3 = e2.mailbox.last(e2.composerId);
        void 0 !== t3 ? (E2 = t3, c2 = "last", I = true, y.warn(e2.ctx, "overlay timed out; reusing last overlay for this composer", { requestId: e2.requestId, composerId: e2.composerId })) : (C = true, y.warn(e2.ctx, "overlay missing after grace; waiting on first turn", { requestId: e2.requestId, composerId: e2.composerId, waitMs: r2 }), E2 = await v(u2, r2));
      }
      void 0 !== E2 && "none" === c2 && (c2 = "mailbox"), void 0 === E2 || I || e2.mailbox.recordLast(e2.composerId, E2);
      const k = n2() - s2, x = n2() - b2, T = (t3, r3) => {
        e2.onTiming?.({ baseMs: k, overlayWaitMs: x, prefetchMs: t3.prefetchMs, prefetchFileCount: t3.fileCount, prefetchTotalBytes: t3.totalBytes, usedOverlay: r3.usedOverlay, overlaySource: c2, timedOut: r3.timedOut, usedLastOverlay: I, firstTurnWaited: C });
      };
      if (void 0 === E2) return y.error(e2.ctx, "overlay missing on first turn; failing closed", { requestId: e2.requestId, composerId: e2.composerId }), T(await A2, { usedOverlay: false, timedOut: true }), e2.mailbox.forget(e2.requestId), new a._G({ result: { case: "error", value: new a.nf({ error: g }) } });
      if ("success" !== S2.result.case || void 0 === S2.result.value.requestContext) return T(await A2, { usedOverlay: true, timedOut: false }), e2.mailbox.forget(e2.requestId), S2;
      const R = l(E2.prefetchFileUris).filter((e3) => !_2.includes(e3)), B = void 0 === e2.prefetchFileAccess || 0 === R.length ? Promise.resolve(w(0)) : d(R, e2.prefetchFileAccess, n2), [P, J] = await Promise.all([A2, B]), M = { ...P.fileContents, ...J.fileContents }, q = { fileContents: M, fileCount: P.fileCount + J.fileCount, prefetchedCount: P.prefetchedCount + J.prefetchedCount, skippedLargeCount: P.skippedLargeCount + J.skippedLargeCount, failedCount: P.failedCount + J.failedCount, totalBytes: P.totalBytes + J.totalBytes, prefetchMs: P.prefetchMs + J.prefetchMs }, D = S2.result.value.requestContext;
      return (function(e3, t3, r3) {
        if (e3.filteredBrowserMcpProviderIds.length > 0) return e3;
        const n3 = (0, p.$l)(t3.tools.map((e4) => e4.providerIdentifier), r3);
        0 === n3.length || (e3.filteredBrowserMcpProviderIds = n3);
      })(E2, D, i2), (0, m.P7)(D, E2), D.fileContents = M, T(q, { usedOverlay: true, timedOut: I }), e2.mailbox.forget(e2.requestId), (function(e3) {
        return new a._G({ result: { case: "success", value: new a.yW({ requestContext: e3 }) } });
      })(D);
    }
    function A(e2) {
      try {
        return e2();
      } catch (e3) {
        if (!(e3 instanceof Error)) throw e3;
        return;
      }
    }
    function S(e2) {
      return { overlay: (0, p.He)(e2), sourceToolIds: e2.tools.map((e3) => e3.providerIdentifier) };
    }
    function b(e2) {
      const t2 = A(() => a.bb.fromBinary(e2));
      if (void 0 !== t2 && (function(e3) {
        const t3 = e3.env;
        return e3.rules.some((e4) => e4.fullPath.length > 0) || e3.tools.some((e4) => e4.name.length > 0 || e4.providerIdentifier.length > 0) || e3.gitRepos.some((e4) => e4.path.length > 0) || e3.agentSkills.some((e4) => e4.fullPath.length > 0) || void 0 !== t3 && (t3.projectFolder.length > 0 || t3.osVersion.length > 0 || true === t3.sandboxEnabled || void 0 !== t3.smartModeClassifierAutoModeEnabled);
      })(t2)) return S(t2);
      const r2 = A(() => i.hV.fromBinary(e2));
      return void 0 !== r2 && (0, m.PJ)(r2) ? { overlay: r2 } : void 0 !== t2 ? S(t2) : void 0;
    }
    function E(e2, t2) {
      if (void 0 === t2) return e2;
      const r2 = (function(e3) {
        for (const [t3] of e3.entries()) if (t3.symbol === n.MZM.symbol) {
          const t4 = e3.get(n.MZM);
          return "function" == typeof t4?.execute ? t4 : void 0;
        }
      })(e2);
      return void 0 === r2 ? e2 : new n.dwX(e2, [(0, n.VNS)(n.MZM, { execute: (e3, n2, s2) => _({ ctx: e3, args: n2, execOptions: s2, baseExecutor: r2, mailbox: t2.mailbox, requestId: t2.requestId, composerId: t2.composerId, pullOverlay: t2.pullOverlay, prefetchFileAccess: t2.prefetchFileAccess, onTiming: t2.onTiming }) })]);
    }
  }