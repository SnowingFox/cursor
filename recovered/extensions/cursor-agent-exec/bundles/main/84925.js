// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 84925 range:10936727..10937086
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