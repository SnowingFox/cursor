// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/pdf-worker.js sha256:8ebb471c426cfe288b1343142faa62735cf7c56873f20ba36d31a4b28ebbdaa5
// module: 9429 range:80191..80524
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
9429: (t2, e2, i2) => {
    var s2 = i2(4576), n2 = i2(6193);
    t2.exports = function(t3) {
      if (n2) {
        try {
          return s2.process.getBuiltinModule(t3);
        } catch (t4) {
        }
        try {
          return Function('return require("' + t3 + '")')();
        } catch (t4) {
        }
      }
    };
  }