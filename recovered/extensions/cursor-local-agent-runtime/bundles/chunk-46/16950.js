// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/46.js sha256:d16c5e127f5dfd2c26327f95acab37bce39fb1530578971aa8efc4cb16600efe
// module: 16950 range:66519..70536
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
16950: (t) => {
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
}