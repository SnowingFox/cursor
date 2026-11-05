// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 0 range:86..449
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
0: (t2) => {
    "use strict";
    t2.exports = function(t3) {
      if ("string" != typeof t3) return "";
      for (var e2 = t3.length - 1; e2 >= 0; --e2) switch (t3.charCodeAt(e2)) {
        case 47:
        case 92:
          return ".." === (t3 = t3.slice(e2 + 1)) || "." === t3 ? "" : t3;
      }
      return ".." === t3 || "." === t3 ? "" : t3;
    };
  }