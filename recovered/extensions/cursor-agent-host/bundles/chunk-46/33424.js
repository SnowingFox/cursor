// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/46.js sha256:d16c5e127f5dfd2c26327f95acab37bce39fb1530578971aa8efc4cb16600efe
// module: 33424 range:81777..88540
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
33424: (t, e, i) => {
  const r = i(33058), { Gif: s, GifError: n } = i(22104);
  function a() {
    const t2 = i(67884);
    return a = function() {
      return t2;
    }, t2;
  }
  const { GifFrame: o } = i(70727);
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
}