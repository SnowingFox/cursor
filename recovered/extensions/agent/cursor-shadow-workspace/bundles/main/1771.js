// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 1771 range:179291..181527
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1771: (e2, A2, t2) => {
    "use strict";
    Object.defineProperty(A2, "__esModule", { value: true }), A2.hasExtension = A2.clearExtension = A2.setExtension = A2.getExtension = void 0;
    const n2 = t2(3098), r2 = t2(1802);
    function o2(e3, A3) {
      const t3 = e3.getType();
      return A3.extendee.typeName === t3.typeName && !!t3.runtime.bin.listUnknownFields(e3).find((e4) => e4.no == A3.field.no);
    }
    function s(e3, A3) {
      (0, n2.assert)(e3.extendee.typeName == A3.getType().typeName, `extension ${e3.typeName} can only be applied to message ${e3.extendee.typeName}`);
    }
    A2.getExtension = function(e3, A3, t3) {
      s(A3, e3);
      const n3 = A3.runtime.bin.makeReadOptions(t3), o3 = (0, r2.filterUnknownFields)(e3.getType().runtime.bin.listUnknownFields(e3), A3.field), [a, i] = (0, r2.createExtensionContainer)(A3);
      for (const e4 of o3) A3.runtime.bin.readField(a, n3.readerFactory(e4.data), A3.field, e4.wireType, n3);
      return i();
    }, A2.setExtension = function(e3, A3, t3, n3) {
      s(A3, e3);
      const r3 = A3.runtime.bin.makeReadOptions(n3), a = A3.runtime.bin.makeWriteOptions(n3);
      if (o2(e3, A3)) {
        const t4 = e3.getType().runtime.bin.listUnknownFields(e3).filter((e4) => e4.no != A3.field.no);
        e3.getType().runtime.bin.discardUnknownFields(e3);
        for (const A4 of t4) e3.getType().runtime.bin.onUnknownField(e3, A4.no, A4.wireType, A4.data);
      }
      const i = a.writerFactory();
      let c = A3.field;
      c.opt || c.repeated || "enum" != c.kind && "scalar" != c.kind || (c = Object.assign(Object.assign({}, A3.field), { opt: true })), A3.runtime.bin.writeField(c, t3, i, a);
      const l = r3.readerFactory(i.finish());
      for (; l.pos < l.len; ) {
        const [A4, t4] = l.tag(), n4 = l.skip(t4, A4);
        e3.getType().runtime.bin.onUnknownField(e3, A4, t4, n4);
      }
    }, A2.clearExtension = function(e3, A3) {
      if (s(A3, e3), o2(e3, A3)) {
        const t3 = e3.getType().runtime.bin, n3 = t3.listUnknownFields(e3).filter((e4) => e4.no != A3.field.no);
        t3.discardUnknownFields(e3);
        for (const A4 of n3) t3.onUnknownField(e3, A4.no, A4.wireType, A4.data);
      }
    }, A2.hasExtension = o2;
  }