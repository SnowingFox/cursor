// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 2909 range:30152..30982
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
2909: (e, t, r) => {
    "use strict";
    r.d(t, { a: () => s, n: () => i });
    const n = {}, o = {};
    for (let e2 = 0; e2 < 256; e2++) {
      let t2 = e2.toString(16).toLowerCase();
      1 === t2.length && (t2 = `0${t2}`), n[e2] = t2, o[t2] = e2;
    }
    function s(e2) {
      if (e2.length % 2 != 0) throw new Error("Hex encoded strings must have an even number length");
      const t2 = new Uint8Array(e2.length / 2);
      for (let r2 = 0; r2 < e2.length; r2 += 2) {
        const n2 = e2.slice(r2, r2 + 2).toLowerCase();
        if (!(n2 in o)) throw new Error(`Cannot decode unrecognized sequence ${n2} as hexadecimal`);
        t2[r2 / 2] = o[n2];
      }
      return t2;
    }
    function i(e2) {
      let t2 = "";
      for (let r2 = 0; r2 < e2.byteLength; r2++) t2 += n[e2[r2]];
      return t2;
    }
  }