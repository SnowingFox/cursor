// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 9792 range:737824..741009
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
9792: (e2, n2, t2) => {
    "use strict";
    const a2 = t2(1124), { ClientDestroyedError: s2, ClientClosedError: o2, InvalidArgumentError: r } = t2(7902), { kDestroy: i, kClose: A, kDispatch: c, kInterceptors: l } = t2(8832), d = /* @__PURE__ */ Symbol("destroyed"), m = /* @__PURE__ */ Symbol("closed"), u = /* @__PURE__ */ Symbol("onDestroyed"), g = /* @__PURE__ */ Symbol("onClosed"), p = /* @__PURE__ */ Symbol("Intercepted Dispatch");
    e2.exports = class extends a2 {
      constructor() {
        super(), this[d] = false, this[u] = null, this[m] = false, this[g] = [];
      }
      get destroyed() {
        return this[d];
      }
      get closed() {
        return this[m];
      }
      get interceptors() {
        return this[l];
      }
      set interceptors(e3) {
        if (e3) for (let n3 = e3.length - 1; n3 >= 0; n3--) {
          if ("function" != typeof this[l][n3]) throw new r("interceptor must be an function");
        }
        this[l] = e3;
      }
      close(e3) {
        if (void 0 === e3) return new Promise((e4, n4) => {
          this.close((t3, a3) => t3 ? n4(t3) : e4(a3));
        });
        if ("function" != typeof e3) throw new r("invalid callback");
        if (this[d]) return void queueMicrotask(() => e3(new s2(), null));
        if (this[m]) return void (this[g] ? this[g].push(e3) : queueMicrotask(() => e3(null, null)));
        this[m] = true, this[g].push(e3);
        const n3 = () => {
          const e4 = this[g];
          this[g] = null;
          for (let n4 = 0; n4 < e4.length; n4++) e4[n4](null, null);
        };
        this[A]().then(() => this.destroy()).then(() => {
          queueMicrotask(n3);
        });
      }
      destroy(e3, n3) {
        if ("function" == typeof e3 && (n3 = e3, e3 = null), void 0 === n3) return new Promise((n4, t4) => {
          this.destroy(e3, (e4, a3) => e4 ? t4(e4) : n4(a3));
        });
        if ("function" != typeof n3) throw new r("invalid callback");
        if (this[d]) return void (this[u] ? this[u].push(n3) : queueMicrotask(() => n3(null, null)));
        e3 || (e3 = new s2()), this[d] = true, this[u] = this[u] || [], this[u].push(n3);
        const t3 = () => {
          const e4 = this[u];
          this[u] = null;
          for (let n4 = 0; n4 < e4.length; n4++) e4[n4](null, null);
        };
        this[i](e3).then(() => {
          queueMicrotask(t3);
        });
      }
      [p](e3, n3) {
        if (!this[l] || 0 === this[l].length) return this[p] = this[c], this[c](e3, n3);
        let t3 = this[c].bind(this);
        for (let e4 = this[l].length - 1; e4 >= 0; e4--) t3 = this[l][e4](t3);
        return this[p] = t3, t3(e3, n3);
      }
      dispatch(e3, n3) {
        if (!n3 || "object" != typeof n3) throw new r("handler must be an object");
        try {
          if (!e3 || "object" != typeof e3) throw new r("opts must be an object.");
          if (this[d] || this[u]) throw new s2();
          if (this[m]) throw new o2();
          return this[p](e3, n3);
        } catch (e4) {
          if ("function" != typeof n3.onError) throw new r("invalid onError method");
          return n3.onError(e4), false;
        }
      }
    };
  }