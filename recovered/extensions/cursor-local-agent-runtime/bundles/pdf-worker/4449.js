// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/pdf-worker.js sha256:8ebb471c426cfe288b1343142faa62735cf7c56873f20ba36d31a4b28ebbdaa5
// module: 4449 range:32333..32824
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4449: (t2, e2, i2) => {
    var s2 = i2(7080), n2 = i2(4402).has, r2 = i2(5170), a2 = i2(3789), o2 = i2(8469), l2 = i2(507), h2 = i2(9539);
    t2.exports = function(t3) {
      var e3 = s2(this), i3 = a2(t3);
      if (r2(e3) <= i3.size) return false !== o2(e3, function(t4) {
        if (i3.includes(t4)) return false;
      }, true);
      var c2 = i3.getIterator();
      return false !== l2(c2, function(t4) {
        if (n2(e3, t4)) return h2(c2, "normal", false);
      });
    };
  }