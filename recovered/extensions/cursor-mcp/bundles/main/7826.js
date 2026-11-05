// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 7826 range:702962..703782
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
7826: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.ProxyTracer = void 0;
    const n2 = new (r2(1866)).NoopTracer();
    t2.ProxyTracer = class {
      constructor(e3, t3, r3, n3) {
        this._provider = e3, this.name = t3, this.version = r3, this.options = n3;
      }
      startSpan(e3, t3, r3) {
        return this._getTracer().startSpan(e3, t3, r3);
      }
      startActiveSpan(e3, t3, r3, n3) {
        const o2 = this._getTracer();
        return Reflect.apply(o2.startActiveSpan, o2, arguments);
      }
      _getTracer() {
        if (this._delegate) return this._delegate;
        const e3 = this._provider.getDelegateTracer(this.name, this.version, this.options);
        return e3 ? (this._delegate = e3, this._delegate) : n2;
      }
    };
  }