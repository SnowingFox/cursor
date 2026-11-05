// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 9050 range:685060..688543
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9050: (e2, A2, t2) => {
    "use strict";
    const n2 = t2(4260), { InvalidArgumentError: r2, RequestAbortedError: o2 } = t2(7902), s = t2(9361), { getResolveErrorBodyCallback: a } = t2(5872), { AsyncResource: i } = t2(290), { addSignal: c, removeSignal: l } = t2(9909);
    class g extends i {
      constructor(e3, A3) {
        if (!e3 || "object" != typeof e3) throw new r2("invalid opts");
        const { signal: t3, method: n3, opaque: o3, body: a2, onInfo: i2, responseHeaders: l2, throwOnError: g2, highWaterMark: E } = e3;
        try {
          if ("function" != typeof A3) throw new r2("invalid callback");
          if (E && ("number" != typeof E || E < 0)) throw new r2("invalid highWaterMark");
          if (t3 && "function" != typeof t3.on && "function" != typeof t3.addEventListener) throw new r2("signal must be an EventEmitter or EventTarget");
          if ("CONNECT" === n3) throw new r2("invalid method");
          if (i2 && "function" != typeof i2) throw new r2("invalid onInfo callback");
          super("UNDICI_REQUEST");
        } catch (e4) {
          throw s.isStream(a2) && s.destroy(a2.on("error", s.nop), e4), e4;
        }
        this.responseHeaders = l2 || null, this.opaque = o3 || null, this.callback = A3, this.res = null, this.abort = null, this.body = a2, this.trailers = {}, this.context = null, this.onInfo = i2 || null, this.throwOnError = g2, this.highWaterMark = E, s.isStream(a2) && a2.on("error", (e4) => {
          this.onError(e4);
        }), c(this, t3);
      }
      onConnect(e3, A3) {
        if (!this.callback) throw new o2();
        this.abort = e3, this.context = A3;
      }
      onHeaders(e3, A3, t3, r3) {
        const { callback: o3, opaque: i2, abort: c2, context: l2, responseHeaders: g2, highWaterMark: E } = this, u = "raw" === g2 ? s.parseRawHeaders(A3) : s.parseHeaders(A3);
        if (e3 < 200) return void (this.onInfo && this.onInfo({ statusCode: e3, headers: u }));
        const d = ("raw" === g2 ? s.parseHeaders(A3) : u)["content-type"], I = new n2({ resume: t3, abort: c2, contentType: d, highWaterMark: E });
        this.callback = null, this.res = I, null !== o3 && (this.throwOnError && e3 >= 400 ? this.runInAsyncScope(a, null, { callback: o3, body: I, contentType: d, statusCode: e3, statusMessage: r3, headers: u }) : this.runInAsyncScope(o3, null, null, { statusCode: e3, headers: u, trailers: this.trailers, opaque: i2, body: I, context: l2 }));
      }
      onData(e3) {
        const { res: A3 } = this;
        return A3.push(e3);
      }
      onComplete(e3) {
        const { res: A3 } = this;
        l(this), s.parseHeaders(e3, this.trailers), A3.push(null);
      }
      onError(e3) {
        const { res: A3, callback: t3, body: n3, opaque: r3 } = this;
        l(this), t3 && (this.callback = null, queueMicrotask(() => {
          this.runInAsyncScope(t3, null, e3, { opaque: r3 });
        })), A3 && (this.res = null, queueMicrotask(() => {
          s.destroy(A3, e3);
        })), n3 && (this.body = null, s.destroy(n3, e3));
      }
    }
    e2.exports = function e3(A3, t3) {
      if (void 0 === t3) return new Promise((t4, n3) => {
        e3.call(this, A3, (e4, A4) => e4 ? n3(e4) : t4(A4));
      });
      try {
        this.dispatch(A3, new g(A3, t3));
      } catch (e4) {
        if ("function" != typeof t3) throw e4;
        const n3 = A3 && A3.opaque;
        queueMicrotask(() => t3(e4, { opaque: n3 }));
      }
    }, e2.exports.RequestHandler = g;
  }