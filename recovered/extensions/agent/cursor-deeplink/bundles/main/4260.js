// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 4260 range:491888..496842
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4260: (e2, t2, A2) => {
    "use strict";
    const n2 = A2(2613), { Readable: r2 } = A2(2203), { RequestAbortedError: o2, NotSupportedError: s, InvalidArgumentError: i } = A2(7902), a = A2(9361), { ReadableStreamFrom: c, toUSVString: l } = A2(9361);
    let u;
    const g = /* @__PURE__ */ Symbol("kConsume"), E = /* @__PURE__ */ Symbol("kReading"), h = /* @__PURE__ */ Symbol("kBody"), d = /* @__PURE__ */ Symbol("abort"), I = /* @__PURE__ */ Symbol("kContentType"), B = () => {
    };
    function Q(e3) {
      return a.isDisturbed(e3) || (function(e4) {
        return e4[h] && true === e4[h].locked || e4[g];
      })(e3);
    }
    async function f(e3, t3) {
      if (Q(e3)) throw new TypeError("unusable");
      return n2(!e3[g]), new Promise((A3, n3) => {
        e3[g] = { type: t3, stream: e3, resolve: A3, reject: n3, length: 0, body: [] }, e3.on("error", function(e4) {
          y(this[g], e4);
        }).on("close", function() {
          null !== this[g].body && y(this[g], new o2());
        }), process.nextTick(C, e3[g]);
      });
    }
    function C(e3) {
      if (null === e3.body) return;
      const { _readableState: t3 } = e3.stream;
      for (const A3 of t3.buffer) m(e3, A3);
      for (t3.endEmitted ? p(this[g]) : e3.stream.on("end", function() {
        p(this[g]);
      }), e3.stream.resume(); null != e3.stream.read(); ) ;
    }
    function p(e3) {
      const { type: t3, body: n3, resolve: r3, stream: o3, length: s2 } = e3;
      try {
        if ("text" === t3) r3(l(Buffer.concat(n3)));
        else if ("json" === t3) r3(JSON.parse(Buffer.concat(n3)));
        else if ("arrayBuffer" === t3) {
          const e4 = new Uint8Array(s2);
          let t4 = 0;
          for (const A3 of n3) e4.set(A3, t4), t4 += A3.byteLength;
          r3(e4.buffer);
        } else "blob" === t3 && (u || (u = A2(181).Blob), r3(new u(n3, { type: o3[I] })));
        y(e3);
      } catch (e4) {
        o3.destroy(e4);
      }
    }
    function m(e3, t3) {
      e3.length += t3.length, e3.body.push(t3);
    }
    function y(e3, t3) {
      null !== e3.body && (t3 ? e3.reject(t3) : e3.resolve(), e3.type = null, e3.stream = null, e3.resolve = null, e3.reject = null, e3.length = 0, e3.body = null);
    }
    e2.exports = class extends r2 {
      constructor({ resume: e3, abort: t3, contentType: A3 = "", highWaterMark: n3 = 65536 }) {
        super({ autoDestroy: true, read: e3, highWaterMark: n3 }), this._readableState.dataEmitted = false, this[d] = t3, this[g] = null, this[h] = null, this[I] = A3, this[E] = false;
      }
      destroy(e3) {
        return this.destroyed ? this : (e3 || this._readableState.endEmitted || (e3 = new o2()), e3 && this[d](), super.destroy(e3));
      }
      emit(e3, ...t3) {
        return "data" === e3 ? this._readableState.dataEmitted = true : "error" === e3 && (this._readableState.errorEmitted = true), super.emit(e3, ...t3);
      }
      on(e3, ...t3) {
        return "data" !== e3 && "readable" !== e3 || (this[E] = true), super.on(e3, ...t3);
      }
      addListener(e3, ...t3) {
        return this.on(e3, ...t3);
      }
      off(e3, ...t3) {
        const A3 = super.off(e3, ...t3);
        return "data" !== e3 && "readable" !== e3 || (this[E] = this.listenerCount("data") > 0 || this.listenerCount("readable") > 0), A3;
      }
      removeListener(e3, ...t3) {
        return this.off(e3, ...t3);
      }
      push(e3) {
        return this[g] && null !== e3 && 0 === this.readableLength ? (m(this[g], e3), !this[E] || super.push(e3)) : super.push(e3);
      }
      async text() {
        return f(this, "text");
      }
      async json() {
        return f(this, "json");
      }
      async blob() {
        return f(this, "blob");
      }
      async arrayBuffer() {
        return f(this, "arrayBuffer");
      }
      async formData() {
        throw new s();
      }
      get bodyUsed() {
        return a.isDisturbed(this);
      }
      get body() {
        return this[h] || (this[h] = c(this), this[g] && (this[h].getReader(), n2(this[h].locked))), this[h];
      }
      dump(e3) {
        let t3 = e3 && Number.isFinite(e3.limit) ? e3.limit : 262144;
        const A3 = e3 && e3.signal;
        if (A3) try {
          if ("object" != typeof A3 || !("aborted" in A3)) throw new i("signal must be an AbortSignal");
          a.throwIfAborted(A3);
        } catch (e4) {
          return Promise.reject(e4);
        }
        return this.closed ? Promise.resolve(null) : new Promise((e4, n3) => {
          const r3 = A3 ? a.addAbortListener(A3, () => {
            this.destroy();
          }) : B;
          this.on("close", function() {
            r3(), A3 && A3.aborted ? n3(A3.reason || Object.assign(new Error("The operation was aborted"), { name: "AbortError" })) : e4(null);
          }).on("error", B).on("data", function(e5) {
            t3 -= e5.length, t3 <= 0 && this.destroy();
          }).resume();
        });
      }
    };
  }