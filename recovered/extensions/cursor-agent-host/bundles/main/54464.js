// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 54464 range:8664328..8664645
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