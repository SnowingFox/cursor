// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 7902 range:913543..919052
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7902: (e2) => {
    "use strict";
    class a2 extends Error {
      constructor(e3) {
        super(e3), this.name = "UndiciError", this.code = "UND_ERR";
      }
    }
    class n2 extends a2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, n2), this.name = "ConnectTimeoutError", this.message = e3 || "Connect Timeout Error", this.code = "UND_ERR_CONNECT_TIMEOUT";
      }
    }
    class t2 extends a2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, t2), this.name = "HeadersTimeoutError", this.message = e3 || "Headers Timeout Error", this.code = "UND_ERR_HEADERS_TIMEOUT";
      }
    }
    class s2 extends a2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, s2), this.name = "HeadersOverflowError", this.message = e3 || "Headers Overflow Error", this.code = "UND_ERR_HEADERS_OVERFLOW";
      }
    }
    class o2 extends a2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, o2), this.name = "BodyTimeoutError", this.message = e3 || "Body Timeout Error", this.code = "UND_ERR_BODY_TIMEOUT";
      }
    }
    class r2 extends a2 {
      constructor(e3, a3, n3, t3) {
        super(e3), Error.captureStackTrace(this, r2), this.name = "ResponseStatusCodeError", this.message = e3 || "Response Status Code Error", this.code = "UND_ERR_RESPONSE_STATUS_CODE", this.body = t3, this.status = a3, this.statusCode = a3, this.headers = n3;
      }
    }
    class i2 extends a2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, i2), this.name = "InvalidArgumentError", this.message = e3 || "Invalid Argument Error", this.code = "UND_ERR_INVALID_ARG";
      }
    }
    class l extends a2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, l), this.name = "InvalidReturnValueError", this.message = e3 || "Invalid Return Value Error", this.code = "UND_ERR_INVALID_RETURN_VALUE";
      }
    }
    class d extends a2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, d), this.name = "AbortError", this.message = e3 || "Request aborted", this.code = "UND_ERR_ABORTED";
      }
    }
    class m extends a2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, m), this.name = "InformationalError", this.message = e3 || "Request information", this.code = "UND_ERR_INFO";
      }
    }
    class c extends a2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, c), this.name = "RequestContentLengthMismatchError", this.message = e3 || "Request body length does not match content-length header", this.code = "UND_ERR_REQ_CONTENT_LENGTH_MISMATCH";
      }
    }
    class p extends a2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, p), this.name = "ResponseContentLengthMismatchError", this.message = e3 || "Response body length does not match content-length header", this.code = "UND_ERR_RES_CONTENT_LENGTH_MISMATCH";
      }
    }
    class A extends a2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, A), this.name = "ClientDestroyedError", this.message = e3 || "The client is destroyed", this.code = "UND_ERR_DESTROYED";
      }
    }
    class u extends a2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, u), this.name = "ClientClosedError", this.message = e3 || "The client is closed", this.code = "UND_ERR_CLOSED";
      }
    }
    class g extends a2 {
      constructor(e3, a3) {
        super(e3), Error.captureStackTrace(this, g), this.name = "SocketError", this.message = e3 || "Socket error", this.code = "UND_ERR_SOCKET", this.socket = a3;
      }
    }
    class T extends a2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, T), this.name = "NotSupportedError", this.message = e3 || "Not supported error", this.code = "UND_ERR_NOT_SUPPORTED";
      }
    }
    class h extends Error {
      constructor(e3, a3, n3) {
        super(e3), Error.captureStackTrace(this, h), this.name = "HTTPParserError", this.code = a3 ? `HPE_${a3}` : void 0, this.data = n3 ? n3.toString() : void 0;
      }
    }
    class k extends a2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, k), this.name = "ResponseExceededMaxSizeError", this.message = e3 || "Response content exceeded max size", this.code = "UND_ERR_RES_EXCEEDED_MAX_SIZE";
      }
    }
    class _ extends a2 {
      constructor(e3, a3, { headers: n3, data: t3 }) {
        super(e3), Error.captureStackTrace(this, _), this.name = "RequestRetryError", this.message = e3 || "Request retry error", this.code = "UND_ERR_REQ_RETRY", this.statusCode = a3, this.data = t3, this.headers = n3;
      }
    }
    e2.exports = { HTTPParserError: h, UndiciError: a2, HeadersTimeoutError: t2, HeadersOverflowError: s2, BodyTimeoutError: o2, RequestContentLengthMismatchError: c, ConnectTimeoutError: n2, ResponseStatusCodeError: r2, InvalidArgumentError: i2, InvalidReturnValueError: l, RequestAbortedError: d, ClientDestroyedError: A, ClientClosedError: u, InformationalError: m, SocketError: g, NotSupportedError: T, ResponseContentLengthMismatchError: p, BalancedPoolMissingUpstreamError: class extends a2 {
      constructor(e3) {
        super(e3), Error.captureStackTrace(this, T), this.name = "MissingUpstreamError", this.message = e3 || "No upstream has been added to the BalancedPool", this.code = "UND_ERR_BPL_MISSING_UPSTREAM";
      }
    }, ResponseExceededMaxSizeError: k, RequestRetryError: _ };
  }