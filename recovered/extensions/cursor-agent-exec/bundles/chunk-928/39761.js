// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/928.js sha256:1e34f3da2dac0c414cd02b42da502ab9dbc42f1b80782b7c58dc88e4d9ebf8e0
// module: 39761 range:15289..15605
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
39761: (e) => {
  "use strict";
  e.exports = function(e2, t, r, n) {
    for (var a = 65535 & e2, i = e2 >>> 16 & 65535, o = 0; 0 !== r; ) {
      r -= o = r > 2e3 ? 2e3 : r;
      do {
        i = i + (a = a + t[n++] | 0) | 0;
      } while (--o);
      a %= 65521, i %= 65521;
    }
    return a | i << 16;
  };
}