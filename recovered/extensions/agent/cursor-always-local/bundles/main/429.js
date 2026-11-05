// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 429 range:218939..223371
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
429: (t2, e2, r2) => {
    "use strict";
    const { Readable: n2, Duplex: s2, PassThrough: i2 } = r2(2203), { InvalidArgumentError: o2, InvalidReturnValueError: a, RequestAbortedError: u } = r2(8762), c = r2(3589), { AsyncResource: l } = r2(290), { addSignal: m, removeSignal: d } = r2(6921), f = r2(2613), p = /* @__PURE__ */ Symbol("resume");
    class h extends n2 {
      constructor() {
        super({ autoDestroy: true }), this[p] = null;
      }
      _read() {
        const { [p]: t3 } = this;
        t3 && (this[p] = null, t3());
      }
      _destroy(t3, e3) {
        this._read(), e3(t3);
      }
    }
    class g extends n2 {
      constructor(t3) {
        super({ autoDestroy: true }), this[p] = t3;
      }
      _read() {
        this[p]();
      }
      _destroy(t3, e3) {
        t3 || this._readableState.endEmitted || (t3 = new u()), e3(t3);
      }
    }
    class A extends l {
      constructor(t3, e3) {
        if (!t3 || "object" != typeof t3) throw new o2("invalid opts");
        if ("function" != typeof e3) throw new o2("invalid handler");
        const { signal: r3, method: n3, opaque: i3, onInfo: a2, responseHeaders: l2 } = t3;
        if (r3 && "function" != typeof r3.on && "function" != typeof r3.addEventListener) throw new o2("signal must be an EventEmitter or EventTarget");
        if ("CONNECT" === n3) throw new o2("invalid method");
        if (a2 && "function" != typeof a2) throw new o2("invalid onInfo callback");
        super("UNDICI_PIPELINE"), this.opaque = i3 || null, this.responseHeaders = l2 || null, this.handler = e3, this.abort = null, this.context = null, this.onInfo = a2 || null, this.req = new h().on("error", c.nop), this.ret = new s2({ readableObjectMode: t3.objectMode, autoDestroy: true, read: () => {
          const { body: t4 } = this;
          t4 && t4.resume && t4.resume();
        }, write: (t4, e4, r4) => {
          const { req: n4 } = this;
          n4.push(t4, e4) || n4._readableState.destroyed ? r4() : n4[p] = r4;
        }, destroy: (t4, e4) => {
          const { body: r4, req: n4, res: s3, ret: i4, abort: o3 } = this;
          t4 || i4._readableState.endEmitted || (t4 = new u()), o3 && t4 && o3(), c.destroy(r4, t4), c.destroy(n4, t4), c.destroy(s3, t4), d(this), e4(t4);
        } }).on("prefinish", () => {
          const { req: t4 } = this;
          t4.push(null);
        }), this.res = null, m(this, r3);
      }
      onConnect(t3, e3) {
        const { ret: r3, res: n3 } = this;
        if (f(!n3, "pipeline cannot be retried"), r3.destroyed) throw new u();
        this.abort = t3, this.context = e3;
      }
      onHeaders(t3, e3, r3) {
        const { opaque: n3, handler: s3, context: i3 } = this;
        if (t3 < 200) {
          if (this.onInfo) {
            const r4 = "raw" === this.responseHeaders ? c.parseRawHeaders(e3) : c.parseHeaders(e3);
            this.onInfo({ statusCode: t3, headers: r4 });
          }
          return;
        }
        let o3;
        this.res = new g(r3);
        try {
          this.handler = null;
          const r4 = "raw" === this.responseHeaders ? c.parseRawHeaders(e3) : c.parseHeaders(e3);
          o3 = this.runInAsyncScope(s3, null, { statusCode: t3, headers: r4, opaque: n3, body: this.res, context: i3 });
        } catch (t4) {
          throw this.res.on("error", c.nop), t4;
        }
        if (!o3 || "function" != typeof o3.on) throw new a("expected Readable");
        o3.on("data", (t4) => {
          const { ret: e4, body: r4 } = this;
          !e4.push(t4) && r4.pause && r4.pause();
        }).on("error", (t4) => {
          const { ret: e4 } = this;
          c.destroy(e4, t4);
        }).on("end", () => {
          const { ret: t4 } = this;
          t4.push(null);
        }).on("close", () => {
          const { ret: t4 } = this;
          t4._readableState.ended || c.destroy(t4, new u());
        }), this.body = o3;
      }
      onData(t3) {
        const { res: e3 } = this;
        return e3.push(t3);
      }
      onComplete(t3) {
        const { res: e3 } = this;
        e3.push(null);
      }
      onError(t3) {
        const { ret: e3 } = this;
        this.handler = null, c.destroy(e3, t3);
      }
    }
    t2.exports = function(t3, e3) {
      try {
        const r3 = new A(t3, e3);
        return this.dispatch({ ...t3, body: r3.req }, r3), r3.ret;
      } catch (t4) {
        return new i2().destroy(t4);
      }
    };
  }