// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/46.js sha256:d16c5e127f5dfd2c26327f95acab37bce39fb1530578971aa8efc4cb16600efe
// module: 70727 range:93287..94778
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
70727: (t, e, i) => {
  const r = i(16950), { GifError: s } = i(22104);
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
}