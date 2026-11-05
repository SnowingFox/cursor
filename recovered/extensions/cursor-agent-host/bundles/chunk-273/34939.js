// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/273.js sha256:918321c092763b0f5509b45d1560ac236164a596e0ab5a603460d95abe18903b
// module: 34939 range:35683..38040
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
34939: (e, t, i) => {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: true }), t.StreamReader = t.EndOfStreamError = void 0;
  const a = i(91524), n = i(28467);
  var r = i(91524);
  Object.defineProperty(t, "EndOfStreamError", { enumerable: true, get: function() {
    return r.EndOfStreamError;
  } });
  t.StreamReader = class {
    constructor(e2) {
      if (this.s = e2, this.deferred = null, this.endOfStream = false, this.peekQueue = [], !e2.read || !e2.once) throw new Error("Expected an instance of stream.Readable");
      this.s.once("end", () => this.reject(new a.EndOfStreamError())), this.s.once("error", (e3) => this.reject(e3)), this.s.once("close", () => this.reject(new Error("Stream closed")));
    }
    async peek(e2, t2, i2) {
      const a2 = await this.read(e2, t2, i2);
      return this.peekQueue.push(e2.subarray(t2, t2 + a2)), a2;
    }
    async read(e2, t2, i2) {
      if (0 === i2) return 0;
      if (0 === this.peekQueue.length && this.endOfStream) throw new a.EndOfStreamError();
      let n2 = i2, r2 = 0;
      for (; this.peekQueue.length > 0 && n2 > 0; ) {
        const i3 = this.peekQueue.pop();
        if (!i3) throw new Error("peekData should be defined");
        const a2 = Math.min(i3.length, n2);
        e2.set(i3.subarray(0, a2), t2 + r2), r2 += a2, n2 -= a2, a2 < i3.length && this.peekQueue.push(i3.subarray(a2));
      }
      for (; n2 > 0 && !this.endOfStream; ) {
        const i3 = Math.min(n2, 1048576), a2 = await this.readFromStream(e2, t2 + r2, i3);
        if (r2 += a2, a2 < i3) break;
        n2 -= a2;
      }
      return r2;
    }
    async readFromStream(e2, t2, i2) {
      const a2 = this.s.read(i2);
      if (a2) return e2.set(a2, t2), a2.length;
      {
        const a3 = { buffer: e2, offset: t2, length: i2, deferred: new n.Deferred() };
        return this.deferred = a3.deferred, this.s.once("readable", () => {
          this.readDeferred(a3);
        }), a3.deferred.promise;
      }
    }
    readDeferred(e2) {
      const t2 = this.s.read(e2.length);
      t2 ? (e2.buffer.set(t2, e2.offset), e2.deferred.resolve(t2.length), this.deferred = null) : this.s.once("readable", () => {
        this.readDeferred(e2);
      });
    }
    reject(e2) {
      this.endOfStream = true, this.deferred && (this.deferred.reject(e2), this.deferred = null);
    }
  };
}