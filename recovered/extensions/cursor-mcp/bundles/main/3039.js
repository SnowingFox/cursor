// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 3039 range:236089..236551
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
3039: (e2, t2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.validateValue = t2.validateKey = void 0;
    const r2 = "[_0-9a-z-*/]", n2 = new RegExp(`^(?:${`[a-z]${r2}{0,255}`}|${`[a-z0-9]${r2}{0,240}@[a-z]${r2}{0,13}`})$`), o2 = /^[ -~]{0,255}[!-~]$/, s2 = /,|=/;
    t2.validateKey = function(e3) {
      return n2.test(e3);
    }, t2.validateValue = function(e3) {
      return o2.test(e3) && !s2.test(e3);
    };
  }