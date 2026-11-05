// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 4591 range:45013..45384
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4591: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.filter = void 0;
    const n = r(51078);
    t.filter = function(e2, t2) {
      return (r2) => new n.Observable((o) => {
        let s = 0;
        r2.subscribe((0, n.operate)({ destination: o, next: (r3) => e2.call(t2, r3, s++) && o.next(r3) }));
      });
    };
  }