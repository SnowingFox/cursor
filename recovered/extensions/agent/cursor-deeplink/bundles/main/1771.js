// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 1771 range:185646..187882
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1771: (e2, t2, A2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.hasExtension = t2.clearExtension = t2.setExtension = t2.getExtension = void 0;
    const n2 = A2(3098), r2 = A2(1802);
    function o2(e3, t3) {
      const A3 = e3.getType();
      return t3.extendee.typeName === A3.typeName && !!A3.runtime.bin.listUnknownFields(e3).find((e4) => e4.no == t3.field.no);
    }
    function s(e3, t3) {
      (0, n2.assert)(e3.extendee.typeName == t3.getType().typeName, `extension ${e3.typeName} can only be applied to message ${e3.extendee.typeName}`);
    }
    t2.getExtension = function(e3, t3, A3) {
      s(t3, e3);
      const n3 = t3.runtime.bin.makeReadOptions(A3), o3 = (0, r2.filterUnknownFields)(e3.getType().runtime.bin.listUnknownFields(e3), t3.field), [i, a] = (0, r2.createExtensionContainer)(t3);
      for (const e4 of o3) t3.runtime.bin.readField(i, n3.readerFactory(e4.data), t3.field, e4.wireType, n3);
      return a();
    }, t2.setExtension = function(e3, t3, A3, n3) {
      s(t3, e3);
      const r3 = t3.runtime.bin.makeReadOptions(n3), i = t3.runtime.bin.makeWriteOptions(n3);
      if (o2(e3, t3)) {
        const A4 = e3.getType().runtime.bin.listUnknownFields(e3).filter((e4) => e4.no != t3.field.no);
        e3.getType().runtime.bin.discardUnknownFields(e3);
        for (const t4 of A4) e3.getType().runtime.bin.onUnknownField(e3, t4.no, t4.wireType, t4.data);
      }
      const a = i.writerFactory();
      let c = t3.field;
      c.opt || c.repeated || "enum" != c.kind && "scalar" != c.kind || (c = Object.assign(Object.assign({}, t3.field), { opt: true })), t3.runtime.bin.writeField(c, A3, a, i);
      const l = r3.readerFactory(a.finish());
      for (; l.pos < l.len; ) {
        const [t4, A4] = l.tag(), n4 = l.skip(A4, t4);
        e3.getType().runtime.bin.onUnknownField(e3, t4, A4, n4);
      }
    }, t2.clearExtension = function(e3, t3) {
      if (s(t3, e3), o2(e3, t3)) {
        const A3 = e3.getType().runtime.bin, n3 = A3.listUnknownFields(e3).filter((e4) => e4.no != t3.field.no);
        A3.discardUnknownFields(e3);
        for (const t4 of n3) A3.onUnknownField(e3, t4.no, t4.wireType, t4.data);
      }
    }, t2.hasExtension = o2;
  }