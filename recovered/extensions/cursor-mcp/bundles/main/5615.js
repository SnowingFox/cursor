// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 5615 range:426640..427416
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
5615: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.ProxyTracerProvider = void 0;
    const n2 = r2(7826), o2 = new (r2(6887)).NoopTracerProvider();
    t2.ProxyTracerProvider = class {
      getTracer(e3, t3, r3) {
        var o3;
        return null !== (o3 = this.getDelegateTracer(e3, t3, r3)) && void 0 !== o3 ? o3 : new n2.ProxyTracer(this, e3, t3, r3);
      }
      getDelegate() {
        var e3;
        return null !== (e3 = this._delegate) && void 0 !== e3 ? e3 : o2;
      }
      setDelegate(e3) {
        this._delegate = e3;
      }
      getDelegateTracer(e3, t3, r3) {
        var n3;
        return null === (n3 = this._delegate) || void 0 === n3 ? void 0 : n3.getTracer(e3, t3, r3);
      }
    };
  }