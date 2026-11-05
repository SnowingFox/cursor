// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 34609 range:2931437..2931830
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
34609: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.skipWhile = void 0;
    const n = r(51078);
    t.skipWhile = function(e2) {
      return (t2) => new n.Observable((r2) => {
        let s = false, o = 0;
        t2.subscribe((0, n.operate)({ destination: r2, next: (t3) => (s || (s = !e2(t3, o++))) && r2.next(t3) }));
      });
    };
  }