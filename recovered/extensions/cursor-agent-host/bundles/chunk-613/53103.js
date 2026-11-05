// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 53103 range:294119..295594
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
53103: (A, e, t) => {
  "use strict";
  const r = t(55201), { InvalidArgumentError: s, RequestAbortedError: o } = t(38238), n = t(31646);
  class i extends n {
    #v = 1048576;
    #H = null;
    #V = false;
    #x = false;
    #W = 0;
    #O = null;
    #C = null;
    constructor({ maxSize: A2 }, e2) {
      if (super(e2), null != A2 && (!Number.isFinite(A2) || A2 < 1)) throw new s("maxSize must be a number greater than 0");
      this.#v = A2 ?? this.#v, this.#C = e2;
    }
    onConnect(A2) {
      this.#H = A2, this.#C.onConnect(this.#P.bind(this));
    }
    #P(A2) {
      this.#x = true, this.#O = A2;
    }
    onHeaders(A2, e2, t2, s2) {
      const n2 = r.parseHeaders(e2)["content-length"];
      if (null != n2 && n2 > this.#v) throw new o(`Response size (${n2}) larger than maxSize (${this.#v})`);
      return !!this.#x || this.#C.onHeaders(A2, e2, t2, s2);
    }
    onError(A2) {
      this.#V || (A2 = this.#O ?? A2, this.#C.onError(A2));
    }
    onData(A2) {
      return this.#W = this.#W + A2.length, this.#W >= this.#v && (this.#V = true, this.#x ? this.#C.onError(this.#O) : this.#C.onComplete([])), true;
    }
    onComplete(A2) {
      this.#V || (this.#x ? this.#C.onError(this.reason) : this.#C.onComplete(A2));
    }
  }
  A.exports = function({ maxSize: A2 } = { maxSize: 1048576 }) {
    return (e2) => function(t2, r2) {
      const { dumpMaxSize: s2 = A2 } = t2, o2 = new i({ maxSize: s2 }, r2);
      return e2(t2, o2);
    };
  };
}