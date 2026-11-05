// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/273.js sha256:918321c092763b0f5509b45d1560ac236164a596e0ab5a603460d95abe18903b
// module: 87626 range:52778..74492
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
87626: (module, __unused_webpack_exports, __webpack_require__) => {
  "use strict";
  const Token = __webpack_require__(28742), strtok3 = __webpack_require__(76311), { stringToBytes, tarHeaderChecksumMatches, uint32SyncSafeToken } = __webpack_require__(88565), supported = __webpack_require__(64651), minimumBytes = 4100;
  async function fromStream(e) {
    const t = await strtok3.fromStream(e);
    try {
      return await fromTokenizer(t);
    } finally {
      await t.close();
    }
  }
  async function fromBuffer(e) {
    if (!(e instanceof Uint8Array || e instanceof ArrayBuffer || Buffer.isBuffer(e))) throw new TypeError(`Expected the \`input\` argument to be of type \`Uint8Array\` or \`Buffer\` or \`ArrayBuffer\`, got \`${typeof e}\``);
    const t = e instanceof Buffer ? e : Buffer.from(e);
    if (!(t && t.length > 1)) return;
    return fromTokenizer(strtok3.fromBuffer(t));
  }
  function _check(e, t, i) {
    i = { offset: 0, ...i };
    for (const [a, n] of t.entries()) if (i.mask) {
      if (n !== (i.mask[a] & e[a + i.offset])) return false;
    } else if (n !== e[a + i.offset]) return false;
    return true;
  }
  async function fromTokenizer(e) {
    try {
      return _fromTokenizer(e);
    } catch (e2) {
      if (!(e2 instanceof strtok3.EndOfStreamError)) throw e2;
    }
  }
  async function _fromTokenizer(e) {
    let t = Buffer.alloc(minimumBytes);
    const i = (e2, i2) => _check(t, e2, i2), a = (e2, t2) => i(stringToBytes(e2), t2);
    if (e.fileInfo.size || (e.fileInfo.size = Number.MAX_SAFE_INTEGER), await e.peekBuffer(t, { length: 12, mayBeLess: true }), i([66, 77])) return { ext: "bmp", mime: "image/bmp" };
    if (i([11, 119])) return { ext: "ac3", mime: "audio/vnd.dolby.dd-raw" };
    if (i([120, 1])) return { ext: "dmg", mime: "application/x-apple-diskimage" };
    if (i([77, 90])) return { ext: "exe", mime: "application/x-msdownload" };
    if (i([37, 33])) return await e.peekBuffer(t, { length: 24, mayBeLess: true }), a("PS-Adobe-", { offset: 2 }) && a(" EPSF-", { offset: 14 }) ? { ext: "eps", mime: "application/eps" } : { ext: "ps", mime: "application/postscript" };
    if (i([31, 160]) || i([31, 157])) return { ext: "Z", mime: "application/x-compress" };
    if (i([255, 216, 255])) return { ext: "jpg", mime: "image/jpeg" };
    if (i([73, 73, 188])) return { ext: "jxr", mime: "image/vnd.ms-photo" };
    if (i([31, 139, 8])) return { ext: "gz", mime: "application/gzip" };
    if (i([66, 90, 104])) return { ext: "bz2", mime: "application/x-bzip2" };
    if (a("ID3")) {
      await e.ignore(6);
      const n = await e.readToken(uint32SyncSafeToken);
      return e.position + n > e.fileInfo.size ? { ext: "mp3", mime: "audio/mpeg" } : (await e.ignore(n), fromTokenizer(e));
    }
    if (a("MP+")) return { ext: "mpc", mime: "audio/x-musepack" };
    if ((67 === t[0] || 70 === t[0]) && i([87, 83], { offset: 1 })) return { ext: "swf", mime: "application/x-shockwave-flash" };
    if (i([71, 73, 70])) return { ext: "gif", mime: "image/gif" };
    if (a("FLIF")) return { ext: "flif", mime: "image/flif" };
    if (a("8BPS")) return { ext: "psd", mime: "image/vnd.adobe.photoshop" };
    if (a("WEBP", { offset: 8 })) return { ext: "webp", mime: "image/webp" };
    if (a("MPCK")) return { ext: "mpc", mime: "audio/x-musepack" };
    if (a("FORM")) return { ext: "aif", mime: "audio/aiff" };
    if (a("icns", { offset: 0 })) return { ext: "icns", mime: "image/icns" };
    if (i([80, 75, 3, 4])) {
      try {
        for (; e.position + 30 < e.fileInfo.size; ) {
          await e.readBuffer(t, { length: 30 });
          const r = { compressedSize: t.readUInt32LE(18), uncompressedSize: t.readUInt32LE(22), filenameLength: t.readUInt16LE(26), extraFieldLength: t.readUInt16LE(28) };
          if (r.filename = await e.readToken(new Token.StringType(r.filenameLength, "utf-8")), await e.ignore(r.extraFieldLength), "META-INF/mozilla.rsa" === r.filename) return { ext: "xpi", mime: "application/x-xpinstall" };
          if (r.filename.endsWith(".rels") || r.filename.endsWith(".xml")) {
            switch (r.filename.split("/")[0]) {
              case "_rels":
              default:
                break;
              case "word":
                return { ext: "docx", mime: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" };
              case "ppt":
                return { ext: "pptx", mime: "application/vnd.openxmlformats-officedocument.presentationml.presentation" };
              case "xl":
                return { ext: "xlsx", mime: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" };
            }
          }
          if (r.filename.startsWith("xl/")) return { ext: "xlsx", mime: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" };
          if (r.filename.startsWith("3D/") && r.filename.endsWith(".model")) return { ext: "3mf", mime: "model/3mf" };
          if ("mimetype" === r.filename && r.compressedSize === r.uncompressedSize) {
            switch (await e.readToken(new Token.StringType(r.compressedSize, "utf-8"))) {
              case "application/epub+zip":
                return { ext: "epub", mime: "application/epub+zip" };
              case "application/vnd.oasis.opendocument.text":
                return { ext: "odt", mime: "application/vnd.oasis.opendocument.text" };
              case "application/vnd.oasis.opendocument.spreadsheet":
                return { ext: "ods", mime: "application/vnd.oasis.opendocument.spreadsheet" };
              case "application/vnd.oasis.opendocument.presentation":
                return { ext: "odp", mime: "application/vnd.oasis.opendocument.presentation" };
            }
          }
          if (0 === r.compressedSize) {
            let o = -1;
            for (; o < 0 && e.position < e.fileInfo.size; ) await e.peekBuffer(t, { mayBeLess: true }), o = t.indexOf("504B0304", 0, "hex"), await e.ignore(o >= 0 ? o : t.length);
          } else await e.ignore(r.compressedSize);
        }
      } catch (s) {
        if (!(s instanceof strtok3.EndOfStreamError)) throw s;
      }
      return { ext: "zip", mime: "application/zip" };
    }
    if (a("OggS")) {
      await e.ignore(28);
      const f = Buffer.alloc(8);
      return await e.readBuffer(f), _check(f, [79, 112, 117, 115, 72, 101, 97, 100]) ? { ext: "opus", mime: "audio/opus" } : _check(f, [128, 116, 104, 101, 111, 114, 97]) ? { ext: "ogv", mime: "video/ogg" } : _check(f, [1, 118, 105, 100, 101, 111, 0]) ? { ext: "ogm", mime: "video/ogg" } : _check(f, [127, 70, 76, 65, 67]) ? { ext: "oga", mime: "audio/ogg" } : _check(f, [83, 112, 101, 101, 120, 32, 32]) ? { ext: "spx", mime: "audio/ogg" } : _check(f, [1, 118, 111, 114, 98, 105, 115]) ? { ext: "ogg", mime: "audio/ogg" } : { ext: "ogx", mime: "application/ogg" };
    }
    if (i([80, 75]) && (3 === t[2] || 5 === t[2] || 7 === t[2]) && (4 === t[3] || 6 === t[3] || 8 === t[3])) return { ext: "zip", mime: "application/zip" };
    if (a("ftyp", { offset: 4 }) && 96 & t[8]) {
      const p = t.toString("binary", 8, 12).replace("\0", " ").trim();
      switch (p) {
        case "avif":
          return { ext: "avif", mime: "image/avif" };
        case "mif1":
          return { ext: "heic", mime: "image/heif" };
        case "msf1":
          return { ext: "heic", mime: "image/heif-sequence" };
        case "heic":
        case "heix":
          return { ext: "heic", mime: "image/heic" };
        case "hevc":
        case "hevx":
          return { ext: "heic", mime: "image/heic-sequence" };
        case "qt":
          return { ext: "mov", mime: "video/quicktime" };
        case "M4V":
        case "M4VH":
        case "M4VP":
          return { ext: "m4v", mime: "video/x-m4v" };
        case "M4P":
          return { ext: "m4p", mime: "video/mp4" };
        case "M4B":
          return { ext: "m4b", mime: "audio/mp4" };
        case "M4A":
          return { ext: "m4a", mime: "audio/x-m4a" };
        case "F4V":
          return { ext: "f4v", mime: "video/mp4" };
        case "F4P":
          return { ext: "f4p", mime: "video/mp4" };
        case "F4A":
          return { ext: "f4a", mime: "audio/mp4" };
        case "F4B":
          return { ext: "f4b", mime: "audio/mp4" };
        case "crx":
          return { ext: "cr3", mime: "image/x-canon-cr3" };
        default:
          return p.startsWith("3g") ? p.startsWith("3g2") ? { ext: "3g2", mime: "video/3gpp2" } : { ext: "3gp", mime: "video/3gpp" } : { ext: "mp4", mime: "video/mp4" };
      }
    }
    if (a("MThd")) return { ext: "mid", mime: "audio/midi" };
    if (a("wOFF") && (i([0, 1, 0, 0], { offset: 4 }) || a("OTTO", { offset: 4 }))) return { ext: "woff", mime: "font/woff" };
    if (a("wOF2") && (i([0, 1, 0, 0], { offset: 4 }) || a("OTTO", { offset: 4 }))) return { ext: "woff2", mime: "font/woff2" };
    if (i([212, 195, 178, 161]) || i([161, 178, 195, 212])) return { ext: "pcap", mime: "application/vnd.tcpdump.pcap" };
    if (a("DSD ")) return { ext: "dsf", mime: "audio/x-dsf" };
    if (a("LZIP")) return { ext: "lz", mime: "application/x-lzip" };
    if (a("fLaC")) return { ext: "flac", mime: "audio/x-flac" };
    if (i([66, 80, 71, 251])) return { ext: "bpg", mime: "image/bpg" };
    if (a("wvpk")) return { ext: "wv", mime: "audio/wavpack" };
    if (a("%PDF")) {
      await e.ignore(1350);
      const m = 10485760, l = Buffer.alloc(Math.min(m, e.fileInfo.size));
      return await e.readBuffer(l, { mayBeLess: true }), l.includes(Buffer.from("AIPrivateData")) ? { ext: "ai", mime: "application/postscript" } : { ext: "pdf", mime: "application/pdf" };
    }
    if (i([0, 97, 115, 109])) return { ext: "wasm", mime: "application/wasm" };
    if (i([73, 73, 42, 0])) return a("CR", { offset: 8 }) ? { ext: "cr2", mime: "image/x-canon-cr2" } : i([28, 0, 254, 0], { offset: 8 }) || i([31, 0, 11, 0], { offset: 8 }) ? { ext: "nef", mime: "image/x-nikon-nef" } : i([8, 0, 0, 0], { offset: 4 }) && (i([45, 0, 254, 0], { offset: 8 }) || i([39, 0, 254, 0], { offset: 8 })) ? { ext: "dng", mime: "image/x-adobe-dng" } : (t = Buffer.alloc(24), await e.peekBuffer(t), (i([16, 251, 134, 1], { offset: 4 }) || i([8, 0, 0, 0], { offset: 4 })) && i([0, 254, 0, 4, 0, 1, 0, 0, 0, 1, 0, 0, 0, 3, 1], { offset: 9 }) ? { ext: "arw", mime: "image/x-sony-arw" } : { ext: "tif", mime: "image/tiff" });
    if (i([77, 77, 0, 42])) return { ext: "tif", mime: "image/tiff" };
    if (a("MAC ")) return { ext: "ape", mime: "audio/ape" };
    if (i([26, 69, 223, 163])) {
      async function c() {
        const t2 = await e.peekNumber(Token.UINT8);
        let i2 = 128, a2 = 0;
        for (; 0 === (t2 & i2) && 0 !== i2; ) ++a2, i2 >>= 1;
        const n = Buffer.alloc(a2 + 1);
        return await e.readBuffer(n), n;
      }
      async function u() {
        const e2 = await c(), t2 = await c();
        t2[0] ^= 128 >> t2.length - 1;
        const i2 = Math.min(6, t2.length);
        return { id: e2.readUIntBE(0, e2.length), len: t2.readUIntBE(t2.length - i2, i2) };
      }
      async function d(t2, i2) {
        for (; i2 > 0; ) {
          const t3 = await u();
          if (17026 === t3.id) return e.readToken(new Token.StringType(t3.len, "utf-8"));
          await e.ignore(t3.len), --i2;
        }
      }
      const h = await u();
      switch (await d(0, h.len)) {
        case "webm":
          return { ext: "webm", mime: "video/webm" };
        case "matroska":
          return { ext: "mkv", mime: "video/x-matroska" };
        default:
          return;
      }
    }
    if (i([82, 73, 70, 70])) {
      if (i([65, 86, 73], { offset: 8 })) return { ext: "avi", mime: "video/vnd.avi" };
      if (i([87, 65, 86, 69], { offset: 8 })) return { ext: "wav", mime: "audio/vnd.wave" };
      if (i([81, 76, 67, 77], { offset: 8 })) return { ext: "qcp", mime: "audio/qcelp" };
    }
    if (a("SQLi")) return { ext: "sqlite", mime: "application/x-sqlite3" };
    if (i([78, 69, 83, 26])) return { ext: "nes", mime: "application/x-nintendo-nes-rom" };
    if (a("Cr24")) return { ext: "crx", mime: "application/x-google-chrome-extension" };
    if (a("MSCF") || a("ISc(")) return { ext: "cab", mime: "application/vnd.ms-cab-compressed" };
    if (i([237, 171, 238, 219])) return { ext: "rpm", mime: "application/x-rpm" };
    if (i([197, 208, 211, 198])) return { ext: "eps", mime: "application/eps" };
    if (i([40, 181, 47, 253])) return { ext: "zst", mime: "application/zstd" };
    if (i([79, 84, 84, 79, 0])) return { ext: "otf", mime: "font/otf" };
    if (a("#!AMR")) return { ext: "amr", mime: "audio/amr" };
    if (a("{\\rtf")) return { ext: "rtf", mime: "application/rtf" };
    if (i([70, 76, 86, 1])) return { ext: "flv", mime: "video/x-flv" };
    if (a("IMPM")) return { ext: "it", mime: "audio/x-it" };
    if (a("-lh0-", { offset: 2 }) || a("-lh1-", { offset: 2 }) || a("-lh2-", { offset: 2 }) || a("-lh3-", { offset: 2 }) || a("-lh4-", { offset: 2 }) || a("-lh5-", { offset: 2 }) || a("-lh6-", { offset: 2 }) || a("-lh7-", { offset: 2 }) || a("-lzs-", { offset: 2 }) || a("-lz4-", { offset: 2 }) || a("-lz5-", { offset: 2 }) || a("-lhd-", { offset: 2 })) return { ext: "lzh", mime: "application/x-lzh-compressed" };
    if (i([0, 0, 1, 186])) {
      if (i([33], { offset: 4, mask: [241] })) return { ext: "mpg", mime: "video/MP1S" };
      if (i([68], { offset: 4, mask: [196] })) return { ext: "mpg", mime: "video/MP2P" };
    }
    if (a("ITSF")) return { ext: "chm", mime: "application/vnd.ms-htmlhelp" };
    if (i([253, 55, 122, 88, 90, 0])) return { ext: "xz", mime: "application/x-xz" };
    if (a("<?xml ")) return { ext: "xml", mime: "application/xml" };
    if (i([55, 122, 188, 175, 39, 28])) return { ext: "7z", mime: "application/x-7z-compressed" };
    if (i([82, 97, 114, 33, 26, 7]) && (0 === t[6] || 1 === t[6])) return { ext: "rar", mime: "application/x-rar-compressed" };
    if (a("solid ")) return { ext: "stl", mime: "model/stl" };
    if (a("BLENDER")) return { ext: "blend", mime: "application/x-blender" };
    if (a("!<arch>")) {
      await e.ignore(8);
      return "debian-binary" === await e.readToken(new Token.StringType(13, "ascii")) ? { ext: "deb", mime: "application/x-deb" } : { ext: "ar", mime: "application/x-unix-archive" };
    }
    if (i([137, 80, 78, 71, 13, 10, 26, 10])) {
      async function g() {
        return { length: await e.readToken(Token.INT32_BE), type: await e.readToken(new Token.StringType(4, "binary")) };
      }
      await e.ignore(8);
      do {
        const x = await g();
        if (x.length < 0) return;
        switch (x.type) {
          case "IDAT":
            return { ext: "png", mime: "image/png" };
          case "acTL":
            return { ext: "apng", mime: "image/apng" };
          default:
            await e.ignore(x.length + 4);
        }
      } while (e.position + 8 < e.fileInfo.size);
      return { ext: "png", mime: "image/png" };
    }
    if (i([65, 82, 82, 79, 87, 49, 0, 0])) return { ext: "arrow", mime: "application/x-apache-arrow" };
    if (i([103, 108, 84, 70, 2, 0, 0, 0])) return { ext: "glb", mime: "model/gltf-binary" };
    if (i([102, 114, 101, 101], { offset: 4 }) || i([109, 100, 97, 116], { offset: 4 }) || i([109, 111, 111, 118], { offset: 4 }) || i([119, 105, 100, 101], { offset: 4 })) return { ext: "mov", mime: "video/quicktime" };
    if (i([73, 73, 82, 79, 8, 0, 0, 0, 24])) return { ext: "orf", mime: "image/x-olympus-orf" };
    if (a("gimp xcf ")) return { ext: "xcf", mime: "image/x-xcf" };
    if (i([73, 73, 85, 0, 24, 0, 0, 0, 136, 231, 116, 216])) return { ext: "rw2", mime: "image/x-panasonic-rw2" };
    if (i([48, 38, 178, 117, 142, 102, 207, 17, 166, 217])) {
      async function b() {
        const t2 = Buffer.alloc(16);
        return await e.readBuffer(t2), { id: t2, size: Number(await e.readToken(Token.UINT64_LE)) };
      }
      for (await e.ignore(30); e.position + 24 < e.fileInfo.size; ) {
        const w = await b();
        let v = w.size - 24;
        if (_check(w.id, [145, 7, 220, 183, 183, 169, 207, 17, 142, 230, 0, 192, 12, 32, 83, 101])) {
          const S = Buffer.alloc(16);
          if (v -= await e.readBuffer(S), _check(S, [64, 158, 105, 248, 77, 91, 207, 17, 168, 253, 0, 128, 95, 92, 68, 43])) return { ext: "asf", mime: "audio/x-ms-asf" };
          if (_check(S, [192, 239, 25, 188, 77, 91, 207, 17, 168, 253, 0, 128, 95, 92, 68, 43])) return { ext: "asf", mime: "video/x-ms-asf" };
          break;
        }
        await e.ignore(v);
      }
      return { ext: "asf", mime: "application/vnd.ms-asf" };
    }
    if (i([171, 75, 84, 88, 32, 49, 49, 187, 13, 10, 26, 10])) return { ext: "ktx", mime: "image/ktx" };
    if ((i([126, 16, 4]) || i([126, 24, 4])) && i([48, 77, 73, 69], { offset: 4 })) return { ext: "mie", mime: "application/x-mie" };
    if (i([39, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], { offset: 2 })) return { ext: "shp", mime: "application/x-esri-shape" };
    if (i([0, 0, 0, 12, 106, 80, 32, 32, 13, 10, 135, 10])) {
      await e.ignore(20);
      switch (await e.readToken(new Token.StringType(4, "ascii"))) {
        case "jp2 ":
          return { ext: "jp2", mime: "image/jp2" };
        case "jpx ":
          return { ext: "jpx", mime: "image/jpx" };
        case "jpm ":
          return { ext: "jpm", mime: "image/jpm" };
        case "mjp2":
          return { ext: "mj2", mime: "image/mj2" };
        default:
          return;
      }
    }
    if (i([255, 10]) || i([0, 0, 0, 12, 74, 88, 76, 32, 13, 10, 135, 10])) return { ext: "jxl", mime: "image/jxl" };
    if (i([0, 0, 1, 186]) || i([0, 0, 1, 179])) return { ext: "mpg", mime: "video/mpeg" };
    if (i([0, 1, 0, 0, 0])) return { ext: "ttf", mime: "font/ttf" };
    if (i([0, 0, 1, 0])) return { ext: "ico", mime: "image/x-icon" };
    if (i([0, 0, 2, 0])) return { ext: "cur", mime: "image/x-icon" };
    if (i([208, 207, 17, 224, 161, 177, 26, 225])) return { ext: "cfb", mime: "application/x-cfb" };
    if (await e.peekBuffer(t, { length: Math.min(256, e.fileInfo.size), mayBeLess: true }), a("BEGIN:")) {
      if (a("VCARD", { offset: 6 })) return { ext: "vcf", mime: "text/vcard" };
      if (a("VCALENDAR", { offset: 6 })) return { ext: "ics", mime: "text/calendar" };
    }
    if (a("FUJIFILMCCD-RAW")) return { ext: "raf", mime: "image/x-fujifilm-raf" };
    if (a("Extended Module:")) return { ext: "xm", mime: "audio/x-xm" };
    if (a("Creative Voice File")) return { ext: "voc", mime: "audio/x-voc" };
    if (i([4, 0, 0, 0]) && t.length >= 16) {
      const y = t.readUInt32LE(12);
      if (y > 12 && t.length >= y + 16) try {
        const I = t.slice(16, y + 16).toString();
        if (JSON.parse(I).files) return { ext: "asar", mime: "application/x-asar" };
      } catch (E) {
      }
    }
    if (i([6, 14, 43, 52, 2, 5, 1, 1, 13, 1, 2, 1, 1, 2])) return { ext: "mxf", mime: "application/mxf" };
    if (a("SCRM", { offset: 44 })) return { ext: "s3m", mime: "audio/x-s3m" };
    if (i([71], { offset: 4 }) && (i([71], { offset: 192 }) || i([71], { offset: 196 }))) return { ext: "mts", mime: "video/mp2t" };
    if (i([66, 79, 79, 75, 77, 79, 66, 73], { offset: 60 })) return { ext: "mobi", mime: "application/x-mobipocket-ebook" };
    if (i([68, 73, 67, 77], { offset: 128 })) return { ext: "dcm", mime: "application/dicom" };
    if (i([76, 0, 0, 0, 1, 20, 2, 0, 0, 0, 0, 0, 192, 0, 0, 0, 0, 0, 0, 70])) return { ext: "lnk", mime: "application/x.ms.shortcut" };
    if (i([98, 111, 111, 107, 0, 0, 0, 0, 109, 97, 114, 107, 0, 0, 0, 0])) return { ext: "alias", mime: "application/x.apple.alias" };
    if (i([76, 80], { offset: 34 }) && (i([0, 0, 1], { offset: 8 }) || i([1, 0, 2], { offset: 8 }) || i([2, 0, 2], { offset: 8 }))) return { ext: "eot", mime: "application/vnd.ms-fontobject" };
    if (i([6, 6, 237, 245, 216, 29, 70, 229, 189, 49, 239, 231, 254, 116, 183, 29])) return { ext: "indd", mime: "application/x-indesign" };
    if (await e.peekBuffer(t, { length: Math.min(512, e.fileInfo.size), mayBeLess: true }), tarHeaderChecksumMatches(t)) return { ext: "tar", mime: "application/x-tar" };
    if (i([255, 254, 255, 14, 83, 0, 107, 0, 101, 0, 116, 0, 99, 0, 104, 0, 85, 0, 112, 0, 32, 0, 77, 0, 111, 0, 100, 0, 101, 0, 108, 0])) return { ext: "skp", mime: "application/vnd.sketchup.skp" };
    if (a("-----BEGIN PGP MESSAGE-----")) return { ext: "pgp", mime: "application/pgp-encrypted" };
    if (t.length >= 2 && i([255, 224], { offset: 0, mask: [255, 224] })) {
      if (i([16], { offset: 1, mask: [22] })) return i([8], { offset: 1, mask: [8] }), { ext: "aac", mime: "audio/aac" };
      if (i([2], { offset: 1, mask: [6] })) return { ext: "mp3", mime: "audio/mpeg" };
      if (i([4], { offset: 1, mask: [6] })) return { ext: "mp2", mime: "audio/mpeg" };
      if (i([6], { offset: 1, mask: [6] })) return { ext: "mp1", mime: "audio/mpeg" };
    }
  }
  const stream = (readableStream) => new Promise((resolve, reject) => {
    const stream = eval("require")("stream");
    readableStream.on("error", reject), readableStream.once("readable", async () => {
      const e = new stream.PassThrough();
      let t;
      t = stream.pipeline ? stream.pipeline(readableStream, e, () => {
      }) : readableStream.pipe(e);
      const i = readableStream.read(minimumBytes) || readableStream.read() || Buffer.alloc(0);
      try {
        const t2 = await fromBuffer(i);
        e.fileType = t2;
      } catch (e2) {
        reject(e2);
      }
      resolve(t);
    });
  }), fileType = { fromStream, fromTokenizer, fromBuffer, stream };
  Object.defineProperty(fileType, "extensions", { get: () => new Set(supported.extensions) }), Object.defineProperty(fileType, "mimeTypes", { get: () => new Set(supported.mimeTypes) }), module.exports = fileType;
}