// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 49038 range:8146943..8164889
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
49038: (e, t, r) => {
    "use strict";
    const n = r(24434), s = r(65692), o = r(58611), i = r(69278), a = r(64756), { randomBytes: c, createHash: l } = r(76982), { Duplex: u, Readable: d } = r(2203), { URL: p } = r(87016), m = r(31293), h = r(87492), f = r(35100), { isBlob: g } = r(16818), { BINARY_TYPES: y, CLOSE_TIMEOUT: w, EMPTY_BUFFER: v, GUID: _, kForOnEventAttribute: A, kListener: S, kStatusCode: b, kWebSocket: E, NOOP: I } = r(78864), { EventTarget: { addEventListener: C, removeEventListener: k } } = r(86555), { format: x, parse: T } = r(67592), { toBuffer: R } = r(39796), B = /* @__PURE__ */ Symbol("kAborted"), P = [8, 13], J = ["CONNECTING", "OPEN", "CLOSING", "CLOSED"], M = /^[!#$%&'*+\-.0-9A-Z^_`|a-z~]+$/;
    class q extends n {
      constructor(e2, t2, r2) {
        super(), this._binaryType = y[0], this._closeCode = 1006, this._closeFrameReceived = false, this._closeFrameSent = false, this._closeMessage = v, this._closeTimer = null, this._errorEmitted = false, this._extensions = {}, this._paused = false, this._protocol = "", this._readyState = q.CONNECTING, this._receiver = null, this._sender = null, this._socket = null, null !== e2 ? (this._bufferedAmount = 0, this._isServer = false, this._redirects = 0, void 0 === t2 ? t2 = [] : Array.isArray(t2) || ("object" == typeof t2 && null !== t2 ? (r2 = t2, t2 = []) : t2 = [t2]), D(this, e2, t2, r2)) : (this._autoPong = r2.autoPong, this._closeTimeout = r2.closeTimeout, this._isServer = true);
      }
      get binaryType() {
        return this._binaryType;
      }
      set binaryType(e2) {
        y.includes(e2) && (this._binaryType = e2, this._receiver && (this._receiver._binaryType = e2));
      }
      get bufferedAmount() {
        return this._socket ? this._socket._writableState.length + this._sender._bufferedBytes : this._bufferedAmount;
      }
      get extensions() {
        return Object.keys(this._extensions).join();
      }
      get isPaused() {
        return this._paused;
      }
      get onclose() {
        return null;
      }
      get onerror() {
        return null;
      }
      get onopen() {
        return null;
      }
      get onmessage() {
        return null;
      }
      get protocol() {
        return this._protocol;
      }
      get readyState() {
        return this._readyState;
      }
      get url() {
        return this._url;
      }
      setSocket(e2, t2, r2) {
        const n2 = new h({ allowSynchronousEvents: r2.allowSynchronousEvents, binaryType: this.binaryType, extensions: this._extensions, isServer: this._isServer, maxBufferedChunks: r2.maxBufferedChunks, maxFragments: r2.maxFragments, maxPayload: r2.maxPayload, skipUTF8Validation: r2.skipUTF8Validation }), s2 = new f(e2, this._extensions, r2.generateMask);
        this._receiver = n2, this._sender = s2, this._socket = e2, n2[E] = this, s2[E] = this, e2[E] = this, n2.on("conclude", $), n2.on("drain", Q), n2.on("error", j), n2.on("message", H), n2.on("ping", z), n2.on("pong", W), s2.onerror = K, e2.setTimeout && e2.setTimeout(0), e2.setNoDelay && e2.setNoDelay(), t2.length > 0 && e2.unshift(t2), e2.on("close", Z), e2.on("data", X), e2.on("end", ee), e2.on("error", te), this._readyState = q.OPEN, this.emit("open");
      }
      emitClose() {
        if (!this._socket) return this._readyState = q.CLOSED, void this.emit("close", this._closeCode, this._closeMessage);
        this._extensions[m.extensionName] && this._extensions[m.extensionName].cleanup(), this._receiver.removeAllListeners(), this._readyState = q.CLOSED, this.emit("close", this._closeCode, this._closeMessage);
      }
      close(e2, t2) {
        if (this.readyState !== q.CLOSED) {
          if (this.readyState === q.CONNECTING) {
            const e3 = "WebSocket was closed before the connection was established";
            return void U(this, this._req, e3);
          }
          this.readyState !== q.CLOSING ? (this._readyState = q.CLOSING, this._sender.close(e2, t2, !this._isServer, (e3) => {
            e3 || (this._closeFrameSent = true, (this._closeFrameReceived || this._receiver._writableState.errorEmitted) && this._socket.end());
          }), Y(this)) : this._closeFrameSent && (this._closeFrameReceived || this._receiver._writableState.errorEmitted) && this._socket.end();
        }
      }
      pause() {
        this.readyState !== q.CONNECTING && this.readyState !== q.CLOSED && (this._paused = true, this._socket.pause());
      }
      ping(e2, t2, r2) {
        if (this.readyState === q.CONNECTING) throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
        "function" == typeof e2 ? (r2 = e2, e2 = t2 = void 0) : "function" == typeof t2 && (r2 = t2, t2 = void 0), "number" == typeof e2 && (e2 = e2.toString()), this.readyState === q.OPEN ? (void 0 === t2 && (t2 = !this._isServer), this._sender.ping(e2 || v, t2, r2)) : L(this, e2, r2);
      }
      pong(e2, t2, r2) {
        if (this.readyState === q.CONNECTING) throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
        "function" == typeof e2 ? (r2 = e2, e2 = t2 = void 0) : "function" == typeof t2 && (r2 = t2, t2 = void 0), "number" == typeof e2 && (e2 = e2.toString()), this.readyState === q.OPEN ? (void 0 === t2 && (t2 = !this._isServer), this._sender.pong(e2 || v, t2, r2)) : L(this, e2, r2);
      }
      resume() {
        this.readyState !== q.CONNECTING && this.readyState !== q.CLOSED && (this._paused = false, this._receiver._writableState.needDrain || this._socket.resume());
      }
      send(e2, t2, r2) {
        if (this.readyState === q.CONNECTING) throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
        if ("function" == typeof t2 && (r2 = t2, t2 = {}), "number" == typeof e2 && (e2 = e2.toString()), this.readyState !== q.OPEN) return void L(this, e2, r2);
        const n2 = { binary: "string" != typeof e2, mask: !this._isServer, compress: true, fin: true, ...t2 };
        this._extensions[m.extensionName] || (n2.compress = false), this._sender.send(e2 || v, n2, r2);
      }
      terminate() {
        if (this.readyState !== q.CLOSED) {
          if (this.readyState === q.CONNECTING) {
            const e2 = "WebSocket was closed before the connection was established";
            return void U(this, this._req, e2);
          }
          this._socket && (this._readyState = q.CLOSING, this._socket.destroy());
        }
      }
    }
    function D(e2, t2, r2, n2) {
      const i2 = { allowSynchronousEvents: true, autoPong: true, closeTimeout: w, protocolVersion: P[1], maxBufferedChunks: 262144, maxFragments: 16384, maxPayload: 104857600, skipUTF8Validation: false, perMessageDeflate: true, followRedirects: false, maxRedirects: 10, ...n2, socketPath: void 0, hostname: void 0, protocol: void 0, timeout: void 0, method: "GET", host: void 0, path: void 0, port: void 0 };
      if (e2._autoPong = i2.autoPong, e2._closeTimeout = i2.closeTimeout, !P.includes(i2.protocolVersion)) throw new RangeError(`Unsupported protocol version: ${i2.protocolVersion} (supported versions: ${P.join(", ")})`);
      let a2;
      if (t2 instanceof p) a2 = t2;
      else try {
        a2 = new p(t2);
      } catch {
        throw new SyntaxError(`Invalid URL: ${t2}`);
      }
      "http:" === a2.protocol ? a2.protocol = "ws:" : "https:" === a2.protocol && (a2.protocol = "wss:"), e2._url = a2.href;
      const u2 = "wss:" === a2.protocol, d2 = "ws+unix:" === a2.protocol;
      let h2;
      if ("ws:" === a2.protocol || u2 || d2 ? d2 && !a2.pathname ? h2 = "The URL's pathname is empty" : a2.hash && (h2 = "The URL contains a fragment identifier") : h2 = `The URL's protocol must be one of "ws:", "wss:", "http:", "https:", or "ws+unix:"`, h2) {
        const t3 = new SyntaxError(h2);
        if (0 === e2._redirects) throw t3;
        return void O(e2, t3);
      }
      const f2 = u2 ? 443 : 80, g2 = c(16).toString("base64"), y2 = u2 ? s.request : o.request, v2 = /* @__PURE__ */ new Set();
      let A2, S2;
      if (i2.createConnection = i2.createConnection || (u2 ? F : N), i2.defaultPort = i2.defaultPort || f2, i2.port = a2.port || f2, i2.host = a2.hostname.startsWith("[") ? a2.hostname.slice(1, -1) : a2.hostname, i2.headers = { ...i2.headers, "Sec-WebSocket-Version": i2.protocolVersion, "Sec-WebSocket-Key": g2, Connection: "Upgrade", Upgrade: "websocket" }, i2.path = a2.pathname + a2.search, i2.timeout = i2.handshakeTimeout, i2.perMessageDeflate && (A2 = new m({ ...i2.perMessageDeflate, isServer: false, maxPayload: i2.maxPayload }), i2.headers["Sec-WebSocket-Extensions"] = x({ [m.extensionName]: A2.offer() })), r2.length) {
        for (const e3 of r2) {
          if ("string" != typeof e3 || !M.test(e3) || v2.has(e3)) throw new SyntaxError("An invalid or duplicated subprotocol was specified");
          v2.add(e3);
        }
        i2.headers["Sec-WebSocket-Protocol"] = r2.join(",");
      }
      if (i2.origin && (i2.protocolVersion < 13 ? i2.headers["Sec-WebSocket-Origin"] = i2.origin : i2.headers.Origin = i2.origin), (a2.username || a2.password) && (i2.auth = `${a2.username}:${a2.password}`), d2) {
        const e3 = i2.path.split(":");
        i2.socketPath = e3[0], i2.path = e3[1];
      }
      if (i2.followRedirects) {
        if (0 === e2._redirects) {
          e2._originalIpc = d2, e2._originalSecure = u2, e2._originalHostOrSocketPath = d2 ? i2.socketPath : a2.host;
          const t3 = n2 && n2.headers;
          if (n2 = { ...n2, headers: {} }, t3) for (const [e3, r3] of Object.entries(t3)) n2.headers[e3.toLowerCase()] = r3;
        } else if (0 === e2.listenerCount("redirect")) {
          const t3 = d2 ? !!e2._originalIpc && i2.socketPath === e2._originalHostOrSocketPath : !e2._originalIpc && a2.host === e2._originalHostOrSocketPath;
          (!t3 || e2._originalSecure && !u2) && (delete i2.headers.authorization, delete i2.headers.cookie, t3 || delete i2.headers.host, i2.auth = void 0);
        }
        i2.auth && !n2.headers.authorization && (n2.headers.authorization = "Basic " + Buffer.from(i2.auth).toString("base64")), S2 = e2._req = y2(i2), e2._redirects && e2.emit("redirect", e2.url, S2);
      } else S2 = e2._req = y2(i2);
      i2.timeout && S2.on("timeout", () => {
        U(e2, S2, "Opening handshake has timed out");
      }), S2.on("error", (t3) => {
        null === S2 || S2[B] || (S2 = e2._req = null, O(e2, t3));
      }), S2.on("response", (s2) => {
        const o2 = s2.headers.location, a3 = s2.statusCode;
        if (o2 && i2.followRedirects && a3 >= 300 && a3 < 400) {
          if (++e2._redirects > i2.maxRedirects) return void U(e2, S2, "Maximum redirects exceeded");
          let s3;
          S2.abort();
          try {
            s3 = new p(o2, t2);
          } catch (t3) {
            const r3 = new SyntaxError(`Invalid URL: ${o2}`);
            return void O(e2, r3);
          }
          D(e2, s3, r2, n2);
        } else e2.emit("unexpected-response", S2, s2) || U(e2, S2, `Unexpected server response: ${s2.statusCode}`);
      }), S2.on("upgrade", (t3, r3, n3) => {
        if (e2.emit("upgrade", t3), e2.readyState !== q.CONNECTING) return;
        S2 = e2._req = null;
        const s2 = t3.headers.upgrade;
        if (void 0 === s2 || "websocket" !== s2.toLowerCase()) return void U(e2, r3, "Invalid Upgrade header");
        const o2 = l("sha1").update(g2 + _).digest("base64");
        if (t3.headers["sec-websocket-accept"] !== o2) return void U(e2, r3, "Invalid Sec-WebSocket-Accept header");
        const a3 = t3.headers["sec-websocket-protocol"];
        let c2;
        if (void 0 !== a3 ? v2.size ? v2.has(a3) || (c2 = "Server sent an invalid subprotocol") : c2 = "Server sent a subprotocol but none was requested" : v2.size && (c2 = "Server sent no subprotocol"), c2) return void U(e2, r3, c2);
        a3 && (e2._protocol = a3);
        const u3 = t3.headers["sec-websocket-extensions"];
        if (void 0 !== u3) {
          if (!A2) {
            return void U(e2, r3, "Server sent a Sec-WebSocket-Extensions header but no extension was requested");
          }
          let t4;
          try {
            t4 = T(u3);
          } catch (t5) {
            return void U(e2, r3, "Invalid Sec-WebSocket-Extensions header");
          }
          const n4 = Object.keys(t4);
          if (1 !== n4.length || n4[0] !== m.extensionName) {
            return void U(e2, r3, "Server indicated an extension that was not requested");
          }
          try {
            A2.accept(t4[m.extensionName]);
          } catch (t5) {
            return void U(e2, r3, "Invalid Sec-WebSocket-Extensions header");
          }
          e2._extensions[m.extensionName] = A2;
        }
        e2.setSocket(r3, n3, { allowSynchronousEvents: i2.allowSynchronousEvents, generateMask: i2.generateMask, maxBufferedChunks: i2.maxBufferedChunks, maxFragments: i2.maxFragments, maxPayload: i2.maxPayload, skipUTF8Validation: i2.skipUTF8Validation });
      }), i2.finishRequest ? i2.finishRequest(S2, e2) : S2.end();
    }
    function O(e2, t2) {
      e2._readyState = q.CLOSING, e2._errorEmitted = true, e2.emit("error", t2), e2.emitClose();
    }
    function N(e2) {
      return e2.path = e2.socketPath, i.connect(e2);
    }
    function F(e2) {
      return e2.path = void 0, e2.servername || "" === e2.servername || (e2.servername = i.isIP(e2.host) ? "" : e2.host), a.connect(e2);
    }
    function U(e2, t2, r2) {
      e2._readyState = q.CLOSING;
      const n2 = new Error(r2);
      Error.captureStackTrace(n2, U), t2.setHeader ? (t2[B] = true, t2.abort(), t2.socket && !t2.socket.destroyed && t2.socket.destroy(), process.nextTick(O, e2, n2)) : (t2.destroy(n2), t2.once("error", e2.emit.bind(e2, "error")), t2.once("close", e2.emitClose.bind(e2)));
    }
    function L(e2, t2, r2) {
      if (t2) {
        const r3 = g(t2) ? t2.size : R(t2).length;
        e2._socket ? e2._sender._bufferedBytes += r3 : e2._bufferedAmount += r3;
      }
      if (r2) {
        const t3 = new Error(`WebSocket is not open: readyState ${e2.readyState} (${J[e2.readyState]})`);
        process.nextTick(r2, t3);
      }
    }
    function $(e2, t2) {
      const r2 = this[E];
      r2._closeFrameReceived = true, r2._closeMessage = t2, r2._closeCode = e2, void 0 !== r2._socket[E] && (r2._socket.removeListener("data", X), process.nextTick(V, r2._socket), 1005 === e2 ? r2.close() : r2.close(e2, t2));
    }
    function Q() {
      const e2 = this[E];
      e2.isPaused || e2._socket.resume();
    }
    function j(e2) {
      const t2 = this[E];
      void 0 !== t2._socket[E] && (t2._socket.removeListener("data", X), process.nextTick(V, t2._socket), t2.close(e2[b])), t2._errorEmitted || (t2._errorEmitted = true, t2.emit("error", e2));
    }
    function G() {
      this[E].emitClose();
    }
    function H(e2, t2) {
      this[E].emit("message", e2, t2);
    }
    function z(e2) {
      const t2 = this[E];
      t2._autoPong && t2.pong(e2, !this._isServer, I), t2.emit("ping", e2);
    }
    function W(e2) {
      this[E].emit("pong", e2);
    }
    function V(e2) {
      e2.resume();
    }
    function K(e2) {
      const t2 = this[E];
      t2.readyState !== q.CLOSED && (t2.readyState === q.OPEN && (t2._readyState = q.CLOSING, Y(t2)), this._socket.end(), t2._errorEmitted || (t2._errorEmitted = true, t2.emit("error", e2)));
    }
    function Y(e2) {
      e2._closeTimer = setTimeout(e2._socket.destroy.bind(e2._socket), e2._closeTimeout);
    }
    function Z() {
      const e2 = this[E];
      if (this.removeListener("close", Z), this.removeListener("data", X), this.removeListener("end", ee), e2._readyState = q.CLOSING, !this._readableState.endEmitted && !e2._closeFrameReceived && !e2._receiver._writableState.errorEmitted && 0 !== this._readableState.length) {
        const t2 = this.read(this._readableState.length);
        e2._receiver.write(t2);
      }
      e2._receiver.end(), this[E] = void 0, clearTimeout(e2._closeTimer), e2._receiver._writableState.finished || e2._receiver._writableState.errorEmitted ? e2.emitClose() : (e2._receiver.on("error", G), e2._receiver.on("finish", G));
    }
    function X(e2) {
      this[E]._receiver.write(e2) || this.pause();
    }
    function ee() {
      const e2 = this[E];
      e2._readyState = q.CLOSING, e2._receiver.end(), this.end();
    }
    function te() {
      const e2 = this[E];
      this.removeListener("error", te), this.on("error", I), e2 && (e2._readyState = q.CLOSING, this.destroy());
    }
    Object.defineProperty(q, "CONNECTING", { enumerable: true, value: J.indexOf("CONNECTING") }), Object.defineProperty(q.prototype, "CONNECTING", { enumerable: true, value: J.indexOf("CONNECTING") }), Object.defineProperty(q, "OPEN", { enumerable: true, value: J.indexOf("OPEN") }), Object.defineProperty(q.prototype, "OPEN", { enumerable: true, value: J.indexOf("OPEN") }), Object.defineProperty(q, "CLOSING", { enumerable: true, value: J.indexOf("CLOSING") }), Object.defineProperty(q.prototype, "CLOSING", { enumerable: true, value: J.indexOf("CLOSING") }), Object.defineProperty(q, "CLOSED", { enumerable: true, value: J.indexOf("CLOSED") }), Object.defineProperty(q.prototype, "CLOSED", { enumerable: true, value: J.indexOf("CLOSED") }), ["binaryType", "bufferedAmount", "extensions", "isPaused", "protocol", "readyState", "url"].forEach((e2) => {
      Object.defineProperty(q.prototype, e2, { enumerable: true });
    }), ["open", "error", "close", "message"].forEach((e2) => {
      Object.defineProperty(q.prototype, `on${e2}`, { enumerable: true, get() {
        for (const t2 of this.listeners(e2)) if (t2[A]) return t2[S];
        return null;
      }, set(t2) {
        for (const t3 of this.listeners(e2)) if (t3[A]) {
          this.removeListener(e2, t3);
          break;
        }
        "function" == typeof t2 && this.addEventListener(e2, t2, { [A]: true });
      } });
    }), q.prototype.addEventListener = C, q.prototype.removeEventListener = k, e.exports = q;
  }