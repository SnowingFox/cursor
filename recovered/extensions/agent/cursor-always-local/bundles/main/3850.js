// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 3850 range:1001928..1011010
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3850: (t2, e2, r2) => {
    "use strict";
    const { webidl: n2 } = r2(8193), { DOMException: s2 } = r2(2955), { URLSerializer: i2 } = r2(4387), { getGlobalOrigin: o2 } = r2(3967), { staticPropertyDescriptors: a, states: u, opcodes: c, emptyBuffer: l } = r2(5948), { kWebSocketURL: m, kReadyState: d, kController: f, kBinaryType: p, kResponse: h, kSentClose: g, kByteParser: A } = r2(6140), { isEstablished: _, isClosing: y, isValidSubprotocol: w, failWebsocketConnection: S, fireEvent: J } = r2(8149), { establishWebSocketConnection: B } = r2(5333), { WebsocketFrameSend: E } = r2(7324), { ByteParser: I } = r2(3552), { kEnumerableProperty: C, isBlobLike: b } = r2(3589), { getGlobalDispatcher: k } = r2(7582), { types: v } = r2(9023);
    let q = false;
    class R extends EventTarget {
      #o = { open: null, error: null, close: null, message: null };
      #a = 0;
      #u = "";
      #c = "";
      constructor(t3, e3 = []) {
        super(), n2.argumentLengthCheck(arguments, 1, { header: "WebSocket constructor" }), q || (q = true, process.emitWarning("WebSockets are experimental, expect them to change at any time.", { code: "UNDICI-WS" }));
        const r3 = n2.converters["DOMString or sequence<DOMString> or WebSocketInit"](e3);
        t3 = n2.converters.USVString(t3), e3 = r3.protocols;
        const i3 = o2();
        let a2;
        try {
          a2 = new URL(t3, i3);
        } catch (t4) {
          throw new s2(t4, "SyntaxError");
        }
        if ("http:" === a2.protocol ? a2.protocol = "ws:" : "https:" === a2.protocol && (a2.protocol = "wss:"), "ws:" !== a2.protocol && "wss:" !== a2.protocol) throw new s2(`Expected a ws: or wss: protocol, got ${a2.protocol}`, "SyntaxError");
        if (a2.hash || a2.href.endsWith("#")) throw new s2("Got fragment", "SyntaxError");
        if ("string" == typeof e3 && (e3 = [e3]), e3.length !== new Set(e3.map((t4) => t4.toLowerCase())).size) throw new s2("Invalid Sec-WebSocket-Protocol value", "SyntaxError");
        if (e3.length > 0 && !e3.every((t4) => w(t4))) throw new s2("Invalid Sec-WebSocket-Protocol value", "SyntaxError");
        this[m] = new URL(a2.href), this[f] = B(a2, e3, this, (t4) => this.#l(t4), r3), this[d] = R.CONNECTING, this[p] = "blob";
      }
      close(t3 = void 0, e3 = void 0) {
        if (n2.brandCheck(this, R), void 0 !== t3 && (t3 = n2.converters["unsigned short"](t3, { clamp: true })), void 0 !== e3 && (e3 = n2.converters.USVString(e3)), void 0 !== t3 && 1e3 !== t3 && (t3 < 3e3 || t3 > 4999)) throw new s2("invalid code", "InvalidAccessError");
        let r3 = 0;
        if (void 0 !== e3 && (r3 = Buffer.byteLength(e3), r3 > 123)) throw new s2(`Reason must be less than 123 bytes; received ${r3}`, "SyntaxError");
        if (this[d] === R.CLOSING || this[d] === R.CLOSED) ;
        else if (_(this)) if (y(this)) this[d] = R.CLOSING;
        else {
          const n3 = new E();
          void 0 !== t3 && void 0 === e3 ? (n3.frameData = Buffer.allocUnsafe(2), n3.frameData.writeUInt16BE(t3, 0)) : void 0 !== t3 && void 0 !== e3 ? (n3.frameData = Buffer.allocUnsafe(2 + r3), n3.frameData.writeUInt16BE(t3, 0), n3.frameData.write(e3, 2, "utf-8")) : n3.frameData = l;
          this[h].socket.write(n3.createFrame(c.CLOSE), (t4) => {
            t4 || (this[g] = true);
          }), this[d] = u.CLOSING;
        }
        else S(this, "Connection was closed before it was established."), this[d] = R.CLOSING;
      }
      send(t3) {
        if (n2.brandCheck(this, R), n2.argumentLengthCheck(arguments, 1, { header: "WebSocket.send" }), t3 = n2.converters.WebSocketSendData(t3), this[d] === R.CONNECTING) throw new s2("Sent before connected.", "InvalidStateError");
        if (!_(this) || y(this)) return;
        const e3 = this[h].socket;
        if ("string" == typeof t3) {
          const r3 = Buffer.from(t3), n3 = new E(r3).createFrame(c.TEXT);
          this.#a += r3.byteLength, e3.write(n3, () => {
            this.#a -= r3.byteLength;
          });
        } else if (v.isArrayBuffer(t3)) {
          const r3 = Buffer.from(t3), n3 = new E(r3).createFrame(c.BINARY);
          this.#a += r3.byteLength, e3.write(n3, () => {
            this.#a -= r3.byteLength;
          });
        } else if (ArrayBuffer.isView(t3)) {
          const r3 = Buffer.from(t3, t3.byteOffset, t3.byteLength), n3 = new E(r3).createFrame(c.BINARY);
          this.#a += r3.byteLength, e3.write(n3, () => {
            this.#a -= r3.byteLength;
          });
        } else if (b(t3)) {
          const r3 = new E();
          t3.arrayBuffer().then((t4) => {
            const n3 = Buffer.from(t4);
            r3.frameData = n3;
            const s3 = r3.createFrame(c.BINARY);
            this.#a += n3.byteLength, e3.write(s3, () => {
              this.#a -= n3.byteLength;
            });
          });
        }
      }
      get readyState() {
        return n2.brandCheck(this, R), this[d];
      }
      get bufferedAmount() {
        return n2.brandCheck(this, R), this.#a;
      }
      get url() {
        return n2.brandCheck(this, R), i2(this[m]);
      }
      get extensions() {
        return n2.brandCheck(this, R), this.#c;
      }
      get protocol() {
        return n2.brandCheck(this, R), this.#u;
      }
      get onopen() {
        return n2.brandCheck(this, R), this.#o.open;
      }
      set onopen(t3) {
        n2.brandCheck(this, R), this.#o.open && this.removeEventListener("open", this.#o.open), "function" == typeof t3 ? (this.#o.open = t3, this.addEventListener("open", t3)) : this.#o.open = null;
      }
      get onerror() {
        return n2.brandCheck(this, R), this.#o.error;
      }
      set onerror(t3) {
        n2.brandCheck(this, R), this.#o.error && this.removeEventListener("error", this.#o.error), "function" == typeof t3 ? (this.#o.error = t3, this.addEventListener("error", t3)) : this.#o.error = null;
      }
      get onclose() {
        return n2.brandCheck(this, R), this.#o.close;
      }
      set onclose(t3) {
        n2.brandCheck(this, R), this.#o.close && this.removeEventListener("close", this.#o.close), "function" == typeof t3 ? (this.#o.close = t3, this.addEventListener("close", t3)) : this.#o.close = null;
      }
      get onmessage() {
        return n2.brandCheck(this, R), this.#o.message;
      }
      set onmessage(t3) {
        n2.brandCheck(this, R), this.#o.message && this.removeEventListener("message", this.#o.message), "function" == typeof t3 ? (this.#o.message = t3, this.addEventListener("message", t3)) : this.#o.message = null;
      }
      get binaryType() {
        return n2.brandCheck(this, R), this[p];
      }
      set binaryType(t3) {
        n2.brandCheck(this, R), this[p] = "blob" !== t3 && "arraybuffer" !== t3 ? "blob" : t3;
      }
      #l(t3) {
        this[h] = t3;
        const e3 = new I(this);
        e3.on("drain", function() {
          this.ws[h].socket.resume();
        }), t3.socket.ws = this, this[A] = e3, this[d] = u.OPEN;
        const r3 = t3.headersList.get("sec-websocket-extensions");
        null !== r3 && (this.#c = r3);
        const n3 = t3.headersList.get("sec-websocket-protocol");
        null !== n3 && (this.#u = n3), J("open", this);
      }
    }
    R.CONNECTING = R.prototype.CONNECTING = u.CONNECTING, R.OPEN = R.prototype.OPEN = u.OPEN, R.CLOSING = R.prototype.CLOSING = u.CLOSING, R.CLOSED = R.prototype.CLOSED = u.CLOSED, Object.defineProperties(R.prototype, { CONNECTING: a, OPEN: a, CLOSING: a, CLOSED: a, url: C, readyState: C, bufferedAmount: C, onopen: C, onerror: C, onclose: C, close: C, onmessage: C, binaryType: C, send: C, extensions: C, protocol: C, [Symbol.toStringTag]: { value: "WebSocket", writable: false, enumerable: false, configurable: true } }), Object.defineProperties(R, { CONNECTING: a, OPEN: a, CLOSING: a, CLOSED: a }), n2.converters["sequence<DOMString>"] = n2.sequenceConverter(n2.converters.DOMString), n2.converters["DOMString or sequence<DOMString>"] = function(t3) {
      return "Object" === n2.util.Type(t3) && Symbol.iterator in t3 ? n2.converters["sequence<DOMString>"](t3) : n2.converters.DOMString(t3);
    }, n2.converters.WebSocketInit = n2.dictionaryConverter([{ key: "protocols", converter: n2.converters["DOMString or sequence<DOMString>"], get defaultValue() {
      return [];
    } }, { key: "dispatcher", converter: (t3) => t3, get defaultValue() {
      return k();
    } }, { key: "headers", converter: n2.nullableConverter(n2.converters.HeadersInit) }]), n2.converters["DOMString or sequence<DOMString> or WebSocketInit"] = function(t3) {
      return "Object" !== n2.util.Type(t3) || Symbol.iterator in t3 ? { protocols: n2.converters["DOMString or sequence<DOMString>"](t3) } : n2.converters.WebSocketInit(t3);
    }, n2.converters.WebSocketSendData = function(t3) {
      if ("Object" === n2.util.Type(t3)) {
        if (b(t3)) return n2.converters.Blob(t3, { strict: false });
        if (ArrayBuffer.isView(t3) || v.isAnyArrayBuffer(t3)) return n2.converters.BufferSource(t3);
      }
      return n2.converters.USVString(t3);
    }, t2.exports = { WebSocket: R };
  }