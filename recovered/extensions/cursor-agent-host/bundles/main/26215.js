// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 26215 range:4707704..4709658
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
26215: (e, t, r) => {
    "use strict";
    const { PoolBase: n, kClients: s, kNeedDrain: o, kAddClient: i, kGetDispatcher: a } = r(53802), c = r(6602), { InvalidArgumentError: l } = r(48762), u = r(83589), { kUrl: d, kInterceptors: p } = r(15532), m = r(4003), h = /* @__PURE__ */ Symbol("options"), f = /* @__PURE__ */ Symbol("connections"), g = /* @__PURE__ */ Symbol("factory");
    function y(e2, t2) {
      return new c(e2, t2);
    }
    e.exports = class extends n {
      constructor(e2, { connections: t2, factory: r2 = y, connect: n2, connectTimeout: o2, tls: i2, maxCachedSessions: a2, socketPath: c2, autoSelectFamily: w, autoSelectFamilyAttemptTimeout: v, allowH2: _, ...A } = {}) {
        if (super(), null != t2 && (!Number.isFinite(t2) || t2 < 0)) throw new l("invalid connections");
        if ("function" != typeof r2) throw new l("factory must be a function.");
        if (null != n2 && "function" != typeof n2 && "object" != typeof n2) throw new l("connect must be a function or an object");
        "function" != typeof n2 && (n2 = m({ ...i2, maxCachedSessions: a2, allowH2: _, socketPath: c2, timeout: o2, ...u.nodeHasAutoSelectFamily && w ? { autoSelectFamily: w, autoSelectFamilyAttemptTimeout: v } : void 0, ...n2 })), this[p] = A.interceptors && A.interceptors.Pool && Array.isArray(A.interceptors.Pool) ? A.interceptors.Pool : [], this[f] = t2 || null, this[d] = u.parseOrigin(e2), this[h] = { ...u.deepClone(A), connect: n2, allowH2: _ }, this[h].interceptors = A.interceptors ? { ...A.interceptors } : void 0, this[g] = r2, this.on("connectionError", (e3, t3, r3) => {
          for (const e4 of t3) {
            const t4 = this[s].indexOf(e4);
            -1 !== t4 && this[s].splice(t4, 1);
          }
        });
      }
      [a]() {
        let e2 = this[s].find((e3) => !e3[o]);
        return e2 || ((!this[f] || this[s].length < this[f]) && (e2 = this[g](this[d], this[h]), this[i](e2)), e2);
      }
    };
  }