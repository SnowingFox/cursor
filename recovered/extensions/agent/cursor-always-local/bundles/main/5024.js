// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 5024 range:1185412..1186014
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5024: (t2, e2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true }), e2.cookieCompare = function(t3, e3) {
      let n2;
      const s2 = t3.path ? t3.path.length : 0, i2 = e3.path ? e3.path.length : 0;
      if (n2 = i2 - s2, 0 !== n2) return n2;
      const o2 = t3.creation && t3.creation instanceof Date ? t3.creation.getTime() : r2, a = e3.creation && e3.creation instanceof Date ? e3.creation.getTime() : r2;
      if (n2 = o2 - a, 0 !== n2) return n2;
      return n2 = (t3.creationIndex || 0) - (e3.creationIndex || 0), n2;
    };
    const r2 = 2147483647e3;
  }