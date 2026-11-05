// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 174 range:13546..14605
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
174: (e2, n2, t2) => {
    "use strict";
    Object.defineProperty(n2, "__esModule", { value: true }), n2.toPlainMessage = void 0;
    const a2 = t2(2706);
    function s2(e3) {
      if (!(0, a2.isMessage)(e3)) return e3;
      const n3 = e3.getType(), t3 = {};
      for (const a3 of n3.fields.byMember()) {
        const n4 = e3[a3.localName];
        let s3;
        if (a3.repeated) s3 = n4.map((e4) => o2(e4));
        else if ("map" == a3.kind) {
          s3 = {};
          for (const [e4, t4] of Object.entries(n4)) s3[e4] = o2(t4);
        } else if ("oneof" == a3.kind) {
          s3 = a3.findField(n4.case) ? { case: n4.case, value: o2(n4.value) } : { case: void 0 };
        } else s3 = o2(n4);
        t3[a3.localName] = s3;
      }
      return t3;
    }
    function o2(e3) {
      if (void 0 === e3) return e3;
      if ((0, a2.isMessage)(e3)) return s2(e3);
      if (e3 instanceof Uint8Array) {
        const n3 = new Uint8Array(e3.byteLength);
        return n3.set(e3), n3;
      }
      return e3;
    }
    n2.toPlainMessage = s2;
  }