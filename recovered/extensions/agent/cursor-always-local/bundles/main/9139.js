// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 9139 range:6054027..6058125
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9139: (t2, e2, r2) => {
    "use strict";
    const { finished: n2, PassThrough: s2 } = r2(2203), { InvalidArgumentError: i2, InvalidReturnValueError: o2, RequestAbortedError: a } = r2(8762), u = r2(3589), { getResolveErrorBodyCallback: c } = r2(1724), { AsyncResource: l } = r2(290), { addSignal: m, removeSignal: d } = r2(6921);
    class f extends l {
      constructor(t3, e3, r3) {
        if (!t3 || "object" != typeof t3) throw new i2("invalid opts");
        const { signal: n3, method: s3, opaque: o3, body: a2, onInfo: c2, responseHeaders: l2, throwOnError: d2 } = t3;
        try {
          if ("function" != typeof r3) throw new i2("invalid callback");
          if ("function" != typeof e3) throw new i2("invalid factory");
          if (n3 && "function" != typeof n3.on && "function" != typeof n3.addEventListener) throw new i2("signal must be an EventEmitter or EventTarget");
          if ("CONNECT" === s3) throw new i2("invalid method");
          if (c2 && "function" != typeof c2) throw new i2("invalid onInfo callback");
          super("UNDICI_STREAM");
        } catch (t4) {
          throw u.isStream(a2) && u.destroy(a2.on("error", u.nop), t4), t4;
        }
        this.responseHeaders = l2 || null, this.opaque = o3 || null, this.factory = e3, this.callback = r3, this.res = null, this.abort = null, this.context = null, this.trailers = null, this.body = a2, this.onInfo = c2 || null, this.throwOnError = d2 || false, u.isStream(a2) && a2.on("error", (t4) => {
          this.onError(t4);
        }), m(this, n3);
      }
      onConnect(t3, e3) {
        if (!this.callback) throw new a();
        this.abort = t3, this.context = e3;
      }
      onHeaders(t3, e3, r3, i3) {
        const { factory: a2, opaque: l2, context: m2, callback: d2, responseHeaders: f2 } = this, p = "raw" === f2 ? u.parseRawHeaders(e3) : u.parseHeaders(e3);
        if (t3 < 200) return void (this.onInfo && this.onInfo({ statusCode: t3, headers: p }));
        let h;
        if (this.factory = null, this.throwOnError && t3 >= 400) {
          const r4 = ("raw" === f2 ? u.parseHeaders(e3) : p)["content-type"];
          h = new s2(), this.callback = null, this.runInAsyncScope(c, null, { callback: d2, body: h, contentType: r4, statusCode: t3, statusMessage: i3, headers: p });
        } else {
          if (null === a2) return;
          if (h = this.runInAsyncScope(a2, null, { statusCode: t3, headers: p, opaque: l2, context: m2 }), !h || "function" != typeof h.write || "function" != typeof h.end || "function" != typeof h.on) throw new o2("expected Writable");
          n2(h, { readable: false }, (t4) => {
            const { callback: e4, res: r4, opaque: n3, trailers: s3, abort: i4 } = this;
            this.res = null, !t4 && r4.readable || u.destroy(r4, t4), this.callback = null, this.runInAsyncScope(e4, null, t4 || null, { opaque: n3, trailers: s3 }), t4 && i4();
          });
        }
        h.on("drain", r3), this.res = h;
        return true !== (void 0 !== h.writableNeedDrain ? h.writableNeedDrain : h._writableState && h._writableState.needDrain);
      }
      onData(t3) {
        const { res: e3 } = this;
        return !e3 || e3.write(t3);
      }
      onComplete(t3) {
        const { res: e3 } = this;
        d(this), e3 && (this.trailers = u.parseHeaders(t3), e3.end());
      }
      onError(t3) {
        const { res: e3, callback: r3, opaque: n3, body: s3 } = this;
        d(this), this.factory = null, e3 ? (this.res = null, u.destroy(e3, t3)) : r3 && (this.callback = null, queueMicrotask(() => {
          this.runInAsyncScope(r3, null, t3, { opaque: n3 });
        })), s3 && (this.body = null, u.destroy(s3, t3));
      }
    }
    t2.exports = function t3(e3, r3, n3) {
      if (void 0 === n3) return new Promise((n4, s3) => {
        t3.call(this, e3, r3, (t4, e4) => t4 ? s3(t4) : n4(e4));
      });
      try {
        this.dispatch(e3, new f(e3, r3, n3));
      } catch (t4) {
        if ("function" != typeof n3) throw t4;
        const r4 = e3 && e3.opaque;
        queueMicrotask(() => n3(t4, { opaque: r4 }));
      }
    };
  }