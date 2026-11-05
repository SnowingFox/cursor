// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 90443 range:11218505..11219202
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
90443: (e, t, r) => {
    "use strict";
    r.d(t, { Q: () => s, s: () => o });
    var n = r(20181);
    const s = (e2, t2 = 0, r2 = e2.byteLength - t2) => {
      if (s2 = e2, !("function" == typeof ArrayBuffer && s2 instanceof ArrayBuffer || "[object ArrayBuffer]" === Object.prototype.toString.call(s2))) throw new TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof e2} (${e2})`);
      var s2;
      return n.Buffer.from(e2, t2, r2);
    }, o = (e2, t2) => {
      if ("string" != typeof e2) throw new TypeError(`The "input" argument must be of type string. Received type ${typeof e2} (${e2})`);
      return t2 ? n.Buffer.from(e2, t2) : n.Buffer.from(e2);
    };
  }