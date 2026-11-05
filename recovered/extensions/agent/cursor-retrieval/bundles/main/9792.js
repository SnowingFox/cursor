// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 9792 range:1058317..1061511
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9792: (e2, a2, n2) => {
    "use strict";
    const t2 = n2(1124), { ClientDestroyedError: s2, ClientClosedError: o2, InvalidArgumentError: r2 } = n2(7902), { kDestroy: i2, kClose: l, kDispatch: d, kInterceptors: m } = n2(8832), c = /* @__PURE__ */ Symbol("destroyed"), p = /* @__PURE__ */ Symbol("closed"), A = /* @__PURE__ */ Symbol("onDestroyed"), u = /* @__PURE__ */ Symbol("onClosed"), g = /* @__PURE__ */ Symbol("Intercepted Dispatch");
    e2.exports = class extends t2 {
      constructor() {
        super(), this[c] = false, this[A] = null, this[p] = false, this[u] = [];
      }
      get destroyed() {
        return this[c];
      }
      get closed() {
        return this[p];
      }
      get interceptors() {
        return this[m];
      }
      set interceptors(e3) {
        if (e3) for (let a3 = e3.length - 1; a3 >= 0; a3--) {
          if ("function" != typeof this[m][a3]) throw new r2("interceptor must be an function");
        }
        this[m] = e3;
      }
      close(e3) {
        if (void 0 === e3) return new Promise((e4, a4) => {
          this.close((n3, t3) => n3 ? a4(n3) : e4(t3));
        });
        if ("function" != typeof e3) throw new r2("invalid callback");
        if (this[c]) return void queueMicrotask(() => e3(new s2(), null));
        if (this[p]) return void (this[u] ? this[u].push(e3) : queueMicrotask(() => e3(null, null)));
        this[p] = true, this[u].push(e3);
        const a3 = () => {
          const e4 = this[u];
          this[u] = null;
          for (let a4 = 0; a4 < e4.length; a4++) e4[a4](null, null);
        };
        this[l]().then(() => this.destroy()).then(() => {
          queueMicrotask(a3);
        });
      }
      destroy(e3, a3) {
        if ("function" == typeof e3 && (a3 = e3, e3 = null), void 0 === a3) return new Promise((a4, n4) => {
          this.destroy(e3, (e4, t3) => e4 ? n4(e4) : a4(t3));
        });
        if ("function" != typeof a3) throw new r2("invalid callback");
        if (this[c]) return void (this[A] ? this[A].push(a3) : queueMicrotask(() => a3(null, null)));
        e3 || (e3 = new s2()), this[c] = true, this[A] = this[A] || [], this[A].push(a3);
        const n3 = () => {
          const e4 = this[A];
          this[A] = null;
          for (let a4 = 0; a4 < e4.length; a4++) e4[a4](null, null);
        };
        this[i2](e3).then(() => {
          queueMicrotask(n3);
        });
      }
      [g](e3, a3) {
        if (!this[m] || 0 === this[m].length) return this[g] = this[d], this[d](e3, a3);
        let n3 = this[d].bind(this);
        for (let e4 = this[m].length - 1; e4 >= 0; e4--) n3 = this[m][e4](n3);
        return this[g] = n3, n3(e3, a3);
      }
      dispatch(e3, a3) {
        if (!a3 || "object" != typeof a3) throw new r2("handler must be an object");
        try {
          if (!e3 || "object" != typeof e3) throw new r2("opts must be an object.");
          if (this[c] || this[A]) throw new s2();
          if (this[p]) throw new o2();
          return this[g](e3, a3);
        } catch (e4) {
          if ("function" != typeof a3.onError) throw new r2("invalid onError method");
          return a3.onError(e4), false;
        }
      }
    };
  }