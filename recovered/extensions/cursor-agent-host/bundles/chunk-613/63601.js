// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 63601 range:378674..382886
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
63601: (A, e, t) => {
  "use strict";
  const { Readable: r, Duplex: s, PassThrough: o } = t(57075), { InvalidArgumentError: n, InvalidReturnValueError: i, RequestAbortedError: a } = t(38238), Q = t(55201), { AsyncResource: g } = t(16698), { addSignal: E, removeSignal: B } = t(65893), c = t(56970), I = /* @__PURE__ */ Symbol("resume");
  class C extends r {
    constructor() {
      super({ autoDestroy: true }), this[I] = null;
    }
    _read() {
      const { [I]: A2 } = this;
      A2 && (this[I] = null, A2());
    }
    _destroy(A2, e2) {
      this._read(), e2(A2);
    }
  }
  class h extends r {
    constructor(A2) {
      super({ autoDestroy: true }), this[I] = A2;
    }
    _read() {
      this[I]();
    }
    _destroy(A2, e2) {
      A2 || this._readableState.endEmitted || (A2 = new a()), e2(A2);
    }
  }
  class l extends g {
    constructor(A2, e2) {
      if (!A2 || "object" != typeof A2) throw new n("invalid opts");
      if ("function" != typeof e2) throw new n("invalid handler");
      const { signal: t2, method: r2, opaque: o2, onInfo: i2, responseHeaders: g2 } = A2;
      if (t2 && "function" != typeof t2.on && "function" != typeof t2.addEventListener) throw new n("signal must be an EventEmitter or EventTarget");
      if ("CONNECT" === r2) throw new n("invalid method");
      if (i2 && "function" != typeof i2) throw new n("invalid onInfo callback");
      super("UNDICI_PIPELINE"), this.opaque = o2 || null, this.responseHeaders = g2 || null, this.handler = e2, this.abort = null, this.context = null, this.onInfo = i2 || null, this.req = new C().on("error", Q.nop), this.ret = new s({ readableObjectMode: A2.objectMode, autoDestroy: true, read: () => {
        const { body: A3 } = this;
        A3?.resume && A3.resume();
      }, write: (A3, e3, t3) => {
        const { req: r3 } = this;
        r3.push(A3, e3) || r3._readableState.destroyed ? t3() : r3[I] = t3;
      }, destroy: (A3, e3) => {
        const { body: t3, req: r3, res: s2, ret: o3, abort: n2 } = this;
        A3 || o3._readableState.endEmitted || (A3 = new a()), n2 && A3 && n2(), Q.destroy(t3, A3), Q.destroy(r3, A3), Q.destroy(s2, A3), B(this), e3(A3);
      } }).on("prefinish", () => {
        const { req: A3 } = this;
        A3.push(null);
      }), this.res = null, E(this, t2);
    }
    onConnect(A2, e2) {
      const { ret: t2, res: r2 } = this;
      this.reason ? A2(this.reason) : (c(!r2, "pipeline cannot be retried"), c(!t2.destroyed), this.abort = A2, this.context = e2);
    }
    onHeaders(A2, e2, t2) {
      const { opaque: r2, handler: s2, context: o2 } = this;
      if (A2 < 200) {
        if (this.onInfo) {
          const t3 = "raw" === this.responseHeaders ? Q.parseRawHeaders(e2) : Q.parseHeaders(e2);
          this.onInfo({ statusCode: A2, headers: t3 });
        }
        return;
      }
      let n2;
      this.res = new h(t2);
      try {
        this.handler = null;
        const t3 = "raw" === this.responseHeaders ? Q.parseRawHeaders(e2) : Q.parseHeaders(e2);
        n2 = this.runInAsyncScope(s2, null, { statusCode: A2, headers: t3, opaque: r2, body: this.res, context: o2 });
      } catch (A3) {
        throw this.res.on("error", Q.nop), A3;
      }
      if (!n2 || "function" != typeof n2.on) throw new i("expected Readable");
      n2.on("data", (A3) => {
        const { ret: e3, body: t3 } = this;
        !e3.push(A3) && t3.pause && t3.pause();
      }).on("error", (A3) => {
        const { ret: e3 } = this;
        Q.destroy(e3, A3);
      }).on("end", () => {
        const { ret: A3 } = this;
        A3.push(null);
      }).on("close", () => {
        const { ret: A3 } = this;
        A3._readableState.ended || Q.destroy(A3, new a());
      }), this.body = n2;
    }
    onData(A2) {
      const { res: e2 } = this;
      return e2.push(A2);
    }
    onComplete(A2) {
      const { res: e2 } = this;
      e2.push(null);
    }
    onError(A2) {
      const { ret: e2 } = this;
      this.handler = null, Q.destroy(e2, A2);
    }
  }
  A.exports = function(A2, e2) {
    try {
      const t2 = new l(A2, e2);
      return this.dispatch({ ...A2, body: t2.req }, t2), t2.ret;
    } catch (A3) {
      return new o().destroy(A3);
    }
  };
}