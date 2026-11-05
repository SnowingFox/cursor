// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 76966 range:7280555..7281010
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
76966: (e, t, r) => {
    "use strict";
    var n = r(83269);
    function o(e2, t2) {
      for (var r2 in t2) s(t2, r2) && (e2[r2] = t2[r2]);
    }
    function s(e2, t2) {
      return Object.prototype.hasOwnProperty.call(e2, t2);
    }
    e.exports = function(e2) {
      n(e2) || (e2 = {});
      for (var t2 = arguments.length, r2 = 1; r2 < t2; r2++) {
        var s2 = arguments[r2];
        n(s2) && o(e2, s2);
      }
      return e2;
    };
  }