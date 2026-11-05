// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 20068 range:1001181..1001580
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
20068: (e) => {
    "use strict";
    const t = /([()\][%!^"`<>&|;, *?])/g;
    e.exports.command = function(e2) {
      return e2 = e2.replace(t, "^$1");
    }, e.exports.argument = function(e2, r) {
      return e2 = (e2 = `"${e2 = (e2 = (e2 = `${e2}`).replace(/(?=(\\+?)?)\1"/g, '$1$1\\"')).replace(/(?=(\\+?)?)\1$/, "$1$1")}"`).replace(t, "^$1"), r && (e2 = e2.replace(t, "^$1")), e2;
    };
  }