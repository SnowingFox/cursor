// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 9964 range:922665..922993
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
9964: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.distinctUntilKeyChanged = void 0;
    const n2 = r2(7529);
    t2.distinctUntilKeyChanged = function(e3, t3) {
      return (0, n2.distinctUntilChanged)((r3, n3) => t3 ? t3(r3[e3], n3[e3]) : r3[e3] === n3[e3]);
    };
  }