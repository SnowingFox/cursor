// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 6564 range:13040..18644
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
6564: (A, e, t) => {
  "use strict";
  const r = t(56970), { Readable: s } = t(57075), { RequestAbortedError: o, NotSupportedError: n, InvalidArgumentError: i, AbortError: a } = t(38238), Q = t(55201), { ReadableStreamFrom: g } = t(55201), E = /* @__PURE__ */ Symbol("kConsume"), B = /* @__PURE__ */ Symbol("kReading"), c = /* @__PURE__ */ Symbol("kBody"), I = /* @__PURE__ */ Symbol("kAbort"), C = /* @__PURE__ */ Symbol("kContentType"), h = /* @__PURE__ */ Symbol("kContentLength"), l = () => {
  };
  function u(A2) {
    return Q.isDisturbed(A2) || (function(A3) {
      return A3[c] && true === A3[c].locked || A3[E];
    })(A2);
  }
  async function d(A2, e2) {
    return r(!A2[E]), new Promise((t2, r2) => {
      if (u(A2)) {
        const e3 = A2._readableState;
        e3.destroyed && false === e3.closeEmitted ? A2.on("error", (A3) => {
          r2(A3);
        }).on("close", () => {
          r2(new TypeError("unusable"));
        }) : r2(e3.errored ?? new TypeError("unusable"));
      } else queueMicrotask(() => {
        A2[E] = { type: e2, stream: A2, resolve: t2, reject: r2, length: 0, body: [] }, A2.on("error", function(A3) {
          p(this[E], A3);
        }).on("close", function() {
          null !== this[E].body && p(this[E], new o());
        }), (function(A3) {
          if (null === A3.body) return;
          const { _readableState: e3 } = A3.stream;
          if (e3.bufferIndex) {
            const t3 = e3.bufferIndex, r3 = e3.buffer.length;
            for (let s2 = t3; s2 < r3; s2++) D(A3, e3.buffer[s2]);
          } else for (const t3 of e3.buffer) D(A3, t3);
          e3.endEmitted ? y(this[E]) : A3.stream.on("end", function() {
            y(this[E]);
          });
          A3.stream.resume();
          for (; null != A3.stream.read(); ) ;
        })(A2[E]);
      });
    });
  }
  function f(A2, e2) {
    if (0 === A2.length || 0 === e2) return "";
    const t2 = 1 === A2.length ? A2[0] : Buffer.concat(A2, e2), r2 = t2.length, s2 = r2 > 2 && 239 === t2[0] && 187 === t2[1] && 191 === t2[2] ? 3 : 0;
    return t2.utf8Slice(s2, r2);
  }
  function w(A2, e2) {
    if (0 === A2.length || 0 === e2) return new Uint8Array(0);
    if (1 === A2.length) return new Uint8Array(A2[0]);
    const t2 = new Uint8Array(Buffer.allocUnsafeSlow(e2).buffer);
    let r2 = 0;
    for (let e3 = 0; e3 < A2.length; ++e3) {
      const s2 = A2[e3];
      t2.set(s2, r2), r2 += s2.length;
    }
    return t2;
  }
  function y(A2) {
    const { type: e2, body: t2, resolve: r2, stream: s2, length: o2 } = A2;
    try {
      "text" === e2 ? r2(f(t2, o2)) : "json" === e2 ? r2(JSON.parse(f(t2, o2))) : "arrayBuffer" === e2 ? r2(w(t2, o2).buffer) : "blob" === e2 ? r2(new Blob(t2, { type: s2[C] })) : "bytes" === e2 && r2(w(t2, o2)), p(A2);
    } catch (A3) {
      s2.destroy(A3);
    }
  }
  function D(A2, e2) {
    A2.length += e2.length, A2.body.push(e2);
  }
  function p(A2, e2) {
    null !== A2.body && (e2 ? A2.reject(e2) : A2.resolve(), A2.type = null, A2.stream = null, A2.resolve = null, A2.reject = null, A2.length = 0, A2.body = null);
  }
  A.exports = { Readable: class extends s {
    constructor({ resume: A2, abort: e2, contentType: t2 = "", contentLength: r2, highWaterMark: s2 = 65536 }) {
      super({ autoDestroy: true, read: A2, highWaterMark: s2 }), this._readableState.dataEmitted = false, this[I] = e2, this[E] = null, this[c] = null, this[C] = t2, this[h] = r2, this[B] = false;
    }
    destroy(A2) {
      return A2 || this._readableState.endEmitted || (A2 = new o()), A2 && this[I](), super.destroy(A2);
    }
    _destroy(A2, e2) {
      this[B] ? e2(A2) : setImmediate(() => {
        e2(A2);
      });
    }
    on(A2, ...e2) {
      return "data" !== A2 && "readable" !== A2 || (this[B] = true), super.on(A2, ...e2);
    }
    addListener(A2, ...e2) {
      return this.on(A2, ...e2);
    }
    off(A2, ...e2) {
      const t2 = super.off(A2, ...e2);
      return "data" !== A2 && "readable" !== A2 || (this[B] = this.listenerCount("data") > 0 || this.listenerCount("readable") > 0), t2;
    }
    removeListener(A2, ...e2) {
      return this.off(A2, ...e2);
    }
    push(A2) {
      return this[E] && null !== A2 ? (D(this[E], A2), !this[B] || super.push(A2)) : super.push(A2);
    }
    async text() {
      return d(this, "text");
    }
    async json() {
      return d(this, "json");
    }
    async blob() {
      return d(this, "blob");
    }
    async bytes() {
      return d(this, "bytes");
    }
    async arrayBuffer() {
      return d(this, "arrayBuffer");
    }
    async formData() {
      throw new n();
    }
    get bodyUsed() {
      return Q.isDisturbed(this);
    }
    get body() {
      return this[c] || (this[c] = g(this), this[E] && (this[c].getReader(), r(this[c].locked))), this[c];
    }
    async dump(A2) {
      let e2 = Number.isFinite(A2?.limit) ? A2.limit : 131072;
      const t2 = A2?.signal;
      if (null != t2 && ("object" != typeof t2 || !("aborted" in t2))) throw new i("signal must be an AbortSignal");
      return t2?.throwIfAborted(), this._readableState.closeEmitted ? null : await new Promise((A3, r2) => {
        this[h] > e2 && this.destroy(new a());
        const s2 = () => {
          this.destroy(t2.reason ?? new a());
        };
        t2?.addEventListener("abort", s2), this.on("close", function() {
          t2?.removeEventListener("abort", s2), t2?.aborted ? r2(t2.reason ?? new a()) : A3(null);
        }).on("error", l).on("data", function(A4) {
          e2 -= A4.length, e2 <= 0 && this.destroy();
        }).resume();
      });
    }
  }, chunksDecode: f };
}