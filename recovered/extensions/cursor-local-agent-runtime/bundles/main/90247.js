// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 90247 range:7713168..7713590
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
90247: (e, t) => {
    "use strict";
    function r(e2) {
      const t2 = e2.length;
      let r2, n = 0, o = 0;
      for (; o < t2; ) n++, r2 = e2.charCodeAt(o++), r2 >= 55296 && r2 <= 56319 && o < t2 && (r2 = e2.charCodeAt(o), 56320 == (64512 & r2) && o++);
      return n;
    }
    Object.defineProperty(t, "__esModule", { value: true }), t.default = r, r.code = 'require("ajv/dist/runtime/ucs2length").default';
  }