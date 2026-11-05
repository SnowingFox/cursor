// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 6422 range:3651480..3652283
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6422: (t2, e2, r2) => {
    "use strict";
    r2.d(e2, { Pb: () => u, Zj: () => o2, by: () => a });
    var n2 = r2(6038), s2 = r2(328), i2 = r2(8032);
    function o2(t3) {
      let e3;
      return e3 = "object" == typeof t3 && "getType" in t3 ? t3.toBinary() : "string" == typeof t3 ? new TextEncoder().encode(t3) : t3 instanceof Uint8Array ? t3 : new Uint8Array(t3), n2.protoBase64.enc(e3).replace(/=+$/, "");
    }
    function a(t3, e3, r3) {
      try {
        const s3 = n2.protoBase64.dec(t3);
        return e3 ? e3.fromBinary(s3, r3) : s3;
      } catch (t4) {
        throw s2.T.from(t4, i2.C.DataLoss);
      }
    }
    function u(...t3) {
      const e3 = new Headers();
      for (const r3 of t3) r3.forEach((t4, r4) => {
        e3.append(r4, t4);
      });
      return e3;
    }
  }