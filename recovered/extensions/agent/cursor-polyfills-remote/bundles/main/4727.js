// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 4727 range:98159..102452
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4727: (t2, r2, e2) => {
    var n2 = e2(5613), o2 = e2(5604), i2 = e2(9944), a2 = e2(6881), u2 = e2(5234), s2 = e2(6719), c = e2(4188), f = e2(831), h = e2(7065), l = e2(4987), p = e2(6032), v = e2(8689), d = e2(5881), g = e2(1458).includes, y = e2(4418), w = e2(2618), x = e2(4561), m = e2(6209), b = e2(8944), S = e2(5062), O = String, E = TypeError, R = o2("JSON", "stringify"), P = o2("BigInt"), j = a2("".valueOf), k = a2(true.valueOf), I = P && a2(P.prototype.valueOf), T = a2(/./.exec), A = a2("".charAt), L = a2("".charCodeAt), N = a2("".replace), U = a2("".slice), C = a2([].push), F = a2([].pop), B = a2(1.1.toString), D = /[\uD800-\uDFFF]/g, M = /^[\uD800-\uDBFF]$/, z = /^[\uDC00-\uDFFF]$/, _ = /^\d+$/, H = m(), J = m(), q = m(), G = H.length, V = J.length, W = !b || u2(function() {
      var t3 = o2("Symbol")("stringify detection");
      return "[null]" !== R([t3]) || "{}" !== R({ a: t3 }) || "{}" !== R(Object(t3));
    }), $ = u2(function() {
      return '"\\udf06\\ud834"' !== R("\uDF06\uD834") || '"\\udead"' !== R("\uDEAD");
    }), K = S ? o2("JSON", "isRawJSON") : l, Y = W ? function(t3, r3, e3) {
      return R(t3, function(t4, e4) {
        var n3 = i2(r3, this, t4, e4);
        if (!p(n3)) return n3;
      }, e3);
    } : R, Q = function(t3, r3, e3) {
      var n3 = A(e3, r3 - 1), o3 = A(e3, r3 + 1);
      return T(M, t3) && !T(z, o3) || T(z, t3) && !T(M, n3) ? "\\u" + B(L(t3, 0), 16) : t3;
    }, X = function(t3, r3) {
      try {
        return t3(r3), true;
      } catch (t4) {
        return false;
      }
    }, Z = function(t3) {
      if (!f(t3) || c(t3) || s2(t3)) return false;
      try {
        return !(function(t4) {
          var r3 = v(t4);
          return "Number" === r3 && X(d, t4) || "String" === r3 && X(j, t4) || "Boolean" === r3 && X(k, t4) || !!I && "BigInt" === r3 && X(I, t4);
        })(t3);
      } catch (t4) {
        return true;
      }
    }, tt = function(t3, r3) {
      return { toJSON: function() {
        var e3 = t3[r3];
        if (f(e3) || "bigint" == typeof e3) {
          var n3 = e3.toJSON;
          c(n3) && (e3 = i2(n3, e3, r3));
        }
        return e3;
      } };
    };
    R && n2({ target: "JSON", stat: true, arity: 3, forced: W || $ || !S }, { stringify: function(t3, r3, e3) {
      var n3, o3 = c(r3) ? r3 : void 0, a3 = o3 ? void 0 : (function(t4) {
        if (s2(t4)) {
          for (var r4 = t4.length, e4 = [], n4 = h(null), o4 = 0; o4 < r4; o4++) {
            var i3, a4 = t4[o4];
            if ("string" == typeof a4) i3 = a4;
            else {
              if ("number" != typeof a4 && "Number" !== v(a4) && "String" !== v(a4)) continue;
              i3 = w(a4);
            }
            y(n4, i3) || (n4[i3] = true, C(e4, i3));
          }
          return e4;
        }
      })(r3), u3 = a3 && (function(t4) {
        for (var r4 = 0, e4 = t4.length; r4 < e4; r4++) if (T(_, t4[r4])) return J;
        return "";
      })(a3), f2 = [], l2 = [], p2 = [], d2 = false, m2 = true, b2 = Y(t3, function(t4, r4) {
        if (t4 = O(t4), a3) {
          if (t4 === q) return F(l2), void (n3 = F(p2));
          if (m2) m2 = false;
          else if (this !== n3 && !s2(this) && !g(a3, t4)) return;
        } else o3 && (r4 = i2(o3, this, t4, r4));
        if (K(r4)) return S ? r4 : (d2 = true, H + (C(f2, r4.rawJSON) - 1));
        if (a3 && Z(r4)) {
          if (g(l2, r4)) throw new E("Converting circular structure to JSON");
          var e4 = (function(t5, r5, e5) {
            for (var n4 = h(null), o4 = 0, i3 = r5.length; o4 < i3; o4++) {
              var a4 = r5[o4];
              n4[e5 + a4] = tt(t5, a4);
            }
            return n4[q] = null, n4;
          })(r4, a3, u3);
          return C(l2, r4), C(p2, n3), n3 = e4, u3 && (d2 = true), e4;
        }
        return r4;
      }, e3);
      if ("string" != typeof b2) return b2;
      if ($ && (b2 = N(b2, D, Q)), !d2) return b2;
      for (var R2 = "", P2 = b2.length, j2 = 0; j2 < P2; j2++) {
        var k2 = A(b2, j2);
        if ('"' === k2) {
          var I2 = x(b2, ++j2).end - 1, L2 = U(b2, j2, I2);
          U(L2, 0, G) === H ? R2 += f2[U(L2, G)] : U(L2, 0, V) === J ? R2 += '"' + U(L2, V) + '"' : R2 += '"' + L2 + '"', j2 = I2;
        } else R2 += k2;
      }
      return R2;
    } });
  }