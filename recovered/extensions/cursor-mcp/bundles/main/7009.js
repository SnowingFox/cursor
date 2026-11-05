// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 7009 range:585806..588051
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
7009: (e2, t2, r2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.hasExtension = t2.clearExtension = t2.setExtension = t2.getExtension = void 0;
    const n2 = r2(3098), o2 = r2(1802);
    function s2(e3, t3) {
      const r3 = e3.getType();
      return t3.extendee.typeName === r3.typeName && !!r3.runtime.bin.listUnknownFields(e3).find((e4) => e4.no == t3.field.no);
    }
    function i2(e3, t3) {
      (0, n2.assert)(e3.extendee.typeName == t3.getType().typeName, `extension ${e3.typeName} can only be applied to message ${e3.extendee.typeName}`);
    }
    t2.getExtension = function(e3, t3, r3) {
      i2(t3, e3);
      const n3 = t3.runtime.bin.makeReadOptions(r3), s3 = (0, o2.filterUnknownFields)(e3.getType().runtime.bin.listUnknownFields(e3), t3.field), [a2, c] = (0, o2.createExtensionContainer)(t3);
      for (const e4 of s3) t3.runtime.bin.readField(a2, n3.readerFactory(e4.data), t3.field, e4.wireType, n3);
      return c();
    }, t2.setExtension = function(e3, t3, r3, n3) {
      i2(t3, e3);
      const o3 = t3.runtime.bin.makeReadOptions(n3), a2 = t3.runtime.bin.makeWriteOptions(n3);
      if (s2(e3, t3)) {
        const r4 = e3.getType().runtime.bin.listUnknownFields(e3).filter((e4) => e4.no != t3.field.no);
        e3.getType().runtime.bin.discardUnknownFields(e3);
        for (const t4 of r4) e3.getType().runtime.bin.onUnknownField(e3, t4.no, t4.wireType, t4.data);
      }
      const c = a2.writerFactory();
      let u = t3.field;
      u.opt || u.repeated || "enum" != u.kind && "scalar" != u.kind || (u = Object.assign(Object.assign({}, t3.field), { opt: true })), t3.runtime.bin.writeField(u, r3, c, a2);
      const l = o3.readerFactory(c.finish());
      for (; l.pos < l.len; ) {
        const [t4, r4] = l.tag(), n4 = l.skip(r4, t4);
        e3.getType().runtime.bin.onUnknownField(e3, t4, r4, n4);
      }
    }, t2.clearExtension = function(e3, t3) {
      if (i2(t3, e3), s2(e3, t3)) {
        const r3 = e3.getType().runtime.bin, n3 = r3.listUnknownFields(e3).filter((e4) => e4.no != t3.field.no);
        r3.discardUnknownFields(e3);
        for (const t4 of n3) r3.onUnknownField(e3, t4.no, t4.wireType, t4.data);
      }
    }, t2.hasExtension = s2;
  }