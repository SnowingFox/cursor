// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 4260 range:388542..393496
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4260: (e2, A2, t2) => {
    "use strict";
    const n2 = t2(2613), { Readable: r2 } = t2(2203), { RequestAbortedError: o2, NotSupportedError: s, InvalidArgumentError: a } = t2(7902), i = t2(9361), { ReadableStreamFrom: c, toUSVString: l } = t2(9361);
    let g;
    const E = /* @__PURE__ */ Symbol("kConsume"), u = /* @__PURE__ */ Symbol("kReading"), d = /* @__PURE__ */ Symbol("kBody"), I = /* @__PURE__ */ Symbol("abort"), h = /* @__PURE__ */ Symbol("kContentType"), Q = () => {
    };
    function m(e3) {
      return i.isDisturbed(e3) || (function(e4) {
        return e4[d] && true === e4[d].locked || e4[E];
      })(e3);
    }
    async function C(e3, A3) {
      if (m(e3)) throw new TypeError("unusable");
      return n2(!e3[E]), new Promise((t3, n3) => {
        e3[E] = { type: A3, stream: e3, resolve: t3, reject: n3, length: 0, body: [] }, e3.on("error", function(e4) {
          y(this[E], e4);
        }).on("close", function() {
          null !== this[E].body && y(this[E], new o2());
        }), process.nextTick(B, e3[E]);
      });
    }
    function B(e3) {
      if (null === e3.body) return;
      const { _readableState: A3 } = e3.stream;
      for (const t3 of A3.buffer) f(e3, t3);
      for (A3.endEmitted ? p(this[E]) : e3.stream.on("end", function() {
        p(this[E]);
      }), e3.stream.resume(); null != e3.stream.read(); ) ;
    }
    function p(e3) {
      const { type: A3, body: n3, resolve: r3, stream: o3, length: s2 } = e3;
      try {
        if ("text" === A3) r3(l(Buffer.concat(n3)));
        else if ("json" === A3) r3(JSON.parse(Buffer.concat(n3)));
        else if ("arrayBuffer" === A3) {
          const e4 = new Uint8Array(s2);
          let A4 = 0;
          for (const t3 of n3) e4.set(t3, A4), A4 += t3.byteLength;
          r3(e4.buffer);
        } else "blob" === A3 && (g || (g = t2(181).Blob), r3(new g(n3, { type: o3[h] })));
        y(e3);
      } catch (e4) {
        o3.destroy(e4);
      }
    }
    function f(e3, A3) {
      e3.length += A3.length, e3.body.push(A3);
    }
    function y(e3, A3) {
      null !== e3.body && (A3 ? e3.reject(A3) : e3.resolve(), e3.type = null, e3.stream = null, e3.resolve = null, e3.reject = null, e3.length = 0, e3.body = null);
    }
    e2.exports = class extends r2 {
      constructor({ resume: e3, abort: A3, contentType: t3 = "", highWaterMark: n3 = 65536 }) {
        super({ autoDestroy: true, read: e3, highWaterMark: n3 }), this._readableState.dataEmitted = false, this[I] = A3, this[E] = null, this[d] = null, this[h] = t3, this[u] = false;
      }
      destroy(e3) {
        return this.destroyed ? this : (e3 || this._readableState.endEmitted || (e3 = new o2()), e3 && this[I](), super.destroy(e3));
      }
      emit(e3, ...A3) {
        return "data" === e3 ? this._readableState.dataEmitted = true : "error" === e3 && (this._readableState.errorEmitted = true), super.emit(e3, ...A3);
      }
      on(e3, ...A3) {
        return "data" !== e3 && "readable" !== e3 || (this[u] = true), super.on(e3, ...A3);
      }
      addListener(e3, ...A3) {
        return this.on(e3, ...A3);
      }
      off(e3, ...A3) {
        const t3 = super.off(e3, ...A3);
        return "data" !== e3 && "readable" !== e3 || (this[u] = this.listenerCount("data") > 0 || this.listenerCount("readable") > 0), t3;
      }
      removeListener(e3, ...A3) {
        return this.off(e3, ...A3);
      }
      push(e3) {
        return this[E] && null !== e3 && 0 === this.readableLength ? (f(this[E], e3), !this[u] || super.push(e3)) : super.push(e3);
      }
      async text() {
        return C(this, "text");
      }
      async json() {
        return C(this, "json");
      }
      async blob() {
        return C(this, "blob");
      }
      async arrayBuffer() {
        return C(this, "arrayBuffer");
      }
      async formData() {
        throw new s();
      }
      get bodyUsed() {
        return i.isDisturbed(this);
      }
      get body() {
        return this[d] || (this[d] = c(this), this[E] && (this[d].getReader(), n2(this[d].locked))), this[d];
      }
      dump(e3) {
        let A3 = e3 && Number.isFinite(e3.limit) ? e3.limit : 262144;
        const t3 = e3 && e3.signal;
        if (t3) try {
          if ("object" != typeof t3 || !("aborted" in t3)) throw new a("signal must be an AbortSignal");
          i.throwIfAborted(t3);
        } catch (e4) {
          return Promise.reject(e4);
        }
        return this.closed ? Promise.resolve(null) : new Promise((e4, n3) => {
          const r3 = t3 ? i.addAbortListener(t3, () => {
            this.destroy();
          }) : Q;
          this.on("close", function() {
            r3(), t3 && t3.aborted ? n3(t3.reason || Object.assign(new Error("The operation was aborted"), { name: "AbortError" })) : e4(null);
          }).on("error", Q).on("data", function(e5) {
            A3 -= e5.length, A3 <= 0 && this.destroy();
          }).resume();
        });
      }
    };
  }