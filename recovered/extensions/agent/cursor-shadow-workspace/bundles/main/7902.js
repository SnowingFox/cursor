// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 7902 range:591774..597277
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7902: (e2) => {
    "use strict";
    class A2 extends Error {
      constructor(e3) {
        super(e3), this.name = "UndiciError", this.code = "UND_ERR";
      }
    }
    class t2 extends A2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, t2), this.name = "ConnectTimeoutError", this.message = e3 || "Connect Timeout Error", this.code = "UND_ERR_CONNECT_TIMEOUT";
      }
    }
    class n2 extends A2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, n2), this.name = "HeadersTimeoutError", this.message = e3 || "Headers Timeout Error", this.code = "UND_ERR_HEADERS_TIMEOUT";
      }
    }
    class r2 extends A2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, r2), this.name = "HeadersOverflowError", this.message = e3 || "Headers Overflow Error", this.code = "UND_ERR_HEADERS_OVERFLOW";
      }
    }
    class o2 extends A2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, o2), this.name = "BodyTimeoutError", this.message = e3 || "Body Timeout Error", this.code = "UND_ERR_BODY_TIMEOUT";
      }
    }
    class s extends A2 {
      constructor(e3, A3, t3, n3) {
        super(e3), Error.captureStackTrace(this, s), this.name = "ResponseStatusCodeError", this.message = e3 || "Response Status Code Error", this.code = "UND_ERR_RESPONSE_STATUS_CODE", this.body = n3, this.status = A3, this.statusCode = A3, this.headers = t3;
      }
    }
    class a extends A2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, a), this.name = "InvalidArgumentError", this.message = e3 || "Invalid Argument Error", this.code = "UND_ERR_INVALID_ARG";
      }
    }
    class i extends A2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, i), this.name = "InvalidReturnValueError", this.message = e3 || "Invalid Return Value Error", this.code = "UND_ERR_INVALID_RETURN_VALUE";
      }
    }
    class c extends A2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, c), this.name = "AbortError", this.message = e3 || "Request aborted", this.code = "UND_ERR_ABORTED";
      }
    }
    class l extends A2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, l), this.name = "InformationalError", this.message = e3 || "Request information", this.code = "UND_ERR_INFO";
      }
    }
    class g extends A2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, g), this.name = "RequestContentLengthMismatchError", this.message = e3 || "Request body length does not match content-length header", this.code = "UND_ERR_REQ_CONTENT_LENGTH_MISMATCH";
      }
    }
    class E extends A2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, E), this.name = "ResponseContentLengthMismatchError", this.message = e3 || "Response body length does not match content-length header", this.code = "UND_ERR_RES_CONTENT_LENGTH_MISMATCH";
      }
    }
    class u extends A2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, u), this.name = "ClientDestroyedError", this.message = e3 || "The client is destroyed", this.code = "UND_ERR_DESTROYED";
      }
    }
    class d extends A2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, d), this.name = "ClientClosedError", this.message = e3 || "The client is closed", this.code = "UND_ERR_CLOSED";
      }
    }
    class I extends A2 {
      constructor(e3, A3) {
        super(e3), Error.captureStackTrace(this, I), this.name = "SocketError", this.message = e3 || "Socket error", this.code = "UND_ERR_SOCKET", this.socket = A3;
      }
    }
    class h extends A2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, h), this.name = "NotSupportedError", this.message = e3 || "Not supported error", this.code = "UND_ERR_NOT_SUPPORTED";
      }
    }
    class Q extends Error {
      constructor(e3, A3, t3) {
        super(e3), Error.captureStackTrace(this, Q), this.name = "HTTPParserError", this.code = A3 ? `HPE_${A3}` : void 0, this.data = t3 ? t3.toString() : void 0;
      }
    }
    class m extends A2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, m), this.name = "ResponseExceededMaxSizeError", this.message = e3 || "Response content exceeded max size", this.code = "UND_ERR_RES_EXCEEDED_MAX_SIZE";
      }
    }
    class C extends A2 {
      constructor(e3, A3, { headers: t3, data: n3 }) {
        super(e3), Error.captureStackTrace(this, C), this.name = "RequestRetryError", this.message = e3 || "Request retry error", this.code = "UND_ERR_REQ_RETRY", this.statusCode = A3, this.data = n3, this.headers = t3;
      }
    }
    e2.exports = { HTTPParserError: Q, UndiciError: A2, HeadersTimeoutError: n2, HeadersOverflowError: r2, BodyTimeoutError: o2, RequestContentLengthMismatchError: g, ConnectTimeoutError: t2, ResponseStatusCodeError: s, InvalidArgumentError: a, InvalidReturnValueError: i, RequestAbortedError: c, ClientDestroyedError: u, ClientClosedError: d, InformationalError: l, SocketError: I, NotSupportedError: h, ResponseContentLengthMismatchError: E, BalancedPoolMissingUpstreamError: class extends A2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, h), this.name = "MissingUpstreamError", this.message = e3 || "No upstream has been added to the BalancedPool", this.code = "UND_ERR_BPL_MISSING_UPSTREAM";
      }
    }, ResponseExceededMaxSizeError: m, RequestRetryError: C };
  }