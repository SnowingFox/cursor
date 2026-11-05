// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 49139 range:8165240..8169322
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
49139: (e, t, r) => {
    "use strict";
    const { finished: n, PassThrough: s } = r(2203), { InvalidArgumentError: o, InvalidReturnValueError: i, RequestAbortedError: a } = r(48762), c = r(83589), { getResolveErrorBodyCallback: l } = r(41724), { AsyncResource: u } = r(90290), { addSignal: d, removeSignal: p } = r(26921);
    class m extends u {
      constructor(e2, t2, r2) {
        if (!e2 || "object" != typeof e2) throw new o("invalid opts");
        const { signal: n2, method: s2, opaque: i2, body: a2, onInfo: l2, responseHeaders: u2, throwOnError: p2 } = e2;
        try {
          if ("function" != typeof r2) throw new o("invalid callback");
          if ("function" != typeof t2) throw new o("invalid factory");
          if (n2 && "function" != typeof n2.on && "function" != typeof n2.addEventListener) throw new o("signal must be an EventEmitter or EventTarget");
          if ("CONNECT" === s2) throw new o("invalid method");
          if (l2 && "function" != typeof l2) throw new o("invalid onInfo callback");
          super("UNDICI_STREAM");
        } catch (e3) {
          throw c.isStream(a2) && c.destroy(a2.on("error", c.nop), e3), e3;
        }
        this.responseHeaders = u2 || null, this.opaque = i2 || null, this.factory = t2, this.callback = r2, this.res = null, this.abort = null, this.context = null, this.trailers = null, this.body = a2, this.onInfo = l2 || null, this.throwOnError = p2 || false, c.isStream(a2) && a2.on("error", (e3) => {
          this.onError(e3);
        }), d(this, n2);
      }
      onConnect(e2, t2) {
        if (!this.callback) throw new a();
        this.abort = e2, this.context = t2;
      }
      onHeaders(e2, t2, r2, o2) {
        const { factory: a2, opaque: u2, context: d2, callback: p2, responseHeaders: m2 } = this, h = "raw" === m2 ? c.parseRawHeaders(t2) : c.parseHeaders(t2);
        if (e2 < 200) return void (this.onInfo && this.onInfo({ statusCode: e2, headers: h }));
        let f;
        if (this.factory = null, this.throwOnError && e2 >= 400) {
          const r3 = ("raw" === m2 ? c.parseHeaders(t2) : h)["content-type"];
          f = new s(), this.callback = null, this.runInAsyncScope(l, null, { callback: p2, body: f, contentType: r3, statusCode: e2, statusMessage: o2, headers: h });
        } else {
          if (null === a2) return;
          if (f = this.runInAsyncScope(a2, null, { statusCode: e2, headers: h, opaque: u2, context: d2 }), !f || "function" != typeof f.write || "function" != typeof f.end || "function" != typeof f.on) throw new i("expected Writable");
          n(f, { readable: false }, (e3) => {
            const { callback: t3, res: r3, opaque: n2, trailers: s2, abort: o3 } = this;
            this.res = null, !e3 && r3.readable || c.destroy(r3, e3), this.callback = null, this.runInAsyncScope(t3, null, e3 || null, { opaque: n2, trailers: s2 }), e3 && o3();
          });
        }
        f.on("drain", r2), this.res = f;
        return true !== (void 0 !== f.writableNeedDrain ? f.writableNeedDrain : f._writableState && f._writableState.needDrain);
      }
      onData(e2) {
        const { res: t2 } = this;
        return !t2 || t2.write(e2);
      }
      onComplete(e2) {
        const { res: t2 } = this;
        p(this), t2 && (this.trailers = c.parseHeaders(e2), t2.end());
      }
      onError(e2) {
        const { res: t2, callback: r2, opaque: n2, body: s2 } = this;
        p(this), this.factory = null, t2 ? (this.res = null, c.destroy(t2, e2)) : r2 && (this.callback = null, queueMicrotask(() => {
          this.runInAsyncScope(r2, null, e2, { opaque: n2 });
        })), s2 && (this.body = null, c.destroy(s2, e2));
      }
    }
    e.exports = function e2(t2, r2, n2) {
      if (void 0 === n2) return new Promise((n3, s2) => {
        e2.call(this, t2, r2, (e3, t3) => e3 ? s2(e3) : n3(t3));
      });
      try {
        this.dispatch(t2, new m(t2, r2, n2));
      } catch (e3) {
        if ("function" != typeof n2) throw e3;
        const r3 = t2 && t2.opaque;
        queueMicrotask(() => n2(e3, { opaque: r3 }));
      }
    };
  }