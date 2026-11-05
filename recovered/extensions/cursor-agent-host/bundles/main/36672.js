// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 36672 range:7317245..7319600
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
36672: (e, t, r) => {
    "use strict";
    r.d(t, { _9: () => a, rv: () => p, x$: () => d });
    var n = r(17392), s = r(65716), o = r(77095), i = r(88031);
    const a = 3e5, c = 1e4, l = 5e3, u = 6e4;
    function d(e2) {
      const t2 = Date.now() + a, r2 = new AbortController(), n2 = /* @__PURE__ */ new Set();
      let o2, d2 = { kind: "waiting", baseUrl: e2.baseUrl };
      const p2 = (e3) => {
        d2 = e3;
        for (const e4 of [...n2]) e4();
        n2.clear();
      }, m2 = async () => ("waiting" !== d2.kind || r2.signal.aborted || (o2 ??= (async () => {
        try {
          const t3 = await e2.hydrate(c);
          r2.signal.aborted || p2({ kind: "active", ...t3 });
        } catch (e3) {
          if (r2.signal.aborted) return;
          e3 instanceof i.ng ? Date.now() >= t2 ? p2({ kind: "gave-up", detail: `${e3.message} Reload the window to try again.` }) : d2 = { kind: "waiting", baseUrl: e3.baseUrl } : p2({ kind: "failed", detail: e3 instanceof Error ? e3.message : String(e3) });
        }
      })().finally(() => {
        o2 = void 0;
      }), await o2), d2);
      return (async () => {
        let e3 = l;
        for (; "waiting" === d2.kind && !r2.signal.aborted; ) await (0, s.st)(Math.min(e3, Math.max(0, t2 - Date.now())), r2.signal), await m2(), e3 = Math.min(2 * e3, u);
      })(), { state: () => d2, onDidSettle: (e3) => (n2.add(e3), { dispose: () => {
        n2.delete(e3);
      } }), retryNow: m2, dispose: () => {
        r2.abort(), n2.clear();
      } };
    }
    function p(e2, t2, r2) {
      let n2;
      return async (s2) => {
        const i2 = await e2.retryNow();
        switch (i2.kind) {
          case "active":
            return n2 ??= (0, o.Ti)(i2.sessionProvider, i2.catalog, t2, r2), n2(s2);
          case "waiting":
            throw m(s2.attemptRequestId, `Could not reach your private inference gateway at ${i2.baseUrl}. Check your network or VPN, then try again.`, true);
          case "gave-up":
            throw m(s2.attemptRequestId, i2.detail, false);
          case "failed":
            return (0, o.q1)(i2.detail)(s2);
        }
      };
    }
    function m(e2, t2, r2) {
      return new n.SK("Private inference gateway unreachable", { requestId: e2, displayInfo: { title: "Private inference gateway unreachable", detail: t2, isRetryable: r2 } });
    }
  }