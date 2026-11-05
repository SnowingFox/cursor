// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 84304 range:12000934..12006406
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
84304: (e, t, r) => {
    "use strict";
    r.d(t, { $6: () => le, $I: () => _, $d: () => V, A6: () => m, Ah: () => l, B2: () => y, DS: () => ne, Eo: () => X, F3: () => z, FN: () => re, HY: () => ce, Hv: () => b, Jm: () => u, Kw: () => M, OR: () => c, RE: () => g, RQ: () => H, S2: () => Y, SP: () => ee, UI: () => a, V5: () => v, _N: () => q, b9: () => U, bG: () => p, bx: () => ie, cr: () => E, dU: () => W, df: () => d, gH: () => f, gI: () => S, j7: () => A, jg: () => ae, jj: () => ue, kE: () => se, ku: () => i, nH: () => w, o8: () => oe, rP: () => I, uu: () => $, vB: () => O, vJ: () => L, xs: () => D, zo: () => Z });
    var n = r(33002), s = r(98875), o = r(28117);
    const i = (0, n.cF)(/* @__PURE__ */ Symbol.for("@anysphere/agent/requestId"), void 0), a = (0, n.cF)(/* @__PURE__ */ Symbol.for("@anysphere/agent/parentRequestId"), void 0), c = (0, n.cF)(/* @__PURE__ */ Symbol.for("@anysphere/agent/rootParentRequestId"), void 0), l = (0, n.cF)(/* @__PURE__ */ Symbol("parentAgentToolCallId"), void 0), u = ((0, n.cF)(/* @__PURE__ */ Symbol("subagentType"), void 0), (0, n.cF)(/* @__PURE__ */ Symbol("directMetaParentChildSubagent"), void 0)), d = (0, n.cF)(/* @__PURE__ */ Symbol("requestModelName"), void 0), p = (0, n.cF)(/* @__PURE__ */ Symbol("conversationGroupId"), void 0), m = (0, n.cF)(/* @__PURE__ */ Symbol("conversationId"), void 0), h = (0, n.cF)(/* @__PURE__ */ Symbol("secretScopeId"), void 0), f = (0, n.cF)(/* @__PURE__ */ Symbol("bubbleRetryableTaskErrors"), void 0), g = (e2) => e2.get(i), y = (e2) => e2.get(a), w = (e2) => e2.get(c), v = (e2) => e2.get(l), _ = (e2) => true === e2.get(u), A = (e2, t2, r2) => {
      const n2 = g(e2), s2 = w(e2) ?? n2;
      return e2.with(i, t2).with(o.an, () => (0, o.qU)(t2)).with(a, n2).with(c, s2).with(u, void 0).with(l, r2).with(V, void 0);
    }, S = (e2) => e2.get(p) ?? e2.get(m), b = (e2) => e2.get(m), E = (e2) => e2.get(h), I = (e2) => true === e2.get(f), C = (0, n.cF)(/* @__PURE__ */ Symbol("clientVersion"), void 0), k = /^v?\d+\.\d+\.\d+(?:-[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*)?(?:\+[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*)?$/, x = ["sdk-python-", "sdk-", "agentkit-"], T = (0, n.cF)(/* @__PURE__ */ Symbol("clientType"), void 0), R = (0, n.cF)(/* @__PURE__ */ Symbol("clientRemoteType"), void 0), B = (0, n.cF)(/* @__PURE__ */ Symbol("clientOs"), void 0), P = /* @__PURE__ */ new Set(["darwin", "win32", "linux", "ios", "android"]);
    function J(e2) {
      if (void 0 === e2 || "" === e2.trim()) return "unknown";
      const t2 = e2.trim().toLowerCase();
      return "windows" === t2 ? "win32" : P.has(t2) ? t2 : "other";
    }
    function M(e2) {
      const t2 = e2.get(C)?.trim();
      let r2 = "unknown";
      if (void 0 !== t2 && "" !== t2) {
        const e3 = t2.toLowerCase(), n2 = x.find((t3) => e3.startsWith(t3)), s2 = void 0 === n2 ? t2 : t2.slice(n2.length);
        k.test(s2) && (r2 = s2.replace(/^v/, ""));
      }
      return { clientversion: r2, clienttype: e2.get(T) ?? "unknown" };
    }
    function q(e2) {
      const t2 = e2.get(C)?.trim().toLowerCase();
      return void 0 === t2 ? { sdkflavor: "none" } : t2.startsWith("sdk-python-") ? { sdkflavor: "python" } : t2.startsWith("sdk-") ? { sdkflavor: "ts" } : t2.startsWith("agentkit-") ? { sdkflavor: "agentkit" } : { sdkflavor: "none" };
    }
    function D(e2) {
      return { remoteType: e2.get(R) ?? "unknown" };
    }
    function O(e2) {
      return { os: J(e2.get(B)) };
    }
    const N = (0, n.cF)(/* @__PURE__ */ Symbol("membershipType"), void 0), F = { MEMBERSHIPTYPE: "membershiptype" };
    function U(e2) {
      const t2 = e2.get(N) ?? "unknown";
      return { [F.MEMBERSHIPTYPE]: t2 };
    }
    const L = (0, n.cF)(/* @__PURE__ */ Symbol("isAuto"), void 0), $ = (0, n.cF)(/* @__PURE__ */ Symbol("isPremium"), void 0), Q = (0, n.cF)(/* @__PURE__ */ Symbol("teamId"), void 0), j = (0, n.cF)(/* @__PURE__ */ Symbol("isUserApiKey"), void 0), G = "user.is_dev", H = (0, n.cF)(/* @__PURE__ */ Symbol("maxMode"), void 0), z = (0, n.cF)(/* @__PURE__ */ Symbol("autoRoutingReason"), void 0), W = (0, n.cF)(/* @__PURE__ */ Symbol("conversationInitMsRecorder"), void 0), V = (0, n.cF)(/* @__PURE__ */ Symbol("firstStepSetupMsRecorder"), void 0), K = (0, n.cF)(/* @__PURE__ */ Symbol("cloudAgentPreAgentTurnPrepMsRecorder"), void 0);
    async function Y(e2, t2, r2) {
      const n2 = performance.now();
      try {
        return await r2();
      } finally {
        e2.get(K)?.(t2, performance.now() - n2);
      }
    }
    const Z = (0, n.cF)(/* @__PURE__ */ Symbol("cloudAgentTurnPrepGlueMsRecorder"), void 0), X = (0, n.cF)(/* @__PURE__ */ Symbol("cloudAgentTurnPrepPrewarmRecorder"), void 0), ee = (0, n.cF)(/* @__PURE__ */ Symbol("cloudAgentTurnPrepRootPromptRestoreRecorder"), void 0), te = 1;
    function re(e2) {
      return true === e2.get(L);
    }
    function ne(e2) {
      return true === e2.get($);
    }
    function se(e2) {
      const t2 = e2.get(Q);
      return void 0 !== t2 && t2 === te;
    }
    function oe(e2) {
      return true === e2.get(j);
    }
    function ie(e2) {
      return true === e2.get(s.b6)[G];
    }
    function ae(e2) {
      return void 0 !== e2.get(a);
    }
    function ce(e2) {
      const t2 = y(e2);
      if (void 0 === t2) return true;
      const r2 = w(e2);
      return void 0 === r2 || t2 === r2;
    }
    function le(e2) {
      return true === e2.get(H);
    }
    function ue(e2) {
      return e2.get(z) ?? "unknown";
    }
  }