// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 9044 range:710999..716571
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
9044: (e2, n2, t2) => {
    "use strict";
    const { Writable: a2 } = t2(2203), s2 = t2(1637), { parserStates: o2, opcodes: r, states: i, emptyBuffer: A } = t2(5440), { kReadyState: c, kSentClose: l, kResponse: d, kReceivedClose: m } = t2(7696), { isValidStatusCode: u, failWebsocketConnection: g, websocketMessageReceived: p } = t2(4321), { WebsocketFrameSend: E } = t2(1808), h = {};
    h.ping = s2.channel("undici:websocket:ping"), h.pong = s2.channel("undici:websocket:pong");
    e2.exports = { ByteParser: class extends a2 {
      #d = [];
      #m = 0;
      #u = o2.INFO;
      #g = {};
      #p = [];
      constructor(e3) {
        super(), this.ws = e3;
      }
      _write(e3, n3, t3) {
        this.#d.push(e3), this.#m += e3.length, this.run(t3);
      }
      run(e3) {
        for (; ; ) {
          if (this.#u === o2.INFO) {
            if (this.#m < 2) return e3();
            const n3 = this.consume(2);
            if (this.#g.fin = !!(128 & n3[0]), this.#g.opcode = 15 & n3[0], this.#g.originalOpcode ??= this.#g.opcode, this.#g.fragmented = !this.#g.fin && this.#g.opcode !== r.CONTINUATION, this.#g.fragmented && this.#g.opcode !== r.BINARY && this.#g.opcode !== r.TEXT) return void g(this.ws, "Invalid frame type was fragmented.");
            const t3 = 127 & n3[1];
            if (t3 <= 125 ? (this.#g.payloadLength = t3, this.#u = o2.READ_DATA) : 126 === t3 ? this.#u = o2.PAYLOADLENGTH_16 : 127 === t3 && (this.#u = o2.PAYLOADLENGTH_64), this.#g.fragmented && t3 > 125) return void g(this.ws, "Fragmented frame exceeded 125 bytes.");
            if ((this.#g.opcode === r.PING || this.#g.opcode === r.PONG || this.#g.opcode === r.CLOSE) && t3 > 125) return void g(this.ws, "Payload length for control frame exceeded 125 bytes.");
            if (this.#g.opcode === r.CLOSE) {
              if (1 === t3) return void g(this.ws, "Received close frame with a 1-byte body.");
              const e4 = this.consume(t3);
              if (this.#g.closeInfo = this.parseCloseBody(false, e4), !this.ws[l]) {
                const e5 = Buffer.allocUnsafe(2);
                e5.writeUInt16BE(this.#g.closeInfo.code, 0);
                const n4 = new E(e5);
                this.ws[d].socket.write(n4.createFrame(r.CLOSE), (e6) => {
                  e6 || (this.ws[l] = true);
                });
              }
              return this.ws[c] = i.CLOSING, this.ws[m] = true, void this.end();
            }
            if (this.#g.opcode === r.PING) {
              const n4 = this.consume(t3);
              if (!this.ws[m]) {
                const e4 = new E(n4);
                this.ws[d].socket.write(e4.createFrame(r.PONG)), h.ping.hasSubscribers && h.ping.publish({ payload: n4 });
              }
              if (this.#u = o2.INFO, this.#m > 0) continue;
              return void e3();
            }
            if (this.#g.opcode === r.PONG) {
              const n4 = this.consume(t3);
              if (h.pong.hasSubscribers && h.pong.publish({ payload: n4 }), this.#m > 0) continue;
              return void e3();
            }
          } else if (this.#u === o2.PAYLOADLENGTH_16) {
            if (this.#m < 2) return e3();
            const n3 = this.consume(2);
            this.#g.payloadLength = n3.readUInt16BE(0), this.#u = o2.READ_DATA;
          } else if (this.#u === o2.PAYLOADLENGTH_64) {
            if (this.#m < 8) return e3();
            const n3 = this.consume(8), t3 = n3.readUInt32BE(0);
            if (t3 > 2 ** 31 - 1) return void g(this.ws, "Received payload length > 2^31 bytes.");
            const a3 = n3.readUInt32BE(4);
            this.#g.payloadLength = (t3 << 8) + a3, this.#u = o2.READ_DATA;
          } else if (this.#u === o2.READ_DATA) {
            if (this.#m < this.#g.payloadLength) return e3();
            if (this.#m >= this.#g.payloadLength) {
              const e4 = this.consume(this.#g.payloadLength);
              if (this.#p.push(e4), !this.#g.fragmented || this.#g.fin && this.#g.opcode === r.CONTINUATION) {
                const e5 = Buffer.concat(this.#p);
                p(this.ws, this.#g.originalOpcode, e5), this.#g = {}, this.#p.length = 0;
              }
              this.#u = o2.INFO;
            }
          }
          if (!(this.#m > 0)) {
            e3();
            break;
          }
        }
      }
      consume(e3) {
        if (e3 > this.#m) return null;
        if (0 === e3) return A;
        if (this.#d[0].length === e3) return this.#m -= this.#d[0].length, this.#d.shift();
        const n3 = Buffer.allocUnsafe(e3);
        let t3 = 0;
        for (; t3 !== e3; ) {
          const a3 = this.#d[0], { length: s3 } = a3;
          if (s3 + t3 === e3) {
            n3.set(this.#d.shift(), t3);
            break;
          }
          if (s3 + t3 > e3) {
            n3.set(a3.subarray(0, e3 - t3), t3), this.#d[0] = a3.subarray(e3 - t3);
            break;
          }
          n3.set(this.#d.shift(), t3), t3 += a3.length;
        }
        return this.#m -= e3, n3;
      }
      parseCloseBody(e3, n3) {
        let t3;
        if (n3.length >= 2 && (t3 = n3.readUInt16BE(0)), e3) return u(t3) ? { code: t3 } : null;
        let a3 = n3.subarray(2);
        if (239 === a3[0] && 187 === a3[1] && 191 === a3[2] && (a3 = a3.subarray(3)), void 0 !== t3 && !u(t3)) return null;
        try {
          a3 = new TextDecoder("utf-8", { fatal: true }).decode(a3);
        } catch {
          return null;
        }
        return { code: t3, reason: a3 };
      }
      get closingInfo() {
        return this.#g.closeInfo;
      }
    } };
  }