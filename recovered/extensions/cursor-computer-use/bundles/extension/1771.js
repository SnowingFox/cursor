// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 1771 range:183482..185718
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
1771: (e2, n2, t2) => {
    "use strict";
    Object.defineProperty(n2, "__esModule", { value: true }), n2.hasExtension = n2.clearExtension = n2.setExtension = n2.getExtension = void 0;
    const a2 = t2(3098), s2 = t2(1802);
    function o2(e3, n3) {
      const t3 = e3.getType();
      return n3.extendee.typeName === t3.typeName && !!t3.runtime.bin.listUnknownFields(e3).find((e4) => e4.no == n3.field.no);
    }
    function r(e3, n3) {
      (0, a2.assert)(e3.extendee.typeName == n3.getType().typeName, `extension ${e3.typeName} can only be applied to message ${e3.extendee.typeName}`);
    }
    n2.getExtension = function(e3, n3, t3) {
      r(n3, e3);
      const a3 = n3.runtime.bin.makeReadOptions(t3), o3 = (0, s2.filterUnknownFields)(e3.getType().runtime.bin.listUnknownFields(e3), n3.field), [i, A] = (0, s2.createExtensionContainer)(n3);
      for (const e4 of o3) n3.runtime.bin.readField(i, a3.readerFactory(e4.data), n3.field, e4.wireType, a3);
      return A();
    }, n2.setExtension = function(e3, n3, t3, a3) {
      r(n3, e3);
      const s3 = n3.runtime.bin.makeReadOptions(a3), i = n3.runtime.bin.makeWriteOptions(a3);
      if (o2(e3, n3)) {
        const t4 = e3.getType().runtime.bin.listUnknownFields(e3).filter((e4) => e4.no != n3.field.no);
        e3.getType().runtime.bin.discardUnknownFields(e3);
        for (const n4 of t4) e3.getType().runtime.bin.onUnknownField(e3, n4.no, n4.wireType, n4.data);
      }
      const A = i.writerFactory();
      let c = n3.field;
      c.opt || c.repeated || "enum" != c.kind && "scalar" != c.kind || (c = Object.assign(Object.assign({}, n3.field), { opt: true })), n3.runtime.bin.writeField(c, t3, A, i);
      const l = s3.readerFactory(A.finish());
      for (; l.pos < l.len; ) {
        const [n4, t4] = l.tag(), a4 = l.skip(t4, n4);
        e3.getType().runtime.bin.onUnknownField(e3, n4, t4, a4);
      }
    }, n2.clearExtension = function(e3, n3) {
      if (r(n3, e3), o2(e3, n3)) {
        const t3 = e3.getType().runtime.bin, a3 = t3.listUnknownFields(e3).filter((e4) => e4.no != n3.field.no);
        t3.discardUnknownFields(e3);
        for (const n4 of a3) t3.onUnknownField(e3, n4.no, n4.wireType, n4.data);
      }
    }, n2.hasExtension = o2;
  }