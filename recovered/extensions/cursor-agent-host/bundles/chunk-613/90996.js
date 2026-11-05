// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 90996 range:479958..490068
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
90996: (A, e, t) => {
  "use strict";
  const r = t(56970), s = t(77030), o = t(37067), n = t(55201), { channels: i } = t(98565), a = t(52588), Q = t(27110), { InvalidArgumentError: g, InformationalError: E, ClientDestroyedError: B } = t(38238), c = t(60039), { kUrl: I, kServerName: C, kClient: h, kBusy: l, kConnect: u, kResuming: d, kRunning: f, kPending: w, kSize: y, kQueue: D, kConnected: p, kConnecting: k, kNeedDrain: R, kKeepAliveDefaultTimeout: F, kHostHeader: m, kPendingIdx: b, kRunningIdx: N, kError: S, kPipelining: M, kKeepAliveTimeoutValue: U, kMaxHeadersSize: L, kKeepAliveMaxTimeout: T, kKeepAliveTimeoutThreshold: Y, kHeadersTimeout: G, kBodyTimeout: J, kStrictContentLength: v, kConnector: H, kMaxRedirections: V, kMaxRequests: x, kCounter: W, kClose: O, kDestroy: P, kDispatch: q, kInterceptors: Z, kLocalAddress: z, kMaxResponseSize: K, kOnError: X, kHTTPContext: _, kMaxConcurrentStreams: j, kResume: $ } = t(76992), AA = t(62322), eA = t(63231);
  let tA = false;
  const rA = /* @__PURE__ */ Symbol("kClosedResolve"), sA = () => {
  };
  function oA(A2) {
    return A2[M] ?? A2[_]?.defaultPipelining ?? 1;
  }
  const nA = t(39935);
  function iA(A2, e2) {
    if (0 === A2[f] && "UND_ERR_INFO" !== e2.code && "UND_ERR_SOCKET" !== e2.code) {
      r(A2[b] === A2[N]);
      const t2 = A2[D].splice(A2[N]);
      for (let r2 = 0; r2 < t2.length; r2++) {
        const s2 = t2[r2];
        n.errorRequest(A2, s2, e2);
      }
      r(0 === A2[y]);
    }
  }
  async function aA(A2) {
    r(!A2[k]), r(!A2[_]);
    let { host: e2, hostname: t2, protocol: o2, port: a2 } = A2[I];
    if ("[" === t2[0]) {
      const A3 = t2.indexOf("]");
      r(-1 !== A3);
      const e3 = t2.substring(1, A3);
      r(s.isIP(e3)), t2 = e3;
    }
    A2[k] = true, i.beforeConnect.hasSubscribers && i.beforeConnect.publish({ connectParams: { host: e2, hostname: t2, protocol: o2, port: a2, version: A2[_]?.version, servername: A2[C], localAddress: A2[z] }, connector: A2[H] });
    try {
      const s2 = await new Promise((r2, s3) => {
        A2[H]({ host: e2, hostname: t2, protocol: o2, port: a2, servername: A2[C], localAddress: A2[z] }, (A3, e3) => {
          A3 ? s3(A3) : r2(e3);
        });
      });
      if (A2.destroyed) return void n.destroy(s2.on("error", sA), new B());
      r(s2);
      try {
        A2[_] = "h2" === s2.alpnProtocol ? await eA(A2, s2) : await AA(A2, s2);
      } catch (A3) {
        throw s2.destroy().on("error", sA), A3;
      }
      A2[k] = false, s2[W] = 0, s2[x] = A2[x], s2[h] = A2, s2[S] = null, i.connected.hasSubscribers && i.connected.publish({ connectParams: { host: e2, hostname: t2, protocol: o2, port: a2, version: A2[_]?.version, servername: A2[C], localAddress: A2[z] }, connector: A2[H], socket: s2 }), A2.emit("connect", A2[I], [A2]);
    } catch (s2) {
      if (A2.destroyed) return;
      if (A2[k] = false, i.connectError.hasSubscribers && i.connectError.publish({ connectParams: { host: e2, hostname: t2, protocol: o2, port: a2, version: A2[_]?.version, servername: A2[C], localAddress: A2[z] }, connector: A2[H], error: s2 }), "ERR_TLS_CERT_ALTNAME_INVALID" === s2.code) for (r(0 === A2[f]); A2[w] > 0 && A2[D][A2[b]].servername === A2[C]; ) {
        const e3 = A2[D][A2[b]++];
        n.errorRequest(A2, e3, s2);
      }
      else iA(A2, s2);
      A2.emit("connectionError", A2[I], [A2], s2);
    }
    A2[$]();
  }
  function QA(A2) {
    A2[R] = 0, A2.emit("drain", A2[I], [A2]);
  }
  function gA(A2, e2) {
    2 !== A2[d] && (A2[d] = 2, (function(A3, e3) {
      for (; ; ) {
        if (A3.destroyed) return void r(0 === A3[w]);
        if (A3[rA] && !A3[y]) return A3[rA](), void (A3[rA] = null);
        if (A3[_] && A3[_].resume(), A3[l]) A3[R] = 2;
        else if (2 === A3[R]) {
          e3 ? (A3[R] = 1, queueMicrotask(() => QA(A3))) : QA(A3);
          continue;
        }
        if (0 === A3[w]) return;
        if (A3[f] >= (oA(A3) || 1)) return;
        const t2 = A3[D][A3[b]];
        if ("https:" === A3[I].protocol && A3[C] !== t2.servername) {
          if (A3[f] > 0) return;
          A3[C] = t2.servername, A3[_]?.destroy(new E("servername changed"), () => {
            A3[_] = null, gA(A3);
          });
        }
        if (A3[k]) return;
        if (!A3[_]) return void aA(A3);
        if (A3[_].destroyed) return;
        if (A3[_].busy(t2)) return;
        !t2.aborted && A3[_].write(t2) ? A3[b]++ : A3[D].splice(A3[b], 1);
      }
    })(A2, e2), A2[d] = 0, A2[N] > 256 && (A2[D].splice(0, A2[N]), A2[b] -= A2[N], A2[N] = 0));
  }
  A.exports = class extends Q {
    constructor(A2, { interceptors: e2, maxHeaderSize: t2, headersTimeout: r2, socketTimeout: i2, requestTimeout: a2, connectTimeout: Q2, bodyTimeout: E2, idleTimeout: B2, keepAlive: h2, keepAliveTimeout: l2, maxKeepAliveTimeout: u2, keepAliveMaxTimeout: f2, keepAliveTimeoutThreshold: w2, socketPath: y2, pipelining: p2, tls: k2, strictContentLength: S2, maxCachedSessions: W2, maxRedirections: O2, connect: P2, maxRequestsPerClient: q2, localAddress: AA2, maxResponseSize: eA2, autoSelectFamily: sA2, autoSelectFamilyAttemptTimeout: oA2, maxConcurrentStreams: aA2, allowH2: QA2, webSocket: EA } = {}) {
      if (super({ webSocket: EA }), void 0 !== h2) throw new g("unsupported keepAlive, use pipelining=0 instead");
      if (void 0 !== i2) throw new g("unsupported socketTimeout, use headersTimeout & bodyTimeout instead");
      if (void 0 !== a2) throw new g("unsupported requestTimeout, use headersTimeout & bodyTimeout instead");
      if (void 0 !== B2) throw new g("unsupported idleTimeout, use keepAliveTimeout instead");
      if (void 0 !== u2) throw new g("unsupported maxKeepAliveTimeout, use keepAliveMaxTimeout instead");
      if (null != t2 && !Number.isFinite(t2)) throw new g("invalid maxHeaderSize");
      if (null != y2 && "string" != typeof y2) throw new g("invalid socketPath");
      if (null != Q2 && (!Number.isFinite(Q2) || Q2 < 0)) throw new g("invalid connectTimeout");
      if (null != l2 && (!Number.isFinite(l2) || l2 <= 0)) throw new g("invalid keepAliveTimeout");
      if (null != f2 && (!Number.isFinite(f2) || f2 <= 0)) throw new g("invalid keepAliveMaxTimeout");
      if (null != w2 && !Number.isFinite(w2)) throw new g("invalid keepAliveTimeoutThreshold");
      if (null != r2 && (!Number.isInteger(r2) || r2 < 0)) throw new g("headersTimeout must be a positive integer or zero");
      if (null != E2 && (!Number.isInteger(E2) || E2 < 0)) throw new g("bodyTimeout must be a positive integer or zero");
      if (null != P2 && "function" != typeof P2 && "object" != typeof P2) throw new g("connect must be a function or an object");
      if (null != O2 && (!Number.isInteger(O2) || O2 < 0)) throw new g("maxRedirections must be a positive number");
      if (null != q2 && (!Number.isInteger(q2) || q2 < 0)) throw new g("maxRequestsPerClient must be a positive number");
      if (null != AA2 && ("string" != typeof AA2 || 0 === s.isIP(AA2))) throw new g("localAddress must be valid string IP address");
      if (null != eA2 && (!Number.isInteger(eA2) || eA2 < -1)) throw new g("maxResponseSize must be a positive number");
      if (null != oA2 && (!Number.isInteger(oA2) || oA2 < -1)) throw new g("autoSelectFamilyAttemptTimeout must be a positive number");
      if (null != QA2 && "boolean" != typeof QA2) throw new g("allowH2 must be a valid boolean value");
      if (null != aA2 && ("number" != typeof aA2 || aA2 < 1)) throw new g("maxConcurrentStreams must be a positive integer, greater than 0");
      "function" != typeof P2 && (P2 = c({ ...k2, maxCachedSessions: W2, allowH2: QA2, socketPath: y2, timeout: Q2, ...sA2 ? { autoSelectFamily: sA2, autoSelectFamilyAttemptTimeout: oA2 } : void 0, ...P2 })), e2?.Client && Array.isArray(e2.Client) ? (this[Z] = e2.Client, tA || (tA = true, process.emitWarning("Client.Options#interceptor is deprecated. Use Dispatcher#compose instead.", { code: "UNDICI-CLIENT-INTERCEPTOR-DEPRECATED" }))) : this[Z] = [nA({ maxRedirections: O2 })], this[I] = n.parseOrigin(A2), this[H] = P2, this[M] = null != p2 ? p2 : 1, this[L] = t2 || o.maxHeaderSize, this[F] = l2 ?? 4e3, this[T] = f2 ?? 6e5, this[Y] = w2 ?? 2e3, this[U] = this[F], this[C] = null, this[z] = null != AA2 ? AA2 : null, this[d] = 0, this[R] = 0, this[m] = `host: ${this[I].hostname}${this[I].port ? `:${this[I].port}` : ""}\r
`, this[J] = null != E2 ? E2 : 3e5, this[G] = null != r2 ? r2 : 3e5, this[v] = S2 ?? true, this[V] = O2, this[x] = q2, this[rA] = null, this[K] = eA2 > -1 ? eA2 : -1, this[j] = null != aA2 ? aA2 : 100, this[_] = null, this[D] = [], this[N] = 0, this[b] = 0, this[$] = (A3) => gA(this, A3), this[X] = (A3) => iA(this, A3);
    }
    get pipelining() {
      return this[M];
    }
    set pipelining(A2) {
      this[M] = A2, this[$](true);
    }
    get [w]() {
      return this[D].length - this[b];
    }
    get [f]() {
      return this[b] - this[N];
    }
    get [y]() {
      return this[D].length - this[N];
    }
    get [p]() {
      return !!this[_] && !this[k] && !this[_].destroyed;
    }
    get [l]() {
      return Boolean(this[_]?.busy(null) || this[y] >= (oA(this) || 1) || this[w] > 0);
    }
    [u](A2) {
      aA(this), this.once("connect", A2);
    }
    [q](A2, e2) {
      const t2 = A2.origin || this[I].origin, r2 = new a(t2, A2, e2);
      return this[D].push(r2), this[d] || (null == n.bodyLength(r2.body) && n.isIterable(r2.body) ? (this[d] = 1, queueMicrotask(() => gA(this))) : this[$](true)), this[d] && 2 !== this[R] && this[l] && (this[R] = 2), this[R] < 2;
    }
    async [O]() {
      return new Promise((A2) => {
        this[y] ? this[rA] = A2 : A2(null);
      });
    }
    async [P](A2) {
      return new Promise((e2) => {
        const t2 = this[D].splice(this[b]);
        for (let e3 = 0; e3 < t2.length; e3++) {
          const r3 = t2[e3];
          n.errorRequest(this, r3, A2);
        }
        const r2 = () => {
          this[rA] && (this[rA](), this[rA] = null), e2(null);
        };
        this[_] ? (this[_].destroy(A2, r2), this[_] = null) : queueMicrotask(r2), this[$]();
      });
    }
  };
}