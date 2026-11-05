// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 64801 range:1972539..1972974
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
64801: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.pairwise = void 0;
    const n = r(51078);
    t.pairwise = function() {
      return (e2) => new n.Observable((t2) => {
        let r2, o = false;
        e2.subscribe((0, n.operate)({ destination: t2, next: (e3) => {
          const n2 = r2;
          r2 = e3, o && t2.next([n2, e3]), o = true;
        } }));
      });
    };
  }