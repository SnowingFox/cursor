// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 858 range:37117..37486
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
858: (e2, n2, a2) => {
    "use strict";
    const t2 = a2(1942);
    e2.exports = function({ maxRedirections: e3 }) {
      return (n3) => function(a3, s2) {
        const { maxRedirections: o2 = e3 } = a3;
        if (!o2) return n3(a3, s2);
        const r2 = new t2(n3, o2, a3, s2);
        return a3 = { ...a3, maxRedirections: 0 }, n3(a3, r2);
      };
    };
  }