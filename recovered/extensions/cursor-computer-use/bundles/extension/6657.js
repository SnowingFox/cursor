// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 6657 range:527045..531472
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
6657: (e2, n2, t2) => {
    "use strict";
    const { Readable: a2, Duplex: s2, PassThrough: o2 } = t2(2203), { InvalidArgumentError: r, InvalidReturnValueError: i, RequestAbortedError: A } = t2(7902), c = t2(9361), { AsyncResource: l } = t2(290), { addSignal: d, removeSignal: m } = t2(9909), u = t2(2613), g = /* @__PURE__ */ Symbol("resume");
    class p extends a2 {
      constructor() {
        super({ autoDestroy: true }), this[g] = null;
      }
      _read() {
        const { [g]: e3 } = this;
        e3 && (this[g] = null, e3());
      }
      _destroy(e3, n3) {
        this._read(), n3(e3);
      }
    }
    class E extends a2 {
      constructor(e3) {
        super({ autoDestroy: true }), this[g] = e3;
      }
      _read() {
        this[g]();
      }
      _destroy(e3, n3) {
        e3 || this._readableState.endEmitted || (e3 = new A()), n3(e3);
      }
    }
    class h extends l {
      constructor(e3, n3) {
        if (!e3 || "object" != typeof e3) throw new r("invalid opts");
        if ("function" != typeof n3) throw new r("invalid handler");
        const { signal: t3, method: a3, opaque: o3, onInfo: i2, responseHeaders: l2 } = e3;
        if (t3 && "function" != typeof t3.on && "function" != typeof t3.addEventListener) throw new r("signal must be an EventEmitter or EventTarget");
        if ("CONNECT" === a3) throw new r("invalid method");
        if (i2 && "function" != typeof i2) throw new r("invalid onInfo callback");
        super("UNDICI_PIPELINE"), this.opaque = o3 || null, this.responseHeaders = l2 || null, this.handler = n3, this.abort = null, this.context = null, this.onInfo = i2 || null, this.req = new p().on("error", c.nop), this.ret = new s2({ readableObjectMode: e3.objectMode, autoDestroy: true, read: () => {
          const { body: e4 } = this;
          e4 && e4.resume && e4.resume();
        }, write: (e4, n4, t4) => {
          const { req: a4 } = this;
          a4.push(e4, n4) || a4._readableState.destroyed ? t4() : a4[g] = t4;
        }, destroy: (e4, n4) => {
          const { body: t4, req: a4, res: s3, ret: o4, abort: r2 } = this;
          e4 || o4._readableState.endEmitted || (e4 = new A()), r2 && e4 && r2(), c.destroy(t4, e4), c.destroy(a4, e4), c.destroy(s3, e4), m(this), n4(e4);
        } }).on("prefinish", () => {
          const { req: e4 } = this;
          e4.push(null);
        }), this.res = null, d(this, t3);
      }
      onConnect(e3, n3) {
        const { ret: t3, res: a3 } = this;
        if (u(!a3, "pipeline cannot be retried"), t3.destroyed) throw new A();
        this.abort = e3, this.context = n3;
      }
      onHeaders(e3, n3, t3) {
        const { opaque: a3, handler: s3, context: o3 } = this;
        if (e3 < 200) {
          if (this.onInfo) {
            const t4 = "raw" === this.responseHeaders ? c.parseRawHeaders(n3) : c.parseHeaders(n3);
            this.onInfo({ statusCode: e3, headers: t4 });
          }
          return;
        }
        let r2;
        this.res = new E(t3);
        try {
          this.handler = null;
          const t4 = "raw" === this.responseHeaders ? c.parseRawHeaders(n3) : c.parseHeaders(n3);
          r2 = this.runInAsyncScope(s3, null, { statusCode: e3, headers: t4, opaque: a3, body: this.res, context: o3 });
        } catch (e4) {
          throw this.res.on("error", c.nop), e4;
        }
        if (!r2 || "function" != typeof r2.on) throw new i("expected Readable");
        r2.on("data", (e4) => {
          const { ret: n4, body: t4 } = this;
          !n4.push(e4) && t4.pause && t4.pause();
        }).on("error", (e4) => {
          const { ret: n4 } = this;
          c.destroy(n4, e4);
        }).on("end", () => {
          const { ret: e4 } = this;
          e4.push(null);
        }).on("close", () => {
          const { ret: e4 } = this;
          e4._readableState.ended || c.destroy(e4, new A());
        }), this.body = r2;
      }
      onData(e3) {
        const { res: n3 } = this;
        return n3.push(e3);
      }
      onComplete(e3) {
        const { res: n3 } = this;
        n3.push(null);
      }
      onError(e3) {
        const { ret: n3 } = this;
        this.handler = null, c.destroy(n3, e3);
      }
    }
    e2.exports = function(e3, n3) {
      try {
        const t3 = new h(e3, n3);
        return this.dispatch({ ...e3, body: t3.req }, t3), t3.ret;
      } catch (e4) {
        return new o2().destroy(e4);
      }
    };
  }