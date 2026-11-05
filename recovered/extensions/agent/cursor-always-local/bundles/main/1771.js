// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 1771 range:605071..607311
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1771: (t2, e2, r2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true }), e2.hasExtension = e2.clearExtension = e2.setExtension = e2.getExtension = void 0;
    const n2 = r2(3098), s2 = r2(1802);
    function i2(t3, e3) {
      const r3 = t3.getType();
      return e3.extendee.typeName === r3.typeName && !!r3.runtime.bin.listUnknownFields(t3).find((t4) => t4.no == e3.field.no);
    }
    function o2(t3, e3) {
      (0, n2.assert)(t3.extendee.typeName == e3.getType().typeName, `extension ${t3.typeName} can only be applied to message ${t3.extendee.typeName}`);
    }
    e2.getExtension = function(t3, e3, r3) {
      o2(e3, t3);
      const n3 = e3.runtime.bin.makeReadOptions(r3), i3 = (0, s2.filterUnknownFields)(t3.getType().runtime.bin.listUnknownFields(t3), e3.field), [a, u] = (0, s2.createExtensionContainer)(e3);
      for (const t4 of i3) e3.runtime.bin.readField(a, n3.readerFactory(t4.data), e3.field, t4.wireType, n3);
      return u();
    }, e2.setExtension = function(t3, e3, r3, n3) {
      o2(e3, t3);
      const s3 = e3.runtime.bin.makeReadOptions(n3), a = e3.runtime.bin.makeWriteOptions(n3);
      if (i2(t3, e3)) {
        const r4 = t3.getType().runtime.bin.listUnknownFields(t3).filter((t4) => t4.no != e3.field.no);
        t3.getType().runtime.bin.discardUnknownFields(t3);
        for (const e4 of r4) t3.getType().runtime.bin.onUnknownField(t3, e4.no, e4.wireType, e4.data);
      }
      const u = a.writerFactory();
      let c = e3.field;
      c.opt || c.repeated || "enum" != c.kind && "scalar" != c.kind || (c = Object.assign(Object.assign({}, e3.field), { opt: true })), e3.runtime.bin.writeField(c, r3, u, a);
      const l = s3.readerFactory(u.finish());
      for (; l.pos < l.len; ) {
        const [e4, r4] = l.tag(), n4 = l.skip(r4, e4);
        t3.getType().runtime.bin.onUnknownField(t3, e4, r4, n4);
      }
    }, e2.clearExtension = function(t3, e3) {
      if (o2(e3, t3), i2(t3, e3)) {
        const r3 = t3.getType().runtime.bin, n3 = r3.listUnknownFields(t3).filter((t4) => t4.no != e3.field.no);
        r3.discardUnknownFields(t3);
        for (const e4 of n3) r3.onUnknownField(t3, e4.no, e4.wireType, e4.data);
      }
    }, e2.hasExtension = i2;
  }