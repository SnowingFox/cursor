// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 7324 range:4248893..4249864
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7324: (t2, e2, r2) => {
    "use strict";
    const { maxUnsigned16Bit: n2 } = r2(5948);
    let s2;
    try {
      s2 = r2(6982);
    } catch {
    }
    t2.exports = { WebsocketFrameSend: class {
      constructor(t3) {
        this.frameData = t3, this.maskKey = s2.randomBytes(4);
      }
      createFrame(t3) {
        const e3 = this.frameData?.byteLength ?? 0;
        let r3 = e3, s3 = 6;
        e3 > n2 ? (s3 += 8, r3 = 127) : e3 > 125 && (s3 += 2, r3 = 126);
        const i2 = Buffer.allocUnsafe(e3 + s3);
        i2[0] = i2[1] = 0, i2[0] |= 128, i2[0] = (240 & i2[0]) + t3, i2[s3 - 4] = this.maskKey[0], i2[s3 - 3] = this.maskKey[1], i2[s3 - 2] = this.maskKey[2], i2[s3 - 1] = this.maskKey[3], i2[1] = r3, 126 === r3 ? i2.writeUInt16BE(e3, 2) : 127 === r3 && (i2[2] = i2[3] = 0, i2.writeUIntBE(e3, 4, 6)), i2[1] |= 128;
        for (let t4 = 0; t4 < e3; t4++) i2[s3 + t4] = this.frameData[t4] ^ this.maskKey[t4 % 4];
        return i2;
      }
    } };
  }