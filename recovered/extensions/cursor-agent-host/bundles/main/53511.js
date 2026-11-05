// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 53511 range:8573492..8581270
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
53511: (e, t, r) => {
    "use strict";
    const { Headers: n, HeadersList: s, fill: o } = r(72848), { extractBody: i, cloneBody: a, mixinBody: c } = r(29608), l = r(83589), { kEnumerableProperty: u } = l, { isValidReasonPhrase: d, isCancelled: p, isAborted: m, isBlobLike: h, serializeJavascriptValueToJSONString: f, isErrorLike: g, isomorphicEncode: y } = r(98116), { redirectStatusSet: w, nullBodyStatus: v, DOMException: _ } = r(22955), { kState: A, kHeaders: S, kGuard: b, kRealm: E } = r(77271), { webidl: I } = r(18193), { FormData: C } = r(66522), { getGlobalOrigin: k } = r(13967), { URLSerializer: x } = r(64387), { kHeadersList: T, kConstruct: R } = r(15532), B = r(42613), { types: P } = r(39023), J = globalThis.ReadableStream || r(63774).ReadableStream, M = new TextEncoder("utf-8");
    class q {
      static error() {
        const e2 = { settingsObject: {} }, t2 = new q();
        return t2[A] = N(), t2[E] = e2, t2[S][T] = t2[A].headersList, t2[S][b] = "immutable", t2[S][E] = e2, t2;
      }
      static json(e2, t2 = {}) {
        I.argumentLengthCheck(arguments, 1, { header: "Response.json" }), null !== t2 && (t2 = I.converters.ResponseInit(t2));
        const r2 = M.encode(f(e2)), n2 = i(r2), s2 = { settingsObject: {} }, o2 = new q();
        return o2[E] = s2, o2[S][b] = "response", o2[S][E] = s2, L(o2, t2, { body: n2[0], type: "application/json" }), o2;
      }
      static redirect(e2, t2 = 302) {
        const r2 = { settingsObject: {} };
        let n2;
        I.argumentLengthCheck(arguments, 1, { header: "Response.redirect" }), e2 = I.converters.USVString(e2), t2 = I.converters["unsigned short"](t2);
        try {
          n2 = new URL(e2, k());
        } catch (t3) {
          throw Object.assign(new TypeError("Failed to parse URL from " + e2), { cause: t3 });
        }
        if (!w.has(t2)) throw new RangeError("Invalid status code " + t2);
        const s2 = new q();
        s2[E] = r2, s2[S][b] = "immutable", s2[S][E] = r2, s2[A].status = t2;
        const o2 = y(x(n2));
        return s2[A].headersList.append("location", o2), s2;
      }
      constructor(e2 = null, t2 = {}) {
        null !== e2 && (e2 = I.converters.BodyInit(e2)), t2 = I.converters.ResponseInit(t2), this[E] = { settingsObject: {} }, this[A] = O({}), this[S] = new n(R), this[S][b] = "response", this[S][T] = this[A].headersList, this[S][E] = this[E];
        let r2 = null;
        if (null != e2) {
          const [t3, n2] = i(e2);
          r2 = { body: t3, type: n2 };
        }
        L(this, t2, r2);
      }
      get type() {
        return I.brandCheck(this, q), this[A].type;
      }
      get url() {
        I.brandCheck(this, q);
        const e2 = this[A].urlList, t2 = e2[e2.length - 1] ?? null;
        return null === t2 ? "" : x(t2, true);
      }
      get redirected() {
        return I.brandCheck(this, q), this[A].urlList.length > 1;
      }
      get status() {
        return I.brandCheck(this, q), this[A].status;
      }
      get ok() {
        return I.brandCheck(this, q), this[A].status >= 200 && this[A].status <= 299;
      }
      get statusText() {
        return I.brandCheck(this, q), this[A].statusText;
      }
      get headers() {
        return I.brandCheck(this, q), this[S];
      }
      get body() {
        return I.brandCheck(this, q), this[A].body ? this[A].body.stream : null;
      }
      get bodyUsed() {
        return I.brandCheck(this, q), !!this[A].body && l.isDisturbed(this[A].body.stream);
      }
      clone() {
        if (I.brandCheck(this, q), this.bodyUsed || this.body && this.body.locked) throw I.errors.exception({ header: "Response.clone", message: "Body has already been consumed." });
        const e2 = D(this[A]), t2 = new q();
        return t2[A] = e2, t2[E] = this[E], t2[S][T] = e2.headersList, t2[S][b] = this[S][b], t2[S][E] = this[S][E], t2;
      }
    }
    function D(e2) {
      if (e2.internalResponse) return U(D(e2.internalResponse), e2.type);
      const t2 = O({ ...e2, body: null });
      return null != e2.body && (t2.body = a(e2.body)), t2;
    }
    function O(e2) {
      return { aborted: false, rangeRequested: false, timingAllowPassed: false, requestIncludesCredentials: false, type: "default", status: 200, timingInfo: null, cacheState: "", statusText: "", ...e2, headersList: e2.headersList ? new s(e2.headersList) : new s(), urlList: e2.urlList ? [...e2.urlList] : [] };
    }
    function N(e2) {
      return O({ type: "error", status: 0, error: g(e2) ? e2 : new Error(e2 ? String(e2) : e2), aborted: e2 && "AbortError" === e2.name });
    }
    function F(e2, t2) {
      return t2 = { internalResponse: e2, ...t2 }, new Proxy(e2, { get: (e3, r2) => r2 in t2 ? t2[r2] : e3[r2], set: (e3, r2, n2) => (B(!(r2 in t2)), e3[r2] = n2, true) });
    }
    function U(e2, t2) {
      return "basic" === t2 ? F(e2, { type: "basic", headersList: e2.headersList }) : "cors" === t2 ? F(e2, { type: "cors", headersList: e2.headersList }) : "opaque" === t2 ? F(e2, { type: "opaque", urlList: Object.freeze([]), status: 0, statusText: "", body: null }) : "opaqueredirect" === t2 ? F(e2, { type: "opaqueredirect", status: 0, statusText: "", headersList: [], body: null }) : void B(false);
    }
    function L(e2, t2, r2) {
      if (null !== t2.status && (t2.status < 200 || t2.status > 599)) throw new RangeError('init["status"] must be in the range of 200 to 599, inclusive.');
      if ("statusText" in t2 && null != t2.statusText && !d(String(t2.statusText))) throw new TypeError("Invalid statusText");
      if ("status" in t2 && null != t2.status && (e2[A].status = t2.status), "statusText" in t2 && null != t2.statusText && (e2[A].statusText = t2.statusText), "headers" in t2 && null != t2.headers && o(e2[S], t2.headers), r2) {
        if (v.includes(e2.status)) throw I.errors.exception({ header: "Response constructor", message: "Invalid response status code " + e2.status });
        e2[A].body = r2.body, null == r2.type || e2[A].headersList.contains("Content-Type") || e2[A].headersList.append("content-type", r2.type);
      }
    }
    c(q), Object.defineProperties(q.prototype, { type: u, url: u, status: u, ok: u, redirected: u, statusText: u, headers: u, clone: u, body: u, bodyUsed: u, [Symbol.toStringTag]: { value: "Response", configurable: true } }), Object.defineProperties(q, { json: u, redirect: u, error: u }), I.converters.ReadableStream = I.interfaceConverter(J), I.converters.FormData = I.interfaceConverter(C), I.converters.URLSearchParams = I.interfaceConverter(URLSearchParams), I.converters.XMLHttpRequestBodyInit = function(e2) {
      return "string" == typeof e2 ? I.converters.USVString(e2) : h(e2) ? I.converters.Blob(e2, { strict: false }) : P.isArrayBuffer(e2) || P.isTypedArray(e2) || P.isDataView(e2) ? I.converters.BufferSource(e2) : l.isFormDataLike(e2) ? I.converters.FormData(e2, { strict: false }) : e2 instanceof URLSearchParams ? I.converters.URLSearchParams(e2) : I.converters.DOMString(e2);
    }, I.converters.BodyInit = function(e2) {
      return e2 instanceof J ? I.converters.ReadableStream(e2) : e2?.[Symbol.asyncIterator] ? e2 : I.converters.XMLHttpRequestBodyInit(e2);
    }, I.converters.ResponseInit = I.dictionaryConverter([{ key: "status", converter: I.converters["unsigned short"], defaultValue: 200 }, { key: "statusText", converter: I.converters.ByteString, defaultValue: "" }, { key: "headers", converter: I.converters.HeadersInit }]), e.exports = { makeNetworkError: N, makeResponse: O, makeAppropriateNetworkError: function(e2, t2 = null) {
      return B(p(e2)), m(e2) ? N(Object.assign(new _("The operation was aborted.", "AbortError"), { cause: t2 })) : N(Object.assign(new _("Request was cancelled."), { cause: t2 }));
    }, filterResponse: U, Response: q, cloneResponse: D };
  }