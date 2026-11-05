// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 7999 range:606015..610111
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7999: (e2, A2, t2) => {
    "use strict";
    const { finished: n2, PassThrough: r2 } = t2(2203), { InvalidArgumentError: o2, InvalidReturnValueError: s, RequestAbortedError: a } = t2(7902), i = t2(9361), { getResolveErrorBodyCallback: c } = t2(5872), { AsyncResource: l } = t2(290), { addSignal: g, removeSignal: E } = t2(9909);
    class u extends l {
      constructor(e3, A3, t3) {
        if (!e3 || "object" != typeof e3) throw new o2("invalid opts");
        const { signal: n3, method: r3, opaque: s2, body: a2, onInfo: c2, responseHeaders: l2, throwOnError: E2 } = e3;
        try {
          if ("function" != typeof t3) throw new o2("invalid callback");
          if ("function" != typeof A3) throw new o2("invalid factory");
          if (n3 && "function" != typeof n3.on && "function" != typeof n3.addEventListener) throw new o2("signal must be an EventEmitter or EventTarget");
          if ("CONNECT" === r3) throw new o2("invalid method");
          if (c2 && "function" != typeof c2) throw new o2("invalid onInfo callback");
          super("UNDICI_STREAM");
        } catch (e4) {
          throw i.isStream(a2) && i.destroy(a2.on("error", i.nop), e4), e4;
        }
        this.responseHeaders = l2 || null, this.opaque = s2 || null, this.factory = A3, this.callback = t3, this.res = null, this.abort = null, this.context = null, this.trailers = null, this.body = a2, this.onInfo = c2 || null, this.throwOnError = E2 || false, i.isStream(a2) && a2.on("error", (e4) => {
          this.onError(e4);
        }), g(this, n3);
      }
      onConnect(e3, A3) {
        if (!this.callback) throw new a();
        this.abort = e3, this.context = A3;
      }
      onHeaders(e3, A3, t3, o3) {
        const { factory: a2, opaque: l2, context: g2, callback: E2, responseHeaders: u2 } = this, d = "raw" === u2 ? i.parseRawHeaders(A3) : i.parseHeaders(A3);
        if (e3 < 200) return void (this.onInfo && this.onInfo({ statusCode: e3, headers: d }));
        let I;
        if (this.factory = null, this.throwOnError && e3 >= 400) {
          const t4 = ("raw" === u2 ? i.parseHeaders(A3) : d)["content-type"];
          I = new r2(), this.callback = null, this.runInAsyncScope(c, null, { callback: E2, body: I, contentType: t4, statusCode: e3, statusMessage: o3, headers: d });
        } else {
          if (null === a2) return;
          if (I = this.runInAsyncScope(a2, null, { statusCode: e3, headers: d, opaque: l2, context: g2 }), !I || "function" != typeof I.write || "function" != typeof I.end || "function" != typeof I.on) throw new s("expected Writable");
          n2(I, { readable: false }, (e4) => {
            const { callback: A4, res: t4, opaque: n3, trailers: r3, abort: o4 } = this;
            this.res = null, !e4 && t4.readable || i.destroy(t4, e4), this.callback = null, this.runInAsyncScope(A4, null, e4 || null, { opaque: n3, trailers: r3 }), e4 && o4();
          });
        }
        I.on("drain", t3), this.res = I;
        return true !== (void 0 !== I.writableNeedDrain ? I.writableNeedDrain : I._writableState && I._writableState.needDrain);
      }
      onData(e3) {
        const { res: A3 } = this;
        return !A3 || A3.write(e3);
      }
      onComplete(e3) {
        const { res: A3 } = this;
        E(this), A3 && (this.trailers = i.parseHeaders(e3), A3.end());
      }
      onError(e3) {
        const { res: A3, callback: t3, opaque: n3, body: r3 } = this;
        E(this), this.factory = null, A3 ? (this.res = null, i.destroy(A3, e3)) : t3 && (this.callback = null, queueMicrotask(() => {
          this.runInAsyncScope(t3, null, e3, { opaque: n3 });
        })), r3 && (this.body = null, i.destroy(r3, e3));
      }
    }
    e2.exports = function e3(A3, t3, n3) {
      if (void 0 === n3) return new Promise((n4, r3) => {
        e3.call(this, A3, t3, (e4, A4) => e4 ? r3(e4) : n4(A4));
      });
      try {
        this.dispatch(A3, new u(A3, t3, n3));
      } catch (e4) {
        if ("function" != typeof n3) throw e4;
        const t4 = A3 && A3.opaque;
        queueMicrotask(() => n3(e4, { opaque: t4 }));
      }
    };
  }