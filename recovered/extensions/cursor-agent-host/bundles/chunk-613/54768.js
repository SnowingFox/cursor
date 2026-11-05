// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 54768 range:298643..306712
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
54768: (A, e, t) => {
  "use strict";
  const { Headers: r, HeadersList: s, fill: o, getHeadersGuard: n, setHeadersGuard: i, setHeadersList: a } = t(48969), { extractBody: Q, cloneBody: g, mixinBody: E, hasFinalizationRegistry: B, streamRegistry: c, bodyUnusable: I } = t(33095), C = t(55201), h = t(57975), { kEnumerableProperty: l } = C, { isValidReasonPhrase: u, isCancelled: d, isAborted: f, isBlobLike: w, serializeJavascriptValueToJSONString: y, isErrorLike: D, isomorphicEncode: p, environmentSettingsObject: k } = t(48215), { redirectStatusSet: R, nullBodyStatus: F } = t(99354), { kState: m, kHeaders: b } = t(15978), { webidl: N } = t(43290), { FormData: S } = t(41445), { URLSerializer: M } = t(52603), { kConstruct: U } = t(76992), L = t(56970), { types: T } = t(57975), Y = new TextEncoder("utf-8");
  class G {
    static error() {
      return O(H(), "immutable");
    }
    static json(A2, e2 = {}) {
      N.argumentLengthCheck(arguments, 1, "Response.json"), null !== e2 && (e2 = N.converters.ResponseInit(e2));
      const t2 = Y.encode(y(A2)), r2 = Q(t2), s2 = O(v({}), "response");
      return W(s2, e2, { body: r2[0], type: "application/json" }), s2;
    }
    static redirect(A2, e2 = 302) {
      let t2;
      N.argumentLengthCheck(arguments, 1, "Response.redirect"), A2 = N.converters.USVString(A2), e2 = N.converters["unsigned short"](e2);
      try {
        t2 = new URL(A2, k.settingsObject.baseUrl);
      } catch (e3) {
        throw new TypeError(`Failed to parse URL from ${A2}`, { cause: e3 });
      }
      if (!R.has(e2)) throw new RangeError(`Invalid status code ${e2}`);
      const r2 = O(v({}), "immutable");
      r2[m].status = e2;
      const s2 = p(M(t2));
      return r2[m].headersList.append("location", s2, true), r2;
    }
    constructor(A2 = null, e2 = {}) {
      if (N.util.markAsUncloneable(this), A2 === U) return;
      null !== A2 && (A2 = N.converters.BodyInit(A2)), e2 = N.converters.ResponseInit(e2), this[m] = v({}), this[b] = new r(U), i(this[b], "response"), a(this[b], this[m].headersList);
      let t2 = null;
      if (null != A2) {
        const [e3, r2] = Q(A2);
        t2 = { body: e3, type: r2 };
      }
      W(this, e2, t2);
    }
    get type() {
      return N.brandCheck(this, G), this[m].type;
    }
    get url() {
      N.brandCheck(this, G);
      const A2 = this[m].urlList, e2 = A2[A2.length - 1] ?? null;
      return null === e2 ? "" : M(e2, true);
    }
    get redirected() {
      return N.brandCheck(this, G), this[m].urlList.length > 1;
    }
    get status() {
      return N.brandCheck(this, G), this[m].status;
    }
    get ok() {
      return N.brandCheck(this, G), this[m].status >= 200 && this[m].status <= 299;
    }
    get statusText() {
      return N.brandCheck(this, G), this[m].statusText;
    }
    get headers() {
      return N.brandCheck(this, G), this[b];
    }
    get body() {
      return N.brandCheck(this, G), this[m].body ? this[m].body.stream : null;
    }
    get bodyUsed() {
      return N.brandCheck(this, G), !!this[m].body && C.isDisturbed(this[m].body.stream);
    }
    clone() {
      if (N.brandCheck(this, G), I(this)) throw N.errors.exception({ header: "Response.clone", message: "Body has already been consumed." });
      const A2 = J(this[m]);
      return B && this[m].body?.stream && c.register(this, new WeakRef(this[m].body.stream)), O(A2, n(this[b]));
    }
    [h.inspect.custom](A2, e2) {
      null === e2.depth && (e2.depth = 2), e2.colors ??= true;
      const t2 = { status: this.status, statusText: this.statusText, headers: this.headers, body: this.body, bodyUsed: this.bodyUsed, ok: this.ok, redirected: this.redirected, type: this.type, url: this.url };
      return `Response ${h.formatWithOptions(e2, t2)}`;
    }
  }
  function J(A2) {
    if (A2.internalResponse) return x(J(A2.internalResponse), A2.type);
    const e2 = v({ ...A2, body: null });
    return null != A2.body && (e2.body = g(e2, A2.body)), e2;
  }
  function v(A2) {
    return { aborted: false, rangeRequested: false, timingAllowPassed: false, requestIncludesCredentials: false, type: "default", status: 200, timingInfo: null, cacheState: "", statusText: "", ...A2, headersList: A2?.headersList ? new s(A2?.headersList) : new s(), urlList: A2?.urlList ? [...A2.urlList] : [] };
  }
  function H(A2) {
    return v({ type: "error", status: 0, error: D(A2) ? A2 : new Error(A2 ? String(A2) : A2), aborted: A2 && "AbortError" === A2.name });
  }
  function V(A2, e2) {
    return e2 = { internalResponse: A2, ...e2 }, new Proxy(A2, { get: (A3, t2) => t2 in e2 ? e2[t2] : A3[t2], set: (A3, t2, r2) => (L(!(t2 in e2)), A3[t2] = r2, true) });
  }
  function x(A2, e2) {
    return "basic" === e2 ? V(A2, { type: "basic", headersList: A2.headersList }) : "cors" === e2 ? V(A2, { type: "cors", headersList: A2.headersList }) : "opaque" === e2 ? V(A2, { type: "opaque", urlList: Object.freeze([]), status: 0, statusText: "", body: null }) : "opaqueredirect" === e2 ? V(A2, { type: "opaqueredirect", status: 0, statusText: "", headersList: [], body: null }) : void L(false);
  }
  function W(A2, e2, t2) {
    if (null !== e2.status && (e2.status < 200 || e2.status > 599)) throw new RangeError('init["status"] must be in the range of 200 to 599, inclusive.');
    if ("statusText" in e2 && null != e2.statusText && !u(String(e2.statusText))) throw new TypeError("Invalid statusText");
    if ("status" in e2 && null != e2.status && (A2[m].status = e2.status), "statusText" in e2 && null != e2.statusText && (A2[m].statusText = e2.statusText), "headers" in e2 && null != e2.headers && o(A2[b], e2.headers), t2) {
      if (F.includes(A2.status)) throw N.errors.exception({ header: "Response constructor", message: `Invalid response status code ${A2.status}` });
      A2[m].body = t2.body, null == t2.type || A2[m].headersList.contains("content-type", true) || A2[m].headersList.append("content-type", t2.type, true);
    }
  }
  function O(A2, e2) {
    const t2 = new G(U);
    return t2[m] = A2, t2[b] = new r(U), a(t2[b], A2.headersList), i(t2[b], e2), B && A2.body?.stream && c.register(t2, new WeakRef(A2.body.stream)), t2;
  }
  E(G), Object.defineProperties(G.prototype, { type: l, url: l, status: l, ok: l, redirected: l, statusText: l, headers: l, clone: l, body: l, bodyUsed: l, [Symbol.toStringTag]: { value: "Response", configurable: true } }), Object.defineProperties(G, { json: l, redirect: l, error: l }), N.converters.ReadableStream = N.interfaceConverter(ReadableStream), N.converters.FormData = N.interfaceConverter(S), N.converters.URLSearchParams = N.interfaceConverter(URLSearchParams), N.converters.XMLHttpRequestBodyInit = function(A2, e2, t2) {
    return "string" == typeof A2 ? N.converters.USVString(A2, e2, t2) : w(A2) ? N.converters.Blob(A2, e2, t2, { strict: false }) : ArrayBuffer.isView(A2) || T.isArrayBuffer(A2) ? N.converters.BufferSource(A2, e2, t2) : C.isFormDataLike(A2) ? N.converters.FormData(A2, e2, t2, { strict: false }) : A2 instanceof URLSearchParams ? N.converters.URLSearchParams(A2, e2, t2) : N.converters.DOMString(A2, e2, t2);
  }, N.converters.BodyInit = function(A2, e2, t2) {
    return A2 instanceof ReadableStream ? N.converters.ReadableStream(A2, e2, t2) : A2?.[Symbol.asyncIterator] ? A2 : N.converters.XMLHttpRequestBodyInit(A2, e2, t2);
  }, N.converters.ResponseInit = N.dictionaryConverter([{ key: "status", converter: N.converters["unsigned short"], defaultValue: () => 200 }, { key: "statusText", converter: N.converters.ByteString, defaultValue: () => "" }, { key: "headers", converter: N.converters.HeadersInit }]), A.exports = { isNetworkError: function(A2) {
    return "error" === A2.type && 0 === A2.status;
  }, makeNetworkError: H, makeResponse: v, makeAppropriateNetworkError: function(A2, e2 = null) {
    return L(d(A2)), f(A2) ? H(Object.assign(new DOMException("The operation was aborted.", "AbortError"), { cause: e2 })) : H(Object.assign(new DOMException("Request was cancelled."), { cause: e2 }));
  }, filterResponse: x, Response: G, cloneResponse: J, fromInnerResponse: O };
}