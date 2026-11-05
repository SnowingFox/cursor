// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 7999 range:637435..641531
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
7999: (e2, n2, t2) => {
    "use strict";
    const { finished: a2, PassThrough: s2 } = t2(2203), { InvalidArgumentError: o2, InvalidReturnValueError: r, RequestAbortedError: i } = t2(7902), A = t2(9361), { getResolveErrorBodyCallback: c } = t2(5872), { AsyncResource: l } = t2(290), { addSignal: d, removeSignal: m } = t2(9909);
    class u extends l {
      constructor(e3, n3, t3) {
        if (!e3 || "object" != typeof e3) throw new o2("invalid opts");
        const { signal: a3, method: s3, opaque: r2, body: i2, onInfo: c2, responseHeaders: l2, throwOnError: m2 } = e3;
        try {
          if ("function" != typeof t3) throw new o2("invalid callback");
          if ("function" != typeof n3) throw new o2("invalid factory");
          if (a3 && "function" != typeof a3.on && "function" != typeof a3.addEventListener) throw new o2("signal must be an EventEmitter or EventTarget");
          if ("CONNECT" === s3) throw new o2("invalid method");
          if (c2 && "function" != typeof c2) throw new o2("invalid onInfo callback");
          super("UNDICI_STREAM");
        } catch (e4) {
          throw A.isStream(i2) && A.destroy(i2.on("error", A.nop), e4), e4;
        }
        this.responseHeaders = l2 || null, this.opaque = r2 || null, this.factory = n3, this.callback = t3, this.res = null, this.abort = null, this.context = null, this.trailers = null, this.body = i2, this.onInfo = c2 || null, this.throwOnError = m2 || false, A.isStream(i2) && i2.on("error", (e4) => {
          this.onError(e4);
        }), d(this, a3);
      }
      onConnect(e3, n3) {
        if (!this.callback) throw new i();
        this.abort = e3, this.context = n3;
      }
      onHeaders(e3, n3, t3, o3) {
        const { factory: i2, opaque: l2, context: d2, callback: m2, responseHeaders: u2 } = this, g = "raw" === u2 ? A.parseRawHeaders(n3) : A.parseHeaders(n3);
        if (e3 < 200) return void (this.onInfo && this.onInfo({ statusCode: e3, headers: g }));
        let p;
        if (this.factory = null, this.throwOnError && e3 >= 400) {
          const t4 = ("raw" === u2 ? A.parseHeaders(n3) : g)["content-type"];
          p = new s2(), this.callback = null, this.runInAsyncScope(c, null, { callback: m2, body: p, contentType: t4, statusCode: e3, statusMessage: o3, headers: g });
        } else {
          if (null === i2) return;
          if (p = this.runInAsyncScope(i2, null, { statusCode: e3, headers: g, opaque: l2, context: d2 }), !p || "function" != typeof p.write || "function" != typeof p.end || "function" != typeof p.on) throw new r("expected Writable");
          a2(p, { readable: false }, (e4) => {
            const { callback: n4, res: t4, opaque: a3, trailers: s3, abort: o4 } = this;
            this.res = null, !e4 && t4.readable || A.destroy(t4, e4), this.callback = null, this.runInAsyncScope(n4, null, e4 || null, { opaque: a3, trailers: s3 }), e4 && o4();
          });
        }
        p.on("drain", t3), this.res = p;
        return true !== (void 0 !== p.writableNeedDrain ? p.writableNeedDrain : p._writableState && p._writableState.needDrain);
      }
      onData(e3) {
        const { res: n3 } = this;
        return !n3 || n3.write(e3);
      }
      onComplete(e3) {
        const { res: n3 } = this;
        m(this), n3 && (this.trailers = A.parseHeaders(e3), n3.end());
      }
      onError(e3) {
        const { res: n3, callback: t3, opaque: a3, body: s3 } = this;
        m(this), this.factory = null, n3 ? (this.res = null, A.destroy(n3, e3)) : t3 && (this.callback = null, queueMicrotask(() => {
          this.runInAsyncScope(t3, null, e3, { opaque: a3 });
        })), s3 && (this.body = null, A.destroy(s3, e3));
      }
    }
    e2.exports = function e3(n3, t3, a3) {
      if (void 0 === a3) return new Promise((a4, s3) => {
        e3.call(this, n3, t3, (e4, n4) => e4 ? s3(e4) : a4(n4));
      });
      try {
        this.dispatch(n3, new u(n3, t3, a3));
      } catch (e4) {
        if ("function" != typeof a3) throw e4;
        const t4 = n3 && n3.opaque;
        queueMicrotask(() => a3(e4, { opaque: t4 }));
      }
    };
  }