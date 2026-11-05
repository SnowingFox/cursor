// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 2239 range:200135..212627
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2239: (e2, t2, A2) => {
    "use strict";
    const { extractBody: n2, mixinBody: r2, cloneBody: o2 } = A2(7052), { Headers: s, fill: i, HeadersList: a } = A2(2932), { FinalizationRegistry: c } = A2(1531)(), l = A2(9361), { isValidHTTPToken: u, sameOrigin: g, normalizeMethod: E, makePolicyContainer: h, normalizeMethodRecord: d } = A2(5728), { forbiddenMethodsSet: I, corsSafeListedMethodsSet: B, referrerPolicy: Q, requestRedirect: f, requestMode: C, requestCredentials: p, requestCache: m, requestDuplex: y } = A2(6687), { kEnumerableProperty: w } = l, { kHeaders: k, kSignal: b, kState: N, kGuard: T, kRealm: D } = A2(5899), { webidl: S } = A2(8005), { getGlobalOrigin: R } = A2(9523), { URLSerializer: F } = A2(3631), { kHeadersList: v, kConstruct: M } = A2(8832), U = A2(2613), { getMaxListeners: L, setMaxListeners: _, getEventListeners: J, defaultMaxListeners: O } = A2(4434);
    let Y = globalThis.TransformStream;
    const G = /* @__PURE__ */ Symbol("abortController"), P = new c(({ signal: e3, abort: t3 }) => {
      e3.removeEventListener("abort", t3);
    });
    class V {
      constructor(e3, t3 = {}) {
        if (e3 === M) return;
        S.argumentLengthCheck(arguments, 1, { header: "Request constructor" }), e3 = S.converters.RequestInfo(e3), t3 = S.converters.RequestInit(t3), this[D] = { settingsObject: { baseUrl: R(), get origin() {
          return this.baseUrl?.origin;
        }, policyContainer: h() } };
        let r3 = null, o3 = null;
        const c2 = this[D].settingsObject.baseUrl;
        let Q2 = null;
        if ("string" == typeof e3) {
          let t4;
          try {
            t4 = new URL(e3, c2);
          } catch (t5) {
            throw new TypeError("Failed to parse URL from " + e3, { cause: t5 });
          }
          if (t4.username || t4.password) throw new TypeError("Request cannot be constructed from a URL that includes credentials: " + e3);
          r3 = x({ urlList: [t4] }), o3 = "cors";
        } else U(e3 instanceof V), r3 = e3[N], Q2 = e3[b];
        const f2 = this[D].settingsObject.origin;
        let C2 = "client";
        if ("EnvironmentSettingsObject" === r3.window?.constructor?.name && g(r3.window, f2) && (C2 = r3.window), null != t3.window) throw new TypeError(`'window' option '${C2}' must be null`);
        "window" in t3 && (C2 = "no-window"), r3 = x({ method: r3.method, headersList: r3.headersList, unsafeRequest: r3.unsafeRequest, client: this[D].settingsObject, window: C2, priority: r3.priority, origin: r3.origin, referrer: r3.referrer, referrerPolicy: r3.referrerPolicy, mode: r3.mode, credentials: r3.credentials, cache: r3.cache, redirect: r3.redirect, integrity: r3.integrity, keepalive: r3.keepalive, reloadNavigation: r3.reloadNavigation, historyNavigation: r3.historyNavigation, urlList: [...r3.urlList] });
        const p2 = 0 !== Object.keys(t3).length;
        if (p2 && ("navigate" === r3.mode && (r3.mode = "same-origin"), r3.reloadNavigation = false, r3.historyNavigation = false, r3.origin = "client", r3.referrer = "client", r3.referrerPolicy = "", r3.url = r3.urlList[r3.urlList.length - 1], r3.urlList = [r3.url]), void 0 !== t3.referrer) {
          const e4 = t3.referrer;
          if ("" === e4) r3.referrer = "no-referrer";
          else {
            let t4;
            try {
              t4 = new URL(e4, c2);
            } catch (t5) {
              throw new TypeError(`Referrer "${e4}" is not a valid URL.`, { cause: t5 });
            }
            "about:" === t4.protocol && "client" === t4.hostname || f2 && !g(t4, this[D].settingsObject.baseUrl) ? r3.referrer = "client" : r3.referrer = t4;
          }
        }
        let m2;
        if (void 0 !== t3.referrerPolicy && (r3.referrerPolicy = t3.referrerPolicy), m2 = void 0 !== t3.mode ? t3.mode : o3, "navigate" === m2) throw S.errors.exception({ header: "Request constructor", message: "invalid request mode navigate." });
        if (null != m2 && (r3.mode = m2), void 0 !== t3.credentials && (r3.credentials = t3.credentials), void 0 !== t3.cache && (r3.cache = t3.cache), "only-if-cached" === r3.cache && "same-origin" !== r3.mode) throw new TypeError("'only-if-cached' can be set only with 'same-origin' mode");
        if (void 0 !== t3.redirect && (r3.redirect = t3.redirect), null != t3.integrity && (r3.integrity = String(t3.integrity)), void 0 !== t3.keepalive && (r3.keepalive = Boolean(t3.keepalive)), void 0 !== t3.method) {
          let e4 = t3.method;
          if (!u(e4)) throw new TypeError(`'${e4}' is not a valid HTTP method.`);
          if (I.has(e4.toUpperCase())) throw new TypeError(`'${e4}' HTTP method is unsupported.`);
          e4 = d[e4] ?? E(e4), r3.method = e4;
        }
        void 0 !== t3.signal && (Q2 = t3.signal), this[N] = r3;
        const y2 = new AbortController();
        if (this[b] = y2.signal, this[b][D] = this[D], null != Q2) {
          if (!Q2 || "boolean" != typeof Q2.aborted || "function" != typeof Q2.addEventListener) throw new TypeError("Failed to construct 'Request': member signal is not of type AbortSignal.");
          if (Q2.aborted) y2.abort(Q2.reason);
          else {
            this[G] = y2;
            const e4 = new WeakRef(y2), t4 = function() {
              const t5 = e4.deref();
              void 0 !== t5 && t5.abort(this.reason);
            };
            try {
              ("function" == typeof L && L(Q2) === O || J(Q2, "abort").length >= O) && _(100, Q2);
            } catch {
            }
            l.addAbortListener(Q2, t4), P.register(y2, { signal: Q2, abort: t4 });
          }
        }
        if (this[k] = new s(M), this[k][v] = r3.headersList, this[k][T] = "request", this[k][D] = this[D], "no-cors" === m2) {
          if (!B.has(r3.method)) throw new TypeError(`'${r3.method} is unsupported in no-cors mode.`);
          this[k][T] = "request-no-cors";
        }
        if (p2) {
          const e4 = this[k][v], A3 = void 0 !== t3.headers ? t3.headers : new a(e4);
          if (e4.clear(), A3 instanceof a) {
            for (const [t4, n3] of A3) e4.append(t4, n3);
            e4.cookies = A3.cookies;
          } else i(this[k], A3);
        }
        const w2 = e3 instanceof V ? e3[N].body : null;
        if (!(null == t3.body && null == w2 || "GET" !== r3.method && "HEAD" !== r3.method)) throw new TypeError("Request with GET/HEAD method cannot have body.");
        let F2 = null;
        if (null != t3.body) {
          const [e4, A3] = n2(t3.body, r3.keepalive);
          F2 = e4, A3 && !this[k][v].contains("content-type") && this[k].append("content-type", A3);
        }
        const H = F2 ?? w2;
        if (null != H && null == H.source) {
          if (null != F2 && null == t3.duplex) throw new TypeError("RequestInit: duplex option is required when sending a body.");
          if ("same-origin" !== r3.mode && "cors" !== r3.mode) throw new TypeError('If request is made from ReadableStream, mode should be "same-origin" or "cors"');
          r3.useCORSPreflightFlag = true;
        }
        let q = H;
        if (null == F2 && null != w2) {
          if (l.isDisturbed(w2.stream) || w2.stream.locked) throw new TypeError("Cannot construct a Request with a Request object that has already been used.");
          Y || (Y = A2(3774).TransformStream);
          const e4 = new Y();
          w2.stream.pipeThrough(e4), q = { source: w2.source, length: w2.length, stream: e4.readable };
        }
        this[N].body = q;
      }
      get method() {
        return S.brandCheck(this, V), this[N].method;
      }
      get url() {
        return S.brandCheck(this, V), F(this[N].url);
      }
      get headers() {
        return S.brandCheck(this, V), this[k];
      }
      get destination() {
        return S.brandCheck(this, V), this[N].destination;
      }
      get referrer() {
        return S.brandCheck(this, V), "no-referrer" === this[N].referrer ? "" : "client" === this[N].referrer ? "about:client" : this[N].referrer.toString();
      }
      get referrerPolicy() {
        return S.brandCheck(this, V), this[N].referrerPolicy;
      }
      get mode() {
        return S.brandCheck(this, V), this[N].mode;
      }
      get credentials() {
        return this[N].credentials;
      }
      get cache() {
        return S.brandCheck(this, V), this[N].cache;
      }
      get redirect() {
        return S.brandCheck(this, V), this[N].redirect;
      }
      get integrity() {
        return S.brandCheck(this, V), this[N].integrity;
      }
      get keepalive() {
        return S.brandCheck(this, V), this[N].keepalive;
      }
      get isReloadNavigation() {
        return S.brandCheck(this, V), this[N].reloadNavigation;
      }
      get isHistoryNavigation() {
        return S.brandCheck(this, V), this[N].historyNavigation;
      }
      get signal() {
        return S.brandCheck(this, V), this[b];
      }
      get body() {
        return S.brandCheck(this, V), this[N].body ? this[N].body.stream : null;
      }
      get bodyUsed() {
        return S.brandCheck(this, V), !!this[N].body && l.isDisturbed(this[N].body.stream);
      }
      get duplex() {
        return S.brandCheck(this, V), "half";
      }
      clone() {
        if (S.brandCheck(this, V), this.bodyUsed || this.body?.locked) throw new TypeError("unusable");
        const e3 = (function(e4) {
          const t4 = x({ ...e4, body: null });
          null != e4.body && (t4.body = o2(e4.body));
          return t4;
        })(this[N]), t3 = new V(M);
        t3[N] = e3, t3[D] = this[D], t3[k] = new s(M), t3[k][v] = e3.headersList, t3[k][T] = this[k][T], t3[k][D] = this[k][D];
        const A3 = new AbortController();
        return this.signal.aborted ? A3.abort(this.signal.reason) : l.addAbortListener(this.signal, () => {
          A3.abort(this.signal.reason);
        }), t3[b] = A3.signal, t3;
      }
    }
    function x(e3) {
      const t3 = { method: "GET", localURLsOnly: false, unsafeRequest: false, body: null, client: null, reservedClient: null, replacesClientId: "", window: "client", keepalive: false, serviceWorkers: "all", initiator: "", destination: "", priority: null, origin: "client", policyContainer: "client", referrer: "client", referrerPolicy: "", mode: "no-cors", useCORSPreflightFlag: false, credentials: "same-origin", useCredentials: false, cache: "default", redirect: "follow", integrity: "", cryptoGraphicsNonceMetadata: "", parserMetadata: "", reloadNavigation: false, historyNavigation: false, userActivation: false, taintedOrigin: false, redirectCount: 0, responseTainting: "basic", preventNoCacheCacheControlHeaderModification: false, done: false, timingAllowFailed: false, ...e3, headersList: e3.headersList ? new a(e3.headersList) : new a() };
      return t3.url = t3.urlList[0], t3;
    }
    r2(V), Object.defineProperties(V.prototype, { method: w, url: w, headers: w, redirect: w, clone: w, signal: w, duplex: w, destination: w, body: w, bodyUsed: w, isHistoryNavigation: w, isReloadNavigation: w, keepalive: w, integrity: w, cache: w, credentials: w, attribute: w, referrerPolicy: w, referrer: w, mode: w, [Symbol.toStringTag]: { value: "Request", configurable: true } }), S.converters.Request = S.interfaceConverter(V), S.converters.RequestInfo = function(e3) {
      return "string" == typeof e3 ? S.converters.USVString(e3) : e3 instanceof V ? S.converters.Request(e3) : S.converters.USVString(e3);
    }, S.converters.AbortSignal = S.interfaceConverter(AbortSignal), S.converters.RequestInit = S.dictionaryConverter([{ key: "method", converter: S.converters.ByteString }, { key: "headers", converter: S.converters.HeadersInit }, { key: "body", converter: S.nullableConverter(S.converters.BodyInit) }, { key: "referrer", converter: S.converters.USVString }, { key: "referrerPolicy", converter: S.converters.DOMString, allowedValues: Q }, { key: "mode", converter: S.converters.DOMString, allowedValues: C }, { key: "credentials", converter: S.converters.DOMString, allowedValues: p }, { key: "cache", converter: S.converters.DOMString, allowedValues: m }, { key: "redirect", converter: S.converters.DOMString, allowedValues: f }, { key: "integrity", converter: S.converters.DOMString }, { key: "keepalive", converter: S.converters.boolean }, { key: "signal", converter: S.nullableConverter((e3) => S.converters.AbortSignal(e3, { strict: false })) }, { key: "window", converter: S.converters.any }, { key: "duplex", converter: S.converters.DOMString, allowedValues: y }]), e2.exports = { Request: V, makeRequest: x };
  }