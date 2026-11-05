// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 1771 range:179397..181642
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1771: (e2, n2, a2) => {
    "use strict";
    Object.defineProperty(n2, "__esModule", { value: true }), n2.hasExtension = n2.clearExtension = n2.setExtension = n2.getExtension = void 0;
    const t2 = a2(3098), s2 = a2(1802);
    function o2(e3, n3) {
      const a3 = e3.getType();
      return n3.extendee.typeName === a3.typeName && !!a3.runtime.bin.listUnknownFields(e3).find((e4) => e4.no == n3.field.no);
    }
    function r2(e3, n3) {
      (0, t2.assert)(e3.extendee.typeName == n3.getType().typeName, `extension ${e3.typeName} can only be applied to message ${e3.extendee.typeName}`);
    }
    n2.getExtension = function(e3, n3, a3) {
      r2(n3, e3);
      const t3 = n3.runtime.bin.makeReadOptions(a3), o3 = (0, s2.filterUnknownFields)(e3.getType().runtime.bin.listUnknownFields(e3), n3.field), [i2, A] = (0, s2.createExtensionContainer)(n3);
      for (const e4 of o3) n3.runtime.bin.readField(i2, t3.readerFactory(e4.data), n3.field, e4.wireType, t3);
      return A();
    }, n2.setExtension = function(e3, n3, a3, t3) {
      r2(n3, e3);
      const s3 = n3.runtime.bin.makeReadOptions(t3), i2 = n3.runtime.bin.makeWriteOptions(t3);
      if (o2(e3, n3)) {
        const a4 = e3.getType().runtime.bin.listUnknownFields(e3).filter((e4) => e4.no != n3.field.no);
        e3.getType().runtime.bin.discardUnknownFields(e3);
        for (const n4 of a4) e3.getType().runtime.bin.onUnknownField(e3, n4.no, n4.wireType, n4.data);
      }
      const A = i2.writerFactory();
      let l = n3.field;
      l.opt || l.repeated || "enum" != l.kind && "scalar" != l.kind || (l = Object.assign(Object.assign({}, n3.field), { opt: true })), n3.runtime.bin.writeField(l, a3, A, i2);
      const c = s3.readerFactory(A.finish());
      for (; c.pos < c.len; ) {
        const [n4, a4] = c.tag(), t4 = c.skip(a4, n4);
        e3.getType().runtime.bin.onUnknownField(e3, n4, a4, t4);
      }
    }, n2.clearExtension = function(e3, n3) {
      if (r2(n3, e3), o2(e3, n3)) {
        const a3 = e3.getType().runtime.bin, t3 = a3.listUnknownFields(e3).filter((e4) => e4.no != n3.field.no);
        a3.discardUnknownFields(e3);
        for (const n4 of t3) a3.onUnknownField(e3, n4.no, n4.wireType, n4.data);
      }
    }, n2.hasExtension = o2;
  }