// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 4501 range:400495..402526
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4501: (e, t, r) => {
    "use strict";
    const { AsyncResource: n } = r(90290), { InvalidArgumentError: s, RequestAbortedError: o, SocketError: i } = r(48762), a = r(83589), { addSignal: c, removeSignal: l } = r(26921);
    class u extends n {
      constructor(e2, t2) {
        if (!e2 || "object" != typeof e2) throw new s("invalid opts");
        if ("function" != typeof t2) throw new s("invalid callback");
        const { signal: r2, opaque: n2, responseHeaders: o2 } = e2;
        if (r2 && "function" != typeof r2.on && "function" != typeof r2.addEventListener) throw new s("signal must be an EventEmitter or EventTarget");
        super("UNDICI_CONNECT"), this.opaque = n2 || null, this.responseHeaders = o2 || null, this.callback = t2, this.abort = null, c(this, r2);
      }
      onConnect(e2, t2) {
        if (!this.callback) throw new o();
        this.abort = e2, this.context = t2;
      }
      onHeaders() {
        throw new i("bad connect", null);
      }
      onUpgrade(e2, t2, r2) {
        const { callback: n2, opaque: s2, context: o2 } = this;
        l(this), this.callback = null;
        let i2 = t2;
        null != i2 && (i2 = "raw" === this.responseHeaders ? a.parseRawHeaders(t2) : a.parseHeaders(t2)), this.runInAsyncScope(n2, null, null, { statusCode: e2, headers: i2, socket: r2, opaque: s2, context: o2 });
      }
      onError(e2) {
        const { callback: t2, opaque: r2 } = this;
        l(this), t2 && (this.callback = null, queueMicrotask(() => {
          this.runInAsyncScope(t2, null, e2, { opaque: r2 });
        }));
      }
    }
    e.exports = function e2(t2, r2) {
      if (void 0 === r2) return new Promise((r3, n2) => {
        e2.call(this, t2, (e3, t3) => e3 ? n2(e3) : r3(t3));
      });
      try {
        const e3 = new u(t2, r2);
        this.dispatch({ ...t2, method: "CONNECT" }, e3);
      } catch (e3) {
        if ("function" != typeof r2) throw e3;
        const n2 = t2 && t2.opaque;
        queueMicrotask(() => r2(e3, { opaque: n2 }));
      }
    };
  }