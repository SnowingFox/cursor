// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 20068 range:590167..590566
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