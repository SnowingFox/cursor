// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 7999 range:606775..610875
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7999: (e2, n2, a2) => {
    "use strict";
    const { finished: t2, PassThrough: s2 } = a2(2203), { InvalidArgumentError: o2, InvalidReturnValueError: r2, RequestAbortedError: i2 } = a2(7902), A = a2(9361), { getResolveErrorBodyCallback: l } = a2(5872), { AsyncResource: c } = a2(290), { addSignal: m, removeSignal: d } = a2(9909);
    class g extends c {
      constructor(e3, n3, a3) {
        if (!e3 || "object" != typeof e3) throw new o2("invalid opts");
        const { signal: t3, method: s3, opaque: r3, body: i3, onInfo: l2, responseHeaders: c2, throwOnError: d2 } = e3;
        try {
          if ("function" != typeof a3) throw new o2("invalid callback");
          if ("function" != typeof n3) throw new o2("invalid factory");
          if (t3 && "function" != typeof t3.on && "function" != typeof t3.addEventListener) throw new o2("signal must be an EventEmitter or EventTarget");
          if ("CONNECT" === s3) throw new o2("invalid method");
          if (l2 && "function" != typeof l2) throw new o2("invalid onInfo callback");
          super("UNDICI_STREAM");
        } catch (e4) {
          throw A.isStream(i3) && A.destroy(i3.on("error", A.nop), e4), e4;
        }
        this.responseHeaders = c2 || null, this.opaque = r3 || null, this.factory = n3, this.callback = a3, this.res = null, this.abort = null, this.context = null, this.trailers = null, this.body = i3, this.onInfo = l2 || null, this.throwOnError = d2 || false, A.isStream(i3) && i3.on("error", (e4) => {
          this.onError(e4);
        }), m(this, t3);
      }
      onConnect(e3, n3) {
        if (!this.callback) throw new i2();
        this.abort = e3, this.context = n3;
      }
      onHeaders(e3, n3, a3, o3) {
        const { factory: i3, opaque: c2, context: m2, callback: d2, responseHeaders: g2 } = this, u = "raw" === g2 ? A.parseRawHeaders(n3) : A.parseHeaders(n3);
        if (e3 < 200) return void (this.onInfo && this.onInfo({ statusCode: e3, headers: u }));
        let E;
        if (this.factory = null, this.throwOnError && e3 >= 400) {
          const a4 = ("raw" === g2 ? A.parseHeaders(n3) : u)["content-type"];
          E = new s2(), this.callback = null, this.runInAsyncScope(l, null, { callback: d2, body: E, contentType: a4, statusCode: e3, statusMessage: o3, headers: u });
        } else {
          if (null === i3) return;
          if (E = this.runInAsyncScope(i3, null, { statusCode: e3, headers: u, opaque: c2, context: m2 }), !E || "function" != typeof E.write || "function" != typeof E.end || "function" != typeof E.on) throw new r2("expected Writable");
          t2(E, { readable: false }, (e4) => {
            const { callback: n4, res: a4, opaque: t3, trailers: s3, abort: o4 } = this;
            this.res = null, !e4 && a4.readable || A.destroy(a4, e4), this.callback = null, this.runInAsyncScope(n4, null, e4 || null, { opaque: t3, trailers: s3 }), e4 && o4();
          });
        }
        E.on("drain", a3), this.res = E;
        return true !== (void 0 !== E.writableNeedDrain ? E.writableNeedDrain : E._writableState && E._writableState.needDrain);
      }
      onData(e3) {
        const { res: n3 } = this;
        return !n3 || n3.write(e3);
      }
      onComplete(e3) {
        const { res: n3 } = this;
        d(this), n3 && (this.trailers = A.parseHeaders(e3), n3.end());
      }
      onError(e3) {
        const { res: n3, callback: a3, opaque: t3, body: s3 } = this;
        d(this), this.factory = null, n3 ? (this.res = null, A.destroy(n3, e3)) : a3 && (this.callback = null, queueMicrotask(() => {
          this.runInAsyncScope(a3, null, e3, { opaque: t3 });
        })), s3 && (this.body = null, A.destroy(s3, e3));
      }
    }
    e2.exports = function e3(n3, a3, t3) {
      if (void 0 === t3) return new Promise((t4, s3) => {
        e3.call(this, n3, a3, (e4, n4) => e4 ? s3(e4) : t4(n4));
      });
      try {
        this.dispatch(n3, new g(n3, a3, t3));
      } catch (e4) {
        if ("function" != typeof t3) throw e4;
        const a4 = n3 && n3.opaque;
        queueMicrotask(() => t3(e4, { opaque: a4 }));
      }
    };
  }