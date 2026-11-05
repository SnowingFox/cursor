// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 60174 range:1880299..1881343
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
60174: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.toPlainMessage = void 0;
    const n = r(62706);
    function o(e2) {
      if (!(0, n.isMessage)(e2)) return e2;
      const t2 = e2.getType(), r2 = {};
      for (const n2 of t2.fields.byMember()) {
        const t3 = e2[n2.localName];
        let o2;
        if (n2.repeated) o2 = t3.map((e3) => s(e3));
        else if ("map" == n2.kind) {
          o2 = {};
          for (const [e3, r3] of Object.entries(t3)) o2[e3] = s(r3);
        } else if ("oneof" == n2.kind) {
          o2 = n2.findField(t3.case) ? { case: t3.case, value: s(t3.value) } : { case: void 0 };
        } else o2 = s(t3);
        r2[n2.localName] = o2;
      }
      return r2;
    }
    function s(e2) {
      if (void 0 === e2) return e2;
      if ((0, n.isMessage)(e2)) return o(e2);
      if (e2 instanceof Uint8Array) {
        const t2 = new Uint8Array(e2.byteLength);
        return t2.set(e2), t2;
      }
      return e2;
    }
    t.toPlainMessage = o;
  }