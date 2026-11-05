// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 6388 range:521677..522043
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
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