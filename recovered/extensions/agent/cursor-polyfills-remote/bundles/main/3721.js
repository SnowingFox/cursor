// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 3721 range:77619..78056
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3721: (t2, r2, e2) => {
    var n2 = e2(2937), o2 = e2(3243), i2 = e2(7173), a2 = e2(5558), u2 = e2(9800), s2 = e2(7032), c = o2.Set, f = o2.add, h = o2.has;
    t2.exports = function(t3) {
      var r3 = n2(this), e3 = a2(t3), o3 = new c();
      return i2(r3) > e3.size ? s2(e3.getIterator(), function(t4) {
        h(r3, t4) && f(o3, t4);
      }) : u2(r3, function(t4) {
        e3.includes(t4) && f(o3, t4);
      }), o3;
    };
  }