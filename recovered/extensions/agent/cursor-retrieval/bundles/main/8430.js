// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 8430 range:984496..993587
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8430: (e2, a2, n2) => {
    "use strict";
    const { webidl: t2 } = n2(8005), { DOMException: s2 } = n2(6687), { URLSerializer: o2 } = n2(3631), { getGlobalOrigin: r2 } = n2(9523), { staticPropertyDescriptors: i2, states: l, opcodes: d, emptyBuffer: m } = n2(5440), { kWebSocketURL: c, kReadyState: p, kController: A, kBinaryType: u, kResponse: g, kSentClose: T, kByteParser: h } = n2(7696), { isEstablished: k, isClosing: _, isValidSubprotocol: E, failWebsocketConnection: f, fireEvent: C } = n2(4321), { establishWebSocketConnection: I } = n2(9809), { WebsocketFrameSend: v } = n2(1808), { ByteParser: y } = n2(9044), { kEnumerableProperty: S, isBlobLike: R } = n2(9361), { getGlobalDispatcher: N } = n2(7362), { types: B } = n2(9023);
    let w = false;
    class b extends EventTarget {
      #n = { open: null, error: null, close: null, message: null };
      #t = 0;
      #s = "";
      #o = "";
      constructor(e3, a3 = []) {
        super(), t2.argumentLengthCheck(arguments, 1, { header: "WebSocket constructor" }), w || (w = true, process.emitWarning("WebSockets are experimental, expect them to change at any time.", { code: "UNDICI-WS" }));
        const n3 = t2.converters["DOMString or sequence<DOMString> or WebSocketInit"](a3);
        e3 = t2.converters.USVString(e3), a3 = n3.protocols;
        const o3 = r2();
        let i3;
        try {
          i3 = new URL(e3, o3);
        } catch (e4) {
          throw new s2(e4, "SyntaxError");
        }
        if ("http:" === i3.protocol ? i3.protocol = "ws:" : "https:" === i3.protocol && (i3.protocol = "wss:"), "ws:" !== i3.protocol && "wss:" !== i3.protocol) throw new s2(`Expected a ws: or wss: protocol, got ${i3.protocol}`, "SyntaxError");
        if (i3.hash || i3.href.endsWith("#")) throw new s2("Got fragment", "SyntaxError");
        if ("string" == typeof a3 && (a3 = [a3]), a3.length !== new Set(a3.map((e4) => e4.toLowerCase())).size) throw new s2("Invalid Sec-WebSocket-Protocol value", "SyntaxError");
        if (a3.length > 0 && !a3.every((e4) => E(e4))) throw new s2("Invalid Sec-WebSocket-Protocol value", "SyntaxError");
        this[c] = new URL(i3.href), this[A] = I(i3, a3, this, (e4) => this.#r(e4), n3), this[p] = b.CONNECTING, this[u] = "blob";
      }
      close(e3 = void 0, a3 = void 0) {
        if (t2.brandCheck(this, b), void 0 !== e3 && (e3 = t2.converters["unsigned short"](e3, { clamp: true })), void 0 !== a3 && (a3 = t2.converters.USVString(a3)), void 0 !== e3 && 1e3 !== e3 && (e3 < 3e3 || e3 > 4999)) throw new s2("invalid code", "InvalidAccessError");
        let n3 = 0;
        if (void 0 !== a3 && (n3 = Buffer.byteLength(a3), n3 > 123)) throw new s2(`Reason must be less than 123 bytes; received ${n3}`, "SyntaxError");
        if (this[p] === b.CLOSING || this[p] === b.CLOSED) ;
        else if (k(this)) if (_(this)) this[p] = b.CLOSING;
        else {
          const t3 = new v();
          void 0 !== e3 && void 0 === a3 ? (t3.frameData = Buffer.allocUnsafe(2), t3.frameData.writeUInt16BE(e3, 0)) : void 0 !== e3 && void 0 !== a3 ? (t3.frameData = Buffer.allocUnsafe(2 + n3), t3.frameData.writeUInt16BE(e3, 0), t3.frameData.write(a3, 2, "utf-8")) : t3.frameData = m;
          this[g].socket.write(t3.createFrame(d.CLOSE), (e4) => {
            e4 || (this[T] = true);
          }), this[p] = l.CLOSING;
        }
        else f(this, "Connection was closed before it was established."), this[p] = b.CLOSING;
      }
      send(e3) {
        if (t2.brandCheck(this, b), t2.argumentLengthCheck(arguments, 1, { header: "WebSocket.send" }), e3 = t2.converters.WebSocketSendData(e3), this[p] === b.CONNECTING) throw new s2("Sent before connected.", "InvalidStateError");
        if (!k(this) || _(this)) return;
        const a3 = this[g].socket;
        if ("string" == typeof e3) {
          const n3 = Buffer.from(e3), t3 = new v(n3).createFrame(d.TEXT);
          this.#t += n3.byteLength, a3.write(t3, () => {
            this.#t -= n3.byteLength;
          });
        } else if (B.isArrayBuffer(e3)) {
          const n3 = Buffer.from(e3), t3 = new v(n3).createFrame(d.BINARY);
          this.#t += n3.byteLength, a3.write(t3, () => {
            this.#t -= n3.byteLength;
          });
        } else if (ArrayBuffer.isView(e3)) {
          const n3 = Buffer.from(e3, e3.byteOffset, e3.byteLength), t3 = new v(n3).createFrame(d.BINARY);
          this.#t += n3.byteLength, a3.write(t3, () => {
            this.#t -= n3.byteLength;
          });
        } else if (R(e3)) {
          const n3 = new v();
          e3.arrayBuffer().then((e4) => {
            const t3 = Buffer.from(e4);
            n3.frameData = t3;
            const s3 = n3.createFrame(d.BINARY);
            this.#t += t3.byteLength, a3.write(s3, () => {
              this.#t -= t3.byteLength;
            });
          });
        }
      }
      get readyState() {
        return t2.brandCheck(this, b), this[p];
      }
      get bufferedAmount() {
        return t2.brandCheck(this, b), this.#t;
      }
      get url() {
        return t2.brandCheck(this, b), o2(this[c]);
      }
      get extensions() {
        return t2.brandCheck(this, b), this.#o;
      }
      get protocol() {
        return t2.brandCheck(this, b), this.#s;
      }
      get onopen() {
        return t2.brandCheck(this, b), this.#n.open;
      }
      set onopen(e3) {
        t2.brandCheck(this, b), this.#n.open && this.removeEventListener("open", this.#n.open), "function" == typeof e3 ? (this.#n.open = e3, this.addEventListener("open", e3)) : this.#n.open = null;
      }
      get onerror() {
        return t2.brandCheck(this, b), this.#n.error;
      }
      set onerror(e3) {
        t2.brandCheck(this, b), this.#n.error && this.removeEventListener("error", this.#n.error), "function" == typeof e3 ? (this.#n.error = e3, this.addEventListener("error", e3)) : this.#n.error = null;
      }
      get onclose() {
        return t2.brandCheck(this, b), this.#n.close;
      }
      set onclose(e3) {
        t2.brandCheck(this, b), this.#n.close && this.removeEventListener("close", this.#n.close), "function" == typeof e3 ? (this.#n.close = e3, this.addEventListener("close", e3)) : this.#n.close = null;
      }
      get onmessage() {
        return t2.brandCheck(this, b), this.#n.message;
      }
      set onmessage(e3) {
        t2.brandCheck(this, b), this.#n.message && this.removeEventListener("message", this.#n.message), "function" == typeof e3 ? (this.#n.message = e3, this.addEventListener("message", e3)) : this.#n.message = null;
      }
      get binaryType() {
        return t2.brandCheck(this, b), this[u];
      }
      set binaryType(e3) {
        t2.brandCheck(this, b), this[u] = "blob" !== e3 && "arraybuffer" !== e3 ? "blob" : e3;
      }
      #r(e3) {
        this[g] = e3;
        const a3 = new y(this);
        a3.on("drain", function() {
          this.ws[g].socket.resume();
        }), e3.socket.ws = this, this[h] = a3, this[p] = l.OPEN;
        const n3 = e3.headersList.get("sec-websocket-extensions");
        null !== n3 && (this.#o = n3);
        const t3 = e3.headersList.get("sec-websocket-protocol");
        null !== t3 && (this.#s = t3), C("open", this);
      }
    }
    b.CONNECTING = b.prototype.CONNECTING = l.CONNECTING, b.OPEN = b.prototype.OPEN = l.OPEN, b.CLOSING = b.prototype.CLOSING = l.CLOSING, b.CLOSED = b.prototype.CLOSED = l.CLOSED, Object.defineProperties(b.prototype, { CONNECTING: i2, OPEN: i2, CLOSING: i2, CLOSED: i2, url: S, readyState: S, bufferedAmount: S, onopen: S, onerror: S, onclose: S, close: S, onmessage: S, binaryType: S, send: S, extensions: S, protocol: S, [Symbol.toStringTag]: { value: "WebSocket", writable: false, enumerable: false, configurable: true } }), Object.defineProperties(b, { CONNECTING: i2, OPEN: i2, CLOSING: i2, CLOSED: i2 }), t2.converters["sequence<DOMString>"] = t2.sequenceConverter(t2.converters.DOMString), t2.converters["DOMString or sequence<DOMString>"] = function(e3) {
      return "Object" === t2.util.Type(e3) && Symbol.iterator in e3 ? t2.converters["sequence<DOMString>"](e3) : t2.converters.DOMString(e3);
    }, t2.converters.WebSocketInit = t2.dictionaryConverter([{ key: "protocols", converter: t2.converters["DOMString or sequence<DOMString>"], get defaultValue() {
      return [];
    } }, { key: "dispatcher", converter: (e3) => e3, get defaultValue() {
      return N();
    } }, { key: "headers", converter: t2.nullableConverter(t2.converters.HeadersInit) }]), t2.converters["DOMString or sequence<DOMString> or WebSocketInit"] = function(e3) {
      return "Object" !== t2.util.Type(e3) || Symbol.iterator in e3 ? { protocols: t2.converters["DOMString or sequence<DOMString>"](e3) } : t2.converters.WebSocketInit(e3);
    }, t2.converters.WebSocketSendData = function(e3) {
      if ("Object" === t2.util.Type(e3)) {
        if (R(e3)) return t2.converters.Blob(e3, { strict: false });
        if (ArrayBuffer.isView(e3) || B.isAnyArrayBuffer(e3)) return t2.converters.BufferSource(e3);
      }
      return t2.converters.USVString(e3);
    }, e2.exports = { WebSocket: b };
  }