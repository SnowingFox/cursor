// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 7492 range:4298492..4309337
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7492: (t2, e2, r2) => {
    "use strict";
    const { Writable: n2 } = r2(2203), s2 = r2(1293), { BINARY_TYPES: i2, EMPTY_BUFFER: o2, kStatusCode: a, kWebSocket: u } = r2(8864), { concat: c, toArrayBuffer: l, unmask: m } = r2(9796), { isValidStatusCode: d, isValidUTF8: f } = r2(6818), p = Buffer[Symbol.species];
    t2.exports = class extends n2 {
      constructor(t3 = {}) {
        super(), this._allowSynchronousEvents = void 0 === t3.allowSynchronousEvents || t3.allowSynchronousEvents, this._binaryType = t3.binaryType || i2[0], this._extensions = t3.extensions || {}, this._isServer = !!t3.isServer, this._maxBufferedChunks = 0 | t3.maxBufferedChunks, this._maxFragments = 0 | t3.maxFragments, this._maxPayload = 0 | t3.maxPayload, this._skipUTF8Validation = !!t3.skipUTF8Validation, this[u] = void 0, this._bufferedBytes = 0, this._buffers = [], this._compressed = false, this._payloadLength = 0, this._mask = void 0, this._fragmented = 0, this._masked = false, this._fin = false, this._opcode = 0, this._totalPayloadLength = 0, this._messageLength = 0, this._numFragments = 0, this._fragments = [], this._errored = false, this._loop = false, this._state = 0;
      }
      _write(t3, e3, r3) {
        if (8 === this._opcode && 0 == this._state) return r3();
        this._maxBufferedChunks > 0 && this._buffers.length >= this._maxBufferedChunks ? r3(this.createError(RangeError, "Too many buffered chunks", false, 1008, "WS_ERR_TOO_MANY_BUFFERED_PARTS")) : (this._bufferedBytes += t3.length, this._buffers.push(t3), this.startLoop(r3));
      }
      consume(t3) {
        if (this._bufferedBytes -= t3, t3 === this._buffers[0].length) return this._buffers.shift();
        if (t3 < this._buffers[0].length) {
          const e4 = this._buffers[0];
          return this._buffers[0] = new p(e4.buffer, e4.byteOffset + t3, e4.length - t3), new p(e4.buffer, e4.byteOffset, t3);
        }
        const e3 = Buffer.allocUnsafe(t3);
        do {
          const r3 = this._buffers[0], n3 = e3.length - t3;
          t3 >= r3.length ? e3.set(this._buffers.shift(), n3) : (e3.set(new Uint8Array(r3.buffer, r3.byteOffset, t3), n3), this._buffers[0] = new p(r3.buffer, r3.byteOffset + t3, r3.length - t3)), t3 -= r3.length;
        } while (t3 > 0);
        return e3;
      }
      startLoop(t3) {
        this._loop = true;
        do {
          switch (this._state) {
            case 0:
              this.getInfo(t3);
              break;
            case 1:
              this.getPayloadLength16(t3);
              break;
            case 2:
              this.getPayloadLength64(t3);
              break;
            case 3:
              this.getMask();
              break;
            case 4:
              this.getData(t3);
              break;
            case 5:
            case 6:
              return void (this._loop = false);
          }
        } while (this._loop);
        this._errored || t3();
      }
      getInfo(t3) {
        if (this._bufferedBytes < 2) return void (this._loop = false);
        const e3 = this.consume(2);
        if (48 & e3[0]) {
          return void t3(this.createError(RangeError, "RSV2 and RSV3 must be clear", true, 1002, "WS_ERR_UNEXPECTED_RSV_2_3"));
        }
        const r3 = !(64 & ~e3[0]);
        if (r3 && !this._extensions[s2.extensionName]) {
          return void t3(this.createError(RangeError, "RSV1 must be clear", true, 1002, "WS_ERR_UNEXPECTED_RSV_1"));
        }
        if (this._fin = !(128 & ~e3[0]), this._opcode = 15 & e3[0], this._payloadLength = 127 & e3[1], 0 === this._opcode) {
          if (r3) {
            return void t3(this.createError(RangeError, "RSV1 must be clear", true, 1002, "WS_ERR_UNEXPECTED_RSV_1"));
          }
          if (!this._fragmented) {
            return void t3(this.createError(RangeError, "invalid opcode 0", true, 1002, "WS_ERR_INVALID_OPCODE"));
          }
          this._opcode = this._fragmented;
        } else if (1 === this._opcode || 2 === this._opcode) {
          if (this._fragmented) {
            return void t3(this.createError(RangeError, `invalid opcode ${this._opcode}`, true, 1002, "WS_ERR_INVALID_OPCODE"));
          }
          this._compressed = r3;
        } else {
          if (!(this._opcode > 7 && this._opcode < 11)) {
            return void t3(this.createError(RangeError, `invalid opcode ${this._opcode}`, true, 1002, "WS_ERR_INVALID_OPCODE"));
          }
          if (!this._fin) {
            return void t3(this.createError(RangeError, "FIN must be set", true, 1002, "WS_ERR_EXPECTED_FIN"));
          }
          if (r3) {
            return void t3(this.createError(RangeError, "RSV1 must be clear", true, 1002, "WS_ERR_UNEXPECTED_RSV_1"));
          }
          if (this._payloadLength > 125 || 8 === this._opcode && 1 === this._payloadLength) {
            return void t3(this.createError(RangeError, `invalid payload length ${this._payloadLength}`, true, 1002, "WS_ERR_INVALID_CONTROL_PAYLOAD_LENGTH"));
          }
        }
        if (this._fin || this._fragmented || (this._fragmented = this._opcode), this._masked = !(128 & ~e3[1]), this._isServer) {
          if (!this._masked) {
            return void t3(this.createError(RangeError, "MASK must be set", true, 1002, "WS_ERR_EXPECTED_MASK"));
          }
        } else if (this._masked) {
          return void t3(this.createError(RangeError, "MASK must be clear", true, 1002, "WS_ERR_UNEXPECTED_MASK"));
        }
        126 === this._payloadLength ? this._state = 1 : 127 === this._payloadLength ? this._state = 2 : this.haveLength(t3);
      }
      getPayloadLength16(t3) {
        this._bufferedBytes < 2 ? this._loop = false : (this._payloadLength = this.consume(2).readUInt16BE(0), this.haveLength(t3));
      }
      getPayloadLength64(t3) {
        if (this._bufferedBytes < 8) return void (this._loop = false);
        const e3 = this.consume(8), r3 = e3.readUInt32BE(0);
        if (r3 > Math.pow(2, 21) - 1) {
          return void t3(this.createError(RangeError, "Unsupported WebSocket frame: payload length > 2^53 - 1", false, 1009, "WS_ERR_UNSUPPORTED_DATA_PAYLOAD_LENGTH"));
        }
        this._payloadLength = r3 * Math.pow(2, 32) + e3.readUInt32BE(4), this.haveLength(t3);
      }
      haveLength(t3) {
        if (this._payloadLength && this._opcode < 8 && (this._totalPayloadLength += this._payloadLength, this._totalPayloadLength > this._maxPayload && this._maxPayload > 0)) {
          return void t3(this.createError(RangeError, "Max payload size exceeded", false, 1009, "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH"));
        }
        this._masked ? this._state = 3 : this._state = 4;
      }
      getMask() {
        this._bufferedBytes < 4 ? this._loop = false : (this._mask = this.consume(4), this._state = 4);
      }
      getData(t3) {
        let e3 = o2;
        if (this._payloadLength) {
          if (this._bufferedBytes < this._payloadLength) return void (this._loop = false);
          e3 = this.consume(this._payloadLength), this._masked && 0 !== (this._mask[0] | this._mask[1] | this._mask[2] | this._mask[3]) && m(e3, this._mask);
        }
        if (this._opcode > 7) this.controlMessage(e3, t3);
        else {
          if (this._maxFragments > 0 && ++this._numFragments > this._maxFragments) {
            return void t3(this.createError(RangeError, "Too many message fragments", false, 1008, "WS_ERR_TOO_MANY_BUFFERED_PARTS"));
          }
          if (this._compressed) return this._state = 5, void this.decompress(e3, t3);
          e3.length && (this._messageLength = this._totalPayloadLength, this._fragments.push(e3)), this.dataMessage(t3);
        }
      }
      decompress(t3, e3) {
        this._extensions[s2.extensionName].decompress(t3, this._fin, (t4, r3) => {
          if (t4) return e3(t4);
          if (r3.length) {
            if (this._messageLength += r3.length, this._messageLength > this._maxPayload && this._maxPayload > 0) {
              const t5 = this.createError(RangeError, "Max payload size exceeded", false, 1009, "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH");
              return void e3(t5);
            }
            this._fragments.push(r3);
          }
          this.dataMessage(e3), 0 === this._state && this.startLoop(e3);
        });
      }
      dataMessage(t3) {
        if (!this._fin) return void (this._state = 0);
        const e3 = this._messageLength, r3 = this._fragments;
        if (this._totalPayloadLength = 0, this._messageLength = 0, this._fragmented = 0, this._numFragments = 0, this._fragments = [], 2 === this._opcode) {
          let n3;
          n3 = "nodebuffer" === this._binaryType ? c(r3, e3) : "arraybuffer" === this._binaryType ? l(c(r3, e3)) : "blob" === this._binaryType ? new Blob(r3) : r3, this._allowSynchronousEvents ? (this.emit("message", n3, true), this._state = 0) : (this._state = 6, setImmediate(() => {
            this.emit("message", n3, true), this._state = 0, this.startLoop(t3);
          }));
        } else {
          const n3 = c(r3, e3);
          if (!this._skipUTF8Validation && !f(n3)) {
            const e4 = this.createError(Error, "invalid UTF-8 sequence", true, 1007, "WS_ERR_INVALID_UTF8");
            return void t3(e4);
          }
          5 === this._state || this._allowSynchronousEvents ? (this.emit("message", n3, false), this._state = 0) : (this._state = 6, setImmediate(() => {
            this.emit("message", n3, false), this._state = 0, this.startLoop(t3);
          }));
        }
      }
      controlMessage(t3, e3) {
        if (8 !== this._opcode) this._allowSynchronousEvents ? (this.emit(9 === this._opcode ? "ping" : "pong", t3), this._state = 0) : (this._state = 6, setImmediate(() => {
          this.emit(9 === this._opcode ? "ping" : "pong", t3), this._state = 0, this.startLoop(e3);
        }));
        else {
          if (0 === t3.length) this._loop = false, this.emit("conclude", 1005, o2), this.end();
          else {
            const r3 = t3.readUInt16BE(0);
            if (!d(r3)) {
              const t4 = this.createError(RangeError, `invalid status code ${r3}`, true, 1002, "WS_ERR_INVALID_CLOSE_CODE");
              return void e3(t4);
            }
            const n3 = new p(t3.buffer, t3.byteOffset + 2, t3.length - 2);
            if (!this._skipUTF8Validation && !f(n3)) {
              const t4 = this.createError(Error, "invalid UTF-8 sequence", true, 1007, "WS_ERR_INVALID_UTF8");
              return void e3(t4);
            }
            this._loop = false, this.emit("conclude", r3, n3), this.end();
          }
          this._state = 0;
        }
      }
      createError(t3, e3, r3, n3, s3) {
        this._loop = false, this._errored = true;
        const i3 = new t3(r3 ? `Invalid WebSocket frame: ${e3}` : e3);
        return Error.captureStackTrace(i3, this.createError), i3.code = s3, i3[a] = n3, i3;
      }
    };
  }