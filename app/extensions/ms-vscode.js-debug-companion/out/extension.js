"use strict";
var Eo = Object.create;
var Me = Object.defineProperty;
var vo = Object.getOwnPropertyDescriptor;
var bo = Object.getOwnPropertyNames;
var Co = Object.getPrototypeOf, Po = Object.prototype.hasOwnProperty;
var f = (t3, e) => () => (e || t3((e = { exports: {} }).exports, e), e.exports), Oo = (t3, e) => {
  for (var r in e) Me(t3, r, { get: e[r], enumerable: true });
}, Hr = (t3, e, r, s) => {
  if (e && typeof e == "object" || typeof e == "function") for (let n of bo(e)) !Po.call(t3, n) && n !== r && Me(t3, n, { get: () => e[n], enumerable: !(s = vo(e, n)) || s.enumerable });
  return t3;
};
var S = (t3, e, r) => (r = t3 != null ? Eo(Co(t3)) : {}, Hr(e || !t3 || !t3.__esModule ? Me(r, "default", { value: t3, enumerable: true }) : r, t3)), To = (t3) => Hr(Me({}, "__esModule", { value: true }), t3);
var is = f((Vu, ns) => {
  "use strict";
  var { Duplex: qo } = require("stream");
  function rs(t3) {
    t3.emit("close");
  }
  function No() {
    !this.destroyed && this._writableState.finished && this.destroy();
  }
  function ss(t3) {
    this.removeListener("error", ss), this.destroy(), this.listenerCount("error") === 0 && this.emit("error", t3);
  }
  function Mo(t3, e) {
    let r = true, s = new qo({ ...e, autoDestroy: false, emitClose: false, objectMode: false, writableObjectMode: false });
    return t3.on("message", function(i, o) {
      let a = !o && s._readableState.objectMode ? i.toString() : i;
      s.push(a) || t3.pause();
    }), t3.once("error", function(i) {
      s.destroyed || (r = false, s.destroy(i));
    }), t3.once("close", function() {
      s.destroyed || s.push(null);
    }), s._destroy = function(n, i) {
      if (t3.readyState === t3.CLOSED) {
        i(n), process.nextTick(rs, s);
        return;
      }
      let o = false;
      t3.once("error", function(c) {
        o = true, i(c);
      }), t3.once("close", function() {
        o || i(n), process.nextTick(rs, s);
      }), r && t3.terminate();
    }, s._final = function(n) {
      if (t3.readyState === t3.CONNECTING) {
        t3.once("open", function() {
          s._final(n);
        });
        return;
      }
      t3._socket !== null && (t3._socket._writableState.finished ? (n(), s._readableState.endEmitted && s.destroy()) : (t3._socket.once("finish", function() {
        n();
      }), t3.close()));
    }, s._read = function() {
      t3.isPaused && t3.resume();
    }, s._write = function(n, i, o) {
      if (t3.readyState === t3.CONNECTING) {
        t3.once("open", function() {
          s._write(n, i, o);
        });
        return;
      }
      t3.send(n, o);
    }, s.on("end", No), s.on("error", ss), s;
  }
  ns.exports = Mo;
});
var U = f((zu, os) => {
  "use strict";
  os.exports = { BINARY_TYPES: ["nodebuffer", "arraybuffer", "fragments"], EMPTY_BUFFER: Buffer.alloc(0), GUID: "258EAFA5-E914-47DA-95CA-C5AB0DC85B11", kForOnEventAttribute: /* @__PURE__ */ Symbol("kIsForOnEventAttribute"), kListener: /* @__PURE__ */ Symbol("kListener"), kStatusCode: /* @__PURE__ */ Symbol("status-code"), kWebSocket: /* @__PURE__ */ Symbol("websocket"), NOOP: () => {
  } };
});
var ge = f((Ku, Ue) => {
  "use strict";
  var { EMPTY_BUFFER: Fo } = U(), Gt = Buffer[Symbol.species];
  function Do(t3, e) {
    if (t3.length === 0) return Fo;
    if (t3.length === 1) return t3[0];
    let r = Buffer.allocUnsafe(e), s = 0;
    for (let n = 0; n < t3.length; n++) {
      let i = t3[n];
      r.set(i, s), s += i.length;
    }
    return s < e ? new Gt(r.buffer, r.byteOffset, s) : r;
  }
  function as(t3, e, r, s, n) {
    for (let i = 0; i < n; i++) r[s + i] = t3[i] ^ e[i & 3];
  }
  function cs(t3, e) {
    for (let r = 0; r < t3.length; r++) t3[r] ^= e[r & 3];
  }
  function $o(t3) {
    return t3.length === t3.buffer.byteLength ? t3.buffer : t3.buffer.slice(t3.byteOffset, t3.byteOffset + t3.length);
  }
  function Wt(t3) {
    if (Wt.readOnly = true, Buffer.isBuffer(t3)) return t3;
    let e;
    return t3 instanceof ArrayBuffer ? e = new Gt(t3) : ArrayBuffer.isView(t3) ? e = new Gt(t3.buffer, t3.byteOffset, t3.byteLength) : (e = Buffer.from(t3), Wt.readOnly = false), e;
  }
  Ue.exports = { concat: Do, mask: as, toArrayBuffer: $o, toBuffer: Wt, unmask: cs };
  if (!process.env.WS_NO_BUFFER_UTIL) try {
    let t3 = require("bufferutil");
    Ue.exports.mask = function(e, r, s, n, i) {
      i < 48 ? as(e, r, s, n, i) : t3.mask(e, r, s, n, i);
    }, Ue.exports.unmask = function(e, r) {
      e.length < 32 ? cs(e, r) : t3.unmask(e, r);
    };
  } catch {
  }
});
var fs = f((Xu, us) => {
  "use strict";
  var ls = /* @__PURE__ */ Symbol("kDone"), jt = /* @__PURE__ */ Symbol("kRun"), Ht = class {
    constructor(e) {
      this[ls] = () => {
        this.pending--, this[jt]();
      }, this.concurrency = e || 1 / 0, this.jobs = [], this.pending = 0;
    }
    add(e) {
      this.jobs.push(e), this[jt]();
    }
    [jt]() {
      if (this.pending !== this.concurrency && this.jobs.length) {
        let e = this.jobs.shift();
        this.pending++, e(this[ls]);
      }
    }
  };
  us.exports = Ht;
});
var we = f((Yu, ms) => {
  "use strict";
  var ye = require("zlib"), ds = ge(), Uo = fs(), { kStatusCode: hs } = U(), Go = Buffer[Symbol.species], Wo = Buffer.from([0, 0, 255, 255]), je = /* @__PURE__ */ Symbol("permessage-deflate"), q = /* @__PURE__ */ Symbol("total-length"), _e = /* @__PURE__ */ Symbol("callback"), G = /* @__PURE__ */ Symbol("buffers"), We = /* @__PURE__ */ Symbol("error"), Ge, Vt = class {
    constructor(e, r, s) {
      if (this._maxPayload = s | 0, this._options = e || {}, this._threshold = this._options.threshold !== void 0 ? this._options.threshold : 1024, this._isServer = !!r, this._deflate = null, this._inflate = null, this.params = null, !Ge) {
        let n = this._options.concurrencyLimit !== void 0 ? this._options.concurrencyLimit : 10;
        Ge = new Uo(n);
      }
    }
    static get extensionName() {
      return "permessage-deflate";
    }
    offer() {
      let e = {};
      return this._options.serverNoContextTakeover && (e.server_no_context_takeover = true), this._options.clientNoContextTakeover && (e.client_no_context_takeover = true), this._options.serverMaxWindowBits && (e.server_max_window_bits = this._options.serverMaxWindowBits), this._options.clientMaxWindowBits ? e.client_max_window_bits = this._options.clientMaxWindowBits : this._options.clientMaxWindowBits == null && (e.client_max_window_bits = true), e;
    }
    accept(e) {
      return e = this.normalizeParams(e), this.params = this._isServer ? this.acceptAsServer(e) : this.acceptAsClient(e), this.params;
    }
    cleanup() {
      if (this._inflate && (this._inflate.close(), this._inflate = null), this._deflate) {
        let e = this._deflate[_e];
        this._deflate.close(), this._deflate = null, e && e(new Error("The deflate stream was closed while data was being processed"));
      }
    }
    acceptAsServer(e) {
      let r = this._options, s = e.find((n) => !(r.serverNoContextTakeover === false && n.server_no_context_takeover || n.server_max_window_bits && (r.serverMaxWindowBits === false || typeof r.serverMaxWindowBits == "number" && r.serverMaxWindowBits > n.server_max_window_bits) || typeof r.clientMaxWindowBits == "number" && !n.client_max_window_bits));
      if (!s) throw new Error("None of the extension offers can be accepted");
      return r.serverNoContextTakeover && (s.server_no_context_takeover = true), r.clientNoContextTakeover && (s.client_no_context_takeover = true), typeof r.serverMaxWindowBits == "number" && (s.server_max_window_bits = r.serverMaxWindowBits), typeof r.clientMaxWindowBits == "number" ? s.client_max_window_bits = r.clientMaxWindowBits : (s.client_max_window_bits === true || r.clientMaxWindowBits === false) && delete s.client_max_window_bits, s;
    }
    acceptAsClient(e) {
      let r = e[0];
      if (this._options.clientNoContextTakeover === false && r.client_no_context_takeover) throw new Error('Unexpected parameter "client_no_context_takeover"');
      if (!r.client_max_window_bits) typeof this._options.clientMaxWindowBits == "number" && (r.client_max_window_bits = this._options.clientMaxWindowBits);
      else if (this._options.clientMaxWindowBits === false || typeof this._options.clientMaxWindowBits == "number" && r.client_max_window_bits > this._options.clientMaxWindowBits) throw new Error('Unexpected or invalid parameter "client_max_window_bits"');
      return r;
    }
    normalizeParams(e) {
      return e.forEach((r) => {
        Object.keys(r).forEach((s) => {
          let n = r[s];
          if (n.length > 1) throw new Error(`Parameter "${s}" must have only a single value`);
          if (n = n[0], s === "client_max_window_bits") {
            if (n !== true) {
              let i = +n;
              if (!Number.isInteger(i) || i < 8 || i > 15) throw new TypeError(`Invalid value for parameter "${s}": ${n}`);
              n = i;
            } else if (!this._isServer) throw new TypeError(`Invalid value for parameter "${s}": ${n}`);
          } else if (s === "server_max_window_bits") {
            let i = +n;
            if (!Number.isInteger(i) || i < 8 || i > 15) throw new TypeError(`Invalid value for parameter "${s}": ${n}`);
            n = i;
          } else if (s === "client_no_context_takeover" || s === "server_no_context_takeover") {
            if (n !== true) throw new TypeError(`Invalid value for parameter "${s}": ${n}`);
          } else throw new Error(`Unknown parameter "${s}"`);
          r[s] = n;
        });
      }), e;
    }
    decompress(e, r, s) {
      Ge.add((n) => {
        this._decompress(e, r, (i, o) => {
          n(), s(i, o);
        });
      });
    }
    compress(e, r, s) {
      Ge.add((n) => {
        this._compress(e, r, (i, o) => {
          n(), s(i, o);
        });
      });
    }
    _decompress(e, r, s) {
      let n = this._isServer ? "client" : "server";
      if (!this._inflate) {
        let i = `${n}_max_window_bits`, o = typeof this.params[i] != "number" ? ye.Z_DEFAULT_WINDOWBITS : this.params[i];
        this._inflate = ye.createInflateRaw({ ...this._options.zlibInflateOptions, windowBits: o }), this._inflate[je] = this, this._inflate[q] = 0, this._inflate[G] = [], this._inflate.on("error", Ho), this._inflate.on("data", ps);
      }
      this._inflate[_e] = s, this._inflate.write(e), r && this._inflate.write(Wo), this._inflate.flush(() => {
        let i = this._inflate[We];
        if (i) {
          this._inflate.close(), this._inflate = null, s(i);
          return;
        }
        let o = ds.concat(this._inflate[G], this._inflate[q]);
        this._inflate._readableState.endEmitted ? (this._inflate.close(), this._inflate = null) : (this._inflate[q] = 0, this._inflate[G] = [], r && this.params[`${n}_no_context_takeover`] && this._inflate.reset()), s(null, o);
      });
    }
    _compress(e, r, s) {
      let n = this._isServer ? "server" : "client";
      if (!this._deflate) {
        let i = `${n}_max_window_bits`, o = typeof this.params[i] != "number" ? ye.Z_DEFAULT_WINDOWBITS : this.params[i];
        this._deflate = ye.createDeflateRaw({ ...this._options.zlibDeflateOptions, windowBits: o }), this._deflate[q] = 0, this._deflate[G] = [], this._deflate.on("data", jo);
      }
      this._deflate[_e] = s, this._deflate.write(e), this._deflate.flush(ye.Z_SYNC_FLUSH, () => {
        if (!this._deflate) return;
        let i = ds.concat(this._deflate[G], this._deflate[q]);
        r && (i = new Go(i.buffer, i.byteOffset, i.length - 4)), this._deflate[_e] = null, this._deflate[q] = 0, this._deflate[G] = [], r && this.params[`${n}_no_context_takeover`] && this._deflate.reset(), s(null, i);
      });
    }
  };
  ms.exports = Vt;
  function jo(t3) {
    this[G].push(t3), this[q] += t3.length;
  }
  function ps(t3) {
    if (this[q] += t3.length, this[je]._maxPayload < 1 || this[q] <= this[je]._maxPayload) {
      this[G].push(t3);
      return;
    }
    this[We] = new RangeError("Max payload size exceeded"), this[We].code = "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH", this[We][hs] = 1009, this.removeListener("data", ps), this.reset();
  }
  function Ho(t3) {
    this[je]._inflate = null, t3[hs] = 1007, this[_e](t3);
  }
});
var xe = f((Qu, He) => {
  "use strict";
  var { isUtf8: gs } = require("buffer"), Vo = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0];
  function zo(t3) {
    return t3 >= 1e3 && t3 <= 1014 && t3 !== 1004 && t3 !== 1005 && t3 !== 1006 || t3 >= 3e3 && t3 <= 4999;
  }
  function zt(t3) {
    let e = t3.length, r = 0;
    for (; r < e; ) if (!(t3[r] & 128)) r++;
    else if ((t3[r] & 224) === 192) {
      if (r + 1 === e || (t3[r + 1] & 192) !== 128 || (t3[r] & 254) === 192) return false;
      r += 2;
    } else if ((t3[r] & 240) === 224) {
      if (r + 2 >= e || (t3[r + 1] & 192) !== 128 || (t3[r + 2] & 192) !== 128 || t3[r] === 224 && (t3[r + 1] & 224) === 128 || t3[r] === 237 && (t3[r + 1] & 224) === 160) return false;
      r += 3;
    } else if ((t3[r] & 248) === 240) {
      if (r + 3 >= e || (t3[r + 1] & 192) !== 128 || (t3[r + 2] & 192) !== 128 || (t3[r + 3] & 192) !== 128 || t3[r] === 240 && (t3[r + 1] & 240) === 128 || t3[r] === 244 && t3[r + 1] > 143 || t3[r] > 244) return false;
      r += 4;
    } else return false;
    return true;
  }
  He.exports = { isValidStatusCode: zo, isValidUTF8: zt, tokenChars: Vo };
  if (gs) He.exports.isValidUTF8 = function(t3) {
    return t3.length < 24 ? zt(t3) : gs(t3);
  };
  else if (!process.env.WS_NO_UTF_8_VALIDATE) try {
    let t3 = require("utf-8-validate");
    He.exports.isValidUTF8 = function(e) {
      return e.length < 32 ? zt(e) : t3(e);
    };
  } catch {
  }
});
var Zt = f((Zu, vs) => {
  "use strict";
  var { Writable: Ko } = require("stream"), ys = we(), { BINARY_TYPES: Xo, EMPTY_BUFFER: _s, kStatusCode: Yo, kWebSocket: Qo } = U(), { concat: Kt, toArrayBuffer: Zo, unmask: Jo } = ge(), { isValidStatusCode: ea, isValidUTF8: ws } = xe(), Ve = Buffer[Symbol.species], T = 0, xs = 1, Ss = 2, Es = 3, Xt = 4, Yt = 5, ze = 6, Qt = class extends Ko {
    constructor(e = {}) {
      super(), this._allowSynchronousEvents = e.allowSynchronousEvents !== void 0 ? e.allowSynchronousEvents : true, this._binaryType = e.binaryType || Xo[0], this._extensions = e.extensions || {}, this._isServer = !!e.isServer, this._maxPayload = e.maxPayload | 0, this._skipUTF8Validation = !!e.skipUTF8Validation, this[Qo] = void 0, this._bufferedBytes = 0, this._buffers = [], this._compressed = false, this._payloadLength = 0, this._mask = void 0, this._fragmented = 0, this._masked = false, this._fin = false, this._opcode = 0, this._totalPayloadLength = 0, this._messageLength = 0, this._fragments = [], this._errored = false, this._loop = false, this._state = T;
    }
    _write(e, r, s) {
      if (this._opcode === 8 && this._state == T) return s();
      this._bufferedBytes += e.length, this._buffers.push(e), this.startLoop(s);
    }
    consume(e) {
      if (this._bufferedBytes -= e, e === this._buffers[0].length) return this._buffers.shift();
      if (e < this._buffers[0].length) {
        let s = this._buffers[0];
        return this._buffers[0] = new Ve(s.buffer, s.byteOffset + e, s.length - e), new Ve(s.buffer, s.byteOffset, e);
      }
      let r = Buffer.allocUnsafe(e);
      do {
        let s = this._buffers[0], n = r.length - e;
        e >= s.length ? r.set(this._buffers.shift(), n) : (r.set(new Uint8Array(s.buffer, s.byteOffset, e), n), this._buffers[0] = new Ve(s.buffer, s.byteOffset + e, s.length - e)), e -= s.length;
      } while (e > 0);
      return r;
    }
    startLoop(e) {
      this._loop = true;
      do
        switch (this._state) {
          case T:
            this.getInfo(e);
            break;
          case xs:
            this.getPayloadLength16(e);
            break;
          case Ss:
            this.getPayloadLength64(e);
            break;
          case Es:
            this.getMask();
            break;
          case Xt:
            this.getData(e);
            break;
          case Yt:
          case ze:
            this._loop = false;
            return;
        }
      while (this._loop);
      this._errored || e();
    }
    getInfo(e) {
      if (this._bufferedBytes < 2) {
        this._loop = false;
        return;
      }
      let r = this.consume(2);
      if (r[0] & 48) {
        let n = this.createError(RangeError, "RSV2 and RSV3 must be clear", true, 1002, "WS_ERR_UNEXPECTED_RSV_2_3");
        e(n);
        return;
      }
      let s = (r[0] & 64) === 64;
      if (s && !this._extensions[ys.extensionName]) {
        let n = this.createError(RangeError, "RSV1 must be clear", true, 1002, "WS_ERR_UNEXPECTED_RSV_1");
        e(n);
        return;
      }
      if (this._fin = (r[0] & 128) === 128, this._opcode = r[0] & 15, this._payloadLength = r[1] & 127, this._opcode === 0) {
        if (s) {
          let n = this.createError(RangeError, "RSV1 must be clear", true, 1002, "WS_ERR_UNEXPECTED_RSV_1");
          e(n);
          return;
        }
        if (!this._fragmented) {
          let n = this.createError(RangeError, "invalid opcode 0", true, 1002, "WS_ERR_INVALID_OPCODE");
          e(n);
          return;
        }
        this._opcode = this._fragmented;
      } else if (this._opcode === 1 || this._opcode === 2) {
        if (this._fragmented) {
          let n = this.createError(RangeError, `invalid opcode ${this._opcode}`, true, 1002, "WS_ERR_INVALID_OPCODE");
          e(n);
          return;
        }
        this._compressed = s;
      } else if (this._opcode > 7 && this._opcode < 11) {
        if (!this._fin) {
          let n = this.createError(RangeError, "FIN must be set", true, 1002, "WS_ERR_EXPECTED_FIN");
          e(n);
          return;
        }
        if (s) {
          let n = this.createError(RangeError, "RSV1 must be clear", true, 1002, "WS_ERR_UNEXPECTED_RSV_1");
          e(n);
          return;
        }
        if (this._payloadLength > 125 || this._opcode === 8 && this._payloadLength === 1) {
          let n = this.createError(RangeError, `invalid payload length ${this._payloadLength}`, true, 1002, "WS_ERR_INVALID_CONTROL_PAYLOAD_LENGTH");
          e(n);
          return;
        }
      } else {
        let n = this.createError(RangeError, `invalid opcode ${this._opcode}`, true, 1002, "WS_ERR_INVALID_OPCODE");
        e(n);
        return;
      }
      if (!this._fin && !this._fragmented && (this._fragmented = this._opcode), this._masked = (r[1] & 128) === 128, this._isServer) {
        if (!this._masked) {
          let n = this.createError(RangeError, "MASK must be set", true, 1002, "WS_ERR_EXPECTED_MASK");
          e(n);
          return;
        }
      } else if (this._masked) {
        let n = this.createError(RangeError, "MASK must be clear", true, 1002, "WS_ERR_UNEXPECTED_MASK");
        e(n);
        return;
      }
      this._payloadLength === 126 ? this._state = xs : this._payloadLength === 127 ? this._state = Ss : this.haveLength(e);
    }
    getPayloadLength16(e) {
      if (this._bufferedBytes < 2) {
        this._loop = false;
        return;
      }
      this._payloadLength = this.consume(2).readUInt16BE(0), this.haveLength(e);
    }
    getPayloadLength64(e) {
      if (this._bufferedBytes < 8) {
        this._loop = false;
        return;
      }
      let r = this.consume(8), s = r.readUInt32BE(0);
      if (s > Math.pow(2, 21) - 1) {
        let n = this.createError(RangeError, "Unsupported WebSocket frame: payload length > 2^53 - 1", false, 1009, "WS_ERR_UNSUPPORTED_DATA_PAYLOAD_LENGTH");
        e(n);
        return;
      }
      this._payloadLength = s * Math.pow(2, 32) + r.readUInt32BE(4), this.haveLength(e);
    }
    haveLength(e) {
      if (this._payloadLength && this._opcode < 8 && (this._totalPayloadLength += this._payloadLength, this._totalPayloadLength > this._maxPayload && this._maxPayload > 0)) {
        let r = this.createError(RangeError, "Max payload size exceeded", false, 1009, "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH");
        e(r);
        return;
      }
      this._masked ? this._state = Es : this._state = Xt;
    }
    getMask() {
      if (this._bufferedBytes < 4) {
        this._loop = false;
        return;
      }
      this._mask = this.consume(4), this._state = Xt;
    }
    getData(e) {
      let r = _s;
      if (this._payloadLength) {
        if (this._bufferedBytes < this._payloadLength) {
          this._loop = false;
          return;
        }
        r = this.consume(this._payloadLength), this._masked && this._mask[0] | this._mask[1] | this._mask[2] | this._mask[3] && Jo(r, this._mask);
      }
      if (this._opcode > 7) {
        this.controlMessage(r, e);
        return;
      }
      if (this._compressed) {
        this._state = Yt, this.decompress(r, e);
        return;
      }
      r.length && (this._messageLength = this._totalPayloadLength, this._fragments.push(r)), this.dataMessage(e);
    }
    decompress(e, r) {
      this._extensions[ys.extensionName].decompress(e, this._fin, (n, i) => {
        if (n) return r(n);
        if (i.length) {
          if (this._messageLength += i.length, this._messageLength > this._maxPayload && this._maxPayload > 0) {
            let o = this.createError(RangeError, "Max payload size exceeded", false, 1009, "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH");
            r(o);
            return;
          }
          this._fragments.push(i);
        }
        this.dataMessage(r), this._state === T && this.startLoop(r);
      });
    }
    dataMessage(e) {
      if (!this._fin) {
        this._state = T;
        return;
      }
      let r = this._messageLength, s = this._fragments;
      if (this._totalPayloadLength = 0, this._messageLength = 0, this._fragmented = 0, this._fragments = [], this._opcode === 2) {
        let n;
        this._binaryType === "nodebuffer" ? n = Kt(s, r) : this._binaryType === "arraybuffer" ? n = Zo(Kt(s, r)) : n = s, this._allowSynchronousEvents ? (this.emit("message", n, true), this._state = T) : (this._state = ze, setImmediate(() => {
          this.emit("message", n, true), this._state = T, this.startLoop(e);
        }));
      } else {
        let n = Kt(s, r);
        if (!this._skipUTF8Validation && !ws(n)) {
          let i = this.createError(Error, "invalid UTF-8 sequence", true, 1007, "WS_ERR_INVALID_UTF8");
          e(i);
          return;
        }
        this._state === Yt || this._allowSynchronousEvents ? (this.emit("message", n, false), this._state = T) : (this._state = ze, setImmediate(() => {
          this.emit("message", n, false), this._state = T, this.startLoop(e);
        }));
      }
    }
    controlMessage(e, r) {
      if (this._opcode === 8) {
        if (e.length === 0) this._loop = false, this.emit("conclude", 1005, _s), this.end();
        else {
          let s = e.readUInt16BE(0);
          if (!ea(s)) {
            let i = this.createError(RangeError, `invalid status code ${s}`, true, 1002, "WS_ERR_INVALID_CLOSE_CODE");
            r(i);
            return;
          }
          let n = new Ve(e.buffer, e.byteOffset + 2, e.length - 2);
          if (!this._skipUTF8Validation && !ws(n)) {
            let i = this.createError(Error, "invalid UTF-8 sequence", true, 1007, "WS_ERR_INVALID_UTF8");
            r(i);
            return;
          }
          this._loop = false, this.emit("conclude", s, n), this.end();
        }
        this._state = T;
        return;
      }
      this._allowSynchronousEvents ? (this.emit(this._opcode === 9 ? "ping" : "pong", e), this._state = T) : (this._state = ze, setImmediate(() => {
        this.emit(this._opcode === 9 ? "ping" : "pong", e), this._state = T, this.startLoop(r);
      }));
    }
    createError(e, r, s, n, i) {
      this._loop = false, this._errored = true;
      let o = new e(s ? `Invalid WebSocket frame: ${r}` : r);
      return Error.captureStackTrace(o, this.createError), o.code = i, o[Yo] = n, o;
    }
  };
  vs.exports = Qt;
});
var er = f((ef, Ps) => {
  "use strict";
  var { Duplex: Ju } = require("stream"), { randomFillSync: ta } = require("crypto"), bs = we(), { EMPTY_BUFFER: ra } = U(), { isValidStatusCode: sa } = xe(), { mask: Cs, toBuffer: J } = ge(), I = /* @__PURE__ */ Symbol("kByteLength"), na = Buffer.alloc(4), Ke = 8 * 1024, H, ee = Ke, Jt = class t3 {
    constructor(e, r, s) {
      this._extensions = r || {}, s && (this._generateMask = s, this._maskBuffer = Buffer.alloc(4)), this._socket = e, this._firstFragment = true, this._compress = false, this._bufferedBytes = 0, this._deflating = false, this._queue = [];
    }
    static frame(e, r) {
      let s, n = false, i = 2, o = false;
      r.mask && (s = r.maskBuffer || na, r.generateMask ? r.generateMask(s) : (ee === Ke && (H === void 0 && (H = Buffer.alloc(Ke)), ta(H, 0, Ke), ee = 0), s[0] = H[ee++], s[1] = H[ee++], s[2] = H[ee++], s[3] = H[ee++]), o = (s[0] | s[1] | s[2] | s[3]) === 0, i = 6);
      let a;
      typeof e == "string" ? (!r.mask || o) && r[I] !== void 0 ? a = r[I] : (e = Buffer.from(e), a = e.length) : (a = e.length, n = r.mask && r.readOnly && !o);
      let c = a;
      a >= 65536 ? (i += 8, c = 127) : a > 125 && (i += 2, c = 126);
      let l = Buffer.allocUnsafe(n ? a + i : i);
      return l[0] = r.fin ? r.opcode | 128 : r.opcode, r.rsv1 && (l[0] |= 64), l[1] = c, c === 126 ? l.writeUInt16BE(a, 2) : c === 127 && (l[2] = l[3] = 0, l.writeUIntBE(a, 4, 6)), r.mask ? (l[1] |= 128, l[i - 4] = s[0], l[i - 3] = s[1], l[i - 2] = s[2], l[i - 1] = s[3], o ? [l, e] : n ? (Cs(e, s, l, i, a), [l]) : (Cs(e, s, e, 0, a), [l, e])) : [l, e];
    }
    close(e, r, s, n) {
      let i;
      if (e === void 0) i = ra;
      else {
        if (typeof e != "number" || !sa(e)) throw new TypeError("First argument must be a valid error code number");
        if (r === void 0 || !r.length) i = Buffer.allocUnsafe(2), i.writeUInt16BE(e, 0);
        else {
          let a = Buffer.byteLength(r);
          if (a > 123) throw new RangeError("The message must not be greater than 123 bytes");
          i = Buffer.allocUnsafe(2 + a), i.writeUInt16BE(e, 0), typeof r == "string" ? i.write(r, 2) : i.set(r, 2);
        }
      }
      let o = { [I]: i.length, fin: true, generateMask: this._generateMask, mask: s, maskBuffer: this._maskBuffer, opcode: 8, readOnly: false, rsv1: false };
      this._deflating ? this.enqueue([this.dispatch, i, false, o, n]) : this.sendFrame(t3.frame(i, o), n);
    }
    ping(e, r, s) {
      let n, i;
      if (typeof e == "string" ? (n = Buffer.byteLength(e), i = false) : (e = J(e), n = e.length, i = J.readOnly), n > 125) throw new RangeError("The data size must not be greater than 125 bytes");
      let o = { [I]: n, fin: true, generateMask: this._generateMask, mask: r, maskBuffer: this._maskBuffer, opcode: 9, readOnly: i, rsv1: false };
      this._deflating ? this.enqueue([this.dispatch, e, false, o, s]) : this.sendFrame(t3.frame(e, o), s);
    }
    pong(e, r, s) {
      let n, i;
      if (typeof e == "string" ? (n = Buffer.byteLength(e), i = false) : (e = J(e), n = e.length, i = J.readOnly), n > 125) throw new RangeError("The data size must not be greater than 125 bytes");
      let o = { [I]: n, fin: true, generateMask: this._generateMask, mask: r, maskBuffer: this._maskBuffer, opcode: 10, readOnly: i, rsv1: false };
      this._deflating ? this.enqueue([this.dispatch, e, false, o, s]) : this.sendFrame(t3.frame(e, o), s);
    }
    send(e, r, s) {
      let n = this._extensions[bs.extensionName], i = r.binary ? 2 : 1, o = r.compress, a, c;
      if (typeof e == "string" ? (a = Buffer.byteLength(e), c = false) : (e = J(e), a = e.length, c = J.readOnly), this._firstFragment ? (this._firstFragment = false, o && n && n.params[n._isServer ? "server_no_context_takeover" : "client_no_context_takeover"] && (o = a >= n._threshold), this._compress = o) : (o = false, i = 0), r.fin && (this._firstFragment = true), n) {
        let l = { [I]: a, fin: r.fin, generateMask: this._generateMask, mask: r.mask, maskBuffer: this._maskBuffer, opcode: i, readOnly: c, rsv1: o };
        this._deflating ? this.enqueue([this.dispatch, e, this._compress, l, s]) : this.dispatch(e, this._compress, l, s);
      } else this.sendFrame(t3.frame(e, { [I]: a, fin: r.fin, generateMask: this._generateMask, mask: r.mask, maskBuffer: this._maskBuffer, opcode: i, readOnly: c, rsv1: false }), s);
    }
    dispatch(e, r, s, n) {
      if (!r) {
        this.sendFrame(t3.frame(e, s), n);
        return;
      }
      let i = this._extensions[bs.extensionName];
      this._bufferedBytes += s[I], this._deflating = true, i.compress(e, s.fin, (o, a) => {
        if (this._socket.destroyed) {
          let c = new Error("The socket was closed while data was being compressed");
          typeof n == "function" && n(c);
          for (let l = 0; l < this._queue.length; l++) {
            let u = this._queue[l], d = u[u.length - 1];
            typeof d == "function" && d(c);
          }
          return;
        }
        this._bufferedBytes -= s[I], this._deflating = false, s.readOnly = false, this.sendFrame(t3.frame(a, s), n), this.dequeue();
      });
    }
    dequeue() {
      for (; !this._deflating && this._queue.length; ) {
        let e = this._queue.shift();
        this._bufferedBytes -= e[3][I], Reflect.apply(e[0], this, e.slice(1));
      }
    }
    enqueue(e) {
      this._bufferedBytes += e[3][I], this._queue.push(e);
    }
    sendFrame(e, r) {
      e.length === 2 ? (this._socket.cork(), this._socket.write(e[0]), this._socket.write(e[1], r), this._socket.uncork()) : this._socket.write(e[0], r);
    }
  };
  Ps.exports = Jt;
});
var qs = f((tf, Bs) => {
  "use strict";
  var { kForOnEventAttribute: Se, kListener: tr } = U(), Os = /* @__PURE__ */ Symbol("kCode"), Ts = /* @__PURE__ */ Symbol("kData"), ks = /* @__PURE__ */ Symbol("kError"), Is = /* @__PURE__ */ Symbol("kMessage"), As = /* @__PURE__ */ Symbol("kReason"), te = /* @__PURE__ */ Symbol("kTarget"), Ls = /* @__PURE__ */ Symbol("kType"), Rs = /* @__PURE__ */ Symbol("kWasClean"), N = class {
    constructor(e) {
      this[te] = null, this[Ls] = e;
    }
    get target() {
      return this[te];
    }
    get type() {
      return this[Ls];
    }
  };
  Object.defineProperty(N.prototype, "target", { enumerable: true });
  Object.defineProperty(N.prototype, "type", { enumerable: true });
  var V = class extends N {
    constructor(e, r = {}) {
      super(e), this[Os] = r.code === void 0 ? 0 : r.code, this[As] = r.reason === void 0 ? "" : r.reason, this[Rs] = r.wasClean === void 0 ? false : r.wasClean;
    }
    get code() {
      return this[Os];
    }
    get reason() {
      return this[As];
    }
    get wasClean() {
      return this[Rs];
    }
  };
  Object.defineProperty(V.prototype, "code", { enumerable: true });
  Object.defineProperty(V.prototype, "reason", { enumerable: true });
  Object.defineProperty(V.prototype, "wasClean", { enumerable: true });
  var re = class extends N {
    constructor(e, r = {}) {
      super(e), this[ks] = r.error === void 0 ? null : r.error, this[Is] = r.message === void 0 ? "" : r.message;
    }
    get error() {
      return this[ks];
    }
    get message() {
      return this[Is];
    }
  };
  Object.defineProperty(re.prototype, "error", { enumerable: true });
  Object.defineProperty(re.prototype, "message", { enumerable: true });
  var Ee = class extends N {
    constructor(e, r = {}) {
      super(e), this[Ts] = r.data === void 0 ? null : r.data;
    }
    get data() {
      return this[Ts];
    }
  };
  Object.defineProperty(Ee.prototype, "data", { enumerable: true });
  var ia = { addEventListener(t3, e, r = {}) {
    for (let n of this.listeners(t3)) if (!r[Se] && n[tr] === e && !n[Se]) return;
    let s;
    if (t3 === "message") s = function(i, o) {
      let a = new Ee("message", { data: o ? i : i.toString() });
      a[te] = this, Xe(e, this, a);
    };
    else if (t3 === "close") s = function(i, o) {
      let a = new V("close", { code: i, reason: o.toString(), wasClean: this._closeFrameReceived && this._closeFrameSent });
      a[te] = this, Xe(e, this, a);
    };
    else if (t3 === "error") s = function(i) {
      let o = new re("error", { error: i, message: i.message });
      o[te] = this, Xe(e, this, o);
    };
    else if (t3 === "open") s = function() {
      let i = new N("open");
      i[te] = this, Xe(e, this, i);
    };
    else return;
    s[Se] = !!r[Se], s[tr] = e, r.once ? this.once(t3, s) : this.on(t3, s);
  }, removeEventListener(t3, e) {
    for (let r of this.listeners(t3)) if (r[tr] === e && !r[Se]) {
      this.removeListener(t3, r);
      break;
    }
  } };
  Bs.exports = { CloseEvent: V, ErrorEvent: re, Event: N, EventTarget: ia, MessageEvent: Ee };
  function Xe(t3, e, r) {
    typeof t3 == "object" && t3.handleEvent ? t3.handleEvent.call(t3, r) : t3.call(e, r);
  }
});
var rr = f((rf, Ns) => {
  "use strict";
  var { tokenChars: ve } = xe();
  function L(t3, e, r) {
    t3[e] === void 0 ? t3[e] = [r] : t3[e].push(r);
  }
  function oa(t3) {
    let e = /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null), s = false, n = false, i = false, o, a, c = -1, l = -1, u = -1, d = 0;
    for (; d < t3.length; d++) if (l = t3.charCodeAt(d), o === void 0) if (u === -1 && ve[l] === 1) c === -1 && (c = d);
    else if (d !== 0 && (l === 32 || l === 9)) u === -1 && c !== -1 && (u = d);
    else if (l === 59 || l === 44) {
      if (c === -1) throw new SyntaxError(`Unexpected character at index ${d}`);
      u === -1 && (u = d);
      let g = t3.slice(c, u);
      l === 44 ? (L(e, g, r), r = /* @__PURE__ */ Object.create(null)) : o = g, c = u = -1;
    } else throw new SyntaxError(`Unexpected character at index ${d}`);
    else if (a === void 0) if (u === -1 && ve[l] === 1) c === -1 && (c = d);
    else if (l === 32 || l === 9) u === -1 && c !== -1 && (u = d);
    else if (l === 59 || l === 44) {
      if (c === -1) throw new SyntaxError(`Unexpected character at index ${d}`);
      u === -1 && (u = d), L(r, t3.slice(c, u), true), l === 44 && (L(e, o, r), r = /* @__PURE__ */ Object.create(null), o = void 0), c = u = -1;
    } else if (l === 61 && c !== -1 && u === -1) a = t3.slice(c, d), c = u = -1;
    else throw new SyntaxError(`Unexpected character at index ${d}`);
    else if (n) {
      if (ve[l] !== 1) throw new SyntaxError(`Unexpected character at index ${d}`);
      c === -1 ? c = d : s || (s = true), n = false;
    } else if (i) if (ve[l] === 1) c === -1 && (c = d);
    else if (l === 34 && c !== -1) i = false, u = d;
    else if (l === 92) n = true;
    else throw new SyntaxError(`Unexpected character at index ${d}`);
    else if (l === 34 && t3.charCodeAt(d - 1) === 61) i = true;
    else if (u === -1 && ve[l] === 1) c === -1 && (c = d);
    else if (c !== -1 && (l === 32 || l === 9)) u === -1 && (u = d);
    else if (l === 59 || l === 44) {
      if (c === -1) throw new SyntaxError(`Unexpected character at index ${d}`);
      u === -1 && (u = d);
      let g = t3.slice(c, u);
      s && (g = g.replace(/\\/g, ""), s = false), L(r, a, g), l === 44 && (L(e, o, r), r = /* @__PURE__ */ Object.create(null), o = void 0), a = void 0, c = u = -1;
    } else throw new SyntaxError(`Unexpected character at index ${d}`);
    if (c === -1 || i || l === 32 || l === 9) throw new SyntaxError("Unexpected end of input");
    u === -1 && (u = d);
    let p = t3.slice(c, u);
    return o === void 0 ? L(e, p, r) : (a === void 0 ? L(r, p, true) : s ? L(r, a, p.replace(/\\/g, "")) : L(r, a, p), L(e, o, r)), e;
  }
  function aa(t3) {
    return Object.keys(t3).map((e) => {
      let r = t3[e];
      return Array.isArray(r) || (r = [r]), r.map((s) => [e].concat(Object.keys(s).map((n) => {
        let i = s[n];
        return Array.isArray(i) || (i = [i]), i.map((o) => o === true ? n : `${n}=${o}`).join("; ");
      })).join("; ")).join(", ");
    }).join(", ");
  }
  Ns.exports = { format: aa, parse: oa };
});
var ar = f((of, zs) => {
  "use strict";
  var ca = require("events"), la = require("https"), ua = require("http"), Ds = require("net"), fa = require("tls"), { randomBytes: da, createHash: ha } = require("crypto"), { Duplex: sf, Readable: nf } = require("stream"), { URL: sr } = require("url"), W = we(), pa = Zt(), ma = er(), { BINARY_TYPES: Ms, EMPTY_BUFFER: Ye, GUID: ga, kForOnEventAttribute: nr, kListener: ya, kStatusCode: _a, kWebSocket: E, NOOP: $s } = U(), { EventTarget: { addEventListener: wa, removeEventListener: xa } } = qs(), { format: Sa, parse: Ea } = rr(), { toBuffer: va } = ge(), ba = 30 * 1e3, Us = /* @__PURE__ */ Symbol("kAborted"), ir = [8, 13], M = ["CONNECTING", "OPEN", "CLOSING", "CLOSED"], Ca = /^[!#$%&'*+\-.0-9A-Z^_`|a-z~]+$/, w = class t3 extends ca {
    constructor(e, r, s) {
      super(), this._binaryType = Ms[0], this._closeCode = 1006, this._closeFrameReceived = false, this._closeFrameSent = false, this._closeMessage = Ye, this._closeTimer = null, this._extensions = {}, this._paused = false, this._protocol = "", this._readyState = t3.CONNECTING, this._receiver = null, this._sender = null, this._socket = null, e !== null ? (this._bufferedAmount = 0, this._isServer = false, this._redirects = 0, r === void 0 ? r = [] : Array.isArray(r) || (typeof r == "object" && r !== null ? (s = r, r = []) : r = [r]), Gs(this, e, r, s)) : (this._autoPong = s.autoPong, this._isServer = true);
    }
    get binaryType() {
      return this._binaryType;
    }
    set binaryType(e) {
      Ms.includes(e) && (this._binaryType = e, this._receiver && (this._receiver._binaryType = e));
    }
    get bufferedAmount() {
      return this._socket ? this._socket._writableState.length + this._sender._bufferedBytes : this._bufferedAmount;
    }
    get extensions() {
      return Object.keys(this._extensions).join();
    }
    get isPaused() {
      return this._paused;
    }
    get onclose() {
      return null;
    }
    get onerror() {
      return null;
    }
    get onopen() {
      return null;
    }
    get onmessage() {
      return null;
    }
    get protocol() {
      return this._protocol;
    }
    get readyState() {
      return this._readyState;
    }
    get url() {
      return this._url;
    }
    setSocket(e, r, s) {
      let n = new pa({ allowSynchronousEvents: s.allowSynchronousEvents, binaryType: this.binaryType, extensions: this._extensions, isServer: this._isServer, maxPayload: s.maxPayload, skipUTF8Validation: s.skipUTF8Validation });
      this._sender = new ma(e, this._extensions, s.generateMask), this._receiver = n, this._socket = e, n[E] = this, e[E] = this, n.on("conclude", Ta), n.on("drain", ka), n.on("error", Ia), n.on("message", Aa), n.on("ping", La), n.on("pong", Ra), e.setTimeout && e.setTimeout(0), e.setNoDelay && e.setNoDelay(), r.length > 0 && e.unshift(r), e.on("close", js), e.on("data", Ze), e.on("end", Hs), e.on("error", Vs), this._readyState = t3.OPEN, this.emit("open");
    }
    emitClose() {
      if (!this._socket) {
        this._readyState = t3.CLOSED, this.emit("close", this._closeCode, this._closeMessage);
        return;
      }
      this._extensions[W.extensionName] && this._extensions[W.extensionName].cleanup(), this._receiver.removeAllListeners(), this._readyState = t3.CLOSED, this.emit("close", this._closeCode, this._closeMessage);
    }
    close(e, r) {
      if (this.readyState !== t3.CLOSED) {
        if (this.readyState === t3.CONNECTING) {
          C(this, this._req, "WebSocket was closed before the connection was established");
          return;
        }
        if (this.readyState === t3.CLOSING) {
          this._closeFrameSent && (this._closeFrameReceived || this._receiver._writableState.errorEmitted) && this._socket.end();
          return;
        }
        this._readyState = t3.CLOSING, this._sender.close(e, r, !this._isServer, (s) => {
          s || (this._closeFrameSent = true, (this._closeFrameReceived || this._receiver._writableState.errorEmitted) && this._socket.end());
        }), this._closeTimer = setTimeout(this._socket.destroy.bind(this._socket), ba);
      }
    }
    pause() {
      this.readyState === t3.CONNECTING || this.readyState === t3.CLOSED || (this._paused = true, this._socket.pause());
    }
    ping(e, r, s) {
      if (this.readyState === t3.CONNECTING) throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
      if (typeof e == "function" ? (s = e, e = r = void 0) : typeof r == "function" && (s = r, r = void 0), typeof e == "number" && (e = e.toString()), this.readyState !== t3.OPEN) {
        or(this, e, s);
        return;
      }
      r === void 0 && (r = !this._isServer), this._sender.ping(e || Ye, r, s);
    }
    pong(e, r, s) {
      if (this.readyState === t3.CONNECTING) throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
      if (typeof e == "function" ? (s = e, e = r = void 0) : typeof r == "function" && (s = r, r = void 0), typeof e == "number" && (e = e.toString()), this.readyState !== t3.OPEN) {
        or(this, e, s);
        return;
      }
      r === void 0 && (r = !this._isServer), this._sender.pong(e || Ye, r, s);
    }
    resume() {
      this.readyState === t3.CONNECTING || this.readyState === t3.CLOSED || (this._paused = false, this._receiver._writableState.needDrain || this._socket.resume());
    }
    send(e, r, s) {
      if (this.readyState === t3.CONNECTING) throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
      if (typeof r == "function" && (s = r, r = {}), typeof e == "number" && (e = e.toString()), this.readyState !== t3.OPEN) {
        or(this, e, s);
        return;
      }
      let n = { binary: typeof e != "string", mask: !this._isServer, compress: true, fin: true, ...r };
      this._extensions[W.extensionName] || (n.compress = false), this._sender.send(e || Ye, n, s);
    }
    terminate() {
      if (this.readyState !== t3.CLOSED) {
        if (this.readyState === t3.CONNECTING) {
          C(this, this._req, "WebSocket was closed before the connection was established");
          return;
        }
        this._socket && (this._readyState = t3.CLOSING, this._socket.destroy());
      }
    }
  };
  Object.defineProperty(w, "CONNECTING", { enumerable: true, value: M.indexOf("CONNECTING") });
  Object.defineProperty(w.prototype, "CONNECTING", { enumerable: true, value: M.indexOf("CONNECTING") });
  Object.defineProperty(w, "OPEN", { enumerable: true, value: M.indexOf("OPEN") });
  Object.defineProperty(w.prototype, "OPEN", { enumerable: true, value: M.indexOf("OPEN") });
  Object.defineProperty(w, "CLOSING", { enumerable: true, value: M.indexOf("CLOSING") });
  Object.defineProperty(w.prototype, "CLOSING", { enumerable: true, value: M.indexOf("CLOSING") });
  Object.defineProperty(w, "CLOSED", { enumerable: true, value: M.indexOf("CLOSED") });
  Object.defineProperty(w.prototype, "CLOSED", { enumerable: true, value: M.indexOf("CLOSED") });
  ["binaryType", "bufferedAmount", "extensions", "isPaused", "protocol", "readyState", "url"].forEach((t3) => {
    Object.defineProperty(w.prototype, t3, { enumerable: true });
  });
  ["open", "error", "close", "message"].forEach((t3) => {
    Object.defineProperty(w.prototype, `on${t3}`, { enumerable: true, get() {
      for (let e of this.listeners(t3)) if (e[nr]) return e[ya];
      return null;
    }, set(e) {
      for (let r of this.listeners(t3)) if (r[nr]) {
        this.removeListener(t3, r);
        break;
      }
      typeof e == "function" && this.addEventListener(t3, e, { [nr]: true });
    } });
  });
  w.prototype.addEventListener = wa;
  w.prototype.removeEventListener = xa;
  zs.exports = w;
  function Gs(t3, e, r, s) {
    let n = { allowSynchronousEvents: true, autoPong: true, protocolVersion: ir[1], maxPayload: 104857600, skipUTF8Validation: false, perMessageDeflate: true, followRedirects: false, maxRedirects: 10, ...s, socketPath: void 0, hostname: void 0, protocol: void 0, timeout: void 0, method: "GET", host: void 0, path: void 0, port: void 0 };
    if (t3._autoPong = n.autoPong, !ir.includes(n.protocolVersion)) throw new RangeError(`Unsupported protocol version: ${n.protocolVersion} (supported versions: ${ir.join(", ")})`);
    let i;
    if (e instanceof sr) i = e;
    else try {
      i = new sr(e);
    } catch {
      throw new SyntaxError(`Invalid URL: ${e}`);
    }
    i.protocol === "http:" ? i.protocol = "ws:" : i.protocol === "https:" && (i.protocol = "wss:"), t3._url = i.href;
    let o = i.protocol === "wss:", a = i.protocol === "ws+unix:", c;
    if (i.protocol !== "ws:" && !o && !a ? c = `The URL's protocol must be one of "ws:", "wss:", "http:", "https", or "ws+unix:"` : a && !i.pathname ? c = "The URL's pathname is empty" : i.hash && (c = "The URL contains a fragment identifier"), c) {
      let h = new SyntaxError(c);
      if (t3._redirects === 0) throw h;
      Qe(t3, h);
      return;
    }
    let l = o ? 443 : 80, u = da(16).toString("base64"), d = o ? la.request : ua.request, p = /* @__PURE__ */ new Set(), g;
    if (n.createConnection = n.createConnection || (o ? Oa : Pa), n.defaultPort = n.defaultPort || l, n.port = i.port || l, n.host = i.hostname.startsWith("[") ? i.hostname.slice(1, -1) : i.hostname, n.headers = { ...n.headers, "Sec-WebSocket-Version": n.protocolVersion, "Sec-WebSocket-Key": u, Connection: "Upgrade", Upgrade: "websocket" }, n.path = i.pathname + i.search, n.timeout = n.handshakeTimeout, n.perMessageDeflate && (g = new W(n.perMessageDeflate !== true ? n.perMessageDeflate : {}, false, n.maxPayload), n.headers["Sec-WebSocket-Extensions"] = Sa({ [W.extensionName]: g.offer() })), r.length) {
      for (let h of r) {
        if (typeof h != "string" || !Ca.test(h) || p.has(h)) throw new SyntaxError("An invalid or duplicated subprotocol was specified");
        p.add(h);
      }
      n.headers["Sec-WebSocket-Protocol"] = r.join(",");
    }
    if (n.origin && (n.protocolVersion < 13 ? n.headers["Sec-WebSocket-Origin"] = n.origin : n.headers.Origin = n.origin), (i.username || i.password) && (n.auth = `${i.username}:${i.password}`), a) {
      let h = n.path.split(":");
      n.socketPath = h[0], n.path = h[1];
    }
    let m;
    if (n.followRedirects) {
      if (t3._redirects === 0) {
        t3._originalIpc = a, t3._originalSecure = o, t3._originalHostOrSocketPath = a ? n.socketPath : i.host;
        let h = s && s.headers;
        if (s = { ...s, headers: {} }, h) for (let [_, k] of Object.entries(h)) s.headers[_.toLowerCase()] = k;
      } else if (t3.listenerCount("redirect") === 0) {
        let h = a ? t3._originalIpc ? n.socketPath === t3._originalHostOrSocketPath : false : t3._originalIpc ? false : i.host === t3._originalHostOrSocketPath;
        (!h || t3._originalSecure && !o) && (delete n.headers.authorization, delete n.headers.cookie, h || delete n.headers.host, n.auth = void 0);
      }
      n.auth && !s.headers.authorization && (s.headers.authorization = "Basic " + Buffer.from(n.auth).toString("base64")), m = t3._req = d(n), t3._redirects && t3.emit("redirect", t3.url, m);
    } else m = t3._req = d(n);
    n.timeout && m.on("timeout", () => {
      C(t3, m, "Opening handshake has timed out");
    }), m.on("error", (h) => {
      m === null || m[Us] || (m = t3._req = null, Qe(t3, h));
    }), m.on("response", (h) => {
      let _ = h.headers.location, k = h.statusCode;
      if (_ && n.followRedirects && k >= 300 && k < 400) {
        if (++t3._redirects > n.maxRedirects) {
          C(t3, m, "Maximum redirects exceeded");
          return;
        }
        m.abort();
        let A;
        try {
          A = new sr(_, e);
        } catch {
          let B = new SyntaxError(`Invalid URL: ${_}`);
          Qe(t3, B);
          return;
        }
        Gs(t3, A, r, s);
      } else t3.emit("unexpected-response", m, h) || C(t3, m, `Unexpected server response: ${h.statusCode}`);
    }), m.on("upgrade", (h, _, k) => {
      if (t3.emit("upgrade", h), t3.readyState !== w.CONNECTING) return;
      m = t3._req = null;
      let A = h.headers.upgrade;
      if (A === void 0 || A.toLowerCase() !== "websocket") {
        C(t3, _, "Invalid Upgrade header");
        return;
      }
      let Ne = ha("sha1").update(u + ga).digest("base64");
      if (h.headers["sec-websocket-accept"] !== Ne) {
        C(t3, _, "Invalid Sec-WebSocket-Accept header");
        return;
      }
      let B = h.headers["sec-websocket-protocol"], $;
      if (B !== void 0 ? p.size ? p.has(B) || ($ = "Server sent an invalid subprotocol") : $ = "Server sent a subprotocol but none was requested" : p.size && ($ = "Server sent no subprotocol"), $) {
        C(t3, _, $);
        return;
      }
      B && (t3._protocol = B);
      let pe = h.headers["sec-websocket-extensions"];
      if (pe !== void 0) {
        if (!g) {
          C(t3, _, "Server sent a Sec-WebSocket-Extensions header but no extension was requested");
          return;
        }
        let Z;
        try {
          Z = Ea(pe);
        } catch {
          C(t3, _, "Invalid Sec-WebSocket-Extensions header");
          return;
        }
        let jr = Object.keys(Z);
        if (jr.length !== 1 || jr[0] !== W.extensionName) {
          C(t3, _, "Server indicated an extension that was not requested");
          return;
        }
        try {
          g.accept(Z[W.extensionName]);
        } catch {
          C(t3, _, "Invalid Sec-WebSocket-Extensions header");
          return;
        }
        t3._extensions[W.extensionName] = g;
      }
      t3.setSocket(_, k, { allowSynchronousEvents: n.allowSynchronousEvents, generateMask: n.generateMask, maxPayload: n.maxPayload, skipUTF8Validation: n.skipUTF8Validation });
    }), n.finishRequest ? n.finishRequest(m, t3) : m.end();
  }
  function Qe(t3, e) {
    t3._readyState = w.CLOSING, t3.emit("error", e), t3.emitClose();
  }
  function Pa(t3) {
    return t3.path = t3.socketPath, Ds.connect(t3);
  }
  function Oa(t3) {
    return t3.path = void 0, !t3.servername && t3.servername !== "" && (t3.servername = Ds.isIP(t3.host) ? "" : t3.host), fa.connect(t3);
  }
  function C(t3, e, r) {
    t3._readyState = w.CLOSING;
    let s = new Error(r);
    Error.captureStackTrace(s, C), e.setHeader ? (e[Us] = true, e.abort(), e.socket && !e.socket.destroyed && e.socket.destroy(), process.nextTick(Qe, t3, s)) : (e.destroy(s), e.once("error", t3.emit.bind(t3, "error")), e.once("close", t3.emitClose.bind(t3)));
  }
  function or(t3, e, r) {
    if (e) {
      let s = va(e).length;
      t3._socket ? t3._sender._bufferedBytes += s : t3._bufferedAmount += s;
    }
    if (r) {
      let s = new Error(`WebSocket is not open: readyState ${t3.readyState} (${M[t3.readyState]})`);
      process.nextTick(r, s);
    }
  }
  function Ta(t3, e) {
    let r = this[E];
    r._closeFrameReceived = true, r._closeMessage = e, r._closeCode = t3, r._socket[E] !== void 0 && (r._socket.removeListener("data", Ze), process.nextTick(Ws, r._socket), t3 === 1005 ? r.close() : r.close(t3, e));
  }
  function ka() {
    let t3 = this[E];
    t3.isPaused || t3._socket.resume();
  }
  function Ia(t3) {
    let e = this[E];
    e._socket[E] !== void 0 && (e._socket.removeListener("data", Ze), process.nextTick(Ws, e._socket), e.close(t3[_a])), e.emit("error", t3);
  }
  function Fs() {
    this[E].emitClose();
  }
  function Aa(t3, e) {
    this[E].emit("message", t3, e);
  }
  function La(t3) {
    let e = this[E];
    e._autoPong && e.pong(t3, !this._isServer, $s), e.emit("ping", t3);
  }
  function Ra(t3) {
    this[E].emit("pong", t3);
  }
  function Ws(t3) {
    t3.resume();
  }
  function js() {
    let t3 = this[E];
    this.removeListener("close", js), this.removeListener("data", Ze), this.removeListener("end", Hs), t3._readyState = w.CLOSING;
    let e;
    !this._readableState.endEmitted && !t3._closeFrameReceived && !t3._receiver._writableState.errorEmitted && (e = t3._socket.read()) !== null && t3._receiver.write(e), t3._receiver.end(), this[E] = void 0, clearTimeout(t3._closeTimer), t3._receiver._writableState.finished || t3._receiver._writableState.errorEmitted ? t3.emitClose() : (t3._receiver.on("error", Fs), t3._receiver.on("finish", Fs));
  }
  function Ze(t3) {
    this[E]._receiver.write(t3) || this.pause();
  }
  function Hs() {
    let t3 = this[E];
    t3._readyState = w.CLOSING, t3._receiver.end(), this.end();
  }
  function Vs() {
    let t3 = this[E];
    this.removeListener("error", Vs), this.on("error", $s), t3 && (t3._readyState = w.CLOSING, this.destroy());
  }
});
var Xs = f((af, Ks) => {
  "use strict";
  var { tokenChars: Ba } = xe();
  function qa(t3) {
    let e = /* @__PURE__ */ new Set(), r = -1, s = -1, n = 0;
    for (n; n < t3.length; n++) {
      let o = t3.charCodeAt(n);
      if (s === -1 && Ba[o] === 1) r === -1 && (r = n);
      else if (n !== 0 && (o === 32 || o === 9)) s === -1 && r !== -1 && (s = n);
      else if (o === 44) {
        if (r === -1) throw new SyntaxError(`Unexpected character at index ${n}`);
        s === -1 && (s = n);
        let a = t3.slice(r, s);
        if (e.has(a)) throw new SyntaxError(`The "${a}" subprotocol is duplicated`);
        e.add(a), r = s = -1;
      } else throw new SyntaxError(`Unexpected character at index ${n}`);
    }
    if (r === -1 || s !== -1) throw new SyntaxError("Unexpected end of input");
    let i = t3.slice(r, n);
    if (e.has(i)) throw new SyntaxError(`The "${i}" subprotocol is duplicated`);
    return e.add(i), e;
  }
  Ks.exports = { parse: qa };
});
var rn = f((lf, tn) => {
  "use strict";
  var Na = require("events"), Je = require("http"), { Duplex: cf } = require("stream"), { createHash: Ma } = require("crypto"), Ys = rr(), z = we(), Fa = Xs(), Da = ar(), { GUID: $a, kWebSocket: Ua } = U(), Ga = /^[+/0-9A-Za-z]{22}==$/, Qs = 0, Zs = 1, en = 2, cr = class extends Na {
    constructor(e, r) {
      if (super(), e = { allowSynchronousEvents: true, autoPong: true, maxPayload: 100 * 1024 * 1024, skipUTF8Validation: false, perMessageDeflate: false, handleProtocols: null, clientTracking: true, verifyClient: null, noServer: false, backlog: null, server: null, host: null, path: null, port: null, WebSocket: Da, ...e }, e.port == null && !e.server && !e.noServer || e.port != null && (e.server || e.noServer) || e.server && e.noServer) throw new TypeError('One and only one of the "port", "server", or "noServer" options must be specified');
      if (e.port != null ? (this._server = Je.createServer((s, n) => {
        let i = Je.STATUS_CODES[426];
        n.writeHead(426, { "Content-Length": i.length, "Content-Type": "text/plain" }), n.end(i);
      }), this._server.listen(e.port, e.host, e.backlog, r)) : e.server && (this._server = e.server), this._server) {
        let s = this.emit.bind(this, "connection");
        this._removeListeners = Wa(this._server, { listening: this.emit.bind(this, "listening"), error: this.emit.bind(this, "error"), upgrade: (n, i, o) => {
          this.handleUpgrade(n, i, o, s);
        } });
      }
      e.perMessageDeflate === true && (e.perMessageDeflate = {}), e.clientTracking && (this.clients = /* @__PURE__ */ new Set(), this._shouldEmitClose = false), this.options = e, this._state = Qs;
    }
    address() {
      if (this.options.noServer) throw new Error('The server is operating in "noServer" mode');
      return this._server ? this._server.address() : null;
    }
    close(e) {
      if (this._state === en) {
        e && this.once("close", () => {
          e(new Error("The server is not running"));
        }), process.nextTick(be, this);
        return;
      }
      if (e && this.once("close", e), this._state !== Zs) if (this._state = Zs, this.options.noServer || this.options.server) this._server && (this._removeListeners(), this._removeListeners = this._server = null), this.clients ? this.clients.size ? this._shouldEmitClose = true : process.nextTick(be, this) : process.nextTick(be, this);
      else {
        let r = this._server;
        this._removeListeners(), this._removeListeners = this._server = null, r.close(() => {
          be(this);
        });
      }
    }
    shouldHandle(e) {
      if (this.options.path) {
        let r = e.url.indexOf("?");
        if ((r !== -1 ? e.url.slice(0, r) : e.url) !== this.options.path) return false;
      }
      return true;
    }
    handleUpgrade(e, r, s, n) {
      r.on("error", Js);
      let i = e.headers["sec-websocket-key"], o = e.headers.upgrade, a = +e.headers["sec-websocket-version"];
      if (e.method !== "GET") {
        K(this, e, r, 405, "Invalid HTTP method");
        return;
      }
      if (o === void 0 || o.toLowerCase() !== "websocket") {
        K(this, e, r, 400, "Invalid Upgrade header");
        return;
      }
      if (i === void 0 || !Ga.test(i)) {
        K(this, e, r, 400, "Missing or invalid Sec-WebSocket-Key header");
        return;
      }
      if (a !== 8 && a !== 13) {
        K(this, e, r, 400, "Missing or invalid Sec-WebSocket-Version header");
        return;
      }
      if (!this.shouldHandle(e)) {
        Ce(r, 400);
        return;
      }
      let c = e.headers["sec-websocket-protocol"], l = /* @__PURE__ */ new Set();
      if (c !== void 0) try {
        l = Fa.parse(c);
      } catch {
        K(this, e, r, 400, "Invalid Sec-WebSocket-Protocol header");
        return;
      }
      let u = e.headers["sec-websocket-extensions"], d = {};
      if (this.options.perMessageDeflate && u !== void 0) {
        let p = new z(this.options.perMessageDeflate, true, this.options.maxPayload);
        try {
          let g = Ys.parse(u);
          g[z.extensionName] && (p.accept(g[z.extensionName]), d[z.extensionName] = p);
        } catch {
          K(this, e, r, 400, "Invalid or unacceptable Sec-WebSocket-Extensions header");
          return;
        }
      }
      if (this.options.verifyClient) {
        let p = { origin: e.headers[`${a === 8 ? "sec-websocket-origin" : "origin"}`], secure: !!(e.socket.authorized || e.socket.encrypted), req: e };
        if (this.options.verifyClient.length === 2) {
          this.options.verifyClient(p, (g, m, h, _) => {
            if (!g) return Ce(r, m || 401, h, _);
            this.completeUpgrade(d, i, l, e, r, s, n);
          });
          return;
        }
        if (!this.options.verifyClient(p)) return Ce(r, 401);
      }
      this.completeUpgrade(d, i, l, e, r, s, n);
    }
    completeUpgrade(e, r, s, n, i, o, a) {
      if (!i.readable || !i.writable) return i.destroy();
      if (i[Ua]) throw new Error("server.handleUpgrade() was called more than once with the same socket, possibly due to a misconfiguration");
      if (this._state > Qs) return Ce(i, 503);
      let l = ["HTTP/1.1 101 Switching Protocols", "Upgrade: websocket", "Connection: Upgrade", `Sec-WebSocket-Accept: ${Ma("sha1").update(r + $a).digest("base64")}`], u = new this.options.WebSocket(null, void 0, this.options);
      if (s.size) {
        let d = this.options.handleProtocols ? this.options.handleProtocols(s, n) : s.values().next().value;
        d && (l.push(`Sec-WebSocket-Protocol: ${d}`), u._protocol = d);
      }
      if (e[z.extensionName]) {
        let d = e[z.extensionName].params, p = Ys.format({ [z.extensionName]: [d] });
        l.push(`Sec-WebSocket-Extensions: ${p}`), u._extensions = e;
      }
      this.emit("headers", l, n), i.write(l.concat(`\r
`).join(`\r
`)), i.removeListener("error", Js), u.setSocket(i, o, { allowSynchronousEvents: this.options.allowSynchronousEvents, maxPayload: this.options.maxPayload, skipUTF8Validation: this.options.skipUTF8Validation }), this.clients && (this.clients.add(u), u.on("close", () => {
        this.clients.delete(u), this._shouldEmitClose && !this.clients.size && process.nextTick(be, this);
      })), a(u, n);
    }
  };
  tn.exports = cr;
  function Wa(t3, e) {
    for (let r of Object.keys(e)) t3.on(r, e[r]);
    return function() {
      for (let s of Object.keys(e)) t3.removeListener(s, e[s]);
    };
  }
  function be(t3) {
    t3._state = en, t3.emit("close");
  }
  function Js() {
    this.destroy();
  }
  function Ce(t3, e, r, s) {
    r = r || Je.STATUS_CODES[e], s = { Connection: "close", "Content-Type": "text/html", "Content-Length": Buffer.byteLength(r), ...s }, t3.once("finish", t3.destroy), t3.end(`HTTP/1.1 ${e} ${Je.STATUS_CODES[e]}\r
` + Object.keys(s).map((n) => `${n}: ${s[n]}`).join(`\r
`) + `\r
\r
` + r);
  }
  function K(t3, e, r, s, n) {
    if (t3.listenerCount("wsClientError")) {
      let i = new Error(n);
      Error.captureStackTrace(i, K), t3.emit("wsClientError", i, r, e);
    } else Ce(r, s, n);
  }
});
var fn = f((mf, un) => {
  "use strict";
  var { Transform: Xa } = require("stream"), { StringDecoder: Ya } = require("string_decoder"), j = /* @__PURE__ */ Symbol("last"), rt = /* @__PURE__ */ Symbol("decoder");
  function Qa(t3, e, r) {
    let s;
    if (this.overflow) {
      if (s = this[rt].write(t3).split(this.matcher), s.length === 1) return r();
      s.shift(), this.overflow = false;
    } else this[j] += this[rt].write(t3), s = this[j].split(this.matcher);
    this[j] = s.pop();
    for (let n = 0; n < s.length; n++) try {
      ln(this, this.mapper(s[n]));
    } catch (i) {
      return r(i);
    }
    if (this.overflow = this[j].length > this.maxLength, this.overflow && !this.skipOverflow) {
      r(new Error("maximum buffer reached"));
      return;
    }
    r();
  }
  function Za(t3) {
    if (this[j] += this[rt].end(), this[j]) try {
      ln(this, this.mapper(this[j]));
    } catch (e) {
      return t3(e);
    }
    t3();
  }
  function ln(t3, e) {
    e !== void 0 && t3.push(e);
  }
  function cn(t3) {
    return t3;
  }
  function Ja(t3, e, r) {
    switch (t3 = t3 || /\r?\n/, e = e || cn, r = r || {}, arguments.length) {
      case 1:
        typeof t3 == "function" ? (e = t3, t3 = /\r?\n/) : typeof t3 == "object" && !(t3 instanceof RegExp) && !t3[Symbol.split] && (r = t3, t3 = /\r?\n/);
        break;
      case 2:
        typeof t3 == "function" ? (r = e, e = t3, t3 = /\r?\n/) : typeof e == "object" && (r = e, e = cn);
    }
    r = Object.assign({}, r), r.autoDestroy = true, r.transform = Qa, r.flush = Za, r.readableObjectMode = true;
    let s = new Xa(r);
    return s[j] = "", s[rt] = new Ya("utf8"), s.matcher = t3, s.mapper = e, s.maxLength = r.maxLength, s.skipOverflow = r.skipOverflow || false, s.overflow = false, s._destroy = function(n, i) {
      this._writableState.errorEmitted = false, i(n);
    }, s;
  }
  un.exports = Ja;
});
var F = f((v) => {
  "use strict";
  Object.defineProperty(v, "__esModule", { value: true });
  v.findWindowsCandidates = v.sort = v.preferredEdgePath = v.preferredFirefoxPath = v.preferredChromePath = v.escapeRegexSpecialChars = v.canAccess = void 0;
  var rc = require("path");
  async function Te({ access: t3 }, e) {
    if (!e) return false;
    try {
      return await t3(e), true;
    } catch {
      return false;
    }
  }
  v.canAccess = Te;
  var sc = "/\\.?*()^${}|[]+";
  function nc(t3, e) {
    let r = sc.split("").filter((n) => !e || e.indexOf(n) < 0).join("").replace(/[\\\]]/g, "\\$&"), s = new RegExp(`[${r}]`, "g");
    return t3.replace(s, "\\$&");
  }
  v.escapeRegexSpecialChars = nc;
  async function ic(t3, e) {
    if (await Te(t3, e.CHROME_PATH)) return e.CHROME_PATH;
  }
  v.preferredChromePath = ic;
  async function oc(t3, e) {
    if (await Te(t3, e.FIREFOX_PATH)) return e.FIREFOX_PATH;
  }
  v.preferredFirefoxPath = oc;
  async function ac(t3, e) {
    if (await Te(t3, e.EDGE_PATH)) return e.EDGE_PATH;
  }
  v.preferredEdgePath = ac;
  function cc(t3, e) {
    return [...t3].filter((s) => !!s).map((s) => {
      let n = e.find((i) => i.regex.test(s));
      return n ? { path: s, weight: n.weight, quality: n.quality } : { path: s, weight: 10, quality: "dev" };
    }).sort((s, n) => n.weight - s.weight).map((s) => ({ path: s.path, quality: s.quality }));
  }
  v.sort = cc;
  async function lc(t3, e, r) {
    let s = [t3.LOCALAPPDATA, t3.PROGRAMFILES, t3["PROGRAMFILES(X86)"]].filter((i) => !!i), n = [];
    for (let i of s) for (let o of r) {
      let a = rc.win32.join(i, o.name);
      n.push(Te(e, a).then((c) => c ? { path: a, quality: o.type } : void 0));
    }
    return (await Promise.all(n)).filter((i) => !!i);
  }
  v.findWindowsCandidates = lc;
});
var at = f((ot) => {
  "use strict";
  Object.defineProperty(ot, "__esModule", { value: true });
  ot.DarwinFinderBase = void 0;
  var uc = require("path"), fc = require("fs"), fr = F(), _n = /( \(0x[a-f0-9]+\))/, dr = class {
    constructor(e = process.env, r = fc.promises, s = s) {
      this.env = e, this.fs = r, this.execa = s, this.lsRegisterCommand = "/System/Library/Frameworks/CoreServices.framework/Versions/A/Frameworks/LaunchServices.framework/Versions/A/Support/lsregister -dump", this.wellKnownPaths = [];
    }
    async findWhere(e) {
      for (let r of this.wellKnownPaths) if (e(r) && await (0, fr.canAccess)(this.fs, r.path)) return r;
      return (await this.findAll()).find(e);
    }
    findAll() {
      var e;
      return (e = this.foundAll) !== null && e !== void 0 || (this.foundAll = this.findAllInner()), this.foundAll;
    }
    async findLaunchRegisteredApps(e, r, s) {
      let { stdout: n } = await this.execa.command(`${this.lsRegisterCommand} | awk 'tolower($0) ~ /${e.toLowerCase()}${_n.source}?$/ { $1=""; print $0 }'`, { shell: true, stdio: "pipe" }), i = [...r, ...n.split(`
`).map((c) => c.trim().replace(_n, ""))].filter((c) => !!c), o = this.getPreferredPath();
      o && i.push(o);
      let a = /* @__PURE__ */ new Set();
      for (let c of i) for (let l of s) {
        let u = uc.posix.join(c.trim(), l);
        try {
          await this.fs.access(u), a.add(u);
        } catch {
        }
      }
      return a;
    }
    createPriorities(e) {
      let r = this.env.HOME && (0, fr.escapeRegexSpecialChars)(this.env.HOME), s = this.getPreferredPath(), n = e.reduce((i, o) => [...i, { regex: new RegExp(`^/Applications/.*${o.name}`), weight: o.weight + 100, quality: o.quality }, { regex: new RegExp(`^${r}/Applications/.*${o.name}`), weight: o.weight, quality: o.quality }, { regex: new RegExp(`^/Volumes/.*${o.name}`), weight: o.weight - 100, quality: o.quality }], []);
      return s && n.unshift({ regex: new RegExp((0, fr.escapeRegexSpecialChars)(s)), weight: 151, quality: "custom" }), n;
    }
  };
  ot.DarwinFinderBase = dr;
});
var wn = f((ct) => {
  "use strict";
  Object.defineProperty(ct, "__esModule", { value: true });
  ct.DarwinChromeBrowserFinder = void 0;
  var dc = F(), hc = at(), hr = class extends hc.DarwinFinderBase {
    constructor() {
      super(...arguments), this.wellKnownPaths = [{ path: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", quality: "stable" }, { path: "/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary", quality: "canary" }, { path: "/Applications/Google Chrome Beta.app/Contents/MacOS/Google Chrome Beta", quality: "beta" }, { path: "/Applications/Google Chrome Dev.app/Contents/MacOS/Google Chrome Dev", quality: "dev" }];
    }
    async findAllInner() {
      let e = ["/Contents/MacOS/Google Chrome Canary", "/Contents/MacOS/Google Chrome Beta", "/Contents/MacOS/Google Chrome Dev", "/Contents/MacOS/Google Chrome"], r = ["/Applications/Google Chrome.app", "/Applications/Google Chrome Canary.app"], s = await this.findLaunchRegisteredApps("google chrome[A-Za-z() ]*.app", r, e);
      return (0, dc.sort)(s, this.createPriorities([{ name: "Chrome.app", weight: 0, quality: "stable" }, { name: "Chrome Canary.app", weight: 1, quality: "canary" }, { name: "Chrome Beta.app", weight: 2, quality: "beta" }, { name: "Chrome Dev.app", weight: 3, quality: "dev" }]));
    }
    getPreferredPath() {
      return this.env.CHROME_PATH;
    }
  };
  ct.DarwinChromeBrowserFinder = hr;
});
var xn = f((lt) => {
  "use strict";
  Object.defineProperty(lt, "__esModule", { value: true });
  lt.DarwinEdgeBrowserFinder = void 0;
  var pc = F(), mc = at(), pr = class extends mc.DarwinFinderBase {
    constructor() {
      super(...arguments), this.wellKnownPaths = [{ path: "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge", quality: "stable" }, { path: "/Applications/Microsoft Edge Canary.app/Contents/MacOS/Microsoft Edge Canary", quality: "canary" }, { path: "/Applications/Microsoft Edge Beta.app/Contents/MacOS/Microsoft Edge Beta", quality: "beta" }, { path: "/Applications/Microsoft Edge Dev.app/Contents/MacOS/Microsoft Edge Dev", quality: "dev" }];
    }
    async findAllInner() {
      let e = ["/Contents/MacOS/Microsoft Edge Canary", "/Contents/MacOS/Microsoft Edge Beta", "/Contents/MacOS/Microsoft Edge Dev", "/Contents/MacOS/Microsoft Edge"], r = ["/Applications/Microsoft Edge.app"], s = await this.findLaunchRegisteredApps("Microsoft Edge[A-Za-z ]*.app", r, e);
      return (0, pc.sort)(s, this.createPriorities([{ name: "Microsoft Edge.app", weight: 0, quality: "stable" }, { name: "Microsoft Edge Canary.app", weight: 1, quality: "canary" }, { name: "Microsoft Edge Beta.app", weight: 2, quality: "beta" }, { name: "Microsoft Edge Dev.app", weight: 3, quality: "dev" }]));
    }
    getPreferredPath() {
      return this.env.EDGE_PATH;
    }
  };
  lt.DarwinEdgeBrowserFinder = pr;
});
var Sn = f((ut) => {
  "use strict";
  Object.defineProperty(ut, "__esModule", { value: true });
  ut.DarwinFirefoxBrowserFinder = void 0;
  var gc = F(), yc = at(), mr = class extends yc.DarwinFinderBase {
    constructor() {
      super(...arguments), this.wellKnownPaths = [{ path: "/Applications/Firefox.app/Contents/MacOS/firefox", quality: "stable" }, { path: "/Applications/Firefox Developer Edition.app/Contents/MacOS/firefox", quality: "dev" }, { path: "/Applications/Firefox Nightly.app/Contents/MacOS/firefox", quality: "canary" }];
    }
    async findAllInner() {
      let e = ["/Contents/MacOS/firefox"], r = ["/Applications/Firefox.app"], s = await this.findLaunchRegisteredApps("Firefox[A-Za-z ]*.app", r, e);
      return (0, gc.sort)(s, this.createPriorities([{ name: "Firefox.app", weight: 0, quality: "stable" }, { name: "Firefox Nightly.app", weight: 1, quality: "canary" }, { name: "Firefox Developer Edition.app", weight: 2, quality: "dev" }]));
    }
    getPreferredPath() {
      return this.env.FIREFOX_PATH;
    }
  };
  ut.DarwinFirefoxBrowserFinder = mr;
});
var dt = f((ft) => {
  "use strict";
  Object.defineProperty(ft, "__esModule", { value: true });
  ft.LinuxChromeBrowserFinder = void 0;
  var _c = require("path"), ne = F(), gr = require("child_process"), wc = require("os"), xc = require("fs"), En = /\r?\n/, yr = class {
    constructor(e = process.env, r = xc.promises) {
      this.env = e, this.fs = r, this.pathEnvironmentVar = "CHROME_PATH", this.priorities = [{ regex: /chrome-wrapper$/, weight: 54, quality: "custom" }, { regex: /google-chrome-dev$/, weight: 53, quality: "dev" }, { regex: /google-chrome-canary$/, weight: 52, quality: "canary" }, { regex: /google-chrome-unstable$/, weight: 51, quality: "canary" }, { regex: /google-chrome-canary$/, weight: 51, quality: "canary" }, { regex: /google-chrome-stable$/, weight: 50, quality: "stable" }, { regex: /(google-)?chrome$/, weight: 49, quality: "stable" }, { regex: /chromium-browser$/, weight: 48, quality: "custom" }, { regex: /chromium$/, weight: 47, quality: "custom" }], this.executablesOnPath = ["google-chrome-unstable", "google-chrome-dev", "google-chrome-beta", "google-chrome-canary", "google-chrome-stable", "google-chrome", "chromium-browser", "chromium"];
    }
    async findWhere(e) {
      return (await this.findAll()).find(e);
    }
    async findAll() {
      let e = /* @__PURE__ */ new Set(), r = this.env[this.pathEnvironmentVar];
      r && await (0, ne.canAccess)(this.fs, r) && e.add(r), [_c.posix.join((0, wc.homedir)(), ".local/share/applications/"), "/usr/share/applications/", "/usr/bin", "/opt/google"].forEach((o) => {
        for (let a in this.findChromeExecutables(o)) e.add(a);
      }), await Promise.all(this.executablesOnPath.map(async (o) => {
        try {
          let a = (0, gr.execFileSync)("which", [o], { stdio: "pipe" }).toString().split(En)[0];
          await (0, ne.canAccess)(this.fs, a) && e.add(a);
        } catch {
        }
      }));
      let i = r ? [{ regex: new RegExp((0, ne.escapeRegexSpecialChars)(r)), weight: 101, quality: "custom" }].concat(this.priorities) : this.priorities;
      return (0, ne.sort)(e, i);
    }
    async findChromeExecutables(e) {
      let r = /(^[^ ]+).*/, s = `^Exec=/.*/(${this.executablesOnPath.join("|")})-.*`, n = [];
      if (await (0, ne.canAccess)(this.fs, e)) {
        let i;
        try {
          i = (0, gr.execSync)(`grep -ERI "${s}" ${e} | awk -F '=' '{print $2}'`);
        } catch {
          i = (0, gr.execSync)(`grep -Er "${s}" ${e} | awk -F '=' '{print $2}'`);
        }
        let o = i.toString().split(En).map((a) => a.replace(r, "$1"));
        await Promise.all(o.map(async (a) => {
          await (0, ne.canAccess)(this.fs, a) && n.push(a);
        }));
      }
      return n;
    }
  };
  ft.LinuxChromeBrowserFinder = yr;
});
var vn = f((ht) => {
  "use strict";
  Object.defineProperty(ht, "__esModule", { value: true });
  ht.LinuxEdgeBrowserFinder = void 0;
  var Sc = dt(), _r = class extends Sc.LinuxChromeBrowserFinder {
    constructor() {
      super(...arguments), this.pathEnvironmentVar = "EDGE_PATH", this.executablesOnPath = ["microsoft-edge-dev", "microsoft-edge-beta", "microsoft-edge-stable", "microsoft-edge"], this.priorities = [{ regex: /microsoft-edge\-wrapper$/, weight: 52, quality: "custom" }, { regex: /microsoft-edge\-dev$/, weight: 51, quality: "dev" }, { regex: /microsoft-edge\-beta$/, weight: 51, quality: "beta" }, { regex: /microsoft-edge\-stable$/, weight: 50, quality: "stable" }, { regex: /microsoft-edge$/, weight: 49, quality: "stable" }];
    }
  };
  ht.LinuxEdgeBrowserFinder = _r;
});
var bn = f((pt) => {
  "use strict";
  Object.defineProperty(pt, "__esModule", { value: true });
  pt.LinuxFirefoxBrowserFinder = void 0;
  var Ec = dt(), wr = class extends Ec.LinuxChromeBrowserFinder {
    constructor() {
      super(...arguments), this.pathEnvironmentVar = "FIREFOX_PATH", this.executablesOnPath = ["firefox-aurora", "firefox-dev", "firefox-developer", "firefox-trunk", "firefox-nightly", "firefox"], this.priorities = [{ regex: /firefox\-aurora$/, weight: 51, quality: "dev" }, { regex: /firefox\-dev$/, weight: 51, quality: "dev" }, { regex: /firefox\-developer$/, weight: 51, quality: "dev" }, { regex: /firefox\-trunk'$/, weight: 50, quality: "canary" }, { regex: /firefox\-nightly'$/, weight: 50, quality: "canary" }, { regex: /firefox$/, weight: 49, quality: "stable" }];
    }
  };
  pt.LinuxFirefoxBrowserFinder = wr;
});
var Pn = f((mt) => {
  "use strict";
  Object.defineProperty(mt, "__esModule", { value: true });
  mt.WindowsChromeBrowserFinder = void 0;
  var vc = require("path"), Cn = F(), bc = require("fs"), xr = class {
    constructor(e = process.env, r = bc.promises) {
      this.env = e, this.fs = r;
    }
    async findWhere(e) {
      return (await this.findAll()).find(e);
    }
    async findAll() {
      let e = vc.win32.sep, r = [{ name: `${e}Google${e}Chrome Dev${e}Application${e}chrome.exe`, type: "dev" }, { name: `${e}Google${e}Chrome SxS${e}Application${e}chrome.exe`, type: "canary" }, { name: `${e}Google${e}Chrome Beta${e}Application${e}chrome.exe`, type: "beta" }, { name: `${e}Google${e}Chrome${e}Application${e}chrome.exe`, type: "stable" }], s = await (0, Cn.findWindowsCandidates)(this.env, this.fs, r), n = await (0, Cn.preferredChromePath)(this.fs, this.env);
      return n && s.unshift({ path: n, quality: "custom" }), s;
    }
  };
  mt.WindowsChromeBrowserFinder = xr;
});
var Tn = f((gt) => {
  "use strict";
  Object.defineProperty(gt, "__esModule", { value: true });
  gt.WindowsEdgeBrowserFinder = void 0;
  var b = require("path"), Cc = require("fs"), On = F(), Sr = class {
    constructor(e = process.env, r = Cc.promises) {
      this.env = e, this.fs = r;
    }
    async findWhere(e) {
      return (await this.findAll()).find(e);
    }
    async findAll() {
      let e = [{ name: `${b.sep}Microsoft${b.sep}Edge SxS${b.sep}Application${b.sep}msedge.exe`, type: "canary" }, { name: `${b.sep}Microsoft${b.sep}Edge Dev${b.sep}Application${b.sep}msedge.exe`, type: "dev" }, { name: `${b.sep}Microsoft${b.sep}Edge Beta${b.sep}Application${b.sep}msedge.exe`, type: "beta" }, { name: `${b.sep}Microsoft${b.sep}Edge${b.sep}Application${b.sep}msedge.exe`, type: "stable" }], r = await (0, On.findWindowsCandidates)(this.env, this.fs, e), s = await (0, On.preferredEdgePath)(this.fs, this.env);
      return s && r.unshift({ path: s, quality: "custom" }), r;
    }
  };
  gt.WindowsEdgeBrowserFinder = Sr;
});
var In = f((yt) => {
  "use strict";
  Object.defineProperty(yt, "__esModule", { value: true });
  yt.WindowsFirefoxBrowserFinder = void 0;
  var Pc = require("path"), kn = F(), Oc = require("fs"), Er = class {
    constructor(e = process.env, r = Oc.promises) {
      this.env = e, this.fs = r;
    }
    async findWhere(e) {
      return (await this.findAll()).find(e);
    }
    async findAll() {
      let e = Pc.win32.sep, r = [{ name: `${e}Firefox Developer Edition${e}firefox.exe`, type: "dev" }, { name: `${e}Firefox Nightly${e}firefox.exe`, type: "canary" }, { name: `${e}Mozilla Firefox${e}firefox.exe`, type: "stable" }], s = await (0, kn.findWindowsCandidates)(this.env, this.fs, r), n = await (0, kn.preferredFirefoxPath)(this.fs, this.env);
      return n && s.unshift({ path: n, quality: "custom" }), s;
    }
  };
  yt.WindowsFirefoxBrowserFinder = Er;
});
var An = f((O) => {
  "use strict";
  Object.defineProperty(O, "__esModule", { value: true });
  O.FirefoxBrowserFinder = O.EdgeBrowserFinder = O.ChromeBrowserFinder = O.isQuality = O.allQualities = void 0;
  var Tc = wn(), kc = xn(), Ic = Sn(), Ac = dt(), Lc = vn(), Rc = bn(), Bc = Pn(), qc = Tn(), Nc = In(), Mc = { canary: null, stable: null, beta: null, dev: null, custom: null };
  O.allQualities = new Set(Object.keys(Mc));
  var Fc = (t3) => O.allQualities.has(t3);
  O.isQuality = Fc;
  O.ChromeBrowserFinder = process.platform === "win32" ? Bc.WindowsChromeBrowserFinder : process.platform === "darwin" ? Tc.DarwinChromeBrowserFinder : Ac.LinuxChromeBrowserFinder;
  O.EdgeBrowserFinder = process.platform === "win32" ? qc.WindowsEdgeBrowserFinder : process.platform === "darwin" ? kc.DarwinEdgeBrowserFinder : Lc.LinuxEdgeBrowserFinder;
  O.FirefoxBrowserFinder = process.platform === "win32" ? Nc.WindowsFirefoxBrowserFinder : process.platform === "darwin" ? Ic.DarwinFirefoxBrowserFinder : Rc.LinuxFirefoxBrowserFinder;
});
var Nn = f((Nf, qn) => {
  "use strict";
  qn.exports = Bn;
  Bn.sync = $c;
  var Ln = require("fs");
  function Dc(t3, e) {
    var r = e.pathExt !== void 0 ? e.pathExt : process.env.PATHEXT;
    if (!r || (r = r.split(";"), r.indexOf("") !== -1)) return true;
    for (var s = 0; s < r.length; s++) {
      var n = r[s].toLowerCase();
      if (n && t3.substr(-n.length).toLowerCase() === n) return true;
    }
    return false;
  }
  function Rn(t3, e, r) {
    return !t3.isSymbolicLink() && !t3.isFile() ? false : Dc(e, r);
  }
  function Bn(t3, e, r) {
    Ln.stat(t3, function(s, n) {
      r(s, s ? false : Rn(n, t3, e));
    });
  }
  function $c(t3, e) {
    return Rn(Ln.statSync(t3), t3, e);
  }
});
var Un = f((Mf, $n) => {
  "use strict";
  $n.exports = Fn;
  Fn.sync = Uc;
  var Mn = require("fs");
  function Fn(t3, e, r) {
    Mn.stat(t3, function(s, n) {
      r(s, s ? false : Dn(n, e));
    });
  }
  function Uc(t3, e) {
    return Dn(Mn.statSync(t3), e);
  }
  function Dn(t3, e) {
    return t3.isFile() && Gc(t3, e);
  }
  function Gc(t3, e) {
    var r = t3.mode, s = t3.uid, n = t3.gid, i = e.uid !== void 0 ? e.uid : process.getuid && process.getuid(), o = e.gid !== void 0 ? e.gid : process.getgid && process.getgid(), a = parseInt("100", 8), c = parseInt("010", 8), l = parseInt("001", 8), u = a | c, d = r & l || r & c && n === o || r & a && s === i || r & u && i === 0;
    return d;
  }
});
var Wn = f((Df, Gn) => {
  "use strict";
  var Ff = require("fs"), _t;
  process.platform === "win32" || global.TESTING_WINDOWS ? _t = Nn() : _t = Un();
  Gn.exports = vr;
  vr.sync = Wc;
  function vr(t3, e, r) {
    if (typeof e == "function" && (r = e, e = {}), !r) {
      if (typeof Promise != "function") throw new TypeError("callback not provided");
      return new Promise(function(s, n) {
        vr(t3, e || {}, function(i, o) {
          i ? n(i) : s(o);
        });
      });
    }
    _t(t3, e || {}, function(s, n) {
      s && (s.code === "EACCES" || e && e.ignoreErrors) && (s = null, n = false), r(s, n);
    });
  }
  function Wc(t3, e) {
    try {
      return _t.sync(t3, e || {});
    } catch (r) {
      if (e && e.ignoreErrors || r.code === "EACCES") return false;
      throw r;
    }
  }
});
var Yn = f(($f, Xn) => {
  "use strict";
  var ie = process.platform === "win32" || process.env.OSTYPE === "cygwin" || process.env.OSTYPE === "msys", jn = require("path"), jc = ie ? ";" : ":", Hn = Wn(), Vn = (t3) => Object.assign(new Error(`not found: ${t3}`), { code: "ENOENT" }), zn = (t3, e) => {
    let r = e.colon || jc, s = t3.match(/\//) || ie && t3.match(/\\/) ? [""] : [...ie ? [process.cwd()] : [], ...(e.path || process.env.PATH || "").split(r)], n = ie ? e.pathExt || process.env.PATHEXT || ".EXE;.CMD;.BAT;.COM" : "", i = ie ? n.split(r) : [""];
    return ie && t3.indexOf(".") !== -1 && i[0] !== "" && i.unshift(""), { pathEnv: s, pathExt: i, pathExtExe: n };
  }, Kn = (t3, e, r) => {
    typeof e == "function" && (r = e, e = {}), e || (e = {});
    let { pathEnv: s, pathExt: n, pathExtExe: i } = zn(t3, e), o = [], a = (l) => new Promise((u, d) => {
      if (l === s.length) return e.all && o.length ? u(o) : d(Vn(t3));
      let p = s[l], g = /^".*"$/.test(p) ? p.slice(1, -1) : p, m = jn.join(g, t3), h = !g && /^\.[\\\/]/.test(t3) ? t3.slice(0, 2) + m : m;
      u(c(h, l, 0));
    }), c = (l, u, d) => new Promise((p, g) => {
      if (d === n.length) return p(a(u + 1));
      let m = n[d];
      Hn(l + m, { pathExt: i }, (h, _) => {
        if (!h && _) if (e.all) o.push(l + m);
        else return p(l + m);
        return p(c(l, u, d + 1));
      });
    });
    return r ? a(0).then((l) => r(null, l), r) : a(0);
  }, Hc = (t3, e) => {
    e = e || {};
    let { pathEnv: r, pathExt: s, pathExtExe: n } = zn(t3, e), i = [];
    for (let o = 0; o < r.length; o++) {
      let a = r[o], c = /^".*"$/.test(a) ? a.slice(1, -1) : a, l = jn.join(c, t3), u = !c && /^\.[\\\/]/.test(t3) ? t3.slice(0, 2) + l : l;
      for (let d = 0; d < s.length; d++) {
        let p = u + s[d];
        try {
          if (Hn.sync(p, { pathExt: n })) if (e.all) i.push(p);
          else return p;
        } catch {
        }
      }
    }
    if (e.all && i.length) return i;
    if (e.nothrow) return null;
    throw Vn(t3);
  };
  Xn.exports = Kn;
  Kn.sync = Hc;
});
var Cr = f((Uf, br) => {
  "use strict";
  var Qn = (t3 = {}) => {
    let e = t3.env || process.env;
    return (t3.platform || process.platform) !== "win32" ? "PATH" : Object.keys(e).reverse().find((s) => s.toUpperCase() === "PATH") || "Path";
  };
  br.exports = Qn;
  br.exports.default = Qn;
});
var ti = f((Gf, ei) => {
  "use strict";
  var Zn = require("path"), Vc = Yn(), zc = Cr();
  function Jn(t3, e) {
    let r = t3.options.env || process.env, s = process.cwd(), n = t3.options.cwd != null, i = n && process.chdir !== void 0 && !process.chdir.disabled;
    if (i) try {
      process.chdir(t3.options.cwd);
    } catch {
    }
    let o;
    try {
      o = Vc.sync(t3.command, { path: r[zc({ env: r })], pathExt: e ? Zn.delimiter : void 0 });
    } catch {
    } finally {
      i && process.chdir(s);
    }
    return o && (o = Zn.resolve(n ? t3.options.cwd : "", o)), o;
  }
  function Kc(t3) {
    return Jn(t3) || Jn(t3, true);
  }
  ei.exports = Kc;
});
var ri = f((Wf, Or) => {
  "use strict";
  var Pr = /([()\][%!^"`<>&|;, *?])/g;
  function Xc(t3) {
    return t3 = t3.replace(Pr, "^$1"), t3;
  }
  function Yc(t3, e) {
    return t3 = `${t3}`, t3 = t3.replace(/(\\*)"/g, '$1$1\\"'), t3 = t3.replace(/(\\*)$/, "$1$1"), t3 = `"${t3}"`, t3 = t3.replace(Pr, "^$1"), e && (t3 = t3.replace(Pr, "^$1")), t3;
  }
  Or.exports.command = Xc;
  Or.exports.argument = Yc;
});
var ni = f((jf, si) => {
  "use strict";
  si.exports = /^#!(.*)/;
});
var oi = f((Hf, ii) => {
  "use strict";
  var Qc = ni();
  ii.exports = (t3 = "") => {
    let e = t3.match(Qc);
    if (!e) return null;
    let [r, s] = e[0].replace(/#! ?/, "").split(" "), n = r.split("/").pop();
    return n === "env" ? s : s ? `${n} ${s}` : n;
  };
});
var ci = f((Vf, ai) => {
  "use strict";
  var Tr = require("fs"), Zc = oi();
  function Jc(t3) {
    let r = Buffer.alloc(150), s;
    try {
      s = Tr.openSync(t3, "r"), Tr.readSync(s, r, 0, 150, 0), Tr.closeSync(s);
    } catch {
    }
    return Zc(r.toString());
  }
  ai.exports = Jc;
});
var di = f((zf, fi) => {
  "use strict";
  var el = require("path"), li = ti(), ui = ri(), tl = ci(), rl = process.platform === "win32", sl = /\.(?:com|exe)$/i, nl = /node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;
  function il(t3) {
    t3.file = li(t3);
    let e = t3.file && tl(t3.file);
    return e ? (t3.args.unshift(t3.file), t3.command = e, li(t3)) : t3.file;
  }
  function ol(t3) {
    if (!rl) return t3;
    let e = il(t3), r = !sl.test(e);
    if (t3.options.forceShell || r) {
      let s = nl.test(e);
      t3.command = el.normalize(t3.command), t3.command = ui.command(t3.command), t3.args = t3.args.map((i) => ui.argument(i, s));
      let n = [t3.command].concat(t3.args).join(" ");
      t3.args = ["/d", "/s", "/c", `"${n}"`], t3.command = process.env.comspec || "cmd.exe", t3.options.windowsVerbatimArguments = true;
    }
    return t3;
  }
  function al(t3, e, r) {
    e && !Array.isArray(e) && (r = e, e = null), e = e ? e.slice(0) : [], r = Object.assign({}, r);
    let s = { command: t3, args: e, options: r, file: void 0, original: { command: t3, args: e } };
    return r.shell ? s : ol(s);
  }
  fi.exports = al;
});
var mi = f((Kf, pi) => {
  "use strict";
  var kr = process.platform === "win32";
  function Ir(t3, e) {
    return Object.assign(new Error(`${e} ${t3.command} ENOENT`), { code: "ENOENT", errno: "ENOENT", syscall: `${e} ${t3.command}`, path: t3.command, spawnargs: t3.args });
  }
  function cl(t3, e) {
    if (!kr) return;
    let r = t3.emit;
    t3.emit = function(s, n) {
      if (s === "exit") {
        let i = hi(n, e, "spawn");
        if (i) return r.call(t3, "error", i);
      }
      return r.apply(t3, arguments);
    };
  }
  function hi(t3, e) {
    return kr && t3 === 1 && !e.file ? Ir(e.original, "spawn") : null;
  }
  function ll(t3, e) {
    return kr && t3 === 1 && !e.file ? Ir(e.original, "spawnSync") : null;
  }
  pi.exports = { hookChildProcess: cl, verifyENOENT: hi, verifyENOENTSync: ll, notFoundError: Ir };
});
var _i = f((Xf, oe) => {
  "use strict";
  var gi = require("child_process"), Ar = di(), Lr = mi();
  function yi(t3, e, r) {
    let s = Ar(t3, e, r), n = gi.spawn(s.command, s.args, s.options);
    return Lr.hookChildProcess(n, s), n;
  }
  function ul(t3, e, r) {
    let s = Ar(t3, e, r), n = gi.spawnSync(s.command, s.args, s.options);
    return n.error = n.error || Lr.verifyENOENTSync(n.status, s), n;
  }
  oe.exports = yi;
  oe.exports.spawn = yi;
  oe.exports.sync = ul;
  oe.exports._parse = Ar;
  oe.exports._enoent = Lr;
});
var xi = f((Yf, wi) => {
  "use strict";
  wi.exports = (t3) => {
    let e = typeof t3 == "string" ? `
` : 10, r = typeof t3 == "string" ? "\r" : 13;
    return t3[t3.length - 1] === e && (t3 = t3.slice(0, t3.length - 1)), t3[t3.length - 1] === r && (t3 = t3.slice(0, t3.length - 1)), t3;
  };
});
var vi = f((Qf, Ie) => {
  "use strict";
  var ke = require("path"), Si = Cr(), Ei = (t3) => {
    t3 = { cwd: process.cwd(), path: process.env[Si()], execPath: process.execPath, ...t3 };
    let e, r = ke.resolve(t3.cwd), s = [];
    for (; e !== r; ) s.push(ke.join(r, "node_modules/.bin")), e = r, r = ke.resolve(r, "..");
    let n = ke.resolve(t3.cwd, t3.execPath, "..");
    return s.push(n), s.concat(t3.path).join(ke.delimiter);
  };
  Ie.exports = Ei;
  Ie.exports.default = Ei;
  Ie.exports.env = (t3) => {
    t3 = { env: process.env, ...t3 };
    let e = { ...t3.env }, r = Si({ env: e });
    return t3.path = e[r], e[r] = Ie.exports(t3), e;
  };
});
var Ci = f((Zf, Rr) => {
  "use strict";
  var bi = (t3, e) => {
    for (let r of Reflect.ownKeys(e)) Object.defineProperty(t3, r, Object.getOwnPropertyDescriptor(e, r));
    return t3;
  };
  Rr.exports = bi;
  Rr.exports.default = bi;
});
var Oi = f((Jf, xt) => {
  "use strict";
  var fl = Ci(), wt = /* @__PURE__ */ new WeakMap(), Pi = (t3, e = {}) => {
    if (typeof t3 != "function") throw new TypeError("Expected a function");
    let r, s = 0, n = t3.displayName || t3.name || "<anonymous>", i = function(...o) {
      if (wt.set(i, ++s), s === 1) r = t3.apply(this, o), t3 = null;
      else if (e.throw === true) throw new Error(`Function \`${n}\` can only be called once`);
      return r;
    };
    return fl(i, t3), wt.set(i, s), i;
  };
  xt.exports = Pi;
  xt.exports.default = Pi;
  xt.exports.callCount = (t3) => {
    if (!wt.has(t3)) throw new Error(`The given function \`${t3.name}\` is not wrapped by the \`onetime\` package`);
    return wt.get(t3);
  };
});
var Ti = f((St) => {
  "use strict";
  Object.defineProperty(St, "__esModule", { value: true });
  St.SIGNALS = void 0;
  var dl = [{ name: "SIGHUP", number: 1, action: "terminate", description: "Terminal closed", standard: "posix" }, { name: "SIGINT", number: 2, action: "terminate", description: "User interruption with CTRL-C", standard: "ansi" }, { name: "SIGQUIT", number: 3, action: "core", description: "User interruption with CTRL-\\", standard: "posix" }, { name: "SIGILL", number: 4, action: "core", description: "Invalid machine instruction", standard: "ansi" }, { name: "SIGTRAP", number: 5, action: "core", description: "Debugger breakpoint", standard: "posix" }, { name: "SIGABRT", number: 6, action: "core", description: "Aborted", standard: "ansi" }, { name: "SIGIOT", number: 6, action: "core", description: "Aborted", standard: "bsd" }, { name: "SIGBUS", number: 7, action: "core", description: "Bus error due to misaligned, non-existing address or paging error", standard: "bsd" }, { name: "SIGEMT", number: 7, action: "terminate", description: "Command should be emulated but is not implemented", standard: "other" }, { name: "SIGFPE", number: 8, action: "core", description: "Floating point arithmetic error", standard: "ansi" }, { name: "SIGKILL", number: 9, action: "terminate", description: "Forced termination", standard: "posix", forced: true }, { name: "SIGUSR1", number: 10, action: "terminate", description: "Application-specific signal", standard: "posix" }, { name: "SIGSEGV", number: 11, action: "core", description: "Segmentation fault", standard: "ansi" }, { name: "SIGUSR2", number: 12, action: "terminate", description: "Application-specific signal", standard: "posix" }, { name: "SIGPIPE", number: 13, action: "terminate", description: "Broken pipe or socket", standard: "posix" }, { name: "SIGALRM", number: 14, action: "terminate", description: "Timeout or timer", standard: "posix" }, { name: "SIGTERM", number: 15, action: "terminate", description: "Termination", standard: "ansi" }, { name: "SIGSTKFLT", number: 16, action: "terminate", description: "Stack is empty or overflowed", standard: "other" }, { name: "SIGCHLD", number: 17, action: "ignore", description: "Child process terminated, paused or unpaused", standard: "posix" }, { name: "SIGCLD", number: 17, action: "ignore", description: "Child process terminated, paused or unpaused", standard: "other" }, { name: "SIGCONT", number: 18, action: "unpause", description: "Unpaused", standard: "posix", forced: true }, { name: "SIGSTOP", number: 19, action: "pause", description: "Paused", standard: "posix", forced: true }, { name: "SIGTSTP", number: 20, action: "pause", description: 'Paused using CTRL-Z or "suspend"', standard: "posix" }, { name: "SIGTTIN", number: 21, action: "pause", description: "Background process cannot read terminal input", standard: "posix" }, { name: "SIGBREAK", number: 21, action: "terminate", description: "User interruption with CTRL-BREAK", standard: "other" }, { name: "SIGTTOU", number: 22, action: "pause", description: "Background process cannot write to terminal output", standard: "posix" }, { name: "SIGURG", number: 23, action: "ignore", description: "Socket received out-of-band data", standard: "bsd" }, { name: "SIGXCPU", number: 24, action: "core", description: "Process timed out", standard: "bsd" }, { name: "SIGXFSZ", number: 25, action: "core", description: "File too big", standard: "bsd" }, { name: "SIGVTALRM", number: 26, action: "terminate", description: "Timeout or timer", standard: "bsd" }, { name: "SIGPROF", number: 27, action: "terminate", description: "Timeout or timer", standard: "bsd" }, { name: "SIGWINCH", number: 28, action: "ignore", description: "Terminal window size changed", standard: "bsd" }, { name: "SIGIO", number: 29, action: "terminate", description: "I/O is available", standard: "other" }, { name: "SIGPOLL", number: 29, action: "terminate", description: "Watched event", standard: "other" }, { name: "SIGINFO", number: 29, action: "ignore", description: "Request for process information", standard: "other" }, { name: "SIGPWR", number: 30, action: "terminate", description: "Device running out of power", standard: "systemv" }, { name: "SIGSYS", number: 31, action: "core", description: "Invalid system call", standard: "other" }, { name: "SIGUNUSED", number: 31, action: "terminate", description: "Invalid system call", standard: "other" }];
  St.SIGNALS = dl;
});
var Br = f((ae) => {
  "use strict";
  Object.defineProperty(ae, "__esModule", { value: true });
  ae.SIGRTMAX = ae.getRealtimeSignals = void 0;
  var hl = function() {
    let t3 = Ii - ki + 1;
    return Array.from({ length: t3 }, pl);
  };
  ae.getRealtimeSignals = hl;
  var pl = function(t3, e) {
    return { name: `SIGRT${e + 1}`, number: ki + e, action: "terminate", description: "Application-specific signal (realtime)", standard: "posix" };
  }, ki = 34, Ii = 64;
  ae.SIGRTMAX = Ii;
});
var Ai = f((Et) => {
  "use strict";
  Object.defineProperty(Et, "__esModule", { value: true });
  Et.getSignals = void 0;
  var ml = require("os"), gl = Ti(), yl = Br(), _l = function() {
    let t3 = (0, yl.getRealtimeSignals)();
    return [...gl.SIGNALS, ...t3].map(wl);
  };
  Et.getSignals = _l;
  var wl = function({ name: t3, number: e, description: r, action: s, forced: n = false, standard: i }) {
    let { signals: { [t3]: o } } = ml.constants, a = o !== void 0;
    return { name: t3, number: a ? o : e, description: r, supported: a, action: s, forced: n, standard: i };
  };
});
var Ri = f((ce) => {
  "use strict";
  Object.defineProperty(ce, "__esModule", { value: true });
  ce.signalsByNumber = ce.signalsByName = void 0;
  var xl = require("os"), Li = Ai(), Sl = Br(), El = function() {
    return (0, Li.getSignals)().reduce(vl, {});
  }, vl = function(t3, { name: e, number: r, description: s, supported: n, action: i, forced: o, standard: a }) {
    return { ...t3, [e]: { name: e, number: r, description: s, supported: n, action: i, forced: o, standard: a } };
  }, bl = El();
  ce.signalsByName = bl;
  var Cl = function() {
    let t3 = (0, Li.getSignals)(), e = Sl.SIGRTMAX + 1, r = Array.from({ length: e }, (s, n) => Pl(n, t3));
    return Object.assign({}, ...r);
  }, Pl = function(t3, e) {
    let r = Ol(t3, e);
    if (r === void 0) return {};
    let { name: s, description: n, supported: i, action: o, forced: a, standard: c } = r;
    return { [t3]: { name: s, number: t3, description: n, supported: i, action: o, forced: a, standard: c } };
  }, Ol = function(t3, e) {
    let r = e.find(({ name: s }) => xl.constants.signals[s] === t3);
    return r !== void 0 ? r : e.find((s) => s.number === t3);
  }, Tl = Cl();
  ce.signalsByNumber = Tl;
});
var qi = f((nd, Bi) => {
  "use strict";
  var { signalsByName: kl } = Ri(), Il = ({ timedOut: t3, timeout: e, errorCode: r, signal: s, signalDescription: n, exitCode: i, isCanceled: o }) => t3 ? `timed out after ${e} milliseconds` : o ? "was canceled" : r !== void 0 ? `failed with ${r}` : s !== void 0 ? `was killed with ${s} (${n})` : i !== void 0 ? `failed with exit code ${i}` : "failed", Al = ({ stdout: t3, stderr: e, all: r, error: s, signal: n, exitCode: i, command: o, escapedCommand: a, timedOut: c, isCanceled: l, killed: u, parsed: { options: { timeout: d } } }) => {
    i = i === null ? void 0 : i, n = n === null ? void 0 : n;
    let p = n === void 0 ? void 0 : kl[n].description, g = s && s.code, h = `Command ${Il({ timedOut: c, timeout: d, errorCode: g, signal: n, signalDescription: p, exitCode: i, isCanceled: l })}: ${o}`, _ = Object.prototype.toString.call(s) === "[object Error]", k = _ ? `${h}
${s.message}` : h, A = [k, e, t3].filter(Boolean).join(`
`);
    return _ ? (s.originalMessage = s.message, s.message = A) : s = new Error(A), s.shortMessage = k, s.command = o, s.escapedCommand = a, s.exitCode = i, s.signal = n, s.signalDescription = p, s.stdout = t3, s.stderr = e, r !== void 0 && (s.all = r), "bufferedData" in s && delete s.bufferedData, s.failed = true, s.timedOut = !!c, s.isCanceled = l, s.killed = u && !c, s;
  };
  Bi.exports = Al;
});
var Mi = f((id, qr) => {
  "use strict";
  var vt = ["stdin", "stdout", "stderr"], Ll = (t3) => vt.some((e) => t3[e] !== void 0), Ni = (t3) => {
    if (!t3) return;
    let { stdio: e } = t3;
    if (e === void 0) return vt.map((s) => t3[s]);
    if (Ll(t3)) throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${vt.map((s) => `\`${s}\``).join(", ")}`);
    if (typeof e == "string") return e;
    if (!Array.isArray(e)) throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof e}\``);
    let r = Math.max(e.length, vt.length);
    return Array.from({ length: r }, (s, n) => e[n]);
  };
  qr.exports = Ni;
  qr.exports.node = (t3) => {
    let e = Ni(t3);
    return e === "ipc" ? "ipc" : e === void 0 || typeof e == "string" ? [e, e, e, "ipc"] : e.includes("ipc") ? e : [...e, "ipc"];
  };
});
var Fi = f((od, bt) => {
  "use strict";
  bt.exports = ["SIGABRT", "SIGALRM", "SIGHUP", "SIGINT", "SIGTERM"];
  process.platform !== "win32" && bt.exports.push("SIGVTALRM", "SIGXCPU", "SIGXFSZ", "SIGUSR2", "SIGTRAP", "SIGSYS", "SIGQUIT", "SIGIOT");
  process.platform === "linux" && bt.exports.push("SIGIO", "SIGPOLL", "SIGPWR", "SIGSTKFLT", "SIGUNUSED");
});
var Wi = f((ad, fe) => {
  "use strict";
  var y = global.process, X = function(t3) {
    return t3 && typeof t3 == "object" && typeof t3.removeListener == "function" && typeof t3.emit == "function" && typeof t3.reallyExit == "function" && typeof t3.listeners == "function" && typeof t3.kill == "function" && typeof t3.pid == "number" && typeof t3.on == "function";
  };
  X(y) ? (Di = require("assert"), le = Fi(), $i = /^win/i.test(y.platform), Ae = require("events"), typeof Ae != "function" && (Ae = Ae.EventEmitter), y.__signal_exit_emitter__ ? x = y.__signal_exit_emitter__ : (x = y.__signal_exit_emitter__ = new Ae(), x.count = 0, x.emitted = {}), x.infinite || (x.setMaxListeners(1 / 0), x.infinite = true), fe.exports = function(t3, e) {
    if (!X(global.process)) return function() {
    };
    Di.equal(typeof t3, "function", "a callback must be provided for exit handler"), ue === false && Nr();
    var r = "exit";
    e && e.alwaysLast && (r = "afterexit");
    var s = function() {
      x.removeListener(r, t3), x.listeners("exit").length === 0 && x.listeners("afterexit").length === 0 && Ct();
    };
    return x.on(r, t3), s;
  }, Ct = function() {
    !ue || !X(global.process) || (ue = false, le.forEach(function(e) {
      try {
        y.removeListener(e, Pt[e]);
      } catch {
      }
    }), y.emit = Ot, y.reallyExit = Mr, x.count -= 1);
  }, fe.exports.unload = Ct, Y = function(e, r, s) {
    x.emitted[e] || (x.emitted[e] = true, x.emit(e, r, s));
  }, Pt = {}, le.forEach(function(t3) {
    Pt[t3] = function() {
      if (X(global.process)) {
        var r = y.listeners(t3);
        r.length === x.count && (Ct(), Y("exit", null, t3), Y("afterexit", null, t3), $i && t3 === "SIGHUP" && (t3 = "SIGINT"), y.kill(y.pid, t3));
      }
    };
  }), fe.exports.signals = function() {
    return le;
  }, ue = false, Nr = function() {
    ue || !X(global.process) || (ue = true, x.count += 1, le = le.filter(function(e) {
      try {
        return y.on(e, Pt[e]), true;
      } catch {
        return false;
      }
    }), y.emit = Gi, y.reallyExit = Ui);
  }, fe.exports.load = Nr, Mr = y.reallyExit, Ui = function(e) {
    X(global.process) && (y.exitCode = e || 0, Y("exit", y.exitCode, null), Y("afterexit", y.exitCode, null), Mr.call(y, y.exitCode));
  }, Ot = y.emit, Gi = function(e, r) {
    if (e === "exit" && X(global.process)) {
      r !== void 0 && (y.exitCode = r);
      var s = Ot.apply(this, arguments);
      return Y("exit", y.exitCode, null), Y("afterexit", y.exitCode, null), s;
    } else return Ot.apply(this, arguments);
  }) : fe.exports = function() {
    return function() {
    };
  };
  var Di, le, $i, Ae, x, Ct, Y, Pt, ue, Nr, Mr, Ui, Ot, Gi;
});
var Hi = f((cd, ji) => {
  "use strict";
  var Rl = require("os"), Bl = Wi(), ql = 1e3 * 5, Nl = (t3, e = "SIGTERM", r = {}) => {
    let s = t3(e);
    return Ml(t3, e, r, s), s;
  }, Ml = (t3, e, r, s) => {
    if (!Fl(e, r, s)) return;
    let n = $l(r), i = setTimeout(() => {
      t3("SIGKILL");
    }, n);
    i.unref && i.unref();
  }, Fl = (t3, { forceKillAfterTimeout: e }, r) => Dl(t3) && e !== false && r, Dl = (t3) => t3 === Rl.constants.signals.SIGTERM || typeof t3 == "string" && t3.toUpperCase() === "SIGTERM", $l = ({ forceKillAfterTimeout: t3 = true }) => {
    if (t3 === true) return ql;
    if (!Number.isFinite(t3) || t3 < 0) throw new TypeError(`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${t3}\` (${typeof t3})`);
    return t3;
  }, Ul = (t3, e) => {
    t3.kill() && (e.isCanceled = true);
  }, Gl = (t3, e, r) => {
    t3.kill(e), r(Object.assign(new Error("Timed out"), { timedOut: true, signal: e }));
  }, Wl = (t3, { timeout: e, killSignal: r = "SIGTERM" }, s) => {
    if (e === 0 || e === void 0) return s;
    let n, i = new Promise((a, c) => {
      n = setTimeout(() => {
        Gl(t3, r, c);
      }, e);
    }), o = s.finally(() => {
      clearTimeout(n);
    });
    return Promise.race([i, o]);
  }, jl = ({ timeout: t3 }) => {
    if (t3 !== void 0 && (!Number.isFinite(t3) || t3 < 0)) throw new TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${t3}\` (${typeof t3})`);
  }, Hl = async (t3, { cleanup: e, detached: r }, s) => {
    if (!e || r) return s;
    let n = Bl(() => {
      t3.kill();
    });
    return s.finally(() => {
      n();
    });
  };
  ji.exports = { spawnedKill: Nl, spawnedCancel: Ul, setupTimeout: Wl, validateTimeout: jl, setExitHandler: Hl };
});
var zi = f((ld, Vi) => {
  "use strict";
  var R = (t3) => t3 !== null && typeof t3 == "object" && typeof t3.pipe == "function";
  R.writable = (t3) => R(t3) && t3.writable !== false && typeof t3._write == "function" && typeof t3._writableState == "object";
  R.readable = (t3) => R(t3) && t3.readable !== false && typeof t3._read == "function" && typeof t3._readableState == "object";
  R.duplex = (t3) => R.writable(t3) && R.readable(t3);
  R.transform = (t3) => R.duplex(t3) && typeof t3._transform == "function" && typeof t3._transformState == "object";
  Vi.exports = R;
});
var Xi = f((ud, Ki) => {
  "use strict";
  var { PassThrough: Vl } = require("stream");
  Ki.exports = (t3) => {
    t3 = { ...t3 };
    let { array: e } = t3, { encoding: r } = t3, s = r === "buffer", n = false;
    e ? n = !(r || s) : r = r || "utf8", s && (r = null);
    let i = new Vl({ objectMode: n });
    r && i.setEncoding(r);
    let o = 0, a = [];
    return i.on("data", (c) => {
      a.push(c), n ? o = a.length : o += c.length;
    }), i.getBufferedValue = () => e ? a : s ? Buffer.concat(a, o) : a.join(""), i.getBufferedLength = () => o, i;
  };
});
var Yi = f((fd, Le) => {
  "use strict";
  var { constants: zl } = require("buffer"), Kl = require("stream"), { promisify: Xl } = require("util"), Yl = Xi(), Ql = Xl(Kl.pipeline), Tt = class extends Error {
    constructor() {
      super("maxBuffer exceeded"), this.name = "MaxBufferError";
    }
  };
  async function Fr(t3, e) {
    if (!t3) throw new Error("Expected a stream");
    e = { maxBuffer: 1 / 0, ...e };
    let { maxBuffer: r } = e, s = Yl(e);
    return await new Promise((n, i) => {
      let o = (a) => {
        a && s.getBufferedLength() <= zl.MAX_LENGTH && (a.bufferedData = s.getBufferedValue()), i(a);
      };
      (async () => {
        try {
          await Ql(t3, s), n();
        } catch (a) {
          o(a);
        }
      })(), s.on("data", () => {
        s.getBufferedLength() > r && o(new Tt());
      });
    }), s.getBufferedValue();
  }
  Le.exports = Fr;
  Le.exports.buffer = (t3, e) => Fr(t3, { ...e, encoding: "buffer" });
  Le.exports.array = (t3, e) => Fr(t3, { ...e, array: true });
  Le.exports.MaxBufferError = Tt;
});
var Zi = f((dd, Qi) => {
  "use strict";
  var { PassThrough: Zl } = require("stream");
  Qi.exports = function() {
    var t3 = [], e = new Zl({ objectMode: true });
    return e.setMaxListeners(0), e.add = r, e.isEmpty = s, e.on("unpipe", n), Array.prototype.slice.call(arguments).forEach(r), e;
    function r(i) {
      return Array.isArray(i) ? (i.forEach(r), this) : (t3.push(i), i.once("end", n.bind(null, i)), i.once("error", e.emit.bind(e, "error")), i.pipe(e, { end: false }), this);
    }
    function s() {
      return t3.length == 0;
    }
    function n(i) {
      t3 = t3.filter(function(o) {
        return o !== i;
      }), !t3.length && e.readable && e.end();
    }
  };
});
var ro = f((hd, to) => {
  "use strict";
  var eo = zi(), Ji = Yi(), Jl = Zi(), eu = (t3, e) => {
    e === void 0 || t3.stdin === void 0 || (eo(e) ? e.pipe(t3.stdin) : t3.stdin.end(e));
  }, tu = (t3, { all: e }) => {
    if (!e || !t3.stdout && !t3.stderr) return;
    let r = Jl();
    return t3.stdout && r.add(t3.stdout), t3.stderr && r.add(t3.stderr), r;
  }, Dr = async (t3, e) => {
    if (t3) {
      t3.destroy();
      try {
        return await e;
      } catch (r) {
        return r.bufferedData;
      }
    }
  }, $r = (t3, { encoding: e, buffer: r, maxBuffer: s }) => {
    if (!(!t3 || !r)) return e ? Ji(t3, { encoding: e, maxBuffer: s }) : Ji.buffer(t3, { maxBuffer: s });
  }, ru = async ({ stdout: t3, stderr: e, all: r }, { encoding: s, buffer: n, maxBuffer: i }, o) => {
    let a = $r(t3, { encoding: s, buffer: n, maxBuffer: i }), c = $r(e, { encoding: s, buffer: n, maxBuffer: i }), l = $r(r, { encoding: s, buffer: n, maxBuffer: i * 2 });
    try {
      return await Promise.all([o, a, c, l]);
    } catch (u) {
      return Promise.all([{ error: u, signal: u.signal, timedOut: u.timedOut }, Dr(t3, a), Dr(e, c), Dr(r, l)]);
    }
  }, su = ({ input: t3 }) => {
    if (eo(t3)) throw new TypeError("The `input` option cannot be a stream in sync mode");
  };
  to.exports = { handleInput: eu, makeAllStream: tu, getSpawnedResult: ru, validateInputSync: su };
});
var no = f((pd, so) => {
  "use strict";
  var nu = (async () => {
  })().constructor.prototype, iu = ["then", "catch", "finally"].map((t3) => [t3, Reflect.getOwnPropertyDescriptor(nu, t3)]), ou = (t3, e) => {
    for (let [r, s] of iu) {
      let n = typeof e == "function" ? (...i) => Reflect.apply(s.value, e(), i) : s.value.bind(e);
      Reflect.defineProperty(t3, r, { ...s, value: n });
    }
    return t3;
  }, au = (t3) => new Promise((e, r) => {
    t3.on("exit", (s, n) => {
      e({ exitCode: s, signal: n });
    }), t3.on("error", (s) => {
      r(s);
    }), t3.stdin && t3.stdin.on("error", (s) => {
      r(s);
    });
  });
  so.exports = { mergePromise: ou, getSpawnedPromise: au };
});
var ao = f((md, oo) => {
  "use strict";
  var io = (t3, e = []) => Array.isArray(e) ? [t3, ...e] : [t3], cu = /^[\w.-]+$/, lu = /"/g, uu = (t3) => typeof t3 != "string" || cu.test(t3) ? t3 : `"${t3.replace(lu, '\\"')}"`, fu = (t3, e) => io(t3, e).join(" "), du = (t3, e) => io(t3, e).map((r) => uu(r)).join(" "), hu = / +/g, pu = (t3) => {
    let e = [];
    for (let r of t3.trim().split(hu)) {
      let s = e[e.length - 1];
      s && s.endsWith("\\") ? e[e.length - 1] = `${s.slice(0, -1)} ${r}` : e.push(r);
    }
    return e;
  };
  oo.exports = { joinCommand: fu, getEscapedCommand: du, parseCommand: pu };
});
var mo = f((gd, de) => {
  "use strict";
  var mu = require("path"), Ur = require("child_process"), gu = _i(), yu = xi(), _u = vi(), wu = Oi(), kt = qi(), lo = Mi(), { spawnedKill: xu, spawnedCancel: Su, setupTimeout: Eu, validateTimeout: vu, setExitHandler: bu } = Hi(), { handleInput: Cu, getSpawnedResult: Pu, makeAllStream: Ou, validateInputSync: Tu } = ro(), { mergePromise: co, getSpawnedPromise: ku } = no(), { joinCommand: uo, parseCommand: fo, getEscapedCommand: ho } = ao(), Iu = 1e3 * 1e3 * 100, Au = ({ env: t3, extendEnv: e, preferLocal: r, localDir: s, execPath: n }) => {
    let i = e ? { ...process.env, ...t3 } : t3;
    return r ? _u.env({ env: i, cwd: s, execPath: n }) : i;
  }, po = (t3, e, r = {}) => {
    let s = gu._parse(t3, e, r);
    return t3 = s.command, e = s.args, r = s.options, r = { maxBuffer: Iu, buffer: true, stripFinalNewline: true, extendEnv: true, preferLocal: false, localDir: r.cwd || process.cwd(), execPath: process.execPath, encoding: "utf8", reject: true, cleanup: true, all: false, windowsHide: true, ...r }, r.env = Au(r), r.stdio = lo(r), process.platform === "win32" && mu.basename(t3, ".exe") === "cmd" && e.unshift("/q"), { file: t3, args: e, options: r, parsed: s };
  }, Re = (t3, e, r) => typeof e != "string" && !Buffer.isBuffer(e) ? r === void 0 ? void 0 : "" : t3.stripFinalNewline ? yu(e) : e, It = (t3, e, r) => {
    let s = po(t3, e, r), n = uo(t3, e), i = ho(t3, e);
    vu(s.options);
    let o;
    try {
      o = Ur.spawn(s.file, s.args, s.options);
    } catch (g) {
      let m = new Ur.ChildProcess(), h = Promise.reject(kt({ error: g, stdout: "", stderr: "", all: "", command: n, escapedCommand: i, parsed: s, timedOut: false, isCanceled: false, killed: false }));
      return co(m, h);
    }
    let a = ku(o), c = Eu(o, s.options, a), l = bu(o, s.options, c), u = { isCanceled: false };
    o.kill = xu.bind(null, o.kill.bind(o)), o.cancel = Su.bind(null, o, u);
    let p = wu(async () => {
      let [{ error: g, exitCode: m, signal: h, timedOut: _ }, k, A, Ne] = await Pu(o, s.options, l), B = Re(s.options, k), $ = Re(s.options, A), pe = Re(s.options, Ne);
      if (g || m !== 0 || h !== null) {
        let Z = kt({ error: g, exitCode: m, signal: h, stdout: B, stderr: $, all: pe, command: n, escapedCommand: i, parsed: s, timedOut: _, isCanceled: u.isCanceled, killed: o.killed });
        if (!s.options.reject) return Z;
        throw Z;
      }
      return { command: n, escapedCommand: i, exitCode: 0, stdout: B, stderr: $, all: pe, failed: false, timedOut: false, isCanceled: false, killed: false };
    });
    return Cu(o, s.options.input), o.all = Ou(o, s.options), co(o, p);
  };
  de.exports = It;
  de.exports.sync = (t3, e, r) => {
    let s = po(t3, e, r), n = uo(t3, e), i = ho(t3, e);
    Tu(s.options);
    let o;
    try {
      o = Ur.spawnSync(s.file, s.args, s.options);
    } catch (l) {
      throw kt({ error: l, stdout: "", stderr: "", all: "", command: n, escapedCommand: i, parsed: s, timedOut: false, isCanceled: false, killed: false });
    }
    let a = Re(s.options, o.stdout, o.error), c = Re(s.options, o.stderr, o.error);
    if (o.error || o.status !== 0 || o.signal !== null) {
      let l = kt({ stdout: a, stderr: c, error: o.error, signal: o.signal, exitCode: o.status, command: n, escapedCommand: i, parsed: s, timedOut: o.error && o.error.code === "ETIMEDOUT", isCanceled: false, killed: o.signal !== null });
      if (!s.options.reject) return l;
      throw l;
    }
    return { command: n, escapedCommand: i, exitCode: 0, stdout: a, stderr: c, failed: false, timedOut: false, isCanceled: false, killed: false };
  };
  de.exports.command = (t3, e) => {
    let [r, ...s] = fo(t3);
    return It(r, s, e);
  };
  de.exports.commandSync = (t3, e) => {
    let [r, ...s] = fo(t3);
    return It.sync(r, s, e);
  };
  de.exports.node = (t3, e, r = {}) => {
    e && !Array.isArray(e) && typeof e == "object" && (r = e, e = []);
    let s = lo.node(r), n = process.execArgv.filter((a) => !a.startsWith("--inspect")), { nodePath: i = process.execPath, nodeOptions: o = n } = r;
    return It(i, [...o, t3, ...Array.isArray(e) ? e : []], { ...r, stdin: void 0, stdout: void 0, stderr: void 0, stdio: s, shell: false });
  };
});
var Bu = {};
Oo(Bu, { activate: () => Lu, deactivate: () => Ru });
module.exports = To(Bu);
var es = require("node:util"), De = S(require("node:process"), 1), ts = require("node:child_process");
var Vr = require("node:util"), zr = S(require("node:process"), 1), Kr = require("node:child_process"), ko = (0, Vr.promisify)(Kr.execFile);
async function Nt() {
  if (zr.default.platform !== "darwin") throw new Error("macOS only");
  let { stdout: t3 } = await ko("defaults", ["read", "com.apple.LaunchServices/com.apple.launchservices.secure", "LSHandlers"]);
  return /LSHandlerRoleAll = "(?!-)(?<id>[^"]+?)";\s+?LSHandlerURLScheme = (?:http|https);/.exec(t3)?.groups.id ?? "com.apple.Safari";
}
var Xr = S(require("node:process"), 1), Yr = require("node:util"), Mt = require("node:child_process"), Io = (0, Yr.promisify)(Mt.execFile);
async function Qr(t3, { humanReadableOutput: e = true } = {}) {
  if (Xr.default.platform !== "darwin") throw new Error("macOS only");
  let r = e ? [] : ["-ss"], { stdout: s } = await Io("osascript", ["-e", t3, r]);
  return s.trim();
}
async function Ft(t3) {
  return Qr(`tell application "Finder" to set app_path to application file id "${t3}" as string
tell application "System Events" to get value of property list item "CFBundleName" of property list file (app_path & ":Contents:Info.plist")`);
}
var Zr = require("node:util"), Jr = require("node:child_process"), Ao = (0, Zr.promisify)(Jr.execFile), Lo = { AppXq0fevzme2pys62n3e0fbqa7peapykr8v: { name: "Edge", id: "com.microsoft.edge.old" }, MSEdgeDHTML: { name: "Edge", id: "com.microsoft.edge" }, MSEdgeHTM: { name: "Edge", id: "com.microsoft.edge" }, "IE.HTTP": { name: "Internet Explorer", id: "com.microsoft.ie" }, FirefoxURL: { name: "Firefox", id: "org.mozilla.firefox" }, ChromeHTML: { name: "Chrome", id: "com.google.chrome" }, BraveHTML: { name: "Brave", id: "com.brave.Browser" }, BraveBHTML: { name: "Brave Beta", id: "com.brave.Browser.beta" }, BraveSSHTM: { name: "Brave Nightly", id: "com.brave.Browser.nightly" } }, Fe = class extends Error {
};
async function Dt(t3 = Ao) {
  let { stdout: e } = await t3("reg", ["QUERY", " HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\Shell\\Associations\\UrlAssociations\\http\\UserChoice", "/v", "ProgId"]), r = /ProgId\s*REG_SZ\s*(?<id>\S+)/.exec(e);
  if (!r) throw new Fe(`Cannot find Windows browser in stdout: ${JSON.stringify(e)}`);
  let { id: s } = r.groups, n = Lo[s];
  if (!n) throw new Fe(`Unknown browser ID: ${s}`);
  return n;
}
var Ro = (0, es.promisify)(ts.execFile), Bo = (t3) => t3.toLowerCase().replaceAll(/(?:^|\s|-)\S/g, (e) => e.toUpperCase());
async function $t() {
  if (De.default.platform === "darwin") {
    let t3 = await Nt();
    return { name: await Ft(t3), id: t3 };
  }
  if (De.default.platform === "linux") {
    let { stdout: t3 } = await Ro("xdg-mime", ["query", "default", "x-scheme-handler/http"]), e = t3.trim();
    return { name: Bo(e.replace(/.desktop$/, "").replace("-", " ")), id: e };
  }
  if (De.default.platform === "win32") return Dt();
  throw new Error("Only macOS, Linux, and Windows are supported");
}
var xo = require("os"), Q = S(require("vscode"));
var yn = S(require("vscode"));
var nn = require("child_process");
var $e = S(require("node:stream"), 1);
function me(t3, e, r) {
  typeof r > "u" && (r = e, e = t3, t3 = void 0), $e.default.Duplex.call(this, t3), typeof r.read != "function" && (r = new $e.default.Readable(t3).wrap(r)), this._writable = e, this._readable = r, this._waiting = false, e.once("finish", () => {
    this.end();
  }), this.once("finish", () => {
    e.end();
  }), r.on("readable", () => {
    this._waiting && (this._waiting = false, this._read());
  }), r.once("end", () => {
    this.push(null);
  }), (!t3 || typeof t3.bubbleErrors > "u" || t3.bubbleErrors) && (e.on("error", (s) => {
    this.emit("error", s);
  }), r.on("error", (s) => {
    this.emit("error", s);
  }));
}
me.prototype = Object.create($e.default.Duplex.prototype, { constructor: { value: me } });
me.prototype._write = function(t3, e, r) {
  this._writable.write(t3, e, r);
};
me.prototype._read = function() {
  let t3, e = 0;
  for (; (t3 = this._readable.read()) !== null; ) this.push(t3), e++;
  e === 0 && (this._waiting = true);
};
function Ut(t3, e, r) {
  return new me(t3, e, r);
}
var on = require("http"), an = require("url"), lr = require("vscode");
var ja = S(is(), 1), Ha = S(Zt(), 1), Va = S(er(), 1), sn = S(ar(), 1), za = S(rn(), 1);
var Pe = sn.default;
var et = class {
  qOrFn = [];
  push(e) {
    typeof this.qOrFn == "function" ? this.qOrFn(e) : this.qOrFn.push(e);
  }
  connect(e) {
    if (typeof this.qOrFn == "function") throw new Error("Already connected");
    let r = this.qOrFn;
    this.qOrFn = e;
    for (let s of r) e(s);
  }
}, tt = class {
  errorEmitter = new lr.EventEmitter();
  onError = this.errorEmitter.event;
  closeEmitter = new lr.EventEmitter();
  onClose = this.closeEmitter.event;
  disposed = false;
  browserProcess;
  socket;
  fromSocketQueue = new et();
  fromBrowserQueue = new et();
  constructor() {
    this.onClose(() => this.dispose()), this.onError(() => this.dispose());
  }
  attachSocket(e, r, s, n) {
    let i = new an.URL(`ws://${e}:${r}${s}`), o = Date.now() + 5e3;
    n ? this.attachSocketWsl(i, n, o) : this.attachSocketLoop(i, o);
  }
  attachChild(e) {
    if (this.disposed) {
      e.dispose();
      return;
    }
    this.browserProcess = e, e.onClose(() => this.closeEmitter.fire()), e.onError((r) => this.errorEmitter.fire(r)), e.onMessage((r) => this.fromBrowserQueue.push(r)), this.fromSocketQueue.connect((r) => e.send(r));
  }
  dispose() {
    this.disposed || (this.browserProcess?.dispose(), this.socket?.close(), this.disposed = true);
  }
  attachSocketWsl(e, r, s) {
    let n = new on.Agent();
    n.createConnection = (o, a) => {
      let c = (0, nn.spawn)("wsl.exe", ["-d", r.distro, "-u", r.user, "--", r.execPath, "-e", `'s=net.connect(${e.port});s.pipe(process.stdout);process.stdin.pipe(s)'`]);
      c.on("error", a), c.on("spawn", () => {
        a(null, Ka(Ut(c.stdin, c.stdout)));
      });
    };
    let i = new Pe(e, { agent: n });
    this.setupSocket(i, e, s);
  }
  attachSocketLoop(e, r) {
    if (this.disposed) return;
    let s = new Pe(e, { perMessageDeflate: true });
    this.setupSocket(s, e, r);
  }
  setupSocket(e, r, s) {
    e.on("open", () => {
      if (this.disposed) {
        e.close();
        return;
      }
      this.socket = e, this.socket.on("close", () => this.closeEmitter.fire()), this.socket.on("message", (n) => this.fromSocketQueue.push(n)), this.fromBrowserQueue.connect((n) => e.send(n));
    }), e.on("error", (n) => {
      this.socket === e || Date.now() > s ? this.errorEmitter.fire(n) : setTimeout(() => this.attachSocketLoop(r, s), 100);
    });
  }
}, Ka = (t3) => {
  let e = t3;
  return Object.assign(t3, { bufferSize: 0, bytesRead: 0, bytesWritten: 0, connecting: false, localAddress: "127.0.0.1", localPort: 1, remoteAddress: "127.0.0.1", remoteFamily: "tcp", remotePort: 1, address: () => ({ address: "127.0.0.1", family: "tcp", port: 1 }), unref: () => e, ref: () => e, connect: (s, n, i) => (i && setImmediate(i), e), setKeepAlive: () => e, setNoDelay: () => e, setTimeout: (s, n) => (n?.(), e) });
};
var mn = S(fn()), P = require("vscode");
var pn = S(require("http")), se = require("url");
async function ur(t3, e) {
  try {
    return await ec(t3, e);
  } catch (r) {
    if (e.isCancellationRequested) throw new Error(`Could not connect to debug target at ${t3}: ${r}`);
    return await new Promise((s) => setTimeout(s, 200)), ur(t3, e);
  }
}
async function ec(t3, e) {
  let r = await dn((0, se.resolve)(t3, "/json/version"), e);
  if (r?.webSocketDebuggerUrl) return hn(t3, r.webSocketDebuggerUrl);
  let s = await dn((0, se.resolve)(t3, "/json/list"), e);
  if (s?.length) return hn(t3, s[0].webSocketDebuggerUrl);
  throw new Error("Could not find any debuggable target");
}
async function dn(t3, e) {
  return JSON.parse(await tc(t3, e));
}
function tc(t3, e) {
  let r = [];
  return new Promise((s, n) => {
    let i = pn.request(t3, { headers: { host: "localhost" } }, (o) => {
      r.push(e.onCancellationRequested(() => o.destroy()));
      let a = "";
      o.setEncoding("utf8"), o.on("data", (c) => a += c), o.on("end", () => s(a)), o.on("error", n);
    });
    r.push(e.onCancellationRequested(() => {
      i.destroy(), n(new Error(`Cancelled GET ${t3}`));
    })), i.on("error", n), i.end();
  }).finally(() => r.forEach((s) => s.dispose()));
}
function hn(t3, e) {
  let r = new se.URL(t3), s = new se.URL(e);
  return s.host = r.host, s.toString();
}
var gn = async (t3) => {
  t3.exitCode || await Promise.race([new Promise((e) => t3.on("exit", e)), new Promise((e) => setTimeout(e, 1e3))]);
}, st = class {
  constructor(e) {
    this.process = e;
    if (this.process.stdio.length < 5) throw new Error("Insufficient fd number on child process");
    e.on("error", (r) => this.errorEmitter.fire(r)), e.on("exit", () => this.closeEmitter.fire()), e.stdio[4].pipe((0, mn.default)("\0")).on("data", (r) => this.messageEmitter.fire(r)).resume();
  }
  errorEmitter = new P.EventEmitter();
  closeEmitter = new P.EventEmitter();
  messageEmitter = new P.EventEmitter();
  onError = this.errorEmitter.event;
  onClose = this.closeEmitter.event;
  onMessage = this.messageEmitter.event;
  send(e) {
    let r = this.process.stdio[3];
    if (e instanceof Uint8Array) r.write(e);
    else if (e instanceof ArrayBuffer) r.write(new Uint8Array(e));
    else for (let s of e) r.write(s);
    r.write("\0");
  }
  async dispose() {
    await gn(this.process), this.process.kill();
  }
}, Oe = class t {
  constructor(e) {
    this.ws = e;
    e.on("error", (r) => this.errorEmitter.fire(r)), e.on("close", () => this.closeEmitter.fire()), e.on("message", (r) => this.messageEmitter.fire(r));
  }
  errorEmitter = new P.EventEmitter();
  closeEmitter = new P.EventEmitter();
  messageEmitter = new P.EventEmitter();
  onError = this.errorEmitter.event;
  onClose = this.closeEmitter.event;
  onMessage = this.messageEmitter.event;
  static async create(e, r) {
    let s = new P.CancellationTokenSource();
    setTimeout(() => s.cancel(), 10 * 1e3);
    let n = await ur(`http://${e}:${r}`, s.token), i = new Pe(n, [], { headers: { host: "localhost" }, perMessageDeflate: false, maxPayload: 256 * 1024 * 1024, followRedirects: true });
    return await new Promise((o, a) => {
      i.addEventListener("open", () => o(new t(i))), i.addEventListener("error", (c) => a(c.error));
    });
  }
  send(e) {
    this.ws.send(e.toString());
  }
  async dispose() {
    await new Promise((e) => {
      this.ws.on("close", e), this.ws.close();
    });
  }
}, nt = class t2 {
  constructor(e, r) {
    this.process = e;
    this.attach = r;
    e.on("error", (s) => this.errorEmitter.fire(s)), e.on("close", () => this.closeEmitter.fire()), r.onError((s) => this.errorEmitter.fire(s)), r.onClose(() => this.closeEmitter.fire()), r.onMessage((s) => this.messageEmitter.fire(s));
  }
  errorEmitter = new P.EventEmitter();
  closeEmitter = new P.EventEmitter();
  messageEmitter = new P.EventEmitter();
  onError = this.errorEmitter.event;
  onClose = this.closeEmitter.event;
  onMessage = this.messageEmitter.event;
  static async create(e, r) {
    let s = new P.CancellationTokenSource();
    setTimeout(() => s.cancel(), 10 * 1e3);
    try {
      let n = await Oe.create("localhost", r);
      return new t2(e, n);
    } catch (n) {
      throw e.kill(), n;
    }
  }
  send(e) {
    this.attach.send(e);
  }
  async dispose() {
    this.attach.dispose(), await gn(this.process), this.process.kill();
  }
};
var it = class {
  constructor(e) {
    this.spawn = e;
  }
  sessions = /* @__PURE__ */ new Map();
  async create(e) {
    let r = new tt();
    this.sessions.set(e.launchId, r), r.onClose(() => this.sessions.delete(e.launchId)), r.onError((s) => {
      yn.window.showErrorMessage(`Error running browser: ${s.message || s.stack}`), this.sessions.delete(e.launchId);
    }), await Promise.all([this.addChildSocket(r, e), e.attach ? this.addChildAttach(r, e.attach) : this.addChildBrowser(r, e)]);
  }
  destroy(e) {
    this.sessions.get(e)?.dispose(), this.sessions.delete(e);
  }
  dispose() {
    for (let e of this.sessions.values()) e.dispose();
    this.sessions.clear();
  }
  async addChildSocket(e, r) {
    let [s, n] = r.proxyUri.split(":");
    e.attachSocket(s, Number(n), r.path, r.wslInfo);
  }
  async addChildBrowser(e, r) {
    let s = await this.spawn.launch(r);
    e.attachChild(s);
  }
  async addChildAttach(e, r) {
    let s = await Oe.create(r.host, r.port);
    e.attachChild(s);
  }
};
var D = S(An()), At = require("child_process"), Lt = S(mo()), Rt = require("fs"), wo = require("path"), Be = S(require("vscode"));
var he = class extends Error {
};
var go = require("fs");
async function Gr(t3) {
  try {
    return await go.promises.access(t3), true;
  } catch {
    return false;
  }
}
var yo = "--remote-debugging-port=", _o = "--remote-debugging-port=", Wr = "availableBrowsers_", Bt = class {
  constructor(e, r) {
    this.storagePath = e;
    this.context = r;
  }
  finders = { edge: new D.EdgeBrowserFinder(process.env, Rt.promises, Lt.default), chrome: new D.ChromeBrowserFinder(process.env, Rt.promises, Lt.default), firefox: new D.FirefoxBrowserFinder(process.env, Rt.promises, Lt.default) };
  async findBrowserPath(e, r) {
    if (r !== "*" && !(0, D.isQuality)(r)) return r;
    if (!(e in this.finders)) throw new he(`Browser type "${e}" is not supported.`);
    let s = this.context.globalState.get(Wr + e) || await this.finders[e].findAll(), n = r === "*" ? s.find((i) => i.quality === "stable") ?? s[0] : s.find((i) => i.quality === r);
    if (!n) throw await this.context.globalState.update(Wr + e, void 0), r === "stable" && !s.length ? new he(Be.l10n.t('Unable to find a {0} installation on your system. Try installing it, or providing an absolute path to the browser in the "runtimeExecutable" in your launch.json.', e)) : new he(Be.l10n.t('Unable to find {0} version {1}. Available auto-discovered versions are: {2}. You can set the "runtimeExecutable" in your launch.json to one of these, or provide an absolute path to the browser executable.', e, r, JSON.stringify([...new Set(s)])));
    return await this.context.globalState.update(Wr + e, s), n.path;
  }
  async findBrowserByExe(e, r) {
    return r === "*" ? (await e.findWhere((n) => n.quality === "stable") || (await e.findAll())[0])?.path : (0, D.isQuality)(r) ? (await e.findWhere((s) => s.quality === r))?.path : r;
  }
  async getUserDataDir(e) {
    let r = e.params.userDataDir;
    if (r === false) return;
    let s = (0, wo.join)(this.storagePath, e.browserArgs?.includes("--headless") ? ".headless-profile" : ".profile");
    return r === true || !await Gr(r) ? s : r;
  }
  async launchBrowserOnly(e, r) {
    let s = await this.findBrowserPath(e, "*");
    (0, At.spawn)(s, [r], { detached: true, stdio: "ignore" }).on("error", (n) => {
      Be.window.showErrorMessage(`Error running browser: ${n.message || n.stack}`);
    });
  }
  async launch(e) {
    let r = await this.findBrowserPath(e.type, e.params.runtimeExecutable), s = e.browserArgs.slice(), n = await this.getUserDataDir(e);
    n !== void 0 && s.unshift(`--user-data-dir=${n}`);
    let i = e.params.cwd || e.params.webRoot;
    (!i || !await Gr(i)) && (i = process.cwd());
    let o = s.find((c) => c.startsWith(yo))?.slice(yo.length);
    if (!o) return new st((0, At.spawn)(r, s, { detached: process.platform !== "win32", env: { ...process.env, GDK_PIXBUF_MODULEDIR: void 0, GDK_PIXBUF_MODULE_FILE: void 0, ELECTRON_RUN_AS_NODE: void 0, ...e.params.env }, stdio: ["ignore", "ignore", "ignore", "pipe", "pipe"], cwd: i }));
    s.includes(_o) || s.unshift(_o);
    let a = (0, At.spawn)(r, s, { detached: process.platform !== "win32", env: { ELECTRON_RUN_AS_NODE: void 0, ...e.params.env }, stdio: "ignore", cwd: i });
    return await nt.create(a, Number(o));
  }
};
var qe;
function Lu(t3) {
  let e = new Bt(t3.storageUri?.fsPath ?? (0, xo.tmpdir)(), t3);
  qe = new it(e), t3.subscriptions.push(Q.commands.registerCommand("js-debug-companion.defaultBrowser", async () => (await $t()).name), Q.commands.registerCommand("js-debug-companion.launchAndAttach", (r) => {
    qe?.create(r).catch((s) => Q.window.showErrorMessage(s.message));
  }), Q.commands.registerCommand("js-debug-companion.kill", ({ launchId: r }) => {
    qe?.destroy(r);
  }), Q.commands.registerCommand("js-debug-companion.launch", ({ browserType: r, URL: s }) => {
    e.launchBrowserOnly(r, s);
  }));
}
function Ru() {
  qe?.dispose(), qe = void 0;
}
