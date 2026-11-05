// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/652.js sha256:0b20f97c0854ab9f5c13e68965898b9ade0d57e8819bd8341d5e749d4e83812c
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