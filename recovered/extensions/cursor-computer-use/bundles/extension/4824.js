// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 4824 range:446007..469910
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4824: (e2, n2, t2) => {
    var a2 = t2(9896), s2 = t2(3106), o2 = t2(4101), r = t2(9023), i = t2(4434).EventEmitter, A = t2(2203).Transform, c = t2(2203).PassThrough, l = t2(2203).Writable;
    const d = "function" == typeof s2.crc32 ? s2.crc32 : t2(443);
    function m(e3, n3, t3) {
      "function" == typeof n3 && (t3 = n3, n3 = null), null == n3 && (n3 = {}), null == n3.autoClose && (n3.autoClose = true), null == n3.lazyEntries && (n3.lazyEntries = false), null == n3.decodeStrings && (n3.decodeStrings = true), null == n3.validateEntrySizes && (n3.validateEntrySizes = true), null == n3.strictFileNames && (n3.strictFileNames = false), null == t3 && (t3 = M), a2.open(e3, "r", function(e4, s3) {
        if (e4) return t3(e4);
        u(s3, n3, function(e5, n4) {
          e5 && a2.close(s3, M), t3(e5, n4);
        });
      });
    }
    function u(e3, n3, t3) {
      "function" == typeof n3 && (t3 = n3, n3 = null), null == n3 && (n3 = {}), null == n3.autoClose && (n3.autoClose = false), null == n3.lazyEntries && (n3.lazyEntries = false), null == n3.decodeStrings && (n3.decodeStrings = true), null == n3.validateEntrySizes && (n3.validateEntrySizes = true), null == n3.strictFileNames && (n3.strictFileNames = false), null == t3 && (t3 = M), a2.fstat(e3, function(a3, s3) {
        if (a3) return t3(a3);
        p(new o2.FdSlicer(e3), s3.size, n3, t3);
      });
    }
    function g(e3, n3, t3) {
      "function" == typeof n3 && (t3 = n3, n3 = null), null == n3 && (n3 = {}), n3.autoClose = false, null == n3.lazyEntries && (n3.lazyEntries = false), null == n3.decodeStrings && (n3.decodeStrings = true), null == n3.validateEntrySizes && (n3.validateEntrySizes = true), null == n3.strictFileNames && (n3.strictFileNames = false), p(new o2.BufferSlicer(e3), e3.length, n3, t3);
    }
    function p(e3, n3, t3, a3) {
      "function" == typeof t3 && (a3 = t3, t3 = null), null == t3 && (t3 = {}), null == t3.autoClose && (t3.autoClose = true), null == t3.lazyEntries && (t3.lazyEntries = false), null == t3.decodeStrings && (t3.decodeStrings = true);
      var s3 = !!t3.decodeStrings;
      if (null == t3.validateEntrySizes && (t3.validateEntrySizes = true), null == t3.strictFileNames && (t3.strictFileNames = false), null == a3 && (a3 = M), "number" != typeof n3) throw new Error("expected totalSize parameter to be a number");
      if (n3 > Number.MAX_SAFE_INTEGER) throw new Error("zip file too large. only file sizes up to 2^52 are supported due to JavaScript's Number type being an IEEE 754 double.");
      e3.ref();
      var o3 = 20, r2 = Math.min(65577, n3), i2 = N(r2), A2 = n3 - i2.length;
      B(e3, i2, 0, r2, A2, function(A3) {
        if (A3) return a3(A3);
        for (var c2 = r2 - 22; c2 >= 0; c2 -= 1) if (101010256 === i2.readUInt32LE(c2)) {
          var l2 = i2.subarray(c2), d2 = l2.readUInt16LE(4), m2 = l2.readUInt16LE(10), u2 = l2.readUInt32LE(16), g2 = l2.readUInt16LE(20), p2 = l2.length - 22;
          if (g2 !== p2) return a3(new Error("Invalid comment length. Expected: " + p2 + ". Found: " + g2 + ". Are there extra bytes at the end of the file? Or is the end of central dir signature `PK☺☻` in the comment?"));
          var h2 = s3 ? w(l2.subarray(22), false) : l2.subarray(22);
          if (c2 - o3 >= 0 && 117853008 === i2.readUInt32LE(c2 - o3)) {
            var T2 = b(i2.subarray(c2 - o3, c2 - o3 + o3), 8), k2 = N(56);
            return B(e3, k2, 0, k2.length, T2, function(o4) {
              return o4 ? a3(o4) : 101075792 !== k2.readUInt32LE(0) ? a3(new Error("invalid zip64 end of central directory record signature")) : 0 !== (d2 = k2.readUInt32LE(16)) ? a3(new Error("multi-disk zip files are not supported: found disk number: " + d2)) : (m2 = b(k2, 32), u2 = b(k2, 48), a3(null, new E(e3, u2, n3, m2, h2, t3.autoClose, t3.lazyEntries, s3, t3.validateEntrySizes, t3.strictFileNames)));
            });
          }
          return 0 !== d2 ? a3(new Error("multi-disk zip files are not supported: found disk number: " + d2)) : a3(null, new E(e3, u2, n3, m2, h2, t3.autoClose, t3.lazyEntries, s3, t3.validateEntrySizes, t3.strictFileNames));
        }
        a3(new Error("End of central directory record signature not found. Either not a zip file, or file is truncated."));
      });
    }
    function E(e3, n3, t3, a3, s3, o3, r2, A2, c2, l2) {
      var d2 = this;
      i.call(d2), d2.reader = e3, d2.reader.on("error", function(e4) {
        T(d2, e4);
      }), d2.reader.once("close", function() {
        d2.emit("close");
      }), d2.readEntryCursor = n3, d2.fileSize = t3, d2.entryCount = a3, d2.comment = s3, d2.entriesRead = 0, d2.autoClose = !!o3, d2.lazyEntries = !!r2, d2.decodeStrings = !!A2, d2.validateEntrySizes = !!c2, d2.strictFileNames = !!l2, d2.isOpen = true, d2.emittedError = false, d2.hasEachEntryBeenCalled = false, d2.lazyEntries || d2._readEntry();
    }
    function h(e3, n3) {
      e3.autoClose && e3.close(), T(e3, n3);
    }
    function T(e3, n3) {
      e3.emittedError || (e3.emittedError = true, e3.emit("error", n3));
    }
    function k() {
    }
    function f() {
    }
    function _(e3, n3, t3) {
      var a3 = 31 & e3, s3 = (e3 >> 5 & 15) - 1, o3 = 1980 + (e3 >> 9 & 127), r2 = 2 * (31 & n3), i2 = n3 >> 5 & 63, A2 = n3 >> 11 & 31;
      if (null == t3 || "local" === t3) return new Date(o3, s3, a3, A2, i2, r2, 0);
      if ("UTC" === t3) return new Date(Date.UTC(o3, s3, a3, A2, i2, r2, 0));
      throw new Error("unrecognized options.timezone: " + options.timezone);
    }
    function I(e3, n3, t3, a3) {
      for (var s3 = null, o3 = 0; o3 < t3.length; o3++) {
        var r2 = t3[o3];
        if (28789 === r2.id) {
          if (r2.data.length < 6) continue;
          if (1 !== r2.data.readUInt8(0)) continue;
          var i2 = r2.data.readUInt32LE(1);
          if (d(n3) !== i2) continue;
          s3 = w(r2.data.subarray(5), true);
          break;
        }
      }
      null == s3 && (s3 = w(n3, !!(2048 & e3)));
      return a3 || (s3 = s3.replace(/\\/g, "/")), s3;
    }
    function C(e3) {
      return -1 !== e3.indexOf("\\") ? "invalid characters in fileName: " + e3 : /^[a-zA-Z]:/.test(e3) || /^\//.test(e3) ? "absolute path: " + e3 : -1 !== e3.split("/").indexOf("..") ? "invalid relative path: " + e3 : null;
    }
    function y(e3) {
      for (var n3 = [], t3 = 0; t3 < e3.length - 3; ) {
        var a3 = e3.readUInt16LE(t3 + 0), s3 = t3 + 4, o3 = s3 + e3.readUInt16LE(t3 + 2);
        if (o3 > e3.length) throw new Error("extra field length exceeds extra field buffer size");
        var r2 = e3.subarray(s3, o3);
        n3.push({ id: a3, data: r2 }), t3 = o3;
      }
      return n3;
    }
    function B(e3, n3, t3, a3, s3, o3) {
      if (0 === a3) return setImmediate(function() {
        o3(null, N(0));
      });
      e3.read(n3, t3, a3, s3, function(e4, n4) {
        return e4 ? o3(e4) : n4 < a3 ? o3(new Error("unexpected EOF")) : void o3();
      });
    }
    function Q(e3) {
      A.call(this), this.actualByteCount = 0, this.expectedByteCount = e3;
    }
    function v() {
      i.call(this), this.refCount = 0;
    }
    function R(e3) {
      c.call(this), this.context = e3, this.context.ref(), this.unreffedYet = false;
    }
    n2.vY = g, r.inherits(E, i), E.prototype.close = function() {
      this.isOpen && (this.isOpen = false, this.reader.unref());
    }, E.prototype.readEntry = function() {
      if (!this.lazyEntries) throw new Error("readEntry() called without lazyEntries:true");
      this._readEntry();
    }, E.prototype._readEntry = function() {
      var e3 = this;
      if (e3.entryCount !== e3.entriesRead) {
        if (!e3.emittedError) {
          var n3 = N(46);
          B(e3.reader, n3, 0, n3.length, e3.readEntryCursor, function(t3) {
            if (t3) return h(e3, t3);
            if (!e3.emittedError) {
              var a3 = new k(), s3 = n3.readUInt32LE(0);
              if (33639248 !== s3) return h(e3, new Error("invalid central directory file header signature: 0x" + s3.toString(16)));
              if (a3.versionMadeBy = n3.readUInt16LE(4), a3.versionNeededToExtract = n3.readUInt16LE(6), a3.generalPurposeBitFlag = n3.readUInt16LE(8), a3.compressionMethod = n3.readUInt16LE(10), a3.lastModFileTime = n3.readUInt16LE(12), a3.lastModFileDate = n3.readUInt16LE(14), a3.crc32 = n3.readUInt32LE(16), a3.compressedSize = n3.readUInt32LE(20), a3.uncompressedSize = n3.readUInt32LE(24), a3.fileNameLength = n3.readUInt16LE(28), a3.extraFieldLength = n3.readUInt16LE(30), a3.fileCommentLength = n3.readUInt16LE(32), a3.internalFileAttributes = n3.readUInt16LE(36), a3.externalFileAttributes = n3.readUInt32LE(38), a3.relativeOffsetOfLocalHeader = n3.readUInt32LE(42), 64 & a3.generalPurposeBitFlag) return h(e3, new Error("strong encryption is not supported"));
              e3.readEntryCursor += 46, n3 = N(a3.fileNameLength + a3.extraFieldLength + a3.fileCommentLength), B(e3.reader, n3, 0, n3.length, e3.readEntryCursor, function(t4) {
                if (t4) return h(e3, t4);
                if (!e3.emittedError) {
                  a3.fileNameRaw = n3.subarray(0, a3.fileNameLength);
                  var s4 = a3.fileNameLength + a3.extraFieldLength;
                  a3.extraFieldRaw = n3.subarray(a3.fileNameLength, s4), a3.fileCommentRaw = n3.subarray(s4, s4 + a3.fileCommentLength);
                  try {
                    a3.extraFields = y(a3.extraFieldRaw);
                  } catch (t5) {
                    return h(e3, t5);
                  }
                  if (e3.decodeStrings) {
                    var o3 = !!(2048 & a3.generalPurposeBitFlag);
                    a3.fileComment = w(a3.fileCommentRaw, o3), a3.fileName = I(a3.generalPurposeBitFlag, a3.fileNameRaw, a3.extraFields, e3.strictFileNames);
                    var r2 = C(a3.fileName);
                    if (null != r2) return h(e3, new Error(r2));
                  } else a3.fileComment = a3.fileCommentRaw, a3.fileName = a3.fileNameRaw;
                  a3.comment = a3.fileComment, e3.readEntryCursor += n3.length, e3.entriesRead += 1;
                  for (var i2 = 0; i2 < a3.extraFields.length; i2++) {
                    var A2 = a3.extraFields[i2];
                    if (1 === A2.id) {
                      var c2 = A2.data, l2 = 0;
                      if (4294967295 === a3.uncompressedSize) {
                        if (l2 + 8 > c2.length) return h(e3, new Error("zip64 extended information extra field does not include uncompressed size"));
                        a3.uncompressedSize = b(c2, l2), l2 += 8;
                      }
                      if (4294967295 === a3.compressedSize) {
                        if (l2 + 8 > c2.length) return h(e3, new Error("zip64 extended information extra field does not include compressed size"));
                        a3.compressedSize = b(c2, l2), l2 += 8;
                      }
                      if (4294967295 === a3.relativeOffsetOfLocalHeader) {
                        if (l2 + 8 > c2.length) return h(e3, new Error("zip64 extended information extra field does not include relative header offset"));
                        a3.relativeOffsetOfLocalHeader = b(c2, l2), l2 += 8;
                      }
                      break;
                    }
                  }
                  if (e3.validateEntrySizes && 0 === a3.compressionMethod) {
                    var d2 = a3.uncompressedSize;
                    if (a3.isEncrypted() && (d2 += 12), a3.compressedSize !== d2) {
                      var m2 = "compressed/uncompressed size mismatch for stored file: " + a3.compressedSize + " != " + a3.uncompressedSize;
                      return h(e3, new Error(m2));
                    }
                  }
                  e3.emit("entry", a3), e3.lazyEntries || e3._readEntry();
                }
              });
            }
          });
        }
      } else setImmediate(function() {
        e3.autoClose && e3.close(), e3.emittedError || e3.emit("end");
      });
    }, E.prototype.eachEntry = function() {
      const e3 = this;
      if (!e3.lazyEntries) throw new Error("eachEntry() requires lazyEntries: true");
      if (e3.hasEachEntryBeenCalled) throw new Error("eachEntry() must only be called once per ZipFile");
      e3.hasEachEntryBeenCalled = true;
      let n3 = null;
      function t3() {
        e3.removeListener("entry", a3), e3.removeListener("end", s3), e3.removeListener("error", o3), e3.autoClose && e3.close();
      }
      function a3(e4) {
        let { resolve: t4 } = n3;
        n3 = null, t4({ value: e4 });
      }
      function s3() {
        let { resolve: e4 } = n3;
        n3 = null, t3(), e4({ done: true });
      }
      function o3(e4) {
        let { reject: a4 } = n3;
        n3 = null, t3(), a4(e4);
      }
      return e3.on("entry", a3), e3.on("end", s3), e3.on("error", o3), { [Symbol.asyncIterator]() {
        return this;
      }, next() {
        const t4 = new Promise((e4, t5) => {
          if (null != n3) throw new Error("next() called before previous Promise was resolved.");
          n3 = { resolve: e4, reject: t5 };
        });
        return e3.readEntry(), t4;
      }, return: (e4) => (t3(), Promise.resolve({ done: true, value: e4 })), throw: (e4) => (t3(), Promise.reject(e4)) };
    }, E.prototype.openReadStream = function(e3, n3, t3) {
      var a3 = this, s3 = 0, o3 = e3.compressedSize;
      if (null == t3 && (t3 = n3, n3 = null), null == n3) n3 = {};
      else {
        if (false === n3.decodeFileData) {
          if (null != n3.decrypt) throw new Error("cannot use options.decrypt when options.decodeFileData === false");
          if (null != n3.decompress) throw new Error("cannot use options.decompress when options.decodeFileData === false");
        } else {
          if (null != n3.decrypt) {
            if (!e3.isEncrypted()) throw new Error("options.decrypt can only be specified for encrypted entries. See also option decodeFileData.");
            if (false !== n3.decrypt) throw new Error("invalid options.decrypt value: " + n3.decrypt);
            if (e3.isCompressed() && false !== n3.decompress) throw new Error("entry is encrypted and compressed, and options.decompress !== false. See also option decodeFileData.");
          }
          if (null != n3.decompress) {
            if (!e3.isCompressed()) throw new Error("options.decompress can only be specified for compressed entries. See also option decodeFileData.");
            if (false !== n3.decompress && true !== n3.decompress) throw new Error("invalid options.decompress value: " + n3.decompress);
            r2 = n3.decompress;
          }
        }
        if (null != n3.start) {
          if ((s3 = n3.start) < 0) throw new Error("options.start < 0");
          if (s3 > e3.compressedSize) throw new Error("options.start > entry.compressedSize");
        }
        if (null != n3.end) {
          if ((o3 = n3.end) < 0) throw new Error("options.end < 0");
          if (o3 > e3.compressedSize) throw new Error("options.end > entry.compressedSize");
          if (o3 < s3) throw new Error("options.end < options.start");
        }
      }
      var r2, i2 = false === n3.decodeFileData || (0 === e3.compressionMethod || 8 === e3.compressionMethod && false === n3.decompress) && (!e3.isEncrypted() || false === n3.decrypt);
      if ((null != n3.start || null != n3.end) && !i2) throw new Error("start/end range require options.decodeFileData === false for non-trivial encoded entries.");
      if (!a3.isOpen) return t3(new Error("closed"));
      if (e3.isEncrypted() && !i2 && false !== n3.decrypt) return t3(new Error("entry is encrypted, and options.decodeFileData !== false"));
      if (i2) r2 = false;
      else {
        if (8 !== e3.compressionMethod) return t3(new Error("unsupported compression method: " + e3.compressionMethod));
        r2 = true !== n3.decodeFileData;
      }
      a3.readLocalFileHeader(e3, { minimal: true }, function(n4, i3) {
        if (n4) return t3(n4);
        a3.openReadStreamLowLevel(i3.fileDataStart, e3.compressedSize, s3, o3, r2, e3.uncompressedSize, t3);
      });
    }, E.prototype.openReadStreamLowLevel = function(e3, n3, t3, a3, o3, r2, i2) {
      var A2 = this.reader.createReadStream({ start: e3 + t3, end: e3 + a3 }), c2 = A2;
      if (o3) {
        var l2 = false, d2 = s2.createInflateRaw();
        A2.on("error", function(e4) {
          setImmediate(function() {
            l2 || d2.emit("error", e4);
          });
        }), A2.pipe(d2), this.validateEntrySizes ? (c2 = new Q(r2), d2.on("error", function(e4) {
          setImmediate(function() {
            l2 || c2.emit("error", e4);
          });
        }), d2.pipe(c2)) : c2 = d2, D(c2, function() {
          l2 = true, d2 !== c2 && d2.unpipe(c2), A2.unpipe(d2), A2.destroy();
        });
      }
      i2(null, c2);
    }, E.prototype.readLocalFileHeader = function(e3, n3, t3) {
      var a3 = this;
      null == t3 && (t3 = n3, n3 = null), null == n3 && (n3 = {}), a3.reader.ref();
      var s3 = N(30);
      B(a3.reader, s3, 0, s3.length, e3.relativeOffsetOfLocalHeader, function(o3) {
        try {
          if (o3) return t3(o3);
          var r2 = s3.readUInt32LE(0);
          if (67324752 !== r2) return t3(new Error("invalid local file header signature: 0x" + r2.toString(16)));
          var i2 = s3.readUInt16LE(26), A2 = s3.readUInt16LE(28), c2 = e3.relativeOffsetOfLocalHeader + 30 + i2 + A2;
          if (c2 + e3.compressedSize > a3.fileSize) return t3(new Error("file data overflows file bounds: " + c2 + " + " + e3.compressedSize + " > " + a3.fileSize));
          if (n3.minimal) return t3(null, { fileDataStart: c2 });
          var l2 = new f();
          l2.fileDataStart = c2, l2.versionNeededToExtract = s3.readUInt16LE(4), l2.generalPurposeBitFlag = s3.readUInt16LE(6), l2.compressionMethod = s3.readUInt16LE(8), l2.lastModFileTime = s3.readUInt16LE(10), l2.lastModFileDate = s3.readUInt16LE(12), l2.crc32 = s3.readUInt32LE(14), l2.compressedSize = s3.readUInt32LE(18), l2.uncompressedSize = s3.readUInt32LE(22), l2.fileNameLength = i2, l2.extraFieldLength = A2, s3 = N(i2 + A2), a3.reader.ref(), B(a3.reader, s3, 0, s3.length, e3.relativeOffsetOfLocalHeader + 30, function(e4) {
            try {
              return e4 ? t3(e4) : (l2.fileName = s3.subarray(0, i2), l2.extraField = s3.subarray(i2), t3(null, l2));
            } finally {
              a3.reader.unref();
            }
          });
        } finally {
          a3.reader.unref();
        }
      });
    }, E.prototype.openReadStreamPromise = function(e3, n3) {
      return new Promise((t3, a3) => {
        this.openReadStream(e3, n3, function(e4, n4) {
          if (e4) return a3(e4);
          t3(n4);
        });
      });
    }, E.prototype.openReadStreamLowLevelPromise = function(e3, n3, t3, a3, s3, o3) {
      return new Promise((r2, i2) => {
        this.openReadStream(e3, n3, t3, a3, s3, o3, function(e4, n4) {
          if (e4) return i2(e4);
          r2(n4);
        });
      });
    }, E.prototype.readLocalFileHeaderPromise = function(e3, n3) {
      return new Promise((t3, a3) => {
        this.readLocalFileHeader(e3, n3, function(e4, n4) {
          if (e4) return a3(e4);
          t3(n4);
        });
      });
    }, k.prototype.getLastModDate = function(e3) {
      if (null == e3 && (e3 = {}), !e3.forceDosFormat) for (var n3 = 0; n3 < this.extraFields.length; n3++) {
        var t3 = this.extraFields[n3];
        if (21589 === t3.id) {
          if ((s3 = t3.data).length < 5) continue;
          if (!(1 & s3[0])) continue;
          var a3 = s3.readInt32LE(1);
          return new Date(1e3 * a3);
        }
        if (10 === t3.id) {
          var s3;
          if (32 !== (s3 = t3.data).length) continue;
          if (1 !== s3.readUInt16LE(4)) continue;
          if (24 !== s3.readUInt16LE(6)) continue;
          var o3 = s3.readUInt32LE(8) + 4294967296 * s3.readInt32LE(12);
          return new Date(o3 / 1e4 - 116444736e5);
        }
      }
      return _(this.lastModFileDate, this.lastModFileTime, e3.timezone);
    }, k.prototype.canDecodeFileData = function() {
      return !this.isEncrypted() && (0 === this.compressionMethod || 8 === this.compressionMethod);
    }, k.prototype.isEncrypted = function() {
      return !!(1 & this.generalPurposeBitFlag);
    }, k.prototype.isCompressed = function() {
      return 8 === this.compressionMethod;
    }, r.inherits(Q, A), Q.prototype._transform = function(e3, n3, t3) {
      if (this.actualByteCount += e3.length, this.actualByteCount > this.expectedByteCount) {
        var a3 = "too many bytes in the stream. expected " + this.expectedByteCount + ". got at least " + this.actualByteCount;
        return t3(new Error(a3));
      }
      t3(null, e3);
    }, Q.prototype._flush = function(e3) {
      if (this.actualByteCount < this.expectedByteCount) {
        var n3 = "not enough bytes in the stream. expected " + this.expectedByteCount + ". got only " + this.actualByteCount;
        return e3(new Error(n3));
      }
      e3();
    }, r.inherits(v, i), v.prototype.ref = function() {
      this.refCount += 1;
    }, v.prototype.unref = function() {
      var e3 = this;
      if (e3.refCount -= 1, !(e3.refCount > 0)) {
        if (e3.refCount < 0) throw new Error("invalid unref");
        e3.close(function(n3) {
          if (n3) return e3.emit("error", n3);
          e3.emit("close");
        });
      }
    }, v.prototype.createReadStream = function(e3) {
      null == e3 && (e3 = {});
      var n3 = e3.start, t3 = e3.end;
      if (n3 === t3) {
        var a3 = new c();
        return setImmediate(function() {
          a3.end();
        }), a3;
      }
      var s3 = this._readStreamForRange(n3, t3), o3 = false, r2 = new R(this);
      s3.on("error", function(e4) {
        setImmediate(function() {
          o3 || r2.emit("error", e4);
        });
      }), D(r2, function() {
        s3.unpipe(r2), r2.unref(), s3.destroy();
      });
      var i2 = new Q(t3 - n3);
      return r2.on("error", function(e4) {
        setImmediate(function() {
          o3 || i2.emit("error", e4);
        });
      }), D(i2, function() {
        o3 = true, r2.unpipe(i2), r2.destroy();
      }), s3.pipe(r2).pipe(i2);
    }, v.prototype._readStreamForRange = function(e3, n3) {
      throw new Error("not implemented");
    }, v.prototype.read = function(e3, n3, t3, a3, s3) {
      var o3 = this.createReadStream({ start: a3, end: a3 + t3 }), r2 = new l(), i2 = 0;
      r2._write = function(t4, a4, s4) {
        t4.copy(e3, n3 + i2, 0, t4.length), i2 += t4.length, s4();
      }, r2.on("finish", s3), o3.on("error", function(e4) {
        s3(e4);
      }), o3.pipe(r2);
    }, v.prototype.close = function(e3) {
      setImmediate(e3);
    }, r.inherits(R, c), R.prototype._flush = function(e3) {
      this.unref(), e3();
    }, R.prototype.unref = function(e3) {
      this.unreffedYet || (this.unreffedYet = true, this.context.unref());
    };
    var N, S = "\0☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼ !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~⌂ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ";
    function w(e3, n3) {
      if (n3) return e3.toString("utf8");
      for (var t3 = "", a3 = 0; a3 < e3.length; a3++) t3 += S[e3[a3]];
      return t3;
    }
    function b(e3, n3) {
      var t3 = e3.readUInt32LE(n3);
      return 4294967296 * e3.readUInt32LE(n3 + 4) + t3;
    }
    function D(e3, n3) {
      "function" == typeof e3.destroy ? e3._destroy = function(e4, t3) {
        n3(), null != t3 && t3(e4);
      } : e3.destroy = n3;
    }
    function M(e3) {
      if (e3) throw e3;
    }
    N = "function" == typeof Buffer.allocUnsafe ? function(e3) {
      return Buffer.allocUnsafe(e3);
    } : function(e3) {
      return new Buffer(e3);
    };
  }