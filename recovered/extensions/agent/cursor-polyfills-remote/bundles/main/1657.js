// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 1657 range:49629..49975
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1657: (t2, r2, e2) => {
    var n2 = e2(2937), o2 = e2(3243), i2 = e2(679), a2 = e2(5558), u2 = e2(7032), s2 = o2.add, c = o2.has, f = o2.remove;
    t2.exports = function(t3) {
      var r3 = n2(this), e3 = a2(t3).getIterator(), o3 = i2(r3);
      return u2(e3, function(t4) {
        c(r3, t4) ? f(o3, t4) : s2(o3, t4);
      }), o3;
    };
  }