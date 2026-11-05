// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 5613 range:111132..111784
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5613: (t2, r2, e2) => {
    var n2 = e2(9117), o2 = e2(9304).f, i2 = e2(8088), a2 = e2(7509), u2 = e2(4798), s2 = e2(8657), c = e2(8489);
    t2.exports = function(t3, r3) {
      var e3, f, h, l, p, v = t3.target, d = t3.global, g = t3.stat;
      if (e3 = d ? n2 : g ? n2[v] || u2(v, {}) : n2[v] && n2[v].prototype) for (f in r3) {
        if (l = r3[f], h = t3.dontCallGetSet ? (p = o2(e3, f)) && p.value : e3[f], !c(d ? f : v + (g ? "." : "#") + f, t3.forced) && void 0 !== h) {
          if (typeof l == typeof h) continue;
          s2(l, h);
        }
        (t3.sham || h && h.sham) && i2(l, "sham", true), a2(e3, f, l, t3);
      }
    };
  }