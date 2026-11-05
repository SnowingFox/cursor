// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 9050 range:686032..689528
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9050: (e2, n2, a2) => {
    "use strict";
    const t2 = a2(4260), { InvalidArgumentError: s2, RequestAbortedError: o2 } = a2(7902), r2 = a2(9361), { getResolveErrorBodyCallback: i2 } = a2(5872), { AsyncResource: A } = a2(290), { addSignal: l, removeSignal: c } = a2(9909);
    class m extends A {
      constructor(e3, n3) {
        if (!e3 || "object" != typeof e3) throw new s2("invalid opts");
        const { signal: a3, method: t3, opaque: o3, body: i3, onInfo: A2, responseHeaders: c2, throwOnError: m2, highWaterMark: d } = e3;
        try {
          if ("function" != typeof n3) throw new s2("invalid callback");
          if (d && ("number" != typeof d || d < 0)) throw new s2("invalid highWaterMark");
          if (a3 && "function" != typeof a3.on && "function" != typeof a3.addEventListener) throw new s2("signal must be an EventEmitter or EventTarget");
          if ("CONNECT" === t3) throw new s2("invalid method");
          if (A2 && "function" != typeof A2) throw new s2("invalid onInfo callback");
          super("UNDICI_REQUEST");
        } catch (e4) {
          throw r2.isStream(i3) && r2.destroy(i3.on("error", r2.nop), e4), e4;
        }
        this.responseHeaders = c2 || null, this.opaque = o3 || null, this.callback = n3, this.res = null, this.abort = null, this.body = i3, this.trailers = {}, this.context = null, this.onInfo = A2 || null, this.throwOnError = m2, this.highWaterMark = d, r2.isStream(i3) && i3.on("error", (e4) => {
          this.onError(e4);
        }), l(this, a3);
      }
      onConnect(e3, n3) {
        if (!this.callback) throw new o2();
        this.abort = e3, this.context = n3;
      }
      onHeaders(e3, n3, a3, s3) {
        const { callback: o3, opaque: A2, abort: l2, context: c2, responseHeaders: m2, highWaterMark: d } = this, g = "raw" === m2 ? r2.parseRawHeaders(n3) : r2.parseHeaders(n3);
        if (e3 < 200) return void (this.onInfo && this.onInfo({ statusCode: e3, headers: g }));
        const u = ("raw" === m2 ? r2.parseHeaders(n3) : g)["content-type"], E = new t2({ resume: a3, abort: l2, contentType: u, highWaterMark: d });
        this.callback = null, this.res = E, null !== o3 && (this.throwOnError && e3 >= 400 ? this.runInAsyncScope(i2, null, { callback: o3, body: E, contentType: u, statusCode: e3, statusMessage: s3, headers: g }) : this.runInAsyncScope(o3, null, null, { statusCode: e3, headers: g, trailers: this.trailers, opaque: A2, body: E, context: c2 }));
      }
      onData(e3) {
        const { res: n3 } = this;
        return n3.push(e3);
      }
      onComplete(e3) {
        const { res: n3 } = this;
        c(this), r2.parseHeaders(e3, this.trailers), n3.push(null);
      }
      onError(e3) {
        const { res: n3, callback: a3, body: t3, opaque: s3 } = this;
        c(this), a3 && (this.callback = null, queueMicrotask(() => {
          this.runInAsyncScope(a3, null, e3, { opaque: s3 });
        })), n3 && (this.res = null, queueMicrotask(() => {
          r2.destroy(n3, e3);
        })), t3 && (this.body = null, r2.destroy(t3, e3));
      }
    }
    e2.exports = function e3(n3, a3) {
      if (void 0 === a3) return new Promise((a4, t3) => {
        e3.call(this, n3, (e4, n4) => e4 ? t3(e4) : a4(n4));
      });
      try {
        this.dispatch(n3, new m(n3, a3));
      } catch (e4) {
        if ("function" != typeof a3) throw e4;
        const t3 = n3 && n3.opaque;
        queueMicrotask(() => a3(e4, { opaque: t3 }));
      }
    }, e2.exports.RequestHandler = m;
  }