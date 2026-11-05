// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/pdf-worker.js sha256:8ebb471c426cfe288b1343142faa62735cf7c56873f20ba36d31a4b28ebbdaa5
// module: 9539 range:84234..84683
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
9539: (t2, e2, i2) => {
    var s2 = i2(9565), n2 = i2(8551), r2 = i2(5966);
    t2.exports = function(t3, e3, i3) {
      var a2, o2;
      n2(t3);
      try {
        if (!(a2 = r2(t3, "return"))) {
          if ("throw" === e3) throw i3;
          return i3;
        }
        a2 = s2(a2, t3);
      } catch (t4) {
        o2 = true, a2 = t4;
      }
      if ("throw" === e3) throw i3;
      if (o2) throw a2;
      return n2(a2), i3;
    };
  }