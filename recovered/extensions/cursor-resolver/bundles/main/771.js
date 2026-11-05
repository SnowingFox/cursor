// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver/dist/main.js sha256:677b774c75dfff0de56084737d26169857daed3731cb62a6702840900f439aed
// module: 771 range:180278..182518
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
771: (e2, t2, n2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.hasExtension = t2.clearExtension = t2.setExtension = t2.getExtension = void 0;
    const r2 = n2(98), o2 = n2(802);
    function a2(e3, t3) {
      const n3 = e3.getType();
      return t3.extendee.typeName === n3.typeName && !!n3.runtime.bin.listUnknownFields(e3).find((e4) => e4.no == t3.field.no);
    }
    function s2(e3, t3) {
      (0, r2.assert)(e3.extendee.typeName == t3.getType().typeName, `extension ${e3.typeName} can only be applied to message ${e3.extendee.typeName}`);
    }
    t2.getExtension = function(e3, t3, n3) {
      s2(t3, e3);
      const r3 = t3.runtime.bin.makeReadOptions(n3), a3 = (0, o2.filterUnknownFields)(e3.getType().runtime.bin.listUnknownFields(e3), t3.field), [i2, l2] = (0, o2.createExtensionContainer)(t3);
      for (const e4 of a3) t3.runtime.bin.readField(i2, r3.readerFactory(e4.data), t3.field, e4.wireType, r3);
      return l2();
    }, t2.setExtension = function(e3, t3, n3, r3) {
      s2(t3, e3);
      const o3 = t3.runtime.bin.makeReadOptions(r3), i2 = t3.runtime.bin.makeWriteOptions(r3);
      if (a2(e3, t3)) {
        const n4 = e3.getType().runtime.bin.listUnknownFields(e3).filter((e4) => e4.no != t3.field.no);
        e3.getType().runtime.bin.discardUnknownFields(e3);
        for (const t4 of n4) e3.getType().runtime.bin.onUnknownField(e3, t4.no, t4.wireType, t4.data);
      }
      const l2 = i2.writerFactory();
      let u2 = t3.field;
      u2.opt || u2.repeated || "enum" != u2.kind && "scalar" != u2.kind || (u2 = Object.assign(Object.assign({}, t3.field), { opt: true })), t3.runtime.bin.writeField(u2, n3, l2, i2);
      const c2 = o3.readerFactory(l2.finish());
      for (; c2.pos < c2.len; ) {
        const [t4, n4] = c2.tag(), r4 = c2.skip(n4, t4);
        e3.getType().runtime.bin.onUnknownField(e3, t4, n4, r4);
      }
    }, t2.clearExtension = function(e3, t3) {
      if (s2(t3, e3), a2(e3, t3)) {
        const n3 = e3.getType().runtime.bin, r3 = n3.listUnknownFields(e3).filter((e4) => e4.no != t3.field.no);
        n3.discardUnknownFields(e3);
        for (const t4 of r3) n3.onUnknownField(e3, t4.no, t4.wireType, t4.data);
      }
    }, t2.hasExtension = a2;
  }