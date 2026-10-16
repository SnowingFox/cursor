exports.id = 502, exports.ids = [502], exports.modules = { 36643: (r, e, n) => {
  var o = n(86727), a = n(54236);
  r.exports = { encode: o, decode: a };
}, 54236: (r) => {
  var e = (function() {
    "use strict";
    var r2 = new Int32Array([0, 1, 8, 16, 9, 2, 3, 10, 17, 24, 32, 25, 18, 11, 4, 5, 12, 19, 26, 33, 40, 48, 41, 34, 27, 20, 13, 6, 7, 14, 21, 28, 35, 42, 49, 56, 57, 50, 43, 36, 29, 22, 15, 23, 30, 37, 44, 51, 58, 59, 52, 45, 38, 31, 39, 46, 53, 60, 61, 54, 47, 55, 62, 63]), e2 = 4017, n = 799, o = 3406, a = 2276, t = 1567, s = 3784, i = 5793, f = 2896;
    function c() {
    }
    function l(r3, e3) {
      for (var n2, o2, a2 = 0, t2 = [], s2 = 16; s2 > 0 && !r3[s2 - 1]; ) s2--;
      t2.push({ children: [], index: 0 });
      var i2, f2 = t2[0];
      for (n2 = 0; n2 < s2; n2++) {
        for (o2 = 0; o2 < r3[n2]; o2++) {
          for ((f2 = t2.pop()).children[f2.index] = e3[a2]; f2.index > 0; ) {
            if (0 === t2.length) throw new Error("Could not recreate Huffman Table");
            f2 = t2.pop();
          }
          for (f2.index++, t2.push(f2); t2.length <= n2; ) t2.push(i2 = { children: [], index: 0 }), f2.children[f2.index] = i2.children, f2 = i2;
          a2++;
        }
        n2 + 1 < s2 && (t2.push(i2 = { children: [], index: 0 }), f2.children[f2.index] = i2.children, f2 = i2);
      }
      return t2[0].children;
    }
    function h(e3, n2, o2, a2, t2, s2, i2, f2, c2, l2) {
      o2.precision, o2.samplesPerLine, o2.scanLines;
      var h2 = o2.mcusPerLine, u2 = o2.progressive, v2 = (o2.maxH, o2.maxV, n2), m2 = 0, d2 = 0;
      function p2() {
        if (d2 > 0) return d2--, m2 >> d2 & 1;
        if (255 == (m2 = e3[n2++])) {
          var r3 = e3[n2++];
          if (r3) throw new Error("unexpected marker: " + (m2 << 8 | r3).toString(16));
        }
        return d2 = 7, m2 >>> 7;
      }
      function w(r3) {
        for (var e4, n3 = r3; null !== (e4 = p2()); ) {
          if ("number" == typeof (n3 = n3[e4])) return n3;
          if ("object" != typeof n3) throw new Error("invalid huffman sequence");
        }
        return null;
      }
      function b(r3) {
        for (var e4 = 0; r3 > 0; ) {
          var n3 = p2();
          if (null === n3) return;
          e4 = e4 << 1 | n3, r3--;
        }
        return e4;
      }
      function g(r3) {
        var e4 = b(r3);
        return e4 >= 1 << r3 - 1 ? e4 : e4 + (-1 << r3) + 1;
      }
      var y = 0;
      var k, A = 0;
      function x(r3, e4, n3, o3, a3) {
        var t3 = n3 % h2, s3 = (n3 / h2 | 0) * r3.v + o3, i3 = t3 * r3.h + a3;
        void 0 === r3.blocks[s3] && l2.tolerantDecoding || e4(r3, r3.blocks[s3][i3]);
      }
      function M(r3, e4, n3) {
        var o3 = n3 / r3.blocksPerLine | 0, a3 = n3 % r3.blocksPerLine;
        void 0 === r3.blocks[o3] && l2.tolerantDecoding || e4(r3, r3.blocks[o3][a3]);
      }
      var P, E, T, C, L, X, B = a2.length;
      X = u2 ? 0 === s2 ? 0 === f2 ? function(r3, e4) {
        var n3 = w(r3.huffmanTableDC), o3 = 0 === n3 ? 0 : g(n3) << c2;
        e4[0] = r3.pred += o3;
      } : function(r3, e4) {
        e4[0] |= p2() << c2;
      } : 0 === f2 ? function(e4, n3) {
        if (y > 0) y--;
        else for (var o3 = s2, a3 = i2; o3 <= a3; ) {
          var t3 = w(e4.huffmanTableAC), f3 = 15 & t3, l3 = t3 >> 4;
          if (0 !== f3) n3[r2[o3 += l3]] = g(f3) * (1 << c2), o3++;
          else {
            if (l3 < 15) {
              y = b(l3) + (1 << l3) - 1;
              break;
            }
            o3 += 16;
          }
        }
      } : function(e4, n3) {
        for (var o3 = s2, a3 = i2, t3 = 0; o3 <= a3; ) {
          var f3 = r2[o3], l3 = n3[f3] < 0 ? -1 : 1;
          switch (A) {
            case 0:
              var h3 = w(e4.huffmanTableAC), u3 = 15 & h3;
              if (t3 = h3 >> 4, 0 === u3) t3 < 15 ? (y = b(t3) + (1 << t3), A = 4) : (t3 = 16, A = 1);
              else {
                if (1 !== u3) throw new Error("invalid ACn encoding");
                k = g(u3), A = t3 ? 2 : 3;
              }
              continue;
            case 1:
            case 2:
              n3[f3] ? n3[f3] += (p2() << c2) * l3 : 0 === --t3 && (A = 2 == A ? 3 : 0);
              break;
            case 3:
              n3[f3] ? n3[f3] += (p2() << c2) * l3 : (n3[f3] = k << c2, A = 0);
              break;
            case 4:
              n3[f3] && (n3[f3] += (p2() << c2) * l3);
          }
          o3++;
        }
        4 === A && 0 === --y && (A = 0);
      } : function(e4, n3) {
        var o3 = w(e4.huffmanTableDC), a3 = 0 === o3 ? 0 : g(o3);
        n3[0] = e4.pred += a3;
        for (var t3 = 1; t3 < 64; ) {
          var s3 = w(e4.huffmanTableAC), i3 = 15 & s3, f3 = s3 >> 4;
          if (0 !== i3) n3[r2[t3 += f3]] = g(i3), t3++;
          else {
            if (f3 < 15) break;
            t3 += 16;
          }
        }
      };
      var D, I, U, q, R = 0;
      for (I = 1 == B ? a2[0].blocksPerLine * a2[0].blocksPerColumn : h2 * o2.mcusPerColumn, t2 || (t2 = I); R < I; ) {
        for (E = 0; E < B; E++) a2[E].pred = 0;
        if (y = 0, 1 == B) for (P = a2[0], L = 0; L < t2; L++) M(P, X, R), R++;
        else for (L = 0; L < t2; L++) {
          for (E = 0; E < B; E++) for (U = (P = a2[E]).h, q = P.v, T = 0; T < q; T++) for (C = 0; C < U; C++) x(P, X, R, T, C);
          if (++R === I) break;
        }
        if (R === I) do {
          if (255 === e3[n2] && 0 !== e3[n2 + 1]) break;
          n2 += 1;
        } while (n2 < e3.length - 2);
        if (d2 = 0, (D = e3[n2] << 8 | e3[n2 + 1]) < 65280) throw new Error("marker was not found");
        if (!(D >= 65488 && D <= 65495)) break;
        n2 += 2;
      }
      return n2 - v2;
    }
    function u(r3, c2) {
      var l2, h2, u2 = [], v2 = c2.blocksPerLine, m2 = c2.blocksPerColumn, d2 = v2 << 3, w = new Int32Array(64), b = new Uint8Array(64);
      function g(r4, l3, h3) {
        var u3, v3, m3, d3, p2, w2, b2, g2, y2, k2, A2 = c2.quantizationTable, x2 = h3;
        for (k2 = 0; k2 < 64; k2++) x2[k2] = r4[k2] * A2[k2];
        for (k2 = 0; k2 < 8; ++k2) {
          var M2 = 8 * k2;
          0 != x2[1 + M2] || 0 != x2[2 + M2] || 0 != x2[3 + M2] || 0 != x2[4 + M2] || 0 != x2[5 + M2] || 0 != x2[6 + M2] || 0 != x2[7 + M2] ? (u3 = i * x2[0 + M2] + 128 >> 8, v3 = i * x2[4 + M2] + 128 >> 8, m3 = x2[2 + M2], d3 = x2[6 + M2], p2 = f * (x2[1 + M2] - x2[7 + M2]) + 128 >> 8, g2 = f * (x2[1 + M2] + x2[7 + M2]) + 128 >> 8, w2 = x2[3 + M2] << 4, b2 = x2[5 + M2] << 4, y2 = u3 - v3 + 1 >> 1, u3 = u3 + v3 + 1 >> 1, v3 = y2, y2 = m3 * s + d3 * t + 128 >> 8, m3 = m3 * t - d3 * s + 128 >> 8, d3 = y2, y2 = p2 - b2 + 1 >> 1, p2 = p2 + b2 + 1 >> 1, b2 = y2, y2 = g2 + w2 + 1 >> 1, w2 = g2 - w2 + 1 >> 1, g2 = y2, y2 = u3 - d3 + 1 >> 1, u3 = u3 + d3 + 1 >> 1, d3 = y2, y2 = v3 - m3 + 1 >> 1, v3 = v3 + m3 + 1 >> 1, m3 = y2, y2 = p2 * a + g2 * o + 2048 >> 12, p2 = p2 * o - g2 * a + 2048 >> 12, g2 = y2, y2 = w2 * n + b2 * e2 + 2048 >> 12, w2 = w2 * e2 - b2 * n + 2048 >> 12, b2 = y2, x2[0 + M2] = u3 + g2, x2[7 + M2] = u3 - g2, x2[1 + M2] = v3 + b2, x2[6 + M2] = v3 - b2, x2[2 + M2] = m3 + w2, x2[5 + M2] = m3 - w2, x2[3 + M2] = d3 + p2, x2[4 + M2] = d3 - p2) : (y2 = i * x2[0 + M2] + 512 >> 10, x2[0 + M2] = y2, x2[1 + M2] = y2, x2[2 + M2] = y2, x2[3 + M2] = y2, x2[4 + M2] = y2, x2[5 + M2] = y2, x2[6 + M2] = y2, x2[7 + M2] = y2);
        }
        for (k2 = 0; k2 < 8; ++k2) {
          var P2 = k2;
          0 != x2[8 + P2] || 0 != x2[16 + P2] || 0 != x2[24 + P2] || 0 != x2[32 + P2] || 0 != x2[40 + P2] || 0 != x2[48 + P2] || 0 != x2[56 + P2] ? (u3 = i * x2[0 + P2] + 2048 >> 12, v3 = i * x2[32 + P2] + 2048 >> 12, m3 = x2[16 + P2], d3 = x2[48 + P2], p2 = f * (x2[8 + P2] - x2[56 + P2]) + 2048 >> 12, g2 = f * (x2[8 + P2] + x2[56 + P2]) + 2048 >> 12, w2 = x2[24 + P2], b2 = x2[40 + P2], y2 = u3 - v3 + 1 >> 1, u3 = u3 + v3 + 1 >> 1, v3 = y2, y2 = m3 * s + d3 * t + 2048 >> 12, m3 = m3 * t - d3 * s + 2048 >> 12, d3 = y2, y2 = p2 - b2 + 1 >> 1, p2 = p2 + b2 + 1 >> 1, b2 = y2, y2 = g2 + w2 + 1 >> 1, w2 = g2 - w2 + 1 >> 1, g2 = y2, y2 = u3 - d3 + 1 >> 1, u3 = u3 + d3 + 1 >> 1, d3 = y2, y2 = v3 - m3 + 1 >> 1, v3 = v3 + m3 + 1 >> 1, m3 = y2, y2 = p2 * a + g2 * o + 2048 >> 12, p2 = p2 * o - g2 * a + 2048 >> 12, g2 = y2, y2 = w2 * n + b2 * e2 + 2048 >> 12, w2 = w2 * e2 - b2 * n + 2048 >> 12, b2 = y2, x2[0 + P2] = u3 + g2, x2[56 + P2] = u3 - g2, x2[8 + P2] = v3 + b2, x2[48 + P2] = v3 - b2, x2[16 + P2] = m3 + w2, x2[40 + P2] = m3 - w2, x2[24 + P2] = d3 + p2, x2[32 + P2] = d3 - p2) : (y2 = i * h3[k2 + 0] + 8192 >> 14, x2[0 + P2] = y2, x2[8 + P2] = y2, x2[16 + P2] = y2, x2[24 + P2] = y2, x2[32 + P2] = y2, x2[40 + P2] = y2, x2[48 + P2] = y2, x2[56 + P2] = y2);
        }
        for (k2 = 0; k2 < 64; ++k2) {
          var E = 128 + (x2[k2] + 8 >> 4);
          l3[k2] = E < 0 ? 0 : E > 255 ? 255 : E;
        }
      }
      p(d2 * m2 * 8);
      for (var y = 0; y < m2; y++) {
        var k = y << 3;
        for (l2 = 0; l2 < 8; l2++) u2.push(new Uint8Array(d2));
        for (var A = 0; A < v2; A++) {
          g(c2.blocks[y][A], b, w);
          var x = 0, M = A << 3;
          for (h2 = 0; h2 < 8; h2++) {
            var P = u2[k + h2];
            for (l2 = 0; l2 < 8; l2++) P[M + l2] = b[x++];
          }
        }
      }
      return u2;
    }
    function v(r3) {
      return r3 < 0 ? 0 : r3 > 255 ? 255 : r3;
    }
    c.prototype = { load: function(r3) {
      var e3 = new XMLHttpRequest();
      e3.open("GET", r3, true), e3.responseType = "arraybuffer", e3.onload = function() {
        var r4 = new Uint8Array(e3.response || e3.mozResponseArrayBuffer);
        this.parse(r4), this.onload && this.onload();
      }.bind(this), e3.send(null);
    }, parse: function(e3) {
      var n2 = 1e3 * this.opts.maxResolutionInMP * 1e3, o2 = 0;
      e3.length;
      function a2() {
        var r3 = e3[o2] << 8 | e3[o2 + 1];
        return o2 += 2, r3;
      }
      function t2() {
        var r3 = a2(), n3 = e3.subarray(o2, o2 + r3 - 2);
        return o2 += n3.length, n3;
      }
      function s2(r3) {
        var e4, n3, o3 = 1, a3 = 1;
        for (n3 in r3.components) r3.components.hasOwnProperty(n3) && (o3 < (e4 = r3.components[n3]).h && (o3 = e4.h), a3 < e4.v && (a3 = e4.v));
        var t3 = Math.ceil(r3.samplesPerLine / 8 / o3), s3 = Math.ceil(r3.scanLines / 8 / a3);
        for (n3 in r3.components) if (r3.components.hasOwnProperty(n3)) {
          e4 = r3.components[n3];
          var i3 = Math.ceil(Math.ceil(r3.samplesPerLine / 8) * e4.h / o3), f3 = Math.ceil(Math.ceil(r3.scanLines / 8) * e4.v / a3), c3 = t3 * e4.h, l2 = s3 * e4.v, h2 = [];
          p(256 * (l2 * c3));
          for (var u2 = 0; u2 < l2; u2++) {
            for (var v3 = [], m3 = 0; m3 < c3; m3++) v3.push(new Int32Array(64));
            h2.push(v3);
          }
          e4.blocksPerLine = i3, e4.blocksPerColumn = f3, e4.blocks = h2;
        }
        r3.maxH = o3, r3.maxV = a3, r3.mcusPerLine = t3, r3.mcusPerColumn = s3;
      }
      var i2, f2, c2 = null, v2 = null, m2 = [], d2 = [], w = [], b = [], g = a2(), y = -1;
      if (this.comments = [], 65496 != g) throw new Error("SOI not found");
      for (g = a2(); 65497 != g; ) {
        switch (g) {
          case 65280:
            break;
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
            var k = t2();
            if (65534 === g) {
              var A = String.fromCharCode.apply(null, k);
              this.comments.push(A);
            }
            65504 === g && 74 === k[0] && 70 === k[1] && 73 === k[2] && 70 === k[3] && 0 === k[4] && (c2 = { version: { major: k[5], minor: k[6] }, densityUnits: k[7], xDensity: k[8] << 8 | k[9], yDensity: k[10] << 8 | k[11], thumbWidth: k[12], thumbHeight: k[13], thumbData: k.subarray(14, 14 + 3 * k[12] * k[13]) }), 65505 === g && 69 === k[0] && 120 === k[1] && 105 === k[2] && 102 === k[3] && 0 === k[4] && (this.exifBuffer = k.subarray(5, k.length)), 65518 === g && 65 === k[0] && 100 === k[1] && 111 === k[2] && 98 === k[3] && 101 === k[4] && 0 === k[5] && (v2 = { version: k[6], flags0: k[7] << 8 | k[8], flags1: k[9] << 8 | k[10], transformCode: k[11] });
            break;
          case 65499:
            for (var x = a2() + o2 - 2; o2 < x; ) {
              var M = e3[o2++];
              p(256);
              var P = new Int32Array(64);
              if (M >> 4) {
                if (M >> 4 != 1) throw new Error("DQT: invalid table spec");
                for (_ = 0; _ < 64; _++) {
                  P[r2[_]] = a2();
                }
              } else for (_ = 0; _ < 64; _++) {
                P[r2[_]] = e3[o2++];
              }
              m2[15 & M] = P;
            }
            break;
          case 65472:
          case 65473:
          case 65474:
            a2(), (i2 = {}).extended = 65473 === g, i2.progressive = 65474 === g, i2.precision = e3[o2++], i2.scanLines = a2(), i2.samplesPerLine = a2(), i2.components = {}, i2.componentsOrder = [];
            var E = i2.scanLines * i2.samplesPerLine;
            if (E > n2) {
              var T = Math.ceil((E - n2) / 1e6);
              throw new Error(`maxResolutionInMP limit exceeded by ${T}MP`);
            }
            var C, L = e3[o2++];
            for (J = 0; J < L; J++) {
              C = e3[o2];
              var X = e3[o2 + 1] >> 4, B = 15 & e3[o2 + 1], D = e3[o2 + 2];
              if (X <= 0 || B <= 0) throw new Error("Invalid sampling factor, expected values above 0");
              i2.componentsOrder.push(C), i2.components[C] = { h: X, v: B, quantizationIdx: D }, o2 += 3;
            }
            s2(i2), d2.push(i2);
            break;
          case 65476:
            var I = a2();
            for (J = 2; J < I; ) {
              var U = e3[o2++], q = new Uint8Array(16), R = 0;
              for (_ = 0; _ < 16; _++, o2++) R += q[_] = e3[o2];
              p(16 + R);
              var Y = new Uint8Array(R);
              for (_ = 0; _ < R; _++, o2++) Y[_] = e3[o2];
              J += 17 + R, (U >> 4 ? w : b)[15 & U] = l(q, Y);
            }
            break;
          case 65501:
            a2(), f2 = a2();
            break;
          case 65500:
            a2(), a2();
            break;
          case 65498:
            a2();
            var G = e3[o2++], S = [];
            for (J = 0; J < G; J++) {
              N = i2.components[e3[o2++]];
              var O = e3[o2++];
              N.huffmanTableDC = b[O >> 4], N.huffmanTableAC = w[15 & O], S.push(N);
            }
            var z = e3[o2++], H = e3[o2++], $ = e3[o2++], j = h(e3, o2, i2, S, f2, z, H, $ >> 4, 15 & $, this.opts);
            o2 += j;
            break;
          case 65535:
            255 !== e3[o2] && o2--;
            break;
          default:
            if (255 == e3[o2 - 3] && e3[o2 - 2] >= 192 && e3[o2 - 2] <= 254) {
              o2 -= 3;
              break;
            }
            if (224 === g || 225 == g) {
              if (-1 !== y) throw new Error(`first unknown JPEG marker at offset ${y.toString(16)}, second unknown JPEG marker ${g.toString(16)} at offset ${(o2 - 1).toString(16)}`);
              y = o2 - 1;
              const r3 = a2();
              if (255 === e3[o2 + r3 - 2]) {
                o2 += r3 - 2;
                break;
              }
            }
            throw new Error("unknown JPEG marker " + g.toString(16));
        }
        g = a2();
      }
      if (1 != d2.length) throw new Error("only single frame JPEGs supported");
      for (var J = 0; J < d2.length; J++) {
        var V = d2[J].components;
        for (var _ in V) V[_].quantizationTable = m2[V[_].quantizationIdx], delete V[_].quantizationIdx;
      }
      this.width = i2.samplesPerLine, this.height = i2.scanLines, this.jfif = c2, this.adobe = v2, this.components = [];
      for (J = 0; J < i2.componentsOrder.length; J++) {
        var N = i2.components[i2.componentsOrder[J]];
        this.components.push({ lines: u(0, N), scaleX: N.h / i2.maxH, scaleY: N.v / i2.maxV });
      }
    }, getData: function(r3, e3) {
      var n2, o2, a2, t2, s2, i2, f2, c2, l2, h2, u2, m2, d2, w, b, g, y, k, A, x, M, P = this.width / r3, E = this.height / e3, T = 0, C = r3 * e3 * this.components.length;
      p(C);
      var L = new Uint8Array(C);
      switch (this.components.length) {
        case 1:
          for (n2 = this.components[0], h2 = 0; h2 < e3; h2++) for (s2 = n2.lines[0 | h2 * n2.scaleY * E], l2 = 0; l2 < r3; l2++) u2 = s2[0 | l2 * n2.scaleX * P], L[T++] = u2;
          break;
        case 2:
          for (n2 = this.components[0], o2 = this.components[1], h2 = 0; h2 < e3; h2++) for (s2 = n2.lines[0 | h2 * n2.scaleY * E], i2 = o2.lines[0 | h2 * o2.scaleY * E], l2 = 0; l2 < r3; l2++) u2 = s2[0 | l2 * n2.scaleX * P], L[T++] = u2, u2 = i2[0 | l2 * o2.scaleX * P], L[T++] = u2;
          break;
        case 3:
          for (M = true, this.adobe && this.adobe.transformCode ? M = true : void 0 !== this.opts.colorTransform && (M = !!this.opts.colorTransform), n2 = this.components[0], o2 = this.components[1], a2 = this.components[2], h2 = 0; h2 < e3; h2++) for (s2 = n2.lines[0 | h2 * n2.scaleY * E], i2 = o2.lines[0 | h2 * o2.scaleY * E], f2 = a2.lines[0 | h2 * a2.scaleY * E], l2 = 0; l2 < r3; l2++) M ? (u2 = s2[0 | l2 * n2.scaleX * P], m2 = i2[0 | l2 * o2.scaleX * P], k = v(u2 + 1.402 * ((d2 = f2[0 | l2 * a2.scaleX * P]) - 128)), A = v(u2 - 0.3441363 * (m2 - 128) - 0.71413636 * (d2 - 128)), x = v(u2 + 1.772 * (m2 - 128))) : (k = s2[0 | l2 * n2.scaleX * P], A = i2[0 | l2 * o2.scaleX * P], x = f2[0 | l2 * a2.scaleX * P]), L[T++] = k, L[T++] = A, L[T++] = x;
          break;
        case 4:
          if (!this.adobe) throw new Error("Unsupported color mode (4 components)");
          for (M = false, this.adobe && this.adobe.transformCode ? M = true : void 0 !== this.opts.colorTransform && (M = !!this.opts.colorTransform), n2 = this.components[0], o2 = this.components[1], a2 = this.components[2], t2 = this.components[3], h2 = 0; h2 < e3; h2++) for (s2 = n2.lines[0 | h2 * n2.scaleY * E], i2 = o2.lines[0 | h2 * o2.scaleY * E], f2 = a2.lines[0 | h2 * a2.scaleY * E], c2 = t2.lines[0 | h2 * t2.scaleY * E], l2 = 0; l2 < r3; l2++) M ? (u2 = s2[0 | l2 * n2.scaleX * P], m2 = i2[0 | l2 * o2.scaleX * P], d2 = f2[0 | l2 * a2.scaleX * P], w = c2[0 | l2 * t2.scaleX * P], b = 255 - v(u2 + 1.402 * (d2 - 128)), g = 255 - v(u2 - 0.3441363 * (m2 - 128) - 0.71413636 * (d2 - 128)), y = 255 - v(u2 + 1.772 * (m2 - 128))) : (b = s2[0 | l2 * n2.scaleX * P], g = i2[0 | l2 * o2.scaleX * P], y = f2[0 | l2 * a2.scaleX * P], w = c2[0 | l2 * t2.scaleX * P]), L[T++] = 255 - b, L[T++] = 255 - g, L[T++] = 255 - y, L[T++] = 255 - w;
          break;
        default:
          throw new Error("Unsupported color mode");
      }
      return L;
    }, copyToImageData: function(r3, e3) {
      var n2, o2, a2, t2, s2, i2, f2, c2, l2, h2 = r3.width, u2 = r3.height, m2 = r3.data, d2 = this.getData(h2, u2), p2 = 0, w = 0;
      switch (this.components.length) {
        case 1:
          for (o2 = 0; o2 < u2; o2++) for (n2 = 0; n2 < h2; n2++) a2 = d2[p2++], m2[w++] = a2, m2[w++] = a2, m2[w++] = a2, e3 && (m2[w++] = 255);
          break;
        case 3:
          for (o2 = 0; o2 < u2; o2++) for (n2 = 0; n2 < h2; n2++) f2 = d2[p2++], c2 = d2[p2++], l2 = d2[p2++], m2[w++] = f2, m2[w++] = c2, m2[w++] = l2, e3 && (m2[w++] = 255);
          break;
        case 4:
          for (o2 = 0; o2 < u2; o2++) for (n2 = 0; n2 < h2; n2++) s2 = d2[p2++], i2 = d2[p2++], a2 = d2[p2++], f2 = 255 - v(s2 * (1 - (t2 = d2[p2++]) / 255) + t2), c2 = 255 - v(i2 * (1 - t2 / 255) + t2), l2 = 255 - v(a2 * (1 - t2 / 255) + t2), m2[w++] = f2, m2[w++] = c2, m2[w++] = l2, e3 && (m2[w++] = 255);
          break;
        default:
          throw new Error("Unsupported color mode");
      }
    } };
    var m = 0, d = 0;
    function p(r3 = 0) {
      var e3 = m + r3;
      if (e3 > d) {
        var n2 = Math.ceil((e3 - d) / 1024 / 1024);
        throw new Error(`maxMemoryUsageInMB limit exceeded by at least ${n2}MB`);
      }
      m = e3;
    }
    return c.resetMaxMemoryUsage = function(r3) {
      m = 0, d = r3;
    }, c.getBytesAllocated = function() {
      return m;
    }, c.requestMemoryAllocation = p, c;
  })();
  r.exports = function(r2, n = {}) {
    var o = { colorTransform: void 0, useTArray: false, formatAsRGBA: true, tolerantDecoding: true, maxResolutionInMP: 100, maxMemoryUsageInMB: 512, ...n }, a = new Uint8Array(r2), t = new e();
    t.opts = o, e.resetMaxMemoryUsage(1024 * o.maxMemoryUsageInMB * 1024), t.parse(a);
    var s = o.formatAsRGBA ? 4 : 3, i = t.width * t.height * s;
    try {
      e.requestMemoryAllocation(i);
      var f = { width: t.width, height: t.height, exifBuffer: t.exifBuffer, data: o.useTArray ? new Uint8Array(i) : Buffer.alloc(i) };
      t.comments.length > 0 && (f.comments = t.comments);
    } catch (r3) {
      if (r3 instanceof RangeError) throw new Error("Could not allocate enough memory for the image. Required: " + i);
      if (r3 instanceof ReferenceError && "Buffer is not defined" === r3.message) throw new Error("Buffer is not globally defined in this environment. Consider setting useTArray to true");
      throw r3;
    }
    return t.copyToImageData(f, o.formatAsRGBA), f;
  };
}, 86502: (r, e, n) => {
  "use strict";
  n.r(e), n.d(e, { default: () => a });
  var o = n(36643);
  function a() {
    return { mime: "image/jpeg", encode: (r2, { quality: e2 = 100 } = {}) => o.encode(r2, e2).data, decode: (r2, e2) => o.decode(r2, e2) };
  }
}, 86727: (r) => {
  function e(r2) {
    Math.round;
    var e2, n, o, a, t, s = Math.floor, i = new Array(64), f = new Array(64), c = new Array(64), l = new Array(64), h = new Array(65535), u = new Array(65535), v = new Array(64), m = new Array(64), d = [], p = 0, w = 7, b = new Array(64), g = new Array(64), y = new Array(64), k = new Array(256), A = new Array(2048), x = [0, 1, 5, 6, 14, 15, 27, 28, 2, 4, 7, 13, 16, 26, 29, 42, 3, 8, 12, 17, 25, 30, 41, 43, 9, 11, 18, 24, 31, 40, 44, 53, 10, 19, 23, 32, 39, 45, 52, 54, 20, 22, 33, 38, 46, 51, 55, 60, 21, 34, 37, 47, 50, 56, 59, 61, 35, 36, 48, 49, 57, 58, 62, 63], M = [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], P = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], E = [0, 0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 125], T = [1, 2, 3, 0, 4, 17, 5, 18, 33, 49, 65, 6, 19, 81, 97, 7, 34, 113, 20, 50, 129, 145, 161, 8, 35, 66, 177, 193, 21, 82, 209, 240, 36, 51, 98, 114, 130, 9, 10, 22, 23, 24, 25, 26, 37, 38, 39, 40, 41, 42, 52, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250], C = [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], L = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], X = [0, 0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 119], B = [0, 1, 2, 3, 17, 4, 5, 33, 49, 6, 18, 65, 81, 7, 97, 113, 19, 34, 50, 129, 8, 20, 66, 145, 161, 177, 193, 9, 35, 51, 82, 240, 21, 98, 114, 209, 10, 22, 36, 52, 225, 37, 241, 23, 24, 25, 26, 38, 39, 40, 41, 42, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 130, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 226, 227, 228, 229, 230, 231, 232, 233, 234, 242, 243, 244, 245, 246, 247, 248, 249, 250];
    function D(r3, e3) {
      for (var n2 = 0, o2 = 0, a2 = new Array(), t2 = 1; t2 <= 16; t2++) {
        for (var s2 = 1; s2 <= r3[t2]; s2++) a2[e3[o2]] = [], a2[e3[o2]][0] = n2, a2[e3[o2]][1] = t2, o2++, n2++;
        n2 *= 2;
      }
      return a2;
    }
    function I(r3) {
      for (var e3 = r3[0], n2 = r3[1] - 1; n2 >= 0; ) e3 & 1 << n2 && (p |= 1 << w), n2--, --w < 0 && (255 == p ? (U(255), U(0)) : U(p), w = 7, p = 0);
    }
    function U(r3) {
      d.push(r3);
    }
    function q(r3) {
      U(r3 >> 8 & 255), U(255 & r3);
    }
    function R(r3, e3, n2, o2, a2) {
      for (var t2, s2 = a2[0], i2 = a2[240], f2 = (function(r4, e4) {
        var n3, o3, a3, t3, s3, i3, f3, c3, l3, h2, u2 = 0;
        for (l3 = 0; l3 < 8; ++l3) {
          n3 = r4[u2], o3 = r4[u2 + 1], a3 = r4[u2 + 2], t3 = r4[u2 + 3], s3 = r4[u2 + 4], i3 = r4[u2 + 5], f3 = r4[u2 + 6];
          var m2 = n3 + (c3 = r4[u2 + 7]), d3 = n3 - c3, p3 = o3 + f3, w3 = o3 - f3, b3 = a3 + i3, g3 = a3 - i3, y3 = t3 + s3, k2 = t3 - s3, A2 = m2 + y3, x2 = m2 - y3, M2 = p3 + b3, P2 = p3 - b3;
          r4[u2] = A2 + M2, r4[u2 + 4] = A2 - M2;
          var E2 = 0.707106781 * (P2 + x2);
          r4[u2 + 2] = x2 + E2, r4[u2 + 6] = x2 - E2;
          var T2 = 0.382683433 * ((A2 = k2 + g3) - (P2 = w3 + d3)), C2 = 0.5411961 * A2 + T2, L2 = 1.306562965 * P2 + T2, X2 = 0.707106781 * (M2 = g3 + w3), B2 = d3 + X2, D2 = d3 - X2;
          r4[u2 + 5] = D2 + C2, r4[u2 + 3] = D2 - C2, r4[u2 + 1] = B2 + L2, r4[u2 + 7] = B2 - L2, u2 += 8;
        }
        for (u2 = 0, l3 = 0; l3 < 8; ++l3) {
          n3 = r4[u2], o3 = r4[u2 + 8], a3 = r4[u2 + 16], t3 = r4[u2 + 24], s3 = r4[u2 + 32], i3 = r4[u2 + 40], f3 = r4[u2 + 48];
          var I2 = n3 + (c3 = r4[u2 + 56]), U2 = n3 - c3, q2 = o3 + f3, R2 = o3 - f3, Y2 = a3 + i3, G = a3 - i3, S = t3 + s3, O = t3 - s3, z = I2 + S, H = I2 - S, $ = q2 + Y2, j = q2 - Y2;
          r4[u2] = z + $, r4[u2 + 32] = z - $;
          var J = 0.707106781 * (j + H);
          r4[u2 + 16] = H + J, r4[u2 + 48] = H - J;
          var V = 0.382683433 * ((z = O + G) - (j = R2 + U2)), _ = 0.5411961 * z + V, N = 1.306562965 * j + V, Q = 0.707106781 * ($ = G + R2), W = U2 + Q, F = U2 - Q;
          r4[u2 + 40] = F + _, r4[u2 + 24] = F - _, r4[u2 + 8] = W + N, r4[u2 + 56] = W - N, u2++;
        }
        for (l3 = 0; l3 < 64; ++l3) h2 = r4[l3] * e4[l3], v[l3] = h2 > 0 ? h2 + 0.5 | 0 : h2 - 0.5 | 0;
        return v;
      })(r3, e3), c2 = 0; c2 < 64; ++c2) m[x[c2]] = f2[c2];
      var l2 = m[0] - n2;
      n2 = m[0], 0 == l2 ? I(o2[0]) : (I(o2[u[t2 = 32767 + l2]]), I(h[t2]));
      for (var d2 = 63; d2 > 0 && 0 == m[d2]; d2--) ;
      if (0 == d2) return I(s2), n2;
      for (var p2, w2 = 1; w2 <= d2; ) {
        for (var b2 = w2; 0 == m[w2] && w2 <= d2; ++w2) ;
        var g2 = w2 - b2;
        if (g2 >= 16) {
          p2 = g2 >> 4;
          for (var y2 = 1; y2 <= p2; ++y2) I(i2);
          g2 &= 15;
        }
        t2 = 32767 + m[w2], I(a2[(g2 << 4) + u[t2]]), I(h[t2]), w2++;
      }
      return 63 != d2 && I(s2), n2;
    }
    function Y(r3) {
      if (r3 <= 0 && (r3 = 1), r3 > 100 && (r3 = 100), t != r3) {
        (function(r4) {
          for (var e3 = [16, 11, 10, 16, 24, 40, 51, 61, 12, 12, 14, 19, 26, 58, 60, 55, 14, 13, 16, 24, 40, 57, 69, 56, 14, 17, 22, 29, 51, 87, 80, 62, 18, 22, 37, 56, 68, 109, 103, 77, 24, 35, 55, 64, 81, 104, 113, 92, 49, 64, 78, 87, 103, 121, 120, 101, 72, 92, 95, 98, 112, 100, 103, 99], n2 = 0; n2 < 64; n2++) {
            var o2 = s((e3[n2] * r4 + 50) / 100);
            o2 < 1 ? o2 = 1 : o2 > 255 && (o2 = 255), i[x[n2]] = o2;
          }
          for (var a2 = [17, 18, 24, 47, 99, 99, 99, 99, 18, 21, 26, 66, 99, 99, 99, 99, 24, 26, 56, 99, 99, 99, 99, 99, 47, 66, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99], t2 = 0; t2 < 64; t2++) {
            var h2 = s((a2[t2] * r4 + 50) / 100);
            h2 < 1 ? h2 = 1 : h2 > 255 && (h2 = 255), f[x[t2]] = h2;
          }
          for (var u2 = [1, 1.387039845, 1.306562965, 1.175875602, 1, 0.785694958, 0.5411961, 0.275899379], v2 = 0, m2 = 0; m2 < 8; m2++) for (var d2 = 0; d2 < 8; d2++) c[v2] = 1 / (i[x[v2]] * u2[m2] * u2[d2] * 8), l[v2] = 1 / (f[x[v2]] * u2[m2] * u2[d2] * 8), v2++;
        })(r3 < 50 ? Math.floor(5e3 / r3) : Math.floor(200 - 2 * r3)), t = r3;
      }
    }
    this.encode = function(r3, t2) {
      var s2;
      (/* @__PURE__ */ new Date()).getTime();
      t2 && Y(t2), d = new Array(), p = 0, w = 7, q(65496), q(65504), q(16), U(74), U(70), U(73), U(70), U(0), U(1), U(1), U(0), q(1), q(1), U(0), U(0), void 0 !== (s2 = r3.comments) && s2.constructor === Array && s2.forEach((r4) => {
        if ("string" == typeof r4) {
          q(65534);
          var e3, n2 = r4.length;
          for (q(n2 + 2), e3 = 0; e3 < n2; e3++) U(r4.charCodeAt(e3));
        }
      }), (function(r4) {
        if (r4) {
          q(65505), 69 === r4[0] && 120 === r4[1] && 105 === r4[2] && 102 === r4[3] ? q(r4.length + 2) : (q(r4.length + 5 + 2), U(69), U(120), U(105), U(102), U(0));
          for (var e3 = 0; e3 < r4.length; e3++) U(r4[e3]);
        }
      })(r3.exifBuffer), (function() {
        q(65499), q(132), U(0);
        for (var r4 = 0; r4 < 64; r4++) U(i[r4]);
        U(1);
        for (var e3 = 0; e3 < 64; e3++) U(f[e3]);
      })(), (function(r4, e3) {
        q(65472), q(17), U(8), q(e3), q(r4), U(3), U(1), U(17), U(0), U(2), U(17), U(1), U(3), U(17), U(1);
      })(r3.width, r3.height), (function() {
        q(65476), q(418), U(0);
        for (var r4 = 0; r4 < 16; r4++) U(M[r4 + 1]);
        for (var e3 = 0; e3 <= 11; e3++) U(P[e3]);
        U(16);
        for (var n2 = 0; n2 < 16; n2++) U(E[n2 + 1]);
        for (var o2 = 0; o2 <= 161; o2++) U(T[o2]);
        U(1);
        for (var a2 = 0; a2 < 16; a2++) U(C[a2 + 1]);
        for (var t3 = 0; t3 <= 11; t3++) U(L[t3]);
        U(17);
        for (var s3 = 0; s3 < 16; s3++) U(X[s3 + 1]);
        for (var i2 = 0; i2 <= 161; i2++) U(B[i2]);
      })(), q(65498), q(12), U(3), U(1), U(0), U(2), U(17), U(3), U(17), U(0), U(63), U(0);
      var h2 = 0, u2 = 0, v2 = 0;
      p = 0, w = 7, this.encode.displayName = "_encode_";
      for (var m2, k2, x2, D2, G, S, O, z, H, $ = r3.data, j = r3.width, J = r3.height, V = 4 * j, _ = 0; _ < J; ) {
        for (m2 = 0; m2 < V; ) {
          for (S = G = V * _ + m2, O = -1, z = 0, H = 0; H < 64; H++) S = G + (z = H >> 3) * V + (O = 4 * (7 & H)), _ + z >= J && (S -= V * (_ + 1 + z - J)), m2 + O >= V && (S -= m2 + O - V + 4), k2 = $[S++], x2 = $[S++], D2 = $[S++], b[H] = (A[k2] + A[x2 + 256 | 0] + A[D2 + 512 | 0] >> 16) - 128, g[H] = (A[k2 + 768 | 0] + A[x2 + 1024 | 0] + A[D2 + 1280 | 0] >> 16) - 128, y[H] = (A[k2 + 1280 | 0] + A[x2 + 1536 | 0] + A[D2 + 1792 | 0] >> 16) - 128;
          h2 = R(b, c, h2, e2, o), u2 = R(g, l, u2, n, a), v2 = R(y, l, v2, n, a), m2 += 32;
        }
        _ += 8;
      }
      if (w >= 0) {
        var N = [];
        N[1] = w + 1, N[0] = (1 << w + 1) - 1, I(N);
      }
      return q(65497), Buffer.from(d);
    }, (function() {
      (/* @__PURE__ */ new Date()).getTime();
      r2 || (r2 = 50), (function() {
        for (var r3 = String.fromCharCode, e3 = 0; e3 < 256; e3++) k[e3] = r3(e3);
      })(), e2 = D(M, P), n = D(C, L), o = D(E, T), a = D(X, B), (function() {
        for (var r3 = 1, e3 = 2, n2 = 1; n2 <= 15; n2++) {
          for (var o2 = r3; o2 < e3; o2++) u[32767 + o2] = n2, h[32767 + o2] = [], h[32767 + o2][1] = n2, h[32767 + o2][0] = o2;
          for (var a2 = -(e3 - 1); a2 <= -r3; a2++) u[32767 + a2] = n2, h[32767 + a2] = [], h[32767 + a2][1] = n2, h[32767 + a2][0] = e3 - 1 + a2;
          r3 <<= 1, e3 <<= 1;
        }
      })(), (function() {
        for (var r3 = 0; r3 < 256; r3++) A[r3] = 19595 * r3, A[r3 + 256 | 0] = 38470 * r3, A[r3 + 512 | 0] = 7471 * r3 + 32768, A[r3 + 768 | 0] = -11059 * r3, A[r3 + 1024 | 0] = -21709 * r3, A[r3 + 1280 | 0] = 32768 * r3 + 8421375, A[r3 + 1536 | 0] = -27439 * r3, A[r3 + 1792 | 0] = -5329 * r3;
      })(), Y(r2), (/* @__PURE__ */ new Date()).getTime();
    })();
  }
  r.exports = function(r2, n) {
    void 0 === n && (n = 50);
    return { data: new e(n).encode(r2, n), width: r2.width, height: r2.height };
  };
} };
