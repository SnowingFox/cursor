// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 8430 range:639932..649023
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8430: (e2, n2, a2) => {
    "use strict";
    const { webidl: t2 } = a2(8005), { DOMException: s2 } = a2(6687), { URLSerializer: o2 } = a2(3631), { getGlobalOrigin: r2 } = a2(9523), { staticPropertyDescriptors: i2, states: A, opcodes: l, emptyBuffer: c } = a2(5440), { kWebSocketURL: m, kReadyState: d, kController: g, kBinaryType: u, kResponse: E, kSentClose: p, kByteParser: T } = a2(7696), { isEstablished: k, isClosing: I, isValidSubprotocol: h, failWebsocketConnection: _, fireEvent: C } = a2(4321), { establishWebSocketConnection: f } = a2(9809), { WebsocketFrameSend: B } = a2(1808), { ByteParser: Q } = a2(9044), { kEnumerableProperty: y, isBlobLike: R } = a2(9361), { getGlobalDispatcher: N } = a2(7362), { types: v } = a2(9023);
    let S = false;
    class D extends EventTarget {
      #a = { open: null, error: null, close: null, message: null };
      #t = 0;
      #s = "";
      #o = "";
      constructor(e3, n3 = []) {
        super(), t2.argumentLengthCheck(arguments, 1, { header: "WebSocket constructor" }), S || (S = true, process.emitWarning("WebSockets are experimental, expect them to change at any time.", { code: "UNDICI-WS" }));
        const a3 = t2.converters["DOMString or sequence<DOMString> or WebSocketInit"](n3);
        e3 = t2.converters.USVString(e3), n3 = a3.protocols;
        const o3 = r2();
        let i3;
        try {
          i3 = new URL(e3, o3);
        } catch (e4) {
          throw new s2(e4, "SyntaxError");
        }
        if ("http:" === i3.protocol ? i3.protocol = "ws:" : "https:" === i3.protocol && (i3.protocol = "wss:"), "ws:" !== i3.protocol && "wss:" !== i3.protocol) throw new s2(`Expected a ws: or wss: protocol, got ${i3.protocol}`, "SyntaxError");
        if (i3.hash || i3.href.endsWith("#")) throw new s2("Got fragment", "SyntaxError");
        if ("string" == typeof n3 && (n3 = [n3]), n3.length !== new Set(n3.map((e4) => e4.toLowerCase())).size) throw new s2("Invalid Sec-WebSocket-Protocol value", "SyntaxError");
        if (n3.length > 0 && !n3.every((e4) => h(e4))) throw new s2("Invalid Sec-WebSocket-Protocol value", "SyntaxError");
        this[m] = new URL(i3.href), this[g] = f(i3, n3, this, (e4) => this.#r(e4), a3), this[d] = D.CONNECTING, this[u] = "blob";
      }
      close(e3 = void 0, n3 = void 0) {
        if (t2.brandCheck(this, D), void 0 !== e3 && (e3 = t2.converters["unsigned short"](e3, { clamp: true })), void 0 !== n3 && (n3 = t2.converters.USVString(n3)), void 0 !== e3 && 1e3 !== e3 && (e3 < 3e3 || e3 > 4999)) throw new s2("invalid code", "InvalidAccessError");
        let a3 = 0;
        if (void 0 !== n3 && (a3 = Buffer.byteLength(n3), a3 > 123)) throw new s2(`Reason must be less than 123 bytes; received ${a3}`, "SyntaxError");
        if (this[d] === D.CLOSING || this[d] === D.CLOSED) ;
        else if (k(this)) if (I(this)) this[d] = D.CLOSING;
        else {
          const t3 = new B();
          void 0 !== e3 && void 0 === n3 ? (t3.frameData = Buffer.allocUnsafe(2), t3.frameData.writeUInt16BE(e3, 0)) : void 0 !== e3 && void 0 !== n3 ? (t3.frameData = Buffer.allocUnsafe(2 + a3), t3.frameData.writeUInt16BE(e3, 0), t3.frameData.write(n3, 2, "utf-8")) : t3.frameData = c;
          this[E].socket.write(t3.createFrame(l.CLOSE), (e4) => {
            e4 || (this[p] = true);
          }), this[d] = A.CLOSING;
        }
        else _(this, "Connection was closed before it was established."), this[d] = D.CLOSING;
      }
      send(e3) {
        if (t2.brandCheck(this, D), t2.argumentLengthCheck(arguments, 1, { header: "WebSocket.send" }), e3 = t2.converters.WebSocketSendData(e3), this[d] === D.CONNECTING) throw new s2("Sent before connected.", "InvalidStateError");
        if (!k(this) || I(this)) return;
        const n3 = this[E].socket;
        if ("string" == typeof e3) {
          const a3 = Buffer.from(e3), t3 = new B(a3).createFrame(l.TEXT);
          this.#t += a3.byteLength, n3.write(t3, () => {
            this.#t -= a3.byteLength;
          });
        } else if (v.isArrayBuffer(e3)) {
          const a3 = Buffer.from(e3), t3 = new B(a3).createFrame(l.BINARY);
          this.#t += a3.byteLength, n3.write(t3, () => {
            this.#t -= a3.byteLength;
          });
        } else if (ArrayBuffer.isView(e3)) {
          const a3 = Buffer.from(e3, e3.byteOffset, e3.byteLength), t3 = new B(a3).createFrame(l.BINARY);
          this.#t += a3.byteLength, n3.write(t3, () => {
            this.#t -= a3.byteLength;
          });
        } else if (R(e3)) {
          const a3 = new B();
          e3.arrayBuffer().then((e4) => {
            const t3 = Buffer.from(e4);
            a3.frameData = t3;
            const s3 = a3.createFrame(l.BINARY);
            this.#t += t3.byteLength, n3.write(s3, () => {
              this.#t -= t3.byteLength;
            });
          });
        }
      }
      get readyState() {
        return t2.brandCheck(this, D), this[d];
      }
      get bufferedAmount() {
        return t2.brandCheck(this, D), this.#t;
      }
      get url() {
        return t2.brandCheck(this, D), o2(this[m]);
      }
      get extensions() {
        return t2.brandCheck(this, D), this.#o;
      }
      get protocol() {
        return t2.brandCheck(this, D), this.#s;
      }
      get onopen() {
        return t2.brandCheck(this, D), this.#a.open;
      }
      set onopen(e3) {
        t2.brandCheck(this, D), this.#a.open && this.removeEventListener("open", this.#a.open), "function" == typeof e3 ? (this.#a.open = e3, this.addEventListener("open", e3)) : this.#a.open = null;
      }
      get onerror() {
        return t2.brandCheck(this, D), this.#a.error;
      }
      set onerror(e3) {
        t2.brandCheck(this, D), this.#a.error && this.removeEventListener("error", this.#a.error), "function" == typeof e3 ? (this.#a.error = e3, this.addEventListener("error", e3)) : this.#a.error = null;
      }
      get onclose() {
        return t2.brandCheck(this, D), this.#a.close;
      }
      set onclose(e3) {
        t2.brandCheck(this, D), this.#a.close && this.removeEventListener("close", this.#a.close), "function" == typeof e3 ? (this.#a.close = e3, this.addEventListener("close", e3)) : this.#a.close = null;
      }
      get onmessage() {
        return t2.brandCheck(this, D), this.#a.message;
      }
      set onmessage(e3) {
        t2.brandCheck(this, D), this.#a.message && this.removeEventListener("message", this.#a.message), "function" == typeof e3 ? (this.#a.message = e3, this.addEventListener("message", e3)) : this.#a.message = null;
      }
      get binaryType() {
        return t2.brandCheck(this, D), this[u];
      }
      set binaryType(e3) {
        t2.brandCheck(this, D), this[u] = "blob" !== e3 && "arraybuffer" !== e3 ? "blob" : e3;
      }
      #r(e3) {
        this[E] = e3;
        const n3 = new Q(this);
        n3.on("drain", function() {
          this.ws[E].socket.resume();
        }), e3.socket.ws = this, this[T] = n3, this[d] = A.OPEN;
        const a3 = e3.headersList.get("sec-websocket-extensions");
        null !== a3 && (this.#o = a3);
        const t3 = e3.headersList.get("sec-websocket-protocol");
        null !== t3 && (this.#s = t3), C("open", this);
      }
    }
    D.CONNECTING = D.prototype.CONNECTING = A.CONNECTING, D.OPEN = D.prototype.OPEN = A.OPEN, D.CLOSING = D.prototype.CLOSING = A.CLOSING, D.CLOSED = D.prototype.CLOSED = A.CLOSED, Object.defineProperties(D.prototype, { CONNECTING: i2, OPEN: i2, CLOSING: i2, CLOSED: i2, url: y, readyState: y, bufferedAmount: y, onopen: y, onerror: y, onclose: y, close: y, onmessage: y, binaryType: y, send: y, extensions: y, protocol: y, [Symbol.toStringTag]: { value: "WebSocket", writable: false, enumerable: false, configurable: true } }), Object.defineProperties(D, { CONNECTING: i2, OPEN: i2, CLOSING: i2, CLOSED: i2 }), t2.converters["sequence<DOMString>"] = t2.sequenceConverter(t2.converters.DOMString), t2.converters["DOMString or sequence<DOMString>"] = function(e3) {
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
        if (ArrayBuffer.isView(e3) || v.isAnyArrayBuffer(e3)) return t2.converters.BufferSource(e3);
      }
      return t2.converters.USVString(e3);
    }, e2.exports = { WebSocket: D };
  }