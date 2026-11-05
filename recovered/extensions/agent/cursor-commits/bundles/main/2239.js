// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 2239 range:193909..206406
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2239: (e2, n2, a2) => {
    "use strict";
    const { extractBody: t2, mixinBody: s2, cloneBody: o2 } = a2(7052), { Headers: r2, fill: i2, HeadersList: A } = a2(2932), { FinalizationRegistry: l } = a2(1531)(), c = a2(9361), { isValidHTTPToken: m, sameOrigin: d, normalizeMethod: g, makePolicyContainer: u, normalizeMethodRecord: E } = a2(5728), { forbiddenMethodsSet: p, corsSafeListedMethodsSet: T, referrerPolicy: k, requestRedirect: I, requestMode: h, requestCredentials: _, requestCache: C, requestDuplex: f } = a2(6687), { kEnumerableProperty: B } = c, { kHeaders: Q, kSignal: y, kState: R, kGuard: N, kRealm: v } = a2(5899), { webidl: S } = a2(8005), { getGlobalOrigin: D } = a2(9523), { URLSerializer: w } = a2(3631), { kHeadersList: b, kConstruct: M } = a2(8832), F = a2(2613), { getMaxListeners: O, setMaxListeners: U, getEventListeners: L, defaultMaxListeners: P } = a2(4434);
    let x = globalThis.TransformStream;
    const G = /* @__PURE__ */ Symbol("abortController"), Y = new l(({ signal: e3, abort: n3 }) => {
      e3.removeEventListener("abort", n3);
    });
    class J {
      constructor(e3, n3 = {}) {
        if (e3 === M) return;
        S.argumentLengthCheck(arguments, 1, { header: "Request constructor" }), e3 = S.converters.RequestInfo(e3), n3 = S.converters.RequestInit(n3), this[v] = { settingsObject: { baseUrl: D(), get origin() {
          return this.baseUrl?.origin;
        }, policyContainer: u() } };
        let s3 = null, o3 = null;
        const l2 = this[v].settingsObject.baseUrl;
        let k2 = null;
        if ("string" == typeof e3) {
          let n4;
          try {
            n4 = new URL(e3, l2);
          } catch (n5) {
            throw new TypeError("Failed to parse URL from " + e3, { cause: n5 });
          }
          if (n4.username || n4.password) throw new TypeError("Request cannot be constructed from a URL that includes credentials: " + e3);
          s3 = V({ urlList: [n4] }), o3 = "cors";
        } else F(e3 instanceof J), s3 = e3[R], k2 = e3[y];
        const I2 = this[v].settingsObject.origin;
        let h2 = "client";
        if ("EnvironmentSettingsObject" === s3.window?.constructor?.name && d(s3.window, I2) && (h2 = s3.window), null != n3.window) throw new TypeError(`'window' option '${h2}' must be null`);
        "window" in n3 && (h2 = "no-window"), s3 = V({ method: s3.method, headersList: s3.headersList, unsafeRequest: s3.unsafeRequest, client: this[v].settingsObject, window: h2, priority: s3.priority, origin: s3.origin, referrer: s3.referrer, referrerPolicy: s3.referrerPolicy, mode: s3.mode, credentials: s3.credentials, cache: s3.cache, redirect: s3.redirect, integrity: s3.integrity, keepalive: s3.keepalive, reloadNavigation: s3.reloadNavigation, historyNavigation: s3.historyNavigation, urlList: [...s3.urlList] });
        const _2 = 0 !== Object.keys(n3).length;
        if (_2 && ("navigate" === s3.mode && (s3.mode = "same-origin"), s3.reloadNavigation = false, s3.historyNavigation = false, s3.origin = "client", s3.referrer = "client", s3.referrerPolicy = "", s3.url = s3.urlList[s3.urlList.length - 1], s3.urlList = [s3.url]), void 0 !== n3.referrer) {
          const e4 = n3.referrer;
          if ("" === e4) s3.referrer = "no-referrer";
          else {
            let n4;
            try {
              n4 = new URL(e4, l2);
            } catch (n5) {
              throw new TypeError(`Referrer "${e4}" is not a valid URL.`, { cause: n5 });
            }
            "about:" === n4.protocol && "client" === n4.hostname || I2 && !d(n4, this[v].settingsObject.baseUrl) ? s3.referrer = "client" : s3.referrer = n4;
          }
        }
        let C2;
        if (void 0 !== n3.referrerPolicy && (s3.referrerPolicy = n3.referrerPolicy), C2 = void 0 !== n3.mode ? n3.mode : o3, "navigate" === C2) throw S.errors.exception({ header: "Request constructor", message: "invalid request mode navigate." });
        if (null != C2 && (s3.mode = C2), void 0 !== n3.credentials && (s3.credentials = n3.credentials), void 0 !== n3.cache && (s3.cache = n3.cache), "only-if-cached" === s3.cache && "same-origin" !== s3.mode) throw new TypeError("'only-if-cached' can be set only with 'same-origin' mode");
        if (void 0 !== n3.redirect && (s3.redirect = n3.redirect), null != n3.integrity && (s3.integrity = String(n3.integrity)), void 0 !== n3.keepalive && (s3.keepalive = Boolean(n3.keepalive)), void 0 !== n3.method) {
          let e4 = n3.method;
          if (!m(e4)) throw new TypeError(`'${e4}' is not a valid HTTP method.`);
          if (p.has(e4.toUpperCase())) throw new TypeError(`'${e4}' HTTP method is unsupported.`);
          e4 = E[e4] ?? g(e4), s3.method = e4;
        }
        void 0 !== n3.signal && (k2 = n3.signal), this[R] = s3;
        const f2 = new AbortController();
        if (this[y] = f2.signal, this[y][v] = this[v], null != k2) {
          if (!k2 || "boolean" != typeof k2.aborted || "function" != typeof k2.addEventListener) throw new TypeError("Failed to construct 'Request': member signal is not of type AbortSignal.");
          if (k2.aborted) f2.abort(k2.reason);
          else {
            this[G] = f2;
            const e4 = new WeakRef(f2), n4 = function() {
              const n5 = e4.deref();
              void 0 !== n5 && n5.abort(this.reason);
            };
            try {
              ("function" == typeof O && O(k2) === P || L(k2, "abort").length >= P) && U(100, k2);
            } catch {
            }
            c.addAbortListener(k2, n4), Y.register(f2, { signal: k2, abort: n4 });
          }
        }
        if (this[Q] = new r2(M), this[Q][b] = s3.headersList, this[Q][N] = "request", this[Q][v] = this[v], "no-cors" === C2) {
          if (!T.has(s3.method)) throw new TypeError(`'${s3.method} is unsupported in no-cors mode.`);
          this[Q][N] = "request-no-cors";
        }
        if (_2) {
          const e4 = this[Q][b], a3 = void 0 !== n3.headers ? n3.headers : new A(e4);
          if (e4.clear(), a3 instanceof A) {
            for (const [n4, t3] of a3) e4.append(n4, t3);
            e4.cookies = a3.cookies;
          } else i2(this[Q], a3);
        }
        const B2 = e3 instanceof J ? e3[R].body : null;
        if (!(null == n3.body && null == B2 || "GET" !== s3.method && "HEAD" !== s3.method)) throw new TypeError("Request with GET/HEAD method cannot have body.");
        let w2 = null;
        if (null != n3.body) {
          const [e4, a3] = t2(n3.body, s3.keepalive);
          w2 = e4, a3 && !this[Q][b].contains("content-type") && this[Q].append("content-type", a3);
        }
        const q = w2 ?? B2;
        if (null != q && null == q.source) {
          if (null != w2 && null == n3.duplex) throw new TypeError("RequestInit: duplex option is required when sending a body.");
          if ("same-origin" !== s3.mode && "cors" !== s3.mode) throw new TypeError('If request is made from ReadableStream, mode should be "same-origin" or "cors"');
          s3.useCORSPreflightFlag = true;
        }
        let H = q;
        if (null == w2 && null != B2) {
          if (c.isDisturbed(B2.stream) || B2.stream.locked) throw new TypeError("Cannot construct a Request with a Request object that has already been used.");
          x || (x = a2(3774).TransformStream);
          const e4 = new x();
          B2.stream.pipeThrough(e4), H = { source: B2.source, length: B2.length, stream: e4.readable };
        }
        this[R].body = H;
      }
      get method() {
        return S.brandCheck(this, J), this[R].method;
      }
      get url() {
        return S.brandCheck(this, J), w(this[R].url);
      }
      get headers() {
        return S.brandCheck(this, J), this[Q];
      }
      get destination() {
        return S.brandCheck(this, J), this[R].destination;
      }
      get referrer() {
        return S.brandCheck(this, J), "no-referrer" === this[R].referrer ? "" : "client" === this[R].referrer ? "about:client" : this[R].referrer.toString();
      }
      get referrerPolicy() {
        return S.brandCheck(this, J), this[R].referrerPolicy;
      }
      get mode() {
        return S.brandCheck(this, J), this[R].mode;
      }
      get credentials() {
        return this[R].credentials;
      }
      get cache() {
        return S.brandCheck(this, J), this[R].cache;
      }
      get redirect() {
        return S.brandCheck(this, J), this[R].redirect;
      }
      get integrity() {
        return S.brandCheck(this, J), this[R].integrity;
      }
      get keepalive() {
        return S.brandCheck(this, J), this[R].keepalive;
      }
      get isReloadNavigation() {
        return S.brandCheck(this, J), this[R].reloadNavigation;
      }
      get isHistoryNavigation() {
        return S.brandCheck(this, J), this[R].historyNavigation;
      }
      get signal() {
        return S.brandCheck(this, J), this[y];
      }
      get body() {
        return S.brandCheck(this, J), this[R].body ? this[R].body.stream : null;
      }
      get bodyUsed() {
        return S.brandCheck(this, J), !!this[R].body && c.isDisturbed(this[R].body.stream);
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
        })(this[R]), n3 = new J(M);
        n3[R] = e3, n3[v] = this[v], n3[Q] = new r2(M), n3[Q][b] = e3.headersList, n3[Q][N] = this[Q][N], n3[Q][v] = this[Q][v];
        const a3 = new AbortController();
        return this.signal.aborted ? a3.abort(this.signal.reason) : c.addAbortListener(this.signal, () => {
          a3.abort(this.signal.reason);
        }), n3[y] = a3.signal, n3;
      }
    }
    function V(e3) {
      const n3 = { method: "GET", localURLsOnly: false, unsafeRequest: false, body: null, client: null, reservedClient: null, replacesClientId: "", window: "client", keepalive: false, serviceWorkers: "all", initiator: "", destination: "", priority: null, origin: "client", policyContainer: "client", referrer: "client", referrerPolicy: "", mode: "no-cors", useCORSPreflightFlag: false, credentials: "same-origin", useCredentials: false, cache: "default", redirect: "follow", integrity: "", cryptoGraphicsNonceMetadata: "", parserMetadata: "", reloadNavigation: false, historyNavigation: false, userActivation: false, taintedOrigin: false, redirectCount: 0, responseTainting: "basic", preventNoCacheCacheControlHeaderModification: false, done: false, timingAllowFailed: false, ...e3, headersList: e3.headersList ? new A(e3.headersList) : new A() };
      return n3.url = n3.urlList[0], n3;
    }
    s2(J), Object.defineProperties(J.prototype, { method: B, url: B, headers: B, redirect: B, clone: B, signal: B, duplex: B, destination: B, body: B, bodyUsed: B, isHistoryNavigation: B, isReloadNavigation: B, keepalive: B, integrity: B, cache: B, credentials: B, attribute: B, referrerPolicy: B, referrer: B, mode: B, [Symbol.toStringTag]: { value: "Request", configurable: true } }), S.converters.Request = S.interfaceConverter(J), S.converters.RequestInfo = function(e3) {
      return "string" == typeof e3 ? S.converters.USVString(e3) : e3 instanceof J ? S.converters.Request(e3) : S.converters.USVString(e3);
    }, S.converters.AbortSignal = S.interfaceConverter(AbortSignal), S.converters.RequestInit = S.dictionaryConverter([{ key: "method", converter: S.converters.ByteString }, { key: "headers", converter: S.converters.HeadersInit }, { key: "body", converter: S.nullableConverter(S.converters.BodyInit) }, { key: "referrer", converter: S.converters.USVString }, { key: "referrerPolicy", converter: S.converters.DOMString, allowedValues: k }, { key: "mode", converter: S.converters.DOMString, allowedValues: h }, { key: "credentials", converter: S.converters.DOMString, allowedValues: _ }, { key: "cache", converter: S.converters.DOMString, allowedValues: C }, { key: "redirect", converter: S.converters.DOMString, allowedValues: I }, { key: "integrity", converter: S.converters.DOMString }, { key: "keepalive", converter: S.converters.boolean }, { key: "signal", converter: S.nullableConverter((e3) => S.converters.AbortSignal(e3, { strict: false })) }, { key: "window", converter: S.converters.any }, { key: "duplex", converter: S.converters.DOMString, allowedValues: f }]), e2.exports = { Request: J, makeRequest: V };
  }