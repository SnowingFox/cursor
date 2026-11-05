// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 858 range:48531..48900
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
858: (e2, a2, n2) => {
    "use strict";
    const t2 = n2(1942);
    e2.exports = function({ maxRedirections: e3 }) {
      return (a3) => function(n3, s2) {
        const { maxRedirections: o2 = e3 } = n3;
        if (!o2) return a3(n3, s2);
        const r2 = new t2(a3, o2, n3, s2);
        return n3 = { ...n3, maxRedirections: 0 }, a3(n3, r2);
      };
    };
  }