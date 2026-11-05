// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 761 range:35069..37115
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
761: (e2, n2, a2) => {
    "use strict";
    const { AsyncResource: t2 } = a2(290), { InvalidArgumentError: s2, RequestAbortedError: o2, SocketError: r2 } = a2(7902), i2 = a2(9361), { addSignal: A, removeSignal: l } = a2(9909);
    class c extends t2 {
      constructor(e3, n3) {
        if (!e3 || "object" != typeof e3) throw new s2("invalid opts");
        if ("function" != typeof n3) throw new s2("invalid callback");
        const { signal: a3, opaque: t3, responseHeaders: o3 } = e3;
        if (a3 && "function" != typeof a3.on && "function" != typeof a3.addEventListener) throw new s2("signal must be an EventEmitter or EventTarget");
        super("UNDICI_CONNECT"), this.opaque = t3 || null, this.responseHeaders = o3 || null, this.callback = n3, this.abort = null, A(this, a3);
      }
      onConnect(e3, n3) {
        if (!this.callback) throw new o2();
        this.abort = e3, this.context = n3;
      }
      onHeaders() {
        throw new r2("bad connect", null);
      }
      onUpgrade(e3, n3, a3) {
        const { callback: t3, opaque: s3, context: o3 } = this;
        l(this), this.callback = null;
        let r3 = n3;
        null != r3 && (r3 = "raw" === this.responseHeaders ? i2.parseRawHeaders(n3) : i2.parseHeaders(n3)), this.runInAsyncScope(t3, null, null, { statusCode: e3, headers: r3, socket: a3, opaque: s3, context: o3 });
      }
      onError(e3) {
        const { callback: n3, opaque: a3 } = this;
        l(this), n3 && (this.callback = null, queueMicrotask(() => {
          this.runInAsyncScope(n3, null, e3, { opaque: a3 });
        }));
      }
    }
    e2.exports = function e3(n3, a3) {
      if (void 0 === a3) return new Promise((a4, t3) => {
        e3.call(this, n3, (e4, n4) => e4 ? t3(e4) : a4(n4));
      });
      try {
        const e4 = new c(n3, a3);
        this.dispatch({ ...n3, method: "CONNECT" }, e4);
      } catch (e4) {
        if ("function" != typeof a3) throw e4;
        const t3 = n3 && n3.opaque;
        queueMicrotask(() => a3(e4, { opaque: t3 }));
      }
    };
  }