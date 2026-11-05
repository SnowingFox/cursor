// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 20068 range:4377147..4377546
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