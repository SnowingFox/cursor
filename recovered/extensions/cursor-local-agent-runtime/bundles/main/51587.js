// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 51587 range:1685372..1685656
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
51587: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.finalize = void 0;
    const n = r(51078);
    t.finalize = function(e2) {
      return (t2) => new n.Observable((r2) => {
        t2.subscribe(r2), r2.add(e2);
      });
    };
  }