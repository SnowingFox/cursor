// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 48565 range:3515086..3515907
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
48565: (e, t, r) => {
    "use strict";
    var n = r(77454);
    e.exports = new n("tag:yaml.org,2002:bool", { kind: "scalar", resolve: function(e2) {
      if (null === e2) return false;
      var t2 = e2.length;
      return 4 === t2 && ("true" === e2 || "True" === e2 || "TRUE" === e2) || 5 === t2 && ("false" === e2 || "False" === e2 || "FALSE" === e2);
    }, construct: function(e2) {
      return "true" === e2 || "True" === e2 || "TRUE" === e2;
    }, predicate: function(e2) {
      return "[object Boolean]" === Object.prototype.toString.call(e2);
    }, represent: { lowercase: function(e2) {
      return e2 ? "true" : "false";
    }, uppercase: function(e2) {
      return e2 ? "TRUE" : "FALSE";
    }, camelcase: function(e2) {
      return e2 ? "True" : "False";
    } }, defaultStyle: "lowercase" });
  }