// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 6388 range:801126..801492
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6388: (e2) => {
    "use strict";
    e2.exports = function(e3) {
      if ("string" != typeof e3) return "";
      for (var a2 = e3.length - 1; a2 >= 0; --a2) switch (e3.charCodeAt(a2)) {
        case 47:
        case 92:
          return ".." === (e3 = e3.slice(a2 + 1)) || "." === e3 ? "" : e3;
      }
      return ".." === e3 || "." === e3 ? "" : e3;
    };
  }