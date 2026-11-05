// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 3482 range:135119..135775
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
3482: (e) => {
    "use strict";
    e.exports = function(e2, t) {
      let r = t.engines[e2] || t.engines[(function(e3) {
        switch (e3.toLowerCase()) {
          case "js":
          case "javascript":
            return "javascript";
          case "coffee":
          case "coffeescript":
          case "cson":
            return "coffee";
          case "yaml":
          case "yml":
            return "yaml";
          default:
            return e3;
        }
      })(e2)];
      if (void 0 === r) throw new Error('gray-matter engine "' + e2 + '" is not registered');
      return "function" == typeof r && (r = { parse: r }), r;
    };
  }