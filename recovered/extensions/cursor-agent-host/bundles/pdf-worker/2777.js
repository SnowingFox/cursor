// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/pdf-worker.js sha256:8ebb471c426cfe288b1343142faa62735cf7c56873f20ba36d31a4b28ebbdaa5
// module: 2777 range:19473..19995
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
2777: (t2, e2, i2) => {
    var s2 = i2(9565), n2 = i2(34), r2 = i2(757), a2 = i2(5966), o2 = i2(4270), l2 = i2(8227), h2 = TypeError, c2 = l2("toPrimitive");
    t2.exports = function(t3, e3) {
      if (!n2(t3) || r2(t3)) return t3;
      var i3, l3 = a2(t3, c2);
      if (l3) {
        if (void 0 === e3 && (e3 = "default"), i3 = s2(l3, t3, e3), !n2(i3) || r2(i3)) return i3;
        throw new h2("Can't convert object to primitive value");
      }
      return void 0 === e3 && (e3 = "number"), o2(t3, e3);
    };
  }