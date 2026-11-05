// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 4003 range:379305..381277
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4003: (e2, n2, a2) => {
    "use strict";
    const { PoolBase: t2, kClients: s2, kNeedDrain: o2, kAddClient: r2, kGetDispatcher: i2 } = a2(1329), A = a2(4814), { InvalidArgumentError: l } = a2(7902), c = a2(9361), { kUrl: m, kInterceptors: d } = a2(8832), g = a2(3991), u = /* @__PURE__ */ Symbol("options"), E = /* @__PURE__ */ Symbol("connections"), p = /* @__PURE__ */ Symbol("factory");
    function T(e3, n3) {
      return new A(e3, n3);
    }
    e2.exports = class extends t2 {
      constructor(e3, { connections: n3, factory: a3 = T, connect: t3, connectTimeout: o3, tls: r3, maxCachedSessions: i3, socketPath: A2, autoSelectFamily: k, autoSelectFamilyAttemptTimeout: I, allowH2: h, ..._ } = {}) {
        if (super(), null != n3 && (!Number.isFinite(n3) || n3 < 0)) throw new l("invalid connections");
        if ("function" != typeof a3) throw new l("factory must be a function.");
        if (null != t3 && "function" != typeof t3 && "object" != typeof t3) throw new l("connect must be a function or an object");
        "function" != typeof t3 && (t3 = g({ ...r3, maxCachedSessions: i3, allowH2: h, socketPath: A2, timeout: o3, ...c.nodeHasAutoSelectFamily && k ? { autoSelectFamily: k, autoSelectFamilyAttemptTimeout: I } : void 0, ...t3 })), this[d] = _.interceptors && _.interceptors.Pool && Array.isArray(_.interceptors.Pool) ? _.interceptors.Pool : [], this[E] = n3 || null, this[m] = c.parseOrigin(e3), this[u] = { ...c.deepClone(_), connect: t3, allowH2: h }, this[u].interceptors = _.interceptors ? { ..._.interceptors } : void 0, this[p] = a3, this.on("connectionError", (e4, n4, a4) => {
          for (const e5 of n4) {
            const n5 = this[s2].indexOf(e5);
            -1 !== n5 && this[s2].splice(n5, 1);
          }
        });
      }
      [i2]() {
        let e3 = this[s2].find((e4) => !e4[o2]);
        return e3 || ((!this[E] || this[s2].length < this[E]) && (e3 = this[p](this[m], this[u]), this[r2](e3)), e3);
      }
    };
  }