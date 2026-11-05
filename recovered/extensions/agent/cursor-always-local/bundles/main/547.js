// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 547 range:330017..342511
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
547: (t2, e2, r2) => {
    "use strict";
    const { extractBody: n2, mixinBody: s2, cloneBody: i2 } = r2(9608), { Headers: o2, fill: a, HeadersList: u } = r2(2848), { FinalizationRegistry: c } = r2(4191)(), l = r2(3589), { isValidHTTPToken: m, sameOrigin: d, normalizeMethod: f, makePolicyContainer: p, normalizeMethodRecord: h } = r2(8116), { forbiddenMethodsSet: g, corsSafeListedMethodsSet: A, referrerPolicy: _, requestRedirect: y, requestMode: w, requestCredentials: S, requestCache: J, requestDuplex: B } = r2(2955), { kEnumerableProperty: E } = l, { kHeaders: I, kSignal: C, kState: b, kGuard: k, kRealm: v } = r2(7271), { webidl: q } = r2(8193), { getGlobalOrigin: R } = r2(3967), { URLSerializer: P } = r2(4387), { kHeadersList: T, kConstruct: x } = r2(5532), N = r2(2613), { getMaxListeners: D, setMaxListeners: U, getEventListeners: Q, defaultMaxListeners: M } = r2(4434);
    let O = globalThis.TransformStream;
    const F = /* @__PURE__ */ Symbol("abortController"), L = new c(({ signal: t3, abort: e3 }) => {
      t3.removeEventListener("abort", e3);
    });
    class $ {
      constructor(t3, e3 = {}) {
        if (t3 === x) return;
        q.argumentLengthCheck(arguments, 1, { header: "Request constructor" }), t3 = q.converters.RequestInfo(t3), e3 = q.converters.RequestInit(e3), this[v] = { settingsObject: { baseUrl: R(), get origin() {
          return this.baseUrl?.origin;
        }, policyContainer: p() } };
        let s3 = null, i3 = null;
        const c2 = this[v].settingsObject.baseUrl;
        let _2 = null;
        if ("string" == typeof t3) {
          let e4;
          try {
            e4 = new URL(t3, c2);
          } catch (e5) {
            throw new TypeError("Failed to parse URL from " + t3, { cause: e5 });
          }
          if (e4.username || e4.password) throw new TypeError("Request cannot be constructed from a URL that includes credentials: " + t3);
          s3 = G({ urlList: [e4] }), i3 = "cors";
        } else N(t3 instanceof $), s3 = t3[b], _2 = t3[C];
        const y2 = this[v].settingsObject.origin;
        let w2 = "client";
        if ("EnvironmentSettingsObject" === s3.window?.constructor?.name && d(s3.window, y2) && (w2 = s3.window), null != e3.window) throw new TypeError(`'window' option '${w2}' must be null`);
        "window" in e3 && (w2 = "no-window"), s3 = G({ method: s3.method, headersList: s3.headersList, unsafeRequest: s3.unsafeRequest, client: this[v].settingsObject, window: w2, priority: s3.priority, origin: s3.origin, referrer: s3.referrer, referrerPolicy: s3.referrerPolicy, mode: s3.mode, credentials: s3.credentials, cache: s3.cache, redirect: s3.redirect, integrity: s3.integrity, keepalive: s3.keepalive, reloadNavigation: s3.reloadNavigation, historyNavigation: s3.historyNavigation, urlList: [...s3.urlList] });
        const S2 = 0 !== Object.keys(e3).length;
        if (S2 && ("navigate" === s3.mode && (s3.mode = "same-origin"), s3.reloadNavigation = false, s3.historyNavigation = false, s3.origin = "client", s3.referrer = "client", s3.referrerPolicy = "", s3.url = s3.urlList[s3.urlList.length - 1], s3.urlList = [s3.url]), void 0 !== e3.referrer) {
          const t4 = e3.referrer;
          if ("" === t4) s3.referrer = "no-referrer";
          else {
            let e4;
            try {
              e4 = new URL(t4, c2);
            } catch (e5) {
              throw new TypeError(`Referrer "${t4}" is not a valid URL.`, { cause: e5 });
            }
            "about:" === e4.protocol && "client" === e4.hostname || y2 && !d(e4, this[v].settingsObject.baseUrl) ? s3.referrer = "client" : s3.referrer = e4;
          }
        }
        let J2;
        if (void 0 !== e3.referrerPolicy && (s3.referrerPolicy = e3.referrerPolicy), J2 = void 0 !== e3.mode ? e3.mode : i3, "navigate" === J2) throw q.errors.exception({ header: "Request constructor", message: "invalid request mode navigate." });
        if (null != J2 && (s3.mode = J2), void 0 !== e3.credentials && (s3.credentials = e3.credentials), void 0 !== e3.cache && (s3.cache = e3.cache), "only-if-cached" === s3.cache && "same-origin" !== s3.mode) throw new TypeError("'only-if-cached' can be set only with 'same-origin' mode");
        if (void 0 !== e3.redirect && (s3.redirect = e3.redirect), null != e3.integrity && (s3.integrity = String(e3.integrity)), void 0 !== e3.keepalive && (s3.keepalive = Boolean(e3.keepalive)), void 0 !== e3.method) {
          let t4 = e3.method;
          if (!m(t4)) throw new TypeError(`'${t4}' is not a valid HTTP method.`);
          if (g.has(t4.toUpperCase())) throw new TypeError(`'${t4}' HTTP method is unsupported.`);
          t4 = h[t4] ?? f(t4), s3.method = t4;
        }
        void 0 !== e3.signal && (_2 = e3.signal), this[b] = s3;
        const B2 = new AbortController();
        if (this[C] = B2.signal, this[C][v] = this[v], null != _2) {
          if (!_2 || "boolean" != typeof _2.aborted || "function" != typeof _2.addEventListener) throw new TypeError("Failed to construct 'Request': member signal is not of type AbortSignal.");
          if (_2.aborted) B2.abort(_2.reason);
          else {
            this[F] = B2;
            const t4 = new WeakRef(B2), e4 = function() {
              const e5 = t4.deref();
              void 0 !== e5 && e5.abort(this.reason);
            };
            try {
              ("function" == typeof D && D(_2) === M || Q(_2, "abort").length >= M) && U(100, _2);
            } catch {
            }
            l.addAbortListener(_2, e4), L.register(B2, { signal: _2, abort: e4 });
          }
        }
        if (this[I] = new o2(x), this[I][T] = s3.headersList, this[I][k] = "request", this[I][v] = this[v], "no-cors" === J2) {
          if (!A.has(s3.method)) throw new TypeError(`'${s3.method} is unsupported in no-cors mode.`);
          this[I][k] = "request-no-cors";
        }
        if (S2) {
          const t4 = this[I][T], r3 = void 0 !== e3.headers ? e3.headers : new u(t4);
          if (t4.clear(), r3 instanceof u) {
            for (const [e4, n3] of r3) t4.append(e4, n3);
            t4.cookies = r3.cookies;
          } else a(this[I], r3);
        }
        const E2 = t3 instanceof $ ? t3[b].body : null;
        if (!(null == e3.body && null == E2 || "GET" !== s3.method && "HEAD" !== s3.method)) throw new TypeError("Request with GET/HEAD method cannot have body.");
        let P2 = null;
        if (null != e3.body) {
          const [t4, r3] = n2(e3.body, s3.keepalive);
          P2 = t4, r3 && !this[I][T].contains("content-type") && this[I].append("content-type", r3);
        }
        const H = P2 ?? E2;
        if (null != H && null == H.source) {
          if (null != P2 && null == e3.duplex) throw new TypeError("RequestInit: duplex option is required when sending a body.");
          if ("same-origin" !== s3.mode && "cors" !== s3.mode) throw new TypeError('If request is made from ReadableStream, mode should be "same-origin" or "cors"');
          s3.useCORSPreflightFlag = true;
        }
        let K = H;
        if (null == P2 && null != E2) {
          if (l.isDisturbed(E2.stream) || E2.stream.locked) throw new TypeError("Cannot construct a Request with a Request object that has already been used.");
          O || (O = r2(3774).TransformStream);
          const t4 = new O();
          E2.stream.pipeThrough(t4), K = { source: E2.source, length: E2.length, stream: t4.readable };
        }
        this[b].body = K;
      }
      get method() {
        return q.brandCheck(this, $), this[b].method;
      }
      get url() {
        return q.brandCheck(this, $), P(this[b].url);
      }
      get headers() {
        return q.brandCheck(this, $), this[I];
      }
      get destination() {
        return q.brandCheck(this, $), this[b].destination;
      }
      get referrer() {
        return q.brandCheck(this, $), "no-referrer" === this[b].referrer ? "" : "client" === this[b].referrer ? "about:client" : this[b].referrer.toString();
      }
      get referrerPolicy() {
        return q.brandCheck(this, $), this[b].referrerPolicy;
      }
      get mode() {
        return q.brandCheck(this, $), this[b].mode;
      }
      get credentials() {
        return this[b].credentials;
      }
      get cache() {
        return q.brandCheck(this, $), this[b].cache;
      }
      get redirect() {
        return q.brandCheck(this, $), this[b].redirect;
      }
      get integrity() {
        return q.brandCheck(this, $), this[b].integrity;
      }
      get keepalive() {
        return q.brandCheck(this, $), this[b].keepalive;
      }
      get isReloadNavigation() {
        return q.brandCheck(this, $), this[b].reloadNavigation;
      }
      get isHistoryNavigation() {
        return q.brandCheck(this, $), this[b].historyNavigation;
      }
      get signal() {
        return q.brandCheck(this, $), this[C];
      }
      get body() {
        return q.brandCheck(this, $), this[b].body ? this[b].body.stream : null;
      }
      get bodyUsed() {
        return q.brandCheck(this, $), !!this[b].body && l.isDisturbed(this[b].body.stream);
      }
      get duplex() {
        return q.brandCheck(this, $), "half";
      }
      clone() {
        if (q.brandCheck(this, $), this.bodyUsed || this.body?.locked) throw new TypeError("unusable");
        const t3 = (function(t4) {
          const e4 = G({ ...t4, body: null });
          null != t4.body && (e4.body = i2(t4.body));
          return e4;
        })(this[b]), e3 = new $(x);
        e3[b] = t3, e3[v] = this[v], e3[I] = new o2(x), e3[I][T] = t3.headersList, e3[I][k] = this[I][k], e3[I][v] = this[I][v];
        const r3 = new AbortController();
        return this.signal.aborted ? r3.abort(this.signal.reason) : l.addAbortListener(this.signal, () => {
          r3.abort(this.signal.reason);
        }), e3[C] = r3.signal, e3;
      }
    }
    function G(t3) {
      const e3 = { method: "GET", localURLsOnly: false, unsafeRequest: false, body: null, client: null, reservedClient: null, replacesClientId: "", window: "client", keepalive: false, serviceWorkers: "all", initiator: "", destination: "", priority: null, origin: "client", policyContainer: "client", referrer: "client", referrerPolicy: "", mode: "no-cors", useCORSPreflightFlag: false, credentials: "same-origin", useCredentials: false, cache: "default", redirect: "follow", integrity: "", cryptoGraphicsNonceMetadata: "", parserMetadata: "", reloadNavigation: false, historyNavigation: false, userActivation: false, taintedOrigin: false, redirectCount: 0, responseTainting: "basic", preventNoCacheCacheControlHeaderModification: false, done: false, timingAllowFailed: false, ...t3, headersList: t3.headersList ? new u(t3.headersList) : new u() };
      return e3.url = e3.urlList[0], e3;
    }
    s2($), Object.defineProperties($.prototype, { method: E, url: E, headers: E, redirect: E, clone: E, signal: E, duplex: E, destination: E, body: E, bodyUsed: E, isHistoryNavigation: E, isReloadNavigation: E, keepalive: E, integrity: E, cache: E, credentials: E, attribute: E, referrerPolicy: E, referrer: E, mode: E, [Symbol.toStringTag]: { value: "Request", configurable: true } }), q.converters.Request = q.interfaceConverter($), q.converters.RequestInfo = function(t3) {
      return "string" == typeof t3 ? q.converters.USVString(t3) : t3 instanceof $ ? q.converters.Request(t3) : q.converters.USVString(t3);
    }, q.converters.AbortSignal = q.interfaceConverter(AbortSignal), q.converters.RequestInit = q.dictionaryConverter([{ key: "method", converter: q.converters.ByteString }, { key: "headers", converter: q.converters.HeadersInit }, { key: "body", converter: q.nullableConverter(q.converters.BodyInit) }, { key: "referrer", converter: q.converters.USVString }, { key: "referrerPolicy", converter: q.converters.DOMString, allowedValues: _ }, { key: "mode", converter: q.converters.DOMString, allowedValues: w }, { key: "credentials", converter: q.converters.DOMString, allowedValues: S }, { key: "cache", converter: q.converters.DOMString, allowedValues: J }, { key: "redirect", converter: q.converters.DOMString, allowedValues: y }, { key: "integrity", converter: q.converters.DOMString }, { key: "keepalive", converter: q.converters.boolean }, { key: "signal", converter: q.nullableConverter((t3) => q.converters.AbortSignal(t3, { strict: false })) }, { key: "window", converter: q.converters.any }, { key: "duplex", converter: q.converters.DOMString, allowedValues: B }]), t2.exports = { Request: $, makeRequest: G };
  }