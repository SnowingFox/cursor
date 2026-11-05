// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 48498 range:1432417..1446305
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
48498: (module) => {
    "use strict";
    const toBytes = (e) => [...e].map((e2) => e2.charCodeAt(0)), xpiZipFilename = toBytes("META-INF/mozilla.rsa"), oxmlContentTypes = toBytes("[Content_Types].xml"), oxmlRels = toBytes("_rels/.rels");
    function readUInt64LE(e, t = 0) {
      let r = e[t], n = 1, o = 0;
      for (; ++o < 8; ) n *= 256, r += e[t + o] * n;
      return r;
    }
    const fileType = (e) => {
      if (!(e instanceof Uint8Array || e instanceof ArrayBuffer || Buffer.isBuffer(e))) throw new TypeError(`Expected the \`input\` argument to be of type \`Uint8Array\` or \`Buffer\` or \`ArrayBuffer\`, got \`${typeof e}\``);
      const t = e instanceof Uint8Array ? e : new Uint8Array(e);
      if (!(t && t.length > 1)) return null;
      const r = (e2, r2) => {
        r2 = Object.assign({ offset: 0 }, r2);
        for (let n2 = 0; n2 < e2.length; n2++) if (r2.mask) {
          if (e2[n2] !== (r2.mask[n2] & t[n2 + r2.offset])) return false;
        } else if (e2[n2] !== t[n2 + r2.offset]) return false;
        return true;
      }, n = (e2, t2) => r(toBytes(e2), t2);
      if (r([255, 216, 255])) return { ext: "jpg", mime: "image/jpeg" };
      if (r([137, 80, 78, 71, 13, 10, 26, 10])) return { ext: "png", mime: "image/png" };
      if (r([71, 73, 70])) return { ext: "gif", mime: "image/gif" };
      if (r([87, 69, 66, 80], { offset: 8 })) return { ext: "webp", mime: "image/webp" };
      if (r([70, 76, 73, 70])) return { ext: "flif", mime: "image/flif" };
      if ((r([73, 73, 42, 0]) || r([77, 77, 0, 42])) && r([67, 82], { offset: 8 })) return { ext: "cr2", mime: "image/x-canon-cr2" };
      if (r([73, 73, 42, 0]) || r([77, 77, 0, 42])) return { ext: "tif", mime: "image/tiff" };
      if (r([66, 77])) return { ext: "bmp", mime: "image/bmp" };
      if (r([73, 73, 188])) return { ext: "jxr", mime: "image/vnd.ms-photo" };
      if (r([56, 66, 80, 83])) return { ext: "psd", mime: "image/vnd.adobe.photoshop" };
      if (r([80, 75, 3, 4])) {
        if (r([109, 105, 109, 101, 116, 121, 112, 101, 97, 112, 112, 108, 105, 99, 97, 116, 105, 111, 110, 47, 101, 112, 117, 98, 43, 122, 105, 112], { offset: 30 })) return { ext: "epub", mime: "application/epub+zip" };
        if (r(xpiZipFilename, { offset: 30 })) return { ext: "xpi", mime: "application/x-xpinstall" };
        if (n("mimetypeapplication/vnd.oasis.opendocument.text", { offset: 30 })) return { ext: "odt", mime: "application/vnd.oasis.opendocument.text" };
        if (n("mimetypeapplication/vnd.oasis.opendocument.spreadsheet", { offset: 30 })) return { ext: "ods", mime: "application/vnd.oasis.opendocument.spreadsheet" };
        if (n("mimetypeapplication/vnd.oasis.opendocument.presentation", { offset: 30 })) return { ext: "odp", mime: "application/vnd.oasis.opendocument.presentation" };
        const e2 = (e3, t2 = 0) => e3.findIndex((e4, r2, n2) => r2 >= t2 && 80 === n2[r2] && 75 === n2[r2 + 1] && 3 === n2[r2 + 2] && 4 === n2[r2 + 3]);
        let o = 0, s = false, i = null;
        do {
          const a = o + 30;
          if (s || (s = r(oxmlContentTypes, { offset: a }) || r(oxmlRels, { offset: a })), i || (n("word/", { offset: a }) ? i = { ext: "docx", mime: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" } : n("ppt/", { offset: a }) ? i = { ext: "pptx", mime: "application/vnd.openxmlformats-officedocument.presentationml.presentation" } : n("xl/", { offset: a }) && (i = { ext: "xlsx", mime: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" })), s && i) return i;
          o = e2(t, a);
        } while (o >= 0);
        if (i) return i;
      }
      if (r([80, 75]) && (3 === t[2] || 5 === t[2] || 7 === t[2]) && (4 === t[3] || 6 === t[3] || 8 === t[3])) return { ext: "zip", mime: "application/zip" };
      if (r([117, 115, 116, 97, 114], { offset: 257 })) return { ext: "tar", mime: "application/x-tar" };
      if (r([82, 97, 114, 33, 26, 7]) && (0 === t[6] || 1 === t[6])) return { ext: "rar", mime: "application/x-rar-compressed" };
      if (r([31, 139, 8])) return { ext: "gz", mime: "application/gzip" };
      if (r([66, 90, 104])) return { ext: "bz2", mime: "application/x-bzip2" };
      if (r([55, 122, 188, 175, 39, 28])) return { ext: "7z", mime: "application/x-7z-compressed" };
      if (r([120, 1])) return { ext: "dmg", mime: "application/x-apple-diskimage" };
      if (r([51, 103, 112, 53]) || r([0, 0, 0]) && r([102, 116, 121, 112], { offset: 4 }) && (r([109, 112, 52, 49], { offset: 8 }) || r([109, 112, 52, 50], { offset: 8 }) || r([105, 115, 111, 109], { offset: 8 }) || r([105, 115, 111, 50], { offset: 8 }) || r([109, 109, 112, 52], { offset: 8 }) || r([77, 52, 86], { offset: 8 }) || r([100, 97, 115, 104], { offset: 8 }))) return { ext: "mp4", mime: "video/mp4" };
      if (r([77, 84, 104, 100])) return { ext: "mid", mime: "audio/midi" };
      if (r([26, 69, 223, 163])) {
        const e2 = t.subarray(4, 4100), r2 = e2.findIndex((e3, t2, r3) => 66 === r3[t2] && 130 === r3[t2 + 1]);
        if (-1 !== r2) {
          const t2 = r2 + 3, n2 = (r3) => [...r3].every((r4, n3) => e2[t2 + n3] === r4.charCodeAt(0));
          if (n2("matroska")) return { ext: "mkv", mime: "video/x-matroska" };
          if (n2("webm")) return { ext: "webm", mime: "video/webm" };
        }
      }
      if (r([0, 0, 0, 20, 102, 116, 121, 112, 113, 116, 32, 32]) || r([102, 114, 101, 101], { offset: 4 }) || r([102, 116, 121, 112, 113, 116, 32, 32], { offset: 4 }) || r([109, 100, 97, 116], { offset: 4 }) || r([109, 111, 111, 118], { offset: 4 }) || r([119, 105, 100, 101], { offset: 4 })) return { ext: "mov", mime: "video/quicktime" };
      if (r([82, 73, 70, 70])) {
        if (r([65, 86, 73], { offset: 8 })) return { ext: "avi", mime: "video/vnd.avi" };
        if (r([87, 65, 86, 69], { offset: 8 })) return { ext: "wav", mime: "audio/vnd.wave" };
        if (r([81, 76, 67, 77], { offset: 8 })) return { ext: "qcp", mime: "audio/qcelp" };
      }
      if (r([48, 38, 178, 117, 142, 102, 207, 17, 166, 217])) {
        let e2 = 30;
        do {
          const n2 = readUInt64LE(t, e2 + 16);
          if (r([145, 7, 220, 183, 183, 169, 207, 17, 142, 230, 0, 192, 12, 32, 83, 101], { offset: e2 })) {
            if (r([64, 158, 105, 248, 77, 91, 207, 17, 168, 253, 0, 128, 95, 92, 68, 43], { offset: e2 + 24 })) return { ext: "wma", mime: "audio/x-ms-wma" };
            if (r([192, 239, 25, 188, 77, 91, 207, 17, 168, 253, 0, 128, 95, 92, 68, 43], { offset: e2 + 24 })) return { ext: "wmv", mime: "video/x-ms-asf" };
            break;
          }
          e2 += n2;
        } while (e2 + 24 <= t.length);
        return { ext: "asf", mime: "application/vnd.ms-asf" };
      }
      if (r([0, 0, 1, 186]) || r([0, 0, 1, 179])) return { ext: "mpg", mime: "video/mpeg" };
      if (r([102, 116, 121, 112, 51, 103], { offset: 4 })) return { ext: "3gp", mime: "video/3gpp" };
      for (let e2 = 0; e2 < 2 && e2 < t.length - 16; e2++) {
        if (r([73, 68, 51], { offset: e2 }) || r([255, 226], { offset: e2, mask: [255, 226] })) return { ext: "mp3", mime: "audio/mpeg" };
        if (r([255, 228], { offset: e2, mask: [255, 228] })) return { ext: "mp2", mime: "audio/mpeg" };
        if (r([255, 248], { offset: e2, mask: [255, 252] })) return { ext: "mp2", mime: "audio/mpeg" };
        if (r([255, 240], { offset: e2, mask: [255, 252] })) return { ext: "mp4", mime: "audio/mpeg" };
      }
      if (r([102, 116, 121, 112, 77, 52, 65], { offset: 4 })) return { ext: "m4a", mime: "audio/mp4" };
      if (r([79, 112, 117, 115, 72, 101, 97, 100], { offset: 28 })) return { ext: "opus", mime: "audio/opus" };
      if (r([79, 103, 103, 83])) return r([128, 116, 104, 101, 111, 114, 97], { offset: 28 }) ? { ext: "ogv", mime: "video/ogg" } : r([1, 118, 105, 100, 101, 111, 0], { offset: 28 }) ? { ext: "ogm", mime: "video/ogg" } : r([127, 70, 76, 65, 67], { offset: 28 }) ? { ext: "oga", mime: "audio/ogg" } : r([83, 112, 101, 101, 120, 32, 32], { offset: 28 }) ? { ext: "spx", mime: "audio/ogg" } : r([1, 118, 111, 114, 98, 105, 115], { offset: 28 }) ? { ext: "ogg", mime: "audio/ogg" } : { ext: "ogx", mime: "application/ogg" };
      if (r([102, 76, 97, 67])) return { ext: "flac", mime: "audio/x-flac" };
      if (r([77, 65, 67, 32])) return { ext: "ape", mime: "audio/ape" };
      if (r([119, 118, 112, 107])) return { ext: "wv", mime: "audio/wavpack" };
      if (r([35, 33, 65, 77, 82, 10])) return { ext: "amr", mime: "audio/amr" };
      if (r([37, 80, 68, 70])) return { ext: "pdf", mime: "application/pdf" };
      if (r([77, 90])) return { ext: "exe", mime: "application/x-msdownload" };
      if ((67 === t[0] || 70 === t[0]) && r([87, 83], { offset: 1 })) return { ext: "swf", mime: "application/x-shockwave-flash" };
      if (r([123, 92, 114, 116, 102])) return { ext: "rtf", mime: "application/rtf" };
      if (r([0, 97, 115, 109])) return { ext: "wasm", mime: "application/wasm" };
      if (r([119, 79, 70, 70]) && (r([0, 1, 0, 0], { offset: 4 }) || r([79, 84, 84, 79], { offset: 4 }))) return { ext: "woff", mime: "font/woff" };
      if (r([119, 79, 70, 50]) && (r([0, 1, 0, 0], { offset: 4 }) || r([79, 84, 84, 79], { offset: 4 }))) return { ext: "woff2", mime: "font/woff2" };
      if (r([76, 80], { offset: 34 }) && (r([0, 0, 1], { offset: 8 }) || r([1, 0, 2], { offset: 8 }) || r([2, 0, 2], { offset: 8 }))) return { ext: "eot", mime: "application/vnd.ms-fontobject" };
      if (r([0, 1, 0, 0, 0])) return { ext: "ttf", mime: "font/ttf" };
      if (r([79, 84, 84, 79, 0])) return { ext: "otf", mime: "font/otf" };
      if (r([0, 0, 1, 0])) return { ext: "ico", mime: "image/x-icon" };
      if (r([0, 0, 2, 0])) return { ext: "cur", mime: "image/x-icon" };
      if (r([70, 76, 86, 1])) return { ext: "flv", mime: "video/x-flv" };
      if (r([37, 33])) return { ext: "ps", mime: "application/postscript" };
      if (r([253, 55, 122, 88, 90, 0])) return { ext: "xz", mime: "application/x-xz" };
      if (r([83, 81, 76, 105])) return { ext: "sqlite", mime: "application/x-sqlite3" };
      if (r([78, 69, 83, 26])) return { ext: "nes", mime: "application/x-nintendo-nes-rom" };
      if (r([67, 114, 50, 52])) return { ext: "crx", mime: "application/x-google-chrome-extension" };
      if (r([77, 83, 67, 70]) || r([73, 83, 99, 40])) return { ext: "cab", mime: "application/vnd.ms-cab-compressed" };
      if (r([33, 60, 97, 114, 99, 104, 62, 10, 100, 101, 98, 105, 97, 110, 45, 98, 105, 110, 97, 114, 121])) return { ext: "deb", mime: "application/x-deb" };
      if (r([33, 60, 97, 114, 99, 104, 62])) return { ext: "ar", mime: "application/x-unix-archive" };
      if (r([237, 171, 238, 219])) return { ext: "rpm", mime: "application/x-rpm" };
      if (r([31, 160]) || r([31, 157])) return { ext: "Z", mime: "application/x-compress" };
      if (r([76, 90, 73, 80])) return { ext: "lz", mime: "application/x-lzip" };
      if (r([208, 207, 17, 224, 161, 177, 26, 225])) return { ext: "msi", mime: "application/x-msi" };
      if (r([6, 14, 43, 52, 2, 5, 1, 1, 13, 1, 2, 1, 1, 2])) return { ext: "mxf", mime: "application/mxf" };
      if (r([71], { offset: 4 }) && (r([71], { offset: 192 }) || r([71], { offset: 196 }))) return { ext: "mts", mime: "video/mp2t" };
      if (r([66, 76, 69, 78, 68, 69, 82])) return { ext: "blend", mime: "application/x-blender" };
      if (r([66, 80, 71, 251])) return { ext: "bpg", mime: "image/bpg" };
      if (r([0, 0, 0, 12, 106, 80, 32, 32, 13, 10, 135, 10])) {
        if (r([106, 112, 50, 32], { offset: 20 })) return { ext: "jp2", mime: "image/jp2" };
        if (r([106, 112, 120, 32], { offset: 20 })) return { ext: "jpx", mime: "image/jpx" };
        if (r([106, 112, 109, 32], { offset: 20 })) return { ext: "jpm", mime: "image/jpm" };
        if (r([109, 106, 112, 50], { offset: 20 })) return { ext: "mj2", mime: "image/mj2" };
      }
      if (r([70, 79, 82, 77])) return { ext: "aif", mime: "audio/aiff" };
      if (n("<?xml ")) return { ext: "xml", mime: "application/xml" };
      if (r([66, 79, 79, 75, 77, 79, 66, 73], { offset: 60 })) return { ext: "mobi", mime: "application/x-mobipocket-ebook" };
      if (r([102, 116, 121, 112], { offset: 4 })) {
        if (r([109, 105, 102, 49], { offset: 8 })) return { ext: "heic", mime: "image/heif" };
        if (r([109, 115, 102, 49], { offset: 8 })) return { ext: "heic", mime: "image/heif-sequence" };
        if (r([104, 101, 105, 99], { offset: 8 }) || r([104, 101, 105, 120], { offset: 8 })) return { ext: "heic", mime: "image/heic" };
        if (r([104, 101, 118, 99], { offset: 8 }) || r([104, 101, 118, 120], { offset: 8 })) return { ext: "heic", mime: "image/heic-sequence" };
      }
      return r([171, 75, 84, 88, 32, 49, 49, 187, 13, 10, 26, 10]) ? { ext: "ktx", mime: "image/ktx" } : r([68, 73, 67, 77], { offset: 128 }) ? { ext: "dcm", mime: "application/dicom" } : r([77, 80, 43]) || r([77, 80, 67, 75]) ? { ext: "mpc", mime: "audio/x-musepack" } : r([66, 69, 71, 73, 78, 58]) ? { ext: "ics", mime: "text/calendar" } : r([103, 108, 84, 70, 2, 0, 0, 0]) ? { ext: "glb", mime: "model/gltf-binary" } : r([212, 195, 178, 161]) || r([161, 178, 195, 212]) ? { ext: "pcap", mime: "application/vnd.tcpdump.pcap" } : null;
    };
    module.exports = fileType, module.exports.default = fileType, Object.defineProperty(fileType, "minimumBytes", { value: 4100 }), module.exports.stream = (readableStream) => new Promise((resolve, reject) => {
      const stream = eval("require")("stream");
      readableStream.once("readable", () => {
        const e = new stream.PassThrough(), t = readableStream.read(module.exports.minimumBytes) || readableStream.read();
        try {
          e.fileType = fileType(t);
        } catch (e2) {
          reject(e2);
        }
        readableStream.unshift(t), stream.pipeline ? resolve(stream.pipeline(readableStream, e, () => {
        })) : resolve(readableStream.pipe(e));
      });
    });
  }