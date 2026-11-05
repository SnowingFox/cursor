// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 90165 range:478605..479956
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
90165: (A, e, t) => {
  "use strict";
  const { Blob: r, File: s } = t(4573), { kState: o } = t(15978), { webidl: n } = t(43290);
  class i {
    constructor(A2, e2, t2 = {}) {
      const r2 = e2, s2 = t2.type, n2 = t2.lastModified ?? Date.now();
      this[o] = { blobLike: A2, name: r2, type: s2, lastModified: n2 };
    }
    stream(...A2) {
      return n.brandCheck(this, i), this[o].blobLike.stream(...A2);
    }
    arrayBuffer(...A2) {
      return n.brandCheck(this, i), this[o].blobLike.arrayBuffer(...A2);
    }
    slice(...A2) {
      return n.brandCheck(this, i), this[o].blobLike.slice(...A2);
    }
    text(...A2) {
      return n.brandCheck(this, i), this[o].blobLike.text(...A2);
    }
    get size() {
      return n.brandCheck(this, i), this[o].blobLike.size;
    }
    get type() {
      return n.brandCheck(this, i), this[o].blobLike.type;
    }
    get name() {
      return n.brandCheck(this, i), this[o].name;
    }
    get lastModified() {
      return n.brandCheck(this, i), this[o].lastModified;
    }
    get [Symbol.toStringTag]() {
      return "File";
    }
  }
  n.converters.Blob = n.interfaceConverter(r), A.exports = { FileLike: i, isFileLike: function(A2) {
    return A2 instanceof s || A2 && ("function" == typeof A2.stream || "function" == typeof A2.arrayBuffer) && "File" === A2[Symbol.toStringTag];
  } };
}