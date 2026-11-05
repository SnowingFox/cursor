// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 4589 range:317072..317485
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4589: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.using = void 0;
    const n2 = r2(1078), o2 = r2(744);
    t2.using = function(e3, t3) {
      return new n2.Observable((r3) => {
        const s2 = e3(), i2 = t3(s2);
        return (i2 ? (0, n2.from)(i2) : o2.EMPTY).subscribe(r3), () => {
          s2 && s2.unsubscribe();
        };
      });
    };
  }