// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 54464 range:4579536..4579853
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
54464: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.subscribeOn = void 0;
    const n = r(51078);
    t.subscribeOn = function(e2, t2 = 0) {
      return (r2) => new n.Observable((n2) => {
        n2.add(e2.schedule(() => r2.subscribe(n2), t2));
      });
    };
  }