// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 3482 range:30631..31287
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