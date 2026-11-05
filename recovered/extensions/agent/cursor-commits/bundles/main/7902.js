// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 7902 range:592509..598018
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7902: (e2) => {
    "use strict";
    class n2 extends Error {
      constructor(e3) {
        super(e3), this.name = "UndiciError", this.code = "UND_ERR";
      }
    }
    class a2 extends n2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, a2), this.name = "ConnectTimeoutError", this.message = e3 || "Connect Timeout Error", this.code = "UND_ERR_CONNECT_TIMEOUT";
      }
    }
    class t2 extends n2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, t2), this.name = "HeadersTimeoutError", this.message = e3 || "Headers Timeout Error", this.code = "UND_ERR_HEADERS_TIMEOUT";
      }
    }
    class s2 extends n2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, s2), this.name = "HeadersOverflowError", this.message = e3 || "Headers Overflow Error", this.code = "UND_ERR_HEADERS_OVERFLOW";
      }
    }
    class o2 extends n2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, o2), this.name = "BodyTimeoutError", this.message = e3 || "Body Timeout Error", this.code = "UND_ERR_BODY_TIMEOUT";
      }
    }
    class r2 extends n2 {
      constructor(e3, n3, a3, t3) {
        super(e3), Error.captureStackTrace(this, r2), this.name = "ResponseStatusCodeError", this.message = e3 || "Response Status Code Error", this.code = "UND_ERR_RESPONSE_STATUS_CODE", this.body = t3, this.status = n3, this.statusCode = n3, this.headers = a3;
      }
    }
    class i2 extends n2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, i2), this.name = "InvalidArgumentError", this.message = e3 || "Invalid Argument Error", this.code = "UND_ERR_INVALID_ARG";
      }
    }
    class A extends n2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, A), this.name = "InvalidReturnValueError", this.message = e3 || "Invalid Return Value Error", this.code = "UND_ERR_INVALID_RETURN_VALUE";
      }
    }
    class l extends n2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, l), this.name = "AbortError", this.message = e3 || "Request aborted", this.code = "UND_ERR_ABORTED";
      }
    }
    class c extends n2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, c), this.name = "InformationalError", this.message = e3 || "Request information", this.code = "UND_ERR_INFO";
      }
    }
    class m extends n2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, m), this.name = "RequestContentLengthMismatchError", this.message = e3 || "Request body length does not match content-length header", this.code = "UND_ERR_REQ_CONTENT_LENGTH_MISMATCH";
      }
    }
    class d extends n2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, d), this.name = "ResponseContentLengthMismatchError", this.message = e3 || "Response body length does not match content-length header", this.code = "UND_ERR_RES_CONTENT_LENGTH_MISMATCH";
      }
    }
    class g extends n2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, g), this.name = "ClientDestroyedError", this.message = e3 || "The client is destroyed", this.code = "UND_ERR_DESTROYED";
      }
    }
    class u extends n2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, u), this.name = "ClientClosedError", this.message = e3 || "The client is closed", this.code = "UND_ERR_CLOSED";
      }
    }
    class E extends n2 {
      constructor(e3, n3) {
        super(e3), Error.captureStackTrace(this, E), this.name = "SocketError", this.message = e3 || "Socket error", this.code = "UND_ERR_SOCKET", this.socket = n3;
      }
    }
    class p extends n2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, p), this.name = "NotSupportedError", this.message = e3 || "Not supported error", this.code = "UND_ERR_NOT_SUPPORTED";
      }
    }
    class T extends Error {
      constructor(e3, n3, a3) {
        super(e3), Error.captureStackTrace(this, T), this.name = "HTTPParserError", this.code = n3 ? `HPE_${n3}` : void 0, this.data = a3 ? a3.toString() : void 0;
      }
    }
    class k extends n2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, k), this.name = "ResponseExceededMaxSizeError", this.message = e3 || "Response content exceeded max size", this.code = "UND_ERR_RES_EXCEEDED_MAX_SIZE";
      }
    }
    class I extends n2 {
      constructor(e3, n3, { headers: a3, data: t3 }) {
        super(e3), Error.captureStackTrace(this, I), this.name = "RequestRetryError", this.message = e3 || "Request retry error", this.code = "UND_ERR_REQ_RETRY", this.statusCode = n3, this.data = t3, this.headers = a3;
      }
    }
    e2.exports = { HTTPParserError: T, UndiciError: n2, HeadersTimeoutError: t2, HeadersOverflowError: s2, BodyTimeoutError: o2, RequestContentLengthMismatchError: m, ConnectTimeoutError: a2, ResponseStatusCodeError: r2, InvalidArgumentError: i2, InvalidReturnValueError: A, RequestAbortedError: l, ClientDestroyedError: g, ClientClosedError: u, InformationalError: c, SocketError: E, NotSupportedError: p, ResponseContentLengthMismatchError: d, BalancedPoolMissingUpstreamError: class extends n2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, p), this.name = "MissingUpstreamError", this.message = e3 || "No upstream has been added to the BalancedPool", this.code = "UND_ERR_BPL_MISSING_UPSTREAM";
      }
    }, ResponseExceededMaxSizeError: k, RequestRetryError: I };
  }