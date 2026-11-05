// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 8430 range:639034..648114
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8430: (e2, A2, t2) => {
    "use strict";
    const { webidl: n2 } = t2(8005), { DOMException: r2 } = t2(6687), { URLSerializer: o2 } = t2(3631), { getGlobalOrigin: s } = t2(9523), { staticPropertyDescriptors: a, states: i, opcodes: c, emptyBuffer: l } = t2(5440), { kWebSocketURL: g, kReadyState: E, kController: u, kBinaryType: d, kResponse: I, kSentClose: h, kByteParser: Q } = t2(7696), { isEstablished: m, isClosing: C, isValidSubprotocol: B, failWebsocketConnection: p, fireEvent: f } = t2(4321), { establishWebSocketConnection: y } = t2(9809), { WebsocketFrameSend: T } = t2(1808), { ByteParser: k } = t2(9044), { kEnumerableProperty: w, isBlobLike: N } = t2(9361), { getGlobalDispatcher: D } = t2(7362), { types: R } = t2(9023);
    let S = false;
    class b extends EventTarget {
      #t = { open: null, error: null, close: null, message: null };
      #n = 0;
      #r = "";
      #o = "";
      constructor(e3, A3 = []) {
        super(), n2.argumentLengthCheck(arguments, 1, { header: "WebSocket constructor" }), S || (S = true, process.emitWarning("WebSockets are experimental, expect them to change at any time.", { code: "UNDICI-WS" }));
        const t3 = n2.converters["DOMString or sequence<DOMString> or WebSocketInit"](A3);
        e3 = n2.converters.USVString(e3), A3 = t3.protocols;
        const o3 = s();
        let a2;
        try {
          a2 = new URL(e3, o3);
        } catch (e4) {
          throw new r2(e4, "SyntaxError");
        }
        if ("http:" === a2.protocol ? a2.protocol = "ws:" : "https:" === a2.protocol && (a2.protocol = "wss:"), "ws:" !== a2.protocol && "wss:" !== a2.protocol) throw new r2(`Expected a ws: or wss: protocol, got ${a2.protocol}`, "SyntaxError");
        if (a2.hash || a2.href.endsWith("#")) throw new r2("Got fragment", "SyntaxError");
        if ("string" == typeof A3 && (A3 = [A3]), A3.length !== new Set(A3.map((e4) => e4.toLowerCase())).size) throw new r2("Invalid Sec-WebSocket-Protocol value", "SyntaxError");
        if (A3.length > 0 && !A3.every((e4) => B(e4))) throw new r2("Invalid Sec-WebSocket-Protocol value", "SyntaxError");
        this[g] = new URL(a2.href), this[u] = y(a2, A3, this, (e4) => this.#s(e4), t3), this[E] = b.CONNECTING, this[d] = "blob";
      }
      close(e3 = void 0, A3 = void 0) {
        if (n2.brandCheck(this, b), void 0 !== e3 && (e3 = n2.converters["unsigned short"](e3, { clamp: true })), void 0 !== A3 && (A3 = n2.converters.USVString(A3)), void 0 !== e3 && 1e3 !== e3 && (e3 < 3e3 || e3 > 4999)) throw new r2("invalid code", "InvalidAccessError");
        let t3 = 0;
        if (void 0 !== A3 && (t3 = Buffer.byteLength(A3), t3 > 123)) throw new r2(`Reason must be less than 123 bytes; received ${t3}`, "SyntaxError");
        if (this[E] === b.CLOSING || this[E] === b.CLOSED) ;
        else if (m(this)) if (C(this)) this[E] = b.CLOSING;
        else {
          const n3 = new T();
          void 0 !== e3 && void 0 === A3 ? (n3.frameData = Buffer.allocUnsafe(2), n3.frameData.writeUInt16BE(e3, 0)) : void 0 !== e3 && void 0 !== A3 ? (n3.frameData = Buffer.allocUnsafe(2 + t3), n3.frameData.writeUInt16BE(e3, 0), n3.frameData.write(A3, 2, "utf-8")) : n3.frameData = l;
          this[I].socket.write(n3.createFrame(c.CLOSE), (e4) => {
            e4 || (this[h] = true);
          }), this[E] = i.CLOSING;
        }
        else p(this, "Connection was closed before it was established."), this[E] = b.CLOSING;
      }
      send(e3) {
        if (n2.brandCheck(this, b), n2.argumentLengthCheck(arguments, 1, { header: "WebSocket.send" }), e3 = n2.converters.WebSocketSendData(e3), this[E] === b.CONNECTING) throw new r2("Sent before connected.", "InvalidStateError");
        if (!m(this) || C(this)) return;
        const A3 = this[I].socket;
        if ("string" == typeof e3) {
          const t3 = Buffer.from(e3), n3 = new T(t3).createFrame(c.TEXT);
          this.#n += t3.byteLength, A3.write(n3, () => {
            this.#n -= t3.byteLength;
          });
        } else if (R.isArrayBuffer(e3)) {
          const t3 = Buffer.from(e3), n3 = new T(t3).createFrame(c.BINARY);
          this.#n += t3.byteLength, A3.write(n3, () => {
            this.#n -= t3.byteLength;
          });
        } else if (ArrayBuffer.isView(e3)) {
          const t3 = Buffer.from(e3, e3.byteOffset, e3.byteLength), n3 = new T(t3).createFrame(c.BINARY);
          this.#n += t3.byteLength, A3.write(n3, () => {
            this.#n -= t3.byteLength;
          });
        } else if (N(e3)) {
          const t3 = new T();
          e3.arrayBuffer().then((e4) => {
            const n3 = Buffer.from(e4);
            t3.frameData = n3;
            const r3 = t3.createFrame(c.BINARY);
            this.#n += n3.byteLength, A3.write(r3, () => {
              this.#n -= n3.byteLength;
            });
          });
        }
      }
      get readyState() {
        return n2.brandCheck(this, b), this[E];
      }
      get bufferedAmount() {
        return n2.brandCheck(this, b), this.#n;
      }
      get url() {
        return n2.brandCheck(this, b), o2(this[g]);
      }
      get extensions() {
        return n2.brandCheck(this, b), this.#o;
      }
      get protocol() {
        return n2.brandCheck(this, b), this.#r;
      }
      get onopen() {
        return n2.brandCheck(this, b), this.#t.open;
      }
      set onopen(e3) {
        n2.brandCheck(this, b), this.#t.open && this.removeEventListener("open", this.#t.open), "function" == typeof e3 ? (this.#t.open = e3, this.addEventListener("open", e3)) : this.#t.open = null;
      }
      get onerror() {
        return n2.brandCheck(this, b), this.#t.error;
      }
      set onerror(e3) {
        n2.brandCheck(this, b), this.#t.error && this.removeEventListener("error", this.#t.error), "function" == typeof e3 ? (this.#t.error = e3, this.addEventListener("error", e3)) : this.#t.error = null;
      }
      get onclose() {
        return n2.brandCheck(this, b), this.#t.close;
      }
      set onclose(e3) {
        n2.brandCheck(this, b), this.#t.close && this.removeEventListener("close", this.#t.close), "function" == typeof e3 ? (this.#t.close = e3, this.addEventListener("close", e3)) : this.#t.close = null;
      }
      get onmessage() {
        return n2.brandCheck(this, b), this.#t.message;
      }
      set onmessage(e3) {
        n2.brandCheck(this, b), this.#t.message && this.removeEventListener("message", this.#t.message), "function" == typeof e3 ? (this.#t.message = e3, this.addEventListener("message", e3)) : this.#t.message = null;
      }
      get binaryType() {
        return n2.brandCheck(this, b), this[d];
      }
      set binaryType(e3) {
        n2.brandCheck(this, b), this[d] = "blob" !== e3 && "arraybuffer" !== e3 ? "blob" : e3;
      }
      #s(e3) {
        this[I] = e3;
        const A3 = new k(this);
        A3.on("drain", function() {
          this.ws[I].socket.resume();
        }), e3.socket.ws = this, this[Q] = A3, this[E] = i.OPEN;
        const t3 = e3.headersList.get("sec-websocket-extensions");
        null !== t3 && (this.#o = t3);
        const n3 = e3.headersList.get("sec-websocket-protocol");
        null !== n3 && (this.#r = n3), f("open", this);
      }
    }
    b.CONNECTING = b.prototype.CONNECTING = i.CONNECTING, b.OPEN = b.prototype.OPEN = i.OPEN, b.CLOSING = b.prototype.CLOSING = i.CLOSING, b.CLOSED = b.prototype.CLOSED = i.CLOSED, Object.defineProperties(b.prototype, { CONNECTING: a, OPEN: a, CLOSING: a, CLOSED: a, url: w, readyState: w, bufferedAmount: w, onopen: w, onerror: w, onclose: w, close: w, onmessage: w, binaryType: w, send: w, extensions: w, protocol: w, [Symbol.toStringTag]: { value: "WebSocket", writable: false, enumerable: false, configurable: true } }), Object.defineProperties(b, { CONNECTING: a, OPEN: a, CLOSING: a, CLOSED: a }), n2.converters["sequence<DOMString>"] = n2.sequenceConverter(n2.converters.DOMString), n2.converters["DOMString or sequence<DOMString>"] = function(e3) {
      return "Object" === n2.util.Type(e3) && Symbol.iterator in e3 ? n2.converters["sequence<DOMString>"](e3) : n2.converters.DOMString(e3);
    }, n2.converters.WebSocketInit = n2.dictionaryConverter([{ key: "protocols", converter: n2.converters["DOMString or sequence<DOMString>"], get defaultValue() {
      return [];
    } }, { key: "dispatcher", converter: (e3) => e3, get defaultValue() {
      return D();
    } }, { key: "headers", converter: n2.nullableConverter(n2.converters.HeadersInit) }]), n2.converters["DOMString or sequence<DOMString> or WebSocketInit"] = function(e3) {
      return "Object" !== n2.util.Type(e3) || Symbol.iterator in e3 ? { protocols: n2.converters["DOMString or sequence<DOMString>"](e3) } : n2.converters.WebSocketInit(e3);
    }, n2.converters.WebSocketSendData = function(e3) {
      if ("Object" === n2.util.Type(e3)) {
        if (N(e3)) return n2.converters.Blob(e3, { strict: false });
        if (ArrayBuffer.isView(e3) || R.isAnyArrayBuffer(e3)) return n2.converters.BufferSource(e3);
      }
      return n2.converters.USVString(e3);
    }, e2.exports = { WebSocket: b };
  }