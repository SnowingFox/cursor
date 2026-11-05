// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 6388 range:490960..491326
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6388: (e2) => {
    "use strict";
    e2.exports = function(e3) {
      if ("string" != typeof e3) return "";
      for (var n2 = e3.length - 1; n2 >= 0; --n2) switch (e3.charCodeAt(n2)) {
        case 47:
        case 92:
          return ".." === (e3 = e3.slice(n2 + 1)) || "." === e3 ? "" : e3;
      }
      return ".." === e3 || "." === e3 ? "" : e3;
    };
  }