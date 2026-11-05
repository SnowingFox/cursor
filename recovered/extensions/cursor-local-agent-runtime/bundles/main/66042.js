// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 66042 range:1996799..1997881
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
66042: (e) => {
    "use strict";
    e.exports = function e2(t, r) {
      if (t === r) return true;
      if (t && r && "object" == typeof t && "object" == typeof r) {
        if (t.constructor !== r.constructor) return false;
        var n, o, s;
        if (Array.isArray(t)) {
          if ((n = t.length) != r.length) return false;
          for (o = n; 0 !== o--; ) if (!e2(t[o], r[o])) return false;
          return true;
        }
        if (t.constructor === RegExp) return t.source === r.source && t.flags === r.flags;
        if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === r.valueOf();
        if (t.toString !== Object.prototype.toString) return t.toString() === r.toString();
        if ((n = (s = Object.keys(t)).length) !== Object.keys(r).length) return false;
        for (o = n; 0 !== o--; ) if (!Object.prototype.hasOwnProperty.call(r, s[o])) return false;
        for (o = n; 0 !== o--; ) {
          var i = s[o];
          if (!e2(t[i], r[i])) return false;
        }
        return true;
      }
      return t != t && r != r;
    };
  }