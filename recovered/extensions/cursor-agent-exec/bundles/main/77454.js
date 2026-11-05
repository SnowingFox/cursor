// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 77454 range:6507676..6508871
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
77454: (e, t, r) => {
    "use strict";
    var n = r(39425), s = ["kind", "resolve", "construct", "instanceOf", "predicate", "represent", "defaultStyle", "styleAliases"], o = ["scalar", "sequence", "mapping"];
    e.exports = function(e2, t2) {
      if (t2 = t2 || {}, Object.keys(t2).forEach(function(t3) {
        if (-1 === s.indexOf(t3)) throw new n('Unknown option "' + t3 + '" is met in definition of "' + e2 + '" YAML type.');
      }), this.tag = e2, this.kind = t2.kind || null, this.resolve = t2.resolve || function() {
        return true;
      }, this.construct = t2.construct || function(e3) {
        return e3;
      }, this.instanceOf = t2.instanceOf || null, this.predicate = t2.predicate || null, this.represent = t2.represent || null, this.defaultStyle = t2.defaultStyle || null, this.styleAliases = (function(e3) {
        var t3 = {};
        return null !== e3 && Object.keys(e3).forEach(function(r2) {
          e3[r2].forEach(function(e4) {
            t3[String(e4)] = r2;
          });
        }), t3;
      })(t2.styleAliases || null), -1 === o.indexOf(this.kind)) throw new n('Unknown kind "' + this.kind + '" is specified for "' + e2 + '" YAML type.');
    };
  }