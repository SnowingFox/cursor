// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 1099 range:113950..121743
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1099: (e2, n2, a2) => {
    "use strict";
    const { Headers: t2, HeadersList: s2, fill: o2 } = a2(2932), { extractBody: r2, cloneBody: i2, mixinBody: A } = a2(7052), l = a2(9361), { kEnumerableProperty: c } = l, { isValidReasonPhrase: m, isCancelled: d, isAborted: g, isBlobLike: u, serializeJavascriptValueToJSONString: E, isErrorLike: p, isomorphicEncode: T } = a2(5728), { redirectStatusSet: k, nullBodyStatus: I, DOMException: h } = a2(6687), { kState: _, kHeaders: C, kGuard: f, kRealm: B } = a2(5899), { webidl: Q } = a2(8005), { FormData: y } = a2(1606), { getGlobalOrigin: R } = a2(9523), { URLSerializer: N } = a2(3631), { kHeadersList: v, kConstruct: S } = a2(8832), D = a2(2613), { types: w } = a2(9023), b = globalThis.ReadableStream || a2(3774).ReadableStream, M = new TextEncoder("utf-8");
    class F {
      static error() {
        const e3 = { settingsObject: {} }, n3 = new F();
        return n3[_] = L(), n3[B] = e3, n3[C][v] = n3[_].headersList, n3[C][f] = "immutable", n3[C][B] = e3, n3;
      }
      static json(e3, n3 = {}) {
        Q.argumentLengthCheck(arguments, 1, { header: "Response.json" }), null !== n3 && (n3 = Q.converters.ResponseInit(n3));
        const a3 = M.encode(E(e3)), t3 = r2(a3), s3 = { settingsObject: {} }, o3 = new F();
        return o3[B] = s3, o3[C][f] = "response", o3[C][B] = s3, G(o3, n3, { body: t3[0], type: "application/json" }), o3;
      }
      static redirect(e3, n3 = 302) {
        const a3 = { settingsObject: {} };
        let t3;
        Q.argumentLengthCheck(arguments, 1, { header: "Response.redirect" }), e3 = Q.converters.USVString(e3), n3 = Q.converters["unsigned short"](n3);
        try {
          t3 = new URL(e3, R());
        } catch (n4) {
          throw Object.assign(new TypeError("Failed to parse URL from " + e3), { cause: n4 });
        }
        if (!k.has(n3)) throw new RangeError("Invalid status code " + n3);
        const s3 = new F();
        s3[B] = a3, s3[C][f] = "immutable", s3[C][B] = a3, s3[_].status = n3;
        const o3 = T(N(t3));
        return s3[_].headersList.append("location", o3), s3;
      }
      constructor(e3 = null, n3 = {}) {
        null !== e3 && (e3 = Q.converters.BodyInit(e3)), n3 = Q.converters.ResponseInit(n3), this[B] = { settingsObject: {} }, this[_] = U({}), this[C] = new t2(S), this[C][f] = "response", this[C][v] = this[_].headersList, this[C][B] = this[B];
        let a3 = null;
        if (null != e3) {
          const [n4, t3] = r2(e3);
          a3 = { body: n4, type: t3 };
        }
        G(this, n3, a3);
      }
      get type() {
        return Q.brandCheck(this, F), this[_].type;
      }
      get url() {
        Q.brandCheck(this, F);
        const e3 = this[_].urlList, n3 = e3[e3.length - 1] ?? null;
        return null === n3 ? "" : N(n3, true);
      }
      get redirected() {
        return Q.brandCheck(this, F), this[_].urlList.length > 1;
      }
      get status() {
        return Q.brandCheck(this, F), this[_].status;
      }
      get ok() {
        return Q.brandCheck(this, F), this[_].status >= 200 && this[_].status <= 299;
      }
      get statusText() {
        return Q.brandCheck(this, F), this[_].statusText;
      }
      get headers() {
        return Q.brandCheck(this, F), this[C];
      }
      get body() {
        return Q.brandCheck(this, F), this[_].body ? this[_].body.stream : null;
      }
      get bodyUsed() {
        return Q.brandCheck(this, F), !!this[_].body && l.isDisturbed(this[_].body.stream);
      }
      clone() {
        if (Q.brandCheck(this, F), this.bodyUsed || this.body && this.body.locked) throw Q.errors.exception({ header: "Response.clone", message: "Body has already been consumed." });
        const e3 = O(this[_]), n3 = new F();
        return n3[_] = e3, n3[B] = this[B], n3[C][v] = e3.headersList, n3[C][f] = this[C][f], n3[C][B] = this[C][B], n3;
      }
    }
    function O(e3) {
      if (e3.internalResponse) return x(O(e3.internalResponse), e3.type);
      const n3 = U({ ...e3, body: null });
      return null != e3.body && (n3.body = i2(e3.body)), n3;
    }
    function U(e3) {
      return { aborted: false, rangeRequested: false, timingAllowPassed: false, requestIncludesCredentials: false, type: "default", status: 200, timingInfo: null, cacheState: "", statusText: "", ...e3, headersList: e3.headersList ? new s2(e3.headersList) : new s2(), urlList: e3.urlList ? [...e3.urlList] : [] };
    }
    function L(e3) {
      return U({ type: "error", status: 0, error: p(e3) ? e3 : new Error(e3 ? String(e3) : e3), aborted: e3 && "AbortError" === e3.name });
    }
    function P(e3, n3) {
      return n3 = { internalResponse: e3, ...n3 }, new Proxy(e3, { get: (e4, a3) => a3 in n3 ? n3[a3] : e4[a3], set: (e4, a3, t3) => (D(!(a3 in n3)), e4[a3] = t3, true) });
    }
    function x(e3, n3) {
      return "basic" === n3 ? P(e3, { type: "basic", headersList: e3.headersList }) : "cors" === n3 ? P(e3, { type: "cors", headersList: e3.headersList }) : "opaque" === n3 ? P(e3, { type: "opaque", urlList: Object.freeze([]), status: 0, statusText: "", body: null }) : "opaqueredirect" === n3 ? P(e3, { type: "opaqueredirect", status: 0, statusText: "", headersList: [], body: null }) : void D(false);
    }
    function G(e3, n3, a3) {
      if (null !== n3.status && (n3.status < 200 || n3.status > 599)) throw new RangeError('init["status"] must be in the range of 200 to 599, inclusive.');
      if ("statusText" in n3 && null != n3.statusText && !m(String(n3.statusText))) throw new TypeError("Invalid statusText");
      if ("status" in n3 && null != n3.status && (e3[_].status = n3.status), "statusText" in n3 && null != n3.statusText && (e3[_].statusText = n3.statusText), "headers" in n3 && null != n3.headers && o2(e3[C], n3.headers), a3) {
        if (I.includes(e3.status)) throw Q.errors.exception({ header: "Response constructor", message: "Invalid response status code " + e3.status });
        e3[_].body = a3.body, null == a3.type || e3[_].headersList.contains("Content-Type") || e3[_].headersList.append("content-type", a3.type);
      }
    }
    A(F), Object.defineProperties(F.prototype, { type: c, url: c, status: c, ok: c, redirected: c, statusText: c, headers: c, clone: c, body: c, bodyUsed: c, [Symbol.toStringTag]: { value: "Response", configurable: true } }), Object.defineProperties(F, { json: c, redirect: c, error: c }), Q.converters.ReadableStream = Q.interfaceConverter(b), Q.converters.FormData = Q.interfaceConverter(y), Q.converters.URLSearchParams = Q.interfaceConverter(URLSearchParams), Q.converters.XMLHttpRequestBodyInit = function(e3) {
      return "string" == typeof e3 ? Q.converters.USVString(e3) : u(e3) ? Q.converters.Blob(e3, { strict: false }) : w.isArrayBuffer(e3) || w.isTypedArray(e3) || w.isDataView(e3) ? Q.converters.BufferSource(e3) : l.isFormDataLike(e3) ? Q.converters.FormData(e3, { strict: false }) : e3 instanceof URLSearchParams ? Q.converters.URLSearchParams(e3) : Q.converters.DOMString(e3);
    }, Q.converters.BodyInit = function(e3) {
      return e3 instanceof b ? Q.converters.ReadableStream(e3) : e3?.[Symbol.asyncIterator] ? e3 : Q.converters.XMLHttpRequestBodyInit(e3);
    }, Q.converters.ResponseInit = Q.dictionaryConverter([{ key: "status", converter: Q.converters["unsigned short"], defaultValue: 200 }, { key: "statusText", converter: Q.converters.ByteString, defaultValue: "" }, { key: "headers", converter: Q.converters.HeadersInit }]), e2.exports = { makeNetworkError: L, makeResponse: U, makeAppropriateNetworkError: function(e3, n3 = null) {
      return D(d(e3)), g(e3) ? L(Object.assign(new h("The operation was aborted.", "AbortError"), { cause: n3 })) : L(Object.assign(new h("Request was cancelled."), { cause: n3 }));
    }, filterResponse: x, Response: F, cloneResponse: O };
  }