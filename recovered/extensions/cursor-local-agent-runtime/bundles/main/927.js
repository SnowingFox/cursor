// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 927 range:22349..23647
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
927: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.TraceAPI = void 0;
    const n = r(27976), o = r(25615), s = r(38420), i = r(83276), a = r(30071), l = "trace";
    class c {
      constructor() {
        this._proxyTracerProvider = new o.ProxyTracerProvider(), this.wrapSpanContext = s.wrapSpanContext, this.isSpanContextValid = s.isSpanContextValid, this.deleteSpan = i.deleteSpan, this.getSpan = i.getSpan, this.getActiveSpan = i.getActiveSpan, this.getSpanContext = i.getSpanContext, this.setSpan = i.setSpan, this.setSpanContext = i.setSpanContext;
      }
      static getInstance() {
        return this._instance || (this._instance = new c()), this._instance;
      }
      setGlobalTracerProvider(e2) {
        const t2 = (0, n.registerGlobal)(l, this._proxyTracerProvider, a.DiagAPI.instance());
        return t2 && this._proxyTracerProvider.setDelegate(e2), t2;
      }
      getTracerProvider() {
        return (0, n.getGlobal)(l) || this._proxyTracerProvider;
      }
      getTracer(e2, t2) {
        return this.getTracerProvider().getTracer(e2, t2);
      }
      disable() {
        (0, n.unregisterGlobal)(l, a.DiagAPI.instance()), this._proxyTracerProvider = new o.ProxyTracerProvider();
      }
    }
    t.TraceAPI = c;
  }