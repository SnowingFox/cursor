// @recovered-by cursor-re
// artifact: app/extensions/cursor-browser-automation/dist/273.js sha256:ab64b3e34dc97e1e5c85ecdaec9168b4137705ddedfa3c341bca35d6a42d36bc
// module: 2457 range:5738..6783
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2457: (e, t, i) => {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: true }), t.BufferTokenizer = void 0;
  const a = i(690), n = i(2665);
  class r extends n.AbstractTokenizer {
    constructor(e2, t2) {
      super(t2), this.uint8Array = e2, this.fileInfo.size = this.fileInfo.size ? this.fileInfo.size : e2.length;
    }
    async readBuffer(e2, t2) {
      if (t2 && t2.position) {
        if (t2.position < this.position) throw new Error("`options.position` must be equal or greater than `tokenizer.position`");
        this.position = t2.position;
      }
      const i2 = await this.peekBuffer(e2, t2);
      return this.position += i2, i2;
    }
    async peekBuffer(e2, t2) {
      const i2 = this.normalizeOptions(e2, t2), n2 = Math.min(this.uint8Array.length - i2.position, i2.length);
      if (!i2.mayBeLess && n2 < i2.length) throw new a.EndOfStreamError();
      return e2.set(this.uint8Array.subarray(i2.position, i2.position + n2), i2.offset), n2;
    }
    async close() {
    }
  }
  t.BufferTokenizer = r;
}