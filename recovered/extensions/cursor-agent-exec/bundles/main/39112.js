// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 39112 range:3107420..3108389
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
39112: (e, t, r) => {
    "use strict";
    var n = r(77454);
    e.exports = new n("tag:yaml.org,2002:js/regexp", { kind: "scalar", resolve: function(e2) {
      if (null === e2) return false;
      if (0 === e2.length) return false;
      var t2 = e2, r2 = /\/([gim]*)$/.exec(e2), n2 = "";
      if ("/" === t2[0]) {
        if (r2 && (n2 = r2[1]), n2.length > 3) return false;
        if ("/" !== t2[t2.length - n2.length - 1]) return false;
      }
      return true;
    }, construct: function(e2) {
      var t2 = e2, r2 = /\/([gim]*)$/.exec(e2), n2 = "";
      return "/" === t2[0] && (r2 && (n2 = r2[1]), t2 = t2.slice(1, t2.length - n2.length - 1)), new RegExp(t2, n2);
    }, predicate: function(e2) {
      return "[object RegExp]" === Object.prototype.toString.call(e2);
    }, represent: function(e2) {
      var t2 = "/" + e2.source + "/";
      return e2.global && (t2 += "g"), e2.multiline && (t2 += "m"), e2.ignoreCase && (t2 += "i"), t2;
    } });
  }