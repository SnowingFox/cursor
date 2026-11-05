// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 7235 range:648629..650739
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7235: (e2, t2, A2) => {
    "use strict";
    const { InvalidArgumentError: n2, RequestAbortedError: r2, SocketError: o2 } = A2(7902), { AsyncResource: s } = A2(290), i = A2(9361), { addSignal: a, removeSignal: c } = A2(9909), l = A2(2613);
    class u extends s {
      constructor(e3, t3) {
        if (!e3 || "object" != typeof e3) throw new n2("invalid opts");
        if ("function" != typeof t3) throw new n2("invalid callback");
        const { signal: A3, opaque: r3, responseHeaders: o3 } = e3;
        if (A3 && "function" != typeof A3.on && "function" != typeof A3.addEventListener) throw new n2("signal must be an EventEmitter or EventTarget");
        super("UNDICI_UPGRADE"), this.responseHeaders = o3 || null, this.opaque = r3 || null, this.callback = t3, this.abort = null, this.context = null, a(this, A3);
      }
      onConnect(e3, t3) {
        if (!this.callback) throw new r2();
        this.abort = e3, this.context = null;
      }
      onHeaders() {
        throw new o2("bad upgrade", null);
      }
      onUpgrade(e3, t3, A3) {
        const { callback: n3, opaque: r3, context: o3 } = this;
        l.strictEqual(e3, 101), c(this), this.callback = null;
        const s2 = "raw" === this.responseHeaders ? i.parseRawHeaders(t3) : i.parseHeaders(t3);
        this.runInAsyncScope(n3, null, null, { headers: s2, socket: A3, opaque: r3, context: o3 });
      }
      onError(e3) {
        const { callback: t3, opaque: A3 } = this;
        c(this), t3 && (this.callback = null, queueMicrotask(() => {
          this.runInAsyncScope(t3, null, e3, { opaque: A3 });
        }));
      }
    }
    e2.exports = function e3(t3, A3) {
      if (void 0 === A3) return new Promise((A4, n3) => {
        e3.call(this, t3, (e4, t4) => e4 ? n3(e4) : A4(t4));
      });
      try {
        const e4 = new u(t3, A3);
        this.dispatch({ ...t3, method: t3.method || "GET", upgrade: t3.protocol || "Websocket" }, e4);
      } catch (e4) {
        if ("function" != typeof A3) throw e4;
        const n3 = t3 && t3.opaque;
        queueMicrotask(() => A3(e4, { opaque: n3 }));
      }
    };
  }