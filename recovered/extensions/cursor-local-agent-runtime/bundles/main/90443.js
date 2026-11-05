// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 90443 range:7714376..7715073
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
90443: (e, t, r) => {
    "use strict";
    r.d(t, { Q: () => o, s: () => s });
    var n = r(20181);
    const o = (e2, t2 = 0, r2 = e2.byteLength - t2) => {
      if (o2 = e2, !("function" == typeof ArrayBuffer && o2 instanceof ArrayBuffer || "[object ArrayBuffer]" === Object.prototype.toString.call(o2))) throw new TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof e2} (${e2})`);
      var o2;
      return n.Buffer.from(e2, t2, r2);
    }, s = (e2, t2) => {
      if ("string" != typeof e2) throw new TypeError(`The "input" argument must be of type string. Received type ${typeof e2} (${e2})`);
      return t2 ? n.Buffer.from(e2, t2) : n.Buffer.from(e2);
    };
  }