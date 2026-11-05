// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 70299 range:2259415..2260183
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
70299: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.MetricsAPI = void 0;
    const n = r(41847), o = r(27976), s = r(30071), i = "metrics";
    class a {
      constructor() {
      }
      static getInstance() {
        return this._instance || (this._instance = new a()), this._instance;
      }
      setGlobalMeterProvider(e2) {
        return (0, o.registerGlobal)(i, e2, s.DiagAPI.instance());
      }
      getMeterProvider() {
        return (0, o.getGlobal)(i) || n.NOOP_METER_PROVIDER;
      }
      getMeter(e2, t2, r2) {
        return this.getMeterProvider().getMeter(e2, t2, r2);
      }
      disable() {
        (0, o.unregisterGlobal)(i, s.DiagAPI.instance());
      }
    }
    t.MetricsAPI = a;
  }