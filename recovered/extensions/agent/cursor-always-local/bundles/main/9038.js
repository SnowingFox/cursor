// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 9038 range:6027690..6045649
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9038: (t2, e2, r2) => {
    "use strict";
    const n2 = r2(4434), s2 = r2(5692), i2 = r2(8611), o2 = r2(9278), a = r2(4756), { randomBytes: u, createHash: c } = r2(6982), { Duplex: l, Readable: m } = r2(2203), { URL: d } = r2(7016), f = r2(1293), p = r2(7492), h = r2(5100), { isBlob: g } = r2(6818), { BINARY_TYPES: A, CLOSE_TIMEOUT: _, EMPTY_BUFFER: y, GUID: w, kForOnEventAttribute: S, kListener: J, kStatusCode: B, kWebSocket: E, NOOP: I } = r2(8864), { EventTarget: { addEventListener: C, removeEventListener: b } } = r2(6555), { format: k, parse: v } = r2(7592), { toBuffer: q } = r2(9796), R = /* @__PURE__ */ Symbol("kAborted"), P = [8, 13], T = ["CONNECTING", "OPEN", "CLOSING", "CLOSED"], x = /^[!#$%&'*+\-.0-9A-Z^_`|a-z~]+$/;
    class N extends n2 {
      constructor(t3, e3, r3) {
        super(), this._binaryType = A[0], this._closeCode = 1006, this._closeFrameReceived = false, this._closeFrameSent = false, this._closeMessage = y, this._closeTimer = null, this._errorEmitted = false, this._extensions = {}, this._paused = false, this._protocol = "", this._readyState = N.CONNECTING, this._receiver = null, this._sender = null, this._socket = null, null !== t3 ? (this._bufferedAmount = 0, this._isServer = false, this._redirects = 0, void 0 === e3 ? e3 = [] : Array.isArray(e3) || ("object" == typeof e3 && null !== e3 ? (r3 = e3, e3 = []) : e3 = [e3]), D(this, t3, e3, r3)) : (this._autoPong = r3.autoPong, this._closeTimeout = r3.closeTimeout, this._isServer = true);
      }
      get binaryType() {
        return this._binaryType;
      }
      set binaryType(t3) {
        A.includes(t3) && (this._binaryType = t3, this._receiver && (this._receiver._binaryType = t3));
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
      setSocket(t3, e3, r3) {
        const n3 = new p({ allowSynchronousEvents: r3.allowSynchronousEvents, binaryType: this.binaryType, extensions: this._extensions, isServer: this._isServer, maxBufferedChunks: r3.maxBufferedChunks, maxFragments: r3.maxFragments, maxPayload: r3.maxPayload, skipUTF8Validation: r3.skipUTF8Validation }), s3 = new h(t3, this._extensions, r3.generateMask);
        this._receiver = n3, this._sender = s3, this._socket = t3, n3[E] = this, s3[E] = this, t3[E] = this, n3.on("conclude", L), n3.on("drain", $), n3.on("error", G), n3.on("message", K), n3.on("ping", V), n3.on("pong", z), s3.onerror = Y, t3.setTimeout && t3.setTimeout(0), t3.setNoDelay && t3.setNoDelay(), e3.length > 0 && t3.unshift(e3), t3.on("close", X), t3.on("data", Z), t3.on("end", tt), t3.on("error", et), this._readyState = N.OPEN, this.emit("open");
      }
      emitClose() {
        if (!this._socket) return this._readyState = N.CLOSED, void this.emit("close", this._closeCode, this._closeMessage);
        this._extensions[f.extensionName] && this._extensions[f.extensionName].cleanup(), this._receiver.removeAllListeners(), this._readyState = N.CLOSED, this.emit("close", this._closeCode, this._closeMessage);
      }
      close(t3, e3) {
        if (this.readyState !== N.CLOSED) {
          if (this.readyState === N.CONNECTING) {
            const t4 = "WebSocket was closed before the connection was established";
            return void O(this, this._req, t4);
          }
          this.readyState !== N.CLOSING ? (this._readyState = N.CLOSING, this._sender.close(t3, e3, !this._isServer, (t4) => {
            t4 || (this._closeFrameSent = true, (this._closeFrameReceived || this._receiver._writableState.errorEmitted) && this._socket.end());
          }), j(this)) : this._closeFrameSent && (this._closeFrameReceived || this._receiver._writableState.errorEmitted) && this._socket.end();
        }
      }
      pause() {
        this.readyState !== N.CONNECTING && this.readyState !== N.CLOSED && (this._paused = true, this._socket.pause());
      }
      ping(t3, e3, r3) {
        if (this.readyState === N.CONNECTING) throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
        "function" == typeof t3 ? (r3 = t3, t3 = e3 = void 0) : "function" == typeof e3 && (r3 = e3, e3 = void 0), "number" == typeof t3 && (t3 = t3.toString()), this.readyState === N.OPEN ? (void 0 === e3 && (e3 = !this._isServer), this._sender.ping(t3 || y, e3, r3)) : F(this, t3, r3);
      }
      pong(t3, e3, r3) {
        if (this.readyState === N.CONNECTING) throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
        "function" == typeof t3 ? (r3 = t3, t3 = e3 = void 0) : "function" == typeof e3 && (r3 = e3, e3 = void 0), "number" == typeof t3 && (t3 = t3.toString()), this.readyState === N.OPEN ? (void 0 === e3 && (e3 = !this._isServer), this._sender.pong(t3 || y, e3, r3)) : F(this, t3, r3);
      }
      resume() {
        this.readyState !== N.CONNECTING && this.readyState !== N.CLOSED && (this._paused = false, this._receiver._writableState.needDrain || this._socket.resume());
      }
      send(t3, e3, r3) {
        if (this.readyState === N.CONNECTING) throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
        if ("function" == typeof e3 && (r3 = e3, e3 = {}), "number" == typeof t3 && (t3 = t3.toString()), this.readyState !== N.OPEN) return void F(this, t3, r3);
        const n3 = { binary: "string" != typeof t3, mask: !this._isServer, compress: true, fin: true, ...e3 };
        this._extensions[f.extensionName] || (n3.compress = false), this._sender.send(t3 || y, n3, r3);
      }
      terminate() {
        if (this.readyState !== N.CLOSED) {
          if (this.readyState === N.CONNECTING) {
            const t3 = "WebSocket was closed before the connection was established";
            return void O(this, this._req, t3);
          }
          this._socket && (this._readyState = N.CLOSING, this._socket.destroy());
        }
      }
    }
    function D(t3, e3, r3, n3) {
      const o3 = { allowSynchronousEvents: true, autoPong: true, closeTimeout: _, protocolVersion: P[1], maxBufferedChunks: 262144, maxFragments: 16384, maxPayload: 104857600, skipUTF8Validation: false, perMessageDeflate: true, followRedirects: false, maxRedirects: 10, ...n3, socketPath: void 0, hostname: void 0, protocol: void 0, timeout: void 0, method: "GET", host: void 0, path: void 0, port: void 0 };
      if (t3._autoPong = o3.autoPong, t3._closeTimeout = o3.closeTimeout, !P.includes(o3.protocolVersion)) throw new RangeError(`Unsupported protocol version: ${o3.protocolVersion} (supported versions: ${P.join(", ")})`);
      let a2;
      if (e3 instanceof d) a2 = e3;
      else try {
        a2 = new d(e3);
      } catch {
        throw new SyntaxError(`Invalid URL: ${e3}`);
      }
      "http:" === a2.protocol ? a2.protocol = "ws:" : "https:" === a2.protocol && (a2.protocol = "wss:"), t3._url = a2.href;
      const l2 = "wss:" === a2.protocol, m2 = "ws+unix:" === a2.protocol;
      let p2;
      if ("ws:" === a2.protocol || l2 || m2 ? m2 && !a2.pathname ? p2 = "The URL's pathname is empty" : a2.hash && (p2 = "The URL contains a fragment identifier") : p2 = `The URL's protocol must be one of "ws:", "wss:", "http:", "https:", or "ws+unix:"`, p2) {
        const e4 = new SyntaxError(p2);
        if (0 === t3._redirects) throw e4;
        return void U(t3, e4);
      }
      const h2 = l2 ? 443 : 80, g2 = u(16).toString("base64"), A2 = l2 ? s2.request : i2.request, y2 = /* @__PURE__ */ new Set();
      let S2, J2;
      if (o3.createConnection = o3.createConnection || (l2 ? M : Q), o3.defaultPort = o3.defaultPort || h2, o3.port = a2.port || h2, o3.host = a2.hostname.startsWith("[") ? a2.hostname.slice(1, -1) : a2.hostname, o3.headers = { ...o3.headers, "Sec-WebSocket-Version": o3.protocolVersion, "Sec-WebSocket-Key": g2, Connection: "Upgrade", Upgrade: "websocket" }, o3.path = a2.pathname + a2.search, o3.timeout = o3.handshakeTimeout, o3.perMessageDeflate && (S2 = new f({ ...o3.perMessageDeflate, isServer: false, maxPayload: o3.maxPayload }), o3.headers["Sec-WebSocket-Extensions"] = k({ [f.extensionName]: S2.offer() })), r3.length) {
        for (const t4 of r3) {
          if ("string" != typeof t4 || !x.test(t4) || y2.has(t4)) throw new SyntaxError("An invalid or duplicated subprotocol was specified");
          y2.add(t4);
        }
        o3.headers["Sec-WebSocket-Protocol"] = r3.join(",");
      }
      if (o3.origin && (o3.protocolVersion < 13 ? o3.headers["Sec-WebSocket-Origin"] = o3.origin : o3.headers.Origin = o3.origin), (a2.username || a2.password) && (o3.auth = `${a2.username}:${a2.password}`), m2) {
        const t4 = o3.path.split(":");
        o3.socketPath = t4[0], o3.path = t4[1];
      }
      if (o3.followRedirects) {
        if (0 === t3._redirects) {
          t3._originalIpc = m2, t3._originalSecure = l2, t3._originalHostOrSocketPath = m2 ? o3.socketPath : a2.host;
          const e4 = n3 && n3.headers;
          if (n3 = { ...n3, headers: {} }, e4) for (const [t4, r4] of Object.entries(e4)) n3.headers[t4.toLowerCase()] = r4;
        } else if (0 === t3.listenerCount("redirect")) {
          const e4 = m2 ? !!t3._originalIpc && o3.socketPath === t3._originalHostOrSocketPath : !t3._originalIpc && a2.host === t3._originalHostOrSocketPath;
          (!e4 || t3._originalSecure && !l2) && (delete o3.headers.authorization, delete o3.headers.cookie, e4 || delete o3.headers.host, o3.auth = void 0);
        }
        o3.auth && !n3.headers.authorization && (n3.headers.authorization = "Basic " + Buffer.from(o3.auth).toString("base64")), J2 = t3._req = A2(o3), t3._redirects && t3.emit("redirect", t3.url, J2);
      } else J2 = t3._req = A2(o3);
      o3.timeout && J2.on("timeout", () => {
        O(t3, J2, "Opening handshake has timed out");
      }), J2.on("error", (e4) => {
        null === J2 || J2[R] || (J2 = t3._req = null, U(t3, e4));
      }), J2.on("response", (s3) => {
        const i3 = s3.headers.location, a3 = s3.statusCode;
        if (i3 && o3.followRedirects && a3 >= 300 && a3 < 400) {
          if (++t3._redirects > o3.maxRedirects) return void O(t3, J2, "Maximum redirects exceeded");
          let s4;
          J2.abort();
          try {
            s4 = new d(i3, e3);
          } catch (e4) {
            const r4 = new SyntaxError(`Invalid URL: ${i3}`);
            return void U(t3, r4);
          }
          D(t3, s4, r3, n3);
        } else t3.emit("unexpected-response", J2, s3) || O(t3, J2, `Unexpected server response: ${s3.statusCode}`);
      }), J2.on("upgrade", (e4, r4, n4) => {
        if (t3.emit("upgrade", e4), t3.readyState !== N.CONNECTING) return;
        J2 = t3._req = null;
        const s3 = e4.headers.upgrade;
        if (void 0 === s3 || "websocket" !== s3.toLowerCase()) return void O(t3, r4, "Invalid Upgrade header");
        const i3 = c("sha1").update(g2 + w).digest("base64");
        if (e4.headers["sec-websocket-accept"] !== i3) return void O(t3, r4, "Invalid Sec-WebSocket-Accept header");
        const a3 = e4.headers["sec-websocket-protocol"];
        let u2;
        if (void 0 !== a3 ? y2.size ? y2.has(a3) || (u2 = "Server sent an invalid subprotocol") : u2 = "Server sent a subprotocol but none was requested" : y2.size && (u2 = "Server sent no subprotocol"), u2) return void O(t3, r4, u2);
        a3 && (t3._protocol = a3);
        const l3 = e4.headers["sec-websocket-extensions"];
        if (void 0 !== l3) {
          if (!S2) {
            return void O(t3, r4, "Server sent a Sec-WebSocket-Extensions header but no extension was requested");
          }
          let e5;
          try {
            e5 = v(l3);
          } catch (e6) {
            return void O(t3, r4, "Invalid Sec-WebSocket-Extensions header");
          }
          const n5 = Object.keys(e5);
          if (1 !== n5.length || n5[0] !== f.extensionName) {
            return void O(t3, r4, "Server indicated an extension that was not requested");
          }
          try {
            S2.accept(e5[f.extensionName]);
          } catch (e6) {
            return void O(t3, r4, "Invalid Sec-WebSocket-Extensions header");
          }
          t3._extensions[f.extensionName] = S2;
        }
        t3.setSocket(r4, n4, { allowSynchronousEvents: o3.allowSynchronousEvents, generateMask: o3.generateMask, maxBufferedChunks: o3.maxBufferedChunks, maxFragments: o3.maxFragments, maxPayload: o3.maxPayload, skipUTF8Validation: o3.skipUTF8Validation });
      }), o3.finishRequest ? o3.finishRequest(J2, t3) : J2.end();
    }
    function U(t3, e3) {
      t3._readyState = N.CLOSING, t3._errorEmitted = true, t3.emit("error", e3), t3.emitClose();
    }
    function Q(t3) {
      return t3.path = t3.socketPath, o2.connect(t3);
    }
    function M(t3) {
      return t3.path = void 0, t3.servername || "" === t3.servername || (t3.servername = o2.isIP(t3.host) ? "" : t3.host), a.connect(t3);
    }
    function O(t3, e3, r3) {
      t3._readyState = N.CLOSING;
      const n3 = new Error(r3);
      Error.captureStackTrace(n3, O), e3.setHeader ? (e3[R] = true, e3.abort(), e3.socket && !e3.socket.destroyed && e3.socket.destroy(), process.nextTick(U, t3, n3)) : (e3.destroy(n3), e3.once("error", t3.emit.bind(t3, "error")), e3.once("close", t3.emitClose.bind(t3)));
    }
    function F(t3, e3, r3) {
      if (e3) {
        const r4 = g(e3) ? e3.size : q(e3).length;
        t3._socket ? t3._sender._bufferedBytes += r4 : t3._bufferedAmount += r4;
      }
      if (r3) {
        const e4 = new Error(`WebSocket is not open: readyState ${t3.readyState} (${T[t3.readyState]})`);
        process.nextTick(r3, e4);
      }
    }
    function L(t3, e3) {
      const r3 = this[E];
      r3._closeFrameReceived = true, r3._closeMessage = e3, r3._closeCode = t3, void 0 !== r3._socket[E] && (r3._socket.removeListener("data", Z), process.nextTick(W, r3._socket), 1005 === t3 ? r3.close() : r3.close(t3, e3));
    }
    function $() {
      const t3 = this[E];
      t3.isPaused || t3._socket.resume();
    }
    function G(t3) {
      const e3 = this[E];
      void 0 !== e3._socket[E] && (e3._socket.removeListener("data", Z), process.nextTick(W, e3._socket), e3.close(t3[B])), e3._errorEmitted || (e3._errorEmitted = true, e3.emit("error", t3));
    }
    function H() {
      this[E].emitClose();
    }
    function K(t3, e3) {
      this[E].emit("message", t3, e3);
    }
    function V(t3) {
      const e3 = this[E];
      e3._autoPong && e3.pong(t3, !this._isServer, I), e3.emit("ping", t3);
    }
    function z(t3) {
      this[E].emit("pong", t3);
    }
    function W(t3) {
      t3.resume();
    }
    function Y(t3) {
      const e3 = this[E];
      e3.readyState !== N.CLOSED && (e3.readyState === N.OPEN && (e3._readyState = N.CLOSING, j(e3)), this._socket.end(), e3._errorEmitted || (e3._errorEmitted = true, e3.emit("error", t3)));
    }
    function j(t3) {
      t3._closeTimer = setTimeout(t3._socket.destroy.bind(t3._socket), t3._closeTimeout);
    }
    function X() {
      const t3 = this[E];
      if (this.removeListener("close", X), this.removeListener("data", Z), this.removeListener("end", tt), t3._readyState = N.CLOSING, !this._readableState.endEmitted && !t3._closeFrameReceived && !t3._receiver._writableState.errorEmitted && 0 !== this._readableState.length) {
        const e3 = this.read(this._readableState.length);
        t3._receiver.write(e3);
      }
      t3._receiver.end(), this[E] = void 0, clearTimeout(t3._closeTimer), t3._receiver._writableState.finished || t3._receiver._writableState.errorEmitted ? t3.emitClose() : (t3._receiver.on("error", H), t3._receiver.on("finish", H));
    }
    function Z(t3) {
      this[E]._receiver.write(t3) || this.pause();
    }
    function tt() {
      const t3 = this[E];
      t3._readyState = N.CLOSING, t3._receiver.end(), this.end();
    }
    function et() {
      const t3 = this[E];
      this.removeListener("error", et), this.on("error", I), t3 && (t3._readyState = N.CLOSING, this.destroy());
    }
    Object.defineProperty(N, "CONNECTING", { enumerable: true, value: T.indexOf("CONNECTING") }), Object.defineProperty(N.prototype, "CONNECTING", { enumerable: true, value: T.indexOf("CONNECTING") }), Object.defineProperty(N, "OPEN", { enumerable: true, value: T.indexOf("OPEN") }), Object.defineProperty(N.prototype, "OPEN", { enumerable: true, value: T.indexOf("OPEN") }), Object.defineProperty(N, "CLOSING", { enumerable: true, value: T.indexOf("CLOSING") }), Object.defineProperty(N.prototype, "CLOSING", { enumerable: true, value: T.indexOf("CLOSING") }), Object.defineProperty(N, "CLOSED", { enumerable: true, value: T.indexOf("CLOSED") }), Object.defineProperty(N.prototype, "CLOSED", { enumerable: true, value: T.indexOf("CLOSED") }), ["binaryType", "bufferedAmount", "extensions", "isPaused", "protocol", "readyState", "url"].forEach((t3) => {
      Object.defineProperty(N.prototype, t3, { enumerable: true });
    }), ["open", "error", "close", "message"].forEach((t3) => {
      Object.defineProperty(N.prototype, `on${t3}`, { enumerable: true, get() {
        for (const e3 of this.listeners(t3)) if (e3[S]) return e3[J];
        return null;
      }, set(e3) {
        for (const e4 of this.listeners(t3)) if (e4[S]) {
          this.removeListener(t3, e4);
          break;
        }
        "function" == typeof e3 && this.addEventListener(t3, e3, { [S]: true });
      } });
    }), N.prototype.addEventListener = C, N.prototype.removeEventListener = b, t2.exports = N;
  }