// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 9118 range:3470324..3473791
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
9118: (e, t, r) => {
    "use strict";
    const n = r(5160), { InvalidArgumentError: s, RequestAbortedError: o } = r(48762), i = r(83589), { getResolveErrorBodyCallback: a } = r(41724), { AsyncResource: c } = r(90290), { addSignal: l, removeSignal: u } = r(26921);
    class d extends c {
      constructor(e2, t2) {
        if (!e2 || "object" != typeof e2) throw new s("invalid opts");
        const { signal: r2, method: n2, opaque: o2, body: a2, onInfo: c2, responseHeaders: u2, throwOnError: d2, highWaterMark: p } = e2;
        try {
          if ("function" != typeof t2) throw new s("invalid callback");
          if (p && ("number" != typeof p || p < 0)) throw new s("invalid highWaterMark");
          if (r2 && "function" != typeof r2.on && "function" != typeof r2.addEventListener) throw new s("signal must be an EventEmitter or EventTarget");
          if ("CONNECT" === n2) throw new s("invalid method");
          if (c2 && "function" != typeof c2) throw new s("invalid onInfo callback");
          super("UNDICI_REQUEST");
        } catch (e3) {
          throw i.isStream(a2) && i.destroy(a2.on("error", i.nop), e3), e3;
        }
        this.responseHeaders = u2 || null, this.opaque = o2 || null, this.callback = t2, this.res = null, this.abort = null, this.body = a2, this.trailers = {}, this.context = null, this.onInfo = c2 || null, this.throwOnError = d2, this.highWaterMark = p, i.isStream(a2) && a2.on("error", (e3) => {
          this.onError(e3);
        }), l(this, r2);
      }
      onConnect(e2, t2) {
        if (!this.callback) throw new o();
        this.abort = e2, this.context = t2;
      }
      onHeaders(e2, t2, r2, s2) {
        const { callback: o2, opaque: c2, abort: l2, context: u2, responseHeaders: d2, highWaterMark: p } = this, m = "raw" === d2 ? i.parseRawHeaders(t2) : i.parseHeaders(t2);
        if (e2 < 200) return void (this.onInfo && this.onInfo({ statusCode: e2, headers: m }));
        const h = ("raw" === d2 ? i.parseHeaders(t2) : m)["content-type"], f = new n({ resume: r2, abort: l2, contentType: h, highWaterMark: p });
        this.callback = null, this.res = f, null !== o2 && (this.throwOnError && e2 >= 400 ? this.runInAsyncScope(a, null, { callback: o2, body: f, contentType: h, statusCode: e2, statusMessage: s2, headers: m }) : this.runInAsyncScope(o2, null, null, { statusCode: e2, headers: m, trailers: this.trailers, opaque: c2, body: f, context: u2 }));
      }
      onData(e2) {
        const { res: t2 } = this;
        return t2.push(e2);
      }
      onComplete(e2) {
        const { res: t2 } = this;
        u(this), i.parseHeaders(e2, this.trailers), t2.push(null);
      }
      onError(e2) {
        const { res: t2, callback: r2, body: n2, opaque: s2 } = this;
        u(this), r2 && (this.callback = null, queueMicrotask(() => {
          this.runInAsyncScope(r2, null, e2, { opaque: s2 });
        })), t2 && (this.res = null, queueMicrotask(() => {
          i.destroy(t2, e2);
        })), n2 && (this.body = null, i.destroy(n2, e2));
      }
    }
    e.exports = function e2(t2, r2) {
      if (void 0 === r2) return new Promise((r3, n2) => {
        e2.call(this, t2, (e3, t3) => e3 ? n2(e3) : r3(t3));
      });
      try {
        this.dispatch(t2, new d(t2, r2));
      } catch (e3) {
        if ("function" != typeof r2) throw e3;
        const n2 = t2 && t2.opaque;
        queueMicrotask(() => r2(e3, { opaque: n2 }));
      }
    }, e.exports.RequestHandler = d;
  }