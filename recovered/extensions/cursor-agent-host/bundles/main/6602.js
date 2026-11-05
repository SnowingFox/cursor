// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 6602 range:462988..499879
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
6602: (e, t, r) => {
    "use strict";
    const n = r(42613), s = r(69278), o = r(58611), { pipeline: i } = r(2203), a = r(83589), c = r(1335), l = r(74576), u = r(84220), { RequestContentLengthMismatchError: d, ResponseContentLengthMismatchError: p, InvalidArgumentError: m, RequestAbortedError: h, HeadersTimeoutError: f, HeadersOverflowError: g, SocketError: y, InformationalError: w, BodyTimeoutError: v, HTTPParserError: _, ResponseExceededMaxSizeError: A, ClientDestroyedError: S } = r(48762), b = r(4003), { kUrl: E, kReset: I, kServerName: C, kClient: k, kBusy: x, kParser: T, kConnect: R, kBlocking: B, kResuming: P, kRunning: J, kPending: M, kSize: q, kWriting: D, kQueue: O, kConnected: N, kConnecting: F, kNeedDrain: U, kNoRef: L, kKeepAliveDefaultTimeout: $, kHostHeader: Q, kPendingIdx: j, kRunningIdx: G, kError: H, kPipelining: z, kSocket: W, kKeepAliveTimeoutValue: V, kMaxHeadersSize: K, kKeepAliveMaxTimeout: Y, kKeepAliveTimeoutThreshold: Z, kHeadersTimeout: X, kBodyTimeout: ee, kStrictContentLength: te, kConnector: re, kMaxRedirections: ne, kMaxRequests: se, kCounter: oe, kClose: ie, kDestroy: ae, kDispatch: ce, kInterceptors: le, kLocalAddress: ue, kMaxResponseSize: de, kHTTPConnVersion: pe, kHost: me, kHTTP2Session: he, kHTTP2SessionState: fe, kHTTP2BuildRequest: ge, kHTTP2CopyHeaders: ye, kHTTP1BuildRequest: we } = r(15532);
    let ve;
    try {
      ve = r(85675);
    } catch {
      ve = { constants: {} };
    }
    const { constants: { HTTP2_HEADER_AUTHORITY: _e, HTTP2_HEADER_METHOD: Ae, HTTP2_HEADER_PATH: Se, HTTP2_HEADER_SCHEME: be, HTTP2_HEADER_CONTENT_LENGTH: Ee, HTTP2_HEADER_EXPECT: Ie, HTTP2_HEADER_STATUS: Ce } } = ve;
    let ke = false;
    const xe = Buffer[Symbol.species], Te = /* @__PURE__ */ Symbol("kClosedResolve"), Re = {};
    try {
      const e2 = r(31637);
      Re.sendHeaders = e2.channel("undici:client:sendHeaders"), Re.beforeConnect = e2.channel("undici:client:beforeConnect"), Re.connectError = e2.channel("undici:client:connectError"), Re.connected = e2.channel("undici:client:connected");
    } catch {
      Re.sendHeaders = { hasSubscribers: false }, Re.beforeConnect = { hasSubscribers: false }, Re.connectError = { hasSubscribers: false }, Re.connected = { hasSubscribers: false };
    }
    function Be(e2) {
      n("ERR_TLS_CERT_ALTNAME_INVALID" !== e2.code), this[W][H] = e2, Ke(this[k], e2);
    }
    function Pe(e2, t2, r2) {
      const n2 = new w(`HTTP/2: "frameError" received - type ${e2}, code ${t2}`);
      0 === r2 && (this[W][H] = n2, Ke(this[k], n2));
    }
    function Je() {
      a.destroy(this, new y("other side closed")), a.destroy(this[W], new y("other side closed"));
    }
    function Me(e2) {
      const t2 = this[k], r2 = new w(`HTTP/2: "GOAWAY" frame received with code ${e2}`);
      if (t2[W] = null, t2[he] = null, t2.destroyed) {
        n(0 === this[M]);
        const e3 = t2[O].splice(t2[G]);
        for (let t3 = 0; t3 < e3.length; t3++) {
          ct(this, e3[t3], r2);
        }
      } else if (t2[J] > 0) {
        const e3 = t2[O][t2[G]];
        t2[O][t2[G]++] = null, ct(t2, e3, r2);
      }
      t2[j] = t2[G], n(0 === t2[J]), t2.emit("disconnect", t2[E], [t2], r2), tt(t2);
    }
    const qe = r(48311), De = r(31878), Oe = Buffer.alloc(0);
    let Ne = null, Fe = (async function() {
      const e2 = process.env.JEST_WORKER_ID ? r(40417) : void 0;
      let t2;
      try {
        t2 = await WebAssembly.compile(Buffer.from(r(68435), "base64"));
      } catch (n2) {
        t2 = await WebAssembly.compile(Buffer.from(e2 || r(40417), "base64"));
      }
      return await WebAssembly.instantiate(t2, { env: { wasm_on_url: (e3, t3, r2) => 0, wasm_on_status: (e3, t3, r2) => {
        n.strictEqual(Ue.ptr, e3);
        const s2 = t3 - Qe + Le.byteOffset;
        return Ue.onStatus(new xe(Le.buffer, s2, r2)) || 0;
      }, wasm_on_message_begin: (e3) => (n.strictEqual(Ue.ptr, e3), Ue.onMessageBegin() || 0), wasm_on_header_field: (e3, t3, r2) => {
        n.strictEqual(Ue.ptr, e3);
        const s2 = t3 - Qe + Le.byteOffset;
        return Ue.onHeaderField(new xe(Le.buffer, s2, r2)) || 0;
      }, wasm_on_header_value: (e3, t3, r2) => {
        n.strictEqual(Ue.ptr, e3);
        const s2 = t3 - Qe + Le.byteOffset;
        return Ue.onHeaderValue(new xe(Le.buffer, s2, r2)) || 0;
      }, wasm_on_headers_complete: (e3, t3, r2, s2) => (n.strictEqual(Ue.ptr, e3), Ue.onHeadersComplete(t3, Boolean(r2), Boolean(s2)) || 0), wasm_on_body: (e3, t3, r2) => {
        n.strictEqual(Ue.ptr, e3);
        const s2 = t3 - Qe + Le.byteOffset;
        return Ue.onBody(new xe(Le.buffer, s2, r2)) || 0;
      }, wasm_on_message_complete: (e3) => (n.strictEqual(Ue.ptr, e3), Ue.onMessageComplete() || 0) } });
    })();
    Fe.catch();
    let Ue = null, Le = null, $e = 0, Qe = null;
    const je = 1, Ge = 3;
    class He {
      constructor(e2, t2, { exports: r2 }) {
        n(Number.isFinite(e2[K]) && e2[K] > 0), this.llhttp = r2, this.ptr = this.llhttp.llhttp_alloc(qe.TYPE.RESPONSE), this.client = e2, this.socket = t2, this.timeout = null, this.timeoutValue = null, this.timeoutType = null, this.statusCode = null, this.statusText = "", this.upgrade = false, this.headers = [], this.headersSize = 0, this.headersMaxSize = e2[K], this.shouldKeepAlive = false, this.paused = false, this.resume = this.resume.bind(this), this.bytesRead = 0, this.keepAlive = "", this.contentLength = "", this.connection = "", this.maxResponseSize = e2[de];
      }
      setTimeout(e2, t2) {
        this.timeoutType = t2, e2 !== this.timeoutValue ? (c.clearTimeout(this.timeout), e2 ? (this.timeout = c.setTimeout(ze, e2, this), this.timeout.unref && this.timeout.unref()) : this.timeout = null, this.timeoutValue = e2) : this.timeout && this.timeout.refresh && this.timeout.refresh();
      }
      resume() {
        !this.socket.destroyed && this.paused && (n(null != this.ptr), n(null == Ue), this.llhttp.llhttp_resume(this.ptr), n(2 === this.timeoutType), this.timeout && this.timeout.refresh && this.timeout.refresh(), this.paused = false, this.execute(this.socket.read() || Oe), this.readMore());
      }
      readMore() {
        for (; !this.paused && this.ptr; ) {
          const e2 = this.socket.read();
          if (null === e2) break;
          this.execute(e2);
        }
      }
      execute(e2) {
        n(null != this.ptr), n(null == Ue), n(!this.paused);
        const { socket: t2, llhttp: r2 } = this;
        e2.length > $e && (Qe && r2.free(Qe), $e = 4096 * Math.ceil(e2.length / 4096), Qe = r2.malloc($e)), new Uint8Array(r2.memory.buffer, Qe, $e).set(e2);
        try {
          let n2;
          try {
            Le = e2, Ue = this, n2 = r2.llhttp_execute(this.ptr, Qe, e2.length);
          } catch (e3) {
            throw e3;
          } finally {
            Ue = null, Le = null;
          }
          const s2 = r2.llhttp_get_error_pos(this.ptr) - Qe;
          if (n2 === qe.ERROR.PAUSED_UPGRADE) this.onUpgrade(e2.slice(s2));
          else if (n2 === qe.ERROR.PAUSED) this.paused = true, t2.unshift(e2.slice(s2));
          else if (n2 !== qe.ERROR.OK) {
            const t3 = r2.llhttp_get_error_reason(this.ptr);
            let o2 = "";
            if (t3) {
              const e3 = new Uint8Array(r2.memory.buffer, t3).indexOf(0);
              o2 = "Response does not match the HTTP/1.1 protocol (" + Buffer.from(r2.memory.buffer, t3, e3).toString() + ")";
            }
            throw new _(o2, qe.ERROR[n2], e2.slice(s2));
          }
        } catch (e3) {
          a.destroy(t2, e3);
        }
      }
      destroy() {
        n(null != this.ptr), n(null == Ue), this.llhttp.llhttp_free(this.ptr), this.ptr = null, c.clearTimeout(this.timeout), this.timeout = null, this.timeoutValue = null, this.timeoutType = null, this.paused = false;
      }
      onStatus(e2) {
        this.statusText = e2.toString();
      }
      onMessageBegin() {
        const { socket: e2, client: t2 } = this;
        if (e2.destroyed) return -1;
        return t2[O][t2[G]] ? void 0 : -1;
      }
      onHeaderField(e2) {
        const t2 = this.headers.length;
        1 & t2 ? this.headers[t2 - 1] = Buffer.concat([this.headers[t2 - 1], e2]) : this.headers.push(e2), this.trackHeader(e2.length);
      }
      onHeaderValue(e2) {
        let t2 = this.headers.length;
        1 & ~t2 ? this.headers[t2 - 1] = Buffer.concat([this.headers[t2 - 1], e2]) : (this.headers.push(e2), t2 += 1);
        const r2 = this.headers[t2 - 2];
        10 === r2.length && "keep-alive" === r2.toString().toLowerCase() ? this.keepAlive += e2.toString() : 10 === r2.length && "connection" === r2.toString().toLowerCase() ? this.connection += e2.toString() : 14 === r2.length && "content-length" === r2.toString().toLowerCase() && (this.contentLength += e2.toString()), this.trackHeader(e2.length);
      }
      trackHeader(e2) {
        this.headersSize += e2, this.headersSize >= this.headersMaxSize && a.destroy(this.socket, new g());
      }
      onUpgrade(e2) {
        const { upgrade: t2, client: r2, socket: s2, headers: o2, statusCode: i2 } = this;
        n(t2);
        const c2 = r2[O][r2[G]];
        n(c2), n(!s2.destroyed), n(s2 === r2[W]), n(!this.paused), n(c2.upgrade || "CONNECT" === c2.method), this.statusCode = null, this.statusText = "", this.shouldKeepAlive = null, n(this.headers.length % 2 == 0), this.headers = [], this.headersSize = 0, s2.unshift(e2), s2[T].destroy(), s2[T] = null, s2[k] = null, s2[H] = null, s2.removeListener("error", Ve).removeListener("readable", We).removeListener("end", Ye).removeListener("close", Ze), r2[W] = null, r2[O][r2[G]++] = null, r2.emit("disconnect", r2[E], [r2], new w("upgrade"));
        try {
          c2.onUpgrade(i2, o2, s2);
        } catch (e3) {
          a.destroy(s2, e3);
        }
        tt(r2);
      }
      onHeadersComplete(e2, t2, r2) {
        const { client: s2, socket: o2, headers: i2, statusText: c2 } = this;
        if (o2.destroyed) return -1;
        const l2 = s2[O][s2[G]];
        if (!l2) return -1;
        if (n(!this.upgrade), n(this.statusCode < 200), 100 === e2) return a.destroy(o2, new y("bad response", a.getSocketInfo(o2))), -1;
        if (t2 && !l2.upgrade) return a.destroy(o2, new y("bad upgrade", a.getSocketInfo(o2))), -1;
        if (n.strictEqual(this.timeoutType, je), this.statusCode = e2, this.shouldKeepAlive = r2 || "HEAD" === l2.method && !o2[I] && "keep-alive" === this.connection.toLowerCase(), this.statusCode >= 200) {
          const e3 = null != l2.bodyTimeout ? l2.bodyTimeout : s2[ee];
          this.setTimeout(e3, 2);
        } else this.timeout && this.timeout.refresh && this.timeout.refresh();
        if ("CONNECT" === l2.method) return n(1 === s2[J]), this.upgrade = true, 2;
        if (t2) return n(1 === s2[J]), this.upgrade = true, 2;
        if (n(this.headers.length % 2 == 0), this.headers = [], this.headersSize = 0, this.shouldKeepAlive && s2[z]) {
          const e3 = this.keepAlive ? a.parseKeepAliveTimeout(this.keepAlive) : null;
          if (null != e3) {
            const t3 = Math.min(e3 - s2[Z], s2[Y]);
            t3 <= 0 ? o2[I] = true : s2[V] = t3;
          } else s2[V] = s2[$];
        } else o2[I] = true;
        const u2 = false === l2.onHeaders(e2, i2, this.resume, c2);
        return l2.aborted ? -1 : "HEAD" === l2.method || e2 < 200 ? 1 : (o2[B] && (o2[B] = false, tt(s2)), u2 ? qe.ERROR.PAUSED : 0);
      }
      onBody(e2) {
        const { client: t2, socket: r2, statusCode: s2, maxResponseSize: o2 } = this;
        if (r2.destroyed) return -1;
        const i2 = t2[O][t2[G]];
        return n(i2), n.strictEqual(this.timeoutType, 2), this.timeout && this.timeout.refresh && this.timeout.refresh(), n(s2 >= 200), o2 > -1 && this.bytesRead + e2.length > o2 ? (a.destroy(r2, new A()), -1) : (this.bytesRead += e2.length, false === i2.onData(e2) ? qe.ERROR.PAUSED : void 0);
      }
      onMessageComplete() {
        const { client: e2, socket: t2, statusCode: r2, upgrade: s2, headers: o2, contentLength: i2, bytesRead: c2, shouldKeepAlive: l2 } = this;
        if (t2.destroyed && (!r2 || l2)) return -1;
        if (s2) return;
        const u2 = e2[O][e2[G]];
        return n(u2), n(r2 >= 100), this.statusCode = null, this.statusText = "", this.bytesRead = 0, this.contentLength = "", this.keepAlive = "", this.connection = "", n(this.headers.length % 2 == 0), this.headers = [], this.headersSize = 0, r2 < 200 ? void 0 : "HEAD" !== u2.method && i2 && c2 !== parseInt(i2, 10) ? (a.destroy(t2, new p()), -1) : (u2.onComplete(o2), e2[O][e2[G]++] = null, t2[D] ? (n.strictEqual(e2[J], 0), a.destroy(t2, new w("reset")), qe.ERROR.PAUSED) : l2 ? t2[I] && 0 === e2[J] ? (a.destroy(t2, new w("reset")), qe.ERROR.PAUSED) : void (1 === e2[z] ? setImmediate(tt, e2) : tt(e2)) : (a.destroy(t2, new w("reset")), qe.ERROR.PAUSED));
      }
    }
    function ze(e2) {
      const { socket: t2, timeoutType: r2, client: s2 } = e2;
      r2 === je ? (!t2[D] || t2.writableNeedDrain || s2[J] > 1) && (n(!e2.paused, "cannot be paused while waiting for headers"), a.destroy(t2, new f())) : 2 === r2 ? e2.paused || a.destroy(t2, new v()) : r2 === Ge && (n(0 === s2[J] && s2[V]), a.destroy(t2, new w("socket idle timeout")));
    }
    function We() {
      const { [T]: e2 } = this;
      e2 && e2.readMore();
    }
    function Ve(e2) {
      const { [k]: t2, [T]: r2 } = this;
      n("ERR_TLS_CERT_ALTNAME_INVALID" !== e2.code), "h2" === t2[pe] || "ECONNRESET" !== e2.code || !r2.statusCode || r2.shouldKeepAlive ? (this[H] = e2, Ke(this[k], e2)) : r2.onMessageComplete();
    }
    function Ke(e2, t2) {
      if (0 === e2[J] && "UND_ERR_INFO" !== t2.code && "UND_ERR_SOCKET" !== t2.code) {
        n(e2[j] === e2[G]);
        const r2 = e2[O].splice(e2[G]);
        for (let n2 = 0; n2 < r2.length; n2++) {
          ct(e2, r2[n2], t2);
        }
        n(0 === e2[q]);
      }
    }
    function Ye() {
      const { [T]: e2, [k]: t2 } = this;
      "h2" === t2[pe] || !e2.statusCode || e2.shouldKeepAlive ? a.destroy(this, new y("other side closed", a.getSocketInfo(this))) : e2.onMessageComplete();
    }
    function Ze() {
      const { [k]: e2, [T]: t2 } = this;
      "h1" === e2[pe] && t2 && (this[H] || !t2.statusCode || t2.shouldKeepAlive || t2.onMessageComplete(), this[T].destroy(), this[T] = null);
      const r2 = this[H] || new y("closed", a.getSocketInfo(this));
      if (e2[W] = null, e2.destroyed) {
        n(0 === e2[M]);
        const t3 = e2[O].splice(e2[G]);
        for (let n2 = 0; n2 < t3.length; n2++) {
          ct(e2, t3[n2], r2);
        }
      } else if (e2[J] > 0 && "UND_ERR_INFO" !== r2.code) {
        const t3 = e2[O][e2[G]];
        e2[O][e2[G]++] = null, ct(e2, t3, r2);
      }
      e2[j] = e2[G], n(0 === e2[J]), e2.emit("disconnect", e2[E], [e2], r2), tt(e2);
    }
    async function Xe(e2) {
      n(!e2[F]), n(!e2[W]);
      let { host: t2, hostname: r2, protocol: o2, port: i2 } = e2[E];
      if ("[" === r2[0]) {
        const e3 = r2.indexOf("]");
        n(-1 !== e3);
        const t3 = r2.substring(1, e3);
        n(s.isIP(t3)), r2 = t3;
      }
      e2[F] = true, Re.beforeConnect.hasSubscribers && Re.beforeConnect.publish({ connectParams: { host: t2, hostname: r2, protocol: o2, port: i2, servername: e2[C], localAddress: e2[ue] }, connector: e2[re] });
      try {
        const s2 = await new Promise((n2, s3) => {
          e2[re]({ host: t2, hostname: r2, protocol: o2, port: i2, servername: e2[C], localAddress: e2[ue] }, (e3, t3) => {
            e3 ? s3(e3) : n2(t3);
          });
        });
        if (e2.destroyed) return void a.destroy(s2.on("error", () => {
        }), new S());
        e2[F] = false, n(s2);
        if ("h2" === s2.alpnProtocol) {
          ke || (ke = true, process.emitWarning("H2 support is experimental, expect them to change at any time.", { code: "UNDICI-H2" }));
          const t3 = ve.connect(e2[E], { createConnection: () => s2, peerMaxConcurrentStreams: e2[fe].maxConcurrentStreams });
          e2[pe] = "h2", t3[k] = e2, t3[W] = s2, t3.on("error", Be), t3.on("frameError", Pe), t3.on("end", Je), t3.on("goaway", Me), t3.on("close", Ze), t3.unref(), e2[he] = t3, s2[he] = t3;
        } else Ne || (Ne = await Fe, Fe = null), s2[L] = false, s2[D] = false, s2[I] = false, s2[B] = false, s2[T] = new He(e2, s2, Ne);
        s2[oe] = 0, s2[se] = e2[se], s2[k] = e2, s2[H] = null, s2.on("error", Ve).on("readable", We).on("end", Ye).on("close", Ze), e2[W] = s2, Re.connected.hasSubscribers && Re.connected.publish({ connectParams: { host: t2, hostname: r2, protocol: o2, port: i2, servername: e2[C], localAddress: e2[ue] }, connector: e2[re], socket: s2 }), e2.emit("connect", e2[E], [e2]);
      } catch (s2) {
        if (e2.destroyed) return;
        if (e2[F] = false, Re.connectError.hasSubscribers && Re.connectError.publish({ connectParams: { host: t2, hostname: r2, protocol: o2, port: i2, servername: e2[C], localAddress: e2[ue] }, connector: e2[re], error: s2 }), "ERR_TLS_CERT_ALTNAME_INVALID" === s2.code) for (n(0 === e2[J]); e2[M] > 0 && e2[O][e2[j]].servername === e2[C]; ) {
          const t3 = e2[O][e2[j]++];
          ct(e2, t3, s2);
        }
        else Ke(e2, s2);
        e2.emit("connectionError", e2[E], [e2], s2);
      }
      tt(e2);
    }
    function et(e2) {
      e2[U] = 0, e2.emit("drain", e2[E], [e2]);
    }
    function tt(e2, t2) {
      2 !== e2[P] && (e2[P] = 2, (function(e3, t3) {
        for (; ; ) {
          if (e3.destroyed) return void n(0 === e3[M]);
          if (e3[Te] && !e3[q]) return e3[Te](), void (e3[Te] = null);
          const r2 = e3[W];
          if (r2 && !r2.destroyed && "h2" !== r2.alpnProtocol) {
            if (0 === e3[q] ? !r2[L] && r2.unref && (r2.unref(), r2[L] = true) : r2[L] && r2.ref && (r2.ref(), r2[L] = false), 0 === e3[q]) r2[T].timeoutType !== Ge && r2[T].setTimeout(e3[V], Ge);
            else if (e3[J] > 0 && r2[T].statusCode < 200 && r2[T].timeoutType !== je) {
              const t4 = e3[O][e3[G]], n2 = null != t4.headersTimeout ? t4.headersTimeout : e3[X];
              r2[T].setTimeout(n2, je);
            }
          }
          if (e3[x]) e3[U] = 2;
          else if (2 === e3[U]) {
            t3 ? (e3[U] = 1, process.nextTick(et, e3)) : et(e3);
            continue;
          }
          if (0 === e3[M]) return;
          if (e3[J] >= (e3[z] || 1)) return;
          const s2 = e3[O][e3[j]];
          if ("https:" === e3[E].protocol && e3[C] !== s2.servername) {
            if (e3[J] > 0) return;
            if (e3[C] = s2.servername, r2 && r2.servername !== s2.servername) return void a.destroy(r2, new w("servername changed"));
          }
          if (e3[F]) return;
          if (!r2 && !e3[he]) return void Xe(e3);
          if (r2.destroyed || r2[D] || r2[I] || r2[B]) return;
          if (e3[J] > 0 && !s2.idempotent) return;
          if (e3[J] > 0 && (s2.upgrade || "CONNECT" === s2.method)) return;
          if (e3[J] > 0 && 0 !== a.bodyLength(s2.body) && (a.isStream(s2.body) || a.isAsyncIterable(s2.body))) return;
          !s2.aborted && nt(e3, s2) ? e3[j]++ : e3[O].splice(e3[j], 1);
        }
      })(e2, t2), e2[P] = 0, e2[G] > 256 && (e2[O].splice(0, e2[G]), e2[j] -= e2[G], e2[G] = 0));
    }
    function rt(e2) {
      return "GET" !== e2 && "HEAD" !== e2 && "OPTIONS" !== e2 && "TRACE" !== e2 && "CONNECT" !== e2;
    }
    function nt(e2, t2) {
      if ("h2" === e2[pe]) return void (function(e3, t3, r3) {
        const { body: s3, method: o3, path: i3, host: c3, upgrade: u3, expectContinue: p3, signal: m3, headers: f3 } = r3;
        let g3, y3;
        g3 = "string" == typeof f3 ? l[ye](f3.trim()) : f3;
        if (u3) return ct(e3, r3, new Error("Upgrade not supported for H2")), false;
        try {
          r3.onConnect((t4) => {
            r3.aborted || r3.completed || ct(e3, r3, t4 || new h());
          });
        } catch (t4) {
          ct(e3, r3, t4);
        }
        if (r3.aborted) return false;
        const v3 = e3[fe];
        if (g3[_e] = c3 || e3[me], g3[Ae] = o3, "CONNECT" === o3) return t3.ref(), y3 = t3.request(g3, { endStream: false, signal: m3 }), y3.id && !y3.pending ? (r3.onUpgrade(null, null, y3), ++v3.openStreams) : y3.once("ready", () => {
          r3.onUpgrade(null, null, y3), ++v3.openStreams;
        }), y3.once("close", () => {
          v3.openStreams -= 1, 0 === v3.openStreams && t3.unref();
        }), true;
        g3[Se] = i3, g3[be] = "https";
        const _3 = "PUT" === o3 || "POST" === o3 || "PATCH" === o3;
        s3 && "function" == typeof s3.read && s3.read(0);
        let A2 = a.bodyLength(s3);
        null == A2 && (A2 = r3.contentLength);
        0 !== A2 && _3 || (A2 = null);
        if (rt(o3) && A2 > 0 && null != r3.contentLength && r3.contentLength !== A2) {
          if (e3[te]) return ct(e3, r3, new d()), false;
          process.emitWarning(new d());
        }
        null != A2 && (n(s3, "no body must not have content length"), g3[Ee] = `${A2}`);
        t3.ref();
        const S2 = "GET" === o3 || "HEAD" === o3;
        p3 ? (g3[Ie] = "100-continue", y3 = t3.request(g3, { endStream: S2, signal: m3 }), y3.once("continue", b2)) : (y3 = t3.request(g3, { endStream: S2, signal: m3 }), b2());
        return ++v3.openStreams, y3.once("response", (e4) => {
          const { [Ce]: t4, ...n2 } = e4;
          false === r3.onHeaders(Number(t4), n2, y3.resume.bind(y3), "") && y3.pause();
        }), y3.once("end", () => {
          r3.onComplete([]);
        }), y3.on("data", (e4) => {
          false === r3.onData(e4) && y3.pause();
        }), y3.once("close", () => {
          v3.openStreams -= 1, 0 === v3.openStreams && t3.unref();
        }), y3.once("error", function(t4) {
          !e3[he] || e3[he].destroyed || this.closed || this.destroyed || (v3.streams -= 1, a.destroy(y3, t4));
        }), y3.once("frameError", (t4, n2) => {
          const s4 = new w(`HTTP/2: "frameError" received - type ${t4}, code ${n2}`);
          ct(e3, r3, s4), !e3[he] || e3[he].destroyed || this.closed || this.destroyed || (v3.streams -= 1, a.destroy(y3, s4));
        }), true;
        function b2() {
          s3 ? a.isBuffer(s3) ? (n(A2 === s3.byteLength, "buffer body must have content length"), y3.cork(), y3.write(s3), y3.uncork(), y3.end(), r3.onBodySent(s3), r3.onRequestSent()) : a.isBlobLike(s3) ? "function" == typeof s3.stream ? it({ client: e3, request: r3, contentLength: A2, h2stream: y3, expectsPayload: _3, body: s3.stream(), socket: e3[W], header: "" }) : ot({ body: s3, client: e3, request: r3, contentLength: A2, expectsPayload: _3, h2stream: y3, header: "", socket: e3[W] }) : a.isStream(s3) ? st({ body: s3, client: e3, request: r3, contentLength: A2, expectsPayload: _3, socket: e3[W], h2stream: y3, header: "" }) : a.isIterable(s3) ? it({ body: s3, client: e3, request: r3, contentLength: A2, expectsPayload: _3, header: "", h2stream: y3, socket: e3[W] }) : n(false) : r3.onRequestSent();
        }
      })(e2, e2[he], t2);
      const { body: r2, method: s2, path: o2, host: i2, upgrade: c2, headers: u2, blocking: p2, reset: m2 } = t2, f2 = "PUT" === s2 || "POST" === s2 || "PATCH" === s2;
      r2 && "function" == typeof r2.read && r2.read(0);
      const g2 = a.bodyLength(r2);
      let y2 = g2;
      if (null === y2 && (y2 = t2.contentLength), 0 !== y2 || f2 || (y2 = null), rt(s2) && y2 > 0 && null !== t2.contentLength && t2.contentLength !== y2) {
        if (e2[te]) return ct(e2, t2, new d()), false;
        process.emitWarning(new d());
      }
      const v2 = e2[W];
      try {
        t2.onConnect((r3) => {
          t2.aborted || t2.completed || (ct(e2, t2, r3 || new h()), a.destroy(v2, new w("aborted")));
        });
      } catch (r3) {
        ct(e2, t2, r3);
      }
      if (t2.aborted) return false;
      "HEAD" === s2 && (v2[I] = true), (c2 || "CONNECT" === s2) && (v2[I] = true), null != m2 && (v2[I] = m2), e2[se] && v2[oe]++ >= e2[se] && (v2[I] = true), p2 && (v2[B] = true);
      let _2 = `${s2} ${o2} HTTP/1.1\r
`;
      return _2 += "string" == typeof i2 ? `host: ${i2}\r
` : e2[Q], c2 ? _2 += `connection: upgrade\r
upgrade: ${c2}\r
` : e2[z] && !v2[I] ? _2 += "connection: keep-alive\r\n" : _2 += "connection: close\r\n", u2 && (_2 += u2), Re.sendHeaders.hasSubscribers && Re.sendHeaders.publish({ request: t2, headers: _2, socket: v2 }), r2 && 0 !== g2 ? a.isBuffer(r2) ? (n(y2 === r2.byteLength, "buffer body must have content length"), v2.cork(), v2.write(`${_2}content-length: ${y2}\r
\r
`, "latin1"), v2.write(r2), v2.uncork(), t2.onBodySent(r2), t2.onRequestSent(), f2 || (v2[I] = true)) : a.isBlobLike(r2) ? "function" == typeof r2.stream ? it({ body: r2.stream(), client: e2, request: t2, socket: v2, contentLength: y2, header: _2, expectsPayload: f2 }) : ot({ body: r2, client: e2, request: t2, socket: v2, contentLength: y2, header: _2, expectsPayload: f2 }) : a.isStream(r2) ? st({ body: r2, client: e2, request: t2, socket: v2, contentLength: y2, header: _2, expectsPayload: f2 }) : a.isIterable(r2) ? it({ body: r2, client: e2, request: t2, socket: v2, contentLength: y2, header: _2, expectsPayload: f2 }) : n(false) : (0 === y2 ? v2.write(`${_2}content-length: 0\r
\r
`, "latin1") : (n(null === y2, "no body must not have content length"), v2.write(`${_2}\r
`, "latin1")), t2.onRequestSent()), true;
    }
    function st({ h2stream: e2, body: t2, client: r2, request: s2, socket: o2, contentLength: c2, header: l2, expectsPayload: u2 }) {
      if (n(0 !== c2 || 0 === r2[J], "stream body cannot be pipelined"), "h2" === r2[pe]) {
        let v2 = function(e3) {
          s2.onBodySent(e3);
        };
        const w2 = i(t2, e2, (r3) => {
          r3 ? (a.destroy(t2, r3), a.destroy(e2, r3)) : s2.onRequestSent();
        });
        return w2.on("data", v2), void w2.once("end", () => {
          w2.removeListener("data", v2), a.destroy(w2);
        });
      }
      let d2 = false;
      const p2 = new at({ socket: o2, request: s2, contentLength: c2, client: r2, expectsPayload: u2, header: l2 }), m2 = function(e3) {
        if (!d2) try {
          !p2.write(e3) && this.pause && this.pause();
        } catch (e4) {
          a.destroy(this, e4);
        }
      }, f2 = function() {
        d2 || t2.resume && t2.resume();
      }, g2 = function() {
        if (d2) return;
        const e3 = new h();
        queueMicrotask(() => y2(e3));
      }, y2 = function(e3) {
        if (!d2) {
          if (d2 = true, n(o2.destroyed || o2[D] && r2[J] <= 1), o2.off("drain", f2).off("error", y2), t2.removeListener("data", m2).removeListener("end", y2).removeListener("error", y2).removeListener("close", g2), !e3) try {
            p2.end();
          } catch (t3) {
            e3 = t3;
          }
          p2.destroy(e3), !e3 || "UND_ERR_INFO" === e3.code && "reset" === e3.message ? a.destroy(t2) : a.destroy(t2, e3);
        }
      };
      t2.on("data", m2).on("end", y2).on("error", y2).on("close", g2), t2.resume && t2.resume(), o2.on("drain", f2).on("error", y2);
    }
    async function ot({ h2stream: e2, body: t2, client: r2, request: s2, socket: o2, contentLength: i2, header: c2, expectsPayload: l2 }) {
      n(i2 === t2.size, "blob body must have content length");
      const u2 = "h2" === r2[pe];
      try {
        if (null != i2 && i2 !== t2.size) throw new d();
        const n2 = Buffer.from(await t2.arrayBuffer());
        u2 ? (e2.cork(), e2.write(n2), e2.uncork()) : (o2.cork(), o2.write(`${c2}content-length: ${i2}\r
\r
`, "latin1"), o2.write(n2), o2.uncork()), s2.onBodySent(n2), s2.onRequestSent(), l2 || (o2[I] = true), tt(r2);
      } catch (t3) {
        a.destroy(u2 ? e2 : o2, t3);
      }
    }
    async function it({ h2stream: e2, body: t2, client: r2, request: s2, socket: o2, contentLength: i2, header: a2, expectsPayload: c2 }) {
      n(0 !== i2 || 0 === r2[J], "iterator body cannot be pipelined");
      let l2 = null;
      function u2() {
        if (l2) {
          const e3 = l2;
          l2 = null, e3();
        }
      }
      const d2 = () => new Promise((e3, t3) => {
        n(null === l2), o2[H] ? t3(o2[H]) : l2 = e3;
      });
      if ("h2" === r2[pe]) {
        e2.on("close", u2).on("drain", u2);
        try {
          for await (const r3 of t2) {
            if (o2[H]) throw o2[H];
            const t3 = e2.write(r3);
            s2.onBodySent(r3), t3 || await d2();
          }
        } catch (t3) {
          e2.destroy(t3);
        } finally {
          s2.onRequestSent(), e2.end(), e2.off("close", u2).off("drain", u2);
        }
        return;
      }
      o2.on("close", u2).on("drain", u2);
      const p2 = new at({ socket: o2, request: s2, contentLength: i2, client: r2, expectsPayload: c2, header: a2 });
      try {
        for await (const e3 of t2) {
          if (o2[H]) throw o2[H];
          p2.write(e3) || await d2();
        }
        p2.end();
      } catch (e3) {
        p2.destroy(e3);
      } finally {
        o2.off("close", u2).off("drain", u2);
      }
    }
    class at {
      constructor({ socket: e2, request: t2, contentLength: r2, client: n2, expectsPayload: s2, header: o2 }) {
        this.socket = e2, this.request = t2, this.contentLength = r2, this.client = n2, this.bytesWritten = 0, this.expectsPayload = s2, this.header = o2, e2[D] = true;
      }
      write(e2) {
        const { socket: t2, request: r2, contentLength: n2, client: s2, bytesWritten: o2, expectsPayload: i2, header: a2 } = this;
        if (t2[H]) throw t2[H];
        if (t2.destroyed) return false;
        const c2 = Buffer.byteLength(e2);
        if (!c2) return true;
        if (null !== n2 && o2 + c2 > n2) {
          if (s2[te]) throw new d();
          process.emitWarning(new d());
        }
        t2.cork(), 0 === o2 && (i2 || (t2[I] = true), null === n2 ? t2.write(`${a2}transfer-encoding: chunked\r
`, "latin1") : t2.write(`${a2}content-length: ${n2}\r
\r
`, "latin1")), null === n2 && t2.write(`\r
${c2.toString(16)}\r
`, "latin1"), this.bytesWritten += c2;
        const l2 = t2.write(e2);
        return t2.uncork(), r2.onBodySent(e2), l2 || t2[T].timeout && t2[T].timeoutType === je && t2[T].timeout.refresh && t2[T].timeout.refresh(), l2;
      }
      end() {
        const { socket: e2, contentLength: t2, client: r2, bytesWritten: n2, expectsPayload: s2, header: o2, request: i2 } = this;
        if (i2.onRequestSent(), e2[D] = false, e2[H]) throw e2[H];
        if (!e2.destroyed) {
          if (0 === n2 ? s2 ? e2.write(`${o2}content-length: 0\r
\r
`, "latin1") : e2.write(`${o2}\r
`, "latin1") : null === t2 && e2.write("\r\n0\r\n\r\n", "latin1"), null !== t2 && n2 !== t2) {
            if (r2[te]) throw new d();
            process.emitWarning(new d());
          }
          e2[T].timeout && e2[T].timeoutType === je && e2[T].timeout.refresh && e2[T].timeout.refresh(), tt(r2);
        }
      }
      destroy(e2) {
        const { socket: t2, client: r2 } = this;
        t2[D] = false, e2 && (n(r2[J] <= 1, "pipeline should only contain this request"), a.destroy(t2, e2));
      }
    }
    function ct(e2, t2, r2) {
      try {
        t2.onError(r2), n(t2.aborted);
      } catch (r3) {
        e2.emit("error", r3);
      }
    }
    e.exports = class extends u {
      constructor(e2, { interceptors: t2, maxHeaderSize: r2, headersTimeout: n2, socketTimeout: i2, requestTimeout: c2, connectTimeout: l2, bodyTimeout: u2, idleTimeout: d2, keepAlive: p2, keepAliveTimeout: h2, maxKeepAliveTimeout: f2, keepAliveMaxTimeout: g2, keepAliveTimeoutThreshold: y2, socketPath: w2, pipelining: v2, tls: _2, strictContentLength: A2, maxCachedSessions: S2, maxRedirections: I2, connect: k2, maxRequestsPerClient: x2, localAddress: T2, maxResponseSize: R2, autoSelectFamily: B2, autoSelectFamilyAttemptTimeout: J2, allowH2: M2, maxConcurrentStreams: q2 } = {}) {
        if (super(), void 0 !== p2) throw new m("unsupported keepAlive, use pipelining=0 instead");
        if (void 0 !== i2) throw new m("unsupported socketTimeout, use headersTimeout & bodyTimeout instead");
        if (void 0 !== c2) throw new m("unsupported requestTimeout, use headersTimeout & bodyTimeout instead");
        if (void 0 !== d2) throw new m("unsupported idleTimeout, use keepAliveTimeout instead");
        if (void 0 !== f2) throw new m("unsupported maxKeepAliveTimeout, use keepAliveMaxTimeout instead");
        if (null != r2 && !Number.isFinite(r2)) throw new m("invalid maxHeaderSize");
        if (null != w2 && "string" != typeof w2) throw new m("invalid socketPath");
        if (null != l2 && (!Number.isFinite(l2) || l2 < 0)) throw new m("invalid connectTimeout");
        if (null != h2 && (!Number.isFinite(h2) || h2 <= 0)) throw new m("invalid keepAliveTimeout");
        if (null != g2 && (!Number.isFinite(g2) || g2 <= 0)) throw new m("invalid keepAliveMaxTimeout");
        if (null != y2 && !Number.isFinite(y2)) throw new m("invalid keepAliveTimeoutThreshold");
        if (null != n2 && (!Number.isInteger(n2) || n2 < 0)) throw new m("headersTimeout must be a positive integer or zero");
        if (null != u2 && (!Number.isInteger(u2) || u2 < 0)) throw new m("bodyTimeout must be a positive integer or zero");
        if (null != k2 && "function" != typeof k2 && "object" != typeof k2) throw new m("connect must be a function or an object");
        if (null != I2 && (!Number.isInteger(I2) || I2 < 0)) throw new m("maxRedirections must be a positive number");
        if (null != x2 && (!Number.isInteger(x2) || x2 < 0)) throw new m("maxRequestsPerClient must be a positive number");
        if (null != T2 && ("string" != typeof T2 || 0 === s.isIP(T2))) throw new m("localAddress must be valid string IP address");
        if (null != R2 && (!Number.isInteger(R2) || R2 < -1)) throw new m("maxResponseSize must be a positive number");
        if (null != J2 && (!Number.isInteger(J2) || J2 < -1)) throw new m("autoSelectFamilyAttemptTimeout must be a positive number");
        if (null != M2 && "boolean" != typeof M2) throw new m("allowH2 must be a valid boolean value");
        if (null != q2 && ("number" != typeof q2 || q2 < 1)) throw new m("maxConcurrentStreams must be a possitive integer, greater than 0");
        "function" != typeof k2 && (k2 = b({ ..._2, maxCachedSessions: S2, allowH2: M2, socketPath: w2, timeout: l2, ...a.nodeHasAutoSelectFamily && B2 ? { autoSelectFamily: B2, autoSelectFamilyAttemptTimeout: J2 } : void 0, ...k2 })), this[le] = t2 && t2.Client && Array.isArray(t2.Client) ? t2.Client : [De({ maxRedirections: I2 })], this[E] = a.parseOrigin(e2), this[re] = k2, this[W] = null, this[z] = null != v2 ? v2 : 1, this[K] = r2 || o.maxHeaderSize, this[$] = h2 ?? 4e3, this[Y] = g2 ?? 6e5, this[Z] = y2 ?? 1e3, this[V] = this[$], this[C] = null, this[ue] = null != T2 ? T2 : null, this[P] = 0, this[U] = 0, this[Q] = `host: ${this[E].hostname}${this[E].port ? `:${this[E].port}` : ""}\r
`, this[ee] = null != u2 ? u2 : 3e5, this[X] = null != n2 ? n2 : 3e5, this[te] = A2 ?? true, this[ne] = I2, this[se] = x2, this[Te] = null, this[de] = R2 > -1 ? R2 : -1, this[pe] = "h1", this[he] = null, this[fe] = M2 ? { openStreams: 0, maxConcurrentStreams: null != q2 ? q2 : 100 } : null, this[me] = `${this[E].hostname}${this[E].port ? `:${this[E].port}` : ""}`, this[O] = [], this[G] = 0, this[j] = 0;
      }
      get pipelining() {
        return this[z];
      }
      set pipelining(e2) {
        this[z] = e2, tt(this, true);
      }
      get [M]() {
        return this[O].length - this[j];
      }
      get [J]() {
        return this[j] - this[G];
      }
      get [q]() {
        return this[O].length - this[G];
      }
      get [N]() {
        return !!this[W] && !this[F] && !this[W].destroyed;
      }
      get [x]() {
        const e2 = this[W];
        return e2 && (e2[I] || e2[D] || e2[B]) || this[q] >= (this[z] || 1) || this[M] > 0;
      }
      [R](e2) {
        Xe(this), this.once("connect", e2);
      }
      [ce](e2, t2) {
        const r2 = e2.origin || this[E].origin, n2 = "h2" === this[pe] ? l[ge](r2, e2, t2) : l[we](r2, e2, t2);
        return this[O].push(n2), this[P] || (null == a.bodyLength(n2.body) && a.isIterable(n2.body) ? (this[P] = 1, process.nextTick(tt, this)) : tt(this, true)), this[P] && 2 !== this[U] && this[x] && (this[U] = 2), this[U] < 2;
      }
      async [ie]() {
        return new Promise((e2) => {
          this[q] ? this[Te] = e2 : e2(null);
        });
      }
      async [ae](e2) {
        return new Promise((t2) => {
          const r2 = this[O].splice(this[j]);
          for (let t3 = 0; t3 < r2.length; t3++) {
            ct(this, r2[t3], e2);
          }
          const n2 = () => {
            this[Te] && (this[Te](), this[Te] = null), t2();
          };
          null != this[he] && (a.destroy(this[he], e2), this[he] = null, this[fe] = null), this[W] ? a.destroy(this[W].on("close", n2), e2) : queueMicrotask(n2), tt(this);
        });
      }
    };
  }