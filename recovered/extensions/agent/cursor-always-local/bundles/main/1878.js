// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 1878 range:637367..637737
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1878: (t2, e2, r2) => {
    "use strict";
    const n2 = r2(7378);
    t2.exports = function({ maxRedirections: t3 }) {
      return (e3) => function(r3, s2) {
        const { maxRedirections: i2 = t3 } = r3;
        if (!i2) return e3(r3, s2);
        const o2 = new n2(e3, i2, r3, s2);
        return r3 = { ...r3, maxRedirections: 0 }, e3(r3, o2);
      };
    };
  }