// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 8430 range:670454..679534
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
8430: (e2, n2, t2) => {
    "use strict";
    const { webidl: a2 } = t2(8005), { DOMException: s2 } = t2(6687), { URLSerializer: o2 } = t2(3631), { getGlobalOrigin: r } = t2(9523), { staticPropertyDescriptors: i, states: A, opcodes: c, emptyBuffer: l } = t2(5440), { kWebSocketURL: d, kReadyState: m, kController: u, kBinaryType: g, kResponse: p, kSentClose: E, kByteParser: h } = t2(7696), { isEstablished: T, isClosing: k, isValidSubprotocol: f, failWebsocketConnection: _, fireEvent: I } = t2(4321), { establishWebSocketConnection: C } = t2(9809), { WebsocketFrameSend: y } = t2(1808), { ByteParser: B } = t2(9044), { kEnumerableProperty: Q, isBlobLike: v } = t2(9361), { getGlobalDispatcher: R } = t2(7362), { types: N } = t2(9023);
    let S = false;
    class w extends EventTarget {
      #t = { open: null, error: null, close: null, message: null };
      #a = 0;
      #s = "";
      #o = "";
      constructor(e3, n3 = []) {
        super(), a2.argumentLengthCheck(arguments, 1, { header: "WebSocket constructor" }), S || (S = true, process.emitWarning("WebSockets are experimental, expect them to change at any time.", { code: "UNDICI-WS" }));
        const t3 = a2.converters["DOMString or sequence<DOMString> or WebSocketInit"](n3);
        e3 = a2.converters.USVString(e3), n3 = t3.protocols;
        const o3 = r();
        let i2;
        try {
          i2 = new URL(e3, o3);
        } catch (e4) {
          throw new s2(e4, "SyntaxError");
        }
        if ("http:" === i2.protocol ? i2.protocol = "ws:" : "https:" === i2.protocol && (i2.protocol = "wss:"), "ws:" !== i2.protocol && "wss:" !== i2.protocol) throw new s2(`Expected a ws: or wss: protocol, got ${i2.protocol}`, "SyntaxError");
        if (i2.hash || i2.href.endsWith("#")) throw new s2("Got fragment", "SyntaxError");
        if ("string" == typeof n3 && (n3 = [n3]), n3.length !== new Set(n3.map((e4) => e4.toLowerCase())).size) throw new s2("Invalid Sec-WebSocket-Protocol value", "SyntaxError");
        if (n3.length > 0 && !n3.every((e4) => f(e4))) throw new s2("Invalid Sec-WebSocket-Protocol value", "SyntaxError");
        this[d] = new URL(i2.href), this[u] = C(i2, n3, this, (e4) => this.#r(e4), t3), this[m] = w.CONNECTING, this[g] = "blob";
      }
      close(e3 = void 0, n3 = void 0) {
        if (a2.brandCheck(this, w), void 0 !== e3 && (e3 = a2.converters["unsigned short"](e3, { clamp: true })), void 0 !== n3 && (n3 = a2.converters.USVString(n3)), void 0 !== e3 && 1e3 !== e3 && (e3 < 3e3 || e3 > 4999)) throw new s2("invalid code", "InvalidAccessError");
        let t3 = 0;
        if (void 0 !== n3 && (t3 = Buffer.byteLength(n3), t3 > 123)) throw new s2(`Reason must be less than 123 bytes; received ${t3}`, "SyntaxError");
        if (this[m] === w.CLOSING || this[m] === w.CLOSED) ;
        else if (T(this)) if (k(this)) this[m] = w.CLOSING;
        else {
          const a3 = new y();
          void 0 !== e3 && void 0 === n3 ? (a3.frameData = Buffer.allocUnsafe(2), a3.frameData.writeUInt16BE(e3, 0)) : void 0 !== e3 && void 0 !== n3 ? (a3.frameData = Buffer.allocUnsafe(2 + t3), a3.frameData.writeUInt16BE(e3, 0), a3.frameData.write(n3, 2, "utf-8")) : a3.frameData = l;
          this[p].socket.write(a3.createFrame(c.CLOSE), (e4) => {
            e4 || (this[E] = true);
          }), this[m] = A.CLOSING;
        }
        else _(this, "Connection was closed before it was established."), this[m] = w.CLOSING;
      }
      send(e3) {
        if (a2.brandCheck(this, w), a2.argumentLengthCheck(arguments, 1, { header: "WebSocket.send" }), e3 = a2.converters.WebSocketSendData(e3), this[m] === w.CONNECTING) throw new s2("Sent before connected.", "InvalidStateError");
        if (!T(this) || k(this)) return;
        const n3 = this[p].socket;
        if ("string" == typeof e3) {
          const t3 = Buffer.from(e3), a3 = new y(t3).createFrame(c.TEXT);
          this.#a += t3.byteLength, n3.write(a3, () => {
            this.#a -= t3.byteLength;
          });
        } else if (N.isArrayBuffer(e3)) {
          const t3 = Buffer.from(e3), a3 = new y(t3).createFrame(c.BINARY);
          this.#a += t3.byteLength, n3.write(a3, () => {
            this.#a -= t3.byteLength;
          });
        } else if (ArrayBuffer.isView(e3)) {
          const t3 = Buffer.from(e3, e3.byteOffset, e3.byteLength), a3 = new y(t3).createFrame(c.BINARY);
          this.#a += t3.byteLength, n3.write(a3, () => {
            this.#a -= t3.byteLength;
          });
        } else if (v(e3)) {
          const t3 = new y();
          e3.arrayBuffer().then((e4) => {
            const a3 = Buffer.from(e4);
            t3.frameData = a3;
            const s3 = t3.createFrame(c.BINARY);
            this.#a += a3.byteLength, n3.write(s3, () => {
              this.#a -= a3.byteLength;
            });
          });
        }
      }
      get readyState() {
        return a2.brandCheck(this, w), this[m];
      }
      get bufferedAmount() {
        return a2.brandCheck(this, w), this.#a;
      }
      get url() {
        return a2.brandCheck(this, w), o2(this[d]);
      }
      get extensions() {
        return a2.brandCheck(this, w), this.#o;
      }
      get protocol() {
        return a2.brandCheck(this, w), this.#s;
      }
      get onopen() {
        return a2.brandCheck(this, w), this.#t.open;
      }
      set onopen(e3) {
        a2.brandCheck(this, w), this.#t.open && this.removeEventListener("open", this.#t.open), "function" == typeof e3 ? (this.#t.open = e3, this.addEventListener("open", e3)) : this.#t.open = null;
      }
      get onerror() {
        return a2.brandCheck(this, w), this.#t.error;
      }
      set onerror(e3) {
        a2.brandCheck(this, w), this.#t.error && this.removeEventListener("error", this.#t.error), "function" == typeof e3 ? (this.#t.error = e3, this.addEventListener("error", e3)) : this.#t.error = null;
      }
      get onclose() {
        return a2.brandCheck(this, w), this.#t.close;
      }
      set onclose(e3) {
        a2.brandCheck(this, w), this.#t.close && this.removeEventListener("close", this.#t.close), "function" == typeof e3 ? (this.#t.close = e3, this.addEventListener("close", e3)) : this.#t.close = null;
      }
      get onmessage() {
        return a2.brandCheck(this, w), this.#t.message;
      }
      set onmessage(e3) {
        a2.brandCheck(this, w), this.#t.message && this.removeEventListener("message", this.#t.message), "function" == typeof e3 ? (this.#t.message = e3, this.addEventListener("message", e3)) : this.#t.message = null;
      }
      get binaryType() {
        return a2.brandCheck(this, w), this[g];
      }
      set binaryType(e3) {
        a2.brandCheck(this, w), this[g] = "blob" !== e3 && "arraybuffer" !== e3 ? "blob" : e3;
      }
      #r(e3) {
        this[p] = e3;
        const n3 = new B(this);
        n3.on("drain", function() {
          this.ws[p].socket.resume();
        }), e3.socket.ws = this, this[h] = n3, this[m] = A.OPEN;
        const t3 = e3.headersList.get("sec-websocket-extensions");
        null !== t3 && (this.#o = t3);
        const a3 = e3.headersList.get("sec-websocket-protocol");
        null !== a3 && (this.#s = a3), I("open", this);
      }
    }
    w.CONNECTING = w.prototype.CONNECTING = A.CONNECTING, w.OPEN = w.prototype.OPEN = A.OPEN, w.CLOSING = w.prototype.CLOSING = A.CLOSING, w.CLOSED = w.prototype.CLOSED = A.CLOSED, Object.defineProperties(w.prototype, { CONNECTING: i, OPEN: i, CLOSING: i, CLOSED: i, url: Q, readyState: Q, bufferedAmount: Q, onopen: Q, onerror: Q, onclose: Q, close: Q, onmessage: Q, binaryType: Q, send: Q, extensions: Q, protocol: Q, [Symbol.toStringTag]: { value: "WebSocket", writable: false, enumerable: false, configurable: true } }), Object.defineProperties(w, { CONNECTING: i, OPEN: i, CLOSING: i, CLOSED: i }), a2.converters["sequence<DOMString>"] = a2.sequenceConverter(a2.converters.DOMString), a2.converters["DOMString or sequence<DOMString>"] = function(e3) {
      return "Object" === a2.util.Type(e3) && Symbol.iterator in e3 ? a2.converters["sequence<DOMString>"](e3) : a2.converters.DOMString(e3);
    }, a2.converters.WebSocketInit = a2.dictionaryConverter([{ key: "protocols", converter: a2.converters["DOMString or sequence<DOMString>"], get defaultValue() {
      return [];
    } }, { key: "dispatcher", converter: (e3) => e3, get defaultValue() {
      return R();
    } }, { key: "headers", converter: a2.nullableConverter(a2.converters.HeadersInit) }]), a2.converters["DOMString or sequence<DOMString> or WebSocketInit"] = function(e3) {
      return "Object" !== a2.util.Type(e3) || Symbol.iterator in e3 ? { protocols: a2.converters["DOMString or sequence<DOMString>"](e3) } : a2.converters.WebSocketInit(e3);
    }, a2.converters.WebSocketSendData = function(e3) {
      if ("Object" === a2.util.Type(e3)) {
        if (v(e3)) return a2.converters.Blob(e3, { strict: false });
        if (ArrayBuffer.isView(e3) || N.isAnyArrayBuffer(e3)) return a2.converters.BufferSource(e3);
      }
      return a2.converters.USVString(e3);
    }, e2.exports = { WebSocket: w };
  }