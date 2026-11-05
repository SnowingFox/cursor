// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 62322 range:340430..363885
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
62322: (A, e, t) => {
  "use strict";
  const r = t(56970), s = t(55201), { channels: o } = t(98565), n = t(29254), { RequestContentLengthMismatchError: i, ResponseContentLengthMismatchError: a, RequestAbortedError: Q, InvalidArgumentError: g, HeadersTimeoutError: E, HeadersOverflowError: B, SocketError: c, InformationalError: I, BodyTimeoutError: C, HTTPParserError: h, ResponseExceededMaxSizeError: l } = t(38238), { kUrl: u, kReset: d, kClient: f, kParser: w, kBlocking: y, kRunning: D, kPending: p, kSize: k, kWriting: R, kQueue: F, kNoRef: m, kKeepAliveDefaultTimeout: b, kHostHeader: N, kPendingIdx: S, kRunningIdx: M, kError: U, kPipelining: L, kSocket: T, kKeepAliveTimeoutValue: Y, kMaxHeadersSize: G, kKeepAliveMaxTimeout: J, kKeepAliveTimeoutThreshold: v, kHeadersTimeout: H, kBodyTimeout: V, kStrictContentLength: x, kMaxRequests: W, kCounter: O, kMaxResponseSize: P, kOnError: q, kResume: Z, kHTTPContext: z } = t(76992), K = t(56555), X = Buffer.alloc(0), _ = Buffer[Symbol.species], j = s.addListener, $ = s.removeAllListeners, AA = /* @__PURE__ */ Symbol("kIdleSocketValidation"), eA = /* @__PURE__ */ Symbol("kIdleSocketValidationTimeout"), tA = /* @__PURE__ */ Symbol("kSocketUsed");
  let rA;
  let sA = null, oA = (async function() {
    const A2 = process.env.JEST_WORKER_ID ? t(31205) : void 0;
    let e2;
    try {
      e2 = await WebAssembly.compile(t(26647));
    } catch (r2) {
      e2 = await WebAssembly.compile(A2 || t(31205));
    }
    return await WebAssembly.instantiate(e2, { env: { wasm_on_url: (A3, e3, t2) => 0, wasm_on_status: (A3, e3, t2) => {
      r(nA.ptr === A3);
      const s2 = e3 - QA + iA.byteOffset;
      return nA.onStatus(new _(iA.buffer, s2, t2)) || 0;
    }, wasm_on_message_begin: (A3) => (r(nA.ptr === A3), nA.onMessageBegin() || 0), wasm_on_header_field: (A3, e3, t2) => {
      r(nA.ptr === A3);
      const s2 = e3 - QA + iA.byteOffset;
      return nA.onHeaderField(new _(iA.buffer, s2, t2)) || 0;
    }, wasm_on_header_value: (A3, e3, t2) => {
      r(nA.ptr === A3);
      const s2 = e3 - QA + iA.byteOffset;
      return nA.onHeaderValue(new _(iA.buffer, s2, t2)) || 0;
    }, wasm_on_headers_complete: (A3, e3, t2, s2) => (r(nA.ptr === A3), nA.onHeadersComplete(e3, Boolean(t2), Boolean(s2)) || 0), wasm_on_body: (A3, e3, t2) => {
      r(nA.ptr === A3);
      const s2 = e3 - QA + iA.byteOffset;
      return nA.onBody(new _(iA.buffer, s2, t2)) || 0;
    }, wasm_on_message_complete: (A3) => (r(nA.ptr === A3), nA.onMessageComplete() || 0) } });
  })();
  oA.catch();
  let nA = null, iA = null, aA = 0, QA = null;
  class gA {
    constructor(A2, e2, { exports: t2 }) {
      r(Number.isFinite(A2[G]) && A2[G] > 0), this.llhttp = t2, this.ptr = this.llhttp.llhttp_alloc(K.TYPE.RESPONSE), this.client = A2, this.socket = e2, this.timeout = null, this.timeoutValue = null, this.timeoutType = null, this.statusCode = null, this.statusText = "", this.upgrade = false, this.headers = [], this.headersSize = 0, this.headersMaxSize = A2[G], this.shouldKeepAlive = false, this.paused = false, this.resume = this.resume.bind(this), this.bytesRead = 0, this.keepAlive = "", this.contentLength = "", this.connection = "", this.maxResponseSize = A2[P];
    }
    setTimeout(A2, e2) {
      A2 !== this.timeoutValue || 1 & e2 ^ 1 & this.timeoutType ? (this.timeout && (n.clearTimeout(this.timeout), this.timeout = null), A2 && (1 & e2 ? this.timeout = n.setFastTimeout(EA, A2, new WeakRef(this)) : (this.timeout = setTimeout(EA, A2, new WeakRef(this)), this.timeout.unref())), this.timeoutValue = A2) : this.timeout && this.timeout.refresh && this.timeout.refresh(), this.timeoutType = e2;
    }
    resume() {
      !this.socket.destroyed && this.paused && (r(null != this.ptr), r(null == nA), this.llhttp.llhttp_resume(this.ptr), r(5 === this.timeoutType), this.timeout && this.timeout.refresh && this.timeout.refresh(), this.paused = false, this.execute(this.socket.read() || X), this.readMore());
    }
    readMore() {
      for (; !this.paused && this.ptr; ) {
        const A2 = this.socket.read();
        if (null === A2) break;
        this.execute(A2);
      }
    }
    execute(A2) {
      r(null != this.ptr), r(null == nA), r(!this.paused);
      const { socket: e2, llhttp: t2 } = this;
      A2.length > aA && (QA && t2.free(QA), aA = 4096 * Math.ceil(A2.length / 4096), QA = t2.malloc(aA)), new Uint8Array(t2.memory.buffer, QA, aA).set(A2);
      try {
        let r2;
        try {
          iA = A2, nA = this, r2 = t2.llhttp_execute(this.ptr, QA, A2.length);
        } catch (A3) {
          throw A3;
        } finally {
          nA = null, iA = null;
        }
        const s2 = t2.llhttp_get_error_pos(this.ptr) - QA;
        if (r2 !== K.ERROR.OK) {
          const t3 = A2.subarray(s2);
          if (r2 === K.ERROR.PAUSED_UPGRADE) this.onUpgrade(t3);
          else {
            if (r2 !== K.ERROR.PAUSED) throw this.createError(r2, t3);
            this.paused = true, e2.unshift(t3);
          }
        }
      } catch (A3) {
        s.destroy(e2, A3);
      }
    }
    finish() {
      r(null === nA), r(null != this.ptr), r(!this.paused);
      const { llhttp: A2 } = this;
      let e2;
      try {
        nA = this, e2 = A2.llhttp_finish(this.ptr);
      } finally {
        nA = null;
      }
      return e2 === K.ERROR.OK ? null : e2 === K.ERROR.PAUSED || e2 === K.ERROR.PAUSED_UPGRADE ? (this.paused = true, null) : this.createError(e2, X);
    }
    createError(A2, e2) {
      const { llhttp: t2, contentLength: r2, bytesRead: s2 } = this;
      if (r2 && s2 !== parseInt(r2, 10)) return new a();
      const o2 = t2.llhttp_get_error_reason(this.ptr);
      let n2 = "";
      if (o2) {
        const A3 = new Uint8Array(t2.memory.buffer, o2).indexOf(0);
        n2 = "Response does not match the HTTP/1.1 protocol (" + Buffer.from(t2.memory.buffer, o2, A3).toString() + ")";
      }
      return new h(n2, K.ERROR[A2], e2);
    }
    destroy() {
      r(null != this.ptr), r(null == nA), this.llhttp.llhttp_free(this.ptr), this.ptr = null, this.timeout && n.clearTimeout(this.timeout), this.timeout = null, this.timeoutValue = null, this.timeoutType = null, this.paused = false;
    }
    onStatus(A2) {
      this.statusText = A2.toString();
    }
    onMessageBegin() {
      const { socket: A2, client: e2 } = this;
      if (A2.destroyed) return -1;
      if (0 === e2[D]) return s.destroy(A2, new c("bad response", s.getSocketInfo(A2))), -1;
      const t2 = e2[F][e2[M]];
      if (!t2) return -1;
      t2.onResponseStarted();
    }
    onHeaderField(A2) {
      const e2 = this.headers.length;
      1 & e2 ? this.headers[e2 - 1] = Buffer.concat([this.headers[e2 - 1], A2]) : this.headers.push(A2), this.trackHeader(A2.length);
    }
    onHeaderValue(A2) {
      let e2 = this.headers.length;
      1 & ~e2 ? this.headers[e2 - 1] = Buffer.concat([this.headers[e2 - 1], A2]) : (this.headers.push(A2), e2 += 1);
      const t2 = this.headers[e2 - 2];
      if (10 === t2.length) {
        const e3 = s.bufferToLowerCasedHeaderName(t2);
        "keep-alive" === e3 ? this.keepAlive += A2.toString() : "connection" === e3 && (this.connection += A2.toString());
      } else 14 === t2.length && "content-length" === s.bufferToLowerCasedHeaderName(t2) && (this.contentLength += A2.toString());
      this.trackHeader(A2.length);
    }
    trackHeader(A2) {
      this.headersSize += A2, this.headersSize >= this.headersMaxSize && s.destroy(this.socket, new B());
    }
    onUpgrade(A2) {
      const { upgrade: e2, client: t2, socket: o2, headers: n2, statusCode: i2 } = this;
      r(e2), r(t2[T] === o2), r(!o2.destroyed), r(!this.paused), r(!(1 & n2.length));
      const a2 = t2[F][t2[M]];
      r(a2), r(a2.upgrade || "CONNECT" === a2.method), this.statusCode = null, this.statusText = "", this.shouldKeepAlive = null, this.headers = [], this.headersSize = 0, o2.unshift(A2), o2[w].destroy(), o2[w] = null, o2[f] = null, o2[U] = null, $(o2), t2[T] = null, t2[z] = null, t2[F][t2[M]++] = null, t2.emit("disconnect", t2[u], [t2], new I("upgrade"));
      try {
        a2.onUpgrade(i2, n2, o2);
      } catch (A3) {
        s.destroy(o2, A3);
      }
      t2[Z]();
    }
    onHeadersComplete(A2, e2, t2) {
      const { client: o2, socket: n2, headers: i2, statusText: a2 } = this;
      if (n2.destroyed) return -1;
      if (0 === o2[D]) return s.destroy(n2, new c("bad response", s.getSocketInfo(n2))), -1;
      const Q2 = o2[F][o2[M]];
      if (!Q2) return -1;
      if (r(!this.upgrade), r(this.statusCode < 200), 100 === A2) return s.destroy(n2, new c("bad response", s.getSocketInfo(n2))), -1;
      if (e2 && !Q2.upgrade) return s.destroy(n2, new c("bad upgrade", s.getSocketInfo(n2))), -1;
      if (r(3 === this.timeoutType), this.statusCode = A2, this.shouldKeepAlive = t2 || "HEAD" === Q2.method && !n2[d] && "keep-alive" === this.connection.toLowerCase(), this.statusCode >= 200) {
        const A3 = null != Q2.bodyTimeout ? Q2.bodyTimeout : o2[V];
        this.setTimeout(A3, 5);
      } else this.timeout && this.timeout.refresh && this.timeout.refresh();
      if ("CONNECT" === Q2.method) return r(1 === o2[D]), this.upgrade = true, 2;
      if (e2) return r(1 === o2[D]), this.upgrade = true, 2;
      if (r(!(1 & this.headers.length)), this.headers = [], this.headersSize = 0, this.shouldKeepAlive && o2[L]) {
        const A3 = this.keepAlive ? s.parseKeepAliveTimeout(this.keepAlive) : null;
        if (null != A3) {
          const e3 = Math.min(A3 - o2[v], o2[J]);
          e3 <= 0 ? n2[d] = true : o2[Y] = e3;
        } else o2[Y] = o2[b];
      } else n2[d] = true;
      const g2 = false === Q2.onHeaders(A2, i2, this.resume, a2);
      return Q2.aborted ? -1 : "HEAD" === Q2.method || A2 < 200 ? 1 : (n2[y] && (n2[y] = false, o2[Z]()), g2 ? K.ERROR.PAUSED : 0);
    }
    onBody(A2) {
      const { client: e2, socket: t2, statusCode: o2, maxResponseSize: n2 } = this;
      if (t2.destroyed) return -1;
      const i2 = e2[F][e2[M]];
      return r(i2), r(5 === this.timeoutType), this.timeout && this.timeout.refresh && this.timeout.refresh(), r(o2 >= 200), n2 > -1 && this.bytesRead + A2.length > n2 ? (s.destroy(t2, new l()), -1) : (this.bytesRead += A2.length, false === i2.onData(A2) ? K.ERROR.PAUSED : void 0);
    }
    onMessageComplete() {
      const { client: A2, socket: e2, statusCode: t2, upgrade: o2, headers: n2, contentLength: i2, bytesRead: Q2, shouldKeepAlive: g2 } = this;
      if (e2.destroyed && (!t2 || g2)) return -1;
      if (o2) return;
      r(t2 >= 100), r(!(1 & this.headers.length));
      const E2 = A2[F][A2[M]];
      return r(E2), this.statusCode = null, this.statusText = "", this.bytesRead = 0, this.contentLength = "", this.keepAlive = "", this.connection = "", this.headers = [], this.headersSize = 0, t2 < 200 ? void 0 : "HEAD" !== E2.method && i2 && Q2 !== parseInt(i2, 10) ? (s.destroy(e2, new a()), -1) : (E2.onComplete(n2), A2[F][A2[M]++] = null, e2[tA] = true, e2[R] ? (r(0 === A2[D]), s.destroy(e2, new I("reset")), K.ERROR.PAUSED) : g2 ? e2[d] && 0 === A2[D] ? (s.destroy(e2, new I("reset")), K.ERROR.PAUSED) : void (null == A2[L] || 1 === A2[L] ? setImmediate(() => A2[Z]()) : A2[Z]()) : (s.destroy(e2, new I("reset")), K.ERROR.PAUSED));
    }
  }
  function EA(A2) {
    const { socket: e2, timeoutType: t2, client: o2, paused: n2 } = A2.deref();
    3 === t2 ? (!e2[R] || e2.writableNeedDrain || o2[D] > 1) && (r(!n2, "cannot be paused while waiting for headers"), s.destroy(e2, new E())) : 5 === t2 ? n2 || s.destroy(e2, new C()) : 8 === t2 && (r(0 === o2[D] && o2[Y]), s.destroy(e2, new I("socket idle timeout")));
  }
  function BA(A2) {
    A2[eA] && (clearTimeout(A2[eA]), A2[eA] = null), A2[AA] = 0;
  }
  function cA(A2, e2, t2, o2, n2, i2, a2, Q2) {
    try {
      e2 ? s.isBuffer(e2) && (r(i2 === e2.byteLength, "buffer body must have content length"), n2.cork(), n2.write(`${a2}content-length: ${i2}\r
\r
`, "latin1"), n2.write(e2), n2.uncork(), o2.onBodySent(e2), Q2 || false === o2.reset || (n2[d] = true)) : 0 === i2 ? n2.write(`${a2}content-length: 0\r
\r
`, "latin1") : (r(null === i2, "no body must not have content length"), n2.write(`${a2}\r
`, "latin1")), o2.onRequestSent(), t2[Z]();
    } catch (e3) {
      A2(e3);
    }
  }
  async function IA(A2, e2, t2, s2, o2, n2, i2, a2) {
    r(0 !== n2 || 0 === t2[D], "iterator body cannot be pipelined");
    let Q2 = null;
    function g2() {
      if (Q2) {
        const A3 = Q2;
        Q2 = null, A3();
      }
    }
    const E2 = () => new Promise((A3, e3) => {
      r(null === Q2), o2[U] ? e3(o2[U]) : Q2 = A3;
    });
    o2.on("close", g2).on("drain", g2);
    const B2 = new CA({ abort: A2, socket: o2, request: s2, contentLength: n2, client: t2, expectsPayload: a2, header: i2 });
    try {
      for await (const A3 of e2) {
        if (o2[U]) throw o2[U];
        B2.write(A3) || await E2();
      }
      B2.end();
    } catch (A3) {
      B2.destroy(A3);
    } finally {
      o2.off("close", g2).off("drain", g2);
    }
  }
  class CA {
    constructor({ abort: A2, socket: e2, request: t2, contentLength: r2, client: s2, expectsPayload: o2, header: n2 }) {
      this.socket = e2, this.request = t2, this.contentLength = r2, this.client = s2, this.bytesWritten = 0, this.expectsPayload = o2, this.header = n2, this.abort = A2, e2[R] = true;
    }
    write(A2) {
      const { socket: e2, request: t2, contentLength: r2, client: s2, bytesWritten: o2, expectsPayload: n2, header: a2 } = this;
      if (e2[U]) throw e2[U];
      if (e2.destroyed) return false;
      const Q2 = Buffer.byteLength(A2);
      if (!Q2) return true;
      if (null !== r2 && o2 + Q2 > r2) {
        if (s2[x]) throw new i();
        process.emitWarning(new i());
      }
      e2.cork(), 0 === o2 && (n2 || false === t2.reset || (e2[d] = true), null === r2 ? e2.write(`${a2}transfer-encoding: chunked\r
`, "latin1") : e2.write(`${a2}content-length: ${r2}\r
\r
`, "latin1")), null === r2 && e2.write(`\r
${Q2.toString(16)}\r
`, "latin1"), this.bytesWritten += Q2;
      const g2 = e2.write(A2);
      return e2.uncork(), t2.onBodySent(A2), g2 || e2[w].timeout && 3 === e2[w].timeoutType && e2[w].timeout.refresh && e2[w].timeout.refresh(), g2;
    }
    end() {
      const { socket: A2, contentLength: e2, client: t2, bytesWritten: r2, expectsPayload: s2, header: o2, request: n2 } = this;
      if (n2.onRequestSent(), A2[R] = false, A2[U]) throw A2[U];
      if (!A2.destroyed) {
        if (0 === r2 ? s2 ? A2.write(`${o2}content-length: 0\r
\r
`, "latin1") : A2.write(`${o2}\r
`, "latin1") : null === e2 && A2.write("\r\n0\r\n\r\n", "latin1"), null !== e2 && r2 !== e2) {
          if (t2[x]) throw new i();
          process.emitWarning(new i());
        }
        A2[w].timeout && 3 === A2[w].timeoutType && A2[w].timeout.refresh && A2[w].timeout.refresh(), t2[Z]();
      }
    }
    destroy(A2) {
      const { socket: e2, client: t2, abort: s2 } = this;
      e2[R] = false, A2 && (r(t2[D] <= 1, "pipeline should only contain this request"), s2(A2));
    }
  }
  A.exports = async function(A2, e2) {
    A2[T] = e2, sA || (sA = await oA, oA = null), e2[m] = false, e2[R] = false, e2[d] = false, e2[y] = false, e2[AA] = 0, e2[eA] = null, e2[tA] = false, e2[w] = new gA(A2, e2, sA), j(e2, "error", function(A3) {
      r("ERR_TLS_CERT_ALTNAME_INVALID" !== A3.code);
      const e3 = this[w];
      if ("ECONNRESET" === A3.code && e3.statusCode && !e3.shouldKeepAlive) {
        const A4 = e3.finish();
        return void (A4 && (this[U] = A4, this[f][q](A4)));
      }
      this[U] = A3, this[f][q](A3);
    }), j(e2, "readable", function() {
      const A3 = this[w];
      A3 && A3.readMore();
    }), j(e2, "end", function() {
      const A3 = this[w];
      if (A3.statusCode && !A3.shouldKeepAlive) {
        const e3 = A3.finish();
        return void (e3 && s.destroy(this, e3));
      }
      s.destroy(this, new c("other side closed", s.getSocketInfo(this)));
    }), j(e2, "close", function() {
      const A3 = this[f], e3 = this[w];
      BA(this), e3 && (this[U] || !e3.statusCode || e3.shouldKeepAlive || (this[U] = e3.finish() || this[U]), this[w].destroy(), this[w] = null);
      const t2 = this[U] || new c("closed", s.getSocketInfo(this));
      if (A3[T] = null, A3[z] = null, A3.destroyed) {
        r(0 === A3[p]);
        const e4 = A3[F].splice(A3[M]);
        for (let r2 = 0; r2 < e4.length; r2++) {
          const o2 = e4[r2];
          s.errorRequest(A3, o2, t2);
        }
      } else if (A3[D] > 0 && "UND_ERR_INFO" !== t2.code) {
        const e4 = A3[F][A3[M]];
        A3[F][A3[M]++] = null, s.errorRequest(A3, e4, t2);
      }
      A3[S] = A3[M], r(0 === A3[D]), A3.emit("disconnect", A3[u], [A3], t2), A3[Z]();
    });
    let n2 = false;
    return e2.on("close", () => {
      n2 = true;
    }), { version: "h1", defaultPipelining: 1, write: (...e3) => (function(A3, e4) {
      const { method: n3, path: a2, host: E2, upgrade: B2, blocking: c2, reset: C2 } = e4;
      let { body: h2, headers: l2, contentLength: u2 } = e4;
      const f2 = "PUT" === n3 || "POST" === n3 || "PATCH" === n3 || "QUERY" === n3 || "PROPFIND" === n3 || "PROPPATCH" === n3;
      if (s.isFormDataLike(h2)) {
        rA || (rA = t(33095).extractBody);
        const [A4, r2] = rA(h2);
        null == e4.contentType && l2.push("content-type", r2), h2 = A4.stream, u2 = A4.length;
      } else if (s.isBlobLike(h2) && null == e4.contentType) {
        const t2 = h2.type;
        if (t2) {
          const r2 = `${t2}`;
          if (!s.isValidHeaderValue(r2)) return s.errorRequest(A3, e4, new g("invalid content-type header")), false;
          l2.push("content-type", r2);
        }
      }
      h2 && "function" == typeof h2.read && h2.read(0);
      const w2 = s.bodyLength(h2);
      u2 = w2 ?? u2, null === u2 && (u2 = e4.contentLength);
      0 !== u2 || f2 || (u2 = null);
      if (/* @__PURE__ */ (function(A4) {
        return "GET" !== A4 && "HEAD" !== A4 && "OPTIONS" !== A4 && "TRACE" !== A4 && "CONNECT" !== A4;
      })(n3) && u2 > 0 && null !== e4.contentLength && e4.contentLength !== u2) {
        if (A3[x]) return s.errorRequest(A3, e4, new i()), false;
        process.emitWarning(new i());
      }
      const p2 = A3[T];
      BA(p2);
      const k2 = (t2) => {
        e4.aborted || e4.completed || (s.errorRequest(A3, e4, t2 || new Q()), s.destroy(h2), s.destroy(p2, new I("aborted")));
      };
      try {
        e4.onConnect(k2);
      } catch (t2) {
        s.errorRequest(A3, e4, t2);
      }
      if (e4.aborted) return false;
      "HEAD" === n3 && (p2[d] = true);
      (B2 || "CONNECT" === n3) && (p2[d] = true);
      null != C2 && (p2[d] = C2);
      A3[W] && p2[O]++ >= A3[W] && (p2[d] = true);
      c2 && (p2[y] = true);
      let F2 = `${n3} ${a2} HTTP/1.1\r
`;
      F2 += "string" == typeof E2 ? `host: ${E2}\r
` : A3[N];
      B2 ? F2 += `connection: upgrade\r
upgrade: ${B2}\r
` : A3[L] && !p2[d] ? F2 += "connection: keep-alive\r\n" : F2 += "connection: close\r\n";
      if (Array.isArray(l2)) for (let A4 = 0; A4 < l2.length; A4 += 2) {
        const e5 = l2[A4 + 0], t2 = l2[A4 + 1];
        if (Array.isArray(t2)) for (let A5 = 0; A5 < t2.length; A5++) F2 += `${e5}: ${t2[A5]}\r
`;
        else F2 += `${e5}: ${t2}\r
`;
      }
      o.sendHeaders.hasSubscribers && o.sendHeaders.publish({ request: e4, headers: F2, socket: p2 });
      h2 && 0 !== w2 ? s.isBuffer(h2) ? cA(k2, h2, A3, e4, p2, u2, F2, f2) : s.isBlobLike(h2) ? "function" == typeof h2.stream ? IA(k2, h2.stream(), A3, e4, p2, u2, F2, f2) : (async function(A4, e5, t2, s2, o2, n4, a3, Q2) {
        r(n4 === e5.size, "blob body must have content length");
        try {
          if (null != n4 && n4 !== e5.size) throw new i();
          const A5 = Buffer.from(await e5.arrayBuffer());
          o2.cork(), o2.write(`${a3}content-length: ${n4}\r
\r
`, "latin1"), o2.write(A5), o2.uncork(), s2.onBodySent(A5), s2.onRequestSent(), Q2 || false === s2.reset || (o2[d] = true), t2[Z]();
        } catch (e6) {
          A4(e6);
        }
      })(k2, h2, A3, e4, p2, u2, F2, f2) : s.isStream(h2) ? (function(A4, e5, t2, o2, n4, i2, a3, g2) {
        r(0 !== i2 || 0 === t2[D], "stream body cannot be pipelined");
        let E3 = false;
        const B3 = new CA({ abort: A4, socket: n4, request: o2, contentLength: i2, client: t2, expectsPayload: g2, header: a3 }), c3 = function(A5) {
          if (!E3) try {
            !B3.write(A5) && this.pause && this.pause();
          } catch (A6) {
            s.destroy(this, A6);
          }
        }, I2 = function() {
          E3 || e5.resume && e5.resume();
        }, C3 = function() {
          if (queueMicrotask(() => {
            e5.removeListener("error", h3);
          }), !E3) {
            const A5 = new Q();
            queueMicrotask(() => h3(A5));
          }
        }, h3 = function(A5) {
          if (!E3) {
            if (E3 = true, r(n4.destroyed || n4[R] && t2[D] <= 1), n4.off("drain", I2).off("error", h3), e5.removeListener("data", c3).removeListener("end", h3).removeListener("close", C3), !A5) try {
              B3.end();
            } catch (e6) {
              A5 = e6;
            }
            B3.destroy(A5), !A5 || "UND_ERR_INFO" === A5.code && "reset" === A5.message ? s.destroy(e5) : s.destroy(e5, A5);
          }
        };
        e5.on("data", c3).on("end", h3).on("error", h3).on("close", C3), e5.resume && e5.resume();
        n4.on("drain", I2).on("error", h3), e5.errorEmitted ?? e5.errored ? setImmediate(() => h3(e5.errored)) : (e5.endEmitted ?? e5.readableEnded) && setImmediate(() => h3(null));
        (e5.closeEmitted ?? e5.closed) && setImmediate(C3);
      })(k2, h2, A3, e4, p2, u2, F2, f2) : s.isIterable(h2) ? IA(k2, h2, A3, e4, p2, u2, F2, f2) : r(false) : cA(k2, null, A3, e4, p2, u2, F2, f2);
      return true;
    })(A2, ...e3), resume() {
      !(function(A3) {
        const e3 = A3[T];
        if (e3 && !e3.destroyed) {
          if (0 === A3[k] ? !e3[m] && e3.unref && (e3.unref(), e3[m] = true) : e3[m] && e3.ref && (e3.ref(), e3[m] = false), 0 === A3[D] && A3[p] > 0 && e3[tA]) {
            if (0 === e3[AA]) return (function(A4, e4) {
              e4[AA] = 1, e4[eA] = setTimeout(() => {
                e4[eA] = null, e4[AA] = 2, A4[T] !== e4 || e4.destroyed || A4[Z]();
              }, 0), e4[eA].unref?.();
            })(A3, e3), e3[w].readMore(), void e3.destroyed;
            if (1 === e3[AA]) return e3[w].readMore(), void e3.destroyed;
          }
          if (0 === A3[D] && (e3[w].readMore(), e3.destroyed)) return;
          if (0 === A3[k]) 8 !== e3[w].timeoutType && e3[w].setTimeout(A3[Y], 8);
          else if (A3[D] > 0 && e3[w].statusCode < 200 && 3 !== e3[w].timeoutType) {
            const t2 = A3[F][A3[M]], r2 = null != t2.headersTimeout ? t2.headersTimeout : A3[H];
            e3[w].setTimeout(r2, 3);
          }
        }
      })(A2);
    }, destroy(A3, t2) {
      n2 ? queueMicrotask(t2) : e2.destroy(A3).on("close", t2);
    }, get destroyed() {
      return e2.destroyed;
    }, busy(t2) {
      if (e2[R] || e2[d] || e2[y] || 1 === e2[AA]) return true;
      if (t2) {
        if (A2[D] > 0 && !t2.idempotent) return true;
        if (A2[D] > 0 && (t2.upgrade || "CONNECT" === t2.method)) return true;
        if (A2[D] > 0 && 0 !== s.bodyLength(t2.body) && (s.isStream(t2.body) || s.isAsyncIterable(t2.body) || s.isFormDataLike(t2.body))) return true;
      }
      return false;
    } };
  };
}