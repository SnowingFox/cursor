// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 3002 range:230807..233236
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
3002: (e2, t2, r2) => {
    "use strict";
    function n2(e3, t3) {
      return { symbol: e3, defaultValue: t3 };
    }
    function o2(e3) {
      const t3 = new AbortController();
      if (e3.aborted) return t3.abort(e3.reason), t3;
      const r3 = () => t3.abort(e3.reason);
      return e3.addEventListener("abort", r3, { once: true }), { signal: t3.signal, abort(n3) {
        e3.removeEventListener("abort", r3), t3.abort(n3);
      } };
    }
    r2.d(t2, { cF: () => n2, q6: () => i2 });
    class s2 {
      constructor(e3, t3, r3, n3) {
        this.parent = e3, this.values = r3 || /* @__PURE__ */ new Map(), this.name = n3, this.signal = t3 || (e3 ? e3.signal : new AbortController().signal);
      }
      get canceled() {
        return this.signal.aborted;
      }
      get reason() {
        return this.signal.reason;
      }
      get(e3) {
        return this.values.has(e3.symbol) ? this.values.get(e3.symbol) : this.parent ? this.parent.get(e3) : e3.defaultValue;
      }
      with(e3, t3) {
        const r3 = new Map(this.values);
        return r3.set(e3.symbol, t3), new s2(this, void 0, r3);
      }
      withCancel() {
        const e3 = o2(this.signal);
        return [new s2(this, e3.signal), (t3) => e3.abort(t3)];
      }
      withTimeout(e3) {
        const t3 = o2(this.signal), r3 = new s2(this, t3.signal), n3 = setTimeout(() => {
          t3.abort(new Error("context deadline exceeded"));
        }, e3);
        return t3.signal.addEventListener("abort", () => {
          clearTimeout(n3);
        }, { once: true }), r3;
      }
      withDeadline(e3) {
        const t3 = e3.getTime() - Date.now();
        if (t3 <= 0) {
          const e4 = o2(this.signal);
          return e4.abort(new Error("context deadline exceeded")), new s2(this, e4.signal);
        }
        return this.withTimeout(t3);
      }
      withTimeoutAndCancel(e3) {
        const [t3, r3] = this.withCancel();
        return [t3.withTimeout(e3), r3];
      }
      withName(e3) {
        return new s2(this, void 0, void 0, e3);
      }
      withDetached() {
        return new s2(this, new AbortController().signal);
      }
      getParent() {
        return this.parent;
      }
      getPath() {
        const e3 = [];
        let t3 = this;
        for (; t3; ) t3.name && e3.unshift(t3.name), t3 = t3.getParent();
        return e3;
      }
    }
    function i2() {
      return new s2();
    }
  }