// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 1208 range:456808..464479
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1208: (t2, e2, r2) => {
    "use strict";
    const n2 = r2(4434), s2 = r2(8611), { Duplex: i2 } = r2(2203), { createHash: o2 } = r2(6982), a = r2(7592), u = r2(1293), c = r2(1403), l = r2(9038), { CLOSE_TIMEOUT: m, GUID: d, kWebSocket: f } = r2(8864), p = /^[+/0-9A-Za-z]{22}==$/;
    function h(t3) {
      t3._state = 2, t3.emit("close");
    }
    function g() {
      this.destroy();
    }
    function A(t3, e3, r3, n3) {
      r3 = r3 || s2.STATUS_CODES[e3], n3 = { Connection: "close", "Content-Type": "text/html", "Content-Length": Buffer.byteLength(r3), ...n3 }, t3.once("finish", t3.destroy), t3.end(`HTTP/1.1 ${e3} ${s2.STATUS_CODES[e3]}\r
` + Object.keys(n3).map((t4) => `${t4}: ${n3[t4]}`).join("\r\n") + "\r\n\r\n" + r3);
    }
    function _(t3, e3, r3, n3, s3, i3) {
      if (t3.listenerCount("wsClientError")) {
        const n4 = new Error(s3);
        Error.captureStackTrace(n4, _), t3.emit("wsClientError", n4, r3, e3);
      } else A(r3, n3, s3, i3);
    }
    t2.exports = class extends n2 {
      constructor(t3, e3) {
        if (super(), null == (t3 = { allowSynchronousEvents: true, autoPong: true, maxBufferedChunks: 262144, maxFragments: 16384, maxPayload: 104857600, skipUTF8Validation: false, perMessageDeflate: false, handleProtocols: null, clientTracking: true, closeTimeout: m, verifyClient: null, noServer: false, backlog: null, server: null, host: null, path: null, port: null, WebSocket: l, ...t3 }).port && !t3.server && !t3.noServer || null != t3.port && (t3.server || t3.noServer) || t3.server && t3.noServer) throw new TypeError('One and only one of the "port", "server", or "noServer" options must be specified');
        if (null != t3.port ? (this._server = s2.createServer((t4, e4) => {
          const r3 = s2.STATUS_CODES[426];
          e4.writeHead(426, { "Content-Length": r3.length, "Content-Type": "text/plain" }), e4.end(r3);
        }), this._server.listen(t3.port, t3.host, t3.backlog, e3)) : t3.server && (this._server = t3.server), this._server) {
          const t4 = this.emit.bind(this, "connection");
          this._removeListeners = (function(t5, e4) {
            for (const r3 of Object.keys(e4)) t5.on(r3, e4[r3]);
            return function() {
              for (const r3 of Object.keys(e4)) t5.removeListener(r3, e4[r3]);
            };
          })(this._server, { listening: this.emit.bind(this, "listening"), error: this.emit.bind(this, "error"), upgrade: (e4, r3, n3) => {
            this.handleUpgrade(e4, r3, n3, t4);
          } });
        }
        true === t3.perMessageDeflate && (t3.perMessageDeflate = {}), t3.clientTracking && (this.clients = /* @__PURE__ */ new Set(), this._shouldEmitClose = false), this.options = t3, this._state = 0;
      }
      address() {
        if (this.options.noServer) throw new Error('The server is operating in "noServer" mode');
        return this._server ? this._server.address() : null;
      }
      close(t3) {
        if (2 === this._state) return t3 && this.once("close", () => {
          t3(new Error("The server is not running"));
        }), void process.nextTick(h, this);
        if (t3 && this.once("close", t3), 1 !== this._state) if (this._state = 1, this.options.noServer || this.options.server) this._server && (this._removeListeners(), this._removeListeners = this._server = null), this.clients && this.clients.size ? this._shouldEmitClose = true : process.nextTick(h, this);
        else {
          const t4 = this._server;
          this._removeListeners(), this._removeListeners = this._server = null, t4.close(() => {
            h(this);
          });
        }
      }
      shouldHandle(t3) {
        if (this.options.path) {
          const e3 = t3.url.indexOf("?");
          if ((-1 !== e3 ? t3.url.slice(0, e3) : t3.url) !== this.options.path) return false;
        }
        return true;
      }
      handleUpgrade(t3, e3, r3, n3) {
        e3.on("error", g);
        const s3 = t3.headers["sec-websocket-key"], i3 = t3.headers.upgrade, o3 = +t3.headers["sec-websocket-version"];
        if ("GET" !== t3.method) {
          return void _(this, t3, e3, 405, "Invalid HTTP method");
        }
        if (void 0 === i3 || "websocket" !== i3.toLowerCase()) {
          return void _(this, t3, e3, 400, "Invalid Upgrade header");
        }
        if (void 0 === s3 || !p.test(s3)) {
          return void _(this, t3, e3, 400, "Missing or invalid Sec-WebSocket-Key header");
        }
        if (13 !== o3 && 8 !== o3) {
          return void _(this, t3, e3, 400, "Missing or invalid Sec-WebSocket-Version header", { "Sec-WebSocket-Version": "13, 8" });
        }
        if (!this.shouldHandle(t3)) return void A(e3, 400);
        const l2 = t3.headers["sec-websocket-protocol"];
        let m2 = /* @__PURE__ */ new Set();
        if (void 0 !== l2) try {
          m2 = c.parse(l2);
        } catch (r4) {
          return void _(this, t3, e3, 400, "Invalid Sec-WebSocket-Protocol header");
        }
        const d2 = t3.headers["sec-websocket-extensions"], f2 = {};
        if (this.options.perMessageDeflate && void 0 !== d2) {
          const r4 = new u({ ...this.options.perMessageDeflate, isServer: true, maxPayload: this.options.maxPayload });
          try {
            const t4 = a.parse(d2);
            t4[u.extensionName] && (r4.accept(t4[u.extensionName]), f2[u.extensionName] = r4);
          } catch (r5) {
            return void _(this, t3, e3, 400, "Invalid or unacceptable Sec-WebSocket-Extensions header");
          }
        }
        if (this.options.verifyClient) {
          const i4 = { origin: t3.headers[8 === o3 ? "sec-websocket-origin" : "origin"], secure: !(!t3.socket.authorized && !t3.socket.encrypted), req: t3 };
          if (2 === this.options.verifyClient.length) return void this.options.verifyClient(i4, (i5, o4, a2, u2) => {
            if (!i5) return A(e3, o4 || 401, a2, u2);
            this.completeUpgrade(f2, s3, m2, t3, e3, r3, n3);
          });
          if (!this.options.verifyClient(i4)) return A(e3, 401);
        }
        this.completeUpgrade(f2, s3, m2, t3, e3, r3, n3);
      }
      completeUpgrade(t3, e3, r3, n3, s3, i3, c2) {
        if (!s3.readable || !s3.writable) return s3.destroy();
        if (s3[f]) throw new Error("server.handleUpgrade() was called more than once with the same socket, possibly due to a misconfiguration");
        if (this._state > 0) return A(s3, 503);
        const l2 = ["HTTP/1.1 101 Switching Protocols", "Upgrade: websocket", "Connection: Upgrade", `Sec-WebSocket-Accept: ${o2("sha1").update(e3 + d).digest("base64")}`], m2 = new this.options.WebSocket(null, void 0, this.options);
        if (r3.size) {
          const t4 = this.options.handleProtocols ? this.options.handleProtocols(r3, n3) : r3.values().next().value;
          t4 && (l2.push(`Sec-WebSocket-Protocol: ${t4}`), m2._protocol = t4);
        }
        if (t3[u.extensionName]) {
          const e4 = t3[u.extensionName].params, r4 = a.format({ [u.extensionName]: [e4] });
          l2.push(`Sec-WebSocket-Extensions: ${r4}`), m2._extensions = t3;
        }
        this.emit("headers", l2, n3), s3.write(l2.concat("\r\n").join("\r\n")), s3.removeListener("error", g), m2.setSocket(s3, i3, { allowSynchronousEvents: this.options.allowSynchronousEvents, maxBufferedChunks: this.options.maxBufferedChunks, maxFragments: this.options.maxFragments, maxPayload: this.options.maxPayload, skipUTF8Validation: this.options.skipUTF8Validation }), this.clients && (this.clients.add(m2), m2.on("close", () => {
          this.clients.delete(m2), this._shouldEmitClose && !this.clients.size && process.nextTick(h, this);
        })), c2(m2, n3);
      }
    };
  }