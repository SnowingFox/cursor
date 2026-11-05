// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 8634 range:779785..780100
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
8634: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.zipWith = void 0;
    const n2 = r2(1078), o2 = r2(9190);
    t2.zipWith = function(...e3) {
      return (t3) => new n2.Observable((r3) => {
        (0, o2.zip)(t3, ...e3).subscribe(r3);
      });
    };
  }