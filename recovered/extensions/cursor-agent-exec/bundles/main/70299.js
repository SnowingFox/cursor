// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 70299 range:6308983..6309751
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
70299: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.MetricsAPI = void 0;
    const n = r(41847), s = r(27976), o = r(30071), i = "metrics";
    class a {
      constructor() {
      }
      static getInstance() {
        return this._instance || (this._instance = new a()), this._instance;
      }
      setGlobalMeterProvider(e2) {
        return (0, s.registerGlobal)(i, e2, o.DiagAPI.instance());
      }
      getMeterProvider() {
        return (0, s.getGlobal)(i) || n.NOOP_METER_PROVIDER;
      }
      getMeter(e2, t2, r2) {
        return this.getMeterProvider().getMeter(e2, t2, r2);
      }
      disable() {
        (0, s.unregisterGlobal)(i, o.DiagAPI.instance());
      }
    }
    t.MetricsAPI = a;
  }