// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 4840 range:104575..105155
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4840: (t2, r2, e2) => {
    var n2 = e2(5613), o2 = e2(9944), i2 = e2(8873), a2 = e2(4977), u2 = e2(3770), s2 = e2(6002), c = e2(8500), f = e2(850)("some", TypeError);
    n2({ target: "Iterator", proto: true, real: true, forced: f }, { some: function(t3) {
      u2(this);
      try {
        a2(t3);
      } catch (t4) {
        c(this, "throw", t4);
      }
      if (f) return o2(f, this, t3);
      var r3 = s2(this), e3 = 0;
      return i2(r3, function(r4, n3) {
        if (t3(r4, e3++)) return n3();
      }, { IS_RECORD: true, INTERRUPTED: true }).stopped;
    } });
  }