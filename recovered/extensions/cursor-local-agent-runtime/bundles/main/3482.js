// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 3482 range:32865..33521
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