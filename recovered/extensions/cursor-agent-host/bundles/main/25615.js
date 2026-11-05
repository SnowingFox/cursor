// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 25615 range:4571807..4572573
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
25615: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.ProxyTracerProvider = void 0;
    const n = r(7826), s = new (r(36887)).NoopTracerProvider();
    t.ProxyTracerProvider = class {
      getTracer(e2, t2, r2) {
        var s2;
        return null !== (s2 = this.getDelegateTracer(e2, t2, r2)) && void 0 !== s2 ? s2 : new n.ProxyTracer(this, e2, t2, r2);
      }
      getDelegate() {
        var e2;
        return null !== (e2 = this._delegate) && void 0 !== e2 ? e2 : s;
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