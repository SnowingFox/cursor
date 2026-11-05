// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 8118 range:138965..140297
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8118: (t2, r2, e2) => {
    var n2 = e2(5613), o2 = e2(6881), i2 = e2(7588), a2 = e2(831), u2 = e2(4418), s2 = e2(4466).f, c = e2(5629), f = e2(3701), h = e2(1927), l = e2(6209), p = e2(9391), v = false, d = l("meta"), g = 0, y = function(t3) {
      s2(t3, d, { value: { objectID: "O" + g++, weakData: {} } });
    }, w = t2.exports = { enable: function() {
      w.enable = function() {
      }, v = true;
      var t3 = c.f, r3 = o2([].splice), e3 = {};
      e3[d] = 1, t3(e3).length && (c.f = function(e4) {
        for (var n3 = t3(e4), o3 = 0, i3 = n3.length; o3 < i3; o3++) if (n3[o3] === d) {
          r3(n3, o3, 1);
          break;
        }
        return n3;
      }, n2({ target: "Object", stat: true, forced: true }, { getOwnPropertyNames: f.f }));
    }, fastKey: function(t3, r3) {
      if (!a2(t3)) return "symbol" == typeof t3 ? t3 : ("string" == typeof t3 ? "S" : "P") + t3;
      if (!u2(t3, d)) {
        if (!h(t3)) return "F";
        if (!r3) return "E";
        y(t3);
      }
      return t3[d].objectID;
    }, getWeakData: function(t3, r3) {
      if (!u2(t3, d)) {
        if (!h(t3)) return true;
        if (!r3) return false;
        y(t3);
      }
      return t3[d].weakData;
    }, onFreeze: function(t3) {
      return p && v && h(t3) && !u2(t3, d) && y(t3), t3;
    } };
    i2[d] = true;
  }