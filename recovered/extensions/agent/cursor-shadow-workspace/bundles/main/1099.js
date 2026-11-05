// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 1099 range:113922..121710
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1099: (e2, A2, t2) => {
    "use strict";
    const { Headers: n2, HeadersList: r2, fill: o2 } = t2(2932), { extractBody: s, cloneBody: a, mixinBody: i } = t2(7052), c = t2(9361), { kEnumerableProperty: l } = c, { isValidReasonPhrase: g, isCancelled: E, isAborted: u, isBlobLike: d, serializeJavascriptValueToJSONString: I, isErrorLike: h, isomorphicEncode: Q } = t2(5728), { redirectStatusSet: m, nullBodyStatus: C, DOMException: B } = t2(6687), { kState: p, kHeaders: f, kGuard: y, kRealm: T } = t2(5899), { webidl: k } = t2(8005), { FormData: w } = t2(1606), { getGlobalOrigin: N } = t2(9523), { URLSerializer: D } = t2(3631), { kHeadersList: R, kConstruct: S } = t2(8832), b = t2(2613), { types: F } = t2(9023), _ = globalThis.ReadableStream || t2(3774).ReadableStream, v = new TextEncoder("utf-8");
    class L {
      static error() {
        const e3 = { settingsObject: {} }, A3 = new L();
        return A3[p] = O(), A3[T] = e3, A3[f][R] = A3[p].headersList, A3[f][y] = "immutable", A3[f][T] = e3, A3;
      }
      static json(e3, A3 = {}) {
        k.argumentLengthCheck(arguments, 1, { header: "Response.json" }), null !== A3 && (A3 = k.converters.ResponseInit(A3));
        const t3 = v.encode(I(e3)), n3 = s(t3), r3 = { settingsObject: {} }, o3 = new L();
        return o3[T] = r3, o3[f][y] = "response", o3[f][T] = r3, P(o3, A3, { body: n3[0], type: "application/json" }), o3;
      }
      static redirect(e3, A3 = 302) {
        const t3 = { settingsObject: {} };
        let n3;
        k.argumentLengthCheck(arguments, 1, { header: "Response.redirect" }), e3 = k.converters.USVString(e3), A3 = k.converters["unsigned short"](A3);
        try {
          n3 = new URL(e3, N());
        } catch (A4) {
          throw Object.assign(new TypeError("Failed to parse URL from " + e3), { cause: A4 });
        }
        if (!m.has(A3)) throw new RangeError("Invalid status code " + A3);
        const r3 = new L();
        r3[T] = t3, r3[f][y] = "immutable", r3[f][T] = t3, r3[p].status = A3;
        const o3 = Q(D(n3));
        return r3[p].headersList.append("location", o3), r3;
      }
      constructor(e3 = null, A3 = {}) {
        null !== e3 && (e3 = k.converters.BodyInit(e3)), A3 = k.converters.ResponseInit(A3), this[T] = { settingsObject: {} }, this[p] = M({}), this[f] = new n2(S), this[f][y] = "response", this[f][R] = this[p].headersList, this[f][T] = this[T];
        let t3 = null;
        if (null != e3) {
          const [A4, n3] = s(e3);
          t3 = { body: A4, type: n3 };
        }
        P(this, A3, t3);
      }
      get type() {
        return k.brandCheck(this, L), this[p].type;
      }
      get url() {
        k.brandCheck(this, L);
        const e3 = this[p].urlList, A3 = e3[e3.length - 1] ?? null;
        return null === A3 ? "" : D(A3, true);
      }
      get redirected() {
        return k.brandCheck(this, L), this[p].urlList.length > 1;
      }
      get status() {
        return k.brandCheck(this, L), this[p].status;
      }
      get ok() {
        return k.brandCheck(this, L), this[p].status >= 200 && this[p].status <= 299;
      }
      get statusText() {
        return k.brandCheck(this, L), this[p].statusText;
      }
      get headers() {
        return k.brandCheck(this, L), this[f];
      }
      get body() {
        return k.brandCheck(this, L), this[p].body ? this[p].body.stream : null;
      }
      get bodyUsed() {
        return k.brandCheck(this, L), !!this[p].body && c.isDisturbed(this[p].body.stream);
      }
      clone() {
        if (k.brandCheck(this, L), this.bodyUsed || this.body && this.body.locked) throw k.errors.exception({ header: "Response.clone", message: "Body has already been consumed." });
        const e3 = U(this[p]), A3 = new L();
        return A3[p] = e3, A3[T] = this[T], A3[f][R] = e3.headersList, A3[f][y] = this[f][y], A3[f][T] = this[f][T], A3;
      }
    }
    function U(e3) {
      if (e3.internalResponse) return Y(U(e3.internalResponse), e3.type);
      const A3 = M({ ...e3, body: null });
      return null != e3.body && (A3.body = a(e3.body)), A3;
    }
    function M(e3) {
      return { aborted: false, rangeRequested: false, timingAllowPassed: false, requestIncludesCredentials: false, type: "default", status: 200, timingInfo: null, cacheState: "", statusText: "", ...e3, headersList: e3.headersList ? new r2(e3.headersList) : new r2(), urlList: e3.urlList ? [...e3.urlList] : [] };
    }
    function O(e3) {
      return M({ type: "error", status: 0, error: h(e3) ? e3 : new Error(e3 ? String(e3) : e3), aborted: e3 && "AbortError" === e3.name });
    }
    function J(e3, A3) {
      return A3 = { internalResponse: e3, ...A3 }, new Proxy(e3, { get: (e4, t3) => t3 in A3 ? A3[t3] : e4[t3], set: (e4, t3, n3) => (b(!(t3 in A3)), e4[t3] = n3, true) });
    }
    function Y(e3, A3) {
      return "basic" === A3 ? J(e3, { type: "basic", headersList: e3.headersList }) : "cors" === A3 ? J(e3, { type: "cors", headersList: e3.headersList }) : "opaque" === A3 ? J(e3, { type: "opaque", urlList: Object.freeze([]), status: 0, statusText: "", body: null }) : "opaqueredirect" === A3 ? J(e3, { type: "opaqueredirect", status: 0, statusText: "", headersList: [], body: null }) : void b(false);
    }
    function P(e3, A3, t3) {
      if (null !== A3.status && (A3.status < 200 || A3.status > 599)) throw new RangeError('init["status"] must be in the range of 200 to 599, inclusive.');
      if ("statusText" in A3 && null != A3.statusText && !g(String(A3.statusText))) throw new TypeError("Invalid statusText");
      if ("status" in A3 && null != A3.status && (e3[p].status = A3.status), "statusText" in A3 && null != A3.statusText && (e3[p].statusText = A3.statusText), "headers" in A3 && null != A3.headers && o2(e3[f], A3.headers), t3) {
        if (C.includes(e3.status)) throw k.errors.exception({ header: "Response constructor", message: "Invalid response status code " + e3.status });
        e3[p].body = t3.body, null == t3.type || e3[p].headersList.contains("Content-Type") || e3[p].headersList.append("content-type", t3.type);
      }
    }
    i(L), Object.defineProperties(L.prototype, { type: l, url: l, status: l, ok: l, redirected: l, statusText: l, headers: l, clone: l, body: l, bodyUsed: l, [Symbol.toStringTag]: { value: "Response", configurable: true } }), Object.defineProperties(L, { json: l, redirect: l, error: l }), k.converters.ReadableStream = k.interfaceConverter(_), k.converters.FormData = k.interfaceConverter(w), k.converters.URLSearchParams = k.interfaceConverter(URLSearchParams), k.converters.XMLHttpRequestBodyInit = function(e3) {
      return "string" == typeof e3 ? k.converters.USVString(e3) : d(e3) ? k.converters.Blob(e3, { strict: false }) : F.isArrayBuffer(e3) || F.isTypedArray(e3) || F.isDataView(e3) ? k.converters.BufferSource(e3) : c.isFormDataLike(e3) ? k.converters.FormData(e3, { strict: false }) : e3 instanceof URLSearchParams ? k.converters.URLSearchParams(e3) : k.converters.DOMString(e3);
    }, k.converters.BodyInit = function(e3) {
      return e3 instanceof _ ? k.converters.ReadableStream(e3) : e3?.[Symbol.asyncIterator] ? e3 : k.converters.XMLHttpRequestBodyInit(e3);
    }, k.converters.ResponseInit = k.dictionaryConverter([{ key: "status", converter: k.converters["unsigned short"], defaultValue: 200 }, { key: "statusText", converter: k.converters.ByteString, defaultValue: "" }, { key: "headers", converter: k.converters.HeadersInit }]), e2.exports = { makeNetworkError: O, makeResponse: M, makeAppropriateNetworkError: function(e3, A3 = null) {
      return b(E(e3)), u(e3) ? O(Object.assign(new B("The operation was aborted.", "AbortError"), { cause: A3 })) : O(Object.assign(new B("Request was cancelled."), { cause: A3 }));
    }, filterResponse: Y, Response: L, cloneResponse: U };
  }