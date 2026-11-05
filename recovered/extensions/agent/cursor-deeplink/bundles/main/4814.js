// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 4814 range:504962..541930
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4814: (e2, t2, A2) => {
    "use strict";
    const n2 = A2(2613), r2 = A2(9278), o2 = A2(8611), { pipeline: s } = A2(2203), i = A2(9361), a = A2(3891), c = A2(3308), l = A2(9792), { RequestContentLengthMismatchError: u, ResponseContentLengthMismatchError: g, InvalidArgumentError: E, RequestAbortedError: h, HeadersTimeoutError: d, HeadersOverflowError: I, SocketError: B, InformationalError: Q, BodyTimeoutError: f, HTTPParserError: C, ResponseExceededMaxSizeError: p, ClientDestroyedError: m } = A2(7902), y = A2(3991), { kUrl: w, kReset: k, kServerName: b, kClient: N, kBusy: T, kParser: D, kConnect: S, kBlocking: R, kResuming: F, kRunning: v, kPending: M, kSize: U, kWriting: L, kQueue: _, kConnected: J, kConnecting: O, kNeedDrain: Y, kNoRef: G, kKeepAliveDefaultTimeout: P, kHostHeader: V, kPendingIdx: x, kRunningIdx: H, kError: q, kPipelining: W, kSocket: j, kKeepAliveTimeoutValue: K, kMaxHeadersSize: X, kKeepAliveMaxTimeout: Z, kKeepAliveTimeoutThreshold: z, kHeadersTimeout: $, kBodyTimeout: ee, kStrictContentLength: te, kConnector: Ae, kMaxRedirections: ne, kMaxRequests: re, kCounter: oe, kClose: se, kDestroy: ie, kDispatch: ae, kInterceptors: ce, kLocalAddress: le, kMaxResponseSize: ue, kHTTPConnVersion: ge, kHost: Ee, kHTTP2Session: he, kHTTP2SessionState: de, kHTTP2BuildRequest: Ie, kHTTP2CopyHeaders: Be, kHTTP1BuildRequest: Qe } = A2(8832);
    let fe;
    try {
      fe = A2(5675);
    } catch {
      fe = { constants: {} };
    }
    const { constants: { HTTP2_HEADER_AUTHORITY: Ce, HTTP2_HEADER_METHOD: pe, HTTP2_HEADER_PATH: me, HTTP2_HEADER_SCHEME: ye, HTTP2_HEADER_CONTENT_LENGTH: we, HTTP2_HEADER_EXPECT: ke, HTTP2_HEADER_STATUS: be } } = fe;
    let Ne = false;
    const Te = Buffer[Symbol.species], De = /* @__PURE__ */ Symbol("kClosedResolve"), Se = {};
    try {
      const e3 = A2(1637);
      Se.sendHeaders = e3.channel("undici:client:sendHeaders"), Se.beforeConnect = e3.channel("undici:client:beforeConnect"), Se.connectError = e3.channel("undici:client:connectError"), Se.connected = e3.channel("undici:client:connected");
    } catch {
      Se.sendHeaders = { hasSubscribers: false }, Se.beforeConnect = { hasSubscribers: false }, Se.connectError = { hasSubscribers: false }, Se.connected = { hasSubscribers: false };
    }
    function Re(e3) {
      n2("ERR_TLS_CERT_ALTNAME_INVALID" !== e3.code), this[j][q] = e3, Xe(this[N], e3);
    }
    function Fe(e3, t3, A3) {
      const n3 = new Q(`HTTP/2: "frameError" received - type ${e3}, code ${t3}`);
      0 === A3 && (this[j][q] = n3, Xe(this[N], n3));
    }
    function ve() {
      i.destroy(this, new B("other side closed")), i.destroy(this[j], new B("other side closed"));
    }
    function Me(e3) {
      const t3 = this[N], A3 = new Q(`HTTP/2: "GOAWAY" frame received with code ${e3}`);
      if (t3[j] = null, t3[he] = null, t3.destroyed) {
        n2(0 === this[M]);
        const e4 = t3[_].splice(t3[H]);
        for (let t4 = 0; t4 < e4.length; t4++) {
          at(this, e4[t4], A3);
        }
      } else if (t3[v] > 0) {
        const e4 = t3[_][t3[H]];
        t3[_][t3[H]++] = null, at(t3, e4, A3);
      }
      t3[x] = t3[H], n2(0 === t3[v]), t3.emit("disconnect", t3[w], [t3], A3), tt(t3);
    }
    const Ue = A2(6747), Le = A2(858), _e = Buffer.alloc(0);
    let Je = null, Oe = (async function() {
      const e3 = process.env.JEST_WORKER_ID ? A2(2789) : void 0;
      let t3;
      try {
        t3 = await WebAssembly.compile(Buffer.from(A2(871), "base64"));
      } catch (n3) {
        t3 = await WebAssembly.compile(Buffer.from(e3 || A2(2789), "base64"));
      }
      return await WebAssembly.instantiate(t3, { env: { wasm_on_url: (e4, t4, A3) => 0, wasm_on_status: (e4, t4, A3) => {
        n2.strictEqual(Ye.ptr, e4);
        const r3 = t4 - Ve + Ge.byteOffset;
        return Ye.onStatus(new Te(Ge.buffer, r3, A3)) || 0;
      }, wasm_on_message_begin: (e4) => (n2.strictEqual(Ye.ptr, e4), Ye.onMessageBegin() || 0), wasm_on_header_field: (e4, t4, A3) => {
        n2.strictEqual(Ye.ptr, e4);
        const r3 = t4 - Ve + Ge.byteOffset;
        return Ye.onHeaderField(new Te(Ge.buffer, r3, A3)) || 0;
      }, wasm_on_header_value: (e4, t4, A3) => {
        n2.strictEqual(Ye.ptr, e4);
        const r3 = t4 - Ve + Ge.byteOffset;
        return Ye.onHeaderValue(new Te(Ge.buffer, r3, A3)) || 0;
      }, wasm_on_headers_complete: (e4, t4, A3, r3) => (n2.strictEqual(Ye.ptr, e4), Ye.onHeadersComplete(t4, Boolean(A3), Boolean(r3)) || 0), wasm_on_body: (e4, t4, A3) => {
        n2.strictEqual(Ye.ptr, e4);
        const r3 = t4 - Ve + Ge.byteOffset;
        return Ye.onBody(new Te(Ge.buffer, r3, A3)) || 0;
      }, wasm_on_message_complete: (e4) => (n2.strictEqual(Ye.ptr, e4), Ye.onMessageComplete() || 0) } });
    })();
    Oe.catch();
    let Ye = null, Ge = null, Pe = 0, Ve = null;
    const xe = 1, He = 3;
    class qe {
      constructor(e3, t3, { exports: A3 }) {
        n2(Number.isFinite(e3[X]) && e3[X] > 0), this.llhttp = A3, this.ptr = this.llhttp.llhttp_alloc(Ue.TYPE.RESPONSE), this.client = e3, this.socket = t3, this.timeout = null, this.timeoutValue = null, this.timeoutType = null, this.statusCode = null, this.statusText = "", this.upgrade = false, this.headers = [], this.headersSize = 0, this.headersMaxSize = e3[X], this.shouldKeepAlive = false, this.paused = false, this.resume = this.resume.bind(this), this.bytesRead = 0, this.keepAlive = "", this.contentLength = "", this.connection = "", this.maxResponseSize = e3[ue];
      }
      setTimeout(e3, t3) {
        this.timeoutType = t3, e3 !== this.timeoutValue ? (a.clearTimeout(this.timeout), e3 ? (this.timeout = a.setTimeout(We, e3, this), this.timeout.unref && this.timeout.unref()) : this.timeout = null, this.timeoutValue = e3) : this.timeout && this.timeout.refresh && this.timeout.refresh();
      }
      resume() {
        !this.socket.destroyed && this.paused && (n2(null != this.ptr), n2(null == Ye), this.llhttp.llhttp_resume(this.ptr), n2(2 === this.timeoutType), this.timeout && this.timeout.refresh && this.timeout.refresh(), this.paused = false, this.execute(this.socket.read() || _e), this.readMore());
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
        const { socket: t3, llhttp: A3 } = this;
        e3.length > Pe && (Ve && A3.free(Ve), Pe = 4096 * Math.ceil(e3.length / 4096), Ve = A3.malloc(Pe)), new Uint8Array(A3.memory.buffer, Ve, Pe).set(e3);
        try {
          let n3;
          try {
            Ge = e3, Ye = this, n3 = A3.llhttp_execute(this.ptr, Ve, e3.length);
          } catch (e4) {
            throw e4;
          } finally {
            Ye = null, Ge = null;
          }
          const r3 = A3.llhttp_get_error_pos(this.ptr) - Ve;
          if (n3 === Ue.ERROR.PAUSED_UPGRADE) this.onUpgrade(e3.slice(r3));
          else if (n3 === Ue.ERROR.PAUSED) this.paused = true, t3.unshift(e3.slice(r3));
          else if (n3 !== Ue.ERROR.OK) {
            const t4 = A3.llhttp_get_error_reason(this.ptr);
            let o3 = "";
            if (t4) {
              const e4 = new Uint8Array(A3.memory.buffer, t4).indexOf(0);
              o3 = "Response does not match the HTTP/1.1 protocol (" + Buffer.from(A3.memory.buffer, t4, e4).toString() + ")";
            }
            throw new C(o3, Ue.ERROR[n3], e3.slice(r3));
          }
        } catch (e4) {
          i.destroy(t3, e4);
        }
      }
      destroy() {
        n2(null != this.ptr), n2(null == Ye), this.llhttp.llhttp_free(this.ptr), this.ptr = null, a.clearTimeout(this.timeout), this.timeout = null, this.timeoutValue = null, this.timeoutType = null, this.paused = false;
      }
      onStatus(e3) {
        this.statusText = e3.toString();
      }
      onMessageBegin() {
        const { socket: e3, client: t3 } = this;
        if (e3.destroyed) return -1;
        return t3[_][t3[H]] ? void 0 : -1;
      }
      onHeaderField(e3) {
        const t3 = this.headers.length;
        1 & t3 ? this.headers[t3 - 1] = Buffer.concat([this.headers[t3 - 1], e3]) : this.headers.push(e3), this.trackHeader(e3.length);
      }
      onHeaderValue(e3) {
        let t3 = this.headers.length;
        1 & ~t3 ? this.headers[t3 - 1] = Buffer.concat([this.headers[t3 - 1], e3]) : (this.headers.push(e3), t3 += 1);
        const A3 = this.headers[t3 - 2];
        10 === A3.length && "keep-alive" === A3.toString().toLowerCase() ? this.keepAlive += e3.toString() : 10 === A3.length && "connection" === A3.toString().toLowerCase() ? this.connection += e3.toString() : 14 === A3.length && "content-length" === A3.toString().toLowerCase() && (this.contentLength += e3.toString()), this.trackHeader(e3.length);
      }
      trackHeader(e3) {
        this.headersSize += e3, this.headersSize >= this.headersMaxSize && i.destroy(this.socket, new I());
      }
      onUpgrade(e3) {
        const { upgrade: t3, client: A3, socket: r3, headers: o3, statusCode: s2 } = this;
        n2(t3);
        const a2 = A3[_][A3[H]];
        n2(a2), n2(!r3.destroyed), n2(r3 === A3[j]), n2(!this.paused), n2(a2.upgrade || "CONNECT" === a2.method), this.statusCode = null, this.statusText = "", this.shouldKeepAlive = null, n2(this.headers.length % 2 == 0), this.headers = [], this.headersSize = 0, r3.unshift(e3), r3[D].destroy(), r3[D] = null, r3[N] = null, r3[q] = null, r3.removeListener("error", Ke).removeListener("readable", je).removeListener("end", Ze).removeListener("close", ze), A3[j] = null, A3[_][A3[H]++] = null, A3.emit("disconnect", A3[w], [A3], new Q("upgrade"));
        try {
          a2.onUpgrade(s2, o3, r3);
        } catch (e4) {
          i.destroy(r3, e4);
        }
        tt(A3);
      }
      onHeadersComplete(e3, t3, A3) {
        const { client: r3, socket: o3, headers: s2, statusText: a2 } = this;
        if (o3.destroyed) return -1;
        const c2 = r3[_][r3[H]];
        if (!c2) return -1;
        if (n2(!this.upgrade), n2(this.statusCode < 200), 100 === e3) return i.destroy(o3, new B("bad response", i.getSocketInfo(o3))), -1;
        if (t3 && !c2.upgrade) return i.destroy(o3, new B("bad upgrade", i.getSocketInfo(o3))), -1;
        if (n2.strictEqual(this.timeoutType, xe), this.statusCode = e3, this.shouldKeepAlive = A3 || "HEAD" === c2.method && !o3[k] && "keep-alive" === this.connection.toLowerCase(), this.statusCode >= 200) {
          const e4 = null != c2.bodyTimeout ? c2.bodyTimeout : r3[ee];
          this.setTimeout(e4, 2);
        } else this.timeout && this.timeout.refresh && this.timeout.refresh();
        if ("CONNECT" === c2.method) return n2(1 === r3[v]), this.upgrade = true, 2;
        if (t3) return n2(1 === r3[v]), this.upgrade = true, 2;
        if (n2(this.headers.length % 2 == 0), this.headers = [], this.headersSize = 0, this.shouldKeepAlive && r3[W]) {
          const e4 = this.keepAlive ? i.parseKeepAliveTimeout(this.keepAlive) : null;
          if (null != e4) {
            const t4 = Math.min(e4 - r3[z], r3[Z]);
            t4 <= 0 ? o3[k] = true : r3[K] = t4;
          } else r3[K] = r3[P];
        } else o3[k] = true;
        const l2 = false === c2.onHeaders(e3, s2, this.resume, a2);
        return c2.aborted ? -1 : "HEAD" === c2.method || e3 < 200 ? 1 : (o3[R] && (o3[R] = false, tt(r3)), l2 ? Ue.ERROR.PAUSED : 0);
      }
      onBody(e3) {
        const { client: t3, socket: A3, statusCode: r3, maxResponseSize: o3 } = this;
        if (A3.destroyed) return -1;
        const s2 = t3[_][t3[H]];
        return n2(s2), n2.strictEqual(this.timeoutType, 2), this.timeout && this.timeout.refresh && this.timeout.refresh(), n2(r3 >= 200), o3 > -1 && this.bytesRead + e3.length > o3 ? (i.destroy(A3, new p()), -1) : (this.bytesRead += e3.length, false === s2.onData(e3) ? Ue.ERROR.PAUSED : void 0);
      }
      onMessageComplete() {
        const { client: e3, socket: t3, statusCode: A3, upgrade: r3, headers: o3, contentLength: s2, bytesRead: a2, shouldKeepAlive: c2 } = this;
        if (t3.destroyed && (!A3 || c2)) return -1;
        if (r3) return;
        const l2 = e3[_][e3[H]];
        return n2(l2), n2(A3 >= 100), this.statusCode = null, this.statusText = "", this.bytesRead = 0, this.contentLength = "", this.keepAlive = "", this.connection = "", n2(this.headers.length % 2 == 0), this.headers = [], this.headersSize = 0, A3 < 200 ? void 0 : "HEAD" !== l2.method && s2 && a2 !== parseInt(s2, 10) ? (i.destroy(t3, new g()), -1) : (l2.onComplete(o3), e3[_][e3[H]++] = null, t3[L] ? (n2.strictEqual(e3[v], 0), i.destroy(t3, new Q("reset")), Ue.ERROR.PAUSED) : c2 ? t3[k] && 0 === e3[v] ? (i.destroy(t3, new Q("reset")), Ue.ERROR.PAUSED) : void (1 === e3[W] ? setImmediate(tt, e3) : tt(e3)) : (i.destroy(t3, new Q("reset")), Ue.ERROR.PAUSED));
      }
    }
    function We(e3) {
      const { socket: t3, timeoutType: A3, client: r3 } = e3;
      A3 === xe ? (!t3[L] || t3.writableNeedDrain || r3[v] > 1) && (n2(!e3.paused, "cannot be paused while waiting for headers"), i.destroy(t3, new d())) : 2 === A3 ? e3.paused || i.destroy(t3, new f()) : A3 === He && (n2(0 === r3[v] && r3[K]), i.destroy(t3, new Q("socket idle timeout")));
    }
    function je() {
      const { [D]: e3 } = this;
      e3 && e3.readMore();
    }
    function Ke(e3) {
      const { [N]: t3, [D]: A3 } = this;
      n2("ERR_TLS_CERT_ALTNAME_INVALID" !== e3.code), "h2" === t3[ge] || "ECONNRESET" !== e3.code || !A3.statusCode || A3.shouldKeepAlive ? (this[q] = e3, Xe(this[N], e3)) : A3.onMessageComplete();
    }
    function Xe(e3, t3) {
      if (0 === e3[v] && "UND_ERR_INFO" !== t3.code && "UND_ERR_SOCKET" !== t3.code) {
        n2(e3[x] === e3[H]);
        const A3 = e3[_].splice(e3[H]);
        for (let n3 = 0; n3 < A3.length; n3++) {
          at(e3, A3[n3], t3);
        }
        n2(0 === e3[U]);
      }
    }
    function Ze() {
      const { [D]: e3, [N]: t3 } = this;
      "h2" === t3[ge] || !e3.statusCode || e3.shouldKeepAlive ? i.destroy(this, new B("other side closed", i.getSocketInfo(this))) : e3.onMessageComplete();
    }
    function ze() {
      const { [N]: e3, [D]: t3 } = this;
      "h1" === e3[ge] && t3 && (this[q] || !t3.statusCode || t3.shouldKeepAlive || t3.onMessageComplete(), this[D].destroy(), this[D] = null);
      const A3 = this[q] || new B("closed", i.getSocketInfo(this));
      if (e3[j] = null, e3.destroyed) {
        n2(0 === e3[M]);
        const t4 = e3[_].splice(e3[H]);
        for (let n3 = 0; n3 < t4.length; n3++) {
          at(e3, t4[n3], A3);
        }
      } else if (e3[v] > 0 && "UND_ERR_INFO" !== A3.code) {
        const t4 = e3[_][e3[H]];
        e3[_][e3[H]++] = null, at(e3, t4, A3);
      }
      e3[x] = e3[H], n2(0 === e3[v]), e3.emit("disconnect", e3[w], [e3], A3), tt(e3);
    }
    async function $e(e3) {
      n2(!e3[O]), n2(!e3[j]);
      let { host: t3, hostname: A3, protocol: o3, port: s2 } = e3[w];
      if ("[" === A3[0]) {
        const e4 = A3.indexOf("]");
        n2(-1 !== e4);
        const t4 = A3.substring(1, e4);
        n2(r2.isIP(t4)), A3 = t4;
      }
      e3[O] = true, Se.beforeConnect.hasSubscribers && Se.beforeConnect.publish({ connectParams: { host: t3, hostname: A3, protocol: o3, port: s2, servername: e3[b], localAddress: e3[le] }, connector: e3[Ae] });
      try {
        const r3 = await new Promise((n3, r4) => {
          e3[Ae]({ host: t3, hostname: A3, protocol: o3, port: s2, servername: e3[b], localAddress: e3[le] }, (e4, t4) => {
            e4 ? r4(e4) : n3(t4);
          });
        });
        if (e3.destroyed) return void i.destroy(r3.on("error", () => {
        }), new m());
        e3[O] = false, n2(r3);
        if ("h2" === r3.alpnProtocol) {
          Ne || (Ne = true, process.emitWarning("H2 support is experimental, expect them to change at any time.", { code: "UNDICI-H2" }));
          const t4 = fe.connect(e3[w], { createConnection: () => r3, peerMaxConcurrentStreams: e3[de].maxConcurrentStreams });
          e3[ge] = "h2", t4[N] = e3, t4[j] = r3, t4.on("error", Re), t4.on("frameError", Fe), t4.on("end", ve), t4.on("goaway", Me), t4.on("close", ze), t4.unref(), e3[he] = t4, r3[he] = t4;
        } else Je || (Je = await Oe, Oe = null), r3[G] = false, r3[L] = false, r3[k] = false, r3[R] = false, r3[D] = new qe(e3, r3, Je);
        r3[oe] = 0, r3[re] = e3[re], r3[N] = e3, r3[q] = null, r3.on("error", Ke).on("readable", je).on("end", Ze).on("close", ze), e3[j] = r3, Se.connected.hasSubscribers && Se.connected.publish({ connectParams: { host: t3, hostname: A3, protocol: o3, port: s2, servername: e3[b], localAddress: e3[le] }, connector: e3[Ae], socket: r3 }), e3.emit("connect", e3[w], [e3]);
      } catch (r3) {
        if (e3.destroyed) return;
        if (e3[O] = false, Se.connectError.hasSubscribers && Se.connectError.publish({ connectParams: { host: t3, hostname: A3, protocol: o3, port: s2, servername: e3[b], localAddress: e3[le] }, connector: e3[Ae], error: r3 }), "ERR_TLS_CERT_ALTNAME_INVALID" === r3.code) for (n2(0 === e3[v]); e3[M] > 0 && e3[_][e3[x]].servername === e3[b]; ) {
          const t4 = e3[_][e3[x]++];
          at(e3, t4, r3);
        }
        else Xe(e3, r3);
        e3.emit("connectionError", e3[w], [e3], r3);
      }
      tt(e3);
    }
    function et(e3) {
      e3[Y] = 0, e3.emit("drain", e3[w], [e3]);
    }
    function tt(e3, t3) {
      2 !== e3[F] && (e3[F] = 2, (function(e4, t4) {
        for (; ; ) {
          if (e4.destroyed) return void n2(0 === e4[M]);
          if (e4[De] && !e4[U]) return e4[De](), void (e4[De] = null);
          const A3 = e4[j];
          if (A3 && !A3.destroyed && "h2" !== A3.alpnProtocol) {
            if (0 === e4[U] ? !A3[G] && A3.unref && (A3.unref(), A3[G] = true) : A3[G] && A3.ref && (A3.ref(), A3[G] = false), 0 === e4[U]) A3[D].timeoutType !== He && A3[D].setTimeout(e4[K], He);
            else if (e4[v] > 0 && A3[D].statusCode < 200 && A3[D].timeoutType !== xe) {
              const t5 = e4[_][e4[H]], n3 = null != t5.headersTimeout ? t5.headersTimeout : e4[$];
              A3[D].setTimeout(n3, xe);
            }
          }
          if (e4[T]) e4[Y] = 2;
          else if (2 === e4[Y]) {
            t4 ? (e4[Y] = 1, process.nextTick(et, e4)) : et(e4);
            continue;
          }
          if (0 === e4[M]) return;
          if (e4[v] >= (e4[W] || 1)) return;
          const r3 = e4[_][e4[x]];
          if ("https:" === e4[w].protocol && e4[b] !== r3.servername) {
            if (e4[v] > 0) return;
            if (e4[b] = r3.servername, A3 && A3.servername !== r3.servername) return void i.destroy(A3, new Q("servername changed"));
          }
          if (e4[O]) return;
          if (!A3 && !e4[he]) return void $e(e4);
          if (A3.destroyed || A3[L] || A3[k] || A3[R]) return;
          if (e4[v] > 0 && !r3.idempotent) return;
          if (e4[v] > 0 && (r3.upgrade || "CONNECT" === r3.method)) return;
          if (e4[v] > 0 && 0 !== i.bodyLength(r3.body) && (i.isStream(r3.body) || i.isAsyncIterable(r3.body))) return;
          !r3.aborted && nt(e4, r3) ? e4[x]++ : e4[_].splice(e4[x], 1);
        }
      })(e3, t3), e3[F] = 0, e3[H] > 256 && (e3[_].splice(0, e3[H]), e3[x] -= e3[H], e3[H] = 0));
    }
    function At(e3) {
      return "GET" !== e3 && "HEAD" !== e3 && "OPTIONS" !== e3 && "TRACE" !== e3 && "CONNECT" !== e3;
    }
    function nt(e3, t3) {
      if ("h2" === e3[ge]) return void (function(e4, t4, A4) {
        const { body: r4, method: o4, path: s3, host: a3, upgrade: l3, expectContinue: g3, signal: E3, headers: d3 } = A4;
        let I3, B3;
        I3 = "string" == typeof d3 ? c[Be](d3.trim()) : d3;
        if (l3) return at(e4, A4, new Error("Upgrade not supported for H2")), false;
        try {
          A4.onConnect((t5) => {
            A4.aborted || A4.completed || at(e4, A4, t5 || new h());
          });
        } catch (t5) {
          at(e4, A4, t5);
        }
        if (A4.aborted) return false;
        const f3 = e4[de];
        if (I3[Ce] = a3 || e4[Ee], I3[pe] = o4, "CONNECT" === o4) return t4.ref(), B3 = t4.request(I3, { endStream: false, signal: E3 }), B3.id && !B3.pending ? (A4.onUpgrade(null, null, B3), ++f3.openStreams) : B3.once("ready", () => {
          A4.onUpgrade(null, null, B3), ++f3.openStreams;
        }), B3.once("close", () => {
          f3.openStreams -= 1, 0 === f3.openStreams && t4.unref();
        }), true;
        I3[me] = s3, I3[ye] = "https";
        const C3 = "PUT" === o4 || "POST" === o4 || "PATCH" === o4;
        r4 && "function" == typeof r4.read && r4.read(0);
        let p2 = i.bodyLength(r4);
        null == p2 && (p2 = A4.contentLength);
        0 !== p2 && C3 || (p2 = null);
        if (At(o4) && p2 > 0 && null != A4.contentLength && A4.contentLength !== p2) {
          if (e4[te]) return at(e4, A4, new u()), false;
          process.emitWarning(new u());
        }
        null != p2 && (n2(r4, "no body must not have content length"), I3[we] = `${p2}`);
        t4.ref();
        const m2 = "GET" === o4 || "HEAD" === o4;
        g3 ? (I3[ke] = "100-continue", B3 = t4.request(I3, { endStream: m2, signal: E3 }), B3.once("continue", y2)) : (B3 = t4.request(I3, { endStream: m2, signal: E3 }), y2());
        return ++f3.openStreams, B3.once("response", (e5) => {
          const { [be]: t5, ...n3 } = e5;
          false === A4.onHeaders(Number(t5), n3, B3.resume.bind(B3), "") && B3.pause();
        }), B3.once("end", () => {
          A4.onComplete([]);
        }), B3.on("data", (e5) => {
          false === A4.onData(e5) && B3.pause();
        }), B3.once("close", () => {
          f3.openStreams -= 1, 0 === f3.openStreams && t4.unref();
        }), B3.once("error", function(t5) {
          !e4[he] || e4[he].destroyed || this.closed || this.destroyed || (f3.streams -= 1, i.destroy(B3, t5));
        }), B3.once("frameError", (t5, n3) => {
          const r5 = new Q(`HTTP/2: "frameError" received - type ${t5}, code ${n3}`);
          at(e4, A4, r5), !e4[he] || e4[he].destroyed || this.closed || this.destroyed || (f3.streams -= 1, i.destroy(B3, r5));
        }), true;
        function y2() {
          r4 ? i.isBuffer(r4) ? (n2(p2 === r4.byteLength, "buffer body must have content length"), B3.cork(), B3.write(r4), B3.uncork(), B3.end(), A4.onBodySent(r4), A4.onRequestSent()) : i.isBlobLike(r4) ? "function" == typeof r4.stream ? st({ client: e4, request: A4, contentLength: p2, h2stream: B3, expectsPayload: C3, body: r4.stream(), socket: e4[j], header: "" }) : ot({ body: r4, client: e4, request: A4, contentLength: p2, expectsPayload: C3, h2stream: B3, header: "", socket: e4[j] }) : i.isStream(r4) ? rt({ body: r4, client: e4, request: A4, contentLength: p2, expectsPayload: C3, socket: e4[j], h2stream: B3, header: "" }) : i.isIterable(r4) ? st({ body: r4, client: e4, request: A4, contentLength: p2, expectsPayload: C3, header: "", h2stream: B3, socket: e4[j] }) : n2(false) : A4.onRequestSent();
        }
      })(e3, e3[he], t3);
      const { body: A3, method: r3, path: o3, host: s2, upgrade: a2, headers: l2, blocking: g2, reset: E2 } = t3, d2 = "PUT" === r3 || "POST" === r3 || "PATCH" === r3;
      A3 && "function" == typeof A3.read && A3.read(0);
      const I2 = i.bodyLength(A3);
      let B2 = I2;
      if (null === B2 && (B2 = t3.contentLength), 0 !== B2 || d2 || (B2 = null), At(r3) && B2 > 0 && null !== t3.contentLength && t3.contentLength !== B2) {
        if (e3[te]) return at(e3, t3, new u()), false;
        process.emitWarning(new u());
      }
      const f2 = e3[j];
      try {
        t3.onConnect((A4) => {
          t3.aborted || t3.completed || (at(e3, t3, A4 || new h()), i.destroy(f2, new Q("aborted")));
        });
      } catch (A4) {
        at(e3, t3, A4);
      }
      if (t3.aborted) return false;
      "HEAD" === r3 && (f2[k] = true), (a2 || "CONNECT" === r3) && (f2[k] = true), null != E2 && (f2[k] = E2), e3[re] && f2[oe]++ >= e3[re] && (f2[k] = true), g2 && (f2[R] = true);
      let C2 = `${r3} ${o3} HTTP/1.1\r
`;
      return C2 += "string" == typeof s2 ? `host: ${s2}\r
` : e3[V], a2 ? C2 += `connection: upgrade\r
upgrade: ${a2}\r
` : e3[W] && !f2[k] ? C2 += "connection: keep-alive\r\n" : C2 += "connection: close\r\n", l2 && (C2 += l2), Se.sendHeaders.hasSubscribers && Se.sendHeaders.publish({ request: t3, headers: C2, socket: f2 }), A3 && 0 !== I2 ? i.isBuffer(A3) ? (n2(B2 === A3.byteLength, "buffer body must have content length"), f2.cork(), f2.write(`${C2}content-length: ${B2}\r
\r
`, "latin1"), f2.write(A3), f2.uncork(), t3.onBodySent(A3), t3.onRequestSent(), d2 || (f2[k] = true)) : i.isBlobLike(A3) ? "function" == typeof A3.stream ? st({ body: A3.stream(), client: e3, request: t3, socket: f2, contentLength: B2, header: C2, expectsPayload: d2 }) : ot({ body: A3, client: e3, request: t3, socket: f2, contentLength: B2, header: C2, expectsPayload: d2 }) : i.isStream(A3) ? rt({ body: A3, client: e3, request: t3, socket: f2, contentLength: B2, header: C2, expectsPayload: d2 }) : i.isIterable(A3) ? st({ body: A3, client: e3, request: t3, socket: f2, contentLength: B2, header: C2, expectsPayload: d2 }) : n2(false) : (0 === B2 ? f2.write(`${C2}content-length: 0\r
\r
`, "latin1") : (n2(null === B2, "no body must not have content length"), f2.write(`${C2}\r
`, "latin1")), t3.onRequestSent()), true;
    }
    function rt({ h2stream: e3, body: t3, client: A3, request: r3, socket: o3, contentLength: a2, header: c2, expectsPayload: l2 }) {
      if (n2(0 !== a2 || 0 === A3[v], "stream body cannot be pipelined"), "h2" === A3[ge]) {
        let f2 = function(e4) {
          r3.onBodySent(e4);
        };
        const Q2 = s(t3, e3, (A4) => {
          A4 ? (i.destroy(t3, A4), i.destroy(e3, A4)) : r3.onRequestSent();
        });
        return Q2.on("data", f2), void Q2.once("end", () => {
          Q2.removeListener("data", f2), i.destroy(Q2);
        });
      }
      let u2 = false;
      const g2 = new it({ socket: o3, request: r3, contentLength: a2, client: A3, expectsPayload: l2, header: c2 }), E2 = function(e4) {
        if (!u2) try {
          !g2.write(e4) && this.pause && this.pause();
        } catch (e5) {
          i.destroy(this, e5);
        }
      }, d2 = function() {
        u2 || t3.resume && t3.resume();
      }, I2 = function() {
        if (u2) return;
        const e4 = new h();
        queueMicrotask(() => B2(e4));
      }, B2 = function(e4) {
        if (!u2) {
          if (u2 = true, n2(o3.destroyed || o3[L] && A3[v] <= 1), o3.off("drain", d2).off("error", B2), t3.removeListener("data", E2).removeListener("end", B2).removeListener("error", B2).removeListener("close", I2), !e4) try {
            g2.end();
          } catch (t4) {
            e4 = t4;
          }
          g2.destroy(e4), !e4 || "UND_ERR_INFO" === e4.code && "reset" === e4.message ? i.destroy(t3) : i.destroy(t3, e4);
        }
      };
      t3.on("data", E2).on("end", B2).on("error", B2).on("close", I2), t3.resume && t3.resume(), o3.on("drain", d2).on("error", B2);
    }
    async function ot({ h2stream: e3, body: t3, client: A3, request: r3, socket: o3, contentLength: s2, header: a2, expectsPayload: c2 }) {
      n2(s2 === t3.size, "blob body must have content length");
      const l2 = "h2" === A3[ge];
      try {
        if (null != s2 && s2 !== t3.size) throw new u();
        const n3 = Buffer.from(await t3.arrayBuffer());
        l2 ? (e3.cork(), e3.write(n3), e3.uncork()) : (o3.cork(), o3.write(`${a2}content-length: ${s2}\r
\r
`, "latin1"), o3.write(n3), o3.uncork()), r3.onBodySent(n3), r3.onRequestSent(), c2 || (o3[k] = true), tt(A3);
      } catch (t4) {
        i.destroy(l2 ? e3 : o3, t4);
      }
    }
    async function st({ h2stream: e3, body: t3, client: A3, request: r3, socket: o3, contentLength: s2, header: i2, expectsPayload: a2 }) {
      n2(0 !== s2 || 0 === A3[v], "iterator body cannot be pipelined");
      let c2 = null;
      function l2() {
        if (c2) {
          const e4 = c2;
          c2 = null, e4();
        }
      }
      const u2 = () => new Promise((e4, t4) => {
        n2(null === c2), o3[q] ? t4(o3[q]) : c2 = e4;
      });
      if ("h2" === A3[ge]) {
        e3.on("close", l2).on("drain", l2);
        try {
          for await (const A4 of t3) {
            if (o3[q]) throw o3[q];
            const t4 = e3.write(A4);
            r3.onBodySent(A4), t4 || await u2();
          }
        } catch (t4) {
          e3.destroy(t4);
        } finally {
          r3.onRequestSent(), e3.end(), e3.off("close", l2).off("drain", l2);
        }
        return;
      }
      o3.on("close", l2).on("drain", l2);
      const g2 = new it({ socket: o3, request: r3, contentLength: s2, client: A3, expectsPayload: a2, header: i2 });
      try {
        for await (const e4 of t3) {
          if (o3[q]) throw o3[q];
          g2.write(e4) || await u2();
        }
        g2.end();
      } catch (e4) {
        g2.destroy(e4);
      } finally {
        o3.off("close", l2).off("drain", l2);
      }
    }
    class it {
      constructor({ socket: e3, request: t3, contentLength: A3, client: n3, expectsPayload: r3, header: o3 }) {
        this.socket = e3, this.request = t3, this.contentLength = A3, this.client = n3, this.bytesWritten = 0, this.expectsPayload = r3, this.header = o3, e3[L] = true;
      }
      write(e3) {
        const { socket: t3, request: A3, contentLength: n3, client: r3, bytesWritten: o3, expectsPayload: s2, header: i2 } = this;
        if (t3[q]) throw t3[q];
        if (t3.destroyed) return false;
        const a2 = Buffer.byteLength(e3);
        if (!a2) return true;
        if (null !== n3 && o3 + a2 > n3) {
          if (r3[te]) throw new u();
          process.emitWarning(new u());
        }
        t3.cork(), 0 === o3 && (s2 || (t3[k] = true), null === n3 ? t3.write(`${i2}transfer-encoding: chunked\r
`, "latin1") : t3.write(`${i2}content-length: ${n3}\r
\r
`, "latin1")), null === n3 && t3.write(`\r
${a2.toString(16)}\r
`, "latin1"), this.bytesWritten += a2;
        const c2 = t3.write(e3);
        return t3.uncork(), A3.onBodySent(e3), c2 || t3[D].timeout && t3[D].timeoutType === xe && t3[D].timeout.refresh && t3[D].timeout.refresh(), c2;
      }
      end() {
        const { socket: e3, contentLength: t3, client: A3, bytesWritten: n3, expectsPayload: r3, header: o3, request: s2 } = this;
        if (s2.onRequestSent(), e3[L] = false, e3[q]) throw e3[q];
        if (!e3.destroyed) {
          if (0 === n3 ? r3 ? e3.write(`${o3}content-length: 0\r
\r
`, "latin1") : e3.write(`${o3}\r
`, "latin1") : null === t3 && e3.write("\r\n0\r\n\r\n", "latin1"), null !== t3 && n3 !== t3) {
            if (A3[te]) throw new u();
            process.emitWarning(new u());
          }
          e3[D].timeout && e3[D].timeoutType === xe && e3[D].timeout.refresh && e3[D].timeout.refresh(), tt(A3);
        }
      }
      destroy(e3) {
        const { socket: t3, client: A3 } = this;
        t3[L] = false, e3 && (n2(A3[v] <= 1, "pipeline should only contain this request"), i.destroy(t3, e3));
      }
    }
    function at(e3, t3, A3) {
      try {
        t3.onError(A3), n2(t3.aborted);
      } catch (A4) {
        e3.emit("error", A4);
      }
    }
    e2.exports = class extends l {
      constructor(e3, { interceptors: t3, maxHeaderSize: A3, headersTimeout: n3, socketTimeout: s2, requestTimeout: a2, connectTimeout: c2, bodyTimeout: l2, idleTimeout: u2, keepAlive: g2, keepAliveTimeout: h2, maxKeepAliveTimeout: d2, keepAliveMaxTimeout: I2, keepAliveTimeoutThreshold: B2, socketPath: Q2, pipelining: f2, tls: C2, strictContentLength: p2, maxCachedSessions: m2, maxRedirections: k2, connect: N2, maxRequestsPerClient: T2, localAddress: D2, maxResponseSize: S2, autoSelectFamily: R2, autoSelectFamilyAttemptTimeout: v2, allowH2: M2, maxConcurrentStreams: U2 } = {}) {
        if (super(), void 0 !== g2) throw new E("unsupported keepAlive, use pipelining=0 instead");
        if (void 0 !== s2) throw new E("unsupported socketTimeout, use headersTimeout & bodyTimeout instead");
        if (void 0 !== a2) throw new E("unsupported requestTimeout, use headersTimeout & bodyTimeout instead");
        if (void 0 !== u2) throw new E("unsupported idleTimeout, use keepAliveTimeout instead");
        if (void 0 !== d2) throw new E("unsupported maxKeepAliveTimeout, use keepAliveMaxTimeout instead");
        if (null != A3 && !Number.isFinite(A3)) throw new E("invalid maxHeaderSize");
        if (null != Q2 && "string" != typeof Q2) throw new E("invalid socketPath");
        if (null != c2 && (!Number.isFinite(c2) || c2 < 0)) throw new E("invalid connectTimeout");
        if (null != h2 && (!Number.isFinite(h2) || h2 <= 0)) throw new E("invalid keepAliveTimeout");
        if (null != I2 && (!Number.isFinite(I2) || I2 <= 0)) throw new E("invalid keepAliveMaxTimeout");
        if (null != B2 && !Number.isFinite(B2)) throw new E("invalid keepAliveTimeoutThreshold");
        if (null != n3 && (!Number.isInteger(n3) || n3 < 0)) throw new E("headersTimeout must be a positive integer or zero");
        if (null != l2 && (!Number.isInteger(l2) || l2 < 0)) throw new E("bodyTimeout must be a positive integer or zero");
        if (null != N2 && "function" != typeof N2 && "object" != typeof N2) throw new E("connect must be a function or an object");
        if (null != k2 && (!Number.isInteger(k2) || k2 < 0)) throw new E("maxRedirections must be a positive number");
        if (null != T2 && (!Number.isInteger(T2) || T2 < 0)) throw new E("maxRequestsPerClient must be a positive number");
        if (null != D2 && ("string" != typeof D2 || 0 === r2.isIP(D2))) throw new E("localAddress must be valid string IP address");
        if (null != S2 && (!Number.isInteger(S2) || S2 < -1)) throw new E("maxResponseSize must be a positive number");
        if (null != v2 && (!Number.isInteger(v2) || v2 < -1)) throw new E("autoSelectFamilyAttemptTimeout must be a positive number");
        if (null != M2 && "boolean" != typeof M2) throw new E("allowH2 must be a valid boolean value");
        if (null != U2 && ("number" != typeof U2 || U2 < 1)) throw new E("maxConcurrentStreams must be a possitive integer, greater than 0");
        "function" != typeof N2 && (N2 = y({ ...C2, maxCachedSessions: m2, allowH2: M2, socketPath: Q2, timeout: c2, ...i.nodeHasAutoSelectFamily && R2 ? { autoSelectFamily: R2, autoSelectFamilyAttemptTimeout: v2 } : void 0, ...N2 })), this[ce] = t3 && t3.Client && Array.isArray(t3.Client) ? t3.Client : [Le({ maxRedirections: k2 })], this[w] = i.parseOrigin(e3), this[Ae] = N2, this[j] = null, this[W] = null != f2 ? f2 : 1, this[X] = A3 || o2.maxHeaderSize, this[P] = h2 ?? 4e3, this[Z] = I2 ?? 6e5, this[z] = B2 ?? 1e3, this[K] = this[P], this[b] = null, this[le] = null != D2 ? D2 : null, this[F] = 0, this[Y] = 0, this[V] = `host: ${this[w].hostname}${this[w].port ? `:${this[w].port}` : ""}\r
`, this[ee] = null != l2 ? l2 : 3e5, this[$] = null != n3 ? n3 : 3e5, this[te] = p2 ?? true, this[ne] = k2, this[re] = T2, this[De] = null, this[ue] = S2 > -1 ? S2 : -1, this[ge] = "h1", this[he] = null, this[de] = M2 ? { openStreams: 0, maxConcurrentStreams: null != U2 ? U2 : 100 } : null, this[Ee] = `${this[w].hostname}${this[w].port ? `:${this[w].port}` : ""}`, this[_] = [], this[H] = 0, this[x] = 0;
      }
      get pipelining() {
        return this[W];
      }
      set pipelining(e3) {
        this[W] = e3, tt(this, true);
      }
      get [M]() {
        return this[_].length - this[x];
      }
      get [v]() {
        return this[x] - this[H];
      }
      get [U]() {
        return this[_].length - this[H];
      }
      get [J]() {
        return !!this[j] && !this[O] && !this[j].destroyed;
      }
      get [T]() {
        const e3 = this[j];
        return e3 && (e3[k] || e3[L] || e3[R]) || this[U] >= (this[W] || 1) || this[M] > 0;
      }
      [S](e3) {
        $e(this), this.once("connect", e3);
      }
      [ae](e3, t3) {
        const A3 = e3.origin || this[w].origin, n3 = "h2" === this[ge] ? c[Ie](A3, e3, t3) : c[Qe](A3, e3, t3);
        return this[_].push(n3), this[F] || (null == i.bodyLength(n3.body) && i.isIterable(n3.body) ? (this[F] = 1, process.nextTick(tt, this)) : tt(this, true)), this[F] && 2 !== this[Y] && this[T] && (this[Y] = 2), this[Y] < 2;
      }
      async [se]() {
        return new Promise((e3) => {
          this[U] ? this[De] = e3 : e3(null);
        });
      }
      async [ie](e3) {
        return new Promise((t3) => {
          const A3 = this[_].splice(this[x]);
          for (let t4 = 0; t4 < A3.length; t4++) {
            at(this, A3[t4], e3);
          }
          const n3 = () => {
            this[De] && (this[De](), this[De] = null), t3();
          };
          null != this[he] && (i.destroy(this[he], e3), this[he] = null, this[de] = null), this[j] ? i.destroy(this[j].on("close", n3), e3) : queueMicrotask(n3), tt(this);
        });
      }
    };
  }