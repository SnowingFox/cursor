// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/652.js sha256:5daf2e14541adb7b825c0f72547c4fb6891a4bf16d03b1cdb2fdb3b113ad96a2
// module: 3238 range:24194..24472
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
3238: (t2, e2, i2) => {
    var s2 = i2(4576), n2 = i2(7811), r2 = i2(7394), a2 = s2.DataView;
    t2.exports = function(t3) {
      if (!n2 || 0 !== r2(t3)) return false;
      try {
        return new a2(t3), false;
      } catch (t4) {
        return true;
      }
    };
  }