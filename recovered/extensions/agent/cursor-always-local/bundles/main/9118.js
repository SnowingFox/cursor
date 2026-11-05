// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 9118 range:6046954..6050448
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9118: (t2, e2, r2) => {
    "use strict";
    const n2 = r2(5160), { InvalidArgumentError: s2, RequestAbortedError: i2 } = r2(8762), o2 = r2(3589), { getResolveErrorBodyCallback: a } = r2(1724), { AsyncResource: u } = r2(290), { addSignal: c, removeSignal: l } = r2(6921);
    class m extends u {
      constructor(t3, e3) {
        if (!t3 || "object" != typeof t3) throw new s2("invalid opts");
        const { signal: r3, method: n3, opaque: i3, body: a2, onInfo: u2, responseHeaders: l2, throwOnError: m2, highWaterMark: d } = t3;
        try {
          if ("function" != typeof e3) throw new s2("invalid callback");
          if (d && ("number" != typeof d || d < 0)) throw new s2("invalid highWaterMark");
          if (r3 && "function" != typeof r3.on && "function" != typeof r3.addEventListener) throw new s2("signal must be an EventEmitter or EventTarget");
          if ("CONNECT" === n3) throw new s2("invalid method");
          if (u2 && "function" != typeof u2) throw new s2("invalid onInfo callback");
          super("UNDICI_REQUEST");
        } catch (t4) {
          throw o2.isStream(a2) && o2.destroy(a2.on("error", o2.nop), t4), t4;
        }
        this.responseHeaders = l2 || null, this.opaque = i3 || null, this.callback = e3, this.res = null, this.abort = null, this.body = a2, this.trailers = {}, this.context = null, this.onInfo = u2 || null, this.throwOnError = m2, this.highWaterMark = d, o2.isStream(a2) && a2.on("error", (t4) => {
          this.onError(t4);
        }), c(this, r3);
      }
      onConnect(t3, e3) {
        if (!this.callback) throw new i2();
        this.abort = t3, this.context = e3;
      }
      onHeaders(t3, e3, r3, s3) {
        const { callback: i3, opaque: u2, abort: c2, context: l2, responseHeaders: m2, highWaterMark: d } = this, f = "raw" === m2 ? o2.parseRawHeaders(e3) : o2.parseHeaders(e3);
        if (t3 < 200) return void (this.onInfo && this.onInfo({ statusCode: t3, headers: f }));
        const p = ("raw" === m2 ? o2.parseHeaders(e3) : f)["content-type"], h = new n2({ resume: r3, abort: c2, contentType: p, highWaterMark: d });
        this.callback = null, this.res = h, null !== i3 && (this.throwOnError && t3 >= 400 ? this.runInAsyncScope(a, null, { callback: i3, body: h, contentType: p, statusCode: t3, statusMessage: s3, headers: f }) : this.runInAsyncScope(i3, null, null, { statusCode: t3, headers: f, trailers: this.trailers, opaque: u2, body: h, context: l2 }));
      }
      onData(t3) {
        const { res: e3 } = this;
        return e3.push(t3);
      }
      onComplete(t3) {
        const { res: e3 } = this;
        l(this), o2.parseHeaders(t3, this.trailers), e3.push(null);
      }
      onError(t3) {
        const { res: e3, callback: r3, body: n3, opaque: s3 } = this;
        l(this), r3 && (this.callback = null, queueMicrotask(() => {
          this.runInAsyncScope(r3, null, t3, { opaque: s3 });
        })), e3 && (this.res = null, queueMicrotask(() => {
          o2.destroy(e3, t3);
        })), n3 && (this.body = null, o2.destroy(n3, t3));
      }
    }
    t2.exports = function t3(e3, r3) {
      if (void 0 === r3) return new Promise((r4, n3) => {
        t3.call(this, e3, (t4, e4) => t4 ? n3(t4) : r4(e4));
      });
      try {
        this.dispatch(e3, new m(e3, r3));
      } catch (t4) {
        if ("function" != typeof r3) throw t4;
        const n3 = e3 && e3.opaque;
        queueMicrotask(() => r3(t4, { opaque: n3 }));
      }
    }, t2.exports.RequestHandler = m;
  }