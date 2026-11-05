// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 1261 range:23649..23979
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
1261: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.mergeWith = void 0;
    const n = r(51078), o = r(6102);
    t.mergeWith = function(...e2) {
      return (t2) => new n.Observable((r2) => {
        (0, o.mergeAll)()((0, n.from)([t2, ...e2])).subscribe(r2);
      });
    };
  }