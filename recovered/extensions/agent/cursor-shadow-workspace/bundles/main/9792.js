// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 9792 range:706300..709485
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9792: (e2, A2, t2) => {
    "use strict";
    const n2 = t2(1124), { ClientDestroyedError: r2, ClientClosedError: o2, InvalidArgumentError: s } = t2(7902), { kDestroy: a, kClose: i, kDispatch: c, kInterceptors: l } = t2(8832), g = /* @__PURE__ */ Symbol("destroyed"), E = /* @__PURE__ */ Symbol("closed"), u = /* @__PURE__ */ Symbol("onDestroyed"), d = /* @__PURE__ */ Symbol("onClosed"), I = /* @__PURE__ */ Symbol("Intercepted Dispatch");
    e2.exports = class extends n2 {
      constructor() {
        super(), this[g] = false, this[u] = null, this[E] = false, this[d] = [];
      }
      get destroyed() {
        return this[g];
      }
      get closed() {
        return this[E];
      }
      get interceptors() {
        return this[l];
      }
      set interceptors(e3) {
        if (e3) for (let A3 = e3.length - 1; A3 >= 0; A3--) {
          if ("function" != typeof this[l][A3]) throw new s("interceptor must be an function");
        }
        this[l] = e3;
      }
      close(e3) {
        if (void 0 === e3) return new Promise((e4, A4) => {
          this.close((t3, n3) => t3 ? A4(t3) : e4(n3));
        });
        if ("function" != typeof e3) throw new s("invalid callback");
        if (this[g]) return void queueMicrotask(() => e3(new r2(), null));
        if (this[E]) return void (this[d] ? this[d].push(e3) : queueMicrotask(() => e3(null, null)));
        this[E] = true, this[d].push(e3);
        const A3 = () => {
          const e4 = this[d];
          this[d] = null;
          for (let A4 = 0; A4 < e4.length; A4++) e4[A4](null, null);
        };
        this[i]().then(() => this.destroy()).then(() => {
          queueMicrotask(A3);
        });
      }
      destroy(e3, A3) {
        if ("function" == typeof e3 && (A3 = e3, e3 = null), void 0 === A3) return new Promise((A4, t4) => {
          this.destroy(e3, (e4, n3) => e4 ? t4(e4) : A4(n3));
        });
        if ("function" != typeof A3) throw new s("invalid callback");
        if (this[g]) return void (this[u] ? this[u].push(A3) : queueMicrotask(() => A3(null, null)));
        e3 || (e3 = new r2()), this[g] = true, this[u] = this[u] || [], this[u].push(A3);
        const t3 = () => {
          const e4 = this[u];
          this[u] = null;
          for (let A4 = 0; A4 < e4.length; A4++) e4[A4](null, null);
        };
        this[a](e3).then(() => {
          queueMicrotask(t3);
        });
      }
      [I](e3, A3) {
        if (!this[l] || 0 === this[l].length) return this[I] = this[c], this[c](e3, A3);
        let t3 = this[c].bind(this);
        for (let e4 = this[l].length - 1; e4 >= 0; e4--) t3 = this[l][e4](t3);
        return this[I] = t3, t3(e3, A3);
      }
      dispatch(e3, A3) {
        if (!A3 || "object" != typeof A3) throw new s("handler must be an object");
        try {
          if (!e3 || "object" != typeof e3) throw new s("opts must be an object.");
          if (this[g] || this[u]) throw new r2();
          if (this[E]) throw new o2();
          return this[I](e3, A3);
        } catch (e4) {
          if ("function" != typeof A3.onError) throw new s("invalid onError method");
          return A3.onError(e4), false;
        }
      }
    };
  }