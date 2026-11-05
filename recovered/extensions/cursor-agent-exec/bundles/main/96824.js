// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 96824 range:11354968..11355229
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
96824: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.fromSubscribable = void 0;
    const n = r(51078);
    t.fromSubscribable = function(e2) {
      return new n.Observable((t2) => e2.subscribe(t2));
    };
  }