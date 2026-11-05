// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 80798 range:11680313..11680671
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
80798: (e, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.pathMatch = function(e2, t2) {
      if (t2 === e2) return true;
      if (0 === e2.indexOf(t2)) {
        if ("/" === t2[t2.length - 1]) return true;
        if (e2.startsWith(t2) && "/" === e2[t2.length]) return true;
      }
      return false;
    };
  }