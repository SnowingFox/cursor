// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/pdf-worker.js sha256:8ebb471c426cfe288b1343142faa62735cf7c56873f20ba36d31a4b28ebbdaa5
// module: 4972 range:41945..42710
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4972: (t2, e2, i2) => {
    var s2 = i2(6518), n2 = i2(9565), r2 = i2(8551), a2 = i2(1767), o2 = i2(4149), l2 = i2(9590), h2 = i2(9462), c2 = i2(9539), d2 = i2(4549), u2 = i2(6395), p2 = !u2 && d2("take", RangeError), g2 = h2(function() {
      var t3 = this.iterator;
      if (!this.remaining--) return this.done = true, c2(t3, "normal", void 0);
      var e3 = r2(n2(this.next, t3));
      return (this.done = !!e3.done) ? void 0 : e3.value;
    });
    s2({ target: "Iterator", proto: true, real: true, forced: u2 || p2 }, { take: function(t3) {
      var e3;
      r2(this);
      try {
        e3 = l2(o2(+t3));
      } catch (t4) {
        c2(this, "throw", t4);
      }
      return p2 ? n2(p2, this, e3) : new g2(a2(this), { remaining: e3 });
    } });
  }