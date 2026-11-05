// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 64801 range:10325162..10325597
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