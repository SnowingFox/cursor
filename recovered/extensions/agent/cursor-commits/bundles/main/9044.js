// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 9044 range:680443..686030
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9044: (e2, n2, a2) => {
    "use strict";
    const { Writable: t2 } = a2(2203), s2 = a2(1637), { parserStates: o2, opcodes: r2, states: i2, emptyBuffer: A } = a2(5440), { kReadyState: l, kSentClose: c, kResponse: m, kReceivedClose: d } = a2(7696), { isValidStatusCode: g, failWebsocketConnection: u, websocketMessageReceived: E } = a2(4321), { WebsocketFrameSend: p } = a2(1808), T = {};
    T.ping = s2.channel("undici:websocket:ping"), T.pong = s2.channel("undici:websocket:pong");
    e2.exports = { ByteParser: class extends t2 {
      #m = [];
      #d = 0;
      #g = o2.INFO;
      #u = {};
      #E = [];
      constructor(e3) {
        super(), this.ws = e3;
      }
      _write(e3, n3, a3) {
        this.#m.push(e3), this.#d += e3.length, this.run(a3);
      }
      run(e3) {
        for (; ; ) {
          if (this.#g === o2.INFO) {
            if (this.#d < 2) return e3();
            const n3 = this.consume(2);
            if (this.#u.fin = !!(128 & n3[0]), this.#u.opcode = 15 & n3[0], this.#u.originalOpcode ??= this.#u.opcode, this.#u.fragmented = !this.#u.fin && this.#u.opcode !== r2.CONTINUATION, this.#u.fragmented && this.#u.opcode !== r2.BINARY && this.#u.opcode !== r2.TEXT) return void u(this.ws, "Invalid frame type was fragmented.");
            const a3 = 127 & n3[1];
            if (a3 <= 125 ? (this.#u.payloadLength = a3, this.#g = o2.READ_DATA) : 126 === a3 ? this.#g = o2.PAYLOADLENGTH_16 : 127 === a3 && (this.#g = o2.PAYLOADLENGTH_64), this.#u.fragmented && a3 > 125) return void u(this.ws, "Fragmented frame exceeded 125 bytes.");
            if ((this.#u.opcode === r2.PING || this.#u.opcode === r2.PONG || this.#u.opcode === r2.CLOSE) && a3 > 125) return void u(this.ws, "Payload length for control frame exceeded 125 bytes.");
            if (this.#u.opcode === r2.CLOSE) {
              if (1 === a3) return void u(this.ws, "Received close frame with a 1-byte body.");
              const e4 = this.consume(a3);
              if (this.#u.closeInfo = this.parseCloseBody(false, e4), !this.ws[c]) {
                const e5 = Buffer.allocUnsafe(2);
                e5.writeUInt16BE(this.#u.closeInfo.code, 0);
                const n4 = new p(e5);
                this.ws[m].socket.write(n4.createFrame(r2.CLOSE), (e6) => {
                  e6 || (this.ws[c] = true);
                });
              }
              return this.ws[l] = i2.CLOSING, this.ws[d] = true, void this.end();
            }
            if (this.#u.opcode === r2.PING) {
              const n4 = this.consume(a3);
              if (!this.ws[d]) {
                const e4 = new p(n4);
                this.ws[m].socket.write(e4.createFrame(r2.PONG)), T.ping.hasSubscribers && T.ping.publish({ payload: n4 });
              }
              if (this.#g = o2.INFO, this.#d > 0) continue;
              return void e3();
            }
            if (this.#u.opcode === r2.PONG) {
              const n4 = this.consume(a3);
              if (T.pong.hasSubscribers && T.pong.publish({ payload: n4 }), this.#d > 0) continue;
              return void e3();
            }
          } else if (this.#g === o2.PAYLOADLENGTH_16) {
            if (this.#d < 2) return e3();
            const n3 = this.consume(2);
            this.#u.payloadLength = n3.readUInt16BE(0), this.#g = o2.READ_DATA;
          } else if (this.#g === o2.PAYLOADLENGTH_64) {
            if (this.#d < 8) return e3();
            const n3 = this.consume(8), a3 = n3.readUInt32BE(0);
            if (a3 > 2 ** 31 - 1) return void u(this.ws, "Received payload length > 2^31 bytes.");
            const t3 = n3.readUInt32BE(4);
            this.#u.payloadLength = (a3 << 8) + t3, this.#g = o2.READ_DATA;
          } else if (this.#g === o2.READ_DATA) {
            if (this.#d < this.#u.payloadLength) return e3();
            if (this.#d >= this.#u.payloadLength) {
              const e4 = this.consume(this.#u.payloadLength);
              if (this.#E.push(e4), !this.#u.fragmented || this.#u.fin && this.#u.opcode === r2.CONTINUATION) {
                const e5 = Buffer.concat(this.#E);
                E(this.ws, this.#u.originalOpcode, e5), this.#u = {}, this.#E.length = 0;
              }
              this.#g = o2.INFO;
            }
          }
          if (!(this.#d > 0)) {
            e3();
            break;
          }
        }
      }
      consume(e3) {
        if (e3 > this.#d) return null;
        if (0 === e3) return A;
        if (this.#m[0].length === e3) return this.#d -= this.#m[0].length, this.#m.shift();
        const n3 = Buffer.allocUnsafe(e3);
        let a3 = 0;
        for (; a3 !== e3; ) {
          const t3 = this.#m[0], { length: s3 } = t3;
          if (s3 + a3 === e3) {
            n3.set(this.#m.shift(), a3);
            break;
          }
          if (s3 + a3 > e3) {
            n3.set(t3.subarray(0, e3 - a3), a3), this.#m[0] = t3.subarray(e3 - a3);
            break;
          }
          n3.set(this.#m.shift(), a3), a3 += t3.length;
        }
        return this.#d -= e3, n3;
      }
      parseCloseBody(e3, n3) {
        let a3;
        if (n3.length >= 2 && (a3 = n3.readUInt16BE(0)), e3) return g(a3) ? { code: a3 } : null;
        let t3 = n3.subarray(2);
        if (239 === t3[0] && 187 === t3[1] && 191 === t3[2] && (t3 = t3.subarray(3)), void 0 !== a3 && !g(a3)) return null;
        try {
          t3 = new TextDecoder("utf-8", { fatal: true }).decode(t3);
        } catch {
          return null;
        }
        return { code: a3, reason: t3 };
      }
      get closingInfo() {
        return this.#u.closeInfo;
      }
    } };
  }