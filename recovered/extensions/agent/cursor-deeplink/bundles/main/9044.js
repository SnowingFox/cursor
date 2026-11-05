// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 9044 range:814279..819851
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9044: (e2, t2, A2) => {
    "use strict";
    const { Writable: n2 } = A2(2203), r2 = A2(1637), { parserStates: o2, opcodes: s, states: i, emptyBuffer: a } = A2(5440), { kReadyState: c, kSentClose: l, kResponse: u, kReceivedClose: g } = A2(7696), { isValidStatusCode: E, failWebsocketConnection: h, websocketMessageReceived: d } = A2(4321), { WebsocketFrameSend: I } = A2(1808), B = {};
    B.ping = r2.channel("undici:websocket:ping"), B.pong = r2.channel("undici:websocket:pong");
    e2.exports = { ByteParser: class extends n2 {
      #u = [];
      #g = 0;
      #E = o2.INFO;
      #h = {};
      #d = [];
      constructor(e3) {
        super(), this.ws = e3;
      }
      _write(e3, t3, A3) {
        this.#u.push(e3), this.#g += e3.length, this.run(A3);
      }
      run(e3) {
        for (; ; ) {
          if (this.#E === o2.INFO) {
            if (this.#g < 2) return e3();
            const t3 = this.consume(2);
            if (this.#h.fin = !!(128 & t3[0]), this.#h.opcode = 15 & t3[0], this.#h.originalOpcode ??= this.#h.opcode, this.#h.fragmented = !this.#h.fin && this.#h.opcode !== s.CONTINUATION, this.#h.fragmented && this.#h.opcode !== s.BINARY && this.#h.opcode !== s.TEXT) return void h(this.ws, "Invalid frame type was fragmented.");
            const A3 = 127 & t3[1];
            if (A3 <= 125 ? (this.#h.payloadLength = A3, this.#E = o2.READ_DATA) : 126 === A3 ? this.#E = o2.PAYLOADLENGTH_16 : 127 === A3 && (this.#E = o2.PAYLOADLENGTH_64), this.#h.fragmented && A3 > 125) return void h(this.ws, "Fragmented frame exceeded 125 bytes.");
            if ((this.#h.opcode === s.PING || this.#h.opcode === s.PONG || this.#h.opcode === s.CLOSE) && A3 > 125) return void h(this.ws, "Payload length for control frame exceeded 125 bytes.");
            if (this.#h.opcode === s.CLOSE) {
              if (1 === A3) return void h(this.ws, "Received close frame with a 1-byte body.");
              const e4 = this.consume(A3);
              if (this.#h.closeInfo = this.parseCloseBody(false, e4), !this.ws[l]) {
                const e5 = Buffer.allocUnsafe(2);
                e5.writeUInt16BE(this.#h.closeInfo.code, 0);
                const t4 = new I(e5);
                this.ws[u].socket.write(t4.createFrame(s.CLOSE), (e6) => {
                  e6 || (this.ws[l] = true);
                });
              }
              return this.ws[c] = i.CLOSING, this.ws[g] = true, void this.end();
            }
            if (this.#h.opcode === s.PING) {
              const t4 = this.consume(A3);
              if (!this.ws[g]) {
                const e4 = new I(t4);
                this.ws[u].socket.write(e4.createFrame(s.PONG)), B.ping.hasSubscribers && B.ping.publish({ payload: t4 });
              }
              if (this.#E = o2.INFO, this.#g > 0) continue;
              return void e3();
            }
            if (this.#h.opcode === s.PONG) {
              const t4 = this.consume(A3);
              if (B.pong.hasSubscribers && B.pong.publish({ payload: t4 }), this.#g > 0) continue;
              return void e3();
            }
          } else if (this.#E === o2.PAYLOADLENGTH_16) {
            if (this.#g < 2) return e3();
            const t3 = this.consume(2);
            this.#h.payloadLength = t3.readUInt16BE(0), this.#E = o2.READ_DATA;
          } else if (this.#E === o2.PAYLOADLENGTH_64) {
            if (this.#g < 8) return e3();
            const t3 = this.consume(8), A3 = t3.readUInt32BE(0);
            if (A3 > 2 ** 31 - 1) return void h(this.ws, "Received payload length > 2^31 bytes.");
            const n3 = t3.readUInt32BE(4);
            this.#h.payloadLength = (A3 << 8) + n3, this.#E = o2.READ_DATA;
          } else if (this.#E === o2.READ_DATA) {
            if (this.#g < this.#h.payloadLength) return e3();
            if (this.#g >= this.#h.payloadLength) {
              const e4 = this.consume(this.#h.payloadLength);
              if (this.#d.push(e4), !this.#h.fragmented || this.#h.fin && this.#h.opcode === s.CONTINUATION) {
                const e5 = Buffer.concat(this.#d);
                d(this.ws, this.#h.originalOpcode, e5), this.#h = {}, this.#d.length = 0;
              }
              this.#E = o2.INFO;
            }
          }
          if (!(this.#g > 0)) {
            e3();
            break;
          }
        }
      }
      consume(e3) {
        if (e3 > this.#g) return null;
        if (0 === e3) return a;
        if (this.#u[0].length === e3) return this.#g -= this.#u[0].length, this.#u.shift();
        const t3 = Buffer.allocUnsafe(e3);
        let A3 = 0;
        for (; A3 !== e3; ) {
          const n3 = this.#u[0], { length: r3 } = n3;
          if (r3 + A3 === e3) {
            t3.set(this.#u.shift(), A3);
            break;
          }
          if (r3 + A3 > e3) {
            t3.set(n3.subarray(0, e3 - A3), A3), this.#u[0] = n3.subarray(e3 - A3);
            break;
          }
          t3.set(this.#u.shift(), A3), A3 += n3.length;
        }
        return this.#g -= e3, t3;
      }
      parseCloseBody(e3, t3) {
        let A3;
        if (t3.length >= 2 && (A3 = t3.readUInt16BE(0)), e3) return E(A3) ? { code: A3 } : null;
        let n3 = t3.subarray(2);
        if (239 === n3[0] && 187 === n3[1] && 191 === n3[2] && (n3 = n3.subarray(3)), void 0 !== A3 && !E(A3)) return null;
        try {
          n3 = new TextDecoder("utf-8", { fatal: true }).decode(n3);
        } catch {
          return null;
        }
        return { code: A3, reason: n3 };
      }
      get closingInfo() {
        return this.#h.closeInfo;
      }
    } };
  }