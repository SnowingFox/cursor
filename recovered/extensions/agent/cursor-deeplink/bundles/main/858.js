// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 858 range:41870..42237
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
858: (e2, t2, A2) => {
    "use strict";
    const n2 = A2(1942);
    e2.exports = function({ maxRedirections: e3 }) {
      return (t3) => function(A3, r2) {
        const { maxRedirections: o2 = e3 } = A3;
        if (!o2) return t3(A3, r2);
        const s = new n2(t3, o2, A3, r2);
        return A3 = { ...A3, maxRedirections: 0 }, t3(A3, s);
      };
    };
  }