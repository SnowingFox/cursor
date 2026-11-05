// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 1808 range:188005..188976
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
1808: (e2, n2, t2) => {
    "use strict";
    const { maxUnsigned16Bit: a2 } = t2(5440);
    let s2;
    try {
      s2 = t2(6982);
    } catch {
    }
    e2.exports = { WebsocketFrameSend: class {
      constructor(e3) {
        this.frameData = e3, this.maskKey = s2.randomBytes(4);
      }
      createFrame(e3) {
        const n3 = this.frameData?.byteLength ?? 0;
        let t3 = n3, s3 = 6;
        n3 > a2 ? (s3 += 8, t3 = 127) : n3 > 125 && (s3 += 2, t3 = 126);
        const o2 = Buffer.allocUnsafe(n3 + s3);
        o2[0] = o2[1] = 0, o2[0] |= 128, o2[0] = (240 & o2[0]) + e3, o2[s3 - 4] = this.maskKey[0], o2[s3 - 3] = this.maskKey[1], o2[s3 - 2] = this.maskKey[2], o2[s3 - 1] = this.maskKey[3], o2[1] = t3, 126 === t3 ? o2.writeUInt16BE(n3, 2) : 127 === t3 && (o2[2] = o2[3] = 0, o2.writeUIntBE(n3, 4, 6)), o2[1] |= 128;
        for (let e4 = 0; e4 < n3; e4++) o2[s3 + e4] = this.frameData[e4] ^ this.maskKey[e4 % 4];
        return o2;
      }
    } };
  }