// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 174 range:13551..14610
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
174: (e2, n2, a2) => {
    "use strict";
    Object.defineProperty(n2, "__esModule", { value: true }), n2.toPlainMessage = void 0;
    const t2 = a2(2706);
    function s2(e3) {
      if (!(0, t2.isMessage)(e3)) return e3;
      const n3 = e3.getType(), a3 = {};
      for (const t3 of n3.fields.byMember()) {
        const n4 = e3[t3.localName];
        let s3;
        if (t3.repeated) s3 = n4.map((e4) => o2(e4));
        else if ("map" == t3.kind) {
          s3 = {};
          for (const [e4, a4] of Object.entries(n4)) s3[e4] = o2(a4);
        } else if ("oneof" == t3.kind) {
          s3 = t3.findField(n4.case) ? { case: n4.case, value: o2(n4.value) } : { case: void 0 };
        } else s3 = o2(n4);
        a3[t3.localName] = s3;
      }
      return a3;
    }
    function o2(e3) {
      if (void 0 === e3) return e3;
      if ((0, t2.isMessage)(e3)) return s2(e3);
      if (e3 instanceof Uint8Array) {
        const n3 = new Uint8Array(e3.byteLength);
        return n3.set(e3), n3;
      }
      return e3;
    }
    n2.toPlainMessage = s2;
  }