// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 33002 range:2912629..2915038
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
33002: (e, t, r) => {
    "use strict";
    function n(e2, t2) {
      return { symbol: e2, defaultValue: t2 };
    }
    function s(e2) {
      const t2 = new AbortController();
      if (e2.aborted) return t2.abort(e2.reason), t2;
      const r2 = () => t2.abort(e2.reason);
      return e2.addEventListener("abort", r2, { once: true }), { signal: t2.signal, abort(n2) {
        e2.removeEventListener("abort", r2), t2.abort(n2);
      } };
    }
    r.d(t, { cF: () => n, q6: () => i });
    class o {
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
        return r2.set(e2.symbol, t2), new o(this, void 0, r2);
      }
      withCancel() {
        const e2 = s(this.signal);
        return [new o(this, e2.signal), (t2) => e2.abort(t2)];
      }
      withTimeout(e2) {
        const t2 = s(this.signal), r2 = new o(this, t2.signal), n2 = setTimeout(() => {
          t2.abort(new Error("context deadline exceeded"));
        }, e2);
        return t2.signal.addEventListener("abort", () => {
          clearTimeout(n2);
        }, { once: true }), r2;
      }
      withDeadline(e2) {
        const t2 = e2.getTime() - Date.now();
        if (t2 <= 0) {
          const e3 = s(this.signal);
          return e3.abort(new Error("context deadline exceeded")), new o(this, e3.signal);
        }
        return this.withTimeout(t2);
      }
      withTimeoutAndCancel(e2) {
        const [t2, r2] = this.withCancel();
        return [t2.withTimeout(e2), r2];
      }
      withName(e2) {
        return new o(this, void 0, void 0, e2);
      }
      withDetached() {
        return new o(this, new AbortController().signal);
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
      return new o();
    }
  }