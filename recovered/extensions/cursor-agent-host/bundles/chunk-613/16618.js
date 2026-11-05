// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 16618 range:44870..47566
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
16618: (A, e, t) => {
  "use strict";
  const { InvalidArgumentError: r } = t(38238), { kClients: s, kRunning: o, kClose: n, kDestroy: i, kDispatch: a, kInterceptors: Q } = t(76992), g = t(27110), E = t(3817), B = t(90996), c = t(55201), I = t(39935), C = /* @__PURE__ */ Symbol("onConnect"), h = /* @__PURE__ */ Symbol("onDisconnect"), l = /* @__PURE__ */ Symbol("onConnectionError"), u = /* @__PURE__ */ Symbol("maxRedirections"), d = /* @__PURE__ */ Symbol("onDrain"), f = /* @__PURE__ */ Symbol("factory"), w = /* @__PURE__ */ Symbol("options");
  function y(A2, e2) {
    return e2 && 1 === e2.connections ? new B(A2, e2) : new E(A2, e2);
  }
  A.exports = class extends g {
    constructor({ factory: A2 = y, maxRedirections: e2 = 0, connect: t2, ...o2 } = {}) {
      if ("function" != typeof A2) throw new r("factory must be a function.");
      if (null != t2 && "function" != typeof t2 && "object" != typeof t2) throw new r("connect must be a function or an object");
      if (!Number.isInteger(e2) || e2 < 0) throw new r("maxRedirections must be a positive number");
      super(o2), t2 && "function" != typeof t2 && (t2 = { ...t2 }), this[Q] = o2.interceptors?.Agent && Array.isArray(o2.interceptors.Agent) ? o2.interceptors.Agent : [I({ maxRedirections: e2 })], this[w] = { ...c.deepClone(o2), connect: t2 }, this[w].interceptors = o2.interceptors ? { ...o2.interceptors } : void 0, this[u] = e2, this[f] = A2, this[s] = /* @__PURE__ */ new Map(), this[d] = (A3, e3) => {
        this.emit("drain", A3, [this, ...e3]);
      }, this[C] = (A3, e3) => {
        this.emit("connect", A3, [this, ...e3]);
      }, this[h] = (A3, e3, t3) => {
        this.emit("disconnect", A3, [this, ...e3], t3);
      }, this[l] = (A3, e3, t3) => {
        this.emit("connectionError", A3, [this, ...e3], t3);
      };
    }
    get [o]() {
      let A2 = 0;
      for (const e2 of this[s].values()) A2 += e2[o];
      return A2;
    }
    [a](A2, e2) {
      let t2;
      if (!A2.origin || !("string" == typeof A2.origin || A2.origin instanceof URL)) throw new r("opts.origin must be a non-empty string or URL.");
      t2 = String(A2.origin);
      let o2 = this[s].get(t2);
      return o2 || (o2 = this[f](A2.origin, this[w]).on("drain", this[d]).on("connect", this[C]).on("disconnect", this[h]).on("connectionError", this[l]), this[s].set(t2, o2)), o2.dispatch(A2, e2);
    }
    async [n]() {
      const A2 = [];
      for (const e2 of this[s].values()) A2.push(e2.close());
      this[s].clear(), await Promise.all(A2);
    }
    async [i](A2) {
      const e2 = [];
      for (const t2 of this[s].values()) e2.push(t2.destroy(A2));
      this[s].clear(), await Promise.all(e2);
    }
  };
}