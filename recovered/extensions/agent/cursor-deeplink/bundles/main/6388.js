// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 6388 range:601073..601439
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6388: (e2) => {
    "use strict";
    e2.exports = function(e3) {
      if ("string" != typeof e3) return "";
      for (var t2 = e3.length - 1; t2 >= 0; --t2) switch (e3.charCodeAt(t2)) {
        case 47:
        case 92:
          return ".." === (e3 = e3.slice(t2 + 1)) || "." === e3 ? "" : e3;
      }
      return ".." === e3 || "." === e3 ? "" : e3;
    };
  }