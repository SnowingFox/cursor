// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 27110 range:116422..119628
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
27110: (A, e, t) => {
  "use strict";
  const r = t(47510), { ClientDestroyedError: s, ClientClosedError: o, InvalidArgumentError: n } = t(38238), { kDestroy: i, kClose: a, kClosed: Q, kDestroyed: g, kDispatch: E, kInterceptors: B } = t(76992), c = /* @__PURE__ */ Symbol("onDestroyed"), I = /* @__PURE__ */ Symbol("onClosed"), C = /* @__PURE__ */ Symbol("Intercepted Dispatch"), h = /* @__PURE__ */ Symbol("webSocketOptions");
  A.exports = class extends r {
    constructor(A2) {
      super(), this[g] = false, this[c] = null, this[Q] = false, this[I] = [], this[h] = A2?.webSocket ?? {};
    }
    get webSocketOptions() {
      return { maxFragments: this[h].maxFragments ?? 131072, maxPayloadSize: this[h].maxPayloadSize ?? 134217728 };
    }
    get destroyed() {
      return this[g];
    }
    get closed() {
      return this[Q];
    }
    get interceptors() {
      return this[B];
    }
    set interceptors(A2) {
      if (A2) for (let e2 = A2.length - 1; e2 >= 0; e2--) {
        if ("function" != typeof this[B][e2]) throw new n("interceptor must be an function");
      }
      this[B] = A2;
    }
    close(A2) {
      if (void 0 === A2) return new Promise((A3, e3) => {
        this.close((t2, r2) => t2 ? e3(t2) : A3(r2));
      });
      if ("function" != typeof A2) throw new n("invalid callback");
      if (this[g]) return void queueMicrotask(() => A2(new s(), null));
      if (this[Q]) return void (this[I] ? this[I].push(A2) : queueMicrotask(() => A2(null, null)));
      this[Q] = true, this[I].push(A2);
      const e2 = () => {
        const A3 = this[I];
        this[I] = null;
        for (let e3 = 0; e3 < A3.length; e3++) A3[e3](null, null);
      };
      this[a]().then(() => this.destroy()).then(() => {
        queueMicrotask(e2);
      });
    }
    destroy(A2, e2) {
      if ("function" == typeof A2 && (e2 = A2, A2 = null), void 0 === e2) return new Promise((e3, t3) => {
        this.destroy(A2, (A3, r2) => A3 ? t3(A3) : e3(r2));
      });
      if ("function" != typeof e2) throw new n("invalid callback");
      if (this[g]) return void (this[c] ? this[c].push(e2) : queueMicrotask(() => e2(null, null)));
      A2 || (A2 = new s()), this[g] = true, this[c] = this[c] || [], this[c].push(e2);
      const t2 = () => {
        const A3 = this[c];
        this[c] = null;
        for (let e3 = 0; e3 < A3.length; e3++) A3[e3](null, null);
      };
      this[i](A2).then(() => {
        queueMicrotask(t2);
      });
    }
    [C](A2, e2) {
      if (!this[B] || 0 === this[B].length) return this[C] = this[E], this[E](A2, e2);
      let t2 = this[E].bind(this);
      for (let A3 = this[B].length - 1; A3 >= 0; A3--) t2 = this[B][A3](t2);
      return this[C] = t2, t2(A2, e2);
    }
    dispatch(A2, e2) {
      if (!e2 || "object" != typeof e2) throw new n("handler must be an object");
      try {
        if (!A2 || "object" != typeof A2) throw new n("opts must be an object.");
        if (this[g] || this[c]) throw new s();
        if (this[Q]) throw new o();
        return this[C](A2, e2);
      } catch (A3) {
        if ("function" != typeof e2.onError) throw new n("invalid onError method");
        return e2.onError(A3), false;
      }
    }
  };
}