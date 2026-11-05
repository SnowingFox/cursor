// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 4003 range:383225..385193
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4003: (e2, n2, t2) => {
    "use strict";
    const { PoolBase: a2, kClients: s2, kNeedDrain: o2, kAddClient: r, kGetDispatcher: i } = t2(1329), A = t2(4814), { InvalidArgumentError: c } = t2(7902), l = t2(9361), { kUrl: d, kInterceptors: m } = t2(8832), u = t2(3991), g = /* @__PURE__ */ Symbol("options"), p = /* @__PURE__ */ Symbol("connections"), E = /* @__PURE__ */ Symbol("factory");
    function h(e3, n3) {
      return new A(e3, n3);
    }
    e2.exports = class extends a2 {
      constructor(e3, { connections: n3, factory: t3 = h, connect: a3, connectTimeout: o3, tls: r2, maxCachedSessions: i2, socketPath: A2, autoSelectFamily: T, autoSelectFamilyAttemptTimeout: k, allowH2: f, ..._ } = {}) {
        if (super(), null != n3 && (!Number.isFinite(n3) || n3 < 0)) throw new c("invalid connections");
        if ("function" != typeof t3) throw new c("factory must be a function.");
        if (null != a3 && "function" != typeof a3 && "object" != typeof a3) throw new c("connect must be a function or an object");
        "function" != typeof a3 && (a3 = u({ ...r2, maxCachedSessions: i2, allowH2: f, socketPath: A2, timeout: o3, ...l.nodeHasAutoSelectFamily && T ? { autoSelectFamily: T, autoSelectFamilyAttemptTimeout: k } : void 0, ...a3 })), this[m] = _.interceptors && _.interceptors.Pool && Array.isArray(_.interceptors.Pool) ? _.interceptors.Pool : [], this[p] = n3 || null, this[d] = l.parseOrigin(e3), this[g] = { ...l.deepClone(_), connect: a3, allowH2: f }, this[g].interceptors = _.interceptors ? { ..._.interceptors } : void 0, this[E] = t3, this.on("connectionError", (e4, n4, t4) => {
          for (const e5 of n4) {
            const n5 = this[s2].indexOf(e5);
            -1 !== n5 && this[s2].splice(n5, 1);
          }
        });
      }
      [i]() {
        let e3 = this[s2].find((e4) => !e4[o2]);
        return e3 || ((!this[p] || this[s2].length < this[p]) && (e3 = this[E](this[d], this[g]), this[r](e3)), e3);
      }
    };
  }