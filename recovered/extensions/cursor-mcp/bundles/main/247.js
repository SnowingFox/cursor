// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 247 range:22657..23093
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
247: (e2, t2) => {
    "use strict";
    function r2(e3) {
      const t3 = e3.length;
      let r3, n2 = 0, o2 = 0;
      for (; o2 < t3; ) n2++, r3 = e3.charCodeAt(o2++), r3 >= 55296 && r3 <= 56319 && o2 < t3 && (r3 = e3.charCodeAt(o2), 56320 == (64512 & r3) && o2++);
      return n2;
    }
    Object.defineProperty(t2, "__esModule", { value: true }), t2.default = r2, r2.code = 'require("ajv/dist/runtime/ucs2length").default';
  }