// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 31646 range:186673..187457
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
31646: (A) => {
  "use strict";
  A.exports = class {
    #C;
    constructor(A2) {
      if ("object" != typeof A2 || null === A2) throw new TypeError("handler must be an object");
      this.#C = A2;
    }
    onConnect(...A2) {
      return this.#C.onConnect?.(...A2);
    }
    onError(...A2) {
      return this.#C.onError?.(...A2);
    }
    onUpgrade(...A2) {
      return this.#C.onUpgrade?.(...A2);
    }
    onResponseStarted(...A2) {
      return this.#C.onResponseStarted?.(...A2);
    }
    onHeaders(...A2) {
      return this.#C.onHeaders?.(...A2);
    }
    onData(...A2) {
      return this.#C.onData?.(...A2);
    }
    onComplete(...A2) {
      return this.#C.onComplete?.(...A2);
    }
    onBodySent(...A2) {
      return this.#C.onBodySent?.(...A2);
    }
  };
}