"use strict";
/*! For license information please see 46.js.LICENSE.txt */
exports.id = 46, exports.ids = [46], exports.modules = { 727: (t, e, i) => {
  const r = i(6950), { GifError: s } = i(2104);
  class n extends r {
    constructor(...t2) {
      if (super(...t2), t2[0] instanceof n) {
        const e2 = t2[0];
        this.xOffset = e2.xOffset, this.yOffset = e2.yOffset, this.disposalMethod = e2.disposalMethod, this.delayCentisecs = e2.delayCentisecs, this.interlaced = e2.interlaced;
      } else {
        const e2 = t2[t2.length - 1];
        let i2 = {};
        "object" != typeof e2 || e2 instanceof r || (i2 = e2), this.xOffset = i2.xOffset || 0, this.yOffset = i2.yOffset || 0, this.disposalMethod = void 0 !== i2.disposalMethod ? i2.disposalMethod : n.DisposeToBackgroundColor, this.delayCentisecs = i2.delayCentisecs || 8, this.interlaced = i2.interlaced || false;
      }
    }
    getPalette() {
      const t2 = /* @__PURE__ */ new Set(), e2 = this.bitmap.data;
      let i2 = 0, r2 = false;
      for (; i2 < e2.length; ) {
        if (0 === e2[i2 + 3]) r2 = true;
        else {
          const r3 = e2.readUInt32BE(i2, true) >> 8 & 16777215;
          t2.add(r3);
        }
        i2 += 4;
      }
      const s2 = new Array(t2.size), n2 = t2.values();
      for (i2 = 0; i2 < s2.length; ++i2) s2[i2] = n2.next().value;
      s2.sort((t3, e3) => t3 - e3);
      let a = s2.length;
      return r2 && ++a, { colors: s2, usesTransparency: r2, indexCount: a };
    }
  }
  n.DisposeToAnything = 0, n.DisposeNothing = 1, n.DisposeToBackgroundColor = 2, n.DisposeToPrevious = 3, e.GifFrame = n;
}, 2104: (t, e) => {
  class i {
    constructor(t2, e2, i2) {
      this.width = i2.width, this.height = i2.height, this.loops = i2.loops, this.usesTransparency = i2.usesTransparency, this.colorScope = i2.colorScope, this.frames = e2, this.buffer = t2;
    }
  }
  i.GlobalColorsPreferred = 0, i.GlobalColorsOnly = 1, i.LocalColorsOnly = 2;
  class r extends Error {
    constructor(t2) {
      super(t2), t2 instanceof Error && (this.stack = "Gif" + t2.stack);
    }
  }
  e.Gif = i, e.GifError = r;
}, 3046: (t, e, i) => {
  i.r(e), i.d(e, { default: () => n });
  var r = i(3058), s = i(6274);
  function n() {
    return { mime: "image/gif", encode: async (t2) => {
      const e2 = new s.BitmapImage(t2);
      s.GifUtil.quantizeDekker(e2, 256);
      const i2 = new s.GifFrame(t2), r2 = new s.GifCodec();
      return (await r2.encodeGif([i2], {})).buffer;
    }, decode: (t2) => {
      const e2 = new r.GifReader(t2), i2 = Buffer.alloc(e2.width * e2.height * 4);
      return e2.decodeAndBlitFrameRGBA(0, i2), { data: i2, width: e2.width, height: e2.height };
    } };
  }
}, 3058: (t, e) => {
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
}, 3424: (t, e, i) => {
  const r = i(3058), { Gif: s, GifError: n } = i(2104);
  function a() {
    const t2 = i(7884);
    return a = function() {
      return t2;
    }, t2;
  }
  const { GifFrame: o } = i(727);
  function h(t2, e2) {
    const i2 = t2.indexOf(e2);
    return -1 === i2 ? null : i2;
  }
  function l(t2, e2) {
    for (var i2, r2 = 0, s2 = t2.length - 1; r2 <= s2; ) if (t2[i2 = Math.floor((r2 + s2) / 2)] > e2) s2 = i2 - 1;
    else {
      if (!(t2[i2] < e2)) return i2;
      r2 = i2 + 1;
    }
    return null;
  }
  function u(t2) {
    const e2 = t2.colors;
    t2.usesTransparency && e2.push(0);
    const i2 = e2.length;
    let r2 = 2;
    for (; i2 > r2; ) r2 <<= 1;
    e2.length = r2, e2.fill(0, i2);
  }
  function m(t2, e2) {
    let i2 = t2.bitmap.width * t2.bitmap.height;
    return i2 = Math.ceil(i2 * e2 / 8), i2 += Math.ceil(i2 / 255), 100 + i2 + 768;
  }
  function c(t2) {
    let e2 = t2.indexCount, i2 = 0;
    for (--e2; e2; ) ++i2, e2 >>= 1;
    return i2 > 0 ? i2 : 1;
  }
  function _(t2, e2, i2, r2, s2) {
    if (i2.interlaced) throw new n("writing interlaced GIFs is not supported");
    const a2 = (function(t3, e3, i3) {
      const r3 = i3.colors, s3 = r3.length <= 8 ? h : l, a3 = e3.bitmap.data, o3 = new Buffer(a3.length / 4);
      let u2 = r3.length, m2 = 0, c2 = 0;
      for (; m2 < a3.length; ) {
        if (0 !== a3[m2 + 3]) {
          const t4 = a3.readUInt32BE(m2, true) >> 8 & 16777215;
          o3[c2] = s3(r3, t4);
        } else o3[c2] = u2;
        m2 += 4, ++c2;
      }
      if (i3.usesTransparency) {
        if (256 === u2) throw new n(`Frame ${t3} already has 256 colorsand so can't use transparency`);
      } else u2 = null;
      return { buffer: o3, transparentIndex: u2 };
    })(e2, i2, r2), o2 = { delay: i2.delayCentisecs, disposal: i2.disposalMethod, transparent: a2.transparentIndex };
    s2 && (u(r2), o2.palette = r2.colors);
    try {
      let e3, r3 = t2.getOutputBuffer(), s3 = t2.getOutputBufferPosition(), n2 = true;
      for (; n2; ) if (e3 = t2.addFrame(i2.xOffset, i2.yOffset, i2.bitmap.width, i2.bitmap.height, a2.buffer, o2), n2 = false, e3 >= r3.length - 1) {
        const e4 = new Buffer(1.5 * r3.length);
        r3.copy(e4), t2.setOutputBuffer(e4), t2.setOutputBufferPosition(s3), r3 = e4, n2 = true;
      }
      return r3;
    } catch (t3) {
      throw new n(t3);
    }
  }
  e.GifCodec = class {
    constructor(t2 = {}) {
      this._transparentRGB = null, "number" == typeof t2.transparentRGB && 0 !== t2.transparentRGB && (this._transparentRGBA = 256 * t2.transparentRGB), this._testInitialBufferSize = 0;
    }
    decodeGif(t2) {
      try {
        let e2;
        try {
          e2 = new r.GifReader(t2);
        } catch (t3) {
          throw new n(t3);
        }
        const i2 = e2.numFrames(), a2 = [], o2 = { width: e2.width, height: e2.height, loops: e2.loopCount(), usesTransparency: false };
        for (let t3 = 0; t3 < i2; ++t3) {
          const i3 = this._decodeFrame(e2, t3, o2.usesTransparency);
          a2.push(i3.frame), i3.usesTransparency && (o2.usesTransparency = true);
        }
        return Promise.resolve(new s(t2, a2, o2));
      } catch (t3) {
        return Promise.reject(t3);
      }
    }
    encodeGif(t2, e2 = {}) {
      try {
        if (null === t2 || 0 === t2.length) throw new n("there are no frames");
        const i2 = a().getMaxDimensions(t2);
        return (e2 = Object.assign({}, e2)).width = i2.maxWidth, e2.height = i2.maxHeight, void 0 === e2.loops && (e2.loops = 0), e2.colorScope = e2.colorScope || s.GlobalColorsPreferred, Promise.resolve(this._encodeGif(t2, e2));
      } catch (t3) {
        return Promise.reject(t3);
      }
    }
    _decodeFrame(t2, e2, i2) {
      let r2, s2;
      try {
        if (r2 = t2.frameInfo(e2), s2 = new Buffer(t2.width * t2.height * 4), t2.decodeAndBlitFrameRGBA(e2, s2), r2.width !== t2.width || r2.height !== t2.height) {
          if (r2.y && (s2 = s2.slice(r2.y * t2.width * 4)), t2.width > r2.width) for (let e3 = 0; e3 < r2.height; ++e3) s2.copy(s2, e3 * r2.width * 4, 4 * (r2.x + e3 * t2.width), 4 * (r2.x + e3 * t2.width) + 4 * r2.width);
          s2 = s2.slice(0, r2.width * r2.height * 4);
        }
      } catch (t3) {
        throw new n(t3);
      }
      let a2 = false;
      if (null === this._transparentRGBA) {
        if (!i2) for (let t3 = 3; t3 < s2.length; t3 += 4) 0 === s2[t3] && (a2 = true, t3 = s2.length);
      } else for (let t3 = 3; t3 < s2.length; t3 += 4) 0 === s2[t3] && (s2.writeUInt32BE(this._transparentRGBA, t3 - 3), a2 = true);
      return { frame: new o(r2.width, r2.height, s2, { xOffset: r2.x, yOffset: r2.y, disposalMethod: r2.disposal, interlaced: r2.interlaced, delayCentisecs: r2.delay }), usesTransparency: a2 };
    }
    _encodeGif(t2, e2) {
      let i2;
      if (e2.colorScope === s.LocalColorsOnly) i2 = a().getColorInfo(t2, 0);
      else if (i2 = a().getColorInfo(t2, 256), !i2.colors) {
        if (e2.colorScope === s.GlobalColorsOnly) throw new n("Too many color indexes for global color table");
        e2.colorScope = s.LocalColorsOnly;
      }
      e2.usesTransparency = i2.usesTransparency;
      const o2 = i2.palettes;
      if (e2.colorScope === s.LocalColorsOnly) {
        return (function(t3, e3, i3, a2) {
          const o3 = { loop: e3.loops };
          let h2, l2 = new Buffer(i3);
          try {
            h2 = new r.GifWriter(l2, e3.width, e3.height, o3);
          } catch (t4) {
            throw new n(t4);
          }
          for (let e4 = 0; e4 < t3.length; ++e4) l2 = _(h2, e4, t3[e4], a2[e4], true);
          return new s(l2.slice(0, h2.end()), t3, e3);
        })(t2, e2, 2e3, o2);
      }
      return (function(t3, e3, i3, a2) {
        const o3 = { colors: a2.colors.slice(), usesTransparency: a2.usesTransparency };
        u(o3);
        const h2 = { palette: o3.colors, loop: e3.loops };
        let l2, m2 = new Buffer(i3);
        try {
          l2 = new r.GifWriter(m2, e3.width, e3.height, h2);
        } catch (t4) {
          throw new n(t4);
        }
        for (let e4 = 0; e4 < t3.length; ++e4) m2 = _(l2, e4, t3[e4], a2, false);
        return new s(m2.slice(0, l2.end()), t3, e3);
      })(t2, e2, 2e3, i2);
    }
    _getSizeEstimateGlobal(t2, e2) {
      if (this._testInitialBufferSize > 0) return this._testInitialBufferSize;
      let i2 = 968;
      const r2 = c(t2);
      return e2.forEach((t3) => {
        i2 += m(t3, r2);
      }), i2;
    }
    _getSizeEstimateLocal(t2, e2) {
      if (this._testInitialBufferSize > 0) return this._testInitialBufferSize;
      let i2 = 200;
      for (let r2 = 0; r2 < e2.length; ++r2) {
        const s2 = c(t2[r2]);
        i2 += m(e2[r2], s2);
      }
      return i2;
    }
  };
}, 6267: (t, e, i) => {
  i.r(e), i.d(e, { applyPalette: () => $t, applyPaletteSync: () => Kt, buildPalette: () => jt, buildPaletteSync: () => Qt, constants: () => a, conversion: () => m, distance: () => F, image: () => Et, palette: () => tt, quality: () => Tt, utils: () => at });
  var r = Object.defineProperty, s = (t2, e2) => {
    for (var i2 in e2) r(t2, i2, { get: e2[i2], enumerable: true });
  }, n = (t2, e2, i2) => (((t3, e3, i3) => {
    e3 in t3 ? r(t3, e3, { enumerable: true, configurable: true, writable: true, value: i3 }) : t3[e3] = i3;
  })(t2, "symbol" != typeof e2 ? e2 + "" : e2, i2), i2), a = {};
  s(a, { bt709: () => o });
  var o = {};
  s(o, { Y: () => h, x: () => l, y: () => u });
  var h = ((t2) => (t2[t2.RED = 0.2126] = "RED", t2[t2.GREEN = 0.7152] = "GREEN", t2[t2.BLUE = 0.0722] = "BLUE", t2[t2.WHITE = 1] = "WHITE", t2))(h || {}), l = ((t2) => (t2[t2.RED = 0.64] = "RED", t2[t2.GREEN = 0.3] = "GREEN", t2[t2.BLUE = 0.15] = "BLUE", t2[t2.WHITE = 0.3127] = "WHITE", t2))(l || {}), u = ((t2) => (t2[t2.RED = 0.33] = "RED", t2[t2.GREEN = 0.6] = "GREEN", t2[t2.BLUE = 0.06] = "BLUE", t2[t2.WHITE = 0.329] = "WHITE", t2))(u || {}), m = {};
  function c(t2) {
    return t2 > 0.04045 ? ((t2 + 0.055) / 1.055) ** 2.4 : t2 / 12.92;
  }
  function _(t2, e2, i2) {
    return { x: 0.4124 * (t2 = c(t2 / 255)) + 0.3576 * (e2 = c(e2 / 255)) + 0.1805 * (i2 = c(i2 / 255)), y: 0.2126 * t2 + 0.7152 * e2 + 0.0722 * i2, z: 0.0193 * t2 + 0.1192 * e2 + 0.9505 * i2 };
  }
  s(m, { lab2rgb: () => q, lab2xyz: () => R, rgb2hsl: () => y, rgb2lab: () => v, rgb2xyz: () => _, xyz2lab: () => A, xyz2rgb: () => D });
  var d = {};
  function f(t2) {
    return t2 * (Math.PI / 180);
  }
  function p(t2, e2, i2) {
    let r2 = t2;
    return r2 < e2 && (r2 = e2), r2 < i2 && (r2 = i2), r2;
  }
  function g(t2, e2, i2) {
    let r2 = t2;
    return r2 > e2 && (r2 = e2), r2 > i2 && (r2 = i2), r2;
  }
  function b(t2, e2, i2) {
    return t2 > i2 && (t2 = i2), t2 < e2 && (t2 = e2), 0 | t2;
  }
  function M(t2) {
    return (t2 = Math.round(t2)) > 255 ? t2 = 255 : t2 < 0 && (t2 = 0), t2;
  }
  function w(t2) {
    return t2 > 255 ? t2 = 255 : t2 < 0 && (t2 = 0), t2;
  }
  function x(t2, e2) {
    const i2 = typeof t2[0];
    let r2;
    if ("number" === i2 || "string" === i2) {
      const i3 = /* @__PURE__ */ Object.create(null);
      for (let e3 = 0, r3 = t2.length; e3 < r3; e3++) {
        const r4 = t2[e3];
        i3[r4] || 0 === i3[r4] || (i3[r4] = e3);
      }
      r2 = t2.sort((t3, r3) => e2(t3, r3) || i3[t3] - i3[r3]);
    } else {
      const i3 = t2.slice(0);
      r2 = t2.sort((t3, r3) => e2(t3, r3) || i3.indexOf(t3) - i3.indexOf(r3));
    }
    return r2;
  }
  function y(t2, e2, i2) {
    const r2 = g(t2, e2, i2), s2 = p(t2, e2, i2), n2 = s2 - r2, a2 = (r2 + s2) / 510;
    let o2 = 0;
    a2 > 0 && a2 < 1 && (o2 = n2 / (a2 < 0.5 ? s2 + r2 : 510 - s2 - r2));
    let h2 = 0;
    return n2 > 0 && (h2 = s2 === t2 ? (e2 - i2) / n2 : s2 === e2 ? 2 + (i2 - t2) / n2 : 4 + (t2 - e2) / n2, h2 *= 60, h2 < 0 && (h2 += 360)), { h: h2, s: o2, l: a2 };
  }
  s(d, { degrees2radians: () => f, inRange0to255: () => w, inRange0to255Rounded: () => M, intInRange: () => b, max3: () => p, min3: () => g, stableSort: () => x });
  var S = 0.95047, k = 1, B = 1.08883;
  function z(t2) {
    return t2 > 8856e-6 ? t2 ** (1 / 3) : 7.787 * t2 + 16 / 116;
  }
  function A(t2, e2, i2) {
    if (t2 = z(t2 / S), e2 = z(e2 / k), i2 = z(i2 / B), 116 * e2 - 16 < 0) throw new Error("xxx");
    return { L: Math.max(0, 116 * e2 - 16), a: 500 * (t2 - e2), b: 200 * (e2 - i2) };
  }
  function v(t2, e2, i2) {
    const r2 = _(t2, e2, i2);
    return A(r2.x, r2.y, r2.z);
  }
  var E = 0.95047, I = 1, G = 1.08883;
  function P(t2) {
    return t2 > 0.206893034 ? t2 ** 3 : (t2 - 16 / 116) / 7.787;
  }
  function R(t2, e2, i2) {
    const r2 = (t2 + 16) / 116, s2 = r2 - i2 / 200;
    return { x: E * P(e2 / 500 + r2), y: I * P(r2), z: G * P(s2) };
  }
  function C(t2) {
    return t2 > 31308e-7 ? 1.055 * t2 ** (1 / 2.4) - 0.055 : 12.92 * t2;
  }
  function D(t2, e2, i2) {
    const r2 = C(3.2406 * t2 + -1.5372 * e2 + -0.4986 * i2), s2 = C(-0.9689 * t2 + 1.8758 * e2 + 0.0415 * i2), n2 = C(0.0557 * t2 + -0.204 * e2 + 1.057 * i2);
    return { r: M(255 * r2), g: M(255 * s2), b: M(255 * n2) };
  }
  function q(t2, e2, i2) {
    const r2 = R(t2, e2, i2);
    return D(r2.x, r2.y, r2.z);
  }
  var F = {};
  s(F, { AbstractDistanceCalculator: () => T, AbstractEuclidean: () => Q, AbstractManhattan: () => J, CIE94GraphicArts: () => L, CIE94Textiles: () => N, CIEDE2000: () => W, CMetric: () => H, Euclidean: () => j, EuclideanBT709: () => K, EuclideanBT709NoAlpha: () => $, Manhattan: () => V, ManhattanBT709: () => Y, ManhattanNommyde: () => X, PNGQuant: () => Z });
  var T = class {
    constructor() {
      n(this, "_maxDistance"), n(this, "_whitePoint"), this._setDefaults(), this.setWhitePoint(255, 255, 255, 255);
    }
    setWhitePoint(t2, e2, i2, r2) {
      this._whitePoint = { r: t2 > 0 ? 255 / t2 : 0, g: e2 > 0 ? 255 / e2 : 0, b: i2 > 0 ? 255 / i2 : 0, a: r2 > 0 ? 255 / r2 : 0 }, this._maxDistance = this.calculateRaw(t2, e2, i2, r2, 0, 0, 0, 0);
    }
    calculateNormalized(t2, e2) {
      return this.calculateRaw(t2.r, t2.g, t2.b, t2.a, e2.r, e2.g, e2.b, e2.a) / this._maxDistance;
    }
  }, U = class extends T {
    calculateRaw(t2, e2, i2, r2, s2, n2, a2, o2) {
      const h2 = v(w(t2 * this._whitePoint.r), w(e2 * this._whitePoint.g), w(i2 * this._whitePoint.b)), l2 = v(w(s2 * this._whitePoint.r), w(n2 * this._whitePoint.g), w(a2 * this._whitePoint.b)), u2 = h2.L - l2.L, m2 = h2.a - l2.a, c2 = h2.b - l2.b, _2 = Math.sqrt(h2.a * h2.a + h2.b * h2.b), d2 = _2 - Math.sqrt(l2.a * l2.a + l2.b * l2.b);
      let f2 = m2 * m2 + c2 * c2 - d2 * d2;
      f2 = f2 < 0 ? 0 : Math.sqrt(f2);
      const p2 = (o2 - r2) * this._whitePoint.a * this._kA;
      return Math.sqrt((u2 / this._Kl) ** 2 + (d2 / (1 + this._K1 * _2)) ** 2 + (f2 / (1 + this._K2 * _2)) ** 2 + p2 ** 2);
    }
  }, N = class extends U {
    _setDefaults() {
      this._Kl = 2, this._K1 = 0.048, this._K2 = 0.014, this._kA = 12.5 / 255;
    }
  }, L = class extends U {
    _setDefaults() {
      this._Kl = 1, this._K1 = 0.045, this._K2 = 0.015, this._kA = 25 / 255;
    }
  }, O = class extends T {
    _setDefaults() {
    }
    static _calculatehp(t2, e2) {
      const i2 = Math.atan2(t2, e2);
      return i2 >= 0 ? i2 : i2 + O._deg360InRad;
    }
    static _calculateRT(t2, e2) {
      const i2 = e2 ** 7, r2 = 2 * Math.sqrt(i2 / (i2 + O._pow25to7)), s2 = O._deg30InRad * Math.exp(-(((t2 - O._deg275InRad) / O._deg25InRad) ** 2));
      return -Math.sin(2 * s2) * r2;
    }
    static _calculateT(t2) {
      return 1 - 0.17 * Math.cos(t2 - O._deg30InRad) + 0.24 * Math.cos(2 * t2) + 0.32 * Math.cos(3 * t2 + O._deg6InRad) - 0.2 * Math.cos(4 * t2 - O._deg63InRad);
    }
    static _calculate_ahp(t2, e2, i2, r2) {
      const s2 = i2 + r2;
      return 0 === t2 ? s2 : e2 <= O._deg180InRad ? s2 / 2 : s2 < O._deg360InRad ? (s2 + O._deg360InRad) / 2 : (s2 - O._deg360InRad) / 2;
    }
    static _calculate_dHp(t2, e2, i2, r2) {
      let s2;
      return s2 = 0 === t2 ? 0 : e2 <= O._deg180InRad ? i2 - r2 : i2 <= r2 ? i2 - r2 + O._deg360InRad : i2 - r2 - O._deg360InRad, 2 * Math.sqrt(t2) * Math.sin(s2 / 2);
    }
    calculateRaw(t2, e2, i2, r2, s2, n2, a2, o2) {
      const h2 = v(w(t2 * this._whitePoint.r), w(e2 * this._whitePoint.g), w(i2 * this._whitePoint.b)), l2 = v(w(s2 * this._whitePoint.r), w(n2 * this._whitePoint.g), w(a2 * this._whitePoint.b)), u2 = (o2 - r2) * this._whitePoint.a * O._kA, m2 = this.calculateRawInLab(h2, l2);
      return Math.sqrt(m2 + u2 * u2);
    }
    calculateRawInLab(t2, e2) {
      const i2 = t2.L, r2 = t2.a, s2 = t2.b, n2 = e2.L, a2 = e2.a, o2 = e2.b, h2 = ((Math.sqrt(r2 * r2 + s2 * s2) + Math.sqrt(a2 * a2 + o2 * o2)) / 2) ** 7, l2 = 0.5 * (1 - Math.sqrt(h2 / (h2 + O._pow25to7))), u2 = (1 + l2) * r2, m2 = (1 + l2) * a2, c2 = Math.sqrt(u2 * u2 + s2 * s2), _2 = Math.sqrt(m2 * m2 + o2 * o2), d2 = c2 * _2, f2 = O._calculatehp(s2, u2), p2 = O._calculatehp(o2, m2), g2 = Math.abs(f2 - p2), b2 = n2 - i2, M2 = _2 - c2, w2 = O._calculate_dHp(d2, g2, p2, f2), x2 = O._calculate_ahp(d2, g2, f2, p2), y2 = (c2 + _2) / 2, S2 = ((i2 + n2) / 2 - 50) ** 2, k2 = M2 / (1 + 0.045 * y2), B2 = w2 / (1 + 0.015 * O._calculateT(x2) * y2);
      return (b2 / (1 + 0.015 * S2 / Math.sqrt(20 + S2))) ** 2 + k2 ** 2 + B2 ** 2 + O._calculateRT(x2, y2) * k2 * B2;
    }
  }, W = O;
  n(W, "_kA", 25 / 255), n(W, "_pow25to7", 25 ** 7), n(W, "_deg360InRad", f(360)), n(W, "_deg180InRad", f(180)), n(W, "_deg30InRad", f(30)), n(W, "_deg6InRad", f(6)), n(W, "_deg63InRad", f(63)), n(W, "_deg275InRad", f(275)), n(W, "_deg25InRad", f(25));
  var H = class extends T {
    calculateRaw(t2, e2, i2, r2, s2, n2, a2, o2) {
      const h2 = (t2 + s2) / 2 * this._whitePoint.r, l2 = (t2 - s2) * this._whitePoint.r, u2 = (e2 - n2) * this._whitePoint.g, m2 = (i2 - a2) * this._whitePoint.b, c2 = ((512 + h2) * l2 * l2 >> 8) + 4 * u2 * u2 + ((767 - h2) * m2 * m2 >> 8), _2 = (o2 - r2) * this._whitePoint.a;
      return Math.sqrt(c2 + _2 * _2);
    }
    _setDefaults() {
    }
  }, Q = class extends T {
    calculateRaw(t2, e2, i2, r2, s2, n2, a2, o2) {
      const h2 = s2 - t2, l2 = n2 - e2, u2 = a2 - i2, m2 = o2 - r2;
      return Math.sqrt(this._kR * h2 * h2 + this._kG * l2 * l2 + this._kB * u2 * u2 + this._kA * m2 * m2);
    }
  }, j = class extends Q {
    _setDefaults() {
      this._kR = 1, this._kG = 1, this._kB = 1, this._kA = 1;
    }
  }, K = class extends Q {
    _setDefaults() {
      this._kR = 0.2126, this._kG = 0.7152, this._kB = 0.0722, this._kA = 1;
    }
  }, $ = class extends Q {
    _setDefaults() {
      this._kR = 0.2126, this._kG = 0.7152, this._kB = 0.0722, this._kA = 0;
    }
  }, J = class extends T {
    calculateRaw(t2, e2, i2, r2, s2, n2, a2, o2) {
      let h2 = s2 - t2, l2 = n2 - e2, u2 = a2 - i2, m2 = o2 - r2;
      return h2 < 0 && (h2 = 0 - h2), l2 < 0 && (l2 = 0 - l2), u2 < 0 && (u2 = 0 - u2), m2 < 0 && (m2 = 0 - m2), this._kR * h2 + this._kG * l2 + this._kB * u2 + this._kA * m2;
    }
  }, V = class extends J {
    _setDefaults() {
      this._kR = 1, this._kG = 1, this._kB = 1, this._kA = 1;
    }
  }, X = class extends J {
    _setDefaults() {
      this._kR = 0.4984, this._kG = 0.8625, this._kB = 0.2979, this._kA = 1;
    }
  }, Y = class extends J {
    _setDefaults() {
      this._kR = 0.2126, this._kG = 0.7152, this._kB = 0.0722, this._kA = 1;
    }
  }, Z = class extends T {
    calculateRaw(t2, e2, i2, r2, s2, n2, a2, o2) {
      const h2 = (o2 - r2) * this._whitePoint.a;
      return this._colordifferenceCh(t2 * this._whitePoint.r, s2 * this._whitePoint.r, h2) + this._colordifferenceCh(e2 * this._whitePoint.g, n2 * this._whitePoint.g, h2) + this._colordifferenceCh(i2 * this._whitePoint.b, a2 * this._whitePoint.b, h2);
    }
    _colordifferenceCh(t2, e2, i2) {
      const r2 = t2 - e2, s2 = r2 + i2;
      return r2 * r2 + s2 * s2;
    }
    _setDefaults() {
    }
  }, tt = {};
  s(tt, { AbstractPaletteQuantizer: () => et, ColorHistogram: () => bt, NeuQuant: () => _t, NeuQuantFloat: () => pt, RGBQuant: () => wt, WuColorCube: () => zt, WuQuant: () => vt });
  var et = class {
    quantizeSync() {
      for (const t2 of this.quantize()) if (t2.palette) return t2.palette;
      throw new Error("unreachable");
    }
  }, it = class {
    constructor() {
      n(this, "r"), n(this, "g"), n(this, "b"), n(this, "a"), n(this, "uint32"), n(this, "rgba"), this.uint32 = -1 >>> 0, this.r = this.g = this.b = this.a = 0, this.rgba = new Array(4), this.rgba[0] = 0, this.rgba[1] = 0, this.rgba[2] = 0, this.rgba[3] = 0;
    }
    static createByQuadruplet(t2) {
      const e2 = new it();
      return e2.r = 0 | t2[0], e2.g = 0 | t2[1], e2.b = 0 | t2[2], e2.a = 0 | t2[3], e2._loadUINT32(), e2._loadQuadruplet(), e2;
    }
    static createByRGBA(t2, e2, i2, r2) {
      const s2 = new it();
      return s2.r = 0 | t2, s2.g = 0 | e2, s2.b = 0 | i2, s2.a = 0 | r2, s2._loadUINT32(), s2._loadQuadruplet(), s2;
    }
    static createByUint32(t2) {
      const e2 = new it();
      return e2.uint32 = t2 >>> 0, e2._loadRGBA(), e2._loadQuadruplet(), e2;
    }
    from(t2) {
      this.r = t2.r, this.g = t2.g, this.b = t2.b, this.a = t2.a, this.uint32 = t2.uint32, this.rgba[0] = t2.r, this.rgba[1] = t2.g, this.rgba[2] = t2.b, this.rgba[3] = t2.a;
    }
    getLuminosity(t2) {
      let e2 = this.r, i2 = this.g, r2 = this.b;
      return t2 && (e2 = Math.min(255, 255 - this.a + this.a * e2 / 255), i2 = Math.min(255, 255 - this.a + this.a * i2 / 255), r2 = Math.min(255, 255 - this.a + this.a * r2 / 255)), 0.2126 * e2 + 0.7152 * i2 + 0.0722 * r2;
    }
    _loadUINT32() {
      this.uint32 = (this.a << 24 | this.b << 16 | this.g << 8 | this.r) >>> 0;
    }
    _loadRGBA() {
      this.r = 255 & this.uint32, this.g = this.uint32 >>> 8 & 255, this.b = this.uint32 >>> 16 & 255, this.a = this.uint32 >>> 24 & 255;
    }
    _loadQuadruplet() {
      this.rgba[0] = this.r, this.rgba[1] = this.g, this.rgba[2] = this.b, this.rgba[3] = this.a;
    }
  }, rt = class {
    constructor() {
      n(this, "_pointArray"), n(this, "_width"), n(this, "_height"), this._width = 0, this._height = 0, this._pointArray = [];
    }
    getWidth() {
      return this._width;
    }
    getHeight() {
      return this._height;
    }
    setWidth(t2) {
      this._width = t2;
    }
    setHeight(t2) {
      this._height = t2;
    }
    getPointArray() {
      return this._pointArray;
    }
    clone() {
      const t2 = new rt();
      t2._width = this._width, t2._height = this._height;
      for (let e2 = 0, i2 = this._pointArray.length; e2 < i2; e2++) t2._pointArray[e2] = it.createByUint32(0 | this._pointArray[e2].uint32);
      return t2;
    }
    toUint32Array() {
      const t2 = this._pointArray.length, e2 = new Uint32Array(t2);
      for (let i2 = 0; i2 < t2; i2++) e2[i2] = this._pointArray[i2].uint32;
      return e2;
    }
    toUint8Array() {
      return new Uint8Array(this.toUint32Array().buffer);
    }
    static fromHTMLImageElement(t2) {
      const e2 = t2.naturalWidth, i2 = t2.naturalHeight, r2 = document.createElement("canvas");
      r2.width = e2, r2.height = i2;
      return r2.getContext("2d").drawImage(t2, 0, 0, e2, i2, 0, 0, e2, i2), rt.fromHTMLCanvasElement(r2);
    }
    static fromHTMLCanvasElement(t2) {
      const e2 = t2.width, i2 = t2.height, r2 = t2.getContext("2d").getImageData(0, 0, e2, i2);
      return rt.fromImageData(r2);
    }
    static fromImageData(t2) {
      const e2 = t2.width, i2 = t2.height;
      return rt.fromUint8Array(t2.data, e2, i2);
    }
    static fromUint8Array(t2, e2, i2) {
      switch (Object.prototype.toString.call(t2)) {
        case "[object Uint8ClampedArray]":
        case "[object Uint8Array]":
          break;
        default:
          t2 = new Uint8Array(t2);
      }
      const r2 = new Uint32Array(t2.buffer);
      return rt.fromUint32Array(r2, e2, i2);
    }
    static fromUint32Array(t2, e2, i2) {
      const r2 = new rt();
      r2._width = e2, r2._height = i2;
      for (let e3 = 0, i3 = t2.length; e3 < i3; e3++) r2._pointArray[e3] = it.createByUint32(0 | t2[e3]);
      return r2;
    }
    static fromBuffer(t2, e2, i2) {
      const r2 = new Uint32Array(t2.buffer, t2.byteOffset, t2.byteLength / Uint32Array.BYTES_PER_ELEMENT);
      return rt.fromUint32Array(r2, e2, i2);
    }
  };
  function st(t2, e2) {
    const i2 = 360 / e2;
    for (let r2 = 1, s2 = i2 - i2 / 2; r2 < e2; r2++, s2 += i2) if (t2 >= s2 && t2 < s2 + i2) return r2;
    return 0;
  }
  var nt = class {
    constructor() {
      n(this, "_pointContainer"), n(this, "_pointArray", []), n(this, "_i32idx", {}), this._pointContainer = new rt(), this._pointContainer.setHeight(1), this._pointArray = this._pointContainer.getPointArray();
    }
    add(t2) {
      this._pointArray.push(t2), this._pointContainer.setWidth(this._pointArray.length);
    }
    has(t2) {
      for (let e2 = this._pointArray.length - 1; e2 >= 0; e2--) if (t2.uint32 === this._pointArray[e2].uint32) return true;
      return false;
    }
    getNearestColor(t2, e2) {
      return this._pointArray[0 | this._getNearestIndex(t2, e2)];
    }
    getPointContainer() {
      return this._pointContainer;
    }
    _nearestPointFromCache(t2) {
      return "number" == typeof this._i32idx[t2] ? this._i32idx[t2] : -1;
    }
    _getNearestIndex(t2, e2) {
      let i2 = this._nearestPointFromCache("" + e2.uint32);
      if (i2 >= 0) return i2;
      let r2 = Number.MAX_VALUE;
      i2 = 0;
      for (let s2 = 0, n2 = this._pointArray.length; s2 < n2; s2++) {
        const n3 = this._pointArray[s2], a2 = t2.calculateRaw(e2.r, e2.g, e2.b, e2.a, n3.r, n3.g, n3.b, n3.a);
        a2 < r2 && (r2 = a2, i2 = s2);
      }
      return this._i32idx[e2.uint32] = i2, i2;
    }
    sort() {
      this._i32idx = {}, this._pointArray.sort((t2, e2) => {
        const i2 = y(t2.r, t2.g, t2.b), r2 = y(e2.r, e2.g, e2.b), s2 = t2.r === t2.g && t2.g === t2.b ? 0 : 1 + st(i2.h, 10), n2 = (e2.r === e2.g && e2.g === e2.b ? 0 : 1 + st(r2.h, 10)) - s2;
        if (n2) return -n2;
        const a2 = t2.getLuminosity(true), o2 = e2.getLuminosity(true);
        if (o2 - a2 !== 0) return o2 - a2;
        const h2 = (100 * r2.s | 0) - (100 * i2.s | 0);
        return h2 ? -h2 : 0;
      });
    }
  }, at = {};
  s(at, { HueStatistics: () => ht, Palette: () => nt, Point: () => it, PointContainer: () => rt, ProgressTracker: () => ut, arithmetic: () => d });
  var ot = class {
    constructor() {
      n(this, "num", 0), n(this, "cols", []);
    }
  }, ht = class {
    constructor(t2, e2) {
      n(this, "_numGroups"), n(this, "_minCols"), n(this, "_stats"), n(this, "_groupsFull"), this._numGroups = t2, this._minCols = e2, this._stats = [];
      for (let e3 = 0; e3 <= t2; e3++) this._stats[e3] = new ot();
      this._groupsFull = 0;
    }
    check(t2) {
      this._groupsFull === this._numGroups + 1 && (this.check = () => {
      });
      const e2 = 255 & t2, i2 = t2 >>> 8 & 255, r2 = t2 >>> 16 & 255, s2 = e2 === i2 && i2 === r2 ? 0 : 1 + st(y(e2, i2, r2).h, this._numGroups), n2 = this._stats[s2], a2 = this._minCols;
      n2.num++, n2.num > a2 || (n2.num === a2 && this._groupsFull++, n2.num <= a2 && this._stats[s2].cols.push(t2));
    }
    injectIntoDictionary(t2) {
      for (let e2 = 0; e2 <= this._numGroups; e2++) this._stats[e2].num <= this._minCols && this._stats[e2].cols.forEach((e3) => {
        t2[e3] ? t2[e3]++ : t2[e3] = 1;
      });
    }
    injectIntoArray(t2) {
      for (let e2 = 0; e2 <= this._numGroups; e2++) this._stats[e2].num <= this._minCols && this._stats[e2].cols.forEach((e3) => {
        -1 === t2.indexOf(e3) && t2.push(e3);
      });
    }
  }, lt = class {
    constructor(t2, e2) {
      n(this, "progress"), n(this, "_step"), n(this, "_range"), n(this, "_last"), n(this, "_progressRange"), this._range = t2, this._progressRange = e2, this._step = Math.max(1, this._range / (lt.steps + 1) | 0), this._last = -this._step, this.progress = 0;
    }
    shouldNotify(t2) {
      return t2 - this._last >= this._step && (this._last = t2, this.progress = Math.min(this._progressRange * this._last / this._range, this._progressRange), true);
    }
  }, ut = lt;
  n(ut, "steps", 100);
  var mt = class {
    constructor(t2) {
      n(this, "r"), n(this, "g"), n(this, "b"), n(this, "a"), this.r = this.g = this.b = this.a = t2;
    }
    toPoint() {
      return it.createByRGBA(this.r >> 3, this.g >> 3, this.b >> 3, this.a >> 3);
    }
    subtract(t2, e2, i2, r2) {
      this.r -= 0 | t2, this.g -= 0 | e2, this.b -= 0 | i2, this.a -= 0 | r2;
    }
  }, ct = class extends et {
    constructor(t2, e2 = 256) {
      super(), n(this, "_pointArray"), n(this, "_networkSize"), n(this, "_network"), n(this, "_sampleFactor"), n(this, "_radPower"), n(this, "_freq"), n(this, "_bias"), n(this, "_distance"), this._distance = t2, this._pointArray = [], this._sampleFactor = 1, this._networkSize = e2, this._distance.setWhitePoint(2040, 2040, 2040, 2040);
    }
    sample(t2) {
      this._pointArray = this._pointArray.concat(t2.getPointArray());
    }
    *quantize() {
      this._init(), yield* this._learn(), yield { palette: this._buildPalette(), progress: 100 };
    }
    _init() {
      this._freq = [], this._bias = [], this._radPower = [], this._network = [];
      for (let t2 = 0; t2 < this._networkSize; t2++) this._network[t2] = new mt((t2 << 11) / this._networkSize | 0), this._freq[t2] = ct._initialBias / this._networkSize | 0, this._bias[t2] = 0;
    }
    *_learn() {
      let t2 = this._sampleFactor;
      const e2 = this._pointArray.length;
      e2 < ct._minpicturebytes && (t2 = 1);
      const i2 = 30 + (t2 - 1) / 3 | 0, r2 = e2 / t2 | 0;
      let s2, n2 = r2 / ct._nCycles | 0, a2 = ct._initAlpha, o2 = (this._networkSize >> 3) * ct._radiusBias, h2 = o2 >> ct._radiusBiasShift;
      h2 <= 1 && (h2 = 0);
      for (let t3 = 0; t3 < h2; t3++) this._radPower[t3] = a2 * ((h2 * h2 - t3 * t3) * ct._radBias / (h2 * h2)) >>> 0;
      s2 = e2 < ct._minpicturebytes ? 1 : e2 % ct._prime1 !== 0 ? ct._prime1 : e2 % ct._prime2 !== 0 ? ct._prime2 : e2 % ct._prime3 !== 0 ? ct._prime3 : ct._prime4;
      const l2 = new ut(r2, 99);
      for (let t3 = 0, u2 = 0; t3 < r2; ) {
        l2.shouldNotify(t3) && (yield { progress: l2.progress });
        const r3 = this._pointArray[u2], m2 = r3.b << 3, c2 = r3.g << 3, _2 = r3.r << 3, d2 = r3.a << 3, f2 = this._contest(m2, c2, _2, d2);
        if (this._alterSingle(a2, f2, m2, c2, _2, d2), 0 !== h2 && this._alterNeighbour(h2, f2, m2, c2, _2, d2), u2 += s2, u2 >= e2 && (u2 -= e2), t3++, 0 === n2 && (n2 = 1), t3 % n2 === 0) {
          a2 -= a2 / i2 | 0, o2 -= o2 / ct._radiusDecrease | 0, h2 = o2 >> ct._radiusBiasShift, h2 <= 1 && (h2 = 0);
          for (let t4 = 0; t4 < h2; t4++) this._radPower[t4] = a2 * ((h2 * h2 - t4 * t4) * ct._radBias / (h2 * h2)) >>> 0;
        }
      }
    }
    _buildPalette() {
      const t2 = new nt();
      return this._network.forEach((e2) => {
        t2.add(e2.toPoint());
      }), t2.sort(), t2;
    }
    _alterNeighbour(t2, e2, i2, r2, s2, n2) {
      let a2 = e2 - t2;
      a2 < -1 && (a2 = -1);
      let o2 = e2 + t2;
      o2 > this._networkSize && (o2 = this._networkSize);
      let h2 = e2 + 1, l2 = e2 - 1, u2 = 1;
      for (; h2 < o2 || l2 > a2; ) {
        const t3 = this._radPower[u2++] / ct._alphaRadBias;
        if (h2 < o2) {
          const e3 = this._network[h2++];
          e3.subtract(t3 * (e3.r - s2), t3 * (e3.g - r2), t3 * (e3.b - i2), t3 * (e3.a - n2));
        }
        if (l2 > a2) {
          const e3 = this._network[l2--];
          e3.subtract(t3 * (e3.r - s2), t3 * (e3.g - r2), t3 * (e3.b - i2), t3 * (e3.a - n2));
        }
      }
    }
    _alterSingle(t2, e2, i2, r2, s2, n2) {
      t2 /= ct._initAlpha;
      const a2 = this._network[e2];
      a2.subtract(t2 * (a2.r - s2), t2 * (a2.g - r2), t2 * (a2.b - i2), t2 * (a2.a - n2));
    }
    _contest(t2, e2, i2, r2) {
      let s2 = ~(1 << 31), n2 = s2, a2 = -1, o2 = a2;
      for (let h2 = 0; h2 < this._networkSize; h2++) {
        const l2 = this._network[h2], u2 = 8160 * this._distance.calculateNormalized(l2, { r: i2, g: e2, b: t2, a: r2 }) | 0;
        u2 < s2 && (s2 = u2, a2 = h2);
        const m2 = u2 - (this._bias[h2] >> ct._initialBiasShift - 3);
        m2 < n2 && (n2 = m2, o2 = h2);
        const c2 = this._freq[h2] >> ct._betaShift;
        this._freq[h2] -= c2, this._bias[h2] += c2 << ct._gammaShift;
      }
      return this._freq[a2] += ct._beta, this._bias[a2] -= ct._betaGamma, o2;
    }
  }, _t = ct;
  n(_t, "_prime1", 499), n(_t, "_prime2", 491), n(_t, "_prime3", 487), n(_t, "_prime4", 503), n(_t, "_minpicturebytes", ct._prime4), n(_t, "_nCycles", 100), n(_t, "_initialBiasShift", 16), n(_t, "_initialBias", 1 << ct._initialBiasShift), n(_t, "_gammaShift", 10), n(_t, "_betaShift", 10), n(_t, "_beta", ct._initialBias >> ct._betaShift), n(_t, "_betaGamma", ct._initialBias << ct._gammaShift - ct._betaShift), n(_t, "_radiusBiasShift", 6), n(_t, "_radiusBias", 1 << ct._radiusBiasShift), n(_t, "_radiusDecrease", 30), n(_t, "_alphaBiasShift", 10), n(_t, "_initAlpha", 1 << ct._alphaBiasShift), n(_t, "_radBiasShift", 8), n(_t, "_radBias", 1 << ct._radBiasShift), n(_t, "_alphaRadBiasShift", ct._alphaBiasShift + ct._radBiasShift), n(_t, "_alphaRadBias", 1 << ct._alphaRadBiasShift);
  var dt = class {
    constructor(t2) {
      n(this, "r"), n(this, "g"), n(this, "b"), n(this, "a"), this.r = this.g = this.b = this.a = t2;
    }
    toPoint() {
      return it.createByRGBA(this.r >> 3, this.g >> 3, this.b >> 3, this.a >> 3);
    }
    subtract(t2, e2, i2, r2) {
      this.r -= t2, this.g -= e2, this.b -= i2, this.a -= r2;
    }
  }, ft = class extends et {
    constructor(t2, e2 = 256) {
      super(), n(this, "_pointArray"), n(this, "_networkSize"), n(this, "_network"), n(this, "_sampleFactor"), n(this, "_radPower"), n(this, "_freq"), n(this, "_bias"), n(this, "_distance"), this._distance = t2, this._pointArray = [], this._sampleFactor = 1, this._networkSize = e2, this._distance.setWhitePoint(2040, 2040, 2040, 2040);
    }
    sample(t2) {
      this._pointArray = this._pointArray.concat(t2.getPointArray());
    }
    *quantize() {
      this._init(), yield* this._learn(), yield { palette: this._buildPalette(), progress: 100 };
    }
    _init() {
      this._freq = [], this._bias = [], this._radPower = [], this._network = [];
      for (let t2 = 0; t2 < this._networkSize; t2++) this._network[t2] = new dt((t2 << 11) / this._networkSize), this._freq[t2] = ft._initialBias / this._networkSize, this._bias[t2] = 0;
    }
    *_learn() {
      let t2 = this._sampleFactor;
      const e2 = this._pointArray.length;
      e2 < ft._minpicturebytes && (t2 = 1);
      const i2 = 30 + (t2 - 1) / 3, r2 = e2 / t2;
      let s2, n2 = r2 / ft._nCycles | 0, a2 = ft._initAlpha, o2 = (this._networkSize >> 3) * ft._radiusBias, h2 = o2 >> ft._radiusBiasShift;
      h2 <= 1 && (h2 = 0);
      for (let t3 = 0; t3 < h2; t3++) this._radPower[t3] = a2 * ((h2 * h2 - t3 * t3) * ft._radBias / (h2 * h2));
      s2 = e2 < ft._minpicturebytes ? 1 : e2 % ft._prime1 !== 0 ? ft._prime1 : e2 % ft._prime2 !== 0 ? ft._prime2 : e2 % ft._prime3 !== 0 ? ft._prime3 : ft._prime4;
      const l2 = new ut(r2, 99);
      for (let t3 = 0, u2 = 0; t3 < r2; ) {
        l2.shouldNotify(t3) && (yield { progress: l2.progress });
        const r3 = this._pointArray[u2], m2 = r3.b << 3, c2 = r3.g << 3, _2 = r3.r << 3, d2 = r3.a << 3, f2 = this._contest(m2, c2, _2, d2);
        if (this._alterSingle(a2, f2, m2, c2, _2, d2), 0 !== h2 && this._alterNeighbour(h2, f2, m2, c2, _2, d2), u2 += s2, u2 >= e2 && (u2 -= e2), t3++, 0 === n2 && (n2 = 1), t3 % n2 === 0) {
          a2 -= a2 / i2, o2 -= o2 / ft._radiusDecrease, h2 = o2 >> ft._radiusBiasShift, h2 <= 1 && (h2 = 0);
          for (let t4 = 0; t4 < h2; t4++) this._radPower[t4] = a2 * ((h2 * h2 - t4 * t4) * ft._radBias / (h2 * h2));
        }
      }
    }
    _buildPalette() {
      const t2 = new nt();
      return this._network.forEach((e2) => {
        t2.add(e2.toPoint());
      }), t2.sort(), t2;
    }
    _alterNeighbour(t2, e2, i2, r2, s2, n2) {
      let a2 = e2 - t2;
      a2 < -1 && (a2 = -1);
      let o2 = e2 + t2;
      o2 > this._networkSize && (o2 = this._networkSize);
      let h2 = e2 + 1, l2 = e2 - 1, u2 = 1;
      for (; h2 < o2 || l2 > a2; ) {
        const t3 = this._radPower[u2++] / ft._alphaRadBias;
        if (h2 < o2) {
          const e3 = this._network[h2++];
          e3.subtract(t3 * (e3.r - s2), t3 * (e3.g - r2), t3 * (e3.b - i2), t3 * (e3.a - n2));
        }
        if (l2 > a2) {
          const e3 = this._network[l2--];
          e3.subtract(t3 * (e3.r - s2), t3 * (e3.g - r2), t3 * (e3.b - i2), t3 * (e3.a - n2));
        }
      }
    }
    _alterSingle(t2, e2, i2, r2, s2, n2) {
      t2 /= ft._initAlpha;
      const a2 = this._network[e2];
      a2.subtract(t2 * (a2.r - s2), t2 * (a2.g - r2), t2 * (a2.b - i2), t2 * (a2.a - n2));
    }
    _contest(t2, e2, i2, r2) {
      let s2 = ~(1 << 31), n2 = s2, a2 = -1, o2 = a2;
      for (let h2 = 0; h2 < this._networkSize; h2++) {
        const l2 = this._network[h2], u2 = 8160 * this._distance.calculateNormalized(l2, { r: i2, g: e2, b: t2, a: r2 });
        u2 < s2 && (s2 = u2, a2 = h2);
        const m2 = u2 - (this._bias[h2] >> ft._initialBiasShift - 3);
        m2 < n2 && (n2 = m2, o2 = h2);
        const c2 = this._freq[h2] >> ft._betaShift;
        this._freq[h2] -= c2, this._bias[h2] += c2 << ft._gammaShift;
      }
      return this._freq[a2] += ft._beta, this._bias[a2] -= ft._betaGamma, o2;
    }
  }, pt = ft;
  n(pt, "_prime1", 499), n(pt, "_prime2", 491), n(pt, "_prime3", 487), n(pt, "_prime4", 503), n(pt, "_minpicturebytes", ft._prime4), n(pt, "_nCycles", 100), n(pt, "_initialBiasShift", 16), n(pt, "_initialBias", 1 << ft._initialBiasShift), n(pt, "_gammaShift", 10), n(pt, "_betaShift", 10), n(pt, "_beta", ft._initialBias >> ft._betaShift), n(pt, "_betaGamma", ft._initialBias << ft._gammaShift - ft._betaShift), n(pt, "_radiusBiasShift", 6), n(pt, "_radiusBias", 1 << ft._radiusBiasShift), n(pt, "_radiusDecrease", 30), n(pt, "_alphaBiasShift", 10), n(pt, "_initAlpha", 1 << ft._alphaBiasShift), n(pt, "_radBiasShift", 8), n(pt, "_radBias", 1 << ft._radBiasShift), n(pt, "_alphaRadBiasShift", ft._alphaBiasShift + ft._radBiasShift), n(pt, "_alphaRadBias", 1 << ft._alphaRadBiasShift);
  var gt = class {
    constructor(t2, e2) {
      n(this, "_method"), n(this, "_hueStats"), n(this, "_histogram"), n(this, "_initColors"), n(this, "_minHueCols"), this._method = t2, this._minHueCols = e2 << 2, this._initColors = e2 << 2, this._hueStats = new ht(gt._hueGroups, this._minHueCols), this._histogram = /* @__PURE__ */ Object.create(null);
    }
    sample(t2) {
      switch (this._method) {
        case 1:
          this._colorStats1D(t2);
          break;
        case 2:
          this._colorStats2D(t2);
      }
    }
    getImportanceSortedColorsIDXI32() {
      const t2 = x(Object.keys(this._histogram), (t3, e3) => this._histogram[e3] - this._histogram[t3]);
      if (0 === t2.length) return [];
      let e2;
      switch (this._method) {
        case 1:
          const i2 = Math.min(t2.length, this._initColors), r2 = t2[i2 - 1], s2 = this._histogram[r2];
          e2 = t2.slice(0, i2);
          let n2 = i2;
          const a2 = t2.length;
          for (; n2 < a2 && this._histogram[t2[n2]] === s2; ) e2.push(t2[n2++]);
          this._hueStats.injectIntoArray(e2);
          break;
        case 2:
          e2 = t2;
          break;
        default:
          throw new Error("Incorrect method");
      }
      return e2.map((t3) => +t3);
    }
    _colorStats1D(t2) {
      const e2 = this._histogram, i2 = t2.getPointArray(), r2 = i2.length;
      for (let t3 = 0; t3 < r2; t3++) {
        const r3 = i2[t3].uint32;
        this._hueStats.check(r3), r3 in e2 ? e2[r3]++ : e2[r3] = 1;
      }
    }
    _colorStats2D(t2) {
      const e2 = t2.getWidth(), i2 = t2.getHeight(), r2 = t2.getPointArray(), s2 = gt._boxSize[0], n2 = gt._boxSize[1], a2 = s2 * n2, o2 = this._makeBoxes(e2, i2, s2, n2), h2 = this._histogram;
      o2.forEach((t3) => {
        let i3 = Math.round(t3.w * t3.h / a2) * gt._boxPixels;
        i3 < 2 && (i3 = 2);
        const s3 = {};
        this._iterateBox(t3, e2, (t4) => {
          const e3 = r2[t4].uint32;
          this._hueStats.check(e3), e3 in h2 ? h2[e3]++ : e3 in s3 ? ++s3[e3] >= i3 && (h2[e3] = s3[e3]) : s3[e3] = 1;
        });
      }), this._hueStats.injectIntoDictionary(h2);
    }
    _iterateBox(t2, e2, i2) {
      const r2 = t2, s2 = r2.y * e2 + r2.x, n2 = (r2.y + r2.h - 1) * e2 + (r2.x + r2.w - 1), a2 = e2 - r2.w + 1;
      let o2 = 0, h2 = s2;
      do {
        i2.call(this, h2), h2 += ++o2 % r2.w === 0 ? a2 : 1;
      } while (h2 <= n2);
    }
    _makeBoxes(t2, e2, i2, r2) {
      const s2 = t2 % i2, n2 = e2 % r2, a2 = t2 - s2, o2 = e2 - n2, h2 = [];
      for (let l2 = 0; l2 < e2; l2 += r2) for (let e3 = 0; e3 < t2; e3 += i2) h2.push({ x: e3, y: l2, w: e3 === a2 ? s2 : i2, h: l2 === o2 ? n2 : r2 });
      return h2;
    }
  }, bt = gt;
  n(bt, "_boxSize", [64, 64]), n(bt, "_boxPixels", 2), n(bt, "_hueGroups", 10);
  var Mt = class {
    constructor(t2, e2, i2) {
      n(this, "index"), n(this, "color"), n(this, "distance"), this.index = t2, this.color = e2, this.distance = i2;
    }
  }, wt = class extends et {
    constructor(t2, e2 = 256, i2 = 2) {
      super(), n(this, "_colors"), n(this, "_initialDistance"), n(this, "_distanceIncrement"), n(this, "_histogram"), n(this, "_distance"), this._distance = t2, this._colors = e2, this._histogram = new bt(i2, e2), this._initialDistance = 0.01, this._distanceIncrement = 5e-3;
    }
    sample(t2) {
      this._histogram.sample(t2);
    }
    *quantize() {
      const t2 = this._histogram.getImportanceSortedColorsIDXI32();
      if (0 === t2.length) throw new Error("No colors in image");
      yield* this._buildPalette(t2);
    }
    *_buildPalette(t2) {
      const e2 = new nt(), i2 = e2.getPointContainer().getPointArray(), r2 = new Array(t2.length);
      for (let e3 = 0; e3 < t2.length; e3++) i2.push(it.createByUint32(t2[e3])), r2[e3] = 1;
      const s2 = i2.length, n2 = [];
      let a2 = s2, o2 = this._initialDistance;
      const h2 = new ut(a2 - this._colors, 99);
      for (; a2 > this._colors; ) {
        n2.length = 0;
        for (let t3 = 0; t3 < s2; t3++) {
          if (h2.shouldNotify(s2 - a2) && (yield { progress: h2.progress }), 0 === r2[t3]) continue;
          const e3 = i2[t3];
          for (let h3 = t3 + 1; h3 < s2; h3++) {
            if (0 === r2[h3]) continue;
            const t4 = i2[h3], s3 = this._distance.calculateNormalized(e3, t4);
            s3 < o2 && (n2.push(new Mt(h3, t4, s3)), r2[h3] = 0, a2--);
          }
        }
        o2 += a2 > 3 * this._colors ? this._initialDistance : this._distanceIncrement;
      }
      if (a2 < this._colors) {
        x(n2, (t4, e3) => e3.distance - t4.distance);
        let t3 = 0;
        for (; a2 < this._colors && t3 < n2.length; ) {
          r2[n2[t3].index] = 1, a2++, t3++;
        }
      }
      let l2 = i2.length;
      for (let t3 = l2 - 1; t3 >= 0; t3--) 0 === r2[t3] && (t3 !== l2 - 1 && (i2[t3] = i2[l2 - 1]), --l2);
      i2.length = l2, e2.sort(), yield { palette: e2, progress: 100 };
    }
  };
  function xt(t2) {
    const e2 = [];
    for (let i2 = 0; i2 < t2; i2++) e2[i2] = 0;
    return e2;
  }
  function yt(t2, e2, i2, r2) {
    const s2 = new Array(t2);
    for (let n2 = 0; n2 < t2; n2++) {
      s2[n2] = new Array(e2);
      for (let t3 = 0; t3 < e2; t3++) {
        s2[n2][t3] = new Array(i2);
        for (let e3 = 0; e3 < i2; e3++) {
          s2[n2][t3][e3] = new Array(r2);
          for (let i3 = 0; i3 < r2; i3++) s2[n2][t3][e3][i3] = 0;
        }
      }
    }
    return s2;
  }
  function St(t2, e2, i2) {
    const r2 = new Array(t2);
    for (let s2 = 0; s2 < t2; s2++) {
      r2[s2] = new Array(e2);
      for (let t3 = 0; t3 < e2; t3++) {
        r2[s2][t3] = new Array(i2);
        for (let e3 = 0; e3 < i2; e3++) r2[s2][t3][e3] = 0;
      }
    }
    return r2;
  }
  function kt(t2, e2, i2, r2, s2) {
    for (let n2 = 0; n2 < e2; n2++) {
      t2[n2] = [];
      for (let e3 = 0; e3 < i2; e3++) {
        t2[n2][e3] = [];
        for (let i3 = 0; i3 < r2; i3++) t2[n2][e3][i3] = s2;
      }
    }
  }
  function Bt(t2, e2, i2) {
    for (let r2 = 0; r2 < e2; r2++) t2[r2] = i2;
  }
  var zt = class {
    constructor() {
      n(this, "redMinimum"), n(this, "redMaximum"), n(this, "greenMinimum"), n(this, "greenMaximum"), n(this, "blueMinimum"), n(this, "blueMaximum"), n(this, "volume"), n(this, "alphaMinimum"), n(this, "alphaMaximum");
    }
  }, At = class extends et {
    constructor(t2, e2 = 256, i2 = 5) {
      super(), n(this, "_reds"), n(this, "_greens"), n(this, "_blues"), n(this, "_alphas"), n(this, "_sums"), n(this, "_weights"), n(this, "_momentsRed"), n(this, "_momentsGreen"), n(this, "_momentsBlue"), n(this, "_momentsAlpha"), n(this, "_moments"), n(this, "_table"), n(this, "_pixels"), n(this, "_cubes"), n(this, "_colors"), n(this, "_significantBitsPerChannel"), n(this, "_maxSideIndex"), n(this, "_alphaMaxSideIndex"), n(this, "_sideSize"), n(this, "_alphaSideSize"), n(this, "_distance"), this._distance = t2, this._setQuality(i2), this._initialize(e2);
    }
    sample(t2) {
      const e2 = t2.getPointArray();
      for (let t3 = 0, i2 = e2.length; t3 < i2; t3++) this._addColor(e2[t3]);
      this._pixels = this._pixels.concat(e2);
    }
    *quantize() {
      yield* this._preparePalette();
      const t2 = new nt();
      for (let e2 = 0; e2 < this._colors; e2++) if (this._sums[e2] > 0) {
        const i2 = this._sums[e2], r2 = this._reds[e2] / i2, s2 = this._greens[e2] / i2, n2 = this._blues[e2] / i2, a2 = this._alphas[e2] / i2, o2 = it.createByRGBA(0 | r2, 0 | s2, 0 | n2, 0 | a2);
        t2.add(o2);
      }
      t2.sort(), yield { palette: t2, progress: 100 };
    }
    *_preparePalette() {
      yield* this._calculateMoments();
      let t2 = 0;
      const e2 = xt(this._colors);
      for (let i3 = 1; i3 < this._colors; ++i3) {
        this._cut(this._cubes[t2], this._cubes[i3]) ? (e2[t2] = this._cubes[t2].volume > 1 ? this._calculateVariance(this._cubes[t2]) : 0, e2[i3] = this._cubes[i3].volume > 1 ? this._calculateVariance(this._cubes[i3]) : 0) : (e2[t2] = 0, i3--), t2 = 0;
        let r3 = e2[0];
        for (let s3 = 1; s3 <= i3; ++s3) e2[s3] > r3 && (r3 = e2[s3], t2 = s3);
        if (r3 <= 0) {
          this._colors = i3 + 1;
          break;
        }
      }
      const i2 = [], r2 = [], s2 = [], n2 = [];
      for (let t3 = 0; t3 < this._colors; ++t3) {
        const e3 = At._volume(this._cubes[t3], this._weights);
        e3 > 0 ? (i2[t3] = At._volume(this._cubes[t3], this._momentsRed) / e3 | 0, r2[t3] = At._volume(this._cubes[t3], this._momentsGreen) / e3 | 0, s2[t3] = At._volume(this._cubes[t3], this._momentsBlue) / e3 | 0, n2[t3] = At._volume(this._cubes[t3], this._momentsAlpha) / e3 | 0) : (i2[t3] = 0, r2[t3] = 0, s2[t3] = 0, n2[t3] = 0);
      }
      this._reds = xt(this._colors + 1), this._greens = xt(this._colors + 1), this._blues = xt(this._colors + 1), this._alphas = xt(this._colors + 1), this._sums = xt(this._colors + 1);
      for (let t3 = 0, e3 = this._pixels.length; t3 < e3; t3++) {
        const e4 = this._pixels[t3];
        let a2 = -1, o2 = Number.MAX_VALUE;
        for (let t4 = 0; t4 < this._colors; t4++) {
          const h2 = i2[t4], l2 = r2[t4], u2 = s2[t4], m2 = n2[t4], c2 = this._distance.calculateRaw(h2, l2, u2, m2, e4.r, e4.g, e4.b, e4.a);
          c2 < o2 && (o2 = c2, a2 = t4);
        }
        this._reds[a2] += e4.r, this._greens[a2] += e4.g, this._blues[a2] += e4.b, this._alphas[a2] += e4.a, this._sums[a2]++;
      }
    }
    _addColor(t2) {
      const e2 = 8 - this._significantBitsPerChannel, i2 = 1 + (t2.r >> e2), r2 = 1 + (t2.g >> e2), s2 = 1 + (t2.b >> e2), n2 = 1 + (t2.a >> e2);
      this._weights[n2][i2][r2][s2]++, this._momentsRed[n2][i2][r2][s2] += t2.r, this._momentsGreen[n2][i2][r2][s2] += t2.g, this._momentsBlue[n2][i2][r2][s2] += t2.b, this._momentsAlpha[n2][i2][r2][s2] += t2.a, this._moments[n2][i2][r2][s2] += this._table[t2.r] + this._table[t2.g] + this._table[t2.b] + this._table[t2.a];
    }
    *_calculateMoments() {
      const t2 = [], e2 = [], i2 = [], r2 = [], s2 = [], n2 = [], a2 = St(this._sideSize, this._sideSize, this._sideSize), o2 = St(this._sideSize, this._sideSize, this._sideSize), h2 = St(this._sideSize, this._sideSize, this._sideSize), l2 = St(this._sideSize, this._sideSize, this._sideSize), u2 = St(this._sideSize, this._sideSize, this._sideSize), m2 = St(this._sideSize, this._sideSize, this._sideSize);
      let c2 = 0;
      const _2 = new ut(this._alphaMaxSideIndex * this._maxSideIndex, 99);
      for (let d2 = 1; d2 <= this._alphaMaxSideIndex; ++d2) {
        kt(a2, this._sideSize, this._sideSize, this._sideSize, 0), kt(o2, this._sideSize, this._sideSize, this._sideSize, 0), kt(h2, this._sideSize, this._sideSize, this._sideSize, 0), kt(l2, this._sideSize, this._sideSize, this._sideSize, 0), kt(u2, this._sideSize, this._sideSize, this._sideSize, 0), kt(m2, this._sideSize, this._sideSize, this._sideSize, 0);
        for (let f2 = 1; f2 <= this._maxSideIndex; ++f2, ++c2) {
          _2.shouldNotify(c2) && (yield { progress: _2.progress }), Bt(t2, this._sideSize, 0), Bt(e2, this._sideSize, 0), Bt(i2, this._sideSize, 0), Bt(r2, this._sideSize, 0), Bt(s2, this._sideSize, 0), Bt(n2, this._sideSize, 0);
          for (let c3 = 1; c3 <= this._maxSideIndex; ++c3) {
            let _3 = 0, p2 = 0, g2 = 0, b2 = 0, M2 = 0, w2 = 0;
            for (let x2 = 1; x2 <= this._maxSideIndex; ++x2) _3 += this._weights[d2][f2][c3][x2], p2 += this._momentsRed[d2][f2][c3][x2], g2 += this._momentsGreen[d2][f2][c3][x2], b2 += this._momentsBlue[d2][f2][c3][x2], M2 += this._momentsAlpha[d2][f2][c3][x2], w2 += this._moments[d2][f2][c3][x2], t2[x2] += _3, e2[x2] += p2, i2[x2] += g2, r2[x2] += b2, s2[x2] += M2, n2[x2] += w2, a2[f2][c3][x2] = a2[f2 - 1][c3][x2] + t2[x2], o2[f2][c3][x2] = o2[f2 - 1][c3][x2] + e2[x2], h2[f2][c3][x2] = h2[f2 - 1][c3][x2] + i2[x2], l2[f2][c3][x2] = l2[f2 - 1][c3][x2] + r2[x2], u2[f2][c3][x2] = u2[f2 - 1][c3][x2] + s2[x2], m2[f2][c3][x2] = m2[f2 - 1][c3][x2] + n2[x2], this._weights[d2][f2][c3][x2] = this._weights[d2 - 1][f2][c3][x2] + a2[f2][c3][x2], this._momentsRed[d2][f2][c3][x2] = this._momentsRed[d2 - 1][f2][c3][x2] + o2[f2][c3][x2], this._momentsGreen[d2][f2][c3][x2] = this._momentsGreen[d2 - 1][f2][c3][x2] + h2[f2][c3][x2], this._momentsBlue[d2][f2][c3][x2] = this._momentsBlue[d2 - 1][f2][c3][x2] + l2[f2][c3][x2], this._momentsAlpha[d2][f2][c3][x2] = this._momentsAlpha[d2 - 1][f2][c3][x2] + u2[f2][c3][x2], this._moments[d2][f2][c3][x2] = this._moments[d2 - 1][f2][c3][x2] + m2[f2][c3][x2];
          }
        }
      }
    }
    static _volumeFloat(t2, e2) {
      return e2[t2.alphaMaximum][t2.redMaximum][t2.greenMaximum][t2.blueMaximum] - e2[t2.alphaMaximum][t2.redMaximum][t2.greenMinimum][t2.blueMaximum] - e2[t2.alphaMaximum][t2.redMinimum][t2.greenMaximum][t2.blueMaximum] + e2[t2.alphaMaximum][t2.redMinimum][t2.greenMinimum][t2.blueMaximum] - e2[t2.alphaMinimum][t2.redMaximum][t2.greenMaximum][t2.blueMaximum] + e2[t2.alphaMinimum][t2.redMaximum][t2.greenMinimum][t2.blueMaximum] + e2[t2.alphaMinimum][t2.redMinimum][t2.greenMaximum][t2.blueMaximum] - e2[t2.alphaMinimum][t2.redMinimum][t2.greenMinimum][t2.blueMaximum] - (e2[t2.alphaMaximum][t2.redMaximum][t2.greenMaximum][t2.blueMinimum] - e2[t2.alphaMinimum][t2.redMaximum][t2.greenMaximum][t2.blueMinimum] - e2[t2.alphaMaximum][t2.redMaximum][t2.greenMinimum][t2.blueMinimum] + e2[t2.alphaMinimum][t2.redMaximum][t2.greenMinimum][t2.blueMinimum] - e2[t2.alphaMaximum][t2.redMinimum][t2.greenMaximum][t2.blueMinimum] + e2[t2.alphaMinimum][t2.redMinimum][t2.greenMaximum][t2.blueMinimum] + e2[t2.alphaMaximum][t2.redMinimum][t2.greenMinimum][t2.blueMinimum] - e2[t2.alphaMinimum][t2.redMinimum][t2.greenMinimum][t2.blueMinimum]);
    }
    static _volume(t2, e2) {
      return 0 | At._volumeFloat(t2, e2);
    }
    static _top(t2, e2, i2, r2) {
      let s2;
      switch (e2) {
        case At._alpha:
          s2 = r2[i2][t2.redMaximum][t2.greenMaximum][t2.blueMaximum] - r2[i2][t2.redMaximum][t2.greenMinimum][t2.blueMaximum] - r2[i2][t2.redMinimum][t2.greenMaximum][t2.blueMaximum] + r2[i2][t2.redMinimum][t2.greenMinimum][t2.blueMaximum] - (r2[i2][t2.redMaximum][t2.greenMaximum][t2.blueMinimum] - r2[i2][t2.redMaximum][t2.greenMinimum][t2.blueMinimum] - r2[i2][t2.redMinimum][t2.greenMaximum][t2.blueMinimum] + r2[i2][t2.redMinimum][t2.greenMinimum][t2.blueMinimum]);
          break;
        case At._red:
          s2 = r2[t2.alphaMaximum][i2][t2.greenMaximum][t2.blueMaximum] - r2[t2.alphaMaximum][i2][t2.greenMinimum][t2.blueMaximum] - r2[t2.alphaMinimum][i2][t2.greenMaximum][t2.blueMaximum] + r2[t2.alphaMinimum][i2][t2.greenMinimum][t2.blueMaximum] - (r2[t2.alphaMaximum][i2][t2.greenMaximum][t2.blueMinimum] - r2[t2.alphaMaximum][i2][t2.greenMinimum][t2.blueMinimum] - r2[t2.alphaMinimum][i2][t2.greenMaximum][t2.blueMinimum] + r2[t2.alphaMinimum][i2][t2.greenMinimum][t2.blueMinimum]);
          break;
        case At._green:
          s2 = r2[t2.alphaMaximum][t2.redMaximum][i2][t2.blueMaximum] - r2[t2.alphaMaximum][t2.redMinimum][i2][t2.blueMaximum] - r2[t2.alphaMinimum][t2.redMaximum][i2][t2.blueMaximum] + r2[t2.alphaMinimum][t2.redMinimum][i2][t2.blueMaximum] - (r2[t2.alphaMaximum][t2.redMaximum][i2][t2.blueMinimum] - r2[t2.alphaMaximum][t2.redMinimum][i2][t2.blueMinimum] - r2[t2.alphaMinimum][t2.redMaximum][i2][t2.blueMinimum] + r2[t2.alphaMinimum][t2.redMinimum][i2][t2.blueMinimum]);
          break;
        case At._blue:
          s2 = r2[t2.alphaMaximum][t2.redMaximum][t2.greenMaximum][i2] - r2[t2.alphaMaximum][t2.redMaximum][t2.greenMinimum][i2] - r2[t2.alphaMaximum][t2.redMinimum][t2.greenMaximum][i2] + r2[t2.alphaMaximum][t2.redMinimum][t2.greenMinimum][i2] - (r2[t2.alphaMinimum][t2.redMaximum][t2.greenMaximum][i2] - r2[t2.alphaMinimum][t2.redMaximum][t2.greenMinimum][i2] - r2[t2.alphaMinimum][t2.redMinimum][t2.greenMaximum][i2] + r2[t2.alphaMinimum][t2.redMinimum][t2.greenMinimum][i2]);
          break;
        default:
          throw new Error("impossible");
      }
      return 0 | s2;
    }
    static _bottom(t2, e2, i2) {
      switch (e2) {
        case At._alpha:
          return -i2[t2.alphaMinimum][t2.redMaximum][t2.greenMaximum][t2.blueMaximum] + i2[t2.alphaMinimum][t2.redMaximum][t2.greenMinimum][t2.blueMaximum] + i2[t2.alphaMinimum][t2.redMinimum][t2.greenMaximum][t2.blueMaximum] - i2[t2.alphaMinimum][t2.redMinimum][t2.greenMinimum][t2.blueMaximum] - (-i2[t2.alphaMinimum][t2.redMaximum][t2.greenMaximum][t2.blueMinimum] + i2[t2.alphaMinimum][t2.redMaximum][t2.greenMinimum][t2.blueMinimum] + i2[t2.alphaMinimum][t2.redMinimum][t2.greenMaximum][t2.blueMinimum] - i2[t2.alphaMinimum][t2.redMinimum][t2.greenMinimum][t2.blueMinimum]);
        case At._red:
          return -i2[t2.alphaMaximum][t2.redMinimum][t2.greenMaximum][t2.blueMaximum] + i2[t2.alphaMaximum][t2.redMinimum][t2.greenMinimum][t2.blueMaximum] + i2[t2.alphaMinimum][t2.redMinimum][t2.greenMaximum][t2.blueMaximum] - i2[t2.alphaMinimum][t2.redMinimum][t2.greenMinimum][t2.blueMaximum] - (-i2[t2.alphaMaximum][t2.redMinimum][t2.greenMaximum][t2.blueMinimum] + i2[t2.alphaMaximum][t2.redMinimum][t2.greenMinimum][t2.blueMinimum] + i2[t2.alphaMinimum][t2.redMinimum][t2.greenMaximum][t2.blueMinimum] - i2[t2.alphaMinimum][t2.redMinimum][t2.greenMinimum][t2.blueMinimum]);
        case At._green:
          return -i2[t2.alphaMaximum][t2.redMaximum][t2.greenMinimum][t2.blueMaximum] + i2[t2.alphaMaximum][t2.redMinimum][t2.greenMinimum][t2.blueMaximum] + i2[t2.alphaMinimum][t2.redMaximum][t2.greenMinimum][t2.blueMaximum] - i2[t2.alphaMinimum][t2.redMinimum][t2.greenMinimum][t2.blueMaximum] - (-i2[t2.alphaMaximum][t2.redMaximum][t2.greenMinimum][t2.blueMinimum] + i2[t2.alphaMaximum][t2.redMinimum][t2.greenMinimum][t2.blueMinimum] + i2[t2.alphaMinimum][t2.redMaximum][t2.greenMinimum][t2.blueMinimum] - i2[t2.alphaMinimum][t2.redMinimum][t2.greenMinimum][t2.blueMinimum]);
        case At._blue:
          return -i2[t2.alphaMaximum][t2.redMaximum][t2.greenMaximum][t2.blueMinimum] + i2[t2.alphaMaximum][t2.redMaximum][t2.greenMinimum][t2.blueMinimum] + i2[t2.alphaMaximum][t2.redMinimum][t2.greenMaximum][t2.blueMinimum] - i2[t2.alphaMaximum][t2.redMinimum][t2.greenMinimum][t2.blueMinimum] - (-i2[t2.alphaMinimum][t2.redMaximum][t2.greenMaximum][t2.blueMinimum] + i2[t2.alphaMinimum][t2.redMaximum][t2.greenMinimum][t2.blueMinimum] + i2[t2.alphaMinimum][t2.redMinimum][t2.greenMaximum][t2.blueMinimum] - i2[t2.alphaMinimum][t2.redMinimum][t2.greenMinimum][t2.blueMinimum]);
        default:
          return 0;
      }
    }
    _calculateVariance(t2) {
      const e2 = At._volume(t2, this._momentsRed), i2 = At._volume(t2, this._momentsGreen), r2 = At._volume(t2, this._momentsBlue), s2 = At._volume(t2, this._momentsAlpha);
      return At._volumeFloat(t2, this._moments) - (e2 * e2 + i2 * i2 + r2 * r2 + s2 * s2) / At._volume(t2, this._weights);
    }
    _maximize(t2, e2, i2, r2, s2, n2, a2, o2, h2) {
      const l2 = 0 | At._bottom(t2, e2, this._momentsRed), u2 = 0 | At._bottom(t2, e2, this._momentsGreen), m2 = 0 | At._bottom(t2, e2, this._momentsBlue), c2 = 0 | At._bottom(t2, e2, this._momentsAlpha), _2 = 0 | At._bottom(t2, e2, this._weights);
      let d2 = 0, f2 = -1;
      for (let p2 = i2; p2 < r2; ++p2) {
        let i3 = l2 + At._top(t2, e2, p2, this._momentsRed), r3 = u2 + At._top(t2, e2, p2, this._momentsGreen), g2 = m2 + At._top(t2, e2, p2, this._momentsBlue), b2 = c2 + At._top(t2, e2, p2, this._momentsAlpha), M2 = _2 + At._top(t2, e2, p2, this._weights);
        if (0 !== M2) {
          let t3 = i3 * i3 + r3 * r3 + g2 * g2 + b2 * b2, e3 = t3 / M2;
          i3 = s2 - i3, r3 = n2 - r3, g2 = a2 - g2, b2 = o2 - b2, M2 = h2 - M2, 0 !== M2 && (t3 = i3 * i3 + r3 * r3 + g2 * g2 + b2 * b2, e3 += t3 / M2, e3 > d2 && (d2 = e3, f2 = p2));
        }
      }
      return { max: d2, position: f2 };
    }
    _cut(t2, e2) {
      let i2;
      const r2 = At._volume(t2, this._momentsRed), s2 = At._volume(t2, this._momentsGreen), n2 = At._volume(t2, this._momentsBlue), a2 = At._volume(t2, this._momentsAlpha), o2 = At._volume(t2, this._weights), h2 = this._maximize(t2, At._red, t2.redMinimum + 1, t2.redMaximum, r2, s2, n2, a2, o2), l2 = this._maximize(t2, At._green, t2.greenMinimum + 1, t2.greenMaximum, r2, s2, n2, a2, o2), u2 = this._maximize(t2, At._blue, t2.blueMinimum + 1, t2.blueMaximum, r2, s2, n2, a2, o2), m2 = this._maximize(t2, At._alpha, t2.alphaMinimum + 1, t2.alphaMaximum, r2, s2, n2, a2, o2);
      if (m2.max >= h2.max && m2.max >= l2.max && m2.max >= u2.max) {
        if (i2 = At._alpha, m2.position < 0) return false;
      } else i2 = h2.max >= m2.max && h2.max >= l2.max && h2.max >= u2.max ? At._red : l2.max >= m2.max && l2.max >= h2.max && l2.max >= u2.max ? At._green : At._blue;
      switch (e2.redMaximum = t2.redMaximum, e2.greenMaximum = t2.greenMaximum, e2.blueMaximum = t2.blueMaximum, e2.alphaMaximum = t2.alphaMaximum, i2) {
        case At._red:
          e2.redMinimum = t2.redMaximum = h2.position, e2.greenMinimum = t2.greenMinimum, e2.blueMinimum = t2.blueMinimum, e2.alphaMinimum = t2.alphaMinimum;
          break;
        case At._green:
          e2.greenMinimum = t2.greenMaximum = l2.position, e2.redMinimum = t2.redMinimum, e2.blueMinimum = t2.blueMinimum, e2.alphaMinimum = t2.alphaMinimum;
          break;
        case At._blue:
          e2.blueMinimum = t2.blueMaximum = u2.position, e2.redMinimum = t2.redMinimum, e2.greenMinimum = t2.greenMinimum, e2.alphaMinimum = t2.alphaMinimum;
          break;
        case At._alpha:
          e2.alphaMinimum = t2.alphaMaximum = m2.position, e2.blueMinimum = t2.blueMinimum, e2.redMinimum = t2.redMinimum, e2.greenMinimum = t2.greenMinimum;
      }
      return t2.volume = (t2.redMaximum - t2.redMinimum) * (t2.greenMaximum - t2.greenMinimum) * (t2.blueMaximum - t2.blueMinimum) * (t2.alphaMaximum - t2.alphaMinimum), e2.volume = (e2.redMaximum - e2.redMinimum) * (e2.greenMaximum - e2.greenMinimum) * (e2.blueMaximum - e2.blueMinimum) * (e2.alphaMaximum - e2.alphaMinimum), true;
    }
    _initialize(t2) {
      this._colors = t2, this._cubes = [];
      for (let e2 = 0; e2 < t2; e2++) this._cubes[e2] = new zt();
      this._cubes[0].redMinimum = 0, this._cubes[0].greenMinimum = 0, this._cubes[0].blueMinimum = 0, this._cubes[0].alphaMinimum = 0, this._cubes[0].redMaximum = this._maxSideIndex, this._cubes[0].greenMaximum = this._maxSideIndex, this._cubes[0].blueMaximum = this._maxSideIndex, this._cubes[0].alphaMaximum = this._alphaMaxSideIndex, this._weights = yt(this._alphaSideSize, this._sideSize, this._sideSize, this._sideSize), this._momentsRed = yt(this._alphaSideSize, this._sideSize, this._sideSize, this._sideSize), this._momentsGreen = yt(this._alphaSideSize, this._sideSize, this._sideSize, this._sideSize), this._momentsBlue = yt(this._alphaSideSize, this._sideSize, this._sideSize, this._sideSize), this._momentsAlpha = yt(this._alphaSideSize, this._sideSize, this._sideSize, this._sideSize), this._moments = yt(this._alphaSideSize, this._sideSize, this._sideSize, this._sideSize), this._table = [];
      for (let t3 = 0; t3 < 256; ++t3) this._table[t3] = t3 * t3;
      this._pixels = [];
    }
    _setQuality(t2 = 5) {
      this._significantBitsPerChannel = t2, this._maxSideIndex = 1 << this._significantBitsPerChannel, this._alphaMaxSideIndex = this._maxSideIndex, this._sideSize = this._maxSideIndex + 1, this._alphaSideSize = this._alphaMaxSideIndex + 1;
    }
  }, vt = At;
  n(vt, "_alpha", 3), n(vt, "_red", 2), n(vt, "_green", 1), n(vt, "_blue", 0);
  var Et = {};
  s(Et, { AbstractImageQuantizer: () => It, ErrorDiffusionArray: () => Rt, ErrorDiffusionArrayKernel: () => Pt, ErrorDiffusionRiemersma: () => Ft, NearestColor: () => Gt });
  var It = class {
    quantizeSync(t2, e2) {
      for (const i2 of this.quantize(t2, e2)) if (i2.pointContainer) return i2.pointContainer;
      throw new Error("unreachable");
    }
  }, Gt = class extends It {
    constructor(t2) {
      super(), n(this, "_distance"), this._distance = t2;
    }
    *quantize(t2, e2) {
      const i2 = t2.getPointArray(), r2 = t2.getWidth(), s2 = t2.getHeight(), n2 = new ut(s2, 99);
      for (let t3 = 0; t3 < s2; t3++) {
        n2.shouldNotify(t3) && (yield { progress: n2.progress });
        for (let s3 = 0, n3 = t3 * r2; s3 < r2; s3++, n3++) {
          const t4 = i2[n3];
          t4.from(e2.getNearestColor(this._distance, t4));
        }
      }
      yield { pointContainer: t2, progress: 100 };
    }
  }, Pt = ((t2) => (t2[t2.FloydSteinberg = 0] = "FloydSteinberg", t2[t2.FalseFloydSteinberg = 1] = "FalseFloydSteinberg", t2[t2.Stucki = 2] = "Stucki", t2[t2.Atkinson = 3] = "Atkinson", t2[t2.Jarvis = 4] = "Jarvis", t2[t2.Burkes = 5] = "Burkes", t2[t2.Sierra = 6] = "Sierra", t2[t2.TwoSierra = 7] = "TwoSierra", t2[t2.SierraLite = 8] = "SierraLite", t2))(Pt || {}), Rt = class extends It {
    constructor(t2, e2, i2 = true, r2 = 0, s2 = false) {
      super(), n(this, "_minColorDistance"), n(this, "_serpentine"), n(this, "_kernel"), n(this, "_calculateErrorLikeGIMP"), n(this, "_distance"), this._setKernel(e2), this._distance = t2, this._minColorDistance = r2, this._serpentine = i2, this._calculateErrorLikeGIMP = s2;
    }
    *quantize(t2, e2) {
      const i2 = t2.getPointArray(), r2 = new it(), s2 = t2.getWidth(), n2 = t2.getHeight(), a2 = [];
      let o2 = 1, h2 = 1;
      for (const t3 of this._kernel) {
        const e3 = t3[2] + 1;
        h2 < e3 && (h2 = e3);
      }
      for (let t3 = 0; t3 < h2; t3++) this._fillErrorLine(a2[t3] = [], s2);
      const l2 = new ut(n2, 99);
      for (let t3 = 0; t3 < n2; t3++) {
        l2.shouldNotify(t3) && (yield { progress: l2.progress }), this._serpentine && (o2 *= -1);
        const h3 = t3 * s2, u2 = 1 === o2 ? 0 : s2 - 1, m2 = 1 === o2 ? s2 : -1;
        this._fillErrorLine(a2[0], s2), a2.push(a2.shift());
        const c2 = a2[0];
        for (let l3 = u2, _2 = h3 + u2; l3 !== m2; l3 += o2, _2 += o2) {
          const h4 = i2[_2], u3 = c2[l3];
          r2.from(h4);
          const m3 = it.createByRGBA(M(h4.r + u3[0]), M(h4.g + u3[1]), M(h4.b + u3[2]), M(h4.a + u3[3])), d2 = e2.getNearestColor(this._distance, m3);
          if (h4.from(d2), this._minColorDistance) {
            if (this._distance.calculateNormalized(r2, d2) < this._minColorDistance) continue;
          }
          let f2, p2, g2, b2;
          this._calculateErrorLikeGIMP ? (f2 = m3.r - d2.r, p2 = m3.g - d2.g, g2 = m3.b - d2.b, b2 = m3.a - d2.a) : (f2 = r2.r - d2.r, p2 = r2.g - d2.g, g2 = r2.b - d2.b, b2 = r2.a - d2.a);
          const w2 = 1 === o2 ? 0 : this._kernel.length - 1, x2 = 1 === o2 ? this._kernel.length : -1;
          for (let e3 = w2; e3 !== x2; e3 += o2) {
            const i3 = this._kernel[e3][1] * o2, r3 = this._kernel[e3][2];
            if (i3 + l3 >= 0 && i3 + l3 < s2 && r3 + t3 >= 0 && r3 + t3 < n2) {
              const t4 = this._kernel[e3][0], s3 = a2[r3][i3 + l3];
              s3[0] += f2 * t4, s3[1] += p2 * t4, s3[2] += g2 * t4, s3[3] += b2 * t4;
            }
          }
        }
      }
      yield { pointContainer: t2, progress: 100 };
    }
    _fillErrorLine(t2, e2) {
      t2.length > e2 && (t2.length = e2);
      const i2 = t2.length;
      for (let e3 = 0; e3 < i2; e3++) {
        const i3 = t2[e3];
        i3[0] = i3[1] = i3[2] = i3[3] = 0;
      }
      for (let r2 = i2; r2 < e2; r2++) t2[r2] = [0, 0, 0, 0];
    }
    _setKernel(t2) {
      switch (t2) {
        case 0:
          this._kernel = [[7 / 16, 1, 0], [3 / 16, -1, 1], [5 / 16, 0, 1], [1 / 16, 1, 1]];
          break;
        case 1:
          this._kernel = [[3 / 8, 1, 0], [3 / 8, 0, 1], [2 / 8, 1, 1]];
          break;
        case 2:
          this._kernel = [[8 / 42, 1, 0], [4 / 42, 2, 0], [2 / 42, -2, 1], [4 / 42, -1, 1], [8 / 42, 0, 1], [4 / 42, 1, 1], [2 / 42, 2, 1], [1 / 42, -2, 2], [2 / 42, -1, 2], [4 / 42, 0, 2], [2 / 42, 1, 2], [1 / 42, 2, 2]];
          break;
        case 3:
          this._kernel = [[1 / 8, 1, 0], [1 / 8, 2, 0], [1 / 8, -1, 1], [1 / 8, 0, 1], [1 / 8, 1, 1], [1 / 8, 0, 2]];
          break;
        case 4:
          this._kernel = [[7 / 48, 1, 0], [5 / 48, 2, 0], [3 / 48, -2, 1], [5 / 48, -1, 1], [7 / 48, 0, 1], [5 / 48, 1, 1], [3 / 48, 2, 1], [1 / 48, -2, 2], [3 / 48, -1, 2], [5 / 48, 0, 2], [3 / 48, 1, 2], [1 / 48, 2, 2]];
          break;
        case 5:
          this._kernel = [[0.25, 1, 0], [4 / 32, 2, 0], [2 / 32, -2, 1], [4 / 32, -1, 1], [0.25, 0, 1], [4 / 32, 1, 1], [2 / 32, 2, 1]];
          break;
        case 6:
          this._kernel = [[5 / 32, 1, 0], [3 / 32, 2, 0], [2 / 32, -2, 1], [4 / 32, -1, 1], [5 / 32, 0, 1], [4 / 32, 1, 1], [2 / 32, 2, 1], [2 / 32, -1, 2], [3 / 32, 0, 2], [2 / 32, 1, 2]];
          break;
        case 7:
          this._kernel = [[0.25, 1, 0], [3 / 16, 2, 0], [1 / 16, -2, 1], [2 / 16, -1, 1], [3 / 16, 0, 1], [2 / 16, 1, 1], [1 / 16, 2, 1]];
          break;
        case 8:
          this._kernel = [[0.5, 1, 0], [1 / 4, -1, 1], [1 / 4, 0, 1]];
          break;
        default:
          throw new Error(`ErrorDiffusionArray: unknown kernel = ${t2}`);
      }
    }
  };
  function* Ct(t2, e2, i2) {
    const r2 = Math.max(t2, e2), s2 = { width: t2, height: e2, level: Math.floor(Math.log(r2) / Math.log(2) + 1), callback: i2, tracker: new ut(t2 * e2, 99), index: 0, x: 0, y: 0 };
    yield* Dt(s2, 1), qt(s2, 0);
  }
  function* Dt(t2, e2) {
    if (!(t2.level < 1)) {
      switch (t2.tracker.shouldNotify(t2.index) && (yield { progress: t2.tracker.progress }), t2.level--, e2) {
        case 2:
          yield* Dt(t2, 1), qt(t2, 3), yield* Dt(t2, 2), qt(t2, 4), yield* Dt(t2, 2), qt(t2, 2), yield* Dt(t2, 4);
          break;
        case 3:
          yield* Dt(t2, 4), qt(t2, 2), yield* Dt(t2, 3), qt(t2, 1), yield* Dt(t2, 3), qt(t2, 3), yield* Dt(t2, 1);
          break;
        case 1:
          yield* Dt(t2, 2), qt(t2, 4), yield* Dt(t2, 1), qt(t2, 3), yield* Dt(t2, 1), qt(t2, 1), yield* Dt(t2, 3);
          break;
        case 4:
          yield* Dt(t2, 3), qt(t2, 1), yield* Dt(t2, 4), qt(t2, 2), yield* Dt(t2, 4), qt(t2, 4), yield* Dt(t2, 2);
      }
      t2.level++;
    }
  }
  function qt(t2, e2) {
    switch (t2.x >= 0 && t2.x < t2.width && t2.y >= 0 && t2.y < t2.height && (t2.callback(t2.x, t2.y), t2.index++), e2) {
      case 2:
        t2.x--;
        break;
      case 3:
        t2.x++;
        break;
      case 1:
        t2.y--;
        break;
      case 4:
        t2.y++;
    }
  }
  var Ft = class extends It {
    constructor(t2, e2 = 16, i2 = 1) {
      super(), n(this, "_distance"), n(this, "_weights"), n(this, "_errorQueueSize"), this._distance = t2, this._errorQueueSize = e2, this._weights = Ft._createWeights(i2, e2);
    }
    *quantize(t2, e2) {
      const i2 = t2.getPointArray(), r2 = t2.getWidth(), s2 = t2.getHeight(), n2 = [];
      let a2 = 0;
      for (let t3 = 0; t3 < this._errorQueueSize; t3++) n2[t3] = { r: 0, g: 0, b: 0, a: 0 };
      yield* Ct(r2, s2, (t3, s3) => {
        const o2 = i2[t3 + s3 * r2];
        let { r: h2, g: l2, b: u2, a: m2 } = o2;
        for (let t4 = 0; t4 < this._errorQueueSize; t4++) {
          const e3 = this._weights[t4], i3 = n2[(t4 + a2) % this._errorQueueSize];
          h2 += i3.r * e3, l2 += i3.g * e3, u2 += i3.b * e3, m2 += i3.a * e3;
        }
        const c2 = it.createByRGBA(M(h2), M(l2), M(u2), M(m2)), _2 = e2.getNearestColor(this._distance, c2);
        a2 = (a2 + 1) % this._errorQueueSize;
        const d2 = (a2 + this._errorQueueSize - 1) % this._errorQueueSize;
        n2[d2].r = o2.r - _2.r, n2[d2].g = o2.g - _2.g, n2[d2].b = o2.b - _2.b, n2[d2].a = o2.a - _2.a, o2.from(_2);
      }), yield { pointContainer: t2, progress: 100 };
    }
    static _createWeights(t2, e2) {
      const i2 = [], r2 = Math.exp(Math.log(e2) / (e2 - 1));
      for (let s2 = 0, n2 = 1; s2 < e2; s2++) i2[s2] = (n2 + 0.5 | 0) / e2 * t2, n2 *= r2;
      return i2;
    }
  }, Tt = {};
  s(Tt, { ssim: () => Lt });
  var Ut = 0.01, Nt = 0.03;
  function Lt(t2, e2) {
    if (t2.getHeight() !== e2.getHeight() || t2.getWidth() !== e2.getWidth()) throw new Error("Images have different sizes!");
    const i2 = (255 * Ut) ** 2, r2 = (255 * Nt) ** 2;
    let s2 = 0, n2 = 0;
    return (function(t3, e3, i3) {
      const r3 = 8, s3 = t3.getWidth(), n3 = t3.getHeight();
      for (let a2 = 0; a2 < n3; a2 += r3) for (let o2 = 0; o2 < s3; o2 += r3) {
        const h2 = Math.min(r3, s3 - o2), l2 = Math.min(r3, n3 - a2), u2 = Ot(t3, o2, a2, h2, l2), m2 = Ot(e3, o2, a2, h2, l2);
        i3(u2, m2, Wt(u2), Wt(m2));
      }
    })(t2, e2, (t3, e3, a2, o2) => {
      let h2 = 0, l2 = 0, u2 = 0;
      for (let i3 = 0; i3 < t3.length; i3++) l2 += (t3[i3] - a2) ** 2, u2 += (e3[i3] - o2) ** 2, h2 += (t3[i3] - a2) * (e3[i3] - o2);
      const m2 = t3.length - 1;
      l2 /= m2, u2 /= m2, h2 /= m2;
      n2 += (2 * a2 * o2 + i2) * (2 * h2 + r2) / ((a2 ** 2 + o2 ** 2 + i2) * (l2 + u2 + r2)), s2++;
    }), n2 / s2;
  }
  function Ot(t2, e2, i2, r2, s2) {
    const n2 = t2.getPointArray(), a2 = [];
    let o2 = 0;
    for (let h2 = i2; h2 < i2 + s2; h2++) {
      const i3 = h2 * t2.getWidth();
      for (let t3 = e2; t3 < e2 + r2; t3++) {
        const e3 = n2[i3 + t3];
        a2[o2] = 0.2126 * e3.r + 0.7152 * e3.g + 0.0722 * e3.b, o2++;
      }
    }
    return a2;
  }
  function Wt(t2) {
    let e2 = 0;
    for (const i2 of t2) e2 += i2;
    return e2 / t2.length;
  }
  var Ht = "function" == typeof setImmediate ? setImmediate : "undefined" != typeof process && "function" == typeof (null == process ? void 0 : process.nextTick) ? (t2) => process.nextTick(t2) : (t2) => setTimeout(t2, 0);
  function Qt(t2, { colorDistanceFormula: e2, paletteQuantization: i2, colors: r2 } = {}) {
    const s2 = Xt(Jt(e2), i2, r2);
    return t2.forEach((t3) => s2.sample(t3)), s2.quantizeSync();
  }
  async function jt(t2, { colorDistanceFormula: e2, paletteQuantization: i2, colors: r2, onProgress: s2 } = {}) {
    return new Promise((n2, a2) => {
      const o2 = Xt(Jt(e2), i2, r2);
      let h2;
      t2.forEach((t3) => o2.sample(t3));
      const l2 = o2.quantize(), u2 = () => {
        try {
          const t3 = l2.next();
          t3.done ? n2(h2) : (t3.value.palette && (h2 = t3.value.palette), s2 && s2(t3.value.progress), Ht(u2));
        } catch (t3) {
          a2(t3);
        }
      };
      Ht(u2);
    });
  }
  function Kt(t2, e2, { colorDistanceFormula: i2, imageQuantization: r2 } = {}) {
    return Vt(Jt(i2), r2).quantizeSync(t2, e2);
  }
  async function $t(t2, e2, { colorDistanceFormula: i2, imageQuantization: r2, onProgress: s2 } = {}) {
    return new Promise((n2, a2) => {
      let o2;
      const h2 = Vt(Jt(i2), r2).quantize(t2, e2), l2 = () => {
        try {
          const t3 = h2.next();
          t3.done ? n2(o2) : (t3.value.pointContainer && (o2 = t3.value.pointContainer), s2 && s2(t3.value.progress), Ht(l2));
        } catch (t3) {
          a2(t3);
        }
      };
      Ht(l2);
    });
  }
  function Jt(t2 = "euclidean-bt709") {
    switch (t2) {
      case "cie94-graphic-arts":
        return new L();
      case "cie94-textiles":
        return new N();
      case "ciede2000":
        return new W();
      case "color-metric":
        return new H();
      case "euclidean":
        return new j();
      case "euclidean-bt709":
        return new K();
      case "euclidean-bt709-noalpha":
        return new $();
      case "manhattan":
        return new V();
      case "manhattan-bt709":
        return new Y();
      case "manhattan-nommyde":
        return new X();
      case "pngquant":
        return new Z();
      default:
        throw new Error(`Unknown colorDistanceFormula ${t2}`);
    }
  }
  function Vt(t2, e2 = "floyd-steinberg") {
    switch (e2) {
      case "nearest":
        return new Gt(t2);
      case "riemersma":
        return new Ft(t2);
      case "floyd-steinberg":
        return new Rt(t2, 0);
      case "false-floyd-steinberg":
        return new Rt(t2, 1);
      case "stucki":
        return new Rt(t2, 2);
      case "atkinson":
        return new Rt(t2, 3);
      case "jarvis":
        return new Rt(t2, 4);
      case "burkes":
        return new Rt(t2, 5);
      case "sierra":
        return new Rt(t2, 6);
      case "two-sierra":
        return new Rt(t2, 7);
      case "sierra-lite":
        return new Rt(t2, 8);
      default:
        throw new Error(`Unknown imageQuantization ${e2}`);
    }
  }
  function Xt(t2, e2 = "wuquant", i2 = 256) {
    switch (e2) {
      case "neuquant":
        return new _t(t2, i2);
      case "rgbquant":
        return new wt(t2, i2);
      case "wuquant":
        return new vt(t2, i2);
      case "neuquant-float":
        return new pt(t2, i2);
      default:
        throw new Error(`Unknown paletteQuantization ${e2}`);
    }
  }
}, 6274: (t, e, i) => {
  const r = i(6950), { Gif: s, GifError: n } = i(2104), { GifCodec: a } = i(3424), { GifFrame: o } = i(727), h = i(7884);
  t.exports = { BitmapImage: r, Gif: s, GifCodec: a, GifFrame: o, GifUtil: h, GifError: n };
}, 6950: (t) => {
  class e {
    constructor(...t2) {
      if (0 === t2.length) throw new Error("constructor requires parameters");
      const i = t2[0];
      if (null !== i && "object" == typeof i) if (i instanceof e) {
        const t3 = i.bitmap;
        this.bitmap = { width: t3.width, height: t3.height, data: new Buffer(t3.width * t3.height * 4) }, t3.data.copy(this.bitmap.data);
      } else {
        if (!(i.width && i.height && i.data)) throw new Error("unrecognized constructor parameters");
        this.bitmap = i;
      }
      else {
        if ("number" != typeof i || "number" != typeof t2[1]) throw new Error("unrecognized constructor parameters");
        {
          const e2 = i, r = t2[1], s = t2[2];
          this.bitmap = { width: e2, height: r }, Buffer.isBuffer(s) ? this.bitmap.data = s : (this.bitmap.data = new Buffer(e2 * r * 4), "number" == typeof s && this.fillRGBA(s));
        }
      }
    }
    blit(t2, e2, i, r, s, n, a) {
      if (r + n > this.bitmap.width) throw new Error("copy exceeds width of source bitmap");
      if (e2 + n > t2.bitmap.width) throw new Error("copy exceeds width of target bitmap");
      if (s + a > this.bitmap.height) throw new Error("copy exceeds height of source bitmap");
      if (i + a > t2.bitmap.height) throw new Erro("copy exceeds height of target bitmap");
      const o = this.bitmap.data, h = t2.bitmap.data, l = 4 * this.bitmap.width, u = 4 * t2.bitmap.width, m = 4 * n;
      let c = s * l + 4 * r, _ = i * u + 4 * e2;
      for (; --a >= 0; ) o.copy(h, _, c, c + m), c += l, _ += u;
      return this;
    }
    fillRGBA(t2) {
      const e2 = this.bitmap.data, i = 4 * this.bitmap.height;
      let r = 0;
      for (; r < i; ) e2.writeUInt32BE(t2, r), r += 4;
      for (; r < e2.length; ) e2.copy(e2, r, 0, i), r += i;
      return this;
    }
    getRGBA(t2, e2) {
      const i = 4 * (e2 * this.bitmap.width + t2);
      return this.bitmap.data.readUInt32BE(i);
    }
    getRGBASet() {
      const t2 = /* @__PURE__ */ new Set(), e2 = this.bitmap.data;
      for (let i = 0; i < e2.length; i += 4) t2.add(e2.readUInt32BE(i, true));
      return t2;
    }
    greyscale() {
      const t2 = this.bitmap.data;
      return this.scan(0, 0, this.bitmap.width, this.bitmap.height, (e2, i, r) => {
        const s = Math.round(0.299 * t2[r] + 0.587 * t2[r + 1] + 0.114 * t2[r + 2]);
        t2[r] = s, t2[r + 1] = s, t2[r + 2] = s;
      }), this;
    }
    reframe(t2, i, r, s, n) {
      const a = t2 < 0 ? 0 : t2, o = i < 0 ? 0 : i, h = r + a > this.bitmap.width ? this.bitmap.width - a : r, l = s + o > this.bitmap.height ? this.bitmap.height - o : s, u = t2 < 0 ? -t2 : 0, m = i < 0 ? -i : 0;
      let c;
      if (void 0 === n) {
        if (a !== t2 || o != i || h !== r || l !== s) throw new GifError("fillRGBA required for this reframing");
        c = new e(r, s);
      } else c = new e(r, s, n);
      return this.blit(c, u, m, a, o, h, l), this.bitmap = c.bitmap, this;
    }
    scale(t2) {
      if (1 === t2) return;
      if (!Number.isInteger(t2) || t2 < 1) throw new Error("the scale must be an integer >= 1");
      const e2 = this.bitmap.width, i = this.bitmap.height, r = e2 * t2 * 4, s = this.bitmap.data, n = new Buffer(i * r * t2);
      let a, o = 0, h = 0;
      for (let l = 0; l < i; ++l) {
        a = h;
        for (let i2 = 0; i2 < e2; ++i2) {
          const e3 = s.readUInt32BE(o, true);
          for (let i3 = 0; i3 < t2; ++i3) n.writeUInt32BE(e3, h), h += 4;
          o += 4;
        }
        for (let e3 = 1; e3 < t2; ++e3) n.copy(n, h, a, h), h += r, a += r;
      }
      return this.bitmap = { width: e2 * t2, height: i * t2, data: n }, this;
    }
    scanAllCoords(t2) {
      const e2 = this.bitmap.width, i = this.bitmap.data.length;
      let r = 0, s = 0;
      for (let n = 0; n < i; n += 4) t2(r, s, n), ++r === e2 && (r = 0, ++s);
    }
    scanAllIndexes(t2) {
      const e2 = this.bitmap.data.length;
      for (let i = 0; i < e2; i += 4) t2(i);
    }
  }
  t.exports = e;
}, 7884: (t, e, i) => {
  const r = i(9896), s = i(6267), n = i(6950), { GifFrame: a } = i(727), { GifError: o } = i(2104), { GifCodec: h } = i(3424), l = [".jpg", ".jpeg", ".png", ".bmp"], u = new h();
  function m(t2, e2, i2, r2, n2) {
    const a2 = Array.isArray(t2) ? t2 : [t2];
    if (n2) {
      if (["FloydSteinberg", "FalseFloydSteinberg", "Stucki", "Atkinson", "Jarvis", "Burkes", "Sierra", "TwoSierra", "SierraLite"].indexOf(n2.ditherAlgorithm) < 0) throw new Error(`Invalid ditherAlgorithm '${n2.ditherAlgorithm}'`);
      void 0 === n2.serpentine && (n2.serpentine = true), void 0 === n2.minimumColorDistanceToDither && (n2.minimumColorDistanceToDither = 0), void 0 === n2.calculateErrorLikeGIMP && (n2.calculateErrorLikeGIMP = false);
    }
    const o2 = new s.distance.Euclidean(), h2 = new s.palette[e2](o2, i2, r2);
    let l2;
    l2 = n2 ? new s.image.ErrorDiffusionArray(o2, s.image.ErrorDiffusionArrayKernel[n2.ditherAlgorithm], n2.serpentine, n2.minimumColorDistanceToDither, n2.calculateErrorLikeGIMP) : new s.image.NearestColor(o2);
    const u2 = [];
    a2.forEach((t3) => {
      const e3 = t3.bitmap.data, i3 = new ArrayBuffer(e3.length), r3 = new Uint32Array(i3);
      for (let t4 = 0, i4 = 0; t4 < e3.length; t4 += 4, ++i4) r3[i4] = e3.readUInt32LE(t4, true);
      const n3 = s.utils.PointContainer.fromUint32Array(r3, t3.bitmap.width, t3.bitmap.height);
      h2.sample(n3), u2.push(n3);
    });
    const m2 = h2.quantizeSync();
    for (let t3 = 0; t3 < a2.length; ++t3) {
      const e3 = a2[t3].bitmap.data, i3 = l2.quantizeSync(u2[t3], m2).toUint32Array();
      for (let t4 = 0, r3 = 0; t4 < e3.length; t4 += 4, ++r3) e3.writeUInt32LE(i3[r3], t4);
    }
  }
  e.cloneFrames = function(t2) {
    let e2 = [];
    return t2.forEach((t3) => {
      e2.push(new a(t3));
    }), e2;
  }, e.getColorInfo = function(t2, e2) {
    let i2 = false;
    const r2 = [];
    for (let e3 = 0; e3 < t2.length; ++e3) {
      let s3 = t2[e3].getPalette();
      if (s3.usesTransparency && (i2 = true), s3.indexCount > 256) throw new o(`Frame ${e3} uses more than 256 color indexes`);
      r2.push(s3);
    }
    if (0 === e2) return { usesTransparency: i2, palettes: r2 };
    const s2 = /* @__PURE__ */ new Set();
    r2.forEach((t3) => {
      t3.colors.forEach((t4) => {
        s2.add(t4);
      });
    });
    let n2 = s2.size;
    if (i2 && ++n2, e2 && n2 > e2) return { usesTransparency: i2, palettes: r2 };
    const a2 = new Array(s2.size), h2 = s2.values();
    for (let t3 = 0; t3 < a2.length; ++t3) a2[t3] = h2.next().value;
    return a2.sort((t3, e3) => t3 - e3), { colors: a2, indexCount: n2, usesTransparency: i2, palettes: r2 };
  }, e.copyAsJimp = function(t2, i2) {
    return e.shareAsJimp(t2, new n(i2));
  }, e.getMaxDimensions = function(t2) {
    let e2 = 0, i2 = 0;
    return t2.forEach((t3) => {
      const r2 = t3.xOffset + t3.bitmap.width;
      r2 > e2 && (e2 = r2);
      const s2 = t3.yOffset + t3.bitmap.height;
      s2 > i2 && (i2 = s2);
    }), { maxWidth: e2, maxHeight: i2 };
  }, e.quantizeDekker = function(t2, e2, i2) {
    m(t2, "NeuQuantFloat", e2 = e2 || 256, 0, i2);
  }, e.quantizeSorokin = function(t2, e2, i2, r2) {
    let s2;
    switch (e2 = e2 || 256, i2 = i2 || "min-pop") {
      case "min-pop":
        s2 = 2;
        break;
      case "top-pop":
        s2 = 1;
        break;
      default:
        throw new Error(`Invalid quantizeSorokin histogram '${i2}'`);
    }
    m(t2, "RGBQuant", e2, s2, r2);
  }, e.quantizeWu = function(t2, e2, i2, r2) {
    if (e2 = e2 || 256, (i2 = i2 || 5) < 1 || i2 > 8) throw new Error("Invalid quantization quality");
    m(t2, "WuQuant", e2, i2, r2);
  }, e.read = function(t2, e2) {
    return e2 = e2 || u, Buffer.isBuffer(t2) ? e2.decodeGif(t2) : (i2 = t2, new Promise((t3, e3) => {
      r.readFile(i2, (i3, r2) => i3 ? e3(i3) : t3(r2));
    })).then((t3) => e2.decodeGif(t3));
    var i2;
  }, e.shareAsJimp = function(t2, e2) {
    const i2 = new t2(e2.bitmap.width, e2.bitmap.height, 0);
    return i2.bitmap.data = e2.bitmap.data, i2;
  }, e.write = function(t2, e2, i2, s2) {
    s2 = s2 || u;
    const n2 = t2.match(/\.[a-zA-Z]+$/);
    if (null !== n2 && l.includes(n2[0].toLowerCase())) throw new Error(`GIF '${t2}' has an unexpected suffix`);
    return s2.encodeGif(e2, i2).then((e3) => (function(t3, e4) {
      return new Promise((i3, s3) => {
        r.writeFile(t3, e4, (t4) => t4 ? s3(t4) : i3());
      });
    })(t2, e3.buffer).then(() => e3));
  };
} };
