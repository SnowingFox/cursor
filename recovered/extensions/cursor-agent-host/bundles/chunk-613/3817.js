// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 3817 range:11033..12929
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
3817: (A, e, t) => {
  "use strict";
  const { PoolBase: r, kClients: s, kNeedDrain: o, kAddClient: n, kGetDispatcher: i } = t(10787), a = t(90996), { InvalidArgumentError: Q } = t(38238), g = t(55201), { kUrl: E, kInterceptors: B } = t(76992), c = t(60039), I = /* @__PURE__ */ Symbol("options"), C = /* @__PURE__ */ Symbol("connections"), h = /* @__PURE__ */ Symbol("factory");
  function l(A2, e2) {
    return new a(A2, e2);
  }
  A.exports = class extends r {
    constructor(A2, { connections: e2, factory: t2 = l, connect: r2, connectTimeout: o2, tls: n2, maxCachedSessions: i2, socketPath: a2, autoSelectFamily: u, autoSelectFamilyAttemptTimeout: d, allowH2: f, ...w } = {}) {
      if (null != e2 && (!Number.isFinite(e2) || e2 < 0)) throw new Q("invalid connections");
      if ("function" != typeof t2) throw new Q("factory must be a function.");
      if (null != r2 && "function" != typeof r2 && "object" != typeof r2) throw new Q("connect must be a function or an object");
      "function" != typeof r2 && (r2 = c({ ...n2, maxCachedSessions: i2, allowH2: f, socketPath: a2, timeout: o2, ...u ? { autoSelectFamily: u, autoSelectFamilyAttemptTimeout: d } : void 0, ...r2 })), super(w), this[B] = w.interceptors?.Pool && Array.isArray(w.interceptors.Pool) ? w.interceptors.Pool : [], this[C] = e2 || null, this[E] = g.parseOrigin(A2), this[I] = { ...g.deepClone(w), connect: r2, allowH2: f }, this[I].interceptors = w.interceptors ? { ...w.interceptors } : void 0, this[h] = t2, this.on("connectionError", (A3, e3, t3) => {
        for (const A4 of e3) {
          const e4 = this[s].indexOf(A4);
          -1 !== e4 && this[s].splice(e4, 1);
        }
      });
    }
    [i]() {
      for (const A2 of this[s]) if (!A2[o]) return A2;
      if (!this[C] || this[s].length < this[C]) {
        const A2 = this[h](this[E], this[I]);
        return this[n](A2), A2;
      }
    }
  };
}