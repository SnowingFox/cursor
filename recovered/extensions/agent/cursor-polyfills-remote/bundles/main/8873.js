// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 8873 range:156622..158001
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8873: (t2, r2, e2) => {
    var n2 = e2(5821), o2 = e2(9944), i2 = e2(3770), a2 = e2(3174), u2 = e2(8146), s2 = e2(9389), c = e2(4578), f = e2(9042), h = e2(4366), l = e2(8500), p = TypeError, v = function(t3, r3) {
      this.stopped = t3, this.result = r3;
    }, d = v.prototype;
    t2.exports = function(t3, r3, e3) {
      var g, y, w, x, m, b, S, O = e3 && e3.that, E = !(!e3 || !e3.AS_ENTRIES), R = !(!e3 || !e3.IS_RECORD), P = !(!e3 || !e3.IS_ITERATOR), j = !(!e3 || !e3.INTERRUPTED), k = n2(r3, O), I = function(t4) {
        var r4 = g;
        return g = void 0, r4 && l(r4, "normal"), new v(true, t4);
      }, T = function(t4) {
        return E ? (i2(t4), j ? k(t4[0], t4[1], I) : k(t4[0], t4[1])) : j ? k(t4, I) : k(t4);
      };
      if (R) g = t3.iterator;
      else if (P) g = t3;
      else {
        if (!(y = h(t3))) throw new p(a2(t3) + " is not iterable");
        if (u2(y)) {
          for (w = 0, x = s2(t3); x > w; w++) if ((m = T(t3[w])) && c(d, m)) return m;
          return new v(false);
        }
        g = f(t3, y);
      }
      for (b = R ? t3.next : g.next; !(S = o2(b, g)).done; ) {
        var A = S.value;
        try {
          m = T(A);
        } catch (t4) {
          if (!g) throw t4;
          l(g, "throw", t4);
        }
        if ("object" == typeof m && m && c(d, m)) return m;
      }
      return new v(false);
    };
  }