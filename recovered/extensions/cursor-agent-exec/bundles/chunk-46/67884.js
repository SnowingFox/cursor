// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/46.js sha256:d16c5e127f5dfd2c26327f95acab37bce39fb1530578971aa8efc4cb16600efe
// module: 67884 range:88788..93285
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
67884: (t, e, i) => {
  const r = i(79896), s = i(6267), n = i(16950), { GifFrame: a } = i(70727), { GifError: o } = i(22104), { GifCodec: h } = i(33424), l = [".jpg", ".jpeg", ".png", ".bmp"], u = new h();
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
}