// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 9044 range:1029807..1035394
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9044: (e2, a2, n2) => {
    "use strict";
    const { Writable: t2 } = n2(2203), s2 = n2(1637), { parserStates: o2, opcodes: r2, states: i2, emptyBuffer: l } = n2(5440), { kReadyState: d, kSentClose: m, kResponse: c, kReceivedClose: p } = n2(7696), { isValidStatusCode: A, failWebsocketConnection: u, websocketMessageReceived: g } = n2(4321), { WebsocketFrameSend: T } = n2(1808), h = {};
    h.ping = s2.channel("undici:websocket:ping"), h.pong = s2.channel("undici:websocket:pong");
    e2.exports = { ByteParser: class extends t2 {
      #c = [];
      #p = 0;
      #A = o2.INFO;
      #u = {};
      #g = [];
      constructor(e3) {
        super(), this.ws = e3;
      }
      _write(e3, a3, n3) {
        this.#c.push(e3), this.#p += e3.length, this.run(n3);
      }
      run(e3) {
        for (; ; ) {
          if (this.#A === o2.INFO) {
            if (this.#p < 2) return e3();
            const a3 = this.consume(2);
            if (this.#u.fin = !!(128 & a3[0]), this.#u.opcode = 15 & a3[0], this.#u.originalOpcode ??= this.#u.opcode, this.#u.fragmented = !this.#u.fin && this.#u.opcode !== r2.CONTINUATION, this.#u.fragmented && this.#u.opcode !== r2.BINARY && this.#u.opcode !== r2.TEXT) return void u(this.ws, "Invalid frame type was fragmented.");
            const n3 = 127 & a3[1];
            if (n3 <= 125 ? (this.#u.payloadLength = n3, this.#A = o2.READ_DATA) : 126 === n3 ? this.#A = o2.PAYLOADLENGTH_16 : 127 === n3 && (this.#A = o2.PAYLOADLENGTH_64), this.#u.fragmented && n3 > 125) return void u(this.ws, "Fragmented frame exceeded 125 bytes.");
            if ((this.#u.opcode === r2.PING || this.#u.opcode === r2.PONG || this.#u.opcode === r2.CLOSE) && n3 > 125) return void u(this.ws, "Payload length for control frame exceeded 125 bytes.");
            if (this.#u.opcode === r2.CLOSE) {
              if (1 === n3) return void u(this.ws, "Received close frame with a 1-byte body.");
              const e4 = this.consume(n3);
              if (this.#u.closeInfo = this.parseCloseBody(false, e4), !this.ws[m]) {
                const e5 = Buffer.allocUnsafe(2);
                e5.writeUInt16BE(this.#u.closeInfo.code, 0);
                const a4 = new T(e5);
                this.ws[c].socket.write(a4.createFrame(r2.CLOSE), (e6) => {
                  e6 || (this.ws[m] = true);
                });
              }
              return this.ws[d] = i2.CLOSING, this.ws[p] = true, void this.end();
            }
            if (this.#u.opcode === r2.PING) {
              const a4 = this.consume(n3);
              if (!this.ws[p]) {
                const e4 = new T(a4);
                this.ws[c].socket.write(e4.createFrame(r2.PONG)), h.ping.hasSubscribers && h.ping.publish({ payload: a4 });
              }
              if (this.#A = o2.INFO, this.#p > 0) continue;
              return void e3();
            }
            if (this.#u.opcode === r2.PONG) {
              const a4 = this.consume(n3);
              if (h.pong.hasSubscribers && h.pong.publish({ payload: a4 }), this.#p > 0) continue;
              return void e3();
            }
          } else if (this.#A === o2.PAYLOADLENGTH_16) {
            if (this.#p < 2) return e3();
            const a3 = this.consume(2);
            this.#u.payloadLength = a3.readUInt16BE(0), this.#A = o2.READ_DATA;
          } else if (this.#A === o2.PAYLOADLENGTH_64) {
            if (this.#p < 8) return e3();
            const a3 = this.consume(8), n3 = a3.readUInt32BE(0);
            if (n3 > 2 ** 31 - 1) return void u(this.ws, "Received payload length > 2^31 bytes.");
            const t3 = a3.readUInt32BE(4);
            this.#u.payloadLength = (n3 << 8) + t3, this.#A = o2.READ_DATA;
          } else if (this.#A === o2.READ_DATA) {
            if (this.#p < this.#u.payloadLength) return e3();
            if (this.#p >= this.#u.payloadLength) {
              const e4 = this.consume(this.#u.payloadLength);
              if (this.#g.push(e4), !this.#u.fragmented || this.#u.fin && this.#u.opcode === r2.CONTINUATION) {
                const e5 = Buffer.concat(this.#g);
                g(this.ws, this.#u.originalOpcode, e5), this.#u = {}, this.#g.length = 0;
              }
              this.#A = o2.INFO;
            }
          }
          if (!(this.#p > 0)) {
            e3();
            break;
          }
        }
      }
      consume(e3) {
        if (e3 > this.#p) return null;
        if (0 === e3) return l;
        if (this.#c[0].length === e3) return this.#p -= this.#c[0].length, this.#c.shift();
        const a3 = Buffer.allocUnsafe(e3);
        let n3 = 0;
        for (; n3 !== e3; ) {
          const t3 = this.#c[0], { length: s3 } = t3;
          if (s3 + n3 === e3) {
            a3.set(this.#c.shift(), n3);
            break;
          }
          if (s3 + n3 > e3) {
            a3.set(t3.subarray(0, e3 - n3), n3), this.#c[0] = t3.subarray(e3 - n3);
            break;
          }
          a3.set(this.#c.shift(), n3), n3 += t3.length;
        }
        return this.#p -= e3, a3;
      }
      parseCloseBody(e3, a3) {
        let n3;
        if (a3.length >= 2 && (n3 = a3.readUInt16BE(0)), e3) return A(n3) ? { code: n3 } : null;
        let t3 = a3.subarray(2);
        if (239 === t3[0] && 187 === t3[1] && 191 === t3[2] && (t3 = t3.subarray(3)), void 0 !== n3 && !A(n3)) return null;
        try {
          t3 = new TextDecoder("utf-8", { fatal: true }).decode(t3);
        } catch {
          return null;
        }
        return { code: n3, reason: t3 };
      }
      get closingInfo() {
        return this.#u.closeInfo;
      }
    } };
  }