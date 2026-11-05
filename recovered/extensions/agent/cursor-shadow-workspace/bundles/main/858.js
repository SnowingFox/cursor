// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 858 range:37091..37458
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
858: (e2, A2, t2) => {
    "use strict";
    const n2 = t2(1942);
    e2.exports = function({ maxRedirections: e3 }) {
      return (A3) => function(t3, r2) {
        const { maxRedirections: o2 = e3 } = t3;
        if (!o2) return A3(t3, r2);
        const s = new n2(A3, o2, t3, r2);
        return t3 = { ...t3, maxRedirections: 0 }, A3(t3, s);
      };
    };
  }