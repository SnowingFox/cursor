// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 7999 range:738488..742584
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7999: (e2, t2, A2) => {
    "use strict";
    const { finished: n2, PassThrough: r2 } = A2(2203), { InvalidArgumentError: o2, InvalidReturnValueError: s, RequestAbortedError: i } = A2(7902), a = A2(9361), { getResolveErrorBodyCallback: c } = A2(5872), { AsyncResource: l } = A2(290), { addSignal: u, removeSignal: g } = A2(9909);
    class E extends l {
      constructor(e3, t3, A3) {
        if (!e3 || "object" != typeof e3) throw new o2("invalid opts");
        const { signal: n3, method: r3, opaque: s2, body: i2, onInfo: c2, responseHeaders: l2, throwOnError: g2 } = e3;
        try {
          if ("function" != typeof A3) throw new o2("invalid callback");
          if ("function" != typeof t3) throw new o2("invalid factory");
          if (n3 && "function" != typeof n3.on && "function" != typeof n3.addEventListener) throw new o2("signal must be an EventEmitter or EventTarget");
          if ("CONNECT" === r3) throw new o2("invalid method");
          if (c2 && "function" != typeof c2) throw new o2("invalid onInfo callback");
          super("UNDICI_STREAM");
        } catch (e4) {
          throw a.isStream(i2) && a.destroy(i2.on("error", a.nop), e4), e4;
        }
        this.responseHeaders = l2 || null, this.opaque = s2 || null, this.factory = t3, this.callback = A3, this.res = null, this.abort = null, this.context = null, this.trailers = null, this.body = i2, this.onInfo = c2 || null, this.throwOnError = g2 || false, a.isStream(i2) && i2.on("error", (e4) => {
          this.onError(e4);
        }), u(this, n3);
      }
      onConnect(e3, t3) {
        if (!this.callback) throw new i();
        this.abort = e3, this.context = t3;
      }
      onHeaders(e3, t3, A3, o3) {
        const { factory: i2, opaque: l2, context: u2, callback: g2, responseHeaders: E2 } = this, h = "raw" === E2 ? a.parseRawHeaders(t3) : a.parseHeaders(t3);
        if (e3 < 200) return void (this.onInfo && this.onInfo({ statusCode: e3, headers: h }));
        let d;
        if (this.factory = null, this.throwOnError && e3 >= 400) {
          const A4 = ("raw" === E2 ? a.parseHeaders(t3) : h)["content-type"];
          d = new r2(), this.callback = null, this.runInAsyncScope(c, null, { callback: g2, body: d, contentType: A4, statusCode: e3, statusMessage: o3, headers: h });
        } else {
          if (null === i2) return;
          if (d = this.runInAsyncScope(i2, null, { statusCode: e3, headers: h, opaque: l2, context: u2 }), !d || "function" != typeof d.write || "function" != typeof d.end || "function" != typeof d.on) throw new s("expected Writable");
          n2(d, { readable: false }, (e4) => {
            const { callback: t4, res: A4, opaque: n3, trailers: r3, abort: o4 } = this;
            this.res = null, !e4 && A4.readable || a.destroy(A4, e4), this.callback = null, this.runInAsyncScope(t4, null, e4 || null, { opaque: n3, trailers: r3 }), e4 && o4();
          });
        }
        d.on("drain", A3), this.res = d;
        return true !== (void 0 !== d.writableNeedDrain ? d.writableNeedDrain : d._writableState && d._writableState.needDrain);
      }
      onData(e3) {
        const { res: t3 } = this;
        return !t3 || t3.write(e3);
      }
      onComplete(e3) {
        const { res: t3 } = this;
        g(this), t3 && (this.trailers = a.parseHeaders(e3), t3.end());
      }
      onError(e3) {
        const { res: t3, callback: A3, opaque: n3, body: r3 } = this;
        g(this), this.factory = null, t3 ? (this.res = null, a.destroy(t3, e3)) : A3 && (this.callback = null, queueMicrotask(() => {
          this.runInAsyncScope(A3, null, e3, { opaque: n3 });
        })), r3 && (this.body = null, a.destroy(r3, e3));
      }
    }
    e2.exports = function e3(t3, A3, n3) {
      if (void 0 === n3) return new Promise((n4, r3) => {
        e3.call(this, t3, A3, (e4, t4) => e4 ? r3(e4) : n4(t4));
      });
      try {
        this.dispatch(t3, new E(t3, A3, n3));
      } catch (e4) {
        if ("function" != typeof n3) throw e4;
        const A4 = t3 && t3.opaque;
        queueMicrotask(() => n3(e4, { opaque: A4 }));
      }
    };
  }