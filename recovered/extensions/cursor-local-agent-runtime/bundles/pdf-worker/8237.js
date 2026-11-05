// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/pdf-worker.js sha256:8ebb471c426cfe288b1343142faa62735cf7c56873f20ba36d31a4b28ebbdaa5
// module: 8237 range:65724..66608
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
8237: (t2, e2, i2) => {
    var s2 = i2(6518), n2 = i2(2652), r2 = i2(9306), a2 = i2(8551), o2 = i2(1767), l2 = i2(9539), h2 = i2(4549), c2 = i2(8745), d2 = i2(9039), u2 = TypeError, p2 = d2(function() {
      [].keys().reduce(function() {
      }, void 0);
    }), g2 = !p2 && h2("reduce", u2);
    s2({ target: "Iterator", proto: true, real: true, forced: p2 || g2 }, { reduce: function(t3) {
      a2(this);
      try {
        r2(t3);
      } catch (t4) {
        l2(this, "throw", t4);
      }
      var e3 = arguments.length < 2, i3 = e3 ? void 0 : arguments[1];
      if (g2) return c2(g2, this, e3 ? [t3] : [t3, i3]);
      var s3 = o2(this), h3 = 0;
      if (n2(s3, function(s4) {
        e3 ? (e3 = false, i3 = s4) : i3 = t3(i3, s4, h3), h3++;
      }, { IS_RECORD: true }), e3) throw new u2("Reduce of empty iterator with no initial value");
      return i3;
    } });
  }