// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 64801 range:6015396..6015831
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
64801: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.pairwise = void 0;
    const n = r(51078);
    t.pairwise = function() {
      return (e2) => new n.Observable((t2) => {
        let r2, s = false;
        e2.subscribe((0, n.operate)({ destination: t2, next: (e3) => {
          const n2 = r2;
          r2 = e3, s && t2.next([n2, e3]), s = true;
        } }));
      });
    };
  }