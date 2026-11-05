// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 174 range:19987..21046
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
174: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.toPlainMessage = void 0;
    const n2 = r2(2706);
    function o2(e3) {
      if (!(0, n2.isMessage)(e3)) return e3;
      const t3 = e3.getType(), r3 = {};
      for (const n3 of t3.fields.byMember()) {
        const t4 = e3[n3.localName];
        let o3;
        if (n3.repeated) o3 = t4.map((e4) => s2(e4));
        else if ("map" == n3.kind) {
          o3 = {};
          for (const [e4, r4] of Object.entries(t4)) o3[e4] = s2(r4);
        } else if ("oneof" == n3.kind) {
          o3 = n3.findField(t4.case) ? { case: t4.case, value: s2(t4.value) } : { case: void 0 };
        } else o3 = s2(t4);
        r3[n3.localName] = o3;
      }
      return r3;
    }
    function s2(e3) {
      if (void 0 === e3) return e3;
      if ((0, n2.isMessage)(e3)) return o2(e3);
      if (e3 instanceof Uint8Array) {
        const t3 = new Uint8Array(e3.byteLength);
        return t3.set(e3), t3;
      }
      return e3;
    }
    t2.toPlainMessage = o2;
  }