// @recovered-by cursor-re
// artifact: app/extensions/cursor-browser-automation/dist/928.js sha256:e04ed350b40bd579ab3a39967750106d673508f05e9f3a77bfeb2f4eca08d90f
// module: 7515 range:152011..152432
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7515: (e) => {
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