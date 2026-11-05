// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 35553 range:206265..207429
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
35553: (A, e, t) => {
  "use strict";
  const { maxUnsigned16Bit: r } = t(30229), s = 16386;
  let o, n = null, i = s;
  try {
    o = t(77598);
  } catch {
    o = { randomFillSync: function(A2, e2, t2) {
      for (let e3 = 0; e3 < A2.length; ++e3) A2[e3] = 255 * Math.random() | 0;
      return A2;
    } };
  }
  function a() {
    return i === s && (i = 0, o.randomFillSync(n ??= Buffer.allocUnsafe(s), 0, s)), [n[i++], n[i++], n[i++], n[i++]];
  }
  A.exports = { WebsocketFrameSend: class {
    constructor(A2) {
      this.frameData = A2;
    }
    createFrame(A2) {
      const e2 = this.frameData, t2 = a(), s2 = e2?.byteLength ?? 0;
      let o2 = s2, n2 = 6;
      s2 > r ? (n2 += 8, o2 = 127) : s2 > 125 && (n2 += 2, o2 = 126);
      const i2 = Buffer.allocUnsafe(s2 + n2);
      i2[0] = i2[1] = 0, i2[0] |= 128, i2[0] = (240 & i2[0]) + A2, i2[n2 - 4] = t2[0], i2[n2 - 3] = t2[1], i2[n2 - 2] = t2[2], i2[n2 - 1] = t2[3], i2[1] = o2, 126 === o2 ? i2.writeUInt16BE(s2, 2) : 127 === o2 && (i2[2] = i2[3] = 0, i2.writeUIntBE(s2, 4, 6)), i2[1] |= 128;
      for (let A3 = 0; A3 < s2; ++A3) i2[n2 + A3] = e2[A3] ^ t2[3 & A3];
      return i2;
    }
  } };
}