// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 77454 range:7289604..7290799
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
77454: (e, t, r) => {
    "use strict";
    var n = r(39425), o = ["kind", "resolve", "construct", "instanceOf", "predicate", "represent", "defaultStyle", "styleAliases"], s = ["scalar", "sequence", "mapping"];
    e.exports = function(e2, t2) {
      if (t2 = t2 || {}, Object.keys(t2).forEach(function(t3) {
        if (-1 === o.indexOf(t3)) throw new n('Unknown option "' + t3 + '" is met in definition of "' + e2 + '" YAML type.');
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
      })(t2.styleAliases || null), -1 === s.indexOf(this.kind)) throw new n('Unknown kind "' + this.kind + '" is specified for "' + e2 + '" YAML type.');
    };
  }