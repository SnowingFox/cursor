// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 9050 range:716573..720056
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
9050: (e2, n2, t2) => {
    "use strict";
    const a2 = t2(4260), { InvalidArgumentError: s2, RequestAbortedError: o2 } = t2(7902), r = t2(9361), { getResolveErrorBodyCallback: i } = t2(5872), { AsyncResource: A } = t2(290), { addSignal: c, removeSignal: l } = t2(9909);
    class d extends A {
      constructor(e3, n3) {
        if (!e3 || "object" != typeof e3) throw new s2("invalid opts");
        const { signal: t3, method: a3, opaque: o3, body: i2, onInfo: A2, responseHeaders: l2, throwOnError: d2, highWaterMark: m } = e3;
        try {
          if ("function" != typeof n3) throw new s2("invalid callback");
          if (m && ("number" != typeof m || m < 0)) throw new s2("invalid highWaterMark");
          if (t3 && "function" != typeof t3.on && "function" != typeof t3.addEventListener) throw new s2("signal must be an EventEmitter or EventTarget");
          if ("CONNECT" === a3) throw new s2("invalid method");
          if (A2 && "function" != typeof A2) throw new s2("invalid onInfo callback");
          super("UNDICI_REQUEST");
        } catch (e4) {
          throw r.isStream(i2) && r.destroy(i2.on("error", r.nop), e4), e4;
        }
        this.responseHeaders = l2 || null, this.opaque = o3 || null, this.callback = n3, this.res = null, this.abort = null, this.body = i2, this.trailers = {}, this.context = null, this.onInfo = A2 || null, this.throwOnError = d2, this.highWaterMark = m, r.isStream(i2) && i2.on("error", (e4) => {
          this.onError(e4);
        }), c(this, t3);
      }
      onConnect(e3, n3) {
        if (!this.callback) throw new o2();
        this.abort = e3, this.context = n3;
      }
      onHeaders(e3, n3, t3, s3) {
        const { callback: o3, opaque: A2, abort: c2, context: l2, responseHeaders: d2, highWaterMark: m } = this, u = "raw" === d2 ? r.parseRawHeaders(n3) : r.parseHeaders(n3);
        if (e3 < 200) return void (this.onInfo && this.onInfo({ statusCode: e3, headers: u }));
        const g = ("raw" === d2 ? r.parseHeaders(n3) : u)["content-type"], p = new a2({ resume: t3, abort: c2, contentType: g, highWaterMark: m });
        this.callback = null, this.res = p, null !== o3 && (this.throwOnError && e3 >= 400 ? this.runInAsyncScope(i, null, { callback: o3, body: p, contentType: g, statusCode: e3, statusMessage: s3, headers: u }) : this.runInAsyncScope(o3, null, null, { statusCode: e3, headers: u, trailers: this.trailers, opaque: A2, body: p, context: l2 }));
      }
      onData(e3) {
        const { res: n3 } = this;
        return n3.push(e3);
      }
      onComplete(e3) {
        const { res: n3 } = this;
        l(this), r.parseHeaders(e3, this.trailers), n3.push(null);
      }
      onError(e3) {
        const { res: n3, callback: t3, body: a3, opaque: s3 } = this;
        l(this), t3 && (this.callback = null, queueMicrotask(() => {
          this.runInAsyncScope(t3, null, e3, { opaque: s3 });
        })), n3 && (this.res = null, queueMicrotask(() => {
          r.destroy(n3, e3);
        })), a3 && (this.body = null, r.destroy(a3, e3));
      }
    }
    e2.exports = function e3(n3, t3) {
      if (void 0 === t3) return new Promise((t4, a3) => {
        e3.call(this, n3, (e4, n4) => e4 ? a3(e4) : t4(n4));
      });
      try {
        this.dispatch(n3, new d(n3, t3));
      } catch (e4) {
        if ("function" != typeof t3) throw e4;
        const a3 = n3 && n3.opaque;
        queueMicrotask(() => t3(e4, { opaque: a3 }));
      }
    }, e2.exports.RequestHandler = d;
  }