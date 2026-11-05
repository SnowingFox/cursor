// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 6125 range:450451..450837
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
6125: (e, t, r) => {
    "use strict";
    r.d(t, { Bp: () => n, q2: () => o, xk: () => i, y: () => s });
    const n = /^application\/grpc(?:\+(?:(json)(?:; ?charset=utf-?8)?|proto))?$/i, s = "application/grpc+proto", o = "application/grpc+json";
    function i(e2) {
      const t2 = null == e2 ? void 0 : e2.match(n);
      if (!t2) return;
      return { binary: !t2[1] };
    }
  }