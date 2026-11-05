// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 60174 range:4734725..4735769
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
60174: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.toPlainMessage = void 0;
    const n = r(62706);
    function s(e2) {
      if (!(0, n.isMessage)(e2)) return e2;
      const t2 = e2.getType(), r2 = {};
      for (const n2 of t2.fields.byMember()) {
        const t3 = e2[n2.localName];
        let s2;
        if (n2.repeated) s2 = t3.map((e3) => o(e3));
        else if ("map" == n2.kind) {
          s2 = {};
          for (const [e3, r3] of Object.entries(t3)) s2[e3] = o(r3);
        } else if ("oneof" == n2.kind) {
          s2 = n2.findField(t3.case) ? { case: t3.case, value: o(t3.value) } : { case: void 0 };
        } else s2 = o(t3);
        r2[n2.localName] = s2;
      }
      return r2;
    }
    function o(e2) {
      if (void 0 === e2) return e2;
      if ((0, n.isMessage)(e2)) return s(e2);
      if (e2 instanceof Uint8Array) {
        const t2 = new Uint8Array(e2.byteLength);
        return t2.set(e2), t2;
      }
      return e2;
    }
    t.toPlainMessage = s;
  }