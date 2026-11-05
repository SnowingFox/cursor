// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 1293 range:464481..472160
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1293: (t2, e2, r2) => {
    "use strict";
    const n2 = r2(3106), s2 = r2(9796), i2 = r2(9597), { kStatusCode: o2 } = r2(8864), a = Buffer[Symbol.species], u = Buffer.from([0, 0, 255, 255]), c = /* @__PURE__ */ Symbol("permessage-deflate"), l = /* @__PURE__ */ Symbol("total-length"), m = /* @__PURE__ */ Symbol("callback"), d = /* @__PURE__ */ Symbol("buffers"), f = /* @__PURE__ */ Symbol("error");
    let p;
    function h(t3) {
      this[d].push(t3), this[l] += t3.length;
    }
    function g(t3) {
      this[l] += t3.length, this[c]._maxPayload < 1 || this[l] <= this[c]._maxPayload ? this[d].push(t3) : (this[f] = new RangeError("Max payload size exceeded"), this[f].code = "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH", this[f][o2] = 1009, this.removeListener("data", g), this.reset());
    }
    function A(t3) {
      this[c]._inflate = null, this[f] ? this[m](this[f]) : (t3[o2] = 1007, this[m](t3));
    }
    t2.exports = class {
      constructor(t3) {
        if (this._options = t3 || {}, this._threshold = void 0 !== this._options.threshold ? this._options.threshold : 1024, this._maxPayload = 0 | this._options.maxPayload, this._isServer = !!this._options.isServer, this._deflate = null, this._inflate = null, this.params = null, !p) {
          const t4 = void 0 !== this._options.concurrencyLimit ? this._options.concurrencyLimit : 10;
          p = new i2(t4);
        }
      }
      static get extensionName() {
        return "permessage-deflate";
      }
      offer() {
        const t3 = {};
        return this._options.serverNoContextTakeover && (t3.server_no_context_takeover = true), this._options.clientNoContextTakeover && (t3.client_no_context_takeover = true), this._options.serverMaxWindowBits && (t3.server_max_window_bits = this._options.serverMaxWindowBits), this._options.clientMaxWindowBits ? t3.client_max_window_bits = this._options.clientMaxWindowBits : null == this._options.clientMaxWindowBits && (t3.client_max_window_bits = true), t3;
      }
      accept(t3) {
        return t3 = this.normalizeParams(t3), this.params = this._isServer ? this.acceptAsServer(t3) : this.acceptAsClient(t3), this.params;
      }
      cleanup() {
        if (this._inflate && (this._inflate.close(), this._inflate = null), this._deflate) {
          const t3 = this._deflate[m];
          this._deflate.close(), this._deflate = null, t3 && t3(new Error("The deflate stream was closed while data was being processed"));
        }
      }
      acceptAsServer(t3) {
        const e3 = this._options, r3 = t3.find((t4) => !(false === e3.serverNoContextTakeover && t4.server_no_context_takeover || t4.server_max_window_bits && (false === e3.serverMaxWindowBits || "number" == typeof e3.serverMaxWindowBits && e3.serverMaxWindowBits > t4.server_max_window_bits) || "number" == typeof e3.clientMaxWindowBits && ("number" == typeof t4.client_max_window_bits ? e3.clientMaxWindowBits > t4.client_max_window_bits : !t4.client_max_window_bits)));
        if (!r3) throw new Error("None of the extension offers can be accepted");
        return e3.serverNoContextTakeover && (r3.server_no_context_takeover = true), e3.clientNoContextTakeover && (r3.client_no_context_takeover = true), "number" == typeof e3.serverMaxWindowBits && (r3.server_max_window_bits = e3.serverMaxWindowBits), "number" == typeof e3.clientMaxWindowBits ? r3.client_max_window_bits = e3.clientMaxWindowBits : true !== r3.client_max_window_bits && false !== e3.clientMaxWindowBits || delete r3.client_max_window_bits, r3;
      }
      acceptAsClient(t3) {
        const e3 = t3[0];
        if (false === this._options.clientNoContextTakeover && e3.client_no_context_takeover) throw new Error('Unexpected parameter "client_no_context_takeover"');
        if (e3.client_max_window_bits) {
          if (false === this._options.clientMaxWindowBits || "number" == typeof this._options.clientMaxWindowBits && e3.client_max_window_bits > this._options.clientMaxWindowBits) throw new Error('Unexpected or invalid parameter "client_max_window_bits"');
        } else "number" == typeof this._options.clientMaxWindowBits && (e3.client_max_window_bits = this._options.clientMaxWindowBits);
        return e3;
      }
      normalizeParams(t3) {
        return t3.forEach((t4) => {
          Object.keys(t4).forEach((e3) => {
            let r3 = t4[e3];
            if (r3.length > 1) throw new Error(`Parameter "${e3}" must have only a single value`);
            if (r3 = r3[0], "client_max_window_bits" === e3) {
              if (true !== r3) {
                const t5 = +r3;
                if (!Number.isInteger(t5) || t5 < 8 || t5 > 15) throw new TypeError(`Invalid value for parameter "${e3}": ${r3}`);
                r3 = t5;
              } else if (!this._isServer) throw new TypeError(`Invalid value for parameter "${e3}": ${r3}`);
            } else if ("server_max_window_bits" === e3) {
              const t5 = +r3;
              if (!Number.isInteger(t5) || t5 < 8 || t5 > 15) throw new TypeError(`Invalid value for parameter "${e3}": ${r3}`);
              r3 = t5;
            } else {
              if ("client_no_context_takeover" !== e3 && "server_no_context_takeover" !== e3) throw new Error(`Unknown parameter "${e3}"`);
              if (true !== r3) throw new TypeError(`Invalid value for parameter "${e3}": ${r3}`);
            }
            t4[e3] = r3;
          });
        }), t3;
      }
      decompress(t3, e3, r3) {
        p.add((n3) => {
          this._decompress(t3, e3, (t4, e4) => {
            n3(), r3(t4, e4);
          });
        });
      }
      compress(t3, e3, r3) {
        p.add((n3) => {
          this._compress(t3, e3, (t4, e4) => {
            n3(), r3(t4, e4);
          });
        });
      }
      _decompress(t3, e3, r3) {
        const i3 = this._isServer ? "client" : "server";
        if (!this._inflate) {
          const t4 = `${i3}_max_window_bits`, e4 = "number" != typeof this.params[t4] ? n2.Z_DEFAULT_WINDOWBITS : this.params[t4];
          this._inflate = n2.createInflateRaw({ ...this._options.zlibInflateOptions, windowBits: e4 }), this._inflate[c] = this, this._inflate[l] = 0, this._inflate[d] = [], this._inflate.on("error", A), this._inflate.on("data", g);
        }
        this._inflate[m] = r3, this._inflate.write(t3), e3 && this._inflate.write(u), this._inflate.flush(() => {
          const t4 = this._inflate[f];
          if (t4) return this._inflate.close(), this._inflate = null, void r3(t4);
          const n3 = s2.concat(this._inflate[d], this._inflate[l]);
          this._inflate._readableState.endEmitted ? (this._inflate.close(), this._inflate = null) : (this._inflate[l] = 0, this._inflate[d] = [], e3 && this.params[`${i3}_no_context_takeover`] && this._inflate.reset()), r3(null, n3);
        });
      }
      _compress(t3, e3, r3) {
        const i3 = this._isServer ? "server" : "client";
        if (!this._deflate) {
          const t4 = `${i3}_max_window_bits`, e4 = "number" != typeof this.params[t4] ? n2.Z_DEFAULT_WINDOWBITS : this.params[t4];
          this._deflate = n2.createDeflateRaw({ ...this._options.zlibDeflateOptions, windowBits: e4 }), this._deflate[l] = 0, this._deflate[d] = [], this._deflate.on("data", h);
        }
        this._deflate[m] = r3, this._deflate.write(t3), this._deflate.flush(n2.Z_SYNC_FLUSH, () => {
          if (!this._deflate) return;
          let t4 = s2.concat(this._deflate[d], this._deflate[l]);
          e3 && (t4 = new a(t4.buffer, t4.byteOffset, t4.length - 4)), this._deflate[m] = null, this._deflate[l] = 0, this._deflate[d] = [], e3 && this.params[`${i3}_no_context_takeover`] && this._deflate.reset(), r3(null, t4);
        });
      }
    };
  }