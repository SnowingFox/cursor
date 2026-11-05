// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 25615 range:714484..715250
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
25615: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.ProxyTracerProvider = void 0;
    const n = r(7826), o = new (r(36887)).NoopTracerProvider();
    t.ProxyTracerProvider = class {
      getTracer(e2, t2, r2) {
        var o2;
        return null !== (o2 = this.getDelegateTracer(e2, t2, r2)) && void 0 !== o2 ? o2 : new n.ProxyTracer(this, e2, t2, r2);
      }
      getDelegate() {
        var e2;
        return null !== (e2 = this._delegate) && void 0 !== e2 ? e2 : o;
      }
      setDelegate(e2) {
        this._delegate = e2;
      }
      getDelegateTracer(e2, t2, r2) {
        var n2;
        return null === (n2 = this._delegate) || void 0 === n2 ? void 0 : n2.getTracer(e2, t2, r2);
      }
    };
  }