// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 78078 range:438067..452463
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
78078: (A, e, t) => {
  "use strict";
  const { extractBody: r, mixinBody: s, cloneBody: o, bodyUnusable: n } = t(33095), { Headers: i, fill: a, HeadersList: Q, setHeadersGuard: g, getHeadersGuard: E, setHeadersList: B, getHeadersList: c } = t(48969), { FinalizationRegistry: I } = t(59362)(), C = t(55201), h = t(57975), { isValidHTTPToken: l, sameOrigin: u, environmentSettingsObject: d } = t(48215), { forbiddenMethodsSet: f, corsSafeListedMethodsSet: w, referrerPolicy: y, requestRedirect: D, requestMode: p, requestCredentials: k, requestCache: R, requestDuplex: F } = t(99354), { kEnumerableProperty: m, normalizedMethodRecordsBase: b, normalizedMethodRecords: N } = C, { kHeaders: S, kSignal: M, kState: U, kDispatcher: L } = t(15978), { webidl: T } = t(43290), { URLSerializer: Y } = t(52603), { kConstruct: G } = t(76992), J = t(56970), { getMaxListeners: v, setMaxListeners: H, getEventListeners: V, defaultMaxListeners: x } = t(78474), W = /* @__PURE__ */ Symbol("abortController"), O = new I(({ signal: A2, abort: e2 }) => {
    A2.removeEventListener("abort", e2);
  }), P = /* @__PURE__ */ new WeakMap();
  function q(A2) {
    return function e2() {
      const t2 = A2.deref();
      if (void 0 !== t2) {
        O.unregister(e2), this.removeEventListener("abort", e2), t2.abort(this.reason);
        const A3 = P.get(t2.signal);
        if (void 0 !== A3) {
          if (0 !== A3.size) {
            for (const e3 of A3) {
              const A4 = e3.deref();
              void 0 !== A4 && A4.abort(this.reason);
            }
            A3.clear();
          }
          P.delete(t2.signal);
        }
      }
    };
  }
  let Z = false;
  class z {
    constructor(A2, e2 = {}) {
      if (T.util.markAsUncloneable(this), A2 === G) return;
      const t2 = "Request constructor";
      T.argumentLengthCheck(arguments, 1, t2), A2 = T.converters.RequestInfo(A2, t2, "input"), e2 = T.converters.RequestInit(e2, t2, "init");
      let s2 = null, o2 = null;
      const E2 = d.settingsObject.baseUrl;
      let I2 = null;
      if ("string" == typeof A2) {
        let t3;
        this[L] = e2.dispatcher;
        try {
          t3 = new URL(A2, E2);
        } catch (e3) {
          throw new TypeError("Failed to parse URL from " + A2, { cause: e3 });
        }
        if (t3.username || t3.password) throw new TypeError("Request cannot be constructed from a URL that includes credentials: " + A2);
        s2 = K({ urlList: [t3] }), o2 = "cors";
      } else this[L] = e2.dispatcher || A2[L], J(A2 instanceof z), s2 = A2[U], I2 = A2[M];
      const h2 = d.settingsObject.origin;
      let y2 = "client";
      if ("EnvironmentSettingsObject" === s2.window?.constructor?.name && u(s2.window, h2) && (y2 = s2.window), null != e2.window) throw new TypeError(`'window' option '${y2}' must be null`);
      "window" in e2 && (y2 = "no-window"), s2 = K({ method: s2.method, headersList: s2.headersList, unsafeRequest: s2.unsafeRequest, client: d.settingsObject, window: y2, priority: s2.priority, origin: s2.origin, referrer: s2.referrer, referrerPolicy: s2.referrerPolicy, mode: s2.mode, credentials: s2.credentials, cache: s2.cache, redirect: s2.redirect, integrity: s2.integrity, keepalive: s2.keepalive, reloadNavigation: s2.reloadNavigation, historyNavigation: s2.historyNavigation, urlList: [...s2.urlList] });
      const D2 = 0 !== Object.keys(e2).length;
      if (D2 && ("navigate" === s2.mode && (s2.mode = "same-origin"), s2.reloadNavigation = false, s2.historyNavigation = false, s2.origin = "client", s2.referrer = "client", s2.referrerPolicy = "", s2.url = s2.urlList[s2.urlList.length - 1], s2.urlList = [s2.url]), void 0 !== e2.referrer) {
        const A3 = e2.referrer;
        if ("" === A3) s2.referrer = "no-referrer";
        else {
          let e3;
          try {
            e3 = new URL(A3, E2);
          } catch (e4) {
            throw new TypeError(`Referrer "${A3}" is not a valid URL.`, { cause: e4 });
          }
          "about:" === e3.protocol && "client" === e3.hostname || h2 && !u(e3, d.settingsObject.baseUrl) ? s2.referrer = "client" : s2.referrer = e3;
        }
      }
      let p2;
      if (void 0 !== e2.referrerPolicy && (s2.referrerPolicy = e2.referrerPolicy), p2 = void 0 !== e2.mode ? e2.mode : o2, "navigate" === p2) throw T.errors.exception({ header: "Request constructor", message: "invalid request mode navigate." });
      if (null != p2 && (s2.mode = p2), void 0 !== e2.credentials && (s2.credentials = e2.credentials), void 0 !== e2.cache && (s2.cache = e2.cache), "only-if-cached" === s2.cache && "same-origin" !== s2.mode) throw new TypeError("'only-if-cached' can be set only with 'same-origin' mode");
      if (void 0 !== e2.redirect && (s2.redirect = e2.redirect), null != e2.integrity && (s2.integrity = String(e2.integrity)), void 0 !== e2.keepalive && (s2.keepalive = Boolean(e2.keepalive)), void 0 !== e2.method) {
        let A3 = e2.method;
        const t3 = N[A3];
        if (void 0 !== t3) s2.method = t3;
        else {
          if (!l(A3)) throw new TypeError(`'${A3}' is not a valid HTTP method.`);
          const e3 = A3.toUpperCase();
          if (f.has(e3)) throw new TypeError(`'${A3}' HTTP method is unsupported.`);
          A3 = b[e3] ?? A3, s2.method = A3;
        }
        Z || "patch" !== s2.method || (process.emitWarning("Using `patch` is highly likely to result in a `405 Method Not Allowed`. `PATCH` is much more likely to succeed.", { code: "UNDICI-FETCH-patch" }), Z = true);
      }
      void 0 !== e2.signal && (I2 = e2.signal), this[U] = s2;
      const k2 = new AbortController();
      if (this[M] = k2.signal, null != I2) {
        if (!I2 || "boolean" != typeof I2.aborted || "function" != typeof I2.addEventListener) throw new TypeError("Failed to construct 'Request': member signal is not of type AbortSignal.");
        if (I2.aborted) k2.abort(I2.reason);
        else {
          this[W] = k2;
          const A3 = q(new WeakRef(k2));
          try {
            ("function" == typeof v && v(I2) === x || V(I2, "abort").length >= x) && H(1500, I2);
          } catch {
          }
          C.addAbortListener(I2, A3), O.register(k2, { signal: I2, abort: A3 }, A3);
        }
      }
      if (this[S] = new i(G), B(this[S], s2.headersList), g(this[S], "request"), "no-cors" === p2) {
        if (!w.has(s2.method)) throw new TypeError(`'${s2.method} is unsupported in no-cors mode.`);
        g(this[S], "request-no-cors");
      }
      if (D2) {
        const A3 = c(this[S]), t3 = void 0 !== e2.headers ? e2.headers : new Q(A3);
        if (A3.clear(), t3 instanceof Q) {
          for (const { name: e3, value: r2 } of t3.rawValues()) A3.append(e3, r2, false);
          A3.cookies = t3.cookies;
        } else a(this[S], t3);
      }
      const R2 = A2 instanceof z ? A2[U].body : null;
      if (!(null == e2.body && null == R2 || "GET" !== s2.method && "HEAD" !== s2.method)) throw new TypeError("Request with GET/HEAD method cannot have body.");
      let F2 = null;
      if (null != e2.body) {
        const [A3, t3] = r(e2.body, s2.keepalive);
        F2 = A3, t3 && !c(this[S]).contains("content-type", true) && this[S].append("content-type", t3);
      }
      const m2 = F2 ?? R2;
      if (null != m2 && null == m2.source) {
        if (null != F2 && null == e2.duplex) throw new TypeError("RequestInit: duplex option is required when sending a body.");
        if ("same-origin" !== s2.mode && "cors" !== s2.mode) throw new TypeError('If request is made from ReadableStream, mode should be "same-origin" or "cors"');
        s2.useCORSPreflightFlag = true;
      }
      let Y2 = m2;
      if (null == F2 && null != R2) {
        if (n(A2)) throw new TypeError("Cannot construct a Request with a Request object that has already been used.");
        const e3 = new TransformStream();
        R2.stream.pipeThrough(e3), Y2 = { source: R2.source, length: R2.length, stream: e3.readable };
      }
      this[U].body = Y2;
    }
    get method() {
      return T.brandCheck(this, z), this[U].method;
    }
    get url() {
      return T.brandCheck(this, z), Y(this[U].url);
    }
    get headers() {
      return T.brandCheck(this, z), this[S];
    }
    get destination() {
      return T.brandCheck(this, z), this[U].destination;
    }
    get referrer() {
      return T.brandCheck(this, z), "no-referrer" === this[U].referrer ? "" : "client" === this[U].referrer ? "about:client" : this[U].referrer.toString();
    }
    get referrerPolicy() {
      return T.brandCheck(this, z), this[U].referrerPolicy;
    }
    get mode() {
      return T.brandCheck(this, z), this[U].mode;
    }
    get credentials() {
      return this[U].credentials;
    }
    get cache() {
      return T.brandCheck(this, z), this[U].cache;
    }
    get redirect() {
      return T.brandCheck(this, z), this[U].redirect;
    }
    get integrity() {
      return T.brandCheck(this, z), this[U].integrity;
    }
    get keepalive() {
      return T.brandCheck(this, z), this[U].keepalive;
    }
    get isReloadNavigation() {
      return T.brandCheck(this, z), this[U].reloadNavigation;
    }
    get isHistoryNavigation() {
      return T.brandCheck(this, z), this[U].historyNavigation;
    }
    get signal() {
      return T.brandCheck(this, z), this[M];
    }
    get body() {
      return T.brandCheck(this, z), this[U].body ? this[U].body.stream : null;
    }
    get bodyUsed() {
      return T.brandCheck(this, z), !!this[U].body && C.isDisturbed(this[U].body.stream);
    }
    get duplex() {
      return T.brandCheck(this, z), "half";
    }
    clone() {
      if (T.brandCheck(this, z), n(this)) throw new TypeError("unusable");
      const A2 = X(this[U]), e2 = new AbortController();
      if (this.signal.aborted) e2.abort(this.signal.reason);
      else {
        let A3 = P.get(this.signal);
        void 0 === A3 && (A3 = /* @__PURE__ */ new Set(), P.set(this.signal, A3));
        const t2 = new WeakRef(e2);
        A3.add(t2), C.addAbortListener(e2.signal, q(t2));
      }
      return _(A2, e2.signal, E(this[S]));
    }
    [h.inspect.custom](A2, e2) {
      null === e2.depth && (e2.depth = 2), e2.colors ??= true;
      const t2 = { method: this.method, url: this.url, headers: this.headers, destination: this.destination, referrer: this.referrer, referrerPolicy: this.referrerPolicy, mode: this.mode, credentials: this.credentials, cache: this.cache, redirect: this.redirect, integrity: this.integrity, keepalive: this.keepalive, isReloadNavigation: this.isReloadNavigation, isHistoryNavigation: this.isHistoryNavigation, signal: this.signal };
      return `Request ${h.formatWithOptions(e2, t2)}`;
    }
  }
  function K(A2) {
    return { method: A2.method ?? "GET", localURLsOnly: A2.localURLsOnly ?? false, unsafeRequest: A2.unsafeRequest ?? false, body: A2.body ?? null, client: A2.client ?? null, reservedClient: A2.reservedClient ?? null, replacesClientId: A2.replacesClientId ?? "", window: A2.window ?? "client", keepalive: A2.keepalive ?? false, serviceWorkers: A2.serviceWorkers ?? "all", initiator: A2.initiator ?? "", destination: A2.destination ?? "", priority: A2.priority ?? null, origin: A2.origin ?? "client", policyContainer: A2.policyContainer ?? "client", referrer: A2.referrer ?? "client", referrerPolicy: A2.referrerPolicy ?? "", mode: A2.mode ?? "no-cors", useCORSPreflightFlag: A2.useCORSPreflightFlag ?? false, credentials: A2.credentials ?? "same-origin", useCredentials: A2.useCredentials ?? false, cache: A2.cache ?? "default", redirect: A2.redirect ?? "follow", integrity: A2.integrity ?? "", cryptoGraphicsNonceMetadata: A2.cryptoGraphicsNonceMetadata ?? "", parserMetadata: A2.parserMetadata ?? "", reloadNavigation: A2.reloadNavigation ?? false, historyNavigation: A2.historyNavigation ?? false, userActivation: A2.userActivation ?? false, taintedOrigin: A2.taintedOrigin ?? false, redirectCount: A2.redirectCount ?? 0, responseTainting: A2.responseTainting ?? "basic", preventNoCacheCacheControlHeaderModification: A2.preventNoCacheCacheControlHeaderModification ?? false, done: A2.done ?? false, timingAllowFailed: A2.timingAllowFailed ?? false, urlList: A2.urlList, url: A2.urlList[0], headersList: A2.headersList ? new Q(A2.headersList) : new Q() };
  }
  function X(A2) {
    const e2 = K({ ...A2, body: null });
    return null != A2.body && (e2.body = o(e2, A2.body)), e2;
  }
  function _(A2, e2, t2) {
    const r2 = new z(G);
    return r2[U] = A2, r2[M] = e2, r2[S] = new i(G), B(r2[S], A2.headersList), g(r2[S], t2), r2;
  }
  s(z), Object.defineProperties(z.prototype, { method: m, url: m, headers: m, redirect: m, clone: m, signal: m, duplex: m, destination: m, body: m, bodyUsed: m, isHistoryNavigation: m, isReloadNavigation: m, keepalive: m, integrity: m, cache: m, credentials: m, attribute: m, referrerPolicy: m, referrer: m, mode: m, [Symbol.toStringTag]: { value: "Request", configurable: true } }), T.converters.Request = T.interfaceConverter(z), T.converters.RequestInfo = function(A2, e2, t2) {
    return "string" == typeof A2 ? T.converters.USVString(A2, e2, t2) : A2 instanceof z ? T.converters.Request(A2, e2, t2) : T.converters.USVString(A2, e2, t2);
  }, T.converters.AbortSignal = T.interfaceConverter(AbortSignal), T.converters.RequestInit = T.dictionaryConverter([{ key: "method", converter: T.converters.ByteString }, { key: "headers", converter: T.converters.HeadersInit }, { key: "body", converter: T.nullableConverter(T.converters.BodyInit) }, { key: "referrer", converter: T.converters.USVString }, { key: "referrerPolicy", converter: T.converters.DOMString, allowedValues: y }, { key: "mode", converter: T.converters.DOMString, allowedValues: p }, { key: "credentials", converter: T.converters.DOMString, allowedValues: k }, { key: "cache", converter: T.converters.DOMString, allowedValues: R }, { key: "redirect", converter: T.converters.DOMString, allowedValues: D }, { key: "integrity", converter: T.converters.DOMString }, { key: "keepalive", converter: T.converters.boolean }, { key: "signal", converter: T.nullableConverter((A2) => T.converters.AbortSignal(A2, "RequestInit", "signal", { strict: false })) }, { key: "window", converter: T.converters.any }, { key: "duplex", converter: T.converters.DOMString, allowedValues: F }, { key: "dispatcher", converter: T.converters.any }]), A.exports = { Request: z, makeRequest: K, fromInnerRequest: _, cloneRequest: X };
}