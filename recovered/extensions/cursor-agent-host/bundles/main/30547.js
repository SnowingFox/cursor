// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 30547 range:5046544..5059027
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
30547: (e, t, r) => {
    "use strict";
    const { extractBody: n, mixinBody: s, cloneBody: o } = r(29608), { Headers: i, fill: a, HeadersList: c } = r(72848), { FinalizationRegistry: l } = r(84191)(), u = r(83589), { isValidHTTPToken: d, sameOrigin: p, normalizeMethod: m, makePolicyContainer: h, normalizeMethodRecord: f } = r(98116), { forbiddenMethodsSet: g, corsSafeListedMethodsSet: y, referrerPolicy: w, requestRedirect: v, requestMode: _, requestCredentials: A, requestCache: S, requestDuplex: b } = r(22955), { kEnumerableProperty: E } = u, { kHeaders: I, kSignal: C, kState: k, kGuard: x, kRealm: T } = r(77271), { webidl: R } = r(18193), { getGlobalOrigin: B } = r(13967), { URLSerializer: P } = r(64387), { kHeadersList: J, kConstruct: M } = r(15532), q = r(42613), { getMaxListeners: D, setMaxListeners: O, getEventListeners: N, defaultMaxListeners: F } = r(24434);
    let U = globalThis.TransformStream;
    const L = /* @__PURE__ */ Symbol("abortController"), $ = new l(({ signal: e2, abort: t2 }) => {
      e2.removeEventListener("abort", t2);
    });
    class Q {
      constructor(e2, t2 = {}) {
        if (e2 === M) return;
        R.argumentLengthCheck(arguments, 1, { header: "Request constructor" }), e2 = R.converters.RequestInfo(e2), t2 = R.converters.RequestInit(t2), this[T] = { settingsObject: { baseUrl: B(), get origin() {
          return this.baseUrl?.origin;
        }, policyContainer: h() } };
        let s2 = null, o2 = null;
        const l2 = this[T].settingsObject.baseUrl;
        let w2 = null;
        if ("string" == typeof e2) {
          let t3;
          try {
            t3 = new URL(e2, l2);
          } catch (t4) {
            throw new TypeError("Failed to parse URL from " + e2, { cause: t4 });
          }
          if (t3.username || t3.password) throw new TypeError("Request cannot be constructed from a URL that includes credentials: " + e2);
          s2 = j({ urlList: [t3] }), o2 = "cors";
        } else q(e2 instanceof Q), s2 = e2[k], w2 = e2[C];
        const v2 = this[T].settingsObject.origin;
        let _2 = "client";
        if ("EnvironmentSettingsObject" === s2.window?.constructor?.name && p(s2.window, v2) && (_2 = s2.window), null != t2.window) throw new TypeError(`'window' option '${_2}' must be null`);
        "window" in t2 && (_2 = "no-window"), s2 = j({ method: s2.method, headersList: s2.headersList, unsafeRequest: s2.unsafeRequest, client: this[T].settingsObject, window: _2, priority: s2.priority, origin: s2.origin, referrer: s2.referrer, referrerPolicy: s2.referrerPolicy, mode: s2.mode, credentials: s2.credentials, cache: s2.cache, redirect: s2.redirect, integrity: s2.integrity, keepalive: s2.keepalive, reloadNavigation: s2.reloadNavigation, historyNavigation: s2.historyNavigation, urlList: [...s2.urlList] });
        const A2 = 0 !== Object.keys(t2).length;
        if (A2 && ("navigate" === s2.mode && (s2.mode = "same-origin"), s2.reloadNavigation = false, s2.historyNavigation = false, s2.origin = "client", s2.referrer = "client", s2.referrerPolicy = "", s2.url = s2.urlList[s2.urlList.length - 1], s2.urlList = [s2.url]), void 0 !== t2.referrer) {
          const e3 = t2.referrer;
          if ("" === e3) s2.referrer = "no-referrer";
          else {
            let t3;
            try {
              t3 = new URL(e3, l2);
            } catch (t4) {
              throw new TypeError(`Referrer "${e3}" is not a valid URL.`, { cause: t4 });
            }
            "about:" === t3.protocol && "client" === t3.hostname || v2 && !p(t3, this[T].settingsObject.baseUrl) ? s2.referrer = "client" : s2.referrer = t3;
          }
        }
        let S2;
        if (void 0 !== t2.referrerPolicy && (s2.referrerPolicy = t2.referrerPolicy), S2 = void 0 !== t2.mode ? t2.mode : o2, "navigate" === S2) throw R.errors.exception({ header: "Request constructor", message: "invalid request mode navigate." });
        if (null != S2 && (s2.mode = S2), void 0 !== t2.credentials && (s2.credentials = t2.credentials), void 0 !== t2.cache && (s2.cache = t2.cache), "only-if-cached" === s2.cache && "same-origin" !== s2.mode) throw new TypeError("'only-if-cached' can be set only with 'same-origin' mode");
        if (void 0 !== t2.redirect && (s2.redirect = t2.redirect), null != t2.integrity && (s2.integrity = String(t2.integrity)), void 0 !== t2.keepalive && (s2.keepalive = Boolean(t2.keepalive)), void 0 !== t2.method) {
          let e3 = t2.method;
          if (!d(e3)) throw new TypeError(`'${e3}' is not a valid HTTP method.`);
          if (g.has(e3.toUpperCase())) throw new TypeError(`'${e3}' HTTP method is unsupported.`);
          e3 = f[e3] ?? m(e3), s2.method = e3;
        }
        void 0 !== t2.signal && (w2 = t2.signal), this[k] = s2;
        const b2 = new AbortController();
        if (this[C] = b2.signal, this[C][T] = this[T], null != w2) {
          if (!w2 || "boolean" != typeof w2.aborted || "function" != typeof w2.addEventListener) throw new TypeError("Failed to construct 'Request': member signal is not of type AbortSignal.");
          if (w2.aborted) b2.abort(w2.reason);
          else {
            this[L] = b2;
            const e3 = new WeakRef(b2), t3 = function() {
              const t4 = e3.deref();
              void 0 !== t4 && t4.abort(this.reason);
            };
            try {
              ("function" == typeof D && D(w2) === F || N(w2, "abort").length >= F) && O(100, w2);
            } catch {
            }
            u.addAbortListener(w2, t3), $.register(b2, { signal: w2, abort: t3 });
          }
        }
        if (this[I] = new i(M), this[I][J] = s2.headersList, this[I][x] = "request", this[I][T] = this[T], "no-cors" === S2) {
          if (!y.has(s2.method)) throw new TypeError(`'${s2.method} is unsupported in no-cors mode.`);
          this[I][x] = "request-no-cors";
        }
        if (A2) {
          const e3 = this[I][J], r2 = void 0 !== t2.headers ? t2.headers : new c(e3);
          if (e3.clear(), r2 instanceof c) {
            for (const [t3, n2] of r2) e3.append(t3, n2);
            e3.cookies = r2.cookies;
          } else a(this[I], r2);
        }
        const E2 = e2 instanceof Q ? e2[k].body : null;
        if (!(null == t2.body && null == E2 || "GET" !== s2.method && "HEAD" !== s2.method)) throw new TypeError("Request with GET/HEAD method cannot have body.");
        let P2 = null;
        if (null != t2.body) {
          const [e3, r2] = n(t2.body, s2.keepalive);
          P2 = e3, r2 && !this[I][J].contains("content-type") && this[I].append("content-type", r2);
        }
        const G = P2 ?? E2;
        if (null != G && null == G.source) {
          if (null != P2 && null == t2.duplex) throw new TypeError("RequestInit: duplex option is required when sending a body.");
          if ("same-origin" !== s2.mode && "cors" !== s2.mode) throw new TypeError('If request is made from ReadableStream, mode should be "same-origin" or "cors"');
          s2.useCORSPreflightFlag = true;
        }
        let H = G;
        if (null == P2 && null != E2) {
          if (u.isDisturbed(E2.stream) || E2.stream.locked) throw new TypeError("Cannot construct a Request with a Request object that has already been used.");
          U || (U = r(63774).TransformStream);
          const e3 = new U();
          E2.stream.pipeThrough(e3), H = { source: E2.source, length: E2.length, stream: e3.readable };
        }
        this[k].body = H;
      }
      get method() {
        return R.brandCheck(this, Q), this[k].method;
      }
      get url() {
        return R.brandCheck(this, Q), P(this[k].url);
      }
      get headers() {
        return R.brandCheck(this, Q), this[I];
      }
      get destination() {
        return R.brandCheck(this, Q), this[k].destination;
      }
      get referrer() {
        return R.brandCheck(this, Q), "no-referrer" === this[k].referrer ? "" : "client" === this[k].referrer ? "about:client" : this[k].referrer.toString();
      }
      get referrerPolicy() {
        return R.brandCheck(this, Q), this[k].referrerPolicy;
      }
      get mode() {
        return R.brandCheck(this, Q), this[k].mode;
      }
      get credentials() {
        return this[k].credentials;
      }
      get cache() {
        return R.brandCheck(this, Q), this[k].cache;
      }
      get redirect() {
        return R.brandCheck(this, Q), this[k].redirect;
      }
      get integrity() {
        return R.brandCheck(this, Q), this[k].integrity;
      }
      get keepalive() {
        return R.brandCheck(this, Q), this[k].keepalive;
      }
      get isReloadNavigation() {
        return R.brandCheck(this, Q), this[k].reloadNavigation;
      }
      get isHistoryNavigation() {
        return R.brandCheck(this, Q), this[k].historyNavigation;
      }
      get signal() {
        return R.brandCheck(this, Q), this[C];
      }
      get body() {
        return R.brandCheck(this, Q), this[k].body ? this[k].body.stream : null;
      }
      get bodyUsed() {
        return R.brandCheck(this, Q), !!this[k].body && u.isDisturbed(this[k].body.stream);
      }
      get duplex() {
        return R.brandCheck(this, Q), "half";
      }
      clone() {
        if (R.brandCheck(this, Q), this.bodyUsed || this.body?.locked) throw new TypeError("unusable");
        const e2 = (function(e3) {
          const t3 = j({ ...e3, body: null });
          null != e3.body && (t3.body = o(e3.body));
          return t3;
        })(this[k]), t2 = new Q(M);
        t2[k] = e2, t2[T] = this[T], t2[I] = new i(M), t2[I][J] = e2.headersList, t2[I][x] = this[I][x], t2[I][T] = this[I][T];
        const r2 = new AbortController();
        return this.signal.aborted ? r2.abort(this.signal.reason) : u.addAbortListener(this.signal, () => {
          r2.abort(this.signal.reason);
        }), t2[C] = r2.signal, t2;
      }
    }
    function j(e2) {
      const t2 = { method: "GET", localURLsOnly: false, unsafeRequest: false, body: null, client: null, reservedClient: null, replacesClientId: "", window: "client", keepalive: false, serviceWorkers: "all", initiator: "", destination: "", priority: null, origin: "client", policyContainer: "client", referrer: "client", referrerPolicy: "", mode: "no-cors", useCORSPreflightFlag: false, credentials: "same-origin", useCredentials: false, cache: "default", redirect: "follow", integrity: "", cryptoGraphicsNonceMetadata: "", parserMetadata: "", reloadNavigation: false, historyNavigation: false, userActivation: false, taintedOrigin: false, redirectCount: 0, responseTainting: "basic", preventNoCacheCacheControlHeaderModification: false, done: false, timingAllowFailed: false, ...e2, headersList: e2.headersList ? new c(e2.headersList) : new c() };
      return t2.url = t2.urlList[0], t2;
    }
    s(Q), Object.defineProperties(Q.prototype, { method: E, url: E, headers: E, redirect: E, clone: E, signal: E, duplex: E, destination: E, body: E, bodyUsed: E, isHistoryNavigation: E, isReloadNavigation: E, keepalive: E, integrity: E, cache: E, credentials: E, attribute: E, referrerPolicy: E, referrer: E, mode: E, [Symbol.toStringTag]: { value: "Request", configurable: true } }), R.converters.Request = R.interfaceConverter(Q), R.converters.RequestInfo = function(e2) {
      return "string" == typeof e2 ? R.converters.USVString(e2) : e2 instanceof Q ? R.converters.Request(e2) : R.converters.USVString(e2);
    }, R.converters.AbortSignal = R.interfaceConverter(AbortSignal), R.converters.RequestInit = R.dictionaryConverter([{ key: "method", converter: R.converters.ByteString }, { key: "headers", converter: R.converters.HeadersInit }, { key: "body", converter: R.nullableConverter(R.converters.BodyInit) }, { key: "referrer", converter: R.converters.USVString }, { key: "referrerPolicy", converter: R.converters.DOMString, allowedValues: w }, { key: "mode", converter: R.converters.DOMString, allowedValues: _ }, { key: "credentials", converter: R.converters.DOMString, allowedValues: A }, { key: "cache", converter: R.converters.DOMString, allowedValues: S }, { key: "redirect", converter: R.converters.DOMString, allowedValues: v }, { key: "integrity", converter: R.converters.DOMString }, { key: "keepalive", converter: R.converters.boolean }, { key: "signal", converter: R.nullableConverter((e2) => R.converters.AbortSignal(e2, { strict: false })) }, { key: "window", converter: R.converters.any }, { key: "duplex", converter: R.converters.DOMString, allowedValues: b }]), e.exports = { Request: Q, makeRequest: j };
  }