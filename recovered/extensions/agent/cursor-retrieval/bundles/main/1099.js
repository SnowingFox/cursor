// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 1099 range:128812..136605
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1099: (e2, a2, n2) => {
    "use strict";
    const { Headers: t2, HeadersList: s2, fill: o2 } = n2(2932), { extractBody: r2, cloneBody: i2, mixinBody: l } = n2(7052), d = n2(9361), { kEnumerableProperty: m } = d, { isValidReasonPhrase: c, isCancelled: p, isAborted: A, isBlobLike: u, serializeJavascriptValueToJSONString: g, isErrorLike: T, isomorphicEncode: h } = n2(5728), { redirectStatusSet: k, nullBodyStatus: _, DOMException: E } = n2(6687), { kState: f, kHeaders: C, kGuard: I, kRealm: v } = n2(5899), { webidl: y } = n2(8005), { FormData: S } = n2(1606), { getGlobalOrigin: R } = n2(9523), { URLSerializer: N } = n2(3631), { kHeadersList: B, kConstruct: w } = n2(8832), b = n2(2613), { types: Q } = n2(9023), D = globalThis.ReadableStream || n2(3774).ReadableStream, M = new TextEncoder("utf-8");
    class O {
      static error() {
        const e3 = { settingsObject: {} }, a3 = new O();
        return a3[f] = P(), a3[v] = e3, a3[C][B] = a3[f].headersList, a3[C][I] = "immutable", a3[C][v] = e3, a3;
      }
      static json(e3, a3 = {}) {
        y.argumentLengthCheck(arguments, 1, { header: "Response.json" }), null !== a3 && (a3 = y.converters.ResponseInit(a3));
        const n3 = M.encode(g(e3)), t3 = r2(n3), s3 = { settingsObject: {} }, o3 = new O();
        return o3[v] = s3, o3[C][I] = "response", o3[C][v] = s3, x(o3, a3, { body: t3[0], type: "application/json" }), o3;
      }
      static redirect(e3, a3 = 302) {
        const n3 = { settingsObject: {} };
        let t3;
        y.argumentLengthCheck(arguments, 1, { header: "Response.redirect" }), e3 = y.converters.USVString(e3), a3 = y.converters["unsigned short"](a3);
        try {
          t3 = new URL(e3, R());
        } catch (a4) {
          throw Object.assign(new TypeError("Failed to parse URL from " + e3), { cause: a4 });
        }
        if (!k.has(a3)) throw new RangeError("Invalid status code " + a3);
        const s3 = new O();
        s3[v] = n3, s3[C][I] = "immutable", s3[C][v] = n3, s3[f].status = a3;
        const o3 = h(N(t3));
        return s3[f].headersList.append("location", o3), s3;
      }
      constructor(e3 = null, a3 = {}) {
        null !== e3 && (e3 = y.converters.BodyInit(e3)), a3 = y.converters.ResponseInit(a3), this[v] = { settingsObject: {} }, this[f] = F({}), this[C] = new t2(w), this[C][I] = "response", this[C][B] = this[f].headersList, this[C][v] = this[v];
        let n3 = null;
        if (null != e3) {
          const [a4, t3] = r2(e3);
          n3 = { body: a4, type: t3 };
        }
        x(this, a3, n3);
      }
      get type() {
        return y.brandCheck(this, O), this[f].type;
      }
      get url() {
        y.brandCheck(this, O);
        const e3 = this[f].urlList, a3 = e3[e3.length - 1] ?? null;
        return null === a3 ? "" : N(a3, true);
      }
      get redirected() {
        return y.brandCheck(this, O), this[f].urlList.length > 1;
      }
      get status() {
        return y.brandCheck(this, O), this[f].status;
      }
      get ok() {
        return y.brandCheck(this, O), this[f].status >= 200 && this[f].status <= 299;
      }
      get statusText() {
        return y.brandCheck(this, O), this[f].statusText;
      }
      get headers() {
        return y.brandCheck(this, O), this[C];
      }
      get body() {
        return y.brandCheck(this, O), this[f].body ? this[f].body.stream : null;
      }
      get bodyUsed() {
        return y.brandCheck(this, O), !!this[f].body && d.isDisturbed(this[f].body.stream);
      }
      clone() {
        if (y.brandCheck(this, O), this.bodyUsed || this.body && this.body.locked) throw y.errors.exception({ header: "Response.clone", message: "Body has already been consumed." });
        const e3 = U(this[f]), a3 = new O();
        return a3[f] = e3, a3[v] = this[v], a3[C][B] = e3.headersList, a3[C][I] = this[C][I], a3[C][v] = this[C][v], a3;
      }
    }
    function U(e3) {
      if (e3.internalResponse) return G(U(e3.internalResponse), e3.type);
      const a3 = F({ ...e3, body: null });
      return null != e3.body && (a3.body = i2(e3.body)), a3;
    }
    function F(e3) {
      return { aborted: false, rangeRequested: false, timingAllowPassed: false, requestIncludesCredentials: false, type: "default", status: 200, timingInfo: null, cacheState: "", statusText: "", ...e3, headersList: e3.headersList ? new s2(e3.headersList) : new s2(), urlList: e3.urlList ? [...e3.urlList] : [] };
    }
    function P(e3) {
      return F({ type: "error", status: 0, error: T(e3) ? e3 : new Error(e3 ? String(e3) : e3), aborted: e3 && "AbortError" === e3.name });
    }
    function L(e3, a3) {
      return a3 = { internalResponse: e3, ...a3 }, new Proxy(e3, { get: (e4, n3) => n3 in a3 ? a3[n3] : e4[n3], set: (e4, n3, t3) => (b(!(n3 in a3)), e4[n3] = t3, true) });
    }
    function G(e3, a3) {
      return "basic" === a3 ? L(e3, { type: "basic", headersList: e3.headersList }) : "cors" === a3 ? L(e3, { type: "cors", headersList: e3.headersList }) : "opaque" === a3 ? L(e3, { type: "opaque", urlList: Object.freeze([]), status: 0, statusText: "", body: null }) : "opaqueredirect" === a3 ? L(e3, { type: "opaqueredirect", status: 0, statusText: "", headersList: [], body: null }) : void b(false);
    }
    function x(e3, a3, n3) {
      if (null !== a3.status && (a3.status < 200 || a3.status > 599)) throw new RangeError('init["status"] must be in the range of 200 to 599, inclusive.');
      if ("statusText" in a3 && null != a3.statusText && !c(String(a3.statusText))) throw new TypeError("Invalid statusText");
      if ("status" in a3 && null != a3.status && (e3[f].status = a3.status), "statusText" in a3 && null != a3.statusText && (e3[f].statusText = a3.statusText), "headers" in a3 && null != a3.headers && o2(e3[C], a3.headers), n3) {
        if (_.includes(e3.status)) throw y.errors.exception({ header: "Response constructor", message: "Invalid response status code " + e3.status });
        e3[f].body = n3.body, null == n3.type || e3[f].headersList.contains("Content-Type") || e3[f].headersList.append("content-type", n3.type);
      }
    }
    l(O), Object.defineProperties(O.prototype, { type: m, url: m, status: m, ok: m, redirected: m, statusText: m, headers: m, clone: m, body: m, bodyUsed: m, [Symbol.toStringTag]: { value: "Response", configurable: true } }), Object.defineProperties(O, { json: m, redirect: m, error: m }), y.converters.ReadableStream = y.interfaceConverter(D), y.converters.FormData = y.interfaceConverter(S), y.converters.URLSearchParams = y.interfaceConverter(URLSearchParams), y.converters.XMLHttpRequestBodyInit = function(e3) {
      return "string" == typeof e3 ? y.converters.USVString(e3) : u(e3) ? y.converters.Blob(e3, { strict: false }) : Q.isArrayBuffer(e3) || Q.isTypedArray(e3) || Q.isDataView(e3) ? y.converters.BufferSource(e3) : d.isFormDataLike(e3) ? y.converters.FormData(e3, { strict: false }) : e3 instanceof URLSearchParams ? y.converters.URLSearchParams(e3) : y.converters.DOMString(e3);
    }, y.converters.BodyInit = function(e3) {
      return e3 instanceof D ? y.converters.ReadableStream(e3) : e3?.[Symbol.asyncIterator] ? e3 : y.converters.XMLHttpRequestBodyInit(e3);
    }, y.converters.ResponseInit = y.dictionaryConverter([{ key: "status", converter: y.converters["unsigned short"], defaultValue: 200 }, { key: "statusText", converter: y.converters.ByteString, defaultValue: "" }, { key: "headers", converter: y.converters.HeadersInit }]), e2.exports = { makeNetworkError: P, makeResponse: F, makeAppropriateNetworkError: function(e3, a3 = null) {
      return b(p(e3)), A(e3) ? P(Object.assign(new E("The operation was aborted.", "AbortError"), { cause: a3 })) : P(Object.assign(new E("Request was cancelled."), { cause: a3 }));
    }, filterResponse: G, Response: O, cloneResponse: U };
  }