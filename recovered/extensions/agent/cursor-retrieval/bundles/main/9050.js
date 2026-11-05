// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 9050 range:1035396..1038892
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9050: (e2, a2, n2) => {
    "use strict";
    const t2 = n2(4260), { InvalidArgumentError: s2, RequestAbortedError: o2 } = n2(7902), r2 = n2(9361), { getResolveErrorBodyCallback: i2 } = n2(5872), { AsyncResource: l } = n2(290), { addSignal: d, removeSignal: m } = n2(9909);
    class c extends l {
      constructor(e3, a3) {
        if (!e3 || "object" != typeof e3) throw new s2("invalid opts");
        const { signal: n3, method: t3, opaque: o3, body: i3, onInfo: l2, responseHeaders: m2, throwOnError: c2, highWaterMark: p } = e3;
        try {
          if ("function" != typeof a3) throw new s2("invalid callback");
          if (p && ("number" != typeof p || p < 0)) throw new s2("invalid highWaterMark");
          if (n3 && "function" != typeof n3.on && "function" != typeof n3.addEventListener) throw new s2("signal must be an EventEmitter or EventTarget");
          if ("CONNECT" === t3) throw new s2("invalid method");
          if (l2 && "function" != typeof l2) throw new s2("invalid onInfo callback");
          super("UNDICI_REQUEST");
        } catch (e4) {
          throw r2.isStream(i3) && r2.destroy(i3.on("error", r2.nop), e4), e4;
        }
        this.responseHeaders = m2 || null, this.opaque = o3 || null, this.callback = a3, this.res = null, this.abort = null, this.body = i3, this.trailers = {}, this.context = null, this.onInfo = l2 || null, this.throwOnError = c2, this.highWaterMark = p, r2.isStream(i3) && i3.on("error", (e4) => {
          this.onError(e4);
        }), d(this, n3);
      }
      onConnect(e3, a3) {
        if (!this.callback) throw new o2();
        this.abort = e3, this.context = a3;
      }
      onHeaders(e3, a3, n3, s3) {
        const { callback: o3, opaque: l2, abort: d2, context: m2, responseHeaders: c2, highWaterMark: p } = this, A = "raw" === c2 ? r2.parseRawHeaders(a3) : r2.parseHeaders(a3);
        if (e3 < 200) return void (this.onInfo && this.onInfo({ statusCode: e3, headers: A }));
        const u = ("raw" === c2 ? r2.parseHeaders(a3) : A)["content-type"], g = new t2({ resume: n3, abort: d2, contentType: u, highWaterMark: p });
        this.callback = null, this.res = g, null !== o3 && (this.throwOnError && e3 >= 400 ? this.runInAsyncScope(i2, null, { callback: o3, body: g, contentType: u, statusCode: e3, statusMessage: s3, headers: A }) : this.runInAsyncScope(o3, null, null, { statusCode: e3, headers: A, trailers: this.trailers, opaque: l2, body: g, context: m2 }));
      }
      onData(e3) {
        const { res: a3 } = this;
        return a3.push(e3);
      }
      onComplete(e3) {
        const { res: a3 } = this;
        m(this), r2.parseHeaders(e3, this.trailers), a3.push(null);
      }
      onError(e3) {
        const { res: a3, callback: n3, body: t3, opaque: s3 } = this;
        m(this), n3 && (this.callback = null, queueMicrotask(() => {
          this.runInAsyncScope(n3, null, e3, { opaque: s3 });
        })), a3 && (this.res = null, queueMicrotask(() => {
          r2.destroy(a3, e3);
        })), t3 && (this.body = null, r2.destroy(t3, e3));
      }
    }
    e2.exports = function e3(a3, n3) {
      if (void 0 === n3) return new Promise((n4, t3) => {
        e3.call(this, a3, (e4, a4) => e4 ? t3(e4) : n4(a4));
      });
      try {
        this.dispatch(a3, new c(a3, n3));
      } catch (e4) {
        if ("function" != typeof n3) throw e4;
        const t3 = a3 && a3.opaque;
        queueMicrotask(() => n3(e4, { opaque: t3 }));
      }
    }, e2.exports.RequestHandler = c;
  }