// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 4814 range:409037..446005
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4814: (e2, n2, t2) => {
    "use strict";
    const a2 = t2(2613), s2 = t2(9278), o2 = t2(8611), { pipeline: r } = t2(2203), i = t2(9361), A = t2(3891), c = t2(3308), l = t2(9792), { RequestContentLengthMismatchError: d, ResponseContentLengthMismatchError: m, InvalidArgumentError: u, RequestAbortedError: g, HeadersTimeoutError: p, HeadersOverflowError: E, SocketError: h, InformationalError: T, BodyTimeoutError: k, HTTPParserError: f, ResponseExceededMaxSizeError: _, ClientDestroyedError: I } = t2(7902), C = t2(3991), { kUrl: y, kReset: B, kServerName: Q, kClient: v, kBusy: R, kParser: N, kConnect: S, kBlocking: w, kResuming: b, kRunning: D, kPending: M, kSize: F, kWriting: O, kQueue: U, kConnected: L, kConnecting: P, kNeedDrain: x, kNoRef: G, kKeepAliveDefaultTimeout: Y, kHostHeader: J, kPendingIdx: V, kRunningIdx: q, kError: H, kPipelining: W, kSocket: j, kKeepAliveTimeoutValue: K, kMaxHeadersSize: $, kKeepAliveMaxTimeout: X, kKeepAliveTimeoutThreshold: Z, kHeadersTimeout: z, kBodyTimeout: ee, kStrictContentLength: ne, kConnector: te, kMaxRedirections: ae, kMaxRequests: se, kCounter: oe, kClose: re, kDestroy: ie, kDispatch: Ae, kInterceptors: ce, kLocalAddress: le, kMaxResponseSize: de, kHTTPConnVersion: me, kHost: ue, kHTTP2Session: ge, kHTTP2SessionState: pe, kHTTP2BuildRequest: Ee, kHTTP2CopyHeaders: he, kHTTP1BuildRequest: Te } = t2(8832);
    let ke;
    try {
      ke = t2(5675);
    } catch {
      ke = { constants: {} };
    }
    const { constants: { HTTP2_HEADER_AUTHORITY: fe, HTTP2_HEADER_METHOD: _e, HTTP2_HEADER_PATH: Ie, HTTP2_HEADER_SCHEME: Ce, HTTP2_HEADER_CONTENT_LENGTH: ye, HTTP2_HEADER_EXPECT: Be, HTTP2_HEADER_STATUS: Qe } } = ke;
    let ve = false;
    const Re = Buffer[Symbol.species], Ne = /* @__PURE__ */ Symbol("kClosedResolve"), Se = {};
    try {
      const e3 = t2(1637);
      Se.sendHeaders = e3.channel("undici:client:sendHeaders"), Se.beforeConnect = e3.channel("undici:client:beforeConnect"), Se.connectError = e3.channel("undici:client:connectError"), Se.connected = e3.channel("undici:client:connected");
    } catch {
      Se.sendHeaders = { hasSubscribers: false }, Se.beforeConnect = { hasSubscribers: false }, Se.connectError = { hasSubscribers: false }, Se.connected = { hasSubscribers: false };
    }
    function we(e3) {
      a2("ERR_TLS_CERT_ALTNAME_INVALID" !== e3.code), this[j][H] = e3, $e(this[v], e3);
    }
    function be(e3, n3, t3) {
      const a3 = new T(`HTTP/2: "frameError" received - type ${e3}, code ${n3}`);
      0 === t3 && (this[j][H] = a3, $e(this[v], a3));
    }
    function De() {
      i.destroy(this, new h("other side closed")), i.destroy(this[j], new h("other side closed"));
    }
    function Me(e3) {
      const n3 = this[v], t3 = new T(`HTTP/2: "GOAWAY" frame received with code ${e3}`);
      if (n3[j] = null, n3[ge] = null, n3.destroyed) {
        a2(0 === this[M]);
        const e4 = n3[U].splice(n3[q]);
        for (let n4 = 0; n4 < e4.length; n4++) {
          cn(this, e4[n4], t3);
        }
      } else if (n3[D] > 0) {
        const e4 = n3[U][n3[q]];
        n3[U][n3[q]++] = null, cn(n3, e4, t3);
      }
      n3[V] = n3[q], a2(0 === n3[D]), n3.emit("disconnect", n3[y], [n3], t3), nn(n3);
    }
    const Fe = t2(6747), Oe = t2(858), Ue = Buffer.alloc(0);
    let Le = null, Pe = (async function() {
      const e3 = process.env.JEST_WORKER_ID ? t2(2789) : void 0;
      let n3;
      try {
        n3 = await WebAssembly.compile(Buffer.from(t2(871), "base64"));
      } catch (a3) {
        n3 = await WebAssembly.compile(Buffer.from(e3 || t2(2789), "base64"));
      }
      return await WebAssembly.instantiate(n3, { env: { wasm_on_url: (e4, n4, t3) => 0, wasm_on_status: (e4, n4, t3) => {
        a2.strictEqual(xe.ptr, e4);
        const s3 = n4 - Je + Ge.byteOffset;
        return xe.onStatus(new Re(Ge.buffer, s3, t3)) || 0;
      }, wasm_on_message_begin: (e4) => (a2.strictEqual(xe.ptr, e4), xe.onMessageBegin() || 0), wasm_on_header_field: (e4, n4, t3) => {
        a2.strictEqual(xe.ptr, e4);
        const s3 = n4 - Je + Ge.byteOffset;
        return xe.onHeaderField(new Re(Ge.buffer, s3, t3)) || 0;
      }, wasm_on_header_value: (e4, n4, t3) => {
        a2.strictEqual(xe.ptr, e4);
        const s3 = n4 - Je + Ge.byteOffset;
        return xe.onHeaderValue(new Re(Ge.buffer, s3, t3)) || 0;
      }, wasm_on_headers_complete: (e4, n4, t3, s3) => (a2.strictEqual(xe.ptr, e4), xe.onHeadersComplete(n4, Boolean(t3), Boolean(s3)) || 0), wasm_on_body: (e4, n4, t3) => {
        a2.strictEqual(xe.ptr, e4);
        const s3 = n4 - Je + Ge.byteOffset;
        return xe.onBody(new Re(Ge.buffer, s3, t3)) || 0;
      }, wasm_on_message_complete: (e4) => (a2.strictEqual(xe.ptr, e4), xe.onMessageComplete() || 0) } });
    })();
    Pe.catch();
    let xe = null, Ge = null, Ye = 0, Je = null;
    const Ve = 1, qe = 3;
    class He {
      constructor(e3, n3, { exports: t3 }) {
        a2(Number.isFinite(e3[$]) && e3[$] > 0), this.llhttp = t3, this.ptr = this.llhttp.llhttp_alloc(Fe.TYPE.RESPONSE), this.client = e3, this.socket = n3, this.timeout = null, this.timeoutValue = null, this.timeoutType = null, this.statusCode = null, this.statusText = "", this.upgrade = false, this.headers = [], this.headersSize = 0, this.headersMaxSize = e3[$], this.shouldKeepAlive = false, this.paused = false, this.resume = this.resume.bind(this), this.bytesRead = 0, this.keepAlive = "", this.contentLength = "", this.connection = "", this.maxResponseSize = e3[de];
      }
      setTimeout(e3, n3) {
        this.timeoutType = n3, e3 !== this.timeoutValue ? (A.clearTimeout(this.timeout), e3 ? (this.timeout = A.setTimeout(We, e3, this), this.timeout.unref && this.timeout.unref()) : this.timeout = null, this.timeoutValue = e3) : this.timeout && this.timeout.refresh && this.timeout.refresh();
      }
      resume() {
        !this.socket.destroyed && this.paused && (a2(null != this.ptr), a2(null == xe), this.llhttp.llhttp_resume(this.ptr), a2(2 === this.timeoutType), this.timeout && this.timeout.refresh && this.timeout.refresh(), this.paused = false, this.execute(this.socket.read() || Ue), this.readMore());
      }
      readMore() {
        for (; !this.paused && this.ptr; ) {
          const e3 = this.socket.read();
          if (null === e3) break;
          this.execute(e3);
        }
      }
      execute(e3) {
        a2(null != this.ptr), a2(null == xe), a2(!this.paused);
        const { socket: n3, llhttp: t3 } = this;
        e3.length > Ye && (Je && t3.free(Je), Ye = 4096 * Math.ceil(e3.length / 4096), Je = t3.malloc(Ye)), new Uint8Array(t3.memory.buffer, Je, Ye).set(e3);
        try {
          let a3;
          try {
            Ge = e3, xe = this, a3 = t3.llhttp_execute(this.ptr, Je, e3.length);
          } catch (e4) {
            throw e4;
          } finally {
            xe = null, Ge = null;
          }
          const s3 = t3.llhttp_get_error_pos(this.ptr) - Je;
          if (a3 === Fe.ERROR.PAUSED_UPGRADE) this.onUpgrade(e3.slice(s3));
          else if (a3 === Fe.ERROR.PAUSED) this.paused = true, n3.unshift(e3.slice(s3));
          else if (a3 !== Fe.ERROR.OK) {
            const n4 = t3.llhttp_get_error_reason(this.ptr);
            let o3 = "";
            if (n4) {
              const e4 = new Uint8Array(t3.memory.buffer, n4).indexOf(0);
              o3 = "Response does not match the HTTP/1.1 protocol (" + Buffer.from(t3.memory.buffer, n4, e4).toString() + ")";
            }
            throw new f(o3, Fe.ERROR[a3], e3.slice(s3));
          }
        } catch (e4) {
          i.destroy(n3, e4);
        }
      }
      destroy() {
        a2(null != this.ptr), a2(null == xe), this.llhttp.llhttp_free(this.ptr), this.ptr = null, A.clearTimeout(this.timeout), this.timeout = null, this.timeoutValue = null, this.timeoutType = null, this.paused = false;
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
        const t3 = this.headers[n3 - 2];
        10 === t3.length && "keep-alive" === t3.toString().toLowerCase() ? this.keepAlive += e3.toString() : 10 === t3.length && "connection" === t3.toString().toLowerCase() ? this.connection += e3.toString() : 14 === t3.length && "content-length" === t3.toString().toLowerCase() && (this.contentLength += e3.toString()), this.trackHeader(e3.length);
      }
      trackHeader(e3) {
        this.headersSize += e3, this.headersSize >= this.headersMaxSize && i.destroy(this.socket, new E());
      }
      onUpgrade(e3) {
        const { upgrade: n3, client: t3, socket: s3, headers: o3, statusCode: r2 } = this;
        a2(n3);
        const A2 = t3[U][t3[q]];
        a2(A2), a2(!s3.destroyed), a2(s3 === t3[j]), a2(!this.paused), a2(A2.upgrade || "CONNECT" === A2.method), this.statusCode = null, this.statusText = "", this.shouldKeepAlive = null, a2(this.headers.length % 2 == 0), this.headers = [], this.headersSize = 0, s3.unshift(e3), s3[N].destroy(), s3[N] = null, s3[v] = null, s3[H] = null, s3.removeListener("error", Ke).removeListener("readable", je).removeListener("end", Xe).removeListener("close", Ze), t3[j] = null, t3[U][t3[q]++] = null, t3.emit("disconnect", t3[y], [t3], new T("upgrade"));
        try {
          A2.onUpgrade(r2, o3, s3);
        } catch (e4) {
          i.destroy(s3, e4);
        }
        nn(t3);
      }
      onHeadersComplete(e3, n3, t3) {
        const { client: s3, socket: o3, headers: r2, statusText: A2 } = this;
        if (o3.destroyed) return -1;
        const c2 = s3[U][s3[q]];
        if (!c2) return -1;
        if (a2(!this.upgrade), a2(this.statusCode < 200), 100 === e3) return i.destroy(o3, new h("bad response", i.getSocketInfo(o3))), -1;
        if (n3 && !c2.upgrade) return i.destroy(o3, new h("bad upgrade", i.getSocketInfo(o3))), -1;
        if (a2.strictEqual(this.timeoutType, Ve), this.statusCode = e3, this.shouldKeepAlive = t3 || "HEAD" === c2.method && !o3[B] && "keep-alive" === this.connection.toLowerCase(), this.statusCode >= 200) {
          const e4 = null != c2.bodyTimeout ? c2.bodyTimeout : s3[ee];
          this.setTimeout(e4, 2);
        } else this.timeout && this.timeout.refresh && this.timeout.refresh();
        if ("CONNECT" === c2.method) return a2(1 === s3[D]), this.upgrade = true, 2;
        if (n3) return a2(1 === s3[D]), this.upgrade = true, 2;
        if (a2(this.headers.length % 2 == 0), this.headers = [], this.headersSize = 0, this.shouldKeepAlive && s3[W]) {
          const e4 = this.keepAlive ? i.parseKeepAliveTimeout(this.keepAlive) : null;
          if (null != e4) {
            const n4 = Math.min(e4 - s3[Z], s3[X]);
            n4 <= 0 ? o3[B] = true : s3[K] = n4;
          } else s3[K] = s3[Y];
        } else o3[B] = true;
        const l2 = false === c2.onHeaders(e3, r2, this.resume, A2);
        return c2.aborted ? -1 : "HEAD" === c2.method || e3 < 200 ? 1 : (o3[w] && (o3[w] = false, nn(s3)), l2 ? Fe.ERROR.PAUSED : 0);
      }
      onBody(e3) {
        const { client: n3, socket: t3, statusCode: s3, maxResponseSize: o3 } = this;
        if (t3.destroyed) return -1;
        const r2 = n3[U][n3[q]];
        return a2(r2), a2.strictEqual(this.timeoutType, 2), this.timeout && this.timeout.refresh && this.timeout.refresh(), a2(s3 >= 200), o3 > -1 && this.bytesRead + e3.length > o3 ? (i.destroy(t3, new _()), -1) : (this.bytesRead += e3.length, false === r2.onData(e3) ? Fe.ERROR.PAUSED : void 0);
      }
      onMessageComplete() {
        const { client: e3, socket: n3, statusCode: t3, upgrade: s3, headers: o3, contentLength: r2, bytesRead: A2, shouldKeepAlive: c2 } = this;
        if (n3.destroyed && (!t3 || c2)) return -1;
        if (s3) return;
        const l2 = e3[U][e3[q]];
        return a2(l2), a2(t3 >= 100), this.statusCode = null, this.statusText = "", this.bytesRead = 0, this.contentLength = "", this.keepAlive = "", this.connection = "", a2(this.headers.length % 2 == 0), this.headers = [], this.headersSize = 0, t3 < 200 ? void 0 : "HEAD" !== l2.method && r2 && A2 !== parseInt(r2, 10) ? (i.destroy(n3, new m()), -1) : (l2.onComplete(o3), e3[U][e3[q]++] = null, n3[O] ? (a2.strictEqual(e3[D], 0), i.destroy(n3, new T("reset")), Fe.ERROR.PAUSED) : c2 ? n3[B] && 0 === e3[D] ? (i.destroy(n3, new T("reset")), Fe.ERROR.PAUSED) : void (1 === e3[W] ? setImmediate(nn, e3) : nn(e3)) : (i.destroy(n3, new T("reset")), Fe.ERROR.PAUSED));
      }
    }
    function We(e3) {
      const { socket: n3, timeoutType: t3, client: s3 } = e3;
      t3 === Ve ? (!n3[O] || n3.writableNeedDrain || s3[D] > 1) && (a2(!e3.paused, "cannot be paused while waiting for headers"), i.destroy(n3, new p())) : 2 === t3 ? e3.paused || i.destroy(n3, new k()) : t3 === qe && (a2(0 === s3[D] && s3[K]), i.destroy(n3, new T("socket idle timeout")));
    }
    function je() {
      const { [N]: e3 } = this;
      e3 && e3.readMore();
    }
    function Ke(e3) {
      const { [v]: n3, [N]: t3 } = this;
      a2("ERR_TLS_CERT_ALTNAME_INVALID" !== e3.code), "h2" === n3[me] || "ECONNRESET" !== e3.code || !t3.statusCode || t3.shouldKeepAlive ? (this[H] = e3, $e(this[v], e3)) : t3.onMessageComplete();
    }
    function $e(e3, n3) {
      if (0 === e3[D] && "UND_ERR_INFO" !== n3.code && "UND_ERR_SOCKET" !== n3.code) {
        a2(e3[V] === e3[q]);
        const t3 = e3[U].splice(e3[q]);
        for (let a3 = 0; a3 < t3.length; a3++) {
          cn(e3, t3[a3], n3);
        }
        a2(0 === e3[F]);
      }
    }
    function Xe() {
      const { [N]: e3, [v]: n3 } = this;
      "h2" === n3[me] || !e3.statusCode || e3.shouldKeepAlive ? i.destroy(this, new h("other side closed", i.getSocketInfo(this))) : e3.onMessageComplete();
    }
    function Ze() {
      const { [v]: e3, [N]: n3 } = this;
      "h1" === e3[me] && n3 && (this[H] || !n3.statusCode || n3.shouldKeepAlive || n3.onMessageComplete(), this[N].destroy(), this[N] = null);
      const t3 = this[H] || new h("closed", i.getSocketInfo(this));
      if (e3[j] = null, e3.destroyed) {
        a2(0 === e3[M]);
        const n4 = e3[U].splice(e3[q]);
        for (let a3 = 0; a3 < n4.length; a3++) {
          cn(e3, n4[a3], t3);
        }
      } else if (e3[D] > 0 && "UND_ERR_INFO" !== t3.code) {
        const n4 = e3[U][e3[q]];
        e3[U][e3[q]++] = null, cn(e3, n4, t3);
      }
      e3[V] = e3[q], a2(0 === e3[D]), e3.emit("disconnect", e3[y], [e3], t3), nn(e3);
    }
    async function ze(e3) {
      a2(!e3[P]), a2(!e3[j]);
      let { host: n3, hostname: t3, protocol: o3, port: r2 } = e3[y];
      if ("[" === t3[0]) {
        const e4 = t3.indexOf("]");
        a2(-1 !== e4);
        const n4 = t3.substring(1, e4);
        a2(s2.isIP(n4)), t3 = n4;
      }
      e3[P] = true, Se.beforeConnect.hasSubscribers && Se.beforeConnect.publish({ connectParams: { host: n3, hostname: t3, protocol: o3, port: r2, servername: e3[Q], localAddress: e3[le] }, connector: e3[te] });
      try {
        const s3 = await new Promise((a3, s4) => {
          e3[te]({ host: n3, hostname: t3, protocol: o3, port: r2, servername: e3[Q], localAddress: e3[le] }, (e4, n4) => {
            e4 ? s4(e4) : a3(n4);
          });
        });
        if (e3.destroyed) return void i.destroy(s3.on("error", () => {
        }), new I());
        e3[P] = false, a2(s3);
        if ("h2" === s3.alpnProtocol) {
          ve || (ve = true, process.emitWarning("H2 support is experimental, expect them to change at any time.", { code: "UNDICI-H2" }));
          const n4 = ke.connect(e3[y], { createConnection: () => s3, peerMaxConcurrentStreams: e3[pe].maxConcurrentStreams });
          e3[me] = "h2", n4[v] = e3, n4[j] = s3, n4.on("error", we), n4.on("frameError", be), n4.on("end", De), n4.on("goaway", Me), n4.on("close", Ze), n4.unref(), e3[ge] = n4, s3[ge] = n4;
        } else Le || (Le = await Pe, Pe = null), s3[G] = false, s3[O] = false, s3[B] = false, s3[w] = false, s3[N] = new He(e3, s3, Le);
        s3[oe] = 0, s3[se] = e3[se], s3[v] = e3, s3[H] = null, s3.on("error", Ke).on("readable", je).on("end", Xe).on("close", Ze), e3[j] = s3, Se.connected.hasSubscribers && Se.connected.publish({ connectParams: { host: n3, hostname: t3, protocol: o3, port: r2, servername: e3[Q], localAddress: e3[le] }, connector: e3[te], socket: s3 }), e3.emit("connect", e3[y], [e3]);
      } catch (s3) {
        if (e3.destroyed) return;
        if (e3[P] = false, Se.connectError.hasSubscribers && Se.connectError.publish({ connectParams: { host: n3, hostname: t3, protocol: o3, port: r2, servername: e3[Q], localAddress: e3[le] }, connector: e3[te], error: s3 }), "ERR_TLS_CERT_ALTNAME_INVALID" === s3.code) for (a2(0 === e3[D]); e3[M] > 0 && e3[U][e3[V]].servername === e3[Q]; ) {
          const n4 = e3[U][e3[V]++];
          cn(e3, n4, s3);
        }
        else $e(e3, s3);
        e3.emit("connectionError", e3[y], [e3], s3);
      }
      nn(e3);
    }
    function en(e3) {
      e3[x] = 0, e3.emit("drain", e3[y], [e3]);
    }
    function nn(e3, n3) {
      2 !== e3[b] && (e3[b] = 2, (function(e4, n4) {
        for (; ; ) {
          if (e4.destroyed) return void a2(0 === e4[M]);
          if (e4[Ne] && !e4[F]) return e4[Ne](), void (e4[Ne] = null);
          const t3 = e4[j];
          if (t3 && !t3.destroyed && "h2" !== t3.alpnProtocol) {
            if (0 === e4[F] ? !t3[G] && t3.unref && (t3.unref(), t3[G] = true) : t3[G] && t3.ref && (t3.ref(), t3[G] = false), 0 === e4[F]) t3[N].timeoutType !== qe && t3[N].setTimeout(e4[K], qe);
            else if (e4[D] > 0 && t3[N].statusCode < 200 && t3[N].timeoutType !== Ve) {
              const n5 = e4[U][e4[q]], a3 = null != n5.headersTimeout ? n5.headersTimeout : e4[z];
              t3[N].setTimeout(a3, Ve);
            }
          }
          if (e4[R]) e4[x] = 2;
          else if (2 === e4[x]) {
            n4 ? (e4[x] = 1, process.nextTick(en, e4)) : en(e4);
            continue;
          }
          if (0 === e4[M]) return;
          if (e4[D] >= (e4[W] || 1)) return;
          const s3 = e4[U][e4[V]];
          if ("https:" === e4[y].protocol && e4[Q] !== s3.servername) {
            if (e4[D] > 0) return;
            if (e4[Q] = s3.servername, t3 && t3.servername !== s3.servername) return void i.destroy(t3, new T("servername changed"));
          }
          if (e4[P]) return;
          if (!t3 && !e4[ge]) return void ze(e4);
          if (t3.destroyed || t3[O] || t3[B] || t3[w]) return;
          if (e4[D] > 0 && !s3.idempotent) return;
          if (e4[D] > 0 && (s3.upgrade || "CONNECT" === s3.method)) return;
          if (e4[D] > 0 && 0 !== i.bodyLength(s3.body) && (i.isStream(s3.body) || i.isAsyncIterable(s3.body))) return;
          !s3.aborted && an(e4, s3) ? e4[V]++ : e4[U].splice(e4[V], 1);
        }
      })(e3, n3), e3[b] = 0, e3[q] > 256 && (e3[U].splice(0, e3[q]), e3[V] -= e3[q], e3[q] = 0));
    }
    function tn(e3) {
      return "GET" !== e3 && "HEAD" !== e3 && "OPTIONS" !== e3 && "TRACE" !== e3 && "CONNECT" !== e3;
    }
    function an(e3, n3) {
      if ("h2" === e3[me]) return void (function(e4, n4, t4) {
        const { body: s4, method: o4, path: r3, host: A3, upgrade: l3, expectContinue: m3, signal: u3, headers: p3 } = t4;
        let E3, h3;
        E3 = "string" == typeof p3 ? c[he](p3.trim()) : p3;
        if (l3) return cn(e4, t4, new Error("Upgrade not supported for H2")), false;
        try {
          t4.onConnect((n5) => {
            t4.aborted || t4.completed || cn(e4, t4, n5 || new g());
          });
        } catch (n5) {
          cn(e4, t4, n5);
        }
        if (t4.aborted) return false;
        const k3 = e4[pe];
        if (E3[fe] = A3 || e4[ue], E3[_e] = o4, "CONNECT" === o4) return n4.ref(), h3 = n4.request(E3, { endStream: false, signal: u3 }), h3.id && !h3.pending ? (t4.onUpgrade(null, null, h3), ++k3.openStreams) : h3.once("ready", () => {
          t4.onUpgrade(null, null, h3), ++k3.openStreams;
        }), h3.once("close", () => {
          k3.openStreams -= 1, 0 === k3.openStreams && n4.unref();
        }), true;
        E3[Ie] = r3, E3[Ce] = "https";
        const f3 = "PUT" === o4 || "POST" === o4 || "PATCH" === o4;
        s4 && "function" == typeof s4.read && s4.read(0);
        let _2 = i.bodyLength(s4);
        null == _2 && (_2 = t4.contentLength);
        0 !== _2 && f3 || (_2 = null);
        if (tn(o4) && _2 > 0 && null != t4.contentLength && t4.contentLength !== _2) {
          if (e4[ne]) return cn(e4, t4, new d()), false;
          process.emitWarning(new d());
        }
        null != _2 && (a2(s4, "no body must not have content length"), E3[ye] = `${_2}`);
        n4.ref();
        const I2 = "GET" === o4 || "HEAD" === o4;
        m3 ? (E3[Be] = "100-continue", h3 = n4.request(E3, { endStream: I2, signal: u3 }), h3.once("continue", C2)) : (h3 = n4.request(E3, { endStream: I2, signal: u3 }), C2());
        return ++k3.openStreams, h3.once("response", (e5) => {
          const { [Qe]: n5, ...a3 } = e5;
          false === t4.onHeaders(Number(n5), a3, h3.resume.bind(h3), "") && h3.pause();
        }), h3.once("end", () => {
          t4.onComplete([]);
        }), h3.on("data", (e5) => {
          false === t4.onData(e5) && h3.pause();
        }), h3.once("close", () => {
          k3.openStreams -= 1, 0 === k3.openStreams && n4.unref();
        }), h3.once("error", function(n5) {
          !e4[ge] || e4[ge].destroyed || this.closed || this.destroyed || (k3.streams -= 1, i.destroy(h3, n5));
        }), h3.once("frameError", (n5, a3) => {
          const s5 = new T(`HTTP/2: "frameError" received - type ${n5}, code ${a3}`);
          cn(e4, t4, s5), !e4[ge] || e4[ge].destroyed || this.closed || this.destroyed || (k3.streams -= 1, i.destroy(h3, s5));
        }), true;
        function C2() {
          s4 ? i.isBuffer(s4) ? (a2(_2 === s4.byteLength, "buffer body must have content length"), h3.cork(), h3.write(s4), h3.uncork(), h3.end(), t4.onBodySent(s4), t4.onRequestSent()) : i.isBlobLike(s4) ? "function" == typeof s4.stream ? rn({ client: e4, request: t4, contentLength: _2, h2stream: h3, expectsPayload: f3, body: s4.stream(), socket: e4[j], header: "" }) : on({ body: s4, client: e4, request: t4, contentLength: _2, expectsPayload: f3, h2stream: h3, header: "", socket: e4[j] }) : i.isStream(s4) ? sn({ body: s4, client: e4, request: t4, contentLength: _2, expectsPayload: f3, socket: e4[j], h2stream: h3, header: "" }) : i.isIterable(s4) ? rn({ body: s4, client: e4, request: t4, contentLength: _2, expectsPayload: f3, header: "", h2stream: h3, socket: e4[j] }) : a2(false) : t4.onRequestSent();
        }
      })(e3, e3[ge], n3);
      const { body: t3, method: s3, path: o3, host: r2, upgrade: A2, headers: l2, blocking: m2, reset: u2 } = n3, p2 = "PUT" === s3 || "POST" === s3 || "PATCH" === s3;
      t3 && "function" == typeof t3.read && t3.read(0);
      const E2 = i.bodyLength(t3);
      let h2 = E2;
      if (null === h2 && (h2 = n3.contentLength), 0 !== h2 || p2 || (h2 = null), tn(s3) && h2 > 0 && null !== n3.contentLength && n3.contentLength !== h2) {
        if (e3[ne]) return cn(e3, n3, new d()), false;
        process.emitWarning(new d());
      }
      const k2 = e3[j];
      try {
        n3.onConnect((t4) => {
          n3.aborted || n3.completed || (cn(e3, n3, t4 || new g()), i.destroy(k2, new T("aborted")));
        });
      } catch (t4) {
        cn(e3, n3, t4);
      }
      if (n3.aborted) return false;
      "HEAD" === s3 && (k2[B] = true), (A2 || "CONNECT" === s3) && (k2[B] = true), null != u2 && (k2[B] = u2), e3[se] && k2[oe]++ >= e3[se] && (k2[B] = true), m2 && (k2[w] = true);
      let f2 = `${s3} ${o3} HTTP/1.1\r
`;
      return f2 += "string" == typeof r2 ? `host: ${r2}\r
` : e3[J], A2 ? f2 += `connection: upgrade\r
upgrade: ${A2}\r
` : e3[W] && !k2[B] ? f2 += "connection: keep-alive\r\n" : f2 += "connection: close\r\n", l2 && (f2 += l2), Se.sendHeaders.hasSubscribers && Se.sendHeaders.publish({ request: n3, headers: f2, socket: k2 }), t3 && 0 !== E2 ? i.isBuffer(t3) ? (a2(h2 === t3.byteLength, "buffer body must have content length"), k2.cork(), k2.write(`${f2}content-length: ${h2}\r
\r
`, "latin1"), k2.write(t3), k2.uncork(), n3.onBodySent(t3), n3.onRequestSent(), p2 || (k2[B] = true)) : i.isBlobLike(t3) ? "function" == typeof t3.stream ? rn({ body: t3.stream(), client: e3, request: n3, socket: k2, contentLength: h2, header: f2, expectsPayload: p2 }) : on({ body: t3, client: e3, request: n3, socket: k2, contentLength: h2, header: f2, expectsPayload: p2 }) : i.isStream(t3) ? sn({ body: t3, client: e3, request: n3, socket: k2, contentLength: h2, header: f2, expectsPayload: p2 }) : i.isIterable(t3) ? rn({ body: t3, client: e3, request: n3, socket: k2, contentLength: h2, header: f2, expectsPayload: p2 }) : a2(false) : (0 === h2 ? k2.write(`${f2}content-length: 0\r
\r
`, "latin1") : (a2(null === h2, "no body must not have content length"), k2.write(`${f2}\r
`, "latin1")), n3.onRequestSent()), true;
    }
    function sn({ h2stream: e3, body: n3, client: t3, request: s3, socket: o3, contentLength: A2, header: c2, expectsPayload: l2 }) {
      if (a2(0 !== A2 || 0 === t3[D], "stream body cannot be pipelined"), "h2" === t3[me]) {
        let k2 = function(e4) {
          s3.onBodySent(e4);
        };
        const T2 = r(n3, e3, (t4) => {
          t4 ? (i.destroy(n3, t4), i.destroy(e3, t4)) : s3.onRequestSent();
        });
        return T2.on("data", k2), void T2.once("end", () => {
          T2.removeListener("data", k2), i.destroy(T2);
        });
      }
      let d2 = false;
      const m2 = new An({ socket: o3, request: s3, contentLength: A2, client: t3, expectsPayload: l2, header: c2 }), u2 = function(e4) {
        if (!d2) try {
          !m2.write(e4) && this.pause && this.pause();
        } catch (e5) {
          i.destroy(this, e5);
        }
      }, p2 = function() {
        d2 || n3.resume && n3.resume();
      }, E2 = function() {
        if (d2) return;
        const e4 = new g();
        queueMicrotask(() => h2(e4));
      }, h2 = function(e4) {
        if (!d2) {
          if (d2 = true, a2(o3.destroyed || o3[O] && t3[D] <= 1), o3.off("drain", p2).off("error", h2), n3.removeListener("data", u2).removeListener("end", h2).removeListener("error", h2).removeListener("close", E2), !e4) try {
            m2.end();
          } catch (n4) {
            e4 = n4;
          }
          m2.destroy(e4), !e4 || "UND_ERR_INFO" === e4.code && "reset" === e4.message ? i.destroy(n3) : i.destroy(n3, e4);
        }
      };
      n3.on("data", u2).on("end", h2).on("error", h2).on("close", E2), n3.resume && n3.resume(), o3.on("drain", p2).on("error", h2);
    }
    async function on({ h2stream: e3, body: n3, client: t3, request: s3, socket: o3, contentLength: r2, header: A2, expectsPayload: c2 }) {
      a2(r2 === n3.size, "blob body must have content length");
      const l2 = "h2" === t3[me];
      try {
        if (null != r2 && r2 !== n3.size) throw new d();
        const a3 = Buffer.from(await n3.arrayBuffer());
        l2 ? (e3.cork(), e3.write(a3), e3.uncork()) : (o3.cork(), o3.write(`${A2}content-length: ${r2}\r
\r
`, "latin1"), o3.write(a3), o3.uncork()), s3.onBodySent(a3), s3.onRequestSent(), c2 || (o3[B] = true), nn(t3);
      } catch (n4) {
        i.destroy(l2 ? e3 : o3, n4);
      }
    }
    async function rn({ h2stream: e3, body: n3, client: t3, request: s3, socket: o3, contentLength: r2, header: i2, expectsPayload: A2 }) {
      a2(0 !== r2 || 0 === t3[D], "iterator body cannot be pipelined");
      let c2 = null;
      function l2() {
        if (c2) {
          const e4 = c2;
          c2 = null, e4();
        }
      }
      const d2 = () => new Promise((e4, n4) => {
        a2(null === c2), o3[H] ? n4(o3[H]) : c2 = e4;
      });
      if ("h2" === t3[me]) {
        e3.on("close", l2).on("drain", l2);
        try {
          for await (const t4 of n3) {
            if (o3[H]) throw o3[H];
            const n4 = e3.write(t4);
            s3.onBodySent(t4), n4 || await d2();
          }
        } catch (n4) {
          e3.destroy(n4);
        } finally {
          s3.onRequestSent(), e3.end(), e3.off("close", l2).off("drain", l2);
        }
        return;
      }
      o3.on("close", l2).on("drain", l2);
      const m2 = new An({ socket: o3, request: s3, contentLength: r2, client: t3, expectsPayload: A2, header: i2 });
      try {
        for await (const e4 of n3) {
          if (o3[H]) throw o3[H];
          m2.write(e4) || await d2();
        }
        m2.end();
      } catch (e4) {
        m2.destroy(e4);
      } finally {
        o3.off("close", l2).off("drain", l2);
      }
    }
    class An {
      constructor({ socket: e3, request: n3, contentLength: t3, client: a3, expectsPayload: s3, header: o3 }) {
        this.socket = e3, this.request = n3, this.contentLength = t3, this.client = a3, this.bytesWritten = 0, this.expectsPayload = s3, this.header = o3, e3[O] = true;
      }
      write(e3) {
        const { socket: n3, request: t3, contentLength: a3, client: s3, bytesWritten: o3, expectsPayload: r2, header: i2 } = this;
        if (n3[H]) throw n3[H];
        if (n3.destroyed) return false;
        const A2 = Buffer.byteLength(e3);
        if (!A2) return true;
        if (null !== a3 && o3 + A2 > a3) {
          if (s3[ne]) throw new d();
          process.emitWarning(new d());
        }
        n3.cork(), 0 === o3 && (r2 || (n3[B] = true), null === a3 ? n3.write(`${i2}transfer-encoding: chunked\r
`, "latin1") : n3.write(`${i2}content-length: ${a3}\r
\r
`, "latin1")), null === a3 && n3.write(`\r
${A2.toString(16)}\r
`, "latin1"), this.bytesWritten += A2;
        const c2 = n3.write(e3);
        return n3.uncork(), t3.onBodySent(e3), c2 || n3[N].timeout && n3[N].timeoutType === Ve && n3[N].timeout.refresh && n3[N].timeout.refresh(), c2;
      }
      end() {
        const { socket: e3, contentLength: n3, client: t3, bytesWritten: a3, expectsPayload: s3, header: o3, request: r2 } = this;
        if (r2.onRequestSent(), e3[O] = false, e3[H]) throw e3[H];
        if (!e3.destroyed) {
          if (0 === a3 ? s3 ? e3.write(`${o3}content-length: 0\r
\r
`, "latin1") : e3.write(`${o3}\r
`, "latin1") : null === n3 && e3.write("\r\n0\r\n\r\n", "latin1"), null !== n3 && a3 !== n3) {
            if (t3[ne]) throw new d();
            process.emitWarning(new d());
          }
          e3[N].timeout && e3[N].timeoutType === Ve && e3[N].timeout.refresh && e3[N].timeout.refresh(), nn(t3);
        }
      }
      destroy(e3) {
        const { socket: n3, client: t3 } = this;
        n3[O] = false, e3 && (a2(t3[D] <= 1, "pipeline should only contain this request"), i.destroy(n3, e3));
      }
    }
    function cn(e3, n3, t3) {
      try {
        n3.onError(t3), a2(n3.aborted);
      } catch (t4) {
        e3.emit("error", t4);
      }
    }
    e2.exports = class extends l {
      constructor(e3, { interceptors: n3, maxHeaderSize: t3, headersTimeout: a3, socketTimeout: r2, requestTimeout: A2, connectTimeout: c2, bodyTimeout: l2, idleTimeout: d2, keepAlive: m2, keepAliveTimeout: g2, maxKeepAliveTimeout: p2, keepAliveMaxTimeout: E2, keepAliveTimeoutThreshold: h2, socketPath: T2, pipelining: k2, tls: f2, strictContentLength: _2, maxCachedSessions: I2, maxRedirections: B2, connect: v2, maxRequestsPerClient: R2, localAddress: N2, maxResponseSize: S2, autoSelectFamily: w2, autoSelectFamilyAttemptTimeout: D2, allowH2: M2, maxConcurrentStreams: F2 } = {}) {
        if (super(), void 0 !== m2) throw new u("unsupported keepAlive, use pipelining=0 instead");
        if (void 0 !== r2) throw new u("unsupported socketTimeout, use headersTimeout & bodyTimeout instead");
        if (void 0 !== A2) throw new u("unsupported requestTimeout, use headersTimeout & bodyTimeout instead");
        if (void 0 !== d2) throw new u("unsupported idleTimeout, use keepAliveTimeout instead");
        if (void 0 !== p2) throw new u("unsupported maxKeepAliveTimeout, use keepAliveMaxTimeout instead");
        if (null != t3 && !Number.isFinite(t3)) throw new u("invalid maxHeaderSize");
        if (null != T2 && "string" != typeof T2) throw new u("invalid socketPath");
        if (null != c2 && (!Number.isFinite(c2) || c2 < 0)) throw new u("invalid connectTimeout");
        if (null != g2 && (!Number.isFinite(g2) || g2 <= 0)) throw new u("invalid keepAliveTimeout");
        if (null != E2 && (!Number.isFinite(E2) || E2 <= 0)) throw new u("invalid keepAliveMaxTimeout");
        if (null != h2 && !Number.isFinite(h2)) throw new u("invalid keepAliveTimeoutThreshold");
        if (null != a3 && (!Number.isInteger(a3) || a3 < 0)) throw new u("headersTimeout must be a positive integer or zero");
        if (null != l2 && (!Number.isInteger(l2) || l2 < 0)) throw new u("bodyTimeout must be a positive integer or zero");
        if (null != v2 && "function" != typeof v2 && "object" != typeof v2) throw new u("connect must be a function or an object");
        if (null != B2 && (!Number.isInteger(B2) || B2 < 0)) throw new u("maxRedirections must be a positive number");
        if (null != R2 && (!Number.isInteger(R2) || R2 < 0)) throw new u("maxRequestsPerClient must be a positive number");
        if (null != N2 && ("string" != typeof N2 || 0 === s2.isIP(N2))) throw new u("localAddress must be valid string IP address");
        if (null != S2 && (!Number.isInteger(S2) || S2 < -1)) throw new u("maxResponseSize must be a positive number");
        if (null != D2 && (!Number.isInteger(D2) || D2 < -1)) throw new u("autoSelectFamilyAttemptTimeout must be a positive number");
        if (null != M2 && "boolean" != typeof M2) throw new u("allowH2 must be a valid boolean value");
        if (null != F2 && ("number" != typeof F2 || F2 < 1)) throw new u("maxConcurrentStreams must be a possitive integer, greater than 0");
        "function" != typeof v2 && (v2 = C({ ...f2, maxCachedSessions: I2, allowH2: M2, socketPath: T2, timeout: c2, ...i.nodeHasAutoSelectFamily && w2 ? { autoSelectFamily: w2, autoSelectFamilyAttemptTimeout: D2 } : void 0, ...v2 })), this[ce] = n3 && n3.Client && Array.isArray(n3.Client) ? n3.Client : [Oe({ maxRedirections: B2 })], this[y] = i.parseOrigin(e3), this[te] = v2, this[j] = null, this[W] = null != k2 ? k2 : 1, this[$] = t3 || o2.maxHeaderSize, this[Y] = g2 ?? 4e3, this[X] = E2 ?? 6e5, this[Z] = h2 ?? 1e3, this[K] = this[Y], this[Q] = null, this[le] = null != N2 ? N2 : null, this[b] = 0, this[x] = 0, this[J] = `host: ${this[y].hostname}${this[y].port ? `:${this[y].port}` : ""}\r
`, this[ee] = null != l2 ? l2 : 3e5, this[z] = null != a3 ? a3 : 3e5, this[ne] = _2 ?? true, this[ae] = B2, this[se] = R2, this[Ne] = null, this[de] = S2 > -1 ? S2 : -1, this[me] = "h1", this[ge] = null, this[pe] = M2 ? { openStreams: 0, maxConcurrentStreams: null != F2 ? F2 : 100 } : null, this[ue] = `${this[y].hostname}${this[y].port ? `:${this[y].port}` : ""}`, this[U] = [], this[q] = 0, this[V] = 0;
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
      get [D]() {
        return this[V] - this[q];
      }
      get [F]() {
        return this[U].length - this[q];
      }
      get [L]() {
        return !!this[j] && !this[P] && !this[j].destroyed;
      }
      get [R]() {
        const e3 = this[j];
        return e3 && (e3[B] || e3[O] || e3[w]) || this[F] >= (this[W] || 1) || this[M] > 0;
      }
      [S](e3) {
        ze(this), this.once("connect", e3);
      }
      [Ae](e3, n3) {
        const t3 = e3.origin || this[y].origin, a3 = "h2" === this[me] ? c[Ee](t3, e3, n3) : c[Te](t3, e3, n3);
        return this[U].push(a3), this[b] || (null == i.bodyLength(a3.body) && i.isIterable(a3.body) ? (this[b] = 1, process.nextTick(nn, this)) : nn(this, true)), this[b] && 2 !== this[x] && this[R] && (this[x] = 2), this[x] < 2;
      }
      async [re]() {
        return new Promise((e3) => {
          this[F] ? this[Ne] = e3 : e3(null);
        });
      }
      async [ie](e3) {
        return new Promise((n3) => {
          const t3 = this[U].splice(this[V]);
          for (let n4 = 0; n4 < t3.length; n4++) {
            cn(this, t3[n4], e3);
          }
          const a3 = () => {
            this[Ne] && (this[Ne](), this[Ne] = null), n3();
          };
          null != this[ge] && (i.destroy(this[ge], e3), this[ge] = null, this[pe] = null), this[j] ? i.destroy(this[j].on("close", a3), e3) : queueMicrotask(a3), nn(this);
        });
      }
    };
  }