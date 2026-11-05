// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 8489 range:147444..147836
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8489: (t2, r2, e2) => {
    var n2 = e2(5234), o2 = e2(4188), i2 = /#|\.prototype\./, a2 = function(t3, r3) {
      var e3 = s2[u2(t3)];
      return e3 === f || e3 !== c && (o2(r3) ? n2(r3) : !!r3);
    }, u2 = a2.normalize = function(t3) {
      return String(t3).replace(i2, ".").toLowerCase();
    }, s2 = a2.data = {}, c = a2.NATIVE = "N", f = a2.POLYFILL = "P";
    t2.exports = a2;
  }