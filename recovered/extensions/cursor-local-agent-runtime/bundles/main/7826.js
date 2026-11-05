// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 7826 range:75094..75903
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
        const o = this._getTracer();
        return Reflect.apply(o.startActiveSpan, o, arguments);
      }
      _getTracer() {
        if (this._delegate) return this._delegate;
        const e2 = this._provider.getDelegateTracer(this.name, this.version, this.options);
        return e2 ? (this._delegate = e2, this._delegate) : n;
      }
    };
  }