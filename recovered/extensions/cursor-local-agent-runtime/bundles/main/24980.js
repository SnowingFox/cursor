// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 24980 range:683638..684323
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