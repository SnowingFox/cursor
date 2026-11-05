// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 9792 range:844165..847350
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9792: (e2, t2, A2) => {
    "use strict";
    const n2 = A2(1124), { ClientDestroyedError: r2, ClientClosedError: o2, InvalidArgumentError: s } = A2(7902), { kDestroy: i, kClose: a, kDispatch: c, kInterceptors: l } = A2(8832), u = /* @__PURE__ */ Symbol("destroyed"), g = /* @__PURE__ */ Symbol("closed"), E = /* @__PURE__ */ Symbol("onDestroyed"), h = /* @__PURE__ */ Symbol("onClosed"), d = /* @__PURE__ */ Symbol("Intercepted Dispatch");
    e2.exports = class extends n2 {
      constructor() {
        super(), this[u] = false, this[E] = null, this[g] = false, this[h] = [];
      }
      get destroyed() {
        return this[u];
      }
      get closed() {
        return this[g];
      }
      get interceptors() {
        return this[l];
      }
      set interceptors(e3) {
        if (e3) for (let t3 = e3.length - 1; t3 >= 0; t3--) {
          if ("function" != typeof this[l][t3]) throw new s("interceptor must be an function");
        }
        this[l] = e3;
      }
      close(e3) {
        if (void 0 === e3) return new Promise((e4, t4) => {
          this.close((A3, n3) => A3 ? t4(A3) : e4(n3));
        });
        if ("function" != typeof e3) throw new s("invalid callback");
        if (this[u]) return void queueMicrotask(() => e3(new r2(), null));
        if (this[g]) return void (this[h] ? this[h].push(e3) : queueMicrotask(() => e3(null, null)));
        this[g] = true, this[h].push(e3);
        const t3 = () => {
          const e4 = this[h];
          this[h] = null;
          for (let t4 = 0; t4 < e4.length; t4++) e4[t4](null, null);
        };
        this[a]().then(() => this.destroy()).then(() => {
          queueMicrotask(t3);
        });
      }
      destroy(e3, t3) {
        if ("function" == typeof e3 && (t3 = e3, e3 = null), void 0 === t3) return new Promise((t4, A4) => {
          this.destroy(e3, (e4, n3) => e4 ? A4(e4) : t4(n3));
        });
        if ("function" != typeof t3) throw new s("invalid callback");
        if (this[u]) return void (this[E] ? this[E].push(t3) : queueMicrotask(() => t3(null, null)));
        e3 || (e3 = new r2()), this[u] = true, this[E] = this[E] || [], this[E].push(t3);
        const A3 = () => {
          const e4 = this[E];
          this[E] = null;
          for (let t4 = 0; t4 < e4.length; t4++) e4[t4](null, null);
        };
        this[i](e3).then(() => {
          queueMicrotask(A3);
        });
      }
      [d](e3, t3) {
        if (!this[l] || 0 === this[l].length) return this[d] = this[c], this[c](e3, t3);
        let A3 = this[c].bind(this);
        for (let e4 = this[l].length - 1; e4 >= 0; e4--) A3 = this[l][e4](A3);
        return this[d] = A3, A3(e3, t3);
      }
      dispatch(e3, t3) {
        if (!t3 || "object" != typeof t3) throw new s("handler must be an object");
        try {
          if (!e3 || "object" != typeof e3) throw new s("opts must be an object.");
          if (this[u] || this[E]) throw new r2();
          if (this[g]) throw new o2();
          return this[d](e3, t3);
        } catch (e4) {
          if ("function" != typeof t3.onError) throw new s("invalid onError method");
          return t3.onError(e4), false;
        }
      }
    };
  }