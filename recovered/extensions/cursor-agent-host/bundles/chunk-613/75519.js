// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 75519 range:421851..430062
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
75519: (A, e, t) => {
  "use strict";
  const { webidl: r } = t(43290), { URLSerializer: s } = t(52603), { environmentSettingsObject: o } = t(48215), { staticPropertyDescriptors: n, states: i, sentCloseFrameState: a, sendHints: Q } = t(30229), { kWebSocketURL: g, kReadyState: E, kController: B, kBinaryType: c, kResponse: I, kSentClose: C, kByteParser: h } = t(47489), { isConnecting: l, isEstablished: u, isClosing: d, isValidSubprotocol: f, fireEvent: w } = t(79946), { establishWebSocketConnection: y, closeWebSocketConnection: D } = t(81674), { ByteParser: p } = t(41135), { kEnumerableProperty: k, isBlobLike: R } = t(55201), { getGlobalDispatcher: F } = t(37922), { types: m } = t(57975), { ErrorEvent: b, CloseEvent: N } = t(63315), { SendQueue: S } = t(62187);
  class M extends EventTarget {
    #_ = { open: null, error: null, close: null, message: null };
    #j = 0;
    #$ = "";
    #F = "";
    #AA;
    constructor(A2, e2 = []) {
      super(), r.util.markAsUncloneable(this);
      const t2 = "WebSocket constructor";
      r.argumentLengthCheck(arguments, 1, t2);
      const s2 = r.converters["DOMString or sequence<DOMString> or WebSocketInit"](e2, t2, "options");
      A2 = r.converters.USVString(A2, t2, "url"), e2 = s2.protocols;
      const n2 = o.settingsObject.baseUrl;
      let i2;
      try {
        i2 = new URL(A2, n2);
      } catch (A3) {
        throw new DOMException(A3, "SyntaxError");
      }
      if ("http:" === i2.protocol ? i2.protocol = "ws:" : "https:" === i2.protocol && (i2.protocol = "wss:"), "ws:" !== i2.protocol && "wss:" !== i2.protocol) throw new DOMException(`Expected a ws: or wss: protocol, got ${i2.protocol}`, "SyntaxError");
      if (i2.hash || i2.href.endsWith("#")) throw new DOMException("Got fragment", "SyntaxError");
      if ("string" == typeof e2 && (e2 = [e2]), e2.length !== new Set(e2.map((A3) => A3.toLowerCase())).size) throw new DOMException("Invalid Sec-WebSocket-Protocol value", "SyntaxError");
      if (e2.length > 0 && !e2.every((A3) => f(A3))) throw new DOMException("Invalid Sec-WebSocket-Protocol value", "SyntaxError");
      this[g] = new URL(i2.href);
      const Q2 = o.settingsObject;
      this[B] = y(i2, e2, Q2, this, (A3, e3) => this.#eA(A3, e3), s2), this[E] = M.CONNECTING, this[C] = a.NOT_SENT, this[c] = "blob";
    }
    close(A2 = void 0, e2 = void 0) {
      r.brandCheck(this, M);
      const t2 = "WebSocket.close";
      if (void 0 !== A2 && (A2 = r.converters["unsigned short"](A2, t2, "code", { clamp: true })), void 0 !== e2 && (e2 = r.converters.USVString(e2, t2, "reason")), void 0 !== A2 && 1e3 !== A2 && (A2 < 3e3 || A2 > 4999)) throw new DOMException("invalid code", "InvalidAccessError");
      let s2 = 0;
      if (void 0 !== e2 && (s2 = Buffer.byteLength(e2), s2 > 123)) throw new DOMException(`Reason must be less than 123 bytes; received ${s2}`, "SyntaxError");
      D(this, A2, e2, s2);
    }
    send(A2) {
      r.brandCheck(this, M);
      const e2 = "WebSocket.send";
      if (r.argumentLengthCheck(arguments, 1, e2), A2 = r.converters.WebSocketSendData(A2, e2, "data"), l(this)) throw new DOMException("Sent before connected.", "InvalidStateError");
      if (u(this) && !d(this)) if ("string" == typeof A2) {
        const e3 = Buffer.byteLength(A2);
        this.#j += e3, this.#AA.add(A2, () => {
          this.#j -= e3;
        }, Q.string);
      } else m.isArrayBuffer(A2) ? (this.#j += A2.byteLength, this.#AA.add(A2, () => {
        this.#j -= A2.byteLength;
      }, Q.arrayBuffer)) : ArrayBuffer.isView(A2) ? (this.#j += A2.byteLength, this.#AA.add(A2, () => {
        this.#j -= A2.byteLength;
      }, Q.typedArray)) : R(A2) && (this.#j += A2.size, this.#AA.add(A2, () => {
        this.#j -= A2.size;
      }, Q.blob));
    }
    get readyState() {
      return r.brandCheck(this, M), this[E];
    }
    get bufferedAmount() {
      return r.brandCheck(this, M), this.#j;
    }
    get url() {
      return r.brandCheck(this, M), s(this[g]);
    }
    get extensions() {
      return r.brandCheck(this, M), this.#F;
    }
    get protocol() {
      return r.brandCheck(this, M), this.#$;
    }
    get onopen() {
      return r.brandCheck(this, M), this.#_.open;
    }
    set onopen(A2) {
      r.brandCheck(this, M), this.#_.open && this.removeEventListener("open", this.#_.open), "function" == typeof A2 ? (this.#_.open = A2, this.addEventListener("open", A2)) : this.#_.open = null;
    }
    get onerror() {
      return r.brandCheck(this, M), this.#_.error;
    }
    set onerror(A2) {
      r.brandCheck(this, M), this.#_.error && this.removeEventListener("error", this.#_.error), "function" == typeof A2 ? (this.#_.error = A2, this.addEventListener("error", A2)) : this.#_.error = null;
    }
    get onclose() {
      return r.brandCheck(this, M), this.#_.close;
    }
    set onclose(A2) {
      r.brandCheck(this, M), this.#_.close && this.removeEventListener("close", this.#_.close), "function" == typeof A2 ? (this.#_.close = A2, this.addEventListener("close", A2)) : this.#_.close = null;
    }
    get onmessage() {
      return r.brandCheck(this, M), this.#_.message;
    }
    set onmessage(A2) {
      r.brandCheck(this, M), this.#_.message && this.removeEventListener("message", this.#_.message), "function" == typeof A2 ? (this.#_.message = A2, this.addEventListener("message", A2)) : this.#_.message = null;
    }
    get binaryType() {
      return r.brandCheck(this, M), this[c];
    }
    set binaryType(A2) {
      r.brandCheck(this, M), this[c] = "blob" !== A2 && "arraybuffer" !== A2 ? "blob" : A2;
    }
    #eA(A2, e2) {
      this[I] = A2;
      const t2 = this[B]?.dispatcher?.webSocketOptions, r2 = t2?.maxFragments, s2 = t2?.maxPayloadSize, o2 = new p(this, e2, { maxFragments: r2, maxPayloadSize: s2 });
      o2.on("drain", U), o2.on("error", L.bind(this)), A2.socket.ws = this, this[h] = o2, this.#AA = new S(A2.socket), this[E] = i.OPEN;
      const n2 = A2.headersList.get("sec-websocket-extensions");
      null !== n2 && (this.#F = n2);
      const a2 = A2.headersList.get("sec-websocket-protocol");
      null !== a2 && (this.#$ = a2), w("open", this);
    }
  }
  function U() {
    this.ws[I].socket.resume();
  }
  function L(A2) {
    let e2, t2;
    A2 instanceof N ? (e2 = A2.reason, t2 = A2.code) : e2 = A2.message, w("error", this, () => new b("error", { error: A2, message: e2 })), D(this, t2);
  }
  M.CONNECTING = M.prototype.CONNECTING = i.CONNECTING, M.OPEN = M.prototype.OPEN = i.OPEN, M.CLOSING = M.prototype.CLOSING = i.CLOSING, M.CLOSED = M.prototype.CLOSED = i.CLOSED, Object.defineProperties(M.prototype, { CONNECTING: n, OPEN: n, CLOSING: n, CLOSED: n, url: k, readyState: k, bufferedAmount: k, onopen: k, onerror: k, onclose: k, close: k, onmessage: k, binaryType: k, send: k, extensions: k, protocol: k, [Symbol.toStringTag]: { value: "WebSocket", writable: false, enumerable: false, configurable: true } }), Object.defineProperties(M, { CONNECTING: n, OPEN: n, CLOSING: n, CLOSED: n }), r.converters["sequence<DOMString>"] = r.sequenceConverter(r.converters.DOMString), r.converters["DOMString or sequence<DOMString>"] = function(A2, e2, t2) {
    return "Object" === r.util.Type(A2) && Symbol.iterator in A2 ? r.converters["sequence<DOMString>"](A2) : r.converters.DOMString(A2, e2, t2);
  }, r.converters.WebSocketInit = r.dictionaryConverter([{ key: "protocols", converter: r.converters["DOMString or sequence<DOMString>"], defaultValue: () => new Array(0) }, { key: "dispatcher", converter: r.converters.any, defaultValue: () => F() }, { key: "headers", converter: r.nullableConverter(r.converters.HeadersInit) }]), r.converters["DOMString or sequence<DOMString> or WebSocketInit"] = function(A2) {
    return "Object" !== r.util.Type(A2) || Symbol.iterator in A2 ? { protocols: r.converters["DOMString or sequence<DOMString>"](A2) } : r.converters.WebSocketInit(A2);
  }, r.converters.WebSocketSendData = function(A2) {
    if ("Object" === r.util.Type(A2)) {
      if (R(A2)) return r.converters.Blob(A2, { strict: false });
      if (ArrayBuffer.isView(A2) || m.isArrayBuffer(A2)) return r.converters.BufferSource(A2);
    }
    return r.converters.USVString(A2);
  }, A.exports = { WebSocket: M };
}