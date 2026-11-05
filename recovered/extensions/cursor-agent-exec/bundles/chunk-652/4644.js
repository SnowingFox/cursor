// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/652.js sha256:5daf2e14541adb7b825c0f72547c4fb6891a4bf16d03b1cdb2fdb3b113ad96a2
// module: 4644 range:35938..39296
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4644: (t2, e2, i2) => {
    var s2, n2, r2, a2 = i2(7811), o2 = i2(3724), l2 = i2(4576), h2 = i2(4901), c2 = i2(34), d2 = i2(9297), u2 = i2(6955), p2 = i2(6823), g2 = i2(6699), m2 = i2(6840), f2 = i2(2106), b2 = i2(1625), v2 = i2(2787), y2 = i2(2967), w2 = i2(8227), x2 = i2(3392), A2 = i2(1181), _2 = A2.enforce, S2 = A2.get, E2 = l2.Int8Array, C2 = E2 && E2.prototype, T2 = l2.Uint8ClampedArray, M2 = T2 && T2.prototype, k2 = E2 && v2(E2), D2 = C2 && v2(C2), P2 = Object.prototype, I2 = l2.TypeError, R2 = w2("toStringTag"), L2 = x2("TYPED_ARRAY_TAG"), B2 = "TypedArrayConstructor", F2 = a2 && !!y2 && "Opera" !== u2(l2.opera), O2 = false, N2 = { Int8Array: 1, Uint8Array: 1, Uint8ClampedArray: 1, Int16Array: 2, Uint16Array: 2, Int32Array: 4, Uint32Array: 4, Float32Array: 4, Float64Array: 8 }, U2 = { BigInt64Array: 8, BigUint64Array: 8 }, z2 = function(t3) {
      var e3 = v2(t3);
      if (c2(e3)) {
        var i3 = S2(e3);
        return i3 && d2(i3, B2) ? i3[B2] : z2(e3);
      }
    }, H2 = function(t3) {
      if (!c2(t3)) return false;
      var e3 = u2(t3);
      return d2(N2, e3) || d2(U2, e3);
    };
    for (s2 in N2) (r2 = (n2 = l2[s2]) && n2.prototype) ? _2(r2)[B2] = n2 : F2 = false;
    for (s2 in U2) (r2 = (n2 = l2[s2]) && n2.prototype) && (_2(r2)[B2] = n2);
    if ((!F2 || !h2(k2) || k2 === Function.prototype) && (k2 = function() {
      throw new I2("Incorrect invocation");
    }, F2)) for (s2 in N2) l2[s2] && y2(l2[s2], k2);
    if ((!F2 || !D2 || D2 === P2) && (D2 = k2.prototype, F2)) for (s2 in N2) l2[s2] && y2(l2[s2].prototype, D2);
    if (F2 && v2(M2) !== D2 && y2(M2, D2), o2 && !d2(D2, R2)) for (s2 in O2 = true, f2(D2, R2, { configurable: true, get: function() {
      return c2(this) ? this[L2] : void 0;
    } }), N2) l2[s2] && g2(l2[s2], L2, s2);
    t2.exports = { NATIVE_ARRAY_BUFFER_VIEWS: F2, TYPED_ARRAY_TAG: O2 && L2, aTypedArray: function(t3) {
      if (H2(t3)) return t3;
      throw new I2("Target is not a typed array");
    }, aTypedArrayConstructor: function(t3) {
      if (h2(t3) && (!y2 || b2(k2, t3))) return t3;
      throw new I2(p2(t3) + " is not a typed array constructor");
    }, exportTypedArrayMethod: function(t3, e3, i3, s3) {
      if (o2) {
        if (i3) for (var n3 in N2) {
          var r3 = l2[n3];
          if (r3 && d2(r3.prototype, t3)) try {
            delete r3.prototype[t3];
          } catch (i4) {
            try {
              r3.prototype[t3] = e3;
            } catch (t4) {
            }
          }
        }
        D2[t3] && !i3 || m2(D2, t3, i3 ? e3 : F2 && C2[t3] || e3, s3);
      }
    }, exportTypedArrayStaticMethod: function(t3, e3, i3) {
      var s3, n3;
      if (o2) {
        if (y2) {
          if (i3) {
            for (s3 in N2) if ((n3 = l2[s3]) && d2(n3, t3)) try {
              delete n3[t3];
            } catch (t4) {
            }
          }
          if (k2[t3] && !i3) return;
          try {
            return m2(k2, t3, i3 ? e3 : F2 && k2[t3] || e3);
          } catch (t4) {
          }
        }
        for (s3 in N2) !(n3 = l2[s3]) || n3[t3] && !i3 || m2(n3, t3, e3);
      }
    }, getTypedArrayConstructor: z2, isView: function(t3) {
      if (!c2(t3)) return false;
      var e3 = u2(t3);
      return "DataView" === e3 || d2(N2, e3) || d2(U2, e3);
    }, isTypedArray: H2, TypedArray: k2, TypedArrayPrototype: D2 };
  }