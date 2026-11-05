// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/652.js sha256:0b20f97c0854ab9f5c13e68965898b9ade0d57e8819bd8341d5e749d4e83812c
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