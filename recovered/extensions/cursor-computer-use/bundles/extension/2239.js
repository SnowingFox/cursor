// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 2239 range:197971..210463
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
2239: (e2, n2, t2) => {
    "use strict";
    const { extractBody: a2, mixinBody: s2, cloneBody: o2 } = t2(7052), { Headers: r, fill: i, HeadersList: A } = t2(2932), { FinalizationRegistry: c } = t2(1531)(), l = t2(9361), { isValidHTTPToken: d, sameOrigin: m, normalizeMethod: u, makePolicyContainer: g, normalizeMethodRecord: p } = t2(5728), { forbiddenMethodsSet: E, corsSafeListedMethodsSet: h, referrerPolicy: T, requestRedirect: k, requestMode: f, requestCredentials: _, requestCache: I, requestDuplex: C } = t2(6687), { kEnumerableProperty: y } = l, { kHeaders: B, kSignal: Q, kState: v, kGuard: R, kRealm: N } = t2(5899), { webidl: S } = t2(8005), { getGlobalOrigin: w } = t2(9523), { URLSerializer: b } = t2(3631), { kHeadersList: D, kConstruct: M } = t2(8832), F = t2(2613), { getMaxListeners: O, setMaxListeners: U, getEventListeners: L, defaultMaxListeners: P } = t2(4434);
    let x = globalThis.TransformStream;
    const G = /* @__PURE__ */ Symbol("abortController"), Y = new c(({ signal: e3, abort: n3 }) => {
      e3.removeEventListener("abort", n3);
    });
    class J {
      constructor(e3, n3 = {}) {
        if (e3 === M) return;
        S.argumentLengthCheck(arguments, 1, { header: "Request constructor" }), e3 = S.converters.RequestInfo(e3), n3 = S.converters.RequestInit(n3), this[N] = { settingsObject: { baseUrl: w(), get origin() {
          return this.baseUrl?.origin;
        }, policyContainer: g() } };
        let s3 = null, o3 = null;
        const c2 = this[N].settingsObject.baseUrl;
        let T2 = null;
        if ("string" == typeof e3) {
          let n4;
          try {
            n4 = new URL(e3, c2);
          } catch (n5) {
            throw new TypeError("Failed to parse URL from " + e3, { cause: n5 });
          }
          if (n4.username || n4.password) throw new TypeError("Request cannot be constructed from a URL that includes credentials: " + e3);
          s3 = V({ urlList: [n4] }), o3 = "cors";
        } else F(e3 instanceof J), s3 = e3[v], T2 = e3[Q];
        const k2 = this[N].settingsObject.origin;
        let f2 = "client";
        if ("EnvironmentSettingsObject" === s3.window?.constructor?.name && m(s3.window, k2) && (f2 = s3.window), null != n3.window) throw new TypeError(`'window' option '${f2}' must be null`);
        "window" in n3 && (f2 = "no-window"), s3 = V({ method: s3.method, headersList: s3.headersList, unsafeRequest: s3.unsafeRequest, client: this[N].settingsObject, window: f2, priority: s3.priority, origin: s3.origin, referrer: s3.referrer, referrerPolicy: s3.referrerPolicy, mode: s3.mode, credentials: s3.credentials, cache: s3.cache, redirect: s3.redirect, integrity: s3.integrity, keepalive: s3.keepalive, reloadNavigation: s3.reloadNavigation, historyNavigation: s3.historyNavigation, urlList: [...s3.urlList] });
        const _2 = 0 !== Object.keys(n3).length;
        if (_2 && ("navigate" === s3.mode && (s3.mode = "same-origin"), s3.reloadNavigation = false, s3.historyNavigation = false, s3.origin = "client", s3.referrer = "client", s3.referrerPolicy = "", s3.url = s3.urlList[s3.urlList.length - 1], s3.urlList = [s3.url]), void 0 !== n3.referrer) {
          const e4 = n3.referrer;
          if ("" === e4) s3.referrer = "no-referrer";
          else {
            let n4;
            try {
              n4 = new URL(e4, c2);
            } catch (n5) {
              throw new TypeError(`Referrer "${e4}" is not a valid URL.`, { cause: n5 });
            }
            "about:" === n4.protocol && "client" === n4.hostname || k2 && !m(n4, this[N].settingsObject.baseUrl) ? s3.referrer = "client" : s3.referrer = n4;
          }
        }
        let I2;
        if (void 0 !== n3.referrerPolicy && (s3.referrerPolicy = n3.referrerPolicy), I2 = void 0 !== n3.mode ? n3.mode : o3, "navigate" === I2) throw S.errors.exception({ header: "Request constructor", message: "invalid request mode navigate." });
        if (null != I2 && (s3.mode = I2), void 0 !== n3.credentials && (s3.credentials = n3.credentials), void 0 !== n3.cache && (s3.cache = n3.cache), "only-if-cached" === s3.cache && "same-origin" !== s3.mode) throw new TypeError("'only-if-cached' can be set only with 'same-origin' mode");
        if (void 0 !== n3.redirect && (s3.redirect = n3.redirect), null != n3.integrity && (s3.integrity = String(n3.integrity)), void 0 !== n3.keepalive && (s3.keepalive = Boolean(n3.keepalive)), void 0 !== n3.method) {
          let e4 = n3.method;
          if (!d(e4)) throw new TypeError(`'${e4}' is not a valid HTTP method.`);
          if (E.has(e4.toUpperCase())) throw new TypeError(`'${e4}' HTTP method is unsupported.`);
          e4 = p[e4] ?? u(e4), s3.method = e4;
        }
        void 0 !== n3.signal && (T2 = n3.signal), this[v] = s3;
        const C2 = new AbortController();
        if (this[Q] = C2.signal, this[Q][N] = this[N], null != T2) {
          if (!T2 || "boolean" != typeof T2.aborted || "function" != typeof T2.addEventListener) throw new TypeError("Failed to construct 'Request': member signal is not of type AbortSignal.");
          if (T2.aborted) C2.abort(T2.reason);
          else {
            this[G] = C2;
            const e4 = new WeakRef(C2), n4 = function() {
              const n5 = e4.deref();
              void 0 !== n5 && n5.abort(this.reason);
            };
            try {
              ("function" == typeof O && O(T2) === P || L(T2, "abort").length >= P) && U(100, T2);
            } catch {
            }
            l.addAbortListener(T2, n4), Y.register(C2, { signal: T2, abort: n4 });
          }
        }
        if (this[B] = new r(M), this[B][D] = s3.headersList, this[B][R] = "request", this[B][N] = this[N], "no-cors" === I2) {
          if (!h.has(s3.method)) throw new TypeError(`'${s3.method} is unsupported in no-cors mode.`);
          this[B][R] = "request-no-cors";
        }
        if (_2) {
          const e4 = this[B][D], t3 = void 0 !== n3.headers ? n3.headers : new A(e4);
          if (e4.clear(), t3 instanceof A) {
            for (const [n4, a3] of t3) e4.append(n4, a3);
            e4.cookies = t3.cookies;
          } else i(this[B], t3);
        }
        const y2 = e3 instanceof J ? e3[v].body : null;
        if (!(null == n3.body && null == y2 || "GET" !== s3.method && "HEAD" !== s3.method)) throw new TypeError("Request with GET/HEAD method cannot have body.");
        let b2 = null;
        if (null != n3.body) {
          const [e4, t3] = a2(n3.body, s3.keepalive);
          b2 = e4, t3 && !this[B][D].contains("content-type") && this[B].append("content-type", t3);
        }
        const q = b2 ?? y2;
        if (null != q && null == q.source) {
          if (null != b2 && null == n3.duplex) throw new TypeError("RequestInit: duplex option is required when sending a body.");
          if ("same-origin" !== s3.mode && "cors" !== s3.mode) throw new TypeError('If request is made from ReadableStream, mode should be "same-origin" or "cors"');
          s3.useCORSPreflightFlag = true;
        }
        let H = q;
        if (null == b2 && null != y2) {
          if (l.isDisturbed(y2.stream) || y2.stream.locked) throw new TypeError("Cannot construct a Request with a Request object that has already been used.");
          x || (x = t2(3774).TransformStream);
          const e4 = new x();
          y2.stream.pipeThrough(e4), H = { source: y2.source, length: y2.length, stream: e4.readable };
        }
        this[v].body = H;
      }
      get method() {
        return S.brandCheck(this, J), this[v].method;
      }
      get url() {
        return S.brandCheck(this, J), b(this[v].url);
      }
      get headers() {
        return S.brandCheck(this, J), this[B];
      }
      get destination() {
        return S.brandCheck(this, J), this[v].destination;
      }
      get referrer() {
        return S.brandCheck(this, J), "no-referrer" === this[v].referrer ? "" : "client" === this[v].referrer ? "about:client" : this[v].referrer.toString();
      }
      get referrerPolicy() {
        return S.brandCheck(this, J), this[v].referrerPolicy;
      }
      get mode() {
        return S.brandCheck(this, J), this[v].mode;
      }
      get credentials() {
        return this[v].credentials;
      }
      get cache() {
        return S.brandCheck(this, J), this[v].cache;
      }
      get redirect() {
        return S.brandCheck(this, J), this[v].redirect;
      }
      get integrity() {
        return S.brandCheck(this, J), this[v].integrity;
      }
      get keepalive() {
        return S.brandCheck(this, J), this[v].keepalive;
      }
      get isReloadNavigation() {
        return S.brandCheck(this, J), this[v].reloadNavigation;
      }
      get isHistoryNavigation() {
        return S.brandCheck(this, J), this[v].historyNavigation;
      }
      get signal() {
        return S.brandCheck(this, J), this[Q];
      }
      get body() {
        return S.brandCheck(this, J), this[v].body ? this[v].body.stream : null;
      }
      get bodyUsed() {
        return S.brandCheck(this, J), !!this[v].body && l.isDisturbed(this[v].body.stream);
      }
      get duplex() {
        return S.brandCheck(this, J), "half";
      }
      clone() {
        if (S.brandCheck(this, J), this.bodyUsed || this.body?.locked) throw new TypeError("unusable");
        const e3 = (function(e4) {
          const n4 = V({ ...e4, body: null });
          null != e4.body && (n4.body = o2(e4.body));
          return n4;
        })(this[v]), n3 = new J(M);
        n3[v] = e3, n3[N] = this[N], n3[B] = new r(M), n3[B][D] = e3.headersList, n3[B][R] = this[B][R], n3[B][N] = this[B][N];
        const t3 = new AbortController();
        return this.signal.aborted ? t3.abort(this.signal.reason) : l.addAbortListener(this.signal, () => {
          t3.abort(this.signal.reason);
        }), n3[Q] = t3.signal, n3;
      }
    }
    function V(e3) {
      const n3 = { method: "GET", localURLsOnly: false, unsafeRequest: false, body: null, client: null, reservedClient: null, replacesClientId: "", window: "client", keepalive: false, serviceWorkers: "all", initiator: "", destination: "", priority: null, origin: "client", policyContainer: "client", referrer: "client", referrerPolicy: "", mode: "no-cors", useCORSPreflightFlag: false, credentials: "same-origin", useCredentials: false, cache: "default", redirect: "follow", integrity: "", cryptoGraphicsNonceMetadata: "", parserMetadata: "", reloadNavigation: false, historyNavigation: false, userActivation: false, taintedOrigin: false, redirectCount: 0, responseTainting: "basic", preventNoCacheCacheControlHeaderModification: false, done: false, timingAllowFailed: false, ...e3, headersList: e3.headersList ? new A(e3.headersList) : new A() };
      return n3.url = n3.urlList[0], n3;
    }
    s2(J), Object.defineProperties(J.prototype, { method: y, url: y, headers: y, redirect: y, clone: y, signal: y, duplex: y, destination: y, body: y, bodyUsed: y, isHistoryNavigation: y, isReloadNavigation: y, keepalive: y, integrity: y, cache: y, credentials: y, attribute: y, referrerPolicy: y, referrer: y, mode: y, [Symbol.toStringTag]: { value: "Request", configurable: true } }), S.converters.Request = S.interfaceConverter(J), S.converters.RequestInfo = function(e3) {
      return "string" == typeof e3 ? S.converters.USVString(e3) : e3 instanceof J ? S.converters.Request(e3) : S.converters.USVString(e3);
    }, S.converters.AbortSignal = S.interfaceConverter(AbortSignal), S.converters.RequestInit = S.dictionaryConverter([{ key: "method", converter: S.converters.ByteString }, { key: "headers", converter: S.converters.HeadersInit }, { key: "body", converter: S.nullableConverter(S.converters.BodyInit) }, { key: "referrer", converter: S.converters.USVString }, { key: "referrerPolicy", converter: S.converters.DOMString, allowedValues: T }, { key: "mode", converter: S.converters.DOMString, allowedValues: f }, { key: "credentials", converter: S.converters.DOMString, allowedValues: _ }, { key: "cache", converter: S.converters.DOMString, allowedValues: I }, { key: "redirect", converter: S.converters.DOMString, allowedValues: k }, { key: "integrity", converter: S.converters.DOMString }, { key: "keepalive", converter: S.converters.boolean }, { key: "signal", converter: S.nullableConverter((e3) => S.converters.AbortSignal(e3, { strict: false })) }, { key: "window", converter: S.converters.any }, { key: "duplex", converter: S.converters.DOMString, allowedValues: C }]), e2.exports = { Request: J, makeRequest: V };
  }