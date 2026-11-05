// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 8880 range:828584..829401
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
8880: (e2, t2, r2) => {
    "use strict";
    r2.d(t2, { kB: () => p, p0: () => h, p6: () => l, w$: () => c });
    var n2 = r2(7381), o2 = r2(5521), s2 = r2(7888), i2 = r2(1165);
    const a2 = n2.xI("ZodISODateTime", (e3, t3) => {
      o2.Ko.init(e3, t3), i2.EB.init(e3, t3);
    });
    function c(e3) {
      return s2.G1(a2, e3);
    }
    const u = n2.xI("ZodISODate", (e3, t3) => {
      o2.v1.init(e3, t3), i2.EB.init(e3, t3);
    });
    function l(e3) {
      return s2.db(u, e3);
    }
    const d = n2.xI("ZodISOTime", (e3, t3) => {
      o2.Ax.init(e3, t3), i2.EB.init(e3, t3);
    });
    function p(e3) {
      return s2.Kn(d, e3);
    }
    const f = n2.xI("ZodISODuration", (e3, t3) => {
      o2.$N.init(e3, t3), i2.EB.init(e3, t3);
    });
    function h(e3) {
      return s2.f2(f, e3);
    }
  }