// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 6042 range:455585..456727
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
6042: (e2) => {
    "use strict";
    e2.exports = function e3(t2, r2) {
      if (t2 === r2) return true;
      if (t2 && r2 && "object" == typeof t2 && "object" == typeof r2) {
        if (t2.constructor !== r2.constructor) return false;
        var n2, o2, s2;
        if (Array.isArray(t2)) {
          if ((n2 = t2.length) != r2.length) return false;
          for (o2 = n2; 0 !== o2--; ) if (!e3(t2[o2], r2[o2])) return false;
          return true;
        }
        if (t2.constructor === RegExp) return t2.source === r2.source && t2.flags === r2.flags;
        if (t2.valueOf !== Object.prototype.valueOf) return t2.valueOf() === r2.valueOf();
        if (t2.toString !== Object.prototype.toString) return t2.toString() === r2.toString();
        if ((n2 = (s2 = Object.keys(t2)).length) !== Object.keys(r2).length) return false;
        for (o2 = n2; 0 !== o2--; ) if (!Object.prototype.hasOwnProperty.call(r2, s2[o2])) return false;
        for (o2 = n2; 0 !== o2--; ) {
          var i2 = s2[o2];
          if (!e3(t2[i2], r2[i2])) return false;
        }
        return true;
      }
      return t2 != t2 && r2 != r2;
    };
  }