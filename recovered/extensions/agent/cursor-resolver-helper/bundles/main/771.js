// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver-helper/dist/main.js sha256:0eb6078f0829c93d9374e39385fef22eabf7657a05c3cdf5bf316d9dbcf5ad0e
// module: 771 range:180278..182518
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
771: (e2, a2, n2) => {
    Object.defineProperty(a2, "__esModule", { value: true }), a2.hasExtension = a2.clearExtension = a2.setExtension = a2.getExtension = void 0;
    const o2 = n2(98), s2 = n2(802);
    function t2(e3, a3) {
      const n3 = e3.getType();
      return a3.extendee.typeName === n3.typeName && !!n3.runtime.bin.listUnknownFields(e3).find((e4) => e4.no == a3.field.no);
    }
    function r2(e3, a3) {
      (0, o2.assert)(e3.extendee.typeName == a3.getType().typeName, `extension ${e3.typeName} can only be applied to message ${e3.extendee.typeName}`);
    }
    a2.getExtension = function(e3, a3, n3) {
      r2(a3, e3);
      const o3 = a3.runtime.bin.makeReadOptions(n3), t3 = (0, s2.filterUnknownFields)(e3.getType().runtime.bin.listUnknownFields(e3), a3.field), [i2, m2] = (0, s2.createExtensionContainer)(a3);
      for (const e4 of t3) a3.runtime.bin.readField(i2, o3.readerFactory(e4.data), a3.field, e4.wireType, o3);
      return m2();
    }, a2.setExtension = function(e3, a3, n3, o3) {
      r2(a3, e3);
      const s3 = a3.runtime.bin.makeReadOptions(o3), i2 = a3.runtime.bin.makeWriteOptions(o3);
      if (t2(e3, a3)) {
        const n4 = e3.getType().runtime.bin.listUnknownFields(e3).filter((e4) => e4.no != a3.field.no);
        e3.getType().runtime.bin.discardUnknownFields(e3);
        for (const a4 of n4) e3.getType().runtime.bin.onUnknownField(e3, a4.no, a4.wireType, a4.data);
      }
      const m2 = i2.writerFactory();
      let l2 = a3.field;
      l2.opt || l2.repeated || "enum" != l2.kind && "scalar" != l2.kind || (l2 = Object.assign(Object.assign({}, a3.field), { opt: true })), a3.runtime.bin.writeField(l2, n3, m2, i2);
      const d2 = s3.readerFactory(m2.finish());
      for (; d2.pos < d2.len; ) {
        const [a4, n4] = d2.tag(), o4 = d2.skip(n4, a4);
        e3.getType().runtime.bin.onUnknownField(e3, a4, n4, o4);
      }
    }, a2.clearExtension = function(e3, a3) {
      if (r2(a3, e3), t2(e3, a3)) {
        const n3 = e3.getType().runtime.bin, o3 = n3.listUnknownFields(e3).filter((e4) => e4.no != a3.field.no);
        n3.discardUnknownFields(e3);
        for (const a4 of o3) n3.onUnknownField(e3, a4.no, a4.wireType, a4.data);
      }
    }, a2.hasExtension = t2;
  }