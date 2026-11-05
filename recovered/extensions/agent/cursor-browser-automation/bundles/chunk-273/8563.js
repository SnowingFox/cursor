// @recovered-by cursor-re
// artifact: app/extensions/cursor-browser-automation/dist/273.js sha256:ab64b3e34dc97e1e5c85ecdaec9168b4137705ddedfa3c341bca35d6a42d36bc
// module: 8563 range:84533..86579
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8563: (e, t, i) => {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: true }), t.ReadStreamTokenizer = void 0;
  const a = i(2665), n = i(690);
  class r extends a.AbstractTokenizer {
    constructor(e2, t2) {
      super(t2), this.streamReader = new n.StreamReader(e2);
    }
    async getFileInfo() {
      return this.fileInfo;
    }
    async readBuffer(e2, t2) {
      const i2 = this.normalizeOptions(e2, t2), a2 = i2.position - this.position;
      if (a2 > 0) return await this.ignore(a2), this.readBuffer(e2, t2);
      if (a2 < 0) throw new Error("`options.position` must be equal or greater than `tokenizer.position`");
      if (0 === i2.length) return 0;
      const r2 = await this.streamReader.read(e2, i2.offset, i2.length);
      if (this.position += r2, (!t2 || !t2.mayBeLess) && r2 < i2.length) throw new n.EndOfStreamError();
      return r2;
    }
    async peekBuffer(e2, t2) {
      const i2 = this.normalizeOptions(e2, t2);
      let a2 = 0;
      if (i2.position) {
        const t3 = i2.position - this.position;
        if (t3 > 0) {
          const n2 = new Uint8Array(i2.length + t3);
          return a2 = await this.peekBuffer(n2, { mayBeLess: i2.mayBeLess }), e2.set(n2.subarray(t3), i2.offset), a2 - t3;
        }
        if (t3 < 0) throw new Error("Cannot peek from a negative offset in a stream");
      }
      if (i2.length > 0) {
        try {
          a2 = await this.streamReader.peek(e2, i2.offset, i2.length);
        } catch (e3) {
          if (t2 && t2.mayBeLess && e3 instanceof n.EndOfStreamError) return 0;
          throw e3;
        }
        if (!i2.mayBeLess && a2 < i2.length) throw new n.EndOfStreamError();
      }
      return a2;
    }
    async ignore(e2) {
      const t2 = Math.min(256e3, e2), i2 = new Uint8Array(t2);
      let a2 = 0;
      for (; a2 < e2; ) {
        const n2 = e2 - a2, r2 = await this.readBuffer(i2, { length: Math.min(t2, n2) });
        if (r2 < 0) return r2;
        a2 += r2;
      }
      return a2;
    }
  }
  t.ReadStreamTokenizer = r;
}