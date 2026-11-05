// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 3707 range:993919..994247
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3707: (t2, e2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true }), e2.defaultPath = function(t3) {
      if (!t3 || "/" !== t3.slice(0, 1)) return "/";
      if ("/" === t3) return t3;
      const e3 = t3.lastIndexOf("/");
      if (0 === e3) return "/";
      return t3.slice(0, e3);
    };
  }