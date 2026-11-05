// @recovered-by cursor-re
// artifact: app/extensions/cursor-browser-automation/dist/273.js sha256:ab64b3e34dc97e1e5c85ecdaec9168b4137705ddedfa3c341bca35d6a42d36bc
// module: 2665 range:6785..8625
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2665: (e, t, i) => {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: true }), t.AbstractTokenizer = void 0;
  const a = i(690);
  t.AbstractTokenizer = class {
    constructor(e2) {
      this.position = 0, this.numBuffer = new Uint8Array(8), this.fileInfo = e2 || {};
    }
    async readToken(e2, t2 = this.position) {
      const i2 = Buffer.alloc(e2.len);
      if (await this.readBuffer(i2, { position: t2 }) < e2.len) throw new a.EndOfStreamError();
      return e2.get(i2, 0);
    }
    async peekToken(e2, t2 = this.position) {
      const i2 = Buffer.alloc(e2.len);
      if (await this.peekBuffer(i2, { position: t2 }) < e2.len) throw new a.EndOfStreamError();
      return e2.get(i2, 0);
    }
    async readNumber(e2) {
      if (await this.readBuffer(this.numBuffer, { length: e2.len }) < e2.len) throw new a.EndOfStreamError();
      return e2.get(this.numBuffer, 0);
    }
    async peekNumber(e2) {
      if (await this.peekBuffer(this.numBuffer, { length: e2.len }) < e2.len) throw new a.EndOfStreamError();
      return e2.get(this.numBuffer, 0);
    }
    async ignore(e2) {
      if (void 0 !== this.fileInfo.size) {
        const t2 = this.fileInfo.size - this.position;
        if (e2 > t2) return this.position += t2, t2;
      }
      return this.position += e2, e2;
    }
    async close() {
    }
    normalizeOptions(e2, t2) {
      if (t2 && void 0 !== t2.position && t2.position < this.position) throw new Error("`options.position` must be equal or greater than `tokenizer.position`");
      return t2 ? { mayBeLess: true === t2.mayBeLess, offset: t2.offset ? t2.offset : 0, length: t2.length ? t2.length : e2.length - (t2.offset ? t2.offset : 0), position: t2.position ? t2.position : this.position } : { mayBeLess: false, offset: 0, length: e2.length, position: this.position };
    }
  };
}