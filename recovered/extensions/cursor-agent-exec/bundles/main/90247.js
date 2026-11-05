// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 90247 range:11216485..11216907
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
90247: (e, t) => {
    "use strict";
    function r(e2) {
      const t2 = e2.length;
      let r2, n = 0, s = 0;
      for (; s < t2; ) n++, r2 = e2.charCodeAt(s++), r2 >= 55296 && r2 <= 56319 && s < t2 && (r2 = e2.charCodeAt(s), 56320 == (64512 & r2) && s++);
      return n;
    }
    Object.defineProperty(t, "__esModule", { value: true }), t.default = r, r.code = 'require("ajv/dist/runtime/ucs2length").default';
  }