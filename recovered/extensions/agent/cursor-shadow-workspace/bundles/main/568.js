// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 568 range:30446..33752
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
568: (e2, A2, t2) => {
    "use strict";
    const { InvalidArgumentError: n2 } = t2(7902), { kClients: r2, kRunning: o2, kClose: s, kDestroy: a, kDispatch: i, kInterceptors: c } = t2(8832), l = t2(9792), g = t2(4003), E = t2(4814), u = t2(9361), d = t2(858), { WeakRef: I, FinalizationRegistry: h } = t2(1531)(), Q = /* @__PURE__ */ Symbol("onConnect"), m = /* @__PURE__ */ Symbol("onDisconnect"), C = /* @__PURE__ */ Symbol("onConnectionError"), B = /* @__PURE__ */ Symbol("maxRedirections"), p = /* @__PURE__ */ Symbol("onDrain"), f = /* @__PURE__ */ Symbol("factory"), y = /* @__PURE__ */ Symbol("finalizer"), T = /* @__PURE__ */ Symbol("options");
    function k(e3, A3) {
      return A3 && 1 === A3.connections ? new E(e3, A3) : new g(e3, A3);
    }
    e2.exports = class extends l {
      constructor({ factory: e3 = k, maxRedirections: A3 = 0, connect: t3, ...o3 } = {}) {
        if (super(), "function" != typeof e3) throw new n2("factory must be a function.");
        if (null != t3 && "function" != typeof t3 && "object" != typeof t3) throw new n2("connect must be a function or an object");
        if (!Number.isInteger(A3) || A3 < 0) throw new n2("maxRedirections must be a positive number");
        t3 && "function" != typeof t3 && (t3 = { ...t3 }), this[c] = o3.interceptors && o3.interceptors.Agent && Array.isArray(o3.interceptors.Agent) ? o3.interceptors.Agent : [d({ maxRedirections: A3 })], this[T] = { ...u.deepClone(o3), connect: t3 }, this[T].interceptors = o3.interceptors ? { ...o3.interceptors } : void 0, this[B] = A3, this[f] = e3, this[r2] = /* @__PURE__ */ new Map(), this[y] = new h((e4) => {
          const A4 = this[r2].get(e4);
          void 0 !== A4 && void 0 === A4.deref() && this[r2].delete(e4);
        });
        const s2 = this;
        this[p] = (e4, A4) => {
          s2.emit("drain", e4, [s2, ...A4]);
        }, this[Q] = (e4, A4) => {
          s2.emit("connect", e4, [s2, ...A4]);
        }, this[m] = (e4, A4, t4) => {
          s2.emit("disconnect", e4, [s2, ...A4], t4);
        }, this[C] = (e4, A4, t4) => {
          s2.emit("connectionError", e4, [s2, ...A4], t4);
        };
      }
      get [o2]() {
        let e3 = 0;
        for (const A3 of this[r2].values()) {
          const t3 = A3.deref();
          t3 && (e3 += t3[o2]);
        }
        return e3;
      }
      [i](e3, A3) {
        let t3;
        if (!e3.origin || !("string" == typeof e3.origin || e3.origin instanceof URL)) throw new n2("opts.origin must be a non-empty string or URL.");
        t3 = String(e3.origin);
        const o3 = this[r2].get(t3);
        let s2 = o3 ? o3.deref() : null;
        return s2 || (s2 = this[f](e3.origin, this[T]).on("drain", this[p]).on("connect", this[Q]).on("disconnect", this[m]).on("connectionError", this[C]), this[r2].set(t3, new I(s2)), this[y].register(s2, t3)), s2.dispatch(e3, A3);
      }
      async [s]() {
        const e3 = [];
        for (const A3 of this[r2].values()) {
          const t3 = A3.deref();
          t3 && e3.push(t3.close());
        }
        await Promise.all(e3);
      }
      async [a](e3) {
        const A3 = [];
        for (const t3 of this[r2].values()) {
          const n3 = t3.deref();
          n3 && A3.push(n3.destroy(e3));
        }
        await Promise.all(A3);
      }
    };
  }