// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 9442 range:6095978..6096414
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9442: (t2, e2, r2) => {
    "use strict";
    const n2 = r2(2613), { URLSerializer: s2 } = r2(4387), { isValidHeaderName: i2 } = r2(8116);
    t2.exports = { urlEquals: function(t3, e3, r3 = false) {
      return s2(t3, r3) === s2(e3, r3);
    }, fieldValues: function(t3) {
      n2(null !== t3);
      const e3 = [];
      for (let r3 of t3.split(",")) r3 = r3.trim(), r3.length && i2(r3) && e3.push(r3);
      return e3;
    } };
  }