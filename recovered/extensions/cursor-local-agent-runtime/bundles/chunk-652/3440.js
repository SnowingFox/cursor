// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/652.js sha256:5daf2e14541adb7b825c0f72547c4fb6891a4bf16d03b1cdb2fdb3b113ad96a2
// module: 3440 range:24695..25142
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
3440: (t2, e2, i2) => {
    var s2 = i2(7080), n2 = i2(4402), r2 = i2(9286), a2 = i2(5170), o2 = i2(3789), l2 = i2(8469), h2 = i2(507), c2 = n2.has, d2 = n2.remove;
    t2.exports = function(t3) {
      var e3 = s2(this), i3 = o2(t3), n3 = r2(e3);
      return a2(e3) <= i3.size ? l2(e3, function(t4) {
        i3.includes(t4) && d2(n3, t4);
      }) : h2(i3.getIterator(), function(t4) {
        c2(n3, t4) && d2(n3, t4);
      }), n3;
    };
  }