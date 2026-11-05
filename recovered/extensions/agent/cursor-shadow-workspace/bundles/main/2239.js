// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 2239 range:193780..206272
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2239: (e2, A2, t2) => {
    "use strict";
    const { extractBody: n2, mixinBody: r2, cloneBody: o2 } = t2(7052), { Headers: s, fill: a, HeadersList: i } = t2(2932), { FinalizationRegistry: c } = t2(1531)(), l = t2(9361), { isValidHTTPToken: g, sameOrigin: E, normalizeMethod: u, makePolicyContainer: d, normalizeMethodRecord: I } = t2(5728), { forbiddenMethodsSet: h, corsSafeListedMethodsSet: Q, referrerPolicy: m, requestRedirect: C, requestMode: B, requestCredentials: p, requestCache: f, requestDuplex: y } = t2(6687), { kEnumerableProperty: T } = l, { kHeaders: k, kSignal: w, kState: N, kGuard: D, kRealm: R } = t2(5899), { webidl: S } = t2(8005), { getGlobalOrigin: b } = t2(9523), { URLSerializer: F } = t2(3631), { kHeadersList: _, kConstruct: v } = t2(8832), L = t2(2613), { getMaxListeners: U, setMaxListeners: M, getEventListeners: O, defaultMaxListeners: J } = t2(4434);
    let Y = globalThis.TransformStream;
    const P = /* @__PURE__ */ Symbol("abortController"), G = new c(({ signal: e3, abort: A3 }) => {
      e3.removeEventListener("abort", A3);
    });
    class V {
      constructor(e3, A3 = {}) {
        if (e3 === v) return;
        S.argumentLengthCheck(arguments, 1, { header: "Request constructor" }), e3 = S.converters.RequestInfo(e3), A3 = S.converters.RequestInit(A3), this[R] = { settingsObject: { baseUrl: b(), get origin() {
          return this.baseUrl?.origin;
        }, policyContainer: d() } };
        let r3 = null, o3 = null;
        const c2 = this[R].settingsObject.baseUrl;
        let m2 = null;
        if ("string" == typeof e3) {
          let A4;
          try {
            A4 = new URL(e3, c2);
          } catch (A5) {
            throw new TypeError("Failed to parse URL from " + e3, { cause: A5 });
          }
          if (A4.username || A4.password) throw new TypeError("Request cannot be constructed from a URL that includes credentials: " + e3);
          r3 = x({ urlList: [A4] }), o3 = "cors";
        } else L(e3 instanceof V), r3 = e3[N], m2 = e3[w];
        const C2 = this[R].settingsObject.origin;
        let B2 = "client";
        if ("EnvironmentSettingsObject" === r3.window?.constructor?.name && E(r3.window, C2) && (B2 = r3.window), null != A3.window) throw new TypeError(`'window' option '${B2}' must be null`);
        "window" in A3 && (B2 = "no-window"), r3 = x({ method: r3.method, headersList: r3.headersList, unsafeRequest: r3.unsafeRequest, client: this[R].settingsObject, window: B2, priority: r3.priority, origin: r3.origin, referrer: r3.referrer, referrerPolicy: r3.referrerPolicy, mode: r3.mode, credentials: r3.credentials, cache: r3.cache, redirect: r3.redirect, integrity: r3.integrity, keepalive: r3.keepalive, reloadNavigation: r3.reloadNavigation, historyNavigation: r3.historyNavigation, urlList: [...r3.urlList] });
        const p2 = 0 !== Object.keys(A3).length;
        if (p2 && ("navigate" === r3.mode && (r3.mode = "same-origin"), r3.reloadNavigation = false, r3.historyNavigation = false, r3.origin = "client", r3.referrer = "client", r3.referrerPolicy = "", r3.url = r3.urlList[r3.urlList.length - 1], r3.urlList = [r3.url]), void 0 !== A3.referrer) {
          const e4 = A3.referrer;
          if ("" === e4) r3.referrer = "no-referrer";
          else {
            let A4;
            try {
              A4 = new URL(e4, c2);
            } catch (A5) {
              throw new TypeError(`Referrer "${e4}" is not a valid URL.`, { cause: A5 });
            }
            "about:" === A4.protocol && "client" === A4.hostname || C2 && !E(A4, this[R].settingsObject.baseUrl) ? r3.referrer = "client" : r3.referrer = A4;
          }
        }
        let f2;
        if (void 0 !== A3.referrerPolicy && (r3.referrerPolicy = A3.referrerPolicy), f2 = void 0 !== A3.mode ? A3.mode : o3, "navigate" === f2) throw S.errors.exception({ header: "Request constructor", message: "invalid request mode navigate." });
        if (null != f2 && (r3.mode = f2), void 0 !== A3.credentials && (r3.credentials = A3.credentials), void 0 !== A3.cache && (r3.cache = A3.cache), "only-if-cached" === r3.cache && "same-origin" !== r3.mode) throw new TypeError("'only-if-cached' can be set only with 'same-origin' mode");
        if (void 0 !== A3.redirect && (r3.redirect = A3.redirect), null != A3.integrity && (r3.integrity = String(A3.integrity)), void 0 !== A3.keepalive && (r3.keepalive = Boolean(A3.keepalive)), void 0 !== A3.method) {
          let e4 = A3.method;
          if (!g(e4)) throw new TypeError(`'${e4}' is not a valid HTTP method.`);
          if (h.has(e4.toUpperCase())) throw new TypeError(`'${e4}' HTTP method is unsupported.`);
          e4 = I[e4] ?? u(e4), r3.method = e4;
        }
        void 0 !== A3.signal && (m2 = A3.signal), this[N] = r3;
        const y2 = new AbortController();
        if (this[w] = y2.signal, this[w][R] = this[R], null != m2) {
          if (!m2 || "boolean" != typeof m2.aborted || "function" != typeof m2.addEventListener) throw new TypeError("Failed to construct 'Request': member signal is not of type AbortSignal.");
          if (m2.aborted) y2.abort(m2.reason);
          else {
            this[P] = y2;
            const e4 = new WeakRef(y2), A4 = function() {
              const A5 = e4.deref();
              void 0 !== A5 && A5.abort(this.reason);
            };
            try {
              ("function" == typeof U && U(m2) === J || O(m2, "abort").length >= J) && M(100, m2);
            } catch {
            }
            l.addAbortListener(m2, A4), G.register(y2, { signal: m2, abort: A4 });
          }
        }
        if (this[k] = new s(v), this[k][_] = r3.headersList, this[k][D] = "request", this[k][R] = this[R], "no-cors" === f2) {
          if (!Q.has(r3.method)) throw new TypeError(`'${r3.method} is unsupported in no-cors mode.`);
          this[k][D] = "request-no-cors";
        }
        if (p2) {
          const e4 = this[k][_], t3 = void 0 !== A3.headers ? A3.headers : new i(e4);
          if (e4.clear(), t3 instanceof i) {
            for (const [A4, n3] of t3) e4.append(A4, n3);
            e4.cookies = t3.cookies;
          } else a(this[k], t3);
        }
        const T2 = e3 instanceof V ? e3[N].body : null;
        if (!(null == A3.body && null == T2 || "GET" !== r3.method && "HEAD" !== r3.method)) throw new TypeError("Request with GET/HEAD method cannot have body.");
        let F2 = null;
        if (null != A3.body) {
          const [e4, t3] = n2(A3.body, r3.keepalive);
          F2 = e4, t3 && !this[k][_].contains("content-type") && this[k].append("content-type", t3);
        }
        const H = F2 ?? T2;
        if (null != H && null == H.source) {
          if (null != F2 && null == A3.duplex) throw new TypeError("RequestInit: duplex option is required when sending a body.");
          if ("same-origin" !== r3.mode && "cors" !== r3.mode) throw new TypeError('If request is made from ReadableStream, mode should be "same-origin" or "cors"');
          r3.useCORSPreflightFlag = true;
        }
        let q = H;
        if (null == F2 && null != T2) {
          if (l.isDisturbed(T2.stream) || T2.stream.locked) throw new TypeError("Cannot construct a Request with a Request object that has already been used.");
          Y || (Y = t2(3774).TransformStream);
          const e4 = new Y();
          T2.stream.pipeThrough(e4), q = { source: T2.source, length: T2.length, stream: e4.readable };
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
        return S.brandCheck(this, V), this[w];
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
          const A4 = x({ ...e4, body: null });
          null != e4.body && (A4.body = o2(e4.body));
          return A4;
        })(this[N]), A3 = new V(v);
        A3[N] = e3, A3[R] = this[R], A3[k] = new s(v), A3[k][_] = e3.headersList, A3[k][D] = this[k][D], A3[k][R] = this[k][R];
        const t3 = new AbortController();
        return this.signal.aborted ? t3.abort(this.signal.reason) : l.addAbortListener(this.signal, () => {
          t3.abort(this.signal.reason);
        }), A3[w] = t3.signal, A3;
      }
    }
    function x(e3) {
      const A3 = { method: "GET", localURLsOnly: false, unsafeRequest: false, body: null, client: null, reservedClient: null, replacesClientId: "", window: "client", keepalive: false, serviceWorkers: "all", initiator: "", destination: "", priority: null, origin: "client", policyContainer: "client", referrer: "client", referrerPolicy: "", mode: "no-cors", useCORSPreflightFlag: false, credentials: "same-origin", useCredentials: false, cache: "default", redirect: "follow", integrity: "", cryptoGraphicsNonceMetadata: "", parserMetadata: "", reloadNavigation: false, historyNavigation: false, userActivation: false, taintedOrigin: false, redirectCount: 0, responseTainting: "basic", preventNoCacheCacheControlHeaderModification: false, done: false, timingAllowFailed: false, ...e3, headersList: e3.headersList ? new i(e3.headersList) : new i() };
      return A3.url = A3.urlList[0], A3;
    }
    r2(V), Object.defineProperties(V.prototype, { method: T, url: T, headers: T, redirect: T, clone: T, signal: T, duplex: T, destination: T, body: T, bodyUsed: T, isHistoryNavigation: T, isReloadNavigation: T, keepalive: T, integrity: T, cache: T, credentials: T, attribute: T, referrerPolicy: T, referrer: T, mode: T, [Symbol.toStringTag]: { value: "Request", configurable: true } }), S.converters.Request = S.interfaceConverter(V), S.converters.RequestInfo = function(e3) {
      return "string" == typeof e3 ? S.converters.USVString(e3) : e3 instanceof V ? S.converters.Request(e3) : S.converters.USVString(e3);
    }, S.converters.AbortSignal = S.interfaceConverter(AbortSignal), S.converters.RequestInit = S.dictionaryConverter([{ key: "method", converter: S.converters.ByteString }, { key: "headers", converter: S.converters.HeadersInit }, { key: "body", converter: S.nullableConverter(S.converters.BodyInit) }, { key: "referrer", converter: S.converters.USVString }, { key: "referrerPolicy", converter: S.converters.DOMString, allowedValues: m }, { key: "mode", converter: S.converters.DOMString, allowedValues: B }, { key: "credentials", converter: S.converters.DOMString, allowedValues: p }, { key: "cache", converter: S.converters.DOMString, allowedValues: f }, { key: "redirect", converter: S.converters.DOMString, allowedValues: C }, { key: "integrity", converter: S.converters.DOMString }, { key: "keepalive", converter: S.converters.boolean }, { key: "signal", converter: S.nullableConverter((e3) => S.converters.AbortSignal(e3, { strict: false })) }, { key: "window", converter: S.converters.any }, { key: "duplex", converter: S.converters.DOMString, allowedValues: y }]), e2.exports = { Request: V, makeRequest: x };
  }