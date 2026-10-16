"use strict";
exports.id = 691, exports.ids = [691], exports.modules = { 63691: (t, s, i) => {
  var h;
  i.r(s), i.d(s, { BmpCompression: () => a, default: () => I, msBmp: () => b }), (function(t2) {
    t2[t2.BITMAP_INFO_HEADER = 40] = "BITMAP_INFO_HEADER", t2[t2.BITMAP_V2_INFO_HEADER = 52] = "BITMAP_V2_INFO_HEADER", t2[t2.BITMAP_V3_INFO_HEADER = 56] = "BITMAP_V3_INFO_HEADER", t2[t2.BITMAP_V4_HEADER = 108] = "BITMAP_V4_HEADER", t2[t2.BITMAP_V5_HEADER = 124] = "BITMAP_V5_HEADER";
  })(h || (h = {}));
  const e = h;
  var a;
  !(function(t2) {
    t2[t2.NONE = 0] = "NONE", t2[t2.BI_RLE8 = 1] = "BI_RLE8", t2[t2.BI_RLE4 = 2] = "BI_RLE4", t2[t2.BI_BIT_FIELDS = 3] = "BI_BIT_FIELDS", t2[t2.BI_ALPHA_BIT_FIELDS = 6] = "BI_ALPHA_BIT_FIELDS";
  })(a || (a = {}));
  class r {
    flag;
    fileSize;
    reserved1;
    reserved2;
    offset;
    headerSize;
    width;
    height;
    planes;
    bitPP;
    compression;
    rawSize;
    hr;
    vr;
    colors;
    importantColors;
    palette;
    data;
    maskRed;
    maskGreen;
    maskBlue;
    maskAlpha;
    toRGBA;
    pos;
    bottomUp;
    buffer;
    locRed;
    locGreen;
    locBlue;
    locAlpha;
    shiftRed;
    shiftGreen;
    shiftBlue;
    shiftAlpha;
    constructor(t2, { toRGBA: s2 } = { toRGBA: false }) {
      if (this.buffer = t2, this.toRGBA = !!s2, this.pos = 0, this.bottomUp = true, this.flag = this.buffer.toString("utf-8", 0, this.pos += 2), "BM" !== this.flag) throw new Error("Invalid BMP File");
      this.locRed = this.toRGBA ? 0 : 3, this.locGreen = this.toRGBA ? 1 : 2, this.locBlue = this.toRGBA ? 2 : 1, this.locAlpha = this.toRGBA ? 3 : 0, this.parseHeader(), this.parseRGBA();
    }
    parseHeader() {
      if (this.fileSize = this.readUInt32LE(), this.reserved1 = this.buffer.readUInt16LE(this.pos), this.pos += 2, this.reserved2 = this.buffer.readUInt16LE(this.pos), this.pos += 2, this.offset = this.readUInt32LE(), this.headerSize = this.readUInt32LE(), !(this.headerSize in e)) throw new Error(`Unsupported BMP header size ${this.headerSize}`);
      if (this.width = this.readUInt32LE(), this.height = this.readUInt32LE(), this.height = this.height > 2147483647 ? this.height - 4294967296 : this.height, this.planes = this.buffer.readUInt16LE(this.pos), this.pos += 2, this.bitPP = this.buffer.readUInt16LE(this.pos), this.pos += 2, this.compression = this.readUInt32LE(), this.rawSize = this.readUInt32LE(), this.hr = this.readUInt32LE(), this.vr = this.readUInt32LE(), this.colors = this.readUInt32LE(), this.importantColors = this.readUInt32LE(), 32 === this.bitPP ? (this.maskAlpha = 0, this.maskRed = 16711680, this.maskGreen = 65280, this.maskBlue = 255) : 16 === this.bitPP && (this.maskAlpha = 0, this.maskRed = 31744, this.maskGreen = 992, this.maskBlue = 31), (this.headerSize > e.BITMAP_INFO_HEADER || this.compression === a.BI_BIT_FIELDS || this.compression === a.BI_ALPHA_BIT_FIELDS) && (this.maskRed = this.readUInt32LE(), this.maskGreen = this.readUInt32LE(), this.maskBlue = this.readUInt32LE()), (this.headerSize > e.BITMAP_V2_INFO_HEADER || this.compression === a.BI_ALPHA_BIT_FIELDS) && (this.maskAlpha = this.readUInt32LE()), this.headerSize > e.BITMAP_V3_INFO_HEADER && (this.pos += e.BITMAP_V4_HEADER - e.BITMAP_V3_INFO_HEADER), this.headerSize > e.BITMAP_V4_HEADER && (this.pos += e.BITMAP_V5_HEADER - e.BITMAP_V4_HEADER), this.bitPP <= 8 || this.colors > 0) {
        const t3 = 0 === this.colors ? 1 << this.bitPP : this.colors;
        this.palette = new Array(t3);
        for (let s2 = 0; s2 < t3; s2++) {
          const t4 = this.buffer.readUInt8(this.pos++), i2 = this.buffer.readUInt8(this.pos++), h2 = this.buffer.readUInt8(this.pos++), e2 = this.buffer.readUInt8(this.pos++);
          this.palette[s2] = { red: h2, green: i2, blue: t4, quad: e2 };
        }
      }
      this.height < 0 && (this.height *= -1, this.bottomUp = false);
      const t2 = (function(t3, s2, i2, h2) {
        const e2 = 1 + ~t3 & t3, a2 = 1 + ~s2 & s2, r2 = 1 + ~i2 & i2, o2 = 1 + ~h2 & h2, n2 = t3 / e2 + 1, d2 = s2 / a2 + 1, f2 = i2 / r2 + 1, l2 = h2 / o2 + 1;
        return { shiftRed: (s3) => (s3 & t3) / e2 * 256 / n2, shiftGreen: (t4) => (t4 & s2) / a2 * 256 / d2, shiftBlue: (t4) => (t4 & i2) / r2 * 256 / f2, shiftAlpha: 0 !== h2 ? (t4) => (t4 & h2) / o2 * 256 / l2 : () => 255 };
      })(this.maskRed, this.maskGreen, this.maskBlue, this.maskAlpha);
      this.shiftRed = t2.shiftRed, this.shiftGreen = t2.shiftGreen, this.shiftBlue = t2.shiftBlue, this.shiftAlpha = t2.shiftAlpha;
    }
    parseRGBA() {
      switch (this.data = Buffer.alloc(this.width * this.height * 4), this.bitPP) {
        case 1:
          this.bit1();
          break;
        case 4:
          this.bit4();
          break;
        case 8:
          this.bit8();
          break;
        case 16:
          this.bit16();
          break;
        case 24:
          this.bit24();
          break;
        default:
          this.bit32();
      }
    }
    bit1() {
      const t2 = Math.ceil(this.width / 8), s2 = t2 % 4, i2 = 0 !== s2 ? 4 - s2 : 0;
      let h2;
      this.scanImage(i2, t2, (t3, s3) => {
        s3 !== h2 && (h2 = s3);
        const i3 = this.buffer.readUInt8(this.pos++), e2 = s3 * this.width * 4 + 8 * t3 * 4;
        for (let s4 = 0; s4 < 8 && 8 * t3 + s4 < this.width; s4++) {
          const t4 = this.palette[i3 >> 7 - s4 & 1];
          this.data[e2 + s4 * this.locAlpha] = 0, this.data[e2 + 4 * s4 + this.locBlue] = t4.blue, this.data[e2 + 4 * s4 + this.locGreen] = t4.green, this.data[e2 + 4 * s4 + this.locRed] = t4.red;
        }
      });
    }
    bit4() {
      if (this.compression === a.BI_RLE4) {
        this.data.fill(0);
        let t2 = false, s2 = this.bottomUp ? this.height - 1 : 0, i2 = 0;
        for (; i2 < this.data.length; ) {
          const h2 = this.buffer.readUInt8(this.pos++), e2 = this.buffer.readUInt8(this.pos++);
          if (0 === h2) {
            if (0 === e2) {
              s2 += this.bottomUp ? -1 : 1, i2 = s2 * this.width * 4, t2 = false;
              continue;
            }
            if (1 === e2) break;
            if (2 === e2) {
              const t3 = this.buffer.readUInt8(this.pos++), h3 = this.buffer.readUInt8(this.pos++);
              s2 += this.bottomUp ? -h3 : h3, i2 += h3 * this.width * 4 + 4 * t3;
            } else {
              let s3 = this.buffer.readUInt8(this.pos++);
              for (let h3 = 0; h3 < e2; h3++) i2 = this.setPixelData(i2, t2 ? 15 & s3 : (240 & s3) >> 4), 1 & h3 && h3 + 1 < e2 && (s3 = this.buffer.readUInt8(this.pos++)), t2 = !t2;
              1 == (e2 + 1 >> 1 & 1) && this.pos++;
            }
          } else for (let s3 = 0; s3 < h2; s3++) i2 = this.setPixelData(i2, t2 ? 15 & e2 : (240 & e2) >> 4), t2 = !t2;
        }
      } else {
        const t2 = Math.ceil(this.width / 2), s2 = t2 % 4, i2 = 0 !== s2 ? 4 - s2 : 0;
        this.scanImage(i2, t2, (t3, s3) => {
          const i3 = this.buffer.readUInt8(this.pos++), h2 = s3 * this.width * 4 + 2 * t3 * 4, e2 = i3 >> 4;
          let a2 = this.palette[e2];
          if (this.data[h2] = 0, this.data[h2 + 1] = a2.blue, this.data[h2 + 2] = a2.green, this.data[h2 + 3] = a2.red, 2 * t3 + 1 >= this.width) return false;
          const r2 = 15 & i3;
          a2 = this.palette[r2], this.data[h2 + 4] = 0, this.data[h2 + 4 + 1] = a2.blue, this.data[h2 + 4 + 2] = a2.green, this.data[h2 + 4 + 3] = a2.red;
        });
      }
    }
    bit8() {
      if (this.compression === a.BI_RLE8) {
        this.data.fill(0);
        let t2 = this.bottomUp ? this.height - 1 : 0, s2 = 0;
        for (; s2 < this.data.length; ) {
          const i2 = this.buffer.readUInt8(this.pos++), h2 = this.buffer.readUInt8(this.pos++);
          if (0 === i2) {
            if (0 === h2) {
              t2 += this.bottomUp ? -1 : 1, s2 = t2 * this.width * 4;
              continue;
            }
            if (1 === h2) break;
            if (2 === h2) {
              const i3 = this.buffer.readUInt8(this.pos++), h3 = this.buffer.readUInt8(this.pos++);
              t2 += this.bottomUp ? -h3 : h3, s2 += h3 * this.width * 4 + 4 * i3;
            } else {
              for (let t3 = 0; t3 < h2; t3++) {
                const t4 = this.buffer.readUInt8(this.pos++);
                s2 = this.setPixelData(s2, t4);
              }
              true & h2 && this.pos++;
            }
          } else for (let t3 = 0; t3 < i2; t3++) s2 = this.setPixelData(s2, h2);
        }
      } else {
        const t2 = this.width % 4, s2 = 0 !== t2 ? 4 - t2 : 0;
        this.scanImage(s2, this.width, (t3, s3) => {
          const i2 = this.buffer.readUInt8(this.pos++), h2 = s3 * this.width * 4 + 4 * t3;
          if (i2 < this.palette.length) {
            const t4 = this.palette[i2];
            this.data[h2] = 0, this.data[h2 + 1] = t4.blue, this.data[h2 + 2] = t4.green, this.data[h2 + 3] = t4.red;
          } else this.data[h2] = 0, this.data[h2 + 1] = 255, this.data[h2 + 2] = 255, this.data[h2 + 3] = 255;
        });
      }
    }
    bit16() {
      const t2 = this.width % 2 * 2;
      this.scanImage(t2, this.width, (t3, s2) => {
        const i2 = s2 * this.width * 4 + 4 * t3, h2 = this.buffer.readUInt16LE(this.pos);
        this.pos += 2, this.data[i2 + this.locRed] = this.shiftRed(h2), this.data[i2 + this.locGreen] = this.shiftGreen(h2), this.data[i2 + this.locBlue] = this.shiftBlue(h2), this.data[i2 + this.locAlpha] = this.shiftAlpha(h2);
      });
    }
    bit24() {
      const t2 = this.width % 4;
      this.scanImage(t2, this.width, (t3, s2) => {
        const i2 = s2 * this.width * 4 + 4 * t3, h2 = this.buffer.readUInt8(this.pos++), e2 = this.buffer.readUInt8(this.pos++), a2 = this.buffer.readUInt8(this.pos++);
        this.data[i2 + this.locRed] = a2, this.data[i2 + this.locGreen] = e2, this.data[i2 + this.locBlue] = h2, this.data[i2 + this.locAlpha] = 0;
      });
    }
    bit32() {
      this.scanImage(0, this.width, (t2, s2) => {
        const i2 = s2 * this.width * 4 + 4 * t2, h2 = this.readUInt32LE();
        this.data[i2 + this.locRed] = this.shiftRed(h2), this.data[i2 + this.locGreen] = this.shiftGreen(h2), this.data[i2 + this.locBlue] = this.shiftBlue(h2), this.data[i2 + this.locAlpha] = this.shiftAlpha(h2);
      });
    }
    scanImage(t2 = 0, s2 = this.width, i2) {
      for (let h2 = this.height - 1; h2 >= 0; h2--) {
        const e2 = this.bottomUp ? h2 : this.height - 1 - h2;
        for (let t3 = 0; t3 < s2; t3++) {
          if (false === i2.call(this, t3, e2)) return;
        }
        this.pos += t2;
      }
    }
    readUInt32LE() {
      const t2 = this.buffer.readUInt32LE(this.pos);
      return this.pos += 4, t2;
    }
    setPixelData(t2, s2) {
      const { blue: i2, green: h2, red: e2 } = this.palette[s2];
      return this.data[t2 + this.locAlpha] = 0, this.data[t2 + 1 + this.locBlue] = i2, this.data[t2 + 2 + this.locGreen] = h2, this.data[t2 + 3 + this.locRed] = e2, t2 + 4;
    }
  }
  function o(t2) {
    return t2.reduce((t3, s2) => t3 << 1 | s2, 0);
  }
  function n(t2) {
    return t2.quad << 24 | t2.red << 16 | t2.green << 8 | t2.blue;
  }
  class d {
    fileSize;
    reserved1;
    reserved2;
    offset;
    width;
    flag;
    height;
    planes;
    bitPP;
    compress;
    hr;
    vr;
    colors;
    importantColors;
    rawSize;
    headerSize;
    data;
    palette;
    extraBytes;
    buffer;
    bytesInColor;
    pos;
    constructor(t2) {
      switch (this.buffer = t2.data, this.width = t2.width, this.height = t2.height, this.headerSize = e.BITMAP_INFO_HEADER, this.flag = "BM", this.bitPP = t2.bitPP || 24, this.offset = 54, this.reserved1 = t2.reserved1 || 0, this.reserved2 = t2.reserved2 || 0, this.planes = 1, this.compress = 0, this.hr = t2.hr || 0, this.vr = t2.vr || 0, this.importantColors = t2.importantColors || 0, this.colors = Math.min(2 ** (this.bitPP - 1 || 1), t2.colors || 1 / 0), this.palette = t2.palette || [], this.colors && this.bitPP < 16 ? this.offset += 4 * this.colors : this.colors = 0, this.bitPP) {
        case 32:
          this.bytesInColor = 4;
          break;
        case 16:
          this.bytesInColor = 2;
          break;
        case 8:
          this.bytesInColor = 1;
          break;
        case 4:
          this.bytesInColor = 0.5;
          break;
        case 1:
          this.bytesInColor = 1 / 8;
          break;
        default:
          this.bytesInColor = 3, this.bitPP = 24;
      }
      const s2 = this.width * this.bitPP / 32, i2 = Math.ceil(s2);
      this.extraBytes = 4 * (i2 - s2), this.rawSize = this.height * i2 * 4 + 2, this.fileSize = this.rawSize + this.offset, this.data = Buffer.alloc(this.fileSize, 1), this.pos = 0, this.encode();
    }
    encode() {
      switch (this.pos = 0, this.writeHeader(), this.bitPP) {
        case 32:
          this.bit32();
          break;
        case 16:
          this.bit16();
          break;
        case 8:
          this.bit8();
          break;
        case 4:
          this.bit4();
          break;
        case 1:
          this.bit1();
          break;
        default:
          this.bit24();
      }
    }
    writeHeader() {
      this.data.write(this.flag, this.pos, 2), this.pos += 2, this.writeUInt32LE(this.fileSize), this.writeUInt32LE(this.reserved1 << 16 | this.reserved2), this.writeUInt32LE(this.offset), this.writeUInt32LE(this.headerSize), this.writeUInt32LE(this.width), this.writeUInt32LE(this.height), this.data.writeUInt16LE(this.planes, this.pos), this.pos += 2, this.data.writeUInt16LE(this.bitPP, this.pos), this.pos += 2, this.writeUInt32LE(this.compress), this.writeUInt32LE(this.rawSize), this.writeUInt32LE(this.hr), this.writeUInt32LE(this.vr), this.writeUInt32LE(this.colors), this.writeUInt32LE(this.importantColors);
    }
    bit1() {
      this.palette.length && 2 === this.colors ? this.initColors(1) : (this.writeUInt32LE(16777215), this.writeUInt32LE(0)), this.pos += 1;
      let t2 = [];
      this.writeImage((s2, i2, h2) => {
        let e2 = i2;
        e2++;
        const a2 = this.buffer[e2++], r2 = this.buffer[e2++], n2 = 0.2126 * this.buffer[e2++] + 0.7152 * r2 + 0.0722 * a2;
        return t2.push(n2 > 127 ? 0 : 1), (h2 + 1) % 8 == 0 ? (this.data[s2 - 1] = o(t2), t2 = []) : h2 === this.width - 1 && t2.length > 0 && (this.data[s2 - 1] = o(t2) << 4, t2 = []), e2;
      });
    }
    bit4() {
      const t2 = this.initColors(4);
      let s2 = [];
      this.writeImage((i2, h2, e2) => {
        let a2 = h2;
        const r2 = n({ quad: this.buffer[a2++], blue: this.buffer[a2++], green: this.buffer[a2++], red: this.buffer[a2++] }), o2 = t2.findIndex((t3) => t3 === r2);
        return -1 !== o2 ? s2.push(o2) : s2.push(0), (e2 + 1) % 2 == 0 && (this.data[i2] = s2[0] << 4 | s2[1], s2 = []), a2;
      });
    }
    bit8() {
      const t2 = this.initColors(8);
      this.writeImage((s2, i2) => {
        let h2 = i2;
        const e2 = n({ quad: this.buffer[h2++], blue: this.buffer[h2++], green: this.buffer[h2++], red: this.buffer[h2++] }), a2 = t2.findIndex((t3) => t3 === e2);
        return this.data[s2] = -1 !== a2 ? a2 : 0, h2;
      });
    }
    bit16() {
      this.writeImage((t2, s2) => {
        let i2 = s2 + 1;
        const h2 = this.buffer[i2++] / 8, e2 = this.buffer[i2++] / 8, a2 = this.buffer[i2++] / 8 << 10 | e2 << 5 | h2;
        return this.data[t2] = 255 & a2, this.data[t2 + 1] = (65280 & a2) >> 8, i2;
      });
    }
    bit24() {
      this.writeImage((t2, s2) => {
        let i2 = s2 + 1;
        return this.data[t2] = this.buffer[i2++], this.data[t2 + 1] = this.buffer[i2++], this.data[t2 + 2] = this.buffer[i2++], i2;
      });
    }
    bit32() {
      this.writeImage((t2, s2) => {
        let i2 = s2;
        return this.data[t2 + 3] = this.buffer[i2++], this.data[t2] = this.buffer[i2++], this.data[t2 + 1] = this.buffer[i2++], this.data[t2 + 2] = this.buffer[i2++], i2;
      });
    }
    writeImage(t2) {
      const s2 = this.extraBytes + this.width * this.bytesInColor;
      let i2 = 0;
      for (let h2 = 0; h2 < this.height; h2++) for (let e2 = 0; e2 < this.width; e2++) {
        const a2 = Math.floor(this.pos + (this.height - 1 - h2) * s2 + e2 * this.bytesInColor);
        i2 = t2.call(this, a2, i2, e2, h2);
      }
    }
    initColors(t2) {
      const s2 = [];
      if (!this.palette.length) throw new Error(`To encode ${t2}-bit BMPs a pallette is needed. Please choose up to ${this.colors} colors. Colors must be 32-bit integers.`);
      for (let t3 = 0; t3 < this.colors; t3++) {
        const i2 = n(this.palette[t3]);
        this.writeUInt32LE(i2), s2.push(i2);
      }
      return s2;
    }
    writeUInt32LE(t2) {
      this.data.writeUInt32LE(t2, this.pos), this.pos += 4;
    }
  }
  var f = i(12716);
  function l(t2, s2 = {}) {
    return (0, f.SQ)({ bitmap: t2 }, 0, 0, t2.width, t2.height, function(s3, i3, h2) {
      const e2 = t2.data[h2 + 0], a2 = t2.data[h2 + 1], r2 = t2.data[h2 + 2], o2 = t2.data[h2 + 3];
      t2.data[h2 + 0] = o2, t2.data[h2 + 1] = r2, t2.data[h2 + 2] = a2, t2.data[h2 + 3] = e2;
    }), (i2 = { ...t2, ...s2 }, new d(i2)).data;
    var i2;
  }
  function c(t2, s2) {
    const i2 = (function(t3, s3) {
      return new r(t3, s3);
    })(t2, s2);
    return (0, f.SQ)({ bitmap: i2 }, 0, 0, i2.width, i2.height, function(t3, s3, h2) {
      const e2 = i2.data[h2 + 1], a2 = i2.data[h2 + 2], r2 = i2.data[h2 + 3];
      i2.data[h2 + 0] = r2, i2.data[h2 + 1] = a2, i2.data[h2 + 2] = e2, i2.data[h2 + 3] = 255;
    }), i2;
  }
  function b() {
    return { mime: "image/x-ms-bmp", encode: l, decode: c };
  }
  function I() {
    return { mime: "image/bmp", encode: l, decode: c };
  }
} };
