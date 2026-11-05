// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 79896 range:11641818..11642246
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
79896: (e) => {
    "use strict";
    e.exports = require("fs");
  }, 8e4: (e) => {
    "use strict";
    e.exports = function(e2) {
      if ("string" != typeof e2) return "";
      for (var t = e2.length - 1; t >= 0; --t) switch (e2.charCodeAt(t)) {
        case 47:
        case 92:
          return ".." === (e2 = e2.slice(t + 1)) || "." === e2 ? "" : e2;
      }
      return ".." === e2 || "." === e2 ? "" : e2;
    };
  }