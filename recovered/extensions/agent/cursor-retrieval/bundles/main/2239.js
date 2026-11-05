// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 2239 range:468972..481469
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2239: (e2, a2, n2) => {
    "use strict";
    const { extractBody: t2, mixinBody: s2, cloneBody: o2 } = n2(7052), { Headers: r2, fill: i2, HeadersList: l } = n2(2932), { FinalizationRegistry: d } = n2(1531)(), m = n2(9361), { isValidHTTPToken: c, sameOrigin: p, normalizeMethod: A, makePolicyContainer: u, normalizeMethodRecord: g } = n2(5728), { forbiddenMethodsSet: T, corsSafeListedMethodsSet: h, referrerPolicy: k, requestRedirect: _, requestMode: E, requestCredentials: f, requestCache: C, requestDuplex: I } = n2(6687), { kEnumerableProperty: v } = m, { kHeaders: y, kSignal: S, kState: R, kGuard: N, kRealm: B } = n2(5899), { webidl: w } = n2(8005), { getGlobalOrigin: b } = n2(9523), { URLSerializer: Q } = n2(3631), { kHeadersList: D, kConstruct: M } = n2(8832), O = n2(2613), { getMaxListeners: U, setMaxListeners: F, getEventListeners: P, defaultMaxListeners: L } = n2(4434);
    let G = globalThis.TransformStream;
    const x = /* @__PURE__ */ Symbol("abortController"), V = new d(({ signal: e3, abort: a3 }) => {
      e3.removeEventListener("abort", a3);
    });
    class Y {
      constructor(e3, a3 = {}) {
        if (e3 === M) return;
        w.argumentLengthCheck(arguments, 1, { header: "Request constructor" }), e3 = w.converters.RequestInfo(e3), a3 = w.converters.RequestInit(a3), this[B] = { settingsObject: { baseUrl: b(), get origin() {
          return this.baseUrl?.origin;
        }, policyContainer: u() } };
        let s3 = null, o3 = null;
        const d2 = this[B].settingsObject.baseUrl;
        let k2 = null;
        if ("string" == typeof e3) {
          let a4;
          try {
            a4 = new URL(e3, d2);
          } catch (a5) {
            throw new TypeError("Failed to parse URL from " + e3, { cause: a5 });
          }
          if (a4.username || a4.password) throw new TypeError("Request cannot be constructed from a URL that includes credentials: " + e3);
          s3 = q({ urlList: [a4] }), o3 = "cors";
        } else O(e3 instanceof Y), s3 = e3[R], k2 = e3[S];
        const _2 = this[B].settingsObject.origin;
        let E2 = "client";
        if ("EnvironmentSettingsObject" === s3.window?.constructor?.name && p(s3.window, _2) && (E2 = s3.window), null != a3.window) throw new TypeError(`'window' option '${E2}' must be null`);
        "window" in a3 && (E2 = "no-window"), s3 = q({ method: s3.method, headersList: s3.headersList, unsafeRequest: s3.unsafeRequest, client: this[B].settingsObject, window: E2, priority: s3.priority, origin: s3.origin, referrer: s3.referrer, referrerPolicy: s3.referrerPolicy, mode: s3.mode, credentials: s3.credentials, cache: s3.cache, redirect: s3.redirect, integrity: s3.integrity, keepalive: s3.keepalive, reloadNavigation: s3.reloadNavigation, historyNavigation: s3.historyNavigation, urlList: [...s3.urlList] });
        const f2 = 0 !== Object.keys(a3).length;
        if (f2 && ("navigate" === s3.mode && (s3.mode = "same-origin"), s3.reloadNavigation = false, s3.historyNavigation = false, s3.origin = "client", s3.referrer = "client", s3.referrerPolicy = "", s3.url = s3.urlList[s3.urlList.length - 1], s3.urlList = [s3.url]), void 0 !== a3.referrer) {
          const e4 = a3.referrer;
          if ("" === e4) s3.referrer = "no-referrer";
          else {
            let a4;
            try {
              a4 = new URL(e4, d2);
            } catch (a5) {
              throw new TypeError(`Referrer "${e4}" is not a valid URL.`, { cause: a5 });
            }
            "about:" === a4.protocol && "client" === a4.hostname || _2 && !p(a4, this[B].settingsObject.baseUrl) ? s3.referrer = "client" : s3.referrer = a4;
          }
        }
        let C2;
        if (void 0 !== a3.referrerPolicy && (s3.referrerPolicy = a3.referrerPolicy), C2 = void 0 !== a3.mode ? a3.mode : o3, "navigate" === C2) throw w.errors.exception({ header: "Request constructor", message: "invalid request mode navigate." });
        if (null != C2 && (s3.mode = C2), void 0 !== a3.credentials && (s3.credentials = a3.credentials), void 0 !== a3.cache && (s3.cache = a3.cache), "only-if-cached" === s3.cache && "same-origin" !== s3.mode) throw new TypeError("'only-if-cached' can be set only with 'same-origin' mode");
        if (void 0 !== a3.redirect && (s3.redirect = a3.redirect), null != a3.integrity && (s3.integrity = String(a3.integrity)), void 0 !== a3.keepalive && (s3.keepalive = Boolean(a3.keepalive)), void 0 !== a3.method) {
          let e4 = a3.method;
          if (!c(e4)) throw new TypeError(`'${e4}' is not a valid HTTP method.`);
          if (T.has(e4.toUpperCase())) throw new TypeError(`'${e4}' HTTP method is unsupported.`);
          e4 = g[e4] ?? A(e4), s3.method = e4;
        }
        void 0 !== a3.signal && (k2 = a3.signal), this[R] = s3;
        const I2 = new AbortController();
        if (this[S] = I2.signal, this[S][B] = this[B], null != k2) {
          if (!k2 || "boolean" != typeof k2.aborted || "function" != typeof k2.addEventListener) throw new TypeError("Failed to construct 'Request': member signal is not of type AbortSignal.");
          if (k2.aborted) I2.abort(k2.reason);
          else {
            this[x] = I2;
            const e4 = new WeakRef(I2), a4 = function() {
              const a5 = e4.deref();
              void 0 !== a5 && a5.abort(this.reason);
            };
            try {
              ("function" == typeof U && U(k2) === L || P(k2, "abort").length >= L) && F(100, k2);
            } catch {
            }
            m.addAbortListener(k2, a4), V.register(I2, { signal: k2, abort: a4 });
          }
        }
        if (this[y] = new r2(M), this[y][D] = s3.headersList, this[y][N] = "request", this[y][B] = this[B], "no-cors" === C2) {
          if (!h.has(s3.method)) throw new TypeError(`'${s3.method} is unsupported in no-cors mode.`);
          this[y][N] = "request-no-cors";
        }
        if (f2) {
          const e4 = this[y][D], n3 = void 0 !== a3.headers ? a3.headers : new l(e4);
          if (e4.clear(), n3 instanceof l) {
            for (const [a4, t3] of n3) e4.append(a4, t3);
            e4.cookies = n3.cookies;
          } else i2(this[y], n3);
        }
        const v2 = e3 instanceof Y ? e3[R].body : null;
        if (!(null == a3.body && null == v2 || "GET" !== s3.method && "HEAD" !== s3.method)) throw new TypeError("Request with GET/HEAD method cannot have body.");
        let Q2 = null;
        if (null != a3.body) {
          const [e4, n3] = t2(a3.body, s3.keepalive);
          Q2 = e4, n3 && !this[y][D].contains("content-type") && this[y].append("content-type", n3);
        }
        const H = Q2 ?? v2;
        if (null != H && null == H.source) {
          if (null != Q2 && null == a3.duplex) throw new TypeError("RequestInit: duplex option is required when sending a body.");
          if ("same-origin" !== s3.mode && "cors" !== s3.mode) throw new TypeError('If request is made from ReadableStream, mode should be "same-origin" or "cors"');
          s3.useCORSPreflightFlag = true;
        }
        let J = H;
        if (null == Q2 && null != v2) {
          if (m.isDisturbed(v2.stream) || v2.stream.locked) throw new TypeError("Cannot construct a Request with a Request object that has already been used.");
          G || (G = n2(3774).TransformStream);
          const e4 = new G();
          v2.stream.pipeThrough(e4), J = { source: v2.source, length: v2.length, stream: e4.readable };
        }
        this[R].body = J;
      }
      get method() {
        return w.brandCheck(this, Y), this[R].method;
      }
      get url() {
        return w.brandCheck(this, Y), Q(this[R].url);
      }
      get headers() {
        return w.brandCheck(this, Y), this[y];
      }
      get destination() {
        return w.brandCheck(this, Y), this[R].destination;
      }
      get referrer() {
        return w.brandCheck(this, Y), "no-referrer" === this[R].referrer ? "" : "client" === this[R].referrer ? "about:client" : this[R].referrer.toString();
      }
      get referrerPolicy() {
        return w.brandCheck(this, Y), this[R].referrerPolicy;
      }
      get mode() {
        return w.brandCheck(this, Y), this[R].mode;
      }
      get credentials() {
        return this[R].credentials;
      }
      get cache() {
        return w.brandCheck(this, Y), this[R].cache;
      }
      get redirect() {
        return w.brandCheck(this, Y), this[R].redirect;
      }
      get integrity() {
        return w.brandCheck(this, Y), this[R].integrity;
      }
      get keepalive() {
        return w.brandCheck(this, Y), this[R].keepalive;
      }
      get isReloadNavigation() {
        return w.brandCheck(this, Y), this[R].reloadNavigation;
      }
      get isHistoryNavigation() {
        return w.brandCheck(this, Y), this[R].historyNavigation;
      }
      get signal() {
        return w.brandCheck(this, Y), this[S];
      }
      get body() {
        return w.brandCheck(this, Y), this[R].body ? this[R].body.stream : null;
      }
      get bodyUsed() {
        return w.brandCheck(this, Y), !!this[R].body && m.isDisturbed(this[R].body.stream);
      }
      get duplex() {
        return w.brandCheck(this, Y), "half";
      }
      clone() {
        if (w.brandCheck(this, Y), this.bodyUsed || this.body?.locked) throw new TypeError("unusable");
        const e3 = (function(e4) {
          const a4 = q({ ...e4, body: null });
          null != e4.body && (a4.body = o2(e4.body));
          return a4;
        })(this[R]), a3 = new Y(M);
        a3[R] = e3, a3[B] = this[B], a3[y] = new r2(M), a3[y][D] = e3.headersList, a3[y][N] = this[y][N], a3[y][B] = this[y][B];
        const n3 = new AbortController();
        return this.signal.aborted ? n3.abort(this.signal.reason) : m.addAbortListener(this.signal, () => {
          n3.abort(this.signal.reason);
        }), a3[S] = n3.signal, a3;
      }
    }
    function q(e3) {
      const a3 = { method: "GET", localURLsOnly: false, unsafeRequest: false, body: null, client: null, reservedClient: null, replacesClientId: "", window: "client", keepalive: false, serviceWorkers: "all", initiator: "", destination: "", priority: null, origin: "client", policyContainer: "client", referrer: "client", referrerPolicy: "", mode: "no-cors", useCORSPreflightFlag: false, credentials: "same-origin", useCredentials: false, cache: "default", redirect: "follow", integrity: "", cryptoGraphicsNonceMetadata: "", parserMetadata: "", reloadNavigation: false, historyNavigation: false, userActivation: false, taintedOrigin: false, redirectCount: 0, responseTainting: "basic", preventNoCacheCacheControlHeaderModification: false, done: false, timingAllowFailed: false, ...e3, headersList: e3.headersList ? new l(e3.headersList) : new l() };
      return a3.url = a3.urlList[0], a3;
    }
    s2(Y), Object.defineProperties(Y.prototype, { method: v, url: v, headers: v, redirect: v, clone: v, signal: v, duplex: v, destination: v, body: v, bodyUsed: v, isHistoryNavigation: v, isReloadNavigation: v, keepalive: v, integrity: v, cache: v, credentials: v, attribute: v, referrerPolicy: v, referrer: v, mode: v, [Symbol.toStringTag]: { value: "Request", configurable: true } }), w.converters.Request = w.interfaceConverter(Y), w.converters.RequestInfo = function(e3) {
      return "string" == typeof e3 ? w.converters.USVString(e3) : e3 instanceof Y ? w.converters.Request(e3) : w.converters.USVString(e3);
    }, w.converters.AbortSignal = w.interfaceConverter(AbortSignal), w.converters.RequestInit = w.dictionaryConverter([{ key: "method", converter: w.converters.ByteString }, { key: "headers", converter: w.converters.HeadersInit }, { key: "body", converter: w.nullableConverter(w.converters.BodyInit) }, { key: "referrer", converter: w.converters.USVString }, { key: "referrerPolicy", converter: w.converters.DOMString, allowedValues: k }, { key: "mode", converter: w.converters.DOMString, allowedValues: E }, { key: "credentials", converter: w.converters.DOMString, allowedValues: f }, { key: "cache", converter: w.converters.DOMString, allowedValues: C }, { key: "redirect", converter: w.converters.DOMString, allowedValues: _ }, { key: "integrity", converter: w.converters.DOMString }, { key: "keepalive", converter: w.converters.boolean }, { key: "signal", converter: w.nullableConverter((e3) => w.converters.AbortSignal(e3, { strict: false })) }, { key: "window", converter: w.converters.any }, { key: "duplex", converter: w.converters.DOMString, allowedValues: I }]), e2.exports = { Request: Y, makeRequest: q };
  }