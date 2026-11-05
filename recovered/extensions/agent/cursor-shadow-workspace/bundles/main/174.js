// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 174 range:13546..14605
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
174: (e2, A2, t2) => {
    "use strict";
    Object.defineProperty(A2, "__esModule", { value: true }), A2.toPlainMessage = void 0;
    const n2 = t2(2706);
    function r2(e3) {
      if (!(0, n2.isMessage)(e3)) return e3;
      const A3 = e3.getType(), t3 = {};
      for (const n3 of A3.fields.byMember()) {
        const A4 = e3[n3.localName];
        let r3;
        if (n3.repeated) r3 = A4.map((e4) => o2(e4));
        else if ("map" == n3.kind) {
          r3 = {};
          for (const [e4, t4] of Object.entries(A4)) r3[e4] = o2(t4);
        } else if ("oneof" == n3.kind) {
          r3 = n3.findField(A4.case) ? { case: A4.case, value: o2(A4.value) } : { case: void 0 };
        } else r3 = o2(A4);
        t3[n3.localName] = r3;
      }
      return t3;
    }
    function o2(e3) {
      if (void 0 === e3) return e3;
      if ((0, n2.isMessage)(e3)) return r2(e3);
      if (e3 instanceof Uint8Array) {
        const A3 = new Uint8Array(e3.byteLength);
        return A3.set(e3), A3;
      }
      return e3;
    }
    A2.toPlainMessage = r2;
  }