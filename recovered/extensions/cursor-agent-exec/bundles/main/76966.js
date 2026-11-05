// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 76966 range:6498551..6499006
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