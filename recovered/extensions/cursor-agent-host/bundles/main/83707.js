// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 83707 range:11977373..11977698
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
83707: (e, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.defaultPath = function(e2) {
      if (!e2 || "/" !== e2.slice(0, 1)) return "/";
      if ("/" === e2) return e2;
      const t2 = e2.lastIndexOf("/");
      if (0 === t2) return "/";
      return e2.slice(0, t2);
    };
  }