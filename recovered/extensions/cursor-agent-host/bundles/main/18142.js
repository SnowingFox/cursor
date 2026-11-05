// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 18142 range:4307264..4311295
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
18142: (e, t, r) => {
    "use strict";
    const { Blob: n, File: s } = r(20181), { types: o } = r(39023), { kState: i } = r(77271), { isBlobLike: a } = r(98116), { webidl: c } = r(18193), { parseMIMEType: l, serializeAMimeType: u } = r(64387), { kEnumerableProperty: d } = r(83589), p = new TextEncoder();
    class m extends n {
      constructor(e2, t2, r2 = {}) {
        c.argumentLengthCheck(arguments, 2, { header: "File constructor" }), e2 = c.converters["sequence<BlobPart>"](e2);
        const n2 = t2 = c.converters.USVString(t2);
        let s2, d2 = (r2 = c.converters.FilePropertyBag(r2)).type;
        e: {
          if (d2) {
            if (d2 = l(d2), "failure" === d2) {
              d2 = "";
              break e;
            }
            d2 = u(d2).toLowerCase();
          }
          s2 = r2.lastModified;
        }
        super((function(e3, t3) {
          const r3 = [];
          for (const n3 of e3) if ("string" == typeof n3) {
            let e4 = n3;
            "native" === t3.endings && (e4 = f(e4)), r3.push(p.encode(e4));
          } else o.isAnyArrayBuffer(n3) || o.isTypedArray(n3) ? n3.buffer ? r3.push(new Uint8Array(n3.buffer, n3.byteOffset, n3.byteLength)) : r3.push(new Uint8Array(n3)) : a(n3) && r3.push(n3);
          return r3;
        })(e2, r2), { type: d2 }), this[i] = { name: n2, lastModified: s2, type: d2 };
      }
      get name() {
        return c.brandCheck(this, m), this[i].name;
      }
      get lastModified() {
        return c.brandCheck(this, m), this[i].lastModified;
      }
      get type() {
        return c.brandCheck(this, m), this[i].type;
      }
    }
    class h {
      constructor(e2, t2, r2 = {}) {
        const n2 = t2, s2 = r2.type, o2 = r2.lastModified ?? Date.now();
        this[i] = { blobLike: e2, name: n2, type: s2, lastModified: o2 };
      }
      stream(...e2) {
        return c.brandCheck(this, h), this[i].blobLike.stream(...e2);
      }
      arrayBuffer(...e2) {
        return c.brandCheck(this, h), this[i].blobLike.arrayBuffer(...e2);
      }
      slice(...e2) {
        return c.brandCheck(this, h), this[i].blobLike.slice(...e2);
      }
      text(...e2) {
        return c.brandCheck(this, h), this[i].blobLike.text(...e2);
      }
      get size() {
        return c.brandCheck(this, h), this[i].blobLike.size;
      }
      get type() {
        return c.brandCheck(this, h), this[i].blobLike.type;
      }
      get name() {
        return c.brandCheck(this, h), this[i].name;
      }
      get lastModified() {
        return c.brandCheck(this, h), this[i].lastModified;
      }
      get [Symbol.toStringTag]() {
        return "File";
      }
    }
    function f(e2) {
      let t2 = "\n";
      return "win32" === process.platform && (t2 = "\r\n"), e2.replace(/\r?\n/g, t2);
    }
    Object.defineProperties(m.prototype, { [Symbol.toStringTag]: { value: "File", configurable: true }, name: d, lastModified: d }), c.converters.Blob = c.interfaceConverter(n), c.converters.BlobPart = function(e2, t2) {
      if ("Object" === c.util.Type(e2)) {
        if (a(e2)) return c.converters.Blob(e2, { strict: false });
        if (ArrayBuffer.isView(e2) || o.isAnyArrayBuffer(e2)) return c.converters.BufferSource(e2, t2);
      }
      return c.converters.USVString(e2, t2);
    }, c.converters["sequence<BlobPart>"] = c.sequenceConverter(c.converters.BlobPart), c.converters.FilePropertyBag = c.dictionaryConverter([{ key: "lastModified", converter: c.converters["long long"], get defaultValue() {
      return Date.now();
    } }, { key: "type", converter: c.converters.DOMString, defaultValue: "" }, { key: "endings", converter: (e2) => ("native" !== (e2 = (e2 = c.converters.DOMString(e2)).toLowerCase()) && (e2 = "transparent"), e2), defaultValue: "transparent" }]), e.exports = { File: m, FileLike: h, isFileLike: function(e2) {
      return s && e2 instanceof s || e2 instanceof m || e2 && ("function" == typeof e2.stream || "function" == typeof e2.arrayBuffer) && "File" === e2[Symbol.toStringTag];
    } };
  }