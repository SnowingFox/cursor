// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 6388 range:490351..490717
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6388: (e2) => {
    "use strict";
    e2.exports = function(e3) {
      if ("string" != typeof e3) return "";
      for (var A2 = e3.length - 1; A2 >= 0; --A2) switch (e3.charCodeAt(A2)) {
        case 47:
        case 92:
          return ".." === (e3 = e3.slice(A2 + 1)) || "." === e3 ? "" : e3;
      }
      return ".." === e3 || "." === e3 ? "" : e3;
    };
  }