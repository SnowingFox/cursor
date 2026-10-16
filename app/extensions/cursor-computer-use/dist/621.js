"use strict";
exports.id = 621, exports.ids = [621], exports.modules = { 795: (t, e, i) => {
  let r = i(9023), n = i(9233), s = i(6446), h = t.exports = function(t2) {
    n.call(this);
    let e2 = [], i2 = this;
    this._filter = new s(t2, { read: this.read.bind(this), write: function(t3) {
      e2.push(t3);
    }, complete: function() {
      i2.emit("complete", Buffer.concat(e2));
    } }), this._filter.start();
  };
  r.inherits(h, n);
}, 1041: (t, e, i) => {
  let r = i(4393), n = i(8102), s = t.exports = function(t2, e2) {
    this._options = t2, t2.checkCRC = false !== t2.checkCRC, this._hasIHDR = false, this._hasIEND = false, this._emittedHeadersFinished = false, this._palette = [], this._colorType = 0, this._chunks = {}, this._chunks[r.TYPE_IHDR] = this._handleIHDR.bind(this), this._chunks[r.TYPE_IEND] = this._handleIEND.bind(this), this._chunks[r.TYPE_IDAT] = this._handleIDAT.bind(this), this._chunks[r.TYPE_PLTE] = this._handlePLTE.bind(this), this._chunks[r.TYPE_tRNS] = this._handleTRNS.bind(this), this._chunks[r.TYPE_gAMA] = this._handleGAMA.bind(this), this.read = e2.read, this.error = e2.error, this.metadata = e2.metadata, this.gamma = e2.gamma, this.transColor = e2.transColor, this.palette = e2.palette, this.parsed = e2.parsed, this.inflateData = e2.inflateData, this.finished = e2.finished, this.simpleTransparency = e2.simpleTransparency, this.headersFinished = e2.headersFinished || function() {
    };
  };
  s.prototype.start = function() {
    this.read(r.PNG_SIGNATURE.length, this._parseSignature.bind(this));
  }, s.prototype._parseSignature = function(t2) {
    let e2 = r.PNG_SIGNATURE;
    for (let i2 = 0; i2 < e2.length; i2++) if (t2[i2] !== e2[i2]) return void this.error(new Error("Invalid file signature"));
    this.read(8, this._parseChunkBegin.bind(this));
  }, s.prototype._parseChunkBegin = function(t2) {
    let e2 = t2.readUInt32BE(0), i2 = t2.readUInt32BE(4), s2 = "";
    for (let e3 = 4; e3 < 8; e3++) s2 += String.fromCharCode(t2[e3]);
    let h = Boolean(32 & t2[4]);
    if (this._hasIHDR || i2 === r.TYPE_IHDR) {
      if (this._crc = new n(), this._crc.write(Buffer.from(s2)), this._chunks[i2]) return this._chunks[i2](e2);
      h ? this.read(e2 + 4, this._skipChunk.bind(this)) : this.error(new Error("Unsupported critical chunk type " + s2));
    } else this.error(new Error("Expected IHDR on beggining"));
  }, s.prototype._skipChunk = function() {
    this.read(8, this._parseChunkBegin.bind(this));
  }, s.prototype._handleChunkEnd = function() {
    this.read(4, this._parseChunkEnd.bind(this));
  }, s.prototype._parseChunkEnd = function(t2) {
    let e2 = t2.readInt32BE(0), i2 = this._crc.crc32();
    this._options.checkCRC && i2 !== e2 ? this.error(new Error("Crc error - " + e2 + " - " + i2)) : this._hasIEND || this.read(8, this._parseChunkBegin.bind(this));
  }, s.prototype._handleIHDR = function(t2) {
    this.read(t2, this._parseIHDR.bind(this));
  }, s.prototype._parseIHDR = function(t2) {
    this._crc.write(t2);
    let e2 = t2.readUInt32BE(0), i2 = t2.readUInt32BE(4), n2 = t2[8], s2 = t2[9], h = t2[10], o = t2[11], a = t2[12];
    if (8 !== n2 && 4 !== n2 && 2 !== n2 && 1 !== n2 && 16 !== n2) return void this.error(new Error("Unsupported bit depth " + n2));
    if (!(s2 in r.COLORTYPE_TO_BPP_MAP)) return void this.error(new Error("Unsupported color type"));
    if (0 !== h) return void this.error(new Error("Unsupported compression method"));
    if (0 !== o) return void this.error(new Error("Unsupported filter method"));
    if (0 !== a && 1 !== a) return void this.error(new Error("Unsupported interlace method"));
    this._colorType = s2;
    let l = r.COLORTYPE_TO_BPP_MAP[this._colorType];
    this._hasIHDR = true, this.metadata({ width: e2, height: i2, depth: n2, interlace: Boolean(a), palette: Boolean(s2 & r.COLORTYPE_PALETTE), color: Boolean(s2 & r.COLORTYPE_COLOR), alpha: Boolean(s2 & r.COLORTYPE_ALPHA), bpp: l, colorType: s2 }), this._handleChunkEnd();
  }, s.prototype._handlePLTE = function(t2) {
    this.read(t2, this._parsePLTE.bind(this));
  }, s.prototype._parsePLTE = function(t2) {
    this._crc.write(t2);
    let e2 = Math.floor(t2.length / 3);
    for (let i2 = 0; i2 < e2; i2++) this._palette.push([t2[3 * i2], t2[3 * i2 + 1], t2[3 * i2 + 2], 255]);
    this.palette(this._palette), this._handleChunkEnd();
  }, s.prototype._handleTRNS = function(t2) {
    this.simpleTransparency(), this.read(t2, this._parseTRNS.bind(this));
  }, s.prototype._parseTRNS = function(t2) {
    if (this._crc.write(t2), this._colorType === r.COLORTYPE_PALETTE_COLOR) {
      if (0 === this._palette.length) return void this.error(new Error("Transparency chunk must be after palette"));
      if (t2.length > this._palette.length) return void this.error(new Error("More transparent colors than palette size"));
      for (let e2 = 0; e2 < t2.length; e2++) this._palette[e2][3] = t2[e2];
      this.palette(this._palette);
    }
    this._colorType === r.COLORTYPE_GRAYSCALE && this.transColor([t2.readUInt16BE(0)]), this._colorType === r.COLORTYPE_COLOR && this.transColor([t2.readUInt16BE(0), t2.readUInt16BE(2), t2.readUInt16BE(4)]), this._handleChunkEnd();
  }, s.prototype._handleGAMA = function(t2) {
    this.read(t2, this._parseGAMA.bind(this));
  }, s.prototype._parseGAMA = function(t2) {
    this._crc.write(t2), this.gamma(t2.readUInt32BE(0) / r.GAMMA_DIVISION), this._handleChunkEnd();
  }, s.prototype._handleIDAT = function(t2) {
    this._emittedHeadersFinished || (this._emittedHeadersFinished = true, this.headersFinished()), this.read(-t2, this._parseIDAT.bind(this, t2));
  }, s.prototype._parseIDAT = function(t2, e2) {
    if (this._crc.write(e2), this._colorType === r.COLORTYPE_PALETTE_COLOR && 0 === this._palette.length) throw new Error("Expected palette not found");
    this.inflateData(e2);
    let i2 = t2 - e2.length;
    i2 > 0 ? this._handleIDAT(i2) : this._handleChunkEnd();
  }, s.prototype._handleIEND = function(t2) {
    this.read(t2, this._parseIEND.bind(this));
  }, s.prototype._parseIEND = function(t2) {
    this._crc.write(t2), this._hasIEND = true, this._handleChunkEnd(), this.finished && this.finished();
  };
}, 2707: (t) => {
  t.exports = function(t2, e, i) {
    let r = t2 + e - i, n = Math.abs(r - t2), s = Math.abs(r - e), h = Math.abs(r - i);
    return n <= s && n <= h ? t2 : s <= h ? e : i;
  };
}, 3041: (t, e, i) => {
  let r = i(4393);
  t.exports = function(t2, e2, i2, n) {
    let s = -1 !== [r.COLORTYPE_COLOR_ALPHA, r.COLORTYPE_ALPHA].indexOf(n.colorType);
    if (n.colorType === n.inputColorType) {
      let e3 = (function() {
        let t3 = new ArrayBuffer(2);
        return new DataView(t3).setInt16(0, 256, true), 256 !== new Int16Array(t3)[0];
      })();
      if (8 === n.bitDepth || 16 === n.bitDepth && e3) return t2;
    }
    let h = 16 !== n.bitDepth ? t2 : new Uint16Array(t2.buffer), o = 255, a = r.COLORTYPE_TO_BPP_MAP[n.inputColorType];
    4 !== a || n.inputHasAlpha || (a = 3);
    let l = r.COLORTYPE_TO_BPP_MAP[n.colorType];
    16 === n.bitDepth && (o = 65535, l *= 2);
    let f = Buffer.alloc(e2 * i2 * l), p = 0, d = 0, u = n.bgColor || {};
    function c() {
      let t3, e3, i3, a2 = o;
      switch (n.inputColorType) {
        case r.COLORTYPE_COLOR_ALPHA:
          a2 = h[p + 3], t3 = h[p], e3 = h[p + 1], i3 = h[p + 2];
          break;
        case r.COLORTYPE_COLOR:
          t3 = h[p], e3 = h[p + 1], i3 = h[p + 2];
          break;
        case r.COLORTYPE_ALPHA:
          a2 = h[p + 1], t3 = h[p], e3 = t3, i3 = t3;
          break;
        case r.COLORTYPE_GRAYSCALE:
          t3 = h[p], e3 = t3, i3 = t3;
          break;
        default:
          throw new Error("input color type:" + n.inputColorType + " is not supported at present");
      }
      return n.inputHasAlpha && (s || (a2 /= o, t3 = Math.min(Math.max(Math.round((1 - a2) * u.red + a2 * t3), 0), o), e3 = Math.min(Math.max(Math.round((1 - a2) * u.green + a2 * e3), 0), o), i3 = Math.min(Math.max(Math.round((1 - a2) * u.blue + a2 * i3), 0), o))), { red: t3, green: e3, blue: i3, alpha: a2 };
    }
    void 0 === u.red && (u.red = o), void 0 === u.green && (u.green = o), void 0 === u.blue && (u.blue = o);
    for (let t3 = 0; t3 < i2; t3++) for (let t4 = 0; t4 < e2; t4++) {
      let t5 = c();
      switch (n.colorType) {
        case r.COLORTYPE_COLOR_ALPHA:
        case r.COLORTYPE_COLOR:
          8 === n.bitDepth ? (f[d] = t5.red, f[d + 1] = t5.green, f[d + 2] = t5.blue, s && (f[d + 3] = t5.alpha)) : (f.writeUInt16BE(t5.red, d), f.writeUInt16BE(t5.green, d + 2), f.writeUInt16BE(t5.blue, d + 4), s && f.writeUInt16BE(t5.alpha, d + 6));
          break;
        case r.COLORTYPE_ALPHA:
        case r.COLORTYPE_GRAYSCALE: {
          let e3 = (t5.red + t5.green + t5.blue) / 3;
          8 === n.bitDepth ? (f[d] = e3, s && (f[d + 1] = t5.alpha)) : (f.writeUInt16BE(e3, d), s && f.writeUInt16BE(t5.alpha, d + 2));
          break;
        }
        default:
          throw new Error("unrecognised color Type " + n.colorType);
      }
      p += a, d += l;
    }
    return f;
  };
}, 3407: (t, e, i) => {
  let r = i(4561), n = i(4050);
  e.read = function(t2, e2) {
    return r(t2, e2 || {});
  }, e.write = function(t2, e2) {
    return n(t2, e2);
  };
}, 4050: (t, e, i) => {
  let r = true, n = i(3106);
  n.deflateSync || (r = false);
  let s = i(4393), h = i(7976);
  t.exports = function(t2, e2) {
    if (!r) throw new Error("To use the sync capability of this library in old node versions, please pin pngjs to v2.3.0");
    let i2 = new h(e2 || {}), o = [];
    o.push(Buffer.from(s.PNG_SIGNATURE)), o.push(i2.packIHDR(t2.width, t2.height)), t2.gamma && o.push(i2.packGAMA(t2.gamma));
    let a = i2.filterData(t2.data, t2.width, t2.height), l = n.deflateSync(a, i2.getDeflateOptions());
    if (a = null, !l || !l.length) throw new Error("bad png - invalid compressed data response");
    return o.push(i2.packIDAT(l)), o.push(i2.packIEND()), Buffer.concat(o);
  };
}, 4393: (t) => {
  t.exports = { PNG_SIGNATURE: [137, 80, 78, 71, 13, 10, 26, 10], TYPE_IHDR: 1229472850, TYPE_IEND: 1229278788, TYPE_IDAT: 1229209940, TYPE_PLTE: 1347179589, TYPE_tRNS: 1951551059, TYPE_gAMA: 1732332865, COLORTYPE_GRAYSCALE: 0, COLORTYPE_PALETTE: 1, COLORTYPE_COLOR: 2, COLORTYPE_ALPHA: 4, COLORTYPE_PALETTE_COLOR: 3, COLORTYPE_COLOR_ALPHA: 6, COLORTYPE_TO_BPP_MAP: { 0: 1, 2: 3, 3: 1, 4: 2, 6: 4 }, GAMMA_DIVISION: 1e5 };
}, 4561: (t, e, i) => {
  let r = true, n = i(3106), s = i(7263);
  n.deflateSync || (r = false);
  let h = i(7749), o = i(7736), a = i(1041), l = i(9626), f = i(9734);
  t.exports = function(t2, e2) {
    if (!r) throw new Error("To use the sync capability of this library in old node versions, please pin pngjs to v2.3.0");
    let i2, p, d;
    let u = [];
    let c = new h(t2), _ = new a(e2, { read: c.read.bind(c), error: function(t3) {
      i2 = t3;
    }, metadata: function(t3) {
      p = t3;
    }, gamma: function(t3) {
      d = t3;
    }, palette: function(t3) {
      p.palette = t3;
    }, transColor: function(t3) {
      p.transColor = t3;
    }, inflateData: function(t3) {
      u.push(t3);
    }, simpleTransparency: function() {
      p.alpha = true;
    } });
    if (_.start(), c.process(), i2) throw i2;
    let g, b = Buffer.concat(u);
    if (u.length = 0, p.interlace) g = n.inflateSync(b);
    else {
      let t3 = (1 + (p.width * p.bpp * p.depth + 7 >> 3)) * p.height;
      g = s(b, { chunkSize: t3, maxLength: t3 });
    }
    if (b = null, !g || !g.length) throw new Error("bad png - invalid inflate data response");
    let y = o.process(g, p);
    b = null;
    let w = l.dataToBitMap(y, p);
    y = null;
    let E = f(w, p, e2.skipRescale);
    return p.data = E, p.gamma = d || 0, p;
  };
}, 6446: (t, e, i) => {
  let r = i(8401), n = i(2707);
  function s(t2, e2, i2) {
    let r2 = t2 * e2;
    return 8 !== i2 && (r2 = Math.ceil(r2 / (8 / i2))), r2;
  }
  let h = t.exports = function(t2, e2) {
    let i2 = t2.width, n2 = t2.height, h2 = t2.interlace, o = t2.bpp, a = t2.depth;
    if (this.read = e2.read, this.write = e2.write, this.complete = e2.complete, this._imageIndex = 0, this._images = [], h2) {
      let t3 = r.getImagePasses(i2, n2);
      for (let e3 = 0; e3 < t3.length; e3++) this._images.push({ byteWidth: s(t3[e3].width, o, a), height: t3[e3].height, lineIndex: 0 });
    } else this._images.push({ byteWidth: s(i2, o, a), height: n2, lineIndex: 0 });
    this._xComparison = 8 === a ? o : 16 === a ? 2 * o : 1;
  };
  h.prototype.start = function() {
    this.read(this._images[this._imageIndex].byteWidth + 1, this._reverseFilterLine.bind(this));
  }, h.prototype._unFilterType1 = function(t2, e2, i2) {
    let r2 = this._xComparison, n2 = r2 - 1;
    for (let s2 = 0; s2 < i2; s2++) {
      let i3 = t2[1 + s2], h2 = s2 > n2 ? e2[s2 - r2] : 0;
      e2[s2] = i3 + h2;
    }
  }, h.prototype._unFilterType2 = function(t2, e2, i2) {
    let r2 = this._lastLine;
    for (let n2 = 0; n2 < i2; n2++) {
      let i3 = t2[1 + n2], s2 = r2 ? r2[n2] : 0;
      e2[n2] = i3 + s2;
    }
  }, h.prototype._unFilterType3 = function(t2, e2, i2) {
    let r2 = this._xComparison, n2 = r2 - 1, s2 = this._lastLine;
    for (let h2 = 0; h2 < i2; h2++) {
      let i3 = t2[1 + h2], o = s2 ? s2[h2] : 0, a = h2 > n2 ? e2[h2 - r2] : 0, l = Math.floor((a + o) / 2);
      e2[h2] = i3 + l;
    }
  }, h.prototype._unFilterType4 = function(t2, e2, i2) {
    let r2 = this._xComparison, s2 = r2 - 1, h2 = this._lastLine;
    for (let o = 0; o < i2; o++) {
      let i3 = t2[1 + o], a = h2 ? h2[o] : 0, l = o > s2 ? e2[o - r2] : 0, f = o > s2 && h2 ? h2[o - r2] : 0, p = n(l, a, f);
      e2[o] = i3 + p;
    }
  }, h.prototype._reverseFilterLine = function(t2) {
    let e2, i2 = t2[0], r2 = this._images[this._imageIndex], n2 = r2.byteWidth;
    if (0 === i2) e2 = t2.slice(1, n2 + 1);
    else switch (e2 = Buffer.alloc(n2), i2) {
      case 1:
        this._unFilterType1(t2, e2, n2);
        break;
      case 2:
        this._unFilterType2(t2, e2, n2);
        break;
      case 3:
        this._unFilterType3(t2, e2, n2);
        break;
      case 4:
        this._unFilterType4(t2, e2, n2);
        break;
      default:
        throw new Error("Unrecognised filter type - " + i2);
    }
    this.write(e2), r2.lineIndex++, r2.lineIndex >= r2.height ? (this._lastLine = null, this._imageIndex++, r2 = this._images[this._imageIndex]) : this._lastLine = e2, r2 ? this.read(r2.byteWidth + 1, this._reverseFilterLine.bind(this)) : (this._lastLine = null, this.complete());
  };
}, 7263: (t, e, i) => {
  let r = i(2613).ok, n = i(3106), s = i(9023), h = i(181).kMaxLength;
  function o(t2) {
    if (!(this instanceof o)) return new o(t2);
    t2 && t2.chunkSize < n.Z_MIN_CHUNK && (t2.chunkSize = n.Z_MIN_CHUNK), n.Inflate.call(this, t2), this._offset = void 0 === this._offset ? this._outOffset : this._offset, this._buffer = this._buffer || this._outBuffer, t2 && null != t2.maxLength && (this._maxLength = t2.maxLength);
  }
  function a(t2, e2) {
    e2 && process.nextTick(e2), t2._handle && (t2._handle.close(), t2._handle = null);
  }
  function l(t2, e2) {
    return (function(t3, e3) {
      if ("string" == typeof e3 && (e3 = Buffer.from(e3)), !(e3 instanceof Buffer)) throw new TypeError("Not a string or buffer");
      let i2 = t3._finishFlushFlag;
      return null == i2 && (i2 = n.Z_FINISH), t3._processChunk(e3, i2);
    })(new o(e2), t2);
  }
  o.prototype._processChunk = function(t2, e2, i2) {
    if ("function" == typeof i2) return n.Inflate._processChunk.call(this, t2, e2, i2);
    let s2, o2, l2 = this, f = t2 && t2.length, p = this._chunkSize - this._offset, d = this._maxLength, u = 0, c = [], _ = 0;
    function g(t3, e3) {
      if (l2._hadError) return;
      let i3 = p - e3;
      if (r(i3 >= 0, "have should not go down"), i3 > 0) {
        let t4 = l2._buffer.slice(l2._offset, l2._offset + i3);
        if (l2._offset += i3, t4.length > d && (t4 = t4.slice(0, d)), c.push(t4), _ += t4.length, d -= t4.length, 0 === d) return false;
      }
      return (0 === e3 || l2._offset >= l2._chunkSize) && (p = l2._chunkSize, l2._offset = 0, l2._buffer = Buffer.allocUnsafe(l2._chunkSize)), 0 === e3 && (u += f - t3, f = t3, true);
    }
    this.on("error", function(t3) {
      s2 = t3;
    }), r(this._handle, "zlib binding closed");
    do {
      o2 = this._handle.writeSync(e2, t2, u, f, this._buffer, this._offset, p), o2 = o2 || this._writeState;
    } while (!this._hadError && g(o2[0], o2[1]));
    if (this._hadError) throw s2;
    if (_ >= h) throw a(this), new RangeError("Cannot create final Buffer. It would be larger than 0x" + h.toString(16) + " bytes");
    let b = Buffer.concat(c, _);
    return a(this), b;
  }, s.inherits(o, n.Inflate), t.exports = e = l, e.Inflate = o, e.createInflate = function(t2) {
    return new o(t2);
  }, e.inflateSync = l;
}, 7559: (t, e, i) => {
  let r = i(9023), n = i(2203), s = i(9568), h = i(8409), o = i(3407), a = e.O = function(t2) {
    n.call(this), t2 = t2 || {}, this.width = 0 | t2.width, this.height = 0 | t2.height, this.data = this.width > 0 && this.height > 0 ? Buffer.alloc(4 * this.width * this.height) : null, t2.fill && this.data && this.data.fill(0), this.gamma = 0, this.readable = this.writable = true, this._parser = new s(t2), this._parser.on("error", this.emit.bind(this, "error")), this._parser.on("close", this._handleClose.bind(this)), this._parser.on("metadata", this._metadata.bind(this)), this._parser.on("gamma", this._gamma.bind(this)), this._parser.on("parsed", function(t3) {
      this.data = t3, this.emit("parsed", t3);
    }.bind(this)), this._packer = new h(t2), this._packer.on("data", this.emit.bind(this, "data")), this._packer.on("end", this.emit.bind(this, "end")), this._parser.on("close", this._handleClose.bind(this)), this._packer.on("error", this.emit.bind(this, "error"));
  };
  r.inherits(a, n), a.sync = o, a.prototype.pack = function() {
    return this.data && this.data.length ? (process.nextTick(function() {
      this._packer.pack(this.data, this.width, this.height, this.gamma);
    }.bind(this)), this) : (this.emit("error", "No data provided"), this);
  }, a.prototype.parse = function(t2, e2) {
    if (e2) {
      let t3, i2;
      t3 = function(t4) {
        this.removeListener("error", i2), this.data = t4, e2(null, this);
      }.bind(this), i2 = function(i3) {
        this.removeListener("parsed", t3), e2(i3, null);
      }.bind(this), this.once("parsed", t3), this.once("error", i2);
    }
    return this.end(t2), this;
  }, a.prototype.write = function(t2) {
    return this._parser.write(t2), true;
  }, a.prototype.end = function(t2) {
    this._parser.end(t2);
  }, a.prototype._metadata = function(t2) {
    this.width = t2.width, this.height = t2.height, this.emit("metadata", t2);
  }, a.prototype._gamma = function(t2) {
    this.gamma = t2;
  }, a.prototype._handleClose = function() {
    this._parser.writable || this._packer.readable || this.emit("close");
  }, a.bitblt = function(t2, e2, i2, r2, n2, s2, h2, o2) {
    if (r2 |= 0, n2 |= 0, s2 |= 0, h2 |= 0, o2 |= 0, (i2 |= 0) > t2.width || r2 > t2.height || i2 + n2 > t2.width || r2 + s2 > t2.height) throw new Error("bitblt reading outside image");
    if (h2 > e2.width || o2 > e2.height || h2 + n2 > e2.width || o2 + s2 > e2.height) throw new Error("bitblt writing outside image");
    for (let a2 = 0; a2 < s2; a2++) t2.data.copy(e2.data, (o2 + a2) * e2.width + h2 << 2, (r2 + a2) * t2.width + i2 << 2, (r2 + a2) * t2.width + i2 + n2 << 2);
  }, a.prototype.bitblt = function(t2, e2, i2, r2, n2, s2, h2) {
    return a.bitblt(this, t2, e2, i2, r2, n2, s2, h2), this;
  }, a.adjustGamma = function(t2) {
    if (t2.gamma) {
      for (let e2 = 0; e2 < t2.height; e2++) for (let i2 = 0; i2 < t2.width; i2++) {
        let r2 = t2.width * e2 + i2 << 2;
        for (let e3 = 0; e3 < 3; e3++) {
          let i3 = t2.data[r2 + e3] / 255;
          i3 = Math.pow(i3, 1 / 2.2 / t2.gamma), t2.data[r2 + e3] = Math.round(255 * i3);
        }
      }
      t2.gamma = 0;
    }
  }, a.prototype.adjustGamma = function() {
    a.adjustGamma(this);
  };
}, 7621: (t, e, i) => {
  i.r(e), i.d(e, { PNGColorType: () => n, PNGFilterType: () => r, default: () => h });
  var r, n, s = i(7559);
  function h() {
    return { mime: "image/png", hasAlpha: true, encode: (t2, { deflateLevel: e2 = 9, deflateStrategy: i2 = 3, filterType: h2 = r.AUTO, colorType: o, inputHasAlpha: a = true, ...l } = {}) => {
      const f = new s.O({ width: t2.width, height: t2.height });
      return f.data = t2.data, s.O.sync.write(f, { ...l, deflateLevel: e2, deflateStrategy: i2, filterType: h2, colorType: void 0 !== o ? o : a ? n.COLOR_ALPHA : n.COLOR, inputHasAlpha: a });
    }, decode: (t2, e2) => {
      const i2 = s.O.sync.read(t2, e2);
      return { data: i2.data, width: i2.width, height: i2.height };
    } };
  }
  !(function(t2) {
    t2[t2.AUTO = -1] = "AUTO", t2[t2.NONE = 0] = "NONE", t2[t2.SUB = 1] = "SUB", t2[t2.UP = 2] = "UP", t2[t2.AVERAGE = 3] = "AVERAGE", t2[t2.PATH = 4] = "PATH";
  })(r || (r = {})), (function(t2) {
    t2[t2.GRAYSCALE = 0] = "GRAYSCALE", t2[t2.COLOR = 2] = "COLOR", t2[t2.GRAYSCALE_ALPHA = 4] = "GRAYSCALE_ALPHA", t2[t2.COLOR_ALPHA = 6] = "COLOR_ALPHA";
  })(n || (n = {}));
}, 7736: (t, e, i) => {
  let r = i(7749), n = i(6446);
  e.process = function(t2, e2) {
    let i2 = [], s = new r(t2);
    return new n(e2, { read: s.read.bind(s), write: function(t3) {
      i2.push(t3);
    }, complete: function() {
    } }).start(), s.process(), Buffer.concat(i2);
  };
}, 7749: (t) => {
  let e = t.exports = function(t2) {
    this._buffer = t2, this._reads = [];
  };
  e.prototype.read = function(t2, e2) {
    this._reads.push({ length: Math.abs(t2), allowLess: t2 < 0, func: e2 });
  }, e.prototype.process = function() {
    for (; this._reads.length > 0 && this._buffer.length; ) {
      let t2 = this._reads[0];
      if (!this._buffer.length || !(this._buffer.length >= t2.length || t2.allowLess)) break;
      {
        this._reads.shift();
        let e2 = this._buffer;
        this._buffer = e2.slice(t2.length), t2.func.call(this, e2.slice(0, t2.length));
      }
    }
    if (this._reads.length > 0) throw new Error("There are some read requests waitng on finished stream");
    if (this._buffer.length > 0) throw new Error("unrecognised content at end of stream");
  };
}, 7976: (t, e, i) => {
  let r = i(4393), n = i(8102), s = i(3041), h = i(8056), o = i(3106), a = t.exports = function(t2) {
    if (this._options = t2, t2.deflateChunkSize = t2.deflateChunkSize || 32768, t2.deflateLevel = null != t2.deflateLevel ? t2.deflateLevel : 9, t2.deflateStrategy = null != t2.deflateStrategy ? t2.deflateStrategy : 3, t2.inputHasAlpha = null == t2.inputHasAlpha || t2.inputHasAlpha, t2.deflateFactory = t2.deflateFactory || o.createDeflate, t2.bitDepth = t2.bitDepth || 8, t2.colorType = "number" == typeof t2.colorType ? t2.colorType : r.COLORTYPE_COLOR_ALPHA, t2.inputColorType = "number" == typeof t2.inputColorType ? t2.inputColorType : r.COLORTYPE_COLOR_ALPHA, -1 === [r.COLORTYPE_GRAYSCALE, r.COLORTYPE_COLOR, r.COLORTYPE_COLOR_ALPHA, r.COLORTYPE_ALPHA].indexOf(t2.colorType)) throw new Error("option color type:" + t2.colorType + " is not supported at present");
    if (-1 === [r.COLORTYPE_GRAYSCALE, r.COLORTYPE_COLOR, r.COLORTYPE_COLOR_ALPHA, r.COLORTYPE_ALPHA].indexOf(t2.inputColorType)) throw new Error("option input color type:" + t2.inputColorType + " is not supported at present");
    if (8 !== t2.bitDepth && 16 !== t2.bitDepth) throw new Error("option bit depth:" + t2.bitDepth + " is not supported at present");
  };
  a.prototype.getDeflateOptions = function() {
    return { chunkSize: this._options.deflateChunkSize, level: this._options.deflateLevel, strategy: this._options.deflateStrategy };
  }, a.prototype.createDeflate = function() {
    return this._options.deflateFactory(this.getDeflateOptions());
  }, a.prototype.filterData = function(t2, e2, i2) {
    let n2 = s(t2, e2, i2, this._options), o2 = r.COLORTYPE_TO_BPP_MAP[this._options.colorType];
    return h(n2, e2, i2, this._options, o2);
  }, a.prototype._packChunk = function(t2, e2) {
    let i2 = e2 ? e2.length : 0, r2 = Buffer.alloc(i2 + 12);
    return r2.writeUInt32BE(i2, 0), r2.writeUInt32BE(t2, 4), e2 && e2.copy(r2, 8), r2.writeInt32BE(n.crc32(r2.slice(4, r2.length - 4)), r2.length - 4), r2;
  }, a.prototype.packGAMA = function(t2) {
    let e2 = Buffer.alloc(4);
    return e2.writeUInt32BE(Math.floor(t2 * r.GAMMA_DIVISION), 0), this._packChunk(r.TYPE_gAMA, e2);
  }, a.prototype.packIHDR = function(t2, e2) {
    let i2 = Buffer.alloc(13);
    return i2.writeUInt32BE(t2, 0), i2.writeUInt32BE(e2, 4), i2[8] = this._options.bitDepth, i2[9] = this._options.colorType, i2[10] = 0, i2[11] = 0, i2[12] = 0, this._packChunk(r.TYPE_IHDR, i2);
  }, a.prototype.packIDAT = function(t2) {
    return this._packChunk(r.TYPE_IDAT, t2);
  }, a.prototype.packIEND = function() {
    return this._packChunk(r.TYPE_IEND, null);
  };
}, 8056: (t, e, i) => {
  let r = i(2707);
  let n = { 0: function(t2, e2, i2, r2, n2) {
    for (let s2 = 0; s2 < i2; s2++) r2[n2 + s2] = t2[e2 + s2];
  }, 1: function(t2, e2, i2, r2, n2, s2) {
    for (let h = 0; h < i2; h++) {
      let i3 = h >= s2 ? t2[e2 + h - s2] : 0, o = t2[e2 + h] - i3;
      r2[n2 + h] = o;
    }
  }, 2: function(t2, e2, i2, r2, n2) {
    for (let s2 = 0; s2 < i2; s2++) {
      let h = e2 > 0 ? t2[e2 + s2 - i2] : 0, o = t2[e2 + s2] - h;
      r2[n2 + s2] = o;
    }
  }, 3: function(t2, e2, i2, r2, n2, s2) {
    for (let h = 0; h < i2; h++) {
      let o = h >= s2 ? t2[e2 + h - s2] : 0, a = e2 > 0 ? t2[e2 + h - i2] : 0, l = t2[e2 + h] - (o + a >> 1);
      r2[n2 + h] = l;
    }
  }, 4: function(t2, e2, i2, n2, s2, h) {
    for (let o = 0; o < i2; o++) {
      let a = o >= h ? t2[e2 + o - h] : 0, l = e2 > 0 ? t2[e2 + o - i2] : 0, f = e2 > 0 && o >= h ? t2[e2 + o - (i2 + h)] : 0, p = t2[e2 + o] - r(a, l, f);
      n2[s2 + o] = p;
    }
  } }, s = { 0: function(t2, e2, i2) {
    let r2 = 0, n2 = e2 + i2;
    for (let i3 = e2; i3 < n2; i3++) r2 += Math.abs(t2[i3]);
    return r2;
  }, 1: function(t2, e2, i2, r2) {
    let n2 = 0;
    for (let s2 = 0; s2 < i2; s2++) {
      let i3 = s2 >= r2 ? t2[e2 + s2 - r2] : 0, h = t2[e2 + s2] - i3;
      n2 += Math.abs(h);
    }
    return n2;
  }, 2: function(t2, e2, i2) {
    let r2 = 0, n2 = e2 + i2;
    for (let s2 = e2; s2 < n2; s2++) {
      let n3 = e2 > 0 ? t2[s2 - i2] : 0, h = t2[s2] - n3;
      r2 += Math.abs(h);
    }
    return r2;
  }, 3: function(t2, e2, i2, r2) {
    let n2 = 0;
    for (let s2 = 0; s2 < i2; s2++) {
      let h = s2 >= r2 ? t2[e2 + s2 - r2] : 0, o = e2 > 0 ? t2[e2 + s2 - i2] : 0, a = t2[e2 + s2] - (h + o >> 1);
      n2 += Math.abs(a);
    }
    return n2;
  }, 4: function(t2, e2, i2, n2) {
    let s2 = 0;
    for (let h = 0; h < i2; h++) {
      let o = h >= n2 ? t2[e2 + h - n2] : 0, a = e2 > 0 ? t2[e2 + h - i2] : 0, l = e2 > 0 && h >= n2 ? t2[e2 + h - (i2 + n2)] : 0, f = t2[e2 + h] - r(o, a, l);
      s2 += Math.abs(f);
    }
    return s2;
  } };
  t.exports = function(t2, e2, i2, r2, h) {
    let o;
    if ("filterType" in r2 && -1 !== r2.filterType) {
      if ("number" != typeof r2.filterType) throw new Error("unrecognised filter types");
      o = [r2.filterType];
    } else o = [0, 1, 2, 3, 4];
    16 === r2.bitDepth && (h *= 2);
    let a = e2 * h, l = 0, f = 0, p = Buffer.alloc((a + 1) * i2), d = o[0];
    for (let e3 = 0; e3 < i2; e3++) {
      if (o.length > 1) {
        let e4 = 1 / 0;
        for (let i3 = 0; i3 < o.length; i3++) {
          let r3 = s[o[i3]](t2, f, a, h);
          r3 < e4 && (d = o[i3], e4 = r3);
        }
      }
      p[l] = d, l++, n[d](t2, f, a, p, l, h), l += a, f += a;
    }
    return p;
  };
}, 8102: (t) => {
  let e = [];
  !(function() {
    for (let t2 = 0; t2 < 256; t2++) {
      let i2 = t2;
      for (let t3 = 0; t3 < 8; t3++) 1 & i2 ? i2 = 3988292384 ^ i2 >>> 1 : i2 >>>= 1;
      e[t2] = i2;
    }
  })();
  let i = t.exports = function() {
    this._crc = -1;
  };
  i.prototype.write = function(t2) {
    for (let i2 = 0; i2 < t2.length; i2++) this._crc = e[255 & (this._crc ^ t2[i2])] ^ this._crc >>> 8;
    return true;
  }, i.prototype.crc32 = function() {
    return -1 ^ this._crc;
  }, i.crc32 = function(t2) {
    let i2 = -1;
    for (let r = 0; r < t2.length; r++) i2 = e[255 & (i2 ^ t2[r])] ^ i2 >>> 8;
    return -1 ^ i2;
  };
}, 8401: (t, e) => {
  let i = [{ x: [0], y: [0] }, { x: [4], y: [0] }, { x: [0, 4], y: [4] }, { x: [2, 6], y: [0, 4] }, { x: [0, 2, 4, 6], y: [2, 6] }, { x: [1, 3, 5, 7], y: [0, 2, 4, 6] }, { x: [0, 1, 2, 3, 4, 5, 6, 7], y: [1, 3, 5, 7] }];
  e.getImagePasses = function(t2, e2) {
    let r = [], n = t2 % 8, s = e2 % 8, h = (t2 - n) / 8, o = (e2 - s) / 8;
    for (let t3 = 0; t3 < i.length; t3++) {
      let e3 = i[t3], a = h * e3.x.length, l = o * e3.y.length;
      for (let t4 = 0; t4 < e3.x.length && e3.x[t4] < n; t4++) a++;
      for (let t4 = 0; t4 < e3.y.length && e3.y[t4] < s; t4++) l++;
      a > 0 && l > 0 && r.push({ width: a, height: l, index: t3 });
    }
    return r;
  }, e.getInterlaceIterator = function(t2) {
    return function(e2, r, n) {
      let s = e2 % i[n].x.length, h = (e2 - s) / i[n].x.length * 8 + i[n].x[s], o = r % i[n].y.length;
      return 4 * h + ((r - o) / i[n].y.length * 8 + i[n].y[o]) * t2 * 4;
    };
  };
}, 8409: (t, e, i) => {
  let r = i(9023), n = i(2203), s = i(4393), h = i(7976), o = t.exports = function(t2) {
    n.call(this);
    let e2 = t2 || {};
    this._packer = new h(e2), this._deflate = this._packer.createDeflate(), this.readable = true;
  };
  r.inherits(o, n), o.prototype.pack = function(t2, e2, i2, r2) {
    this.emit("data", Buffer.from(s.PNG_SIGNATURE)), this.emit("data", this._packer.packIHDR(e2, i2)), r2 && this.emit("data", this._packer.packGAMA(r2));
    let n2 = this._packer.filterData(t2, e2, i2);
    this._deflate.on("error", this.emit.bind(this, "error")), this._deflate.on("data", function(t3) {
      this.emit("data", this._packer.packIDAT(t3));
    }.bind(this)), this._deflate.on("end", function() {
      this.emit("data", this._packer.packIEND()), this.emit("end");
    }.bind(this)), this._deflate.end(n2);
  };
}, 9233: (t, e, i) => {
  let r = i(9023), n = i(2203), s = t.exports = function() {
    n.call(this), this._buffers = [], this._buffered = 0, this._reads = [], this._paused = false, this._encoding = "utf8", this.writable = true;
  };
  r.inherits(s, n), s.prototype.read = function(t2, e2) {
    this._reads.push({ length: Math.abs(t2), allowLess: t2 < 0, func: e2 }), process.nextTick(function() {
      this._process(), this._paused && this._reads && this._reads.length > 0 && (this._paused = false, this.emit("drain"));
    }.bind(this));
  }, s.prototype.write = function(t2, e2) {
    if (!this.writable) return this.emit("error", new Error("Stream not writable")), false;
    let i2;
    return i2 = Buffer.isBuffer(t2) ? t2 : Buffer.from(t2, e2 || this._encoding), this._buffers.push(i2), this._buffered += i2.length, this._process(), this._reads && 0 === this._reads.length && (this._paused = true), this.writable && !this._paused;
  }, s.prototype.end = function(t2, e2) {
    t2 && this.write(t2, e2), this.writable = false, this._buffers && (0 === this._buffers.length ? this._end() : (this._buffers.push(null), this._process()));
  }, s.prototype.destroySoon = s.prototype.end, s.prototype._end = function() {
    this._reads.length > 0 && this.emit("error", new Error("Unexpected end of input")), this.destroy();
  }, s.prototype.destroy = function() {
    this._buffers && (this.writable = false, this._reads = null, this._buffers = null, this.emit("close"));
  }, s.prototype._processReadAllowingLess = function(t2) {
    this._reads.shift();
    let e2 = this._buffers[0];
    e2.length > t2.length ? (this._buffered -= t2.length, this._buffers[0] = e2.slice(t2.length), t2.func.call(this, e2.slice(0, t2.length))) : (this._buffered -= e2.length, this._buffers.shift(), t2.func.call(this, e2));
  }, s.prototype._processRead = function(t2) {
    this._reads.shift();
    let e2 = 0, i2 = 0, r2 = Buffer.alloc(t2.length);
    for (; e2 < t2.length; ) {
      let n2 = this._buffers[i2++], s2 = Math.min(n2.length, t2.length - e2);
      n2.copy(r2, e2, 0, s2), e2 += s2, s2 !== n2.length && (this._buffers[--i2] = n2.slice(s2));
    }
    i2 > 0 && this._buffers.splice(0, i2), this._buffered -= t2.length, t2.func.call(this, r2);
  }, s.prototype._process = function() {
    try {
      for (; this._buffered > 0 && this._reads && this._reads.length > 0; ) {
        let t2 = this._reads[0];
        if (t2.allowLess) this._processReadAllowingLess(t2);
        else {
          if (!(this._buffered >= t2.length)) break;
          this._processRead(t2);
        }
      }
      this._buffers && !this.writable && this._end();
    } catch (t2) {
      this.emit("error", t2);
    }
  };
}, 9568: (t, e, i) => {
  let r = i(9023), n = i(3106), s = i(9233), h = i(795), o = i(1041), a = i(9626), l = i(9734), f = t.exports = function(t2) {
    s.call(this), this._parser = new o(t2, { read: this.read.bind(this), error: this._handleError.bind(this), metadata: this._handleMetaData.bind(this), gamma: this.emit.bind(this, "gamma"), palette: this._handlePalette.bind(this), transColor: this._handleTransColor.bind(this), finished: this._finished.bind(this), inflateData: this._inflateData.bind(this), simpleTransparency: this._simpleTransparency.bind(this), headersFinished: this._headersFinished.bind(this) }), this._options = t2, this.writable = true, this._parser.start();
  };
  r.inherits(f, s), f.prototype._handleError = function(t2) {
    this.emit("error", t2), this.writable = false, this.destroy(), this._inflate && this._inflate.destroy && this._inflate.destroy(), this._filter && (this._filter.destroy(), this._filter.on("error", function() {
    })), this.errord = true;
  }, f.prototype._inflateData = function(t2) {
    if (!this._inflate) if (this._bitmapInfo.interlace) this._inflate = n.createInflate(), this._inflate.on("error", this.emit.bind(this, "error")), this._filter.on("complete", this._complete.bind(this)), this._inflate.pipe(this._filter);
    else {
      let t3 = (1 + (this._bitmapInfo.width * this._bitmapInfo.bpp * this._bitmapInfo.depth + 7 >> 3)) * this._bitmapInfo.height, e2 = Math.max(t3, n.Z_MIN_CHUNK);
      this._inflate = n.createInflate({ chunkSize: e2 });
      let i2 = t3, r2 = this.emit.bind(this, "error");
      this._inflate.on("error", function(t4) {
        i2 && r2(t4);
      }), this._filter.on("complete", this._complete.bind(this));
      let s2 = this._filter.write.bind(this._filter);
      this._inflate.on("data", function(t4) {
        i2 && (t4.length > i2 && (t4 = t4.slice(0, i2)), i2 -= t4.length, s2(t4));
      }), this._inflate.on("end", this._filter.end.bind(this._filter));
    }
    this._inflate.write(t2);
  }, f.prototype._handleMetaData = function(t2) {
    this._metaData = t2, this._bitmapInfo = Object.create(t2), this._filter = new h(this._bitmapInfo);
  }, f.prototype._handleTransColor = function(t2) {
    this._bitmapInfo.transColor = t2;
  }, f.prototype._handlePalette = function(t2) {
    this._bitmapInfo.palette = t2;
  }, f.prototype._simpleTransparency = function() {
    this._metaData.alpha = true;
  }, f.prototype._headersFinished = function() {
    this.emit("metadata", this._metaData);
  }, f.prototype._finished = function() {
    this.errord || (this._inflate ? this._inflate.end() : this.emit("error", "No Inflate block"));
  }, f.prototype._complete = function(t2) {
    if (this.errord) return;
    let e2;
    try {
      let i2 = a.dataToBitMap(t2, this._bitmapInfo);
      e2 = l(i2, this._bitmapInfo, this._options.skipRescale), i2 = null;
    } catch (t3) {
      return void this._handleError(t3);
    }
    this.emit("parsed", e2);
  };
}, 9626: (t, e, i) => {
  let r = i(8401), n = [function() {
  }, function(t2, e2, i2, r2) {
    if (r2 === e2.length) throw new Error("Ran out of data");
    let n2 = e2[r2];
    t2[i2] = n2, t2[i2 + 1] = n2, t2[i2 + 2] = n2, t2[i2 + 3] = 255;
  }, function(t2, e2, i2, r2) {
    if (r2 + 1 >= e2.length) throw new Error("Ran out of data");
    let n2 = e2[r2];
    t2[i2] = n2, t2[i2 + 1] = n2, t2[i2 + 2] = n2, t2[i2 + 3] = e2[r2 + 1];
  }, function(t2, e2, i2, r2) {
    if (r2 + 2 >= e2.length) throw new Error("Ran out of data");
    t2[i2] = e2[r2], t2[i2 + 1] = e2[r2 + 1], t2[i2 + 2] = e2[r2 + 2], t2[i2 + 3] = 255;
  }, function(t2, e2, i2, r2) {
    if (r2 + 3 >= e2.length) throw new Error("Ran out of data");
    t2[i2] = e2[r2], t2[i2 + 1] = e2[r2 + 1], t2[i2 + 2] = e2[r2 + 2], t2[i2 + 3] = e2[r2 + 3];
  }], s = [function() {
  }, function(t2, e2, i2, r2) {
    let n2 = e2[0];
    t2[i2] = n2, t2[i2 + 1] = n2, t2[i2 + 2] = n2, t2[i2 + 3] = r2;
  }, function(t2, e2, i2) {
    let r2 = e2[0];
    t2[i2] = r2, t2[i2 + 1] = r2, t2[i2 + 2] = r2, t2[i2 + 3] = e2[1];
  }, function(t2, e2, i2, r2) {
    t2[i2] = e2[0], t2[i2 + 1] = e2[1], t2[i2 + 2] = e2[2], t2[i2 + 3] = r2;
  }, function(t2, e2, i2) {
    t2[i2] = e2[0], t2[i2 + 1] = e2[1], t2[i2 + 2] = e2[2], t2[i2 + 3] = e2[3];
  }];
  function h(t2, e2, i2, r2, s2, h2) {
    let o2 = t2.width, a = t2.height, l = t2.index;
    for (let t3 = 0; t3 < a; t3++) for (let a2 = 0; a2 < o2; a2++) {
      let o3 = i2(a2, t3, l);
      n[r2](e2, s2, o3, h2), h2 += r2;
    }
    return h2;
  }
  function o(t2, e2, i2, r2, n2, h2) {
    let o2 = t2.width, a = t2.height, l = t2.index;
    for (let t3 = 0; t3 < a; t3++) {
      for (let a2 = 0; a2 < o2; a2++) {
        let o3 = n2.get(r2), f = i2(a2, t3, l);
        s[r2](e2, o3, f, h2);
      }
      n2.resetAfterLine();
    }
  }
  e.dataToBitMap = function(t2, e2) {
    let i2, n2, s2 = e2.width, a = e2.height, l = e2.depth, f = e2.bpp, p = e2.interlace;
    8 !== l && (i2 = /* @__PURE__ */ (function(t3, e3) {
      let i3 = [], r2 = 0;
      function n3() {
        if (r2 === t3.length) throw new Error("Ran out of data");
        let n4, s3, h2, o2, a2, l2, f2, p2, d2 = t3[r2];
        switch (r2++, e3) {
          default:
            throw new Error("unrecognised depth");
          case 16:
            f2 = t3[r2], r2++, i3.push((d2 << 8) + f2);
            break;
          case 4:
            f2 = 15 & d2, p2 = d2 >> 4, i3.push(p2, f2);
            break;
          case 2:
            a2 = 3 & d2, l2 = d2 >> 2 & 3, f2 = d2 >> 4 & 3, p2 = d2 >> 6 & 3, i3.push(p2, f2, l2, a2);
            break;
          case 1:
            n4 = 1 & d2, s3 = d2 >> 1 & 1, h2 = d2 >> 2 & 1, o2 = d2 >> 3 & 1, a2 = d2 >> 4 & 1, l2 = d2 >> 5 & 1, f2 = d2 >> 6 & 1, p2 = d2 >> 7 & 1, i3.push(p2, f2, l2, a2, o2, h2, s3, n4);
        }
      }
      return { get: function(t4) {
        for (; i3.length < t4; ) n3();
        let e4 = i3.slice(0, t4);
        return i3 = i3.slice(t4), e4;
      }, resetAfterLine: function() {
        i3.length = 0;
      }, end: function() {
        if (r2 !== t3.length) throw new Error("extra data found");
      } };
    })(t2, l)), n2 = l <= 8 ? Buffer.alloc(s2 * a * 4) : new Uint16Array(s2 * a * 4);
    let d, u, c = Math.pow(2, l) - 1, _ = 0;
    if (p) d = r.getImagePasses(s2, a), u = r.getInterlaceIterator(s2, a);
    else {
      let t3 = 0;
      u = function() {
        let e3 = t3;
        return t3 += 4, e3;
      }, d = [{ width: s2, height: a }];
    }
    for (let e3 = 0; e3 < d.length; e3++) 8 === l ? _ = h(d[e3], n2, u, f, t2, _) : o(d[e3], n2, u, f, i2, c);
    if (8 === l) {
      if (_ !== t2.length) throw new Error("extra data found");
    } else i2.end();
    return n2;
  };
}, 9734: (t) => {
  t.exports = function(t2, e, i = false) {
    let r = e.depth, n = e.width, s = e.height, h = e.colorType, o = e.transColor, a = e.palette, l = t2;
    return 3 === h ? (function(t3, e2, i2, r2, n2) {
      let s2 = 0;
      for (let h2 = 0; h2 < r2; h2++) for (let r3 = 0; r3 < i2; r3++) {
        let i3 = n2[t3[s2]];
        if (!i3) throw new Error("index " + t3[s2] + " not in palette");
        for (let t4 = 0; t4 < 4; t4++) e2[s2 + t4] = i3[t4];
        s2 += 4;
      }
    })(t2, l, n, s, a) : (o && (function(t3, e2, i2, r2, n2) {
      let s2 = 0;
      for (let h2 = 0; h2 < r2; h2++) for (let r3 = 0; r3 < i2; r3++) {
        let i3 = false;
        if (1 === n2.length ? n2[0] === t3[s2] && (i3 = true) : n2[0] === t3[s2] && n2[1] === t3[s2 + 1] && n2[2] === t3[s2 + 2] && (i3 = true), i3) for (let t4 = 0; t4 < 4; t4++) e2[s2 + t4] = 0;
        s2 += 4;
      }
    })(t2, l, n, s, o), 8 === r || i || (16 === r && (l = Buffer.alloc(n * s * 4)), (function(t3, e2, i2, r2, n2) {
      let s2 = Math.pow(2, n2) - 1, h2 = 0;
      for (let n3 = 0; n3 < r2; n3++) for (let r3 = 0; r3 < i2; r3++) {
        for (let i3 = 0; i3 < 4; i3++) e2[h2 + i3] = Math.floor(255 * t3[h2 + i3] / s2 + 0.5);
        h2 += 4;
      }
    })(t2, l, n, s, r))), l;
  };
} };
