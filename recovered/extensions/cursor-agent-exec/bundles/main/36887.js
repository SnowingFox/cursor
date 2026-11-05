// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 36887 range:3004319..3004593
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
36887: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.NoopTracerProvider = void 0;
    const n = r(91866);
    t.NoopTracerProvider = class {
      getTracer(e2, t2, r2) {
        return new n.NoopTracer();
      }
    };
  }