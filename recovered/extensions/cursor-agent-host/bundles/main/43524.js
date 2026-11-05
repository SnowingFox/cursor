// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 43524 range:7759766..7760188
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
43524: (e, t, r) => {
    "use strict";
    r.d(t, { Bp: () => n, q2: () => o, xk: () => i, y: () => s });
    const n = /^application\/grpc-web(-text)?(?:\+(?:(json)(?:; ?charset=utf-?8)?|proto))?$/i, s = "application/grpc-web+proto", o = "application/grpc-web+json";
    function i(e2) {
      const t2 = null == e2 ? void 0 : e2.match(n);
      if (!t2) return;
      return { text: !!t2[1], binary: !t2[2] };
    }
  }