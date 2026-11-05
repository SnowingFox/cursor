// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 77314 range:11333409..11333830
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
77314: (e, t, r) => {
    "use strict";
    r.d(t, { M: () => o, _: () => s });
    const n = /^[A-Za-z0-9][A-Za-z0-9._-]{0,127}$/;
    function s(e2) {
      return n.test(e2) && !e2.includes("..");
    }
    function o(e2) {
      if (!s(e2)) throw new Error(`Invalid sessionId ${JSON.stringify(e2)}: must be one path segment, start with a letter or digit, use only [A-Za-z0-9._-], and be at most 128 chars`);
    }
  }