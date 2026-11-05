// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/pdf-worker.js sha256:8ebb471c426cfe288b1343142faa62735cf7c56873f20ba36d31a4b28ebbdaa5
// module: 2796 range:20404..20800
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
2796: (t2, e2, i2) => {
    var s2 = i2(9039), n2 = i2(4901), r2 = /#|\.prototype\./, a2 = function(t3, e3) {
      var i3 = l2[o2(t3)];
      return i3 === c2 || i3 !== h2 && (n2(e3) ? s2(e3) : !!e3);
    }, o2 = a2.normalize = function(t3) {
      return String(t3).replace(r2, ".").toLowerCase();
    }, l2 = a2.data = {}, h2 = a2.NATIVE = "N", c2 = a2.POLYFILL = "P";
    t2.exports = a2;
  }