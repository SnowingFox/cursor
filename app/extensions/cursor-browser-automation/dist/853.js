"use strict";
exports.id = 853, exports.ids = [853], exports.modules = { 5853: (t, i, e) => {
  var h;
  e.r(i), e.d(i, { ResizeStrategy: () => h, methods: () => u }), (function(t2) {
    t2.NEAREST_NEIGHBOR = "nearestNeighbor", t2.BILINEAR = "bilinearInterpolation", t2.BICUBIC = "bicubicInterpolation", t2.HERMITE = "hermiteInterpolation", t2.BEZIER = "bezierInterpolation";
  })(h || (h = {}));
  var r = e(9746);
  function s(t2, i2, e2, h2, r2, s2, n2) {
    this.widthOriginal = Math.abs(Math.floor(t2) || 0), this.heightOriginal = Math.abs(Math.floor(i2) || 0), this.targetWidth = Math.abs(Math.floor(e2) || 0), this.targetHeight = Math.abs(Math.floor(h2) || 0), this.colorChannels = r2 ? 4 : 3, this.interpolationPass = Boolean(s2), this.resizeCallback = "function" == typeof n2 ? n2 : function() {
    }, this.targetWidthMultipliedByChannels = this.targetWidth * this.colorChannels, this.originalWidthMultipliedByChannels = this.widthOriginal * this.colorChannels, this.originalHeightMultipliedByChannels = this.heightOriginal * this.colorChannels, this.widthPassResultSize = this.targetWidthMultipliedByChannels * this.heightOriginal, this.finalResultSize = this.targetWidthMultipliedByChannels * this.targetHeight, this.initialize();
  }
  s.prototype.initialize = function() {
    if (!(this.widthOriginal > 0 && this.heightOriginal > 0 && this.targetWidth > 0 && this.targetHeight > 0)) throw console.log(this), new Error("Invalid settings specified for the resizer.");
    this.configurePasses();
  }, s.prototype.configurePasses = function() {
    this.widthOriginal === this.targetWidth ? this.resizeWidth = this.bypassResizer : (this.ratioWeightWidthPass = this.widthOriginal / this.targetWidth, this.ratioWeightWidthPass < 1 && this.interpolationPass ? (this.initializeFirstPassBuffers(true), this.resizeWidth = 4 === this.colorChannels ? this.resizeWidthInterpolatedRGBA : this.resizeWidthInterpolatedRGB) : (this.initializeFirstPassBuffers(false), this.resizeWidth = 4 === this.colorChannels ? this.resizeWidthRGBA : this.resizeWidthRGB)), this.heightOriginal === this.targetHeight ? this.resizeHeight = this.bypassResizer : (this.ratioWeightHeightPass = this.heightOriginal / this.targetHeight, this.ratioWeightHeightPass < 1 && this.interpolationPass ? (this.initializeSecondPassBuffers(true), this.resizeHeight = this.resizeHeightInterpolated) : (this.initializeSecondPassBuffers(false), this.resizeHeight = 4 === this.colorChannels ? this.resizeHeightRGBA : this.resizeHeightRGB));
  }, s.prototype._resizeWidthInterpolatedRGBChannels = function(t2, i2) {
    const e2 = i2 ? 4 : 3, h2 = this.ratioWeightWidthPass, r2 = this.widthBuffer;
    let s2, n2, a2 = 0, o2 = 0, l2 = 0, d2 = 0, u2 = 0;
    for (s2 = 0; a2 < 1 / 3; s2 += e2, a2 += h2) for (o2 = s2, l2 = 0; o2 < this.widthPassResultSize; l2 += this.originalWidthMultipliedByChannels, o2 += this.targetWidthMultipliedByChannels) r2[o2] = t2[l2], r2[o2 + 1] = t2[l2 + 1], r2[o2 + 2] = t2[l2 + 2], i2 && (r2[o2 + 3] = t2[l2 + 3]);
    for (a2 -= 1 / 3, n2 = this.widthOriginal - 1; a2 < n2; s2 += e2, a2 += h2) for (u2 = a2 % 1, d2 = 1 - u2, o2 = s2, l2 = Math.floor(a2) * e2; o2 < this.widthPassResultSize; l2 += this.originalWidthMultipliedByChannels, o2 += this.targetWidthMultipliedByChannels) r2[o2 + 0] = t2[l2 + 0] * d2 + t2[l2 + e2 + 0] * u2, r2[o2 + 1] = t2[l2 + 1] * d2 + t2[l2 + e2 + 1] * u2, r2[o2 + 2] = t2[l2 + 2] * d2 + t2[l2 + e2 + 2] * u2, i2 && (r2[o2 + 3] = t2[l2 + 3] * d2 + t2[l2 + e2 + 3] * u2);
    for (n2 = this.originalWidthMultipliedByChannels - e2; s2 < this.targetWidthMultipliedByChannels; s2 += e2) for (o2 = s2, l2 = n2; o2 < this.widthPassResultSize; l2 += this.originalWidthMultipliedByChannels, o2 += this.targetWidthMultipliedByChannels) r2[o2] = t2[l2], r2[o2 + 1] = t2[l2 + 1], r2[o2 + 2] = t2[l2 + 2], i2 && (r2[o2 + 3] = t2[l2 + 3]);
    return r2;
  }, s.prototype._resizeWidthRGBChannels = function(t2, i2) {
    const e2 = i2 ? 4 : 3, h2 = this.ratioWeightWidthPass, r2 = 1 / h2, s2 = this.originalWidthMultipliedByChannels - e2 + 1, n2 = this.targetWidthMultipliedByChannels - e2 + 1, a2 = this.outputWidthWorkBench, o2 = this.widthBuffer, l2 = this.outputWidthWorkBenchOpaquePixelsCount;
    let d2 = 0, u2 = 0, f = 0, p = 0, g = 0, c = 0, B = 0, M = 1, W = 0, y = 0, z = 0, C = 0;
    do {
      for (g = 0; g < this.originalHeightMultipliedByChannels; ) a2[g++] = 0, a2[g++] = 0, a2[g++] = 0, i2 && (a2[g++] = 0, l2[g / e2 - 1] = 0);
      d2 = h2;
      do {
        for (u2 = 1 + f - p, M = Math.min(d2, u2), g = 0, c = f; g < this.originalHeightMultipliedByChannels; c += s2) W = t2[c], y = t2[++c], z = t2[++c], C = i2 ? t2[++c] : 255, a2[g++] += (C ? W : 0) * M, a2[g++] += (C ? y : 0) * M, a2[g++] += (C ? z : 0) * M, i2 && (a2[g++] += C * M, l2[g / e2 - 1] += C ? M : 0);
        if (!(d2 >= u2)) {
          p += d2;
          break;
        }
        f += e2, p = f, d2 -= u2;
      } while (d2 > 0 && f < this.originalWidthMultipliedByChannels);
      for (g = 0, c = B; g < this.originalHeightMultipliedByChannels; c += n2) d2 = i2 ? l2[g / e2] : 1, M = i2 ? d2 ? 1 / d2 : 0 : r2, o2[c] = a2[g++] * M, o2[++c] = a2[g++] * M, o2[++c] = a2[g++] * M, i2 && (o2[++c] = a2[g++] * r2);
      B += e2;
    } while (B < this.targetWidthMultipliedByChannels);
    return o2;
  }, s.prototype._resizeHeightRGBChannels = function(t2, i2) {
    const e2 = this.ratioWeightHeightPass, h2 = 1 / e2, r2 = this.outputHeightWorkBench, s2 = this.heightBuffer, n2 = this.outputHeightWorkBenchOpaquePixelsCount;
    let a2 = 0, o2 = 0, l2 = 0, d2 = 0, u2 = 0, f = 0, p = 0, g = 1, c = 0, B = 0, M = 0, W = 0;
    do {
      for (u2 = 0; u2 < this.targetWidthMultipliedByChannels; ) r2[u2++] = 0, r2[u2++] = 0, r2[u2++] = 0, i2 && (r2[u2++] = 0, n2[u2 / 4 - 1] = 0);
      a2 = e2;
      do {
        for (o2 = 1 + l2 - d2, g = Math.min(a2, o2), p = l2, u2 = 0; u2 < this.targetWidthMultipliedByChannels; ) c = t2[p++], B = t2[p++], M = t2[p++], W = i2 ? t2[p++] : 255, r2[u2++] += (W ? c : 0) * g, r2[u2++] += (W ? B : 0) * g, r2[u2++] += (W ? M : 0) * g, i2 && (r2[u2++] += W * g, n2[u2 / 4 - 1] += W ? g : 0);
        if (!(a2 >= o2)) {
          d2 += a2;
          break;
        }
        l2 = p, d2 = l2, a2 -= o2;
      } while (a2 > 0 && l2 < this.widthPassResultSize);
      for (u2 = 0; u2 < this.targetWidthMultipliedByChannels; ) a2 = i2 ? n2[u2 / 4] : 1, g = i2 ? a2 ? 1 / a2 : 0 : h2, s2[f++] = Math.round(r2[u2++] * g), s2[f++] = Math.round(r2[u2++] * g), s2[f++] = Math.round(r2[u2++] * g), i2 && (s2[f++] = Math.round(r2[u2++] * h2));
    } while (f < this.finalResultSize);
    return s2;
  }, s.prototype.resizeWidthInterpolatedRGB = function(t2) {
    return this._resizeWidthInterpolatedRGBChannels(t2, false);
  }, s.prototype.resizeWidthInterpolatedRGBA = function(t2) {
    return this._resizeWidthInterpolatedRGBChannels(t2, true);
  }, s.prototype.resizeWidthRGB = function(t2) {
    return this._resizeWidthRGBChannels(t2, false);
  }, s.prototype.resizeWidthRGBA = function(t2) {
    return this._resizeWidthRGBChannels(t2, true);
  }, s.prototype.resizeHeightInterpolated = function(t2) {
    const i2 = this.ratioWeightHeightPass, e2 = this.heightBuffer;
    let h2, r2 = 0, s2 = 0, n2 = 0, a2 = 0, o2 = 0, l2 = 0, d2 = 0;
    for (; r2 < 1 / 3; r2 += i2) for (n2 = 0; n2 < this.targetWidthMultipliedByChannels; ) e2[s2++] = Math.round(t2[n2++]);
    for (r2 -= 1 / 3, h2 = this.heightOriginal - 1; r2 < h2; r2 += i2) for (d2 = r2 % 1, l2 = 1 - d2, a2 = Math.floor(r2) * this.targetWidthMultipliedByChannels, o2 = a2 + this.targetWidthMultipliedByChannels, n2 = 0; n2 < this.targetWidthMultipliedByChannels; ++n2) e2[s2++] = Math.round(t2[a2++] * l2 + t2[o2++] * d2);
    for (; s2 < this.finalResultSize; ) for (n2 = 0, a2 = h2 * this.targetWidthMultipliedByChannels; n2 < this.targetWidthMultipliedByChannels; ++n2) e2[s2++] = Math.round(t2[a2++]);
    return e2;
  }, s.prototype.resizeHeightRGB = function(t2) {
    return this._resizeHeightRGBChannels(t2, false);
  }, s.prototype.resizeHeightRGBA = function(t2) {
    return this._resizeHeightRGBChannels(t2, true);
  }, s.prototype.resize = function(t2) {
    this.resizeCallback(this.resizeHeight(this.resizeWidth(t2)));
  }, s.prototype.bypassResizer = function(t2) {
    return t2;
  }, s.prototype.initializeFirstPassBuffers = function(t2) {
    this.widthBuffer = this.generateFloatBuffer(this.widthPassResultSize), t2 || (this.outputWidthWorkBench = this.generateFloatBuffer(this.originalHeightMultipliedByChannels), this.colorChannels > 3 && (this.outputWidthWorkBenchOpaquePixelsCount = this.generateFloat64Buffer(this.heightOriginal)));
  }, s.prototype.initializeSecondPassBuffers = function(t2) {
    this.heightBuffer = this.generateUint8Buffer(this.finalResultSize), t2 || (this.outputHeightWorkBench = this.generateFloatBuffer(this.targetWidthMultipliedByChannels), this.colorChannels > 3 && (this.outputHeightWorkBenchOpaquePixelsCount = this.generateFloat64Buffer(this.targetWidth)));
  }, s.prototype.generateFloatBuffer = function(t2) {
    try {
      return new Float32Array(t2);
    } catch (t3) {
      return console.error(t3), [];
    }
  }, s.prototype.generateFloat64Buffer = function(t2) {
    try {
      return new Float64Array(t2);
    } catch (t3) {
      return console.error(t3), [];
    }
  }, s.prototype.generateUint8Buffer = function(t2) {
    try {
      return new Uint8Array(t2);
    } catch (t3) {
      return console.error(t3), [];
    }
  };
  const n = s, a = { nearestNeighbor(t2, i2) {
    const e2 = t2.width, h2 = t2.height, r2 = i2.width, s2 = i2.height, n2 = t2.data, a2 = i2.data;
    for (let t3 = 0; t3 < s2; t3++) for (let i3 = 0; i3 < r2; i3++) {
      let o2 = 4 * (t3 * r2 + i3);
      let l2 = 4 * (Math.floor(t3 * h2 / s2) * e2 + Math.floor(i3 * e2 / r2));
      a2[o2++] = n2[l2++], a2[o2++] = n2[l2++], a2[o2++] = n2[l2++], a2[o2++] = n2[l2++];
    }
  }, bilinearInterpolation(t2, i2) {
    const e2 = t2.width, h2 = t2.height, r2 = i2.width, s2 = i2.height, n2 = t2.data, a2 = i2.data, o2 = function(t3, i3, e3, h3, r3) {
      return i3 === h3 ? e3 : Math.round((t3 - i3) * r3 + (h3 - t3) * e3);
    }, l2 = function(t3, i3, h3, r3, s3, l3, d2, u2) {
      let f = 4 * (d2 * e2 + r3) + i3, p = 4 * (d2 * e2 + s3) + i3;
      const g = o2(h3, r3, n2[f], s3, n2[p]);
      if (u2 === d2) a2[t3 + i3] = g;
      else {
        f = 4 * (u2 * e2 + r3) + i3, p = 4 * (u2 * e2 + s3) + i3;
        const c = o2(h3, r3, n2[f], s3, n2[p]);
        a2[t3 + i3] = o2(l3, d2, g, u2, c);
      }
    };
    for (let t3 = 0; t3 < s2; t3++) for (let i3 = 0; i3 < r2; i3++) {
      const n3 = 4 * (t3 * r2 + i3), a3 = i3 * e2 / r2, o3 = Math.floor(a3), d2 = Math.min(Math.ceil(a3), e2 - 1), u2 = t3 * h2 / s2, f = Math.floor(u2), p = Math.min(Math.ceil(u2), h2 - 1);
      l2(n3, 0, a3, o3, d2, u2, f, p), l2(n3, 1, a3, o3, d2, u2, f, p), l2(n3, 2, a3, o3, d2, u2, f, p), l2(n3, 3, a3, o3, d2, u2, f, p);
    }
  }, _interpolate2D(t2, i2, e2, h2) {
    const r2 = t2.data, s2 = i2.data, n2 = t2.width, a2 = t2.height, o2 = i2.width, l2 = i2.height, d2 = Math.max(1, Math.floor(n2 / o2)), u2 = o2 * d2, f = Math.max(1, Math.floor(a2 / l2)), p = l2 * f, g = Buffer.alloc(u2 * a2 * 4);
    for (let t3 = 0; t3 < a2; t3++) for (let i3 = 0; i3 < u2; i3++) {
      const e3 = i3 * (n2 - 1) / u2, s3 = Math.floor(e3), a3 = e3 - s3, o3 = 4 * (t3 * n2 + s3), l3 = 4 * (t3 * u2 + i3);
      for (let t4 = 0; t4 < 4; t4++) {
        const i4 = o3 + t4, e4 = s3 > 0 ? r2[i4 - 4] : 2 * r2[i4] - r2[i4 + 4], d3 = r2[i4], u3 = r2[i4 + 4], f2 = s3 < n2 - 2 ? r2[i4 + 8] : 2 * r2[i4 + 4] - r2[i4];
        g[l3 + t4] = h2(e4, d3, u3, f2, a3);
      }
    }
    const c = Buffer.alloc(u2 * p * 4);
    for (let t3 = 0; t3 < p; t3++) for (let i3 = 0; i3 < u2; i3++) {
      const e3 = t3 * (a2 - 1) / p, r3 = Math.floor(e3), s3 = e3 - r3, n3 = 4 * (r3 * u2 + i3), o3 = 4 * (t3 * u2 + i3);
      for (let t4 = 0; t4 < 4; t4++) {
        const i4 = n3 + t4, e4 = r3 > 0 ? g[i4 - 4 * u2] : 2 * g[i4] - g[i4 + 4 * u2], l3 = g[i4], d3 = g[i4 + 4 * u2], f2 = r3 < a2 - 2 ? g[i4 + 8 * u2] : 2 * g[i4 + 4 * u2] - g[i4];
        c[o3 + t4] = h2(e4, l3, d3, f2, s3);
      }
    }
    const B = d2 * f;
    if (B > 1) for (let t3 = 0; t3 < l2; t3++) for (let i3 = 0; i3 < o2; i3++) {
      let e3 = 0, h3 = 0, r3 = 0, n3 = 0, a3 = 0;
      for (let s3 = 0; s3 < f; s3++) {
        const o3 = t3 * f + s3;
        for (let t4 = 0; t4 < d2; t4++) {
          const s4 = 4 * (o3 * u2 + (i3 * d2 + t4)), l4 = c[s4 + 3];
          l4 && (e3 += c[s4], h3 += c[s4 + 1], r3 += c[s4 + 2], a3++), n3 += l4;
        }
      }
      const l3 = 4 * (t3 * o2 + i3);
      s2[l3] = a3 ? Math.round(e3 / a3) : 0, s2[l3 + 1] = a3 ? Math.round(h3 / a3) : 0, s2[l3 + 2] = a3 ? Math.round(r3 / a3) : 0, s2[l3 + 3] = Math.round(n3 / B);
    }
    else i2.data = c;
  }, bicubicInterpolation(t2, i2, e2) {
    return this._interpolate2D(t2, i2, e2, function(t3, i3, e3, h2, r2) {
      const s2 = h2 - e3 - t3 + i3, n2 = t3 - i3 - s2, a2 = e3 - t3, o2 = i3;
      return Math.max(0, Math.min(255, s2 * (r2 * r2 * r2) + n2 * (r2 * r2) + a2 * r2 + o2));
    });
  }, hermiteInterpolation(t2, i2, e2) {
    return this._interpolate2D(t2, i2, e2, function(t3, i3, e3, h2, r2) {
      const s2 = i3, n2 = 0.5 * (e3 - t3), a2 = t3 - 2.5 * i3 + 2 * e3 - 0.5 * h2, o2 = 0.5 * (h2 - t3) + 1.5 * (i3 - e3);
      return Math.max(0, Math.min(255, Math.round(((o2 * r2 + a2) * r2 + n2) * r2 + s2)));
    });
  }, bezierInterpolation(t2, i2, e2) {
    return this._interpolate2D(t2, i2, e2, function(t3, i3, e3, h2, r2) {
      const s2 = 1 - r2, n2 = i3 * s2 * s2 * s2, a2 = 3 * (i3 + (e3 - t3) / 4) * s2 * s2 * r2, o2 = 3 * (e3 - (h2 - i3) / 4) * s2 * r2 * r2, l2 = e3 * r2 * r2 * r2;
      return Math.max(0, Math.min(255, Math.round(n2 + a2 + o2 + l2)));
    });
  } }, o = r.KC([r.Ik({ w: r.ai().min(0), h: r.ai().min(0).optional(), mode: r.fc(h).optional() }), r.Ik({ w: r.ai().min(0).optional(), h: r.ai().min(0), mode: r.fc(h).optional() })]), l = r.Ik({ w: r.ai().min(0), h: r.ai().min(0), mode: r.fc(h).optional() }), d = r.Ik({ f: r.ai().min(0), mode: r.fc(h).optional() }), u = { resize(t2, i2) {
    const { mode: e2 } = o.parse(i2);
    let h2, r2;
    if ("number" == typeof i2.w) h2 = i2.w, r2 = i2.h ?? t2.bitmap.height * (h2 / t2.bitmap.width);
    else {
      if ("number" != typeof i2.h) throw new Error("w must be a number");
      r2 = i2.h, h2 = i2.w ?? t2.bitmap.width * (r2 / t2.bitmap.height);
    }
    if (h2 = Math.round(h2) || 1, r2 = Math.round(r2) || 1, e2 && "function" == typeof a[e2]) {
      const i3 = { data: Buffer.alloc(h2 * r2 * 4), width: h2, height: r2 };
      a[e2](t2.bitmap, i3), t2.bitmap = i3;
    } else {
      new n(t2.bitmap.width, t2.bitmap.height, h2, r2, true, true, (i3) => {
        t2.bitmap.data = Buffer.from(i3), t2.bitmap.width = h2, t2.bitmap.height = r2;
      }).resize(t2.bitmap.data);
    }
    return t2;
  }, scale(t2, i2) {
    const { f: e2, mode: h2 } = "number" == typeof i2 ? { f: i2 } : d.parse(i2), r2 = t2.bitmap.width * e2, s2 = t2.bitmap.height * e2;
    return this.resize(t2, { w: r2, h: s2, mode: h2 });
  }, scaleToFit(t2, i2) {
    const { h: e2, w: h2, mode: r2 } = l.parse(i2), s2 = h2 / e2 > t2.bitmap.width / t2.bitmap.height ? e2 / t2.bitmap.height : h2 / t2.bitmap.width;
    return this.scale(t2, { f: s2, mode: r2 });
  } };
} };
