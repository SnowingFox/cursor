// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 84220 range:11997452..12000626
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
84220: (e, t, r) => {
    "use strict";
    const n = r(74088), { ClientDestroyedError: s, ClientClosedError: o, InvalidArgumentError: i } = r(48762), { kDestroy: a, kClose: c, kDispatch: l, kInterceptors: u } = r(15532), d = /* @__PURE__ */ Symbol("destroyed"), p = /* @__PURE__ */ Symbol("closed"), m = /* @__PURE__ */ Symbol("onDestroyed"), h = /* @__PURE__ */ Symbol("onClosed"), f = /* @__PURE__ */ Symbol("Intercepted Dispatch");
    e.exports = class extends n {
      constructor() {
        super(), this[d] = false, this[m] = null, this[p] = false, this[h] = [];
      }
      get destroyed() {
        return this[d];
      }
      get closed() {
        return this[p];
      }
      get interceptors() {
        return this[u];
      }
      set interceptors(e2) {
        if (e2) for (let t2 = e2.length - 1; t2 >= 0; t2--) {
          if ("function" != typeof this[u][t2]) throw new i("interceptor must be an function");
        }
        this[u] = e2;
      }
      close(e2) {
        if (void 0 === e2) return new Promise((e3, t3) => {
          this.close((r2, n2) => r2 ? t3(r2) : e3(n2));
        });
        if ("function" != typeof e2) throw new i("invalid callback");
        if (this[d]) return void queueMicrotask(() => e2(new s(), null));
        if (this[p]) return void (this[h] ? this[h].push(e2) : queueMicrotask(() => e2(null, null)));
        this[p] = true, this[h].push(e2);
        const t2 = () => {
          const e3 = this[h];
          this[h] = null;
          for (let t3 = 0; t3 < e3.length; t3++) e3[t3](null, null);
        };
        this[c]().then(() => this.destroy()).then(() => {
          queueMicrotask(t2);
        });
      }
      destroy(e2, t2) {
        if ("function" == typeof e2 && (t2 = e2, e2 = null), void 0 === t2) return new Promise((t3, r3) => {
          this.destroy(e2, (e3, n2) => e3 ? r3(e3) : t3(n2));
        });
        if ("function" != typeof t2) throw new i("invalid callback");
        if (this[d]) return void (this[m] ? this[m].push(t2) : queueMicrotask(() => t2(null, null)));
        e2 || (e2 = new s()), this[d] = true, this[m] = this[m] || [], this[m].push(t2);
        const r2 = () => {
          const e3 = this[m];
          this[m] = null;
          for (let t3 = 0; t3 < e3.length; t3++) e3[t3](null, null);
        };
        this[a](e2).then(() => {
          queueMicrotask(r2);
        });
      }
      [f](e2, t2) {
        if (!this[u] || 0 === this[u].length) return this[f] = this[l], this[l](e2, t2);
        let r2 = this[l].bind(this);
        for (let e3 = this[u].length - 1; e3 >= 0; e3--) r2 = this[u][e3](r2);
        return this[f] = r2, r2(e2, t2);
      }
      dispatch(e2, t2) {
        if (!t2 || "object" != typeof t2) throw new i("handler must be an object");
        try {
          if (!e2 || "object" != typeof e2) throw new i("opts must be an object.");
          if (this[d] || this[m]) throw new s();
          if (this[p]) throw new o();
          return this[f](e2, t2);
        } catch (e3) {
          if ("function" != typeof t2.onError) throw new i("invalid onError method");
          return t2.onError(e3), false;
        }
      }
    };
  }