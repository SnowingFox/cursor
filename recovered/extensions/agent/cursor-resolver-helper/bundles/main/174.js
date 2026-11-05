// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver-helper/dist/main.js sha256:0eb6078f0829c93d9374e39385fef22eabf7657a05c3cdf5bf316d9dbcf5ad0e
// module: 174 range:55375..56415
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
174: (e2, a2, n2) => {
    Object.defineProperty(a2, "__esModule", { value: true }), a2.toPlainMessage = void 0;
    const o2 = n2(706);
    function s2(e3) {
      if (!(0, o2.isMessage)(e3)) return e3;
      const a3 = e3.getType(), n3 = {};
      for (const o3 of a3.fields.byMember()) {
        const a4 = e3[o3.localName];
        let s3;
        if (o3.repeated) s3 = a4.map((e4) => t2(e4));
        else if ("map" == o3.kind) {
          s3 = {};
          for (const [e4, n4] of Object.entries(a4)) s3[e4] = t2(n4);
        } else if ("oneof" == o3.kind) {
          s3 = o3.findField(a4.case) ? { case: a4.case, value: t2(a4.value) } : { case: void 0 };
        } else s3 = t2(a4);
        n3[o3.localName] = s3;
      }
      return n3;
    }
    function t2(e3) {
      if (void 0 === e3) return e3;
      if ((0, o2.isMessage)(e3)) return s2(e3);
      if (e3 instanceof Uint8Array) {
        const a3 = new Uint8Array(e3.byteLength);
        return a3.set(e3), a3;
      }
      return e3;
    }
    a2.toPlainMessage = s2;
  }