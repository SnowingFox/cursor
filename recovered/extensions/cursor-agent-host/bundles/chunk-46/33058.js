// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/46.js sha256:d16c5e127f5dfd2c26327f95acab37bce39fb1530578971aa8efc4cb16600efe
// module: 33058 range:71041..81775
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
33058: (t, e) => {
  function i(t2, e2, i2, r) {
    for (var s = t2[e2++], n = 1 << s, a = n + 1, o = a + 1, h = s + 1, l = (1 << h) - 1, u = 0, m = 0, c = 0, _ = t2[e2++], d = new Int32Array(4096), f = null; ; ) {
      for (; u < 16 && 0 !== _; ) m |= t2[e2++] << u, u += 8, 1 === _ ? _ = t2[e2++] : --_;
      if (u < h) break;
      var p = m & l;
      if (m >>= h, u -= h, p !== n) {
        if (p === a) break;
        for (var g = p < o ? p : f, b = 0, M = g; M > n; ) M = d[M] >> 8, ++b;
        var w = M;
        if (c + b + (g !== p ? 1 : 0) > r) return void console.log("Warning, gif stream longer than expected.");
        i2[c++] = w;
        var x = c += b;
        for (g !== p && (i2[c++] = w), M = g; b--; ) M = d[M], i2[--x] = 255 & M, M >>= 8;
        null !== f && o < 4096 && (d[o++] = f << 8 | w, o >= l + 1 && h < 12 && (++h, l = l << 1 | 1)), f = p;
      } else o = a + 1, l = (1 << (h = s + 1)) - 1, f = null;
    }
    return c !== r && console.log("Warning, gif stream shorter than expected."), i2;
  }
  try {
    e.GifWriter = function(t2, e2, i2, r) {
      var s = 0, n = void 0 === (r = void 0 === r ? {} : r).loop ? null : r.loop, a = void 0 === r.palette ? null : r.palette;
      if (e2 <= 0 || i2 <= 0 || e2 > 65535 || i2 > 65535) throw new Error("Width/Height invalid.");
      function o(t3) {
        var e3 = t3.length;
        if (e3 < 2 || e3 > 256 || e3 & e3 - 1) throw new Error("Invalid code/color length, must be power of 2 and 2 .. 256.");
        return e3;
      }
      t2[s++] = 71, t2[s++] = 73, t2[s++] = 70, t2[s++] = 56, t2[s++] = 57, t2[s++] = 97;
      var h = 0, l = 0;
      if (null !== a) {
        for (var u = o(a); u >>= 1; ) ++h;
        if (u = 1 << h, --h, void 0 !== r.background) {
          if ((l = r.background) >= u) throw new Error("Background index out of range.");
          if (0 === l) throw new Error("Background index explicitly passed as 0.");
        }
      }
      if (t2[s++] = 255 & e2, t2[s++] = e2 >> 8 & 255, t2[s++] = 255 & i2, t2[s++] = i2 >> 8 & 255, t2[s++] = (null !== a ? 128 : 0) | h, t2[s++] = l, t2[s++] = 0, null !== a) for (var m = 0, c = a.length; m < c; ++m) {
        var _ = a[m];
        t2[s++] = _ >> 16 & 255, t2[s++] = _ >> 8 & 255, t2[s++] = 255 & _;
      }
      if (null !== n) {
        if (n < 0 || n > 65535) throw new Error("Loop count invalid.");
        t2[s++] = 33, t2[s++] = 255, t2[s++] = 11, t2[s++] = 78, t2[s++] = 69, t2[s++] = 84, t2[s++] = 83, t2[s++] = 67, t2[s++] = 65, t2[s++] = 80, t2[s++] = 69, t2[s++] = 50, t2[s++] = 46, t2[s++] = 48, t2[s++] = 3, t2[s++] = 1, t2[s++] = 255 & n, t2[s++] = n >> 8 & 255, t2[s++] = 0;
      }
      var d = false;
      this.addFrame = function(e3, i3, r2, n2, h2, l2) {
        if (true === d && (--s, d = false), l2 = void 0 === l2 ? {} : l2, e3 < 0 || i3 < 0 || e3 > 65535 || i3 > 65535) throw new Error("x/y invalid.");
        if (r2 <= 0 || n2 <= 0 || r2 > 65535 || n2 > 65535) throw new Error("Width/Height invalid.");
        if (h2.length < r2 * n2) throw new Error("Not enough pixels for the frame size.");
        var u2 = true, m2 = l2.palette;
        if (null == m2 && (u2 = false, m2 = a), null == m2) throw new Error("Must supply either a local or global palette.");
        for (var c2 = o(m2), _2 = 0; c2 >>= 1; ) ++_2;
        c2 = 1 << _2;
        var f = void 0 === l2.delay ? 0 : l2.delay, p = void 0 === l2.disposal ? 0 : l2.disposal;
        if (p < 0 || p > 3) throw new Error("Disposal out of range.");
        var g = false, b = 0;
        if (void 0 !== l2.transparent && null !== l2.transparent && (g = true, (b = l2.transparent) < 0 || b >= c2)) throw new Error("Transparent color index.");
        if ((0 !== p || g || 0 !== f) && (t2[s++] = 33, t2[s++] = 249, t2[s++] = 4, t2[s++] = p << 2 | (true === g ? 1 : 0), t2[s++] = 255 & f, t2[s++] = f >> 8 & 255, t2[s++] = b, t2[s++] = 0), t2[s++] = 44, t2[s++] = 255 & e3, t2[s++] = e3 >> 8 & 255, t2[s++] = 255 & i3, t2[s++] = i3 >> 8 & 255, t2[s++] = 255 & r2, t2[s++] = r2 >> 8 & 255, t2[s++] = 255 & n2, t2[s++] = n2 >> 8 & 255, t2[s++] = true === u2 ? 128 | _2 - 1 : 0, true === u2) for (var M = 0, w = m2.length; M < w; ++M) {
          var x = m2[M];
          t2[s++] = x >> 16 & 255, t2[s++] = x >> 8 & 255, t2[s++] = 255 & x;
        }
        return s = (function(t3, e4, i4, r3) {
          t3[e4++] = i4;
          var s2 = e4++, n3 = 1 << i4, a2 = n3 - 1, o2 = n3 + 1, h3 = o2 + 1, l3 = i4 + 1, u3 = 0, m3 = 0;
          function c3(i5) {
            for (; u3 >= i5; ) t3[e4++] = 255 & m3, m3 >>= 8, u3 -= 8, e4 === s2 + 256 && (t3[s2] = 255, s2 = e4++);
          }
          function _3(t4) {
            m3 |= t4 << u3, u3 += l3, c3(8);
          }
          var d2 = r3[0] & a2, f2 = {};
          _3(n3);
          for (var p2 = 1, g2 = r3.length; p2 < g2; ++p2) {
            var b2 = r3[p2] & a2, M2 = d2 << 8 | b2, w2 = f2[M2];
            if (void 0 === w2) {
              for (m3 |= d2 << u3, u3 += l3; u3 >= 8; ) t3[e4++] = 255 & m3, m3 >>= 8, u3 -= 8, e4 === s2 + 256 && (t3[s2] = 255, s2 = e4++);
              4096 === h3 ? (_3(n3), h3 = o2 + 1, l3 = i4 + 1, f2 = {}) : (h3 >= 1 << l3 && ++l3, f2[M2] = h3++), d2 = b2;
            } else d2 = w2;
          }
          return _3(d2), _3(o2), c3(1), s2 + 1 === e4 ? t3[s2] = 0 : (t3[s2] = e4 - s2 - 1, t3[e4++] = 0), e4;
        })(t2, s, _2 < 2 ? 2 : _2, h2), s;
      }, this.end = function() {
        return false === d && (t2[s++] = 59, d = true), s;
      }, this.getOutputBuffer = function() {
        return t2;
      }, this.setOutputBuffer = function(e3) {
        t2 = e3;
      }, this.getOutputBufferPosition = function() {
        return s;
      }, this.setOutputBufferPosition = function(t3) {
        s = t3;
      };
    }, e.GifReader = function(t2) {
      var e2 = 0;
      if (71 !== t2[e2++] || 73 !== t2[e2++] || 70 !== t2[e2++] || 56 !== t2[e2++] || 56 != (t2[e2++] + 1 & 253) || 97 !== t2[e2++]) throw new Error("Invalid GIF 87a/89a header.");
      var r = t2[e2++] | t2[e2++] << 8, s = t2[e2++] | t2[e2++] << 8, n = t2[e2++], a = n >> 7, o = 1 << 1 + (7 & n);
      t2[e2++], t2[e2++];
      var h = null, l = null;
      a && (h = e2, l = o, e2 += 3 * o);
      var u = true, m = [], c = 0, _ = null, d = 0, f = null;
      for (this.width = r, this.height = s; u && e2 < t2.length; ) switch (t2[e2++]) {
        case 33:
          switch (t2[e2++]) {
            case 255:
              if (11 !== t2[e2] || 78 == t2[e2 + 1] && 69 == t2[e2 + 2] && 84 == t2[e2 + 3] && 83 == t2[e2 + 4] && 67 == t2[e2 + 5] && 65 == t2[e2 + 6] && 80 == t2[e2 + 7] && 69 == t2[e2 + 8] && 50 == t2[e2 + 9] && 46 == t2[e2 + 10] && 48 == t2[e2 + 11] && 3 == t2[e2 + 12] && 1 == t2[e2 + 13] && 0 == t2[e2 + 16]) e2 += 14, f = t2[e2++] | t2[e2++] << 8, e2++;
              else for (e2 += 12; ; ) {
                if (!((v = t2[e2++]) >= 0)) throw Error("Invalid block size");
                if (0 === v) break;
                e2 += v;
              }
              break;
            case 249:
              if (4 !== t2[e2++] || 0 !== t2[e2 + 4]) throw new Error("Invalid graphics extension block.");
              var p = t2[e2++];
              c = t2[e2++] | t2[e2++] << 8, _ = t2[e2++], 1 & p || (_ = null), d = p >> 2 & 7, e2++;
              break;
            case 254:
              for (; ; ) {
                if (!((v = t2[e2++]) >= 0)) throw Error("Invalid block size");
                if (0 === v) break;
                e2 += v;
              }
              break;
            default:
              throw new Error("Unknown graphic control label: 0x" + t2[e2 - 1].toString(16));
          }
          break;
        case 44:
          var g = t2[e2++] | t2[e2++] << 8, b = t2[e2++] | t2[e2++] << 8, M = t2[e2++] | t2[e2++] << 8, w = t2[e2++] | t2[e2++] << 8, x = t2[e2++], y = x >> 6 & 1, S = 1 << 1 + (7 & x), k = h, B = l, z = false;
          x >> 7 && (z = true, k = e2, B = S, e2 += 3 * S);
          var A = e2;
          for (e2++; ; ) {
            var v;
            if (!((v = t2[e2++]) >= 0)) throw Error("Invalid block size");
            if (0 === v) break;
            e2 += v;
          }
          m.push({ x: g, y: b, width: M, height: w, has_local_palette: z, palette_offset: k, palette_size: B, data_offset: A, data_length: e2 - A, transparent_index: _, interlaced: !!y, delay: c, disposal: d });
          break;
        case 59:
          u = false;
          break;
        default:
          throw new Error("Unknown gif block: 0x" + t2[e2 - 1].toString(16));
      }
      this.numFrames = function() {
        return m.length;
      }, this.loopCount = function() {
        return f;
      }, this.frameInfo = function(t3) {
        if (t3 < 0 || t3 >= m.length) throw new Error("Frame index out of range.");
        return m[t3];
      }, this.decodeAndBlitFrameBGRA = function(e3, s2) {
        var n2 = this.frameInfo(e3), a2 = n2.width * n2.height, o2 = new Uint8Array(a2);
        i(t2, n2.data_offset, o2, a2);
        var h2 = n2.palette_offset, l2 = n2.transparent_index;
        null === l2 && (l2 = 256);
        var u2 = n2.width, m2 = r - u2, c2 = u2, _2 = 4 * (n2.y * r + n2.x), d2 = 4 * ((n2.y + n2.height) * r + n2.x), f2 = _2, p2 = 4 * m2;
        true === n2.interlaced && (p2 += 4 * r * 7);
        for (var g2 = 8, b2 = 0, M2 = o2.length; b2 < M2; ++b2) {
          var w2 = o2[b2];
          if (0 === c2 && (c2 = u2, (f2 += p2) >= d2 && (p2 = 4 * m2 + 4 * r * (g2 - 1), f2 = _2 + (u2 + m2) * (g2 << 1), g2 >>= 1)), w2 === l2) f2 += 4;
          else {
            var x2 = t2[h2 + 3 * w2], y2 = t2[h2 + 3 * w2 + 1], S2 = t2[h2 + 3 * w2 + 2];
            s2[f2++] = S2, s2[f2++] = y2, s2[f2++] = x2, s2[f2++] = 255;
          }
          --c2;
        }
      }, this.decodeAndBlitFrameRGBA = function(e3, s2) {
        var n2 = this.frameInfo(e3), a2 = n2.width * n2.height, o2 = new Uint8Array(a2);
        i(t2, n2.data_offset, o2, a2);
        var h2 = n2.palette_offset, l2 = n2.transparent_index;
        null === l2 && (l2 = 256);
        var u2 = n2.width, m2 = r - u2, c2 = u2, _2 = 4 * (n2.y * r + n2.x), d2 = 4 * ((n2.y + n2.height) * r + n2.x), f2 = _2, p2 = 4 * m2;
        true === n2.interlaced && (p2 += 4 * r * 7);
        for (var g2 = 8, b2 = 0, M2 = o2.length; b2 < M2; ++b2) {
          var w2 = o2[b2];
          if (0 === c2 && (c2 = u2, (f2 += p2) >= d2 && (p2 = 4 * m2 + 4 * r * (g2 - 1), f2 = _2 + (u2 + m2) * (g2 << 1), g2 >>= 1)), w2 === l2) f2 += 4;
          else {
            var x2 = t2[h2 + 3 * w2], y2 = t2[h2 + 3 * w2 + 1], S2 = t2[h2 + 3 * w2 + 2];
            s2[f2++] = x2, s2[f2++] = y2, s2[f2++] = S2, s2[f2++] = 255;
          }
          --c2;
        }
      };
    };
  } catch (t2) {
  }
}