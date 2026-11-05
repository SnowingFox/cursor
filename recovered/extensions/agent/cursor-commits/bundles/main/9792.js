// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 9792 range:707360..710554
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9792: (e2, n2, a2) => {
    "use strict";
    const t2 = a2(1124), { ClientDestroyedError: s2, ClientClosedError: o2, InvalidArgumentError: r2 } = a2(7902), { kDestroy: i2, kClose: A, kDispatch: l, kInterceptors: c } = a2(8832), m = /* @__PURE__ */ Symbol("destroyed"), d = /* @__PURE__ */ Symbol("closed"), g = /* @__PURE__ */ Symbol("onDestroyed"), u = /* @__PURE__ */ Symbol("onClosed"), E = /* @__PURE__ */ Symbol("Intercepted Dispatch");
    e2.exports = class extends t2 {
      constructor() {
        super(), this[m] = false, this[g] = null, this[d] = false, this[u] = [];
      }
      get destroyed() {
        return this[m];
      }
      get closed() {
        return this[d];
      }
      get interceptors() {
        return this[c];
      }
      set interceptors(e3) {
        if (e3) for (let n3 = e3.length - 1; n3 >= 0; n3--) {
          if ("function" != typeof this[c][n3]) throw new r2("interceptor must be an function");
        }
        this[c] = e3;
      }
      close(e3) {
        if (void 0 === e3) return new Promise((e4, n4) => {
          this.close((a3, t3) => a3 ? n4(a3) : e4(t3));
        });
        if ("function" != typeof e3) throw new r2("invalid callback");
        if (this[m]) return void queueMicrotask(() => e3(new s2(), null));
        if (this[d]) return void (this[u] ? this[u].push(e3) : queueMicrotask(() => e3(null, null)));
        this[d] = true, this[u].push(e3);
        const n3 = () => {
          const e4 = this[u];
          this[u] = null;
          for (let n4 = 0; n4 < e4.length; n4++) e4[n4](null, null);
        };
        this[A]().then(() => this.destroy()).then(() => {
          queueMicrotask(n3);
        });
      }
      destroy(e3, n3) {
        if ("function" == typeof e3 && (n3 = e3, e3 = null), void 0 === n3) return new Promise((n4, a4) => {
          this.destroy(e3, (e4, t3) => e4 ? a4(e4) : n4(t3));
        });
        if ("function" != typeof n3) throw new r2("invalid callback");
        if (this[m]) return void (this[g] ? this[g].push(n3) : queueMicrotask(() => n3(null, null)));
        e3 || (e3 = new s2()), this[m] = true, this[g] = this[g] || [], this[g].push(n3);
        const a3 = () => {
          const e4 = this[g];
          this[g] = null;
          for (let n4 = 0; n4 < e4.length; n4++) e4[n4](null, null);
        };
        this[i2](e3).then(() => {
          queueMicrotask(a3);
        });
      }
      [E](e3, n3) {
        if (!this[c] || 0 === this[c].length) return this[E] = this[l], this[l](e3, n3);
        let a3 = this[l].bind(this);
        for (let e4 = this[c].length - 1; e4 >= 0; e4--) a3 = this[c][e4](a3);
        return this[E] = a3, a3(e3, n3);
      }
      dispatch(e3, n3) {
        if (!n3 || "object" != typeof n3) throw new r2("handler must be an object");
        try {
          if (!e3 || "object" != typeof e3) throw new r2("opts must be an object.");
          if (this[m] || this[g]) throw new s2();
          if (this[d]) throw new o2();
          return this[E](e3, n3);
        } catch (e4) {
          if ("function" != typeof n3.onError) throw new r2("invalid onError method");
          return n3.onError(e4), false;
        }
      }
    };
  }