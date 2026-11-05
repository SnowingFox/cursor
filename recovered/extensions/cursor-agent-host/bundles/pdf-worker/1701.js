// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/pdf-worker.js sha256:8ebb471c426cfe288b1343142faa62735cf7c56873f20ba36d31a4b28ebbdaa5
// module: 1701 range:12918..13683
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
1701: (t2, e2, i2) => {
    var s2 = i2(6518), n2 = i2(9565), r2 = i2(9306), a2 = i2(8551), o2 = i2(1767), l2 = i2(9462), h2 = i2(6319), c2 = i2(9539), d2 = i2(684), u2 = i2(4549), p2 = i2(6395), g2 = !p2 && !d2("map", function() {
    }), m2 = !p2 && !g2 && u2("map", TypeError), f2 = p2 || g2 || m2, b2 = l2(function() {
      var t3 = this.iterator, e3 = a2(n2(this.next, t3));
      if (!(this.done = !!e3.done)) return h2(t3, this.mapper, [e3.value, this.counter++], true);
    });
    s2({ target: "Iterator", proto: true, real: true, forced: f2 }, { map: function(t3) {
      a2(this);
      try {
        r2(t3);
      } catch (t4) {
        c2(this, "throw", t4);
      }
      return m2 ? n2(m2, this, t3) : new b2(o2(this), { mapper: t3 });
    } });
  }