// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 2909 range:27918..28748
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
2909: (e, t, r) => {
    "use strict";
    r.d(t, { a: () => o, n: () => i });
    const n = {}, s = {};
    for (let e2 = 0; e2 < 256; e2++) {
      let t2 = e2.toString(16).toLowerCase();
      1 === t2.length && (t2 = `0${t2}`), n[e2] = t2, s[t2] = e2;
    }
    function o(e2) {
      if (e2.length % 2 != 0) throw new Error("Hex encoded strings must have an even number length");
      const t2 = new Uint8Array(e2.length / 2);
      for (let r2 = 0; r2 < e2.length; r2 += 2) {
        const n2 = e2.slice(r2, r2 + 2).toLowerCase();
        if (!(n2 in s)) throw new Error(`Cannot decode unrecognized sequence ${n2} as hexadecimal`);
        t2[r2 / 2] = s[n2];
      }
      return t2;
    }
    function i(e2) {
      let t2 = "";
      for (let r2 = 0; r2 < e2.byteLength; r2++) t2 += n[e2[r2]];
      return t2;
    }
  }