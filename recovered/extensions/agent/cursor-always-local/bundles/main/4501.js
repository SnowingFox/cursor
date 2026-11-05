// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 4501 range:1170477..1172521
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4501: (t2, e2, r2) => {
    "use strict";
    const { AsyncResource: n2 } = r2(290), { InvalidArgumentError: s2, RequestAbortedError: i2, SocketError: o2 } = r2(8762), a = r2(3589), { addSignal: u, removeSignal: c } = r2(6921);
    class l extends n2 {
      constructor(t3, e3) {
        if (!t3 || "object" != typeof t3) throw new s2("invalid opts");
        if ("function" != typeof e3) throw new s2("invalid callback");
        const { signal: r3, opaque: n3, responseHeaders: i3 } = t3;
        if (r3 && "function" != typeof r3.on && "function" != typeof r3.addEventListener) throw new s2("signal must be an EventEmitter or EventTarget");
        super("UNDICI_CONNECT"), this.opaque = n3 || null, this.responseHeaders = i3 || null, this.callback = e3, this.abort = null, u(this, r3);
      }
      onConnect(t3, e3) {
        if (!this.callback) throw new i2();
        this.abort = t3, this.context = e3;
      }
      onHeaders() {
        throw new o2("bad connect", null);
      }
      onUpgrade(t3, e3, r3) {
        const { callback: n3, opaque: s3, context: i3 } = this;
        c(this), this.callback = null;
        let o3 = e3;
        null != o3 && (o3 = "raw" === this.responseHeaders ? a.parseRawHeaders(e3) : a.parseHeaders(e3)), this.runInAsyncScope(n3, null, null, { statusCode: t3, headers: o3, socket: r3, opaque: s3, context: i3 });
      }
      onError(t3) {
        const { callback: e3, opaque: r3 } = this;
        c(this), e3 && (this.callback = null, queueMicrotask(() => {
          this.runInAsyncScope(e3, null, t3, { opaque: r3 });
        }));
      }
    }
    t2.exports = function t3(e3, r3) {
      if (void 0 === r3) return new Promise((r4, n3) => {
        t3.call(this, e3, (t4, e4) => t4 ? n3(t4) : r4(e4));
      });
      try {
        const t4 = new l(e3, r3);
        this.dispatch({ ...e3, method: "CONNECT" }, t4);
      } catch (t4) {
        if ("function" != typeof r3) throw t4;
        const n3 = e3 && e3.opaque;
        queueMicrotask(() => r3(t4, { opaque: n3 }));
      }
    };
  }