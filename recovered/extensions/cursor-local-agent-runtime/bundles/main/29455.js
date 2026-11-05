// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 29455 range:945929..946241
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
29455: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.combineLatestWith = void 0;
    const n = r(1503), o = r(51078);
    t.combineLatestWith = function(...e2) {
      return (t2) => new o.Observable((r2) => (0, n.combineLatestInit)([t2, ...e2])(r2));
    };
  }