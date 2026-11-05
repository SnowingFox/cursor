// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 51587 range:8530470..8530754
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