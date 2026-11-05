// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 4464 range:312476..312800
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4464: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.subscribeOn = void 0;
    const n2 = r2(1078);
    t2.subscribeOn = function(e3, t3 = 0) {
      return (r3) => new n2.Observable((n3) => {
        n3.add(e3.schedule(() => r3.subscribe(n3), t3));
      });
    };
  }