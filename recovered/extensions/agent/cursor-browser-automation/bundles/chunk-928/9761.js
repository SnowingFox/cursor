// @recovered-by cursor-re
// artifact: app/extensions/cursor-browser-automation/dist/928.js sha256:e04ed350b40bd579ab3a39967750106d673508f05e9f3a77bfeb2f4eca08d90f
// module: 9761 range:152556..152871
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9761: (e) => {
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