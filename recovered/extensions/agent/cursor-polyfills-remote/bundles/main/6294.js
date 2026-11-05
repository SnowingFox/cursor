// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 6294 range:118168..120418
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6294: (t2, r2, e2) => {
    var n2 = e2(6881), o2 = 2147483647, i2 = /[^\0-\u007E]/, a2 = /[.\u3002\uFF0E\uFF61]/g, u2 = "Overflow: input needs wider integers to process", s2 = RangeError, c = n2(a2.exec), f = Math.floor, h = String.fromCharCode, l = n2("".charCodeAt), p = n2([].join), v = n2([].push), d = n2("".replace), g = n2("".split), y = n2("".toLowerCase), w = function(t3) {
      return t3 + 22 + 75 * (t3 < 26);
    }, x = function(t3, r3, e3) {
      var n3 = 0;
      for (t3 = e3 ? f(t3 / 700) : t3 >> 1, t3 += f(t3 / r3); t3 > 455; ) t3 = f(t3 / 35), n3 += 36;
      return f(n3 + 36 * t3 / (t3 + 38));
    }, m = function(t3) {
      var r3 = [];
      t3 = (function(t4) {
        for (var r4 = [], e4 = 0, n4 = t4.length; e4 < n4; ) {
          var o3 = l(t4, e4++);
          if (o3 >= 55296 && o3 <= 56319 && e4 < n4) {
            var i4 = l(t4, e4++);
            56320 == (64512 & i4) ? v(r4, ((1023 & o3) << 10) + (1023 & i4) + 65536) : (v(r4, o3), e4--);
          } else v(r4, o3);
        }
        return r4;
      })(t3);
      var e3, n3, i3 = t3.length, a3 = 128, c2 = 0, d2 = 72;
      for (e3 = 0; e3 < t3.length; e3++) (n3 = t3[e3]) < 128 && v(r3, h(n3));
      var g2 = r3.length, y2 = g2;
      for (g2 && v(r3, "-"); y2 < i3; ) {
        var m2 = o2;
        for (e3 = 0; e3 < t3.length; e3++) (n3 = t3[e3]) >= a3 && n3 < m2 && (m2 = n3);
        var b = y2 + 1;
        if (m2 - a3 > f((o2 - c2) / b)) throw new s2(u2);
        for (c2 += (m2 - a3) * b, a3 = m2, e3 = 0; e3 < t3.length; e3++) {
          if ((n3 = t3[e3]) < a3 && ++c2 > o2) throw new s2(u2);
          if (n3 === a3) {
            for (var S = c2, O = 36; ; ) {
              var E = O <= d2 ? 1 : O >= d2 + 26 ? 26 : O - d2;
              if (S < E) break;
              var R = S - E, P = 36 - E;
              v(r3, h(w(E + R % P))), S = f(R / P), O += 36;
            }
            v(r3, h(w(S))), d2 = x(c2, b, y2 === g2), c2 = 0, y2++;
          }
        }
        c2++, a3++;
      }
      return p(r3, "");
    };
    t2.exports = function(t3) {
      var r3, e3, n3 = [], o3 = g(d(y(t3), a2, "."), ".");
      for (r3 = 0; r3 < o3.length; r3++) e3 = o3[r3], v(n3, c(i2, e3) ? "xn--" + m(e3) : e3);
      return p(n3, ".");
    };
  }