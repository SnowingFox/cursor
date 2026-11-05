// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 90429 range:13029904..13034321
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
90429: (e, t, r) => {
    "use strict";
    const { Readable: n, Duplex: s, PassThrough: o } = r(2203), { InvalidArgumentError: i, InvalidReturnValueError: a, RequestAbortedError: c } = r(48762), l = r(83589), { AsyncResource: u } = r(90290), { addSignal: d, removeSignal: p } = r(26921), m = r(42613), h = /* @__PURE__ */ Symbol("resume");
    class f extends n {
      constructor() {
        super({ autoDestroy: true }), this[h] = null;
      }
      _read() {
        const { [h]: e2 } = this;
        e2 && (this[h] = null, e2());
      }
      _destroy(e2, t2) {
        this._read(), t2(e2);
      }
    }
    class g extends n {
      constructor(e2) {
        super({ autoDestroy: true }), this[h] = e2;
      }
      _read() {
        this[h]();
      }
      _destroy(e2, t2) {
        e2 || this._readableState.endEmitted || (e2 = new c()), t2(e2);
      }
    }
    class y extends u {
      constructor(e2, t2) {
        if (!e2 || "object" != typeof e2) throw new i("invalid opts");
        if ("function" != typeof t2) throw new i("invalid handler");
        const { signal: r2, method: n2, opaque: o2, onInfo: a2, responseHeaders: u2 } = e2;
        if (r2 && "function" != typeof r2.on && "function" != typeof r2.addEventListener) throw new i("signal must be an EventEmitter or EventTarget");
        if ("CONNECT" === n2) throw new i("invalid method");
        if (a2 && "function" != typeof a2) throw new i("invalid onInfo callback");
        super("UNDICI_PIPELINE"), this.opaque = o2 || null, this.responseHeaders = u2 || null, this.handler = t2, this.abort = null, this.context = null, this.onInfo = a2 || null, this.req = new f().on("error", l.nop), this.ret = new s({ readableObjectMode: e2.objectMode, autoDestroy: true, read: () => {
          const { body: e3 } = this;
          e3 && e3.resume && e3.resume();
        }, write: (e3, t3, r3) => {
          const { req: n3 } = this;
          n3.push(e3, t3) || n3._readableState.destroyed ? r3() : n3[h] = r3;
        }, destroy: (e3, t3) => {
          const { body: r3, req: n3, res: s2, ret: o3, abort: i2 } = this;
          e3 || o3._readableState.endEmitted || (e3 = new c()), i2 && e3 && i2(), l.destroy(r3, e3), l.destroy(n3, e3), l.destroy(s2, e3), p(this), t3(e3);
        } }).on("prefinish", () => {
          const { req: e3 } = this;
          e3.push(null);
        }), this.res = null, d(this, r2);
      }
      onConnect(e2, t2) {
        const { ret: r2, res: n2 } = this;
        if (m(!n2, "pipeline cannot be retried"), r2.destroyed) throw new c();
        this.abort = e2, this.context = t2;
      }
      onHeaders(e2, t2, r2) {
        const { opaque: n2, handler: s2, context: o2 } = this;
        if (e2 < 200) {
          if (this.onInfo) {
            const r3 = "raw" === this.responseHeaders ? l.parseRawHeaders(t2) : l.parseHeaders(t2);
            this.onInfo({ statusCode: e2, headers: r3 });
          }
          return;
        }
        let i2;
        this.res = new g(r2);
        try {
          this.handler = null;
          const r3 = "raw" === this.responseHeaders ? l.parseRawHeaders(t2) : l.parseHeaders(t2);
          i2 = this.runInAsyncScope(s2, null, { statusCode: e2, headers: r3, opaque: n2, body: this.res, context: o2 });
        } catch (e3) {
          throw this.res.on("error", l.nop), e3;
        }
        if (!i2 || "function" != typeof i2.on) throw new a("expected Readable");
        i2.on("data", (e3) => {
          const { ret: t3, body: r3 } = this;
          !t3.push(e3) && r3.pause && r3.pause();
        }).on("error", (e3) => {
          const { ret: t3 } = this;
          l.destroy(t3, e3);
        }).on("end", () => {
          const { ret: e3 } = this;
          e3.push(null);
        }).on("close", () => {
          const { ret: e3 } = this;
          e3._readableState.ended || l.destroy(e3, new c());
        }), this.body = i2;
      }
      onData(e2) {
        const { res: t2 } = this;
        return t2.push(e2);
      }
      onComplete(e2) {
        const { res: t2 } = this;
        t2.push(null);
      }
      onError(e2) {
        const { ret: t2 } = this;
        this.handler = null, l.destroy(t2, e2);
      }
    }
    e.exports = function(e2, t2) {
      try {
        const r2 = new y(e2, t2);
        return this.dispatch({ ...e2, body: r2.req }, r2), r2.ret;
      } catch (e3) {
        return new o().destroy(e3);
      }
    };
  }