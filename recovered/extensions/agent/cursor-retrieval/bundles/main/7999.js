// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 7999 range:927809..931909
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7999: (e2, a2, n2) => {
    "use strict";
    const { finished: t2, PassThrough: s2 } = n2(2203), { InvalidArgumentError: o2, InvalidReturnValueError: r2, RequestAbortedError: i2 } = n2(7902), l = n2(9361), { getResolveErrorBodyCallback: d } = n2(5872), { AsyncResource: m } = n2(290), { addSignal: c, removeSignal: p } = n2(9909);
    class A extends m {
      constructor(e3, a3, n3) {
        if (!e3 || "object" != typeof e3) throw new o2("invalid opts");
        const { signal: t3, method: s3, opaque: r3, body: i3, onInfo: d2, responseHeaders: m2, throwOnError: p2 } = e3;
        try {
          if ("function" != typeof n3) throw new o2("invalid callback");
          if ("function" != typeof a3) throw new o2("invalid factory");
          if (t3 && "function" != typeof t3.on && "function" != typeof t3.addEventListener) throw new o2("signal must be an EventEmitter or EventTarget");
          if ("CONNECT" === s3) throw new o2("invalid method");
          if (d2 && "function" != typeof d2) throw new o2("invalid onInfo callback");
          super("UNDICI_STREAM");
        } catch (e4) {
          throw l.isStream(i3) && l.destroy(i3.on("error", l.nop), e4), e4;
        }
        this.responseHeaders = m2 || null, this.opaque = r3 || null, this.factory = a3, this.callback = n3, this.res = null, this.abort = null, this.context = null, this.trailers = null, this.body = i3, this.onInfo = d2 || null, this.throwOnError = p2 || false, l.isStream(i3) && i3.on("error", (e4) => {
          this.onError(e4);
        }), c(this, t3);
      }
      onConnect(e3, a3) {
        if (!this.callback) throw new i2();
        this.abort = e3, this.context = a3;
      }
      onHeaders(e3, a3, n3, o3) {
        const { factory: i3, opaque: m2, context: c2, callback: p2, responseHeaders: A2 } = this, u = "raw" === A2 ? l.parseRawHeaders(a3) : l.parseHeaders(a3);
        if (e3 < 200) return void (this.onInfo && this.onInfo({ statusCode: e3, headers: u }));
        let g;
        if (this.factory = null, this.throwOnError && e3 >= 400) {
          const n4 = ("raw" === A2 ? l.parseHeaders(a3) : u)["content-type"];
          g = new s2(), this.callback = null, this.runInAsyncScope(d, null, { callback: p2, body: g, contentType: n4, statusCode: e3, statusMessage: o3, headers: u });
        } else {
          if (null === i3) return;
          if (g = this.runInAsyncScope(i3, null, { statusCode: e3, headers: u, opaque: m2, context: c2 }), !g || "function" != typeof g.write || "function" != typeof g.end || "function" != typeof g.on) throw new r2("expected Writable");
          t2(g, { readable: false }, (e4) => {
            const { callback: a4, res: n4, opaque: t3, trailers: s3, abort: o4 } = this;
            this.res = null, !e4 && n4.readable || l.destroy(n4, e4), this.callback = null, this.runInAsyncScope(a4, null, e4 || null, { opaque: t3, trailers: s3 }), e4 && o4();
          });
        }
        g.on("drain", n3), this.res = g;
        return true !== (void 0 !== g.writableNeedDrain ? g.writableNeedDrain : g._writableState && g._writableState.needDrain);
      }
      onData(e3) {
        const { res: a3 } = this;
        return !a3 || a3.write(e3);
      }
      onComplete(e3) {
        const { res: a3 } = this;
        p(this), a3 && (this.trailers = l.parseHeaders(e3), a3.end());
      }
      onError(e3) {
        const { res: a3, callback: n3, opaque: t3, body: s3 } = this;
        p(this), this.factory = null, a3 ? (this.res = null, l.destroy(a3, e3)) : n3 && (this.callback = null, queueMicrotask(() => {
          this.runInAsyncScope(n3, null, e3, { opaque: t3 });
        })), s3 && (this.body = null, l.destroy(s3, e3));
      }
    }
    e2.exports = function e3(a3, n3, t3) {
      if (void 0 === t3) return new Promise((t4, s3) => {
        e3.call(this, a3, n3, (e4, a4) => e4 ? s3(e4) : t4(a4));
      });
      try {
        this.dispatch(a3, new A(a3, n3, t3));
      } catch (e4) {
        if ("function" != typeof t3) throw e4;
        const n4 = a3 && a3.opaque;
        queueMicrotask(() => t3(e4, { opaque: n4 }));
      }
    };
  }