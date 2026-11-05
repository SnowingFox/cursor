// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 6887 range:584572..584853
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
6887: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.NoopTracerProvider = void 0;
    const n2 = r2(1866);
    t2.NoopTracerProvider = class {
      getTracer(e3, t3, r3) {
        return new n2.NoopTracer();
      }
    };
  }