// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 1771 range:87387..89784
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1771: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.hasExtension = a10.clearExtension = a10.setExtension = a10.getExtension = void 0;
    const s10 = n10(3098), o10 = n10(1802);
    function r10(e11, a11) {
      const n11 = e11.getType();
      return a11.extendee.typeName === n11.typeName && !!n11.runtime.bin.listUnknownFields(e11).find((e12) => e12.no == a11.field.no);
    }
    function t10(e11, a11) {
      (0, s10.assert)(e11.extendee.typeName == a11.getType().typeName, `extension ${e11.typeName} can only be applied to message ${e11.extendee.typeName}`);
    }
    a10.getExtension = function(e11, a11, n11) {
      t10(a11, e11);
      const s11 = a11.runtime.bin.makeReadOptions(n11), r11 = (0, o10.filterUnknownFields)(e11.getType().runtime.bin.listUnknownFields(e11), a11.field), [i10, m10] = (0, o10.createExtensionContainer)(a11);
      for (const e12 of r11) a11.runtime.bin.readField(i10, s11.readerFactory(e12.data), a11.field, e12.wireType, s11);
      return m10();
    }, a10.setExtension = function(e11, a11, n11, s11) {
      t10(a11, e11);
      const o11 = a11.runtime.bin.makeReadOptions(s11), i10 = a11.runtime.bin.makeWriteOptions(s11);
      if (r10(e11, a11)) {
        const n12 = e11.getType().runtime.bin.listUnknownFields(e11).filter((e12) => e12.no != a11.field.no);
        e11.getType().runtime.bin.discardUnknownFields(e11);
        for (const a12 of n12) e11.getType().runtime.bin.onUnknownField(e11, a12.no, a12.wireType, a12.data);
      }
      const m10 = i10.writerFactory();
      let l10 = a11.field;
      l10.opt || l10.repeated || "enum" != l10.kind && "scalar" != l10.kind || (l10 = Object.assign(Object.assign({}, a11.field), { opt: true })), a11.runtime.bin.writeField(l10, n11, m10, i10);
      const d10 = o11.readerFactory(m10.finish());
      for (; d10.pos < d10.len; ) {
        const [a12, n12] = d10.tag(), s12 = d10.skip(n12, a12);
        e11.getType().runtime.bin.onUnknownField(e11, a12, n12, s12);
      }
    }, a10.clearExtension = function(e11, a11) {
      if (t10(a11, e11), r10(e11, a11)) {
        const n11 = e11.getType().runtime.bin, s11 = n11.listUnknownFields(e11).filter((e12) => e12.no != a11.field.no);
        n11.discardUnknownFields(e11);
        for (const a12 of s11) n11.onUnknownField(e11, a12.no, a12.wireType, a12.data);
      }
    }, a10.hasExtension = r10;
  }