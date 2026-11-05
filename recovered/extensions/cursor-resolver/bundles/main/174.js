// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver/dist/main.js sha256:677b774c75dfff0de56084737d26169857daed3731cb62a6702840900f439aed
// module: 174 range:55375..56415
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
174: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.toPlainMessage = void 0;
    const r2 = n2(706);
    function o2(e3) {
      if (!(0, r2.isMessage)(e3)) return e3;
      const t3 = e3.getType(), n3 = {};
      for (const r3 of t3.fields.byMember()) {
        const t4 = e3[r3.localName];
        let o3;
        if (r3.repeated) o3 = t4.map((e4) => a2(e4));
        else if ("map" == r3.kind) {
          o3 = {};
          for (const [e4, n4] of Object.entries(t4)) o3[e4] = a2(n4);
        } else if ("oneof" == r3.kind) {
          o3 = r3.findField(t4.case) ? { case: t4.case, value: a2(t4.value) } : { case: void 0 };
        } else o3 = a2(t4);
        n3[r3.localName] = o3;
      }
      return n3;
    }
    function a2(e3) {
      if (void 0 === e3) return e3;
      if ((0, r2.isMessage)(e3)) return o2(e3);
      if (e3 instanceof Uint8Array) {
        const t3 = new Uint8Array(e3.byteLength);
        return t3.set(e3), t3;
      }
      return e3;
    }
    t2.toPlainMessage = o2;
  }