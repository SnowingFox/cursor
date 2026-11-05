// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 35100 range:2932945..2940186
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
35100: (e, t, r) => {
    "use strict";
    const { Duplex: n } = r(2203), { randomFillSync: s } = r(76982), { types: { isUint8Array: o } } = r(39023), i = r(31293), { EMPTY_BUFFER: a, kWebSocket: c, NOOP: l } = r(78864), { isBlob: u, isValidStatusCode: d } = r(16818), { mask: p, toBuffer: m } = r(39796), h = /* @__PURE__ */ Symbol("kByteLength"), f = Buffer.alloc(4), g = 8192;
    let y, w = g;
    class v {
      constructor(e2, t2, r2) {
        this._extensions = t2 || {}, r2 && (this._generateMask = r2, this._maskBuffer = Buffer.alloc(4)), this._socket = e2, this._firstFragment = true, this._compress = false, this._bufferedBytes = 0, this._queue = [], this._state = 0, this.onerror = l, this[c] = void 0;
      }
      static frame(e2, t2) {
        let r2, n2, o2 = false, i2 = 2, a2 = false;
        t2.mask && (r2 = t2.maskBuffer || f, t2.generateMask ? t2.generateMask(r2) : (w === g && (void 0 === y && (y = Buffer.alloc(g)), s(y, 0, g), w = 0), r2[0] = y[w++], r2[1] = y[w++], r2[2] = y[w++], r2[3] = y[w++]), a2 = 0 === (r2[0] | r2[1] | r2[2] | r2[3]), i2 = 6), "string" == typeof e2 ? n2 = t2.mask && !a2 || void 0 === t2[h] ? (e2 = Buffer.from(e2)).length : t2[h] : (n2 = e2.length, o2 = t2.mask && t2.readOnly && !a2);
        let c2 = n2;
        n2 >= 65536 ? (i2 += 8, c2 = 127) : n2 > 125 && (i2 += 2, c2 = 126);
        const l2 = Buffer.allocUnsafe(o2 ? n2 + i2 : i2);
        return l2[0] = t2.fin ? 128 | t2.opcode : t2.opcode, t2.rsv1 && (l2[0] |= 64), l2[1] = c2, 126 === c2 ? l2.writeUInt16BE(n2, 2) : 127 === c2 && (l2[2] = l2[3] = 0, l2.writeUIntBE(n2, 4, 6)), t2.mask ? (l2[1] |= 128, l2[i2 - 4] = r2[0], l2[i2 - 3] = r2[1], l2[i2 - 2] = r2[2], l2[i2 - 1] = r2[3], a2 ? [l2, e2] : o2 ? (p(e2, r2, l2, i2, n2), [l2]) : (p(e2, r2, e2, 0, n2), [l2, e2])) : [l2, e2];
      }
      close(e2, t2, r2, n2) {
        let s2;
        if (void 0 === e2) s2 = a;
        else {
          if ("number" != typeof e2 || !d(e2)) throw new TypeError("First argument must be a valid error code number");
          if (void 0 !== t2 && t2.length) {
            const r3 = Buffer.byteLength(t2);
            if (r3 > 123) throw new RangeError("The message must not be greater than 123 bytes");
            if (s2 = Buffer.allocUnsafe(2 + r3), s2.writeUInt16BE(e2, 0), "string" == typeof t2) s2.write(t2, 2);
            else {
              if (!o(t2)) throw new TypeError("Second argument must be a string or a Uint8Array");
              s2.set(t2, 2);
            }
          } else s2 = Buffer.allocUnsafe(2), s2.writeUInt16BE(e2, 0);
        }
        const i2 = { [h]: s2.length, fin: true, generateMask: this._generateMask, mask: r2, maskBuffer: this._maskBuffer, opcode: 8, readOnly: false, rsv1: false };
        0 !== this._state ? this.enqueue([this.dispatch, s2, false, i2, n2]) : this.sendFrame(v.frame(s2, i2), n2);
      }
      ping(e2, t2, r2) {
        let n2, s2;
        if ("string" == typeof e2 ? (n2 = Buffer.byteLength(e2), s2 = false) : u(e2) ? (n2 = e2.size, s2 = false) : (n2 = (e2 = m(e2)).length, s2 = m.readOnly), n2 > 125) throw new RangeError("The data size must not be greater than 125 bytes");
        const o2 = { [h]: n2, fin: true, generateMask: this._generateMask, mask: t2, maskBuffer: this._maskBuffer, opcode: 9, readOnly: s2, rsv1: false };
        u(e2) ? 0 !== this._state ? this.enqueue([this.getBlobData, e2, false, o2, r2]) : this.getBlobData(e2, false, o2, r2) : 0 !== this._state ? this.enqueue([this.dispatch, e2, false, o2, r2]) : this.sendFrame(v.frame(e2, o2), r2);
      }
      pong(e2, t2, r2) {
        let n2, s2;
        if ("string" == typeof e2 ? (n2 = Buffer.byteLength(e2), s2 = false) : u(e2) ? (n2 = e2.size, s2 = false) : (n2 = (e2 = m(e2)).length, s2 = m.readOnly), n2 > 125) throw new RangeError("The data size must not be greater than 125 bytes");
        const o2 = { [h]: n2, fin: true, generateMask: this._generateMask, mask: t2, maskBuffer: this._maskBuffer, opcode: 10, readOnly: s2, rsv1: false };
        u(e2) ? 0 !== this._state ? this.enqueue([this.getBlobData, e2, false, o2, r2]) : this.getBlobData(e2, false, o2, r2) : 0 !== this._state ? this.enqueue([this.dispatch, e2, false, o2, r2]) : this.sendFrame(v.frame(e2, o2), r2);
      }
      send(e2, t2, r2) {
        const n2 = this._extensions[i.extensionName];
        let s2, o2, a2 = t2.binary ? 2 : 1, c2 = t2.compress;
        "string" == typeof e2 ? (s2 = Buffer.byteLength(e2), o2 = false) : u(e2) ? (s2 = e2.size, o2 = false) : (s2 = (e2 = m(e2)).length, o2 = m.readOnly), this._firstFragment ? (this._firstFragment = false, c2 && n2 && n2.params[n2._isServer ? "server_no_context_takeover" : "client_no_context_takeover"] && (c2 = s2 >= n2._threshold), this._compress = c2) : (c2 = false, a2 = 0), t2.fin && (this._firstFragment = true);
        const l2 = { [h]: s2, fin: t2.fin, generateMask: this._generateMask, mask: t2.mask, maskBuffer: this._maskBuffer, opcode: a2, readOnly: o2, rsv1: c2 };
        u(e2) ? 0 !== this._state ? this.enqueue([this.getBlobData, e2, this._compress, l2, r2]) : this.getBlobData(e2, this._compress, l2, r2) : 0 !== this._state ? this.enqueue([this.dispatch, e2, this._compress, l2, r2]) : this.dispatch(e2, this._compress, l2, r2);
      }
      getBlobData(e2, t2, r2, n2) {
        this._bufferedBytes += r2[h], this._state = 2, e2.arrayBuffer().then((e3) => {
          if (this._socket.destroyed) {
            const e4 = new Error("The socket was closed while the blob was being read");
            return void process.nextTick(_, this, e4, n2);
          }
          this._bufferedBytes -= r2[h];
          const s2 = m(e3);
          t2 ? this.dispatch(s2, t2, r2, n2) : (this._state = 0, this.sendFrame(v.frame(s2, r2), n2), this.dequeue());
        }).catch((e3) => {
          process.nextTick(b, this, e3, n2);
        });
      }
      dispatch(e2, t2, r2, n2) {
        if (!t2) return void this.sendFrame(v.frame(e2, r2), n2);
        const s2 = this._extensions[i.extensionName];
        this._bufferedBytes += r2[h], this._state = 1, s2.compress(e2, r2.fin, (e3, t3) => {
          if (this._socket.destroyed) {
            return void _(this, new Error("The socket was closed while data was being compressed"), n2);
          }
          this._bufferedBytes -= r2[h], this._state = 0, r2.readOnly = false, this.sendFrame(v.frame(t3, r2), n2), this.dequeue();
        });
      }
      dequeue() {
        for (; 0 === this._state && this._queue.length; ) {
          const e2 = this._queue.shift();
          this._bufferedBytes -= e2[3][h], Reflect.apply(e2[0], this, e2.slice(1));
        }
      }
      enqueue(e2) {
        this._bufferedBytes += e2[3][h], this._queue.push(e2);
      }
      sendFrame(e2, t2) {
        2 === e2.length ? (this._socket.cork(), this._socket.write(e2[0]), this._socket.write(e2[1], t2), this._socket.uncork()) : this._socket.write(e2[0], t2);
      }
    }
    function _(e2, t2, r2) {
      "function" == typeof r2 && r2(t2);
      for (let r3 = 0; r3 < e2._queue.length; r3++) {
        const n2 = e2._queue[r3], s2 = n2[n2.length - 1];
        "function" == typeof s2 && s2(t2);
      }
    }
    function b(e2, t2, r2) {
      _(e2, t2, r2), e2.onerror(t2);
    }
    e.exports = v;
  }