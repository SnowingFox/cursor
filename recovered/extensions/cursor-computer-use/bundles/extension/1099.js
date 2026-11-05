// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 1099 range:118113..125901
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
1099: (e2, n2, t2) => {
    "use strict";
    const { Headers: a2, HeadersList: s2, fill: o2 } = t2(2932), { extractBody: r, cloneBody: i, mixinBody: A } = t2(7052), c = t2(9361), { kEnumerableProperty: l } = c, { isValidReasonPhrase: d, isCancelled: m, isAborted: u, isBlobLike: g, serializeJavascriptValueToJSONString: p, isErrorLike: E, isomorphicEncode: h } = t2(5728), { redirectStatusSet: T, nullBodyStatus: k, DOMException: f } = t2(6687), { kState: _, kHeaders: I, kGuard: C, kRealm: y } = t2(5899), { webidl: B } = t2(8005), { FormData: Q } = t2(1606), { getGlobalOrigin: v } = t2(9523), { URLSerializer: R } = t2(3631), { kHeadersList: N, kConstruct: S } = t2(8832), w = t2(2613), { types: b } = t2(9023), D = globalThis.ReadableStream || t2(3774).ReadableStream, M = new TextEncoder("utf-8");
    class F {
      static error() {
        const e3 = { settingsObject: {} }, n3 = new F();
        return n3[_] = L(), n3[y] = e3, n3[I][N] = n3[_].headersList, n3[I][C] = "immutable", n3[I][y] = e3, n3;
      }
      static json(e3, n3 = {}) {
        B.argumentLengthCheck(arguments, 1, { header: "Response.json" }), null !== n3 && (n3 = B.converters.ResponseInit(n3));
        const t3 = M.encode(p(e3)), a3 = r(t3), s3 = { settingsObject: {} }, o3 = new F();
        return o3[y] = s3, o3[I][C] = "response", o3[I][y] = s3, G(o3, n3, { body: a3[0], type: "application/json" }), o3;
      }
      static redirect(e3, n3 = 302) {
        const t3 = { settingsObject: {} };
        let a3;
        B.argumentLengthCheck(arguments, 1, { header: "Response.redirect" }), e3 = B.converters.USVString(e3), n3 = B.converters["unsigned short"](n3);
        try {
          a3 = new URL(e3, v());
        } catch (n4) {
          throw Object.assign(new TypeError("Failed to parse URL from " + e3), { cause: n4 });
        }
        if (!T.has(n3)) throw new RangeError("Invalid status code " + n3);
        const s3 = new F();
        s3[y] = t3, s3[I][C] = "immutable", s3[I][y] = t3, s3[_].status = n3;
        const o3 = h(R(a3));
        return s3[_].headersList.append("location", o3), s3;
      }
      constructor(e3 = null, n3 = {}) {
        null !== e3 && (e3 = B.converters.BodyInit(e3)), n3 = B.converters.ResponseInit(n3), this[y] = { settingsObject: {} }, this[_] = U({}), this[I] = new a2(S), this[I][C] = "response", this[I][N] = this[_].headersList, this[I][y] = this[y];
        let t3 = null;
        if (null != e3) {
          const [n4, a3] = r(e3);
          t3 = { body: n4, type: a3 };
        }
        G(this, n3, t3);
      }
      get type() {
        return B.brandCheck(this, F), this[_].type;
      }
      get url() {
        B.brandCheck(this, F);
        const e3 = this[_].urlList, n3 = e3[e3.length - 1] ?? null;
        return null === n3 ? "" : R(n3, true);
      }
      get redirected() {
        return B.brandCheck(this, F), this[_].urlList.length > 1;
      }
      get status() {
        return B.brandCheck(this, F), this[_].status;
      }
      get ok() {
        return B.brandCheck(this, F), this[_].status >= 200 && this[_].status <= 299;
      }
      get statusText() {
        return B.brandCheck(this, F), this[_].statusText;
      }
      get headers() {
        return B.brandCheck(this, F), this[I];
      }
      get body() {
        return B.brandCheck(this, F), this[_].body ? this[_].body.stream : null;
      }
      get bodyUsed() {
        return B.brandCheck(this, F), !!this[_].body && c.isDisturbed(this[_].body.stream);
      }
      clone() {
        if (B.brandCheck(this, F), this.bodyUsed || this.body && this.body.locked) throw B.errors.exception({ header: "Response.clone", message: "Body has already been consumed." });
        const e3 = O(this[_]), n3 = new F();
        return n3[_] = e3, n3[y] = this[y], n3[I][N] = e3.headersList, n3[I][C] = this[I][C], n3[I][y] = this[I][y], n3;
      }
    }
    function O(e3) {
      if (e3.internalResponse) return x(O(e3.internalResponse), e3.type);
      const n3 = U({ ...e3, body: null });
      return null != e3.body && (n3.body = i(e3.body)), n3;
    }
    function U(e3) {
      return { aborted: false, rangeRequested: false, timingAllowPassed: false, requestIncludesCredentials: false, type: "default", status: 200, timingInfo: null, cacheState: "", statusText: "", ...e3, headersList: e3.headersList ? new s2(e3.headersList) : new s2(), urlList: e3.urlList ? [...e3.urlList] : [] };
    }
    function L(e3) {
      return U({ type: "error", status: 0, error: E(e3) ? e3 : new Error(e3 ? String(e3) : e3), aborted: e3 && "AbortError" === e3.name });
    }
    function P(e3, n3) {
      return n3 = { internalResponse: e3, ...n3 }, new Proxy(e3, { get: (e4, t3) => t3 in n3 ? n3[t3] : e4[t3], set: (e4, t3, a3) => (w(!(t3 in n3)), e4[t3] = a3, true) });
    }
    function x(e3, n3) {
      return "basic" === n3 ? P(e3, { type: "basic", headersList: e3.headersList }) : "cors" === n3 ? P(e3, { type: "cors", headersList: e3.headersList }) : "opaque" === n3 ? P(e3, { type: "opaque", urlList: Object.freeze([]), status: 0, statusText: "", body: null }) : "opaqueredirect" === n3 ? P(e3, { type: "opaqueredirect", status: 0, statusText: "", headersList: [], body: null }) : void w(false);
    }
    function G(e3, n3, t3) {
      if (null !== n3.status && (n3.status < 200 || n3.status > 599)) throw new RangeError('init["status"] must be in the range of 200 to 599, inclusive.');
      if ("statusText" in n3 && null != n3.statusText && !d(String(n3.statusText))) throw new TypeError("Invalid statusText");
      if ("status" in n3 && null != n3.status && (e3[_].status = n3.status), "statusText" in n3 && null != n3.statusText && (e3[_].statusText = n3.statusText), "headers" in n3 && null != n3.headers && o2(e3[I], n3.headers), t3) {
        if (k.includes(e3.status)) throw B.errors.exception({ header: "Response constructor", message: "Invalid response status code " + e3.status });
        e3[_].body = t3.body, null == t3.type || e3[_].headersList.contains("Content-Type") || e3[_].headersList.append("content-type", t3.type);
      }
    }
    A(F), Object.defineProperties(F.prototype, { type: l, url: l, status: l, ok: l, redirected: l, statusText: l, headers: l, clone: l, body: l, bodyUsed: l, [Symbol.toStringTag]: { value: "Response", configurable: true } }), Object.defineProperties(F, { json: l, redirect: l, error: l }), B.converters.ReadableStream = B.interfaceConverter(D), B.converters.FormData = B.interfaceConverter(Q), B.converters.URLSearchParams = B.interfaceConverter(URLSearchParams), B.converters.XMLHttpRequestBodyInit = function(e3) {
      return "string" == typeof e3 ? B.converters.USVString(e3) : g(e3) ? B.converters.Blob(e3, { strict: false }) : b.isArrayBuffer(e3) || b.isTypedArray(e3) || b.isDataView(e3) ? B.converters.BufferSource(e3) : c.isFormDataLike(e3) ? B.converters.FormData(e3, { strict: false }) : e3 instanceof URLSearchParams ? B.converters.URLSearchParams(e3) : B.converters.DOMString(e3);
    }, B.converters.BodyInit = function(e3) {
      return e3 instanceof D ? B.converters.ReadableStream(e3) : e3?.[Symbol.asyncIterator] ? e3 : B.converters.XMLHttpRequestBodyInit(e3);
    }, B.converters.ResponseInit = B.dictionaryConverter([{ key: "status", converter: B.converters["unsigned short"], defaultValue: 200 }, { key: "statusText", converter: B.converters.ByteString, defaultValue: "" }, { key: "headers", converter: B.converters.HeadersInit }]), e2.exports = { makeNetworkError: L, makeResponse: U, makeAppropriateNetworkError: function(e3, n3 = null) {
      return w(m(e3)), u(e3) ? L(Object.assign(new f("The operation was aborted.", "AbortError"), { cause: n3 })) : L(Object.assign(new f("Request was cancelled."), { cause: n3 }));
    }, filterResponse: x, Response: F, cloneResponse: O };
  }