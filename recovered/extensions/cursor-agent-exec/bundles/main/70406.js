// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 70406 range:6325279..6325568
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
70406: (e, t, r) => {
    "use strict";
    const n = r(13808), s = r(68139);
    function o(e2, t2, r2 = false) {
      return !t2 || null !== t2.windows && void 0 !== t2.windows || (t2 = { ...t2, windows: s.isWindows() }), n(e2, t2, r2);
    }
    Object.assign(o, n), e.exports = o;
  }