// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 4384 range:1103067..1149270
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4384: (t2, e2, r2) => {
    "use strict";
    r2.r(e2), r2.d(e2, { Http2SessionManager: () => K, compressionBrotli: () => U, compressionGzip: () => D, connectNodeAdapter: () => Jt, createConnectTransport: () => ft, createGrpcTransport: () => mt, createGrpcWebTransport: () => nt, createNodeHttpClient: () => Y, universalRequestFromNodeRequest: () => yt, universalResponseToNodeResponse: () => wt });
    var n2 = r2(3881);
    const [s2] = process.versions.node.split(".").map((t3) => parseInt(t3, 10));
    s2 < 18 && void 0 === globalThis.Headers && (globalThis.Headers = n2.Headers);
    var i2 = r2(8032), o2 = r2(328), a = r2(6551), u = r2(1190);
    function c(t3, e3) {
      const r3 = (0, u.N)(t3);
      if (r3) throw e3.forEach((t4, e4) => {
        r3.metadata.append(e4, t4);
      }), r3;
      if (!e3.has(a.OJ) && !t3.has(a.OJ)) throw new o2.T("protocol error: missing status", i2.C.Internal);
    }
    var l = r2(1428), m = r2(3524);
    function d(t3, e3, r3, n3, s3, i3) {
      const o3 = (function(t4, e4, r4, n4) {
        const s4 = new Headers(null != r4 ? r4 : {});
        return s4.set(a.Z_, t4 ? m.y : m.q2), s4.set(l.E, "1"), s4.set(l.SY, "connect-es/1.6.1"), n4 && s4.set(a.qy, "connect-es/1.6.1"), void 0 !== e4 && s4.set(a.hR, `${e4}m`), s4;
      })(t3, e3, r3, i3);
      return null != s3 && o3.set(a.LB, s3.name), n3.length > 0 && o3.set(a.JA, n3.map((t4) => t4.name).join(",")), o3;
    }
    function f(t3) {
      switch (t3) {
        case 400:
          return i2.C.Internal;
        case 401:
          return i2.C.Unauthenticated;
        case 403:
          return i2.C.PermissionDenied;
        case 404:
          return i2.C.Unimplemented;
        case 429:
        case 502:
        case 503:
        case 504:
          return i2.C.Unavailable;
        default:
          return i2.C.Unknown;
      }
    }
    function p(t3, e3, r3) {
      const { foundStatus: n3, headerError: s3 } = (function(t4, e4) {
        var r4;
        if (t4 >= 200 && t4 < 300) return { foundStatus: e4.has(a.OJ), headerError: (0, u.N)(e4) };
        throw new o2.T(decodeURIComponent(null !== (r4 = e4.get(a.vw)) && void 0 !== r4 ? r4 : `HTTP ${t4}`), f(t4), e4);
      })(e3, r3);
      let c2;
      const l2 = r3.get(a.LB);
      if (null !== l2 && "identity" !== l2.toLowerCase() && (c2 = t3.find((t4) => t4.name === l2), !c2)) throw new o2.T(`unsupported response encoding "${l2}"`, i2.C.Internal, r3);
      return { foundStatus: n3, compression: c2, headerError: s3 };
    }
    var h = r2(6657), g = r2(8205), A = r2(7572), _ = r2(1304), y = r2(878), w = r2(3621), S = function(t3) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var e3, r3 = t3[Symbol.asyncIterator];
      return r3 ? r3.call(t3) : (t3 = "function" == typeof __values ? __values(t3) : t3[Symbol.iterator](), e3 = {}, n3("next"), n3("throw"), n3("return"), e3[Symbol.asyncIterator] = function() {
        return this;
      }, e3);
      function n3(r4) {
        e3[r4] = t3[r4] && function(e4) {
          return new Promise(function(n4, s3) {
            (function(t4, e5, r5, n5) {
              Promise.resolve(n5).then(function(e6) {
                t4({ value: e6, done: r5 });
              }, e5);
            })(n4, s3, (e4 = t3[r4](e4)).done, e4.value);
          });
        };
      }
    }, J = function(t3) {
      return this instanceof J ? (this.v = t3, this) : new J(t3);
    }, B = function(t3, e3, r3) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var n3, s3 = r3.apply(t3, e3 || []), i3 = [];
      return n3 = {}, o3("next"), o3("throw"), o3("return", function(t4) {
        return function(e4) {
          return Promise.resolve(e4).then(t4, c2);
        };
      }), n3[Symbol.asyncIterator] = function() {
        return this;
      }, n3;
      function o3(t4, e4) {
        s3[t4] && (n3[t4] = function(e5) {
          return new Promise(function(r4, n4) {
            i3.push([t4, e5, r4, n4]) > 1 || a2(t4, e5);
          });
        }, e4 && (n3[t4] = e4(n3[t4])));
      }
      function a2(t4, e4) {
        try {
          (r4 = s3[t4](e4)).value instanceof J ? Promise.resolve(r4.value.v).then(u2, c2) : l2(i3[0][2], r4);
        } catch (t5) {
          l2(i3[0][3], t5);
        }
        var r4;
      }
      function u2(t4) {
        a2("next", t4);
      }
      function c2(t4) {
        a2("throw", t4);
      }
      function l2(t4, e4) {
        t4(e4), i3.shift(), i3.length && a2(i3[0][0], i3[0][1]);
      }
    };
    var E, I = r2(278), C = r2(3106), b = r2(9023);
    function k(t3) {
      let e3 = i2.C.Internal;
      const r3 = v(t3).map(q);
      r3.some((t4) => "ERR_STREAM_WRITE_AFTER_END" == t4.code) || r3.some((t4) => "ERR_STREAM_DESTROYED" == t4.code || "ERR_HTTP2_INVALID_STREAM" == t4.code || "ECONNRESET" == t4.code) ? e3 = i2.C.Aborted : r3.some((t4) => "ETIMEDOUT" == t4.code || "ENOTFOUND" == t4.code || "EAI_AGAIN" == t4.code || "ECONNREFUSED" == t4.code) && (e3 = i2.C.Unavailable);
      const n3 = o2.T.from(t3, e3);
      return n3 !== t3 && (n3.cause = t3), n3;
    }
    function v(t3) {
      const e3 = [];
      for (; t3 instanceof Error && !e3.includes(t3) && (e3.push(t3), "cause" in t3); ) t3 = t3.cause;
      return e3;
    }
    function q(t3) {
      const e3 = {};
      return t3 instanceof Error && ("code" in t3 && "string" == typeof t3.code && (e3.code = t3.code), "syscall" in t3 && "string" == typeof t3.syscall && (e3.syscall = t3.syscall)), e3;
    }
    function R(t3) {
      switch (t3) {
        case E.PROTOCOL_ERROR:
        case E.INTERNAL_ERROR:
        case E.FLOW_CONTROL_ERROR:
        case E.SETTINGS_TIMEOUT:
        case E.FRAME_SIZE_ERROR:
        case E.COMPRESSION_ERROR:
        case E.CONNECT_ERROR:
          return new o2.T(`http/2 stream closed with error code ${E[t3]} (0x${t3.toString(16)})`, i2.C.Internal);
        case E.REFUSED_STREAM:
          return new o2.T(`http/2 stream closed with error code ${E[t3]} (0x${t3.toString(16)})`, i2.C.Unavailable);
        case E.CANCEL:
          return new o2.T(`http/2 stream closed with error code ${E[t3]} (0x${t3.toString(16)})`, i2.C.Canceled);
        case E.ENHANCE_YOUR_CALM:
          return new o2.T(`http/2 stream closed with error code ${E[t3]} (0x${t3.toString(16)})`, i2.C.ResourceExhausted);
        case E.INADEQUATE_SECURITY:
        case E.HTTP_1_1_REQUIRED:
          return new o2.T(`http/2 stream closed with error code ${E[t3]} (0x${t3.toString(16)})`, i2.C.PermissionDenied);
        case E.STREAM_CLOSED:
      }
    }
    !(function(t3) {
      t3[t3.PROTOCOL_ERROR = 1] = "PROTOCOL_ERROR", t3[t3.INTERNAL_ERROR = 2] = "INTERNAL_ERROR", t3[t3.FLOW_CONTROL_ERROR = 3] = "FLOW_CONTROL_ERROR", t3[t3.SETTINGS_TIMEOUT = 4] = "SETTINGS_TIMEOUT", t3[t3.STREAM_CLOSED = 5] = "STREAM_CLOSED", t3[t3.FRAME_SIZE_ERROR = 6] = "FRAME_SIZE_ERROR", t3[t3.REFUSED_STREAM = 7] = "REFUSED_STREAM", t3[t3.CANCEL = 8] = "CANCEL", t3[t3.COMPRESSION_ERROR = 9] = "COMPRESSION_ERROR", t3[t3.CONNECT_ERROR = 10] = "CONNECT_ERROR", t3[t3.ENHANCE_YOUR_CALM = 11] = "ENHANCE_YOUR_CALM", t3[t3.INADEQUATE_SECURITY = 12] = "INADEQUATE_SECURITY", t3[t3.HTTP_1_1_REQUIRED = 13] = "HTTP_1_1_REQUIRED";
    })(E || (E = {}));
    const P = (0, b.promisify)(C.gzip), T = (0, b.promisify)(C.gunzip), x = (0, b.promisify)(C.brotliCompress), N = (0, b.promisify)(C.brotliDecompress), D = { name: "gzip", compress: (t3) => P(t3, {}), decompress: (t3, e3) => 0 == t3.length ? Promise.resolve(new Uint8Array(0)) : Q(T(t3, { maxOutputLength: e3 }), e3) }, U = { name: "br", compress: (t3) => x(t3, {}), decompress: (t3, e3) => 0 == t3.length ? Promise.resolve(new Uint8Array(0)) : Q(N(t3, { maxOutputLength: e3 }), e3) };
    function Q(t3, e3) {
      return t3.catch((t4) => {
        const r3 = q(t4);
        let n3 = i2.C.Internal, s3 = "decompression failed";
        switch (r3.code) {
          case "ERR_BUFFER_TOO_LARGE":
            n3 = i2.C.ResourceExhausted, s3 = `message is larger than configured readMaxBytes ${e3} after decompression`;
            break;
          case "Z_DATA_ERROR":
          case "ERR_PADDING_2":
            n3 = i2.C.InvalidArgument;
            break;
          default:
            void 0 !== r3.code && r3.code.startsWith("ERR__ERROR_FORMAT_") && (n3 = i2.C.InvalidArgument);
        }
        return Promise.reject(new o2.T(s3, n3, void 0, void 0, t4));
      });
    }
    var M = r2(5675), O = r2(8611), F = r2(5692);
    function L(t3) {
      const e3 = new Headers();
      for (const [r3, n3] of Object.entries(t3)) if (!r3.startsWith(":") && void 0 !== n3) if ("string" == typeof n3) e3.append(r3, n3);
      else if ("number" == typeof n3) e3.append(r3, String(n3));
      else for (const t4 of n3) e3.append(r3, t4);
      return e3;
    }
    function $(t3, e3) {
      if (void 0 === t3 && void 0 === e3) return;
      const r3 = /* @__PURE__ */ Object.create(null);
      if (void 0 !== e3) for (const [t4, n3] of Object.entries(e3)) Array.isArray(n3) ? r3[t4] = n3.concat() : void 0 !== n3 && (r3[t4] = n3);
      if (void 0 !== t3) if (Array.isArray(t3)) for (const [e4, n3] of t3) G(r3, e4, n3);
      else if ("forEach" in t3) "function" == typeof t3.forEach && t3.forEach((t4, e4) => {
        G(r3, e4, t4);
      });
      else for (const [e4, n3] of Object.entries(t3)) G(r3, e4, n3);
      return r3;
    }
    function G(t3, e3, r3) {
      const n3 = t3[e3 = e3.toLowerCase()];
      Array.isArray(n3) ? n3.push(r3) : t3[e3] = void 0 === n3 ? r3 : [n3.toString(), r3];
    }
    var H = r2(9983);
    class K {
      state() {
        return "ready" == this.s.t ? void 0 !== this.verifying ? "verifying" : this.s.streamCount() > 0 ? "open" : "idle" : this.s.t;
      }
      error() {
        if ("error" == this.s.t) return this.s.reason;
      }
      constructor(t3, e3, r3) {
        var n3, s3, i3, o3;
        this.s = { t: "closed" }, this.shuttingDown = [], this.authority = new URL(t3).origin, this.http2SessionOptions = r3, this.options = { pingIntervalMs: null !== (n3 = null == e3 ? void 0 : e3.pingIntervalMs) && void 0 !== n3 ? n3 : Number.POSITIVE_INFINITY, pingTimeoutMs: null !== (s3 = null == e3 ? void 0 : e3.pingTimeoutMs) && void 0 !== s3 ? s3 : 15e3, pingIdleConnection: null !== (i3 = null == e3 ? void 0 : e3.pingIdleConnection) && void 0 !== i3 && i3, idleConnectionTimeoutMs: null !== (o3 = null == e3 ? void 0 : e3.idleConnectionTimeoutMs) && void 0 !== o3 ? o3 : 9e5 };
      }
      async connect() {
        try {
          return (await this.gotoReady()).streamCount() > 0 ? "open" : "idle";
        } catch (t3) {
          return "error";
        }
      }
      async request(t3, e3, r3, n3) {
        for (; ; ) {
          const s3 = await this.gotoReady();
          try {
            const i3 = s3.conn.request(Object.assign(Object.assign({}, r3), { ":method": t3, ":path": e3 }), n3);
            return s3.registerRequest(i3), i3;
          } catch (t4) {
            if (s3.conn.closed || s3.conn.destroyed) continue;
            throw t4;
          }
        }
      }
      notifyResponseByteRead(t3) {
        "ready" == this.s.t && this.s.responseByteRead(t3);
        for (const e3 of this.shuttingDown) e3.responseByteRead(t3);
      }
      abort(t3) {
        var e3, r3, n3;
        const s3 = null != t3 ? t3 : new o2.T("connection aborted", i2.C.Canceled);
        null === (r3 = (e3 = this.s).abort) || void 0 === r3 || r3.call(e3, s3);
        for (const t4 of this.shuttingDown) null === (n3 = t4.abort) || void 0 === n3 || n3.call(t4, s3);
        this.setState(V(s3));
      }
      abortCurrent(t3) {
        var e3, r3;
        const n3 = this.s;
        if ("ready" === n3.t && n3.isShuttingDown()) return;
        const s3 = null != t3 ? t3 : new o2.T("connection aborted", i2.C.Canceled);
        null === (r3 = (e3 = n3).abort) || void 0 === r3 || r3.call(e3, s3);
      }
      captureSessions() {
        const t3 = [];
        "function" == typeof this.s.abort && t3.push(this.s);
        for (const e3 of this.shuttingDown) -1 === t3.indexOf(e3) && t3.push(e3);
        return t3;
      }
      async gotoReady() {
        var t3;
        for ("ready" == this.s.t ? this.s.isShuttingDown() || this.s.conn.closed || this.s.conn.destroyed ? this.setState(z(this.authority, this.http2SessionOptions)) : this.s.requiresVerify() && await this.verify(this.s) : "closed" != this.s.t && "error" != this.s.t || this.setState(z(this.authority, this.http2SessionOptions)); "ready" !== this.s.t; ) {
          if ("error" === this.s.t) throw this.s.reason;
          if ("unavailable" === this.s.t) throw new o2.T("expected h2 session, but ALPN protocol failed to negotiate", i2.C.Unavailable, { authority: this.authority, issuer: null !== (t3 = this.s.issuer) && void 0 !== t3 ? t3 : "unknown" });
          "connecting" === this.s.t && await this.s.conn;
        }
        return this.s;
      }
      setState(t3) {
        var e3, r3;
        if (null === (r3 = (e3 = this.s).onExitState) || void 0 === r3 || r3.call(e3), "ready" == this.s.t && this.s.isShuttingDown()) {
          const t4 = this.s;
          this.shuttingDown.push(t4), t4.onClose = t4.onError = () => {
            const e4 = this.shuttingDown.indexOf(t4);
            -1 !== e4 && this.shuttingDown.splice(e4, 1);
          };
        }
        switch (t3.t) {
          case "connecting":
            t3.conn.then((t4) => {
              this.setState((function(t5, e4) {
                var r4, n3;
                if ((function(t6) {
                  if (t6.connecting) throw new o2.T("expected open session, but it is connecting", i2.C.Internal);
                  if (t6.destroyed) throw new o2.T("expected open session, but it is destroyed", i2.C.Internal);
                  if (t6.closed) throw new o2.T("expected open session, but it is closed", i2.C.Internal);
                })(t5), true === t5.encrypted && "h2" !== t5.alpnProtocol) {
                  var s3 = t5.socket, a2 = null == s3 ? void 0 : s3.getPeerCertificate, u2 = "function" == typeof a2 ? null === (n3 = null === (r4 = a2.call(s3)) || void 0 === r4 ? void 0 : r4.issuer) || void 0 === n3 ? void 0 : n3.CN : void 0;
                  return t5.destroyed || t5.destroy(), { t: "unavailable", issuer: u2 };
                }
                t5.unref();
                let c2, l2, m2, d2 = Date.now(), f2 = 0, p2 = false, h2 = false;
                J2();
                const g2 = { t: "ready", conn: t5, streamCount: () => f2, requiresVerify: () => Date.now() - d2 > e4.pingIntervalMs, isShuttingDown: () => p2, onClose: void 0, onError: void 0, registerRequest(e5) {
                  f2++, 1 == f2 && (t5.ref(), A2(), S2()), e5.once("response", () => {
                    d2 = Date.now(), A2();
                  }), e5.once("close", () => {
                    f2--, 0 == f2 && (t5.unref(), A2(), J2());
                  });
                }, responseByteRead(e5) {
                  e5.session === t5 && (t5.closed || t5.destroyed || f2 <= 0 || (d2 = Date.now(), A2()));
                }, verify: () => (t5.ref(), new Promise((r5) => {
                  let n4 = false;
                  const s4 = (e5) => {
                    n4 || (n4 = true, clearTimeout(u3), t5.off("error", a3), t5.off("close", a3), e5 && 0 == f2 && t5.unref(), r5(e5));
                  }, a3 = () => s4(false);
                  t5.on("error", a3), t5.on("close", a3);
                  const u3 = W(() => {
                    g2.abort(new o2.T("PING timed out", i2.C.Unavailable)), s4(false);
                  }, e4.pingTimeoutMs);
                  w2(() => s4(true));
                })), abort(e5) {
                  t5.destroyed || (t5.once("error", () => {
                  }), t5.destroy(e5, M.constants.NGHTTP2_CANCEL));
                }, onExitState() {
                  g2.isShuttingDown() || (b2(), this.onError = void 0, this.onClose = void 0);
                } };
                function A2() {
                  _2(), (f2 > 0 || e4.pingIdleConnection) && (c2 = W(y2, e4.pingIntervalMs));
                }
                function _2() {
                  clearTimeout(c2), clearTimeout(l2);
                }
                function y2() {
                  w2(A2);
                }
                function w2(r5) {
                  clearTimeout(l2), l2 = W(() => {
                    t5.destroy(new o2.T("PING timed out", i2.C.Unavailable), M.constants.NGHTTP2_CANCEL);
                  }, e4.pingTimeoutMs), t5.ping((n4, s4) => {
                    clearTimeout(l2), null === n4 && (s4 > e4.pingTimeoutMs ? t5.destroy(new o2.T("PING timed out", i2.C.Unavailable), M.constants.NGHTTP2_CANCEL) : (d2 = Date.now(), r5()));
                  });
                }
                function S2() {
                  clearTimeout(m2);
                }
                function J2() {
                  m2 = W(B2, e4.idleConnectionTimeoutMs);
                }
                function B2() {
                  t5.close(), I2();
                }
                function E2(r5, n4, s4) {
                  p2 = true;
                  const a3 = Buffer.from("too_many_pings", "ascii");
                  if (r5 === M.constants.NGHTTP2_ENHANCE_YOUR_CALM && null != s4 && s4.equals(a3) && (e4.pingIntervalMs = 2 * e4.pingIntervalMs, h2 = true), r5 === M.constants.NGHTTP2_NO_ERROR) {
                    const e5 = parseInt(process.versions.node.split(".")[0], 10);
                    0 == f2 && e5 >= 18 && t5.destroy(new o2.T("received GOAWAY without any open streams", i2.C.Canceled), M.constants.NGHTTP2_NO_ERROR);
                  }
                }
                function I2() {
                  var t6;
                  b2(), null === (t6 = g2.onClose) || void 0 === t6 || t6.call(g2);
                }
                function C2(t6) {
                  var e5, r5;
                  if (b2(), h2) {
                    const t7 = new o2.T(`http/2 connection closed with error code ENHANCE_YOUR_CALM (0x${M.constants.NGHTTP2_ENHANCE_YOUR_CALM.toString(16)}), too_many_pings, doubled the interval`, i2.C.ResourceExhausted);
                    null === (e5 = g2.onError) || void 0 === e5 || e5.call(g2, t7);
                  } else null === (r5 = g2.onError) || void 0 === r5 || r5.call(g2, k(t6));
                }
                function b2() {
                  _2(), S2(), t5.off("error", C2), t5.off("close", I2), t5.off("goaway", E2);
                }
                return t5.on("error", C2), t5.on("close", I2), t5.on("goaway", E2), g2;
              })(t4, this.options));
            }, (t4) => {
              this.setState(V(t4));
            });
            break;
          case "ready":
            t3.onClose = () => this.setState({ t: "closed" }), t3.onError = (t4) => this.setState(V(t4));
        }
        this.s = t3;
      }
      verify(t3) {
        return void 0 !== this.verifying || (this.verifying = t3.verify().then((t4) => {
          t4 || this.setState(z(this.authority, this.http2SessionOptions));
        }, (t4) => {
          this.setState(V(t4));
        }).finally(() => {
          this.verifying = void 0;
        })), this.verifying;
      }
    }
    function V(t3) {
      return t3 instanceof o2.T && o2.T.from(t3).code == i2.C.Canceled ? { t: "closed" } : /* @__PURE__ */ (function(t4) {
        return { t: "error", reason: t4 };
      })(t3);
    }
    function z(t3, e3) {
      let r3, n3;
      const s3 = new Promise((t4, e4) => {
        r3 = t4, n3 = e4;
      }), i3 = M.connect(t3, e3);
      function o3() {
        null == r3 || r3(i3), u2();
      }
      function a2(t4) {
        null == n3 || n3(k(t4)), u2();
      }
      function u2() {
        i3.off("connect", o3), i3.off("error", a2);
      }
      return i3.on("connect", o3), i3.on("error", a2), { t: "connecting", conn: s3, abort(t4) {
        i3.destroyed || i3.destroy(void 0, M.constants.NGHTTP2_CANCEL), null == n3 || n3(t4);
      }, onExitState() {
        u2();
      } };
    }
    function W(t3, e3) {
      if (!(e3 > 2147483647)) return setTimeout(t3, e3).unref();
    }
    function Y(t3) {
      var e3, r3;
      if ("1.1" == t3.httpVersion) return r3 = t3.nodeOptions, async function(t4) {
        const e4 = et(t4.signal);
        return new Promise((n3, s3) => {
          e4.catch((t5) => {
            s3(t5);
          }), (function(t5, e5, r4, n4) {
            let s4;
            s4 = new URL(e5).protocol.startsWith("https") ? F.request(e5, r4) : O.request(e5, r4), t5.catch((t6) => s4.destroy(k(t6))), s4.flushHeaders(), s4.on("error", t5.reject), s4.on("socket", function(t6) {
              function e6() {
                t6.off("connect", e6), n4(s4);
              }
              "open" === t6.readyState ? n4(s4) : t6.on("connect", e6);
            });
          })(e4, t4.url, Object.assign(Object.assign({}, r3), { headers: $(t4.header, null == r3 ? void 0 : r3.headers), method: t4.method }), (r4) => {
            tt(t4, r4, e4), r4.on("response", (t5) => {
              var r5;
              t5.on("error", e4.reject), e4.catch((e5) => t5.destroy(k(e5)));
              const s4 = new Headers();
              n3({ status: null !== (r5 = t5.statusCode) && void 0 !== r5 ? r5 : 0, header: L(t5.headers), body: j(e4, t5, s4), trailer: s4 });
            });
          });
        });
      };
      return /* @__PURE__ */ (function(t4) {
        return function(e4) {
          const r4 = et(e4.signal), n3 = t4(e4.url);
          return new Promise((t5, s3) => {
            r4.catch((t6) => {
              s3(t6);
            }), (function(t6, e5, r5, n4, s4, a2, u2) {
              const c2 = new URL(r5);
              if (c2.origin !== e5.authority) {
                const r6 = `cannot make a request to ${c2.origin}: the http2 session is connected to ${e5.authority}`;
                return void t6.reject(new o2.T(r6, i2.C.Internal));
              }
              e5.request(n4, c2.pathname + c2.search, s4, {}).then((e6) => {
                t6.catch((t7) => {
                  if (e6.closed) return;
                  const r6 = t7 instanceof o2.T && t7.code == i2.C.Canceled ? E.CANCEL : E.INTERNAL_ERROR;
                  return new Promise((t8) => e6.close(r6, t8));
                }), e6.on("error", function(r6) {
                  e6.writableEnded && v(r6).map(q).some((t7) => "ERR_STREAM_WRITE_AFTER_END" == t7.code) || t6.reject(r6);
                }), e6.on("close", function() {
                  const r6 = R(e6.rstCode);
                  r6 && t6.reject(r6);
                }), u2(e6);
              }, (e6) => {
                t6.reject(e6);
              });
            })(r4, n3, e4.url, e4.method, $(e4.header), 0, (s4) => {
              tt(e4, s4, r4), s4.on("response", (e5) => {
                var i3;
                const o3 = { status: null !== (i3 = e5[":status"]) && void 0 !== i3 ? i3 : 0, header: L(e5), body: Z(r4, s4, n3), trailer: X(s4) };
                t5(o3);
              });
            });
          });
        };
      })(null !== (e3 = t3.sessionProvider) && void 0 !== e3 ? e3 : (t4) => new K(t4));
    }
    function j(t3, e3, r3) {
      const n3 = e3[Symbol.asyncIterator]();
      return { [Symbol.asyncIterator]: () => ({ async next() {
        const s3 = await t3.race(n3.next());
        return true === s3.done && (L(e3.trailers).forEach((t4, e4) => {
          r3.set(e4, t4);
        }), t3.resolve(), await t3), s3;
      }, throw(e4) {
        throw t3.reject(e4), e4;
      } }) };
    }
    function X(t3) {
      const e3 = new Headers();
      return t3.on("trailers", (t4) => {
        L(t4).forEach((t5, r3) => {
          e3.set(r3, t5);
        });
      }), e3;
    }
    function Z(t3, e3, r3) {
      const n3 = e3[Symbol.asyncIterator]();
      return { [Symbol.asyncIterator]: () => ({ async next() {
        const s3 = await t3.race(n3.next());
        return true === s3.done && (t3.resolve(), await t3), null == r3 || r3.notifyResponseByteRead(e3), s3;
      }, throw(e4) {
        throw t3.reject(e4), e4;
      } }) };
    }
    async function tt(t3, e3, r3) {
      if (void 0 === t3.body) return void await new Promise((t4) => e3.end(t4));
      const n3 = t3.body[Symbol.asyncIterator]();
      return new Promise((t4) => {
        !(function s3() {
          if (r3.isRejected()) return;
          n3.next().then((i3) => {
            true !== i3.done ? e3.write(i3.value, "binary", function(t5) {
              null != t5 ? (void 0 !== n3.throw && n3.throw(k(t5)).catch(() => {
              }), e3.writableEnded && v(t5).map(q).some((t6) => "ERR_STREAM_WRITE_AFTER_END" == t6.code) || r3.reject(t5)) : s3();
            }) : e3.end(t4);
          }, (t5) => {
            r3.reject(t5);
          });
        })();
      });
    }
    function et(t3) {
      let e3, r3, n3 = false, s3 = false;
      const a2 = new Promise((t4, n4) => {
        e3 = t4, r3 = n4;
      }), u2 = { resolve() {
        n3 || s3 || (n3 = true, null == e3 || e3());
      }, isResolved: () => n3, reject(t4) {
        n3 || s3 || (s3 = true, null == r3 || r3(k(t4)));
      }, isRejected: () => s3, async race(t4) {
        const e4 = await Promise.race([t4, a2]);
        if (void 0 === e4 && n3) throw new o2.T("sentinel completed early", i2.C.Internal);
        return e4;
      } }, c2 = Object.assign(a2, u2);
      function l2() {
        u2.reject((0, H.xz)(this));
      }
      return t3 && (t3.aborted ? u2.reject((0, H.xz)(t3)) : t3.addEventListener("abort", l2), a2.finally(() => t3.removeEventListener("abort", l2)).catch(() => {
      })), c2;
    }
    function rt(t3) {
      var e3, r3, n3, s3;
      let i3;
      if ("2" == t3.httpVersion) {
        let e4;
        e4 = t3.sessionManager ? t3.sessionManager : new K(t3.baseUrl, { pingIntervalMs: t3.pingIntervalMs, pingIdleConnection: t3.pingIdleConnection, pingTimeoutMs: t3.pingTimeoutMs, idleConnectionTimeoutMs: t3.idleConnectionTimeoutMs }, t3.nodeOptions), i3 = Y({ httpVersion: "2", sessionProvider: () => e4 });
      } else i3 = Y({ httpVersion: "1.1", nodeOptions: t3.nodeOptions });
      return Object.assign(Object.assign(Object.assign({}, t3), { httpClient: i3, useBinaryFormat: null === (e3 = t3.useBinaryFormat) || void 0 === e3 || e3, interceptors: null !== (r3 = t3.interceptors) && void 0 !== r3 ? r3 : [], sendCompression: null !== (n3 = t3.sendCompression) && void 0 !== n3 ? n3 : null, acceptCompression: null !== (s3 = t3.acceptCompression) && void 0 !== s3 ? s3 : [D, U] }), (0, I.NL)(t3.readMaxBytes, t3.writeMaxBytes, t3.compressMinBytes));
    }
    function nt(t3) {
      return e3 = rt(t3), { async unary(t4, r3, n3, s3, u2, l2, m2) {
        const f2 = (0, y.Qg)(r3, e3.binaryOptions, e3.jsonOptions, e3);
        return s3 = void 0 === s3 ? e3.defaultTimeoutMs : s3 <= 0 ? void 0 : s3, await (0, _.L)({ interceptors: e3.interceptors, signal: n3, timeoutMs: s3, req: { stream: false, service: t4, method: r3, url: (0, A.j)(e3.baseUrl, t4, r3), init: {}, header: d(e3.useBinaryFormat, s3, u2, e3.acceptCompression, e3.sendCompression, true), contextValues: null != m2 ? m2 : (0, w.k)(), message: l2 }, next: async (n4) => {
          const s4 = await e3.httpClient({ url: n4.url, method: "POST", header: n4.header, signal: n4.signal, body: (0, g.Fs)((0, g.T$)([n4.message]), (0, g.XO)(f2.getI(e3.useBinaryFormat)), (0, g.fM)(e3.sendCompression, e3.compressMinBytes), (0, g.yQ)(), { propagateDownStreamError: true }) }), { compression: u3, headerError: l3 } = p(e3.acceptCompression, s4.status, s4.header), { trailer: m3, message: d2 } = await (0, g.WK)(s4.body, (0, g.pY)(e3.readMaxBytes), (0, g.ew)(null != u3 ? u3 : null, e3.readMaxBytes), (0, g.uv)(f2.getO(e3.useBinaryFormat), h.oK, (0, h.A7)()), async (t5) => {
            var e4, r4, n5, s5;
            let a2, u4;
            try {
              for (var c2, l4 = true, m4 = S(t5); !(e4 = (c2 = await m4.next()).done); l4 = true) {
                s5 = c2.value, l4 = false;
                const t6 = s5;
                if (t6.end) {
                  if (void 0 !== u4) throw new o2.T("protocol error: received extra trailer", i2.C.Unimplemented);
                  u4 = t6.value;
                } else {
                  if (void 0 !== a2) throw new o2.T("protocol error: received extra output message for unary method", i2.C.Unimplemented);
                  a2 = t6.value;
                }
              }
            } catch (t6) {
              r4 = { error: t6 };
            } finally {
              try {
                l4 || e4 || !(n5 = m4.return) || await n5.call(m4);
              } finally {
                if (r4) throw r4.error;
              }
            }
            return { trailer: u4, message: a2 };
          }, { propagateDownStreamError: false });
          if (void 0 === m3) {
            if (null != l3) throw l3;
            throw new o2.T("protocol error: missing trailer", s4.header.has(a.OJ) ? i2.C.Unimplemented : i2.C.Unknown);
          }
          if (c(m3, s4.header), void 0 === d2) throw new o2.T("protocol error: missing output message for unary method", m3.has(a.OJ) ? i2.C.Unimplemented : i2.C.Unknown);
          return { stream: false, service: t4, method: r3, header: s4.header, message: d2, trailer: m3 };
        } });
      }, async stream(t4, r3, n3, s3, a2, u2, l2) {
        const m2 = (0, y.Qg)(r3, e3.binaryOptions, e3.jsonOptions, e3);
        return s3 = void 0 === s3 ? e3.defaultTimeoutMs : s3 <= 0 ? void 0 : s3, (0, _.u)({ interceptors: e3.interceptors, signal: n3, timeoutMs: s3, req: { stream: true, service: t4, method: r3, url: (0, A.j)(e3.baseUrl, t4, r3), init: { method: "POST", redirect: "error", mode: "cors" }, header: d(e3.useBinaryFormat, s3, a2, e3.acceptCompression, e3.sendCompression, true), contextValues: null != l2 ? l2 : (0, w.k)(), message: u2 }, next: async (t5) => {
          const r4 = await e3.httpClient({ url: t5.url, method: "POST", header: t5.header, signal: t5.signal, body: (0, g.Fs)(t5.message, (0, g.XO)(m2.getI(e3.useBinaryFormat)), (0, g.fM)(e3.sendCompression, e3.compressMinBytes), (0, g.yQ)(), { propagateDownStreamError: true }) }), { compression: n4, foundStatus: s4, headerError: a3 } = p(e3.acceptCompression, r4.status, r4.header);
          if (a3) throw a3;
          const u3 = Object.assign(Object.assign({}, t5), { header: r4.header, trailer: new Headers(), message: (0, g.Fs)(r4.body, (0, g.pY)(e3.readMaxBytes), (0, g.ew)(null != n4 ? n4 : null, e3.readMaxBytes), (0, g.uv)(m2.getO(e3.useBinaryFormat), h.oK, (0, h.A7)()), function(t6) {
            return B(this, arguments, function* () {
              var e4, n5, a4, l3;
              if (s4) {
                if (true !== (yield J(t6[Symbol.asyncIterator]().next())).done) throw new o2.T("protocol error: extra data for trailers-only", i2.C.InvalidArgument);
                return yield J(void 0);
              }
              let m3 = false;
              try {
                for (var d2, f2 = true, p2 = S(t6); !(e4 = (d2 = yield J(p2.next())).done); f2 = true) {
                  l3 = d2.value, f2 = false;
                  const t7 = l3;
                  if (t7.end) {
                    if (m3) throw new o2.T("protocol error: received extra trailer", i2.C.InvalidArgument);
                    m3 = true, c(t7.value, r4.header), t7.value.forEach((t8, e5) => u3.trailer.set(e5, t8));
                  } else {
                    if (m3) throw new o2.T("protocol error: received extra message after trailer", i2.C.InvalidArgument);
                    yield yield J(t7.value);
                  }
                }
              } catch (t7) {
                n5 = { error: t7 };
              } finally {
                try {
                  f2 || e4 || !(a4 = p2.return) || (yield J(a4.call(p2)));
                } finally {
                  if (n5) throw n5.error;
                }
              }
              if (!m3) throw new o2.T("protocol error: missing trailer", i2.C.Internal);
            });
          }, { propagateDownStreamError: true }) });
          return u3;
        } });
      } };
      var e3;
    }
    var st = r2(6125);
    function it(t3, e3, r3, n3, s3) {
      const i3 = (function(t4, e4, r4) {
        const n4 = new Headers(null != r4 ? r4 : {});
        return n4.set(a.Z_, t4 ? st.y : st.q2), n4.set(a.qy, "connect-es/1.6.1"), void 0 !== e4 && n4.set(a.hR, `${e4}m`), n4.set("Te", "trailers"), n4;
      })(t3, e3, r3);
      return null != s3 && i3.set(a.LB, s3.name), n3.length > 0 && i3.set(a.JA, n3.map((t4) => t4.name).join(",")), i3;
    }
    function ot(t3, e3, r3) {
      const { foundStatus: n3, headerError: s3 } = (function(t4, e4) {
        if (200 != t4) throw new o2.T(`HTTP ${t4}`, f(t4), e4);
        const r4 = e4.get(a.Z_);
        if (null == (0, st.xk)(r4)) throw new o2.T(`unsupported content type ${r4}`, i2.C.Unknown);
        return { foundStatus: e4.has(a.OJ), headerError: (0, u.N)(e4) };
      })(e3, r3);
      let c2;
      const l2 = r3.get(a.LB);
      if (null !== l2 && "identity" !== l2.toLowerCase() && (c2 = t3.find((t4) => t4.name === l2), !c2)) throw new o2.T(`unsupported response encoding "${l2}"`, i2.C.Internal, r3);
      return { foundStatus: n3, compression: c2, headerError: s3 };
    }
    var at = function(t3) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var e3, r3 = t3[Symbol.asyncIterator];
      return r3 ? r3.call(t3) : (t3 = "function" == typeof __values ? __values(t3) : t3[Symbol.iterator](), e3 = {}, n3("next"), n3("throw"), n3("return"), e3[Symbol.asyncIterator] = function() {
        return this;
      }, e3);
      function n3(r4) {
        e3[r4] = t3[r4] && function(e4) {
          return new Promise(function(n4, s3) {
            (function(t4, e5, r5, n5) {
              Promise.resolve(n5).then(function(e6) {
                t4({ value: e6, done: r5 });
              }, e5);
            })(n4, s3, (e4 = t3[r4](e4)).done, e4.value);
          });
        };
      }
    }, ut = function(t3) {
      return this instanceof ut ? (this.v = t3, this) : new ut(t3);
    }, ct = function(t3) {
      var e3, r3;
      return e3 = {}, n3("next"), n3("throw", function(t4) {
        throw t4;
      }), n3("return"), e3[Symbol.iterator] = function() {
        return this;
      }, e3;
      function n3(n4, s3) {
        e3[n4] = t3[n4] ? function(e4) {
          return (r3 = !r3) ? { value: ut(t3[n4](e4)), done: false } : s3 ? s3(e4) : e4;
        } : s3;
      }
    }, lt = function(t3, e3, r3) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var n3, s3 = r3.apply(t3, e3 || []), i3 = [];
      return n3 = {}, o3("next"), o3("throw"), o3("return", function(t4) {
        return function(e4) {
          return Promise.resolve(e4).then(t4, c2);
        };
      }), n3[Symbol.asyncIterator] = function() {
        return this;
      }, n3;
      function o3(t4, e4) {
        s3[t4] && (n3[t4] = function(e5) {
          return new Promise(function(r4, n4) {
            i3.push([t4, e5, r4, n4]) > 1 || a2(t4, e5);
          });
        }, e4 && (n3[t4] = e4(n3[t4])));
      }
      function a2(t4, e4) {
        try {
          (r4 = s3[t4](e4)).value instanceof ut ? Promise.resolve(r4.value.v).then(u2, c2) : l2(i3[0][2], r4);
        } catch (t5) {
          l2(i3[0][3], t5);
        }
        var r4;
      }
      function u2(t4) {
        a2("next", t4);
      }
      function c2(t4) {
        a2("throw", t4);
      }
      function l2(t4, e4) {
        t4(e4), i3.shift(), i3.length && a2(i3[0][0], i3[0][1]);
      }
    };
    function mt(t3) {
      return e3 = rt(t3), { async unary(t4, r3, n3, s3, u2, l2, m2) {
        const d2 = (0, y.Qg)(r3, e3.binaryOptions, e3.jsonOptions, e3);
        return s3 = void 0 === s3 ? e3.defaultTimeoutMs : s3 <= 0 ? void 0 : s3, await (0, _.L)({ interceptors: e3.interceptors, signal: n3, timeoutMs: s3, req: { stream: false, service: t4, method: r3, url: (0, A.j)(e3.baseUrl, t4, r3), init: {}, header: it(e3.useBinaryFormat, s3, u2, e3.acceptCompression, e3.sendCompression), contextValues: null != m2 ? m2 : (0, w.k)(), message: l2 }, next: async (n4) => {
          const s4 = await e3.httpClient({ url: n4.url, method: "POST", header: n4.header, signal: n4.signal, body: (0, g.Fs)((0, g.T$)([n4.message]), (0, g.XO)(d2.getI(e3.useBinaryFormat)), (0, g.fM)(e3.sendCompression, e3.compressMinBytes), (0, g.yQ)(), { propagateDownStreamError: true }) }), { compression: u3, headerError: l3 } = ot(e3.acceptCompression, s4.status, s4.header), m3 = await (0, g.WK)(s4.body, (0, g.pY)(e3.readMaxBytes), (0, g.ew)(null != u3 ? u3 : null, e3.readMaxBytes), (0, g.uv)(d2.getO(e3.useBinaryFormat)), async (t5) => {
            var e4, r4, n5, s5;
            let a2;
            try {
              for (var u4, c2 = true, l4 = at(t5); !(e4 = (u4 = await l4.next()).done); c2 = true) {
                s5 = u4.value, c2 = false;
                const t6 = s5;
                if (void 0 !== a2) throw new o2.T("protocol error: received extra output message for unary method", i2.C.Unimplemented);
                a2 = t6;
              }
            } catch (t6) {
              r4 = { error: t6 };
            } finally {
              try {
                c2 || e4 || !(n5 = l4.return) || await n5.call(l4);
              } finally {
                if (r4) throw r4.error;
              }
            }
            return a2;
          }, { propagateDownStreamError: false });
          if (c(s4.trailer, s4.header), void 0 === m3) {
            if (l3) throw l3;
            throw new o2.T("protocol error: missing output message for unary method", s4.trailer.has(a.OJ) ? i2.C.Unimplemented : i2.C.Unknown);
          }
          if (l3) throw new o2.T("protocol error: received output message for unary method with error status", i2.C.Unknown);
          return { stream: false, service: t4, method: r3, header: s4.header, message: m3, trailer: s4.trailer };
        } });
      }, async stream(t4, r3, n3, s3, i3, o3, a2) {
        const u2 = (0, y.Qg)(r3, e3.binaryOptions, e3.jsonOptions, e3);
        return s3 = void 0 === s3 ? e3.defaultTimeoutMs : s3 <= 0 ? void 0 : s3, (0, _.u)({ interceptors: e3.interceptors, signal: n3, timeoutMs: s3, req: { stream: true, service: t4, method: r3, url: (0, A.j)(e3.baseUrl, t4, r3), init: {}, header: it(e3.useBinaryFormat, s3, i3, e3.acceptCompression, e3.sendCompression), contextValues: null != a2 ? a2 : (0, w.k)(), message: o3 }, next: async (t5) => {
          const r4 = await e3.httpClient({ url: t5.url, method: "POST", header: t5.header, signal: t5.signal, body: (0, g.Fs)(t5.message, (0, g.XO)(u2.getI(e3.useBinaryFormat)), (0, g.fM)(e3.sendCompression, e3.compressMinBytes), (0, g.yQ)(), { propagateDownStreamError: true }) }), { compression: n4, foundStatus: s4, headerError: i4 } = ot(e3.acceptCompression, r4.status, r4.header);
          if (i4) throw i4;
          const o4 = Object.assign(Object.assign({}, t5), { header: r4.header, trailer: r4.trailer, message: (0, g.Fs)(r4.body, (0, g.pY)(e3.readMaxBytes), (0, g.ew)(null != n4 ? n4 : null, e3.readMaxBytes), (0, g.uv)(u2.getO(e3.useBinaryFormat)), function(t6) {
            return lt(this, arguments, function* () {
              yield ut(yield* ct(at(t6))), s4 || c(r4.trailer, r4.header);
            });
          }, { propagateDownStreamError: true }) });
          return o4;
        } });
      } };
      var e3;
    }
    var dt = r2(1303);
    function ft(t3) {
      return (0, dt.o)(rt(t3));
    }
    var pt = r2(1992), ht = r2(2083), gt = function(t3) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var e3, r3 = t3[Symbol.asyncIterator];
      return r3 ? r3.call(t3) : (t3 = "function" == typeof __values ? __values(t3) : t3[Symbol.iterator](), e3 = {}, n3("next"), n3("throw"), n3("return"), e3[Symbol.asyncIterator] = function() {
        return this;
      }, e3);
      function n3(r4) {
        e3[r4] = t3[r4] && function(e4) {
          return new Promise(function(n4, s3) {
            (function(t4, e5, r5, n5) {
              Promise.resolve(n5).then(function(e6) {
                t4({ value: e6, done: r5 });
              }, e5);
            })(n4, s3, (e4 = t3[r4](e4)).done, e4.value);
          });
        };
      }
    }, At = function(t3) {
      return this instanceof At ? (this.v = t3, this) : new At(t3);
    }, _t = function(t3, e3, r3) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var n3, s3 = r3.apply(t3, e3 || []), i3 = [];
      return n3 = {}, o3("next"), o3("throw"), o3("return", function(t4) {
        return function(e4) {
          return Promise.resolve(e4).then(t4, c2);
        };
      }), n3[Symbol.asyncIterator] = function() {
        return this;
      }, n3;
      function o3(t4, e4) {
        s3[t4] && (n3[t4] = function(e5) {
          return new Promise(function(r4, n4) {
            i3.push([t4, e5, r4, n4]) > 1 || a2(t4, e5);
          });
        }, e4 && (n3[t4] = e4(n3[t4])));
      }
      function a2(t4, e4) {
        try {
          (r4 = s3[t4](e4)).value instanceof At ? Promise.resolve(r4.value.v).then(u2, c2) : l2(i3[0][2], r4);
        } catch (t5) {
          l2(i3[0][3], t5);
        }
        var r4;
      }
      function u2(t4) {
        a2("next", t4);
      }
      function c2(t4) {
        a2("throw", t4);
      }
      function l2(t4, e4) {
        t4(e4), i3.shift(), i3.length && a2(i3[0][0], i3[0][1]);
      }
    };
    function yt(t3, ...e3) {
      var r3, n3;
      const s3 = 3 === e3.length ? e3[0] : void 0, a2 = 3 === e3.length ? e3[1] : e3[0], u2 = 3 === e3.length ? e3[2] : e3[1], c2 = "encrypted" in t3.socket && t3.socket.encrypted ? "https" : "http", l2 = "authority" in t3 ? t3.authority : t3.headers.host, m2 = null !== (r3 = t3.url) && void 0 !== r3 ? r3 : "";
      if (void 0 === l2) throw new o2.T("unable to determine request authority from Node.js server request", i2.C.Internal);
      const d2 = void 0 !== a2 ? a2 : (function(t4) {
        return _t(this, arguments, function* () {
          var e4, r4, n4, s4;
          const i3 = t4.iterator({ destroyOnReturn: false });
          try {
            for (var o3, a3 = true, u3 = gt(i3); !(e4 = (o3 = yield At(u3.next())).done); a3 = true) {
              s4 = o3.value, a3 = false;
              const t5 = s4;
              yield yield At(t5);
            }
          } catch (t5) {
            r4 = { error: t5 };
          } finally {
            try {
              a3 || e4 || !(n4 = u3.return) || (yield At(n4.call(u3)));
            } finally {
              if (r4) throw r4.error;
            }
          }
        });
      })(t3), f2 = new AbortController();
      if ("stream" in t3) t3.once("close", () => {
        const e4 = R(t3.stream.rstCode);
        void 0 !== e4 ? f2.abort(e4) : f2.abort();
      });
      else {
        const e4 = null != s3 ? s3 : t3, r4 = (s4) => {
          t3.off("error", r4), e4.off("close", n4), f2.abort(k(s4));
        }, n4 = () => {
          t3.off("error", r4), e4.off("close", n4), f2.abort(t3.errored ? k(t3.errored) : void 0);
        };
        t3.once("error", r4), e4.once("close", n4);
      }
      return { httpVersion: t3.httpVersion, method: null !== (n3 = t3.method) && void 0 !== n3 ? n3 : "", url: new URL(m2, `${c2}://${l2}`).toString(), header: L(t3.headers), body: d2, signal: f2.signal, contextValues: u2 };
    }
    async function wt(t3, e3) {
      var r3, n3, s3;
      const i3 = null === (r3 = t3.body) || void 0 === r3 ? void 0 : r3[Symbol.asyncIterator]();
      let o3 = false;
      try {
        if (void 0 !== i3) {
          let r4 = await i3.next();
          for (o3 = true, e3.writeHead(t3.status, $(t3.header)), o3 = false; true !== r4.done; r4 = await i3.next()) o3 = true, await St(e3, r4.value), "flush" in e3 && "function" == typeof e3.flush && e3.flush(), o3 = false;
        }
        e3.headersSent || e3.writeHead(t3.status, $(t3.header)), t3.trailer && e3.addTrailers($(t3.trailer)), await new Promise((t4) => {
          e3.once("end", t4), e3.end();
        });
      } catch (t4) {
        throw o3 && (null === (n3 = null == i3 ? void 0 : i3.throw) || void 0 === n3 || n3.call(i3, t4).catch(() => {
        })), k(t4);
      } finally {
        null === (s3 = null == i3 ? void 0 : i3.return) || void 0 === s3 || s3.call(i3).catch(() => {
        });
      }
    }
    function St(t3, e3) {
      return new Promise((r3, n3) => {
        if (t3.errored) return i3(t3.errored);
        t3.once("error", i3), t3.once("drain", o3);
        const s3 = t3.write(e3, "binary", function(e4) {
          e4 && !s3 && (i3(e4), t3.once("error", () => {
          }));
        });
        function i3(e4) {
          t3.off("error", i3), t3.off("drain", o3), n3(e4);
        }
        function o3() {
          t3.off("error", i3), t3.off("drain", o3), r3();
        }
        s3 && o3();
      });
    }
    function Jt(t3) {
      var e3;
      void 0 === t3.acceptCompression && (t3.acceptCompression = [D, U]);
      const r3 = (0, pt.k)(t3);
      t3.routes(r3);
      const n3 = null !== (e3 = t3.requestPathPrefix) && void 0 !== e3 ? e3 : "", s3 = /* @__PURE__ */ new Map();
      for (const t4 of r3.handlers) s3.set(n3 + t4.requestPath, t4);
      return function(e4, r4) {
        var n4, a2, u2, c2;
        const l2 = s3.get(null !== (a2 = null === (n4 = e4.url) || void 0 === n4 ? void 0 : n4.split("?", 2)[0]) && void 0 !== a2 ? a2 : "");
        if (!l2) return void (null !== (u2 = t3.fallback) && void 0 !== u2 ? u2 : Bt)(e4, r4);
        const m2 = yt(e4, r4, void 0, null === (c2 = t3.contextValues) || void 0 === c2 ? void 0 : c2.call(t3, e4));
        l2(m2).then((t4) => wt(t4, r4)).catch((t4) => {
          o2.T.from(t4).code != i2.C.Aborted && console.error(`handler for rpc ${l2.method.name} of ${l2.service.typeName} failed`, t4);
        });
      };
    }
    const Bt = (t3, e3) => {
      e3.writeHead(ht.of.status), e3.end();
    };
  }