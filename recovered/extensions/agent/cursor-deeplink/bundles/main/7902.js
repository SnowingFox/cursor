// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 7902 range:724139..729642
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7902: (e2) => {
    "use strict";
    class t2 extends Error {
      constructor(e3) {
        super(e3), this.name = "UndiciError", this.code = "UND_ERR";
      }
    }
    class A2 extends t2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, A2), this.name = "ConnectTimeoutError", this.message = e3 || "Connect Timeout Error", this.code = "UND_ERR_CONNECT_TIMEOUT";
      }
    }
    class n2 extends t2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, n2), this.name = "HeadersTimeoutError", this.message = e3 || "Headers Timeout Error", this.code = "UND_ERR_HEADERS_TIMEOUT";
      }
    }
    class r2 extends t2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, r2), this.name = "HeadersOverflowError", this.message = e3 || "Headers Overflow Error", this.code = "UND_ERR_HEADERS_OVERFLOW";
      }
    }
    class o2 extends t2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, o2), this.name = "BodyTimeoutError", this.message = e3 || "Body Timeout Error", this.code = "UND_ERR_BODY_TIMEOUT";
      }
    }
    class s extends t2 {
      constructor(e3, t3, A3, n3) {
        super(e3), Error.captureStackTrace(this, s), this.name = "ResponseStatusCodeError", this.message = e3 || "Response Status Code Error", this.code = "UND_ERR_RESPONSE_STATUS_CODE", this.body = n3, this.status = t3, this.statusCode = t3, this.headers = A3;
      }
    }
    class i extends t2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, i), this.name = "InvalidArgumentError", this.message = e3 || "Invalid Argument Error", this.code = "UND_ERR_INVALID_ARG";
      }
    }
    class a extends t2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, a), this.name = "InvalidReturnValueError", this.message = e3 || "Invalid Return Value Error", this.code = "UND_ERR_INVALID_RETURN_VALUE";
      }
    }
    class c extends t2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, c), this.name = "AbortError", this.message = e3 || "Request aborted", this.code = "UND_ERR_ABORTED";
      }
    }
    class l extends t2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, l), this.name = "InformationalError", this.message = e3 || "Request information", this.code = "UND_ERR_INFO";
      }
    }
    class u extends t2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, u), this.name = "RequestContentLengthMismatchError", this.message = e3 || "Request body length does not match content-length header", this.code = "UND_ERR_REQ_CONTENT_LENGTH_MISMATCH";
      }
    }
    class g extends t2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, g), this.name = "ResponseContentLengthMismatchError", this.message = e3 || "Response body length does not match content-length header", this.code = "UND_ERR_RES_CONTENT_LENGTH_MISMATCH";
      }
    }
    class E extends t2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, E), this.name = "ClientDestroyedError", this.message = e3 || "The client is destroyed", this.code = "UND_ERR_DESTROYED";
      }
    }
    class h extends t2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, h), this.name = "ClientClosedError", this.message = e3 || "The client is closed", this.code = "UND_ERR_CLOSED";
      }
    }
    class d extends t2 {
      constructor(e3, t3) {
        super(e3), Error.captureStackTrace(this, d), this.name = "SocketError", this.message = e3 || "Socket error", this.code = "UND_ERR_SOCKET", this.socket = t3;
      }
    }
    class I extends t2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, I), this.name = "NotSupportedError", this.message = e3 || "Not supported error", this.code = "UND_ERR_NOT_SUPPORTED";
      }
    }
    class B extends Error {
      constructor(e3, t3, A3) {
        super(e3), Error.captureStackTrace(this, B), this.name = "HTTPParserError", this.code = t3 ? `HPE_${t3}` : void 0, this.data = A3 ? A3.toString() : void 0;
      }
    }
    class Q extends t2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, Q), this.name = "ResponseExceededMaxSizeError", this.message = e3 || "Response content exceeded max size", this.code = "UND_ERR_RES_EXCEEDED_MAX_SIZE";
      }
    }
    class f extends t2 {
      constructor(e3, t3, { headers: A3, data: n3 }) {
        super(e3), Error.captureStackTrace(this, f), this.name = "RequestRetryError", this.message = e3 || "Request retry error", this.code = "UND_ERR_REQ_RETRY", this.statusCode = t3, this.data = n3, this.headers = A3;
      }
    }
    e2.exports = { HTTPParserError: B, UndiciError: t2, HeadersTimeoutError: n2, HeadersOverflowError: r2, BodyTimeoutError: o2, RequestContentLengthMismatchError: u, ConnectTimeoutError: A2, ResponseStatusCodeError: s, InvalidArgumentError: i, InvalidReturnValueError: a, RequestAbortedError: c, ClientDestroyedError: E, ClientClosedError: h, InformationalError: l, SocketError: d, NotSupportedError: I, ResponseContentLengthMismatchError: g, BalancedPoolMissingUpstreamError: class extends t2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, I), this.name = "MissingUpstreamError", this.message = e3 || "No upstream has been added to the BalancedPool", this.code = "UND_ERR_BPL_MISSING_UPSTREAM";
      }
    }, ResponseExceededMaxSizeError: Q, RequestRetryError: f };
  }