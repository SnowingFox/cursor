// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 84925 range:7504439..7504798
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
84925: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.startWith = void 0;
    const n = r(51078);
    t.startWith = function(...e2) {
      return (t2) => new n.Observable((r2) => {
        (0, n.subscribeToArray)(e2, (0, n.operate)({ destination: r2, complete: () => t2.subscribe(r2) }));
      });
    };
  }