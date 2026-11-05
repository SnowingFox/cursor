// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 9295 range:161725..162314
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9295: (t2, r2, e2) => {
    var n2 = e2(7825), o2 = Math.floor, i2 = function(t3, r3) {
      var e3 = t3.length;
      if (e3 < 8) for (var a2, u2, s2 = 1; s2 < e3; ) {
        for (u2 = s2, a2 = t3[s2]; u2 && r3(t3[u2 - 1], a2) > 0; ) t3[u2] = t3[--u2];
        u2 !== s2++ && (t3[u2] = a2);
      }
      else for (var c = o2(e3 / 2), f = i2(n2(t3, 0, c), r3), h = i2(n2(t3, c), r3), l = f.length, p = h.length, v = 0, d = 0; v < l || d < p; ) t3[v + d] = v < l && d < p ? r3(f[v], h[d]) <= 0 ? f[v++] : h[d++] : v < l ? f[v++] : h[d++];
      return t3;
    };
    t2.exports = i2;
  }