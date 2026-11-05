// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 568 range:34637..37943
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
568: (e2, n2, t2) => {
    "use strict";
    const { InvalidArgumentError: a2 } = t2(7902), { kClients: s2, kRunning: o2, kClose: r, kDestroy: i, kDispatch: A, kInterceptors: c } = t2(8832), l = t2(9792), d = t2(4003), m = t2(4814), u = t2(9361), g = t2(858), { WeakRef: p, FinalizationRegistry: E } = t2(1531)(), h = /* @__PURE__ */ Symbol("onConnect"), T = /* @__PURE__ */ Symbol("onDisconnect"), k = /* @__PURE__ */ Symbol("onConnectionError"), f = /* @__PURE__ */ Symbol("maxRedirections"), _ = /* @__PURE__ */ Symbol("onDrain"), I = /* @__PURE__ */ Symbol("factory"), C = /* @__PURE__ */ Symbol("finalizer"), y = /* @__PURE__ */ Symbol("options");
    function B(e3, n3) {
      return n3 && 1 === n3.connections ? new m(e3, n3) : new d(e3, n3);
    }
    e2.exports = class extends l {
      constructor({ factory: e3 = B, maxRedirections: n3 = 0, connect: t3, ...o3 } = {}) {
        if (super(), "function" != typeof e3) throw new a2("factory must be a function.");
        if (null != t3 && "function" != typeof t3 && "object" != typeof t3) throw new a2("connect must be a function or an object");
        if (!Number.isInteger(n3) || n3 < 0) throw new a2("maxRedirections must be a positive number");
        t3 && "function" != typeof t3 && (t3 = { ...t3 }), this[c] = o3.interceptors && o3.interceptors.Agent && Array.isArray(o3.interceptors.Agent) ? o3.interceptors.Agent : [g({ maxRedirections: n3 })], this[y] = { ...u.deepClone(o3), connect: t3 }, this[y].interceptors = o3.interceptors ? { ...o3.interceptors } : void 0, this[f] = n3, this[I] = e3, this[s2] = /* @__PURE__ */ new Map(), this[C] = new E((e4) => {
          const n4 = this[s2].get(e4);
          void 0 !== n4 && void 0 === n4.deref() && this[s2].delete(e4);
        });
        const r2 = this;
        this[_] = (e4, n4) => {
          r2.emit("drain", e4, [r2, ...n4]);
        }, this[h] = (e4, n4) => {
          r2.emit("connect", e4, [r2, ...n4]);
        }, this[T] = (e4, n4, t4) => {
          r2.emit("disconnect", e4, [r2, ...n4], t4);
        }, this[k] = (e4, n4, t4) => {
          r2.emit("connectionError", e4, [r2, ...n4], t4);
        };
      }
      get [o2]() {
        let e3 = 0;
        for (const n3 of this[s2].values()) {
          const t3 = n3.deref();
          t3 && (e3 += t3[o2]);
        }
        return e3;
      }
      [A](e3, n3) {
        let t3;
        if (!e3.origin || !("string" == typeof e3.origin || e3.origin instanceof URL)) throw new a2("opts.origin must be a non-empty string or URL.");
        t3 = String(e3.origin);
        const o3 = this[s2].get(t3);
        let r2 = o3 ? o3.deref() : null;
        return r2 || (r2 = this[I](e3.origin, this[y]).on("drain", this[_]).on("connect", this[h]).on("disconnect", this[T]).on("connectionError", this[k]), this[s2].set(t3, new p(r2)), this[C].register(r2, t3)), r2.dispatch(e3, n3);
      }
      async [r]() {
        const e3 = [];
        for (const n3 of this[s2].values()) {
          const t3 = n3.deref();
          t3 && e3.push(t3.close());
        }
        await Promise.all(e3);
      }
      async [i](e3) {
        const n3 = [];
        for (const t3 of this[s2].values()) {
          const a3 = t3.deref();
          a3 && n3.push(a3.destroy(e3));
        }
        await Promise.all(n3);
      }
    };
  }