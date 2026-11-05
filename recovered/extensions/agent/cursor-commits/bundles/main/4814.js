// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 4814 range:401952..438976
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4814: (e2, n2, a2) => {
    "use strict";
    const t2 = a2(2613), s2 = a2(9278), o2 = a2(8611), { pipeline: r2 } = a2(2203), i2 = a2(9361), A = a2(3891), l = a2(3308), c = a2(9792), { RequestContentLengthMismatchError: m, ResponseContentLengthMismatchError: d, InvalidArgumentError: g, RequestAbortedError: u, HeadersTimeoutError: E, HeadersOverflowError: p, SocketError: T, InformationalError: k, BodyTimeoutError: I, HTTPParserError: h, ResponseExceededMaxSizeError: _, ClientDestroyedError: C } = a2(7902), f = a2(3991), { kUrl: B, kReset: Q, kServerName: y, kClient: R, kBusy: N, kParser: v, kConnect: S, kBlocking: D, kResuming: w, kRunning: b, kPending: M, kSize: F, kWriting: O, kQueue: U, kConnected: L, kConnecting: P, kNeedDrain: x, kNoRef: G, kKeepAliveDefaultTimeout: Y, kHostHeader: J, kPendingIdx: V, kRunningIdx: q, kError: H, kPipelining: W, kSocket: K, kKeepAliveTimeoutValue: j, kMaxHeadersSize: X, kKeepAliveMaxTimeout: Z, kKeepAliveTimeoutThreshold: z, kHeadersTimeout: $, kBodyTimeout: ee, kStrictContentLength: ne, kConnector: ae, kMaxRedirections: te, kMaxRequests: se, kCounter: oe, kClose: re, kDestroy: ie, kDispatch: Ae, kInterceptors: le, kLocalAddress: ce, kMaxResponseSize: me, kHTTPConnVersion: de, kHost: ge, kHTTP2Session: ue, kHTTP2SessionState: Ee, kHTTP2BuildRequest: pe, kHTTP2CopyHeaders: Te, kHTTP1BuildRequest: ke } = a2(8832);
    let Ie;
    try {
      Ie = a2(5675);
    } catch {
      Ie = { constants: {} };
    }
    const { constants: { HTTP2_HEADER_AUTHORITY: he, HTTP2_HEADER_METHOD: _e, HTTP2_HEADER_PATH: Ce, HTTP2_HEADER_SCHEME: fe, HTTP2_HEADER_CONTENT_LENGTH: Be, HTTP2_HEADER_EXPECT: Qe, HTTP2_HEADER_STATUS: ye } } = Ie;
    let Re = false;
    const Ne = Buffer[Symbol.species], ve = /* @__PURE__ */ Symbol("kClosedResolve"), Se = {};
    try {
      const e3 = a2(1637);
      Se.sendHeaders = e3.channel("undici:client:sendHeaders"), Se.beforeConnect = e3.channel("undici:client:beforeConnect"), Se.connectError = e3.channel("undici:client:connectError"), Se.connected = e3.channel("undici:client:connected");
    } catch {
      Se.sendHeaders = { hasSubscribers: false }, Se.beforeConnect = { hasSubscribers: false }, Se.connectError = { hasSubscribers: false }, Se.connected = { hasSubscribers: false };
    }
    function De(e3) {
      t2("ERR_TLS_CERT_ALTNAME_INVALID" !== e3.code), this[K][H] = e3, Xe(this[R], e3);
    }
    function we(e3, n3, a3) {
      const t3 = new k(`HTTP/2: "frameError" received - type ${e3}, code ${n3}`);
      0 === a3 && (this[K][H] = t3, Xe(this[R], t3));
    }
    function be() {
      i2.destroy(this, new T("other side closed")), i2.destroy(this[K], new T("other side closed"));
    }
    function Me(e3) {
      const n3 = this[R], a3 = new k(`HTTP/2: "GOAWAY" frame received with code ${e3}`);
      if (n3[K] = null, n3[ue] = null, n3.destroyed) {
        t2(0 === this[M]);
        const e4 = n3[U].splice(n3[q]);
        for (let n4 = 0; n4 < e4.length; n4++) {
          ln(this, e4[n4], a3);
        }
      } else if (n3[b] > 0) {
        const e4 = n3[U][n3[q]];
        n3[U][n3[q]++] = null, ln(n3, e4, a3);
      }
      n3[V] = n3[q], t2(0 === n3[b]), n3.emit("disconnect", n3[B], [n3], a3), nn(n3);
    }
    const Fe = a2(6747), Oe = a2(858), Ue = Buffer.alloc(0);
    let Le = null, Pe = (async function() {
      const e3 = process.env.JEST_WORKER_ID ? a2(2789) : void 0;
      let n3;
      try {
        n3 = await WebAssembly.compile(Buffer.from(a2(871), "base64"));
      } catch (t3) {
        n3 = await WebAssembly.compile(Buffer.from(e3 || a2(2789), "base64"));
      }
      return await WebAssembly.instantiate(n3, { env: { wasm_on_url: (e4, n4, a3) => 0, wasm_on_status: (e4, n4, a3) => {
        t2.strictEqual(xe.ptr, e4);
        const s3 = n4 - Je + Ge.byteOffset;
        return xe.onStatus(new Ne(Ge.buffer, s3, a3)) || 0;
      }, wasm_on_message_begin: (e4) => (t2.strictEqual(xe.ptr, e4), xe.onMessageBegin() || 0), wasm_on_header_field: (e4, n4, a3) => {
        t2.strictEqual(xe.ptr, e4);
        const s3 = n4 - Je + Ge.byteOffset;
        return xe.onHeaderField(new Ne(Ge.buffer, s3, a3)) || 0;
      }, wasm_on_header_value: (e4, n4, a3) => {
        t2.strictEqual(xe.ptr, e4);
        const s3 = n4 - Je + Ge.byteOffset;
        return xe.onHeaderValue(new Ne(Ge.buffer, s3, a3)) || 0;
      }, wasm_on_headers_complete: (e4, n4, a3, s3) => (t2.strictEqual(xe.ptr, e4), xe.onHeadersComplete(n4, Boolean(a3), Boolean(s3)) || 0), wasm_on_body: (e4, n4, a3) => {
        t2.strictEqual(xe.ptr, e4);
        const s3 = n4 - Je + Ge.byteOffset;
        return xe.onBody(new Ne(Ge.buffer, s3, a3)) || 0;
      }, wasm_on_message_complete: (e4) => (t2.strictEqual(xe.ptr, e4), xe.onMessageComplete() || 0) } });
    })();
    Pe.catch();
    let xe = null, Ge = null, Ye = 0, Je = null;
    const Ve = 1, qe = 3;
    class He {
      constructor(e3, n3, { exports: a3 }) {
        t2(Number.isFinite(e3[X]) && e3[X] > 0), this.llhttp = a3, this.ptr = this.llhttp.llhttp_alloc(Fe.TYPE.RESPONSE), this.client = e3, this.socket = n3, this.timeout = null, this.timeoutValue = null, this.timeoutType = null, this.statusCode = null, this.statusText = "", this.upgrade = false, this.headers = [], this.headersSize = 0, this.headersMaxSize = e3[X], this.shouldKeepAlive = false, this.paused = false, this.resume = this.resume.bind(this), this.bytesRead = 0, this.keepAlive = "", this.contentLength = "", this.connection = "", this.maxResponseSize = e3[me];
      }
      setTimeout(e3, n3) {
        this.timeoutType = n3, e3 !== this.timeoutValue ? (A.clearTimeout(this.timeout), e3 ? (this.timeout = A.setTimeout(We, e3, this), this.timeout.unref && this.timeout.unref()) : this.timeout = null, this.timeoutValue = e3) : this.timeout && this.timeout.refresh && this.timeout.refresh();
      }
      resume() {
        !this.socket.destroyed && this.paused && (t2(null != this.ptr), t2(null == xe), this.llhttp.llhttp_resume(this.ptr), t2(2 === this.timeoutType), this.timeout && this.timeout.refresh && this.timeout.refresh(), this.paused = false, this.execute(this.socket.read() || Ue), this.readMore());
      }
      readMore() {
        for (; !this.paused && this.ptr; ) {
          const e3 = this.socket.read();
          if (null === e3) break;
          this.execute(e3);
        }
      }
      execute(e3) {
        t2(null != this.ptr), t2(null == xe), t2(!this.paused);
        const { socket: n3, llhttp: a3 } = this;
        e3.length > Ye && (Je && a3.free(Je), Ye = 4096 * Math.ceil(e3.length / 4096), Je = a3.malloc(Ye)), new Uint8Array(a3.memory.buffer, Je, Ye).set(e3);
        try {
          let t3;
          try {
            Ge = e3, xe = this, t3 = a3.llhttp_execute(this.ptr, Je, e3.length);
          } catch (e4) {
            throw e4;
          } finally {
            xe = null, Ge = null;
          }
          const s3 = a3.llhttp_get_error_pos(this.ptr) - Je;
          if (t3 === Fe.ERROR.PAUSED_UPGRADE) this.onUpgrade(e3.slice(s3));
          else if (t3 === Fe.ERROR.PAUSED) this.paused = true, n3.unshift(e3.slice(s3));
          else if (t3 !== Fe.ERROR.OK) {
            const n4 = a3.llhttp_get_error_reason(this.ptr);
            let o3 = "";
            if (n4) {
              const e4 = new Uint8Array(a3.memory.buffer, n4).indexOf(0);
              o3 = "Response does not match the HTTP/1.1 protocol (" + Buffer.from(a3.memory.buffer, n4, e4).toString() + ")";
            }
            throw new h(o3, Fe.ERROR[t3], e3.slice(s3));
          }
        } catch (e4) {
          i2.destroy(n3, e4);
        }
      }
      destroy() {
        t2(null != this.ptr), t2(null == xe), this.llhttp.llhttp_free(this.ptr), this.ptr = null, A.clearTimeout(this.timeout), this.timeout = null, this.timeoutValue = null, this.timeoutType = null, this.paused = false;
      }
      onStatus(e3) {
        this.statusText = e3.toString();
      }
      onMessageBegin() {
        const { socket: e3, client: n3 } = this;
        if (e3.destroyed) return -1;
        return n3[U][n3[q]] ? void 0 : -1;
      }
      onHeaderField(e3) {
        const n3 = this.headers.length;
        1 & n3 ? this.headers[n3 - 1] = Buffer.concat([this.headers[n3 - 1], e3]) : this.headers.push(e3), this.trackHeader(e3.length);
      }
      onHeaderValue(e3) {
        let n3 = this.headers.length;
        1 & ~n3 ? this.headers[n3 - 1] = Buffer.concat([this.headers[n3 - 1], e3]) : (this.headers.push(e3), n3 += 1);
        const a3 = this.headers[n3 - 2];
        10 === a3.length && "keep-alive" === a3.toString().toLowerCase() ? this.keepAlive += e3.toString() : 10 === a3.length && "connection" === a3.toString().toLowerCase() ? this.connection += e3.toString() : 14 === a3.length && "content-length" === a3.toString().toLowerCase() && (this.contentLength += e3.toString()), this.trackHeader(e3.length);
      }
      trackHeader(e3) {
        this.headersSize += e3, this.headersSize >= this.headersMaxSize && i2.destroy(this.socket, new p());
      }
      onUpgrade(e3) {
        const { upgrade: n3, client: a3, socket: s3, headers: o3, statusCode: r3 } = this;
        t2(n3);
        const A2 = a3[U][a3[q]];
        t2(A2), t2(!s3.destroyed), t2(s3 === a3[K]), t2(!this.paused), t2(A2.upgrade || "CONNECT" === A2.method), this.statusCode = null, this.statusText = "", this.shouldKeepAlive = null, t2(this.headers.length % 2 == 0), this.headers = [], this.headersSize = 0, s3.unshift(e3), s3[v].destroy(), s3[v] = null, s3[R] = null, s3[H] = null, s3.removeListener("error", je).removeListener("readable", Ke).removeListener("end", Ze).removeListener("close", ze), a3[K] = null, a3[U][a3[q]++] = null, a3.emit("disconnect", a3[B], [a3], new k("upgrade"));
        try {
          A2.onUpgrade(r3, o3, s3);
        } catch (e4) {
          i2.destroy(s3, e4);
        }
        nn(a3);
      }
      onHeadersComplete(e3, n3, a3) {
        const { client: s3, socket: o3, headers: r3, statusText: A2 } = this;
        if (o3.destroyed) return -1;
        const l2 = s3[U][s3[q]];
        if (!l2) return -1;
        if (t2(!this.upgrade), t2(this.statusCode < 200), 100 === e3) return i2.destroy(o3, new T("bad response", i2.getSocketInfo(o3))), -1;
        if (n3 && !l2.upgrade) return i2.destroy(o3, new T("bad upgrade", i2.getSocketInfo(o3))), -1;
        if (t2.strictEqual(this.timeoutType, Ve), this.statusCode = e3, this.shouldKeepAlive = a3 || "HEAD" === l2.method && !o3[Q] && "keep-alive" === this.connection.toLowerCase(), this.statusCode >= 200) {
          const e4 = null != l2.bodyTimeout ? l2.bodyTimeout : s3[ee];
          this.setTimeout(e4, 2);
        } else this.timeout && this.timeout.refresh && this.timeout.refresh();
        if ("CONNECT" === l2.method) return t2(1 === s3[b]), this.upgrade = true, 2;
        if (n3) return t2(1 === s3[b]), this.upgrade = true, 2;
        if (t2(this.headers.length % 2 == 0), this.headers = [], this.headersSize = 0, this.shouldKeepAlive && s3[W]) {
          const e4 = this.keepAlive ? i2.parseKeepAliveTimeout(this.keepAlive) : null;
          if (null != e4) {
            const n4 = Math.min(e4 - s3[z], s3[Z]);
            n4 <= 0 ? o3[Q] = true : s3[j] = n4;
          } else s3[j] = s3[Y];
        } else o3[Q] = true;
        const c2 = false === l2.onHeaders(e3, r3, this.resume, A2);
        return l2.aborted ? -1 : "HEAD" === l2.method || e3 < 200 ? 1 : (o3[D] && (o3[D] = false, nn(s3)), c2 ? Fe.ERROR.PAUSED : 0);
      }
      onBody(e3) {
        const { client: n3, socket: a3, statusCode: s3, maxResponseSize: o3 } = this;
        if (a3.destroyed) return -1;
        const r3 = n3[U][n3[q]];
        return t2(r3), t2.strictEqual(this.timeoutType, 2), this.timeout && this.timeout.refresh && this.timeout.refresh(), t2(s3 >= 200), o3 > -1 && this.bytesRead + e3.length > o3 ? (i2.destroy(a3, new _()), -1) : (this.bytesRead += e3.length, false === r3.onData(e3) ? Fe.ERROR.PAUSED : void 0);
      }
      onMessageComplete() {
        const { client: e3, socket: n3, statusCode: a3, upgrade: s3, headers: o3, contentLength: r3, bytesRead: A2, shouldKeepAlive: l2 } = this;
        if (n3.destroyed && (!a3 || l2)) return -1;
        if (s3) return;
        const c2 = e3[U][e3[q]];
        return t2(c2), t2(a3 >= 100), this.statusCode = null, this.statusText = "", this.bytesRead = 0, this.contentLength = "", this.keepAlive = "", this.connection = "", t2(this.headers.length % 2 == 0), this.headers = [], this.headersSize = 0, a3 < 200 ? void 0 : "HEAD" !== c2.method && r3 && A2 !== parseInt(r3, 10) ? (i2.destroy(n3, new d()), -1) : (c2.onComplete(o3), e3[U][e3[q]++] = null, n3[O] ? (t2.strictEqual(e3[b], 0), i2.destroy(n3, new k("reset")), Fe.ERROR.PAUSED) : l2 ? n3[Q] && 0 === e3[b] ? (i2.destroy(n3, new k("reset")), Fe.ERROR.PAUSED) : void (1 === e3[W] ? setImmediate(nn, e3) : nn(e3)) : (i2.destroy(n3, new k("reset")), Fe.ERROR.PAUSED));
      }
    }
    function We(e3) {
      const { socket: n3, timeoutType: a3, client: s3 } = e3;
      a3 === Ve ? (!n3[O] || n3.writableNeedDrain || s3[b] > 1) && (t2(!e3.paused, "cannot be paused while waiting for headers"), i2.destroy(n3, new E())) : 2 === a3 ? e3.paused || i2.destroy(n3, new I()) : a3 === qe && (t2(0 === s3[b] && s3[j]), i2.destroy(n3, new k("socket idle timeout")));
    }
    function Ke() {
      const { [v]: e3 } = this;
      e3 && e3.readMore();
    }
    function je(e3) {
      const { [R]: n3, [v]: a3 } = this;
      t2("ERR_TLS_CERT_ALTNAME_INVALID" !== e3.code), "h2" === n3[de] || "ECONNRESET" !== e3.code || !a3.statusCode || a3.shouldKeepAlive ? (this[H] = e3, Xe(this[R], e3)) : a3.onMessageComplete();
    }
    function Xe(e3, n3) {
      if (0 === e3[b] && "UND_ERR_INFO" !== n3.code && "UND_ERR_SOCKET" !== n3.code) {
        t2(e3[V] === e3[q]);
        const a3 = e3[U].splice(e3[q]);
        for (let t3 = 0; t3 < a3.length; t3++) {
          ln(e3, a3[t3], n3);
        }
        t2(0 === e3[F]);
      }
    }
    function Ze() {
      const { [v]: e3, [R]: n3 } = this;
      "h2" === n3[de] || !e3.statusCode || e3.shouldKeepAlive ? i2.destroy(this, new T("other side closed", i2.getSocketInfo(this))) : e3.onMessageComplete();
    }
    function ze() {
      const { [R]: e3, [v]: n3 } = this;
      "h1" === e3[de] && n3 && (this[H] || !n3.statusCode || n3.shouldKeepAlive || n3.onMessageComplete(), this[v].destroy(), this[v] = null);
      const a3 = this[H] || new T("closed", i2.getSocketInfo(this));
      if (e3[K] = null, e3.destroyed) {
        t2(0 === e3[M]);
        const n4 = e3[U].splice(e3[q]);
        for (let t3 = 0; t3 < n4.length; t3++) {
          ln(e3, n4[t3], a3);
        }
      } else if (e3[b] > 0 && "UND_ERR_INFO" !== a3.code) {
        const n4 = e3[U][e3[q]];
        e3[U][e3[q]++] = null, ln(e3, n4, a3);
      }
      e3[V] = e3[q], t2(0 === e3[b]), e3.emit("disconnect", e3[B], [e3], a3), nn(e3);
    }
    async function $e(e3) {
      t2(!e3[P]), t2(!e3[K]);
      let { host: n3, hostname: a3, protocol: o3, port: r3 } = e3[B];
      if ("[" === a3[0]) {
        const e4 = a3.indexOf("]");
        t2(-1 !== e4);
        const n4 = a3.substring(1, e4);
        t2(s2.isIP(n4)), a3 = n4;
      }
      e3[P] = true, Se.beforeConnect.hasSubscribers && Se.beforeConnect.publish({ connectParams: { host: n3, hostname: a3, protocol: o3, port: r3, servername: e3[y], localAddress: e3[ce] }, connector: e3[ae] });
      try {
        const s3 = await new Promise((t3, s4) => {
          e3[ae]({ host: n3, hostname: a3, protocol: o3, port: r3, servername: e3[y], localAddress: e3[ce] }, (e4, n4) => {
            e4 ? s4(e4) : t3(n4);
          });
        });
        if (e3.destroyed) return void i2.destroy(s3.on("error", () => {
        }), new C());
        e3[P] = false, t2(s3);
        if ("h2" === s3.alpnProtocol) {
          Re || (Re = true, process.emitWarning("H2 support is experimental, expect them to change at any time.", { code: "UNDICI-H2" }));
          const n4 = Ie.connect(e3[B], { createConnection: () => s3, peerMaxConcurrentStreams: e3[Ee].maxConcurrentStreams });
          e3[de] = "h2", n4[R] = e3, n4[K] = s3, n4.on("error", De), n4.on("frameError", we), n4.on("end", be), n4.on("goaway", Me), n4.on("close", ze), n4.unref(), e3[ue] = n4, s3[ue] = n4;
        } else Le || (Le = await Pe, Pe = null), s3[G] = false, s3[O] = false, s3[Q] = false, s3[D] = false, s3[v] = new He(e3, s3, Le);
        s3[oe] = 0, s3[se] = e3[se], s3[R] = e3, s3[H] = null, s3.on("error", je).on("readable", Ke).on("end", Ze).on("close", ze), e3[K] = s3, Se.connected.hasSubscribers && Se.connected.publish({ connectParams: { host: n3, hostname: a3, protocol: o3, port: r3, servername: e3[y], localAddress: e3[ce] }, connector: e3[ae], socket: s3 }), e3.emit("connect", e3[B], [e3]);
      } catch (s3) {
        if (e3.destroyed) return;
        if (e3[P] = false, Se.connectError.hasSubscribers && Se.connectError.publish({ connectParams: { host: n3, hostname: a3, protocol: o3, port: r3, servername: e3[y], localAddress: e3[ce] }, connector: e3[ae], error: s3 }), "ERR_TLS_CERT_ALTNAME_INVALID" === s3.code) for (t2(0 === e3[b]); e3[M] > 0 && e3[U][e3[V]].servername === e3[y]; ) {
          const n4 = e3[U][e3[V]++];
          ln(e3, n4, s3);
        }
        else Xe(e3, s3);
        e3.emit("connectionError", e3[B], [e3], s3);
      }
      nn(e3);
    }
    function en(e3) {
      e3[x] = 0, e3.emit("drain", e3[B], [e3]);
    }
    function nn(e3, n3) {
      2 !== e3[w] && (e3[w] = 2, (function(e4, n4) {
        for (; ; ) {
          if (e4.destroyed) return void t2(0 === e4[M]);
          if (e4[ve] && !e4[F]) return e4[ve](), void (e4[ve] = null);
          const a3 = e4[K];
          if (a3 && !a3.destroyed && "h2" !== a3.alpnProtocol) {
            if (0 === e4[F] ? !a3[G] && a3.unref && (a3.unref(), a3[G] = true) : a3[G] && a3.ref && (a3.ref(), a3[G] = false), 0 === e4[F]) a3[v].timeoutType !== qe && a3[v].setTimeout(e4[j], qe);
            else if (e4[b] > 0 && a3[v].statusCode < 200 && a3[v].timeoutType !== Ve) {
              const n5 = e4[U][e4[q]], t3 = null != n5.headersTimeout ? n5.headersTimeout : e4[$];
              a3[v].setTimeout(t3, Ve);
            }
          }
          if (e4[N]) e4[x] = 2;
          else if (2 === e4[x]) {
            n4 ? (e4[x] = 1, process.nextTick(en, e4)) : en(e4);
            continue;
          }
          if (0 === e4[M]) return;
          if (e4[b] >= (e4[W] || 1)) return;
          const s3 = e4[U][e4[V]];
          if ("https:" === e4[B].protocol && e4[y] !== s3.servername) {
            if (e4[b] > 0) return;
            if (e4[y] = s3.servername, a3 && a3.servername !== s3.servername) return void i2.destroy(a3, new k("servername changed"));
          }
          if (e4[P]) return;
          if (!a3 && !e4[ue]) return void $e(e4);
          if (a3.destroyed || a3[O] || a3[Q] || a3[D]) return;
          if (e4[b] > 0 && !s3.idempotent) return;
          if (e4[b] > 0 && (s3.upgrade || "CONNECT" === s3.method)) return;
          if (e4[b] > 0 && 0 !== i2.bodyLength(s3.body) && (i2.isStream(s3.body) || i2.isAsyncIterable(s3.body))) return;
          !s3.aborted && tn(e4, s3) ? e4[V]++ : e4[U].splice(e4[V], 1);
        }
      })(e3, n3), e3[w] = 0, e3[q] > 256 && (e3[U].splice(0, e3[q]), e3[V] -= e3[q], e3[q] = 0));
    }
    function an(e3) {
      return "GET" !== e3 && "HEAD" !== e3 && "OPTIONS" !== e3 && "TRACE" !== e3 && "CONNECT" !== e3;
    }
    function tn(e3, n3) {
      if ("h2" === e3[de]) return void (function(e4, n4, a4) {
        const { body: s4, method: o4, path: r4, host: A3, upgrade: c3, expectContinue: d3, signal: g3, headers: E3 } = a4;
        let p3, T3;
        p3 = "string" == typeof E3 ? l[Te](E3.trim()) : E3;
        if (c3) return ln(e4, a4, new Error("Upgrade not supported for H2")), false;
        try {
          a4.onConnect((n5) => {
            a4.aborted || a4.completed || ln(e4, a4, n5 || new u());
          });
        } catch (n5) {
          ln(e4, a4, n5);
        }
        if (a4.aborted) return false;
        const I3 = e4[Ee];
        if (p3[he] = A3 || e4[ge], p3[_e] = o4, "CONNECT" === o4) return n4.ref(), T3 = n4.request(p3, { endStream: false, signal: g3 }), T3.id && !T3.pending ? (a4.onUpgrade(null, null, T3), ++I3.openStreams) : T3.once("ready", () => {
          a4.onUpgrade(null, null, T3), ++I3.openStreams;
        }), T3.once("close", () => {
          I3.openStreams -= 1, 0 === I3.openStreams && n4.unref();
        }), true;
        p3[Ce] = r4, p3[fe] = "https";
        const h3 = "PUT" === o4 || "POST" === o4 || "PATCH" === o4;
        s4 && "function" == typeof s4.read && s4.read(0);
        let _2 = i2.bodyLength(s4);
        null == _2 && (_2 = a4.contentLength);
        0 !== _2 && h3 || (_2 = null);
        if (an(o4) && _2 > 0 && null != a4.contentLength && a4.contentLength !== _2) {
          if (e4[ne]) return ln(e4, a4, new m()), false;
          process.emitWarning(new m());
        }
        null != _2 && (t2(s4, "no body must not have content length"), p3[Be] = `${_2}`);
        n4.ref();
        const C2 = "GET" === o4 || "HEAD" === o4;
        d3 ? (p3[Qe] = "100-continue", T3 = n4.request(p3, { endStream: C2, signal: g3 }), T3.once("continue", f2)) : (T3 = n4.request(p3, { endStream: C2, signal: g3 }), f2());
        return ++I3.openStreams, T3.once("response", (e5) => {
          const { [ye]: n5, ...t3 } = e5;
          false === a4.onHeaders(Number(n5), t3, T3.resume.bind(T3), "") && T3.pause();
        }), T3.once("end", () => {
          a4.onComplete([]);
        }), T3.on("data", (e5) => {
          false === a4.onData(e5) && T3.pause();
        }), T3.once("close", () => {
          I3.openStreams -= 1, 0 === I3.openStreams && n4.unref();
        }), T3.once("error", function(n5) {
          !e4[ue] || e4[ue].destroyed || this.closed || this.destroyed || (I3.streams -= 1, i2.destroy(T3, n5));
        }), T3.once("frameError", (n5, t3) => {
          const s5 = new k(`HTTP/2: "frameError" received - type ${n5}, code ${t3}`);
          ln(e4, a4, s5), !e4[ue] || e4[ue].destroyed || this.closed || this.destroyed || (I3.streams -= 1, i2.destroy(T3, s5));
        }), true;
        function f2() {
          s4 ? i2.isBuffer(s4) ? (t2(_2 === s4.byteLength, "buffer body must have content length"), T3.cork(), T3.write(s4), T3.uncork(), T3.end(), a4.onBodySent(s4), a4.onRequestSent()) : i2.isBlobLike(s4) ? "function" == typeof s4.stream ? rn({ client: e4, request: a4, contentLength: _2, h2stream: T3, expectsPayload: h3, body: s4.stream(), socket: e4[K], header: "" }) : on({ body: s4, client: e4, request: a4, contentLength: _2, expectsPayload: h3, h2stream: T3, header: "", socket: e4[K] }) : i2.isStream(s4) ? sn({ body: s4, client: e4, request: a4, contentLength: _2, expectsPayload: h3, socket: e4[K], h2stream: T3, header: "" }) : i2.isIterable(s4) ? rn({ body: s4, client: e4, request: a4, contentLength: _2, expectsPayload: h3, header: "", h2stream: T3, socket: e4[K] }) : t2(false) : a4.onRequestSent();
        }
      })(e3, e3[ue], n3);
      const { body: a3, method: s3, path: o3, host: r3, upgrade: A2, headers: c2, blocking: d2, reset: g2 } = n3, E2 = "PUT" === s3 || "POST" === s3 || "PATCH" === s3;
      a3 && "function" == typeof a3.read && a3.read(0);
      const p2 = i2.bodyLength(a3);
      let T2 = p2;
      if (null === T2 && (T2 = n3.contentLength), 0 !== T2 || E2 || (T2 = null), an(s3) && T2 > 0 && null !== n3.contentLength && n3.contentLength !== T2) {
        if (e3[ne]) return ln(e3, n3, new m()), false;
        process.emitWarning(new m());
      }
      const I2 = e3[K];
      try {
        n3.onConnect((a4) => {
          n3.aborted || n3.completed || (ln(e3, n3, a4 || new u()), i2.destroy(I2, new k("aborted")));
        });
      } catch (a4) {
        ln(e3, n3, a4);
      }
      if (n3.aborted) return false;
      "HEAD" === s3 && (I2[Q] = true), (A2 || "CONNECT" === s3) && (I2[Q] = true), null != g2 && (I2[Q] = g2), e3[se] && I2[oe]++ >= e3[se] && (I2[Q] = true), d2 && (I2[D] = true);
      let h2 = `${s3} ${o3} HTTP/1.1\r
`;
      return h2 += "string" == typeof r3 ? `host: ${r3}\r
` : e3[J], A2 ? h2 += `connection: upgrade\r
upgrade: ${A2}\r
` : e3[W] && !I2[Q] ? h2 += "connection: keep-alive\r\n" : h2 += "connection: close\r\n", c2 && (h2 += c2), Se.sendHeaders.hasSubscribers && Se.sendHeaders.publish({ request: n3, headers: h2, socket: I2 }), a3 && 0 !== p2 ? i2.isBuffer(a3) ? (t2(T2 === a3.byteLength, "buffer body must have content length"), I2.cork(), I2.write(`${h2}content-length: ${T2}\r
\r
`, "latin1"), I2.write(a3), I2.uncork(), n3.onBodySent(a3), n3.onRequestSent(), E2 || (I2[Q] = true)) : i2.isBlobLike(a3) ? "function" == typeof a3.stream ? rn({ body: a3.stream(), client: e3, request: n3, socket: I2, contentLength: T2, header: h2, expectsPayload: E2 }) : on({ body: a3, client: e3, request: n3, socket: I2, contentLength: T2, header: h2, expectsPayload: E2 }) : i2.isStream(a3) ? sn({ body: a3, client: e3, request: n3, socket: I2, contentLength: T2, header: h2, expectsPayload: E2 }) : i2.isIterable(a3) ? rn({ body: a3, client: e3, request: n3, socket: I2, contentLength: T2, header: h2, expectsPayload: E2 }) : t2(false) : (0 === T2 ? I2.write(`${h2}content-length: 0\r
\r
`, "latin1") : (t2(null === T2, "no body must not have content length"), I2.write(`${h2}\r
`, "latin1")), n3.onRequestSent()), true;
    }
    function sn({ h2stream: e3, body: n3, client: a3, request: s3, socket: o3, contentLength: A2, header: l2, expectsPayload: c2 }) {
      if (t2(0 !== A2 || 0 === a3[b], "stream body cannot be pipelined"), "h2" === a3[de]) {
        let I2 = function(e4) {
          s3.onBodySent(e4);
        };
        const k2 = r2(n3, e3, (a4) => {
          a4 ? (i2.destroy(n3, a4), i2.destroy(e3, a4)) : s3.onRequestSent();
        });
        return k2.on("data", I2), void k2.once("end", () => {
          k2.removeListener("data", I2), i2.destroy(k2);
        });
      }
      let m2 = false;
      const d2 = new An({ socket: o3, request: s3, contentLength: A2, client: a3, expectsPayload: c2, header: l2 }), g2 = function(e4) {
        if (!m2) try {
          !d2.write(e4) && this.pause && this.pause();
        } catch (e5) {
          i2.destroy(this, e5);
        }
      }, E2 = function() {
        m2 || n3.resume && n3.resume();
      }, p2 = function() {
        if (m2) return;
        const e4 = new u();
        queueMicrotask(() => T2(e4));
      }, T2 = function(e4) {
        if (!m2) {
          if (m2 = true, t2(o3.destroyed || o3[O] && a3[b] <= 1), o3.off("drain", E2).off("error", T2), n3.removeListener("data", g2).removeListener("end", T2).removeListener("error", T2).removeListener("close", p2), !e4) try {
            d2.end();
          } catch (n4) {
            e4 = n4;
          }
          d2.destroy(e4), !e4 || "UND_ERR_INFO" === e4.code && "reset" === e4.message ? i2.destroy(n3) : i2.destroy(n3, e4);
        }
      };
      n3.on("data", g2).on("end", T2).on("error", T2).on("close", p2), n3.resume && n3.resume(), o3.on("drain", E2).on("error", T2);
    }
    async function on({ h2stream: e3, body: n3, client: a3, request: s3, socket: o3, contentLength: r3, header: A2, expectsPayload: l2 }) {
      t2(r3 === n3.size, "blob body must have content length");
      const c2 = "h2" === a3[de];
      try {
        if (null != r3 && r3 !== n3.size) throw new m();
        const t3 = Buffer.from(await n3.arrayBuffer());
        c2 ? (e3.cork(), e3.write(t3), e3.uncork()) : (o3.cork(), o3.write(`${A2}content-length: ${r3}\r
\r
`, "latin1"), o3.write(t3), o3.uncork()), s3.onBodySent(t3), s3.onRequestSent(), l2 || (o3[Q] = true), nn(a3);
      } catch (n4) {
        i2.destroy(c2 ? e3 : o3, n4);
      }
    }
    async function rn({ h2stream: e3, body: n3, client: a3, request: s3, socket: o3, contentLength: r3, header: i3, expectsPayload: A2 }) {
      t2(0 !== r3 || 0 === a3[b], "iterator body cannot be pipelined");
      let l2 = null;
      function c2() {
        if (l2) {
          const e4 = l2;
          l2 = null, e4();
        }
      }
      const m2 = () => new Promise((e4, n4) => {
        t2(null === l2), o3[H] ? n4(o3[H]) : l2 = e4;
      });
      if ("h2" === a3[de]) {
        e3.on("close", c2).on("drain", c2);
        try {
          for await (const a4 of n3) {
            if (o3[H]) throw o3[H];
            const n4 = e3.write(a4);
            s3.onBodySent(a4), n4 || await m2();
          }
        } catch (n4) {
          e3.destroy(n4);
        } finally {
          s3.onRequestSent(), e3.end(), e3.off("close", c2).off("drain", c2);
        }
        return;
      }
      o3.on("close", c2).on("drain", c2);
      const d2 = new An({ socket: o3, request: s3, contentLength: r3, client: a3, expectsPayload: A2, header: i3 });
      try {
        for await (const e4 of n3) {
          if (o3[H]) throw o3[H];
          d2.write(e4) || await m2();
        }
        d2.end();
      } catch (e4) {
        d2.destroy(e4);
      } finally {
        o3.off("close", c2).off("drain", c2);
      }
    }
    class An {
      constructor({ socket: e3, request: n3, contentLength: a3, client: t3, expectsPayload: s3, header: o3 }) {
        this.socket = e3, this.request = n3, this.contentLength = a3, this.client = t3, this.bytesWritten = 0, this.expectsPayload = s3, this.header = o3, e3[O] = true;
      }
      write(e3) {
        const { socket: n3, request: a3, contentLength: t3, client: s3, bytesWritten: o3, expectsPayload: r3, header: i3 } = this;
        if (n3[H]) throw n3[H];
        if (n3.destroyed) return false;
        const A2 = Buffer.byteLength(e3);
        if (!A2) return true;
        if (null !== t3 && o3 + A2 > t3) {
          if (s3[ne]) throw new m();
          process.emitWarning(new m());
        }
        n3.cork(), 0 === o3 && (r3 || (n3[Q] = true), null === t3 ? n3.write(`${i3}transfer-encoding: chunked\r
`, "latin1") : n3.write(`${i3}content-length: ${t3}\r
\r
`, "latin1")), null === t3 && n3.write(`\r
${A2.toString(16)}\r
`, "latin1"), this.bytesWritten += A2;
        const l2 = n3.write(e3);
        return n3.uncork(), a3.onBodySent(e3), l2 || n3[v].timeout && n3[v].timeoutType === Ve && n3[v].timeout.refresh && n3[v].timeout.refresh(), l2;
      }
      end() {
        const { socket: e3, contentLength: n3, client: a3, bytesWritten: t3, expectsPayload: s3, header: o3, request: r3 } = this;
        if (r3.onRequestSent(), e3[O] = false, e3[H]) throw e3[H];
        if (!e3.destroyed) {
          if (0 === t3 ? s3 ? e3.write(`${o3}content-length: 0\r
\r
`, "latin1") : e3.write(`${o3}\r
`, "latin1") : null === n3 && e3.write("\r\n0\r\n\r\n", "latin1"), null !== n3 && t3 !== n3) {
            if (a3[ne]) throw new m();
            process.emitWarning(new m());
          }
          e3[v].timeout && e3[v].timeoutType === Ve && e3[v].timeout.refresh && e3[v].timeout.refresh(), nn(a3);
        }
      }
      destroy(e3) {
        const { socket: n3, client: a3 } = this;
        n3[O] = false, e3 && (t2(a3[b] <= 1, "pipeline should only contain this request"), i2.destroy(n3, e3));
      }
    }
    function ln(e3, n3, a3) {
      try {
        n3.onError(a3), t2(n3.aborted);
      } catch (a4) {
        e3.emit("error", a4);
      }
    }
    e2.exports = class extends c {
      constructor(e3, { interceptors: n3, maxHeaderSize: a3, headersTimeout: t3, socketTimeout: r3, requestTimeout: A2, connectTimeout: l2, bodyTimeout: c2, idleTimeout: m2, keepAlive: d2, keepAliveTimeout: u2, maxKeepAliveTimeout: E2, keepAliveMaxTimeout: p2, keepAliveTimeoutThreshold: T2, socketPath: k2, pipelining: I2, tls: h2, strictContentLength: _2, maxCachedSessions: C2, maxRedirections: Q2, connect: R2, maxRequestsPerClient: N2, localAddress: v2, maxResponseSize: S2, autoSelectFamily: D2, autoSelectFamilyAttemptTimeout: b2, allowH2: M2, maxConcurrentStreams: F2 } = {}) {
        if (super(), void 0 !== d2) throw new g("unsupported keepAlive, use pipelining=0 instead");
        if (void 0 !== r3) throw new g("unsupported socketTimeout, use headersTimeout & bodyTimeout instead");
        if (void 0 !== A2) throw new g("unsupported requestTimeout, use headersTimeout & bodyTimeout instead");
        if (void 0 !== m2) throw new g("unsupported idleTimeout, use keepAliveTimeout instead");
        if (void 0 !== E2) throw new g("unsupported maxKeepAliveTimeout, use keepAliveMaxTimeout instead");
        if (null != a3 && !Number.isFinite(a3)) throw new g("invalid maxHeaderSize");
        if (null != k2 && "string" != typeof k2) throw new g("invalid socketPath");
        if (null != l2 && (!Number.isFinite(l2) || l2 < 0)) throw new g("invalid connectTimeout");
        if (null != u2 && (!Number.isFinite(u2) || u2 <= 0)) throw new g("invalid keepAliveTimeout");
        if (null != p2 && (!Number.isFinite(p2) || p2 <= 0)) throw new g("invalid keepAliveMaxTimeout");
        if (null != T2 && !Number.isFinite(T2)) throw new g("invalid keepAliveTimeoutThreshold");
        if (null != t3 && (!Number.isInteger(t3) || t3 < 0)) throw new g("headersTimeout must be a positive integer or zero");
        if (null != c2 && (!Number.isInteger(c2) || c2 < 0)) throw new g("bodyTimeout must be a positive integer or zero");
        if (null != R2 && "function" != typeof R2 && "object" != typeof R2) throw new g("connect must be a function or an object");
        if (null != Q2 && (!Number.isInteger(Q2) || Q2 < 0)) throw new g("maxRedirections must be a positive number");
        if (null != N2 && (!Number.isInteger(N2) || N2 < 0)) throw new g("maxRequestsPerClient must be a positive number");
        if (null != v2 && ("string" != typeof v2 || 0 === s2.isIP(v2))) throw new g("localAddress must be valid string IP address");
        if (null != S2 && (!Number.isInteger(S2) || S2 < -1)) throw new g("maxResponseSize must be a positive number");
        if (null != b2 && (!Number.isInteger(b2) || b2 < -1)) throw new g("autoSelectFamilyAttemptTimeout must be a positive number");
        if (null != M2 && "boolean" != typeof M2) throw new g("allowH2 must be a valid boolean value");
        if (null != F2 && ("number" != typeof F2 || F2 < 1)) throw new g("maxConcurrentStreams must be a possitive integer, greater than 0");
        "function" != typeof R2 && (R2 = f({ ...h2, maxCachedSessions: C2, allowH2: M2, socketPath: k2, timeout: l2, ...i2.nodeHasAutoSelectFamily && D2 ? { autoSelectFamily: D2, autoSelectFamilyAttemptTimeout: b2 } : void 0, ...R2 })), this[le] = n3 && n3.Client && Array.isArray(n3.Client) ? n3.Client : [Oe({ maxRedirections: Q2 })], this[B] = i2.parseOrigin(e3), this[ae] = R2, this[K] = null, this[W] = null != I2 ? I2 : 1, this[X] = a3 || o2.maxHeaderSize, this[Y] = u2 ?? 4e3, this[Z] = p2 ?? 6e5, this[z] = T2 ?? 1e3, this[j] = this[Y], this[y] = null, this[ce] = null != v2 ? v2 : null, this[w] = 0, this[x] = 0, this[J] = `host: ${this[B].hostname}${this[B].port ? `:${this[B].port}` : ""}\r
`, this[ee] = null != c2 ? c2 : 3e5, this[$] = null != t3 ? t3 : 3e5, this[ne] = _2 ?? true, this[te] = Q2, this[se] = N2, this[ve] = null, this[me] = S2 > -1 ? S2 : -1, this[de] = "h1", this[ue] = null, this[Ee] = M2 ? { openStreams: 0, maxConcurrentStreams: null != F2 ? F2 : 100 } : null, this[ge] = `${this[B].hostname}${this[B].port ? `:${this[B].port}` : ""}`, this[U] = [], this[q] = 0, this[V] = 0;
      }
      get pipelining() {
        return this[W];
      }
      set pipelining(e3) {
        this[W] = e3, nn(this, true);
      }
      get [M]() {
        return this[U].length - this[V];
      }
      get [b]() {
        return this[V] - this[q];
      }
      get [F]() {
        return this[U].length - this[q];
      }
      get [L]() {
        return !!this[K] && !this[P] && !this[K].destroyed;
      }
      get [N]() {
        const e3 = this[K];
        return e3 && (e3[Q] || e3[O] || e3[D]) || this[F] >= (this[W] || 1) || this[M] > 0;
      }
      [S](e3) {
        $e(this), this.once("connect", e3);
      }
      [Ae](e3, n3) {
        const a3 = e3.origin || this[B].origin, t3 = "h2" === this[de] ? l[pe](a3, e3, n3) : l[ke](a3, e3, n3);
        return this[U].push(t3), this[w] || (null == i2.bodyLength(t3.body) && i2.isIterable(t3.body) ? (this[w] = 1, process.nextTick(nn, this)) : nn(this, true)), this[w] && 2 !== this[x] && this[N] && (this[x] = 2), this[x] < 2;
      }
      async [re]() {
        return new Promise((e3) => {
          this[F] ? this[ve] = e3 : e3(null);
        });
      }
      async [ie](e3) {
        return new Promise((n3) => {
          const a3 = this[U].splice(this[V]);
          for (let n4 = 0; n4 < a3.length; n4++) {
            ln(this, a3[n4], e3);
          }
          const t3 = () => {
            this[ve] && (this[ve](), this[ve] = null), n3();
          };
          null != this[ue] && (i2.destroy(this[ue], e3), this[ue] = null, this[Ee] = null), this[K] ? i2.destroy(this[K].on("close", t3), e3) : queueMicrotask(t3), nn(this);
        });
      }
    };
  }