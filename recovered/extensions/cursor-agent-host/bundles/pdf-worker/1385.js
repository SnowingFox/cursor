// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/pdf-worker.js sha256:8ebb471c426cfe288b1343142faa62735cf7c56873f20ba36d31a4b28ebbdaa5
// module: 1385 range:11260..11591
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
1385: (t2, e2, i2) => {
    var s2 = i2(9539);
    t2.exports = function(t3, e3, i3) {
      for (var n2 = t3.length - 1; n2 >= 0; n2--) if (void 0 !== t3[n2]) try {
        i3 = s2(t3[n2].iterator, e3, i3);
      } catch (t4) {
        e3 = "throw", i3 = t4;
      }
      if ("throw" === e3) throw i3;
      return i3;
    };
  }