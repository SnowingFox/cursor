// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 8142 range:5116564..5120621
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8142: (t2, e2, r2) => {
    "use strict";
    const { Blob: n2, File: s2 } = r2(181), { types: i2 } = r2(9023), { kState: o2 } = r2(7271), { isBlobLike: a } = r2(8116), { webidl: u } = r2(8193), { parseMIMEType: c, serializeAMimeType: l } = r2(4387), { kEnumerableProperty: m } = r2(3589), d = new TextEncoder();
    class f extends n2 {
      constructor(t3, e3, r3 = {}) {
        u.argumentLengthCheck(arguments, 2, { header: "File constructor" }), t3 = u.converters["sequence<BlobPart>"](t3);
        const n3 = e3 = u.converters.USVString(e3);
        let s3, m2 = (r3 = u.converters.FilePropertyBag(r3)).type;
        t: {
          if (m2) {
            if (m2 = c(m2), "failure" === m2) {
              m2 = "";
              break t;
            }
            m2 = l(m2).toLowerCase();
          }
          s3 = r3.lastModified;
        }
        super((function(t4, e4) {
          const r4 = [];
          for (const n4 of t4) if ("string" == typeof n4) {
            let t5 = n4;
            "native" === e4.endings && (t5 = h(t5)), r4.push(d.encode(t5));
          } else i2.isAnyArrayBuffer(n4) || i2.isTypedArray(n4) ? n4.buffer ? r4.push(new Uint8Array(n4.buffer, n4.byteOffset, n4.byteLength)) : r4.push(new Uint8Array(n4)) : a(n4) && r4.push(n4);
          return r4;
        })(t3, r3), { type: m2 }), this[o2] = { name: n3, lastModified: s3, type: m2 };
      }
      get name() {
        return u.brandCheck(this, f), this[o2].name;
      }
      get lastModified() {
        return u.brandCheck(this, f), this[o2].lastModified;
      }
      get type() {
        return u.brandCheck(this, f), this[o2].type;
      }
    }
    class p {
      constructor(t3, e3, r3 = {}) {
        const n3 = e3, s3 = r3.type, i3 = r3.lastModified ?? Date.now();
        this[o2] = { blobLike: t3, name: n3, type: s3, lastModified: i3 };
      }
      stream(...t3) {
        return u.brandCheck(this, p), this[o2].blobLike.stream(...t3);
      }
      arrayBuffer(...t3) {
        return u.brandCheck(this, p), this[o2].blobLike.arrayBuffer(...t3);
      }
      slice(...t3) {
        return u.brandCheck(this, p), this[o2].blobLike.slice(...t3);
      }
      text(...t3) {
        return u.brandCheck(this, p), this[o2].blobLike.text(...t3);
      }
      get size() {
        return u.brandCheck(this, p), this[o2].blobLike.size;
      }
      get type() {
        return u.brandCheck(this, p), this[o2].blobLike.type;
      }
      get name() {
        return u.brandCheck(this, p), this[o2].name;
      }
      get lastModified() {
        return u.brandCheck(this, p), this[o2].lastModified;
      }
      get [Symbol.toStringTag]() {
        return "File";
      }
    }
    function h(t3) {
      let e3 = "\n";
      return "win32" === process.platform && (e3 = "\r\n"), t3.replace(/\r?\n/g, e3);
    }
    Object.defineProperties(f.prototype, { [Symbol.toStringTag]: { value: "File", configurable: true }, name: m, lastModified: m }), u.converters.Blob = u.interfaceConverter(n2), u.converters.BlobPart = function(t3, e3) {
      if ("Object" === u.util.Type(t3)) {
        if (a(t3)) return u.converters.Blob(t3, { strict: false });
        if (ArrayBuffer.isView(t3) || i2.isAnyArrayBuffer(t3)) return u.converters.BufferSource(t3, e3);
      }
      return u.converters.USVString(t3, e3);
    }, u.converters["sequence<BlobPart>"] = u.sequenceConverter(u.converters.BlobPart), u.converters.FilePropertyBag = u.dictionaryConverter([{ key: "lastModified", converter: u.converters["long long"], get defaultValue() {
      return Date.now();
    } }, { key: "type", converter: u.converters.DOMString, defaultValue: "" }, { key: "endings", converter: (t3) => ("native" !== (t3 = (t3 = u.converters.DOMString(t3)).toLowerCase()) && (t3 = "transparent"), t3), defaultValue: "transparent" }]), t2.exports = { File: f, FileLike: p, isFileLike: function(t3) {
      return s2 && t3 instanceof s2 || t3 instanceof f || t3 && ("function" == typeof t3.stream || "function" == typeof t3.arrayBuffer) && "File" === t3[Symbol.toStringTag];
    } };
  }