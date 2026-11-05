// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 4814 range:401616..438584
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4814: (e2, A2, t2) => {
    "use strict";
    const n2 = t2(2613), r2 = t2(9278), o2 = t2(8611), { pipeline: s } = t2(2203), a = t2(9361), i = t2(3891), c = t2(3308), l = t2(9792), { RequestContentLengthMismatchError: g, ResponseContentLengthMismatchError: E, InvalidArgumentError: u, RequestAbortedError: d, HeadersTimeoutError: I, HeadersOverflowError: h, SocketError: Q, InformationalError: m, BodyTimeoutError: C, HTTPParserError: B, ResponseExceededMaxSizeError: p, ClientDestroyedError: f } = t2(7902), y = t2(3991), { kUrl: T, kReset: k, kServerName: w, kClient: N, kBusy: D, kParser: R, kConnect: S, kBlocking: b, kResuming: F, kRunning: _, kPending: v, kSize: L, kWriting: U, kQueue: M, kConnected: O, kConnecting: J, kNeedDrain: Y, kNoRef: P, kKeepAliveDefaultTimeout: G, kHostHeader: V, kPendingIdx: x, kRunningIdx: H, kError: q, kPipelining: W, kSocket: j, kKeepAliveTimeoutValue: X, kMaxHeadersSize: K, kKeepAliveMaxTimeout: Z, kKeepAliveTimeoutThreshold: z, kHeadersTimeout: $, kBodyTimeout: ee, kStrictContentLength: Ae, kConnector: te, kMaxRedirections: ne, kMaxRequests: re, kCounter: oe, kClose: se, kDestroy: ae, kDispatch: ie, kInterceptors: ce, kLocalAddress: le, kMaxResponseSize: ge, kHTTPConnVersion: Ee, kHost: ue, kHTTP2Session: de, kHTTP2SessionState: Ie, kHTTP2BuildRequest: he, kHTTP2CopyHeaders: Qe, kHTTP1BuildRequest: me } = t2(8832);
    let Ce;
    try {
      Ce = t2(5675);
    } catch {
      Ce = { constants: {} };
    }
    const { constants: { HTTP2_HEADER_AUTHORITY: Be, HTTP2_HEADER_METHOD: pe, HTTP2_HEADER_PATH: fe, HTTP2_HEADER_SCHEME: ye, HTTP2_HEADER_CONTENT_LENGTH: Te, HTTP2_HEADER_EXPECT: ke, HTTP2_HEADER_STATUS: we } } = Ce;
    let Ne = false;
    const De = Buffer[Symbol.species], Re = /* @__PURE__ */ Symbol("kClosedResolve"), Se = {};
    try {
      const e3 = t2(1637);
      Se.sendHeaders = e3.channel("undici:client:sendHeaders"), Se.beforeConnect = e3.channel("undici:client:beforeConnect"), Se.connectError = e3.channel("undici:client:connectError"), Se.connected = e3.channel("undici:client:connected");
    } catch {
      Se.sendHeaders = { hasSubscribers: false }, Se.beforeConnect = { hasSubscribers: false }, Se.connectError = { hasSubscribers: false }, Se.connected = { hasSubscribers: false };
    }
    function be(e3) {
      n2("ERR_TLS_CERT_ALTNAME_INVALID" !== e3.code), this[j][q] = e3, Ke(this[N], e3);
    }
    function Fe(e3, A3, t3) {
      const n3 = new m(`HTTP/2: "frameError" received - type ${e3}, code ${A3}`);
      0 === t3 && (this[j][q] = n3, Ke(this[N], n3));
    }
    function _e() {
      a.destroy(this, new Q("other side closed")), a.destroy(this[j], new Q("other side closed"));
    }
    function ve(e3) {
      const A3 = this[N], t3 = new m(`HTTP/2: "GOAWAY" frame received with code ${e3}`);
      if (A3[j] = null, A3[de] = null, A3.destroyed) {
        n2(0 === this[v]);
        const e4 = A3[M].splice(A3[H]);
        for (let A4 = 0; A4 < e4.length; A4++) {
          iA(this, e4[A4], t3);
        }
      } else if (A3[_] > 0) {
        const e4 = A3[M][A3[H]];
        A3[M][A3[H]++] = null, iA(A3, e4, t3);
      }
      A3[x] = A3[H], n2(0 === A3[_]), A3.emit("disconnect", A3[T], [A3], t3), AA(A3);
    }
    const Le = t2(6747), Ue = t2(858), Me = Buffer.alloc(0);
    let Oe = null, Je = (async function() {
      const e3 = process.env.JEST_WORKER_ID ? t2(2789) : void 0;
      let A3;
      try {
        A3 = await WebAssembly.compile(Buffer.from(t2(871), "base64"));
      } catch (n3) {
        A3 = await WebAssembly.compile(Buffer.from(e3 || t2(2789), "base64"));
      }
      return await WebAssembly.instantiate(A3, { env: { wasm_on_url: (e4, A4, t3) => 0, wasm_on_status: (e4, A4, t3) => {
        n2.strictEqual(Ye.ptr, e4);
        const r3 = A4 - Ve + Pe.byteOffset;
        return Ye.onStatus(new De(Pe.buffer, r3, t3)) || 0;
      }, wasm_on_message_begin: (e4) => (n2.strictEqual(Ye.ptr, e4), Ye.onMessageBegin() || 0), wasm_on_header_field: (e4, A4, t3) => {
        n2.strictEqual(Ye.ptr, e4);
        const r3 = A4 - Ve + Pe.byteOffset;
        return Ye.onHeaderField(new De(Pe.buffer, r3, t3)) || 0;
      }, wasm_on_header_value: (e4, A4, t3) => {
        n2.strictEqual(Ye.ptr, e4);
        const r3 = A4 - Ve + Pe.byteOffset;
        return Ye.onHeaderValue(new De(Pe.buffer, r3, t3)) || 0;
      }, wasm_on_headers_complete: (e4, A4, t3, r3) => (n2.strictEqual(Ye.ptr, e4), Ye.onHeadersComplete(A4, Boolean(t3), Boolean(r3)) || 0), wasm_on_body: (e4, A4, t3) => {
        n2.strictEqual(Ye.ptr, e4);
        const r3 = A4 - Ve + Pe.byteOffset;
        return Ye.onBody(new De(Pe.buffer, r3, t3)) || 0;
      }, wasm_on_message_complete: (e4) => (n2.strictEqual(Ye.ptr, e4), Ye.onMessageComplete() || 0) } });
    })();
    Je.catch();
    let Ye = null, Pe = null, Ge = 0, Ve = null;
    const xe = 1, He = 3;
    class qe {
      constructor(e3, A3, { exports: t3 }) {
        n2(Number.isFinite(e3[K]) && e3[K] > 0), this.llhttp = t3, this.ptr = this.llhttp.llhttp_alloc(Le.TYPE.RESPONSE), this.client = e3, this.socket = A3, this.timeout = null, this.timeoutValue = null, this.timeoutType = null, this.statusCode = null, this.statusText = "", this.upgrade = false, this.headers = [], this.headersSize = 0, this.headersMaxSize = e3[K], this.shouldKeepAlive = false, this.paused = false, this.resume = this.resume.bind(this), this.bytesRead = 0, this.keepAlive = "", this.contentLength = "", this.connection = "", this.maxResponseSize = e3[ge];
      }
      setTimeout(e3, A3) {
        this.timeoutType = A3, e3 !== this.timeoutValue ? (i.clearTimeout(this.timeout), e3 ? (this.timeout = i.setTimeout(We, e3, this), this.timeout.unref && this.timeout.unref()) : this.timeout = null, this.timeoutValue = e3) : this.timeout && this.timeout.refresh && this.timeout.refresh();
      }
      resume() {
        !this.socket.destroyed && this.paused && (n2(null != this.ptr), n2(null == Ye), this.llhttp.llhttp_resume(this.ptr), n2(2 === this.timeoutType), this.timeout && this.timeout.refresh && this.timeout.refresh(), this.paused = false, this.execute(this.socket.read() || Me), this.readMore());
      }
      readMore() {
        for (; !this.paused && this.ptr; ) {
          const e3 = this.socket.read();
          if (null === e3) break;
          this.execute(e3);
        }
      }
      execute(e3) {
        n2(null != this.ptr), n2(null == Ye), n2(!this.paused);
        const { socket: A3, llhttp: t3 } = this;
        e3.length > Ge && (Ve && t3.free(Ve), Ge = 4096 * Math.ceil(e3.length / 4096), Ve = t3.malloc(Ge)), new Uint8Array(t3.memory.buffer, Ve, Ge).set(e3);
        try {
          let n3;
          try {
            Pe = e3, Ye = this, n3 = t3.llhttp_execute(this.ptr, Ve, e3.length);
          } catch (e4) {
            throw e4;
          } finally {
            Ye = null, Pe = null;
          }
          const r3 = t3.llhttp_get_error_pos(this.ptr) - Ve;
          if (n3 === Le.ERROR.PAUSED_UPGRADE) this.onUpgrade(e3.slice(r3));
          else if (n3 === Le.ERROR.PAUSED) this.paused = true, A3.unshift(e3.slice(r3));
          else if (n3 !== Le.ERROR.OK) {
            const A4 = t3.llhttp_get_error_reason(this.ptr);
            let o3 = "";
            if (A4) {
              const e4 = new Uint8Array(t3.memory.buffer, A4).indexOf(0);
              o3 = "Response does not match the HTTP/1.1 protocol (" + Buffer.from(t3.memory.buffer, A4, e4).toString() + ")";
            }
            throw new B(o3, Le.ERROR[n3], e3.slice(r3));
          }
        } catch (e4) {
          a.destroy(A3, e4);
        }
      }
      destroy() {
        n2(null != this.ptr), n2(null == Ye), this.llhttp.llhttp_free(this.ptr), this.ptr = null, i.clearTimeout(this.timeout), this.timeout = null, this.timeoutValue = null, this.timeoutType = null, this.paused = false;
      }
      onStatus(e3) {
        this.statusText = e3.toString();
      }
      onMessageBegin() {
        const { socket: e3, client: A3 } = this;
        if (e3.destroyed) return -1;
        return A3[M][A3[H]] ? void 0 : -1;
      }
      onHeaderField(e3) {
        const A3 = this.headers.length;
        1 & A3 ? this.headers[A3 - 1] = Buffer.concat([this.headers[A3 - 1], e3]) : this.headers.push(e3), this.trackHeader(e3.length);
      }
      onHeaderValue(e3) {
        let A3 = this.headers.length;
        1 & ~A3 ? this.headers[A3 - 1] = Buffer.concat([this.headers[A3 - 1], e3]) : (this.headers.push(e3), A3 += 1);
        const t3 = this.headers[A3 - 2];
        10 === t3.length && "keep-alive" === t3.toString().toLowerCase() ? this.keepAlive += e3.toString() : 10 === t3.length && "connection" === t3.toString().toLowerCase() ? this.connection += e3.toString() : 14 === t3.length && "content-length" === t3.toString().toLowerCase() && (this.contentLength += e3.toString()), this.trackHeader(e3.length);
      }
      trackHeader(e3) {
        this.headersSize += e3, this.headersSize >= this.headersMaxSize && a.destroy(this.socket, new h());
      }
      onUpgrade(e3) {
        const { upgrade: A3, client: t3, socket: r3, headers: o3, statusCode: s2 } = this;
        n2(A3);
        const i2 = t3[M][t3[H]];
        n2(i2), n2(!r3.destroyed), n2(r3 === t3[j]), n2(!this.paused), n2(i2.upgrade || "CONNECT" === i2.method), this.statusCode = null, this.statusText = "", this.shouldKeepAlive = null, n2(this.headers.length % 2 == 0), this.headers = [], this.headersSize = 0, r3.unshift(e3), r3[R].destroy(), r3[R] = null, r3[N] = null, r3[q] = null, r3.removeListener("error", Xe).removeListener("readable", je).removeListener("end", Ze).removeListener("close", ze), t3[j] = null, t3[M][t3[H]++] = null, t3.emit("disconnect", t3[T], [t3], new m("upgrade"));
        try {
          i2.onUpgrade(s2, o3, r3);
        } catch (e4) {
          a.destroy(r3, e4);
        }
        AA(t3);
      }
      onHeadersComplete(e3, A3, t3) {
        const { client: r3, socket: o3, headers: s2, statusText: i2 } = this;
        if (o3.destroyed) return -1;
        const c2 = r3[M][r3[H]];
        if (!c2) return -1;
        if (n2(!this.upgrade), n2(this.statusCode < 200), 100 === e3) return a.destroy(o3, new Q("bad response", a.getSocketInfo(o3))), -1;
        if (A3 && !c2.upgrade) return a.destroy(o3, new Q("bad upgrade", a.getSocketInfo(o3))), -1;
        if (n2.strictEqual(this.timeoutType, xe), this.statusCode = e3, this.shouldKeepAlive = t3 || "HEAD" === c2.method && !o3[k] && "keep-alive" === this.connection.toLowerCase(), this.statusCode >= 200) {
          const e4 = null != c2.bodyTimeout ? c2.bodyTimeout : r3[ee];
          this.setTimeout(e4, 2);
        } else this.timeout && this.timeout.refresh && this.timeout.refresh();
        if ("CONNECT" === c2.method) return n2(1 === r3[_]), this.upgrade = true, 2;
        if (A3) return n2(1 === r3[_]), this.upgrade = true, 2;
        if (n2(this.headers.length % 2 == 0), this.headers = [], this.headersSize = 0, this.shouldKeepAlive && r3[W]) {
          const e4 = this.keepAlive ? a.parseKeepAliveTimeout(this.keepAlive) : null;
          if (null != e4) {
            const A4 = Math.min(e4 - r3[z], r3[Z]);
            A4 <= 0 ? o3[k] = true : r3[X] = A4;
          } else r3[X] = r3[G];
        } else o3[k] = true;
        const l2 = false === c2.onHeaders(e3, s2, this.resume, i2);
        return c2.aborted ? -1 : "HEAD" === c2.method || e3 < 200 ? 1 : (o3[b] && (o3[b] = false, AA(r3)), l2 ? Le.ERROR.PAUSED : 0);
      }
      onBody(e3) {
        const { client: A3, socket: t3, statusCode: r3, maxResponseSize: o3 } = this;
        if (t3.destroyed) return -1;
        const s2 = A3[M][A3[H]];
        return n2(s2), n2.strictEqual(this.timeoutType, 2), this.timeout && this.timeout.refresh && this.timeout.refresh(), n2(r3 >= 200), o3 > -1 && this.bytesRead + e3.length > o3 ? (a.destroy(t3, new p()), -1) : (this.bytesRead += e3.length, false === s2.onData(e3) ? Le.ERROR.PAUSED : void 0);
      }
      onMessageComplete() {
        const { client: e3, socket: A3, statusCode: t3, upgrade: r3, headers: o3, contentLength: s2, bytesRead: i2, shouldKeepAlive: c2 } = this;
        if (A3.destroyed && (!t3 || c2)) return -1;
        if (r3) return;
        const l2 = e3[M][e3[H]];
        return n2(l2), n2(t3 >= 100), this.statusCode = null, this.statusText = "", this.bytesRead = 0, this.contentLength = "", this.keepAlive = "", this.connection = "", n2(this.headers.length % 2 == 0), this.headers = [], this.headersSize = 0, t3 < 200 ? void 0 : "HEAD" !== l2.method && s2 && i2 !== parseInt(s2, 10) ? (a.destroy(A3, new E()), -1) : (l2.onComplete(o3), e3[M][e3[H]++] = null, A3[U] ? (n2.strictEqual(e3[_], 0), a.destroy(A3, new m("reset")), Le.ERROR.PAUSED) : c2 ? A3[k] && 0 === e3[_] ? (a.destroy(A3, new m("reset")), Le.ERROR.PAUSED) : void (1 === e3[W] ? setImmediate(AA, e3) : AA(e3)) : (a.destroy(A3, new m("reset")), Le.ERROR.PAUSED));
      }
    }
    function We(e3) {
      const { socket: A3, timeoutType: t3, client: r3 } = e3;
      t3 === xe ? (!A3[U] || A3.writableNeedDrain || r3[_] > 1) && (n2(!e3.paused, "cannot be paused while waiting for headers"), a.destroy(A3, new I())) : 2 === t3 ? e3.paused || a.destroy(A3, new C()) : t3 === He && (n2(0 === r3[_] && r3[X]), a.destroy(A3, new m("socket idle timeout")));
    }
    function je() {
      const { [R]: e3 } = this;
      e3 && e3.readMore();
    }
    function Xe(e3) {
      const { [N]: A3, [R]: t3 } = this;
      n2("ERR_TLS_CERT_ALTNAME_INVALID" !== e3.code), "h2" === A3[Ee] || "ECONNRESET" !== e3.code || !t3.statusCode || t3.shouldKeepAlive ? (this[q] = e3, Ke(this[N], e3)) : t3.onMessageComplete();
    }
    function Ke(e3, A3) {
      if (0 === e3[_] && "UND_ERR_INFO" !== A3.code && "UND_ERR_SOCKET" !== A3.code) {
        n2(e3[x] === e3[H]);
        const t3 = e3[M].splice(e3[H]);
        for (let n3 = 0; n3 < t3.length; n3++) {
          iA(e3, t3[n3], A3);
        }
        n2(0 === e3[L]);
      }
    }
    function Ze() {
      const { [R]: e3, [N]: A3 } = this;
      "h2" === A3[Ee] || !e3.statusCode || e3.shouldKeepAlive ? a.destroy(this, new Q("other side closed", a.getSocketInfo(this))) : e3.onMessageComplete();
    }
    function ze() {
      const { [N]: e3, [R]: A3 } = this;
      "h1" === e3[Ee] && A3 && (this[q] || !A3.statusCode || A3.shouldKeepAlive || A3.onMessageComplete(), this[R].destroy(), this[R] = null);
      const t3 = this[q] || new Q("closed", a.getSocketInfo(this));
      if (e3[j] = null, e3.destroyed) {
        n2(0 === e3[v]);
        const A4 = e3[M].splice(e3[H]);
        for (let n3 = 0; n3 < A4.length; n3++) {
          iA(e3, A4[n3], t3);
        }
      } else if (e3[_] > 0 && "UND_ERR_INFO" !== t3.code) {
        const A4 = e3[M][e3[H]];
        e3[M][e3[H]++] = null, iA(e3, A4, t3);
      }
      e3[x] = e3[H], n2(0 === e3[_]), e3.emit("disconnect", e3[T], [e3], t3), AA(e3);
    }
    async function $e(e3) {
      n2(!e3[J]), n2(!e3[j]);
      let { host: A3, hostname: t3, protocol: o3, port: s2 } = e3[T];
      if ("[" === t3[0]) {
        const e4 = t3.indexOf("]");
        n2(-1 !== e4);
        const A4 = t3.substring(1, e4);
        n2(r2.isIP(A4)), t3 = A4;
      }
      e3[J] = true, Se.beforeConnect.hasSubscribers && Se.beforeConnect.publish({ connectParams: { host: A3, hostname: t3, protocol: o3, port: s2, servername: e3[w], localAddress: e3[le] }, connector: e3[te] });
      try {
        const r3 = await new Promise((n3, r4) => {
          e3[te]({ host: A3, hostname: t3, protocol: o3, port: s2, servername: e3[w], localAddress: e3[le] }, (e4, A4) => {
            e4 ? r4(e4) : n3(A4);
          });
        });
        if (e3.destroyed) return void a.destroy(r3.on("error", () => {
        }), new f());
        e3[J] = false, n2(r3);
        if ("h2" === r3.alpnProtocol) {
          Ne || (Ne = true, process.emitWarning("H2 support is experimental, expect them to change at any time.", { code: "UNDICI-H2" }));
          const A4 = Ce.connect(e3[T], { createConnection: () => r3, peerMaxConcurrentStreams: e3[Ie].maxConcurrentStreams });
          e3[Ee] = "h2", A4[N] = e3, A4[j] = r3, A4.on("error", be), A4.on("frameError", Fe), A4.on("end", _e), A4.on("goaway", ve), A4.on("close", ze), A4.unref(), e3[de] = A4, r3[de] = A4;
        } else Oe || (Oe = await Je, Je = null), r3[P] = false, r3[U] = false, r3[k] = false, r3[b] = false, r3[R] = new qe(e3, r3, Oe);
        r3[oe] = 0, r3[re] = e3[re], r3[N] = e3, r3[q] = null, r3.on("error", Xe).on("readable", je).on("end", Ze).on("close", ze), e3[j] = r3, Se.connected.hasSubscribers && Se.connected.publish({ connectParams: { host: A3, hostname: t3, protocol: o3, port: s2, servername: e3[w], localAddress: e3[le] }, connector: e3[te], socket: r3 }), e3.emit("connect", e3[T], [e3]);
      } catch (r3) {
        if (e3.destroyed) return;
        if (e3[J] = false, Se.connectError.hasSubscribers && Se.connectError.publish({ connectParams: { host: A3, hostname: t3, protocol: o3, port: s2, servername: e3[w], localAddress: e3[le] }, connector: e3[te], error: r3 }), "ERR_TLS_CERT_ALTNAME_INVALID" === r3.code) for (n2(0 === e3[_]); e3[v] > 0 && e3[M][e3[x]].servername === e3[w]; ) {
          const A4 = e3[M][e3[x]++];
          iA(e3, A4, r3);
        }
        else Ke(e3, r3);
        e3.emit("connectionError", e3[T], [e3], r3);
      }
      AA(e3);
    }
    function eA(e3) {
      e3[Y] = 0, e3.emit("drain", e3[T], [e3]);
    }
    function AA(e3, A3) {
      2 !== e3[F] && (e3[F] = 2, (function(e4, A4) {
        for (; ; ) {
          if (e4.destroyed) return void n2(0 === e4[v]);
          if (e4[Re] && !e4[L]) return e4[Re](), void (e4[Re] = null);
          const t3 = e4[j];
          if (t3 && !t3.destroyed && "h2" !== t3.alpnProtocol) {
            if (0 === e4[L] ? !t3[P] && t3.unref && (t3.unref(), t3[P] = true) : t3[P] && t3.ref && (t3.ref(), t3[P] = false), 0 === e4[L]) t3[R].timeoutType !== He && t3[R].setTimeout(e4[X], He);
            else if (e4[_] > 0 && t3[R].statusCode < 200 && t3[R].timeoutType !== xe) {
              const A5 = e4[M][e4[H]], n3 = null != A5.headersTimeout ? A5.headersTimeout : e4[$];
              t3[R].setTimeout(n3, xe);
            }
          }
          if (e4[D]) e4[Y] = 2;
          else if (2 === e4[Y]) {
            A4 ? (e4[Y] = 1, process.nextTick(eA, e4)) : eA(e4);
            continue;
          }
          if (0 === e4[v]) return;
          if (e4[_] >= (e4[W] || 1)) return;
          const r3 = e4[M][e4[x]];
          if ("https:" === e4[T].protocol && e4[w] !== r3.servername) {
            if (e4[_] > 0) return;
            if (e4[w] = r3.servername, t3 && t3.servername !== r3.servername) return void a.destroy(t3, new m("servername changed"));
          }
          if (e4[J]) return;
          if (!t3 && !e4[de]) return void $e(e4);
          if (t3.destroyed || t3[U] || t3[k] || t3[b]) return;
          if (e4[_] > 0 && !r3.idempotent) return;
          if (e4[_] > 0 && (r3.upgrade || "CONNECT" === r3.method)) return;
          if (e4[_] > 0 && 0 !== a.bodyLength(r3.body) && (a.isStream(r3.body) || a.isAsyncIterable(r3.body))) return;
          !r3.aborted && nA(e4, r3) ? e4[x]++ : e4[M].splice(e4[x], 1);
        }
      })(e3, A3), e3[F] = 0, e3[H] > 256 && (e3[M].splice(0, e3[H]), e3[x] -= e3[H], e3[H] = 0));
    }
    function tA(e3) {
      return "GET" !== e3 && "HEAD" !== e3 && "OPTIONS" !== e3 && "TRACE" !== e3 && "CONNECT" !== e3;
    }
    function nA(e3, A3) {
      if ("h2" === e3[Ee]) return void (function(e4, A4, t4) {
        const { body: r4, method: o4, path: s3, host: i3, upgrade: l3, expectContinue: E3, signal: u3, headers: I3 } = t4;
        let h3, Q3;
        h3 = "string" == typeof I3 ? c[Qe](I3.trim()) : I3;
        if (l3) return iA(e4, t4, new Error("Upgrade not supported for H2")), false;
        try {
          t4.onConnect((A5) => {
            t4.aborted || t4.completed || iA(e4, t4, A5 || new d());
          });
        } catch (A5) {
          iA(e4, t4, A5);
        }
        if (t4.aborted) return false;
        const C3 = e4[Ie];
        if (h3[Be] = i3 || e4[ue], h3[pe] = o4, "CONNECT" === o4) return A4.ref(), Q3 = A4.request(h3, { endStream: false, signal: u3 }), Q3.id && !Q3.pending ? (t4.onUpgrade(null, null, Q3), ++C3.openStreams) : Q3.once("ready", () => {
          t4.onUpgrade(null, null, Q3), ++C3.openStreams;
        }), Q3.once("close", () => {
          C3.openStreams -= 1, 0 === C3.openStreams && A4.unref();
        }), true;
        h3[fe] = s3, h3[ye] = "https";
        const B3 = "PUT" === o4 || "POST" === o4 || "PATCH" === o4;
        r4 && "function" == typeof r4.read && r4.read(0);
        let p2 = a.bodyLength(r4);
        null == p2 && (p2 = t4.contentLength);
        0 !== p2 && B3 || (p2 = null);
        if (tA(o4) && p2 > 0 && null != t4.contentLength && t4.contentLength !== p2) {
          if (e4[Ae]) return iA(e4, t4, new g()), false;
          process.emitWarning(new g());
        }
        null != p2 && (n2(r4, "no body must not have content length"), h3[Te] = `${p2}`);
        A4.ref();
        const f2 = "GET" === o4 || "HEAD" === o4;
        E3 ? (h3[ke] = "100-continue", Q3 = A4.request(h3, { endStream: f2, signal: u3 }), Q3.once("continue", y2)) : (Q3 = A4.request(h3, { endStream: f2, signal: u3 }), y2());
        return ++C3.openStreams, Q3.once("response", (e5) => {
          const { [we]: A5, ...n3 } = e5;
          false === t4.onHeaders(Number(A5), n3, Q3.resume.bind(Q3), "") && Q3.pause();
        }), Q3.once("end", () => {
          t4.onComplete([]);
        }), Q3.on("data", (e5) => {
          false === t4.onData(e5) && Q3.pause();
        }), Q3.once("close", () => {
          C3.openStreams -= 1, 0 === C3.openStreams && A4.unref();
        }), Q3.once("error", function(A5) {
          !e4[de] || e4[de].destroyed || this.closed || this.destroyed || (C3.streams -= 1, a.destroy(Q3, A5));
        }), Q3.once("frameError", (A5, n3) => {
          const r5 = new m(`HTTP/2: "frameError" received - type ${A5}, code ${n3}`);
          iA(e4, t4, r5), !e4[de] || e4[de].destroyed || this.closed || this.destroyed || (C3.streams -= 1, a.destroy(Q3, r5));
        }), true;
        function y2() {
          r4 ? a.isBuffer(r4) ? (n2(p2 === r4.byteLength, "buffer body must have content length"), Q3.cork(), Q3.write(r4), Q3.uncork(), Q3.end(), t4.onBodySent(r4), t4.onRequestSent()) : a.isBlobLike(r4) ? "function" == typeof r4.stream ? sA({ client: e4, request: t4, contentLength: p2, h2stream: Q3, expectsPayload: B3, body: r4.stream(), socket: e4[j], header: "" }) : oA({ body: r4, client: e4, request: t4, contentLength: p2, expectsPayload: B3, h2stream: Q3, header: "", socket: e4[j] }) : a.isStream(r4) ? rA({ body: r4, client: e4, request: t4, contentLength: p2, expectsPayload: B3, socket: e4[j], h2stream: Q3, header: "" }) : a.isIterable(r4) ? sA({ body: r4, client: e4, request: t4, contentLength: p2, expectsPayload: B3, header: "", h2stream: Q3, socket: e4[j] }) : n2(false) : t4.onRequestSent();
        }
      })(e3, e3[de], A3);
      const { body: t3, method: r3, path: o3, host: s2, upgrade: i2, headers: l2, blocking: E2, reset: u2 } = A3, I2 = "PUT" === r3 || "POST" === r3 || "PATCH" === r3;
      t3 && "function" == typeof t3.read && t3.read(0);
      const h2 = a.bodyLength(t3);
      let Q2 = h2;
      if (null === Q2 && (Q2 = A3.contentLength), 0 !== Q2 || I2 || (Q2 = null), tA(r3) && Q2 > 0 && null !== A3.contentLength && A3.contentLength !== Q2) {
        if (e3[Ae]) return iA(e3, A3, new g()), false;
        process.emitWarning(new g());
      }
      const C2 = e3[j];
      try {
        A3.onConnect((t4) => {
          A3.aborted || A3.completed || (iA(e3, A3, t4 || new d()), a.destroy(C2, new m("aborted")));
        });
      } catch (t4) {
        iA(e3, A3, t4);
      }
      if (A3.aborted) return false;
      "HEAD" === r3 && (C2[k] = true), (i2 || "CONNECT" === r3) && (C2[k] = true), null != u2 && (C2[k] = u2), e3[re] && C2[oe]++ >= e3[re] && (C2[k] = true), E2 && (C2[b] = true);
      let B2 = `${r3} ${o3} HTTP/1.1\r
`;
      return B2 += "string" == typeof s2 ? `host: ${s2}\r
` : e3[V], i2 ? B2 += `connection: upgrade\r
upgrade: ${i2}\r
` : e3[W] && !C2[k] ? B2 += "connection: keep-alive\r\n" : B2 += "connection: close\r\n", l2 && (B2 += l2), Se.sendHeaders.hasSubscribers && Se.sendHeaders.publish({ request: A3, headers: B2, socket: C2 }), t3 && 0 !== h2 ? a.isBuffer(t3) ? (n2(Q2 === t3.byteLength, "buffer body must have content length"), C2.cork(), C2.write(`${B2}content-length: ${Q2}\r
\r
`, "latin1"), C2.write(t3), C2.uncork(), A3.onBodySent(t3), A3.onRequestSent(), I2 || (C2[k] = true)) : a.isBlobLike(t3) ? "function" == typeof t3.stream ? sA({ body: t3.stream(), client: e3, request: A3, socket: C2, contentLength: Q2, header: B2, expectsPayload: I2 }) : oA({ body: t3, client: e3, request: A3, socket: C2, contentLength: Q2, header: B2, expectsPayload: I2 }) : a.isStream(t3) ? rA({ body: t3, client: e3, request: A3, socket: C2, contentLength: Q2, header: B2, expectsPayload: I2 }) : a.isIterable(t3) ? sA({ body: t3, client: e3, request: A3, socket: C2, contentLength: Q2, header: B2, expectsPayload: I2 }) : n2(false) : (0 === Q2 ? C2.write(`${B2}content-length: 0\r
\r
`, "latin1") : (n2(null === Q2, "no body must not have content length"), C2.write(`${B2}\r
`, "latin1")), A3.onRequestSent()), true;
    }
    function rA({ h2stream: e3, body: A3, client: t3, request: r3, socket: o3, contentLength: i2, header: c2, expectsPayload: l2 }) {
      if (n2(0 !== i2 || 0 === t3[_], "stream body cannot be pipelined"), "h2" === t3[Ee]) {
        let C2 = function(e4) {
          r3.onBodySent(e4);
        };
        const m2 = s(A3, e3, (t4) => {
          t4 ? (a.destroy(A3, t4), a.destroy(e3, t4)) : r3.onRequestSent();
        });
        return m2.on("data", C2), void m2.once("end", () => {
          m2.removeListener("data", C2), a.destroy(m2);
        });
      }
      let g2 = false;
      const E2 = new aA({ socket: o3, request: r3, contentLength: i2, client: t3, expectsPayload: l2, header: c2 }), u2 = function(e4) {
        if (!g2) try {
          !E2.write(e4) && this.pause && this.pause();
        } catch (e5) {
          a.destroy(this, e5);
        }
      }, I2 = function() {
        g2 || A3.resume && A3.resume();
      }, h2 = function() {
        if (g2) return;
        const e4 = new d();
        queueMicrotask(() => Q2(e4));
      }, Q2 = function(e4) {
        if (!g2) {
          if (g2 = true, n2(o3.destroyed || o3[U] && t3[_] <= 1), o3.off("drain", I2).off("error", Q2), A3.removeListener("data", u2).removeListener("end", Q2).removeListener("error", Q2).removeListener("close", h2), !e4) try {
            E2.end();
          } catch (A4) {
            e4 = A4;
          }
          E2.destroy(e4), !e4 || "UND_ERR_INFO" === e4.code && "reset" === e4.message ? a.destroy(A3) : a.destroy(A3, e4);
        }
      };
      A3.on("data", u2).on("end", Q2).on("error", Q2).on("close", h2), A3.resume && A3.resume(), o3.on("drain", I2).on("error", Q2);
    }
    async function oA({ h2stream: e3, body: A3, client: t3, request: r3, socket: o3, contentLength: s2, header: i2, expectsPayload: c2 }) {
      n2(s2 === A3.size, "blob body must have content length");
      const l2 = "h2" === t3[Ee];
      try {
        if (null != s2 && s2 !== A3.size) throw new g();
        const n3 = Buffer.from(await A3.arrayBuffer());
        l2 ? (e3.cork(), e3.write(n3), e3.uncork()) : (o3.cork(), o3.write(`${i2}content-length: ${s2}\r
\r
`, "latin1"), o3.write(n3), o3.uncork()), r3.onBodySent(n3), r3.onRequestSent(), c2 || (o3[k] = true), AA(t3);
      } catch (A4) {
        a.destroy(l2 ? e3 : o3, A4);
      }
    }
    async function sA({ h2stream: e3, body: A3, client: t3, request: r3, socket: o3, contentLength: s2, header: a2, expectsPayload: i2 }) {
      n2(0 !== s2 || 0 === t3[_], "iterator body cannot be pipelined");
      let c2 = null;
      function l2() {
        if (c2) {
          const e4 = c2;
          c2 = null, e4();
        }
      }
      const g2 = () => new Promise((e4, A4) => {
        n2(null === c2), o3[q] ? A4(o3[q]) : c2 = e4;
      });
      if ("h2" === t3[Ee]) {
        e3.on("close", l2).on("drain", l2);
        try {
          for await (const t4 of A3) {
            if (o3[q]) throw o3[q];
            const A4 = e3.write(t4);
            r3.onBodySent(t4), A4 || await g2();
          }
        } catch (A4) {
          e3.destroy(A4);
        } finally {
          r3.onRequestSent(), e3.end(), e3.off("close", l2).off("drain", l2);
        }
        return;
      }
      o3.on("close", l2).on("drain", l2);
      const E2 = new aA({ socket: o3, request: r3, contentLength: s2, client: t3, expectsPayload: i2, header: a2 });
      try {
        for await (const e4 of A3) {
          if (o3[q]) throw o3[q];
          E2.write(e4) || await g2();
        }
        E2.end();
      } catch (e4) {
        E2.destroy(e4);
      } finally {
        o3.off("close", l2).off("drain", l2);
      }
    }
    class aA {
      constructor({ socket: e3, request: A3, contentLength: t3, client: n3, expectsPayload: r3, header: o3 }) {
        this.socket = e3, this.request = A3, this.contentLength = t3, this.client = n3, this.bytesWritten = 0, this.expectsPayload = r3, this.header = o3, e3[U] = true;
      }
      write(e3) {
        const { socket: A3, request: t3, contentLength: n3, client: r3, bytesWritten: o3, expectsPayload: s2, header: a2 } = this;
        if (A3[q]) throw A3[q];
        if (A3.destroyed) return false;
        const i2 = Buffer.byteLength(e3);
        if (!i2) return true;
        if (null !== n3 && o3 + i2 > n3) {
          if (r3[Ae]) throw new g();
          process.emitWarning(new g());
        }
        A3.cork(), 0 === o3 && (s2 || (A3[k] = true), null === n3 ? A3.write(`${a2}transfer-encoding: chunked\r
`, "latin1") : A3.write(`${a2}content-length: ${n3}\r
\r
`, "latin1")), null === n3 && A3.write(`\r
${i2.toString(16)}\r
`, "latin1"), this.bytesWritten += i2;
        const c2 = A3.write(e3);
        return A3.uncork(), t3.onBodySent(e3), c2 || A3[R].timeout && A3[R].timeoutType === xe && A3[R].timeout.refresh && A3[R].timeout.refresh(), c2;
      }
      end() {
        const { socket: e3, contentLength: A3, client: t3, bytesWritten: n3, expectsPayload: r3, header: o3, request: s2 } = this;
        if (s2.onRequestSent(), e3[U] = false, e3[q]) throw e3[q];
        if (!e3.destroyed) {
          if (0 === n3 ? r3 ? e3.write(`${o3}content-length: 0\r
\r
`, "latin1") : e3.write(`${o3}\r
`, "latin1") : null === A3 && e3.write("\r\n0\r\n\r\n", "latin1"), null !== A3 && n3 !== A3) {
            if (t3[Ae]) throw new g();
            process.emitWarning(new g());
          }
          e3[R].timeout && e3[R].timeoutType === xe && e3[R].timeout.refresh && e3[R].timeout.refresh(), AA(t3);
        }
      }
      destroy(e3) {
        const { socket: A3, client: t3 } = this;
        A3[U] = false, e3 && (n2(t3[_] <= 1, "pipeline should only contain this request"), a.destroy(A3, e3));
      }
    }
    function iA(e3, A3, t3) {
      try {
        A3.onError(t3), n2(A3.aborted);
      } catch (t4) {
        e3.emit("error", t4);
      }
    }
    e2.exports = class extends l {
      constructor(e3, { interceptors: A3, maxHeaderSize: t3, headersTimeout: n3, socketTimeout: s2, requestTimeout: i2, connectTimeout: c2, bodyTimeout: l2, idleTimeout: g2, keepAlive: E2, keepAliveTimeout: d2, maxKeepAliveTimeout: I2, keepAliveMaxTimeout: h2, keepAliveTimeoutThreshold: Q2, socketPath: m2, pipelining: C2, tls: B2, strictContentLength: p2, maxCachedSessions: f2, maxRedirections: k2, connect: N2, maxRequestsPerClient: D2, localAddress: R2, maxResponseSize: S2, autoSelectFamily: b2, autoSelectFamilyAttemptTimeout: _2, allowH2: v2, maxConcurrentStreams: L2 } = {}) {
        if (super(), void 0 !== E2) throw new u("unsupported keepAlive, use pipelining=0 instead");
        if (void 0 !== s2) throw new u("unsupported socketTimeout, use headersTimeout & bodyTimeout instead");
        if (void 0 !== i2) throw new u("unsupported requestTimeout, use headersTimeout & bodyTimeout instead");
        if (void 0 !== g2) throw new u("unsupported idleTimeout, use keepAliveTimeout instead");
        if (void 0 !== I2) throw new u("unsupported maxKeepAliveTimeout, use keepAliveMaxTimeout instead");
        if (null != t3 && !Number.isFinite(t3)) throw new u("invalid maxHeaderSize");
        if (null != m2 && "string" != typeof m2) throw new u("invalid socketPath");
        if (null != c2 && (!Number.isFinite(c2) || c2 < 0)) throw new u("invalid connectTimeout");
        if (null != d2 && (!Number.isFinite(d2) || d2 <= 0)) throw new u("invalid keepAliveTimeout");
        if (null != h2 && (!Number.isFinite(h2) || h2 <= 0)) throw new u("invalid keepAliveMaxTimeout");
        if (null != Q2 && !Number.isFinite(Q2)) throw new u("invalid keepAliveTimeoutThreshold");
        if (null != n3 && (!Number.isInteger(n3) || n3 < 0)) throw new u("headersTimeout must be a positive integer or zero");
        if (null != l2 && (!Number.isInteger(l2) || l2 < 0)) throw new u("bodyTimeout must be a positive integer or zero");
        if (null != N2 && "function" != typeof N2 && "object" != typeof N2) throw new u("connect must be a function or an object");
        if (null != k2 && (!Number.isInteger(k2) || k2 < 0)) throw new u("maxRedirections must be a positive number");
        if (null != D2 && (!Number.isInteger(D2) || D2 < 0)) throw new u("maxRequestsPerClient must be a positive number");
        if (null != R2 && ("string" != typeof R2 || 0 === r2.isIP(R2))) throw new u("localAddress must be valid string IP address");
        if (null != S2 && (!Number.isInteger(S2) || S2 < -1)) throw new u("maxResponseSize must be a positive number");
        if (null != _2 && (!Number.isInteger(_2) || _2 < -1)) throw new u("autoSelectFamilyAttemptTimeout must be a positive number");
        if (null != v2 && "boolean" != typeof v2) throw new u("allowH2 must be a valid boolean value");
        if (null != L2 && ("number" != typeof L2 || L2 < 1)) throw new u("maxConcurrentStreams must be a possitive integer, greater than 0");
        "function" != typeof N2 && (N2 = y({ ...B2, maxCachedSessions: f2, allowH2: v2, socketPath: m2, timeout: c2, ...a.nodeHasAutoSelectFamily && b2 ? { autoSelectFamily: b2, autoSelectFamilyAttemptTimeout: _2 } : void 0, ...N2 })), this[ce] = A3 && A3.Client && Array.isArray(A3.Client) ? A3.Client : [Ue({ maxRedirections: k2 })], this[T] = a.parseOrigin(e3), this[te] = N2, this[j] = null, this[W] = null != C2 ? C2 : 1, this[K] = t3 || o2.maxHeaderSize, this[G] = d2 ?? 4e3, this[Z] = h2 ?? 6e5, this[z] = Q2 ?? 1e3, this[X] = this[G], this[w] = null, this[le] = null != R2 ? R2 : null, this[F] = 0, this[Y] = 0, this[V] = `host: ${this[T].hostname}${this[T].port ? `:${this[T].port}` : ""}\r
`, this[ee] = null != l2 ? l2 : 3e5, this[$] = null != n3 ? n3 : 3e5, this[Ae] = p2 ?? true, this[ne] = k2, this[re] = D2, this[Re] = null, this[ge] = S2 > -1 ? S2 : -1, this[Ee] = "h1", this[de] = null, this[Ie] = v2 ? { openStreams: 0, maxConcurrentStreams: null != L2 ? L2 : 100 } : null, this[ue] = `${this[T].hostname}${this[T].port ? `:${this[T].port}` : ""}`, this[M] = [], this[H] = 0, this[x] = 0;
      }
      get pipelining() {
        return this[W];
      }
      set pipelining(e3) {
        this[W] = e3, AA(this, true);
      }
      get [v]() {
        return this[M].length - this[x];
      }
      get [_]() {
        return this[x] - this[H];
      }
      get [L]() {
        return this[M].length - this[H];
      }
      get [O]() {
        return !!this[j] && !this[J] && !this[j].destroyed;
      }
      get [D]() {
        const e3 = this[j];
        return e3 && (e3[k] || e3[U] || e3[b]) || this[L] >= (this[W] || 1) || this[v] > 0;
      }
      [S](e3) {
        $e(this), this.once("connect", e3);
      }
      [ie](e3, A3) {
        const t3 = e3.origin || this[T].origin, n3 = "h2" === this[Ee] ? c[he](t3, e3, A3) : c[me](t3, e3, A3);
        return this[M].push(n3), this[F] || (null == a.bodyLength(n3.body) && a.isIterable(n3.body) ? (this[F] = 1, process.nextTick(AA, this)) : AA(this, true)), this[F] && 2 !== this[Y] && this[D] && (this[Y] = 2), this[Y] < 2;
      }
      async [se]() {
        return new Promise((e3) => {
          this[L] ? this[Re] = e3 : e3(null);
        });
      }
      async [ae](e3) {
        return new Promise((A3) => {
          const t3 = this[M].splice(this[x]);
          for (let A4 = 0; A4 < t3.length; A4++) {
            iA(this, t3[A4], e3);
          }
          const n3 = () => {
            this[Re] && (this[Re](), this[Re] = null), A3();
          };
          null != this[de] && (a.destroy(this[de], e3), this[de] = null, this[Ie] = null), this[j] ? a.destroy(this[j].on("close", n3), e3) : queueMicrotask(n3), AA(this);
        });
      }
    };
  }