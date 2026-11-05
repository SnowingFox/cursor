// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 3322 range:609712..613772
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3322: (e2, a2, n2) => {
    "use strict";
    const { Blob: t2, File: s2 } = n2(181), { types: o2 } = n2(9023), { kState: r2 } = n2(5899), { isBlobLike: i2 } = n2(5728), { webidl: l } = n2(8005), { parseMIMEType: d, serializeAMimeType: m } = n2(3631), { kEnumerableProperty: c } = n2(9361), p = new TextEncoder();
    class A extends t2 {
      constructor(e3, a3, n3 = {}) {
        l.argumentLengthCheck(arguments, 2, { header: "File constructor" }), e3 = l.converters["sequence<BlobPart>"](e3);
        const t3 = a3 = l.converters.USVString(a3);
        let s3, c2 = (n3 = l.converters.FilePropertyBag(n3)).type;
        e: {
          if (c2) {
            if (c2 = d(c2), "failure" === c2) {
              c2 = "";
              break e;
            }
            c2 = m(c2).toLowerCase();
          }
          s3 = n3.lastModified;
        }
        super((function(e4, a4) {
          const n4 = [];
          for (const t4 of e4) if ("string" == typeof t4) {
            let e5 = t4;
            "native" === a4.endings && (e5 = g(e5)), n4.push(p.encode(e5));
          } else o2.isAnyArrayBuffer(t4) || o2.isTypedArray(t4) ? t4.buffer ? n4.push(new Uint8Array(t4.buffer, t4.byteOffset, t4.byteLength)) : n4.push(new Uint8Array(t4)) : i2(t4) && n4.push(t4);
          return n4;
        })(e3, n3), { type: c2 }), this[r2] = { name: t3, lastModified: s3, type: c2 };
      }
      get name() {
        return l.brandCheck(this, A), this[r2].name;
      }
      get lastModified() {
        return l.brandCheck(this, A), this[r2].lastModified;
      }
      get type() {
        return l.brandCheck(this, A), this[r2].type;
      }
    }
    class u {
      constructor(e3, a3, n3 = {}) {
        const t3 = a3, s3 = n3.type, o3 = n3.lastModified ?? Date.now();
        this[r2] = { blobLike: e3, name: t3, type: s3, lastModified: o3 };
      }
      stream(...e3) {
        return l.brandCheck(this, u), this[r2].blobLike.stream(...e3);
      }
      arrayBuffer(...e3) {
        return l.brandCheck(this, u), this[r2].blobLike.arrayBuffer(...e3);
      }
      slice(...e3) {
        return l.brandCheck(this, u), this[r2].blobLike.slice(...e3);
      }
      text(...e3) {
        return l.brandCheck(this, u), this[r2].blobLike.text(...e3);
      }
      get size() {
        return l.brandCheck(this, u), this[r2].blobLike.size;
      }
      get type() {
        return l.brandCheck(this, u), this[r2].blobLike.type;
      }
      get name() {
        return l.brandCheck(this, u), this[r2].name;
      }
      get lastModified() {
        return l.brandCheck(this, u), this[r2].lastModified;
      }
      get [Symbol.toStringTag]() {
        return "File";
      }
    }
    function g(e3) {
      let a3 = "\n";
      return "win32" === process.platform && (a3 = "\r\n"), e3.replace(/\r?\n/g, a3);
    }
    Object.defineProperties(A.prototype, { [Symbol.toStringTag]: { value: "File", configurable: true }, name: c, lastModified: c }), l.converters.Blob = l.interfaceConverter(t2), l.converters.BlobPart = function(e3, a3) {
      if ("Object" === l.util.Type(e3)) {
        if (i2(e3)) return l.converters.Blob(e3, { strict: false });
        if (ArrayBuffer.isView(e3) || o2.isAnyArrayBuffer(e3)) return l.converters.BufferSource(e3, a3);
      }
      return l.converters.USVString(e3, a3);
    }, l.converters["sequence<BlobPart>"] = l.sequenceConverter(l.converters.BlobPart), l.converters.FilePropertyBag = l.dictionaryConverter([{ key: "lastModified", converter: l.converters["long long"], get defaultValue() {
      return Date.now();
    } }, { key: "type", converter: l.converters.DOMString, defaultValue: "" }, { key: "endings", converter: (e3) => ("native" !== (e3 = (e3 = l.converters.DOMString(e3)).toLowerCase()) && (e3 = "transparent"), e3), defaultValue: "transparent" }]), e2.exports = { File: A, FileLike: u, isFileLike: function(e3) {
      return s2 && e3 instanceof s2 || e3 instanceof A || e3 && ("function" == typeof e3.stream || "function" == typeof e3.arrayBuffer) && "File" === e3[Symbol.toStringTag];
    } };
  }