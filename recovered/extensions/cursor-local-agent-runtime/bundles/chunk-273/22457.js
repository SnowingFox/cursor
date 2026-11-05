// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/273.js sha256:918321c092763b0f5509b45d1560ac236164a596e0ab5a603460d95abe18903b
// module: 22457 range:27579..28626
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
22457: (e, t, i) => {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: true }), t.BufferTokenizer = void 0;
  const a = i(690), n = i(72665);
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