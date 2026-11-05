// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 68503 range:6139394..6139805
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