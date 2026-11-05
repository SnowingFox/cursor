// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 299 range:24419..25205
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
299: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.MetricsAPI = void 0;
    const n2 = r2(1847), o2 = r2(7976), s2 = r2(71), i2 = "metrics";
    class a2 {
      constructor() {
      }
      static getInstance() {
        return this._instance || (this._instance = new a2()), this._instance;
      }
      setGlobalMeterProvider(e3) {
        return (0, o2.registerGlobal)(i2, e3, s2.DiagAPI.instance());
      }
      getMeterProvider() {
        return (0, o2.getGlobal)(i2) || n2.NOOP_METER_PROVIDER;
      }
      getMeter(e3, t3, r3) {
        return this.getMeterProvider().getMeter(e3, t3, r3);
      }
      disable() {
        (0, o2.unregisterGlobal)(i2, s2.DiagAPI.instance());
      }
    }
    t2.MetricsAPI = a2;
  }