// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 4260 range:694601..699559
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4260: (e2, a2, n2) => {
    "use strict";
    const t2 = n2(2613), { Readable: s2 } = n2(2203), { RequestAbortedError: o2, NotSupportedError: r2, InvalidArgumentError: i2 } = n2(7902), l = n2(9361), { ReadableStreamFrom: d, toUSVString: m } = n2(9361);
    let c;
    const p = /* @__PURE__ */ Symbol("kConsume"), A = /* @__PURE__ */ Symbol("kReading"), u = /* @__PURE__ */ Symbol("kBody"), g = /* @__PURE__ */ Symbol("abort"), T = /* @__PURE__ */ Symbol("kContentType"), h = () => {
    };
    function k(e3) {
      return l.isDisturbed(e3) || (function(e4) {
        return e4[u] && true === e4[u].locked || e4[p];
      })(e3);
    }
    async function _(e3, a3) {
      if (k(e3)) throw new TypeError("unusable");
      return t2(!e3[p]), new Promise((n3, t3) => {
        e3[p] = { type: a3, stream: e3, resolve: n3, reject: t3, length: 0, body: [] }, e3.on("error", function(e4) {
          I(this[p], e4);
        }).on("close", function() {
          null !== this[p].body && I(this[p], new o2());
        }), process.nextTick(E, e3[p]);
      });
    }
    function E(e3) {
      if (null === e3.body) return;
      const { _readableState: a3 } = e3.stream;
      for (const n3 of a3.buffer) C(e3, n3);
      for (a3.endEmitted ? f(this[p]) : e3.stream.on("end", function() {
        f(this[p]);
      }), e3.stream.resume(); null != e3.stream.read(); ) ;
    }
    function f(e3) {
      const { type: a3, body: t3, resolve: s3, stream: o3, length: r3 } = e3;
      try {
        if ("text" === a3) s3(m(Buffer.concat(t3)));
        else if ("json" === a3) s3(JSON.parse(Buffer.concat(t3)));
        else if ("arrayBuffer" === a3) {
          const e4 = new Uint8Array(r3);
          let a4 = 0;
          for (const n3 of t3) e4.set(n3, a4), a4 += n3.byteLength;
          s3(e4.buffer);
        } else "blob" === a3 && (c || (c = n2(181).Blob), s3(new c(t3, { type: o3[T] })));
        I(e3);
      } catch (e4) {
        o3.destroy(e4);
      }
    }
    function C(e3, a3) {
      e3.length += a3.length, e3.body.push(a3);
    }
    function I(e3, a3) {
      null !== e3.body && (a3 ? e3.reject(a3) : e3.resolve(), e3.type = null, e3.stream = null, e3.resolve = null, e3.reject = null, e3.length = 0, e3.body = null);
    }
    e2.exports = class extends s2 {
      constructor({ resume: e3, abort: a3, contentType: n3 = "", highWaterMark: t3 = 65536 }) {
        super({ autoDestroy: true, read: e3, highWaterMark: t3 }), this._readableState.dataEmitted = false, this[g] = a3, this[p] = null, this[u] = null, this[T] = n3, this[A] = false;
      }
      destroy(e3) {
        return this.destroyed ? this : (e3 || this._readableState.endEmitted || (e3 = new o2()), e3 && this[g](), super.destroy(e3));
      }
      emit(e3, ...a3) {
        return "data" === e3 ? this._readableState.dataEmitted = true : "error" === e3 && (this._readableState.errorEmitted = true), super.emit(e3, ...a3);
      }
      on(e3, ...a3) {
        return "data" !== e3 && "readable" !== e3 || (this[A] = true), super.on(e3, ...a3);
      }
      addListener(e3, ...a3) {
        return this.on(e3, ...a3);
      }
      off(e3, ...a3) {
        const n3 = super.off(e3, ...a3);
        return "data" !== e3 && "readable" !== e3 || (this[A] = this.listenerCount("data") > 0 || this.listenerCount("readable") > 0), n3;
      }
      removeListener(e3, ...a3) {
        return this.off(e3, ...a3);
      }
      push(e3) {
        return this[p] && null !== e3 && 0 === this.readableLength ? (C(this[p], e3), !this[A] || super.push(e3)) : super.push(e3);
      }
      async text() {
        return _(this, "text");
      }
      async json() {
        return _(this, "json");
      }
      async blob() {
        return _(this, "blob");
      }
      async arrayBuffer() {
        return _(this, "arrayBuffer");
      }
      async formData() {
        throw new r2();
      }
      get bodyUsed() {
        return l.isDisturbed(this);
      }
      get body() {
        return this[u] || (this[u] = d(this), this[p] && (this[u].getReader(), t2(this[u].locked))), this[u];
      }
      dump(e3) {
        let a3 = e3 && Number.isFinite(e3.limit) ? e3.limit : 262144;
        const n3 = e3 && e3.signal;
        if (n3) try {
          if ("object" != typeof n3 || !("aborted" in n3)) throw new i2("signal must be an AbortSignal");
          l.throwIfAborted(n3);
        } catch (e4) {
          return Promise.reject(e4);
        }
        return this.closed ? Promise.resolve(null) : new Promise((e4, t3) => {
          const s3 = n3 ? l.addAbortListener(n3, () => {
            this.destroy();
          }) : h;
          this.on("close", function() {
            s3(), n3 && n3.aborted ? t3(n3.reason || Object.assign(new Error("The operation was aborted"), { name: "AbortError" })) : e4(null);
          }).on("error", h).on("data", function(e5) {
            a3 -= e5.length, a3 <= 0 && this.destroy();
          }).resume();
        });
      }
    };
  }