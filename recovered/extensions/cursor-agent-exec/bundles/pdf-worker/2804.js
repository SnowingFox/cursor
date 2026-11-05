// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/pdf-worker.js sha256:8ebb471c426cfe288b1343142faa62735cf7c56873f20ba36d31a4b28ebbdaa5
// module: 2804 range:20802..21118
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
2804: (t2) => {
    var e2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", i2 = e2 + "+/", s2 = e2 + "-_", n2 = function(t3) {
      for (var e3 = {}, i3 = 0; i3 < 64; i3++) e3[t3.charAt(i3)] = i3;
      return e3;
    };
    t2.exports = { i2c: i2, c2i: n2(i2), i2cUrl: s2, c2iUrl: n2(s2) };
  }