// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 33737 range:2916844..2917117
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
33737: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.defer = void 0;
    const n = r(51078);
    t.defer = function(e2) {
      return new n.Observable((t2) => {
        (0, n.from)(e2()).subscribe(t2);
      });
    };
  }