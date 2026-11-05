// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 7235 range:858768..860883
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7235: (e2, a2, n2) => {
    "use strict";
    const { InvalidArgumentError: t2, RequestAbortedError: s2, SocketError: o2 } = n2(7902), { AsyncResource: r2 } = n2(290), i2 = n2(9361), { addSignal: l, removeSignal: d } = n2(9909), m = n2(2613);
    class c extends r2 {
      constructor(e3, a3) {
        if (!e3 || "object" != typeof e3) throw new t2("invalid opts");
        if ("function" != typeof a3) throw new t2("invalid callback");
        const { signal: n3, opaque: s3, responseHeaders: o3 } = e3;
        if (n3 && "function" != typeof n3.on && "function" != typeof n3.addEventListener) throw new t2("signal must be an EventEmitter or EventTarget");
        super("UNDICI_UPGRADE"), this.responseHeaders = o3 || null, this.opaque = s3 || null, this.callback = a3, this.abort = null, this.context = null, l(this, n3);
      }
      onConnect(e3, a3) {
        if (!this.callback) throw new s2();
        this.abort = e3, this.context = null;
      }
      onHeaders() {
        throw new o2("bad upgrade", null);
      }
      onUpgrade(e3, a3, n3) {
        const { callback: t3, opaque: s3, context: o3 } = this;
        m.strictEqual(e3, 101), d(this), this.callback = null;
        const r3 = "raw" === this.responseHeaders ? i2.parseRawHeaders(a3) : i2.parseHeaders(a3);
        this.runInAsyncScope(t3, null, null, { headers: r3, socket: n3, opaque: s3, context: o3 });
      }
      onError(e3) {
        const { callback: a3, opaque: n3 } = this;
        d(this), a3 && (this.callback = null, queueMicrotask(() => {
          this.runInAsyncScope(a3, null, e3, { opaque: n3 });
        }));
      }
    }
    e2.exports = function e3(a3, n3) {
      if (void 0 === n3) return new Promise((n4, t3) => {
        e3.call(this, a3, (e4, a4) => e4 ? t3(e4) : n4(a4));
      });
      try {
        const e4 = new c(a3, n3);
        this.dispatch({ ...a3, method: a3.method || "GET", upgrade: a3.protocol || "Websocket" }, e4);
      } catch (e4) {
        if ("function" != typeof n3) throw e4;
        const t3 = a3 && a3.opaque;
        queueMicrotask(() => n3(e4, { opaque: t3 }));
      }
    };
  }