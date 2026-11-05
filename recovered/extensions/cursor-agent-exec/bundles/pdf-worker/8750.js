// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/pdf-worker.js sha256:8ebb471c426cfe288b1343142faa62735cf7c56873f20ba36d31a4b28ebbdaa5
// module: 8750 range:74899..75342
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
8750: (t2, e2, i2) => {
    var s2 = i2(7080), n2 = i2(4402), r2 = i2(5170), a2 = i2(3789), o2 = i2(8469), l2 = i2(507), h2 = n2.Set, c2 = n2.add, d2 = n2.has;
    t2.exports = function(t3) {
      var e3 = s2(this), i3 = a2(t3), n3 = new h2();
      return r2(e3) > i3.size ? l2(i3.getIterator(), function(t4) {
        d2(e3, t4) && c2(n3, t4);
      }) : o2(e3, function(t4) {
        i3.includes(t4) && c2(n3, t4);
      }), n3;
    };
  }