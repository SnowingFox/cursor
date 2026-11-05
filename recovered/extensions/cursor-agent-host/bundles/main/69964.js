// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 69964 range:10914256..10914577
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
69964: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.distinctUntilKeyChanged = void 0;
    const n = r(47529);
    t.distinctUntilKeyChanged = function(e2, t2) {
      return (0, n.distinctUntilChanged)((r2, n2) => t2 ? t2(r2[e2], n2[e2]) : r2[e2] === n2[e2]);
    };
  }