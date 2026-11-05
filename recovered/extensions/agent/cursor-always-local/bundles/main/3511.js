// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 3511 range:940509..948300
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3511: (t2, e2, r2) => {
    "use strict";
    const { Headers: n2, HeadersList: s2, fill: i2 } = r2(2848), { extractBody: o2, cloneBody: a, mixinBody: u } = r2(9608), c = r2(3589), { kEnumerableProperty: l } = c, { isValidReasonPhrase: m, isCancelled: d, isAborted: f, isBlobLike: p, serializeJavascriptValueToJSONString: h, isErrorLike: g, isomorphicEncode: A } = r2(8116), { redirectStatusSet: _, nullBodyStatus: y, DOMException: w } = r2(2955), { kState: S, kHeaders: J, kGuard: B, kRealm: E } = r2(7271), { webidl: I } = r2(8193), { FormData: C } = r2(6522), { getGlobalOrigin: b } = r2(3967), { URLSerializer: k } = r2(4387), { kHeadersList: v, kConstruct: q } = r2(5532), R = r2(2613), { types: P } = r2(9023), T = globalThis.ReadableStream || r2(3774).ReadableStream, x = new TextEncoder("utf-8");
    class N {
      static error() {
        const t3 = { settingsObject: {} }, e3 = new N();
        return e3[S] = Q(), e3[E] = t3, e3[J][v] = e3[S].headersList, e3[J][B] = "immutable", e3[J][E] = t3, e3;
      }
      static json(t3, e3 = {}) {
        I.argumentLengthCheck(arguments, 1, { header: "Response.json" }), null !== e3 && (e3 = I.converters.ResponseInit(e3));
        const r3 = x.encode(h(t3)), n3 = o2(r3), s3 = { settingsObject: {} }, i3 = new N();
        return i3[E] = s3, i3[J][B] = "response", i3[J][E] = s3, F(i3, e3, { body: n3[0], type: "application/json" }), i3;
      }
      static redirect(t3, e3 = 302) {
        const r3 = { settingsObject: {} };
        let n3;
        I.argumentLengthCheck(arguments, 1, { header: "Response.redirect" }), t3 = I.converters.USVString(t3), e3 = I.converters["unsigned short"](e3);
        try {
          n3 = new URL(t3, b());
        } catch (e4) {
          throw Object.assign(new TypeError("Failed to parse URL from " + t3), { cause: e4 });
        }
        if (!_.has(e3)) throw new RangeError("Invalid status code " + e3);
        const s3 = new N();
        s3[E] = r3, s3[J][B] = "immutable", s3[J][E] = r3, s3[S].status = e3;
        const i3 = A(k(n3));
        return s3[S].headersList.append("location", i3), s3;
      }
      constructor(t3 = null, e3 = {}) {
        null !== t3 && (t3 = I.converters.BodyInit(t3)), e3 = I.converters.ResponseInit(e3), this[E] = { settingsObject: {} }, this[S] = U({}), this[J] = new n2(q), this[J][B] = "response", this[J][v] = this[S].headersList, this[J][E] = this[E];
        let r3 = null;
        if (null != t3) {
          const [e4, n3] = o2(t3);
          r3 = { body: e4, type: n3 };
        }
        F(this, e3, r3);
      }
      get type() {
        return I.brandCheck(this, N), this[S].type;
      }
      get url() {
        I.brandCheck(this, N);
        const t3 = this[S].urlList, e3 = t3[t3.length - 1] ?? null;
        return null === e3 ? "" : k(e3, true);
      }
      get redirected() {
        return I.brandCheck(this, N), this[S].urlList.length > 1;
      }
      get status() {
        return I.brandCheck(this, N), this[S].status;
      }
      get ok() {
        return I.brandCheck(this, N), this[S].status >= 200 && this[S].status <= 299;
      }
      get statusText() {
        return I.brandCheck(this, N), this[S].statusText;
      }
      get headers() {
        return I.brandCheck(this, N), this[J];
      }
      get body() {
        return I.brandCheck(this, N), this[S].body ? this[S].body.stream : null;
      }
      get bodyUsed() {
        return I.brandCheck(this, N), !!this[S].body && c.isDisturbed(this[S].body.stream);
      }
      clone() {
        if (I.brandCheck(this, N), this.bodyUsed || this.body && this.body.locked) throw I.errors.exception({ header: "Response.clone", message: "Body has already been consumed." });
        const t3 = D(this[S]), e3 = new N();
        return e3[S] = t3, e3[E] = this[E], e3[J][v] = t3.headersList, e3[J][B] = this[J][B], e3[J][E] = this[J][E], e3;
      }
    }
    function D(t3) {
      if (t3.internalResponse) return O(D(t3.internalResponse), t3.type);
      const e3 = U({ ...t3, body: null });
      return null != t3.body && (e3.body = a(t3.body)), e3;
    }
    function U(t3) {
      return { aborted: false, rangeRequested: false, timingAllowPassed: false, requestIncludesCredentials: false, type: "default", status: 200, timingInfo: null, cacheState: "", statusText: "", ...t3, headersList: t3.headersList ? new s2(t3.headersList) : new s2(), urlList: t3.urlList ? [...t3.urlList] : [] };
    }
    function Q(t3) {
      return U({ type: "error", status: 0, error: g(t3) ? t3 : new Error(t3 ? String(t3) : t3), aborted: t3 && "AbortError" === t3.name });
    }
    function M(t3, e3) {
      return e3 = { internalResponse: t3, ...e3 }, new Proxy(t3, { get: (t4, r3) => r3 in e3 ? e3[r3] : t4[r3], set: (t4, r3, n3) => (R(!(r3 in e3)), t4[r3] = n3, true) });
    }
    function O(t3, e3) {
      return "basic" === e3 ? M(t3, { type: "basic", headersList: t3.headersList }) : "cors" === e3 ? M(t3, { type: "cors", headersList: t3.headersList }) : "opaque" === e3 ? M(t3, { type: "opaque", urlList: Object.freeze([]), status: 0, statusText: "", body: null }) : "opaqueredirect" === e3 ? M(t3, { type: "opaqueredirect", status: 0, statusText: "", headersList: [], body: null }) : void R(false);
    }
    function F(t3, e3, r3) {
      if (null !== e3.status && (e3.status < 200 || e3.status > 599)) throw new RangeError('init["status"] must be in the range of 200 to 599, inclusive.');
      if ("statusText" in e3 && null != e3.statusText && !m(String(e3.statusText))) throw new TypeError("Invalid statusText");
      if ("status" in e3 && null != e3.status && (t3[S].status = e3.status), "statusText" in e3 && null != e3.statusText && (t3[S].statusText = e3.statusText), "headers" in e3 && null != e3.headers && i2(t3[J], e3.headers), r3) {
        if (y.includes(t3.status)) throw I.errors.exception({ header: "Response constructor", message: "Invalid response status code " + t3.status });
        t3[S].body = r3.body, null == r3.type || t3[S].headersList.contains("Content-Type") || t3[S].headersList.append("content-type", r3.type);
      }
    }
    u(N), Object.defineProperties(N.prototype, { type: l, url: l, status: l, ok: l, redirected: l, statusText: l, headers: l, clone: l, body: l, bodyUsed: l, [Symbol.toStringTag]: { value: "Response", configurable: true } }), Object.defineProperties(N, { json: l, redirect: l, error: l }), I.converters.ReadableStream = I.interfaceConverter(T), I.converters.FormData = I.interfaceConverter(C), I.converters.URLSearchParams = I.interfaceConverter(URLSearchParams), I.converters.XMLHttpRequestBodyInit = function(t3) {
      return "string" == typeof t3 ? I.converters.USVString(t3) : p(t3) ? I.converters.Blob(t3, { strict: false }) : P.isArrayBuffer(t3) || P.isTypedArray(t3) || P.isDataView(t3) ? I.converters.BufferSource(t3) : c.isFormDataLike(t3) ? I.converters.FormData(t3, { strict: false }) : t3 instanceof URLSearchParams ? I.converters.URLSearchParams(t3) : I.converters.DOMString(t3);
    }, I.converters.BodyInit = function(t3) {
      return t3 instanceof T ? I.converters.ReadableStream(t3) : t3?.[Symbol.asyncIterator] ? t3 : I.converters.XMLHttpRequestBodyInit(t3);
    }, I.converters.ResponseInit = I.dictionaryConverter([{ key: "status", converter: I.converters["unsigned short"], defaultValue: 200 }, { key: "statusText", converter: I.converters.ByteString, defaultValue: "" }, { key: "headers", converter: I.converters.HeadersInit }]), t2.exports = { makeNetworkError: Q, makeResponse: U, makeAppropriateNetworkError: function(t3, e3 = null) {
      return R(d(t3)), f(t3) ? Q(Object.assign(new w("The operation was aborted.", "AbortError"), { cause: e3 })) : Q(Object.assign(new w("Request was cancelled."), { cause: e3 }));
    }, filterResponse: O, Response: N, cloneResponse: D };
  }