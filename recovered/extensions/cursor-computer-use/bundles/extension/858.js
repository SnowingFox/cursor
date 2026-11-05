// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 858 range:41282..41649
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
858: (e2, n2, t2) => {
    "use strict";
    const a2 = t2(1942);
    e2.exports = function({ maxRedirections: e3 }) {
      return (n3) => function(t3, s2) {
        const { maxRedirections: o2 = e3 } = t3;
        if (!o2) return n3(t3, s2);
        const r = new a2(n3, o2, t3, s2);
        return t3 = { ...t3, maxRedirections: 0 }, n3(t3, r);
      };
    };
  }