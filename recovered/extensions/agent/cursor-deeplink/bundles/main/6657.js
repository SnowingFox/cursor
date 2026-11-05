// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 6657 range:607241..611668
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6657: (e2, t2, A2) => {
    "use strict";
    const { Readable: n2, Duplex: r2, PassThrough: o2 } = A2(2203), { InvalidArgumentError: s, InvalidReturnValueError: i, RequestAbortedError: a } = A2(7902), c = A2(9361), { AsyncResource: l } = A2(290), { addSignal: u, removeSignal: g } = A2(9909), E = A2(2613), h = /* @__PURE__ */ Symbol("resume");
    class d extends n2 {
      constructor() {
        super({ autoDestroy: true }), this[h] = null;
      }
      _read() {
        const { [h]: e3 } = this;
        e3 && (this[h] = null, e3());
      }
      _destroy(e3, t3) {
        this._read(), t3(e3);
      }
    }
    class I extends n2 {
      constructor(e3) {
        super({ autoDestroy: true }), this[h] = e3;
      }
      _read() {
        this[h]();
      }
      _destroy(e3, t3) {
        e3 || this._readableState.endEmitted || (e3 = new a()), t3(e3);
      }
    }
    class B extends l {
      constructor(e3, t3) {
        if (!e3 || "object" != typeof e3) throw new s("invalid opts");
        if ("function" != typeof t3) throw new s("invalid handler");
        const { signal: A3, method: n3, opaque: o3, onInfo: i2, responseHeaders: l2 } = e3;
        if (A3 && "function" != typeof A3.on && "function" != typeof A3.addEventListener) throw new s("signal must be an EventEmitter or EventTarget");
        if ("CONNECT" === n3) throw new s("invalid method");
        if (i2 && "function" != typeof i2) throw new s("invalid onInfo callback");
        super("UNDICI_PIPELINE"), this.opaque = o3 || null, this.responseHeaders = l2 || null, this.handler = t3, this.abort = null, this.context = null, this.onInfo = i2 || null, this.req = new d().on("error", c.nop), this.ret = new r2({ readableObjectMode: e3.objectMode, autoDestroy: true, read: () => {
          const { body: e4 } = this;
          e4 && e4.resume && e4.resume();
        }, write: (e4, t4, A4) => {
          const { req: n4 } = this;
          n4.push(e4, t4) || n4._readableState.destroyed ? A4() : n4[h] = A4;
        }, destroy: (e4, t4) => {
          const { body: A4, req: n4, res: r3, ret: o4, abort: s2 } = this;
          e4 || o4._readableState.endEmitted || (e4 = new a()), s2 && e4 && s2(), c.destroy(A4, e4), c.destroy(n4, e4), c.destroy(r3, e4), g(this), t4(e4);
        } }).on("prefinish", () => {
          const { req: e4 } = this;
          e4.push(null);
        }), this.res = null, u(this, A3);
      }
      onConnect(e3, t3) {
        const { ret: A3, res: n3 } = this;
        if (E(!n3, "pipeline cannot be retried"), A3.destroyed) throw new a();
        this.abort = e3, this.context = t3;
      }
      onHeaders(e3, t3, A3) {
        const { opaque: n3, handler: r3, context: o3 } = this;
        if (e3 < 200) {
          if (this.onInfo) {
            const A4 = "raw" === this.responseHeaders ? c.parseRawHeaders(t3) : c.parseHeaders(t3);
            this.onInfo({ statusCode: e3, headers: A4 });
          }
          return;
        }
        let s2;
        this.res = new I(A3);
        try {
          this.handler = null;
          const A4 = "raw" === this.responseHeaders ? c.parseRawHeaders(t3) : c.parseHeaders(t3);
          s2 = this.runInAsyncScope(r3, null, { statusCode: e3, headers: A4, opaque: n3, body: this.res, context: o3 });
        } catch (e4) {
          throw this.res.on("error", c.nop), e4;
        }
        if (!s2 || "function" != typeof s2.on) throw new i("expected Readable");
        s2.on("data", (e4) => {
          const { ret: t4, body: A4 } = this;
          !t4.push(e4) && A4.pause && A4.pause();
        }).on("error", (e4) => {
          const { ret: t4 } = this;
          c.destroy(t4, e4);
        }).on("end", () => {
          const { ret: e4 } = this;
          e4.push(null);
        }).on("close", () => {
          const { ret: e4 } = this;
          e4._readableState.ended || c.destroy(e4, new a());
        }), this.body = s2;
      }
      onData(e3) {
        const { res: t3 } = this;
        return t3.push(e3);
      }
      onComplete(e3) {
        const { res: t3 } = this;
        t3.push(null);
      }
      onError(e3) {
        const { ret: t3 } = this;
        this.handler = null, c.destroy(t3, e3);
      }
    }
    e2.exports = function(e3, t3) {
      try {
        const A3 = new B(e3, t3);
        return this.dispatch({ ...e3, body: A3.req }, A3), A3.ret;
      } catch (e4) {
        return new o2().destroy(e4);
      }
    };
  }