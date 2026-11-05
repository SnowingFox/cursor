// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 24980 range:4540961..4541646
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
24980: (e, t, r) => {
    "use strict";
    var n = r(77454);
    e.exports = new n("tag:yaml.org,2002:null", { kind: "scalar", resolve: function(e2) {
      if (null === e2) return true;
      var t2 = e2.length;
      return 1 === t2 && "~" === e2 || 4 === t2 && ("null" === e2 || "Null" === e2 || "NULL" === e2);
    }, construct: function() {
      return null;
    }, predicate: function(e2) {
      return null === e2;
    }, represent: { canonical: function() {
      return "~";
    }, lowercase: function() {
      return "null";
    }, uppercase: function() {
      return "NULL";
    }, camelcase: function() {
      return "Null";
    } }, defaultStyle: "lowercase" });
  }