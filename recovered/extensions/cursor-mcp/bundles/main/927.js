// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 927 range:68586..69908
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
927: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.TraceAPI = void 0;
    const n2 = r2(7976), o2 = r2(5615), s2 = r2(8420), i2 = r2(3276), a2 = r2(71), c = "trace";
    class u {
      constructor() {
        this._proxyTracerProvider = new o2.ProxyTracerProvider(), this.wrapSpanContext = s2.wrapSpanContext, this.isSpanContextValid = s2.isSpanContextValid, this.deleteSpan = i2.deleteSpan, this.getSpan = i2.getSpan, this.getActiveSpan = i2.getActiveSpan, this.getSpanContext = i2.getSpanContext, this.setSpan = i2.setSpan, this.setSpanContext = i2.setSpanContext;
      }
      static getInstance() {
        return this._instance || (this._instance = new u()), this._instance;
      }
      setGlobalTracerProvider(e3) {
        const t3 = (0, n2.registerGlobal)(c, this._proxyTracerProvider, a2.DiagAPI.instance());
        return t3 && this._proxyTracerProvider.setDelegate(e3), t3;
      }
      getTracerProvider() {
        return (0, n2.getGlobal)(c) || this._proxyTracerProvider;
      }
      getTracer(e3, t3) {
        return this.getTracerProvider().getTracer(e3, t3);
      }
      disable() {
        (0, n2.unregisterGlobal)(c, a2.DiagAPI.instance()), this._proxyTracerProvider = new o2.ProxyTracerProvider();
      }
    }
    t2.TraceAPI = u;
  }