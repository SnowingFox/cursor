// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 5760 range:1290450..1290705
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5760: (t2, e2, r2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true });
    var n2 = r2(1727), s2 = r2(8915);
    e2.JitterFactory = function(t3) {
      return "full" === t3.jitter ? n2.fullJitter : s2.noJitter;
    };
  }