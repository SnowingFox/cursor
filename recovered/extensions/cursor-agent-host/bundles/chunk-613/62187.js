// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 62187 range:339004..340428
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
62187: (A, e, t) => {
  "use strict";
  const { WebsocketFrameSend: r } = t(35553), { opcodes: s, sendHints: o } = t(30229), n = t(50423), i = Buffer[Symbol.species];
  function a(A2, e2) {
    return new r((function(A3, e3) {
      switch (e3) {
        case o.string:
          return Buffer.from(A3);
        case o.arrayBuffer:
        case o.blob:
          return new i(A3);
        case o.typedArray:
          return new i(A3.buffer, A3.byteOffset, A3.byteLength);
      }
    })(A2, e2)).createFrame(e2 === o.string ? s.TEXT : s.BINARY);
  }
  A.exports = { SendQueue: class {
    #q = new n();
    #Z = false;
    #z;
    constructor(A2) {
      this.#z = A2;
    }
    add(A2, e2, t2) {
      if (t2 !== o.blob) {
        const r3 = a(A2, t2);
        if (this.#Z) {
          const A3 = { promise: null, callback: e2, frame: r3 };
          this.#q.push(A3);
        } else this.#z.write(r3, e2);
        return;
      }
      const r2 = { promise: A2.arrayBuffer().then((A3) => {
        r2.promise = null, r2.frame = a(A3, t2);
      }), callback: e2, frame: null };
      this.#q.push(r2), this.#Z || this.#K();
    }
    async #K() {
      this.#Z = true;
      const A2 = this.#q;
      for (; !A2.isEmpty(); ) {
        const e2 = A2.shift();
        null !== e2.promise && await e2.promise, this.#z.write(e2.frame, e2.callback), e2.callback = e2.frame = null;
      }
      this.#Z = false;
    }
  } };
}