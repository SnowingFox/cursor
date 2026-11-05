// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 13903 range:36582..40502
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
13903: (A, e, t) => {
  "use strict";
  const r = t(56970), { finished: s, PassThrough: o } = t(57075), { InvalidArgumentError: n, InvalidReturnValueError: i } = t(38238), a = t(55201), { getResolveErrorBodyCallback: Q } = t(31904), { AsyncResource: g } = t(16698), { addSignal: E, removeSignal: B } = t(65893);
  class c extends g {
    constructor(A2, e2, t2) {
      if (!A2 || "object" != typeof A2) throw new n("invalid opts");
      const { signal: r2, method: s2, opaque: o2, body: i2, onInfo: Q2, responseHeaders: g2, throwOnError: B2 } = A2;
      try {
        if ("function" != typeof t2) throw new n("invalid callback");
        if ("function" != typeof e2) throw new n("invalid factory");
        if (r2 && "function" != typeof r2.on && "function" != typeof r2.addEventListener) throw new n("signal must be an EventEmitter or EventTarget");
        if ("CONNECT" === s2) throw new n("invalid method");
        if (Q2 && "function" != typeof Q2) throw new n("invalid onInfo callback");
        super("UNDICI_STREAM");
      } catch (A3) {
        throw a.isStream(i2) && a.destroy(i2.on("error", a.nop), A3), A3;
      }
      this.responseHeaders = g2 || null, this.opaque = o2 || null, this.factory = e2, this.callback = t2, this.res = null, this.abort = null, this.context = null, this.trailers = null, this.body = i2, this.onInfo = Q2 || null, this.throwOnError = B2 || false, a.isStream(i2) && i2.on("error", (A3) => {
        this.onError(A3);
      }), E(this, r2);
    }
    onConnect(A2, e2) {
      this.reason ? A2(this.reason) : (r(this.callback), this.abort = A2, this.context = e2);
    }
    onHeaders(A2, e2, t2, r2) {
      const { factory: n2, opaque: g2, context: E2, callback: B2, responseHeaders: c2 } = this, I = "raw" === c2 ? a.parseRawHeaders(e2) : a.parseHeaders(e2);
      if (A2 < 200) return void (this.onInfo && this.onInfo({ statusCode: A2, headers: I }));
      let C;
      if (this.factory = null, this.throwOnError && A2 >= 400) {
        const t3 = ("raw" === c2 ? a.parseHeaders(e2) : I)["content-type"];
        C = new o(), this.callback = null, this.runInAsyncScope(Q, null, { callback: B2, body: C, contentType: t3, statusCode: A2, statusMessage: r2, headers: I });
      } else {
        if (null === n2) return;
        if (C = this.runInAsyncScope(n2, null, { statusCode: A2, headers: I, opaque: g2, context: E2 }), !C || "function" != typeof C.write || "function" != typeof C.end || "function" != typeof C.on) throw new i("expected Writable");
        s(C, { readable: false }, (A3) => {
          const { callback: e3, res: t3, opaque: r3, trailers: s2, abort: o2 } = this;
          this.res = null, !A3 && t3.readable || a.destroy(t3, A3), this.callback = null, this.runInAsyncScope(e3, null, A3 || null, { opaque: r3, trailers: s2 }), A3 && o2();
        });
      }
      C.on("drain", t2), this.res = C;
      return true !== (void 0 !== C.writableNeedDrain ? C.writableNeedDrain : C._writableState?.needDrain);
    }
    onData(A2) {
      const { res: e2 } = this;
      return !e2 || e2.write(A2);
    }
    onComplete(A2) {
      const { res: e2 } = this;
      B(this), e2 && (this.trailers = a.parseHeaders(A2), e2.end());
    }
    onError(A2) {
      const { res: e2, callback: t2, opaque: r2, body: s2 } = this;
      B(this), this.factory = null, e2 ? (this.res = null, a.destroy(e2, A2)) : t2 && (this.callback = null, queueMicrotask(() => {
        this.runInAsyncScope(t2, null, A2, { opaque: r2 });
      })), s2 && (this.body = null, a.destroy(s2, A2));
    }
  }
  A.exports = function A2(e2, t2, r2) {
    if (void 0 === r2) return new Promise((r3, s2) => {
      A2.call(this, e2, t2, (A3, e3) => A3 ? s2(A3) : r3(e3));
    });
    try {
      this.dispatch(e2, new c(e2, t2, r2));
    } catch (A3) {
      if ("function" != typeof r2) throw A3;
      const t3 = e2?.opaque;
      queueMicrotask(() => r2(A3, { opaque: t3 }));
    }
  };
}