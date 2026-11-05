// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 57132 range:8722081..8725368
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
57132: (e, t, r) => {
    "use strict";
    const { InvalidArgumentError: n } = r(48762), { kClients: s, kRunning: o, kClose: i, kDestroy: a, kDispatch: c, kInterceptors: l } = r(15532), u = r(84220), d = r(26215), p = r(6602), m = r(83589), h = r(31878), { WeakRef: f, FinalizationRegistry: g } = r(84191)(), y = /* @__PURE__ */ Symbol("onConnect"), w = /* @__PURE__ */ Symbol("onDisconnect"), v = /* @__PURE__ */ Symbol("onConnectionError"), _ = /* @__PURE__ */ Symbol("maxRedirections"), A = /* @__PURE__ */ Symbol("onDrain"), S = /* @__PURE__ */ Symbol("factory"), b = /* @__PURE__ */ Symbol("finalizer"), E = /* @__PURE__ */ Symbol("options");
    function I(e2, t2) {
      return t2 && 1 === t2.connections ? new p(e2, t2) : new d(e2, t2);
    }
    e.exports = class extends u {
      constructor({ factory: e2 = I, maxRedirections: t2 = 0, connect: r2, ...o2 } = {}) {
        if (super(), "function" != typeof e2) throw new n("factory must be a function.");
        if (null != r2 && "function" != typeof r2 && "object" != typeof r2) throw new n("connect must be a function or an object");
        if (!Number.isInteger(t2) || t2 < 0) throw new n("maxRedirections must be a positive number");
        r2 && "function" != typeof r2 && (r2 = { ...r2 }), this[l] = o2.interceptors && o2.interceptors.Agent && Array.isArray(o2.interceptors.Agent) ? o2.interceptors.Agent : [h({ maxRedirections: t2 })], this[E] = { ...m.deepClone(o2), connect: r2 }, this[E].interceptors = o2.interceptors ? { ...o2.interceptors } : void 0, this[_] = t2, this[S] = e2, this[s] = /* @__PURE__ */ new Map(), this[b] = new g((e3) => {
          const t3 = this[s].get(e3);
          void 0 !== t3 && void 0 === t3.deref() && this[s].delete(e3);
        });
        const i2 = this;
        this[A] = (e3, t3) => {
          i2.emit("drain", e3, [i2, ...t3]);
        }, this[y] = (e3, t3) => {
          i2.emit("connect", e3, [i2, ...t3]);
        }, this[w] = (e3, t3, r3) => {
          i2.emit("disconnect", e3, [i2, ...t3], r3);
        }, this[v] = (e3, t3, r3) => {
          i2.emit("connectionError", e3, [i2, ...t3], r3);
        };
      }
      get [o]() {
        let e2 = 0;
        for (const t2 of this[s].values()) {
          const r2 = t2.deref();
          r2 && (e2 += r2[o]);
        }
        return e2;
      }
      [c](e2, t2) {
        let r2;
        if (!e2.origin || !("string" == typeof e2.origin || e2.origin instanceof URL)) throw new n("opts.origin must be a non-empty string or URL.");
        r2 = String(e2.origin);
        const o2 = this[s].get(r2);
        let i2 = o2 ? o2.deref() : null;
        return i2 || (i2 = this[S](e2.origin, this[E]).on("drain", this[A]).on("connect", this[y]).on("disconnect", this[w]).on("connectionError", this[v]), this[s].set(r2, new f(i2)), this[b].register(i2, r2)), i2.dispatch(e2, t2);
      }
      async [i]() {
        const e2 = [];
        for (const t2 of this[s].values()) {
          const r2 = t2.deref();
          r2 && e2.push(r2.close());
        }
        await Promise.all(e2);
      }
      async [a](e2) {
        const t2 = [];
        for (const r2 of this[s].values()) {
          const n2 = r2.deref();
          n2 && t2.push(n2.destroy(e2));
        }
        await Promise.all(t2);
      }
    };
  }