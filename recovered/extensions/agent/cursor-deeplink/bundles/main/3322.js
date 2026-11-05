// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 3322 range:424641..428684
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3322: (e2, t2, A2) => {
    "use strict";
    const { Blob: n2, File: r2 } = A2(181), { types: o2 } = A2(9023), { kState: s } = A2(5899), { isBlobLike: i } = A2(5728), { webidl: a } = A2(8005), { parseMIMEType: c, serializeAMimeType: l } = A2(3631), { kEnumerableProperty: u } = A2(9361), g = new TextEncoder();
    class E extends n2 {
      constructor(e3, t3, A3 = {}) {
        a.argumentLengthCheck(arguments, 2, { header: "File constructor" }), e3 = a.converters["sequence<BlobPart>"](e3);
        const n3 = t3 = a.converters.USVString(t3);
        let r3, u2 = (A3 = a.converters.FilePropertyBag(A3)).type;
        e: {
          if (u2) {
            if (u2 = c(u2), "failure" === u2) {
              u2 = "";
              break e;
            }
            u2 = l(u2).toLowerCase();
          }
          r3 = A3.lastModified;
        }
        super((function(e4, t4) {
          const A4 = [];
          for (const n4 of e4) if ("string" == typeof n4) {
            let e5 = n4;
            "native" === t4.endings && (e5 = d(e5)), A4.push(g.encode(e5));
          } else o2.isAnyArrayBuffer(n4) || o2.isTypedArray(n4) ? n4.buffer ? A4.push(new Uint8Array(n4.buffer, n4.byteOffset, n4.byteLength)) : A4.push(new Uint8Array(n4)) : i(n4) && A4.push(n4);
          return A4;
        })(e3, A3), { type: u2 }), this[s] = { name: n3, lastModified: r3, type: u2 };
      }
      get name() {
        return a.brandCheck(this, E), this[s].name;
      }
      get lastModified() {
        return a.brandCheck(this, E), this[s].lastModified;
      }
      get type() {
        return a.brandCheck(this, E), this[s].type;
      }
    }
    class h {
      constructor(e3, t3, A3 = {}) {
        const n3 = t3, r3 = A3.type, o3 = A3.lastModified ?? Date.now();
        this[s] = { blobLike: e3, name: n3, type: r3, lastModified: o3 };
      }
      stream(...e3) {
        return a.brandCheck(this, h), this[s].blobLike.stream(...e3);
      }
      arrayBuffer(...e3) {
        return a.brandCheck(this, h), this[s].blobLike.arrayBuffer(...e3);
      }
      slice(...e3) {
        return a.brandCheck(this, h), this[s].blobLike.slice(...e3);
      }
      text(...e3) {
        return a.brandCheck(this, h), this[s].blobLike.text(...e3);
      }
      get size() {
        return a.brandCheck(this, h), this[s].blobLike.size;
      }
      get type() {
        return a.brandCheck(this, h), this[s].blobLike.type;
      }
      get name() {
        return a.brandCheck(this, h), this[s].name;
      }
      get lastModified() {
        return a.brandCheck(this, h), this[s].lastModified;
      }
      get [Symbol.toStringTag]() {
        return "File";
      }
    }
    function d(e3) {
      let t3 = "\n";
      return "win32" === process.platform && (t3 = "\r\n"), e3.replace(/\r?\n/g, t3);
    }
    Object.defineProperties(E.prototype, { [Symbol.toStringTag]: { value: "File", configurable: true }, name: u, lastModified: u }), a.converters.Blob = a.interfaceConverter(n2), a.converters.BlobPart = function(e3, t3) {
      if ("Object" === a.util.Type(e3)) {
        if (i(e3)) return a.converters.Blob(e3, { strict: false });
        if (ArrayBuffer.isView(e3) || o2.isAnyArrayBuffer(e3)) return a.converters.BufferSource(e3, t3);
      }
      return a.converters.USVString(e3, t3);
    }, a.converters["sequence<BlobPart>"] = a.sequenceConverter(a.converters.BlobPart), a.converters.FilePropertyBag = a.dictionaryConverter([{ key: "lastModified", converter: a.converters["long long"], get defaultValue() {
      return Date.now();
    } }, { key: "type", converter: a.converters.DOMString, defaultValue: "" }, { key: "endings", converter: (e3) => ("native" !== (e3 = (e3 = a.converters.DOMString(e3)).toLowerCase()) && (e3 = "transparent"), e3), defaultValue: "transparent" }]), e2.exports = { File: E, FileLike: h, isFileLike: function(e3) {
      return r2 && e3 instanceof r2 || e3 instanceof E || e3 && ("function" == typeof e3.stream || "function" == typeof e3.arrayBuffer) && "File" === e3[Symbol.toStringTag];
    } };
  }