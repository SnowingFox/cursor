// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/652.js sha256:5daf2e14541adb7b825c0f72547c4fb6891a4bf16d03b1cdb2fdb3b113ad96a2
// module: 531 range:5411..6534
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
531: (t2, e2, i2) => {
    var s2 = i2(6518), n2 = i2(9565), r2 = i2(9306), a2 = i2(8551), o2 = i2(1767), l2 = i2(8646), h2 = i2(9462), c2 = i2(9539), d2 = i2(6395), u2 = i2(684), p2 = i2(4549), g2 = !d2 && !u2("flatMap", function() {
    }), m2 = !d2 && !g2 && p2("flatMap", TypeError), f2 = d2 || g2 || m2, b2 = h2(function() {
      for (var t3, e3, i3 = this.iterator, s3 = this.mapper; ; ) {
        if (e3 = this.inner) try {
          if (!(t3 = a2(n2(e3.next, e3.iterator))).done) return t3.value;
          this.inner = null;
        } catch (t4) {
          c2(i3, "throw", t4);
        }
        if (t3 = a2(n2(this.next, i3)), this.done = !!t3.done) return;
        try {
          this.inner = l2(s3(t3.value, this.counter++), false);
        } catch (t4) {
          c2(i3, "throw", t4);
        }
      }
    });
    s2({ target: "Iterator", proto: true, real: true, forced: f2 }, { flatMap: function(t3) {
      a2(this);
      try {
        r2(t3);
      } catch (t4) {
        c2(this, "throw", t4);
      }
      return m2 ? n2(m2, this, t3) : new b2(o2(this), { mapper: t3, inner: null });
    } });
  }