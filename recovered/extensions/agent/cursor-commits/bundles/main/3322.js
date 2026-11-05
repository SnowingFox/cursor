// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 3322 range:328427..332487
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3322: (e2, n2, a2) => {
    "use strict";
    const { Blob: t2, File: s2 } = a2(181), { types: o2 } = a2(9023), { kState: r2 } = a2(5899), { isBlobLike: i2 } = a2(5728), { webidl: A } = a2(8005), { parseMIMEType: l, serializeAMimeType: c } = a2(3631), { kEnumerableProperty: m } = a2(9361), d = new TextEncoder();
    class g extends t2 {
      constructor(e3, n3, a3 = {}) {
        A.argumentLengthCheck(arguments, 2, { header: "File constructor" }), e3 = A.converters["sequence<BlobPart>"](e3);
        const t3 = n3 = A.converters.USVString(n3);
        let s3, m2 = (a3 = A.converters.FilePropertyBag(a3)).type;
        e: {
          if (m2) {
            if (m2 = l(m2), "failure" === m2) {
              m2 = "";
              break e;
            }
            m2 = c(m2).toLowerCase();
          }
          s3 = a3.lastModified;
        }
        super((function(e4, n4) {
          const a4 = [];
          for (const t4 of e4) if ("string" == typeof t4) {
            let e5 = t4;
            "native" === n4.endings && (e5 = E(e5)), a4.push(d.encode(e5));
          } else o2.isAnyArrayBuffer(t4) || o2.isTypedArray(t4) ? t4.buffer ? a4.push(new Uint8Array(t4.buffer, t4.byteOffset, t4.byteLength)) : a4.push(new Uint8Array(t4)) : i2(t4) && a4.push(t4);
          return a4;
        })(e3, a3), { type: m2 }), this[r2] = { name: t3, lastModified: s3, type: m2 };
      }
      get name() {
        return A.brandCheck(this, g), this[r2].name;
      }
      get lastModified() {
        return A.brandCheck(this, g), this[r2].lastModified;
      }
      get type() {
        return A.brandCheck(this, g), this[r2].type;
      }
    }
    class u {
      constructor(e3, n3, a3 = {}) {
        const t3 = n3, s3 = a3.type, o3 = a3.lastModified ?? Date.now();
        this[r2] = { blobLike: e3, name: t3, type: s3, lastModified: o3 };
      }
      stream(...e3) {
        return A.brandCheck(this, u), this[r2].blobLike.stream(...e3);
      }
      arrayBuffer(...e3) {
        return A.brandCheck(this, u), this[r2].blobLike.arrayBuffer(...e3);
      }
      slice(...e3) {
        return A.brandCheck(this, u), this[r2].blobLike.slice(...e3);
      }
      text(...e3) {
        return A.brandCheck(this, u), this[r2].blobLike.text(...e3);
      }
      get size() {
        return A.brandCheck(this, u), this[r2].blobLike.size;
      }
      get type() {
        return A.brandCheck(this, u), this[r2].blobLike.type;
      }
      get name() {
        return A.brandCheck(this, u), this[r2].name;
      }
      get lastModified() {
        return A.brandCheck(this, u), this[r2].lastModified;
      }
      get [Symbol.toStringTag]() {
        return "File";
      }
    }
    function E(e3) {
      let n3 = "\n";
      return "win32" === process.platform && (n3 = "\r\n"), e3.replace(/\r?\n/g, n3);
    }
    Object.defineProperties(g.prototype, { [Symbol.toStringTag]: { value: "File", configurable: true }, name: m, lastModified: m }), A.converters.Blob = A.interfaceConverter(t2), A.converters.BlobPart = function(e3, n3) {
      if ("Object" === A.util.Type(e3)) {
        if (i2(e3)) return A.converters.Blob(e3, { strict: false });
        if (ArrayBuffer.isView(e3) || o2.isAnyArrayBuffer(e3)) return A.converters.BufferSource(e3, n3);
      }
      return A.converters.USVString(e3, n3);
    }, A.converters["sequence<BlobPart>"] = A.sequenceConverter(A.converters.BlobPart), A.converters.FilePropertyBag = A.dictionaryConverter([{ key: "lastModified", converter: A.converters["long long"], get defaultValue() {
      return Date.now();
    } }, { key: "type", converter: A.converters.DOMString, defaultValue: "" }, { key: "endings", converter: (e3) => ("native" !== (e3 = (e3 = A.converters.DOMString(e3)).toLowerCase()) && (e3 = "transparent"), e3), defaultValue: "transparent" }]), e2.exports = { File: g, FileLike: u, isFileLike: function(e3) {
      return s2 && e3 instanceof s2 || e3 instanceof g || e3 && ("function" == typeof e3.stream || "function" == typeof e3.arrayBuffer) && "File" === e3[Symbol.toStringTag];
    } };
  }