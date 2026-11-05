// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 4814 range:707707..744731
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4814: (e2, a2, n2) => {
    "use strict";
    const t2 = n2(2613), s2 = n2(9278), o2 = n2(8611), { pipeline: r2 } = n2(2203), i2 = n2(9361), l = n2(3891), d = n2(3308), m = n2(9792), { RequestContentLengthMismatchError: c, ResponseContentLengthMismatchError: p, InvalidArgumentError: A, RequestAbortedError: u, HeadersTimeoutError: g, HeadersOverflowError: T, SocketError: h, InformationalError: k, BodyTimeoutError: _, HTTPParserError: E, ResponseExceededMaxSizeError: f, ClientDestroyedError: C } = n2(7902), I = n2(3991), { kUrl: v, kReset: y, kServerName: S, kClient: R, kBusy: N, kParser: B, kConnect: w, kBlocking: b, kResuming: Q, kRunning: D, kPending: M, kSize: O, kWriting: U, kQueue: F, kConnected: P, kConnecting: L, kNeedDrain: G, kNoRef: x, kKeepAliveDefaultTimeout: V, kHostHeader: Y, kPendingIdx: q, kRunningIdx: H, kError: J, kPipelining: W, kSocket: K, kKeepAliveTimeoutValue: j, kMaxHeadersSize: $, kKeepAliveMaxTimeout: X, kKeepAliveTimeoutThreshold: z, kHeadersTimeout: Z, kBodyTimeout: ee, kStrictContentLength: ae, kConnector: ne, kMaxRedirections: te, kMaxRequests: se, kCounter: oe, kClose: re, kDestroy: ie, kDispatch: le, kInterceptors: de, kLocalAddress: me, kMaxResponseSize: ce, kHTTPConnVersion: pe, kHost: Ae, kHTTP2Session: ue, kHTTP2SessionState: ge, kHTTP2BuildRequest: Te, kHTTP2CopyHeaders: he, kHTTP1BuildRequest: ke } = n2(8832);
    let _e;
    try {
      _e = n2(5675);
    } catch {
      _e = { constants: {} };
    }
    const { constants: { HTTP2_HEADER_AUTHORITY: Ee, HTTP2_HEADER_METHOD: fe, HTTP2_HEADER_PATH: Ce, HTTP2_HEADER_SCHEME: Ie, HTTP2_HEADER_CONTENT_LENGTH: ve, HTTP2_HEADER_EXPECT: ye, HTTP2_HEADER_STATUS: Se } } = _e;
    let Re = false;
    const Ne = Buffer[Symbol.species], Be = /* @__PURE__ */ Symbol("kClosedResolve"), we = {};
    try {
      const e3 = n2(1637);
      we.sendHeaders = e3.channel("undici:client:sendHeaders"), we.beforeConnect = e3.channel("undici:client:beforeConnect"), we.connectError = e3.channel("undici:client:connectError"), we.connected = e3.channel("undici:client:connected");
    } catch {
      we.sendHeaders = { hasSubscribers: false }, we.beforeConnect = { hasSubscribers: false }, we.connectError = { hasSubscribers: false }, we.connected = { hasSubscribers: false };
    }
    function be(e3) {
      t2("ERR_TLS_CERT_ALTNAME_INVALID" !== e3.code), this[K][J] = e3, $e(this[R], e3);
    }
    function Qe(e3, a3, n3) {
      const t3 = new k(`HTTP/2: "frameError" received - type ${e3}, code ${a3}`);
      0 === n3 && (this[K][J] = t3, $e(this[R], t3));
    }
    function De() {
      i2.destroy(this, new h("other side closed")), i2.destroy(this[K], new h("other side closed"));
    }
    function Me(e3) {
      const a3 = this[R], n3 = new k(`HTTP/2: "GOAWAY" frame received with code ${e3}`);
      if (a3[K] = null, a3[ue] = null, a3.destroyed) {
        t2(0 === this[M]);
        const e4 = a3[F].splice(a3[H]);
        for (let a4 = 0; a4 < e4.length; a4++) {
          la(this, e4[a4], n3);
        }
      } else if (a3[D] > 0) {
        const e4 = a3[F][a3[H]];
        a3[F][a3[H]++] = null, la(a3, e4, n3);
      }
      a3[q] = a3[H], t2(0 === a3[D]), a3.emit("disconnect", a3[v], [a3], n3), aa(a3);
    }
    const Oe = n2(6747), Ue = n2(858), Fe = Buffer.alloc(0);
    let Pe = null, Le = (async function() {
      const e3 = process.env.JEST_WORKER_ID ? n2(2789) : void 0;
      let a3;
      try {
        a3 = await WebAssembly.compile(Buffer.from(n2(871), "base64"));
      } catch (t3) {
        a3 = await WebAssembly.compile(Buffer.from(e3 || n2(2789), "base64"));
      }
      return await WebAssembly.instantiate(a3, { env: { wasm_on_url: (e4, a4, n3) => 0, wasm_on_status: (e4, a4, n3) => {
        t2.strictEqual(Ge.ptr, e4);
        const s3 = a4 - Ye + xe.byteOffset;
        return Ge.onStatus(new Ne(xe.buffer, s3, n3)) || 0;
      }, wasm_on_message_begin: (e4) => (t2.strictEqual(Ge.ptr, e4), Ge.onMessageBegin() || 0), wasm_on_header_field: (e4, a4, n3) => {
        t2.strictEqual(Ge.ptr, e4);
        const s3 = a4 - Ye + xe.byteOffset;
        return Ge.onHeaderField(new Ne(xe.buffer, s3, n3)) || 0;
      }, wasm_on_header_value: (e4, a4, n3) => {
        t2.strictEqual(Ge.ptr, e4);
        const s3 = a4 - Ye + xe.byteOffset;
        return Ge.onHeaderValue(new Ne(xe.buffer, s3, n3)) || 0;
      }, wasm_on_headers_complete: (e4, a4, n3, s3) => (t2.strictEqual(Ge.ptr, e4), Ge.onHeadersComplete(a4, Boolean(n3), Boolean(s3)) || 0), wasm_on_body: (e4, a4, n3) => {
        t2.strictEqual(Ge.ptr, e4);
        const s3 = a4 - Ye + xe.byteOffset;
        return Ge.onBody(new Ne(xe.buffer, s3, n3)) || 0;
      }, wasm_on_message_complete: (e4) => (t2.strictEqual(Ge.ptr, e4), Ge.onMessageComplete() || 0) } });
    })();
    Le.catch();
    let Ge = null, xe = null, Ve = 0, Ye = null;
    const qe = 1, He = 3;
    class Je {
      constructor(e3, a3, { exports: n3 }) {
        t2(Number.isFinite(e3[$]) && e3[$] > 0), this.llhttp = n3, this.ptr = this.llhttp.llhttp_alloc(Oe.TYPE.RESPONSE), this.client = e3, this.socket = a3, this.timeout = null, this.timeoutValue = null, this.timeoutType = null, this.statusCode = null, this.statusText = "", this.upgrade = false, this.headers = [], this.headersSize = 0, this.headersMaxSize = e3[$], this.shouldKeepAlive = false, this.paused = false, this.resume = this.resume.bind(this), this.bytesRead = 0, this.keepAlive = "", this.contentLength = "", this.connection = "", this.maxResponseSize = e3[ce];
      }
      setTimeout(e3, a3) {
        this.timeoutType = a3, e3 !== this.timeoutValue ? (l.clearTimeout(this.timeout), e3 ? (this.timeout = l.setTimeout(We, e3, this), this.timeout.unref && this.timeout.unref()) : this.timeout = null, this.timeoutValue = e3) : this.timeout && this.timeout.refresh && this.timeout.refresh();
      }
      resume() {
        !this.socket.destroyed && this.paused && (t2(null != this.ptr), t2(null == Ge), this.llhttp.llhttp_resume(this.ptr), t2(2 === this.timeoutType), this.timeout && this.timeout.refresh && this.timeout.refresh(), this.paused = false, this.execute(this.socket.read() || Fe), this.readMore());
      }
      readMore() {
        for (; !this.paused && this.ptr; ) {
          const e3 = this.socket.read();
          if (null === e3) break;
          this.execute(e3);
        }
      }
      execute(e3) {
        t2(null != this.ptr), t2(null == Ge), t2(!this.paused);
        const { socket: a3, llhttp: n3 } = this;
        e3.length > Ve && (Ye && n3.free(Ye), Ve = 4096 * Math.ceil(e3.length / 4096), Ye = n3.malloc(Ve)), new Uint8Array(n3.memory.buffer, Ye, Ve).set(e3);
        try {
          let t3;
          try {
            xe = e3, Ge = this, t3 = n3.llhttp_execute(this.ptr, Ye, e3.length);
          } catch (e4) {
            throw e4;
          } finally {
            Ge = null, xe = null;
          }
          const s3 = n3.llhttp_get_error_pos(this.ptr) - Ye;
          if (t3 === Oe.ERROR.PAUSED_UPGRADE) this.onUpgrade(e3.slice(s3));
          else if (t3 === Oe.ERROR.PAUSED) this.paused = true, a3.unshift(e3.slice(s3));
          else if (t3 !== Oe.ERROR.OK) {
            const a4 = n3.llhttp_get_error_reason(this.ptr);
            let o3 = "";
            if (a4) {
              const e4 = new Uint8Array(n3.memory.buffer, a4).indexOf(0);
              o3 = "Response does not match the HTTP/1.1 protocol (" + Buffer.from(n3.memory.buffer, a4, e4).toString() + ")";
            }
            throw new E(o3, Oe.ERROR[t3], e3.slice(s3));
          }
        } catch (e4) {
          i2.destroy(a3, e4);
        }
      }
      destroy() {
        t2(null != this.ptr), t2(null == Ge), this.llhttp.llhttp_free(this.ptr), this.ptr = null, l.clearTimeout(this.timeout), this.timeout = null, this.timeoutValue = null, this.timeoutType = null, this.paused = false;
      }
      onStatus(e3) {
        this.statusText = e3.toString();
      }
      onMessageBegin() {
        const { socket: e3, client: a3 } = this;
        if (e3.destroyed) return -1;
        return a3[F][a3[H]] ? void 0 : -1;
      }
      onHeaderField(e3) {
        const a3 = this.headers.length;
        1 & a3 ? this.headers[a3 - 1] = Buffer.concat([this.headers[a3 - 1], e3]) : this.headers.push(e3), this.trackHeader(e3.length);
      }
      onHeaderValue(e3) {
        let a3 = this.headers.length;
        1 & ~a3 ? this.headers[a3 - 1] = Buffer.concat([this.headers[a3 - 1], e3]) : (this.headers.push(e3), a3 += 1);
        const n3 = this.headers[a3 - 2];
        10 === n3.length && "keep-alive" === n3.toString().toLowerCase() ? this.keepAlive += e3.toString() : 10 === n3.length && "connection" === n3.toString().toLowerCase() ? this.connection += e3.toString() : 14 === n3.length && "content-length" === n3.toString().toLowerCase() && (this.contentLength += e3.toString()), this.trackHeader(e3.length);
      }
      trackHeader(e3) {
        this.headersSize += e3, this.headersSize >= this.headersMaxSize && i2.destroy(this.socket, new T());
      }
      onUpgrade(e3) {
        const { upgrade: a3, client: n3, socket: s3, headers: o3, statusCode: r3 } = this;
        t2(a3);
        const l2 = n3[F][n3[H]];
        t2(l2), t2(!s3.destroyed), t2(s3 === n3[K]), t2(!this.paused), t2(l2.upgrade || "CONNECT" === l2.method), this.statusCode = null, this.statusText = "", this.shouldKeepAlive = null, t2(this.headers.length % 2 == 0), this.headers = [], this.headersSize = 0, s3.unshift(e3), s3[B].destroy(), s3[B] = null, s3[R] = null, s3[J] = null, s3.removeListener("error", je).removeListener("readable", Ke).removeListener("end", Xe).removeListener("close", ze), n3[K] = null, n3[F][n3[H]++] = null, n3.emit("disconnect", n3[v], [n3], new k("upgrade"));
        try {
          l2.onUpgrade(r3, o3, s3);
        } catch (e4) {
          i2.destroy(s3, e4);
        }
        aa(n3);
      }
      onHeadersComplete(e3, a3, n3) {
        const { client: s3, socket: o3, headers: r3, statusText: l2 } = this;
        if (o3.destroyed) return -1;
        const d2 = s3[F][s3[H]];
        if (!d2) return -1;
        if (t2(!this.upgrade), t2(this.statusCode < 200), 100 === e3) return i2.destroy(o3, new h("bad response", i2.getSocketInfo(o3))), -1;
        if (a3 && !d2.upgrade) return i2.destroy(o3, new h("bad upgrade", i2.getSocketInfo(o3))), -1;
        if (t2.strictEqual(this.timeoutType, qe), this.statusCode = e3, this.shouldKeepAlive = n3 || "HEAD" === d2.method && !o3[y] && "keep-alive" === this.connection.toLowerCase(), this.statusCode >= 200) {
          const e4 = null != d2.bodyTimeout ? d2.bodyTimeout : s3[ee];
          this.setTimeout(e4, 2);
        } else this.timeout && this.timeout.refresh && this.timeout.refresh();
        if ("CONNECT" === d2.method) return t2(1 === s3[D]), this.upgrade = true, 2;
        if (a3) return t2(1 === s3[D]), this.upgrade = true, 2;
        if (t2(this.headers.length % 2 == 0), this.headers = [], this.headersSize = 0, this.shouldKeepAlive && s3[W]) {
          const e4 = this.keepAlive ? i2.parseKeepAliveTimeout(this.keepAlive) : null;
          if (null != e4) {
            const a4 = Math.min(e4 - s3[z], s3[X]);
            a4 <= 0 ? o3[y] = true : s3[j] = a4;
          } else s3[j] = s3[V];
        } else o3[y] = true;
        const m2 = false === d2.onHeaders(e3, r3, this.resume, l2);
        return d2.aborted ? -1 : "HEAD" === d2.method || e3 < 200 ? 1 : (o3[b] && (o3[b] = false, aa(s3)), m2 ? Oe.ERROR.PAUSED : 0);
      }
      onBody(e3) {
        const { client: a3, socket: n3, statusCode: s3, maxResponseSize: o3 } = this;
        if (n3.destroyed) return -1;
        const r3 = a3[F][a3[H]];
        return t2(r3), t2.strictEqual(this.timeoutType, 2), this.timeout && this.timeout.refresh && this.timeout.refresh(), t2(s3 >= 200), o3 > -1 && this.bytesRead + e3.length > o3 ? (i2.destroy(n3, new f()), -1) : (this.bytesRead += e3.length, false === r3.onData(e3) ? Oe.ERROR.PAUSED : void 0);
      }
      onMessageComplete() {
        const { client: e3, socket: a3, statusCode: n3, upgrade: s3, headers: o3, contentLength: r3, bytesRead: l2, shouldKeepAlive: d2 } = this;
        if (a3.destroyed && (!n3 || d2)) return -1;
        if (s3) return;
        const m2 = e3[F][e3[H]];
        return t2(m2), t2(n3 >= 100), this.statusCode = null, this.statusText = "", this.bytesRead = 0, this.contentLength = "", this.keepAlive = "", this.connection = "", t2(this.headers.length % 2 == 0), this.headers = [], this.headersSize = 0, n3 < 200 ? void 0 : "HEAD" !== m2.method && r3 && l2 !== parseInt(r3, 10) ? (i2.destroy(a3, new p()), -1) : (m2.onComplete(o3), e3[F][e3[H]++] = null, a3[U] ? (t2.strictEqual(e3[D], 0), i2.destroy(a3, new k("reset")), Oe.ERROR.PAUSED) : d2 ? a3[y] && 0 === e3[D] ? (i2.destroy(a3, new k("reset")), Oe.ERROR.PAUSED) : void (1 === e3[W] ? setImmediate(aa, e3) : aa(e3)) : (i2.destroy(a3, new k("reset")), Oe.ERROR.PAUSED));
      }
    }
    function We(e3) {
      const { socket: a3, timeoutType: n3, client: s3 } = e3;
      n3 === qe ? (!a3[U] || a3.writableNeedDrain || s3[D] > 1) && (t2(!e3.paused, "cannot be paused while waiting for headers"), i2.destroy(a3, new g())) : 2 === n3 ? e3.paused || i2.destroy(a3, new _()) : n3 === He && (t2(0 === s3[D] && s3[j]), i2.destroy(a3, new k("socket idle timeout")));
    }
    function Ke() {
      const { [B]: e3 } = this;
      e3 && e3.readMore();
    }
    function je(e3) {
      const { [R]: a3, [B]: n3 } = this;
      t2("ERR_TLS_CERT_ALTNAME_INVALID" !== e3.code), "h2" === a3[pe] || "ECONNRESET" !== e3.code || !n3.statusCode || n3.shouldKeepAlive ? (this[J] = e3, $e(this[R], e3)) : n3.onMessageComplete();
    }
    function $e(e3, a3) {
      if (0 === e3[D] && "UND_ERR_INFO" !== a3.code && "UND_ERR_SOCKET" !== a3.code) {
        t2(e3[q] === e3[H]);
        const n3 = e3[F].splice(e3[H]);
        for (let t3 = 0; t3 < n3.length; t3++) {
          la(e3, n3[t3], a3);
        }
        t2(0 === e3[O]);
      }
    }
    function Xe() {
      const { [B]: e3, [R]: a3 } = this;
      "h2" === a3[pe] || !e3.statusCode || e3.shouldKeepAlive ? i2.destroy(this, new h("other side closed", i2.getSocketInfo(this))) : e3.onMessageComplete();
    }
    function ze() {
      const { [R]: e3, [B]: a3 } = this;
      "h1" === e3[pe] && a3 && (this[J] || !a3.statusCode || a3.shouldKeepAlive || a3.onMessageComplete(), this[B].destroy(), this[B] = null);
      const n3 = this[J] || new h("closed", i2.getSocketInfo(this));
      if (e3[K] = null, e3.destroyed) {
        t2(0 === e3[M]);
        const a4 = e3[F].splice(e3[H]);
        for (let t3 = 0; t3 < a4.length; t3++) {
          la(e3, a4[t3], n3);
        }
      } else if (e3[D] > 0 && "UND_ERR_INFO" !== n3.code) {
        const a4 = e3[F][e3[H]];
        e3[F][e3[H]++] = null, la(e3, a4, n3);
      }
      e3[q] = e3[H], t2(0 === e3[D]), e3.emit("disconnect", e3[v], [e3], n3), aa(e3);
    }
    async function Ze(e3) {
      t2(!e3[L]), t2(!e3[K]);
      let { host: a3, hostname: n3, protocol: o3, port: r3 } = e3[v];
      if ("[" === n3[0]) {
        const e4 = n3.indexOf("]");
        t2(-1 !== e4);
        const a4 = n3.substring(1, e4);
        t2(s2.isIP(a4)), n3 = a4;
      }
      e3[L] = true, we.beforeConnect.hasSubscribers && we.beforeConnect.publish({ connectParams: { host: a3, hostname: n3, protocol: o3, port: r3, servername: e3[S], localAddress: e3[me] }, connector: e3[ne] });
      try {
        const s3 = await new Promise((t3, s4) => {
          e3[ne]({ host: a3, hostname: n3, protocol: o3, port: r3, servername: e3[S], localAddress: e3[me] }, (e4, a4) => {
            e4 ? s4(e4) : t3(a4);
          });
        });
        if (e3.destroyed) return void i2.destroy(s3.on("error", () => {
        }), new C());
        e3[L] = false, t2(s3);
        if ("h2" === s3.alpnProtocol) {
          Re || (Re = true, process.emitWarning("H2 support is experimental, expect them to change at any time.", { code: "UNDICI-H2" }));
          const a4 = _e.connect(e3[v], { createConnection: () => s3, peerMaxConcurrentStreams: e3[ge].maxConcurrentStreams });
          e3[pe] = "h2", a4[R] = e3, a4[K] = s3, a4.on("error", be), a4.on("frameError", Qe), a4.on("end", De), a4.on("goaway", Me), a4.on("close", ze), a4.unref(), e3[ue] = a4, s3[ue] = a4;
        } else Pe || (Pe = await Le, Le = null), s3[x] = false, s3[U] = false, s3[y] = false, s3[b] = false, s3[B] = new Je(e3, s3, Pe);
        s3[oe] = 0, s3[se] = e3[se], s3[R] = e3, s3[J] = null, s3.on("error", je).on("readable", Ke).on("end", Xe).on("close", ze), e3[K] = s3, we.connected.hasSubscribers && we.connected.publish({ connectParams: { host: a3, hostname: n3, protocol: o3, port: r3, servername: e3[S], localAddress: e3[me] }, connector: e3[ne], socket: s3 }), e3.emit("connect", e3[v], [e3]);
      } catch (s3) {
        if (e3.destroyed) return;
        if (e3[L] = false, we.connectError.hasSubscribers && we.connectError.publish({ connectParams: { host: a3, hostname: n3, protocol: o3, port: r3, servername: e3[S], localAddress: e3[me] }, connector: e3[ne], error: s3 }), "ERR_TLS_CERT_ALTNAME_INVALID" === s3.code) for (t2(0 === e3[D]); e3[M] > 0 && e3[F][e3[q]].servername === e3[S]; ) {
          const a4 = e3[F][e3[q]++];
          la(e3, a4, s3);
        }
        else $e(e3, s3);
        e3.emit("connectionError", e3[v], [e3], s3);
      }
      aa(e3);
    }
    function ea(e3) {
      e3[G] = 0, e3.emit("drain", e3[v], [e3]);
    }
    function aa(e3, a3) {
      2 !== e3[Q] && (e3[Q] = 2, (function(e4, a4) {
        for (; ; ) {
          if (e4.destroyed) return void t2(0 === e4[M]);
          if (e4[Be] && !e4[O]) return e4[Be](), void (e4[Be] = null);
          const n3 = e4[K];
          if (n3 && !n3.destroyed && "h2" !== n3.alpnProtocol) {
            if (0 === e4[O] ? !n3[x] && n3.unref && (n3.unref(), n3[x] = true) : n3[x] && n3.ref && (n3.ref(), n3[x] = false), 0 === e4[O]) n3[B].timeoutType !== He && n3[B].setTimeout(e4[j], He);
            else if (e4[D] > 0 && n3[B].statusCode < 200 && n3[B].timeoutType !== qe) {
              const a5 = e4[F][e4[H]], t3 = null != a5.headersTimeout ? a5.headersTimeout : e4[Z];
              n3[B].setTimeout(t3, qe);
            }
          }
          if (e4[N]) e4[G] = 2;
          else if (2 === e4[G]) {
            a4 ? (e4[G] = 1, process.nextTick(ea, e4)) : ea(e4);
            continue;
          }
          if (0 === e4[M]) return;
          if (e4[D] >= (e4[W] || 1)) return;
          const s3 = e4[F][e4[q]];
          if ("https:" === e4[v].protocol && e4[S] !== s3.servername) {
            if (e4[D] > 0) return;
            if (e4[S] = s3.servername, n3 && n3.servername !== s3.servername) return void i2.destroy(n3, new k("servername changed"));
          }
          if (e4[L]) return;
          if (!n3 && !e4[ue]) return void Ze(e4);
          if (n3.destroyed || n3[U] || n3[y] || n3[b]) return;
          if (e4[D] > 0 && !s3.idempotent) return;
          if (e4[D] > 0 && (s3.upgrade || "CONNECT" === s3.method)) return;
          if (e4[D] > 0 && 0 !== i2.bodyLength(s3.body) && (i2.isStream(s3.body) || i2.isAsyncIterable(s3.body))) return;
          !s3.aborted && ta(e4, s3) ? e4[q]++ : e4[F].splice(e4[q], 1);
        }
      })(e3, a3), e3[Q] = 0, e3[H] > 256 && (e3[F].splice(0, e3[H]), e3[q] -= e3[H], e3[H] = 0));
    }
    function na(e3) {
      return "GET" !== e3 && "HEAD" !== e3 && "OPTIONS" !== e3 && "TRACE" !== e3 && "CONNECT" !== e3;
    }
    function ta(e3, a3) {
      if ("h2" === e3[pe]) return void (function(e4, a4, n4) {
        const { body: s4, method: o4, path: r4, host: l3, upgrade: m3, expectContinue: p3, signal: A3, headers: g3 } = n4;
        let T3, h3;
        T3 = "string" == typeof g3 ? d[he](g3.trim()) : g3;
        if (m3) return la(e4, n4, new Error("Upgrade not supported for H2")), false;
        try {
          n4.onConnect((a5) => {
            n4.aborted || n4.completed || la(e4, n4, a5 || new u());
          });
        } catch (a5) {
          la(e4, n4, a5);
        }
        if (n4.aborted) return false;
        const _3 = e4[ge];
        if (T3[Ee] = l3 || e4[Ae], T3[fe] = o4, "CONNECT" === o4) return a4.ref(), h3 = a4.request(T3, { endStream: false, signal: A3 }), h3.id && !h3.pending ? (n4.onUpgrade(null, null, h3), ++_3.openStreams) : h3.once("ready", () => {
          n4.onUpgrade(null, null, h3), ++_3.openStreams;
        }), h3.once("close", () => {
          _3.openStreams -= 1, 0 === _3.openStreams && a4.unref();
        }), true;
        T3[Ce] = r4, T3[Ie] = "https";
        const E3 = "PUT" === o4 || "POST" === o4 || "PATCH" === o4;
        s4 && "function" == typeof s4.read && s4.read(0);
        let f2 = i2.bodyLength(s4);
        null == f2 && (f2 = n4.contentLength);
        0 !== f2 && E3 || (f2 = null);
        if (na(o4) && f2 > 0 && null != n4.contentLength && n4.contentLength !== f2) {
          if (e4[ae]) return la(e4, n4, new c()), false;
          process.emitWarning(new c());
        }
        null != f2 && (t2(s4, "no body must not have content length"), T3[ve] = `${f2}`);
        a4.ref();
        const C2 = "GET" === o4 || "HEAD" === o4;
        p3 ? (T3[ye] = "100-continue", h3 = a4.request(T3, { endStream: C2, signal: A3 }), h3.once("continue", I2)) : (h3 = a4.request(T3, { endStream: C2, signal: A3 }), I2());
        return ++_3.openStreams, h3.once("response", (e5) => {
          const { [Se]: a5, ...t3 } = e5;
          false === n4.onHeaders(Number(a5), t3, h3.resume.bind(h3), "") && h3.pause();
        }), h3.once("end", () => {
          n4.onComplete([]);
        }), h3.on("data", (e5) => {
          false === n4.onData(e5) && h3.pause();
        }), h3.once("close", () => {
          _3.openStreams -= 1, 0 === _3.openStreams && a4.unref();
        }), h3.once("error", function(a5) {
          !e4[ue] || e4[ue].destroyed || this.closed || this.destroyed || (_3.streams -= 1, i2.destroy(h3, a5));
        }), h3.once("frameError", (a5, t3) => {
          const s5 = new k(`HTTP/2: "frameError" received - type ${a5}, code ${t3}`);
          la(e4, n4, s5), !e4[ue] || e4[ue].destroyed || this.closed || this.destroyed || (_3.streams -= 1, i2.destroy(h3, s5));
        }), true;
        function I2() {
          s4 ? i2.isBuffer(s4) ? (t2(f2 === s4.byteLength, "buffer body must have content length"), h3.cork(), h3.write(s4), h3.uncork(), h3.end(), n4.onBodySent(s4), n4.onRequestSent()) : i2.isBlobLike(s4) ? "function" == typeof s4.stream ? ra({ client: e4, request: n4, contentLength: f2, h2stream: h3, expectsPayload: E3, body: s4.stream(), socket: e4[K], header: "" }) : oa({ body: s4, client: e4, request: n4, contentLength: f2, expectsPayload: E3, h2stream: h3, header: "", socket: e4[K] }) : i2.isStream(s4) ? sa({ body: s4, client: e4, request: n4, contentLength: f2, expectsPayload: E3, socket: e4[K], h2stream: h3, header: "" }) : i2.isIterable(s4) ? ra({ body: s4, client: e4, request: n4, contentLength: f2, expectsPayload: E3, header: "", h2stream: h3, socket: e4[K] }) : t2(false) : n4.onRequestSent();
        }
      })(e3, e3[ue], a3);
      const { body: n3, method: s3, path: o3, host: r3, upgrade: l2, headers: m2, blocking: p2, reset: A2 } = a3, g2 = "PUT" === s3 || "POST" === s3 || "PATCH" === s3;
      n3 && "function" == typeof n3.read && n3.read(0);
      const T2 = i2.bodyLength(n3);
      let h2 = T2;
      if (null === h2 && (h2 = a3.contentLength), 0 !== h2 || g2 || (h2 = null), na(s3) && h2 > 0 && null !== a3.contentLength && a3.contentLength !== h2) {
        if (e3[ae]) return la(e3, a3, new c()), false;
        process.emitWarning(new c());
      }
      const _2 = e3[K];
      try {
        a3.onConnect((n4) => {
          a3.aborted || a3.completed || (la(e3, a3, n4 || new u()), i2.destroy(_2, new k("aborted")));
        });
      } catch (n4) {
        la(e3, a3, n4);
      }
      if (a3.aborted) return false;
      "HEAD" === s3 && (_2[y] = true), (l2 || "CONNECT" === s3) && (_2[y] = true), null != A2 && (_2[y] = A2), e3[se] && _2[oe]++ >= e3[se] && (_2[y] = true), p2 && (_2[b] = true);
      let E2 = `${s3} ${o3} HTTP/1.1\r
`;
      return E2 += "string" == typeof r3 ? `host: ${r3}\r
` : e3[Y], l2 ? E2 += `connection: upgrade\r
upgrade: ${l2}\r
` : e3[W] && !_2[y] ? E2 += "connection: keep-alive\r\n" : E2 += "connection: close\r\n", m2 && (E2 += m2), we.sendHeaders.hasSubscribers && we.sendHeaders.publish({ request: a3, headers: E2, socket: _2 }), n3 && 0 !== T2 ? i2.isBuffer(n3) ? (t2(h2 === n3.byteLength, "buffer body must have content length"), _2.cork(), _2.write(`${E2}content-length: ${h2}\r
\r
`, "latin1"), _2.write(n3), _2.uncork(), a3.onBodySent(n3), a3.onRequestSent(), g2 || (_2[y] = true)) : i2.isBlobLike(n3) ? "function" == typeof n3.stream ? ra({ body: n3.stream(), client: e3, request: a3, socket: _2, contentLength: h2, header: E2, expectsPayload: g2 }) : oa({ body: n3, client: e3, request: a3, socket: _2, contentLength: h2, header: E2, expectsPayload: g2 }) : i2.isStream(n3) ? sa({ body: n3, client: e3, request: a3, socket: _2, contentLength: h2, header: E2, expectsPayload: g2 }) : i2.isIterable(n3) ? ra({ body: n3, client: e3, request: a3, socket: _2, contentLength: h2, header: E2, expectsPayload: g2 }) : t2(false) : (0 === h2 ? _2.write(`${E2}content-length: 0\r
\r
`, "latin1") : (t2(null === h2, "no body must not have content length"), _2.write(`${E2}\r
`, "latin1")), a3.onRequestSent()), true;
    }
    function sa({ h2stream: e3, body: a3, client: n3, request: s3, socket: o3, contentLength: l2, header: d2, expectsPayload: m2 }) {
      if (t2(0 !== l2 || 0 === n3[D], "stream body cannot be pipelined"), "h2" === n3[pe]) {
        let _2 = function(e4) {
          s3.onBodySent(e4);
        };
        const k2 = r2(a3, e3, (n4) => {
          n4 ? (i2.destroy(a3, n4), i2.destroy(e3, n4)) : s3.onRequestSent();
        });
        return k2.on("data", _2), void k2.once("end", () => {
          k2.removeListener("data", _2), i2.destroy(k2);
        });
      }
      let c2 = false;
      const p2 = new ia({ socket: o3, request: s3, contentLength: l2, client: n3, expectsPayload: m2, header: d2 }), A2 = function(e4) {
        if (!c2) try {
          !p2.write(e4) && this.pause && this.pause();
        } catch (e5) {
          i2.destroy(this, e5);
        }
      }, g2 = function() {
        c2 || a3.resume && a3.resume();
      }, T2 = function() {
        if (c2) return;
        const e4 = new u();
        queueMicrotask(() => h2(e4));
      }, h2 = function(e4) {
        if (!c2) {
          if (c2 = true, t2(o3.destroyed || o3[U] && n3[D] <= 1), o3.off("drain", g2).off("error", h2), a3.removeListener("data", A2).removeListener("end", h2).removeListener("error", h2).removeListener("close", T2), !e4) try {
            p2.end();
          } catch (a4) {
            e4 = a4;
          }
          p2.destroy(e4), !e4 || "UND_ERR_INFO" === e4.code && "reset" === e4.message ? i2.destroy(a3) : i2.destroy(a3, e4);
        }
      };
      a3.on("data", A2).on("end", h2).on("error", h2).on("close", T2), a3.resume && a3.resume(), o3.on("drain", g2).on("error", h2);
    }
    async function oa({ h2stream: e3, body: a3, client: n3, request: s3, socket: o3, contentLength: r3, header: l2, expectsPayload: d2 }) {
      t2(r3 === a3.size, "blob body must have content length");
      const m2 = "h2" === n3[pe];
      try {
        if (null != r3 && r3 !== a3.size) throw new c();
        const t3 = Buffer.from(await a3.arrayBuffer());
        m2 ? (e3.cork(), e3.write(t3), e3.uncork()) : (o3.cork(), o3.write(`${l2}content-length: ${r3}\r
\r
`, "latin1"), o3.write(t3), o3.uncork()), s3.onBodySent(t3), s3.onRequestSent(), d2 || (o3[y] = true), aa(n3);
      } catch (a4) {
        i2.destroy(m2 ? e3 : o3, a4);
      }
    }
    async function ra({ h2stream: e3, body: a3, client: n3, request: s3, socket: o3, contentLength: r3, header: i3, expectsPayload: l2 }) {
      t2(0 !== r3 || 0 === n3[D], "iterator body cannot be pipelined");
      let d2 = null;
      function m2() {
        if (d2) {
          const e4 = d2;
          d2 = null, e4();
        }
      }
      const c2 = () => new Promise((e4, a4) => {
        t2(null === d2), o3[J] ? a4(o3[J]) : d2 = e4;
      });
      if ("h2" === n3[pe]) {
        e3.on("close", m2).on("drain", m2);
        try {
          for await (const n4 of a3) {
            if (o3[J]) throw o3[J];
            const a4 = e3.write(n4);
            s3.onBodySent(n4), a4 || await c2();
          }
        } catch (a4) {
          e3.destroy(a4);
        } finally {
          s3.onRequestSent(), e3.end(), e3.off("close", m2).off("drain", m2);
        }
        return;
      }
      o3.on("close", m2).on("drain", m2);
      const p2 = new ia({ socket: o3, request: s3, contentLength: r3, client: n3, expectsPayload: l2, header: i3 });
      try {
        for await (const e4 of a3) {
          if (o3[J]) throw o3[J];
          p2.write(e4) || await c2();
        }
        p2.end();
      } catch (e4) {
        p2.destroy(e4);
      } finally {
        o3.off("close", m2).off("drain", m2);
      }
    }
    class ia {
      constructor({ socket: e3, request: a3, contentLength: n3, client: t3, expectsPayload: s3, header: o3 }) {
        this.socket = e3, this.request = a3, this.contentLength = n3, this.client = t3, this.bytesWritten = 0, this.expectsPayload = s3, this.header = o3, e3[U] = true;
      }
      write(e3) {
        const { socket: a3, request: n3, contentLength: t3, client: s3, bytesWritten: o3, expectsPayload: r3, header: i3 } = this;
        if (a3[J]) throw a3[J];
        if (a3.destroyed) return false;
        const l2 = Buffer.byteLength(e3);
        if (!l2) return true;
        if (null !== t3 && o3 + l2 > t3) {
          if (s3[ae]) throw new c();
          process.emitWarning(new c());
        }
        a3.cork(), 0 === o3 && (r3 || (a3[y] = true), null === t3 ? a3.write(`${i3}transfer-encoding: chunked\r
`, "latin1") : a3.write(`${i3}content-length: ${t3}\r
\r
`, "latin1")), null === t3 && a3.write(`\r
${l2.toString(16)}\r
`, "latin1"), this.bytesWritten += l2;
        const d2 = a3.write(e3);
        return a3.uncork(), n3.onBodySent(e3), d2 || a3[B].timeout && a3[B].timeoutType === qe && a3[B].timeout.refresh && a3[B].timeout.refresh(), d2;
      }
      end() {
        const { socket: e3, contentLength: a3, client: n3, bytesWritten: t3, expectsPayload: s3, header: o3, request: r3 } = this;
        if (r3.onRequestSent(), e3[U] = false, e3[J]) throw e3[J];
        if (!e3.destroyed) {
          if (0 === t3 ? s3 ? e3.write(`${o3}content-length: 0\r
\r
`, "latin1") : e3.write(`${o3}\r
`, "latin1") : null === a3 && e3.write("\r\n0\r\n\r\n", "latin1"), null !== a3 && t3 !== a3) {
            if (n3[ae]) throw new c();
            process.emitWarning(new c());
          }
          e3[B].timeout && e3[B].timeoutType === qe && e3[B].timeout.refresh && e3[B].timeout.refresh(), aa(n3);
        }
      }
      destroy(e3) {
        const { socket: a3, client: n3 } = this;
        a3[U] = false, e3 && (t2(n3[D] <= 1, "pipeline should only contain this request"), i2.destroy(a3, e3));
      }
    }
    function la(e3, a3, n3) {
      try {
        a3.onError(n3), t2(a3.aborted);
      } catch (n4) {
        e3.emit("error", n4);
      }
    }
    e2.exports = class extends m {
      constructor(e3, { interceptors: a3, maxHeaderSize: n3, headersTimeout: t3, socketTimeout: r3, requestTimeout: l2, connectTimeout: d2, bodyTimeout: m2, idleTimeout: c2, keepAlive: p2, keepAliveTimeout: u2, maxKeepAliveTimeout: g2, keepAliveMaxTimeout: T2, keepAliveTimeoutThreshold: h2, socketPath: k2, pipelining: _2, tls: E2, strictContentLength: f2, maxCachedSessions: C2, maxRedirections: y2, connect: R2, maxRequestsPerClient: N2, localAddress: B2, maxResponseSize: w2, autoSelectFamily: b2, autoSelectFamilyAttemptTimeout: D2, allowH2: M2, maxConcurrentStreams: O2 } = {}) {
        if (super(), void 0 !== p2) throw new A("unsupported keepAlive, use pipelining=0 instead");
        if (void 0 !== r3) throw new A("unsupported socketTimeout, use headersTimeout & bodyTimeout instead");
        if (void 0 !== l2) throw new A("unsupported requestTimeout, use headersTimeout & bodyTimeout instead");
        if (void 0 !== c2) throw new A("unsupported idleTimeout, use keepAliveTimeout instead");
        if (void 0 !== g2) throw new A("unsupported maxKeepAliveTimeout, use keepAliveMaxTimeout instead");
        if (null != n3 && !Number.isFinite(n3)) throw new A("invalid maxHeaderSize");
        if (null != k2 && "string" != typeof k2) throw new A("invalid socketPath");
        if (null != d2 && (!Number.isFinite(d2) || d2 < 0)) throw new A("invalid connectTimeout");
        if (null != u2 && (!Number.isFinite(u2) || u2 <= 0)) throw new A("invalid keepAliveTimeout");
        if (null != T2 && (!Number.isFinite(T2) || T2 <= 0)) throw new A("invalid keepAliveMaxTimeout");
        if (null != h2 && !Number.isFinite(h2)) throw new A("invalid keepAliveTimeoutThreshold");
        if (null != t3 && (!Number.isInteger(t3) || t3 < 0)) throw new A("headersTimeout must be a positive integer or zero");
        if (null != m2 && (!Number.isInteger(m2) || m2 < 0)) throw new A("bodyTimeout must be a positive integer or zero");
        if (null != R2 && "function" != typeof R2 && "object" != typeof R2) throw new A("connect must be a function or an object");
        if (null != y2 && (!Number.isInteger(y2) || y2 < 0)) throw new A("maxRedirections must be a positive number");
        if (null != N2 && (!Number.isInteger(N2) || N2 < 0)) throw new A("maxRequestsPerClient must be a positive number");
        if (null != B2 && ("string" != typeof B2 || 0 === s2.isIP(B2))) throw new A("localAddress must be valid string IP address");
        if (null != w2 && (!Number.isInteger(w2) || w2 < -1)) throw new A("maxResponseSize must be a positive number");
        if (null != D2 && (!Number.isInteger(D2) || D2 < -1)) throw new A("autoSelectFamilyAttemptTimeout must be a positive number");
        if (null != M2 && "boolean" != typeof M2) throw new A("allowH2 must be a valid boolean value");
        if (null != O2 && ("number" != typeof O2 || O2 < 1)) throw new A("maxConcurrentStreams must be a possitive integer, greater than 0");
        "function" != typeof R2 && (R2 = I({ ...E2, maxCachedSessions: C2, allowH2: M2, socketPath: k2, timeout: d2, ...i2.nodeHasAutoSelectFamily && b2 ? { autoSelectFamily: b2, autoSelectFamilyAttemptTimeout: D2 } : void 0, ...R2 })), this[de] = a3 && a3.Client && Array.isArray(a3.Client) ? a3.Client : [Ue({ maxRedirections: y2 })], this[v] = i2.parseOrigin(e3), this[ne] = R2, this[K] = null, this[W] = null != _2 ? _2 : 1, this[$] = n3 || o2.maxHeaderSize, this[V] = u2 ?? 4e3, this[X] = T2 ?? 6e5, this[z] = h2 ?? 1e3, this[j] = this[V], this[S] = null, this[me] = null != B2 ? B2 : null, this[Q] = 0, this[G] = 0, this[Y] = `host: ${this[v].hostname}${this[v].port ? `:${this[v].port}` : ""}\r
`, this[ee] = null != m2 ? m2 : 3e5, this[Z] = null != t3 ? t3 : 3e5, this[ae] = f2 ?? true, this[te] = y2, this[se] = N2, this[Be] = null, this[ce] = w2 > -1 ? w2 : -1, this[pe] = "h1", this[ue] = null, this[ge] = M2 ? { openStreams: 0, maxConcurrentStreams: null != O2 ? O2 : 100 } : null, this[Ae] = `${this[v].hostname}${this[v].port ? `:${this[v].port}` : ""}`, this[F] = [], this[H] = 0, this[q] = 0;
      }
      get pipelining() {
        return this[W];
      }
      set pipelining(e3) {
        this[W] = e3, aa(this, true);
      }
      get [M]() {
        return this[F].length - this[q];
      }
      get [D]() {
        return this[q] - this[H];
      }
      get [O]() {
        return this[F].length - this[H];
      }
      get [P]() {
        return !!this[K] && !this[L] && !this[K].destroyed;
      }
      get [N]() {
        const e3 = this[K];
        return e3 && (e3[y] || e3[U] || e3[b]) || this[O] >= (this[W] || 1) || this[M] > 0;
      }
      [w](e3) {
        Ze(this), this.once("connect", e3);
      }
      [le](e3, a3) {
        const n3 = e3.origin || this[v].origin, t3 = "h2" === this[pe] ? d[Te](n3, e3, a3) : d[ke](n3, e3, a3);
        return this[F].push(t3), this[Q] || (null == i2.bodyLength(t3.body) && i2.isIterable(t3.body) ? (this[Q] = 1, process.nextTick(aa, this)) : aa(this, true)), this[Q] && 2 !== this[G] && this[N] && (this[G] = 2), this[G] < 2;
      }
      async [re]() {
        return new Promise((e3) => {
          this[O] ? this[Be] = e3 : e3(null);
        });
      }
      async [ie](e3) {
        return new Promise((a3) => {
          const n3 = this[F].splice(this[q]);
          for (let a4 = 0; a4 < n3.length; a4++) {
            la(this, n3[a4], e3);
          }
          const t3 = () => {
            this[Be] && (this[Be](), this[Be] = null), a3();
          };
          null != this[ue] && (i2.destroy(this[ue], e3), this[ue] = null, this[ge] = null), this[K] ? i2.destroy(this[K].on("close", t3), e3) : queueMicrotask(t3), aa(this);
        });
      }
    };
  }