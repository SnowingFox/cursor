// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 33398 range:2916454..2916842
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
33398: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.joinAllInternals = void 0;
    const n = r(44896), s = r(65683), o = r(57410), i = r(51207), a = r(22471);
    t.joinAllInternals = function(e2, t2) {
      return (0, o.pipe)((0, a.toArray)(), (0, i.mergeMap)((t3) => e2(t3)), t2 ? (0, s.mapOneOrManyArgs)(t2) : n.identity);
    };
  }