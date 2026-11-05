// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 6602 range:3700958..3737928
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6602: (t2, e2, r2) => {
    "use strict";
    const n2 = r2(2613), s2 = r2(9278), i2 = r2(8611), { pipeline: o2 } = r2(2203), a = r2(3589), u = r2(1335), c = r2(4576), l = r2(4220), { RequestContentLengthMismatchError: m, ResponseContentLengthMismatchError: d, InvalidArgumentError: f, RequestAbortedError: p, HeadersTimeoutError: h, HeadersOverflowError: g, SocketError: A, InformationalError: _, BodyTimeoutError: y, HTTPParserError: w, ResponseExceededMaxSizeError: S, ClientDestroyedError: J } = r2(8762), B = r2(4003), { kUrl: E, kReset: I, kServerName: C, kClient: b, kBusy: k, kParser: v, kConnect: q, kBlocking: R, kResuming: P, kRunning: T, kPending: x, kSize: N, kWriting: D, kQueue: U, kConnected: Q, kConnecting: M, kNeedDrain: O, kNoRef: F, kKeepAliveDefaultTimeout: L, kHostHeader: $, kPendingIdx: G, kRunningIdx: H, kError: K, kPipelining: V, kSocket: z, kKeepAliveTimeoutValue: W, kMaxHeadersSize: Y, kKeepAliveMaxTimeout: j, kKeepAliveTimeoutThreshold: X, kHeadersTimeout: Z, kBodyTimeout: tt, kStrictContentLength: et, kConnector: rt, kMaxRedirections: nt, kMaxRequests: st, kCounter: it, kClose: ot, kDestroy: at, kDispatch: ut, kInterceptors: ct, kLocalAddress: lt, kMaxResponseSize: mt, kHTTPConnVersion: dt, kHost: ft, kHTTP2Session: pt, kHTTP2SessionState: ht, kHTTP2BuildRequest: gt, kHTTP2CopyHeaders: At, kHTTP1BuildRequest: _t } = r2(5532);
    let yt;
    try {
      yt = r2(5675);
    } catch {
      yt = { constants: {} };
    }
    const { constants: { HTTP2_HEADER_AUTHORITY: wt, HTTP2_HEADER_METHOD: St, HTTP2_HEADER_PATH: Jt, HTTP2_HEADER_SCHEME: Bt, HTTP2_HEADER_CONTENT_LENGTH: Et, HTTP2_HEADER_EXPECT: It, HTTP2_HEADER_STATUS: Ct } } = yt;
    let bt = false;
    const kt = Buffer[Symbol.species], vt = /* @__PURE__ */ Symbol("kClosedResolve"), qt = {};
    try {
      const t3 = r2(1637);
      qt.sendHeaders = t3.channel("undici:client:sendHeaders"), qt.beforeConnect = t3.channel("undici:client:beforeConnect"), qt.connectError = t3.channel("undici:client:connectError"), qt.connected = t3.channel("undici:client:connected");
    } catch {
      qt.sendHeaders = { hasSubscribers: false }, qt.beforeConnect = { hasSubscribers: false }, qt.connectError = { hasSubscribers: false }, qt.connected = { hasSubscribers: false };
    }
    function Rt(t3) {
      n2("ERR_TLS_CERT_ALTNAME_INVALID" !== t3.code), this[z][K] = t3, Yt(this[b], t3);
    }
    function Pt(t3, e3, r3) {
      const n3 = new _(`HTTP/2: "frameError" received - type ${t3}, code ${e3}`);
      0 === r3 && (this[z][K] = n3, Yt(this[b], n3));
    }
    function Tt() {
      a.destroy(this, new A("other side closed")), a.destroy(this[z], new A("other side closed"));
    }
    function xt(t3) {
      const e3 = this[b], r3 = new _(`HTTP/2: "GOAWAY" frame received with code ${t3}`);
      if (e3[z] = null, e3[pt] = null, e3.destroyed) {
        n2(0 === this[x]);
        const t4 = e3[U].splice(e3[H]);
        for (let e4 = 0; e4 < t4.length; e4++) {
          ue(this, t4[e4], r3);
        }
      } else if (e3[T] > 0) {
        const t4 = e3[U][e3[H]];
        e3[U][e3[H]++] = null, ue(e3, t4, r3);
      }
      e3[G] = e3[H], n2(0 === e3[T]), e3.emit("disconnect", e3[E], [e3], r3), ee(e3);
    }
    const Nt = r2(8311), Dt = r2(1878), Ut = Buffer.alloc(0);
    let Qt = null, Mt = (async function() {
      const t3 = process.env.JEST_WORKER_ID ? r2(417) : void 0;
      let e3;
      try {
        e3 = await WebAssembly.compile(Buffer.from(r2(8435), "base64"));
      } catch (n3) {
        e3 = await WebAssembly.compile(Buffer.from(t3 || r2(417), "base64"));
      }
      return await WebAssembly.instantiate(e3, { env: { wasm_on_url: (t4, e4, r3) => 0, wasm_on_status: (t4, e4, r3) => {
        n2.strictEqual(Ot.ptr, t4);
        const s3 = e4 - $t + Ft.byteOffset;
        return Ot.onStatus(new kt(Ft.buffer, s3, r3)) || 0;
      }, wasm_on_message_begin: (t4) => (n2.strictEqual(Ot.ptr, t4), Ot.onMessageBegin() || 0), wasm_on_header_field: (t4, e4, r3) => {
        n2.strictEqual(Ot.ptr, t4);
        const s3 = e4 - $t + Ft.byteOffset;
        return Ot.onHeaderField(new kt(Ft.buffer, s3, r3)) || 0;
      }, wasm_on_header_value: (t4, e4, r3) => {
        n2.strictEqual(Ot.ptr, t4);
        const s3 = e4 - $t + Ft.byteOffset;
        return Ot.onHeaderValue(new kt(Ft.buffer, s3, r3)) || 0;
      }, wasm_on_headers_complete: (t4, e4, r3, s3) => (n2.strictEqual(Ot.ptr, t4), Ot.onHeadersComplete(e4, Boolean(r3), Boolean(s3)) || 0), wasm_on_body: (t4, e4, r3) => {
        n2.strictEqual(Ot.ptr, t4);
        const s3 = e4 - $t + Ft.byteOffset;
        return Ot.onBody(new kt(Ft.buffer, s3, r3)) || 0;
      }, wasm_on_message_complete: (t4) => (n2.strictEqual(Ot.ptr, t4), Ot.onMessageComplete() || 0) } });
    })();
    Mt.catch();
    let Ot = null, Ft = null, Lt = 0, $t = null;
    const Gt = 1, Ht = 3;
    class Kt {
      constructor(t3, e3, { exports: r3 }) {
        n2(Number.isFinite(t3[Y]) && t3[Y] > 0), this.llhttp = r3, this.ptr = this.llhttp.llhttp_alloc(Nt.TYPE.RESPONSE), this.client = t3, this.socket = e3, this.timeout = null, this.timeoutValue = null, this.timeoutType = null, this.statusCode = null, this.statusText = "", this.upgrade = false, this.headers = [], this.headersSize = 0, this.headersMaxSize = t3[Y], this.shouldKeepAlive = false, this.paused = false, this.resume = this.resume.bind(this), this.bytesRead = 0, this.keepAlive = "", this.contentLength = "", this.connection = "", this.maxResponseSize = t3[mt];
      }
      setTimeout(t3, e3) {
        this.timeoutType = e3, t3 !== this.timeoutValue ? (u.clearTimeout(this.timeout), t3 ? (this.timeout = u.setTimeout(Vt, t3, this), this.timeout.unref && this.timeout.unref()) : this.timeout = null, this.timeoutValue = t3) : this.timeout && this.timeout.refresh && this.timeout.refresh();
      }
      resume() {
        !this.socket.destroyed && this.paused && (n2(null != this.ptr), n2(null == Ot), this.llhttp.llhttp_resume(this.ptr), n2(2 === this.timeoutType), this.timeout && this.timeout.refresh && this.timeout.refresh(), this.paused = false, this.execute(this.socket.read() || Ut), this.readMore());
      }
      readMore() {
        for (; !this.paused && this.ptr; ) {
          const t3 = this.socket.read();
          if (null === t3) break;
          this.execute(t3);
        }
      }
      execute(t3) {
        n2(null != this.ptr), n2(null == Ot), n2(!this.paused);
        const { socket: e3, llhttp: r3 } = this;
        t3.length > Lt && ($t && r3.free($t), Lt = 4096 * Math.ceil(t3.length / 4096), $t = r3.malloc(Lt)), new Uint8Array(r3.memory.buffer, $t, Lt).set(t3);
        try {
          let n3;
          try {
            Ft = t3, Ot = this, n3 = r3.llhttp_execute(this.ptr, $t, t3.length);
          } catch (t4) {
            throw t4;
          } finally {
            Ot = null, Ft = null;
          }
          const s3 = r3.llhttp_get_error_pos(this.ptr) - $t;
          if (n3 === Nt.ERROR.PAUSED_UPGRADE) this.onUpgrade(t3.slice(s3));
          else if (n3 === Nt.ERROR.PAUSED) this.paused = true, e3.unshift(t3.slice(s3));
          else if (n3 !== Nt.ERROR.OK) {
            const e4 = r3.llhttp_get_error_reason(this.ptr);
            let i3 = "";
            if (e4) {
              const t4 = new Uint8Array(r3.memory.buffer, e4).indexOf(0);
              i3 = "Response does not match the HTTP/1.1 protocol (" + Buffer.from(r3.memory.buffer, e4, t4).toString() + ")";
            }
            throw new w(i3, Nt.ERROR[n3], t3.slice(s3));
          }
        } catch (t4) {
          a.destroy(e3, t4);
        }
      }
      destroy() {
        n2(null != this.ptr), n2(null == Ot), this.llhttp.llhttp_free(this.ptr), this.ptr = null, u.clearTimeout(this.timeout), this.timeout = null, this.timeoutValue = null, this.timeoutType = null, this.paused = false;
      }
      onStatus(t3) {
        this.statusText = t3.toString();
      }
      onMessageBegin() {
        const { socket: t3, client: e3 } = this;
        if (t3.destroyed) return -1;
        return e3[U][e3[H]] ? void 0 : -1;
      }
      onHeaderField(t3) {
        const e3 = this.headers.length;
        1 & e3 ? this.headers[e3 - 1] = Buffer.concat([this.headers[e3 - 1], t3]) : this.headers.push(t3), this.trackHeader(t3.length);
      }
      onHeaderValue(t3) {
        let e3 = this.headers.length;
        1 & ~e3 ? this.headers[e3 - 1] = Buffer.concat([this.headers[e3 - 1], t3]) : (this.headers.push(t3), e3 += 1);
        const r3 = this.headers[e3 - 2];
        10 === r3.length && "keep-alive" === r3.toString().toLowerCase() ? this.keepAlive += t3.toString() : 10 === r3.length && "connection" === r3.toString().toLowerCase() ? this.connection += t3.toString() : 14 === r3.length && "content-length" === r3.toString().toLowerCase() && (this.contentLength += t3.toString()), this.trackHeader(t3.length);
      }
      trackHeader(t3) {
        this.headersSize += t3, this.headersSize >= this.headersMaxSize && a.destroy(this.socket, new g());
      }
      onUpgrade(t3) {
        const { upgrade: e3, client: r3, socket: s3, headers: i3, statusCode: o3 } = this;
        n2(e3);
        const u2 = r3[U][r3[H]];
        n2(u2), n2(!s3.destroyed), n2(s3 === r3[z]), n2(!this.paused), n2(u2.upgrade || "CONNECT" === u2.method), this.statusCode = null, this.statusText = "", this.shouldKeepAlive = null, n2(this.headers.length % 2 == 0), this.headers = [], this.headersSize = 0, s3.unshift(t3), s3[v].destroy(), s3[v] = null, s3[b] = null, s3[K] = null, s3.removeListener("error", Wt).removeListener("readable", zt).removeListener("end", jt).removeListener("close", Xt), r3[z] = null, r3[U][r3[H]++] = null, r3.emit("disconnect", r3[E], [r3], new _("upgrade"));
        try {
          u2.onUpgrade(o3, i3, s3);
        } catch (t4) {
          a.destroy(s3, t4);
        }
        ee(r3);
      }
      onHeadersComplete(t3, e3, r3) {
        const { client: s3, socket: i3, headers: o3, statusText: u2 } = this;
        if (i3.destroyed) return -1;
        const c2 = s3[U][s3[H]];
        if (!c2) return -1;
        if (n2(!this.upgrade), n2(this.statusCode < 200), 100 === t3) return a.destroy(i3, new A("bad response", a.getSocketInfo(i3))), -1;
        if (e3 && !c2.upgrade) return a.destroy(i3, new A("bad upgrade", a.getSocketInfo(i3))), -1;
        if (n2.strictEqual(this.timeoutType, Gt), this.statusCode = t3, this.shouldKeepAlive = r3 || "HEAD" === c2.method && !i3[I] && "keep-alive" === this.connection.toLowerCase(), this.statusCode >= 200) {
          const t4 = null != c2.bodyTimeout ? c2.bodyTimeout : s3[tt];
          this.setTimeout(t4, 2);
        } else this.timeout && this.timeout.refresh && this.timeout.refresh();
        if ("CONNECT" === c2.method) return n2(1 === s3[T]), this.upgrade = true, 2;
        if (e3) return n2(1 === s3[T]), this.upgrade = true, 2;
        if (n2(this.headers.length % 2 == 0), this.headers = [], this.headersSize = 0, this.shouldKeepAlive && s3[V]) {
          const t4 = this.keepAlive ? a.parseKeepAliveTimeout(this.keepAlive) : null;
          if (null != t4) {
            const e4 = Math.min(t4 - s3[X], s3[j]);
            e4 <= 0 ? i3[I] = true : s3[W] = e4;
          } else s3[W] = s3[L];
        } else i3[I] = true;
        const l2 = false === c2.onHeaders(t3, o3, this.resume, u2);
        return c2.aborted ? -1 : "HEAD" === c2.method || t3 < 200 ? 1 : (i3[R] && (i3[R] = false, ee(s3)), l2 ? Nt.ERROR.PAUSED : 0);
      }
      onBody(t3) {
        const { client: e3, socket: r3, statusCode: s3, maxResponseSize: i3 } = this;
        if (r3.destroyed) return -1;
        const o3 = e3[U][e3[H]];
        return n2(o3), n2.strictEqual(this.timeoutType, 2), this.timeout && this.timeout.refresh && this.timeout.refresh(), n2(s3 >= 200), i3 > -1 && this.bytesRead + t3.length > i3 ? (a.destroy(r3, new S()), -1) : (this.bytesRead += t3.length, false === o3.onData(t3) ? Nt.ERROR.PAUSED : void 0);
      }
      onMessageComplete() {
        const { client: t3, socket: e3, statusCode: r3, upgrade: s3, headers: i3, contentLength: o3, bytesRead: u2, shouldKeepAlive: c2 } = this;
        if (e3.destroyed && (!r3 || c2)) return -1;
        if (s3) return;
        const l2 = t3[U][t3[H]];
        return n2(l2), n2(r3 >= 100), this.statusCode = null, this.statusText = "", this.bytesRead = 0, this.contentLength = "", this.keepAlive = "", this.connection = "", n2(this.headers.length % 2 == 0), this.headers = [], this.headersSize = 0, r3 < 200 ? void 0 : "HEAD" !== l2.method && o3 && u2 !== parseInt(o3, 10) ? (a.destroy(e3, new d()), -1) : (l2.onComplete(i3), t3[U][t3[H]++] = null, e3[D] ? (n2.strictEqual(t3[T], 0), a.destroy(e3, new _("reset")), Nt.ERROR.PAUSED) : c2 ? e3[I] && 0 === t3[T] ? (a.destroy(e3, new _("reset")), Nt.ERROR.PAUSED) : void (1 === t3[V] ? setImmediate(ee, t3) : ee(t3)) : (a.destroy(e3, new _("reset")), Nt.ERROR.PAUSED));
      }
    }
    function Vt(t3) {
      const { socket: e3, timeoutType: r3, client: s3 } = t3;
      r3 === Gt ? (!e3[D] || e3.writableNeedDrain || s3[T] > 1) && (n2(!t3.paused, "cannot be paused while waiting for headers"), a.destroy(e3, new h())) : 2 === r3 ? t3.paused || a.destroy(e3, new y()) : r3 === Ht && (n2(0 === s3[T] && s3[W]), a.destroy(e3, new _("socket idle timeout")));
    }
    function zt() {
      const { [v]: t3 } = this;
      t3 && t3.readMore();
    }
    function Wt(t3) {
      const { [b]: e3, [v]: r3 } = this;
      n2("ERR_TLS_CERT_ALTNAME_INVALID" !== t3.code), "h2" === e3[dt] || "ECONNRESET" !== t3.code || !r3.statusCode || r3.shouldKeepAlive ? (this[K] = t3, Yt(this[b], t3)) : r3.onMessageComplete();
    }
    function Yt(t3, e3) {
      if (0 === t3[T] && "UND_ERR_INFO" !== e3.code && "UND_ERR_SOCKET" !== e3.code) {
        n2(t3[G] === t3[H]);
        const r3 = t3[U].splice(t3[H]);
        for (let n3 = 0; n3 < r3.length; n3++) {
          ue(t3, r3[n3], e3);
        }
        n2(0 === t3[N]);
      }
    }
    function jt() {
      const { [v]: t3, [b]: e3 } = this;
      "h2" === e3[dt] || !t3.statusCode || t3.shouldKeepAlive ? a.destroy(this, new A("other side closed", a.getSocketInfo(this))) : t3.onMessageComplete();
    }
    function Xt() {
      const { [b]: t3, [v]: e3 } = this;
      "h1" === t3[dt] && e3 && (this[K] || !e3.statusCode || e3.shouldKeepAlive || e3.onMessageComplete(), this[v].destroy(), this[v] = null);
      const r3 = this[K] || new A("closed", a.getSocketInfo(this));
      if (t3[z] = null, t3.destroyed) {
        n2(0 === t3[x]);
        const e4 = t3[U].splice(t3[H]);
        for (let n3 = 0; n3 < e4.length; n3++) {
          ue(t3, e4[n3], r3);
        }
      } else if (t3[T] > 0 && "UND_ERR_INFO" !== r3.code) {
        const e4 = t3[U][t3[H]];
        t3[U][t3[H]++] = null, ue(t3, e4, r3);
      }
      t3[G] = t3[H], n2(0 === t3[T]), t3.emit("disconnect", t3[E], [t3], r3), ee(t3);
    }
    async function Zt(t3) {
      n2(!t3[M]), n2(!t3[z]);
      let { host: e3, hostname: r3, protocol: i3, port: o3 } = t3[E];
      if ("[" === r3[0]) {
        const t4 = r3.indexOf("]");
        n2(-1 !== t4);
        const e4 = r3.substring(1, t4);
        n2(s2.isIP(e4)), r3 = e4;
      }
      t3[M] = true, qt.beforeConnect.hasSubscribers && qt.beforeConnect.publish({ connectParams: { host: e3, hostname: r3, protocol: i3, port: o3, servername: t3[C], localAddress: t3[lt] }, connector: t3[rt] });
      try {
        const s3 = await new Promise((n3, s4) => {
          t3[rt]({ host: e3, hostname: r3, protocol: i3, port: o3, servername: t3[C], localAddress: t3[lt] }, (t4, e4) => {
            t4 ? s4(t4) : n3(e4);
          });
        });
        if (t3.destroyed) return void a.destroy(s3.on("error", () => {
        }), new J());
        t3[M] = false, n2(s3);
        if ("h2" === s3.alpnProtocol) {
          bt || (bt = true, process.emitWarning("H2 support is experimental, expect them to change at any time.", { code: "UNDICI-H2" }));
          const e4 = yt.connect(t3[E], { createConnection: () => s3, peerMaxConcurrentStreams: t3[ht].maxConcurrentStreams });
          t3[dt] = "h2", e4[b] = t3, e4[z] = s3, e4.on("error", Rt), e4.on("frameError", Pt), e4.on("end", Tt), e4.on("goaway", xt), e4.on("close", Xt), e4.unref(), t3[pt] = e4, s3[pt] = e4;
        } else Qt || (Qt = await Mt, Mt = null), s3[F] = false, s3[D] = false, s3[I] = false, s3[R] = false, s3[v] = new Kt(t3, s3, Qt);
        s3[it] = 0, s3[st] = t3[st], s3[b] = t3, s3[K] = null, s3.on("error", Wt).on("readable", zt).on("end", jt).on("close", Xt), t3[z] = s3, qt.connected.hasSubscribers && qt.connected.publish({ connectParams: { host: e3, hostname: r3, protocol: i3, port: o3, servername: t3[C], localAddress: t3[lt] }, connector: t3[rt], socket: s3 }), t3.emit("connect", t3[E], [t3]);
      } catch (s3) {
        if (t3.destroyed) return;
        if (t3[M] = false, qt.connectError.hasSubscribers && qt.connectError.publish({ connectParams: { host: e3, hostname: r3, protocol: i3, port: o3, servername: t3[C], localAddress: t3[lt] }, connector: t3[rt], error: s3 }), "ERR_TLS_CERT_ALTNAME_INVALID" === s3.code) for (n2(0 === t3[T]); t3[x] > 0 && t3[U][t3[G]].servername === t3[C]; ) {
          const e4 = t3[U][t3[G]++];
          ue(t3, e4, s3);
        }
        else Yt(t3, s3);
        t3.emit("connectionError", t3[E], [t3], s3);
      }
      ee(t3);
    }
    function te(t3) {
      t3[O] = 0, t3.emit("drain", t3[E], [t3]);
    }
    function ee(t3, e3) {
      2 !== t3[P] && (t3[P] = 2, (function(t4, e4) {
        for (; ; ) {
          if (t4.destroyed) return void n2(0 === t4[x]);
          if (t4[vt] && !t4[N]) return t4[vt](), void (t4[vt] = null);
          const r3 = t4[z];
          if (r3 && !r3.destroyed && "h2" !== r3.alpnProtocol) {
            if (0 === t4[N] ? !r3[F] && r3.unref && (r3.unref(), r3[F] = true) : r3[F] && r3.ref && (r3.ref(), r3[F] = false), 0 === t4[N]) r3[v].timeoutType !== Ht && r3[v].setTimeout(t4[W], Ht);
            else if (t4[T] > 0 && r3[v].statusCode < 200 && r3[v].timeoutType !== Gt) {
              const e5 = t4[U][t4[H]], n3 = null != e5.headersTimeout ? e5.headersTimeout : t4[Z];
              r3[v].setTimeout(n3, Gt);
            }
          }
          if (t4[k]) t4[O] = 2;
          else if (2 === t4[O]) {
            e4 ? (t4[O] = 1, process.nextTick(te, t4)) : te(t4);
            continue;
          }
          if (0 === t4[x]) return;
          if (t4[T] >= (t4[V] || 1)) return;
          const s3 = t4[U][t4[G]];
          if ("https:" === t4[E].protocol && t4[C] !== s3.servername) {
            if (t4[T] > 0) return;
            if (t4[C] = s3.servername, r3 && r3.servername !== s3.servername) return void a.destroy(r3, new _("servername changed"));
          }
          if (t4[M]) return;
          if (!r3 && !t4[pt]) return void Zt(t4);
          if (r3.destroyed || r3[D] || r3[I] || r3[R]) return;
          if (t4[T] > 0 && !s3.idempotent) return;
          if (t4[T] > 0 && (s3.upgrade || "CONNECT" === s3.method)) return;
          if (t4[T] > 0 && 0 !== a.bodyLength(s3.body) && (a.isStream(s3.body) || a.isAsyncIterable(s3.body))) return;
          !s3.aborted && ne(t4, s3) ? t4[G]++ : t4[U].splice(t4[G], 1);
        }
      })(t3, e3), t3[P] = 0, t3[H] > 256 && (t3[U].splice(0, t3[H]), t3[G] -= t3[H], t3[H] = 0));
    }
    function re(t3) {
      return "GET" !== t3 && "HEAD" !== t3 && "OPTIONS" !== t3 && "TRACE" !== t3 && "CONNECT" !== t3;
    }
    function ne(t3, e3) {
      if ("h2" === t3[dt]) return void (function(t4, e4, r4) {
        const { body: s4, method: i4, path: o4, host: u3, upgrade: l3, expectContinue: d3, signal: f3, headers: h3 } = r4;
        let g3, A3;
        g3 = "string" == typeof h3 ? c[At](h3.trim()) : h3;
        if (l3) return ue(t4, r4, new Error("Upgrade not supported for H2")), false;
        try {
          r4.onConnect((e5) => {
            r4.aborted || r4.completed || ue(t4, r4, e5 || new p());
          });
        } catch (e5) {
          ue(t4, r4, e5);
        }
        if (r4.aborted) return false;
        const y3 = t4[ht];
        if (g3[wt] = u3 || t4[ft], g3[St] = i4, "CONNECT" === i4) return e4.ref(), A3 = e4.request(g3, { endStream: false, signal: f3 }), A3.id && !A3.pending ? (r4.onUpgrade(null, null, A3), ++y3.openStreams) : A3.once("ready", () => {
          r4.onUpgrade(null, null, A3), ++y3.openStreams;
        }), A3.once("close", () => {
          y3.openStreams -= 1, 0 === y3.openStreams && e4.unref();
        }), true;
        g3[Jt] = o4, g3[Bt] = "https";
        const w3 = "PUT" === i4 || "POST" === i4 || "PATCH" === i4;
        s4 && "function" == typeof s4.read && s4.read(0);
        let S2 = a.bodyLength(s4);
        null == S2 && (S2 = r4.contentLength);
        0 !== S2 && w3 || (S2 = null);
        if (re(i4) && S2 > 0 && null != r4.contentLength && r4.contentLength !== S2) {
          if (t4[et]) return ue(t4, r4, new m()), false;
          process.emitWarning(new m());
        }
        null != S2 && (n2(s4, "no body must not have content length"), g3[Et] = `${S2}`);
        e4.ref();
        const J2 = "GET" === i4 || "HEAD" === i4;
        d3 ? (g3[It] = "100-continue", A3 = e4.request(g3, { endStream: J2, signal: f3 }), A3.once("continue", B2)) : (A3 = e4.request(g3, { endStream: J2, signal: f3 }), B2());
        return ++y3.openStreams, A3.once("response", (t5) => {
          const { [Ct]: e5, ...n3 } = t5;
          false === r4.onHeaders(Number(e5), n3, A3.resume.bind(A3), "") && A3.pause();
        }), A3.once("end", () => {
          r4.onComplete([]);
        }), A3.on("data", (t5) => {
          false === r4.onData(t5) && A3.pause();
        }), A3.once("close", () => {
          y3.openStreams -= 1, 0 === y3.openStreams && e4.unref();
        }), A3.once("error", function(e5) {
          !t4[pt] || t4[pt].destroyed || this.closed || this.destroyed || (y3.streams -= 1, a.destroy(A3, e5));
        }), A3.once("frameError", (e5, n3) => {
          const s5 = new _(`HTTP/2: "frameError" received - type ${e5}, code ${n3}`);
          ue(t4, r4, s5), !t4[pt] || t4[pt].destroyed || this.closed || this.destroyed || (y3.streams -= 1, a.destroy(A3, s5));
        }), true;
        function B2() {
          s4 ? a.isBuffer(s4) ? (n2(S2 === s4.byteLength, "buffer body must have content length"), A3.cork(), A3.write(s4), A3.uncork(), A3.end(), r4.onBodySent(s4), r4.onRequestSent()) : a.isBlobLike(s4) ? "function" == typeof s4.stream ? oe({ client: t4, request: r4, contentLength: S2, h2stream: A3, expectsPayload: w3, body: s4.stream(), socket: t4[z], header: "" }) : ie({ body: s4, client: t4, request: r4, contentLength: S2, expectsPayload: w3, h2stream: A3, header: "", socket: t4[z] }) : a.isStream(s4) ? se({ body: s4, client: t4, request: r4, contentLength: S2, expectsPayload: w3, socket: t4[z], h2stream: A3, header: "" }) : a.isIterable(s4) ? oe({ body: s4, client: t4, request: r4, contentLength: S2, expectsPayload: w3, header: "", h2stream: A3, socket: t4[z] }) : n2(false) : r4.onRequestSent();
        }
      })(t3, t3[pt], e3);
      const { body: r3, method: s3, path: i3, host: o3, upgrade: u2, headers: l2, blocking: d2, reset: f2 } = e3, h2 = "PUT" === s3 || "POST" === s3 || "PATCH" === s3;
      r3 && "function" == typeof r3.read && r3.read(0);
      const g2 = a.bodyLength(r3);
      let A2 = g2;
      if (null === A2 && (A2 = e3.contentLength), 0 !== A2 || h2 || (A2 = null), re(s3) && A2 > 0 && null !== e3.contentLength && e3.contentLength !== A2) {
        if (t3[et]) return ue(t3, e3, new m()), false;
        process.emitWarning(new m());
      }
      const y2 = t3[z];
      try {
        e3.onConnect((r4) => {
          e3.aborted || e3.completed || (ue(t3, e3, r4 || new p()), a.destroy(y2, new _("aborted")));
        });
      } catch (r4) {
        ue(t3, e3, r4);
      }
      if (e3.aborted) return false;
      "HEAD" === s3 && (y2[I] = true), (u2 || "CONNECT" === s3) && (y2[I] = true), null != f2 && (y2[I] = f2), t3[st] && y2[it]++ >= t3[st] && (y2[I] = true), d2 && (y2[R] = true);
      let w2 = `${s3} ${i3} HTTP/1.1\r
`;
      return w2 += "string" == typeof o3 ? `host: ${o3}\r
` : t3[$], u2 ? w2 += `connection: upgrade\r
upgrade: ${u2}\r
` : t3[V] && !y2[I] ? w2 += "connection: keep-alive\r\n" : w2 += "connection: close\r\n", l2 && (w2 += l2), qt.sendHeaders.hasSubscribers && qt.sendHeaders.publish({ request: e3, headers: w2, socket: y2 }), r3 && 0 !== g2 ? a.isBuffer(r3) ? (n2(A2 === r3.byteLength, "buffer body must have content length"), y2.cork(), y2.write(`${w2}content-length: ${A2}\r
\r
`, "latin1"), y2.write(r3), y2.uncork(), e3.onBodySent(r3), e3.onRequestSent(), h2 || (y2[I] = true)) : a.isBlobLike(r3) ? "function" == typeof r3.stream ? oe({ body: r3.stream(), client: t3, request: e3, socket: y2, contentLength: A2, header: w2, expectsPayload: h2 }) : ie({ body: r3, client: t3, request: e3, socket: y2, contentLength: A2, header: w2, expectsPayload: h2 }) : a.isStream(r3) ? se({ body: r3, client: t3, request: e3, socket: y2, contentLength: A2, header: w2, expectsPayload: h2 }) : a.isIterable(r3) ? oe({ body: r3, client: t3, request: e3, socket: y2, contentLength: A2, header: w2, expectsPayload: h2 }) : n2(false) : (0 === A2 ? y2.write(`${w2}content-length: 0\r
\r
`, "latin1") : (n2(null === A2, "no body must not have content length"), y2.write(`${w2}\r
`, "latin1")), e3.onRequestSent()), true;
    }
    function se({ h2stream: t3, body: e3, client: r3, request: s3, socket: i3, contentLength: u2, header: c2, expectsPayload: l2 }) {
      if (n2(0 !== u2 || 0 === r3[T], "stream body cannot be pipelined"), "h2" === r3[dt]) {
        let y2 = function(t4) {
          s3.onBodySent(t4);
        };
        const _2 = o2(e3, t3, (r4) => {
          r4 ? (a.destroy(e3, r4), a.destroy(t3, r4)) : s3.onRequestSent();
        });
        return _2.on("data", y2), void _2.once("end", () => {
          _2.removeListener("data", y2), a.destroy(_2);
        });
      }
      let m2 = false;
      const d2 = new ae({ socket: i3, request: s3, contentLength: u2, client: r3, expectsPayload: l2, header: c2 }), f2 = function(t4) {
        if (!m2) try {
          !d2.write(t4) && this.pause && this.pause();
        } catch (t5) {
          a.destroy(this, t5);
        }
      }, h2 = function() {
        m2 || e3.resume && e3.resume();
      }, g2 = function() {
        if (m2) return;
        const t4 = new p();
        queueMicrotask(() => A2(t4));
      }, A2 = function(t4) {
        if (!m2) {
          if (m2 = true, n2(i3.destroyed || i3[D] && r3[T] <= 1), i3.off("drain", h2).off("error", A2), e3.removeListener("data", f2).removeListener("end", A2).removeListener("error", A2).removeListener("close", g2), !t4) try {
            d2.end();
          } catch (e4) {
            t4 = e4;
          }
          d2.destroy(t4), !t4 || "UND_ERR_INFO" === t4.code && "reset" === t4.message ? a.destroy(e3) : a.destroy(e3, t4);
        }
      };
      e3.on("data", f2).on("end", A2).on("error", A2).on("close", g2), e3.resume && e3.resume(), i3.on("drain", h2).on("error", A2);
    }
    async function ie({ h2stream: t3, body: e3, client: r3, request: s3, socket: i3, contentLength: o3, header: u2, expectsPayload: c2 }) {
      n2(o3 === e3.size, "blob body must have content length");
      const l2 = "h2" === r3[dt];
      try {
        if (null != o3 && o3 !== e3.size) throw new m();
        const n3 = Buffer.from(await e3.arrayBuffer());
        l2 ? (t3.cork(), t3.write(n3), t3.uncork()) : (i3.cork(), i3.write(`${u2}content-length: ${o3}\r
\r
`, "latin1"), i3.write(n3), i3.uncork()), s3.onBodySent(n3), s3.onRequestSent(), c2 || (i3[I] = true), ee(r3);
      } catch (e4) {
        a.destroy(l2 ? t3 : i3, e4);
      }
    }
    async function oe({ h2stream: t3, body: e3, client: r3, request: s3, socket: i3, contentLength: o3, header: a2, expectsPayload: u2 }) {
      n2(0 !== o3 || 0 === r3[T], "iterator body cannot be pipelined");
      let c2 = null;
      function l2() {
        if (c2) {
          const t4 = c2;
          c2 = null, t4();
        }
      }
      const m2 = () => new Promise((t4, e4) => {
        n2(null === c2), i3[K] ? e4(i3[K]) : c2 = t4;
      });
      if ("h2" === r3[dt]) {
        t3.on("close", l2).on("drain", l2);
        try {
          for await (const r4 of e3) {
            if (i3[K]) throw i3[K];
            const e4 = t3.write(r4);
            s3.onBodySent(r4), e4 || await m2();
          }
        } catch (e4) {
          t3.destroy(e4);
        } finally {
          s3.onRequestSent(), t3.end(), t3.off("close", l2).off("drain", l2);
        }
        return;
      }
      i3.on("close", l2).on("drain", l2);
      const d2 = new ae({ socket: i3, request: s3, contentLength: o3, client: r3, expectsPayload: u2, header: a2 });
      try {
        for await (const t4 of e3) {
          if (i3[K]) throw i3[K];
          d2.write(t4) || await m2();
        }
        d2.end();
      } catch (t4) {
        d2.destroy(t4);
      } finally {
        i3.off("close", l2).off("drain", l2);
      }
    }
    class ae {
      constructor({ socket: t3, request: e3, contentLength: r3, client: n3, expectsPayload: s3, header: i3 }) {
        this.socket = t3, this.request = e3, this.contentLength = r3, this.client = n3, this.bytesWritten = 0, this.expectsPayload = s3, this.header = i3, t3[D] = true;
      }
      write(t3) {
        const { socket: e3, request: r3, contentLength: n3, client: s3, bytesWritten: i3, expectsPayload: o3, header: a2 } = this;
        if (e3[K]) throw e3[K];
        if (e3.destroyed) return false;
        const u2 = Buffer.byteLength(t3);
        if (!u2) return true;
        if (null !== n3 && i3 + u2 > n3) {
          if (s3[et]) throw new m();
          process.emitWarning(new m());
        }
        e3.cork(), 0 === i3 && (o3 || (e3[I] = true), null === n3 ? e3.write(`${a2}transfer-encoding: chunked\r
`, "latin1") : e3.write(`${a2}content-length: ${n3}\r
\r
`, "latin1")), null === n3 && e3.write(`\r
${u2.toString(16)}\r
`, "latin1"), this.bytesWritten += u2;
        const c2 = e3.write(t3);
        return e3.uncork(), r3.onBodySent(t3), c2 || e3[v].timeout && e3[v].timeoutType === Gt && e3[v].timeout.refresh && e3[v].timeout.refresh(), c2;
      }
      end() {
        const { socket: t3, contentLength: e3, client: r3, bytesWritten: n3, expectsPayload: s3, header: i3, request: o3 } = this;
        if (o3.onRequestSent(), t3[D] = false, t3[K]) throw t3[K];
        if (!t3.destroyed) {
          if (0 === n3 ? s3 ? t3.write(`${i3}content-length: 0\r
\r
`, "latin1") : t3.write(`${i3}\r
`, "latin1") : null === e3 && t3.write("\r\n0\r\n\r\n", "latin1"), null !== e3 && n3 !== e3) {
            if (r3[et]) throw new m();
            process.emitWarning(new m());
          }
          t3[v].timeout && t3[v].timeoutType === Gt && t3[v].timeout.refresh && t3[v].timeout.refresh(), ee(r3);
        }
      }
      destroy(t3) {
        const { socket: e3, client: r3 } = this;
        e3[D] = false, t3 && (n2(r3[T] <= 1, "pipeline should only contain this request"), a.destroy(e3, t3));
      }
    }
    function ue(t3, e3, r3) {
      try {
        e3.onError(r3), n2(e3.aborted);
      } catch (r4) {
        t3.emit("error", r4);
      }
    }
    t2.exports = class extends l {
      constructor(t3, { interceptors: e3, maxHeaderSize: r3, headersTimeout: n3, socketTimeout: o3, requestTimeout: u2, connectTimeout: c2, bodyTimeout: l2, idleTimeout: m2, keepAlive: d2, keepAliveTimeout: p2, maxKeepAliveTimeout: h2, keepAliveMaxTimeout: g2, keepAliveTimeoutThreshold: A2, socketPath: _2, pipelining: y2, tls: w2, strictContentLength: S2, maxCachedSessions: J2, maxRedirections: I2, connect: b2, maxRequestsPerClient: k2, localAddress: v2, maxResponseSize: q2, autoSelectFamily: R2, autoSelectFamilyAttemptTimeout: T2, allowH2: x2, maxConcurrentStreams: N2 } = {}) {
        if (super(), void 0 !== d2) throw new f("unsupported keepAlive, use pipelining=0 instead");
        if (void 0 !== o3) throw new f("unsupported socketTimeout, use headersTimeout & bodyTimeout instead");
        if (void 0 !== u2) throw new f("unsupported requestTimeout, use headersTimeout & bodyTimeout instead");
        if (void 0 !== m2) throw new f("unsupported idleTimeout, use keepAliveTimeout instead");
        if (void 0 !== h2) throw new f("unsupported maxKeepAliveTimeout, use keepAliveMaxTimeout instead");
        if (null != r3 && !Number.isFinite(r3)) throw new f("invalid maxHeaderSize");
        if (null != _2 && "string" != typeof _2) throw new f("invalid socketPath");
        if (null != c2 && (!Number.isFinite(c2) || c2 < 0)) throw new f("invalid connectTimeout");
        if (null != p2 && (!Number.isFinite(p2) || p2 <= 0)) throw new f("invalid keepAliveTimeout");
        if (null != g2 && (!Number.isFinite(g2) || g2 <= 0)) throw new f("invalid keepAliveMaxTimeout");
        if (null != A2 && !Number.isFinite(A2)) throw new f("invalid keepAliveTimeoutThreshold");
        if (null != n3 && (!Number.isInteger(n3) || n3 < 0)) throw new f("headersTimeout must be a positive integer or zero");
        if (null != l2 && (!Number.isInteger(l2) || l2 < 0)) throw new f("bodyTimeout must be a positive integer or zero");
        if (null != b2 && "function" != typeof b2 && "object" != typeof b2) throw new f("connect must be a function or an object");
        if (null != I2 && (!Number.isInteger(I2) || I2 < 0)) throw new f("maxRedirections must be a positive number");
        if (null != k2 && (!Number.isInteger(k2) || k2 < 0)) throw new f("maxRequestsPerClient must be a positive number");
        if (null != v2 && ("string" != typeof v2 || 0 === s2.isIP(v2))) throw new f("localAddress must be valid string IP address");
        if (null != q2 && (!Number.isInteger(q2) || q2 < -1)) throw new f("maxResponseSize must be a positive number");
        if (null != T2 && (!Number.isInteger(T2) || T2 < -1)) throw new f("autoSelectFamilyAttemptTimeout must be a positive number");
        if (null != x2 && "boolean" != typeof x2) throw new f("allowH2 must be a valid boolean value");
        if (null != N2 && ("number" != typeof N2 || N2 < 1)) throw new f("maxConcurrentStreams must be a possitive integer, greater than 0");
        "function" != typeof b2 && (b2 = B({ ...w2, maxCachedSessions: J2, allowH2: x2, socketPath: _2, timeout: c2, ...a.nodeHasAutoSelectFamily && R2 ? { autoSelectFamily: R2, autoSelectFamilyAttemptTimeout: T2 } : void 0, ...b2 })), this[ct] = e3 && e3.Client && Array.isArray(e3.Client) ? e3.Client : [Dt({ maxRedirections: I2 })], this[E] = a.parseOrigin(t3), this[rt] = b2, this[z] = null, this[V] = null != y2 ? y2 : 1, this[Y] = r3 || i2.maxHeaderSize, this[L] = p2 ?? 4e3, this[j] = g2 ?? 6e5, this[X] = A2 ?? 1e3, this[W] = this[L], this[C] = null, this[lt] = null != v2 ? v2 : null, this[P] = 0, this[O] = 0, this[$] = `host: ${this[E].hostname}${this[E].port ? `:${this[E].port}` : ""}\r
`, this[tt] = null != l2 ? l2 : 3e5, this[Z] = null != n3 ? n3 : 3e5, this[et] = S2 ?? true, this[nt] = I2, this[st] = k2, this[vt] = null, this[mt] = q2 > -1 ? q2 : -1, this[dt] = "h1", this[pt] = null, this[ht] = x2 ? { openStreams: 0, maxConcurrentStreams: null != N2 ? N2 : 100 } : null, this[ft] = `${this[E].hostname}${this[E].port ? `:${this[E].port}` : ""}`, this[U] = [], this[H] = 0, this[G] = 0;
      }
      get pipelining() {
        return this[V];
      }
      set pipelining(t3) {
        this[V] = t3, ee(this, true);
      }
      get [x]() {
        return this[U].length - this[G];
      }
      get [T]() {
        return this[G] - this[H];
      }
      get [N]() {
        return this[U].length - this[H];
      }
      get [Q]() {
        return !!this[z] && !this[M] && !this[z].destroyed;
      }
      get [k]() {
        const t3 = this[z];
        return t3 && (t3[I] || t3[D] || t3[R]) || this[N] >= (this[V] || 1) || this[x] > 0;
      }
      [q](t3) {
        Zt(this), this.once("connect", t3);
      }
      [ut](t3, e3) {
        const r3 = t3.origin || this[E].origin, n3 = "h2" === this[dt] ? c[gt](r3, t3, e3) : c[_t](r3, t3, e3);
        return this[U].push(n3), this[P] || (null == a.bodyLength(n3.body) && a.isIterable(n3.body) ? (this[P] = 1, process.nextTick(ee, this)) : ee(this, true)), this[P] && 2 !== this[O] && this[k] && (this[O] = 2), this[O] < 2;
      }
      async [ot]() {
        return new Promise((t3) => {
          this[N] ? this[vt] = t3 : t3(null);
        });
      }
      async [at](t3) {
        return new Promise((e3) => {
          const r3 = this[U].splice(this[G]);
          for (let e4 = 0; e4 < r3.length; e4++) {
            ue(this, r3[e4], t3);
          }
          const n3 = () => {
            this[vt] && (this[vt](), this[vt] = null), e3();
          };
          null != this[pt] && (a.destroy(this[pt], t3), this[pt] = null, this[ht] = null), this[z] ? a.destroy(this[z].on("close", n3), t3) : queueMicrotask(n3), ee(this);
        });
      }
    };
  }