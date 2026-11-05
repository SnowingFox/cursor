// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 7826 range:3211803..3212612
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
7826: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.ProxyTracer = void 0;
    const n = new (r(91866)).NoopTracer();
    t.ProxyTracer = class {
      constructor(e2, t2, r2, n2) {
        this._provider = e2, this.name = t2, this.version = r2, this.options = n2;
      }
      startSpan(e2, t2, r2) {
        return this._getTracer().startSpan(e2, t2, r2);
      }
      startActiveSpan(e2, t2, r2, n2) {
        const s = this._getTracer();
        return Reflect.apply(s.startActiveSpan, s, arguments);
      }
      _getTracer() {
        if (this._delegate) return this._delegate;
        const e2 = this._provider.getDelegateTracer(this.name, this.version, this.options);
        return e2 ? (this._delegate = e2, this._delegate) : n;
      }
    };
  }