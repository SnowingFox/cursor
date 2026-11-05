// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 23850 range:4500780..4509800
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
23850: (e, t, r) => {
    "use strict";
    const { webidl: n } = r(18193), { DOMException: s } = r(22955), { URLSerializer: o } = r(64387), { getGlobalOrigin: i } = r(13967), { staticPropertyDescriptors: a, states: c, opcodes: l, emptyBuffer: u } = r(15948), { kWebSocketURL: d, kReadyState: p, kController: m, kBinaryType: h, kResponse: f, kSentClose: g, kByteParser: y } = r(96140), { isEstablished: w, isClosing: v, isValidSubprotocol: _, failWebsocketConnection: A, fireEvent: S } = r(18149), { establishWebSocketConnection: b } = r(55333), { WebsocketFrameSend: E } = r(87324), { ByteParser: I } = r(23552), { kEnumerableProperty: C, isBlobLike: k } = r(83589), { getGlobalDispatcher: x } = r(17582), { types: T } = r(39023);
    let R = false;
    class B extends EventTarget {
      #u = { open: null, error: null, close: null, message: null };
      #d = 0;
      #p = "";
      #m = "";
      constructor(e2, t2 = []) {
        super(), n.argumentLengthCheck(arguments, 1, { header: "WebSocket constructor" }), R || (R = true, process.emitWarning("WebSockets are experimental, expect them to change at any time.", { code: "UNDICI-WS" }));
        const r2 = n.converters["DOMString or sequence<DOMString> or WebSocketInit"](t2);
        e2 = n.converters.USVString(e2), t2 = r2.protocols;
        const o2 = i();
        let a2;
        try {
          a2 = new URL(e2, o2);
        } catch (e3) {
          throw new s(e3, "SyntaxError");
        }
        if ("http:" === a2.protocol ? a2.protocol = "ws:" : "https:" === a2.protocol && (a2.protocol = "wss:"), "ws:" !== a2.protocol && "wss:" !== a2.protocol) throw new s(`Expected a ws: or wss: protocol, got ${a2.protocol}`, "SyntaxError");
        if (a2.hash || a2.href.endsWith("#")) throw new s("Got fragment", "SyntaxError");
        if ("string" == typeof t2 && (t2 = [t2]), t2.length !== new Set(t2.map((e3) => e3.toLowerCase())).size) throw new s("Invalid Sec-WebSocket-Protocol value", "SyntaxError");
        if (t2.length > 0 && !t2.every((e3) => _(e3))) throw new s("Invalid Sec-WebSocket-Protocol value", "SyntaxError");
        this[d] = new URL(a2.href), this[m] = b(a2, t2, this, (e3) => this.#h(e3), r2), this[p] = B.CONNECTING, this[h] = "blob";
      }
      close(e2 = void 0, t2 = void 0) {
        if (n.brandCheck(this, B), void 0 !== e2 && (e2 = n.converters["unsigned short"](e2, { clamp: true })), void 0 !== t2 && (t2 = n.converters.USVString(t2)), void 0 !== e2 && 1e3 !== e2 && (e2 < 3e3 || e2 > 4999)) throw new s("invalid code", "InvalidAccessError");
        let r2 = 0;
        if (void 0 !== t2 && (r2 = Buffer.byteLength(t2), r2 > 123)) throw new s(`Reason must be less than 123 bytes; received ${r2}`, "SyntaxError");
        if (this[p] === B.CLOSING || this[p] === B.CLOSED) ;
        else if (w(this)) if (v(this)) this[p] = B.CLOSING;
        else {
          const n2 = new E();
          void 0 !== e2 && void 0 === t2 ? (n2.frameData = Buffer.allocUnsafe(2), n2.frameData.writeUInt16BE(e2, 0)) : void 0 !== e2 && void 0 !== t2 ? (n2.frameData = Buffer.allocUnsafe(2 + r2), n2.frameData.writeUInt16BE(e2, 0), n2.frameData.write(t2, 2, "utf-8")) : n2.frameData = u;
          this[f].socket.write(n2.createFrame(l.CLOSE), (e3) => {
            e3 || (this[g] = true);
          }), this[p] = c.CLOSING;
        }
        else A(this, "Connection was closed before it was established."), this[p] = B.CLOSING;
      }
      send(e2) {
        if (n.brandCheck(this, B), n.argumentLengthCheck(arguments, 1, { header: "WebSocket.send" }), e2 = n.converters.WebSocketSendData(e2), this[p] === B.CONNECTING) throw new s("Sent before connected.", "InvalidStateError");
        if (!w(this) || v(this)) return;
        const t2 = this[f].socket;
        if ("string" == typeof e2) {
          const r2 = Buffer.from(e2), n2 = new E(r2).createFrame(l.TEXT);
          this.#d += r2.byteLength, t2.write(n2, () => {
            this.#d -= r2.byteLength;
          });
        } else if (T.isArrayBuffer(e2)) {
          const r2 = Buffer.from(e2), n2 = new E(r2).createFrame(l.BINARY);
          this.#d += r2.byteLength, t2.write(n2, () => {
            this.#d -= r2.byteLength;
          });
        } else if (ArrayBuffer.isView(e2)) {
          const r2 = Buffer.from(e2, e2.byteOffset, e2.byteLength), n2 = new E(r2).createFrame(l.BINARY);
          this.#d += r2.byteLength, t2.write(n2, () => {
            this.#d -= r2.byteLength;
          });
        } else if (k(e2)) {
          const r2 = new E();
          e2.arrayBuffer().then((e3) => {
            const n2 = Buffer.from(e3);
            r2.frameData = n2;
            const s2 = r2.createFrame(l.BINARY);
            this.#d += n2.byteLength, t2.write(s2, () => {
              this.#d -= n2.byteLength;
            });
          });
        }
      }
      get readyState() {
        return n.brandCheck(this, B), this[p];
      }
      get bufferedAmount() {
        return n.brandCheck(this, B), this.#d;
      }
      get url() {
        return n.brandCheck(this, B), o(this[d]);
      }
      get extensions() {
        return n.brandCheck(this, B), this.#m;
      }
      get protocol() {
        return n.brandCheck(this, B), this.#p;
      }
      get onopen() {
        return n.brandCheck(this, B), this.#u.open;
      }
      set onopen(e2) {
        n.brandCheck(this, B), this.#u.open && this.removeEventListener("open", this.#u.open), "function" == typeof e2 ? (this.#u.open = e2, this.addEventListener("open", e2)) : this.#u.open = null;
      }
      get onerror() {
        return n.brandCheck(this, B), this.#u.error;
      }
      set onerror(e2) {
        n.brandCheck(this, B), this.#u.error && this.removeEventListener("error", this.#u.error), "function" == typeof e2 ? (this.#u.error = e2, this.addEventListener("error", e2)) : this.#u.error = null;
      }
      get onclose() {
        return n.brandCheck(this, B), this.#u.close;
      }
      set onclose(e2) {
        n.brandCheck(this, B), this.#u.close && this.removeEventListener("close", this.#u.close), "function" == typeof e2 ? (this.#u.close = e2, this.addEventListener("close", e2)) : this.#u.close = null;
      }
      get onmessage() {
        return n.brandCheck(this, B), this.#u.message;
      }
      set onmessage(e2) {
        n.brandCheck(this, B), this.#u.message && this.removeEventListener("message", this.#u.message), "function" == typeof e2 ? (this.#u.message = e2, this.addEventListener("message", e2)) : this.#u.message = null;
      }
      get binaryType() {
        return n.brandCheck(this, B), this[h];
      }
      set binaryType(e2) {
        n.brandCheck(this, B), this[h] = "blob" !== e2 && "arraybuffer" !== e2 ? "blob" : e2;
      }
      #h(e2) {
        this[f] = e2;
        const t2 = new I(this);
        t2.on("drain", function() {
          this.ws[f].socket.resume();
        }), e2.socket.ws = this, this[y] = t2, this[p] = c.OPEN;
        const r2 = e2.headersList.get("sec-websocket-extensions");
        null !== r2 && (this.#m = r2);
        const n2 = e2.headersList.get("sec-websocket-protocol");
        null !== n2 && (this.#p = n2), S("open", this);
      }
    }
    B.CONNECTING = B.prototype.CONNECTING = c.CONNECTING, B.OPEN = B.prototype.OPEN = c.OPEN, B.CLOSING = B.prototype.CLOSING = c.CLOSING, B.CLOSED = B.prototype.CLOSED = c.CLOSED, Object.defineProperties(B.prototype, { CONNECTING: a, OPEN: a, CLOSING: a, CLOSED: a, url: C, readyState: C, bufferedAmount: C, onopen: C, onerror: C, onclose: C, close: C, onmessage: C, binaryType: C, send: C, extensions: C, protocol: C, [Symbol.toStringTag]: { value: "WebSocket", writable: false, enumerable: false, configurable: true } }), Object.defineProperties(B, { CONNECTING: a, OPEN: a, CLOSING: a, CLOSED: a }), n.converters["sequence<DOMString>"] = n.sequenceConverter(n.converters.DOMString), n.converters["DOMString or sequence<DOMString>"] = function(e2) {
      return "Object" === n.util.Type(e2) && Symbol.iterator in e2 ? n.converters["sequence<DOMString>"](e2) : n.converters.DOMString(e2);
    }, n.converters.WebSocketInit = n.dictionaryConverter([{ key: "protocols", converter: n.converters["DOMString or sequence<DOMString>"], get defaultValue() {
      return [];
    } }, { key: "dispatcher", converter: (e2) => e2, get defaultValue() {
      return x();
    } }, { key: "headers", converter: n.nullableConverter(n.converters.HeadersInit) }]), n.converters["DOMString or sequence<DOMString> or WebSocketInit"] = function(e2) {
      return "Object" !== n.util.Type(e2) || Symbol.iterator in e2 ? { protocols: n.converters["DOMString or sequence<DOMString>"](e2) } : n.converters.WebSocketInit(e2);
    }, n.converters.WebSocketSendData = function(e2) {
      if ("Object" === n.util.Type(e2)) {
        if (k(e2)) return n.converters.Blob(e2, { strict: false });
        if (ArrayBuffer.isView(e2) || T.isAnyArrayBuffer(e2)) return n.converters.BufferSource(e2);
      }
      return n.converters.USVString(e2);
    }, e.exports = { WebSocket: B };
  }