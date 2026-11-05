// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 86422 range:12127196..12127986
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
86422: (e, t, r) => {
    "use strict";
    r.d(t, { Pb: () => c, Zj: () => i, by: () => a });
    var n = r(36038), s = r(40328), o = r(8032);
    function i(e2) {
      let t2;
      return t2 = "object" == typeof e2 && "getType" in e2 ? e2.toBinary() : "string" == typeof e2 ? new TextEncoder().encode(e2) : e2 instanceof Uint8Array ? e2 : new Uint8Array(e2), n.protoBase64.enc(t2).replace(/=+$/, "");
    }
    function a(e2, t2, r2) {
      try {
        const s2 = n.protoBase64.dec(e2);
        return t2 ? t2.fromBinary(s2, r2) : s2;
      } catch (e3) {
        throw s.T.from(e3, o.C.DataLoss);
      }
    }
    function c(...e2) {
      const t2 = new Headers();
      for (const r2 of e2) r2.forEach((e3, r3) => {
        t2.append(r3, e3);
      });
      return t2;
    }
  }