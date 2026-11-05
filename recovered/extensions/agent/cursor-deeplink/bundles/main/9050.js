// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 9050 range:819853..823336
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9050: (e2, t2, A2) => {
    "use strict";
    const n2 = A2(4260), { InvalidArgumentError: r2, RequestAbortedError: o2 } = A2(7902), s = A2(9361), { getResolveErrorBodyCallback: i } = A2(5872), { AsyncResource: a } = A2(290), { addSignal: c, removeSignal: l } = A2(9909);
    class u extends a {
      constructor(e3, t3) {
        if (!e3 || "object" != typeof e3) throw new r2("invalid opts");
        const { signal: A3, method: n3, opaque: o3, body: i2, onInfo: a2, responseHeaders: l2, throwOnError: u2, highWaterMark: g } = e3;
        try {
          if ("function" != typeof t3) throw new r2("invalid callback");
          if (g && ("number" != typeof g || g < 0)) throw new r2("invalid highWaterMark");
          if (A3 && "function" != typeof A3.on && "function" != typeof A3.addEventListener) throw new r2("signal must be an EventEmitter or EventTarget");
          if ("CONNECT" === n3) throw new r2("invalid method");
          if (a2 && "function" != typeof a2) throw new r2("invalid onInfo callback");
          super("UNDICI_REQUEST");
        } catch (e4) {
          throw s.isStream(i2) && s.destroy(i2.on("error", s.nop), e4), e4;
        }
        this.responseHeaders = l2 || null, this.opaque = o3 || null, this.callback = t3, this.res = null, this.abort = null, this.body = i2, this.trailers = {}, this.context = null, this.onInfo = a2 || null, this.throwOnError = u2, this.highWaterMark = g, s.isStream(i2) && i2.on("error", (e4) => {
          this.onError(e4);
        }), c(this, A3);
      }
      onConnect(e3, t3) {
        if (!this.callback) throw new o2();
        this.abort = e3, this.context = t3;
      }
      onHeaders(e3, t3, A3, r3) {
        const { callback: o3, opaque: a2, abort: c2, context: l2, responseHeaders: u2, highWaterMark: g } = this, E = "raw" === u2 ? s.parseRawHeaders(t3) : s.parseHeaders(t3);
        if (e3 < 200) return void (this.onInfo && this.onInfo({ statusCode: e3, headers: E }));
        const h = ("raw" === u2 ? s.parseHeaders(t3) : E)["content-type"], d = new n2({ resume: A3, abort: c2, contentType: h, highWaterMark: g });
        this.callback = null, this.res = d, null !== o3 && (this.throwOnError && e3 >= 400 ? this.runInAsyncScope(i, null, { callback: o3, body: d, contentType: h, statusCode: e3, statusMessage: r3, headers: E }) : this.runInAsyncScope(o3, null, null, { statusCode: e3, headers: E, trailers: this.trailers, opaque: a2, body: d, context: l2 }));
      }
      onData(e3) {
        const { res: t3 } = this;
        return t3.push(e3);
      }
      onComplete(e3) {
        const { res: t3 } = this;
        l(this), s.parseHeaders(e3, this.trailers), t3.push(null);
      }
      onError(e3) {
        const { res: t3, callback: A3, body: n3, opaque: r3 } = this;
        l(this), A3 && (this.callback = null, queueMicrotask(() => {
          this.runInAsyncScope(A3, null, e3, { opaque: r3 });
        })), t3 && (this.res = null, queueMicrotask(() => {
          s.destroy(t3, e3);
        })), n3 && (this.body = null, s.destroy(n3, e3));
      }
    }
    e2.exports = function e3(t3, A3) {
      if (void 0 === A3) return new Promise((A4, n3) => {
        e3.call(this, t3, (e4, t4) => e4 ? n3(e4) : A4(t4));
      });
      try {
        this.dispatch(t3, new u(t3, A3));
      } catch (e4) {
        if ("function" != typeof A3) throw e4;
        const n3 = t3 && t3.opaque;
        queueMicrotask(() => A3(e4, { opaque: n3 }));
      }
    }, e2.exports.RequestHandler = u;
  }