// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 8254 range:761911..762180
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
8254: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.count = void 0;
    const n2 = r2(8339);
    t2.count = function(e3) {
      return (0, n2.reduce)((t3, r3, n3) => !e3 || e3(r3, n3) ? t3 + 1 : t3, 0);
    };
  }