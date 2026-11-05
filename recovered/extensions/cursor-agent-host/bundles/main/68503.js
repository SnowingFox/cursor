// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 68503 range:10702199..10702610
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
68503: (e, t, r) => {
    "use strict";
    r.d(t, { O2: () => n, r_: () => o, sh: () => i });
    const n = "agent-transcripts", s = 200;
    function o(e2) {
      return e2.replace(/[^a-zA-Z0-9]/g, "-").replace(/-+/g, "-").replace(/^-+|-+$/g, "");
    }
    function i(e2) {
      let t2 = encodeURIComponent(e2);
      return t2 = t2.replace(/%/g, "_"), t2.length > s && (t2 = t2.slice(0, s)), t2;
    }
  }