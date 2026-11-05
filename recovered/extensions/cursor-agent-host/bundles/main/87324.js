// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 87324 range:12221198..12222143
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
87324: (e, t, r) => {
    "use strict";
    const { maxUnsigned16Bit: n } = r(15948);
    let s;
    try {
      s = r(76982);
    } catch {
    }
    e.exports = { WebsocketFrameSend: class {
      constructor(e2) {
        this.frameData = e2, this.maskKey = s.randomBytes(4);
      }
      createFrame(e2) {
        const t2 = this.frameData?.byteLength ?? 0;
        let r2 = t2, s2 = 6;
        t2 > n ? (s2 += 8, r2 = 127) : t2 > 125 && (s2 += 2, r2 = 126);
        const o = Buffer.allocUnsafe(t2 + s2);
        o[0] = o[1] = 0, o[0] |= 128, o[0] = (240 & o[0]) + e2, o[s2 - 4] = this.maskKey[0], o[s2 - 3] = this.maskKey[1], o[s2 - 2] = this.maskKey[2], o[s2 - 1] = this.maskKey[3], o[1] = r2, 126 === r2 ? o.writeUInt16BE(t2, 2) : 127 === r2 && (o[2] = o[3] = 0, o.writeUIntBE(t2, 4, 6)), o[1] |= 128;
        for (let e3 = 0; e3 < t2; e3++) o[s2 + e3] = this.frameData[e3] ^ this.maskKey[e3 % 4];
        return o;
      }
    } };
  }