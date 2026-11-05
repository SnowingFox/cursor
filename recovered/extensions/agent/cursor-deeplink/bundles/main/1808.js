// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 1808 range:190169..191140
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1808: (e2, t2, A2) => {
    "use strict";
    const { maxUnsigned16Bit: n2 } = A2(5440);
    let r2;
    try {
      r2 = A2(6982);
    } catch {
    }
    e2.exports = { WebsocketFrameSend: class {
      constructor(e3) {
        this.frameData = e3, this.maskKey = r2.randomBytes(4);
      }
      createFrame(e3) {
        const t3 = this.frameData?.byteLength ?? 0;
        let A3 = t3, r3 = 6;
        t3 > n2 ? (r3 += 8, A3 = 127) : t3 > 125 && (r3 += 2, A3 = 126);
        const o2 = Buffer.allocUnsafe(t3 + r3);
        o2[0] = o2[1] = 0, o2[0] |= 128, o2[0] = (240 & o2[0]) + e3, o2[r3 - 4] = this.maskKey[0], o2[r3 - 3] = this.maskKey[1], o2[r3 - 2] = this.maskKey[2], o2[r3 - 1] = this.maskKey[3], o2[1] = A3, 126 === A3 ? o2.writeUInt16BE(t3, 2) : 127 === A3 && (o2[2] = o2[3] = 0, o2.writeUIntBE(t3, 4, 6)), o2[1] |= 128;
        for (let e4 = 0; e4 < t3; e4++) o2[r3 + e4] = this.frameData[e4] ^ this.maskKey[e4 % 4];
        return o2;
      }
    } };
  }