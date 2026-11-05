// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 3322 range:328219..332262
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3322: (e2, A2, t2) => {
    "use strict";
    const { Blob: n2, File: r2 } = t2(181), { types: o2 } = t2(9023), { kState: s } = t2(5899), { isBlobLike: a } = t2(5728), { webidl: i } = t2(8005), { parseMIMEType: c, serializeAMimeType: l } = t2(3631), { kEnumerableProperty: g } = t2(9361), E = new TextEncoder();
    class u extends n2 {
      constructor(e3, A3, t3 = {}) {
        i.argumentLengthCheck(arguments, 2, { header: "File constructor" }), e3 = i.converters["sequence<BlobPart>"](e3);
        const n3 = A3 = i.converters.USVString(A3);
        let r3, g2 = (t3 = i.converters.FilePropertyBag(t3)).type;
        e: {
          if (g2) {
            if (g2 = c(g2), "failure" === g2) {
              g2 = "";
              break e;
            }
            g2 = l(g2).toLowerCase();
          }
          r3 = t3.lastModified;
        }
        super((function(e4, A4) {
          const t4 = [];
          for (const n4 of e4) if ("string" == typeof n4) {
            let e5 = n4;
            "native" === A4.endings && (e5 = I(e5)), t4.push(E.encode(e5));
          } else o2.isAnyArrayBuffer(n4) || o2.isTypedArray(n4) ? n4.buffer ? t4.push(new Uint8Array(n4.buffer, n4.byteOffset, n4.byteLength)) : t4.push(new Uint8Array(n4)) : a(n4) && t4.push(n4);
          return t4;
        })(e3, t3), { type: g2 }), this[s] = { name: n3, lastModified: r3, type: g2 };
      }
      get name() {
        return i.brandCheck(this, u), this[s].name;
      }
      get lastModified() {
        return i.brandCheck(this, u), this[s].lastModified;
      }
      get type() {
        return i.brandCheck(this, u), this[s].type;
      }
    }
    class d {
      constructor(e3, A3, t3 = {}) {
        const n3 = A3, r3 = t3.type, o3 = t3.lastModified ?? Date.now();
        this[s] = { blobLike: e3, name: n3, type: r3, lastModified: o3 };
      }
      stream(...e3) {
        return i.brandCheck(this, d), this[s].blobLike.stream(...e3);
      }
      arrayBuffer(...e3) {
        return i.brandCheck(this, d), this[s].blobLike.arrayBuffer(...e3);
      }
      slice(...e3) {
        return i.brandCheck(this, d), this[s].blobLike.slice(...e3);
      }
      text(...e3) {
        return i.brandCheck(this, d), this[s].blobLike.text(...e3);
      }
      get size() {
        return i.brandCheck(this, d), this[s].blobLike.size;
      }
      get type() {
        return i.brandCheck(this, d), this[s].blobLike.type;
      }
      get name() {
        return i.brandCheck(this, d), this[s].name;
      }
      get lastModified() {
        return i.brandCheck(this, d), this[s].lastModified;
      }
      get [Symbol.toStringTag]() {
        return "File";
      }
    }
    function I(e3) {
      let A3 = "\n";
      return "win32" === process.platform && (A3 = "\r\n"), e3.replace(/\r?\n/g, A3);
    }
    Object.defineProperties(u.prototype, { [Symbol.toStringTag]: { value: "File", configurable: true }, name: g, lastModified: g }), i.converters.Blob = i.interfaceConverter(n2), i.converters.BlobPart = function(e3, A3) {
      if ("Object" === i.util.Type(e3)) {
        if (a(e3)) return i.converters.Blob(e3, { strict: false });
        if (ArrayBuffer.isView(e3) || o2.isAnyArrayBuffer(e3)) return i.converters.BufferSource(e3, A3);
      }
      return i.converters.USVString(e3, A3);
    }, i.converters["sequence<BlobPart>"] = i.sequenceConverter(i.converters.BlobPart), i.converters.FilePropertyBag = i.dictionaryConverter([{ key: "lastModified", converter: i.converters["long long"], get defaultValue() {
      return Date.now();
    } }, { key: "type", converter: i.converters.DOMString, defaultValue: "" }, { key: "endings", converter: (e3) => ("native" !== (e3 = (e3 = i.converters.DOMString(e3)).toLowerCase()) && (e3 = "transparent"), e3), defaultValue: "transparent" }]), e2.exports = { File: u, FileLike: d, isFileLike: function(e3) {
      return r2 && e3 instanceof r2 || e3 instanceof u || e3 && ("function" == typeof e3.stream || "function" == typeof e3.arrayBuffer) && "File" === e3[Symbol.toStringTag];
    } };
  }