// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 9044 range:679486..685058
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9044: (e2, A2, t2) => {
    "use strict";
    const { Writable: n2 } = t2(2203), r2 = t2(1637), { parserStates: o2, opcodes: s, states: a, emptyBuffer: i } = t2(5440), { kReadyState: c, kSentClose: l, kResponse: g, kReceivedClose: E } = t2(7696), { isValidStatusCode: u, failWebsocketConnection: d, websocketMessageReceived: I } = t2(4321), { WebsocketFrameSend: h } = t2(1808), Q = {};
    Q.ping = r2.channel("undici:websocket:ping"), Q.pong = r2.channel("undici:websocket:pong");
    e2.exports = { ByteParser: class extends n2 {
      #g = [];
      #E = 0;
      #u = o2.INFO;
      #d = {};
      #I = [];
      constructor(e3) {
        super(), this.ws = e3;
      }
      _write(e3, A3, t3) {
        this.#g.push(e3), this.#E += e3.length, this.run(t3);
      }
      run(e3) {
        for (; ; ) {
          if (this.#u === o2.INFO) {
            if (this.#E < 2) return e3();
            const A3 = this.consume(2);
            if (this.#d.fin = !!(128 & A3[0]), this.#d.opcode = 15 & A3[0], this.#d.originalOpcode ??= this.#d.opcode, this.#d.fragmented = !this.#d.fin && this.#d.opcode !== s.CONTINUATION, this.#d.fragmented && this.#d.opcode !== s.BINARY && this.#d.opcode !== s.TEXT) return void d(this.ws, "Invalid frame type was fragmented.");
            const t3 = 127 & A3[1];
            if (t3 <= 125 ? (this.#d.payloadLength = t3, this.#u = o2.READ_DATA) : 126 === t3 ? this.#u = o2.PAYLOADLENGTH_16 : 127 === t3 && (this.#u = o2.PAYLOADLENGTH_64), this.#d.fragmented && t3 > 125) return void d(this.ws, "Fragmented frame exceeded 125 bytes.");
            if ((this.#d.opcode === s.PING || this.#d.opcode === s.PONG || this.#d.opcode === s.CLOSE) && t3 > 125) return void d(this.ws, "Payload length for control frame exceeded 125 bytes.");
            if (this.#d.opcode === s.CLOSE) {
              if (1 === t3) return void d(this.ws, "Received close frame with a 1-byte body.");
              const e4 = this.consume(t3);
              if (this.#d.closeInfo = this.parseCloseBody(false, e4), !this.ws[l]) {
                const e5 = Buffer.allocUnsafe(2);
                e5.writeUInt16BE(this.#d.closeInfo.code, 0);
                const A4 = new h(e5);
                this.ws[g].socket.write(A4.createFrame(s.CLOSE), (e6) => {
                  e6 || (this.ws[l] = true);
                });
              }
              return this.ws[c] = a.CLOSING, this.ws[E] = true, void this.end();
            }
            if (this.#d.opcode === s.PING) {
              const A4 = this.consume(t3);
              if (!this.ws[E]) {
                const e4 = new h(A4);
                this.ws[g].socket.write(e4.createFrame(s.PONG)), Q.ping.hasSubscribers && Q.ping.publish({ payload: A4 });
              }
              if (this.#u = o2.INFO, this.#E > 0) continue;
              return void e3();
            }
            if (this.#d.opcode === s.PONG) {
              const A4 = this.consume(t3);
              if (Q.pong.hasSubscribers && Q.pong.publish({ payload: A4 }), this.#E > 0) continue;
              return void e3();
            }
          } else if (this.#u === o2.PAYLOADLENGTH_16) {
            if (this.#E < 2) return e3();
            const A3 = this.consume(2);
            this.#d.payloadLength = A3.readUInt16BE(0), this.#u = o2.READ_DATA;
          } else if (this.#u === o2.PAYLOADLENGTH_64) {
            if (this.#E < 8) return e3();
            const A3 = this.consume(8), t3 = A3.readUInt32BE(0);
            if (t3 > 2 ** 31 - 1) return void d(this.ws, "Received payload length > 2^31 bytes.");
            const n3 = A3.readUInt32BE(4);
            this.#d.payloadLength = (t3 << 8) + n3, this.#u = o2.READ_DATA;
          } else if (this.#u === o2.READ_DATA) {
            if (this.#E < this.#d.payloadLength) return e3();
            if (this.#E >= this.#d.payloadLength) {
              const e4 = this.consume(this.#d.payloadLength);
              if (this.#I.push(e4), !this.#d.fragmented || this.#d.fin && this.#d.opcode === s.CONTINUATION) {
                const e5 = Buffer.concat(this.#I);
                I(this.ws, this.#d.originalOpcode, e5), this.#d = {}, this.#I.length = 0;
              }
              this.#u = o2.INFO;
            }
          }
          if (!(this.#E > 0)) {
            e3();
            break;
          }
        }
      }
      consume(e3) {
        if (e3 > this.#E) return null;
        if (0 === e3) return i;
        if (this.#g[0].length === e3) return this.#E -= this.#g[0].length, this.#g.shift();
        const A3 = Buffer.allocUnsafe(e3);
        let t3 = 0;
        for (; t3 !== e3; ) {
          const n3 = this.#g[0], { length: r3 } = n3;
          if (r3 + t3 === e3) {
            A3.set(this.#g.shift(), t3);
            break;
          }
          if (r3 + t3 > e3) {
            A3.set(n3.subarray(0, e3 - t3), t3), this.#g[0] = n3.subarray(e3 - t3);
            break;
          }
          A3.set(this.#g.shift(), t3), t3 += n3.length;
        }
        return this.#E -= e3, A3;
      }
      parseCloseBody(e3, A3) {
        let t3;
        if (A3.length >= 2 && (t3 = A3.readUInt16BE(0)), e3) return u(t3) ? { code: t3 } : null;
        let n3 = A3.subarray(2);
        if (239 === n3[0] && 187 === n3[1] && 191 === n3[2] && (n3 = n3.subarray(3)), void 0 !== t3 && !u(t3)) return null;
        try {
          n3 = new TextDecoder("utf-8", { fatal: true }).decode(n3);
        } catch {
          return null;
        }
        return { code: t3, reason: n3 };
      }
      get closingInfo() {
        return this.#d.closeInfo;
      }
    } };
  }