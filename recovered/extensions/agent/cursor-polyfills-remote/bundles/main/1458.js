// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 1458 range:39713..40246
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1458: (t2, r2, e2) => {
    var n2 = e2(380), o2 = e2(675), i2 = e2(9389), a2 = function(t3) {
      return function(r3, e3, a3) {
        var u2 = n2(r3), s2 = i2(u2);
        if (0 === s2) return !t3 && -1;
        var c, f = o2(a3, s2);
        if (t3 && e3 != e3) {
          for (; s2 > f; ) if ((c = u2[f++]) != c) return true;
        } else for (; s2 > f; f++) if ((t3 || f in u2) && u2[f] === e3) return t3 || f || 0;
        return !t3 && -1;
      };
    };
    t2.exports = { includes: a2(true), indexOf: a2(false) };
  }