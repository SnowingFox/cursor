// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/652.js sha256:5daf2e14541adb7b825c0f72547c4fb6891a4bf16d03b1cdb2fdb3b113ad96a2
// module: 2489 range:16606..17463
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
2489: (t2, e2, i2) => {
    var s2 = i2(6518), n2 = i2(9565), r2 = i2(9306), a2 = i2(8551), o2 = i2(1767), l2 = i2(9462), h2 = i2(6319), c2 = i2(6395), d2 = i2(9539), u2 = i2(684), p2 = i2(4549), g2 = !c2 && !u2("filter", function() {
    }), m2 = !c2 && !g2 && p2("filter", TypeError), f2 = c2 || g2 || m2, b2 = l2(function() {
      for (var t3, e3, i3 = this.iterator, s3 = this.predicate, r3 = this.next; ; ) {
        if (t3 = a2(n2(r3, i3)), this.done = !!t3.done) return;
        if (e3 = t3.value, h2(i3, s3, [e3, this.counter++], true)) return e3;
      }
    });
    s2({ target: "Iterator", proto: true, real: true, forced: f2 }, { filter: function(t3) {
      a2(this);
      try {
        r2(t3);
      } catch (t4) {
        d2(this, "throw", t4);
      }
      return m2 ? n2(m2, this, t3) : new b2(o2(this), { predicate: t3 });
    } });
  }