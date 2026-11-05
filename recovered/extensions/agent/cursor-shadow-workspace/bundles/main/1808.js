// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 1808 range:183814..184785
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1808: (e2, A2, t2) => {
    "use strict";
    const { maxUnsigned16Bit: n2 } = t2(5440);
    let r2;
    try {
      r2 = t2(6982);
    } catch {
    }
    e2.exports = { WebsocketFrameSend: class {
      constructor(e3) {
        this.frameData = e3, this.maskKey = r2.randomBytes(4);
      }
      createFrame(e3) {
        const A3 = this.frameData?.byteLength ?? 0;
        let t3 = A3, r3 = 6;
        A3 > n2 ? (r3 += 8, t3 = 127) : A3 > 125 && (r3 += 2, t3 = 126);
        const o2 = Buffer.allocUnsafe(A3 + r3);
        o2[0] = o2[1] = 0, o2[0] |= 128, o2[0] = (240 & o2[0]) + e3, o2[r3 - 4] = this.maskKey[0], o2[r3 - 3] = this.maskKey[1], o2[r3 - 2] = this.maskKey[2], o2[r3 - 1] = this.maskKey[3], o2[1] = t3, 126 === t3 ? o2.writeUInt16BE(A3, 2) : 127 === t3 && (o2[2] = o2[3] = 0, o2.writeUIntBE(A3, 4, 6)), o2[1] |= 128;
        for (let e4 = 0; e4 < A3; e4++) o2[r3 + e4] = this.frameData[e4] ^ this.maskKey[e4 % 4];
        return o2;
      }
    } };
  }