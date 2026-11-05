// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 174 range:1477..2536
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
174: (t2, e2, r2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true }), e2.toPlainMessage = void 0;
    const n2 = r2(2706);
    function s2(t3) {
      if (!(0, n2.isMessage)(t3)) return t3;
      const e3 = t3.getType(), r3 = {};
      for (const n3 of e3.fields.byMember()) {
        const e4 = t3[n3.localName];
        let s3;
        if (n3.repeated) s3 = e4.map((t4) => i2(t4));
        else if ("map" == n3.kind) {
          s3 = {};
          for (const [t4, r4] of Object.entries(e4)) s3[t4] = i2(r4);
        } else if ("oneof" == n3.kind) {
          s3 = n3.findField(e4.case) ? { case: e4.case, value: i2(e4.value) } : { case: void 0 };
        } else s3 = i2(e4);
        r3[n3.localName] = s3;
      }
      return r3;
    }
    function i2(t3) {
      if (void 0 === t3) return t3;
      if ((0, n2.isMessage)(t3)) return s2(t3);
      if (t3 instanceof Uint8Array) {
        const e3 = new Uint8Array(t3.byteLength);
        return e3.set(t3), e3;
      }
      return t3;
    }
    e2.toPlainMessage = s2;
  }