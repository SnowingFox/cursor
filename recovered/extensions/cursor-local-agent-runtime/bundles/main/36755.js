// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 36755 range:1109284..1110012
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
36755: (e) => {
    "use strict";
    function t(e2) {
      return null == e2;
    }
    e.exports.isNothing = t, e.exports.isObject = function(e2) {
      return "object" == typeof e2 && null !== e2;
    }, e.exports.toArray = function(e2) {
      return Array.isArray(e2) ? e2 : t(e2) ? [] : [e2];
    }, e.exports.repeat = function(e2, t2) {
      var r, n = "";
      for (r = 0; r < t2; r += 1) n += e2;
      return n;
    }, e.exports.isNegativeZero = function(e2) {
      return 0 === e2 && Number.NEGATIVE_INFINITY === 1 / e2;
    }, e.exports.extend = function(e2, t2) {
      var r, n, o, s;
      if (t2) for (r = 0, n = (s = Object.keys(t2)).length; r < n; r += 1) e2[o = s[r]] = t2[o];
      return e2;
    };
  }