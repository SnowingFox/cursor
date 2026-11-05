// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 38143 range:7400363..7400736
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
38143: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.map = void 0;
    const n = r(51078);
    t.map = function(e2) {
      return (t2) => new n.Observable((r2) => {
        let s = 0;
        t2.subscribe((0, n.operate)({ destination: r2, next: (t3) => {
          r2.next(e2(t3, s++));
        } }));
      });
    };
  }