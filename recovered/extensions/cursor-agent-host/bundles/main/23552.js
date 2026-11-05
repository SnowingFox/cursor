// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 23552 range:4493483..4499033
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
23552: (e, t, r) => {
    "use strict";
    const { Writable: n } = r(2203), s = r(31637), { parserStates: o, opcodes: i, states: a, emptyBuffer: c } = r(15948), { kReadyState: l, kSentClose: u, kResponse: d, kReceivedClose: p } = r(96140), { isValidStatusCode: m, failWebsocketConnection: h, websocketMessageReceived: f } = r(18149), { WebsocketFrameSend: g } = r(87324), y = {};
    y.ping = s.channel("undici:websocket:ping"), y.pong = s.channel("undici:websocket:pong");
    e.exports = { ByteParser: class extends n {
      #o = [];
      #i = 0;
      #a = o.INFO;
      #c = {};
      #l = [];
      constructor(e2) {
        super(), this.ws = e2;
      }
      _write(e2, t2, r2) {
        this.#o.push(e2), this.#i += e2.length, this.run(r2);
      }
      run(e2) {
        for (; ; ) {
          if (this.#a === o.INFO) {
            if (this.#i < 2) return e2();
            const t2 = this.consume(2);
            if (this.#c.fin = !!(128 & t2[0]), this.#c.opcode = 15 & t2[0], this.#c.originalOpcode ??= this.#c.opcode, this.#c.fragmented = !this.#c.fin && this.#c.opcode !== i.CONTINUATION, this.#c.fragmented && this.#c.opcode !== i.BINARY && this.#c.opcode !== i.TEXT) return void h(this.ws, "Invalid frame type was fragmented.");
            const r2 = 127 & t2[1];
            if (r2 <= 125 ? (this.#c.payloadLength = r2, this.#a = o.READ_DATA) : 126 === r2 ? this.#a = o.PAYLOADLENGTH_16 : 127 === r2 && (this.#a = o.PAYLOADLENGTH_64), this.#c.fragmented && r2 > 125) return void h(this.ws, "Fragmented frame exceeded 125 bytes.");
            if ((this.#c.opcode === i.PING || this.#c.opcode === i.PONG || this.#c.opcode === i.CLOSE) && r2 > 125) return void h(this.ws, "Payload length for control frame exceeded 125 bytes.");
            if (this.#c.opcode === i.CLOSE) {
              if (1 === r2) return void h(this.ws, "Received close frame with a 1-byte body.");
              const e3 = this.consume(r2);
              if (this.#c.closeInfo = this.parseCloseBody(false, e3), !this.ws[u]) {
                const e4 = Buffer.allocUnsafe(2);
                e4.writeUInt16BE(this.#c.closeInfo.code, 0);
                const t3 = new g(e4);
                this.ws[d].socket.write(t3.createFrame(i.CLOSE), (e5) => {
                  e5 || (this.ws[u] = true);
                });
              }
              return this.ws[l] = a.CLOSING, this.ws[p] = true, void this.end();
            }
            if (this.#c.opcode === i.PING) {
              const t3 = this.consume(r2);
              if (!this.ws[p]) {
                const e3 = new g(t3);
                this.ws[d].socket.write(e3.createFrame(i.PONG)), y.ping.hasSubscribers && y.ping.publish({ payload: t3 });
              }
              if (this.#a = o.INFO, this.#i > 0) continue;
              return void e2();
            }
            if (this.#c.opcode === i.PONG) {
              const t3 = this.consume(r2);
              if (y.pong.hasSubscribers && y.pong.publish({ payload: t3 }), this.#i > 0) continue;
              return void e2();
            }
          } else if (this.#a === o.PAYLOADLENGTH_16) {
            if (this.#i < 2) return e2();
            const t2 = this.consume(2);
            this.#c.payloadLength = t2.readUInt16BE(0), this.#a = o.READ_DATA;
          } else if (this.#a === o.PAYLOADLENGTH_64) {
            if (this.#i < 8) return e2();
            const t2 = this.consume(8), r2 = t2.readUInt32BE(0);
            if (r2 > 2 ** 31 - 1) return void h(this.ws, "Received payload length > 2^31 bytes.");
            const n2 = t2.readUInt32BE(4);
            this.#c.payloadLength = (r2 << 8) + n2, this.#a = o.READ_DATA;
          } else if (this.#a === o.READ_DATA) {
            if (this.#i < this.#c.payloadLength) return e2();
            if (this.#i >= this.#c.payloadLength) {
              const e3 = this.consume(this.#c.payloadLength);
              if (this.#l.push(e3), !this.#c.fragmented || this.#c.fin && this.#c.opcode === i.CONTINUATION) {
                const e4 = Buffer.concat(this.#l);
                f(this.ws, this.#c.originalOpcode, e4), this.#c = {}, this.#l.length = 0;
              }
              this.#a = o.INFO;
            }
          }
          if (!(this.#i > 0)) {
            e2();
            break;
          }
        }
      }
      consume(e2) {
        if (e2 > this.#i) return null;
        if (0 === e2) return c;
        if (this.#o[0].length === e2) return this.#i -= this.#o[0].length, this.#o.shift();
        const t2 = Buffer.allocUnsafe(e2);
        let r2 = 0;
        for (; r2 !== e2; ) {
          const n2 = this.#o[0], { length: s2 } = n2;
          if (s2 + r2 === e2) {
            t2.set(this.#o.shift(), r2);
            break;
          }
          if (s2 + r2 > e2) {
            t2.set(n2.subarray(0, e2 - r2), r2), this.#o[0] = n2.subarray(e2 - r2);
            break;
          }
          t2.set(this.#o.shift(), r2), r2 += n2.length;
        }
        return this.#i -= e2, t2;
      }
      parseCloseBody(e2, t2) {
        let r2;
        if (t2.length >= 2 && (r2 = t2.readUInt16BE(0)), e2) return m(r2) ? { code: r2 } : null;
        let n2 = t2.subarray(2);
        if (239 === n2[0] && 187 === n2[1] && 191 === n2[2] && (n2 = n2.subarray(3)), void 0 !== r2 && !m(r2)) return null;
        try {
          n2 = new TextDecoder("utf-8", { fatal: true }).decode(n2);
        } catch {
          return null;
        }
        return { code: r2, reason: n2 };
      }
      get closingInfo() {
        return this.#c.closeInfo;
      }
    } };
  }