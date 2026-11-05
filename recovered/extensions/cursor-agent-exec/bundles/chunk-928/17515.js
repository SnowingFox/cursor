// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/928.js sha256:1e34f3da2dac0c414cd02b42da502ab9dbc42f1b80782b7c58dc88e4d9ebf8e0
// module: 17515 range:14249..14671
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
17515: (e) => {
  "use strict";
  var t = (function() {
    for (var e2, t2 = [], r = 0; r < 256; r++) {
      e2 = r;
      for (var n = 0; n < 8; n++) e2 = 1 & e2 ? 3988292384 ^ e2 >>> 1 : e2 >>> 1;
      t2[r] = e2;
    }
    return t2;
  })();
  e.exports = function(e2, r, n, a) {
    var i = t, o = a + n;
    e2 ^= -1;
    for (var s = a; s < o; s++) e2 = e2 >>> 8 ^ i[255 & (e2 ^ r[s])];
    return -1 ^ e2;
  };
}