// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 5160 range:404243..409185
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
5160: (e, t, r) => {
    "use strict";
    const n = r(42613), { Readable: s } = r(2203), { RequestAbortedError: o, NotSupportedError: i, InvalidArgumentError: a } = r(48762), c = r(83589), { ReadableStreamFrom: l, toUSVString: u } = r(83589);
    let d;
    const p = /* @__PURE__ */ Symbol("kConsume"), m = /* @__PURE__ */ Symbol("kReading"), h = /* @__PURE__ */ Symbol("kBody"), f = /* @__PURE__ */ Symbol("abort"), g = /* @__PURE__ */ Symbol("kContentType"), y = () => {
    };
    function w(e2) {
      return c.isDisturbed(e2) || (function(e3) {
        return e3[h] && true === e3[h].locked || e3[p];
      })(e2);
    }
    async function v(e2, t2) {
      if (w(e2)) throw new TypeError("unusable");
      return n(!e2[p]), new Promise((r2, n2) => {
        e2[p] = { type: t2, stream: e2, resolve: r2, reject: n2, length: 0, body: [] }, e2.on("error", function(e3) {
          b(this[p], e3);
        }).on("close", function() {
          null !== this[p].body && b(this[p], new o());
        }), process.nextTick(_, e2[p]);
      });
    }
    function _(e2) {
      if (null === e2.body) return;
      const { _readableState: t2 } = e2.stream;
      for (const r2 of t2.buffer) S(e2, r2);
      for (t2.endEmitted ? A(this[p]) : e2.stream.on("end", function() {
        A(this[p]);
      }), e2.stream.resume(); null != e2.stream.read(); ) ;
    }
    function A(e2) {
      const { type: t2, body: n2, resolve: s2, stream: o2, length: i2 } = e2;
      try {
        if ("text" === t2) s2(u(Buffer.concat(n2)));
        else if ("json" === t2) s2(JSON.parse(Buffer.concat(n2)));
        else if ("arrayBuffer" === t2) {
          const e3 = new Uint8Array(i2);
          let t3 = 0;
          for (const r2 of n2) e3.set(r2, t3), t3 += r2.byteLength;
          s2(e3.buffer);
        } else "blob" === t2 && (d || (d = r(20181).Blob), s2(new d(n2, { type: o2[g] })));
        b(e2);
      } catch (e3) {
        o2.destroy(e3);
      }
    }
    function S(e2, t2) {
      e2.length += t2.length, e2.body.push(t2);
    }
    function b(e2, t2) {
      null !== e2.body && (t2 ? e2.reject(t2) : e2.resolve(), e2.type = null, e2.stream = null, e2.resolve = null, e2.reject = null, e2.length = 0, e2.body = null);
    }
    e.exports = class extends s {
      constructor({ resume: e2, abort: t2, contentType: r2 = "", highWaterMark: n2 = 65536 }) {
        super({ autoDestroy: true, read: e2, highWaterMark: n2 }), this._readableState.dataEmitted = false, this[f] = t2, this[p] = null, this[h] = null, this[g] = r2, this[m] = false;
      }
      destroy(e2) {
        return this.destroyed ? this : (e2 || this._readableState.endEmitted || (e2 = new o()), e2 && this[f](), super.destroy(e2));
      }
      emit(e2, ...t2) {
        return "data" === e2 ? this._readableState.dataEmitted = true : "error" === e2 && (this._readableState.errorEmitted = true), super.emit(e2, ...t2);
      }
      on(e2, ...t2) {
        return "data" !== e2 && "readable" !== e2 || (this[m] = true), super.on(e2, ...t2);
      }
      addListener(e2, ...t2) {
        return this.on(e2, ...t2);
      }
      off(e2, ...t2) {
        const r2 = super.off(e2, ...t2);
        return "data" !== e2 && "readable" !== e2 || (this[m] = this.listenerCount("data") > 0 || this.listenerCount("readable") > 0), r2;
      }
      removeListener(e2, ...t2) {
        return this.off(e2, ...t2);
      }
      push(e2) {
        return this[p] && null !== e2 && 0 === this.readableLength ? (S(this[p], e2), !this[m] || super.push(e2)) : super.push(e2);
      }
      async text() {
        return v(this, "text");
      }
      async json() {
        return v(this, "json");
      }
      async blob() {
        return v(this, "blob");
      }
      async arrayBuffer() {
        return v(this, "arrayBuffer");
      }
      async formData() {
        throw new i();
      }
      get bodyUsed() {
        return c.isDisturbed(this);
      }
      get body() {
        return this[h] || (this[h] = l(this), this[p] && (this[h].getReader(), n(this[h].locked))), this[h];
      }
      dump(e2) {
        let t2 = e2 && Number.isFinite(e2.limit) ? e2.limit : 262144;
        const r2 = e2 && e2.signal;
        if (r2) try {
          if ("object" != typeof r2 || !("aborted" in r2)) throw new a("signal must be an AbortSignal");
          c.throwIfAborted(r2);
        } catch (e3) {
          return Promise.reject(e3);
        }
        return this.closed ? Promise.resolve(null) : new Promise((e3, n2) => {
          const s2 = r2 ? c.addAbortListener(r2, () => {
            this.destroy();
          }) : y;
          this.on("close", function() {
            s2(), r2 && r2.aborted ? n2(r2.reason || Object.assign(new Error("The operation was aborted"), { name: "AbortError" })) : e3(null);
          }).on("error", y).on("data", function(e4) {
            t2 -= e4.length, t2 <= 0 && this.destroy();
          }).resume();
        });
      }
    };
  }