// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 3322 range:332410..336453
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
3322: (e2, n2, t2) => {
    "use strict";
    const { Blob: a2, File: s2 } = t2(181), { types: o2 } = t2(9023), { kState: r } = t2(5899), { isBlobLike: i } = t2(5728), { webidl: A } = t2(8005), { parseMIMEType: c, serializeAMimeType: l } = t2(3631), { kEnumerableProperty: d } = t2(9361), m = new TextEncoder();
    class u extends a2 {
      constructor(e3, n3, t3 = {}) {
        A.argumentLengthCheck(arguments, 2, { header: "File constructor" }), e3 = A.converters["sequence<BlobPart>"](e3);
        const a3 = n3 = A.converters.USVString(n3);
        let s3, d2 = (t3 = A.converters.FilePropertyBag(t3)).type;
        e: {
          if (d2) {
            if (d2 = c(d2), "failure" === d2) {
              d2 = "";
              break e;
            }
            d2 = l(d2).toLowerCase();
          }
          s3 = t3.lastModified;
        }
        super((function(e4, n4) {
          const t4 = [];
          for (const a4 of e4) if ("string" == typeof a4) {
            let e5 = a4;
            "native" === n4.endings && (e5 = p(e5)), t4.push(m.encode(e5));
          } else o2.isAnyArrayBuffer(a4) || o2.isTypedArray(a4) ? a4.buffer ? t4.push(new Uint8Array(a4.buffer, a4.byteOffset, a4.byteLength)) : t4.push(new Uint8Array(a4)) : i(a4) && t4.push(a4);
          return t4;
        })(e3, t3), { type: d2 }), this[r] = { name: a3, lastModified: s3, type: d2 };
      }
      get name() {
        return A.brandCheck(this, u), this[r].name;
      }
      get lastModified() {
        return A.brandCheck(this, u), this[r].lastModified;
      }
      get type() {
        return A.brandCheck(this, u), this[r].type;
      }
    }
    class g {
      constructor(e3, n3, t3 = {}) {
        const a3 = n3, s3 = t3.type, o3 = t3.lastModified ?? Date.now();
        this[r] = { blobLike: e3, name: a3, type: s3, lastModified: o3 };
      }
      stream(...e3) {
        return A.brandCheck(this, g), this[r].blobLike.stream(...e3);
      }
      arrayBuffer(...e3) {
        return A.brandCheck(this, g), this[r].blobLike.arrayBuffer(...e3);
      }
      slice(...e3) {
        return A.brandCheck(this, g), this[r].blobLike.slice(...e3);
      }
      text(...e3) {
        return A.brandCheck(this, g), this[r].blobLike.text(...e3);
      }
      get size() {
        return A.brandCheck(this, g), this[r].blobLike.size;
      }
      get type() {
        return A.brandCheck(this, g), this[r].blobLike.type;
      }
      get name() {
        return A.brandCheck(this, g), this[r].name;
      }
      get lastModified() {
        return A.brandCheck(this, g), this[r].lastModified;
      }
      get [Symbol.toStringTag]() {
        return "File";
      }
    }
    function p(e3) {
      let n3 = "\n";
      return "win32" === process.platform && (n3 = "\r\n"), e3.replace(/\r?\n/g, n3);
    }
    Object.defineProperties(u.prototype, { [Symbol.toStringTag]: { value: "File", configurable: true }, name: d, lastModified: d }), A.converters.Blob = A.interfaceConverter(a2), A.converters.BlobPart = function(e3, n3) {
      if ("Object" === A.util.Type(e3)) {
        if (i(e3)) return A.converters.Blob(e3, { strict: false });
        if (ArrayBuffer.isView(e3) || o2.isAnyArrayBuffer(e3)) return A.converters.BufferSource(e3, n3);
      }
      return A.converters.USVString(e3, n3);
    }, A.converters["sequence<BlobPart>"] = A.sequenceConverter(A.converters.BlobPart), A.converters.FilePropertyBag = A.dictionaryConverter([{ key: "lastModified", converter: A.converters["long long"], get defaultValue() {
      return Date.now();
    } }, { key: "type", converter: A.converters.DOMString, defaultValue: "" }, { key: "endings", converter: (e3) => ("native" !== (e3 = (e3 = A.converters.DOMString(e3)).toLowerCase()) && (e3 = "transparent"), e3), defaultValue: "transparent" }]), e2.exports = { File: u, FileLike: g, isFileLike: function(e3) {
      return s2 && e3 instanceof s2 || e3 instanceof u || e3 && ("function" == typeof e3.stream || "function" == typeof e3.arrayBuffer) && "File" === e3[Symbol.toStringTag];
    } };
  }