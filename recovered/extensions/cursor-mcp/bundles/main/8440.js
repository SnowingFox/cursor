// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 8440 range:776067..776525
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
8440: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.mergeScan = void 0;
    const n2 = r2(1078), o2 = r2(9935);
    t2.mergeScan = function(e3, t3, r3 = 1 / 0) {
      return (s2) => new n2.Observable((n3) => {
        let i2 = t3;
        return (0, o2.mergeInternals)(s2, n3, (t4, r4) => e3(i2, t4, r4), r3, (e4) => {
          i2 = e4;
        }, false, void 0, () => i2 = null);
      });
    };
  }