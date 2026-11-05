// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/928.js sha256:1e34f3da2dac0c414cd02b42da502ab9dbc42f1b80782b7c58dc88e4d9ebf8e0
// module: 56818 range:18668..21142
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
56818: (e, t, r) => {
  "use strict";
  var n = r(77353), a = 15, i = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], o = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78], s = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0], f = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
  e.exports = function(e2, t2, r2, l, h, d, u, c) {
    var _, v, w, g, b, p, m, k, y, x = c.bits, A = 0, E = 0, I = 0, B = 0, U = 0, z = 0, D = 0, S = 0, M = 0, F = 0, C = null, N = 0, O = new n.Buf16(16), L = new n.Buf16(16), Z = null, R = 0;
    for (A = 0; A <= a; A++) O[A] = 0;
    for (E = 0; E < l; E++) O[t2[r2 + E]]++;
    for (U = x, B = a; B >= 1 && 0 === O[B]; B--) ;
    if (U > B && (U = B), 0 === B) return h[d++] = 20971520, h[d++] = 20971520, c.bits = 1, 0;
    for (I = 1; I < B && 0 === O[I]; I++) ;
    for (U < I && (U = I), S = 1, A = 1; A <= a; A++) if (S <<= 1, (S -= O[A]) < 0) return -1;
    if (S > 0 && (0 === e2 || 1 !== B)) return -1;
    for (L[1] = 0, A = 1; A < a; A++) L[A + 1] = L[A] + O[A];
    for (E = 0; E < l; E++) 0 !== t2[r2 + E] && (u[L[t2[r2 + E]]++] = E);
    if (0 === e2 ? (C = Z = u, p = 19) : 1 === e2 ? (C = i, N -= 257, Z = o, R -= 257, p = 256) : (C = s, Z = f, p = -1), F = 0, E = 0, A = I, b = d, z = U, D = 0, w = -1, g = (M = 1 << U) - 1, 1 === e2 && M > 852 || 2 === e2 && M > 592) return 1;
    for (; ; ) {
      m = A - D, u[E] < p ? (k = 0, y = u[E]) : u[E] > p ? (k = Z[R + u[E]], y = C[N + u[E]]) : (k = 96, y = 0), _ = 1 << A - D, I = v = 1 << z;
      do {
        h[b + (F >> D) + (v -= _)] = m << 24 | k << 16 | y;
      } while (0 !== v);
      for (_ = 1 << A - 1; F & _; ) _ >>= 1;
      if (0 !== _ ? (F &= _ - 1, F += _) : F = 0, E++, 0 === --O[A]) {
        if (A === B) break;
        A = t2[r2 + u[E]];
      }
      if (A > U && (F & g) !== w) {
        for (0 === D && (D = U), b += I, S = 1 << (z = A - D); z + D < B && !((S -= O[z + D]) <= 0); ) z++, S <<= 1;
        if (M += 1 << z, 1 === e2 && M > 852 || 2 === e2 && M > 592) return 1;
        h[w = F & g] = U << 24 | z << 16 | b - d;
      }
    }
    return 0 !== F && (h[b + F] = A - D << 24 | 64 << 16), c.bits = U, 0;
  };
}