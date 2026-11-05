// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 76966 range:11269371..11269826
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
76966: (e, t, r) => {
    "use strict";
    var n = r(83269);
    function s(e2, t2) {
      for (var r2 in t2) o(t2, r2) && (e2[r2] = t2[r2]);
    }
    function o(e2, t2) {
      return Object.prototype.hasOwnProperty.call(e2, t2);
    }
    e.exports = function(e2) {
      n(e2) || (e2 = {});
      for (var t2 = arguments.length, r2 = 1; r2 < t2; r2++) {
        var o2 = arguments[r2];
        n(o2) && s(e2, o2);
      }
      return e2;
    };
  }