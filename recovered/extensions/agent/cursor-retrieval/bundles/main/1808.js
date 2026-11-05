// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 1808 range:458912..459883
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1808: (e2, a2, n2) => {
    "use strict";
    const { maxUnsigned16Bit: t2 } = n2(5440);
    let s2;
    try {
      s2 = n2(6982);
    } catch {
    }
    e2.exports = { WebsocketFrameSend: class {
      constructor(e3) {
        this.frameData = e3, this.maskKey = s2.randomBytes(4);
      }
      createFrame(e3) {
        const a3 = this.frameData?.byteLength ?? 0;
        let n3 = a3, s3 = 6;
        a3 > t2 ? (s3 += 8, n3 = 127) : a3 > 125 && (s3 += 2, n3 = 126);
        const o2 = Buffer.allocUnsafe(a3 + s3);
        o2[0] = o2[1] = 0, o2[0] |= 128, o2[0] = (240 & o2[0]) + e3, o2[s3 - 4] = this.maskKey[0], o2[s3 - 3] = this.maskKey[1], o2[s3 - 2] = this.maskKey[2], o2[s3 - 1] = this.maskKey[3], o2[1] = n3, 126 === n3 ? o2.writeUInt16BE(a3, 2) : 127 === n3 && (o2[2] = o2[3] = 0, o2.writeUIntBE(a3, 4, 6)), o2[1] |= 128;
        for (let e4 = 0; e4 < a3; e4++) o2[s3 + e4] = this.frameData[e4] ^ this.maskKey[e4 % 4];
        return o2;
      }
    } };
  }