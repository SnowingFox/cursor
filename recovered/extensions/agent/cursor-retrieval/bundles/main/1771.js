// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 1771 range:454380..456625
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1771: (e2, a2, n2) => {
    "use strict";
    Object.defineProperty(a2, "__esModule", { value: true }), a2.hasExtension = a2.clearExtension = a2.setExtension = a2.getExtension = void 0;
    const t2 = n2(3098), s2 = n2(1802);
    function o2(e3, a3) {
      const n3 = e3.getType();
      return a3.extendee.typeName === n3.typeName && !!n3.runtime.bin.listUnknownFields(e3).find((e4) => e4.no == a3.field.no);
    }
    function r2(e3, a3) {
      (0, t2.assert)(e3.extendee.typeName == a3.getType().typeName, `extension ${e3.typeName} can only be applied to message ${e3.extendee.typeName}`);
    }
    a2.getExtension = function(e3, a3, n3) {
      r2(a3, e3);
      const t3 = a3.runtime.bin.makeReadOptions(n3), o3 = (0, s2.filterUnknownFields)(e3.getType().runtime.bin.listUnknownFields(e3), a3.field), [i2, l] = (0, s2.createExtensionContainer)(a3);
      for (const e4 of o3) a3.runtime.bin.readField(i2, t3.readerFactory(e4.data), a3.field, e4.wireType, t3);
      return l();
    }, a2.setExtension = function(e3, a3, n3, t3) {
      r2(a3, e3);
      const s3 = a3.runtime.bin.makeReadOptions(t3), i2 = a3.runtime.bin.makeWriteOptions(t3);
      if (o2(e3, a3)) {
        const n4 = e3.getType().runtime.bin.listUnknownFields(e3).filter((e4) => e4.no != a3.field.no);
        e3.getType().runtime.bin.discardUnknownFields(e3);
        for (const a4 of n4) e3.getType().runtime.bin.onUnknownField(e3, a4.no, a4.wireType, a4.data);
      }
      const l = i2.writerFactory();
      let d = a3.field;
      d.opt || d.repeated || "enum" != d.kind && "scalar" != d.kind || (d = Object.assign(Object.assign({}, a3.field), { opt: true })), a3.runtime.bin.writeField(d, n3, l, i2);
      const m = s3.readerFactory(l.finish());
      for (; m.pos < m.len; ) {
        const [a4, n4] = m.tag(), t4 = m.skip(n4, a4);
        e3.getType().runtime.bin.onUnknownField(e3, a4, n4, t4);
      }
    }, a2.clearExtension = function(e3, a3) {
      if (r2(a3, e3), o2(e3, a3)) {
        const n3 = e3.getType().runtime.bin, t3 = n3.listUnknownFields(e3).filter((e4) => e4.no != a3.field.no);
        n3.discardUnknownFields(e3);
        for (const a4 of t3) n3.onUnknownField(e3, a4.no, a4.wireType, a4.data);
      }
    }, a2.hasExtension = o2;
  }