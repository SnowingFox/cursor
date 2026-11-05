// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 4003 range:482380..484348
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4003: (e2, t2, A2) => {
    "use strict";
    const { PoolBase: n2, kClients: r2, kNeedDrain: o2, kAddClient: s, kGetDispatcher: i } = A2(1329), a = A2(4814), { InvalidArgumentError: c } = A2(7902), l = A2(9361), { kUrl: u, kInterceptors: g } = A2(8832), E = A2(3991), h = /* @__PURE__ */ Symbol("options"), d = /* @__PURE__ */ Symbol("connections"), I = /* @__PURE__ */ Symbol("factory");
    function B(e3, t3) {
      return new a(e3, t3);
    }
    e2.exports = class extends n2 {
      constructor(e3, { connections: t3, factory: A3 = B, connect: n3, connectTimeout: o3, tls: s2, maxCachedSessions: i2, socketPath: a2, autoSelectFamily: Q, autoSelectFamilyAttemptTimeout: f, allowH2: C, ...p } = {}) {
        if (super(), null != t3 && (!Number.isFinite(t3) || t3 < 0)) throw new c("invalid connections");
        if ("function" != typeof A3) throw new c("factory must be a function.");
        if (null != n3 && "function" != typeof n3 && "object" != typeof n3) throw new c("connect must be a function or an object");
        "function" != typeof n3 && (n3 = E({ ...s2, maxCachedSessions: i2, allowH2: C, socketPath: a2, timeout: o3, ...l.nodeHasAutoSelectFamily && Q ? { autoSelectFamily: Q, autoSelectFamilyAttemptTimeout: f } : void 0, ...n3 })), this[g] = p.interceptors && p.interceptors.Pool && Array.isArray(p.interceptors.Pool) ? p.interceptors.Pool : [], this[d] = t3 || null, this[u] = l.parseOrigin(e3), this[h] = { ...l.deepClone(p), connect: n3, allowH2: C }, this[h].interceptors = p.interceptors ? { ...p.interceptors } : void 0, this[I] = A3, this.on("connectionError", (e4, t4, A4) => {
          for (const e5 of t4) {
            const t5 = this[r2].indexOf(e5);
            -1 !== t5 && this[r2].splice(t5, 1);
          }
        });
      }
      [i]() {
        let e3 = this[r2].find((e4) => !e4[o2]);
        return e3 || ((!this[d] || this[r2].length < this[d]) && (e3 = this[I](this[u], this[h]), this[s](e3)), e3);
      }
    };
  }