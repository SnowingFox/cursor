// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 15306 range:40504..44598
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
15306: (A, e, t) => {
  "use strict";
  const r = t(56970), { Readable: s } = t(6564), { InvalidArgumentError: o, RequestAbortedError: n } = t(38238), i = t(55201), { getResolveErrorBodyCallback: a } = t(31904), { AsyncResource: Q } = t(16698);
  class g extends Q {
    constructor(A2, e2) {
      if (!A2 || "object" != typeof A2) throw new o("invalid opts");
      const { signal: t2, method: r2, opaque: s2, body: a2, onInfo: Q2, responseHeaders: g2, throwOnError: E, highWaterMark: B } = A2;
      try {
        if ("function" != typeof e2) throw new o("invalid callback");
        if (B && ("number" != typeof B || B < 0)) throw new o("invalid highWaterMark");
        if (t2 && "function" != typeof t2.on && "function" != typeof t2.addEventListener) throw new o("signal must be an EventEmitter or EventTarget");
        if ("CONNECT" === r2) throw new o("invalid method");
        if (Q2 && "function" != typeof Q2) throw new o("invalid onInfo callback");
        super("UNDICI_REQUEST");
      } catch (A3) {
        throw i.isStream(a2) && i.destroy(a2.on("error", i.nop), A3), A3;
      }
      this.method = r2, this.responseHeaders = g2 || null, this.opaque = s2 || null, this.callback = e2, this.res = null, this.abort = null, this.body = a2, this.trailers = {}, this.context = null, this.onInfo = Q2 || null, this.throwOnError = E, this.highWaterMark = B, this.signal = t2, this.reason = null, this.removeAbortListener = null, i.isStream(a2) && a2.on("error", (A3) => {
        this.onError(A3);
      }), this.signal && (this.signal.aborted ? this.reason = this.signal.reason ?? new n() : this.removeAbortListener = i.addAbortListener(this.signal, () => {
        this.reason = this.signal.reason ?? new n(), this.res ? i.destroy(this.res.on("error", i.nop), this.reason) : this.abort && this.abort(this.reason), this.removeAbortListener && (this.res?.off("close", this.removeAbortListener), this.removeAbortListener(), this.removeAbortListener = null);
      }));
    }
    onConnect(A2, e2) {
      this.reason ? A2(this.reason) : (r(this.callback), this.abort = A2, this.context = e2);
    }
    onHeaders(A2, e2, t2, r2) {
      const { callback: o2, opaque: n2, abort: Q2, context: g2, responseHeaders: E, highWaterMark: B } = this, c = "raw" === E ? i.parseRawHeaders(e2) : i.parseHeaders(e2);
      if (A2 < 200) return void (this.onInfo && this.onInfo({ statusCode: A2, headers: c }));
      const I = "raw" === E ? i.parseHeaders(e2) : c, C = I["content-type"], h = I["content-length"], l = new s({ resume: t2, abort: Q2, contentType: C, contentLength: "HEAD" !== this.method && h ? Number(h) : null, highWaterMark: B });
      this.removeAbortListener && l.on("close", this.removeAbortListener), this.callback = null, this.res = l, null !== o2 && (this.throwOnError && A2 >= 400 ? this.runInAsyncScope(a, null, { callback: o2, body: l, contentType: C, statusCode: A2, statusMessage: r2, headers: c }) : this.runInAsyncScope(o2, null, null, { statusCode: A2, headers: c, trailers: this.trailers, opaque: n2, body: l, context: g2 }));
    }
    onData(A2) {
      return this.res.push(A2);
    }
    onComplete(A2) {
      i.parseHeaders(A2, this.trailers), this.res.push(null);
    }
    onError(A2) {
      const { res: e2, callback: t2, body: r2, opaque: s2 } = this;
      t2 && (this.callback = null, queueMicrotask(() => {
        this.runInAsyncScope(t2, null, A2, { opaque: s2 });
      })), e2 && (this.res = null, queueMicrotask(() => {
        i.destroy(e2, A2);
      })), r2 && (this.body = null, i.destroy(r2, A2)), this.removeAbortListener && (e2?.off("close", this.removeAbortListener), this.removeAbortListener(), this.removeAbortListener = null);
    }
  }
  A.exports = function A2(e2, t2) {
    if (void 0 === t2) return new Promise((t3, r2) => {
      A2.call(this, e2, (A3, e3) => A3 ? r2(A3) : t3(e3));
    });
    try {
      this.dispatch(e2, new g(e2, t2));
    } catch (A3) {
      if ("function" != typeof t2) throw A3;
      const r2 = e2?.opaque;
      queueMicrotask(() => t2(A3, { opaque: r2 }));
    }
  }, A.exports.RequestHandler = g;
}