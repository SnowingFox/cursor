// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 7132 range:4190777..4194087
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7132: (t2, e2, r2) => {
    "use strict";
    const { InvalidArgumentError: n2 } = r2(8762), { kClients: s2, kRunning: i2, kClose: o2, kDestroy: a, kDispatch: u, kInterceptors: c } = r2(5532), l = r2(4220), m = r2(6215), d = r2(6602), f = r2(3589), p = r2(1878), { WeakRef: h, FinalizationRegistry: g } = r2(4191)(), A = /* @__PURE__ */ Symbol("onConnect"), _ = /* @__PURE__ */ Symbol("onDisconnect"), y = /* @__PURE__ */ Symbol("onConnectionError"), w = /* @__PURE__ */ Symbol("maxRedirections"), S = /* @__PURE__ */ Symbol("onDrain"), J = /* @__PURE__ */ Symbol("factory"), B = /* @__PURE__ */ Symbol("finalizer"), E = /* @__PURE__ */ Symbol("options");
    function I(t3, e3) {
      return e3 && 1 === e3.connections ? new d(t3, e3) : new m(t3, e3);
    }
    t2.exports = class extends l {
      constructor({ factory: t3 = I, maxRedirections: e3 = 0, connect: r3, ...i3 } = {}) {
        if (super(), "function" != typeof t3) throw new n2("factory must be a function.");
        if (null != r3 && "function" != typeof r3 && "object" != typeof r3) throw new n2("connect must be a function or an object");
        if (!Number.isInteger(e3) || e3 < 0) throw new n2("maxRedirections must be a positive number");
        r3 && "function" != typeof r3 && (r3 = { ...r3 }), this[c] = i3.interceptors && i3.interceptors.Agent && Array.isArray(i3.interceptors.Agent) ? i3.interceptors.Agent : [p({ maxRedirections: e3 })], this[E] = { ...f.deepClone(i3), connect: r3 }, this[E].interceptors = i3.interceptors ? { ...i3.interceptors } : void 0, this[w] = e3, this[J] = t3, this[s2] = /* @__PURE__ */ new Map(), this[B] = new g((t4) => {
          const e4 = this[s2].get(t4);
          void 0 !== e4 && void 0 === e4.deref() && this[s2].delete(t4);
        });
        const o3 = this;
        this[S] = (t4, e4) => {
          o3.emit("drain", t4, [o3, ...e4]);
        }, this[A] = (t4, e4) => {
          o3.emit("connect", t4, [o3, ...e4]);
        }, this[_] = (t4, e4, r4) => {
          o3.emit("disconnect", t4, [o3, ...e4], r4);
        }, this[y] = (t4, e4, r4) => {
          o3.emit("connectionError", t4, [o3, ...e4], r4);
        };
      }
      get [i2]() {
        let t3 = 0;
        for (const e3 of this[s2].values()) {
          const r3 = e3.deref();
          r3 && (t3 += r3[i2]);
        }
        return t3;
      }
      [u](t3, e3) {
        let r3;
        if (!t3.origin || !("string" == typeof t3.origin || t3.origin instanceof URL)) throw new n2("opts.origin must be a non-empty string or URL.");
        r3 = String(t3.origin);
        const i3 = this[s2].get(r3);
        let o3 = i3 ? i3.deref() : null;
        return o3 || (o3 = this[J](t3.origin, this[E]).on("drain", this[S]).on("connect", this[A]).on("disconnect", this[_]).on("connectionError", this[y]), this[s2].set(r3, new h(o3)), this[B].register(o3, r3)), o3.dispatch(t3, e3);
      }
      async [o2]() {
        const t3 = [];
        for (const e3 of this[s2].values()) {
          const r3 = e3.deref();
          r3 && t3.push(r3.close());
        }
        await Promise.all(t3);
      }
      async [a](t3) {
        const e3 = [];
        for (const r3 of this[s2].values()) {
          const n3 = r3.deref();
          n3 && e3.push(n3.destroy(t3));
        }
        await Promise.all(e3);
      }
    };
  }