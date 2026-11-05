// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/928.js sha256:e04ed350b40bd579ab3a39967750106d673508f05e9f3a77bfeb2f4eca08d90f
// module: 1182 range:59..104491
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
1182: (e, t, r) => {
  !(function() {
    var t2 = {};
    function n() {
      "undefined" == typeof process && console.log.apply(console, arguments);
    }
    e.exports = t2, (function(e2, t3) {
      var r2, a, i, o, s, f, l, h, d, u, c, _, v, w;
      !(function() {
        "use strict";
        var t4 = (function() {
          function e3(e4) {
            this.message = "JPEG error: " + e4;
          }
          return e3.prototype = new Error(), e3.prototype.name = "JpegError", e3.constructor = e3, e3;
        })(), r3 = (function() {
          var e3 = new Uint8Array([0, 1, 8, 16, 9, 2, 3, 10, 17, 24, 32, 25, 18, 11, 4, 5, 12, 19, 26, 33, 40, 48, 41, 34, 27, 20, 13, 6, 7, 14, 21, 28, 35, 42, 49, 56, 57, 50, 43, 36, 29, 22, 15, 23, 30, 37, 44, 51, 58, 59, 52, 45, 38, 31, 39, 46, 53, 60, 61, 54, 47, 55, 62, 63]), r4 = 4017, a2 = 799, i2 = 3406, o2 = 2276, s2 = 1567, f2 = 3784, l2 = 5793, h2 = 2896;
          function d2(e4) {
            null == e4 && (e4 = {}), null == e4.w && (e4.w = -1), this.V = e4.n, this.N = e4.w;
          }
          function u2(e4, t5) {
            for (var r5, n3, a3, i3 = 0, o3 = [], s3 = 16; s3 > 0 && !e4[s3 - 1]; ) s3--;
            o3.push({ children: [], index: 0 });
            var f3 = o3[0];
            for (r5 = 0; r5 < s3; r5++) {
              for (n3 = 0; n3 < e4[r5]; n3++) {
                for ((f3 = o3.pop()).children[f3.index] = t5[i3]; f3.index > 0; ) f3 = o3.pop();
                for (f3.index++, o3.push(f3); o3.length <= r5; ) o3.push(a3 = { children: [], index: 0 }), f3.children[f3.index] = a3.children, f3 = a3;
                i3++;
              }
              r5 + 1 < s3 && (o3.push(a3 = { children: [], index: 0 }), f3.children[f3.index] = a3.children, f3 = a3);
            }
            return o3[0].children;
          }
          function c2(e4, t5, r5) {
            return 64 * ((e4.P + 1) * t5 + r5);
          }
          function _2(r5, a3, i3, o3, s3, f3, l3, h3, d3, u3) {
            null == u3 && (u3 = false);
            var _3, v3, w3, b, p, m, k, y, x, A, E, I = i3.m, B = i3.Z, U = a3, z = 0, D = 0, S = 0, M = 0, F = 0, C = 0;
            function N() {
              if (D > 0) return D--, z >> D & 1;
              if (255 === (z = r5[a3++])) {
                var e4 = r5[a3++];
                if (e4) {
                  if (220 === e4 && u3) {
                    var o4 = n2(r5, a3 += 2);
                    if (a3 += 2, o4 > 0 && o4 !== i3.s) throw new DNLMarkerError("Found DNL marker (0xFFDC) while parsing scan data", o4);
                  } else if (217 === e4) {
                    if (u3) {
                      var s4 = 8 * F;
                      if (s4 > 0 && s4 < i3.s / 10) throw new DNLMarkerError("Found EOI marker (0xFFD9) while parsing scan data, possibly caused by incorrect `scanLines` parameter", s4);
                    }
                    throw new EOIMarkerError("Found EOI marker (0xFFD9) while parsing scan data");
                  }
                  throw new t4("unexpected marker");
                }
              }
              return D = 7, z >>> 7;
            }
            function O(e4) {
              for (var r6 = e4; ; ) {
                switch (typeof (r6 = r6[N()])) {
                  case "number":
                    return r6;
                  case "object":
                    continue;
                }
                throw new t4("invalid huffman sequence");
              }
            }
            function L(e4) {
              for (var t5 = 0; e4 > 0; ) t5 = t5 << 1 | N(), e4--;
              return t5;
            }
            function Z(e4) {
              if (1 === e4) return 1 === N() ? 1 : -1;
              var t5 = L(e4);
              return t5 >= 1 << e4 - 1 ? t5 : t5 + (-1 << e4) + 1;
            }
            function R(e4, t5, r6, n3, a4) {
              var i4 = r6 % I;
              F = (r6 / I | 0) * e4.A + n3;
              var o4 = i4 * e4.h + a4;
              t5(e4, c2(e4, F, o4));
            }
            function P(e4, t5, r6) {
              F = r6 / e4.P | 0;
              var n3 = r6 % e4.P;
              t5(e4, c2(e4, F, n3));
            }
            var T = o3.length;
            for (k = B ? 0 === f3 ? 0 === h3 ? function(e4, t5) {
              var r6 = O(e4.J), n3 = 0 === r6 ? 0 : Z(r6) << d3;
              e4.D[t5] = e4.Q += n3;
            } : function(e4, t5) {
              e4.D[t5] |= N() << d3;
            } : 0 === h3 ? function(t5, r6) {
              if (S > 0) S--;
              else for (var n3 = f3, a4 = l3; n3 <= a4; ) {
                var i4 = O(t5.i), o4 = 15 & i4, s4 = i4 >> 4;
                if (0 !== o4) {
                  var h4 = e3[n3 += s4];
                  t5.D[r6 + h4] = Z(o4) * (1 << d3), n3++;
                } else {
                  if (s4 < 15) {
                    S = L(s4) + (1 << s4) - 1;
                    break;
                  }
                  n3 += 16;
                }
              }
            } : function(r6, n3) {
              for (var a4, i4, o4 = f3, s4 = l3, h4 = 0; o4 <= s4; ) {
                var u4 = n3 + e3[o4], c3 = r6.D[u4] < 0 ? -1 : 1;
                switch (M) {
                  case 0:
                    if (h4 = (i4 = O(r6.i)) >> 4, 0 == (a4 = 15 & i4)) h4 < 15 ? (S = L(h4) + (1 << h4), M = 4) : (h4 = 16, M = 1);
                    else {
                      if (1 !== a4) throw new t4("invalid ACn encoding");
                      _3 = Z(a4), M = h4 ? 2 : 3;
                    }
                    continue;
                  case 1:
                  case 2:
                    r6.D[u4] ? r6.D[u4] += c3 * (N() << d3) : 0 === --h4 && (M = 2 === M ? 3 : 0);
                    break;
                  case 3:
                    r6.D[u4] ? r6.D[u4] += c3 * (N() << d3) : (r6.D[u4] = _3 << d3, M = 0);
                    break;
                  case 4:
                    r6.D[u4] && (r6.D[u4] += c3 * (N() << d3));
                }
                o4++;
              }
              4 === M && 0 === --S && (M = 0);
            } : function(t5, r6) {
              var n3 = O(t5.J), a4 = 0 === n3 ? 0 : Z(n3), i4 = 1;
              for (t5.D[r6] = t5.Q += a4; i4 < 64; ) {
                var o4 = O(t5.i), s4 = 15 & o4, f4 = o4 >> 4;
                if (0 !== s4) {
                  var l4 = e3[i4 += f4];
                  t5.D[r6 + l4] = Z(s4), i4++;
                } else {
                  if (f4 < 15) break;
                  i4 += 16;
                }
              }
            }, x = 1 === T ? o3[0].P * o3[0].c : I * i3.R; C <= x; ) {
              var G = s3 ? Math.min(x - C, s3) : x;
              if (G > 0) {
                for (w3 = 0; w3 < T; w3++) o3[w3].Q = 0;
                if (S = 0, 1 === T) for (v3 = o3[0], m = 0; m < G; m++) P(v3, k, C), C++;
                else for (m = 0; m < G; m++) {
                  for (w3 = 0; w3 < T; w3++) for (A = (v3 = o3[w3]).h, E = v3.A, b = 0; b < E; b++) for (p = 0; p < A; p++) R(v3, k, C, b, p);
                  C++;
                }
              }
              if (D = 0, !(y = g(r5, a3))) break;
              if (y.u) {
                a3 = y.offset;
              }
              if (!(y.M >= 65488 && y.M <= 65495)) break;
              a3 += 2;
            }
            return a3 - U;
          }
          function v2(e4, n3, d3) {
            var u3, c3, _3, v3, w3, g2, b, p, m, k, y, x, A, E, I, B, U, z = e4.$, D = e4.D;
            if (!z) throw new t4("missing required Quantization Table.");
            for (var S = 0; S < 64; S += 8) m = D[n3 + S], k = D[n3 + S + 1], y = D[n3 + S + 2], x = D[n3 + S + 3], A = D[n3 + S + 4], E = D[n3 + S + 5], I = D[n3 + S + 6], B = D[n3 + S + 7], m *= z[S], 0 !== (k | y | x | A | E | I | B) ? (k *= z[S + 1], y *= z[S + 2], x *= z[S + 3], A *= z[S + 4], E *= z[S + 5], I *= z[S + 6], B *= z[S + 7], c3 = (u3 = (u3 = l2 * m + 128 >> 8) + (c3 = l2 * A + 128 >> 8) + 1 >> 1) - c3, U = (_3 = y) * f2 + (v3 = I) * s2 + 128 >> 8, _3 = _3 * s2 - v3 * f2 + 128 >> 8, b = (w3 = (w3 = h2 * (k - B) + 128 >> 8) + (b = E << 4) + 1 >> 1) - b, g2 = (p = (p = h2 * (k + B) + 128 >> 8) + (g2 = x << 4) + 1 >> 1) - g2, v3 = (u3 = u3 + (v3 = U) + 1 >> 1) - v3, _3 = (c3 = c3 + _3 + 1 >> 1) - _3, U = w3 * o2 + p * i2 + 2048 >> 12, w3 = w3 * i2 - p * o2 + 2048 >> 12, p = U, U = g2 * a2 + b * r4 + 2048 >> 12, g2 = g2 * r4 - b * a2 + 2048 >> 12, b = U, d3[S] = u3 + p, d3[S + 7] = u3 - p, d3[S + 1] = c3 + b, d3[S + 6] = c3 - b, d3[S + 2] = _3 + g2, d3[S + 5] = _3 - g2, d3[S + 3] = v3 + w3, d3[S + 4] = v3 - w3) : (U = l2 * m + 512 >> 10, d3[S] = U, d3[S + 1] = U, d3[S + 2] = U, d3[S + 3] = U, d3[S + 4] = U, d3[S + 5] = U, d3[S + 6] = U, d3[S + 7] = U);
            for (var M = 0; M < 8; ++M) m = d3[M], 0 !== ((k = d3[M + 8]) | (y = d3[M + 16]) | (x = d3[M + 24]) | (A = d3[M + 32]) | (E = d3[M + 40]) | (I = d3[M + 48]) | (B = d3[M + 56])) ? (c3 = (u3 = 4112 + ((u3 = l2 * m + 2048 >> 12) + (c3 = l2 * A + 2048 >> 12) + 1 >> 1)) - c3, U = (_3 = y) * f2 + (v3 = I) * s2 + 2048 >> 12, _3 = _3 * s2 - v3 * f2 + 2048 >> 12, v3 = U, b = (w3 = (w3 = h2 * (k - B) + 2048 >> 12) + (b = E) + 1 >> 1) - b, g2 = (p = (p = h2 * (k + B) + 2048 >> 12) + (g2 = x) + 1 >> 1) - g2, U = w3 * o2 + p * i2 + 2048 >> 12, w3 = w3 * i2 - p * o2 + 2048 >> 12, p = U, U = g2 * a2 + b * r4 + 2048 >> 12, g2 = g2 * r4 - b * a2 + 2048 >> 12, (m = (u3 = u3 + v3 + 1 >> 1) + p) < 16 ? m = 0 : m >= 4080 ? m = 255 : m >>= 4, (k = (c3 = c3 + _3 + 1 >> 1) + (b = U)) < 16 ? k = 0 : k >= 4080 ? k = 255 : k >>= 4, (y = (_3 = c3 - _3) + g2) < 16 ? y = 0 : y >= 4080 ? y = 255 : y >>= 4, (x = (v3 = u3 - v3) + w3) < 16 ? x = 0 : x >= 4080 ? x = 255 : x >>= 4, (A = v3 - w3) < 16 ? A = 0 : A >= 4080 ? A = 255 : A >>= 4, (E = _3 - g2) < 16 ? E = 0 : E >= 4080 ? E = 255 : E >>= 4, (I = c3 - b) < 16 ? I = 0 : I >= 4080 ? I = 255 : I >>= 4, (B = u3 - p) < 16 ? B = 0 : B >= 4080 ? B = 255 : B >>= 4, D[n3 + M] = m, D[n3 + M + 8] = k, D[n3 + M + 16] = y, D[n3 + M + 24] = x, D[n3 + M + 32] = A, D[n3 + M + 40] = E, D[n3 + M + 48] = I, D[n3 + M + 56] = B) : (U = (U = l2 * m + 8192 >> 14) < -2040 ? 0 : U >= 2024 ? 255 : U + 2056 >> 4, D[n3 + M] = U, D[n3 + M + 8] = U, D[n3 + M + 16] = U, D[n3 + M + 24] = U, D[n3 + M + 32] = U, D[n3 + M + 40] = U, D[n3 + M + 48] = U, D[n3 + M + 56] = U);
          }
          function w2(e4, t5) {
            for (var r5 = t5.P, n3 = t5.c, a3 = new Int16Array(64), i3 = 0; i3 < n3; i3++) for (var o3 = 0; o3 < r5; o3++) {
              v2(t5, c2(t5, i3, o3), a3);
            }
            return t5.D;
          }
          function g(e4, t5, r5) {
            null == r5 && (r5 = t5);
            var a3 = e4.length - 1, i3 = r5 < t5 ? r5 : t5;
            if (t5 >= a3) return null;
            var o3 = n2(e4, t5);
            if (o3 >= 65472 && o3 <= 65534) return { u: null, M: o3, offset: t5 };
            for (var s3 = n2(e4, i3); !(s3 >= 65472 && s3 <= 65534); ) {
              if (++i3 >= a3) return null;
              s3 = n2(e4, i3);
            }
            return { u: o3.toString(16), M: s3, offset: i3 };
          }
          return d2.prototype = { parse(r5, a3) {
            null == a3 && (a3 = {});
            var i3, o3, s3 = a3.F, f3 = 0, l3 = null, h3 = null, d3 = 0;
            function c3() {
              var e4 = n2(r5, f3), t5 = (f3 += 2) + e4 - 2, a4 = g(r5, t5, f3);
              a4 && a4.u && (t5 = a4.offset);
              var i4 = r5.subarray(f3, t5);
              return f3 += i4.length, i4;
            }
            function v3(e4) {
              for (var t5 = Math.ceil(e4.o / 8 / e4.X), r6 = Math.ceil(e4.s / 8 / e4.B), n3 = 0; n3 < e4.W.length; n3++) {
                G = e4.W[n3];
                var a4 = Math.ceil(Math.ceil(e4.o / 8) * G.h / e4.X), i4 = Math.ceil(Math.ceil(e4.s / 8) * G.A / e4.B), o4 = t5 * G.h, s4 = 64 * (r6 * G.A) * (o4 + 1);
                G.D = new Int16Array(s4), G.P = a4, G.c = i4;
              }
              e4.m = t5, e4.R = r6;
            }
            var b = [], p = [], m = [], k = n2(r5, f3);
            if (f3 += 2, 65496 !== k) throw new t4("SOI not found");
            k = n2(r5, f3), f3 += 2;
            e: for (; 65497 !== k; ) {
              var y, x, A;
              switch (k) {
                case 65504:
                case 65505:
                case 65506:
                case 65507:
                case 65508:
                case 65509:
                case 65510:
                case 65511:
                case 65512:
                case 65513:
                case 65514:
                case 65515:
                case 65516:
                case 65517:
                case 65518:
                case 65519:
                case 65534:
                  var E = c3();
                  65504 === k && 74 === E[0] && 70 === E[1] && 73 === E[2] && 70 === E[3] && 0 === E[4] && (l3 = { version: { d: E[5], T: E[6] }, K: E[7], j: E[8] << 8 | E[9], H: E[10] << 8 | E[11], S: E[12], I: E[13], C: E.subarray(14, 14 + 3 * E[12] * E[13]) }), 65518 === k && 65 === E[0] && 100 === E[1] && 111 === E[2] && 98 === E[3] && 101 === E[4] && (h3 = { version: E[5] << 8 | E[6], k: E[7] << 8 | E[8], q: E[9] << 8 | E[10], a: E[11] });
                  break;
                case 65499:
                  for (var I = n2(r5, f3) + (f3 += 2) - 2; f3 < I; ) {
                    var B = r5[f3++], U = new Uint16Array(64);
                    if (B >> 4) {
                      if (B >> 4 != 1) throw new t4("DQT - invalid table spec");
                      for (x = 0; x < 64; x++) U[e3[x]] = n2(r5, f3), f3 += 2;
                    } else for (x = 0; x < 64; x++) U[e3[x]] = r5[f3++];
                    b[15 & B] = U;
                  }
                  break;
                case 65472:
                case 65473:
                case 65474:
                  if (i3) throw new t4("Only single frame JPEGs supported");
                  f3 += 2, (i3 = {}).G = 65473 === k, i3.Z = 65474 === k, i3.precision = r5[f3++];
                  var z, D = n2(r5, f3), S = 0, M = 0;
                  f3 += 2, i3.s = s3 || D, i3.o = n2(r5, f3), f3 += 2, i3.W = [], i3._ = {};
                  var F = r5[f3++];
                  for (y = 0; y < F; y++) {
                    z = r5[f3];
                    var C = r5[f3 + 1] >> 4, N = 15 & r5[f3 + 1];
                    S < C && (S = C), M < N && (M = N);
                    var O = r5[f3 + 2];
                    A = i3.W.push({ h: C, A: N, L: O, $: null }), i3._[z] = A - 1, f3 += 3;
                  }
                  i3.X = S, i3.B = M, v3(i3);
                  break;
                case 65476:
                  var L = n2(r5, f3);
                  for (f3 += 2, y = 2; y < L; ) {
                    var Z = r5[f3++], R = new Uint8Array(16), P = 0;
                    for (x = 0; x < 16; x++, f3++) P += R[x] = r5[f3];
                    var T = new Uint8Array(P);
                    for (x = 0; x < P; x++, f3++) T[x] = r5[f3];
                    y += 17 + P, (Z >> 4 ? p : m)[15 & Z] = u2(R, T);
                  }
                  break;
                case 65501:
                  o3 = n2(r5, f3 += 2), f3 += 2;
                  break;
                case 65498:
                  var G, j = 1 === ++d3 && !s3;
                  f3 += 2;
                  var J = r5[f3++], H = [];
                  for (y = 0; y < J; y++) {
                    var W = r5[f3++], K = i3._[W];
                    (G = i3.W[K]).index = W;
                    var Y = r5[f3++];
                    G.J = m[Y >> 4], G.i = p[15 & Y], H.push(G);
                  }
                  var q = r5[f3++], X = r5[f3++], Q = r5[f3++];
                  try {
                    var V = _2(r5, f3, i3, H, o3, q, X, Q >> 4, 15 & Q, j);
                    f3 += V;
                  } catch (e4) {
                    if (e4 instanceof DNLMarkerError) return this.parse(r5, { F: e4.s });
                    if (e4 instanceof EOIMarkerError) break e;
                    throw e4;
                  }
                  break;
                case 65500:
                  f3 += 4;
                  break;
                case 65535:
                  255 !== r5[f3] && f3--;
                  break;
                default:
                  var $ = g(r5, f3 - 2, f3 - 3);
                  if ($ && $.u) {
                    f3 = $.offset;
                    break;
                  }
                  if (f3 >= r5.length - 1) break e;
                  throw new t4("JpegImage.parse - unknown marker: " + k.toString(16));
              }
              k = n2(r5, f3), f3 += 2;
            }
            for (this.width = i3.o, this.height = i3.s, this.g = l3, this.b = h3, this.W = [], y = 0; y < i3.W.length; y++) {
              var ee = b[(G = i3.W[y]).L];
              ee && (G.$ = ee), this.W.push({ index: G.index, e: w2(0, G), l: G.h / i3.X, t: G.A / i3.B, P: G.P, c: G.c });
            }
            this.p = this.W.length;
          }, Y(e4, t5, r5) {
            null == r5 && (r5 = false);
            var n3, a3, i3, o3, s3, f3, l3, h3, d3, u3, c3, _3, v3 = this.width / e4, w3 = this.height / t5, g2 = 0, b = this.W.length, p = e4 * t5 * b, m = new Uint8ClampedArray(p), k = new Uint32Array(e4), y = 4294967288;
            for (l3 = 0; l3 < b; l3++) {
              if (a3 = (n3 = this.W[l3]).l * v3, i3 = n3.t * w3, g2 = l3, c3 = n3.e, o3 = n3.P + 1 << 3, a3 !== _3) {
                for (s3 = 0; s3 < e4; s3++) h3 = 0 | s3 * a3, k[s3] = (h3 & y) << 3 | 7 & h3;
                _3 = a3;
              }
              for (f3 = 0; f3 < t5; f3++) for (u3 = o3 * ((h3 = 0 | f3 * i3) & y) | (7 & h3) << 3, s3 = 0; s3 < e4; s3++) m[g2] = c3[u3 + k[s3]], g2 += b;
            }
            var x = this.V;
            if (r5 || 4 !== b || x || (x = new Int32Array([-256, 255, -256, 255, -256, 255, -256, 255])), x) for (l3 = 0; l3 < p; ) for (h3 = 0, d3 = 0; h3 < b; h3++, l3++, d3 += 2) m[l3] = (m[l3] * x[d3] >> 8) + x[d3 + 1];
            return m;
          }, get f() {
            return this.b ? !!this.b.a : 3 === this.p ? 0 !== this.N && (82 !== this.W[0].index || 71 !== this.W[1].index || 66 !== this.W[2].index) : 1 === this.N;
          }, z: function(e4) {
            for (var t5, r5, n3, a3 = 0, i3 = e4.length; a3 < i3; a3 += 3) t5 = e4[a3], r5 = e4[a3 + 1], n3 = e4[a3 + 2], e4[a3] = t5 - 179.456 + 1.402 * n3, e4[a3 + 1] = t5 + 135.459 - 0.344 * r5 - 0.714 * n3, e4[a3 + 2] = t5 - 226.816 + 1.772 * r5;
            return e4;
          }, O: function(e4) {
            for (var t5, r5, n3, a3, i3 = 0, o3 = 0, s3 = e4.length; o3 < s3; o3 += 4) t5 = e4[o3], r5 = e4[o3 + 1], n3 = e4[o3 + 2], a3 = e4[o3 + 3], e4[i3++] = r5 * (-660635669420364e-19 * r5 + 437130475926232e-18 * n3 - 54080610064599e-18 * t5 + 48449797120281e-17 * a3 - 0.154362151871126) - 122.67195406894 + n3 * (-957964378445773e-18 * n3 + 817076911346625e-18 * t5 - 0.00477271405408747 * a3 + 1.53380253221734) + t5 * (961250184130688e-18 * t5 - 0.00266257332283933 * a3 + 0.48357088451265) + a3 * (-336197177618394e-18 * a3 + 0.484791561490776), e4[i3++] = 107.268039397724 + r5 * (219927104525741e-19 * r5 - 640992018297945e-18 * n3 + 659397001245577e-18 * t5 + 426105652938837e-18 * a3 - 0.176491792462875) + n3 * (-778269941513683e-18 * n3 + 0.00130872261408275 * t5 + 770482631801132e-18 * a3 - 0.151051492775562) + t5 * (0.00126935368114843 * t5 - 0.00265090189010898 * a3 + 0.25802910206845) + a3 * (-318913117588328e-18 * a3 - 0.213742400323665), e4[i3++] = r5 * (-570115196973677e-18 * r5 - 263409051004589e-19 * n3 + 0.0020741088115012 * t5 - 0.00288260236853442 * a3 + 0.814272968359295) - 20.810012546947 + n3 * (-153496057440975e-19 * n3 - 132689043961446e-18 * t5 + 560833691242812e-18 * a3 - 0.195152027534049) + t5 * (0.00174418132927582 * t5 - 0.00255243321439347 * a3 + 0.116935020465145) + a3 * (-343531996510555e-18 * a3 + 0.24165260232407);
            return e4.subarray(0, i3);
          }, r: function(e4) {
            for (var t5, r5, n3, a3 = 0, i3 = e4.length; a3 < i3; a3 += 4) t5 = e4[a3], r5 = e4[a3 + 1], n3 = e4[a3 + 2], e4[a3] = 434.456 - t5 - 1.402 * n3, e4[a3 + 1] = 119.541 - t5 + 0.344 * r5 + 0.714 * n3, e4[a3 + 2] = 481.816 - t5 - 1.772 * r5;
            return e4;
          }, U: function(e4) {
            for (var t5, r5, n3, a3, i3 = 0, o3 = 0, s3 = e4.length; o3 < s3; o3 += 4) t5 = e4[o3], r5 = e4[o3 + 1], n3 = e4[o3 + 2], a3 = e4[o3 + 3], e4[i3++] = 255 + t5 * (-6747147073602441e-20 * t5 + 8379262121013727e-19 * r5 + 2894718188643294e-19 * n3 + 0.003264231057537806 * a3 - 1.1185611867203937) + r5 * (26374107616089405e-21 * r5 - 8626949158638572e-20 * n3 - 2748769067499491e-19 * a3 - 0.02155688794978967) + n3 * (-3878099212869363e-20 * n3 - 3267808279485286e-19 * a3 + 0.0686742238595345) - a3 * (3361971776183937e-19 * a3 + 0.7430659151342254), e4[i3++] = 255 + t5 * (13596372813588848e-20 * t5 + 924537132573585e-18 * r5 + 10567359618683593e-20 * n3 + 4791864687436512e-19 * a3 - 0.3109689587515875) + r5 * (-23545346108370344e-20 * r5 + 2702845253534714e-19 * n3 + 0.0020200308977307156 * a3 - 0.7488052167015494) + n3 * (6834815998235662e-20 * n3 + 15168452363460973e-20 * a3 - 0.09751927774728933) - a3 * (3189131175883281e-19 * a3 + 0.7364883807733168), e4[i3++] = 255 + t5 * (13598650411385307e-21 * t5 + 12423956175490851e-20 * r5 + 4751985097583589e-19 * n3 - 36729317476630422e-22 * a3 - 0.05562186980264034) + r5 * (16141380598724676e-20 * r5 + 9692239130725186e-19 * n3 + 7782692450036253e-19 * a3 - 0.44015232367526463) + n3 * (5068882914068769e-22 * n3 + 0.0017778369011375071 * a3 - 0.7591454649749609) - a3 * (3435319965105553e-19 * a3 + 0.7063770186160144);
            return e4.subarray(0, i3);
          }, getData: function(e4) {
            var r5 = e4.width, n3 = e4.height, a3 = e4.forceRGB, i3 = e4.isSourcePDF;
            if (this.p > 4) throw new t4("Unsupported color mode");
            var o3 = this.Y(r5, n3, i3);
            if (1 === this.p && a3) {
              for (var s3 = o3.length, f3 = new Uint8ClampedArray(3 * s3), l3 = 0, h3 = 0; h3 < s3; h3++) {
                var d3 = o3[h3];
                f3[l3++] = d3, f3[l3++] = d3, f3[l3++] = d3;
              }
              return f3;
            }
            if (3 === this.p && this.f) return this.z(o3);
            if (4 === this.p) {
              if (this.f) return a3 ? this.O(o3) : this.r(o3);
              if (a3) return this.U(o3);
            }
            return o3;
          } }, d2;
        })();
        function n2(e3, t5) {
          return e3[t5] << 8 | e3[t5 + 1];
        }
        e2.JpegDecoder = r3;
      })(), e2.encodeImage = function(t4, r3, n2, a2) {
        var i2 = { t256: [r3], t257: [n2], t258: [8, 8, 8, 8], t259: [1], t262: [2], t273: [1e3], t277: [4], t278: [n2], t279: [r3 * n2 * 4], t282: [[72, 1]], t283: [[72, 1]], t284: [1], t286: [[0, 1]], t287: [[0, 1]], t296: [1], t305: ["Photopea (UTIF.js)"], t338: [1] };
        if (a2) for (var o2 in a2) i2[o2] = a2[o2];
        var s2 = new Uint8Array(e2.encode([i2])), f2 = new Uint8Array(t4), l2 = new Uint8Array(1e3 + r3 * n2 * 4);
        for (o2 = 0; o2 < s2.length; o2++) l2[o2] = s2[o2];
        for (o2 = 0; o2 < f2.length; o2++) l2[1e3 + o2] = f2[o2];
        return l2.buffer;
      }, e2.encode = function(t4) {
        var r3 = new Uint8Array(2e4), n2 = 4, a2 = e2._binBE;
        r3[0] = r3[1] = 77, a2.writeUshort(r3, 2, 42);
        var i2 = 8;
        a2.writeUint(r3, n2, i2), n2 += 4;
        for (var o2 = 0; o2 < t4.length; o2++) {
          var s2 = e2._writeIFD(a2, e2._types.basic, r3, i2, t4[o2]);
          i2 = s2[1], o2 < t4.length - 1 && (3 & i2 && (i2 += 4 - (3 & i2)), a2.writeUint(r3, s2[0], i2));
        }
        return r3.slice(0, i2).buffer;
      }, e2.decode = function(t4, r3) {
        null == r3 && (r3 = { parseMN: true, debug: false });
        var a2 = new Uint8Array(t4), i2 = 0, o2 = e2._binBE.readASCII(a2, i2, 2);
        i2 += 2;
        var s2 = "II" == o2 ? e2._binLE : e2._binBE;
        s2.readUshort(a2, i2);
        i2 += 2;
        var f2 = s2.readUint(a2, i2);
        i2 += 4;
        for (var l2 = []; ; ) {
          var h2 = s2.readUshort(a2, f2), d2 = s2.readUshort(a2, f2 + 4);
          if (0 != h2 && (d2 < 1 || 13 < d2)) {
            n("error in TIFF");
            break;
          }
          if (e2._readIFD(s2, a2, f2, l2, 0, r3), 0 == (f2 = s2.readUint(a2, f2 + 2 + 12 * h2))) break;
        }
        return l2;
      }, e2.decodeImage = function(t4, r3, a2) {
        if (!r3.data) {
          var i2 = new Uint8Array(t4), o2 = e2._binBE.readASCII(i2, 0, 2);
          if (null != r3.t256) {
            r3.isLE = "II" == o2, r3.width = r3.t256[0], r3.height = r3.t257[0];
            var s2 = r3.t259 ? r3.t259[0] : 1, f2 = r3.t266 ? r3.t266[0] : 1;
            r3.t284 && 2 == r3.t284[0] && n("PlanarConfiguration 2 should not be used!"), 7 == s2 && r3.t258 && r3.t258.length > 3 && (r3.t258 = r3.t258.slice(0, 3));
            var l2 = r3.t277 ? r3.t277[0] : 1, h2 = (r3.t258 ? r3.t258[0] : 1) * l2;
            1 == s2 && null != r3.t279 && r3.t278 && 32803 == r3.t262[0] && (h2 = Math.round(8 * r3.t279[0] / (r3.width * r3.t278[0]))), r3.t50885 && 4 == r3.t50885[0] && (h2 = 3 * r3.t258[0]);
            var d2 = 8 * Math.ceil(r3.width * h2 / 8), u2 = r3.t273;
            (null == u2 || r3.t322) && (u2 = r3.t324);
            var c2 = r3.t279;
            1 == s2 && 1 == u2.length && (c2 = [r3.height * (d2 >>> 3)]), (null == c2 || r3.t322) && (c2 = r3.t325);
            var _2 = new Uint8Array(r3.height * (d2 >>> 3)), v2 = 0;
            if (null != r3.t322) {
              var w2 = r3.t322[0], g = r3.t323[0], b = Math.floor((r3.width + w2 - 1) / w2), p = Math.floor((r3.height + g - 1) / g), m = new Uint8Array(0 | Math.ceil(w2 * g * h2 / 8));
              console.log("====", b, p);
              for (var k = 0; k < p; k++) for (var y = 0; y < b; y++) {
                var x = k * b + y;
                m.fill(0), e2.decode._decompress(r3, a2, i2, u2[x], c2[x], s2, m, 0, f2, w2, g), 6 == s2 ? _2 = m : e2._copyTile(m, 0 | Math.ceil(w2 * h2 / 8), g, _2, 0 | Math.ceil(r3.width * h2 / 8), r3.height, 0 | Math.ceil(y * w2 * h2 / 8), k * g);
              }
              v2 = 8 * _2.length;
            } else {
              if (null == u2) return;
              var A = r3.t278 ? r3.t278[0] : r3.height;
              A = Math.min(A, r3.height);
              for (x = 0; x < u2.length; x++) e2.decode._decompress(r3, a2, i2, u2[x], c2[x], s2, _2, 0 | Math.ceil(v2 / 8), f2, r3.width, A), v2 += d2 * A;
              v2 = Math.min(v2, 8 * _2.length);
            }
            r3.data = new Uint8Array(_2.buffer, 0, 0 | Math.ceil(v2 / 8));
          }
        }
      }, e2.decode._decompress = function(r3, a2, i2, o2, s2, f2, l2, h2, d2, u2, c2) {
        if (r3.t271 && "Panasonic" == r3.t271[0] && r3.t45 && 6 == r3.t45[0] && (f2 = 34316), 1 == f2) for (var _2 = 0; _2 < s2; _2++) l2[h2 + _2] = i2[o2 + _2];
        else if (2 == f2) e2.decode._decodeG2(i2, o2, s2, l2, h2, u2, d2);
        else if (3 == f2) e2.decode._decodeG3(i2, o2, s2, l2, h2, u2, d2, !!r3.t292 && !(1 & ~r3.t292[0]));
        else if (4 == f2) e2.decode._decodeG4(i2, o2, s2, l2, h2, u2, d2);
        else if (5 == f2) e2.decode._decodeLZW(i2, o2, s2, l2, h2, 8);
        else if (6 == f2) e2.decode._decodeOldJPEG(r3, i2, o2, s2, l2, h2);
        else if (7 == f2 || 34892 == f2) e2.decode._decodeNewJPEG(r3, i2, o2, s2, l2, h2);
        else if (8 == f2 || 32946 == f2) {
          var v2 = new Uint8Array(i2.buffer, o2 + 2, s2 - 6), w2 = t3.inflateRaw(v2);
          h2 + w2.length <= l2.length && l2.set(w2, h2);
        } else 9 == f2 ? e2.decode._decodeVC5(i2, o2, s2, l2, h2, r3.t33422) : 32767 == f2 ? e2.decode._decodeARW(r3, i2, o2, s2, l2, h2) : 32773 == f2 ? e2.decode._decodePackBits(i2, o2, s2, l2, h2) : 32809 == f2 ? e2.decode._decodeThunder(i2, o2, s2, l2, h2) : 34316 == f2 ? e2.decode._decodePanasonic(r3, i2, o2, s2, l2, h2) : 34713 == f2 ? e2.decode._decodeNikon(r3, a2, i2, o2, s2, l2, h2) : 34676 == f2 ? e2.decode._decodeLogLuv32(r3, i2, o2, s2, l2, h2) : n("Unknown compression", f2);
        var g = r3.t258 ? Math.min(32, r3.t258[0]) : 1, b = r3.t277 ? r3.t277[0] : 1, p = g * b >>> 3, m = Math.ceil(g * b * u2 / 8);
        if (16 == g && !r3.isLE && null == r3.t33422) for (var k = 0; k < c2; k++) for (var y = h2 + k * m, x = 1; x < m; x += 2) {
          var A = l2[y + x];
          l2[y + x] = l2[y + x - 1], l2[y + x - 1] = A;
        }
        if (r3.t317 && 2 == r3.t317[0]) for (k = 0; k < c2; k++) {
          var E = h2 + k * m;
          if (16 == g) for (_2 = p; _2 < m; _2 += 2) {
            var I = (l2[E + _2 + 1] << 8 | l2[E + _2]) + (l2[E + _2 - p + 1] << 8 | l2[E + _2 - p]);
            l2[E + _2] = 255 & I, l2[E + _2 + 1] = I >>> 8 & 255;
          }
          else if (3 == b) for (_2 = 3; _2 < m; _2 += 3) l2[E + _2] = l2[E + _2] + l2[E + _2 - 3] & 255, l2[E + _2 + 1] = l2[E + _2 + 1] + l2[E + _2 - 2] & 255, l2[E + _2 + 2] = l2[E + _2 + 2] + l2[E + _2 - 1] & 255;
          else for (_2 = p; _2 < m; _2++) l2[E + _2] = l2[E + _2] + l2[E + _2 - p] & 255;
        }
      }, e2.decode._decodePanasonic = function(e3, t4, r3, n2, a2, i2) {
        var o2, s2, f2, l2, h2, d2, u2, c2, _2 = t4.buffer, v2 = e3.t2[0], w2 = e3.t3[0], g = e3.t10[0], b = e3.t45[0], p = 0, m = 0, k = 0, y = 0, x = 6 == b ? new Uint32Array(18) : new Uint8Array(16), A = [0, 0], E = [0, 0], I = 0, B = new Uint8Array(16384), U = new Uint16Array(a2.buffer);
        function z(e4) {
          if (0 == k) {
            var t5 = new Uint8Array(_2, r3 + m + 8184, 8200), n3 = new Uint8Array(_2, r3 + m, 8184);
            B.set(t5), B.set(n3, t5.length), m += 16384;
          }
          if (5 != b) return (B[y = (k = k - e4 & 131071) >> 3 ^ 16368] | B[y + 1] << 8) >> (7 & k) & ~(-1 << e4);
          for (o2 = 0; o2 < 16; o2++) x[o2] = B[k++], k &= 16383;
        }
        function D(e4) {
          return B[k + 15 - e4];
        }
        function S() {
          A[0] = 0, A[1] = 0, E[0] = 0, E[1] = 0;
        }
        if (7 == b) throw b;
        if (6 == b) {
          var M = 12 == g, F = M ? function() {
            x[0] = D(0) << 4 | D(1) >> 4, x[1] = 4095 & ((15 & D(1)) << 8 | D(2)), x[2] = D(3) >> 6 & 3, x[3] = (63 & D(3)) << 2 | D(4) >> 6, x[4] = (63 & D(4)) << 2 | D(5) >> 6, x[5] = (63 & D(5)) << 2 | D(6) >> 6, x[6] = D(6) >> 4 & 3, x[7] = (15 & D(6)) << 4 | D(7) >> 4, x[8] = (15 & D(7)) << 4 | D(8) >> 4, x[9] = (15 & D(8)) << 4 | D(9) >> 4, x[10] = D(9) >> 2 & 3, x[11] = (3 & D(9)) << 6 | D(10) >> 2, x[12] = (3 & D(10)) << 6 | D(11) >> 2, x[13] = (3 & D(11)) << 6 | D(12) >> 2, x[14] = 3 & D(12), x[15] = D(13), x[16] = D(14), x[17] = D(15), k += 16, y = 0;
          } : function() {
            x[0] = D(0) << 6 | D(1) >> 2, x[1] = 16383 & ((3 & D(1)) << 12 | D(2) << 4 | D(3) >> 4), x[2] = D(3) >> 2 & 3, x[3] = (3 & D(3)) << 8 | D(4), x[4] = D(5) << 2 | D(6) >> 6, x[5] = (63 & D(6)) << 4 | D(7) >> 4, x[6] = D(7) >> 2 & 3, x[7] = (3 & D(7)) << 8 | D(8), x[8] = D(9) << 2 & 1020 | D(10) >> 6, x[9] = 1023 & (D(10) << 4 | D(11) >> 4), x[10] = D(11) >> 2 & 3, x[11] = (3 & D(11)) << 8 | D(12), x[12] = 1023 & (D(13) << 2 & 1020 | D(14) >> 6), x[13] = 1023 & (D(14) << 4 | D(15) >> 4), k += 16, y = 0;
          }, C = M ? 14 : 11, N = M ? 128 : 512, O = M ? 2048 : 8192, L = M ? 16383 : 65535, Z = M ? 4095 : 16383, R = v2 / C, P = 16 * R, T = M ? 18 : 14;
          for (d2 = 0; d2 < w2 - 15; d2 += 16) {
            var G = Math.min(16, w2 - d2), j = P * G;
            for (B = new Uint8Array(_2, r3 + p, j), k = 0, p += j, c2 = 0, u2 = 0; c2 < G; c2++, u2 = 0) {
              I = (d2 + c2) * v2;
              for (var J = 0; J < R; J++) for (F(), S(), f2 = 0, h2 = 0, o2 = 0; o2 < C; o2++) {
                if (l2 = 1 & o2, o2 % 3 == 2) {
                  var H = y < T ? x[y++] : 0;
                  3 == H && (H = 4), h2 = N << H, f2 = 1 << H;
                }
                var W = y < T ? x[y++] : 0;
                A[l2] ? (W *= f2, h2 < O && E[l2] > h2 && (W += E[l2] - h2), E[l2] = W) : (A[l2] = W, W ? E[l2] = W : W = E[l2]), U[I + u2++] = W - 15 <= L ? W - 15 & L : W + 2147483633 >> 31 & Z;
              }
            }
          }
        } else if (5 == b) {
          var K = 12 == g ? 10 : 9;
          for (d2 = 0; d2 < w2; d2++) for (u2 = 0; u2 < v2; u2 += K) z(0), 12 == g ? (U[I++] = ((15 & x[1]) << 8) + x[0], U[I++] = 16 * x[2] + (x[1] >> 4), U[I++] = ((15 & x[4]) << 8) + x[3], U[I++] = 16 * x[5] + (x[4] >> 4), U[I++] = ((15 & x[7]) << 8) + x[6], U[I++] = 16 * x[8] + (x[7] >> 4), U[I++] = ((15 & x[10]) << 8) + x[9], U[I++] = 16 * x[11] + (x[10] >> 4), U[I++] = ((15 & x[13]) << 8) + x[12], U[I++] = 16 * x[14] + (x[13] >> 4)) : 14 == g && (U[I++] = x[0] + ((63 & x[1]) << 8), U[I++] = (x[1] >> 6) + 4 * x[2] + ((15 & x[3]) << 10), U[I++] = (x[3] >> 4) + 16 * x[4] + ((3 & x[5]) << 12), U[I++] = ((252 & x[5]) >> 2) + (x[6] << 6), U[I++] = x[7] + ((63 & x[8]) << 8), U[I++] = (x[8] >> 6) + 4 * x[9] + ((15 & x[10]) << 10), U[I++] = (x[10] >> 4) + 16 * x[11] + ((3 & x[12]) << 12), U[I++] = ((252 & x[12]) >> 2) + (x[13] << 6), U[I++] = x[14] + ((63 & x[15]) << 8));
        } else {
          if (4 != b) throw b;
          for (d2 = 0; d2 < w2; d2++) for (u2 = 0; u2 < v2; u2++) l2 = 1 & (o2 = u2 % 14), 0 == o2 && S(), o2 % 3 == 2 && (f2 = 4 >> 3 - z(2)), E[l2] ? 0 != (s2 = z(8)) && (A[l2] -= 128 << f2, (A[l2] < 0 || 4 == f2) && (A[l2] &= ~(-1 << f2)), A[l2] += s2 << f2) : (E[l2] = z(8), (E[l2] || o2 > 11) && (A[l2] = E[l2] << 4 | z(4))), U[I++] = A[1 & u2];
        }
      }, e2.decode._decodeVC5 = /* @__PURE__ */ (function() {
        var t4, r3, n2, a2 = [1, 0, 1, 0, 2, 2, 1, 1, 3, 7, 1, 2, 5, 25, 1, 3, 6, 48, 1, 4, 6, 54, 1, 5, 7, 111, 1, 8, 7, 99, 1, 6, 7, 105, 12, 0, 7, 107, 1, 7, 8, 209, 20, 0, 8, 212, 1, 9, 8, 220, 1, 10, 9, 393, 1, 11, 9, 394, 32, 0, 9, 416, 1, 12, 9, 427, 1, 13, 10, 887, 1, 18, 10, 784, 1, 14, 10, 790, 1, 15, 10, 835, 60, 0, 10, 852, 1, 16, 10, 885, 1, 17, 11, 1571, 1, 19, 11, 1668, 1, 20, 11, 1669, 100, 0, 11, 1707, 1, 21, 11, 1772, 1, 22, 12, 3547, 1, 29, 12, 3164, 1, 24, 12, 3166, 1, 25, 12, 3140, 1, 23, 12, 3413, 1, 26, 12, 3537, 1, 27, 12, 3539, 1, 28, 13, 7093, 1, 35, 13, 6283, 1, 30, 13, 6331, 1, 31, 13, 6335, 180, 0, 13, 6824, 1, 32, 13, 7072, 1, 33, 13, 7077, 320, 0, 13, 7076, 1, 34, 14, 12565, 1, 36, 14, 12661, 1, 37, 14, 12669, 1, 38, 14, 13651, 1, 39, 14, 14184, 1, 40, 15, 28295, 1, 46, 15, 28371, 1, 47, 15, 25320, 1, 42, 15, 25336, 1, 43, 15, 25128, 1, 41, 15, 27300, 1, 44, 15, 28293, 1, 45, 16, 50259, 1, 48, 16, 50643, 1, 49, 16, 50675, 1, 50, 16, 56740, 1, 53, 16, 56584, 1, 51, 16, 56588, 1, 52, 17, 113483, 1, 61, 17, 113482, 1, 60, 17, 101285, 1, 55, 17, 101349, 1, 56, 17, 109205, 1, 57, 17, 109207, 1, 58, 17, 100516, 1, 54, 17, 113171, 1, 59, 18, 202568, 1, 62, 18, 202696, 1, 63, 18, 218408, 1, 64, 18, 218412, 1, 65, 18, 226340, 1, 66, 18, 226356, 1, 67, 18, 226358, 1, 68, 19, 402068, 1, 69, 19, 405138, 1, 70, 19, 405394, 1, 71, 19, 436818, 1, 72, 19, 436826, 1, 73, 19, 452714, 1, 75, 19, 452718, 1, 76, 19, 452682, 1, 74, 20, 804138, 1, 77, 20, 810279, 1, 78, 20, 810790, 1, 79, 20, 873638, 1, 80, 20, 873654, 1, 81, 20, 905366, 1, 82, 20, 905430, 1, 83, 20, 905438, 1, 84, 21, 1608278, 1, 85, 21, 1620557, 1, 86, 21, 1621582, 1, 87, 21, 1621583, 1, 88, 21, 1747310, 1, 89, 21, 1810734, 1, 90, 21, 1810735, 1, 91, 21, 1810863, 1, 92, 21, 1810879, 1, 93, 22, 3621725, 1, 99, 22, 3621757, 1, 100, 22, 3241112, 1, 94, 22, 3494556, 1, 95, 22, 3494557, 1, 96, 22, 3494622, 1, 97, 22, 3494623, 1, 98, 23, 6482227, 1, 102, 23, 6433117, 1, 101, 23, 6989117, 1, 103, 23, 6989119, 1, 105, 23, 6989118, 1, 104, 23, 7243449, 1, 106, 23, 7243512, 1, 107, 24, 13978233, 1, 111, 24, 12964453, 1, 109, 24, 12866232, 1, 108, 24, 14486897, 1, 113, 24, 13978232, 1, 110, 24, 14486896, 1, 112, 24, 14487026, 1, 114, 24, 14487027, 1, 115, 25, 25732598, 1, 225, 25, 25732597, 1, 189, 25, 25732596, 1, 188, 25, 25732595, 1, 203, 25, 25732594, 1, 202, 25, 25732593, 1, 197, 25, 25732592, 1, 207, 25, 25732591, 1, 169, 25, 25732590, 1, 223, 25, 25732589, 1, 159, 25, 25732522, 1, 235, 25, 25732579, 1, 152, 25, 25732575, 1, 192, 25, 25732489, 1, 179, 25, 25732573, 1, 201, 25, 25732472, 1, 172, 25, 25732576, 1, 149, 25, 25732488, 1, 178, 25, 25732566, 1, 120, 25, 25732571, 1, 219, 25, 25732577, 1, 150, 25, 25732487, 1, 127, 25, 25732506, 1, 211, 25, 25732548, 1, 125, 25, 25732588, 1, 158, 25, 25732486, 1, 247, 25, 25732467, 1, 238, 25, 25732508, 1, 163, 25, 25732552, 1, 228, 25, 25732603, 1, 183, 25, 25732513, 1, 217, 25, 25732587, 1, 168, 25, 25732520, 1, 122, 25, 25732484, 1, 128, 25, 25732562, 1, 249, 25, 25732505, 1, 187, 25, 25732504, 1, 186, 25, 25732483, 1, 136, 25, 25928905, 1, 181, 25, 25732560, 1, 255, 25, 25732500, 1, 230, 25, 25732482, 1, 135, 25, 25732555, 1, 233, 25, 25732568, 1, 222, 25, 25732583, 1, 145, 25, 25732481, 1, 134, 25, 25732586, 1, 167, 25, 25732521, 1, 248, 25, 25732518, 1, 209, 25, 25732480, 1, 243, 25, 25732512, 1, 216, 25, 25732509, 1, 164, 25, 25732547, 1, 140, 25, 25732479, 1, 157, 25, 25732544, 1, 239, 25, 25732574, 1, 191, 25, 25732564, 1, 251, 25, 25732478, 1, 156, 25, 25732546, 1, 139, 25, 25732498, 1, 242, 25, 25732557, 1, 133, 25, 25732477, 1, 162, 25, 25732515, 1, 213, 25, 25732584, 1, 165, 25, 25732514, 1, 212, 25, 25732476, 1, 227, 25, 25732494, 1, 198, 25, 25732531, 1, 236, 25, 25732530, 1, 234, 25, 25732529, 1, 117, 25, 25732528, 1, 215, 25, 25732527, 1, 124, 25, 25732526, 1, 123, 25, 25732525, 1, 254, 25, 25732524, 1, 253, 25, 25732523, 1, 148, 25, 25732570, 1, 218, 25, 25732580, 1, 146, 25, 25732581, 1, 147, 25, 25732569, 1, 224, 25, 25732533, 1, 143, 25, 25732540, 1, 184, 25, 25732541, 1, 185, 25, 25732585, 1, 166, 25, 25732556, 1, 132, 25, 25732485, 1, 129, 25, 25732563, 1, 250, 25, 25732578, 1, 151, 25, 25732501, 1, 119, 25, 25732502, 1, 193, 25, 25732536, 1, 176, 25, 25732496, 1, 245, 25, 25732553, 1, 229, 25, 25732516, 1, 206, 25, 25732582, 1, 144, 25, 25732517, 1, 208, 25, 25732558, 1, 137, 25, 25732543, 1, 241, 25, 25732466, 1, 237, 25, 25732507, 1, 190, 25, 25732542, 1, 240, 25, 25732551, 1, 131, 25, 25732554, 1, 232, 25, 25732565, 1, 252, 25, 25732475, 1, 171, 25, 25732493, 1, 205, 25, 25732492, 1, 204, 25, 25732491, 1, 118, 25, 25732490, 1, 214, 25, 25928904, 1, 180, 25, 25732549, 1, 126, 25, 25732602, 1, 182, 25, 25732539, 1, 175, 25, 25732545, 1, 141, 25, 25732559, 1, 138, 25, 25732537, 1, 177, 25, 25732534, 1, 153, 25, 25732503, 1, 194, 25, 25732606, 1, 160, 25, 25732567, 1, 121, 25, 25732538, 1, 174, 25, 25732497, 1, 246, 25, 25732550, 1, 130, 25, 25732572, 1, 200, 25, 25732474, 1, 170, 25, 25732511, 1, 221, 25, 25732601, 1, 196, 25, 25732532, 1, 142, 25, 25732519, 1, 210, 25, 25732495, 1, 199, 25, 25732605, 1, 155, 25, 25732535, 1, 154, 25, 25732499, 1, 244, 25, 25732510, 1, 220, 25, 25732600, 1, 195, 25, 25732607, 1, 161, 25, 25732604, 1, 231, 25, 25732473, 1, 173, 25, 25732599, 1, 226, 26, 51465122, 1, 116, 26, 51465123, 0, 1], i2 = [3, 3, 3, 3, 2, 2, 2, 1, 1, 1];
        function o2(e3) {
          var t5 = e3[1], r4 = e3[0][t5 >>> 3] >>> 7 - (7 & t5) & 1;
          return e3[1]++, r4;
        }
        function s2(e3, r4) {
          if (null == t4) {
            t4 = {};
            for (var n3 = 0; n3 < a2.length; n3 += 4) t4[a2[n3 + 1]] = a2.slice(n3, n3 + 4);
          }
          for (var i3 = o2(e3), s3 = t4[i3]; null == s3; ) i3 = i3 << 1 | o2(e3), s3 = t4[i3];
          var f3 = s3[3];
          0 != f3 && (f3 = 0 == o2(e3) ? f3 : -f3), r4[0] = s3[2], r4[1] = f3;
        }
        function f2(e3, t5) {
          for (var r4 = 0; r4 < t5; r4++) 1 & ~e3 || e3++, e3 >>>= 1;
          return e3;
        }
        function l2(e3, t5) {
          return e3 >> t5;
        }
        function h2(e3, t5, r4, n3, a3, i3) {
          t5[r4] = l2(l2(11 * e3[a3] - 4 * e3[a3 + i3] + e3[a3 + i3 + i3] + 4, 3) + e3[n3], 1), t5[r4 + i3] = l2(l2(5 * e3[a3] + 4 * e3[a3 + i3] - e3[a3 + i3 + i3] + 4, 3) - e3[n3], 1);
        }
        function d2(e3, t5, r4, n3, a3, i3) {
          var o3 = e3[a3 - i3] - e3[a3 + i3], s3 = e3[a3], f3 = e3[n3];
          t5[r4] = l2(l2(o3 + 4, 3) + s3 + f3, 1), t5[r4 + i3] = l2(l2(4 - o3, 3) + s3 - f3, 1);
        }
        function u2(e3, t5, r4, n3, a3, i3) {
          t5[r4] = l2(l2(5 * e3[a3] + 4 * e3[a3 - i3] - e3[a3 - i3 - i3] + 4, 3) + e3[n3], 1), t5[r4 + i3] = l2(l2(11 * e3[a3] - 4 * e3[a3 - i3] + e3[a3 - i3 - i3] + 4, 3) - e3[n3], 1);
        }
        function c2(e3) {
          return e3 = n2[e3 = e3 < 0 ? 0 : e3 > 4095 ? 4095 : e3] >>> 2;
        }
        return function(t5, a3, o3, l3, _2, v2) {
          l3 = new Uint16Array(l3.buffer);
          var w2, g, b, p, m, k, y, x, A = Date.now(), E = e2._binBE, I = a3 + o3;
          a3 += 4;
          for (var B = 1 == v2[0]; a3 < I; ) {
            var U = E.readShort(t5, a3), z = E.readUshort(t5, a3 + 2);
            if (a3 += 4, 12 == U) O = z;
            else if (20 == U) w2 = z;
            else if (21 == U) g = z;
            else if (48 == U) b = z;
            else if (53 == U) p = z;
            else if (35 == U) 0;
            else if (62 == U) m = z;
            else if (101 == U) 0;
            else if (109 == U) k = z;
            else if (84 == U) 0;
            else if (106 == U) 0;
            else if (107 == U) 0;
            else if (108 == U) 0;
            else if (102 == U) 0;
            else if (104 == U) re = z;
            else if (105 == U) 0;
            else {
              var D = U < 0 ? -U : U, S = 65280 & D, M = 0;
              if (24576 & D && (8192 & D ? (M = 65535 & z, M += (255 & D) << 16) : M = 65535 & z), 24576 & ~D) {
                if (16388 == D) a3 += 4 * M;
                else if (8192 != S && 8448 != S && 9216 != S) throw D.toString(16);
              } else {
                if (null == y) {
                  y = [];
                  for (var F = 0; F < 4; F++) y[F] = new Int16Array((w2 >>> 1) * (g >>> 1));
                  x = new Int16Array((w2 >>> 1) * (g >>> 1)), r3 = new Int16Array(1024);
                  for (F = 0; F < 1024; F++) {
                    var C = F - 512, N = Math.abs(C), O = Math.floor(768 * N * N * N / 16581375) + N;
                    r3[F] = Math.sign(C) * O;
                  }
                  n2 = new Uint16Array(4096);
                  for (F = 0; F < 4096; F++) {
                    var L = F, Z = 65535 * (Math.pow(113, L / 4095) - 1) / 112;
                    n2[F] = Math.min(Z, 65535);
                  }
                }
                var R = y[m], P = f2(w2, 1 + i2[b]), T = f2(g, 1 + i2[b]);
                if (0 == b) for (var G = 0; G < T; G++) for (var j = 0; j < P; j++) {
                  var J = a3 + 2 * (G * P + j);
                  R[G * (w2 >>> 1) + j] = t5[J] << 8 | t5[J + 1];
                }
                else {
                  var H = [t5, 8 * a3], W = [], K = 0, Y = P * T, q = [0, 0], X = 0;
                  for (z = 0; K < Y; ) for (s2(H, q), X = q[0], z = q[1]; X > 0; ) W[K++] = z, X--;
                  var Q = (b - 1) % 3, V = 1 != Q ? P : 0, $ = 0 != Q ? T : 0;
                  for (G = 0; G < T; G++) {
                    var ee = (G + $) * (w2 >>> 1) + V, te = G * P;
                    for (j = 0; j < P; j++) R[ee + j] = r3[W[te + j] + 512] * p;
                  }
                  if (2 == Q) {
                    var re = w2 >>> 1, ne = 2 * P, ae = 2 * T;
                    for (G = 0; G < T; G++) for (j = 0; j < ne; j++) {
                      F = 2 * G * re + j;
                      var ie = T * re + (se = G * re + j);
                      0 == G ? h2(R, x, F, ie, se, re) : G == T - 1 ? u2(R, x, F, ie, se, re) : d2(R, x, F, ie, se, re);
                    }
                    var oe = R;
                    R = x, x = oe;
                    for (G = 0; G < ae; G++) for (j = 0; j < P; j++) {
                      var se;
                      F = G * re + 2 * j, ie = P + (se = G * re + j);
                      0 == j ? h2(R, x, F, ie, se, 1) : j == P - 1 ? u2(R, x, F, ie, se, 1) : d2(R, x, F, ie, se, 1);
                    }
                    oe = R;
                    R = x, x = oe;
                    for (var fe = [], le = 2 - ~~((b - 1) / 3), he = 0; he < 3; he++) fe[he] = k >> 14 - 2 * he & 3;
                    var de = fe[le];
                    if (0 != de) for (G = 0; G < ae; G++) for (j = 0; j < ne; j++) {
                      R[F = G * re + j] = R[F] << de;
                    }
                  }
                }
                if (9 == b && 3 == m) {
                  var ue = y[0], ce = y[1], _e = y[2], ve = y[3];
                  for (G = 0; G < g; G += 2) for (j = 0; j < w2; j += 2) {
                    var we = G * w2 + j, ge = ue[J = (G >>> 1) * (w2 >>> 1) + (j >>> 1)], be = ce[J] - 2048, pe = _e[J] - 2048, me = ve[J] - 2048, ke = (be << 1) + ge, ye = (pe << 1) + ge, xe = ge + me, Ae = ge - me;
                    B ? (l3[we] = c2(xe), l3[we + 1] = c2(ye), l3[we + w2] = c2(ke), l3[we + w2 + 1] = c2(Ae)) : (l3[we] = c2(ke), l3[we + 1] = c2(xe), l3[we + w2] = c2(Ae), l3[we + w2 + 1] = c2(ye));
                  }
                }
                a3 += 4 * M;
              }
            }
          }
          console.log(Date.now() - A);
        };
      })(), e2.decode._decodeLogLuv32 = function(e3, t4, r3, n2, a2, i2) {
        for (var o2 = e3.width, s2 = 4 * o2, f2 = 0, l2 = new Uint8Array(s2); f2 < n2; ) {
          for (var h2 = 0; h2 < s2; ) {
            var d2 = t4[r3 + f2];
            if (f2++, d2 < 128) {
              for (var u2 = 0; u2 < d2; u2++) l2[h2 + u2] = t4[r3 + f2 + u2];
              h2 += d2, f2 += d2;
            } else {
              d2 -= 126;
              for (u2 = 0; u2 < d2; u2++) l2[h2 + u2] = t4[r3 + f2];
              h2 += d2, f2++;
            }
          }
          for (var c2 = 0; c2 < o2; c2++) a2[i2 + 0] = l2[c2], a2[i2 + 1] = l2[c2 + o2], a2[i2 + 2] = l2[c2 + 2 * o2], a2[i2 + 4] = l2[c2 + 3 * o2], i2 += 6;
        }
      }, e2.decode._ljpeg_diff = function(t4, r3, n2) {
        var a2, i2, o2 = e2.decode._getbithuff;
        return a2 = o2(t4, r3, n2[0], n2), (i2 = o2(t4, r3, a2, 0)) & 1 << a2 - 1 || (i2 -= (1 << a2) - 1), i2;
      }, e2.decode._decodeARW = function(t4, r3, n2, a2, i2, o2) {
        var s2 = t4.t256[0], f2 = t4.t257[0], l2 = t4.t258[0], h2 = t4.isLE ? e2._binLE : e2._binBE;
        if (s2 * f2 == a2 || s2 * f2 * 1.5 == a2) if (s2 * f2 * 1.5 != a2) {
          var d2, u2, c2, _2, v2, w2, g, b, p = new Uint16Array(16), m = new Uint8Array(s2 + 1);
          for (U = 0; U < f2; U++) {
            for (var k = 0; k < s2; k++) m[k] = r3[n2++];
            for (b = 0, B = 0; B < s2 - 30; b += 16) {
              for (u2 = 2047 & (d2 = h2.readUint(m, b)), c2 = 2047 & d2 >>> 11, _2 = 15 & d2 >>> 22, v2 = 15 & d2 >>> 26, w2 = 0; w2 < 4 && 128 << w2 <= u2 - c2; w2++) ;
              for (g = 30, y = 0; y < 16; y++) y == _2 ? p[y] = u2 : y == v2 ? p[y] = c2 : (p[y] = ((h2.readUshort(m, b + (g >> 3)) >>> (7 & g) & 127) << w2) + c2, p[y] > 2047 && (p[y] = 2047), g += 7);
              for (y = 0; y < 16; y++, B += 2) {
                O = p[y] << 1;
                e2.decode._putsF(i2, (U * s2 + B) * l2, O << 16 - l2);
              }
              B -= 1 & B ? 1 : 31;
            }
          }
        } else for (var y = 0; y < a2; y += 3) {
          var x = r3[n2 + y + 0], A = r3[n2 + y + 1], E = r3[n2 + y + 2];
          i2[o2 + y] = A << 4 | x >>> 4, i2[o2 + y + 1] = x << 4 | E >>> 4, i2[o2 + y + 2] = E << 4 | A >>> 4;
        }
        else {
          f2 += 8;
          var I, B, U, z = [n2, 0, 0, 0], D = new Uint16Array(32770), S = [3857, 3856, 3599, 3342, 3085, 2828, 2571, 2314, 2057, 1800, 1543, 1286, 1029, 772, 771, 768, 514, 513], M = 0, F = e2.decode._ljpeg_diff;
          for (D[0] = 15, I = y = 0; y < 18; y++) for (var C = 32768 >>> (S[y] >>> 8), N = 0; N < C; N++) D[++I] = S[y];
          for (B = s2; B--; ) for (U = 0; U < f2 + 1; U += 2) if (U == f2 && (U = 1), M += F(r3, z, D), U < f2) {
            var O = 4095 & M;
            e2.decode._putsF(i2, (U * s2 + B) * l2, O << 16 - l2);
          }
        }
      }, e2.decode._decodeNikon = function(t4, r3, n2, a2, i2, o2, s2) {
        var f2 = [[0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 5, 4, 3, 6, 2, 7, 1, 0, 8, 9, 11, 10, 12], [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 57, 90, 56, 39, 22, 5, 4, 3, 2, 1, 0, 11, 12, 12], [0, 0, 1, 4, 2, 3, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 4, 6, 3, 7, 2, 8, 1, 9, 0, 10, 11, 12], [0, 0, 1, 4, 3, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 5, 6, 4, 7, 8, 3, 9, 2, 1, 0, 10, 11, 12, 13, 14], [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 8, 92, 75, 58, 41, 7, 6, 5, 4, 3, 2, 1, 0, 13, 14], [0, 0, 1, 4, 2, 2, 3, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 7, 6, 8, 5, 9, 4, 10, 3, 11, 12, 2, 0, 1, 13, 14]], l2 = t4.t256[0], h2 = t4.t257[0], d2 = t4.t258[0], u2 = 0, c2 = 0, _2 = e2.decode._make_decoder, v2 = e2.decode._getbithuff, w2 = r3[0].exifIFD.makerNote, g = w2.t150 ? w2.t150 : w2.t140, b = 0, p = g[b++], m = g[b++];
        73 != p && 88 != m || (b += 2110), 70 == p && (u2 = 2), 14 == d2 && (u2 += 3);
        for (var k = [[0, 0], [0, 0]], y = t4.isLE ? e2._binLE : e2._binBE, x = 0; x < 2; x++) for (var A = 0; A < 2; A++) k[x][A] = y.readShort(g, b), b += 2;
        var E, I, B, U, z, D = 1 << d2 & 32767, S = 0, M = y.readShort(g, b);
        b += 2, M > 1 && (S = Math.floor(D / (M - 1))), 68 == p && 32 == m && S > 0 && (c2 = y.readShort(g, 562));
        var F = [0, 0], C = _2(f2[u2]), N = [a2, 0, 0, 0];
        for (E = 0; E < h2; E++) for (c2 && E == c2 && (C = _2(f2[u2 + 1])), I = 0; I < l2; I++) {
          x = v2(n2, N, C[0], C), (z = 1 + (v2(n2, N, (B = 15 & x) - (U = x >>> 4), 0) << 1) << U >>> 1) & 1 << B - 1 || (z -= (1 << B) - (0 == U ? 1 : 0)), I < 2 ? F[I] = k[1 & E][I] += z : F[1 & I] += z;
          var O = Math.min(Math.max(F[1 & I], 0), (1 << d2) - 1), L = (E * l2 + I) * d2;
          e2.decode._putsF(o2, L, O << 16 - d2);
        }
      }, e2.decode._putsF = function(e3, t4, r3) {
        r3 <<= 8 - (7 & t4);
        var n2 = t4 >>> 3;
        e3[n2] |= r3 >>> 16, e3[n2 + 1] |= r3 >>> 8, e3[n2 + 2] |= r3;
      }, e2.decode._getbithuff = function(t4, r3, n2, a2) {
        e2.decode._get_byte;
        var i2, o2 = r3[0], s2 = r3[1], f2 = r3[2], l2 = r3[3];
        if (0 == n2 || f2 < 0) return 0;
        for (; !l2 && f2 < n2 && -1 != (i2 = t4[o2++]) && !(l2 = 0); ) s2 = (s2 << 8) + i2, f2 += 8;
        if (i2 = s2 << 32 - f2 >>> 32 - n2, a2 ? (f2 -= a2[i2 + 1] >>> 8, i2 = 255 & a2[i2 + 1]) : f2 -= n2, f2 < 0) throw "e";
        return r3[0] = o2, r3[1] = s2, r3[2] = f2, r3[3] = l2, i2;
      }, e2.decode._make_decoder = function(e3) {
        var t4, r3, n2, a2, i2, o2 = [];
        for (t4 = 16; 0 != t4 && !e3[t4]; t4--) ;
        var s2 = 17;
        for (o2[0] = t4, n2 = r3 = 1; r3 <= t4; r3++) for (a2 = 0; a2 < e3[r3]; a2++, ++s2) for (i2 = 0; i2 < 1 << t4 - r3; i2++) n2 <= 1 << t4 && (o2[n2++] = r3 << 8 | e3[s2]);
        return o2;
      }, e2.decode._decodeNewJPEG = function(t4, r3, n2, a2, i2, o2) {
        a2 = Math.min(a2, r3.length - n2);
        var s2 = t4.t347, f2 = s2 ? s2.length : 0, l2 = new Uint8Array(f2 + a2);
        if (s2) {
          for (var h2 = 0, d2 = 0; d2 < f2 - 1 && (255 != s2[d2] || 217 != s2[d2 + 1]); d2++) l2[h2++] = s2[d2];
          var u2 = r3[n2], c2 = r3[n2 + 1];
          255 == u2 && 216 == c2 || (l2[h2++] = u2, l2[h2++] = c2);
          for (d2 = 2; d2 < a2; d2++) l2[h2++] = r3[n2 + d2];
        } else for (d2 = 0; d2 < a2; d2++) l2[d2] = r3[n2 + d2];
        if (32803 == t4.t262[0] || 7 == t4.t259[0] && 34892 == t4.t262[0]) {
          var _2 = t4.t258[0], v2 = e2.LosslessJpegDecode(l2), w2 = v2.length;
          if (16 == _2) if (t4.isLE) for (d2 = 0; d2 < w2; d2++) i2[o2 + (d2 << 1)] = 255 & v2[d2], i2[o2 + (d2 << 1) + 1] = v2[d2] >>> 8;
          else for (d2 = 0; d2 < w2; d2++) i2[o2 + (d2 << 1)] = v2[d2] >>> 8, i2[o2 + (d2 << 1) + 1] = 255 & v2[d2];
          else if (14 == _2 || 12 == _2 || 10 == _2) {
            var g = 16 - _2;
            for (d2 = 0; d2 < w2; d2++) e2.decode._putsF(i2, d2 * _2, v2[d2] << g);
          } else {
            if (8 != _2) throw new Error("unsupported bit depth " + _2);
            for (d2 = 0; d2 < w2; d2++) i2[o2 + d2] = v2[d2];
          }
        } else {
          var b = new e2.JpegDecoder();
          b.parse(l2);
          var p = b.getData({ width: b.width, height: b.height, forceRGB: true, isSourcePDF: false });
          for (d2 = 0; d2 < p.length; d2++) i2[o2 + d2] = p[d2];
        }
        6 == t4.t262[0] && (t4.t262[0] = 2);
      }, e2.decode._decodeOldJPEGInit = function(e3, t4, r3, a2) {
        var i2, o2, s2, f2, l2, h2 = 216, d2 = 0, u2 = 0, c2 = false, _2 = e3.t513, v2 = _2 ? _2[0] : 0, w2 = e3.t514, g = w2 ? w2[0] : 0, b = e3.t324 || e3.t273 || _2, p = e3.t530, m = 0, k = 0, y = e3.t277 ? e3.t277[0] : 1, x = e3.t515;
        if (b && (u2 = b[0], c2 = b.length > 1), !c2) {
          if (255 == t4[r3] && t4[r3 + 1] == h2) return { jpegOffset: r3 };
          if (null != _2 && (255 == t4[r3 + v2] && t4[r3 + v2 + 1] == h2 ? d2 = r3 + v2 : n("JPEGInterchangeFormat does not point to SOI"), null == w2 ? n("JPEGInterchangeFormatLength field is missing") : (v2 >= u2 || v2 + g <= u2) && n("JPEGInterchangeFormatLength field value is invalid"), null != d2)) return { jpegOffset: d2 };
        }
        if (null != p && (m = p[0], k = p[1]), null != _2 && null != w2) if (g >= 2 && v2 + g <= u2) {
          for (i2 = 255 == t4[r3 + v2 + g - 2] && t4[r3 + v2 + g - 1] == h2 ? new Uint8Array(g - 2) : new Uint8Array(g), s2 = 0; s2 < i2.length; s2++) i2[s2] = t4[r3 + v2 + s2];
          n("Incorrect JPEG interchange format: using JPEGInterchangeFormat offset to derive tables");
        } else n("JPEGInterchangeFormat+JPEGInterchangeFormatLength > offset to first strip or tile");
        if (null == i2) {
          var A = 0, E = [];
          E[A++] = 255, E[A++] = h2;
          var I = e3.t519;
          if (null == I) throw new Error("JPEGQTables tag is missing");
          for (s2 = 0; s2 < I.length; s2++) for (E[A++] = 255, E[A++] = 219, E[A++] = 0, E[A++] = 67, E[A++] = s2, f2 = 0; f2 < 64; f2++) E[A++] = t4[r3 + I[s2] + f2];
          for (l2 = 0; l2 < 2; l2++) {
            var B = e3[0 == l2 ? "t520" : "t521"];
            if (null == B) throw new Error((0 == l2 ? "JPEGDCTables" : "JPEGACTables") + " tag is missing");
            for (s2 = 0; s2 < B.length; s2++) {
              E[A++] = 255, E[A++] = 196;
              var U = 19;
              for (f2 = 0; f2 < 16; f2++) U += t4[r3 + B[s2] + f2];
              for (E[A++] = U >>> 8, E[A++] = 255 & U, E[A++] = s2 | l2 << 4, f2 = 0; f2 < 16; f2++) E[A++] = t4[r3 + B[s2] + f2];
              for (f2 = 0; f2 < U; f2++) E[A++] = t4[r3 + B[s2] + 16 + f2];
            }
          }
          if (E[A++] = 255, E[A++] = 192, E[A++] = 0, E[A++] = 8 + 3 * y, E[A++] = 8, E[A++] = e3.height >>> 8 & 255, E[A++] = 255 & e3.height, E[A++] = e3.width >>> 8 & 255, E[A++] = 255 & e3.width, E[A++] = y, 1 == y) E[A++] = 1, E[A++] = 17, E[A++] = 0;
          else for (s2 = 0; s2 < 3; s2++) E[A++] = s2 + 1, E[A++] = 0 != s2 ? 17 : (15 & m) << 4 | 15 & k, E[A++] = s2;
          null != x && 0 != x[0] && (E[A++] = 255, E[A++] = 221, E[A++] = 0, E[A++] = 4, E[A++] = x[0] >>> 8 & 255, E[A++] = 255 & x[0]), i2 = new Uint8Array(E);
        }
        var z = -1;
        for (s2 = 0; s2 < i2.length - 1; ) {
          if (255 == i2[s2] && 192 == i2[s2 + 1]) {
            z = s2;
            break;
          }
          s2++;
        }
        if (-1 == z) {
          var D = new Uint8Array(i2.length + 10 + 3 * y);
          D.set(i2);
          var S = i2.length;
          if (z = i2.length, (i2 = D)[S++] = 255, i2[S++] = 192, i2[S++] = 0, i2[S++] = 8 + 3 * y, i2[S++] = 8, i2[S++] = e3.height >>> 8 & 255, i2[S++] = 255 & e3.height, i2[S++] = e3.width >>> 8 & 255, i2[S++] = 255 & e3.width, i2[S++] = y, 1 == y) i2[S++] = 1, i2[S++] = 17, i2[S++] = 0;
          else for (s2 = 0; s2 < 3; s2++) i2[S++] = s2 + 1, i2[S++] = 0 != s2 ? 17 : (15 & m) << 4 | 15 & k, i2[S++] = s2;
        }
        if (255 == t4[u2] && 218 == t4[u2 + 1]) {
          var M = t4[u2 + 2] << 8 | t4[u2 + 3];
          for ((o2 = new Uint8Array(M + 2))[0] = t4[u2], o2[1] = t4[u2 + 1], o2[2] = t4[u2 + 2], o2[3] = t4[u2 + 3], s2 = 0; s2 < M - 2; s2++) o2[s2 + 4] = t4[u2 + s2 + 4];
        } else {
          var F = 0;
          if ((o2 = new Uint8Array(8 + 2 * y))[F++] = 255, o2[F++] = 218, o2[F++] = 0, o2[F++] = 6 + 2 * y, o2[F++] = y, 1 == y) o2[F++] = 1, o2[F++] = 0;
          else for (s2 = 0; s2 < 3; s2++) o2[F++] = s2 + 1, o2[F++] = s2 << 4 | s2;
          o2[F++] = 0, o2[F++] = 63, o2[F++] = 0;
        }
        return { jpegOffset: r3, tables: i2, sosMarker: o2, sofPosition: z };
      }, e2.decode._decodeOldJPEG = function(t4, r3, n2, a2, i2, o2) {
        var s2, f2, l2, h2, d2 = e2.decode._decodeOldJPEGInit(t4, r3, n2, a2);
        if (null != d2.jpegOffset) for (s2 = n2 + a2 - d2.jpegOffset, l2 = new Uint8Array(s2), _2 = 0; _2 < s2; _2++) l2[_2] = r3[d2.jpegOffset + _2];
        else {
          for (f2 = d2.tables.length, (l2 = new Uint8Array(f2 + d2.sosMarker.length + a2 + 2)).set(d2.tables), h2 = f2, l2[d2.sofPosition + 5] = t4.height >>> 8 & 255, l2[d2.sofPosition + 6] = 255 & t4.height, l2[d2.sofPosition + 7] = t4.width >>> 8 & 255, l2[d2.sofPosition + 8] = 255 & t4.width, 255 == r3[n2] && r3[n2 + 1] == SOS || (l2.set(d2.sosMarker, h2), h2 += sosMarker.length), _2 = 0; _2 < a2; _2++) l2[h2++] = r3[n2 + _2];
          l2[h2++] = 255, l2[h2++] = EOI;
        }
        var u2 = new e2.JpegDecoder();
        u2.parse(l2);
        for (var c2 = u2.getData({ width: u2.width, height: u2.height, forceRGB: true, isSourcePDF: false }), _2 = 0; _2 < c2.length; _2++) i2[o2 + _2] = c2[_2];
        t4.t262 && 6 == t4.t262[0] && (t4.t262[0] = 2);
      }, e2.decode._decodePackBits = function(e3, t4, r3, n2, a2) {
        for (var i2 = new Int8Array(e3.buffer), o2 = new Int8Array(n2.buffer), s2 = t4 + r3; t4 < s2; ) {
          var f2 = i2[t4];
          if (t4++, f2 >= 0 && f2 < 128) for (var l2 = 0; l2 < f2 + 1; l2++) o2[a2] = i2[t4], a2++, t4++;
          if (f2 >= -127 && f2 < 0) {
            for (l2 = 0; l2 < 1 - f2; l2++) o2[a2] = i2[t4], a2++;
            t4++;
          }
        }
        return a2;
      }, e2.decode._decodeThunder = function(e3, t4, r3, n2, a2) {
        for (var i2 = [0, 1, 0, -1], o2 = [0, 1, 2, 3, 0, -3, -2, -1], s2 = t4 + r3, f2 = 2 * a2, l2 = 0; t4 < s2; ) {
          var h2 = e3[t4], d2 = h2 >>> 6, u2 = 63 & h2;
          if (t4++, 3 == d2 && (l2 = 15 & u2, n2[f2 >>> 1] |= l2 << 4 * (1 - f2 & 1), f2++), 0 == d2) for (var c2 = 0; c2 < u2; c2++) n2[f2 >>> 1] |= l2 << 4 * (1 - f2 & 1), f2++;
          if (2 == d2) for (c2 = 0; c2 < 2; c2++) {
            4 != (_2 = u2 >>> 3 * (1 - c2) & 7) && (l2 += o2[_2], n2[f2 >>> 1] |= l2 << 4 * (1 - f2 & 1), f2++);
          }
          if (1 == d2) for (c2 = 0; c2 < 3; c2++) {
            var _2;
            2 != (_2 = u2 >>> 2 * (2 - c2) & 3) && (l2 += i2[_2], n2[f2 >>> 1] |= l2 << 4 * (1 - f2 & 1), f2++);
          }
        }
      }, e2.decode._dmap = { 1: 0, "011": 1, "000011": 2, "0000011": 3, "010": -1, "000010": -2, "0000010": -3 }, e2.decode._lens = (function() {
        var e3 = function(e4, t5, r4, n3) {
          for (var a3 = 0; a3 < t5.length; a3++) e4[t5[a3]] = r4 + a3 * n3;
        }, t4 = "00110101,000111,0111,1000,1011,1100,1110,1111,10011,10100,00111,01000,001000,000011,110100,110101,101010,101011,0100111,0001100,0001000,0010111,0000011,0000100,0101000,0101011,0010011,0100100,0011000,00000010,00000011,00011010,00011011,00010010,00010011,00010100,00010101,00010110,00010111,00101000,00101001,00101010,00101011,00101100,00101101,00000100,00000101,00001010,00001011,01010010,01010011,01010100,01010101,00100100,00100101,01011000,01011001,01011010,01011011,01001010,01001011,00110010,00110011,00110100", r3 = "0000110111,010,11,10,011,0011,0010,00011,000101,000100,0000100,0000101,0000111,00000100,00000111,000011000,0000010111,0000011000,0000001000,00001100111,00001101000,00001101100,00000110111,00000101000,00000010111,00000011000,000011001010,000011001011,000011001100,000011001101,000001101000,000001101001,000001101010,000001101011,000011010010,000011010011,000011010100,000011010101,000011010110,000011010111,000001101100,000001101101,000011011010,000011011011,000001010100,000001010101,000001010110,000001010111,000001100100,000001100101,000001010010,000001010011,000000100100,000000110111,000000111000,000000100111,000000101000,000001011000,000001011001,000000101011,000000101100,000001011010,000001100110,000001100111", n2 = "11011,10010,010111,0110111,00110110,00110111,01100100,01100101,01101000,01100111,011001100,011001101,011010010,011010011,011010100,011010101,011010110,011010111,011011000,011011001,011011010,011011011,010011000,010011001,010011010,011000,010011011", a2 = "0000001111,000011001000,000011001001,000001011011,000000110011,000000110100,000000110101,0000001101100,0000001101101,0000001001010,0000001001011,0000001001100,0000001001101,0000001110010,0000001110011,0000001110100,0000001110101,0000001110110,0000001110111,0000001010010,0000001010011,0000001010100,0000001010101,0000001011010,0000001011011,0000001100100,0000001100101", i2 = "00000001000,00000001100,00000001101,000000010010,000000010011,000000010100,000000010101,000000010110,000000010111,000000011100,000000011101,000000011110,000000011111";
        t4 = t4.split(","), r3 = r3.split(","), n2 = n2.split(","), a2 = a2.split(","), i2 = i2.split(",");
        var o2 = {}, s2 = {};
        return e3(o2, t4, 0, 1), e3(o2, n2, 64, 64), e3(o2, i2, 1792, 64), e3(s2, r3, 0, 1), e3(s2, a2, 64, 64), e3(s2, i2, 1792, 64), [o2, s2];
      })(), e2.decode._decodeG4 = function(t4, r3, n2, a2, i2, o2, s2) {
        for (var f2 = e2.decode, l2 = r3 << 3, h2 = 0, d2 = "", u2 = [], c2 = [], _2 = 0; _2 < o2; _2++) c2.push(0);
        c2 = f2._makeDiff(c2);
        for (var v2 = 0, w2 = 0, g = 0, b = 0, p = 0, m = 0, k = "", y = 0, x = 8 * Math.ceil(o2 / 8); l2 >>> 3 < r3 + n2; ) {
          g = f2._findDiff(c2, v2 + (0 == v2 ? 0 : 1), 1 - p), b = f2._findDiff(c2, g, p);
          var A = 0;
          if (1 == s2 && (A = t4[l2 >>> 3] >>> 7 - (7 & l2) & 1), 2 == s2 && (A = t4[l2 >>> 3] >>> (7 & l2) & 1), l2++, d2 += A, "H" == k) {
            if (null != f2._lens[p][d2]) {
              var E = f2._lens[p][d2];
              d2 = "", h2 += E, E < 64 && (f2._addNtimes(u2, h2, p), v2 += h2, p = 1 - p, h2 = 0, 0 == --y && (k = ""));
            }
          } else "0001" == d2 && (d2 = "", f2._addNtimes(u2, b - v2, p), v2 = b), "001" == d2 && (d2 = "", k = "H", y = 2), null != f2._dmap[d2] && (w2 = g + f2._dmap[d2], f2._addNtimes(u2, w2 - v2, p), v2 = w2, d2 = "", p = 1 - p);
          u2.length == o2 && "" == k && (f2._writeBits(u2, a2, 8 * i2 + m * x), p = 0, m++, v2 = 0, c2 = f2._makeDiff(u2), u2 = []);
        }
      }, e2.decode._findDiff = function(e3, t4, r3) {
        for (var n2 = 0; n2 < e3.length; n2 += 2) if (e3[n2] >= t4 && e3[n2 + 1] == r3) return e3[n2];
      }, e2.decode._makeDiff = function(e3) {
        var t4 = [];
        1 == e3[0] && t4.push(0, 1);
        for (var r3 = 1; r3 < e3.length; r3++) e3[r3 - 1] != e3[r3] && t4.push(r3, e3[r3]);
        return t4.push(e3.length, 0, e3.length, 1), t4;
      }, e2.decode._decodeG2 = function(t4, r3, n2, a2, i2, o2, s2) {
        for (var f2 = e2.decode, l2 = r3 << 3, h2 = 0, d2 = "", u2 = [], c2 = 0, _2 = 0, v2 = 8 * Math.ceil(o2 / 8); l2 >>> 3 < r3 + n2; ) {
          var w2 = 0;
          1 == s2 && (w2 = t4[l2 >>> 3] >>> 7 - (7 & l2) & 1), 2 == s2 && (w2 = t4[l2 >>> 3] >>> (7 & l2) & 1), l2++, d2 += w2, null != (h2 = f2._lens[c2][d2]) && (f2._addNtimes(u2, h2, c2), d2 = "", h2 < 64 && (c2 = 1 - c2), u2.length == o2 && (f2._writeBits(u2, a2, 8 * i2 + _2 * v2), u2 = [], _2++, c2 = 0, 7 & l2 && (l2 += 8 - (7 & l2)), h2 >= 64 && (l2 += 8)));
        }
      }, e2.decode._decodeG3 = function(t4, r3, n2, a2, i2, o2, s2, f2) {
        for (var l2 = e2.decode, h2 = r3 << 3, d2 = 0, u2 = "", c2 = [], _2 = [], v2 = 0; v2 < o2; v2++) c2.push(0);
        for (var w2 = 0, g = 0, b = 0, p = 0, m = 0, k = -1, y = "", x = 0, A = true, E = 8 * Math.ceil(o2 / 8); h2 >>> 3 < r3 + n2; ) {
          b = l2._findDiff(_2, w2 + (0 == w2 ? 0 : 1), 1 - m), p = l2._findDiff(_2, b, m);
          var I = 0;
          if (1 == s2 && (I = t4[h2 >>> 3] >>> 7 - (7 & h2) & 1), 2 == s2 && (I = t4[h2 >>> 3] >>> (7 & h2) & 1), h2++, u2 += I, A) {
            if (null != l2._lens[m][u2]) {
              var B = l2._lens[m][u2];
              u2 = "", d2 += B, B < 64 && (l2._addNtimes(c2, d2, m), m = 1 - m, d2 = 0);
            }
          } else if ("H" == y) {
            if (null != l2._lens[m][u2]) {
              B = l2._lens[m][u2];
              u2 = "", d2 += B, B < 64 && (l2._addNtimes(c2, d2, m), w2 += d2, m = 1 - m, d2 = 0, 0 == --x && (y = ""));
            }
          } else "0001" == u2 && (u2 = "", l2._addNtimes(c2, p - w2, m), w2 = p), "001" == u2 && (u2 = "", y = "H", x = 2), null != l2._dmap[u2] && (g = b + l2._dmap[u2], l2._addNtimes(c2, g - w2, m), w2 = g, u2 = "", m = 1 - m);
          u2.endsWith("000000000001") && (k >= 0 && l2._writeBits(c2, a2, 8 * i2 + k * E), f2 && (1 == s2 && (A = 1 == (t4[h2 >>> 3] >>> 7 - (7 & h2) & 1)), 2 == s2 && (A = 1 == (t4[h2 >>> 3] >>> (7 & h2) & 1)), h2++), u2 = "", m = 0, k++, w2 = 0, _2 = l2._makeDiff(c2), c2 = []);
        }
        c2.length == o2 && l2._writeBits(c2, a2, 8 * i2 + k * E);
      }, e2.decode._addNtimes = function(e3, t4, r3) {
        for (var n2 = 0; n2 < t4; n2++) e3.push(r3);
      }, e2.decode._writeBits = function(e3, t4, r3) {
        for (var n2 = 0; n2 < e3.length; n2++) t4[r3 + n2 >>> 3] |= e3[n2] << 7 - (r3 + n2 & 7);
      }, e2.decode._decodeLZW = e2.decode._decodeLZW = (s = 0, f = 0, l = 0, h = 0, d = function() {
        var e3 = r2 >>> 3, t4 = (a[e3] << 16 | a[e3 + 1] << 8 | a[e3 + 2]) >>> 24 - (7 & r2) - f & (1 << f) - 1;
        return r2 += f, t4;
      }, u = new Uint32Array(16384), c = 0, _ = function(e3) {
        f = e3 + 1, s = h + 1;
      }, v = function(e3) {
        for (var t4 = e3 << 2, r3 = u[t4 + 2], n2 = o + r3 - 1; 65535 != t4; ) i[n2--] = u[t4], t4 = u[t4 + 1];
        o += r3;
      }, w = function(e3, t4) {
        var r3 = s << 2, n2 = e3 << 2;
        u[r3] = u[3 + (t4 << 2)], u[r3 + 1] = n2, u[r3 + 2] = u[n2 + 2] + 1, u[r3 + 3] = u[n2 + 3], 1 + ++s == 1 << f && 12 != f && f++;
      }, function(e3, t4, n2, f2, g, b) {
        r2 = t4 << 3, a = e3, i = f2, o = g;
        var p = t4 + n2 << 3, m = 0, k = 0;
        for ((function(e4) {
          if (e4 != c) {
            c = e4, h = 1 + (l = 1 << e4);
            for (var t5 = 0; t5 < h + 1; t5++) u[4 * t5] = u[4 * t5 + 3] = t5, u[4 * t5 + 1] = 65535, u[4 * t5 + 2] = 1;
          }
        })(b), _(b); r2 < p && (m = d()) != h; ) {
          if (m == l) {
            if (_(b), (m = d()) == h) break;
            v(m);
          } else m < s ? (v(m), w(k, m)) : (w(k, k), v(s - 1));
          k = m;
        }
        return o;
      }), e2.tags = {}, e2._types = (function() {
        var e3 = new Array(250);
        e3.fill(0);
        return { basic: { main: e3 = e3.concat([0, 0, 0, 0, 4, 3, 3, 3, 3, 3, 0, 0, 3, 0, 0, 0, 3, 0, 0, 2, 2, 2, 2, 4, 3, 0, 0, 3, 4, 4, 3, 3, 5, 5, 3, 2, 5, 5, 0, 0, 0, 0, 4, 4, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 3, 5, 5, 3, 0, 3, 3, 4, 4, 4, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), rest: { 33432: 2, 33434: 5, 33437: 5, 34665: 4, 34850: 3, 34853: 4, 34855: 3, 34864: 3, 34866: 4, 36864: 7, 36867: 2, 36868: 2, 37121: 7, 37377: 10, 37378: 5, 37380: 10, 37381: 5, 37383: 3, 37384: 3, 37385: 3, 37386: 5, 37510: 7, 37520: 2, 37521: 2, 37522: 2, 40960: 7, 40961: 3, 40962: 4, 40963: 4, 40965: 4, 41486: 5, 41487: 5, 41488: 3, 41985: 3, 41986: 3, 41987: 3, 41988: 5, 41989: 3, 41990: 3, 41993: 3, 41994: 3, 41995: 7, 41996: 3, 42032: 2, 42033: 2, 42034: 5, 42036: 2, 42037: 2, 59932: 7 } }, gps: { main: [1, 2, 5, 2, 5, 1, 5, 5, 0, 9], rest: { 18: 2, 29: 2 } } };
      })(), e2._readIFD = function(t4, r3, a2, i2, o2, s2) {
        var f2 = t4.readUshort(r3, a2);
        a2 += 2;
        var l2 = {};
        s2.debug && n("   ".repeat(o2), i2.length - 1, ">>>----------------");
        for (var h2 = 0; h2 < f2; h2++) {
          var d2 = t4.readUshort(r3, a2);
          a2 += 2;
          var u2 = t4.readUshort(r3, a2);
          a2 += 2;
          var c2 = t4.readUint(r3, a2);
          a2 += 4;
          var _2 = t4.readUint(r3, a2);
          a2 += 4;
          var v2 = [];
          if (1 == u2 || 7 == u2) {
            var w2 = c2 < 5 ? a2 - 4 : _2;
            w2 + c2 > r3.buffer.byteLength && (c2 = r3.buffer.byteLength - w2), v2 = new Uint8Array(r3.buffer, w2, c2);
          }
          if (2 == u2) {
            var g = c2 < 5 ? a2 - 4 : _2, b = r3[g], p = Math.max(0, Math.min(c2 - 1, r3.length - g));
            b < 128 || 0 == p ? v2.push(t4.readASCII(r3, g, p)) : v2 = new Uint8Array(r3.buffer, g, p);
          }
          if (3 == u2) for (var m = 0; m < c2; m++) v2.push(t4.readUshort(r3, (c2 < 3 ? a2 - 4 : _2) + 2 * m));
          if (4 == u2 || 13 == u2) for (m = 0; m < c2; m++) v2.push(t4.readUint(r3, (c2 < 2 ? a2 - 4 : _2) + 4 * m));
          if (5 == u2 || 10 == u2) {
            var k = 5 == u2 ? t4.readUint : t4.readInt;
            for (m = 0; m < c2; m++) v2.push([k(r3, _2 + 8 * m), k(r3, _2 + 8 * m + 4)]);
          }
          if (8 == u2) for (m = 0; m < c2; m++) v2.push(t4.readShort(r3, (c2 < 3 ? a2 - 4 : _2) + 2 * m));
          if (9 == u2) for (m = 0; m < c2; m++) v2.push(t4.readInt(r3, (c2 < 2 ? a2 - 4 : _2) + 4 * m));
          if (11 == u2) for (m = 0; m < c2; m++) v2.push(t4.readFloat(r3, _2 + 4 * m));
          if (12 == u2) for (m = 0; m < c2; m++) v2.push(t4.readDouble(r3, _2 + 8 * m));
          if (0 == c2 || 0 != v2.length) {
            if (s2.debug && n("   ".repeat(o2), d2, u2, e2.tags[d2], v2), l2["t" + d2] = v2, 330 == d2 && l2.t272 && "DSLR-A100" == l2.t272[0]) ;
            else if (330 == d2 || 34665 == d2 || 34853 == d2 || 50740 == d2 && t4.readUshort(r3, t4.readUint(v2, 0)) < 300 || 61440 == d2) {
              var y = 50740 == d2 ? [t4.readUint(v2, 0)] : v2, x = [];
              for (m = 0; m < y.length; m++) e2._readIFD(t4, r3, y[m], x, o2 + 1, s2);
              330 == d2 && (l2.subIFD = x), 34665 == d2 && (l2.exifIFD = x[0]), 34853 == d2 && (l2.gpsiIFD = x[0]), 50740 == d2 && (l2.dngPrvt = x[0]), 61440 == d2 && (l2.fujiIFD = x[0]);
            }
            if (37500 == d2 && s2.parseMN) {
              var A = v2;
              if ("Nikon" == t4.readASCII(A, 0, 5)) l2.makerNote = e2.decode(A.slice(10).buffer)[0];
              else if ("OLYMP" == t4.readASCII(A, 0, 5) || "OM SYSTEM" == t4.readASCII(A, 0, 9)) {
                var E = [8208, 8224, 8240, 8256, 8272], I = [];
                e2._readIFD(t4, A, 77 == A[1] ? 16 : 85 == A[5] ? 12 : 8, I, o2 + 1, s2);
                var B = l2.makerNote = I.pop();
                for (m = 0; m < E.length; m++) {
                  var U = "t" + E[m];
                  null != B[U] && (e2._readIFD(t4, A, B[U][0], I, o2 + 1, s2), B[U] = I.pop());
                }
                B.t12288 && (e2._readIFD(t4, B.t12288, 0, I, o2 + 1, s2), B.t12288 = I.pop());
              } else if (t4.readUshort(r3, _2) < 300 && t4.readUshort(r3, _2 + 4) <= 12) {
                I = [];
                e2._readIFD(t4, r3, _2, I, o2 + 1, s2), l2.makerNote = I[0];
              }
            }
          } else if (n(d2, "unknown TIFF tag type: ", u2, "num:", c2), 0 == h2) return;
        }
        return i2.push(l2), s2.debug && n("   ".repeat(o2), "<<<---------------"), a2;
      }, e2._writeIFD = function(t4, r3, n2, a2, i2) {
        var o2 = Object.keys(i2), s2 = o2.length;
        i2.exifIFD && s2--, i2.gpsiIFD && s2--, t4.writeUshort(n2, a2, s2);
        for (var f2 = (a2 += 2) + 12 * s2 + 4, l2 = 0; l2 < o2.length; l2++) {
          var h2 = o2[l2];
          if ("t34665" != h2 && "t34853" != h2) {
            "exifIFD" == h2 && (h2 = "t34665"), "gpsiIFD" == h2 && (h2 = "t34853");
            var d2 = parseInt(h2.slice(1)), u2 = r3.main[d2];
            if (null == u2 && (u2 = r3.rest[d2]), null == u2 || 0 == u2) throw new Error("unknown type of tag: " + d2);
            var c2 = i2[h2];
            if (34665 == d2) c2 = [f2], f2 = e2._writeIFD(t4, r3, n2, f2, i2.exifIFD)[1];
            if (34853 == d2) c2 = [f2], f2 = e2._writeIFD(t4, e2._types.gps, n2, f2, i2.gpsiIFD)[1];
            2 == u2 && (c2 = c2[0] + "\0");
            var _2 = c2.length;
            t4.writeUshort(n2, a2, d2), a2 += 2, t4.writeUshort(n2, a2, u2), a2 += 2, t4.writeUint(n2, a2, _2);
            var v2 = [-1, 1, 1, 2, 4, 8, 0, 1, 0, 4, 8, 0, 8][u2] * _2, w2 = a2 += 4;
            if (v2 > 4 && (t4.writeUint(n2, a2, f2), w2 = f2), 1 == u2 || 7 == u2) for (var g = 0; g < _2; g++) n2[w2 + g] = c2[g];
            else if (2 == u2) t4.writeASCII(n2, w2, c2);
            else if (3 == u2) for (g = 0; g < _2; g++) t4.writeUshort(n2, w2 + 2 * g, c2[g]);
            else if (4 == u2) for (g = 0; g < _2; g++) t4.writeUint(n2, w2 + 4 * g, c2[g]);
            else if (5 == u2 || 10 == u2) {
              var b = 5 == u2 ? t4.writeUint : t4.writeInt;
              for (g = 0; g < _2; g++) {
                var p = c2[g], m = p[0], k = p[1];
                if (null == m) throw "e";
                b(n2, w2 + 8 * g, m), b(n2, w2 + 8 * g + 4, k);
              }
            } else if (9 == u2) for (g = 0; g < _2; g++) t4.writeInt(n2, w2 + 4 * g, c2[g]);
            else {
              if (12 != u2) throw u2;
              for (g = 0; g < _2; g++) t4.writeDouble(n2, w2 + 8 * g, c2[g]);
            }
            v2 > 4 && (f2 += v2 += 1 & v2), a2 += 4;
          }
        }
        return [a2, f2];
      }, e2.toRGBA8 = function(e3, t4) {
        function r3(e4) {
          return e4 < 31308e-7 ? 12.92 * e4 : 1.055 * Math.pow(e4, 1 / 2.4) - 0.055;
        }
        var a2 = e3.width, i2 = e3.height, o2 = a2 * i2, s2 = e3.data, f2 = new Uint8Array(4 * o2), l2 = e3.t262 ? e3.t262[0] : 2, h2 = e3.t258 ? Math.min(32, e3.t258[0]) : 1;
        null == e3.t262 && 1 == h2 && (l2 = 0);
        var d2 = e3.t277 ? e3.t277[0] : e3.t258 ? e3.t258.length : [1, 1, 3, 1, 1, 4, 3][l2], u2 = e3.t339 ? e3.t339[0] : null;
        if (1 == l2 && 32 == h2 && 3 != u2) throw "e";
        var c2 = Math.ceil(d2 * h2 * a2 / 8);
        if (0 == l2) {
          t4 = 1 / 256;
          for (var _2 = 0; _2 < i2; _2++) {
            var v2 = _2 * c2, w2 = _2 * a2;
            if (1 == h2) for (var g = 0; g < a2; g++) {
              var b = w2 + g << 2, p = s2[v2 + (g >> 3)] >> 7 - (7 & g) & 1;
              f2[b] = f2[b + 1] = f2[b + 2] = 255 * (1 - p), f2[b + 3] = 255;
            }
            if (4 == h2) for (g = 0; g < a2; g++) {
              b = w2 + g << 2, p = s2[v2 + (g >> 1)] >> 4 - 4 * (1 & g) & 15;
              f2[b] = f2[b + 1] = f2[b + 2] = 17 * (15 - p), f2[b + 3] = 255;
            }
            if (8 == h2) for (g = 0; g < a2; g++) {
              b = w2 + g << 2, p = s2[v2 + g];
              f2[b] = f2[b + 1] = f2[b + 2] = 255 - p, f2[b + 3] = 255;
            }
            if (16 == h2) for (g = 0; g < a2; g++) {
              b = w2 + g << 2, p = s2[(k = v2 + 2 * g) + 1] << 8 | s2[k];
              f2[b] = f2[b + 1] = f2[b + 2] = Math.min(255, 255 - ~~(p * t4)), f2[b + 3] = 255;
            }
          }
        } else if (1 == l2) {
          null == t4 && (t4 = 1 / 256);
          var m = 3 & s2.length ? null : new Float32Array(s2.buffer);
          for (_2 = 0; _2 < i2; _2++) {
            v2 = _2 * c2, w2 = _2 * a2;
            if (1 == h2) for (g = 0; g < a2; g++) {
              b = w2 + g << 2, p = s2[v2 + (g >> 3)] >> 7 - (7 & g) & 1;
              f2[b] = f2[b + 1] = f2[b + 2] = 255 * p, f2[b + 3] = 255;
            }
            if (2 == h2) for (g = 0; g < a2; g++) {
              b = w2 + g << 2, p = s2[v2 + (g >> 2)] >> 6 - 2 * (3 & g) & 3;
              f2[b] = f2[b + 1] = f2[b + 2] = 85 * p, f2[b + 3] = 255;
            }
            if (8 == h2) for (g = 0; g < a2; g++) {
              b = w2 + g << 2, p = s2[v2 + g * d2];
              f2[b] = f2[b + 1] = f2[b + 2] = p, f2[b + 3] = 255;
            }
            if (16 == h2) for (g = 0; g < a2; g++) {
              b = w2 + g << 2, p = s2[(k = v2 + 2 * g) + 1] << 8 | s2[k];
              f2[b] = f2[b + 1] = f2[b + 2] = Math.min(255, ~~(p * t4)), f2[b + 3] = 255;
            }
            if (32 == h2) for (g = 0; g < a2; g++) {
              var k;
              b = w2 + g << 2, p = m[k = (v2 >>> 2) + g];
              f2[b] = f2[b + 1] = f2[b + 2] = ~~(0.5 + 255 * p), f2[b + 3] = 255;
            }
          }
        } else if (2 == l2) if (8 == h2) {
          if (1 == d2) for (g = 0; g < o2; g++) f2[4 * g] = f2[4 * g + 1] = f2[4 * g + 2] = s2[g], f2[4 * g + 3] = 255;
          if (3 == d2) for (g = 0; g < o2; g++) {
            var y = 3 * g;
            f2[b = g << 2] = s2[y], f2[b + 1] = s2[y + 1], f2[b + 2] = s2[y + 2], f2[b + 3] = 255;
          }
          if (d2 >= 4) for (g = 0; g < o2; g++) {
            y = g * d2;
            f2[b = g << 2] = s2[y], f2[b + 1] = s2[y + 1], f2[b + 2] = s2[y + 2], f2[b + 3] = s2[y + 3];
          }
        } else if (16 == h2) {
          if (4 == d2) for (g = 0; g < o2; g++) {
            y = 8 * g + 1;
            f2[b = g << 2] = s2[y], f2[b + 1] = s2[y + 2], f2[b + 2] = s2[y + 4], f2[b + 3] = s2[y + 6];
          }
          if (3 == d2) for (g = 0; g < o2; g++) {
            y = 6 * g + 1;
            f2[b = g << 2] = s2[y], f2[b + 1] = s2[y + 2], f2[b + 2] = s2[y + 4], f2[b + 3] = 255;
          }
        } else {
          if (32 != h2) throw h2;
          var x = new Float32Array(s2.buffer), A = 0;
          for (g = 0; g < x.length; g++) A = Math.min(A, x[g]);
          if (A < 0) for (g = 0; g < s2.length; g += 4) {
            var E = s2[g];
            s2[g] = s2[g + 3], s2[g + 3] = E, E = s2[g + 1], s2[g + 1] = s2[g + 2], s2[g + 2] = E;
          }
          var I = [];
          for (g = 0; g < 65536; g++) I.push(r3(g / 65535));
          for (g = 0; g < x.length; g++) {
            var B = Math.max(0, Math.min(1, x[g]));
            x[g] = I[~~(0.5 + 65535 * B)];
          }
          if (3 == d2) for (g = 0; g < o2; g++) {
            y = 3 * g;
            f2[b = g << 2] = ~~(0.5 + 255 * x[y]), f2[b + 1] = ~~(0.5 + 255 * x[y + 1]), f2[b + 2] = ~~(0.5 + 255 * x[y + 2]), f2[b + 3] = 255;
          }
          else {
            if (4 != d2) throw d2;
            for (g = 0; g < o2; g++) {
              y = 4 * g;
              f2[b = g << 2] = ~~(0.5 + 255 * x[y]), f2[b + 1] = ~~(0.5 + 255 * x[y + 1]), f2[b + 2] = ~~(0.5 + 255 * x[y + 2]), f2[b + 3] = ~~(0.5 + 255 * x[y + 3]);
            }
          }
        }
        else if (3 == l2) {
          var U = e3.t320, z = 1 << h2, D = 8 == h2 && d2 > 1 && e3.t338 && 0 != e3.t338[0];
          for (_2 = 0; _2 < i2; _2++) for (var S = 0; S < a2; S++) {
            b = (g = _2 * a2 + S) << 2;
            var M = 0, F = _2 * c2;
            if (1 == h2) M = s2[F + (S >>> 3)] >>> 7 - (7 & S) & 1;
            else if (2 == h2) M = s2[F + (S >>> 2)] >>> 6 - 2 * (3 & S) & 3;
            else if (4 == h2) M = s2[F + (S >>> 1)] >>> 4 - 4 * (1 & S) & 15;
            else {
              if (8 != h2) throw h2;
              M = s2[F + S * d2];
            }
            f2[b] = U[M] >> 8, f2[b + 1] = U[z + M] >> 8, f2[b + 2] = U[z + z + M] >> 8, f2[b + 3] = D ? s2[F + S * d2 + 1] : 255;
          }
        } else if (5 == l2) {
          var C = d2 > 4 ? 1 : 0;
          for (g = 0; g < o2; g++) {
            b = g << 2;
            var N = g * d2;
            if (window.UDOC) {
              var O = s2[N], L = s2[N + 1], Z = s2[N + 2], R = s2[N + 3], P = UDOC.C.cmykToRgb([O * (1 / 255), L * (1 / 255), Z * (1 / 255), R * (1 / 255)]);
              f2[b] = ~~(0.5 + 255 * P[0]), f2[b + 1] = ~~(0.5 + 255 * P[1]), f2[b + 2] = ~~(0.5 + 255 * P[2]);
            } else {
              O = 255 - s2[N], L = 255 - s2[N + 1], Z = 255 - s2[N + 2], R = (255 - s2[N + 3]) * (1 / 255);
              f2[b] = ~~(O * R + 0.5), f2[b + 1] = ~~(L * R + 0.5), f2[b + 2] = ~~(Z * R + 0.5);
            }
            f2[b + 3] = 255 * (1 - C) + s2[N + 4] * C;
          }
        } else if (6 == l2 && e3.t278) {
          var T = e3.t278[0];
          for (_2 = 0; _2 < i2; _2 += T) {
            g = _2 * a2;
            for (var G = T * a2, j = 0; j < G; j++) {
              b = 4 * (g + j), Z = s2[(N = 3 * g + 4 * (j >>> 1)) + (1 & j)];
              var J = s2[N + 2] - 128, H = s2[N + 3] - 128, W = Z + ((H >> 2) + (H >> 3) + (H >> 5)), K = Z - ((J >> 2) + (J >> 4) + (J >> 5)) - ((H >> 1) + (H >> 3) + (H >> 4) + (H >> 5)), Y = Z + (J + (J >> 1) + (J >> 2) + (J >> 6));
              f2[b] = Math.max(0, Math.min(255, W)), f2[b + 1] = Math.max(0, Math.min(255, K)), f2[b + 2] = Math.max(0, Math.min(255, Y)), f2[b + 3] = 255;
            }
          }
        } else if (32845 == l2) for (_2 = 0; _2 < i2; _2++) for (S = 0; S < a2; S++) {
          b = 4 * (_2 * a2 + S);
          var q = s2[(N = 6 * (_2 * a2 + S)) + 1] << 8 | s2[N], X = (q = Math.pow(2, (q + 0.5) / 256 - 64), (s2[N + 3] + 0.5) / 410), Q = (s2[N + 5] + 0.5) / 410, V = 9 * X / (6 * X - 16 * Q + 12), $ = 4 * Q / (6 * X - 16 * Q + 12), ee = V * q / $, te = (1 - V - $) * q / $;
          W = 2.69 * ee - 1.276 * (Z = q) - 0.414 * te, K = -1.022 * ee + 1.978 * Z + 0.044 * te, Y = 0.061 * ee - 0.224 * Z + 1.163 * te;
          f2[b] = 255 * r3(Math.min(W, 1)), f2[b + 1] = 255 * r3(Math.min(K, 1)), f2[b + 2] = 255 * r3(Math.min(Y, 1)), f2[b + 3] = 255;
        }
        else n("Unknown Photometric interpretation: " + l2);
        return f2;
      }, e2.replaceIMG = function(t4) {
        null == t4 && (t4 = document.getElementsByTagName("img"));
        for (var r3 = ["tif", "tiff", "dng", "cr2", "nef"], n2 = 0; n2 < t4.length; n2++) {
          var a2 = t4[n2], i2 = a2.getAttribute("src");
          if (null != i2) {
            var o2 = i2.split(".").pop().toLowerCase();
            if (-1 != r3.indexOf(o2)) {
              var s2 = new XMLHttpRequest();
              e2._xhrs.push(s2), e2._imgs.push(a2), s2.open("GET", i2), s2.responseType = "arraybuffer", s2.onload = e2._imgLoaded, s2.send();
            }
          }
        }
      }, e2._xhrs = [], e2._imgs = [], e2._imgLoaded = function(t4) {
        var r3 = e2._xhrs.indexOf(t4.target), n2 = e2._imgs[r3];
        e2._xhrs.splice(r3, 1), e2._imgs.splice(r3, 1), n2.setAttribute("src", e2.bufferToURI(t4.target.response));
      }, e2.bufferToURI = function(t4) {
        var r3 = e2.decode(t4), n2 = r3, a2 = 0, i2 = n2[0];
        r3[0].subIFD && (n2 = n2.concat(r3[0].subIFD));
        for (var o2 = 0; o2 < n2.length; o2++) {
          var s2 = n2[o2];
          if (!(null == s2.t258 || s2.t258.length < 3)) {
            var f2 = s2.t256 * s2.t257;
            f2 > a2 && (a2 = f2, i2 = s2);
          }
        }
        e2.decodeImage(t4, i2, r3);
        var l2 = e2.toRGBA8(i2), h2 = i2.width, d2 = i2.height, u2 = document.createElement("canvas");
        u2.width = h2, u2.height = d2;
        var c2 = u2.getContext("2d"), _2 = new ImageData(new Uint8ClampedArray(l2.buffer), h2, d2);
        return c2.putImageData(_2, 0, 0), u2.toDataURL();
      }, e2._binBE = { nextZero: function(e3, t4) {
        for (; 0 != e3[t4]; ) t4++;
        return t4;
      }, readUshort: function(e3, t4) {
        return e3[t4] << 8 | e3[t4 + 1];
      }, readShort: function(t4, r3) {
        var n2 = e2._binBE.ui8;
        return n2[0] = t4[r3 + 1], n2[1] = t4[r3 + 0], e2._binBE.i16[0];
      }, readInt: function(t4, r3) {
        var n2 = e2._binBE.ui8;
        return n2[0] = t4[r3 + 3], n2[1] = t4[r3 + 2], n2[2] = t4[r3 + 1], n2[3] = t4[r3 + 0], e2._binBE.i32[0];
      }, readUint: function(t4, r3) {
        var n2 = e2._binBE.ui8;
        return n2[0] = t4[r3 + 3], n2[1] = t4[r3 + 2], n2[2] = t4[r3 + 1], n2[3] = t4[r3 + 0], e2._binBE.ui32[0];
      }, readASCII: function(e3, t4, r3) {
        for (var n2 = "", a2 = 0; a2 < r3; a2++) n2 += String.fromCharCode(e3[t4 + a2]);
        return n2;
      }, readFloat: function(t4, r3) {
        for (var n2 = e2._binBE.ui8, a2 = 0; a2 < 4; a2++) n2[a2] = t4[r3 + 3 - a2];
        return e2._binBE.fl32[0];
      }, readDouble: function(t4, r3) {
        for (var n2 = e2._binBE.ui8, a2 = 0; a2 < 8; a2++) n2[a2] = t4[r3 + 7 - a2];
        return e2._binBE.fl64[0];
      }, writeUshort: function(e3, t4, r3) {
        e3[t4] = r3 >> 8 & 255, e3[t4 + 1] = 255 & r3;
      }, writeInt: function(t4, r3, n2) {
        var a2 = e2._binBE.ui8;
        e2._binBE.i32[0] = n2, t4[r3 + 3] = a2[0], t4[r3 + 2] = a2[1], t4[r3 + 1] = a2[2], t4[r3 + 0] = a2[3];
      }, writeUint: function(e3, t4, r3) {
        e3[t4] = r3 >> 24 & 255, e3[t4 + 1] = r3 >> 16 & 255, e3[t4 + 2] = r3 >> 8 & 255, e3[t4 + 3] = 255 & r3;
      }, writeASCII: function(e3, t4, r3) {
        for (var n2 = 0; n2 < r3.length; n2++) e3[t4 + n2] = r3.charCodeAt(n2);
      }, writeDouble: function(t4, r3, n2) {
        e2._binBE.fl64[0] = n2;
        for (var a2 = 0; a2 < 8; a2++) t4[r3 + a2] = e2._binBE.ui8[7 - a2];
      } }, e2._binBE.ui8 = new Uint8Array(8), e2._binBE.i16 = new Int16Array(e2._binBE.ui8.buffer), e2._binBE.i32 = new Int32Array(e2._binBE.ui8.buffer), e2._binBE.ui32 = new Uint32Array(e2._binBE.ui8.buffer), e2._binBE.fl32 = new Float32Array(e2._binBE.ui8.buffer), e2._binBE.fl64 = new Float64Array(e2._binBE.ui8.buffer), e2._binLE = { nextZero: e2._binBE.nextZero, readUshort: function(e3, t4) {
        return e3[t4 + 1] << 8 | e3[t4];
      }, readShort: function(t4, r3) {
        var n2 = e2._binBE.ui8;
        return n2[0] = t4[r3 + 0], n2[1] = t4[r3 + 1], e2._binBE.i16[0];
      }, readInt: function(t4, r3) {
        var n2 = e2._binBE.ui8;
        return n2[0] = t4[r3 + 0], n2[1] = t4[r3 + 1], n2[2] = t4[r3 + 2], n2[3] = t4[r3 + 3], e2._binBE.i32[0];
      }, readUint: function(t4, r3) {
        var n2 = e2._binBE.ui8;
        return n2[0] = t4[r3 + 0], n2[1] = t4[r3 + 1], n2[2] = t4[r3 + 2], n2[3] = t4[r3 + 3], e2._binBE.ui32[0];
      }, readASCII: e2._binBE.readASCII, readFloat: function(t4, r3) {
        for (var n2 = e2._binBE.ui8, a2 = 0; a2 < 4; a2++) n2[a2] = t4[r3 + a2];
        return e2._binBE.fl32[0];
      }, readDouble: function(t4, r3) {
        for (var n2 = e2._binBE.ui8, a2 = 0; a2 < 8; a2++) n2[a2] = t4[r3 + a2];
        return e2._binBE.fl64[0];
      }, writeUshort: function(e3, t4, r3) {
        e3[t4] = 255 & r3, e3[t4 + 1] = r3 >> 8 & 255;
      }, writeInt: function(t4, r3, n2) {
        var a2 = e2._binBE.ui8;
        e2._binBE.i32[0] = n2, t4[r3 + 0] = a2[0], t4[r3 + 1] = a2[1], t4[r3 + 2] = a2[2], t4[r3 + 3] = a2[3];
      }, writeUint: function(e3, t4, r3) {
        e3[t4] = r3 >>> 0 & 255, e3[t4 + 1] = r3 >>> 8 & 255, e3[t4 + 2] = r3 >>> 16 & 255, e3[t4 + 3] = r3 >>> 24 & 255;
      }, writeASCII: e2._binBE.writeASCII }, e2._copyTile = function(e3, t4, r3, n2, a2, i2, o2, s2) {
        for (var f2 = Math.min(t4, a2 - o2), l2 = Math.min(r3, i2 - s2), h2 = 0; h2 < l2; h2++) for (var d2 = (s2 + h2) * a2 + o2, u2 = h2 * t4, c2 = 0; c2 < f2; c2++) n2[d2 + c2] = e3[u2 + c2];
      }, e2.LosslessJpegDecode = /* @__PURE__ */ (function() {
        var e3, t4;
        function r3() {
          return e3[t4++];
        }
        function n2() {
          return e3[t4++] << 8 | e3[t4++];
        }
        function a2(e4) {
          for (var t5 = r3(), n3 = [0, 0, 0, 255], a3 = [], o3 = 0; o3 < 16; o3++) a3[o3] = r3();
          for (o3 = 0; o3 < 16; o3++) for (var s3 = 0; s3 < a3[o3]; s3++) {
            n3[i2(n3, 0, o3 + 1, 1) + 3] = r3();
          }
          var f3 = new Uint8Array(256);
          e4[t5] = [new Uint8Array(n3), f3];
          for (o3 = 0; o3 < 256; o3++) {
            for (var l3 = 8, h3 = o3, d3 = 0; 255 == n3[d3 + 3] && 0 != l3; ) d3 = n3[d3 + (h3 >> --l3 & 1)];
            f3[o3] = d3;
          }
        }
        function i2(e4, t5, r4, n3) {
          if (255 != e4[t5 + 3]) return 0;
          if (0 == r4) return t5;
          for (var a3 = 0; a3 < 2; a3++) {
            0 == e4[t5 + a3] && (e4[t5 + a3] = e4.length, e4.push(0, 0, n3, 255));
            var o3 = i2(e4, e4[t5 + a3], r4 - 1, n3 + 1);
            if (0 != o3) return o3;
          }
          return 0;
        }
        function o2(e4) {
          for (var t5 = e4.b, r4 = e4.f; t5 < 25 && e4.a < e4.d; ) {
            var n3 = e4.data[e4.a++];
            255 != n3 || e4.c || e4.a++, r4 = r4 << 8 | n3, t5 += 8;
          }
          if (t5 < 0) throw "e";
          e4.b = t5, e4.f = r4;
        }
        function s2(e4, t5) {
          return t5.b < e4 && o2(t5), t5.f >> (t5.b -= e4) & 65535 >> 16 - e4;
        }
        function f2(e4, t5) {
          var r4 = e4[0], n3 = 0, a3 = 255;
          t5.b < 16 && o2(t5);
          var i3 = t5.f >> t5.b - 8 & 255;
          for (a3 = r4[(n3 = e4[1][i3]) + 3], t5.b -= r4[n3 + 2]; 255 == a3; ) a3 = r4[(n3 = r4[n3 + (t5.f >> --t5.b & 1)]) + 3];
          return a3;
        }
        function l2(e4, t5) {
          return e4 < 32768 >> 16 - t5 && (e4 += 1 - (1 << t5)), e4;
        }
        function h2(e4, t5) {
          var r4 = f2(e4, t5);
          return 0 == r4 ? 0 : 16 == r4 ? -32768 : l2(s2(r4, t5), r4);
        }
        function d2(e4, t5, r4, n3, a3, i3) {
          for (var o3 = 0, s3 = 0; s3 < i3; s3++) {
            for (var f3 = s3 * t5, l3 = 0; l3 < t5; l3 += a3) {
              o3++;
              for (var d3 = 0; d3 < a3; d3++) e4[f3 + l3 + d3] = h2(n3[d3], r4);
            }
            if (0 != r4.e && o3 % r4.e == 0 && 0 != s3) {
              for (var u3 = r4.a, c3 = r4.data; 255 != c3[u3] || !(208 <= c3[u3 + 1] && c3[u3 + 1] <= 215); ) u3--;
              r4.a = u3 + 2, r4.f = 0, r4.b = 0;
            }
          }
        }
        function u2(e4, t5) {
          return l2(s2(e4, t5), e4);
        }
        function c2(e4, t5, r4, n3, a3, i3, o3, s3) {
          for (var f3 = r4 * o3, l3 = a3; l3 < i3; l3++) e4[l3] += 1 << s3 - 1;
          for (var h3 = o3; h3 < f3; h3 += o3) for (l3 = a3; l3 < i3; l3++) e4[h3 + l3] += e4[h3 + l3 - o3];
          for (var d3 = 1; d3 < n3; d3++) {
            var u3 = d3 * f3;
            for (l3 = a3; l3 < i3; l3++) e4[u3 + l3] += e4[u3 + l3 - f3];
            for (h3 = o3; h3 < f3; h3 += o3) for (l3 = a3; l3 < i3; l3++) {
              var c3 = u3 + h3 + l3, _2 = c3 - f3, v2 = e4[c3 - o3], w2 = 0;
              if (0 == t5) w2 = 0;
              else if (1 == t5) w2 = v2;
              else if (2 == t5) w2 = e4[_2];
              else if (3 == t5) w2 = e4[_2 - o3];
              else if (4 == t5) w2 = v2 + (e4[_2] - e4[_2 - o3]);
              else if (5 == t5) w2 = v2 + (e4[_2] - e4[_2 - o3] >>> 1);
              else if (6 == t5) w2 = e4[_2] + (v2 - e4[_2 - o3] >>> 1);
              else {
                if (7 != t5) throw t5;
                w2 = v2 + e4[_2] >>> 1;
              }
              e4[c3] += w2;
            }
          }
        }
        return function(i3) {
          if (e3 = i3, t4 = 0, 65496 != n2()) throw "e";
          for (var o3 = [], s3 = 0, l3 = 0, h3 = 0, _2 = [], v2 = [], w2 = [], g = 0, b = 0, p = 0; ; ) {
            var m = n2();
            if (65535 != m) {
              var k = n2();
              if (65475 == m) {
                l3 = r3(), b = n2(), p = n2(), g = r3();
                for (var y = 0; y < g; y++) {
                  var x = r3(), A = r3();
                  if (0 != r3()) throw "e";
                  o3[x] = [y, A >> 4, 15 & A];
                }
              } else if (65476 == m) for (var E = t4 + k - 2; t4 < E; ) a2(v2);
              else {
                if (65498 == m) {
                  t4++;
                  for (y = 0; y < g; y++) {
                    var I = o3[r3()];
                    w2[I[0]] = v2[r3() >>> 4], _2[I[0]] = I.slice(1);
                  }
                  s3 = r3(), t4 += 2;
                  break;
                }
                65501 == m ? h3 = n2() : t4 += k - 2;
              }
            } else t4--;
          }
          var B = new (l3 > 8 ? Uint16Array : Uint8Array)(b * p * g), U = { b: 0, f: 0, c: 8 == s3, a: t4, data: e3, d: e3.length, e: h3 };
          if (U.c) !(function(r4, n3, a3, i4, o4) {
            for (var s4 = e3.length - t4, l4 = 0; l4 < s4; l4 += 4) {
              var h4 = e3[t4 + l4];
              e3[t4 + l4] = e3[t4 + l4 + 3], e3[t4 + l4 + 3] = h4, h4 = e3[t4 + l4 + 1], e3[t4 + l4 + 1] = e3[t4 + l4 + 2], e3[t4 + l4 + 2] = h4;
            }
            for (var d3 = 0; d3 < o4; d3++) for (var c3 = 32768, _3 = 32768, v3 = 0; v3 < n3; v3 += 2) {
              var w3 = f2(i4, a3), g2 = f2(i4, a3);
              0 != w3 && (c3 += u2(w3, a3)), 0 != g2 && (_3 += u2(g2, a3)), r4[d3 * n3 + v3] = 65535 & c3, r4[d3 * n3 + v3 + 1] = 65535 & _3;
            }
          })(B, p * g, U, w2[0], b);
          else {
            var z = [], D = 0, S = 0;
            for (y = 0; y < g; y++) {
              var M = _2[y];
              (G = M[0]) > D && (D = G), (T = M[1]) > S && (S = T), z.push(G * T);
            }
            if (1 != D || 1 != S) {
              if (3 != g || 1 != z[1] || 1 != z[2]) throw "e";
              if (2 != D || 1 != S && 2 != S) throw "e";
              var F = [], C = 0;
              for (y = 0; y < g; y++) {
                for (var N = 0; N < z[y]; N++) F.push(w2[y]);
                C += z[y];
              }
              var O = p / D, L = b / S, Z = O * L;
              d2(B, O * C, U, F, C, L), c2(B, s3, O, L, C - 2, C, C, l3);
              var R = new Uint16Array(Z * z[0]);
              if (2 == D && 2 == S) {
                for (y = 0; y < Z; y++) R[4 * y] = B[6 * y], R[4 * y + 1] = B[6 * y + 1], R[4 * y + 2] = B[6 * y + 2], R[4 * y + 3] = B[6 * y + 3];
                c2(R, s3, 4 * O, L, 0, 1, 1, l3);
                for (y = 0; y < Z; y++) B[6 * y] = R[4 * y], B[6 * y + 1] = R[4 * y + 1], B[6 * y + 2] = R[4 * y + 2], B[6 * y + 3] = R[4 * y + 3];
              }
              if (2 == D && 1 == S) {
                for (y = 0; y < Z; y++) R[2 * y] = B[4 * y], R[2 * y + 1] = B[4 * y + 1];
                c2(R, s3, 2 * O, L, 0, 1, 1, l3);
                for (y = 0; y < Z; y++) B[4 * y] = R[2 * y], B[4 * y + 1] = R[2 * y + 1];
              }
              for (var P = B.slice(0), T = 0; T < b; T++) if (2 == S) for (var G = 0; G < p; G++) {
                var j = ((T >>> 1) * O + (G >>> 1)) * C, J = 2 * (1 & T) + (1 & G);
                B[H = (T * p + G) * g] = P[j + J], B[H + 1] = P[j + 4], B[H + 2] = P[j + 5];
              }
              else for (G = 0; G < p; G++) {
                var H;
                j = (T * O + (G >>> 1)) * C, J = 1 & G;
                B[H = (T * p + G) * g] = P[j + J], B[H + 1] = P[j + 2], B[H + 2] = P[j + 3];
              }
            } else if (d2(B, p * g, U, w2, g, b), 0 == h3) c2(B, s3, p, b, 0, g, g, l3);
            else {
              var W = Math.floor(h3 / p);
              for (T = 0; T < b; T += W) {
                var K = B.slice(T * p * g, (T + W) * p * g);
                c2(K, s3, p, W, 0, g, g, l3), B.set(K, T * p * g);
              }
            }
          }
          return B;
        };
      })(), (function() {
        var t4 = 5, r3 = 6, n2 = 13, a2 = 14;
        function i2(e3) {
          var t5 = { c: new Int8Array(2 << e3.u) };
          return (function(e4, t6, r4) {
            var n3 = [t6, 3 * t6 + 18, 5 * t6 + 67, 7 * t6 + 276, r4];
            e4.o = t6, e4.w = (n3[4] + 2 * t6) / (2 * t6 + 1) + 1 | 0, e4.v = Math.ceil(Math.log2(e4.w)), e4.t = 9, (function(e5, t7) {
              for (var r5 = -t7[4], n4 = 0; r5 <= t7[4]; n4++, r5++) e5[n4] = r5 <= -t7[3] ? -4 : r5 <= -t7[2] ? -3 : r5 <= -t7[1] ? -2 : r5 < -t7[0] ? -1 : r5 <= t7[0] ? 0 : r5 < t7[1] ? 1 : r5 < t7[2] ? 2 : r5 < t7[3] ? 3 : 4;
            })(e4.c, n3);
          })(t5, 0, e3.g), t5;
        }
        function o2(e3) {
          for (var t5 = [[], [], []], r4 = Math.max(2, e3.w + 32 >>> 6), n3 = 0; n3 < 3; n3++) for (var a3 = 0; a3 < 41; a3++) t5[n3][a3] = [r4, 1];
          return t5;
        }
        function s2(e3, t5) {
          var r4 = 0, n3 = 8 - e3.a;
          e3.j, e3.a;
          if (t5) {
            if (t5 >= n3) do {
              r4 <<= n3, t5 -= n3, r4 |= e3[e3.j] & (1 << n3) - 1, e3.j++, n3 = 8;
            } while (t5 >= 8);
            t5 && (r4 <<= t5, n3 -= t5, r4 |= e3[e3.j] >>> n3 & (1 << t5) - 1), e3.a = 8 - n3;
          }
          return r4;
        }
        function f2(e3, t5, r4, n3, a3, i3, o3, f3) {
          null == f3 && (f3 = 0);
          var l3, h3, d3, u3, c3, _2, v2 = i3 + 1, w2 = v2 % 2, g = 0, b = n3[a3], p = n3[a3 - 1], m = n3[a3 - 2][v2], k = p[v2 - 1], y = p[v2], x = p[v2 + 1], A = b[v2 - 1], E = b[v2 + 1], I = Math.abs;
          if (w2 && (d3 = I(x - y), u3 = I(m - y), c3 = I(k - y)), w2) {
            if (_2 = (_2 = d3 > c3 && u3 < d3 ? m + k : d3 < c3 && u3 < c3 ? m + x : x + k) + 2 * y >>> 2, f3) return void (b[v2] = _2);
            l3 = t5.t * t5.c[e3.g + y - m] + t5.c[e3.g + k - y];
          } else _2 = y > k && y > x || y < k && y < x ? E + A + 2 * y >>> 2 : A + E >>> 1, l3 = t5.t * t5.c[e3.g + y - k] + t5.c[e3.g + k - A];
          h3 = I(l3);
          var B = (function(e4) {
            for (var t6 = -1, r5 = 0; !r5; t6++) r5 = e4[e4.j] >>> 7 - e4.a & 1, e4.a++, e4.a &= 7, e4.a || e4.j++;
            return t6;
          })(r4);
          if (B < e3.n - t5.v - 1) {
            var U = (function(e4, t6) {
              var r5 = 0;
              if (t6 < e4) for (; r5 <= 14 && t6 << ++r5 < e4; ) ;
              return r5;
            })(o3[h3][0], o3[h3][1]);
            g = s2(r4, U) + (B << U);
          } else g = s2(r4, t5.v) + 1;
          g = 1 & g ? -1 - (g >>> 1) : g >>> 1, o3[h3][0] += I(g), o3[h3][1] == e3.f && (o3[h3][0] >>>= 1, o3[h3][1] >>>= 1), o3[h3][1]++, _2 = l3 < 0 ? _2 - g : _2 + g, e3.i && (_2 < 0 ? _2 += t5.w : _2 > e3.g && (_2 -= t5.w)), b[v2] = _2 >= 0 ? Math.min(_2, e3.g) : 0;
        }
        function l2(e3, t5, r4) {
          for (var n3 = e3[0].length, a3 = t5; a3 <= r4; a3++) e3[a3][0] = e3[a3 - 1][1], e3[a3][n3 - 1] = e3[a3 - 1][n3 - 2];
        }
        function h2(e3) {
          l2(e3, 7, 12), l2(e3, 2, 4), l2(e3, 15, 17);
        }
        function d2(e3, t5, r4, a3, i3, o3, s3, l3, d3, u3, c3, _2, v2) {
          for (var w2 = 0, g = 1, b = i3 < n2 && i3 > 4; g < e3.m; ) w2 < e3.m && (f2(e3, t5, r4, a3, i3, w2, s3[d3], e3.h && (b && u3 || !b && (c3 || (w2 & _2) == v2))), f2(e3, t5, r4, a3, o3, w2, s3[d3], e3.h && (!b && u3 || b && (c3 || (w2 & _2) == v2))), w2 += 2), w2 > 8 && (f2(e3, t5, r4, a3, i3, g, l3[d3]), f2(e3, t5, r4, a3, o3, g, l3[d3]), g += 2);
          h2(a3);
        }
        function u2(e3, t5, r4, n3, a3, i3) {
          d2(e3, t5, r4, n3, 2, 7, a3, i3, 0, 0, 1, 0, 8), d2(e3, t5, r4, n3, 8, 15, a3, i3, 1, 0, 1, 0, 8), d2(e3, t5, r4, n3, 3, 9, a3, i3, 2, 1, 0, 3, 0), d2(e3, t5, r4, n3, 10, 16, a3, i3, 0, 0, 0, 3, 2), d2(e3, t5, r4, n3, 4, 11, a3, i3, 1, 0, 0, 3, 2), d2(e3, t5, r4, n3, 12, 17, a3, i3, 2, 1, 0, 3, 0);
        }
        function c2(e3, t5, r4, n3, a3, i3) {
          var o3 = i3.length, s3 = e3.l;
          a3 + 1 == e3.s && (s3 = e3.e - a3 * e3.l);
          for (var f3 = 6 * e3.e * n3 + a3 * e3.l, l3 = 0; l3 < 6; l3++) {
            for (var h3 = 0; h3 < s3; h3++) {
              var d3, u3 = i3[l3 % o3][h3 % o3];
              d3 = 0 == u3 ? 2 + (l3 >>> 1) : 2 == u3 ? 15 + (l3 >>> 1) : 7 + l3;
              var c3 = e3.h ? (2 * h3 / 3 & 2147483646 | h3 % 3 & 1) + (h3 % 3 >>> 1) : h3 >>> 1;
              t5[f3 + h3] = r4[d3][c3 + 1];
            }
            f3 += e3.e;
          }
        }
        e2._decompressRAF = function(s3, f3) {
          var l3 = (function(t5) {
            var r4 = e2._binBE.readUshort, n3 = { b: r4(t5, 0), i: t5[2], C: t5[3], u: t5[4], q: r4(t5, 5), k: r4(t5, 7), e: r4(t5, 9), l: r4(t5, 11), s: t5[13], d: r4(t5, 14) };
            if (18771 != n3.b || n3.i > 1 || n3.q < 6 || n3.q % 6 || n3.e < 768 || n3.e % 24 || 768 != n3.l || n3.k < n3.l || n3.k % n3.l || n3.k - n3.e >= n3.l || n3.s > 16 || n3.s != n3.k / n3.l || n3.s != Math.ceil(n3.e / n3.l) || n3.d != n3.q / 6 || 12 != n3.u && 14 != n3.u && 16 != n3.u || 16 != n3.C && 0 != n3.C) throw "Invalid data";
            if (0 == n3.i) throw "Not implemented. We need this file!";
            return n3.h = 16 == n3.C, n3.m = 0 | (n3.h ? 2 * n3.l / 3 : n3.l >>> 1), n3.A = n3.m + 2, n3.f = 64, n3.g = (1 << n3.u) - 1, n3.n = 4 * n3.u, n3;
          })(s3), d3 = (function(t5, r4) {
            var n3 = new Array(r4.s), a3 = 4 * r4.s, i3 = 16 + a3;
            12 & a3 && (i3 += 16 - (12 & a3));
            for (var o3 = 0, s4 = 16; o3 < r4.s; s4 += 4) {
              var f4 = e2._binBE.readUint(t5, s4);
              n3[o3] = t5.slice(i3, i3 + f4), n3[o3].j = 0, n3[o3].a = 0, i3 += f4, o3++;
            }
            if (i3 != t5.length) throw "Invalid data";
            return n3;
          })(s3, l3), _2 = i2(l3), v2 = new Int16Array(l3.e * l3.q);
          null == f3 && (f3 = l3.h ? [[1, 1, 0, 1, 1, 2], [1, 1, 2, 1, 1, 0], [2, 0, 1, 0, 2, 1], [1, 1, 2, 1, 1, 0], [1, 1, 0, 1, 1, 2], [0, 2, 1, 2, 0, 1]] : [[0, 1], [3, 2]]);
          for (var w2 = [[0, 3], [1, 4], [t4, 11], [r3, 12], [n2, 16], [a2, 17]], g = [], b = 0; b < 18; b++) g[b] = new Uint16Array(l3.A);
          for (var p = 0; p < l3.s; p++) {
            var m = o2(_2), k = o2(_2);
            for (b = 0; b < 18; b++) for (var y = 0; y < l3.A; y++) g[b][y] = 0;
            for (var x = 0; x < l3.d; x++) {
              u2(l3, _2, d3[p], g, m, k);
              for (b = 0; b < 6; b++) for (y = 0; y < l3.A; y++) g[w2[b][0]][y] = g[w2[b][1]][y];
              c2(l3, v2, g, x, p, f3);
              for (b = 2; b < 18; b++) if (-1 == [t4, r3, n2, a2].indexOf(b)) for (y = 0; y < l3.A; y++) g[b][y] = 0;
              h2(g);
            }
          }
          return v2;
        };
      })();
    })(t2, r(8440));
  })();
}