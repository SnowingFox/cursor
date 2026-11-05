// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/pdf-worker.js sha256:8ebb471c426cfe288b1343142faa62735cf7c56873f20ba36d31a4b28ebbdaa5
// module: 684 range:7519..7766
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
684: (t2) => {
    t2.exports = function(t3, e2) {
      var i2 = "function" == typeof Iterator && Iterator.prototype[t3];
      if (i2) try {
        i2.call({ next: null }, e2).next();
      } catch (t4) {
        return true;
      }
    };
  }