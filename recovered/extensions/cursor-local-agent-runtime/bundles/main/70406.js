// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 70406 range:2275711..2276000
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
70406: (e, t, r) => {
    "use strict";
    const n = r(13808), o = r(68139);
    function s(e2, t2, r2 = false) {
      return !t2 || null !== t2.windows && void 0 !== t2.windows || (t2 = { ...t2, windows: o.isWindows() }), n(e2, t2, r2);
    }
    Object.assign(s, n), e.exports = s;
  }