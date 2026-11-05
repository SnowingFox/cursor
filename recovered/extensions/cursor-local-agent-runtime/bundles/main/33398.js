// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 33398 range:1029759..1030147
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
33398: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.joinAllInternals = void 0;
    const n = r(44896), o = r(65683), s = r(57410), i = r(51207), a = r(22471);
    t.joinAllInternals = function(e2, t2) {
      return (0, s.pipe)((0, a.toArray)(), (0, i.mergeMap)((t3) => e2(t3)), t2 ? (0, o.mapOneOrManyArgs)(t2) : n.identity);
    };
  }