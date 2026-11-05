// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 5100 range:1213742..1220995
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5100: (t2, e2, r2) => {
    "use strict";
    const { Duplex: n2 } = r2(2203), { randomFillSync: s2 } = r2(6982), { types: { isUint8Array: i2 } } = r2(9023), o2 = r2(1293), { EMPTY_BUFFER: a, kWebSocket: u, NOOP: c } = r2(8864), { isBlob: l, isValidStatusCode: m } = r2(6818), { mask: d, toBuffer: f } = r2(9796), p = /* @__PURE__ */ Symbol("kByteLength"), h = Buffer.alloc(4), g = 8192;
    let A, _ = g;
    class y {
      constructor(t3, e3, r3) {
        this._extensions = e3 || {}, r3 && (this._generateMask = r3, this._maskBuffer = Buffer.alloc(4)), this._socket = t3, this._firstFragment = true, this._compress = false, this._bufferedBytes = 0, this._queue = [], this._state = 0, this.onerror = c, this[u] = void 0;
      }
      static frame(t3, e3) {
        let r3, n3, i3 = false, o3 = 2, a2 = false;
        e3.mask && (r3 = e3.maskBuffer || h, e3.generateMask ? e3.generateMask(r3) : (_ === g && (void 0 === A && (A = Buffer.alloc(g)), s2(A, 0, g), _ = 0), r3[0] = A[_++], r3[1] = A[_++], r3[2] = A[_++], r3[3] = A[_++]), a2 = 0 === (r3[0] | r3[1] | r3[2] | r3[3]), o3 = 6), "string" == typeof t3 ? n3 = e3.mask && !a2 || void 0 === e3[p] ? (t3 = Buffer.from(t3)).length : e3[p] : (n3 = t3.length, i3 = e3.mask && e3.readOnly && !a2);
        let u2 = n3;
        n3 >= 65536 ? (o3 += 8, u2 = 127) : n3 > 125 && (o3 += 2, u2 = 126);
        const c2 = Buffer.allocUnsafe(i3 ? n3 + o3 : o3);
        return c2[0] = e3.fin ? 128 | e3.opcode : e3.opcode, e3.rsv1 && (c2[0] |= 64), c2[1] = u2, 126 === u2 ? c2.writeUInt16BE(n3, 2) : 127 === u2 && (c2[2] = c2[3] = 0, c2.writeUIntBE(n3, 4, 6)), e3.mask ? (c2[1] |= 128, c2[o3 - 4] = r3[0], c2[o3 - 3] = r3[1], c2[o3 - 2] = r3[2], c2[o3 - 1] = r3[3], a2 ? [c2, t3] : i3 ? (d(t3, r3, c2, o3, n3), [c2]) : (d(t3, r3, t3, 0, n3), [c2, t3])) : [c2, t3];
      }
      close(t3, e3, r3, n3) {
        let s3;
        if (void 0 === t3) s3 = a;
        else {
          if ("number" != typeof t3 || !m(t3)) throw new TypeError("First argument must be a valid error code number");
          if (void 0 !== e3 && e3.length) {
            const r4 = Buffer.byteLength(e3);
            if (r4 > 123) throw new RangeError("The message must not be greater than 123 bytes");
            if (s3 = Buffer.allocUnsafe(2 + r4), s3.writeUInt16BE(t3, 0), "string" == typeof e3) s3.write(e3, 2);
            else {
              if (!i2(e3)) throw new TypeError("Second argument must be a string or a Uint8Array");
              s3.set(e3, 2);
            }
          } else s3 = Buffer.allocUnsafe(2), s3.writeUInt16BE(t3, 0);
        }
        const o3 = { [p]: s3.length, fin: true, generateMask: this._generateMask, mask: r3, maskBuffer: this._maskBuffer, opcode: 8, readOnly: false, rsv1: false };
        0 !== this._state ? this.enqueue([this.dispatch, s3, false, o3, n3]) : this.sendFrame(y.frame(s3, o3), n3);
      }
      ping(t3, e3, r3) {
        let n3, s3;
        if ("string" == typeof t3 ? (n3 = Buffer.byteLength(t3), s3 = false) : l(t3) ? (n3 = t3.size, s3 = false) : (n3 = (t3 = f(t3)).length, s3 = f.readOnly), n3 > 125) throw new RangeError("The data size must not be greater than 125 bytes");
        const i3 = { [p]: n3, fin: true, generateMask: this._generateMask, mask: e3, maskBuffer: this._maskBuffer, opcode: 9, readOnly: s3, rsv1: false };
        l(t3) ? 0 !== this._state ? this.enqueue([this.getBlobData, t3, false, i3, r3]) : this.getBlobData(t3, false, i3, r3) : 0 !== this._state ? this.enqueue([this.dispatch, t3, false, i3, r3]) : this.sendFrame(y.frame(t3, i3), r3);
      }
      pong(t3, e3, r3) {
        let n3, s3;
        if ("string" == typeof t3 ? (n3 = Buffer.byteLength(t3), s3 = false) : l(t3) ? (n3 = t3.size, s3 = false) : (n3 = (t3 = f(t3)).length, s3 = f.readOnly), n3 > 125) throw new RangeError("The data size must not be greater than 125 bytes");
        const i3 = { [p]: n3, fin: true, generateMask: this._generateMask, mask: e3, maskBuffer: this._maskBuffer, opcode: 10, readOnly: s3, rsv1: false };
        l(t3) ? 0 !== this._state ? this.enqueue([this.getBlobData, t3, false, i3, r3]) : this.getBlobData(t3, false, i3, r3) : 0 !== this._state ? this.enqueue([this.dispatch, t3, false, i3, r3]) : this.sendFrame(y.frame(t3, i3), r3);
      }
      send(t3, e3, r3) {
        const n3 = this._extensions[o2.extensionName];
        let s3, i3, a2 = e3.binary ? 2 : 1, u2 = e3.compress;
        "string" == typeof t3 ? (s3 = Buffer.byteLength(t3), i3 = false) : l(t3) ? (s3 = t3.size, i3 = false) : (s3 = (t3 = f(t3)).length, i3 = f.readOnly), this._firstFragment ? (this._firstFragment = false, u2 && n3 && n3.params[n3._isServer ? "server_no_context_takeover" : "client_no_context_takeover"] && (u2 = s3 >= n3._threshold), this._compress = u2) : (u2 = false, a2 = 0), e3.fin && (this._firstFragment = true);
        const c2 = { [p]: s3, fin: e3.fin, generateMask: this._generateMask, mask: e3.mask, maskBuffer: this._maskBuffer, opcode: a2, readOnly: i3, rsv1: u2 };
        l(t3) ? 0 !== this._state ? this.enqueue([this.getBlobData, t3, this._compress, c2, r3]) : this.getBlobData(t3, this._compress, c2, r3) : 0 !== this._state ? this.enqueue([this.dispatch, t3, this._compress, c2, r3]) : this.dispatch(t3, this._compress, c2, r3);
      }
      getBlobData(t3, e3, r3, n3) {
        this._bufferedBytes += r3[p], this._state = 2, t3.arrayBuffer().then((t4) => {
          if (this._socket.destroyed) {
            const t5 = new Error("The socket was closed while the blob was being read");
            return void process.nextTick(w, this, t5, n3);
          }
          this._bufferedBytes -= r3[p];
          const s3 = f(t4);
          e3 ? this.dispatch(s3, e3, r3, n3) : (this._state = 0, this.sendFrame(y.frame(s3, r3), n3), this.dequeue());
        }).catch((t4) => {
          process.nextTick(S, this, t4, n3);
        });
      }
      dispatch(t3, e3, r3, n3) {
        if (!e3) return void this.sendFrame(y.frame(t3, r3), n3);
        const s3 = this._extensions[o2.extensionName];
        this._bufferedBytes += r3[p], this._state = 1, s3.compress(t3, r3.fin, (t4, e4) => {
          if (this._socket.destroyed) {
            return void w(this, new Error("The socket was closed while data was being compressed"), n3);
          }
          this._bufferedBytes -= r3[p], this._state = 0, r3.readOnly = false, this.sendFrame(y.frame(e4, r3), n3), this.dequeue();
        });
      }
      dequeue() {
        for (; 0 === this._state && this._queue.length; ) {
          const t3 = this._queue.shift();
          this._bufferedBytes -= t3[3][p], Reflect.apply(t3[0], this, t3.slice(1));
        }
      }
      enqueue(t3) {
        this._bufferedBytes += t3[3][p], this._queue.push(t3);
      }
      sendFrame(t3, e3) {
        2 === t3.length ? (this._socket.cork(), this._socket.write(t3[0]), this._socket.write(t3[1], e3), this._socket.uncork()) : this._socket.write(t3[0], e3);
      }
    }
    function w(t3, e3, r3) {
      "function" == typeof r3 && r3(e3);
      for (let r4 = 0; r4 < t3._queue.length; r4++) {
        const n3 = t3._queue[r4], s3 = n3[n3.length - 1];
        "function" == typeof s3 && s3(e3);
      }
    }
    function S(t3, e3, r3) {
      w(t3, e3, r3), t3.onerror(e3);
    }
    t2.exports = y;
  }