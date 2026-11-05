// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 36755 range:7319602..7320330
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
      var r, n, s, o;
      if (t2) for (r = 0, n = (o = Object.keys(t2)).length; r < n; r += 1) e2[s = o[r]] = t2[s];
      return e2;
    };
  }