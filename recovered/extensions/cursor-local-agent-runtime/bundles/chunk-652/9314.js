// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/652.js sha256:5daf2e14541adb7b825c0f72547c4fb6891a4bf16d03b1cdb2fdb3b113ad96a2
// module: 9314 range:78978..79822
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
9314: (t2, e2, i2) => {
    var s2 = i2(6518), n2 = i2(9565), r2 = i2(8551), a2 = i2(1767), o2 = i2(4149), l2 = i2(9590), h2 = i2(9539), c2 = i2(9462), d2 = i2(684), u2 = i2(4549), p2 = i2(6395), g2 = !p2 && !d2("drop", 0), m2 = !p2 && !g2 && u2("drop", RangeError), f2 = p2 || g2 || m2, b2 = c2(function() {
      for (var t3, e3 = this.iterator, i3 = this.next; this.remaining; ) if (this.remaining--, t3 = r2(n2(i3, e3)), this.done = !!t3.done) return;
      if (t3 = r2(n2(i3, e3)), !(this.done = !!t3.done)) return t3.value;
    });
    s2({ target: "Iterator", proto: true, real: true, forced: f2 }, { drop: function(t3) {
      var e3;
      r2(this);
      try {
        e3 = l2(o2(+t3));
      } catch (t4) {
        h2(this, "throw", t4);
      }
      return m2 ? n2(m2, this, e3) : new b2(a2(this), { remaining: e3 });
    } });
  }