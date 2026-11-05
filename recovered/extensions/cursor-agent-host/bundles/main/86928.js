// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 86928 range:12195591..12196075
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
86928: (e, t, r) => {
    "use strict";
    r.d(t, { X: () => i, s: () => s });
    var n = r(8032);
    function s(e2) {
      const t2 = n.C[e2];
      return "string" != typeof t2 ? e2.toString() : t2[0].toLowerCase() + t2.substring(1).replace(/[A-Z]/g, (e3) => "_" + e3.toLowerCase());
    }
    let o;
    function i(e2) {
      if (!o) {
        o = {};
        for (const e3 of Object.values(n.C)) "string" != typeof e3 && (o[s(e3)] = e3);
      }
      return o[e2];
    }
  }