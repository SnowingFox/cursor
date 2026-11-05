// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 3217 range:68431..70050
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3217: (t2, r2, e2) => {
    var n2 = e2(5613), o2 = e2(9944), i2 = e2(1942), a2 = e2(2735), u2 = e2(4188), s2 = e2(9383), c = e2(1786), f = e2(5054), h = e2(3754), l = e2(8088), p = e2(7509), v = e2(4282), d = e2(9164), g = e2(2037), y = a2.PROPER, w = a2.CONFIGURABLE, x = g.IteratorPrototype, m = g.BUGGY_SAFARI_ITERATORS, b = v("iterator"), S = "keys", O = "values", E = "entries", R = function() {
      return this;
    };
    t2.exports = function(t3, r3, e3, a3, v2, g2, P) {
      s2(e3, r3, a3);
      var j, k, I, T = function(t4) {
        if (t4 === v2 && C) return C;
        if (!m && t4 && t4 in N) return N[t4];
        switch (t4) {
          case S:
          case O:
          case E:
            return function() {
              return new e3(this, t4);
            };
        }
        return function() {
          return new e3(this);
        };
      }, A = r3 + " Iterator", L = false, N = t3.prototype, U = N[b] || N["@@iterator"] || v2 && N[v2], C = !m && U || T(v2), F = "Array" === r3 && N.entries || U;
      if (F && (j = c(F.call(new t3()))) !== Object.prototype && j.next && (i2 || c(j) === x || (f ? f(j, x) : u2(j[b]) || p(j, b, R)), h(j, A, true, true), i2 && (d[A] = R)), y && v2 === O && U && U.name !== O && (!i2 && w ? l(N, "name", O) : (L = true, C = function() {
        return o2(U, this);
      })), v2) if (k = { values: T(O), keys: g2 ? C : T(S), entries: T(E) }, P) for (I in k) (m || L || !(I in N)) && p(N, I, k[I]);
      else n2({ target: r3, proto: true, forced: m || L }, k);
      return i2 && !P || N[b] === C || p(N, b, C, { name: v2 }), d[r3] = C, k;
    };
  }