// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 2918 range:903749..904137
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2918: (t2, e2, r2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true });
    var n2 = r2(4209), s2 = r2(2247);
    e2.DelayFactory = function(t3, e3) {
      var r3 = (function(t4) {
        if (!t4.delayFirstAttempt) return new n2.SkipFirstDelay(t4);
        return new s2.AlwaysDelay(t4);
      })(t3);
      return r3.setAttemptNumber(e3), r3;
    };
  }