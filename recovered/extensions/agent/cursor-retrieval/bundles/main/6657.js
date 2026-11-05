// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 6657 range:816629..821064
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6657: (e2, a2, n2) => {
    "use strict";
    const { Readable: t2, Duplex: s2, PassThrough: o2 } = n2(2203), { InvalidArgumentError: r2, InvalidReturnValueError: i2, RequestAbortedError: l } = n2(7902), d = n2(9361), { AsyncResource: m } = n2(290), { addSignal: c, removeSignal: p } = n2(9909), A = n2(2613), u = /* @__PURE__ */ Symbol("resume");
    class g extends t2 {
      constructor() {
        super({ autoDestroy: true }), this[u] = null;
      }
      _read() {
        const { [u]: e3 } = this;
        e3 && (this[u] = null, e3());
      }
      _destroy(e3, a3) {
        this._read(), a3(e3);
      }
    }
    class T extends t2 {
      constructor(e3) {
        super({ autoDestroy: true }), this[u] = e3;
      }
      _read() {
        this[u]();
      }
      _destroy(e3, a3) {
        e3 || this._readableState.endEmitted || (e3 = new l()), a3(e3);
      }
    }
    class h extends m {
      constructor(e3, a3) {
        if (!e3 || "object" != typeof e3) throw new r2("invalid opts");
        if ("function" != typeof a3) throw new r2("invalid handler");
        const { signal: n3, method: t3, opaque: o3, onInfo: i3, responseHeaders: m2 } = e3;
        if (n3 && "function" != typeof n3.on && "function" != typeof n3.addEventListener) throw new r2("signal must be an EventEmitter or EventTarget");
        if ("CONNECT" === t3) throw new r2("invalid method");
        if (i3 && "function" != typeof i3) throw new r2("invalid onInfo callback");
        super("UNDICI_PIPELINE"), this.opaque = o3 || null, this.responseHeaders = m2 || null, this.handler = a3, this.abort = null, this.context = null, this.onInfo = i3 || null, this.req = new g().on("error", d.nop), this.ret = new s2({ readableObjectMode: e3.objectMode, autoDestroy: true, read: () => {
          const { body: e4 } = this;
          e4 && e4.resume && e4.resume();
        }, write: (e4, a4, n4) => {
          const { req: t4 } = this;
          t4.push(e4, a4) || t4._readableState.destroyed ? n4() : t4[u] = n4;
        }, destroy: (e4, a4) => {
          const { body: n4, req: t4, res: s3, ret: o4, abort: r3 } = this;
          e4 || o4._readableState.endEmitted || (e4 = new l()), r3 && e4 && r3(), d.destroy(n4, e4), d.destroy(t4, e4), d.destroy(s3, e4), p(this), a4(e4);
        } }).on("prefinish", () => {
          const { req: e4 } = this;
          e4.push(null);
        }), this.res = null, c(this, n3);
      }
      onConnect(e3, a3) {
        const { ret: n3, res: t3 } = this;
        if (A(!t3, "pipeline cannot be retried"), n3.destroyed) throw new l();
        this.abort = e3, this.context = a3;
      }
      onHeaders(e3, a3, n3) {
        const { opaque: t3, handler: s3, context: o3 } = this;
        if (e3 < 200) {
          if (this.onInfo) {
            const n4 = "raw" === this.responseHeaders ? d.parseRawHeaders(a3) : d.parseHeaders(a3);
            this.onInfo({ statusCode: e3, headers: n4 });
          }
          return;
        }
        let r3;
        this.res = new T(n3);
        try {
          this.handler = null;
          const n4 = "raw" === this.responseHeaders ? d.parseRawHeaders(a3) : d.parseHeaders(a3);
          r3 = this.runInAsyncScope(s3, null, { statusCode: e3, headers: n4, opaque: t3, body: this.res, context: o3 });
        } catch (e4) {
          throw this.res.on("error", d.nop), e4;
        }
        if (!r3 || "function" != typeof r3.on) throw new i2("expected Readable");
        r3.on("data", (e4) => {
          const { ret: a4, body: n4 } = this;
          !a4.push(e4) && n4.pause && n4.pause();
        }).on("error", (e4) => {
          const { ret: a4 } = this;
          d.destroy(a4, e4);
        }).on("end", () => {
          const { ret: e4 } = this;
          e4.push(null);
        }).on("close", () => {
          const { ret: e4 } = this;
          e4._readableState.ended || d.destroy(e4, new l());
        }), this.body = r3;
      }
      onData(e3) {
        const { res: a3 } = this;
        return a3.push(e3);
      }
      onComplete(e3) {
        const { res: a3 } = this;
        a3.push(null);
      }
      onError(e3) {
        const { ret: a3 } = this;
        this.handler = null, d.destroy(a3, e3);
      }
    }
    e2.exports = function(e3, a3) {
      try {
        const n3 = new h(e3, a3);
        return this.dispatch({ ...e3, body: n3.req }, n3), n3.ret;
      } catch (e4) {
        return new o2().destroy(e4);
      }
    };
  }