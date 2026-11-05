// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 4003 range:379034..381002
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4003: (e2, A2, t2) => {
    "use strict";
    const { PoolBase: n2, kClients: r2, kNeedDrain: o2, kAddClient: s, kGetDispatcher: a } = t2(1329), i = t2(4814), { InvalidArgumentError: c } = t2(7902), l = t2(9361), { kUrl: g, kInterceptors: E } = t2(8832), u = t2(3991), d = /* @__PURE__ */ Symbol("options"), I = /* @__PURE__ */ Symbol("connections"), h = /* @__PURE__ */ Symbol("factory");
    function Q(e3, A3) {
      return new i(e3, A3);
    }
    e2.exports = class extends n2 {
      constructor(e3, { connections: A3, factory: t3 = Q, connect: n3, connectTimeout: o3, tls: s2, maxCachedSessions: a2, socketPath: i2, autoSelectFamily: m, autoSelectFamilyAttemptTimeout: C, allowH2: B, ...p } = {}) {
        if (super(), null != A3 && (!Number.isFinite(A3) || A3 < 0)) throw new c("invalid connections");
        if ("function" != typeof t3) throw new c("factory must be a function.");
        if (null != n3 && "function" != typeof n3 && "object" != typeof n3) throw new c("connect must be a function or an object");
        "function" != typeof n3 && (n3 = u({ ...s2, maxCachedSessions: a2, allowH2: B, socketPath: i2, timeout: o3, ...l.nodeHasAutoSelectFamily && m ? { autoSelectFamily: m, autoSelectFamilyAttemptTimeout: C } : void 0, ...n3 })), this[E] = p.interceptors && p.interceptors.Pool && Array.isArray(p.interceptors.Pool) ? p.interceptors.Pool : [], this[I] = A3 || null, this[g] = l.parseOrigin(e3), this[d] = { ...l.deepClone(p), connect: n3, allowH2: B }, this[d].interceptors = p.interceptors ? { ...p.interceptors } : void 0, this[h] = t3, this.on("connectionError", (e4, A4, t4) => {
          for (const e5 of A4) {
            const A5 = this[r2].indexOf(e5);
            -1 !== A5 && this[r2].splice(A5, 1);
          }
        });
      }
      [a]() {
        let e3 = this[r2].find((e4) => !e4[o2]);
        return e3 || ((!this[I] || this[r2].length < this[I]) && (e3 = this[h](this[g], this[d]), this[s](e3)), e3);
      }
    };
  }