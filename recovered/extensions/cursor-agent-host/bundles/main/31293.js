// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 31293 range:5070862..5078524
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
31293: (e, t, r) => {
    "use strict";
    const n = r(43106), s = r(39796), o = r(29597), { kStatusCode: i } = r(78864), a = Buffer[Symbol.species], c = Buffer.from([0, 0, 255, 255]), l = /* @__PURE__ */ Symbol("permessage-deflate"), u = /* @__PURE__ */ Symbol("total-length"), d = /* @__PURE__ */ Symbol("callback"), p = /* @__PURE__ */ Symbol("buffers"), m = /* @__PURE__ */ Symbol("error");
    let h;
    function f(e2) {
      this[p].push(e2), this[u] += e2.length;
    }
    function g(e2) {
      this[u] += e2.length, this[l]._maxPayload < 1 || this[u] <= this[l]._maxPayload ? this[p].push(e2) : (this[m] = new RangeError("Max payload size exceeded"), this[m].code = "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH", this[m][i] = 1009, this.removeListener("data", g), this.reset());
    }
    function y(e2) {
      this[l]._inflate = null, this[m] ? this[d](this[m]) : (e2[i] = 1007, this[d](e2));
    }
    e.exports = class {
      constructor(e2) {
        if (this._options = e2 || {}, this._threshold = void 0 !== this._options.threshold ? this._options.threshold : 1024, this._maxPayload = 0 | this._options.maxPayload, this._isServer = !!this._options.isServer, this._deflate = null, this._inflate = null, this.params = null, !h) {
          const e3 = void 0 !== this._options.concurrencyLimit ? this._options.concurrencyLimit : 10;
          h = new o(e3);
        }
      }
      static get extensionName() {
        return "permessage-deflate";
      }
      offer() {
        const e2 = {};
        return this._options.serverNoContextTakeover && (e2.server_no_context_takeover = true), this._options.clientNoContextTakeover && (e2.client_no_context_takeover = true), this._options.serverMaxWindowBits && (e2.server_max_window_bits = this._options.serverMaxWindowBits), this._options.clientMaxWindowBits ? e2.client_max_window_bits = this._options.clientMaxWindowBits : null == this._options.clientMaxWindowBits && (e2.client_max_window_bits = true), e2;
      }
      accept(e2) {
        return e2 = this.normalizeParams(e2), this.params = this._isServer ? this.acceptAsServer(e2) : this.acceptAsClient(e2), this.params;
      }
      cleanup() {
        if (this._inflate && (this._inflate.close(), this._inflate = null), this._deflate) {
          const e2 = this._deflate[d];
          this._deflate.close(), this._deflate = null, e2 && e2(new Error("The deflate stream was closed while data was being processed"));
        }
      }
      acceptAsServer(e2) {
        const t2 = this._options, r2 = e2.find((e3) => !(false === t2.serverNoContextTakeover && e3.server_no_context_takeover || e3.server_max_window_bits && (false === t2.serverMaxWindowBits || "number" == typeof t2.serverMaxWindowBits && t2.serverMaxWindowBits > e3.server_max_window_bits) || "number" == typeof t2.clientMaxWindowBits && ("number" == typeof e3.client_max_window_bits ? t2.clientMaxWindowBits > e3.client_max_window_bits : !e3.client_max_window_bits)));
        if (!r2) throw new Error("None of the extension offers can be accepted");
        return t2.serverNoContextTakeover && (r2.server_no_context_takeover = true), t2.clientNoContextTakeover && (r2.client_no_context_takeover = true), "number" == typeof t2.serverMaxWindowBits && (r2.server_max_window_bits = t2.serverMaxWindowBits), "number" == typeof t2.clientMaxWindowBits ? r2.client_max_window_bits = t2.clientMaxWindowBits : true !== r2.client_max_window_bits && false !== t2.clientMaxWindowBits || delete r2.client_max_window_bits, r2;
      }
      acceptAsClient(e2) {
        const t2 = e2[0];
        if (false === this._options.clientNoContextTakeover && t2.client_no_context_takeover) throw new Error('Unexpected parameter "client_no_context_takeover"');
        if (t2.client_max_window_bits) {
          if (false === this._options.clientMaxWindowBits || "number" == typeof this._options.clientMaxWindowBits && t2.client_max_window_bits > this._options.clientMaxWindowBits) throw new Error('Unexpected or invalid parameter "client_max_window_bits"');
        } else "number" == typeof this._options.clientMaxWindowBits && (t2.client_max_window_bits = this._options.clientMaxWindowBits);
        return t2;
      }
      normalizeParams(e2) {
        return e2.forEach((e3) => {
          Object.keys(e3).forEach((t2) => {
            let r2 = e3[t2];
            if (r2.length > 1) throw new Error(`Parameter "${t2}" must have only a single value`);
            if (r2 = r2[0], "client_max_window_bits" === t2) {
              if (true !== r2) {
                const e4 = +r2;
                if (!Number.isInteger(e4) || e4 < 8 || e4 > 15) throw new TypeError(`Invalid value for parameter "${t2}": ${r2}`);
                r2 = e4;
              } else if (!this._isServer) throw new TypeError(`Invalid value for parameter "${t2}": ${r2}`);
            } else if ("server_max_window_bits" === t2) {
              const e4 = +r2;
              if (!Number.isInteger(e4) || e4 < 8 || e4 > 15) throw new TypeError(`Invalid value for parameter "${t2}": ${r2}`);
              r2 = e4;
            } else {
              if ("client_no_context_takeover" !== t2 && "server_no_context_takeover" !== t2) throw new Error(`Unknown parameter "${t2}"`);
              if (true !== r2) throw new TypeError(`Invalid value for parameter "${t2}": ${r2}`);
            }
            e3[t2] = r2;
          });
        }), e2;
      }
      decompress(e2, t2, r2) {
        h.add((n2) => {
          this._decompress(e2, t2, (e3, t3) => {
            n2(), r2(e3, t3);
          });
        });
      }
      compress(e2, t2, r2) {
        h.add((n2) => {
          this._compress(e2, t2, (e3, t3) => {
            n2(), r2(e3, t3);
          });
        });
      }
      _decompress(e2, t2, r2) {
        const o2 = this._isServer ? "client" : "server";
        if (!this._inflate) {
          const e3 = `${o2}_max_window_bits`, t3 = "number" != typeof this.params[e3] ? n.Z_DEFAULT_WINDOWBITS : this.params[e3];
          this._inflate = n.createInflateRaw({ ...this._options.zlibInflateOptions, windowBits: t3 }), this._inflate[l] = this, this._inflate[u] = 0, this._inflate[p] = [], this._inflate.on("error", y), this._inflate.on("data", g);
        }
        this._inflate[d] = r2, this._inflate.write(e2), t2 && this._inflate.write(c), this._inflate.flush(() => {
          const e3 = this._inflate[m];
          if (e3) return this._inflate.close(), this._inflate = null, void r2(e3);
          const n2 = s.concat(this._inflate[p], this._inflate[u]);
          this._inflate._readableState.endEmitted ? (this._inflate.close(), this._inflate = null) : (this._inflate[u] = 0, this._inflate[p] = [], t2 && this.params[`${o2}_no_context_takeover`] && this._inflate.reset()), r2(null, n2);
        });
      }
      _compress(e2, t2, r2) {
        const o2 = this._isServer ? "server" : "client";
        if (!this._deflate) {
          const e3 = `${o2}_max_window_bits`, t3 = "number" != typeof this.params[e3] ? n.Z_DEFAULT_WINDOWBITS : this.params[e3];
          this._deflate = n.createDeflateRaw({ ...this._options.zlibDeflateOptions, windowBits: t3 }), this._deflate[u] = 0, this._deflate[p] = [], this._deflate.on("data", f);
        }
        this._deflate[d] = r2, this._deflate.write(e2), this._deflate.flush(n.Z_SYNC_FLUSH, () => {
          if (!this._deflate) return;
          let e3 = s.concat(this._deflate[p], this._deflate[u]);
          t2 && (e3 = new a(e3.buffer, e3.byteOffset, e3.length - 4)), this._deflate[d] = null, this._deflate[u] = 0, this._deflate[p] = [], t2 && this.params[`${o2}_no_context_takeover`] && this._deflate.reset(), r2(null, e3);
        });
      }
    };
  }