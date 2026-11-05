// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 3006 range:589283..589719
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3006: (e2, a2, n2) => {
    "use strict";
    const t2 = n2(2613), { URLSerializer: s2 } = n2(3631), { isValidHeaderName: o2 } = n2(5728);
    e2.exports = { urlEquals: function(e3, a3, n3 = false) {
      return s2(e3, n3) === s2(a3, n3);
    }, fieldValues: function(e3) {
      t2(null !== e3);
      const a3 = [];
      for (let n3 of e3.split(",")) n3 = n3.trim(), n3.length && o2(n3) && a3.push(n3);
      return a3;
    } };
  }