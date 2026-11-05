// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 4609 range:317874..318280
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4609: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.skipWhile = void 0;
    const n2 = r2(1078);
    t2.skipWhile = function(e3) {
      return (t3) => new n2.Observable((r3) => {
        let o2 = false, s2 = 0;
        t3.subscribe((0, n2.operate)({ destination: r3, next: (t4) => (o2 || (o2 = !e3(t4, s2++))) && r3.next(t4) }));
      });
    };
  }