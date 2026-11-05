// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 3552 range:953207..958792
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3552: (t2, e2, r2) => {
    "use strict";
    const { Writable: n2 } = r2(2203), s2 = r2(1637), { parserStates: i2, opcodes: o2, states: a, emptyBuffer: u } = r2(5948), { kReadyState: c, kSentClose: l, kResponse: m, kReceivedClose: d } = r2(6140), { isValidStatusCode: f, failWebsocketConnection: p, websocketMessageReceived: h } = r2(8149), { WebsocketFrameSend: g } = r2(7324), A = {};
    A.ping = s2.channel("undici:websocket:ping"), A.pong = s2.channel("undici:websocket:pong");
    t2.exports = { ByteParser: class extends n2 {
      #e = [];
      #r = 0;
      #n = i2.INFO;
      #s = {};
      #i = [];
      constructor(t3) {
        super(), this.ws = t3;
      }
      _write(t3, e3, r3) {
        this.#e.push(t3), this.#r += t3.length, this.run(r3);
      }
      run(t3) {
        for (; ; ) {
          if (this.#n === i2.INFO) {
            if (this.#r < 2) return t3();
            const e3 = this.consume(2);
            if (this.#s.fin = !!(128 & e3[0]), this.#s.opcode = 15 & e3[0], this.#s.originalOpcode ??= this.#s.opcode, this.#s.fragmented = !this.#s.fin && this.#s.opcode !== o2.CONTINUATION, this.#s.fragmented && this.#s.opcode !== o2.BINARY && this.#s.opcode !== o2.TEXT) return void p(this.ws, "Invalid frame type was fragmented.");
            const r3 = 127 & e3[1];
            if (r3 <= 125 ? (this.#s.payloadLength = r3, this.#n = i2.READ_DATA) : 126 === r3 ? this.#n = i2.PAYLOADLENGTH_16 : 127 === r3 && (this.#n = i2.PAYLOADLENGTH_64), this.#s.fragmented && r3 > 125) return void p(this.ws, "Fragmented frame exceeded 125 bytes.");
            if ((this.#s.opcode === o2.PING || this.#s.opcode === o2.PONG || this.#s.opcode === o2.CLOSE) && r3 > 125) return void p(this.ws, "Payload length for control frame exceeded 125 bytes.");
            if (this.#s.opcode === o2.CLOSE) {
              if (1 === r3) return void p(this.ws, "Received close frame with a 1-byte body.");
              const t4 = this.consume(r3);
              if (this.#s.closeInfo = this.parseCloseBody(false, t4), !this.ws[l]) {
                const t5 = Buffer.allocUnsafe(2);
                t5.writeUInt16BE(this.#s.closeInfo.code, 0);
                const e4 = new g(t5);
                this.ws[m].socket.write(e4.createFrame(o2.CLOSE), (t6) => {
                  t6 || (this.ws[l] = true);
                });
              }
              return this.ws[c] = a.CLOSING, this.ws[d] = true, void this.end();
            }
            if (this.#s.opcode === o2.PING) {
              const e4 = this.consume(r3);
              if (!this.ws[d]) {
                const t4 = new g(e4);
                this.ws[m].socket.write(t4.createFrame(o2.PONG)), A.ping.hasSubscribers && A.ping.publish({ payload: e4 });
              }
              if (this.#n = i2.INFO, this.#r > 0) continue;
              return void t3();
            }
            if (this.#s.opcode === o2.PONG) {
              const e4 = this.consume(r3);
              if (A.pong.hasSubscribers && A.pong.publish({ payload: e4 }), this.#r > 0) continue;
              return void t3();
            }
          } else if (this.#n === i2.PAYLOADLENGTH_16) {
            if (this.#r < 2) return t3();
            const e3 = this.consume(2);
            this.#s.payloadLength = e3.readUInt16BE(0), this.#n = i2.READ_DATA;
          } else if (this.#n === i2.PAYLOADLENGTH_64) {
            if (this.#r < 8) return t3();
            const e3 = this.consume(8), r3 = e3.readUInt32BE(0);
            if (r3 > 2 ** 31 - 1) return void p(this.ws, "Received payload length > 2^31 bytes.");
            const n3 = e3.readUInt32BE(4);
            this.#s.payloadLength = (r3 << 8) + n3, this.#n = i2.READ_DATA;
          } else if (this.#n === i2.READ_DATA) {
            if (this.#r < this.#s.payloadLength) return t3();
            if (this.#r >= this.#s.payloadLength) {
              const t4 = this.consume(this.#s.payloadLength);
              if (this.#i.push(t4), !this.#s.fragmented || this.#s.fin && this.#s.opcode === o2.CONTINUATION) {
                const t5 = Buffer.concat(this.#i);
                h(this.ws, this.#s.originalOpcode, t5), this.#s = {}, this.#i.length = 0;
              }
              this.#n = i2.INFO;
            }
          }
          if (!(this.#r > 0)) {
            t3();
            break;
          }
        }
      }
      consume(t3) {
        if (t3 > this.#r) return null;
        if (0 === t3) return u;
        if (this.#e[0].length === t3) return this.#r -= this.#e[0].length, this.#e.shift();
        const e3 = Buffer.allocUnsafe(t3);
        let r3 = 0;
        for (; r3 !== t3; ) {
          const n3 = this.#e[0], { length: s3 } = n3;
          if (s3 + r3 === t3) {
            e3.set(this.#e.shift(), r3);
            break;
          }
          if (s3 + r3 > t3) {
            e3.set(n3.subarray(0, t3 - r3), r3), this.#e[0] = n3.subarray(t3 - r3);
            break;
          }
          e3.set(this.#e.shift(), r3), r3 += n3.length;
        }
        return this.#r -= t3, e3;
      }
      parseCloseBody(t3, e3) {
        let r3;
        if (e3.length >= 2 && (r3 = e3.readUInt16BE(0)), t3) return f(r3) ? { code: r3 } : null;
        let n3 = e3.subarray(2);
        if (239 === n3[0] && 187 === n3[1] && 191 === n3[2] && (n3 = n3.subarray(3)), void 0 !== r3 && !f(r3)) return null;
        try {
          n3 = new TextDecoder("utf-8", { fatal: true }).decode(n3);
        } catch {
          return null;
        }
        return { code: r3, reason: n3 };
      }
      get closingInfo() {
        return this.#s.closeInfo;
      }
    } };
  }