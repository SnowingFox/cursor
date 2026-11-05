// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 35305 range:204323..206263
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
35305: (A, e, t) => {
  "use strict";
  const r = t(56970), { AsyncResource: s } = t(16698), { InvalidArgumentError: o, SocketError: n } = t(38238), i = t(55201), { addSignal: a, removeSignal: Q } = t(65893);
  class g extends s {
    constructor(A2, e2) {
      if (!A2 || "object" != typeof A2) throw new o("invalid opts");
      if ("function" != typeof e2) throw new o("invalid callback");
      const { signal: t2, opaque: r2, responseHeaders: s2 } = A2;
      if (t2 && "function" != typeof t2.on && "function" != typeof t2.addEventListener) throw new o("signal must be an EventEmitter or EventTarget");
      super("UNDICI_CONNECT"), this.opaque = r2 || null, this.responseHeaders = s2 || null, this.callback = e2, this.abort = null, a(this, t2);
    }
    onConnect(A2, e2) {
      this.reason ? A2(this.reason) : (r(this.callback), this.abort = A2, this.context = e2);
    }
    onHeaders() {
      throw new n("bad connect", null);
    }
    onUpgrade(A2, e2, t2) {
      const { callback: r2, opaque: s2, context: o2 } = this;
      Q(this), this.callback = null;
      let n2 = e2;
      null != n2 && (n2 = "raw" === this.responseHeaders ? i.parseRawHeaders(e2) : i.parseHeaders(e2)), this.runInAsyncScope(r2, null, null, { statusCode: A2, headers: n2, socket: t2, opaque: s2, context: o2 });
    }
    onError(A2) {
      const { callback: e2, opaque: t2 } = this;
      Q(this), e2 && (this.callback = null, queueMicrotask(() => {
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
      this.dispatch({ ...e2, method: "CONNECT" }, A3);
    } catch (A3) {
      if ("function" != typeof t2) throw A3;
      const r2 = e2?.opaque;
      queueMicrotask(() => t2(A3, { opaque: r2 }));
    }
  };
}