// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 1786 range:50298..50695
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1786: (t2, r2, e2) => {
    var n2 = e2(4418), o2 = e2(4188), i2 = e2(3628), a2 = e2(168), u2 = e2(680), s2 = a2("IE_PROTO"), c = Object, f = c.prototype;
    t2.exports = u2 ? c.getPrototypeOf : function(t3) {
      var r3 = i2(t3);
      if (n2(r3, s2)) return r3[s2];
      var e3 = r3.constructor;
      return o2(e3) && r3 instanceof e3 ? e3.prototype : r3 instanceof c ? f : null;
    };
  }