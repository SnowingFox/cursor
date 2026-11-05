// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 81208 range:10762981..10770638
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
81208: (e, t, r) => {
    "use strict";
    const n = r(24434), s = r(58611), { Duplex: o } = r(2203), { createHash: i } = r(76982), a = r(67592), c = r(31293), l = r(41403), u = r(49038), { CLOSE_TIMEOUT: d, GUID: p, kWebSocket: m } = r(78864), h = /^[+/0-9A-Za-z]{22}==$/;
    function f(e2) {
      e2._state = 2, e2.emit("close");
    }
    function g() {
      this.destroy();
    }
    function y(e2, t2, r2, n2) {
      r2 = r2 || s.STATUS_CODES[t2], n2 = { Connection: "close", "Content-Type": "text/html", "Content-Length": Buffer.byteLength(r2), ...n2 }, e2.once("finish", e2.destroy), e2.end(`HTTP/1.1 ${t2} ${s.STATUS_CODES[t2]}\r
` + Object.keys(n2).map((e3) => `${e3}: ${n2[e3]}`).join("\r\n") + "\r\n\r\n" + r2);
    }
    function w(e2, t2, r2, n2, s2, o2) {
      if (e2.listenerCount("wsClientError")) {
        const n3 = new Error(s2);
        Error.captureStackTrace(n3, w), e2.emit("wsClientError", n3, r2, t2);
      } else y(r2, n2, s2, o2);
    }
    e.exports = class extends n {
      constructor(e2, t2) {
        if (super(), null == (e2 = { allowSynchronousEvents: true, autoPong: true, maxBufferedChunks: 262144, maxFragments: 16384, maxPayload: 104857600, skipUTF8Validation: false, perMessageDeflate: false, handleProtocols: null, clientTracking: true, closeTimeout: d, verifyClient: null, noServer: false, backlog: null, server: null, host: null, path: null, port: null, WebSocket: u, ...e2 }).port && !e2.server && !e2.noServer || null != e2.port && (e2.server || e2.noServer) || e2.server && e2.noServer) throw new TypeError('One and only one of the "port", "server", or "noServer" options must be specified');
        if (null != e2.port ? (this._server = s.createServer((e3, t3) => {
          const r2 = s.STATUS_CODES[426];
          t3.writeHead(426, { "Content-Length": r2.length, "Content-Type": "text/plain" }), t3.end(r2);
        }), this._server.listen(e2.port, e2.host, e2.backlog, t2)) : e2.server && (this._server = e2.server), this._server) {
          const e3 = this.emit.bind(this, "connection");
          this._removeListeners = (function(e4, t3) {
            for (const r2 of Object.keys(t3)) e4.on(r2, t3[r2]);
            return function() {
              for (const r2 of Object.keys(t3)) e4.removeListener(r2, t3[r2]);
            };
          })(this._server, { listening: this.emit.bind(this, "listening"), error: this.emit.bind(this, "error"), upgrade: (t3, r2, n2) => {
            this.handleUpgrade(t3, r2, n2, e3);
          } });
        }
        true === e2.perMessageDeflate && (e2.perMessageDeflate = {}), e2.clientTracking && (this.clients = /* @__PURE__ */ new Set(), this._shouldEmitClose = false), this.options = e2, this._state = 0;
      }
      address() {
        if (this.options.noServer) throw new Error('The server is operating in "noServer" mode');
        return this._server ? this._server.address() : null;
      }
      close(e2) {
        if (2 === this._state) return e2 && this.once("close", () => {
          e2(new Error("The server is not running"));
        }), void process.nextTick(f, this);
        if (e2 && this.once("close", e2), 1 !== this._state) if (this._state = 1, this.options.noServer || this.options.server) this._server && (this._removeListeners(), this._removeListeners = this._server = null), this.clients && this.clients.size ? this._shouldEmitClose = true : process.nextTick(f, this);
        else {
          const e3 = this._server;
          this._removeListeners(), this._removeListeners = this._server = null, e3.close(() => {
            f(this);
          });
        }
      }
      shouldHandle(e2) {
        if (this.options.path) {
          const t2 = e2.url.indexOf("?");
          if ((-1 !== t2 ? e2.url.slice(0, t2) : e2.url) !== this.options.path) return false;
        }
        return true;
      }
      handleUpgrade(e2, t2, r2, n2) {
        t2.on("error", g);
        const s2 = e2.headers["sec-websocket-key"], o2 = e2.headers.upgrade, i2 = +e2.headers["sec-websocket-version"];
        if ("GET" !== e2.method) {
          return void w(this, e2, t2, 405, "Invalid HTTP method");
        }
        if (void 0 === o2 || "websocket" !== o2.toLowerCase()) {
          return void w(this, e2, t2, 400, "Invalid Upgrade header");
        }
        if (void 0 === s2 || !h.test(s2)) {
          return void w(this, e2, t2, 400, "Missing or invalid Sec-WebSocket-Key header");
        }
        if (13 !== i2 && 8 !== i2) {
          return void w(this, e2, t2, 400, "Missing or invalid Sec-WebSocket-Version header", { "Sec-WebSocket-Version": "13, 8" });
        }
        if (!this.shouldHandle(e2)) return void y(t2, 400);
        const u2 = e2.headers["sec-websocket-protocol"];
        let d2 = /* @__PURE__ */ new Set();
        if (void 0 !== u2) try {
          d2 = l.parse(u2);
        } catch (r3) {
          return void w(this, e2, t2, 400, "Invalid Sec-WebSocket-Protocol header");
        }
        const p2 = e2.headers["sec-websocket-extensions"], m2 = {};
        if (this.options.perMessageDeflate && void 0 !== p2) {
          const r3 = new c({ ...this.options.perMessageDeflate, isServer: true, maxPayload: this.options.maxPayload });
          try {
            const e3 = a.parse(p2);
            e3[c.extensionName] && (r3.accept(e3[c.extensionName]), m2[c.extensionName] = r3);
          } catch (r4) {
            return void w(this, e2, t2, 400, "Invalid or unacceptable Sec-WebSocket-Extensions header");
          }
        }
        if (this.options.verifyClient) {
          const o3 = { origin: e2.headers[8 === i2 ? "sec-websocket-origin" : "origin"], secure: !(!e2.socket.authorized && !e2.socket.encrypted), req: e2 };
          if (2 === this.options.verifyClient.length) return void this.options.verifyClient(o3, (o4, i3, a2, c2) => {
            if (!o4) return y(t2, i3 || 401, a2, c2);
            this.completeUpgrade(m2, s2, d2, e2, t2, r2, n2);
          });
          if (!this.options.verifyClient(o3)) return y(t2, 401);
        }
        this.completeUpgrade(m2, s2, d2, e2, t2, r2, n2);
      }
      completeUpgrade(e2, t2, r2, n2, s2, o2, l2) {
        if (!s2.readable || !s2.writable) return s2.destroy();
        if (s2[m]) throw new Error("server.handleUpgrade() was called more than once with the same socket, possibly due to a misconfiguration");
        if (this._state > 0) return y(s2, 503);
        const u2 = ["HTTP/1.1 101 Switching Protocols", "Upgrade: websocket", "Connection: Upgrade", `Sec-WebSocket-Accept: ${i("sha1").update(t2 + p).digest("base64")}`], d2 = new this.options.WebSocket(null, void 0, this.options);
        if (r2.size) {
          const e3 = this.options.handleProtocols ? this.options.handleProtocols(r2, n2) : r2.values().next().value;
          e3 && (u2.push(`Sec-WebSocket-Protocol: ${e3}`), d2._protocol = e3);
        }
        if (e2[c.extensionName]) {
          const t3 = e2[c.extensionName].params, r3 = a.format({ [c.extensionName]: [t3] });
          u2.push(`Sec-WebSocket-Extensions: ${r3}`), d2._extensions = e2;
        }
        this.emit("headers", u2, n2), s2.write(u2.concat("\r\n").join("\r\n")), s2.removeListener("error", g), d2.setSocket(s2, o2, { allowSynchronousEvents: this.options.allowSynchronousEvents, maxBufferedChunks: this.options.maxBufferedChunks, maxFragments: this.options.maxFragments, maxPayload: this.options.maxPayload, skipUTF8Validation: this.options.skipUTF8Validation }), this.clients && (this.clients.add(d2), d2.on("close", () => {
          this.clients.delete(d2), this._shouldEmitClose && !this.clients.size && process.nextTick(f, this);
        })), l2(d2, n2);
      }
    };
  }