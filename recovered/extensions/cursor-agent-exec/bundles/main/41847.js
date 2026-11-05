// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 41847 range:3207057..3207387
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
41847: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.NOOP_METER_PROVIDER = t.NoopMeterProvider = void 0;
    const n = r(26746);
    class s {
      getMeter(e2, t2, r2) {
        return n.NOOP_METER;
      }
    }
    t.NoopMeterProvider = s, t.NOOP_METER_PROVIDER = new s();
  }