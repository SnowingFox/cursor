// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 568 range:34205..37511
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
568: (e2, t2, A2) => {
    "use strict";
    const { InvalidArgumentError: n2 } = A2(7902), { kClients: r2, kRunning: o2, kClose: s, kDestroy: i, kDispatch: a, kInterceptors: c } = A2(8832), l = A2(9792), u = A2(4003), g = A2(4814), E = A2(9361), h = A2(858), { WeakRef: d, FinalizationRegistry: I } = A2(1531)(), B = /* @__PURE__ */ Symbol("onConnect"), Q = /* @__PURE__ */ Symbol("onDisconnect"), f = /* @__PURE__ */ Symbol("onConnectionError"), C = /* @__PURE__ */ Symbol("maxRedirections"), p = /* @__PURE__ */ Symbol("onDrain"), m = /* @__PURE__ */ Symbol("factory"), y = /* @__PURE__ */ Symbol("finalizer"), w = /* @__PURE__ */ Symbol("options");
    function k(e3, t3) {
      return t3 && 1 === t3.connections ? new g(e3, t3) : new u(e3, t3);
    }
    e2.exports = class extends l {
      constructor({ factory: e3 = k, maxRedirections: t3 = 0, connect: A3, ...o3 } = {}) {
        if (super(), "function" != typeof e3) throw new n2("factory must be a function.");
        if (null != A3 && "function" != typeof A3 && "object" != typeof A3) throw new n2("connect must be a function or an object");
        if (!Number.isInteger(t3) || t3 < 0) throw new n2("maxRedirections must be a positive number");
        A3 && "function" != typeof A3 && (A3 = { ...A3 }), this[c] = o3.interceptors && o3.interceptors.Agent && Array.isArray(o3.interceptors.Agent) ? o3.interceptors.Agent : [h({ maxRedirections: t3 })], this[w] = { ...E.deepClone(o3), connect: A3 }, this[w].interceptors = o3.interceptors ? { ...o3.interceptors } : void 0, this[C] = t3, this[m] = e3, this[r2] = /* @__PURE__ */ new Map(), this[y] = new I((e4) => {
          const t4 = this[r2].get(e4);
          void 0 !== t4 && void 0 === t4.deref() && this[r2].delete(e4);
        });
        const s2 = this;
        this[p] = (e4, t4) => {
          s2.emit("drain", e4, [s2, ...t4]);
        }, this[B] = (e4, t4) => {
          s2.emit("connect", e4, [s2, ...t4]);
        }, this[Q] = (e4, t4, A4) => {
          s2.emit("disconnect", e4, [s2, ...t4], A4);
        }, this[f] = (e4, t4, A4) => {
          s2.emit("connectionError", e4, [s2, ...t4], A4);
        };
      }
      get [o2]() {
        let e3 = 0;
        for (const t3 of this[r2].values()) {
          const A3 = t3.deref();
          A3 && (e3 += A3[o2]);
        }
        return e3;
      }
      [a](e3, t3) {
        let A3;
        if (!e3.origin || !("string" == typeof e3.origin || e3.origin instanceof URL)) throw new n2("opts.origin must be a non-empty string or URL.");
        A3 = String(e3.origin);
        const o3 = this[r2].get(A3);
        let s2 = o3 ? o3.deref() : null;
        return s2 || (s2 = this[m](e3.origin, this[w]).on("drain", this[p]).on("connect", this[B]).on("disconnect", this[Q]).on("connectionError", this[f]), this[r2].set(A3, new d(s2)), this[y].register(s2, A3)), s2.dispatch(e3, t3);
      }
      async [s]() {
        const e3 = [];
        for (const t3 of this[r2].values()) {
          const A3 = t3.deref();
          A3 && e3.push(A3.close());
        }
        await Promise.all(e3);
      }
      async [i](e3) {
        const t3 = [];
        for (const A3 of this[r2].values()) {
          const n3 = A3.deref();
          n3 && t3.push(n3.destroy(e3));
        }
        await Promise.all(t3);
      }
    };
  }