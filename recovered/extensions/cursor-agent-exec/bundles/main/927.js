// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 927 range:20038..21336
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
927: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.TraceAPI = void 0;
    const n = r(27976), s = r(25615), o = r(38420), i = r(83276), a = r(30071), c = "trace";
    class l {
      constructor() {
        this._proxyTracerProvider = new s.ProxyTracerProvider(), this.wrapSpanContext = o.wrapSpanContext, this.isSpanContextValid = o.isSpanContextValid, this.deleteSpan = i.deleteSpan, this.getSpan = i.getSpan, this.getActiveSpan = i.getActiveSpan, this.getSpanContext = i.getSpanContext, this.setSpan = i.setSpan, this.setSpanContext = i.setSpanContext;
      }
      static getInstance() {
        return this._instance || (this._instance = new l()), this._instance;
      }
      setGlobalTracerProvider(e2) {
        const t2 = (0, n.registerGlobal)(c, this._proxyTracerProvider, a.DiagAPI.instance());
        return t2 && this._proxyTracerProvider.setDelegate(e2), t2;
      }
      getTracerProvider() {
        return (0, n.getGlobal)(c) || this._proxyTracerProvider;
      }
      getTracer(e2, t2) {
        return this.getTracerProvider().getTracer(e2, t2);
      }
      disable() {
        (0, n.unregisterGlobal)(c, a.DiagAPI.instance()), this._proxyTracerProvider = new s.ProxyTracerProvider();
      }
    }
    t.TraceAPI = l;
  }