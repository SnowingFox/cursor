// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/652.js sha256:5daf2e14541adb7b825c0f72547c4fb6891a4bf16d03b1cdb2fdb3b113ad96a2
// module: 3579 range:25532..26119
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
3579: (t2, e2, i2) => {
    var s2 = i2(6518), n2 = i2(9565), r2 = i2(2652), a2 = i2(9306), o2 = i2(8551), l2 = i2(1767), h2 = i2(9539), c2 = i2(4549)("some", TypeError);
    s2({ target: "Iterator", proto: true, real: true, forced: c2 }, { some: function(t3) {
      o2(this);
      try {
        a2(t3);
      } catch (t4) {
        h2(this, "throw", t4);
      }
      if (c2) return n2(c2, this, t3);
      var e3 = l2(this), i3 = 0;
      return r2(e3, function(e4, s3) {
        if (t3(e4, i3++)) return s3();
      }, { IS_RECORD: true, INTERRUPTED: true }).stopped;
    } });
  }