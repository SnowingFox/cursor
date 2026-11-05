// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 6657 range:495719..500146
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6657: (e2, A2, t2) => {
    "use strict";
    const { Readable: n2, Duplex: r2, PassThrough: o2 } = t2(2203), { InvalidArgumentError: s, InvalidReturnValueError: a, RequestAbortedError: i } = t2(7902), c = t2(9361), { AsyncResource: l } = t2(290), { addSignal: g, removeSignal: E } = t2(9909), u = t2(2613), d = /* @__PURE__ */ Symbol("resume");
    class I extends n2 {
      constructor() {
        super({ autoDestroy: true }), this[d] = null;
      }
      _read() {
        const { [d]: e3 } = this;
        e3 && (this[d] = null, e3());
      }
      _destroy(e3, A3) {
        this._read(), A3(e3);
      }
    }
    class h extends n2 {
      constructor(e3) {
        super({ autoDestroy: true }), this[d] = e3;
      }
      _read() {
        this[d]();
      }
      _destroy(e3, A3) {
        e3 || this._readableState.endEmitted || (e3 = new i()), A3(e3);
      }
    }
    class Q extends l {
      constructor(e3, A3) {
        if (!e3 || "object" != typeof e3) throw new s("invalid opts");
        if ("function" != typeof A3) throw new s("invalid handler");
        const { signal: t3, method: n3, opaque: o3, onInfo: a2, responseHeaders: l2 } = e3;
        if (t3 && "function" != typeof t3.on && "function" != typeof t3.addEventListener) throw new s("signal must be an EventEmitter or EventTarget");
        if ("CONNECT" === n3) throw new s("invalid method");
        if (a2 && "function" != typeof a2) throw new s("invalid onInfo callback");
        super("UNDICI_PIPELINE"), this.opaque = o3 || null, this.responseHeaders = l2 || null, this.handler = A3, this.abort = null, this.context = null, this.onInfo = a2 || null, this.req = new I().on("error", c.nop), this.ret = new r2({ readableObjectMode: e3.objectMode, autoDestroy: true, read: () => {
          const { body: e4 } = this;
          e4 && e4.resume && e4.resume();
        }, write: (e4, A4, t4) => {
          const { req: n4 } = this;
          n4.push(e4, A4) || n4._readableState.destroyed ? t4() : n4[d] = t4;
        }, destroy: (e4, A4) => {
          const { body: t4, req: n4, res: r3, ret: o4, abort: s2 } = this;
          e4 || o4._readableState.endEmitted || (e4 = new i()), s2 && e4 && s2(), c.destroy(t4, e4), c.destroy(n4, e4), c.destroy(r3, e4), E(this), A4(e4);
        } }).on("prefinish", () => {
          const { req: e4 } = this;
          e4.push(null);
        }), this.res = null, g(this, t3);
      }
      onConnect(e3, A3) {
        const { ret: t3, res: n3 } = this;
        if (u(!n3, "pipeline cannot be retried"), t3.destroyed) throw new i();
        this.abort = e3, this.context = A3;
      }
      onHeaders(e3, A3, t3) {
        const { opaque: n3, handler: r3, context: o3 } = this;
        if (e3 < 200) {
          if (this.onInfo) {
            const t4 = "raw" === this.responseHeaders ? c.parseRawHeaders(A3) : c.parseHeaders(A3);
            this.onInfo({ statusCode: e3, headers: t4 });
          }
          return;
        }
        let s2;
        this.res = new h(t3);
        try {
          this.handler = null;
          const t4 = "raw" === this.responseHeaders ? c.parseRawHeaders(A3) : c.parseHeaders(A3);
          s2 = this.runInAsyncScope(r3, null, { statusCode: e3, headers: t4, opaque: n3, body: this.res, context: o3 });
        } catch (e4) {
          throw this.res.on("error", c.nop), e4;
        }
        if (!s2 || "function" != typeof s2.on) throw new a("expected Readable");
        s2.on("data", (e4) => {
          const { ret: A4, body: t4 } = this;
          !A4.push(e4) && t4.pause && t4.pause();
        }).on("error", (e4) => {
          const { ret: A4 } = this;
          c.destroy(A4, e4);
        }).on("end", () => {
          const { ret: e4 } = this;
          e4.push(null);
        }).on("close", () => {
          const { ret: e4 } = this;
          e4._readableState.ended || c.destroy(e4, new i());
        }), this.body = s2;
      }
      onData(e3) {
        const { res: A3 } = this;
        return A3.push(e3);
      }
      onComplete(e3) {
        const { res: A3 } = this;
        A3.push(null);
      }
      onError(e3) {
        const { ret: A3 } = this;
        this.handler = null, c.destroy(A3, e3);
      }
    }
    e2.exports = function(e3, A3) {
      try {
        const t3 = new Q(e3, A3);
        return this.dispatch({ ...e3, body: t3.req }, t3), t3.ret;
      } catch (e4) {
        return new o2().destroy(e4);
      }
    };
  }