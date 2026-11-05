// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 68 range:14562..14967
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
68: (e2) => {
    "use strict";
    const t2 = /([()\][%!^"`<>&|;, *?])/g;
    e2.exports.command = function(e3) {
      return e3 = e3.replace(t2, "^$1");
    }, e2.exports.argument = function(e3, r2) {
      return e3 = (e3 = `"${e3 = (e3 = (e3 = `${e3}`).replace(/(?=(\\+?)?)\1"/g, '$1$1\\"')).replace(/(?=(\\+?)?)\1$/, "$1$1")}"`).replace(t2, "^$1"), r2 && (e3 = e3.replace(t2, "^$1")), e3;
    };
  }