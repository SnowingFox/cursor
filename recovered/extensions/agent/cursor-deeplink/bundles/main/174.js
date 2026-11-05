// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 174 range:16191..17250
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
174: (e2, t2, A2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.toPlainMessage = void 0;
    const n2 = A2(2706);
    function r2(e3) {
      if (!(0, n2.isMessage)(e3)) return e3;
      const t3 = e3.getType(), A3 = {};
      for (const n3 of t3.fields.byMember()) {
        const t4 = e3[n3.localName];
        let r3;
        if (n3.repeated) r3 = t4.map((e4) => o2(e4));
        else if ("map" == n3.kind) {
          r3 = {};
          for (const [e4, A4] of Object.entries(t4)) r3[e4] = o2(A4);
        } else if ("oneof" == n3.kind) {
          r3 = n3.findField(t4.case) ? { case: t4.case, value: o2(t4.value) } : { case: void 0 };
        } else r3 = o2(t4);
        A3[n3.localName] = r3;
      }
      return A3;
    }
    function o2(e3) {
      if (void 0 === e3) return e3;
      if ((0, n2.isMessage)(e3)) return r2(e3);
      if (e3 instanceof Uint8Array) {
        const t3 = new Uint8Array(e3.byteLength);
        return t3.set(e3), t3;
      }
      return e3;
    }
    t2.toPlainMessage = r2;
  }