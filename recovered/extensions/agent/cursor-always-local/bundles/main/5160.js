// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 5160 range:1220997..1225953
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5160: (t2, e2, r2) => {
    "use strict";
    const n2 = r2(2613), { Readable: s2 } = r2(2203), { RequestAbortedError: i2, NotSupportedError: o2, InvalidArgumentError: a } = r2(8762), u = r2(3589), { ReadableStreamFrom: c, toUSVString: l } = r2(3589);
    let m;
    const d = /* @__PURE__ */ Symbol("kConsume"), f = /* @__PURE__ */ Symbol("kReading"), p = /* @__PURE__ */ Symbol("kBody"), h = /* @__PURE__ */ Symbol("abort"), g = /* @__PURE__ */ Symbol("kContentType"), A = () => {
    };
    function _(t3) {
      return u.isDisturbed(t3) || (function(t4) {
        return t4[p] && true === t4[p].locked || t4[d];
      })(t3);
    }
    async function y(t3, e3) {
      if (_(t3)) throw new TypeError("unusable");
      return n2(!t3[d]), new Promise((r3, n3) => {
        t3[d] = { type: e3, stream: t3, resolve: r3, reject: n3, length: 0, body: [] }, t3.on("error", function(t4) {
          B(this[d], t4);
        }).on("close", function() {
          null !== this[d].body && B(this[d], new i2());
        }), process.nextTick(w, t3[d]);
      });
    }
    function w(t3) {
      if (null === t3.body) return;
      const { _readableState: e3 } = t3.stream;
      for (const r3 of e3.buffer) J(t3, r3);
      for (e3.endEmitted ? S(this[d]) : t3.stream.on("end", function() {
        S(this[d]);
      }), t3.stream.resume(); null != t3.stream.read(); ) ;
    }
    function S(t3) {
      const { type: e3, body: n3, resolve: s3, stream: i3, length: o3 } = t3;
      try {
        if ("text" === e3) s3(l(Buffer.concat(n3)));
        else if ("json" === e3) s3(JSON.parse(Buffer.concat(n3)));
        else if ("arrayBuffer" === e3) {
          const t4 = new Uint8Array(o3);
          let e4 = 0;
          for (const r3 of n3) t4.set(r3, e4), e4 += r3.byteLength;
          s3(t4.buffer);
        } else "blob" === e3 && (m || (m = r2(181).Blob), s3(new m(n3, { type: i3[g] })));
        B(t3);
      } catch (t4) {
        i3.destroy(t4);
      }
    }
    function J(t3, e3) {
      t3.length += e3.length, t3.body.push(e3);
    }
    function B(t3, e3) {
      null !== t3.body && (e3 ? t3.reject(e3) : t3.resolve(), t3.type = null, t3.stream = null, t3.resolve = null, t3.reject = null, t3.length = 0, t3.body = null);
    }
    t2.exports = class extends s2 {
      constructor({ resume: t3, abort: e3, contentType: r3 = "", highWaterMark: n3 = 65536 }) {
        super({ autoDestroy: true, read: t3, highWaterMark: n3 }), this._readableState.dataEmitted = false, this[h] = e3, this[d] = null, this[p] = null, this[g] = r3, this[f] = false;
      }
      destroy(t3) {
        return this.destroyed ? this : (t3 || this._readableState.endEmitted || (t3 = new i2()), t3 && this[h](), super.destroy(t3));
      }
      emit(t3, ...e3) {
        return "data" === t3 ? this._readableState.dataEmitted = true : "error" === t3 && (this._readableState.errorEmitted = true), super.emit(t3, ...e3);
      }
      on(t3, ...e3) {
        return "data" !== t3 && "readable" !== t3 || (this[f] = true), super.on(t3, ...e3);
      }
      addListener(t3, ...e3) {
        return this.on(t3, ...e3);
      }
      off(t3, ...e3) {
        const r3 = super.off(t3, ...e3);
        return "data" !== t3 && "readable" !== t3 || (this[f] = this.listenerCount("data") > 0 || this.listenerCount("readable") > 0), r3;
      }
      removeListener(t3, ...e3) {
        return this.off(t3, ...e3);
      }
      push(t3) {
        return this[d] && null !== t3 && 0 === this.readableLength ? (J(this[d], t3), !this[f] || super.push(t3)) : super.push(t3);
      }
      async text() {
        return y(this, "text");
      }
      async json() {
        return y(this, "json");
      }
      async blob() {
        return y(this, "blob");
      }
      async arrayBuffer() {
        return y(this, "arrayBuffer");
      }
      async formData() {
        throw new o2();
      }
      get bodyUsed() {
        return u.isDisturbed(this);
      }
      get body() {
        return this[p] || (this[p] = c(this), this[d] && (this[p].getReader(), n2(this[p].locked))), this[p];
      }
      dump(t3) {
        let e3 = t3 && Number.isFinite(t3.limit) ? t3.limit : 262144;
        const r3 = t3 && t3.signal;
        if (r3) try {
          if ("object" != typeof r3 || !("aborted" in r3)) throw new a("signal must be an AbortSignal");
          u.throwIfAborted(r3);
        } catch (t4) {
          return Promise.reject(t4);
        }
        return this.closed ? Promise.resolve(null) : new Promise((t4, n3) => {
          const s3 = r3 ? u.addAbortListener(r3, () => {
            this.destroy();
          }) : A;
          this.on("close", function() {
            s3(), r3 && r3.aborted ? n3(r3.reason || Object.assign(new Error("The operation was aborted"), { name: "AbortError" })) : t4(null);
          }).on("error", A).on("data", function(t5) {
            e3 -= t5.length, e3 <= 0 && this.destroy();
          }).resume();
        });
      }
    };
  }