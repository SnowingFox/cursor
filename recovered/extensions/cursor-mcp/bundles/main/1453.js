// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 1453 range:166360..166972
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
1453: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.last = void 0;
    const n2 = r2(1078), o2 = r2(231);
    t2.last = function(e3, t3) {
      const r3 = arguments.length >= 2;
      return (s2) => new n2.Observable((i2) => {
        let a2, c = 0, u = false;
        s2.subscribe((0, n2.operate)({ destination: i2, next(t4) {
          e3 && !e3(t4, c++, s2) || (u = true, a2 = t4);
        }, complete() {
          u ? (i2.next(a2), i2.complete()) : r3 ? (i2.next(t3), i2.complete()) : i2.error(new o2.EmptyError());
        } }));
      });
    };
  }