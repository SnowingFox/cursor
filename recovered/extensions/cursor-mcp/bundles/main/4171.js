// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 4171 range:301999..302306
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4171: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.partition = void 0;
    const n2 = r2(7029), o2 = r2(4591);
    t2.partition = function(e3, t3) {
      return (r3) => [(0, o2.filter)(e3, t3)(r3), (0, o2.filter)((0, n2.not)(e3, t3))(r3)];
    };
  }