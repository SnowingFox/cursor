// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 54384 range:8613769..8659863
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
54384: (e, t, r) => {
    "use strict";
    r.r(t), r.d(t, { Http2SessionManager: () => H, compressionBrotli: () => O, compressionGzip: () => D, connectNodeAdapter: () => Se, createConnectTransport: () => me, createGrpcTransport: () => de, createGrpcWebTransport: () => ne, createNodeHttpClient: () => K, universalRequestFromNodeRequest: () => ve, universalResponseToNodeResponse: () => _e });
    var n = r(3881);
    const [s] = process.versions.node.split(".").map((e2) => parseInt(e2, 10));
    s < 18 && void 0 === globalThis.Headers && (globalThis.Headers = n.Headers);
    var o = r(8032), i = r(40328), a = r(6551), c = r(81190);
    function l(e2, t2) {
      const r2 = (0, c.N)(e2);
      if (r2) throw t2.forEach((e3, t3) => {
        r2.metadata.append(t3, e3);
      }), r2;
      if (!t2.has(a.OJ) && !e2.has(a.OJ)) throw new i.T("protocol error: missing status", o.C.Internal);
    }
    var u = r(71428), d = r(43524);
    function p(e2, t2, r2, n2, s2, o2) {
      const i2 = (function(e3, t3, r3, n3) {
        const s3 = new Headers(null != r3 ? r3 : {});
        return s3.set(a.Z_, e3 ? d.y : d.q2), s3.set(u.E, "1"), s3.set(u.SY, "connect-es/1.6.1"), n3 && s3.set(a.qy, "connect-es/1.6.1"), void 0 !== t3 && s3.set(a.hR, `${t3}m`), s3;
      })(e2, t2, r2, o2);
      return null != s2 && i2.set(a.LB, s2.name), n2.length > 0 && i2.set(a.JA, n2.map((e3) => e3.name).join(",")), i2;
    }
    function m(e2) {
      switch (e2) {
        case 400:
          return o.C.Internal;
        case 401:
          return o.C.Unauthenticated;
        case 403:
          return o.C.PermissionDenied;
        case 404:
          return o.C.Unimplemented;
        case 429:
        case 502:
        case 503:
        case 504:
          return o.C.Unavailable;
        default:
          return o.C.Unknown;
      }
    }
    function h(e2, t2, r2) {
      const { foundStatus: n2, headerError: s2 } = (function(e3, t3) {
        var r3;
        if (e3 >= 200 && e3 < 300) return { foundStatus: t3.has(a.OJ), headerError: (0, c.N)(t3) };
        throw new i.T(decodeURIComponent(null !== (r3 = t3.get(a.vw)) && void 0 !== r3 ? r3 : `HTTP ${e3}`), m(e3), t3);
      })(t2, r2);
      let l2;
      const u2 = r2.get(a.LB);
      if (null !== u2 && "identity" !== u2.toLowerCase() && (l2 = e2.find((e3) => e3.name === u2), !l2)) throw new i.T(`unsupported response encoding "${u2}"`, o.C.Internal, r2);
      return { foundStatus: n2, compression: l2, headerError: s2 };
    }
    var f = r(6657), g = r(78205), y = r(67572), w = r(41304), v = r(40878), _ = r(43621), A = function(e2) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var t2, r2 = e2[Symbol.asyncIterator];
      return r2 ? r2.call(e2) : (e2 = "function" == typeof __values ? __values(e2) : e2[Symbol.iterator](), t2 = {}, n2("next"), n2("throw"), n2("return"), t2[Symbol.asyncIterator] = function() {
        return this;
      }, t2);
      function n2(r3) {
        t2[r3] = e2[r3] && function(t3) {
          return new Promise(function(n3, s2) {
            (function(e3, t4, r4, n4) {
              Promise.resolve(n4).then(function(t5) {
                e3({ value: t5, done: r4 });
              }, t4);
            })(n3, s2, (t3 = e2[r3](t3)).done, t3.value);
          });
        };
      }
    }, S = function(e2) {
      return this instanceof S ? (this.v = e2, this) : new S(e2);
    }, b = function(e2, t2, r2) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var n2, s2 = r2.apply(e2, t2 || []), o2 = [];
      return n2 = {}, i2("next"), i2("throw"), i2("return", function(e3) {
        return function(t3) {
          return Promise.resolve(t3).then(e3, l2);
        };
      }), n2[Symbol.asyncIterator] = function() {
        return this;
      }, n2;
      function i2(e3, t3) {
        s2[e3] && (n2[e3] = function(t4) {
          return new Promise(function(r3, n3) {
            o2.push([e3, t4, r3, n3]) > 1 || a2(e3, t4);
          });
        }, t3 && (n2[e3] = t3(n2[e3])));
      }
      function a2(e3, t3) {
        try {
          (r3 = s2[e3](t3)).value instanceof S ? Promise.resolve(r3.value.v).then(c2, l2) : u2(o2[0][2], r3);
        } catch (e4) {
          u2(o2[0][3], e4);
        }
        var r3;
      }
      function c2(e3) {
        a2("next", e3);
      }
      function l2(e3) {
        a2("throw", e3);
      }
      function u2(e3, t3) {
        e3(t3), o2.shift(), o2.length && a2(o2[0][0], o2[0][1]);
      }
    };
    var E, I = r(10278), C = r(43106), k = r(39023);
    function x(e2) {
      let t2 = o.C.Internal;
      const r2 = T(e2).map(R);
      r2.some((e3) => "ERR_STREAM_WRITE_AFTER_END" == e3.code) || r2.some((e3) => "ERR_STREAM_DESTROYED" == e3.code || "ERR_HTTP2_INVALID_STREAM" == e3.code || "ECONNRESET" == e3.code) ? t2 = o.C.Aborted : r2.some((e3) => "ETIMEDOUT" == e3.code || "ENOTFOUND" == e3.code || "EAI_AGAIN" == e3.code || "ECONNREFUSED" == e3.code) && (t2 = o.C.Unavailable);
      const n2 = i.T.from(e2, t2);
      return n2 !== e2 && (n2.cause = e2), n2;
    }
    function T(e2) {
      const t2 = [];
      for (; e2 instanceof Error && !t2.includes(e2) && (t2.push(e2), "cause" in e2); ) e2 = e2.cause;
      return t2;
    }
    function R(e2) {
      const t2 = {};
      return e2 instanceof Error && ("code" in e2 && "string" == typeof e2.code && (t2.code = e2.code), "syscall" in e2 && "string" == typeof e2.syscall && (t2.syscall = e2.syscall)), t2;
    }
    function B(e2) {
      switch (e2) {
        case E.PROTOCOL_ERROR:
        case E.INTERNAL_ERROR:
        case E.FLOW_CONTROL_ERROR:
        case E.SETTINGS_TIMEOUT:
        case E.FRAME_SIZE_ERROR:
        case E.COMPRESSION_ERROR:
        case E.CONNECT_ERROR:
          return new i.T(`http/2 stream closed with error code ${E[e2]} (0x${e2.toString(16)})`, o.C.Internal);
        case E.REFUSED_STREAM:
          return new i.T(`http/2 stream closed with error code ${E[e2]} (0x${e2.toString(16)})`, o.C.Unavailable);
        case E.CANCEL:
          return new i.T(`http/2 stream closed with error code ${E[e2]} (0x${e2.toString(16)})`, o.C.Canceled);
        case E.ENHANCE_YOUR_CALM:
          return new i.T(`http/2 stream closed with error code ${E[e2]} (0x${e2.toString(16)})`, o.C.ResourceExhausted);
        case E.INADEQUATE_SECURITY:
        case E.HTTP_1_1_REQUIRED:
          return new i.T(`http/2 stream closed with error code ${E[e2]} (0x${e2.toString(16)})`, o.C.PermissionDenied);
        case E.STREAM_CLOSED:
      }
    }
    !(function(e2) {
      e2[e2.PROTOCOL_ERROR = 1] = "PROTOCOL_ERROR", e2[e2.INTERNAL_ERROR = 2] = "INTERNAL_ERROR", e2[e2.FLOW_CONTROL_ERROR = 3] = "FLOW_CONTROL_ERROR", e2[e2.SETTINGS_TIMEOUT = 4] = "SETTINGS_TIMEOUT", e2[e2.STREAM_CLOSED = 5] = "STREAM_CLOSED", e2[e2.FRAME_SIZE_ERROR = 6] = "FRAME_SIZE_ERROR", e2[e2.REFUSED_STREAM = 7] = "REFUSED_STREAM", e2[e2.CANCEL = 8] = "CANCEL", e2[e2.COMPRESSION_ERROR = 9] = "COMPRESSION_ERROR", e2[e2.CONNECT_ERROR = 10] = "CONNECT_ERROR", e2[e2.ENHANCE_YOUR_CALM = 11] = "ENHANCE_YOUR_CALM", e2[e2.INADEQUATE_SECURITY = 12] = "INADEQUATE_SECURITY", e2[e2.HTTP_1_1_REQUIRED = 13] = "HTTP_1_1_REQUIRED";
    })(E || (E = {}));
    const P = (0, k.promisify)(C.gzip), J = (0, k.promisify)(C.gunzip), M = (0, k.promisify)(C.brotliCompress), q = (0, k.promisify)(C.brotliDecompress), D = { name: "gzip", compress: (e2) => P(e2, {}), decompress: (e2, t2) => 0 == e2.length ? Promise.resolve(new Uint8Array(0)) : N(J(e2, { maxOutputLength: t2 }), t2) }, O = { name: "br", compress: (e2) => M(e2, {}), decompress: (e2, t2) => 0 == e2.length ? Promise.resolve(new Uint8Array(0)) : N(q(e2, { maxOutputLength: t2 }), t2) };
    function N(e2, t2) {
      return e2.catch((e3) => {
        const r2 = R(e3);
        let n2 = o.C.Internal, s2 = "decompression failed";
        switch (r2.code) {
          case "ERR_BUFFER_TOO_LARGE":
            n2 = o.C.ResourceExhausted, s2 = `message is larger than configured readMaxBytes ${t2} after decompression`;
            break;
          case "Z_DATA_ERROR":
          case "ERR_PADDING_2":
            n2 = o.C.InvalidArgument;
            break;
          default:
            void 0 !== r2.code && r2.code.startsWith("ERR__ERROR_FORMAT_") && (n2 = o.C.InvalidArgument);
        }
        return Promise.reject(new i.T(s2, n2, void 0, void 0, e3));
      });
    }
    var F = r(85675), U = r(58611), L = r(65692);
    function $(e2) {
      const t2 = new Headers();
      for (const [r2, n2] of Object.entries(e2)) if (!r2.startsWith(":") && void 0 !== n2) if ("string" == typeof n2) t2.append(r2, n2);
      else if ("number" == typeof n2) t2.append(r2, String(n2));
      else for (const e3 of n2) t2.append(r2, e3);
      return t2;
    }
    function Q(e2, t2) {
      if (void 0 === e2 && void 0 === t2) return;
      const r2 = /* @__PURE__ */ Object.create(null);
      if (void 0 !== t2) for (const [e3, n2] of Object.entries(t2)) Array.isArray(n2) ? r2[e3] = n2.concat() : void 0 !== n2 && (r2[e3] = n2);
      if (void 0 !== e2) if (Array.isArray(e2)) for (const [t3, n2] of e2) j(r2, t3, n2);
      else if ("forEach" in e2) "function" == typeof e2.forEach && e2.forEach((e3, t3) => {
        j(r2, t3, e3);
      });
      else for (const [t3, n2] of Object.entries(e2)) j(r2, t3, n2);
      return r2;
    }
    function j(e2, t2, r2) {
      const n2 = e2[t2 = t2.toLowerCase()];
      Array.isArray(n2) ? n2.push(r2) : e2[t2] = void 0 === n2 ? r2 : [n2.toString(), r2];
    }
    var G = r(39983);
    class H {
      state() {
        return "ready" == this.s.t ? void 0 !== this.verifying ? "verifying" : this.s.streamCount() > 0 ? "open" : "idle" : this.s.t;
      }
      error() {
        if ("error" == this.s.t) return this.s.reason;
      }
      constructor(e2, t2, r2) {
        var n2, s2, o2, i2;
        this.s = { t: "closed" }, this.shuttingDown = [], this.authority = new URL(e2).origin, this.http2SessionOptions = r2, this.options = { pingIntervalMs: null !== (n2 = null == t2 ? void 0 : t2.pingIntervalMs) && void 0 !== n2 ? n2 : Number.POSITIVE_INFINITY, pingTimeoutMs: null !== (s2 = null == t2 ? void 0 : t2.pingTimeoutMs) && void 0 !== s2 ? s2 : 15e3, pingIdleConnection: null !== (o2 = null == t2 ? void 0 : t2.pingIdleConnection) && void 0 !== o2 && o2, idleConnectionTimeoutMs: null !== (i2 = null == t2 ? void 0 : t2.idleConnectionTimeoutMs) && void 0 !== i2 ? i2 : 9e5 };
      }
      async connect() {
        try {
          return (await this.gotoReady()).streamCount() > 0 ? "open" : "idle";
        } catch (e2) {
          return "error";
        }
      }
      async request(e2, t2, r2, n2) {
        for (; ; ) {
          const s2 = await this.gotoReady();
          try {
            const o2 = s2.conn.request(Object.assign(Object.assign({}, r2), { ":method": e2, ":path": t2 }), n2);
            return s2.registerRequest(o2), o2;
          } catch (e3) {
            if (s2.conn.closed || s2.conn.destroyed) continue;
            throw e3;
          }
        }
      }
      notifyResponseByteRead(e2) {
        "ready" == this.s.t && this.s.responseByteRead(e2);
        for (const t2 of this.shuttingDown) t2.responseByteRead(e2);
      }
      abort(e2) {
        var t2, r2, n2;
        const s2 = null != e2 ? e2 : new i.T("connection aborted", o.C.Canceled);
        null === (r2 = (t2 = this.s).abort) || void 0 === r2 || r2.call(t2, s2);
        for (const e3 of this.shuttingDown) null === (n2 = e3.abort) || void 0 === n2 || n2.call(e3, s2);
        this.setState(z(s2));
      }
      abortCurrent(e2) {
        var t2, r2;
        const n2 = this.s;
        if ("ready" === n2.t && n2.isShuttingDown()) return;
        const s2 = null != e2 ? e2 : new i.T("connection aborted", o.C.Canceled);
        null === (r2 = (t2 = n2).abort) || void 0 === r2 || r2.call(t2, s2);
      }
      captureSessions() {
        const e2 = [];
        "function" == typeof this.s.abort && e2.push(this.s);
        for (const t2 of this.shuttingDown) -1 === e2.indexOf(t2) && e2.push(t2);
        return e2;
      }
      async gotoReady() {
        var e2;
        for ("ready" == this.s.t ? this.s.isShuttingDown() || this.s.conn.closed || this.s.conn.destroyed ? this.setState(W(this.authority, this.http2SessionOptions)) : this.s.requiresVerify() && await this.verify(this.s) : "closed" != this.s.t && "error" != this.s.t || this.setState(W(this.authority, this.http2SessionOptions)); "ready" !== this.s.t; ) {
          if ("error" === this.s.t) throw this.s.reason;
          if ("unavailable" === this.s.t) throw new i.T("expected h2 session, but ALPN protocol failed to negotiate", o.C.Unavailable, { authority: this.authority, issuer: null !== (e2 = this.s.issuer) && void 0 !== e2 ? e2 : "unknown" });
          "connecting" === this.s.t && await this.s.conn;
        }
        return this.s;
      }
      setState(e2) {
        var t2, r2;
        if (null === (r2 = (t2 = this.s).onExitState) || void 0 === r2 || r2.call(t2), "ready" == this.s.t && this.s.isShuttingDown()) {
          const e3 = this.s;
          this.shuttingDown.push(e3), e3.onClose = e3.onError = () => {
            const t3 = this.shuttingDown.indexOf(e3);
            -1 !== t3 && this.shuttingDown.splice(t3, 1);
          };
        }
        switch (e2.t) {
          case "connecting":
            e2.conn.then((e3) => {
              this.setState((function(e4, t3) {
                var r3, n2;
                if ((function(e5) {
                  if (e5.connecting) throw new i.T("expected open session, but it is connecting", o.C.Internal);
                  if (e5.destroyed) throw new i.T("expected open session, but it is destroyed", o.C.Internal);
                  if (e5.closed) throw new i.T("expected open session, but it is closed", o.C.Internal);
                })(e4), true === e4.encrypted && "h2" !== e4.alpnProtocol) {
                  var s2 = e4.socket, a2 = null == s2 ? void 0 : s2.getPeerCertificate, c2 = "function" == typeof a2 ? null === (n2 = null === (r3 = a2.call(s2)) || void 0 === r3 ? void 0 : r3.issuer) || void 0 === n2 ? void 0 : n2.CN : void 0;
                  return e4.destroyed || e4.destroy(), { t: "unavailable", issuer: c2 };
                }
                e4.unref();
                let l2, u2, d2, p2 = Date.now(), m2 = 0, h2 = false, f2 = false;
                S2();
                const g2 = { t: "ready", conn: e4, streamCount: () => m2, requiresVerify: () => Date.now() - p2 > t3.pingIntervalMs, isShuttingDown: () => h2, onClose: void 0, onError: void 0, registerRequest(t4) {
                  m2++, 1 == m2 && (e4.ref(), y2(), A2()), t4.once("response", () => {
                    p2 = Date.now(), y2();
                  }), t4.once("close", () => {
                    m2--, 0 == m2 && (e4.unref(), y2(), S2());
                  });
                }, responseByteRead(t4) {
                  t4.session === e4 && (e4.closed || e4.destroyed || m2 <= 0 || (p2 = Date.now(), y2()));
                }, verify: () => (e4.ref(), new Promise((r4) => {
                  let n3 = false;
                  const s3 = (t4) => {
                    n3 || (n3 = true, clearTimeout(c3), e4.off("error", a3), e4.off("close", a3), t4 && 0 == m2 && e4.unref(), r4(t4));
                  }, a3 = () => s3(false);
                  e4.on("error", a3), e4.on("close", a3);
                  const c3 = V(() => {
                    g2.abort(new i.T("PING timed out", o.C.Unavailable)), s3(false);
                  }, t3.pingTimeoutMs);
                  _2(() => s3(true));
                })), abort(t4) {
                  e4.destroyed || (e4.once("error", () => {
                  }), e4.destroy(t4, F.constants.NGHTTP2_CANCEL));
                }, onExitState() {
                  g2.isShuttingDown() || (k2(), this.onError = void 0, this.onClose = void 0);
                } };
                function y2() {
                  w2(), (m2 > 0 || t3.pingIdleConnection) && (l2 = V(v2, t3.pingIntervalMs));
                }
                function w2() {
                  clearTimeout(l2), clearTimeout(u2);
                }
                function v2() {
                  _2(y2);
                }
                function _2(r4) {
                  clearTimeout(u2), u2 = V(() => {
                    e4.destroy(new i.T("PING timed out", o.C.Unavailable), F.constants.NGHTTP2_CANCEL);
                  }, t3.pingTimeoutMs), e4.ping((n3, s3) => {
                    clearTimeout(u2), null === n3 && (s3 > t3.pingTimeoutMs ? e4.destroy(new i.T("PING timed out", o.C.Unavailable), F.constants.NGHTTP2_CANCEL) : (p2 = Date.now(), r4()));
                  });
                }
                function A2() {
                  clearTimeout(d2);
                }
                function S2() {
                  d2 = V(b2, t3.idleConnectionTimeoutMs);
                }
                function b2() {
                  e4.close(), I2();
                }
                function E2(r4, n3, s3) {
                  h2 = true;
                  const a3 = Buffer.from("too_many_pings", "ascii");
                  if (r4 === F.constants.NGHTTP2_ENHANCE_YOUR_CALM && null != s3 && s3.equals(a3) && (t3.pingIntervalMs = 2 * t3.pingIntervalMs, f2 = true), r4 === F.constants.NGHTTP2_NO_ERROR) {
                    const t4 = parseInt(process.versions.node.split(".")[0], 10);
                    0 == m2 && t4 >= 18 && e4.destroy(new i.T("received GOAWAY without any open streams", o.C.Canceled), F.constants.NGHTTP2_NO_ERROR);
                  }
                }
                function I2() {
                  var e5;
                  k2(), null === (e5 = g2.onClose) || void 0 === e5 || e5.call(g2);
                }
                function C2(e5) {
                  var t4, r4;
                  if (k2(), f2) {
                    const e6 = new i.T(`http/2 connection closed with error code ENHANCE_YOUR_CALM (0x${F.constants.NGHTTP2_ENHANCE_YOUR_CALM.toString(16)}), too_many_pings, doubled the interval`, o.C.ResourceExhausted);
                    null === (t4 = g2.onError) || void 0 === t4 || t4.call(g2, e6);
                  } else null === (r4 = g2.onError) || void 0 === r4 || r4.call(g2, x(e5));
                }
                function k2() {
                  w2(), A2(), e4.off("error", C2), e4.off("close", I2), e4.off("goaway", E2);
                }
                return e4.on("error", C2), e4.on("close", I2), e4.on("goaway", E2), g2;
              })(e3, this.options));
            }, (e3) => {
              this.setState(z(e3));
            });
            break;
          case "ready":
            e2.onClose = () => this.setState({ t: "closed" }), e2.onError = (e3) => this.setState(z(e3));
        }
        this.s = e2;
      }
      verify(e2) {
        return void 0 !== this.verifying || (this.verifying = e2.verify().then((e3) => {
          e3 || this.setState(W(this.authority, this.http2SessionOptions));
        }, (e3) => {
          this.setState(z(e3));
        }).finally(() => {
          this.verifying = void 0;
        })), this.verifying;
      }
    }
    function z(e2) {
      return e2 instanceof i.T && i.T.from(e2).code == o.C.Canceled ? { t: "closed" } : /* @__PURE__ */ (function(e3) {
        return { t: "error", reason: e3 };
      })(e2);
    }
    function W(e2, t2) {
      let r2, n2;
      const s2 = new Promise((e3, t3) => {
        r2 = e3, n2 = t3;
      }), o2 = F.connect(e2, t2);
      function i2() {
        null == r2 || r2(o2), c2();
      }
      function a2(e3) {
        null == n2 || n2(x(e3)), c2();
      }
      function c2() {
        o2.off("connect", i2), o2.off("error", a2);
      }
      return o2.on("connect", i2), o2.on("error", a2), { t: "connecting", conn: s2, abort(e3) {
        o2.destroyed || o2.destroy(void 0, F.constants.NGHTTP2_CANCEL), null == n2 || n2(e3);
      }, onExitState() {
        c2();
      } };
    }
    function V(e2, t2) {
      if (!(t2 > 2147483647)) return setTimeout(e2, t2).unref();
    }
    function K(e2) {
      var t2, r2;
      if ("1.1" == e2.httpVersion) return r2 = e2.nodeOptions, async function(e3) {
        const t3 = te(e3.signal);
        return new Promise((n2, s2) => {
          t3.catch((e4) => {
            s2(e4);
          }), (function(e4, t4, r3, n3) {
            let s3;
            s3 = new URL(t4).protocol.startsWith("https") ? L.request(t4, r3) : U.request(t4, r3), e4.catch((e5) => s3.destroy(x(e5))), s3.flushHeaders(), s3.on("error", e4.reject), s3.on("socket", function(e5) {
              function t5() {
                e5.off("connect", t5), n3(s3);
              }
              "open" === e5.readyState ? n3(s3) : e5.on("connect", t5);
            });
          })(t3, e3.url, Object.assign(Object.assign({}, r2), { headers: Q(e3.header, null == r2 ? void 0 : r2.headers), method: e3.method }), (r3) => {
            ee(e3, r3, t3), r3.on("response", (e4) => {
              var r4;
              e4.on("error", t3.reject), t3.catch((t4) => e4.destroy(x(t4)));
              const s3 = new Headers();
              n2({ status: null !== (r4 = e4.statusCode) && void 0 !== r4 ? r4 : 0, header: $(e4.headers), body: Y(t3, e4, s3), trailer: s3 });
            });
          });
        });
      };
      return /* @__PURE__ */ (function(e3) {
        return function(t3) {
          const r3 = te(t3.signal), n2 = e3(t3.url);
          return new Promise((e4, s2) => {
            r3.catch((e5) => {
              s2(e5);
            }), (function(e5, t4, r4, n3, s3, a2, c2) {
              const l2 = new URL(r4);
              if (l2.origin !== t4.authority) {
                const r5 = `cannot make a request to ${l2.origin}: the http2 session is connected to ${t4.authority}`;
                return void e5.reject(new i.T(r5, o.C.Internal));
              }
              t4.request(n3, l2.pathname + l2.search, s3, {}).then((t5) => {
                e5.catch((e6) => {
                  if (t5.closed) return;
                  const r5 = e6 instanceof i.T && e6.code == o.C.Canceled ? E.CANCEL : E.INTERNAL_ERROR;
                  return new Promise((e7) => t5.close(r5, e7));
                }), t5.on("error", function(r5) {
                  t5.writableEnded && T(r5).map(R).some((e6) => "ERR_STREAM_WRITE_AFTER_END" == e6.code) || e5.reject(r5);
                }), t5.on("close", function() {
                  const r5 = B(t5.rstCode);
                  r5 && e5.reject(r5);
                }), c2(t5);
              }, (t5) => {
                e5.reject(t5);
              });
            })(r3, n2, t3.url, t3.method, Q(t3.header), 0, (s3) => {
              ee(t3, s3, r3), s3.on("response", (t4) => {
                var o2;
                const i2 = { status: null !== (o2 = t4[":status"]) && void 0 !== o2 ? o2 : 0, header: $(t4), body: X(r3, s3, n2), trailer: Z(s3) };
                e4(i2);
              });
            });
          });
        };
      })(null !== (t2 = e2.sessionProvider) && void 0 !== t2 ? t2 : (e3) => new H(e3));
    }
    function Y(e2, t2, r2) {
      const n2 = t2[Symbol.asyncIterator]();
      return { [Symbol.asyncIterator]: () => ({ async next() {
        const s2 = await e2.race(n2.next());
        return true === s2.done && ($(t2.trailers).forEach((e3, t3) => {
          r2.set(t3, e3);
        }), e2.resolve(), await e2), s2;
      }, throw(t3) {
        throw e2.reject(t3), t3;
      } }) };
    }
    function Z(e2) {
      const t2 = new Headers();
      return e2.on("trailers", (e3) => {
        $(e3).forEach((e4, r2) => {
          t2.set(r2, e4);
        });
      }), t2;
    }
    function X(e2, t2, r2) {
      const n2 = t2[Symbol.asyncIterator]();
      return { [Symbol.asyncIterator]: () => ({ async next() {
        const s2 = await e2.race(n2.next());
        return true === s2.done && (e2.resolve(), await e2), null == r2 || r2.notifyResponseByteRead(t2), s2;
      }, throw(t3) {
        throw e2.reject(t3), t3;
      } }) };
    }
    async function ee(e2, t2, r2) {
      if (void 0 === e2.body) return void await new Promise((e3) => t2.end(e3));
      const n2 = e2.body[Symbol.asyncIterator]();
      return new Promise((e3) => {
        !(function s2() {
          if (r2.isRejected()) return;
          n2.next().then((o2) => {
            true !== o2.done ? t2.write(o2.value, "binary", function(e4) {
              null != e4 ? (void 0 !== n2.throw && n2.throw(x(e4)).catch(() => {
              }), t2.writableEnded && T(e4).map(R).some((e5) => "ERR_STREAM_WRITE_AFTER_END" == e5.code) || r2.reject(e4)) : s2();
            }) : t2.end(e3);
          }, (e4) => {
            r2.reject(e4);
          });
        })();
      });
    }
    function te(e2) {
      let t2, r2, n2 = false, s2 = false;
      const a2 = new Promise((e3, n3) => {
        t2 = e3, r2 = n3;
      }), c2 = { resolve() {
        n2 || s2 || (n2 = true, null == t2 || t2());
      }, isResolved: () => n2, reject(e3) {
        n2 || s2 || (s2 = true, null == r2 || r2(x(e3)));
      }, isRejected: () => s2, async race(e3) {
        const t3 = await Promise.race([e3, a2]);
        if (void 0 === t3 && n2) throw new i.T("sentinel completed early", o.C.Internal);
        return t3;
      } }, l2 = Object.assign(a2, c2);
      function u2() {
        c2.reject((0, G.xz)(this));
      }
      return e2 && (e2.aborted ? c2.reject((0, G.xz)(e2)) : e2.addEventListener("abort", u2), a2.finally(() => e2.removeEventListener("abort", u2)).catch(() => {
      })), l2;
    }
    function re(e2) {
      var t2, r2, n2, s2;
      let o2;
      if ("2" == e2.httpVersion) {
        let t3;
        t3 = e2.sessionManager ? e2.sessionManager : new H(e2.baseUrl, { pingIntervalMs: e2.pingIntervalMs, pingIdleConnection: e2.pingIdleConnection, pingTimeoutMs: e2.pingTimeoutMs, idleConnectionTimeoutMs: e2.idleConnectionTimeoutMs }, e2.nodeOptions), o2 = K({ httpVersion: "2", sessionProvider: () => t3 });
      } else o2 = K({ httpVersion: "1.1", nodeOptions: e2.nodeOptions });
      return Object.assign(Object.assign(Object.assign({}, e2), { httpClient: o2, useBinaryFormat: null === (t2 = e2.useBinaryFormat) || void 0 === t2 || t2, interceptors: null !== (r2 = e2.interceptors) && void 0 !== r2 ? r2 : [], sendCompression: null !== (n2 = e2.sendCompression) && void 0 !== n2 ? n2 : null, acceptCompression: null !== (s2 = e2.acceptCompression) && void 0 !== s2 ? s2 : [D, O] }), (0, I.NL)(e2.readMaxBytes, e2.writeMaxBytes, e2.compressMinBytes));
    }
    function ne(e2) {
      return t2 = re(e2), { async unary(e3, r2, n2, s2, c2, u2, d2) {
        const m2 = (0, v.Qg)(r2, t2.binaryOptions, t2.jsonOptions, t2);
        return s2 = void 0 === s2 ? t2.defaultTimeoutMs : s2 <= 0 ? void 0 : s2, await (0, w.L)({ interceptors: t2.interceptors, signal: n2, timeoutMs: s2, req: { stream: false, service: e3, method: r2, url: (0, y.j)(t2.baseUrl, e3, r2), init: {}, header: p(t2.useBinaryFormat, s2, c2, t2.acceptCompression, t2.sendCompression, true), contextValues: null != d2 ? d2 : (0, _.k)(), message: u2 }, next: async (n3) => {
          const s3 = await t2.httpClient({ url: n3.url, method: "POST", header: n3.header, signal: n3.signal, body: (0, g.Fs)((0, g.T$)([n3.message]), (0, g.XO)(m2.getI(t2.useBinaryFormat)), (0, g.fM)(t2.sendCompression, t2.compressMinBytes), (0, g.yQ)(), { propagateDownStreamError: true }) }), { compression: c3, headerError: u3 } = h(t2.acceptCompression, s3.status, s3.header), { trailer: d3, message: p2 } = await (0, g.WK)(s3.body, (0, g.pY)(t2.readMaxBytes), (0, g.ew)(null != c3 ? c3 : null, t2.readMaxBytes), (0, g.uv)(m2.getO(t2.useBinaryFormat), f.oK, (0, f.A7)()), async (e4) => {
            var t3, r3, n4, s4;
            let a2, c4;
            try {
              for (var l2, u4 = true, d4 = A(e4); !(t3 = (l2 = await d4.next()).done); u4 = true) {
                s4 = l2.value, u4 = false;
                const e5 = s4;
                if (e5.end) {
                  if (void 0 !== c4) throw new i.T("protocol error: received extra trailer", o.C.Unimplemented);
                  c4 = e5.value;
                } else {
                  if (void 0 !== a2) throw new i.T("protocol error: received extra output message for unary method", o.C.Unimplemented);
                  a2 = e5.value;
                }
              }
            } catch (e5) {
              r3 = { error: e5 };
            } finally {
              try {
                u4 || t3 || !(n4 = d4.return) || await n4.call(d4);
              } finally {
                if (r3) throw r3.error;
              }
            }
            return { trailer: c4, message: a2 };
          }, { propagateDownStreamError: false });
          if (void 0 === d3) {
            if (null != u3) throw u3;
            throw new i.T("protocol error: missing trailer", s3.header.has(a.OJ) ? o.C.Unimplemented : o.C.Unknown);
          }
          if (l(d3, s3.header), void 0 === p2) throw new i.T("protocol error: missing output message for unary method", d3.has(a.OJ) ? o.C.Unimplemented : o.C.Unknown);
          return { stream: false, service: e3, method: r2, header: s3.header, message: p2, trailer: d3 };
        } });
      }, async stream(e3, r2, n2, s2, a2, c2, u2) {
        const d2 = (0, v.Qg)(r2, t2.binaryOptions, t2.jsonOptions, t2);
        return s2 = void 0 === s2 ? t2.defaultTimeoutMs : s2 <= 0 ? void 0 : s2, (0, w.u)({ interceptors: t2.interceptors, signal: n2, timeoutMs: s2, req: { stream: true, service: e3, method: r2, url: (0, y.j)(t2.baseUrl, e3, r2), init: { method: "POST", redirect: "error", mode: "cors" }, header: p(t2.useBinaryFormat, s2, a2, t2.acceptCompression, t2.sendCompression, true), contextValues: null != u2 ? u2 : (0, _.k)(), message: c2 }, next: async (e4) => {
          const r3 = await t2.httpClient({ url: e4.url, method: "POST", header: e4.header, signal: e4.signal, body: (0, g.Fs)(e4.message, (0, g.XO)(d2.getI(t2.useBinaryFormat)), (0, g.fM)(t2.sendCompression, t2.compressMinBytes), (0, g.yQ)(), { propagateDownStreamError: true }) }), { compression: n3, foundStatus: s3, headerError: a3 } = h(t2.acceptCompression, r3.status, r3.header);
          if (a3) throw a3;
          const c3 = Object.assign(Object.assign({}, e4), { header: r3.header, trailer: new Headers(), message: (0, g.Fs)(r3.body, (0, g.pY)(t2.readMaxBytes), (0, g.ew)(null != n3 ? n3 : null, t2.readMaxBytes), (0, g.uv)(d2.getO(t2.useBinaryFormat), f.oK, (0, f.A7)()), function(e5) {
            return b(this, arguments, function* () {
              var t3, n4, a4, u3;
              if (s3) {
                if (true !== (yield S(e5[Symbol.asyncIterator]().next())).done) throw new i.T("protocol error: extra data for trailers-only", o.C.InvalidArgument);
                return yield S(void 0);
              }
              let d3 = false;
              try {
                for (var p2, m2 = true, h2 = A(e5); !(t3 = (p2 = yield S(h2.next())).done); m2 = true) {
                  u3 = p2.value, m2 = false;
                  const e6 = u3;
                  if (e6.end) {
                    if (d3) throw new i.T("protocol error: received extra trailer", o.C.InvalidArgument);
                    d3 = true, l(e6.value, r3.header), e6.value.forEach((e7, t4) => c3.trailer.set(t4, e7));
                  } else {
                    if (d3) throw new i.T("protocol error: received extra message after trailer", o.C.InvalidArgument);
                    yield yield S(e6.value);
                  }
                }
              } catch (e6) {
                n4 = { error: e6 };
              } finally {
                try {
                  m2 || t3 || !(a4 = h2.return) || (yield S(a4.call(h2)));
                } finally {
                  if (n4) throw n4.error;
                }
              }
              if (!d3) throw new i.T("protocol error: missing trailer", o.C.Internal);
            });
          }, { propagateDownStreamError: true }) });
          return c3;
        } });
      } };
      var t2;
    }
    var se = r(6125);
    function oe(e2, t2, r2, n2, s2) {
      const o2 = (function(e3, t3, r3) {
        const n3 = new Headers(null != r3 ? r3 : {});
        return n3.set(a.Z_, e3 ? se.y : se.q2), n3.set(a.qy, "connect-es/1.6.1"), void 0 !== t3 && n3.set(a.hR, `${t3}m`), n3.set("Te", "trailers"), n3;
      })(e2, t2, r2);
      return null != s2 && o2.set(a.LB, s2.name), n2.length > 0 && o2.set(a.JA, n2.map((e3) => e3.name).join(",")), o2;
    }
    function ie(e2, t2, r2) {
      const { foundStatus: n2, headerError: s2 } = (function(e3, t3) {
        if (200 != e3) throw new i.T(`HTTP ${e3}`, m(e3), t3);
        const r3 = t3.get(a.Z_);
        if (null == (0, se.xk)(r3)) throw new i.T(`unsupported content type ${r3}`, o.C.Unknown);
        return { foundStatus: t3.has(a.OJ), headerError: (0, c.N)(t3) };
      })(t2, r2);
      let l2;
      const u2 = r2.get(a.LB);
      if (null !== u2 && "identity" !== u2.toLowerCase() && (l2 = e2.find((e3) => e3.name === u2), !l2)) throw new i.T(`unsupported response encoding "${u2}"`, o.C.Internal, r2);
      return { foundStatus: n2, compression: l2, headerError: s2 };
    }
    var ae = function(e2) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var t2, r2 = e2[Symbol.asyncIterator];
      return r2 ? r2.call(e2) : (e2 = "function" == typeof __values ? __values(e2) : e2[Symbol.iterator](), t2 = {}, n2("next"), n2("throw"), n2("return"), t2[Symbol.asyncIterator] = function() {
        return this;
      }, t2);
      function n2(r3) {
        t2[r3] = e2[r3] && function(t3) {
          return new Promise(function(n3, s2) {
            (function(e3, t4, r4, n4) {
              Promise.resolve(n4).then(function(t5) {
                e3({ value: t5, done: r4 });
              }, t4);
            })(n3, s2, (t3 = e2[r3](t3)).done, t3.value);
          });
        };
      }
    }, ce = function(e2) {
      return this instanceof ce ? (this.v = e2, this) : new ce(e2);
    }, le = function(e2) {
      var t2, r2;
      return t2 = {}, n2("next"), n2("throw", function(e3) {
        throw e3;
      }), n2("return"), t2[Symbol.iterator] = function() {
        return this;
      }, t2;
      function n2(n3, s2) {
        t2[n3] = e2[n3] ? function(t3) {
          return (r2 = !r2) ? { value: ce(e2[n3](t3)), done: false } : s2 ? s2(t3) : t3;
        } : s2;
      }
    }, ue = function(e2, t2, r2) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var n2, s2 = r2.apply(e2, t2 || []), o2 = [];
      return n2 = {}, i2("next"), i2("throw"), i2("return", function(e3) {
        return function(t3) {
          return Promise.resolve(t3).then(e3, l2);
        };
      }), n2[Symbol.asyncIterator] = function() {
        return this;
      }, n2;
      function i2(e3, t3) {
        s2[e3] && (n2[e3] = function(t4) {
          return new Promise(function(r3, n3) {
            o2.push([e3, t4, r3, n3]) > 1 || a2(e3, t4);
          });
        }, t3 && (n2[e3] = t3(n2[e3])));
      }
      function a2(e3, t3) {
        try {
          (r3 = s2[e3](t3)).value instanceof ce ? Promise.resolve(r3.value.v).then(c2, l2) : u2(o2[0][2], r3);
        } catch (e4) {
          u2(o2[0][3], e4);
        }
        var r3;
      }
      function c2(e3) {
        a2("next", e3);
      }
      function l2(e3) {
        a2("throw", e3);
      }
      function u2(e3, t3) {
        e3(t3), o2.shift(), o2.length && a2(o2[0][0], o2[0][1]);
      }
    };
    function de(e2) {
      return t2 = re(e2), { async unary(e3, r2, n2, s2, c2, u2, d2) {
        const p2 = (0, v.Qg)(r2, t2.binaryOptions, t2.jsonOptions, t2);
        return s2 = void 0 === s2 ? t2.defaultTimeoutMs : s2 <= 0 ? void 0 : s2, await (0, w.L)({ interceptors: t2.interceptors, signal: n2, timeoutMs: s2, req: { stream: false, service: e3, method: r2, url: (0, y.j)(t2.baseUrl, e3, r2), init: {}, header: oe(t2.useBinaryFormat, s2, c2, t2.acceptCompression, t2.sendCompression), contextValues: null != d2 ? d2 : (0, _.k)(), message: u2 }, next: async (n3) => {
          const s3 = await t2.httpClient({ url: n3.url, method: "POST", header: n3.header, signal: n3.signal, body: (0, g.Fs)((0, g.T$)([n3.message]), (0, g.XO)(p2.getI(t2.useBinaryFormat)), (0, g.fM)(t2.sendCompression, t2.compressMinBytes), (0, g.yQ)(), { propagateDownStreamError: true }) }), { compression: c3, headerError: u3 } = ie(t2.acceptCompression, s3.status, s3.header), d3 = await (0, g.WK)(s3.body, (0, g.pY)(t2.readMaxBytes), (0, g.ew)(null != c3 ? c3 : null, t2.readMaxBytes), (0, g.uv)(p2.getO(t2.useBinaryFormat)), async (e4) => {
            var t3, r3, n4, s4;
            let a2;
            try {
              for (var c4, l2 = true, u4 = ae(e4); !(t3 = (c4 = await u4.next()).done); l2 = true) {
                s4 = c4.value, l2 = false;
                const e5 = s4;
                if (void 0 !== a2) throw new i.T("protocol error: received extra output message for unary method", o.C.Unimplemented);
                a2 = e5;
              }
            } catch (e5) {
              r3 = { error: e5 };
            } finally {
              try {
                l2 || t3 || !(n4 = u4.return) || await n4.call(u4);
              } finally {
                if (r3) throw r3.error;
              }
            }
            return a2;
          }, { propagateDownStreamError: false });
          if (l(s3.trailer, s3.header), void 0 === d3) {
            if (u3) throw u3;
            throw new i.T("protocol error: missing output message for unary method", s3.trailer.has(a.OJ) ? o.C.Unimplemented : o.C.Unknown);
          }
          if (u3) throw new i.T("protocol error: received output message for unary method with error status", o.C.Unknown);
          return { stream: false, service: e3, method: r2, header: s3.header, message: d3, trailer: s3.trailer };
        } });
      }, async stream(e3, r2, n2, s2, o2, i2, a2) {
        const c2 = (0, v.Qg)(r2, t2.binaryOptions, t2.jsonOptions, t2);
        return s2 = void 0 === s2 ? t2.defaultTimeoutMs : s2 <= 0 ? void 0 : s2, (0, w.u)({ interceptors: t2.interceptors, signal: n2, timeoutMs: s2, req: { stream: true, service: e3, method: r2, url: (0, y.j)(t2.baseUrl, e3, r2), init: {}, header: oe(t2.useBinaryFormat, s2, o2, t2.acceptCompression, t2.sendCompression), contextValues: null != a2 ? a2 : (0, _.k)(), message: i2 }, next: async (e4) => {
          const r3 = await t2.httpClient({ url: e4.url, method: "POST", header: e4.header, signal: e4.signal, body: (0, g.Fs)(e4.message, (0, g.XO)(c2.getI(t2.useBinaryFormat)), (0, g.fM)(t2.sendCompression, t2.compressMinBytes), (0, g.yQ)(), { propagateDownStreamError: true }) }), { compression: n3, foundStatus: s3, headerError: o3 } = ie(t2.acceptCompression, r3.status, r3.header);
          if (o3) throw o3;
          const i3 = Object.assign(Object.assign({}, e4), { header: r3.header, trailer: r3.trailer, message: (0, g.Fs)(r3.body, (0, g.pY)(t2.readMaxBytes), (0, g.ew)(null != n3 ? n3 : null, t2.readMaxBytes), (0, g.uv)(c2.getO(t2.useBinaryFormat)), function(e5) {
            return ue(this, arguments, function* () {
              yield ce(yield* le(ae(e5))), s3 || l(r3.trailer, r3.header);
            });
          }, { propagateDownStreamError: true }) });
          return i3;
        } });
      } };
      var t2;
    }
    var pe = r(41303);
    function me(e2) {
      return (0, pe.o)(re(e2));
    }
    var he = r(81992), fe = r(22083), ge = function(e2) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var t2, r2 = e2[Symbol.asyncIterator];
      return r2 ? r2.call(e2) : (e2 = "function" == typeof __values ? __values(e2) : e2[Symbol.iterator](), t2 = {}, n2("next"), n2("throw"), n2("return"), t2[Symbol.asyncIterator] = function() {
        return this;
      }, t2);
      function n2(r3) {
        t2[r3] = e2[r3] && function(t3) {
          return new Promise(function(n3, s2) {
            (function(e3, t4, r4, n4) {
              Promise.resolve(n4).then(function(t5) {
                e3({ value: t5, done: r4 });
              }, t4);
            })(n3, s2, (t3 = e2[r3](t3)).done, t3.value);
          });
        };
      }
    }, ye = function(e2) {
      return this instanceof ye ? (this.v = e2, this) : new ye(e2);
    }, we = function(e2, t2, r2) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var n2, s2 = r2.apply(e2, t2 || []), o2 = [];
      return n2 = {}, i2("next"), i2("throw"), i2("return", function(e3) {
        return function(t3) {
          return Promise.resolve(t3).then(e3, l2);
        };
      }), n2[Symbol.asyncIterator] = function() {
        return this;
      }, n2;
      function i2(e3, t3) {
        s2[e3] && (n2[e3] = function(t4) {
          return new Promise(function(r3, n3) {
            o2.push([e3, t4, r3, n3]) > 1 || a2(e3, t4);
          });
        }, t3 && (n2[e3] = t3(n2[e3])));
      }
      function a2(e3, t3) {
        try {
          (r3 = s2[e3](t3)).value instanceof ye ? Promise.resolve(r3.value.v).then(c2, l2) : u2(o2[0][2], r3);
        } catch (e4) {
          u2(o2[0][3], e4);
        }
        var r3;
      }
      function c2(e3) {
        a2("next", e3);
      }
      function l2(e3) {
        a2("throw", e3);
      }
      function u2(e3, t3) {
        e3(t3), o2.shift(), o2.length && a2(o2[0][0], o2[0][1]);
      }
    };
    function ve(e2, ...t2) {
      var r2, n2;
      const s2 = 3 === t2.length ? t2[0] : void 0, a2 = 3 === t2.length ? t2[1] : t2[0], c2 = 3 === t2.length ? t2[2] : t2[1], l2 = "encrypted" in e2.socket && e2.socket.encrypted ? "https" : "http", u2 = "authority" in e2 ? e2.authority : e2.headers.host, d2 = null !== (r2 = e2.url) && void 0 !== r2 ? r2 : "";
      if (void 0 === u2) throw new i.T("unable to determine request authority from Node.js server request", o.C.Internal);
      const p2 = void 0 !== a2 ? a2 : (function(e3) {
        return we(this, arguments, function* () {
          var t3, r3, n3, s3;
          const o2 = e3.iterator({ destroyOnReturn: false });
          try {
            for (var i2, a3 = true, c3 = ge(o2); !(t3 = (i2 = yield ye(c3.next())).done); a3 = true) {
              s3 = i2.value, a3 = false;
              const e4 = s3;
              yield yield ye(e4);
            }
          } catch (e4) {
            r3 = { error: e4 };
          } finally {
            try {
              a3 || t3 || !(n3 = c3.return) || (yield ye(n3.call(c3)));
            } finally {
              if (r3) throw r3.error;
            }
          }
        });
      })(e2), m2 = new AbortController();
      if ("stream" in e2) e2.once("close", () => {
        const t3 = B(e2.stream.rstCode);
        void 0 !== t3 ? m2.abort(t3) : m2.abort();
      });
      else {
        const t3 = null != s2 ? s2 : e2, r3 = (s3) => {
          e2.off("error", r3), t3.off("close", n3), m2.abort(x(s3));
        }, n3 = () => {
          e2.off("error", r3), t3.off("close", n3), m2.abort(e2.errored ? x(e2.errored) : void 0);
        };
        e2.once("error", r3), t3.once("close", n3);
      }
      return { httpVersion: e2.httpVersion, method: null !== (n2 = e2.method) && void 0 !== n2 ? n2 : "", url: new URL(d2, `${l2}://${u2}`).toString(), header: $(e2.headers), body: p2, signal: m2.signal, contextValues: c2 };
    }
    async function _e(e2, t2) {
      var r2, n2, s2;
      const o2 = null === (r2 = e2.body) || void 0 === r2 ? void 0 : r2[Symbol.asyncIterator]();
      let i2 = false;
      try {
        if (void 0 !== o2) {
          let r3 = await o2.next();
          for (i2 = true, t2.writeHead(e2.status, Q(e2.header)), i2 = false; true !== r3.done; r3 = await o2.next()) i2 = true, await Ae(t2, r3.value), "flush" in t2 && "function" == typeof t2.flush && t2.flush(), i2 = false;
        }
        t2.headersSent || t2.writeHead(e2.status, Q(e2.header)), e2.trailer && t2.addTrailers(Q(e2.trailer)), await new Promise((e3) => {
          t2.once("end", e3), t2.end();
        });
      } catch (e3) {
        throw i2 && (null === (n2 = null == o2 ? void 0 : o2.throw) || void 0 === n2 || n2.call(o2, e3).catch(() => {
        })), x(e3);
      } finally {
        null === (s2 = null == o2 ? void 0 : o2.return) || void 0 === s2 || s2.call(o2).catch(() => {
        });
      }
    }
    function Ae(e2, t2) {
      return new Promise((r2, n2) => {
        if (e2.errored) return o2(e2.errored);
        e2.once("error", o2), e2.once("drain", i2);
        const s2 = e2.write(t2, "binary", function(t3) {
          t3 && !s2 && (o2(t3), e2.once("error", () => {
          }));
        });
        function o2(t3) {
          e2.off("error", o2), e2.off("drain", i2), n2(t3);
        }
        function i2() {
          e2.off("error", o2), e2.off("drain", i2), r2();
        }
        s2 && i2();
      });
    }
    function Se(e2) {
      var t2;
      void 0 === e2.acceptCompression && (e2.acceptCompression = [D, O]);
      const r2 = (0, he.k)(e2);
      e2.routes(r2);
      const n2 = null !== (t2 = e2.requestPathPrefix) && void 0 !== t2 ? t2 : "", s2 = /* @__PURE__ */ new Map();
      for (const e3 of r2.handlers) s2.set(n2 + e3.requestPath, e3);
      return function(t3, r3) {
        var n3, a2, c2, l2;
        const u2 = s2.get(null !== (a2 = null === (n3 = t3.url) || void 0 === n3 ? void 0 : n3.split("?", 2)[0]) && void 0 !== a2 ? a2 : "");
        if (!u2) return void (null !== (c2 = e2.fallback) && void 0 !== c2 ? c2 : be)(t3, r3);
        const d2 = ve(t3, r3, void 0, null === (l2 = e2.contextValues) || void 0 === l2 ? void 0 : l2.call(e2, t3));
        u2(d2).then((e3) => _e(e3, r3)).catch((e3) => {
          i.T.from(e3).code != o.C.Aborted && console.error(`handler for rpc ${u2.method.name} of ${u2.service.typeName} failed`, e3);
        });
      };
    }
    const be = (e2, t2) => {
      t2.writeHead(fe.of.status), t2.end();
    };
  }