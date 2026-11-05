// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 174 range:13672..14731
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
174: (e2, a2, n2) => {
    "use strict";
    Object.defineProperty(a2, "__esModule", { value: true }), a2.toPlainMessage = void 0;
    const t2 = n2(2706);
    function s2(e3) {
      if (!(0, t2.isMessage)(e3)) return e3;
      const a3 = e3.getType(), n3 = {};
      for (const t3 of a3.fields.byMember()) {
        const a4 = e3[t3.localName];
        let s3;
        if (t3.repeated) s3 = a4.map((e4) => o2(e4));
        else if ("map" == t3.kind) {
          s3 = {};
          for (const [e4, n4] of Object.entries(a4)) s3[e4] = o2(n4);
        } else if ("oneof" == t3.kind) {
          s3 = t3.findField(a4.case) ? { case: a4.case, value: o2(a4.value) } : { case: void 0 };
        } else s3 = o2(a4);
        n3[t3.localName] = s3;
      }
      return n3;
    }
    function o2(e3) {
      if (void 0 === e3) return e3;
      if ((0, t2.isMessage)(e3)) return s2(e3);
      if (e3 instanceof Uint8Array) {
        const a3 = new Uint8Array(e3.byteLength);
        return a3.set(e3), a3;
      }
      return e3;
    }
    a2.toPlainMessage = s2;
  }