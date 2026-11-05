// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 8762 range:5329629..5335135
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8762: (t2) => {
    "use strict";
    class e2 extends Error {
      constructor(t3) {
        super(t3), this.name = "UndiciError", this.code = "UND_ERR";
      }
    }
    class r2 extends e2 {
      constructor(t3) {
        super(t3), Error.captureStackTrace(this, r2), this.name = "ConnectTimeoutError", this.message = t3 || "Connect Timeout Error", this.code = "UND_ERR_CONNECT_TIMEOUT";
      }
    }
    class n2 extends e2 {
      constructor(t3) {
        super(t3), Error.captureStackTrace(this, n2), this.name = "HeadersTimeoutError", this.message = t3 || "Headers Timeout Error", this.code = "UND_ERR_HEADERS_TIMEOUT";
      }
    }
    class s2 extends e2 {
      constructor(t3) {
        super(t3), Error.captureStackTrace(this, s2), this.name = "HeadersOverflowError", this.message = t3 || "Headers Overflow Error", this.code = "UND_ERR_HEADERS_OVERFLOW";
      }
    }
    class i2 extends e2 {
      constructor(t3) {
        super(t3), Error.captureStackTrace(this, i2), this.name = "BodyTimeoutError", this.message = t3 || "Body Timeout Error", this.code = "UND_ERR_BODY_TIMEOUT";
      }
    }
    class o2 extends e2 {
      constructor(t3, e3, r3, n3) {
        super(t3), Error.captureStackTrace(this, o2), this.name = "ResponseStatusCodeError", this.message = t3 || "Response Status Code Error", this.code = "UND_ERR_RESPONSE_STATUS_CODE", this.body = n3, this.status = e3, this.statusCode = e3, this.headers = r3;
      }
    }
    class a extends e2 {
      constructor(t3) {
        super(t3), Error.captureStackTrace(this, a), this.name = "InvalidArgumentError", this.message = t3 || "Invalid Argument Error", this.code = "UND_ERR_INVALID_ARG";
      }
    }
    class u extends e2 {
      constructor(t3) {
        super(t3), Error.captureStackTrace(this, u), this.name = "InvalidReturnValueError", this.message = t3 || "Invalid Return Value Error", this.code = "UND_ERR_INVALID_RETURN_VALUE";
      }
    }
    class c extends e2 {
      constructor(t3) {
        super(t3), Error.captureStackTrace(this, c), this.name = "AbortError", this.message = t3 || "Request aborted", this.code = "UND_ERR_ABORTED";
      }
    }
    class l extends e2 {
      constructor(t3) {
        super(t3), Error.captureStackTrace(this, l), this.name = "InformationalError", this.message = t3 || "Request information", this.code = "UND_ERR_INFO";
      }
    }
    class m extends e2 {
      constructor(t3) {
        super(t3), Error.captureStackTrace(this, m), this.name = "RequestContentLengthMismatchError", this.message = t3 || "Request body length does not match content-length header", this.code = "UND_ERR_REQ_CONTENT_LENGTH_MISMATCH";
      }
    }
    class d extends e2 {
      constructor(t3) {
        super(t3), Error.captureStackTrace(this, d), this.name = "ResponseContentLengthMismatchError", this.message = t3 || "Response body length does not match content-length header", this.code = "UND_ERR_RES_CONTENT_LENGTH_MISMATCH";
      }
    }
    class f extends e2 {
      constructor(t3) {
        super(t3), Error.captureStackTrace(this, f), this.name = "ClientDestroyedError", this.message = t3 || "The client is destroyed", this.code = "UND_ERR_DESTROYED";
      }
    }
    class p extends e2 {
      constructor(t3) {
        super(t3), Error.captureStackTrace(this, p), this.name = "ClientClosedError", this.message = t3 || "The client is closed", this.code = "UND_ERR_CLOSED";
      }
    }
    class h extends e2 {
      constructor(t3, e3) {
        super(t3), Error.captureStackTrace(this, h), this.name = "SocketError", this.message = t3 || "Socket error", this.code = "UND_ERR_SOCKET", this.socket = e3;
      }
    }
    class g extends e2 {
      constructor(t3) {
        super(t3), Error.captureStackTrace(this, g), this.name = "NotSupportedError", this.message = t3 || "Not supported error", this.code = "UND_ERR_NOT_SUPPORTED";
      }
    }
    class A extends Error {
      constructor(t3, e3, r3) {
        super(t3), Error.captureStackTrace(this, A), this.name = "HTTPParserError", this.code = e3 ? `HPE_${e3}` : void 0, this.data = r3 ? r3.toString() : void 0;
      }
    }
    class _ extends e2 {
      constructor(t3) {
        super(t3), Error.captureStackTrace(this, _), this.name = "ResponseExceededMaxSizeError", this.message = t3 || "Response content exceeded max size", this.code = "UND_ERR_RES_EXCEEDED_MAX_SIZE";
      }
    }
    class y extends e2 {
      constructor(t3, e3, { headers: r3, data: n3 }) {
        super(t3), Error.captureStackTrace(this, y), this.name = "RequestRetryError", this.message = t3 || "Request retry error", this.code = "UND_ERR_REQ_RETRY", this.statusCode = e3, this.data = n3, this.headers = r3;
      }
    }
    t2.exports = { HTTPParserError: A, UndiciError: e2, HeadersTimeoutError: n2, HeadersOverflowError: s2, BodyTimeoutError: i2, RequestContentLengthMismatchError: m, ConnectTimeoutError: r2, ResponseStatusCodeError: o2, InvalidArgumentError: a, InvalidReturnValueError: u, RequestAbortedError: c, ClientDestroyedError: f, ClientClosedError: p, InformationalError: l, SocketError: h, NotSupportedError: g, ResponseContentLengthMismatchError: d, BalancedPoolMissingUpstreamError: class extends e2 {
      constructor(t3) {
        super(t3), Error.captureStackTrace(this, g), this.name = "MissingUpstreamError", this.message = t3 || "No upstream has been added to the BalancedPool", this.code = "UND_ERR_BPL_MISSING_UPSTREAM";
      }
    }, ResponseExceededMaxSizeError: _, RequestRetryError: y };
  }