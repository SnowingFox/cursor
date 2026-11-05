// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 49887 range:3564014..3564280
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
49887: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.throwError = void 0;
    const n = r(51078);
    t.throwError = function(e2) {
      return new n.Observable((t2) => {
        t2.error(e2());
      });
    };
  }