// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/pdf-worker.js sha256:8ebb471c426cfe288b1343142faa62735cf7c56873f20ba36d31a4b28ebbdaa5
// module: 6518 range:51315..52005
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
6518: (t2, e2, i2) => {
    var s2 = i2(4576), n2 = i2(7347).f, r2 = i2(6699), a2 = i2(6840), o2 = i2(9433), l2 = i2(7740), h2 = i2(2796);
    t2.exports = function(t3, e3) {
      var i3, c2, d2, u2, p2, g2 = t3.target, m2 = t3.global, f2 = t3.stat;
      if (i3 = m2 ? s2 : f2 ? s2[g2] || o2(g2, {}) : s2[g2] && s2[g2].prototype) for (c2 in e3) {
        if (u2 = e3[c2], d2 = t3.dontCallGetSet ? (p2 = n2(i3, c2)) && p2.value : i3[c2], !h2(m2 ? c2 : g2 + (f2 ? "." : "#") + c2, t3.forced) && void 0 !== d2) {
          if (typeof u2 == typeof d2) continue;
          l2(u2, d2);
        }
        (t3.sham || d2 && d2.sham) && r2(u2, "sham", true), a2(i3, c2, u2, t3);
      }
    };
  }