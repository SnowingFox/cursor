// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 2311 range:675997..678109
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2311: (t2, e2, r2) => {
    "use strict";
    const { InvalidArgumentError: n2, RequestAbortedError: s2, SocketError: i2 } = r2(8762), { AsyncResource: o2 } = r2(290), a = r2(3589), { addSignal: u, removeSignal: c } = r2(6921), l = r2(2613);
    class m extends o2 {
      constructor(t3, e3) {
        if (!t3 || "object" != typeof t3) throw new n2("invalid opts");
        if ("function" != typeof e3) throw new n2("invalid callback");
        const { signal: r3, opaque: s3, responseHeaders: i3 } = t3;
        if (r3 && "function" != typeof r3.on && "function" != typeof r3.addEventListener) throw new n2("signal must be an EventEmitter or EventTarget");
        super("UNDICI_UPGRADE"), this.responseHeaders = i3 || null, this.opaque = s3 || null, this.callback = e3, this.abort = null, this.context = null, u(this, r3);
      }
      onConnect(t3, e3) {
        if (!this.callback) throw new s2();
        this.abort = t3, this.context = null;
      }
      onHeaders() {
        throw new i2("bad upgrade", null);
      }
      onUpgrade(t3, e3, r3) {
        const { callback: n3, opaque: s3, context: i3 } = this;
        l.strictEqual(t3, 101), c(this), this.callback = null;
        const o3 = "raw" === this.responseHeaders ? a.parseRawHeaders(e3) : a.parseHeaders(e3);
        this.runInAsyncScope(n3, null, null, { headers: o3, socket: r3, opaque: s3, context: i3 });
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
        const t4 = new m(e3, r3);
        this.dispatch({ ...e3, method: e3.method || "GET", upgrade: e3.protocol || "Websocket" }, t4);
      } catch (t4) {
        if ("function" != typeof r3) throw t4;
        const n3 = e3 && e3.opaque;
        queueMicrotask(() => r3(t4, { opaque: n3 }));
      }
    };
  }