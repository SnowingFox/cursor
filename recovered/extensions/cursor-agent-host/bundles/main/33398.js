// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 33398 range:6593549..6593937
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