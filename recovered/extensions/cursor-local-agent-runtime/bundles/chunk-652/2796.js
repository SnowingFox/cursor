// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/652.js sha256:5daf2e14541adb7b825c0f72547c4fb6891a4bf16d03b1cdb2fdb3b113ad96a2
// module: 2796 range:20038..20434
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