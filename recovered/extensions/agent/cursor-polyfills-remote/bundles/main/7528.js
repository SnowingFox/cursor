// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 7528 range:135736..136135
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7528: (t2, r2, e2) => {
    var n2 = e2(2937), o2 = e2(3243).has, i2 = e2(7173), a2 = e2(5558), u2 = e2(7032), s2 = e2(8500);
    t2.exports = function(t3) {
      var r3 = n2(this), e3 = a2(t3);
      if (i2(r3) < e3.size) return false;
      var c = e3.getIterator();
      return false !== u2(c, function(t4) {
        if (!o2(r3, t4)) return s2(c.iterator, "normal", false);
      });
    };
  }