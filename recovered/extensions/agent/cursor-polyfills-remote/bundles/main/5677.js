// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 5677 range:112014..112950
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5677: (t2, r2, e2) => {
    var n2 = e2(9117), o2 = e2(6881), i2 = e2(1025), a2 = e2(4579), u2 = e2(2676), s2 = e2(1617), c = e2(8850), f = e2(9059), h = n2.structuredClone, l = n2.ArrayBuffer, p = n2.DataView, v = Math.max, d = Math.min, g = l.prototype, y = p.prototype, w = o2(g.slice), x = i2(g, "resizable", "get"), m = i2(g, "maxByteLength", "get"), b = o2(y.getInt8), S = o2(y.setInt8);
    t2.exports = (f || c) && function(t3, r3, e3) {
      var n3, o3 = s2(t3), i3 = void 0 === r3 ? o3 : a2(r3), g2 = !x || !x(t3);
      if (u2(t3), f && (t3 = h(t3, { transfer: [t3] }), o3 === i3 && (e3 || g2))) return t3;
      if (o3 >= i3 && (!e3 || g2)) n3 = w(t3, 0, i3);
      else {
        var y2 = e3 && !g2 && m ? { maxByteLength: v(i3, m(t3)) } : void 0;
        n3 = new l(i3, y2);
        for (var O = new p(t3), E = new p(n3), R = d(i3, o3), P = 0; P < R; P++) S(E, P, b(O, P));
      }
      return f || c(t3), n3;
    };
  }