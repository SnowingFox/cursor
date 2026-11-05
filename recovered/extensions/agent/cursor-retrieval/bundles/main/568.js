// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 568 range:41871..45181
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
568: (e2, a2, n2) => {
    "use strict";
    const { InvalidArgumentError: t2 } = n2(7902), { kClients: s2, kRunning: o2, kClose: r2, kDestroy: i2, kDispatch: l, kInterceptors: d } = n2(8832), m = n2(9792), c = n2(4003), p = n2(4814), A = n2(9361), u = n2(858), { WeakRef: g, FinalizationRegistry: T } = n2(1531)(), h = /* @__PURE__ */ Symbol("onConnect"), k = /* @__PURE__ */ Symbol("onDisconnect"), _ = /* @__PURE__ */ Symbol("onConnectionError"), E = /* @__PURE__ */ Symbol("maxRedirections"), f = /* @__PURE__ */ Symbol("onDrain"), C = /* @__PURE__ */ Symbol("factory"), I = /* @__PURE__ */ Symbol("finalizer"), v = /* @__PURE__ */ Symbol("options");
    function y(e3, a3) {
      return a3 && 1 === a3.connections ? new p(e3, a3) : new c(e3, a3);
    }
    e2.exports = class extends m {
      constructor({ factory: e3 = y, maxRedirections: a3 = 0, connect: n3, ...o3 } = {}) {
        if (super(), "function" != typeof e3) throw new t2("factory must be a function.");
        if (null != n3 && "function" != typeof n3 && "object" != typeof n3) throw new t2("connect must be a function or an object");
        if (!Number.isInteger(a3) || a3 < 0) throw new t2("maxRedirections must be a positive number");
        n3 && "function" != typeof n3 && (n3 = { ...n3 }), this[d] = o3.interceptors && o3.interceptors.Agent && Array.isArray(o3.interceptors.Agent) ? o3.interceptors.Agent : [u({ maxRedirections: a3 })], this[v] = { ...A.deepClone(o3), connect: n3 }, this[v].interceptors = o3.interceptors ? { ...o3.interceptors } : void 0, this[E] = a3, this[C] = e3, this[s2] = /* @__PURE__ */ new Map(), this[I] = new T((e4) => {
          const a4 = this[s2].get(e4);
          void 0 !== a4 && void 0 === a4.deref() && this[s2].delete(e4);
        });
        const r3 = this;
        this[f] = (e4, a4) => {
          r3.emit("drain", e4, [r3, ...a4]);
        }, this[h] = (e4, a4) => {
          r3.emit("connect", e4, [r3, ...a4]);
        }, this[k] = (e4, a4, n4) => {
          r3.emit("disconnect", e4, [r3, ...a4], n4);
        }, this[_] = (e4, a4, n4) => {
          r3.emit("connectionError", e4, [r3, ...a4], n4);
        };
      }
      get [o2]() {
        let e3 = 0;
        for (const a3 of this[s2].values()) {
          const n3 = a3.deref();
          n3 && (e3 += n3[o2]);
        }
        return e3;
      }
      [l](e3, a3) {
        let n3;
        if (!e3.origin || !("string" == typeof e3.origin || e3.origin instanceof URL)) throw new t2("opts.origin must be a non-empty string or URL.");
        n3 = String(e3.origin);
        const o3 = this[s2].get(n3);
        let r3 = o3 ? o3.deref() : null;
        return r3 || (r3 = this[C](e3.origin, this[v]).on("drain", this[f]).on("connect", this[h]).on("disconnect", this[k]).on("connectionError", this[_]), this[s2].set(n3, new g(r3)), this[I].register(r3, n3)), r3.dispatch(e3, a3);
      }
      async [r2]() {
        const e3 = [];
        for (const a3 of this[s2].values()) {
          const n3 = a3.deref();
          n3 && e3.push(n3.close());
        }
        await Promise.all(e3);
      }
      async [i2](e3) {
        const a3 = [];
        for (const n3 of this[s2].values()) {
          const t3 = n3.deref();
          t3 && a3.push(t3.destroy(e3));
        }
        await Promise.all(a3);
      }
    };
  }