// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/652.js sha256:5daf2e14541adb7b825c0f72547c4fb6891a4bf16d03b1cdb2fdb3b113ad96a2
// module: 8527 range:72243..72635
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
8527: (t2, e2, i2) => {
    var s2 = i2(7080), n2 = i2(4402).has, r2 = i2(5170), a2 = i2(3789), o2 = i2(507), l2 = i2(9539);
    t2.exports = function(t3) {
      var e3 = s2(this), i3 = a2(t3);
      if (r2(e3) < i3.size) return false;
      var h2 = i3.getIterator();
      return false !== o2(h2, function(t4) {
        if (!n2(e3, t4)) return l2(h2, "normal", false);
      });
    };
  }