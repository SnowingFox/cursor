// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 761 range:35048..37089
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
761: (e2, A2, t2) => {
    "use strict";
    const { AsyncResource: n2 } = t2(290), { InvalidArgumentError: r2, RequestAbortedError: o2, SocketError: s } = t2(7902), a = t2(9361), { addSignal: i, removeSignal: c } = t2(9909);
    class l extends n2 {
      constructor(e3, A3) {
        if (!e3 || "object" != typeof e3) throw new r2("invalid opts");
        if ("function" != typeof A3) throw new r2("invalid callback");
        const { signal: t3, opaque: n3, responseHeaders: o3 } = e3;
        if (t3 && "function" != typeof t3.on && "function" != typeof t3.addEventListener) throw new r2("signal must be an EventEmitter or EventTarget");
        super("UNDICI_CONNECT"), this.opaque = n3 || null, this.responseHeaders = o3 || null, this.callback = A3, this.abort = null, i(this, t3);
      }
      onConnect(e3, A3) {
        if (!this.callback) throw new o2();
        this.abort = e3, this.context = A3;
      }
      onHeaders() {
        throw new s("bad connect", null);
      }
      onUpgrade(e3, A3, t3) {
        const { callback: n3, opaque: r3, context: o3 } = this;
        c(this), this.callback = null;
        let s2 = A3;
        null != s2 && (s2 = "raw" === this.responseHeaders ? a.parseRawHeaders(A3) : a.parseHeaders(A3)), this.runInAsyncScope(n3, null, null, { statusCode: e3, headers: s2, socket: t3, opaque: r3, context: o3 });
      }
      onError(e3) {
        const { callback: A3, opaque: t3 } = this;
        c(this), A3 && (this.callback = null, queueMicrotask(() => {
          this.runInAsyncScope(A3, null, e3, { opaque: t3 });
        }));
      }
    }
    e2.exports = function e3(A3, t3) {
      if (void 0 === t3) return new Promise((t4, n3) => {
        e3.call(this, A3, (e4, A4) => e4 ? n3(e4) : t4(A4));
      });
      try {
        const e4 = new l(A3, t3);
        this.dispatch({ ...A3, method: "CONNECT" }, e4);
      } catch (e4) {
        if ("function" != typeof t3) throw e4;
        const n3 = A3 && A3.opaque;
        queueMicrotask(() => t3(e4, { opaque: n3 }));
      }
    };
  }