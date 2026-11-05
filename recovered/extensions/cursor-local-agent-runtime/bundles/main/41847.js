// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 41847 range:1270925..1271255
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
41847: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.NOOP_METER_PROVIDER = t.NoopMeterProvider = void 0;
    const n = r(26746);
    class o {
      getMeter(e2, t2, r2) {
        return n.NOOP_METER;
      }
    }
    t.NoopMeterProvider = o, t.NOOP_METER_PROVIDER = new o();
  }