// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 4260 range:395963..400917
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4260: (e2, n2, t2) => {
    "use strict";
    const a2 = t2(2613), { Readable: s2 } = t2(2203), { RequestAbortedError: o2, NotSupportedError: r, InvalidArgumentError: i } = t2(7902), A = t2(9361), { ReadableStreamFrom: c, toUSVString: l } = t2(9361);
    let d;
    const m = /* @__PURE__ */ Symbol("kConsume"), u = /* @__PURE__ */ Symbol("kReading"), g = /* @__PURE__ */ Symbol("kBody"), p = /* @__PURE__ */ Symbol("abort"), E = /* @__PURE__ */ Symbol("kContentType"), h = () => {
    };
    function T(e3) {
      return A.isDisturbed(e3) || (function(e4) {
        return e4[g] && true === e4[g].locked || e4[m];
      })(e3);
    }
    async function k(e3, n3) {
      if (T(e3)) throw new TypeError("unusable");
      return a2(!e3[m]), new Promise((t3, a3) => {
        e3[m] = { type: n3, stream: e3, resolve: t3, reject: a3, length: 0, body: [] }, e3.on("error", function(e4) {
          C(this[m], e4);
        }).on("close", function() {
          null !== this[m].body && C(this[m], new o2());
        }), process.nextTick(f, e3[m]);
      });
    }
    function f(e3) {
      if (null === e3.body) return;
      const { _readableState: n3 } = e3.stream;
      for (const t3 of n3.buffer) I(e3, t3);
      for (n3.endEmitted ? _(this[m]) : e3.stream.on("end", function() {
        _(this[m]);
      }), e3.stream.resume(); null != e3.stream.read(); ) ;
    }
    function _(e3) {
      const { type: n3, body: a3, resolve: s3, stream: o3, length: r2 } = e3;
      try {
        if ("text" === n3) s3(l(Buffer.concat(a3)));
        else if ("json" === n3) s3(JSON.parse(Buffer.concat(a3)));
        else if ("arrayBuffer" === n3) {
          const e4 = new Uint8Array(r2);
          let n4 = 0;
          for (const t3 of a3) e4.set(t3, n4), n4 += t3.byteLength;
          s3(e4.buffer);
        } else "blob" === n3 && (d || (d = t2(181).Blob), s3(new d(a3, { type: o3[E] })));
        C(e3);
      } catch (e4) {
        o3.destroy(e4);
      }
    }
    function I(e3, n3) {
      e3.length += n3.length, e3.body.push(n3);
    }
    function C(e3, n3) {
      null !== e3.body && (n3 ? e3.reject(n3) : e3.resolve(), e3.type = null, e3.stream = null, e3.resolve = null, e3.reject = null, e3.length = 0, e3.body = null);
    }
    e2.exports = class extends s2 {
      constructor({ resume: e3, abort: n3, contentType: t3 = "", highWaterMark: a3 = 65536 }) {
        super({ autoDestroy: true, read: e3, highWaterMark: a3 }), this._readableState.dataEmitted = false, this[p] = n3, this[m] = null, this[g] = null, this[E] = t3, this[u] = false;
      }
      destroy(e3) {
        return this.destroyed ? this : (e3 || this._readableState.endEmitted || (e3 = new o2()), e3 && this[p](), super.destroy(e3));
      }
      emit(e3, ...n3) {
        return "data" === e3 ? this._readableState.dataEmitted = true : "error" === e3 && (this._readableState.errorEmitted = true), super.emit(e3, ...n3);
      }
      on(e3, ...n3) {
        return "data" !== e3 && "readable" !== e3 || (this[u] = true), super.on(e3, ...n3);
      }
      addListener(e3, ...n3) {
        return this.on(e3, ...n3);
      }
      off(e3, ...n3) {
        const t3 = super.off(e3, ...n3);
        return "data" !== e3 && "readable" !== e3 || (this[u] = this.listenerCount("data") > 0 || this.listenerCount("readable") > 0), t3;
      }
      removeListener(e3, ...n3) {
        return this.off(e3, ...n3);
      }
      push(e3) {
        return this[m] && null !== e3 && 0 === this.readableLength ? (I(this[m], e3), !this[u] || super.push(e3)) : super.push(e3);
      }
      async text() {
        return k(this, "text");
      }
      async json() {
        return k(this, "json");
      }
      async blob() {
        return k(this, "blob");
      }
      async arrayBuffer() {
        return k(this, "arrayBuffer");
      }
      async formData() {
        throw new r();
      }
      get bodyUsed() {
        return A.isDisturbed(this);
      }
      get body() {
        return this[g] || (this[g] = c(this), this[m] && (this[g].getReader(), a2(this[g].locked))), this[g];
      }
      dump(e3) {
        let n3 = e3 && Number.isFinite(e3.limit) ? e3.limit : 262144;
        const t3 = e3 && e3.signal;
        if (t3) try {
          if ("object" != typeof t3 || !("aborted" in t3)) throw new i("signal must be an AbortSignal");
          A.throwIfAborted(t3);
        } catch (e4) {
          return Promise.reject(e4);
        }
        return this.closed ? Promise.resolve(null) : new Promise((e4, a3) => {
          const s3 = t3 ? A.addAbortListener(t3, () => {
            this.destroy();
          }) : h;
          this.on("close", function() {
            s3(), t3 && t3.aborted ? a3(t3.reason || Object.assign(new Error("The operation was aborted"), { name: "AbortError" })) : e4(null);
          }).on("error", h).on("data", function(e5) {
            n3 -= e5.length, n3 <= 0 && this.destroy();
          }).resume();
        });
      }
    };
  }