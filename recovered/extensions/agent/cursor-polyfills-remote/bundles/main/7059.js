// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 7059 range:127450..127890
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7059: (t2, r2, e2) => {
    var n2 = e2(2937), o2 = e2(3243), i2 = e2(679), a2 = e2(7173), u2 = e2(5558), s2 = e2(9800), c = e2(7032), f = o2.has, h = o2.remove;
    t2.exports = function(t3) {
      var r3 = n2(this), e3 = u2(t3), o3 = i2(r3);
      return a2(o3) <= e3.size ? s2(o3, function(t4) {
        e3.includes(t4) && h(o3, t4);
      }) : c(e3.getIterator(), function(t4) {
        f(o3, t4) && h(o3, t4);
      }), o3;
    };
  }