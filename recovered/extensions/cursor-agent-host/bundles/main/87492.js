// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 87492 range:12226654..12237485
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
87492: (e, t, r) => {
    "use strict";
    const { Writable: n } = r(2203), s = r(31293), { BINARY_TYPES: o, EMPTY_BUFFER: i, kStatusCode: a, kWebSocket: c } = r(78864), { concat: l, toArrayBuffer: u, unmask: d } = r(39796), { isValidStatusCode: p, isValidUTF8: m } = r(16818), h = Buffer[Symbol.species];
    e.exports = class extends n {
      constructor(e2 = {}) {
        super(), this._allowSynchronousEvents = void 0 === e2.allowSynchronousEvents || e2.allowSynchronousEvents, this._binaryType = e2.binaryType || o[0], this._extensions = e2.extensions || {}, this._isServer = !!e2.isServer, this._maxBufferedChunks = 0 | e2.maxBufferedChunks, this._maxFragments = 0 | e2.maxFragments, this._maxPayload = 0 | e2.maxPayload, this._skipUTF8Validation = !!e2.skipUTF8Validation, this[c] = void 0, this._bufferedBytes = 0, this._buffers = [], this._compressed = false, this._payloadLength = 0, this._mask = void 0, this._fragmented = 0, this._masked = false, this._fin = false, this._opcode = 0, this._totalPayloadLength = 0, this._messageLength = 0, this._numFragments = 0, this._fragments = [], this._errored = false, this._loop = false, this._state = 0;
      }
      _write(e2, t2, r2) {
        if (8 === this._opcode && 0 == this._state) return r2();
        this._maxBufferedChunks > 0 && this._buffers.length >= this._maxBufferedChunks ? r2(this.createError(RangeError, "Too many buffered chunks", false, 1008, "WS_ERR_TOO_MANY_BUFFERED_PARTS")) : (this._bufferedBytes += e2.length, this._buffers.push(e2), this.startLoop(r2));
      }
      consume(e2) {
        if (this._bufferedBytes -= e2, e2 === this._buffers[0].length) return this._buffers.shift();
        if (e2 < this._buffers[0].length) {
          const t3 = this._buffers[0];
          return this._buffers[0] = new h(t3.buffer, t3.byteOffset + e2, t3.length - e2), new h(t3.buffer, t3.byteOffset, e2);
        }
        const t2 = Buffer.allocUnsafe(e2);
        do {
          const r2 = this._buffers[0], n2 = t2.length - e2;
          e2 >= r2.length ? t2.set(this._buffers.shift(), n2) : (t2.set(new Uint8Array(r2.buffer, r2.byteOffset, e2), n2), this._buffers[0] = new h(r2.buffer, r2.byteOffset + e2, r2.length - e2)), e2 -= r2.length;
        } while (e2 > 0);
        return t2;
      }
      startLoop(e2) {
        this._loop = true;
        do {
          switch (this._state) {
            case 0:
              this.getInfo(e2);
              break;
            case 1:
              this.getPayloadLength16(e2);
              break;
            case 2:
              this.getPayloadLength64(e2);
              break;
            case 3:
              this.getMask();
              break;
            case 4:
              this.getData(e2);
              break;
            case 5:
            case 6:
              return void (this._loop = false);
          }
        } while (this._loop);
        this._errored || e2();
      }
      getInfo(e2) {
        if (this._bufferedBytes < 2) return void (this._loop = false);
        const t2 = this.consume(2);
        if (48 & t2[0]) {
          return void e2(this.createError(RangeError, "RSV2 and RSV3 must be clear", true, 1002, "WS_ERR_UNEXPECTED_RSV_2_3"));
        }
        const r2 = !(64 & ~t2[0]);
        if (r2 && !this._extensions[s.extensionName]) {
          return void e2(this.createError(RangeError, "RSV1 must be clear", true, 1002, "WS_ERR_UNEXPECTED_RSV_1"));
        }
        if (this._fin = !(128 & ~t2[0]), this._opcode = 15 & t2[0], this._payloadLength = 127 & t2[1], 0 === this._opcode) {
          if (r2) {
            return void e2(this.createError(RangeError, "RSV1 must be clear", true, 1002, "WS_ERR_UNEXPECTED_RSV_1"));
          }
          if (!this._fragmented) {
            return void e2(this.createError(RangeError, "invalid opcode 0", true, 1002, "WS_ERR_INVALID_OPCODE"));
          }
          this._opcode = this._fragmented;
        } else if (1 === this._opcode || 2 === this._opcode) {
          if (this._fragmented) {
            return void e2(this.createError(RangeError, `invalid opcode ${this._opcode}`, true, 1002, "WS_ERR_INVALID_OPCODE"));
          }
          this._compressed = r2;
        } else {
          if (!(this._opcode > 7 && this._opcode < 11)) {
            return void e2(this.createError(RangeError, `invalid opcode ${this._opcode}`, true, 1002, "WS_ERR_INVALID_OPCODE"));
          }
          if (!this._fin) {
            return void e2(this.createError(RangeError, "FIN must be set", true, 1002, "WS_ERR_EXPECTED_FIN"));
          }
          if (r2) {
            return void e2(this.createError(RangeError, "RSV1 must be clear", true, 1002, "WS_ERR_UNEXPECTED_RSV_1"));
          }
          if (this._payloadLength > 125 || 8 === this._opcode && 1 === this._payloadLength) {
            return void e2(this.createError(RangeError, `invalid payload length ${this._payloadLength}`, true, 1002, "WS_ERR_INVALID_CONTROL_PAYLOAD_LENGTH"));
          }
        }
        if (this._fin || this._fragmented || (this._fragmented = this._opcode), this._masked = !(128 & ~t2[1]), this._isServer) {
          if (!this._masked) {
            return void e2(this.createError(RangeError, "MASK must be set", true, 1002, "WS_ERR_EXPECTED_MASK"));
          }
        } else if (this._masked) {
          return void e2(this.createError(RangeError, "MASK must be clear", true, 1002, "WS_ERR_UNEXPECTED_MASK"));
        }
        126 === this._payloadLength ? this._state = 1 : 127 === this._payloadLength ? this._state = 2 : this.haveLength(e2);
      }
      getPayloadLength16(e2) {
        this._bufferedBytes < 2 ? this._loop = false : (this._payloadLength = this.consume(2).readUInt16BE(0), this.haveLength(e2));
      }
      getPayloadLength64(e2) {
        if (this._bufferedBytes < 8) return void (this._loop = false);
        const t2 = this.consume(8), r2 = t2.readUInt32BE(0);
        if (r2 > Math.pow(2, 21) - 1) {
          return void e2(this.createError(RangeError, "Unsupported WebSocket frame: payload length > 2^53 - 1", false, 1009, "WS_ERR_UNSUPPORTED_DATA_PAYLOAD_LENGTH"));
        }
        this._payloadLength = r2 * Math.pow(2, 32) + t2.readUInt32BE(4), this.haveLength(e2);
      }
      haveLength(e2) {
        if (this._payloadLength && this._opcode < 8 && (this._totalPayloadLength += this._payloadLength, this._totalPayloadLength > this._maxPayload && this._maxPayload > 0)) {
          return void e2(this.createError(RangeError, "Max payload size exceeded", false, 1009, "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH"));
        }
        this._masked ? this._state = 3 : this._state = 4;
      }
      getMask() {
        this._bufferedBytes < 4 ? this._loop = false : (this._mask = this.consume(4), this._state = 4);
      }
      getData(e2) {
        let t2 = i;
        if (this._payloadLength) {
          if (this._bufferedBytes < this._payloadLength) return void (this._loop = false);
          t2 = this.consume(this._payloadLength), this._masked && 0 !== (this._mask[0] | this._mask[1] | this._mask[2] | this._mask[3]) && d(t2, this._mask);
        }
        if (this._opcode > 7) this.controlMessage(t2, e2);
        else {
          if (this._maxFragments > 0 && ++this._numFragments > this._maxFragments) {
            return void e2(this.createError(RangeError, "Too many message fragments", false, 1008, "WS_ERR_TOO_MANY_BUFFERED_PARTS"));
          }
          if (this._compressed) return this._state = 5, void this.decompress(t2, e2);
          t2.length && (this._messageLength = this._totalPayloadLength, this._fragments.push(t2)), this.dataMessage(e2);
        }
      }
      decompress(e2, t2) {
        this._extensions[s.extensionName].decompress(e2, this._fin, (e3, r2) => {
          if (e3) return t2(e3);
          if (r2.length) {
            if (this._messageLength += r2.length, this._messageLength > this._maxPayload && this._maxPayload > 0) {
              const e4 = this.createError(RangeError, "Max payload size exceeded", false, 1009, "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH");
              return void t2(e4);
            }
            this._fragments.push(r2);
          }
          this.dataMessage(t2), 0 === this._state && this.startLoop(t2);
        });
      }
      dataMessage(e2) {
        if (!this._fin) return void (this._state = 0);
        const t2 = this._messageLength, r2 = this._fragments;
        if (this._totalPayloadLength = 0, this._messageLength = 0, this._fragmented = 0, this._numFragments = 0, this._fragments = [], 2 === this._opcode) {
          let n2;
          n2 = "nodebuffer" === this._binaryType ? l(r2, t2) : "arraybuffer" === this._binaryType ? u(l(r2, t2)) : "blob" === this._binaryType ? new Blob(r2) : r2, this._allowSynchronousEvents ? (this.emit("message", n2, true), this._state = 0) : (this._state = 6, setImmediate(() => {
            this.emit("message", n2, true), this._state = 0, this.startLoop(e2);
          }));
        } else {
          const n2 = l(r2, t2);
          if (!this._skipUTF8Validation && !m(n2)) {
            const t3 = this.createError(Error, "invalid UTF-8 sequence", true, 1007, "WS_ERR_INVALID_UTF8");
            return void e2(t3);
          }
          5 === this._state || this._allowSynchronousEvents ? (this.emit("message", n2, false), this._state = 0) : (this._state = 6, setImmediate(() => {
            this.emit("message", n2, false), this._state = 0, this.startLoop(e2);
          }));
        }
      }
      controlMessage(e2, t2) {
        if (8 !== this._opcode) this._allowSynchronousEvents ? (this.emit(9 === this._opcode ? "ping" : "pong", e2), this._state = 0) : (this._state = 6, setImmediate(() => {
          this.emit(9 === this._opcode ? "ping" : "pong", e2), this._state = 0, this.startLoop(t2);
        }));
        else {
          if (0 === e2.length) this._loop = false, this.emit("conclude", 1005, i), this.end();
          else {
            const r2 = e2.readUInt16BE(0);
            if (!p(r2)) {
              const e3 = this.createError(RangeError, `invalid status code ${r2}`, true, 1002, "WS_ERR_INVALID_CLOSE_CODE");
              return void t2(e3);
            }
            const n2 = new h(e2.buffer, e2.byteOffset + 2, e2.length - 2);
            if (!this._skipUTF8Validation && !m(n2)) {
              const e3 = this.createError(Error, "invalid UTF-8 sequence", true, 1007, "WS_ERR_INVALID_UTF8");
              return void t2(e3);
            }
            this._loop = false, this.emit("conclude", r2, n2), this.end();
          }
          this._state = 0;
        }
      }
      createError(e2, t2, r2, n2, s2) {
        this._loop = false, this._errored = true;
        const o2 = new e2(r2 ? `Invalid WebSocket frame: ${t2}` : t2);
        return Error.captureStackTrace(o2, this.createError), o2.code = s2, o2[a] = n2, o2;
      }
    };
  }