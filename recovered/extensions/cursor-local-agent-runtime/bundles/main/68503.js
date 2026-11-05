// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 68503 range:2089897..2090308
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
68503: (e, t, r) => {
    "use strict";
    r.d(t, { O2: () => n, r_: () => s, sh: () => i });
    const n = "agent-transcripts", o = 200;
    function s(e2) {
      return e2.replace(/[^a-zA-Z0-9]/g, "-").replace(/-+/g, "-").replace(/^-+|-+$/g, "");
    }
    function i(e2) {
      let t2 = encodeURIComponent(e2);
      return t2 = t2.replace(/%/g, "_"), t2.length > o && (t2 = t2.slice(0, o)), t2;
    }
  }