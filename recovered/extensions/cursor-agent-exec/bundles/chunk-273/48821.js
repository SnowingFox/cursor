// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/273.js sha256:918321c092763b0f5509b45d1560ac236164a596e0ab5a603460d95abe18903b
// module: 48821 range:38042..39455
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
48821: (e, t) => {
  t.read = function(e2, t2, i, a, n) {
    var r, o, s = 8 * n - a - 1, f = (1 << s) - 1, p = f >> 1, m = -7, l = i ? n - 1 : 0, c = i ? -1 : 1, u = e2[t2 + l];
    for (l += c, r = u & (1 << -m) - 1, u >>= -m, m += s; m > 0; r = 256 * r + e2[t2 + l], l += c, m -= 8) ;
    for (o = r & (1 << -m) - 1, r >>= -m, m += a; m > 0; o = 256 * o + e2[t2 + l], l += c, m -= 8) ;
    if (0 === r) r = 1 - p;
    else {
      if (r === f) return o ? NaN : 1 / 0 * (u ? -1 : 1);
      o += Math.pow(2, a), r -= p;
    }
    return (u ? -1 : 1) * o * Math.pow(2, r - a);
  }, t.write = function(e2, t2, i, a, n, r) {
    var o, s, f, p = 8 * r - n - 1, m = (1 << p) - 1, l = m >> 1, c = 23 === n ? Math.pow(2, -24) - Math.pow(2, -77) : 0, u = a ? 0 : r - 1, d = a ? 1 : -1, h = t2 < 0 || 0 === t2 && 1 / t2 < 0 ? 1 : 0;
    for (t2 = Math.abs(t2), isNaN(t2) || t2 === 1 / 0 ? (s = isNaN(t2) ? 1 : 0, o = m) : (o = Math.floor(Math.log(t2) / Math.LN2), t2 * (f = Math.pow(2, -o)) < 1 && (o--, f *= 2), (t2 += o + l >= 1 ? c / f : c * Math.pow(2, 1 - l)) * f >= 2 && (o++, f /= 2), o + l >= m ? (s = 0, o = m) : o + l >= 1 ? (s = (t2 * f - 1) * Math.pow(2, n), o += l) : (s = t2 * Math.pow(2, l - 1) * Math.pow(2, n), o = 0)); n >= 8; e2[i + u] = 255 & s, u += d, s /= 256, n -= 8) ;
    for (o = o << n | s, p += n; p > 0; e2[i + u] = 255 & o, u += d, o /= 256, p -= 8) ;
    e2[i + u - d] |= 128 * h;
  };
}