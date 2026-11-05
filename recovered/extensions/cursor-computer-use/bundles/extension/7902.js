// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 7902 range:623194..628697
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
7902: (e2) => {
    "use strict";
    class n2 extends Error {
      constructor(e3) {
        super(e3), this.name = "UndiciError", this.code = "UND_ERR";
      }
    }
    class t2 extends n2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, t2), this.name = "ConnectTimeoutError", this.message = e3 || "Connect Timeout Error", this.code = "UND_ERR_CONNECT_TIMEOUT";
      }
    }
    class a2 extends n2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, a2), this.name = "HeadersTimeoutError", this.message = e3 || "Headers Timeout Error", this.code = "UND_ERR_HEADERS_TIMEOUT";
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
    class r extends n2 {
      constructor(e3, n3, t3, a3) {
        super(e3), Error.captureStackTrace(this, r), this.name = "ResponseStatusCodeError", this.message = e3 || "Response Status Code Error", this.code = "UND_ERR_RESPONSE_STATUS_CODE", this.body = a3, this.status = n3, this.statusCode = n3, this.headers = t3;
      }
    }
    class i extends n2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, i), this.name = "InvalidArgumentError", this.message = e3 || "Invalid Argument Error", this.code = "UND_ERR_INVALID_ARG";
      }
    }
    class A extends n2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, A), this.name = "InvalidReturnValueError", this.message = e3 || "Invalid Return Value Error", this.code = "UND_ERR_INVALID_RETURN_VALUE";
      }
    }
    class c extends n2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, c), this.name = "AbortError", this.message = e3 || "Request aborted", this.code = "UND_ERR_ABORTED";
      }
    }
    class l extends n2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, l), this.name = "InformationalError", this.message = e3 || "Request information", this.code = "UND_ERR_INFO";
      }
    }
    class d extends n2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, d), this.name = "RequestContentLengthMismatchError", this.message = e3 || "Request body length does not match content-length header", this.code = "UND_ERR_REQ_CONTENT_LENGTH_MISMATCH";
      }
    }
    class m extends n2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, m), this.name = "ResponseContentLengthMismatchError", this.message = e3 || "Response body length does not match content-length header", this.code = "UND_ERR_RES_CONTENT_LENGTH_MISMATCH";
      }
    }
    class u extends n2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, u), this.name = "ClientDestroyedError", this.message = e3 || "The client is destroyed", this.code = "UND_ERR_DESTROYED";
      }
    }
    class g extends n2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, g), this.name = "ClientClosedError", this.message = e3 || "The client is closed", this.code = "UND_ERR_CLOSED";
      }
    }
    class p extends n2 {
      constructor(e3, n3) {
        super(e3), Error.captureStackTrace(this, p), this.name = "SocketError", this.message = e3 || "Socket error", this.code = "UND_ERR_SOCKET", this.socket = n3;
      }
    }
    class E extends n2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, E), this.name = "NotSupportedError", this.message = e3 || "Not supported error", this.code = "UND_ERR_NOT_SUPPORTED";
      }
    }
    class h extends Error {
      constructor(e3, n3, t3) {
        super(e3), Error.captureStackTrace(this, h), this.name = "HTTPParserError", this.code = n3 ? `HPE_${n3}` : void 0, this.data = t3 ? t3.toString() : void 0;
      }
    }
    class T extends n2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, T), this.name = "ResponseExceededMaxSizeError", this.message = e3 || "Response content exceeded max size", this.code = "UND_ERR_RES_EXCEEDED_MAX_SIZE";
      }
    }
    class k extends n2 {
      constructor(e3, n3, { headers: t3, data: a3 }) {
        super(e3), Error.captureStackTrace(this, k), this.name = "RequestRetryError", this.message = e3 || "Request retry error", this.code = "UND_ERR_REQ_RETRY", this.statusCode = n3, this.data = a3, this.headers = t3;
      }
    }
    e2.exports = { HTTPParserError: h, UndiciError: n2, HeadersTimeoutError: a2, HeadersOverflowError: s2, BodyTimeoutError: o2, RequestContentLengthMismatchError: d, ConnectTimeoutError: t2, ResponseStatusCodeError: r, InvalidArgumentError: i, InvalidReturnValueError: A, RequestAbortedError: c, ClientDestroyedError: u, ClientClosedError: g, InformationalError: l, SocketError: p, NotSupportedError: E, ResponseContentLengthMismatchError: m, BalancedPoolMissingUpstreamError: class extends n2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, E), this.name = "MissingUpstreamError", this.message = e3 || "No upstream has been added to the BalancedPool", this.code = "UND_ERR_BPL_MISSING_UPSTREAM";
      }
    }, ResponseExceededMaxSizeError: T, RequestRetryError: k };
  }