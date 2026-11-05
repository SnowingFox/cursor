// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 54115 range:296650..298641
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
54115: (A, e, t) => {
  "use strict";
  const { InvalidArgumentError: r, SocketError: s } = t(38238), { AsyncResource: o } = t(16698), n = t(55201), { addSignal: i, removeSignal: a } = t(65893), Q = t(56970);
  class g extends o {
    constructor(A2, e2) {
      if (!A2 || "object" != typeof A2) throw new r("invalid opts");
      if ("function" != typeof e2) throw new r("invalid callback");
      const { signal: t2, opaque: s2, responseHeaders: o2 } = A2;
      if (t2 && "function" != typeof t2.on && "function" != typeof t2.addEventListener) throw new r("signal must be an EventEmitter or EventTarget");
      super("UNDICI_UPGRADE"), this.responseHeaders = o2 || null, this.opaque = s2 || null, this.callback = e2, this.abort = null, this.context = null, i(this, t2);
    }
    onConnect(A2, e2) {
      this.reason ? A2(this.reason) : (Q(this.callback), this.abort = A2, this.context = null);
    }
    onHeaders() {
      throw new s("bad upgrade", null);
    }
    onUpgrade(A2, e2, t2) {
      Q(101 === A2);
      const { callback: r2, opaque: s2, context: o2 } = this;
      a(this), this.callback = null;
      const i2 = "raw" === this.responseHeaders ? n.parseRawHeaders(e2) : n.parseHeaders(e2);
      this.runInAsyncScope(r2, null, null, { headers: i2, socket: t2, opaque: s2, context: o2 });
    }
    onError(A2) {
      const { callback: e2, opaque: t2 } = this;
      a(this), e2 && (this.callback = null, queueMicrotask(() => {
        this.runInAsyncScope(e2, null, A2, { opaque: t2 });
      }));
    }
  }
  A.exports = function A2(e2, t2) {
    if (void 0 === t2) return new Promise((t3, r2) => {
      A2.call(this, e2, (A3, e3) => A3 ? r2(A3) : t3(e3));
    });
    try {
      const A3 = new g(e2, t2);
      this.dispatch({ ...e2, method: e2.method || "GET", upgrade: e2.protocol || "Websocket" }, A3);
    } catch (A3) {
      if ("function" != typeof t2) throw A3;
      const r2 = e2?.opaque;
      queueMicrotask(() => t2(A3, { opaque: r2 }));
    }
  };
}