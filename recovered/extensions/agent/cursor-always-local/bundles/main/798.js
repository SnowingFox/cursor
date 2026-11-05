// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 798 range:355684..356044
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
798: (t2, e2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true }), e2.pathMatch = function(t3, e3) {
      if (e3 === t3) return true;
      if (0 === t3.indexOf(e3)) {
        if ("/" === e3[e3.length - 1]) return true;
        if (t3.startsWith(e3) && "/" === t3[e3.length]) return true;
      }
      return false;
    };
  }