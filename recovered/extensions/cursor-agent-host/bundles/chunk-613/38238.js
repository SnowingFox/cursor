// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 38238 range:208716..218521
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
38238: (A) => {
  "use strict";
  const e = /* @__PURE__ */ Symbol.for("undici.error.UND_ERR");
  class t extends Error {
    constructor(A2) {
      super(A2), this.name = "UndiciError", this.code = "UND_ERR";
    }
    static [Symbol.hasInstance](A2) {
      return A2 && true === A2[e];
    }
    [e] = true;
  }
  const r = /* @__PURE__ */ Symbol.for("undici.error.UND_ERR_CONNECT_TIMEOUT");
  class s extends t {
    constructor(A2) {
      super(A2), this.name = "ConnectTimeoutError", this.message = A2 || "Connect Timeout Error", this.code = "UND_ERR_CONNECT_TIMEOUT";
    }
    static [Symbol.hasInstance](A2) {
      return A2 && true === A2[r];
    }
    [r] = true;
  }
  const o = /* @__PURE__ */ Symbol.for("undici.error.UND_ERR_HEADERS_TIMEOUT");
  class n extends t {
    constructor(A2) {
      super(A2), this.name = "HeadersTimeoutError", this.message = A2 || "Headers Timeout Error", this.code = "UND_ERR_HEADERS_TIMEOUT";
    }
    static [Symbol.hasInstance](A2) {
      return A2 && true === A2[o];
    }
    [o] = true;
  }
  const i = /* @__PURE__ */ Symbol.for("undici.error.UND_ERR_HEADERS_OVERFLOW");
  class a extends t {
    constructor(A2) {
      super(A2), this.name = "HeadersOverflowError", this.message = A2 || "Headers Overflow Error", this.code = "UND_ERR_HEADERS_OVERFLOW";
    }
    static [Symbol.hasInstance](A2) {
      return A2 && true === A2[i];
    }
    [i] = true;
  }
  const Q = /* @__PURE__ */ Symbol.for("undici.error.UND_ERR_BODY_TIMEOUT");
  class g extends t {
    constructor(A2) {
      super(A2), this.name = "BodyTimeoutError", this.message = A2 || "Body Timeout Error", this.code = "UND_ERR_BODY_TIMEOUT";
    }
    static [Symbol.hasInstance](A2) {
      return A2 && true === A2[Q];
    }
    [Q] = true;
  }
  const E = /* @__PURE__ */ Symbol.for("undici.error.UND_ERR_RESPONSE_STATUS_CODE");
  class B extends t {
    constructor(A2, e2, t2, r2) {
      super(A2), this.name = "ResponseStatusCodeError", this.message = A2 || "Response Status Code Error", this.code = "UND_ERR_RESPONSE_STATUS_CODE", this.body = r2, this.status = e2, this.statusCode = e2, this.headers = t2;
    }
    static [Symbol.hasInstance](A2) {
      return A2 && true === A2[E];
    }
    [E] = true;
  }
  const c = /* @__PURE__ */ Symbol.for("undici.error.UND_ERR_INVALID_ARG");
  class I extends t {
    constructor(A2) {
      super(A2), this.name = "InvalidArgumentError", this.message = A2 || "Invalid Argument Error", this.code = "UND_ERR_INVALID_ARG";
    }
    static [Symbol.hasInstance](A2) {
      return A2 && true === A2[c];
    }
    [c] = true;
  }
  const C = /* @__PURE__ */ Symbol.for("undici.error.UND_ERR_INVALID_RETURN_VALUE");
  class h extends t {
    constructor(A2) {
      super(A2), this.name = "InvalidReturnValueError", this.message = A2 || "Invalid Return Value Error", this.code = "UND_ERR_INVALID_RETURN_VALUE";
    }
    static [Symbol.hasInstance](A2) {
      return A2 && true === A2[C];
    }
    [C] = true;
  }
  const l = /* @__PURE__ */ Symbol.for("undici.error.UND_ERR_ABORT");
  class u extends t {
    constructor(A2) {
      super(A2), this.name = "AbortError", this.message = A2 || "The operation was aborted", this.code = "UND_ERR_ABORT";
    }
    static [Symbol.hasInstance](A2) {
      return A2 && true === A2[l];
    }
    [l] = true;
  }
  const d = /* @__PURE__ */ Symbol.for("undici.error.UND_ERR_ABORTED");
  class f extends u {
    constructor(A2) {
      super(A2), this.name = "AbortError", this.message = A2 || "Request aborted", this.code = "UND_ERR_ABORTED";
    }
    static [Symbol.hasInstance](A2) {
      return A2 && true === A2[d];
    }
    [d] = true;
  }
  const w = /* @__PURE__ */ Symbol.for("undici.error.UND_ERR_INFO");
  class y extends t {
    constructor(A2) {
      super(A2), this.name = "InformationalError", this.message = A2 || "Request information", this.code = "UND_ERR_INFO";
    }
    static [Symbol.hasInstance](A2) {
      return A2 && true === A2[w];
    }
    [w] = true;
  }
  const D = /* @__PURE__ */ Symbol.for("undici.error.UND_ERR_REQ_CONTENT_LENGTH_MISMATCH");
  class p extends t {
    constructor(A2) {
      super(A2), this.name = "RequestContentLengthMismatchError", this.message = A2 || "Request body length does not match content-length header", this.code = "UND_ERR_REQ_CONTENT_LENGTH_MISMATCH";
    }
    static [Symbol.hasInstance](A2) {
      return A2 && true === A2[D];
    }
    [D] = true;
  }
  const k = /* @__PURE__ */ Symbol.for("undici.error.UND_ERR_RES_CONTENT_LENGTH_MISMATCH");
  class R extends t {
    constructor(A2) {
      super(A2), this.name = "ResponseContentLengthMismatchError", this.message = A2 || "Response body length does not match content-length header", this.code = "UND_ERR_RES_CONTENT_LENGTH_MISMATCH";
    }
    static [Symbol.hasInstance](A2) {
      return A2 && true === A2[k];
    }
    [k] = true;
  }
  const F = /* @__PURE__ */ Symbol.for("undici.error.UND_ERR_DESTROYED");
  class m extends t {
    constructor(A2) {
      super(A2), this.name = "ClientDestroyedError", this.message = A2 || "The client is destroyed", this.code = "UND_ERR_DESTROYED";
    }
    static [Symbol.hasInstance](A2) {
      return A2 && true === A2[F];
    }
    [F] = true;
  }
  const b = /* @__PURE__ */ Symbol.for("undici.error.UND_ERR_CLOSED");
  class N extends t {
    constructor(A2) {
      super(A2), this.name = "ClientClosedError", this.message = A2 || "The client is closed", this.code = "UND_ERR_CLOSED";
    }
    static [Symbol.hasInstance](A2) {
      return A2 && true === A2[b];
    }
    [b] = true;
  }
  const S = /* @__PURE__ */ Symbol.for("undici.error.UND_ERR_SOCKET");
  class M extends t {
    constructor(A2, e2) {
      super(A2), this.name = "SocketError", this.message = A2 || "Socket error", this.code = "UND_ERR_SOCKET", this.socket = e2;
    }
    static [Symbol.hasInstance](A2) {
      return A2 && true === A2[S];
    }
    [S] = true;
  }
  const U = /* @__PURE__ */ Symbol.for("undici.error.UND_ERR_NOT_SUPPORTED");
  class L extends t {
    constructor(A2) {
      super(A2), this.name = "NotSupportedError", this.message = A2 || "Not supported error", this.code = "UND_ERR_NOT_SUPPORTED";
    }
    static [Symbol.hasInstance](A2) {
      return A2 && true === A2[U];
    }
    [U] = true;
  }
  const T = /* @__PURE__ */ Symbol.for("undici.error.UND_ERR_BPL_MISSING_UPSTREAM");
  class Y extends t {
    constructor(A2) {
      super(A2), this.name = "MissingUpstreamError", this.message = A2 || "No upstream has been added to the BalancedPool", this.code = "UND_ERR_BPL_MISSING_UPSTREAM";
    }
    static [Symbol.hasInstance](A2) {
      return A2 && true === A2[T];
    }
    [T] = true;
  }
  const G = /* @__PURE__ */ Symbol.for("undici.error.UND_ERR_HTTP_PARSER");
  class J extends Error {
    constructor(A2, e2, t2) {
      super(A2), this.name = "HTTPParserError", this.code = e2 ? `HPE_${e2}` : void 0, this.data = t2 ? t2.toString() : void 0;
    }
    static [Symbol.hasInstance](A2) {
      return A2 && true === A2[G];
    }
    [G] = true;
  }
  const v = /* @__PURE__ */ Symbol.for("undici.error.UND_ERR_RES_EXCEEDED_MAX_SIZE");
  class H extends t {
    constructor(A2) {
      super(A2), this.name = "ResponseExceededMaxSizeError", this.message = A2 || "Response content exceeded max size", this.code = "UND_ERR_RES_EXCEEDED_MAX_SIZE";
    }
    static [Symbol.hasInstance](A2) {
      return A2 && true === A2[v];
    }
    [v] = true;
  }
  const V = /* @__PURE__ */ Symbol.for("undici.error.UND_ERR_REQ_RETRY");
  class x extends t {
    constructor(A2, e2, { headers: t2, data: r2 }) {
      super(A2), this.name = "RequestRetryError", this.message = A2 || "Request retry error", this.code = "UND_ERR_REQ_RETRY", this.statusCode = e2, this.data = r2, this.headers = t2;
    }
    static [Symbol.hasInstance](A2) {
      return A2 && true === A2[V];
    }
    [V] = true;
  }
  const W = /* @__PURE__ */ Symbol.for("undici.error.UND_ERR_RESPONSE");
  class O extends t {
    constructor(A2, e2, { headers: t2, data: r2 }) {
      super(A2), this.name = "ResponseError", this.message = A2 || "Response error", this.code = "UND_ERR_RESPONSE", this.statusCode = e2, this.data = r2, this.headers = t2;
    }
    static [Symbol.hasInstance](A2) {
      return A2 && true === A2[W];
    }
    [W] = true;
  }
  const P = /* @__PURE__ */ Symbol.for("undici.error.UND_ERR_PRX_TLS");
  class q extends t {
    constructor(A2, e2, t2) {
      super(e2, { cause: A2, ...t2 ?? {} }), this.name = "SecureProxyConnectionError", this.message = e2 || "Secure Proxy Connection failed", this.code = "UND_ERR_PRX_TLS", this.cause = A2;
    }
    static [Symbol.hasInstance](A2) {
      return A2 && true === A2[P];
    }
    [P] = true;
  }
  const Z = /* @__PURE__ */ Symbol.for("undici.error.UND_ERR_WS_MESSAGE_SIZE_EXCEEDED");
  class z extends t {
    constructor(A2) {
      super(A2), this.name = "MessageSizeExceededError", this.message = A2 || "Max decompressed message size exceeded", this.code = "UND_ERR_WS_MESSAGE_SIZE_EXCEEDED";
    }
    static [Symbol.hasInstance](A2) {
      return A2 && true === A2[Z];
    }
    get [Z]() {
      return true;
    }
  }
  A.exports = { AbortError: u, HTTPParserError: J, UndiciError: t, HeadersTimeoutError: n, HeadersOverflowError: a, BodyTimeoutError: g, RequestContentLengthMismatchError: p, ConnectTimeoutError: s, ResponseStatusCodeError: B, InvalidArgumentError: I, InvalidReturnValueError: h, RequestAbortedError: f, ClientDestroyedError: m, ClientClosedError: N, InformationalError: y, SocketError: M, NotSupportedError: L, ResponseContentLengthMismatchError: R, BalancedPoolMissingUpstreamError: Y, ResponseExceededMaxSizeError: H, RequestRetryError: x, ResponseError: O, SecureProxyConnectionError: q, MessageSizeExceededError: z };
}