// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 761 range:39239..41280
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
761: (e2, n2, t2) => {
    "use strict";
    const { AsyncResource: a2 } = t2(290), { InvalidArgumentError: s2, RequestAbortedError: o2, SocketError: r } = t2(7902), i = t2(9361), { addSignal: A, removeSignal: c } = t2(9909);
    class l extends a2 {
      constructor(e3, n3) {
        if (!e3 || "object" != typeof e3) throw new s2("invalid opts");
        if ("function" != typeof n3) throw new s2("invalid callback");
        const { signal: t3, opaque: a3, responseHeaders: o3 } = e3;
        if (t3 && "function" != typeof t3.on && "function" != typeof t3.addEventListener) throw new s2("signal must be an EventEmitter or EventTarget");
        super("UNDICI_CONNECT"), this.opaque = a3 || null, this.responseHeaders = o3 || null, this.callback = n3, this.abort = null, A(this, t3);
      }
      onConnect(e3, n3) {
        if (!this.callback) throw new o2();
        this.abort = e3, this.context = n3;
      }
      onHeaders() {
        throw new r("bad connect", null);
      }
      onUpgrade(e3, n3, t3) {
        const { callback: a3, opaque: s3, context: o3 } = this;
        c(this), this.callback = null;
        let r2 = n3;
        null != r2 && (r2 = "raw" === this.responseHeaders ? i.parseRawHeaders(n3) : i.parseHeaders(n3)), this.runInAsyncScope(a3, null, null, { statusCode: e3, headers: r2, socket: t3, opaque: s3, context: o3 });
      }
      onError(e3) {
        const { callback: n3, opaque: t3 } = this;
        c(this), n3 && (this.callback = null, queueMicrotask(() => {
          this.runInAsyncScope(n3, null, e3, { opaque: t3 });
        }));
      }
    }
    e2.exports = function e3(n3, t3) {
      if (void 0 === t3) return new Promise((t4, a3) => {
        e3.call(this, n3, (e4, n4) => e4 ? a3(e4) : t4(n4));
      });
      try {
        const e4 = new l(n3, t3);
        this.dispatch({ ...n3, method: "CONNECT" }, e4);
      } catch (e4) {
        if ("function" != typeof t3) throw e4;
        const a3 = n3 && n3.opaque;
        queueMicrotask(() => t3(e4, { opaque: a3 }));
      }
    };
  }