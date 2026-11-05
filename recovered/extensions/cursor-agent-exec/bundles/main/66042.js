// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 66042 range:6042029..6043111
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
66042: (e) => {
    "use strict";
    e.exports = function e2(t, r) {
      if (t === r) return true;
      if (t && r && "object" == typeof t && "object" == typeof r) {
        if (t.constructor !== r.constructor) return false;
        var n, s, o;
        if (Array.isArray(t)) {
          if ((n = t.length) != r.length) return false;
          for (s = n; 0 !== s--; ) if (!e2(t[s], r[s])) return false;
          return true;
        }
        if (t.constructor === RegExp) return t.source === r.source && t.flags === r.flags;
        if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === r.valueOf();
        if (t.toString !== Object.prototype.toString) return t.toString() === r.toString();
        if ((n = (o = Object.keys(t)).length) !== Object.keys(r).length) return false;
        for (s = n; 0 !== s--; ) if (!Object.prototype.hasOwnProperty.call(r, o[s])) return false;
        for (s = n; 0 !== s--; ) {
          var i = o[s];
          if (!e2(t[i], r[i])) return false;
        }
        return true;
      }
      return t != t && r != r;
    };
  }