// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 6215 range:2834637..2836607
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6215: (t2, e2, r2) => {
    "use strict";
    const { PoolBase: n2, kClients: s2, kNeedDrain: i2, kAddClient: o2, kGetDispatcher: a } = r2(1421), u = r2(6602), { InvalidArgumentError: c } = r2(8762), l = r2(3589), { kUrl: m, kInterceptors: d } = r2(5532), f = r2(4003), p = /* @__PURE__ */ Symbol("options"), h = /* @__PURE__ */ Symbol("connections"), g = /* @__PURE__ */ Symbol("factory");
    function A(t3, e3) {
      return new u(t3, e3);
    }
    t2.exports = class extends n2 {
      constructor(t3, { connections: e3, factory: r3 = A, connect: n3, connectTimeout: i3, tls: o3, maxCachedSessions: a2, socketPath: u2, autoSelectFamily: _, autoSelectFamilyAttemptTimeout: y, allowH2: w, ...S } = {}) {
        if (super(), null != e3 && (!Number.isFinite(e3) || e3 < 0)) throw new c("invalid connections");
        if ("function" != typeof r3) throw new c("factory must be a function.");
        if (null != n3 && "function" != typeof n3 && "object" != typeof n3) throw new c("connect must be a function or an object");
        "function" != typeof n3 && (n3 = f({ ...o3, maxCachedSessions: a2, allowH2: w, socketPath: u2, timeout: i3, ...l.nodeHasAutoSelectFamily && _ ? { autoSelectFamily: _, autoSelectFamilyAttemptTimeout: y } : void 0, ...n3 })), this[d] = S.interceptors && S.interceptors.Pool && Array.isArray(S.interceptors.Pool) ? S.interceptors.Pool : [], this[h] = e3 || null, this[m] = l.parseOrigin(t3), this[p] = { ...l.deepClone(S), connect: n3, allowH2: w }, this[p].interceptors = S.interceptors ? { ...S.interceptors } : void 0, this[g] = r3, this.on("connectionError", (t4, e4, r4) => {
          for (const t5 of e4) {
            const e5 = this[s2].indexOf(t5);
            -1 !== e5 && this[s2].splice(e5, 1);
          }
        });
      }
      [a]() {
        let t3 = this[s2].find((t4) => !t4[i2]);
        return t3 || ((!this[h] || this[s2].length < this[h]) && (t3 = this[g](this[m], this[p]), this[o2](t3)), t3);
      }
    };
  }