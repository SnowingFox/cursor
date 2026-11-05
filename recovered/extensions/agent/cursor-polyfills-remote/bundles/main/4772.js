// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 4772 range:102636..103346
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4772: (t2, r2, e2) => {
    var n2 = e2(5613), o2 = e2(5691), i2 = e2(5234), a2 = e2(8633), u2 = e2(3770), s2 = e2(675), c = e2(7611), f = a2.ArrayBuffer, h = a2.DataView, l = h.prototype, p = o2(f.prototype.slice), v = o2(l.getUint8), d = o2(l.setUint8);
    n2({ target: "ArrayBuffer", proto: true, unsafe: true, forced: i2(function() {
      return !new f(2).slice(1, void 0).byteLength;
    }) }, { slice: function(t3, r3) {
      if (p && void 0 === r3) return p(u2(this), t3);
      for (var e3 = u2(this).byteLength, n3 = s2(t3, e3), o3 = s2(void 0 === r3 ? e3 : r3, e3), i3 = new f(c(o3 - n3)), a3 = new h(this), l2 = new h(i3), g = 0; n3 < o3; ) d(l2, g++, v(a3, n3++));
      return i3;
    } });
  }