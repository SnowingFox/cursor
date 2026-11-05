// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 8878 range:158003..158428
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8878: (t2, r2, e2) => {
    var n2 = e2(5613), o2 = e2(4977), i2 = e2(8093), a2 = e2(1942), u2 = i2.get, s2 = i2.has, c = i2.set;
    n2({ target: "Map", proto: true, real: true, forced: a2 }, { getOrInsertComputed: function(t3, r3) {
      var e3 = s2(this, t3);
      if (o2(r3), e3) return u2(this, t3);
      0 === t3 && 1 / t3 == -1 / 0 && (t3 = 0);
      var n3 = r3(t3);
      return c(this, t3, n3), n3;
    } });
  }