// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 61522 range:9359060..9360430
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
61522: (e, t, r) => {
    "use strict";
    r.d(t, { Tr: () => i, Vq: () => d, YL: () => n, gy: () => l, jn: () => u, vE: () => c, yo: () => o });
    const n = 80;
    let s;
    const o = (e2) => {
      s = e2;
    }, i = () => void 0 !== s, a = () => {
      if (void 0 === s) throw new Error("webp codec not registered: registerWebpCodec() must be called by a Node server before decoding/encoding webp");
      return s;
    }, c = (e2) => e2.length >= 12 && "RIFF" === e2.toString("ascii", 0, 4) && "WEBP" === e2.toString("ascii", 8, 12), l = (e2) => {
      if (!c(e2) || e2.length < 16) return;
      const t2 = e2.toString("ascii", 12, 16);
      if ("VP8 " === t2) {
        if (e2.length < 30 || 157 !== e2[23] || 1 !== e2[24] || 42 !== e2[25]) return;
        return { width: 16383 & (e2[26] | e2[27] << 8), height: 16383 & (e2[28] | e2[29] << 8) };
      }
      if ("VP8L" === t2) {
        if (e2.length < 25 || 47 !== e2[20]) return;
        const t3 = (e2[21] | e2[22] << 8 | e2[23] << 16 | e2[24] << 24) >>> 0;
        return { width: 1 + (16383 & t3), height: 1 + (t3 >> 14 & 16383) };
      }
      if ("VP8X" === t2) {
        if (e2.length < 30) return;
        return { width: 1 + (e2[24] | e2[25] << 8 | e2[26] << 16), height: 1 + (e2[27] | e2[28] << 8 | e2[29] << 16) };
      }
    }, u = (e2) => a().decode(e2), d = (e2) => a().encode(e2);
  }