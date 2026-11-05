// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/pdf-worker.js sha256:8ebb471c426cfe288b1343142faa62735cf7c56873f20ba36d31a4b28ebbdaa5
// module: 3238 range:24560..24838
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
3238: (t2, e2, i2) => {
    var s2 = i2(4576), n2 = i2(7811), r2 = i2(7394), a2 = s2.DataView;
    t2.exports = function(t3) {
      if (!n2 || 0 !== r2(t3)) return false;
      try {
        return new a2(t3), false;
      } catch (t4) {
        return true;
      }
    };
  }