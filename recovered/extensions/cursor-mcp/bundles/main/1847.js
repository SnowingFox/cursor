// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 1847 range:190111..190453
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
1847: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.NOOP_METER_PROVIDER = t2.NoopMeterProvider = void 0;
    const n2 = r2(6746);
    class o2 {
      getMeter(e3, t3, r3) {
        return n2.NOOP_METER;
      }
    }
    t2.NoopMeterProvider = o2, t2.NOOP_METER_PROVIDER = new o2();
  }