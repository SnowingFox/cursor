// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 8633 range:148549..153451
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8633: (t2, r2, e2) => {
    var n2 = e2(9117), o2 = e2(6881), i2 = e2(6893), a2 = e2(8732), u2 = e2(2735), s2 = e2(8088), c = e2(997), f = e2(4320), h = e2(5234), l = e2(286), p = e2(6744), v = e2(4579), d = e2(2420), g = e2(6103), y = e2(1786), w = e2(5054), x = e2(8150), m = e2(7825), b = e2(4166), S = e2(8657), O = e2(3754), E = e2(3086), R = u2.PROPER, P = u2.CONFIGURABLE, j = "ArrayBuffer", k = "DataView", I = "prototype", T = "Wrong index", A = E.getterFor(j), L = E.getterFor(k), N = E.set, U = n2[j], C = U, F = C && C[I], B = n2[k], D = B && B[I], M = Object.prototype, z = n2.Array, _ = n2.RangeError, H = o2(x), J = o2([].reverse), q = g.pack, G = g.unpack, V = function(t3) {
      return [255 & t3];
    }, W = function(t3) {
      return [255 & t3, t3 >> 8 & 255];
    }, $ = function(t3) {
      return [255 & t3, t3 >> 8 & 255, t3 >> 16 & 255, t3 >> 24 & 255];
    }, K = function(t3) {
      return t3[3] << 24 | t3[2] << 16 | t3[1] << 8 | t3[0];
    }, Y = function(t3) {
      return q(d(t3), 23, 4);
    }, Q = function(t3) {
      return q(t3, 52, 8);
    }, X = function(t3, r3, e3) {
      c(t3[I], r3, { configurable: true, get: function() {
        return e3(this)[r3];
      } });
    }, Z = function(t3, r3, e3, n3) {
      var o3 = L(t3), i3 = v(e3), a3 = !!n3;
      if (i3 + r3 > o3.byteLength) throw new _(T);
      var u3 = o3.bytes, s3 = i3 + o3.byteOffset, c2 = m(u3, s3, s3 + r3);
      return a3 ? c2 : J(c2);
    }, tt = function(t3, r3, e3, n3, o3, i3) {
      var a3 = L(t3), u3 = v(e3), s3 = n3(+o3), c2 = !!i3;
      if (u3 + r3 > a3.byteLength) throw new _(T);
      for (var f2 = a3.bytes, h2 = u3 + a3.byteOffset, l2 = 0; l2 < r3; l2++) f2[h2 + l2] = s3[c2 ? l2 : r3 - l2 - 1];
    };
    if (a2) {
      var rt = R && U.name !== j;
      h(function() {
        U(1);
      }) && h(function() {
        new U(-1);
      }) && !h(function() {
        return new U(), new U(1.5), new U(NaN), 1 !== U.length || rt && !P;
      }) ? rt && P && s2(U, "name", j) : ((C = function(t3) {
        return l(this, F), b(new U(v(t3)), this, C);
      })[I] = F, F.constructor = C, S(C, U)), w && y(D) !== M && w(D, M);
      var et = new B(new C(2)), nt = o2(D.setInt8);
      et.setInt8(0, 2147483648), et.setInt8(1, 2147483649), !et.getInt8(0) && et.getInt8(1) || f(D, { setInt8: function(t3, r3) {
        nt(this, t3, r3 << 24 >> 24);
      }, setUint8: function(t3, r3) {
        nt(this, t3, r3 << 24 >> 24);
      } }, { unsafe: true });
    } else F = (C = function(t3) {
      l(this, F);
      var r3 = v(t3);
      N(this, { type: j, bytes: H(z(r3), 0), byteLength: r3 }), i2 || (this.byteLength = r3, this.detached = false);
    })[I], D = (B = function(t3, r3, e3) {
      l(this, D), l(t3, F);
      var n3 = A(t3), o3 = n3.byteLength, a3 = p(r3);
      if (a3 < 0 || a3 > o3) throw new _("Wrong offset");
      if (a3 + (e3 = void 0 === e3 ? o3 - a3 : v(e3)) > o3) throw new _("Wrong length");
      N(this, { type: k, buffer: t3, byteLength: e3, byteOffset: a3, bytes: n3.bytes }), i2 || (this.buffer = t3, this.byteLength = e3, this.byteOffset = a3);
    })[I], i2 && (X(C, "byteLength", A), X(B, "buffer", L), X(B, "byteLength", L), X(B, "byteOffset", L)), f(D, { getInt8: function(t3) {
      return Z(this, 1, t3)[0] << 24 >> 24;
    }, getUint8: function(t3) {
      return Z(this, 1, t3)[0];
    }, getInt16: function(t3) {
      var r3 = Z(this, 2, t3, arguments.length > 1 && arguments[1]);
      return (r3[1] << 8 | r3[0]) << 16 >> 16;
    }, getUint16: function(t3) {
      var r3 = Z(this, 2, t3, arguments.length > 1 && arguments[1]);
      return r3[1] << 8 | r3[0];
    }, getInt32: function(t3) {
      return K(Z(this, 4, t3, arguments.length > 1 && arguments[1]));
    }, getUint32: function(t3) {
      return K(Z(this, 4, t3, arguments.length > 1 && arguments[1])) >>> 0;
    }, getFloat32: function(t3) {
      return G(Z(this, 4, t3, arguments.length > 1 && arguments[1]), 23);
    }, getFloat64: function(t3) {
      return G(Z(this, 8, t3, arguments.length > 1 && arguments[1]), 52);
    }, setInt8: function(t3, r3) {
      tt(this, 1, t3, V, r3);
    }, setUint8: function(t3, r3) {
      tt(this, 1, t3, V, r3);
    }, setInt16: function(t3, r3) {
      tt(this, 2, t3, W, r3, arguments.length > 2 && arguments[2]);
    }, setUint16: function(t3, r3) {
      tt(this, 2, t3, W, r3, arguments.length > 2 && arguments[2]);
    }, setInt32: function(t3, r3) {
      tt(this, 4, t3, $, r3, arguments.length > 2 && arguments[2]);
    }, setUint32: function(t3, r3) {
      tt(this, 4, t3, $, r3, arguments.length > 2 && arguments[2]);
    }, setFloat32: function(t3, r3) {
      tt(this, 4, t3, Y, r3, arguments.length > 2 && arguments[2]);
    }, setFloat64: function(t3, r3) {
      tt(this, 8, t3, Q, r3, arguments.length > 2 && arguments[2]);
    } });
    O(C, j), O(B, k), t2.exports = { ArrayBuffer: C, DataView: B };
  }