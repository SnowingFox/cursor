// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 51587 range:3838897..3839181
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