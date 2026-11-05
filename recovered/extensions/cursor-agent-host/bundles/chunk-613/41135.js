// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 41135 range:218860..226540
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
41135: (A, e, t) => {
  "use strict";
  const { Writable: r } = t(57075), s = t(56970), { parserStates: o, opcodes: n, states: i, emptyBuffer: a, sentCloseFrameState: Q } = t(30229), { kReadyState: g, kSentClose: E, kResponse: B, kReceivedClose: c } = t(47489), { channels: I } = t(98565), { isValidStatusCode: C, isValidOpcode: h, failWebsocketConnection: l, websocketMessageReceived: u, utf8Decode: d, isControlFrame: f, isTextBinaryFrame: w, isContinuationFrame: y } = t(79946), { WebsocketFrameSend: D } = t(35553), { closeWebSocketConnection: p } = t(81674), { PerMessageDeflate: k } = t(88774), { MessageSizeExceededError: R } = t(38238);
  function F(A2, e2, t2) {
    p(A2, e2, t2, Buffer.byteLength(t2)), l(A2, t2);
  }
  A.exports = { ByteParser: class extends r {
    #w = [];
    #y = 0;
    #D = 0;
    #p = false;
    #c = o.INFO;
    #k = {};
    #R = [];
    #F;
    #m;
    #b;
    constructor(A2, e2, t2 = {}) {
      super(), this.ws = A2, this.#F = e2 ?? /* @__PURE__ */ new Map(), this.#m = t2.maxFragments ?? 0, this.#b = t2.maxPayloadSize ?? 0, this.#F.has("permessage-deflate") && this.#F.set("permessage-deflate", new k(e2, t2));
    }
    _write(A2, e2, t2) {
      this.#w.push(A2), this.#D += A2.length, this.#p = true, this.run(t2);
    }
    #N() {
      return !(this.#b > 0 && !f(this.#k.opcode) && this.#k.payloadLength + this.#y > this.#b) || (F(this.ws, 1009, "Payload size exceeds maximum allowed size"), false);
    }
    run(A2) {
      for (; this.#p; ) if (this.#c === o.INFO) {
        if (this.#D < 2) return A2();
        const e2 = this.consume(2), t2 = !!(128 & e2[0]), r2 = 15 & e2[0], s2 = !(128 & ~e2[1]), i2 = !t2 && r2 !== n.CONTINUATION, a2 = 127 & e2[1], Q2 = 64 & e2[0], g2 = 32 & e2[0], E2 = 16 & e2[0];
        if (!h(r2)) return l(this.ws, "Invalid opcode received"), A2();
        if (s2) return l(this.ws, "Frame cannot be masked"), A2();
        if (0 !== Q2 && !this.#F.has("permessage-deflate")) return void l(this.ws, "Expected RSV1 to be clear.");
        if (0 !== g2 || 0 !== E2) return void l(this.ws, "RSV1, RSV2, RSV3 must be clear");
        if (i2 && !w(r2)) return void l(this.ws, "Invalid frame type was fragmented.");
        if (w(r2) && this.#R.length > 0) return void l(this.ws, "Expected continuation frame");
        if (this.#k.fragmented && i2) return void l(this.ws, "Fragmented frame exceeded 125 bytes.");
        if ((a2 > 125 || i2) && f(r2)) return void l(this.ws, "Control frame either too large or fragmented");
        if (y(r2) && 0 === this.#R.length && !this.#k.compressed) return void l(this.ws, "Unexpected continuation frame");
        if (a2 <= 125) {
          if (this.#k.payloadLength = a2, this.#c = o.READ_DATA, !this.#N()) return;
        } else 126 === a2 ? this.#c = o.PAYLOADLENGTH_16 : 127 === a2 && (this.#c = o.PAYLOADLENGTH_64);
        w(r2) && (this.#k.binaryType = r2, this.#k.compressed = 0 !== Q2), this.#k.opcode = r2, this.#k.masked = s2, this.#k.fin = t2, this.#k.fragmented = i2;
      } else if (this.#c === o.PAYLOADLENGTH_16) {
        if (this.#D < 2) return A2();
        const e2 = this.consume(2);
        if (this.#k.payloadLength = e2.readUInt16BE(0), this.#c = o.READ_DATA, !this.#N()) return;
      } else if (this.#c === o.PAYLOADLENGTH_64) {
        if (this.#D < 8) return A2();
        const e2 = this.consume(8), t2 = e2.readUInt32BE(0), r2 = e2.readUInt32BE(4);
        if (0 !== t2 || r2 > 2 ** 31 - 1) return void l(this.ws, "Received payload length > 2^31 bytes.");
        if (this.#k.payloadLength = r2, this.#c = o.READ_DATA, !this.#N()) return;
      } else if (this.#c === o.READ_DATA) {
        if (this.#D < this.#k.payloadLength) return A2();
        const e2 = this.consume(this.#k.payloadLength);
        if (f(this.#k.opcode)) this.#p = this.parseControlFrame(e2), this.#c = o.INFO;
        else {
          if (this.#k.compressed) {
            this.#F.get("permessage-deflate").decompress(e2, this.#k.fin, (e3, t2) => {
              if (e3) {
                const A3 = e3 instanceof R ? 1009 : 1007;
                return void F(this.ws, A3, e3.message);
              }
              if (this.writeFragments(t2)) if (this.#b > 0 && this.#y > this.#b) F(this.ws, 1009, new R().message);
              else {
                if (!this.#k.fin) return this.#c = o.INFO, this.#p = true, void this.run(A2);
                u(this.ws, this.#k.binaryType, this.consumeFragments()), this.#p = true, this.#c = o.INFO, this.run(A2);
              }
            }), this.#p = false;
            break;
          }
          if (!this.writeFragments(e2)) return;
          if (this.#b > 0 && this.#y > this.#b) return void F(this.ws, 1009, new R().message);
          !this.#k.fragmented && this.#k.fin && u(this.ws, this.#k.binaryType, this.consumeFragments()), this.#c = o.INFO;
        }
      }
    }
    consume(A2) {
      if (A2 > this.#D) throw new Error("Called consume() before buffers satiated.");
      if (0 === A2) return a;
      if (this.#w[0].length === A2) return this.#D -= this.#w[0].length, this.#w.shift();
      const e2 = Buffer.allocUnsafe(A2);
      let t2 = 0;
      for (; t2 !== A2; ) {
        const r2 = this.#w[0], { length: s2 } = r2;
        if (s2 + t2 === A2) {
          e2.set(this.#w.shift(), t2);
          break;
        }
        if (s2 + t2 > A2) {
          e2.set(r2.subarray(0, A2 - t2), t2), this.#w[0] = r2.subarray(A2 - t2);
          break;
        }
        e2.set(this.#w.shift(), t2), t2 += r2.length;
      }
      return this.#D -= A2, e2;
    }
    writeFragments(A2) {
      return this.#m > 0 && this.#R.length === this.#m ? (F(this.ws, 1008, "Too many message fragments"), false) : (this.#y += A2.length, this.#R.push(A2), true);
    }
    consumeFragments() {
      const A2 = this.#R;
      if (1 === A2.length) return this.#y = 0, A2.shift();
      const e2 = Buffer.concat(A2, this.#y);
      return this.#R = [], this.#y = 0, e2;
    }
    parseCloseBody(A2) {
      let e2;
      if (s(1 !== A2.length), A2.length >= 2 && (e2 = A2.readUInt16BE(0)), void 0 !== e2 && !C(e2)) return { code: 1002, reason: "Invalid status code", error: true };
      let t2 = A2.subarray(2);
      239 === t2[0] && 187 === t2[1] && 191 === t2[2] && (t2 = t2.subarray(3));
      try {
        t2 = d(t2);
      } catch {
        return { code: 1007, reason: "Invalid UTF-8", error: true };
      }
      return { code: e2, reason: t2, error: false };
    }
    parseControlFrame(A2) {
      const { opcode: e2, payloadLength: t2 } = this.#k;
      if (e2 === n.CLOSE) {
        if (1 === t2) return l(this.ws, "Received close frame with a 1-byte body."), false;
        if (this.#k.closeInfo = this.parseCloseBody(A2), this.#k.closeInfo.error) {
          const { code: A3, reason: e3 } = this.#k.closeInfo;
          return p(this.ws, A3, e3, e3.length), l(this.ws, e3), false;
        }
        if (this.ws[E] !== Q.SENT) {
          let A3 = a;
          this.#k.closeInfo.code && (A3 = Buffer.allocUnsafe(2), A3.writeUInt16BE(this.#k.closeInfo.code, 0));
          const e3 = new D(A3);
          this.ws[B].socket.write(e3.createFrame(n.CLOSE), (A4) => {
            A4 || (this.ws[E] = Q.SENT);
          });
        }
        return this.ws[g] = i.CLOSING, this.ws[c] = true, false;
      }
      if (e2 === n.PING) {
        if (!this.ws[c]) {
          const e3 = new D(A2);
          this.ws[B].socket.write(e3.createFrame(n.PONG)), I.ping.hasSubscribers && I.ping.publish({ payload: A2 });
        }
      } else e2 === n.PONG && I.pong.hasSubscribers && I.pong.publish({ payload: A2 });
      return true;
    }
    get closingInfo() {
      return this.#k.closeInfo;
    }
  } };
}