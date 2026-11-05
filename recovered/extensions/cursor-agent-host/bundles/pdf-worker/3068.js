// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/pdf-worker.js sha256:8ebb471c426cfe288b1343142faa62735cf7c56873f20ba36d31a4b28ebbdaa5
// module: 3068 range:21896..24290
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
3068: (t2, e2, i2) => {
    var s2 = i2(6518), n2 = i2(9504), r2 = i2(2652), a2 = RangeError, o2 = TypeError, l2 = 1 / 0, h2 = Math.abs, c2 = Math.pow, d2 = n2([].push), u2 = c2(2, 1023), p2 = c2(2, 53) - 1, g2 = Number.MAX_VALUE, m2 = c2(2, 971), f2 = {}, b2 = {}, v2 = {}, y2 = {}, w2 = {}, x2 = function(t3, e3) {
      var i3 = t3 + e3;
      return { hi: i3, lo: e3 - (i3 - t3) };
    };
    s2({ target: "Math", stat: true }, { sumPrecise: function(t3) {
      var e3 = [], i3 = 0, s3 = y2;
      switch (r2(t3, function(t4) {
        if (++i3 >= p2) throw new a2("Maximum allowed index exceeded");
        if ("number" != typeof t4) throw new o2("Value is not a number");
        s3 !== f2 && (t4 != t4 ? s3 = f2 : t4 === l2 ? s3 = s3 === b2 ? f2 : v2 : t4 === -1 / 0 ? s3 = s3 === v2 ? f2 : b2 : 0 === t4 && 1 / t4 !== l2 || s3 !== y2 && s3 !== w2 || (s3 = w2, d2(e3, t4)));
      }), s3) {
        case f2:
          return NaN;
        case b2:
          return -1 / 0;
        case v2:
          return l2;
        case y2:
          return -0;
      }
      for (var n3, c3, A2, _2, S2, E2, C2 = [], T2 = 0, M2 = 0; M2 < e3.length; M2++) {
        n3 = e3[M2];
        for (var k2 = 0, D2 = 0; D2 < C2.length; D2++) {
          if (c3 = C2[D2], h2(n3) < h2(c3) && (E2 = n3, n3 = c3, c3 = E2), _2 = (A2 = x2(n3, c3)).hi, S2 = A2.lo, h2(_2) === l2) {
            var P2 = _2 === l2 ? 1 : -1;
            T2 += P2, h2(n3 = n3 - P2 * u2 - P2 * u2) < h2(c3) && (E2 = n3, n3 = c3, c3 = E2), _2 = (A2 = x2(n3, c3)).hi, S2 = A2.lo;
          }
          0 !== S2 && (C2[k2++] = S2), n3 = _2;
        }
        C2.length = k2, 0 !== n3 && d2(C2, n3);
      }
      var I2 = C2.length - 1;
      if (_2 = 0, S2 = 0, 0 !== T2) {
        var R2 = I2 >= 0 ? C2[I2] : 0;
        if (I2--, h2(T2) > 1 || T2 > 0 && R2 > 0 || T2 < 0 && R2 < 0) return T2 > 0 ? l2 : -1 / 0;
        if (_2 = (A2 = x2(T2 * u2, R2 / 2)).hi, S2 = A2.lo, S2 *= 2, h2(2 * _2) === l2) return _2 > 0 ? _2 === u2 && S2 === -m2 / 2 && I2 >= 0 && C2[I2] < 0 ? g2 : l2 : _2 === -u2 && S2 === m2 / 2 && I2 >= 0 && C2[I2] > 0 ? -g2 : -1 / 0;
        0 !== S2 && (C2[++I2] = S2, S2 = 0), _2 *= 2;
      }
      for (; I2 >= 0 && (_2 = (A2 = x2(_2, C2[I2--])).hi, 0 === (S2 = A2.lo)); ) ;
      return I2 >= 0 && (S2 < 0 && C2[I2] < 0 || S2 > 0 && C2[I2] > 0) && (c3 = 2 * S2) === (n3 = _2 + c3) - _2 && (_2 = n3), _2;
    } });
  }