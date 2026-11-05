// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 33002 range:1025934..1028343
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
33002: (e, t, r) => {
    "use strict";
    function n(e2, t2) {
      return { symbol: e2, defaultValue: t2 };
    }
    function o(e2) {
      const t2 = new AbortController();
      if (e2.aborted) return t2.abort(e2.reason), t2;
      const r2 = () => t2.abort(e2.reason);
      return e2.addEventListener("abort", r2, { once: true }), { signal: t2.signal, abort(n2) {
        e2.removeEventListener("abort", r2), t2.abort(n2);
      } };
    }
    r.d(t, { cF: () => n, q6: () => i });
    class s {
      constructor(e2, t2, r2, n2) {
        this.parent = e2, this.values = r2 || /* @__PURE__ */ new Map(), this.name = n2, this.signal = t2 || (e2 ? e2.signal : new AbortController().signal);
      }
      get canceled() {
        return this.signal.aborted;
      }
      get reason() {
        return this.signal.reason;
      }
      get(e2) {
        return this.values.has(e2.symbol) ? this.values.get(e2.symbol) : this.parent ? this.parent.get(e2) : e2.defaultValue;
      }
      with(e2, t2) {
        const r2 = new Map(this.values);
        return r2.set(e2.symbol, t2), new s(this, void 0, r2);
      }
      withCancel() {
        const e2 = o(this.signal);
        return [new s(this, e2.signal), (t2) => e2.abort(t2)];
      }
      withTimeout(e2) {
        const t2 = o(this.signal), r2 = new s(this, t2.signal), n2 = setTimeout(() => {
          t2.abort(new Error("context deadline exceeded"));
        }, e2);
        return t2.signal.addEventListener("abort", () => {
          clearTimeout(n2);
        }, { once: true }), r2;
      }
      withDeadline(e2) {
        const t2 = e2.getTime() - Date.now();
        if (t2 <= 0) {
          const e3 = o(this.signal);
          return e3.abort(new Error("context deadline exceeded")), new s(this, e3.signal);
        }
        return this.withTimeout(t2);
      }
      withTimeoutAndCancel(e2) {
        const [t2, r2] = this.withCancel();
        return [t2.withTimeout(e2), r2];
      }
      withName(e2) {
        return new s(this, void 0, void 0, e2);
      }
      withDetached() {
        return new s(this, new AbortController().signal);
      }
      getParent() {
        return this.parent;
      }
      getPath() {
        const e2 = [];
        let t2 = this;
        for (; t2; ) t2.name && e2.unshift(t2.name), t2 = t2.getParent();
        return e2;
      }
    }
    function i() {
      return new s();
    }
  }