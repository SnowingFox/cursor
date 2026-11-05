// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 174 range:600..1708
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
174: (e10, a10, n10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.toPlainMessage = void 0;
    const s10 = n10(2706);
    function o10(e11) {
      if (!(0, s10.isMessage)(e11)) return e11;
      const a11 = e11.getType(), n11 = {};
      for (const s11 of a11.fields.byMember()) {
        const a12 = e11[s11.localName];
        let o11;
        if (s11.repeated) o11 = a12.map((e12) => r10(e12));
        else if ("map" == s11.kind) {
          o11 = {};
          for (const [e12, n12] of Object.entries(a12)) o11[e12] = r10(n12);
        } else if ("oneof" == s11.kind) {
          o11 = s11.findField(a12.case) ? { case: a12.case, value: r10(a12.value) } : { case: void 0 };
        } else o11 = r10(a12);
        n11[s11.localName] = o11;
      }
      return n11;
    }
    function r10(e11) {
      if (void 0 === e11) return e11;
      if ((0, s10.isMessage)(e11)) return o10(e11);
      if (e11 instanceof Uint8Array) {
        const a11 = new Uint8Array(e11.byteLength);
        return a11.set(e11), a11;
      }
      return e11;
    }
    a10.toPlainMessage = o10;
  }