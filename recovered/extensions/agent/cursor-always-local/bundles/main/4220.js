// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 4220 range:1070684..1073876
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4220: (t2, e2, r2) => {
    "use strict";
    const n2 = r2(4088), { ClientDestroyedError: s2, ClientClosedError: i2, InvalidArgumentError: o2 } = r2(8762), { kDestroy: a, kClose: u, kDispatch: c, kInterceptors: l } = r2(5532), m = /* @__PURE__ */ Symbol("destroyed"), d = /* @__PURE__ */ Symbol("closed"), f = /* @__PURE__ */ Symbol("onDestroyed"), p = /* @__PURE__ */ Symbol("onClosed"), h = /* @__PURE__ */ Symbol("Intercepted Dispatch");
    t2.exports = class extends n2 {
      constructor() {
        super(), this[m] = false, this[f] = null, this[d] = false, this[p] = [];
      }
      get destroyed() {
        return this[m];
      }
      get closed() {
        return this[d];
      }
      get interceptors() {
        return this[l];
      }
      set interceptors(t3) {
        if (t3) for (let e3 = t3.length - 1; e3 >= 0; e3--) {
          if ("function" != typeof this[l][e3]) throw new o2("interceptor must be an function");
        }
        this[l] = t3;
      }
      close(t3) {
        if (void 0 === t3) return new Promise((t4, e4) => {
          this.close((r3, n3) => r3 ? e4(r3) : t4(n3));
        });
        if ("function" != typeof t3) throw new o2("invalid callback");
        if (this[m]) return void queueMicrotask(() => t3(new s2(), null));
        if (this[d]) return void (this[p] ? this[p].push(t3) : queueMicrotask(() => t3(null, null)));
        this[d] = true, this[p].push(t3);
        const e3 = () => {
          const t4 = this[p];
          this[p] = null;
          for (let e4 = 0; e4 < t4.length; e4++) t4[e4](null, null);
        };
        this[u]().then(() => this.destroy()).then(() => {
          queueMicrotask(e3);
        });
      }
      destroy(t3, e3) {
        if ("function" == typeof t3 && (e3 = t3, t3 = null), void 0 === e3) return new Promise((e4, r4) => {
          this.destroy(t3, (t4, n3) => t4 ? r4(t4) : e4(n3));
        });
        if ("function" != typeof e3) throw new o2("invalid callback");
        if (this[m]) return void (this[f] ? this[f].push(e3) : queueMicrotask(() => e3(null, null)));
        t3 || (t3 = new s2()), this[m] = true, this[f] = this[f] || [], this[f].push(e3);
        const r3 = () => {
          const t4 = this[f];
          this[f] = null;
          for (let e4 = 0; e4 < t4.length; e4++) t4[e4](null, null);
        };
        this[a](t3).then(() => {
          queueMicrotask(r3);
        });
      }
      [h](t3, e3) {
        if (!this[l] || 0 === this[l].length) return this[h] = this[c], this[c](t3, e3);
        let r3 = this[c].bind(this);
        for (let t4 = this[l].length - 1; t4 >= 0; t4--) r3 = this[l][t4](r3);
        return this[h] = r3, r3(t3, e3);
      }
      dispatch(t3, e3) {
        if (!e3 || "object" != typeof e3) throw new o2("handler must be an object");
        try {
          if (!t3 || "object" != typeof t3) throw new o2("opts must be an object.");
          if (this[m] || this[f]) throw new s2();
          if (this[d]) throw new i2();
          return this[h](t3, e3);
        } catch (t4) {
          if ("function" != typeof e3.onError) throw new o2("invalid onError method");
          return e3.onError(t4), false;
        }
      }
    };
  }