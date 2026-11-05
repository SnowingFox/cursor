// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 1488 range:167059..167446
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
1488: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.endWith = void 0;
    const n2 = r2(1078);
    t2.endWith = function(...e3) {
      return (t3) => new n2.Observable((r3) => {
        t3.subscribe((0, n2.operate)({ destination: r3, complete: () => {
          (0, n2.subscribeToArray)(e3, r3);
        } }));
      });
    };
  }