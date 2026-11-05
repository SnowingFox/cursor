// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 8430 range:771834..780914
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8430: (e2, t2, A2) => {
    "use strict";
    const { webidl: n2 } = A2(8005), { DOMException: r2 } = A2(6687), { URLSerializer: o2 } = A2(3631), { getGlobalOrigin: s } = A2(9523), { staticPropertyDescriptors: i, states: a, opcodes: c, emptyBuffer: l } = A2(5440), { kWebSocketURL: u, kReadyState: g, kController: E, kBinaryType: h, kResponse: d, kSentClose: I, kByteParser: B } = A2(7696), { isEstablished: Q, isClosing: f, isValidSubprotocol: C, failWebsocketConnection: p, fireEvent: m } = A2(4321), { establishWebSocketConnection: y } = A2(9809), { WebsocketFrameSend: w } = A2(1808), { ByteParser: k } = A2(9044), { kEnumerableProperty: b, isBlobLike: N } = A2(9361), { getGlobalDispatcher: T } = A2(7362), { types: D } = A2(9023);
    let S = false;
    class R extends EventTarget {
      #A = { open: null, error: null, close: null, message: null };
      #n = 0;
      #r = "";
      #o = "";
      constructor(e3, t3 = []) {
        super(), n2.argumentLengthCheck(arguments, 1, { header: "WebSocket constructor" }), S || (S = true, process.emitWarning("WebSockets are experimental, expect them to change at any time.", { code: "UNDICI-WS" }));
        const A3 = n2.converters["DOMString or sequence<DOMString> or WebSocketInit"](t3);
        e3 = n2.converters.USVString(e3), t3 = A3.protocols;
        const o3 = s();
        let i2;
        try {
          i2 = new URL(e3, o3);
        } catch (e4) {
          throw new r2(e4, "SyntaxError");
        }
        if ("http:" === i2.protocol ? i2.protocol = "ws:" : "https:" === i2.protocol && (i2.protocol = "wss:"), "ws:" !== i2.protocol && "wss:" !== i2.protocol) throw new r2(`Expected a ws: or wss: protocol, got ${i2.protocol}`, "SyntaxError");
        if (i2.hash || i2.href.endsWith("#")) throw new r2("Got fragment", "SyntaxError");
        if ("string" == typeof t3 && (t3 = [t3]), t3.length !== new Set(t3.map((e4) => e4.toLowerCase())).size) throw new r2("Invalid Sec-WebSocket-Protocol value", "SyntaxError");
        if (t3.length > 0 && !t3.every((e4) => C(e4))) throw new r2("Invalid Sec-WebSocket-Protocol value", "SyntaxError");
        this[u] = new URL(i2.href), this[E] = y(i2, t3, this, (e4) => this.#s(e4), A3), this[g] = R.CONNECTING, this[h] = "blob";
      }
      close(e3 = void 0, t3 = void 0) {
        if (n2.brandCheck(this, R), void 0 !== e3 && (e3 = n2.converters["unsigned short"](e3, { clamp: true })), void 0 !== t3 && (t3 = n2.converters.USVString(t3)), void 0 !== e3 && 1e3 !== e3 && (e3 < 3e3 || e3 > 4999)) throw new r2("invalid code", "InvalidAccessError");
        let A3 = 0;
        if (void 0 !== t3 && (A3 = Buffer.byteLength(t3), A3 > 123)) throw new r2(`Reason must be less than 123 bytes; received ${A3}`, "SyntaxError");
        if (this[g] === R.CLOSING || this[g] === R.CLOSED) ;
        else if (Q(this)) if (f(this)) this[g] = R.CLOSING;
        else {
          const n3 = new w();
          void 0 !== e3 && void 0 === t3 ? (n3.frameData = Buffer.allocUnsafe(2), n3.frameData.writeUInt16BE(e3, 0)) : void 0 !== e3 && void 0 !== t3 ? (n3.frameData = Buffer.allocUnsafe(2 + A3), n3.frameData.writeUInt16BE(e3, 0), n3.frameData.write(t3, 2, "utf-8")) : n3.frameData = l;
          this[d].socket.write(n3.createFrame(c.CLOSE), (e4) => {
            e4 || (this[I] = true);
          }), this[g] = a.CLOSING;
        }
        else p(this, "Connection was closed before it was established."), this[g] = R.CLOSING;
      }
      send(e3) {
        if (n2.brandCheck(this, R), n2.argumentLengthCheck(arguments, 1, { header: "WebSocket.send" }), e3 = n2.converters.WebSocketSendData(e3), this[g] === R.CONNECTING) throw new r2("Sent before connected.", "InvalidStateError");
        if (!Q(this) || f(this)) return;
        const t3 = this[d].socket;
        if ("string" == typeof e3) {
          const A3 = Buffer.from(e3), n3 = new w(A3).createFrame(c.TEXT);
          this.#n += A3.byteLength, t3.write(n3, () => {
            this.#n -= A3.byteLength;
          });
        } else if (D.isArrayBuffer(e3)) {
          const A3 = Buffer.from(e3), n3 = new w(A3).createFrame(c.BINARY);
          this.#n += A3.byteLength, t3.write(n3, () => {
            this.#n -= A3.byteLength;
          });
        } else if (ArrayBuffer.isView(e3)) {
          const A3 = Buffer.from(e3, e3.byteOffset, e3.byteLength), n3 = new w(A3).createFrame(c.BINARY);
          this.#n += A3.byteLength, t3.write(n3, () => {
            this.#n -= A3.byteLength;
          });
        } else if (N(e3)) {
          const A3 = new w();
          e3.arrayBuffer().then((e4) => {
            const n3 = Buffer.from(e4);
            A3.frameData = n3;
            const r3 = A3.createFrame(c.BINARY);
            this.#n += n3.byteLength, t3.write(r3, () => {
              this.#n -= n3.byteLength;
            });
          });
        }
      }
      get readyState() {
        return n2.brandCheck(this, R), this[g];
      }
      get bufferedAmount() {
        return n2.brandCheck(this, R), this.#n;
      }
      get url() {
        return n2.brandCheck(this, R), o2(this[u]);
      }
      get extensions() {
        return n2.brandCheck(this, R), this.#o;
      }
      get protocol() {
        return n2.brandCheck(this, R), this.#r;
      }
      get onopen() {
        return n2.brandCheck(this, R), this.#A.open;
      }
      set onopen(e3) {
        n2.brandCheck(this, R), this.#A.open && this.removeEventListener("open", this.#A.open), "function" == typeof e3 ? (this.#A.open = e3, this.addEventListener("open", e3)) : this.#A.open = null;
      }
      get onerror() {
        return n2.brandCheck(this, R), this.#A.error;
      }
      set onerror(e3) {
        n2.brandCheck(this, R), this.#A.error && this.removeEventListener("error", this.#A.error), "function" == typeof e3 ? (this.#A.error = e3, this.addEventListener("error", e3)) : this.#A.error = null;
      }
      get onclose() {
        return n2.brandCheck(this, R), this.#A.close;
      }
      set onclose(e3) {
        n2.brandCheck(this, R), this.#A.close && this.removeEventListener("close", this.#A.close), "function" == typeof e3 ? (this.#A.close = e3, this.addEventListener("close", e3)) : this.#A.close = null;
      }
      get onmessage() {
        return n2.brandCheck(this, R), this.#A.message;
      }
      set onmessage(e3) {
        n2.brandCheck(this, R), this.#A.message && this.removeEventListener("message", this.#A.message), "function" == typeof e3 ? (this.#A.message = e3, this.addEventListener("message", e3)) : this.#A.message = null;
      }
      get binaryType() {
        return n2.brandCheck(this, R), this[h];
      }
      set binaryType(e3) {
        n2.brandCheck(this, R), this[h] = "blob" !== e3 && "arraybuffer" !== e3 ? "blob" : e3;
      }
      #s(e3) {
        this[d] = e3;
        const t3 = new k(this);
        t3.on("drain", function() {
          this.ws[d].socket.resume();
        }), e3.socket.ws = this, this[B] = t3, this[g] = a.OPEN;
        const A3 = e3.headersList.get("sec-websocket-extensions");
        null !== A3 && (this.#o = A3);
        const n3 = e3.headersList.get("sec-websocket-protocol");
        null !== n3 && (this.#r = n3), m("open", this);
      }
    }
    R.CONNECTING = R.prototype.CONNECTING = a.CONNECTING, R.OPEN = R.prototype.OPEN = a.OPEN, R.CLOSING = R.prototype.CLOSING = a.CLOSING, R.CLOSED = R.prototype.CLOSED = a.CLOSED, Object.defineProperties(R.prototype, { CONNECTING: i, OPEN: i, CLOSING: i, CLOSED: i, url: b, readyState: b, bufferedAmount: b, onopen: b, onerror: b, onclose: b, close: b, onmessage: b, binaryType: b, send: b, extensions: b, protocol: b, [Symbol.toStringTag]: { value: "WebSocket", writable: false, enumerable: false, configurable: true } }), Object.defineProperties(R, { CONNECTING: i, OPEN: i, CLOSING: i, CLOSED: i }), n2.converters["sequence<DOMString>"] = n2.sequenceConverter(n2.converters.DOMString), n2.converters["DOMString or sequence<DOMString>"] = function(e3) {
      return "Object" === n2.util.Type(e3) && Symbol.iterator in e3 ? n2.converters["sequence<DOMString>"](e3) : n2.converters.DOMString(e3);
    }, n2.converters.WebSocketInit = n2.dictionaryConverter([{ key: "protocols", converter: n2.converters["DOMString or sequence<DOMString>"], get defaultValue() {
      return [];
    } }, { key: "dispatcher", converter: (e3) => e3, get defaultValue() {
      return T();
    } }, { key: "headers", converter: n2.nullableConverter(n2.converters.HeadersInit) }]), n2.converters["DOMString or sequence<DOMString> or WebSocketInit"] = function(e3) {
      return "Object" !== n2.util.Type(e3) || Symbol.iterator in e3 ? { protocols: n2.converters["DOMString or sequence<DOMString>"](e3) } : n2.converters.WebSocketInit(e3);
    }, n2.converters.WebSocketSendData = function(e3) {
      if ("Object" === n2.util.Type(e3)) {
        if (N(e3)) return n2.converters.Blob(e3, { strict: false });
        if (ArrayBuffer.isView(e3) || D.isAnyArrayBuffer(e3)) return n2.converters.BufferSource(e3);
      }
      return n2.converters.USVString(e3);
    }, e2.exports = { WebSocket: R };
  }