// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 1099 range:119830..127618
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1099: (e2, t2, A2) => {
    "use strict";
    const { Headers: n2, HeadersList: r2, fill: o2 } = A2(2932), { extractBody: s, cloneBody: i, mixinBody: a } = A2(7052), c = A2(9361), { kEnumerableProperty: l } = c, { isValidReasonPhrase: u, isCancelled: g, isAborted: E, isBlobLike: h, serializeJavascriptValueToJSONString: d, isErrorLike: I, isomorphicEncode: B } = A2(5728), { redirectStatusSet: Q, nullBodyStatus: f, DOMException: C } = A2(6687), { kState: p, kHeaders: m, kGuard: y, kRealm: w } = A2(5899), { webidl: k } = A2(8005), { FormData: b } = A2(1606), { getGlobalOrigin: N } = A2(9523), { URLSerializer: T } = A2(3631), { kHeadersList: D, kConstruct: S } = A2(8832), R = A2(2613), { types: F } = A2(9023), v = globalThis.ReadableStream || A2(3774).ReadableStream, M = new TextEncoder("utf-8");
    class U {
      static error() {
        const e3 = { settingsObject: {} }, t3 = new U();
        return t3[p] = J(), t3[w] = e3, t3[m][D] = t3[p].headersList, t3[m][y] = "immutable", t3[m][w] = e3, t3;
      }
      static json(e3, t3 = {}) {
        k.argumentLengthCheck(arguments, 1, { header: "Response.json" }), null !== t3 && (t3 = k.converters.ResponseInit(t3));
        const A3 = M.encode(d(e3)), n3 = s(A3), r3 = { settingsObject: {} }, o3 = new U();
        return o3[w] = r3, o3[m][y] = "response", o3[m][w] = r3, G(o3, t3, { body: n3[0], type: "application/json" }), o3;
      }
      static redirect(e3, t3 = 302) {
        const A3 = { settingsObject: {} };
        let n3;
        k.argumentLengthCheck(arguments, 1, { header: "Response.redirect" }), e3 = k.converters.USVString(e3), t3 = k.converters["unsigned short"](t3);
        try {
          n3 = new URL(e3, N());
        } catch (t4) {
          throw Object.assign(new TypeError("Failed to parse URL from " + e3), { cause: t4 });
        }
        if (!Q.has(t3)) throw new RangeError("Invalid status code " + t3);
        const r3 = new U();
        r3[w] = A3, r3[m][y] = "immutable", r3[m][w] = A3, r3[p].status = t3;
        const o3 = B(T(n3));
        return r3[p].headersList.append("location", o3), r3;
      }
      constructor(e3 = null, t3 = {}) {
        null !== e3 && (e3 = k.converters.BodyInit(e3)), t3 = k.converters.ResponseInit(t3), this[w] = { settingsObject: {} }, this[p] = _({}), this[m] = new n2(S), this[m][y] = "response", this[m][D] = this[p].headersList, this[m][w] = this[w];
        let A3 = null;
        if (null != e3) {
          const [t4, n3] = s(e3);
          A3 = { body: t4, type: n3 };
        }
        G(this, t3, A3);
      }
      get type() {
        return k.brandCheck(this, U), this[p].type;
      }
      get url() {
        k.brandCheck(this, U);
        const e3 = this[p].urlList, t3 = e3[e3.length - 1] ?? null;
        return null === t3 ? "" : T(t3, true);
      }
      get redirected() {
        return k.brandCheck(this, U), this[p].urlList.length > 1;
      }
      get status() {
        return k.brandCheck(this, U), this[p].status;
      }
      get ok() {
        return k.brandCheck(this, U), this[p].status >= 200 && this[p].status <= 299;
      }
      get statusText() {
        return k.brandCheck(this, U), this[p].statusText;
      }
      get headers() {
        return k.brandCheck(this, U), this[m];
      }
      get body() {
        return k.brandCheck(this, U), this[p].body ? this[p].body.stream : null;
      }
      get bodyUsed() {
        return k.brandCheck(this, U), !!this[p].body && c.isDisturbed(this[p].body.stream);
      }
      clone() {
        if (k.brandCheck(this, U), this.bodyUsed || this.body && this.body.locked) throw k.errors.exception({ header: "Response.clone", message: "Body has already been consumed." });
        const e3 = L(this[p]), t3 = new U();
        return t3[p] = e3, t3[w] = this[w], t3[m][D] = e3.headersList, t3[m][y] = this[m][y], t3[m][w] = this[m][w], t3;
      }
    }
    function L(e3) {
      if (e3.internalResponse) return Y(L(e3.internalResponse), e3.type);
      const t3 = _({ ...e3, body: null });
      return null != e3.body && (t3.body = i(e3.body)), t3;
    }
    function _(e3) {
      return { aborted: false, rangeRequested: false, timingAllowPassed: false, requestIncludesCredentials: false, type: "default", status: 200, timingInfo: null, cacheState: "", statusText: "", ...e3, headersList: e3.headersList ? new r2(e3.headersList) : new r2(), urlList: e3.urlList ? [...e3.urlList] : [] };
    }
    function J(e3) {
      return _({ type: "error", status: 0, error: I(e3) ? e3 : new Error(e3 ? String(e3) : e3), aborted: e3 && "AbortError" === e3.name });
    }
    function O(e3, t3) {
      return t3 = { internalResponse: e3, ...t3 }, new Proxy(e3, { get: (e4, A3) => A3 in t3 ? t3[A3] : e4[A3], set: (e4, A3, n3) => (R(!(A3 in t3)), e4[A3] = n3, true) });
    }
    function Y(e3, t3) {
      return "basic" === t3 ? O(e3, { type: "basic", headersList: e3.headersList }) : "cors" === t3 ? O(e3, { type: "cors", headersList: e3.headersList }) : "opaque" === t3 ? O(e3, { type: "opaque", urlList: Object.freeze([]), status: 0, statusText: "", body: null }) : "opaqueredirect" === t3 ? O(e3, { type: "opaqueredirect", status: 0, statusText: "", headersList: [], body: null }) : void R(false);
    }
    function G(e3, t3, A3) {
      if (null !== t3.status && (t3.status < 200 || t3.status > 599)) throw new RangeError('init["status"] must be in the range of 200 to 599, inclusive.');
      if ("statusText" in t3 && null != t3.statusText && !u(String(t3.statusText))) throw new TypeError("Invalid statusText");
      if ("status" in t3 && null != t3.status && (e3[p].status = t3.status), "statusText" in t3 && null != t3.statusText && (e3[p].statusText = t3.statusText), "headers" in t3 && null != t3.headers && o2(e3[m], t3.headers), A3) {
        if (f.includes(e3.status)) throw k.errors.exception({ header: "Response constructor", message: "Invalid response status code " + e3.status });
        e3[p].body = A3.body, null == A3.type || e3[p].headersList.contains("Content-Type") || e3[p].headersList.append("content-type", A3.type);
      }
    }
    a(U), Object.defineProperties(U.prototype, { type: l, url: l, status: l, ok: l, redirected: l, statusText: l, headers: l, clone: l, body: l, bodyUsed: l, [Symbol.toStringTag]: { value: "Response", configurable: true } }), Object.defineProperties(U, { json: l, redirect: l, error: l }), k.converters.ReadableStream = k.interfaceConverter(v), k.converters.FormData = k.interfaceConverter(b), k.converters.URLSearchParams = k.interfaceConverter(URLSearchParams), k.converters.XMLHttpRequestBodyInit = function(e3) {
      return "string" == typeof e3 ? k.converters.USVString(e3) : h(e3) ? k.converters.Blob(e3, { strict: false }) : F.isArrayBuffer(e3) || F.isTypedArray(e3) || F.isDataView(e3) ? k.converters.BufferSource(e3) : c.isFormDataLike(e3) ? k.converters.FormData(e3, { strict: false }) : e3 instanceof URLSearchParams ? k.converters.URLSearchParams(e3) : k.converters.DOMString(e3);
    }, k.converters.BodyInit = function(e3) {
      return e3 instanceof v ? k.converters.ReadableStream(e3) : e3?.[Symbol.asyncIterator] ? e3 : k.converters.XMLHttpRequestBodyInit(e3);
    }, k.converters.ResponseInit = k.dictionaryConverter([{ key: "status", converter: k.converters["unsigned short"], defaultValue: 200 }, { key: "statusText", converter: k.converters.ByteString, defaultValue: "" }, { key: "headers", converter: k.converters.HeadersInit }]), e2.exports = { makeNetworkError: J, makeResponse: _, makeAppropriateNetworkError: function(e3, t3 = null) {
      return R(g(e3)), E(e3) ? J(Object.assign(new C("The operation was aborted.", "AbortError"), { cause: t3 })) : J(Object.assign(new C("Request was cancelled."), { cause: t3 }));
    }, filterResponse: Y, Response: U, cloneResponse: L };
  }