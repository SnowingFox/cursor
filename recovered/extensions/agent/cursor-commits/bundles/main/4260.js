// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 4260 range:388846..393804
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4260: (e2, n2, a2) => {
    "use strict";
    const t2 = a2(2613), { Readable: s2 } = a2(2203), { RequestAbortedError: o2, NotSupportedError: r2, InvalidArgumentError: i2 } = a2(7902), A = a2(9361), { ReadableStreamFrom: l, toUSVString: c } = a2(9361);
    let m;
    const d = /* @__PURE__ */ Symbol("kConsume"), g = /* @__PURE__ */ Symbol("kReading"), u = /* @__PURE__ */ Symbol("kBody"), E = /* @__PURE__ */ Symbol("abort"), p = /* @__PURE__ */ Symbol("kContentType"), T = () => {
    };
    function k(e3) {
      return A.isDisturbed(e3) || (function(e4) {
        return e4[u] && true === e4[u].locked || e4[d];
      })(e3);
    }
    async function I(e3, n3) {
      if (k(e3)) throw new TypeError("unusable");
      return t2(!e3[d]), new Promise((a3, t3) => {
        e3[d] = { type: n3, stream: e3, resolve: a3, reject: t3, length: 0, body: [] }, e3.on("error", function(e4) {
          f(this[d], e4);
        }).on("close", function() {
          null !== this[d].body && f(this[d], new o2());
        }), process.nextTick(h, e3[d]);
      });
    }
    function h(e3) {
      if (null === e3.body) return;
      const { _readableState: n3 } = e3.stream;
      for (const a3 of n3.buffer) C(e3, a3);
      for (n3.endEmitted ? _(this[d]) : e3.stream.on("end", function() {
        _(this[d]);
      }), e3.stream.resume(); null != e3.stream.read(); ) ;
    }
    function _(e3) {
      const { type: n3, body: t3, resolve: s3, stream: o3, length: r3 } = e3;
      try {
        if ("text" === n3) s3(c(Buffer.concat(t3)));
        else if ("json" === n3) s3(JSON.parse(Buffer.concat(t3)));
        else if ("arrayBuffer" === n3) {
          const e4 = new Uint8Array(r3);
          let n4 = 0;
          for (const a3 of t3) e4.set(a3, n4), n4 += a3.byteLength;
          s3(e4.buffer);
        } else "blob" === n3 && (m || (m = a2(181).Blob), s3(new m(t3, { type: o3[p] })));
        f(e3);
      } catch (e4) {
        o3.destroy(e4);
      }
    }
    function C(e3, n3) {
      e3.length += n3.length, e3.body.push(n3);
    }
    function f(e3, n3) {
      null !== e3.body && (n3 ? e3.reject(n3) : e3.resolve(), e3.type = null, e3.stream = null, e3.resolve = null, e3.reject = null, e3.length = 0, e3.body = null);
    }
    e2.exports = class extends s2 {
      constructor({ resume: e3, abort: n3, contentType: a3 = "", highWaterMark: t3 = 65536 }) {
        super({ autoDestroy: true, read: e3, highWaterMark: t3 }), this._readableState.dataEmitted = false, this[E] = n3, this[d] = null, this[u] = null, this[p] = a3, this[g] = false;
      }
      destroy(e3) {
        return this.destroyed ? this : (e3 || this._readableState.endEmitted || (e3 = new o2()), e3 && this[E](), super.destroy(e3));
      }
      emit(e3, ...n3) {
        return "data" === e3 ? this._readableState.dataEmitted = true : "error" === e3 && (this._readableState.errorEmitted = true), super.emit(e3, ...n3);
      }
      on(e3, ...n3) {
        return "data" !== e3 && "readable" !== e3 || (this[g] = true), super.on(e3, ...n3);
      }
      addListener(e3, ...n3) {
        return this.on(e3, ...n3);
      }
      off(e3, ...n3) {
        const a3 = super.off(e3, ...n3);
        return "data" !== e3 && "readable" !== e3 || (this[g] = this.listenerCount("data") > 0 || this.listenerCount("readable") > 0), a3;
      }
      removeListener(e3, ...n3) {
        return this.off(e3, ...n3);
      }
      push(e3) {
        return this[d] && null !== e3 && 0 === this.readableLength ? (C(this[d], e3), !this[g] || super.push(e3)) : super.push(e3);
      }
      async text() {
        return I(this, "text");
      }
      async json() {
        return I(this, "json");
      }
      async blob() {
        return I(this, "blob");
      }
      async arrayBuffer() {
        return I(this, "arrayBuffer");
      }
      async formData() {
        throw new r2();
      }
      get bodyUsed() {
        return A.isDisturbed(this);
      }
      get body() {
        return this[u] || (this[u] = l(this), this[d] && (this[u].getReader(), t2(this[u].locked))), this[u];
      }
      dump(e3) {
        let n3 = e3 && Number.isFinite(e3.limit) ? e3.limit : 262144;
        const a3 = e3 && e3.signal;
        if (a3) try {
          if ("object" != typeof a3 || !("aborted" in a3)) throw new i2("signal must be an AbortSignal");
          A.throwIfAborted(a3);
        } catch (e4) {
          return Promise.reject(e4);
        }
        return this.closed ? Promise.resolve(null) : new Promise((e4, t3) => {
          const s3 = a3 ? A.addAbortListener(a3, () => {
            this.destroy();
          }) : T;
          this.on("close", function() {
            s3(), a3 && a3.aborted ? t3(a3.reason || Object.assign(new Error("The operation was aborted"), { name: "AbortError" })) : e4(null);
          }).on("error", T).on("data", function(e5) {
            n3 -= e5.length, n3 <= 0 && this.destroy();
          }).resume();
        });
      }
    };
  }