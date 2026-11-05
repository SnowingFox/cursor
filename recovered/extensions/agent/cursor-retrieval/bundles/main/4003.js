// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 4003 range:684784..686756
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4003: (e2, a2, n2) => {
    "use strict";
    const { PoolBase: t2, kClients: s2, kNeedDrain: o2, kAddClient: r2, kGetDispatcher: i2 } = n2(1329), l = n2(4814), { InvalidArgumentError: d } = n2(7902), m = n2(9361), { kUrl: c, kInterceptors: p } = n2(8832), A = n2(3991), u = /* @__PURE__ */ Symbol("options"), g = /* @__PURE__ */ Symbol("connections"), T = /* @__PURE__ */ Symbol("factory");
    function h(e3, a3) {
      return new l(e3, a3);
    }
    e2.exports = class extends t2 {
      constructor(e3, { connections: a3, factory: n3 = h, connect: t3, connectTimeout: o3, tls: r3, maxCachedSessions: i3, socketPath: l2, autoSelectFamily: k, autoSelectFamilyAttemptTimeout: _, allowH2: E, ...f } = {}) {
        if (super(), null != a3 && (!Number.isFinite(a3) || a3 < 0)) throw new d("invalid connections");
        if ("function" != typeof n3) throw new d("factory must be a function.");
        if (null != t3 && "function" != typeof t3 && "object" != typeof t3) throw new d("connect must be a function or an object");
        "function" != typeof t3 && (t3 = A({ ...r3, maxCachedSessions: i3, allowH2: E, socketPath: l2, timeout: o3, ...m.nodeHasAutoSelectFamily && k ? { autoSelectFamily: k, autoSelectFamilyAttemptTimeout: _ } : void 0, ...t3 })), this[p] = f.interceptors && f.interceptors.Pool && Array.isArray(f.interceptors.Pool) ? f.interceptors.Pool : [], this[g] = a3 || null, this[c] = m.parseOrigin(e3), this[u] = { ...m.deepClone(f), connect: t3, allowH2: E }, this[u].interceptors = f.interceptors ? { ...f.interceptors } : void 0, this[T] = n3, this.on("connectionError", (e4, a4, n4) => {
          for (const e5 of a4) {
            const a5 = this[s2].indexOf(e5);
            -1 !== a5 && this[s2].splice(a5, 1);
          }
        });
      }
      [i2]() {
        let e3 = this[s2].find((e4) => !e4[o2]);
        return e3 || ((!this[g] || this[s2].length < this[g]) && (e3 = this[T](this[c], this[u]), this[r2](e3)), e3);
      }
    };
  }