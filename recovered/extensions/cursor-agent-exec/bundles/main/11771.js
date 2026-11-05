// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 11771 range:859901..862116
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
11771: (e, t, r) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.hasExtension = t.clearExtension = t.setExtension = t.getExtension = void 0;
    const n = r(43098), s = r(1802);
    function o(e2, t2) {
      const r2 = e2.getType();
      return t2.extendee.typeName === r2.typeName && !!r2.runtime.bin.listUnknownFields(e2).find((e3) => e3.no == t2.field.no);
    }
    function i(e2, t2) {
      (0, n.assert)(e2.extendee.typeName == t2.getType().typeName, `extension ${e2.typeName} can only be applied to message ${e2.extendee.typeName}`);
    }
    t.getExtension = function(e2, t2, r2) {
      i(t2, e2);
      const n2 = t2.runtime.bin.makeReadOptions(r2), o2 = (0, s.filterUnknownFields)(e2.getType().runtime.bin.listUnknownFields(e2), t2.field), [a, c] = (0, s.createExtensionContainer)(t2);
      for (const e3 of o2) t2.runtime.bin.readField(a, n2.readerFactory(e3.data), t2.field, e3.wireType, n2);
      return c();
    }, t.setExtension = function(e2, t2, r2, n2) {
      i(t2, e2);
      const s2 = t2.runtime.bin.makeReadOptions(n2), a = t2.runtime.bin.makeWriteOptions(n2);
      if (o(e2, t2)) {
        const r3 = e2.getType().runtime.bin.listUnknownFields(e2).filter((e3) => e3.no != t2.field.no);
        e2.getType().runtime.bin.discardUnknownFields(e2);
        for (const t3 of r3) e2.getType().runtime.bin.onUnknownField(e2, t3.no, t3.wireType, t3.data);
      }
      const c = a.writerFactory();
      let l = t2.field;
      l.opt || l.repeated || "enum" != l.kind && "scalar" != l.kind || (l = Object.assign(Object.assign({}, t2.field), { opt: true })), t2.runtime.bin.writeField(l, r2, c, a);
      const u = s2.readerFactory(c.finish());
      for (; u.pos < u.len; ) {
        const [t3, r3] = u.tag(), n3 = u.skip(r3, t3);
        e2.getType().runtime.bin.onUnknownField(e2, t3, r3, n3);
      }
    }, t.clearExtension = function(e2, t2) {
      if (i(t2, e2), o(e2, t2)) {
        const r2 = e2.getType().runtime.bin, n2 = r2.listUnknownFields(e2).filter((e3) => e3.no != t2.field.no);
        r2.discardUnknownFields(e2);
        for (const t3 of n2) r2.onUnknownField(e2, t3.no, t3.wireType, t3.data);
      }
    }, t.hasExtension = o;
  }