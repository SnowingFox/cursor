// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 568 range:30457..33767
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
568: (e2, n2, a2) => {
    "use strict";
    const { InvalidArgumentError: t2 } = a2(7902), { kClients: s2, kRunning: o2, kClose: r2, kDestroy: i2, kDispatch: A, kInterceptors: l } = a2(8832), c = a2(9792), m = a2(4003), d = a2(4814), g = a2(9361), u = a2(858), { WeakRef: E, FinalizationRegistry: p } = a2(1531)(), T = /* @__PURE__ */ Symbol("onConnect"), k = /* @__PURE__ */ Symbol("onDisconnect"), I = /* @__PURE__ */ Symbol("onConnectionError"), h = /* @__PURE__ */ Symbol("maxRedirections"), _ = /* @__PURE__ */ Symbol("onDrain"), C = /* @__PURE__ */ Symbol("factory"), f = /* @__PURE__ */ Symbol("finalizer"), B = /* @__PURE__ */ Symbol("options");
    function Q(e3, n3) {
      return n3 && 1 === n3.connections ? new d(e3, n3) : new m(e3, n3);
    }
    e2.exports = class extends c {
      constructor({ factory: e3 = Q, maxRedirections: n3 = 0, connect: a3, ...o3 } = {}) {
        if (super(), "function" != typeof e3) throw new t2("factory must be a function.");
        if (null != a3 && "function" != typeof a3 && "object" != typeof a3) throw new t2("connect must be a function or an object");
        if (!Number.isInteger(n3) || n3 < 0) throw new t2("maxRedirections must be a positive number");
        a3 && "function" != typeof a3 && (a3 = { ...a3 }), this[l] = o3.interceptors && o3.interceptors.Agent && Array.isArray(o3.interceptors.Agent) ? o3.interceptors.Agent : [u({ maxRedirections: n3 })], this[B] = { ...g.deepClone(o3), connect: a3 }, this[B].interceptors = o3.interceptors ? { ...o3.interceptors } : void 0, this[h] = n3, this[C] = e3, this[s2] = /* @__PURE__ */ new Map(), this[f] = new p((e4) => {
          const n4 = this[s2].get(e4);
          void 0 !== n4 && void 0 === n4.deref() && this[s2].delete(e4);
        });
        const r3 = this;
        this[_] = (e4, n4) => {
          r3.emit("drain", e4, [r3, ...n4]);
        }, this[T] = (e4, n4) => {
          r3.emit("connect", e4, [r3, ...n4]);
        }, this[k] = (e4, n4, a4) => {
          r3.emit("disconnect", e4, [r3, ...n4], a4);
        }, this[I] = (e4, n4, a4) => {
          r3.emit("connectionError", e4, [r3, ...n4], a4);
        };
      }
      get [o2]() {
        let e3 = 0;
        for (const n3 of this[s2].values()) {
          const a3 = n3.deref();
          a3 && (e3 += a3[o2]);
        }
        return e3;
      }
      [A](e3, n3) {
        let a3;
        if (!e3.origin || !("string" == typeof e3.origin || e3.origin instanceof URL)) throw new t2("opts.origin must be a non-empty string or URL.");
        a3 = String(e3.origin);
        const o3 = this[s2].get(a3);
        let r3 = o3 ? o3.deref() : null;
        return r3 || (r3 = this[C](e3.origin, this[B]).on("drain", this[_]).on("connect", this[T]).on("disconnect", this[k]).on("connectionError", this[I]), this[s2].set(a3, new E(r3)), this[f].register(r3, a3)), r3.dispatch(e3, n3);
      }
      async [r2]() {
        const e3 = [];
        for (const n3 of this[s2].values()) {
          const a3 = n3.deref();
          a3 && e3.push(a3.close());
        }
        await Promise.all(e3);
      }
      async [i2](e3) {
        const n3 = [];
        for (const a3 of this[s2].values()) {
          const t3 = a3.deref();
          t3 && n3.push(t3.destroy(e3));
        }
        await Promise.all(n3);
      }
    };
  }