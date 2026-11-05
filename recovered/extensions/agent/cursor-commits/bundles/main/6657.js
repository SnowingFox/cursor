// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 6657 range:496352..500787
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6657: (e2, n2, a2) => {
    "use strict";
    const { Readable: t2, Duplex: s2, PassThrough: o2 } = a2(2203), { InvalidArgumentError: r2, InvalidReturnValueError: i2, RequestAbortedError: A } = a2(7902), l = a2(9361), { AsyncResource: c } = a2(290), { addSignal: m, removeSignal: d } = a2(9909), g = a2(2613), u = /* @__PURE__ */ Symbol("resume");
    class E extends t2 {
      constructor() {
        super({ autoDestroy: true }), this[u] = null;
      }
      _read() {
        const { [u]: e3 } = this;
        e3 && (this[u] = null, e3());
      }
      _destroy(e3, n3) {
        this._read(), n3(e3);
      }
    }
    class p extends t2 {
      constructor(e3) {
        super({ autoDestroy: true }), this[u] = e3;
      }
      _read() {
        this[u]();
      }
      _destroy(e3, n3) {
        e3 || this._readableState.endEmitted || (e3 = new A()), n3(e3);
      }
    }
    class T extends c {
      constructor(e3, n3) {
        if (!e3 || "object" != typeof e3) throw new r2("invalid opts");
        if ("function" != typeof n3) throw new r2("invalid handler");
        const { signal: a3, method: t3, opaque: o3, onInfo: i3, responseHeaders: c2 } = e3;
        if (a3 && "function" != typeof a3.on && "function" != typeof a3.addEventListener) throw new r2("signal must be an EventEmitter or EventTarget");
        if ("CONNECT" === t3) throw new r2("invalid method");
        if (i3 && "function" != typeof i3) throw new r2("invalid onInfo callback");
        super("UNDICI_PIPELINE"), this.opaque = o3 || null, this.responseHeaders = c2 || null, this.handler = n3, this.abort = null, this.context = null, this.onInfo = i3 || null, this.req = new E().on("error", l.nop), this.ret = new s2({ readableObjectMode: e3.objectMode, autoDestroy: true, read: () => {
          const { body: e4 } = this;
          e4 && e4.resume && e4.resume();
        }, write: (e4, n4, a4) => {
          const { req: t4 } = this;
          t4.push(e4, n4) || t4._readableState.destroyed ? a4() : t4[u] = a4;
        }, destroy: (e4, n4) => {
          const { body: a4, req: t4, res: s3, ret: o4, abort: r3 } = this;
          e4 || o4._readableState.endEmitted || (e4 = new A()), r3 && e4 && r3(), l.destroy(a4, e4), l.destroy(t4, e4), l.destroy(s3, e4), d(this), n4(e4);
        } }).on("prefinish", () => {
          const { req: e4 } = this;
          e4.push(null);
        }), this.res = null, m(this, a3);
      }
      onConnect(e3, n3) {
        const { ret: a3, res: t3 } = this;
        if (g(!t3, "pipeline cannot be retried"), a3.destroyed) throw new A();
        this.abort = e3, this.context = n3;
      }
      onHeaders(e3, n3, a3) {
        const { opaque: t3, handler: s3, context: o3 } = this;
        if (e3 < 200) {
          if (this.onInfo) {
            const a4 = "raw" === this.responseHeaders ? l.parseRawHeaders(n3) : l.parseHeaders(n3);
            this.onInfo({ statusCode: e3, headers: a4 });
          }
          return;
        }
        let r3;
        this.res = new p(a3);
        try {
          this.handler = null;
          const a4 = "raw" === this.responseHeaders ? l.parseRawHeaders(n3) : l.parseHeaders(n3);
          r3 = this.runInAsyncScope(s3, null, { statusCode: e3, headers: a4, opaque: t3, body: this.res, context: o3 });
        } catch (e4) {
          throw this.res.on("error", l.nop), e4;
        }
        if (!r3 || "function" != typeof r3.on) throw new i2("expected Readable");
        r3.on("data", (e4) => {
          const { ret: n4, body: a4 } = this;
          !n4.push(e4) && a4.pause && a4.pause();
        }).on("error", (e4) => {
          const { ret: n4 } = this;
          l.destroy(n4, e4);
        }).on("end", () => {
          const { ret: e4 } = this;
          e4.push(null);
        }).on("close", () => {
          const { ret: e4 } = this;
          e4._readableState.ended || l.destroy(e4, new A());
        }), this.body = r3;
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
        this.handler = null, l.destroy(n3, e3);
      }
    }
    e2.exports = function(e3, n3) {
      try {
        const a3 = new T(e3, n3);
        return this.dispatch({ ...e3, body: a3.req }, a3), a3.ret;
      } catch (e4) {
        return new o2().destroy(e4);
      }
    };
  }