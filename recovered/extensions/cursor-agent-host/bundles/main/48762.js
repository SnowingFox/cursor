// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 48762 range:8110733..8116203
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
48762: (e) => {
    "use strict";
    class t extends Error {
      constructor(e2) {
        super(e2), this.name = "UndiciError", this.code = "UND_ERR";
      }
    }
    class r extends t {
      constructor(e2) {
        super(e2), Error.captureStackTrace(this, r), this.name = "ConnectTimeoutError", this.message = e2 || "Connect Timeout Error", this.code = "UND_ERR_CONNECT_TIMEOUT";
      }
    }
    class n extends t {
      constructor(e2) {
        super(e2), Error.captureStackTrace(this, n), this.name = "HeadersTimeoutError", this.message = e2 || "Headers Timeout Error", this.code = "UND_ERR_HEADERS_TIMEOUT";
      }
    }
    class s extends t {
      constructor(e2) {
        super(e2), Error.captureStackTrace(this, s), this.name = "HeadersOverflowError", this.message = e2 || "Headers Overflow Error", this.code = "UND_ERR_HEADERS_OVERFLOW";
      }
    }
    class o extends t {
      constructor(e2) {
        super(e2), Error.captureStackTrace(this, o), this.name = "BodyTimeoutError", this.message = e2 || "Body Timeout Error", this.code = "UND_ERR_BODY_TIMEOUT";
      }
    }
    class i extends t {
      constructor(e2, t2, r2, n2) {
        super(e2), Error.captureStackTrace(this, i), this.name = "ResponseStatusCodeError", this.message = e2 || "Response Status Code Error", this.code = "UND_ERR_RESPONSE_STATUS_CODE", this.body = n2, this.status = t2, this.statusCode = t2, this.headers = r2;
      }
    }
    class a extends t {
      constructor(e2) {
        super(e2), Error.captureStackTrace(this, a), this.name = "InvalidArgumentError", this.message = e2 || "Invalid Argument Error", this.code = "UND_ERR_INVALID_ARG";
      }
    }
    class c extends t {
      constructor(e2) {
        super(e2), Error.captureStackTrace(this, c), this.name = "InvalidReturnValueError", this.message = e2 || "Invalid Return Value Error", this.code = "UND_ERR_INVALID_RETURN_VALUE";
      }
    }
    class l extends t {
      constructor(e2) {
        super(e2), Error.captureStackTrace(this, l), this.name = "AbortError", this.message = e2 || "Request aborted", this.code = "UND_ERR_ABORTED";
      }
    }
    class u extends t {
      constructor(e2) {
        super(e2), Error.captureStackTrace(this, u), this.name = "InformationalError", this.message = e2 || "Request information", this.code = "UND_ERR_INFO";
      }
    }
    class d extends t {
      constructor(e2) {
        super(e2), Error.captureStackTrace(this, d), this.name = "RequestContentLengthMismatchError", this.message = e2 || "Request body length does not match content-length header", this.code = "UND_ERR_REQ_CONTENT_LENGTH_MISMATCH";
      }
    }
    class p extends t {
      constructor(e2) {
        super(e2), Error.captureStackTrace(this, p), this.name = "ResponseContentLengthMismatchError", this.message = e2 || "Response body length does not match content-length header", this.code = "UND_ERR_RES_CONTENT_LENGTH_MISMATCH";
      }
    }
    class m extends t {
      constructor(e2) {
        super(e2), Error.captureStackTrace(this, m), this.name = "ClientDestroyedError", this.message = e2 || "The client is destroyed", this.code = "UND_ERR_DESTROYED";
      }
    }
    class h extends t {
      constructor(e2) {
        super(e2), Error.captureStackTrace(this, h), this.name = "ClientClosedError", this.message = e2 || "The client is closed", this.code = "UND_ERR_CLOSED";
      }
    }
    class f extends t {
      constructor(e2, t2) {
        super(e2), Error.captureStackTrace(this, f), this.name = "SocketError", this.message = e2 || "Socket error", this.code = "UND_ERR_SOCKET", this.socket = t2;
      }
    }
    class g extends t {
      constructor(e2) {
        super(e2), Error.captureStackTrace(this, g), this.name = "NotSupportedError", this.message = e2 || "Not supported error", this.code = "UND_ERR_NOT_SUPPORTED";
      }
    }
    class y extends Error {
      constructor(e2, t2, r2) {
        super(e2), Error.captureStackTrace(this, y), this.name = "HTTPParserError", this.code = t2 ? `HPE_${t2}` : void 0, this.data = r2 ? r2.toString() : void 0;
      }
    }
    class w extends t {
      constructor(e2) {
        super(e2), Error.captureStackTrace(this, w), this.name = "ResponseExceededMaxSizeError", this.message = e2 || "Response content exceeded max size", this.code = "UND_ERR_RES_EXCEEDED_MAX_SIZE";
      }
    }
    class v extends t {
      constructor(e2, t2, { headers: r2, data: n2 }) {
        super(e2), Error.captureStackTrace(this, v), this.name = "RequestRetryError", this.message = e2 || "Request retry error", this.code = "UND_ERR_REQ_RETRY", this.statusCode = t2, this.data = n2, this.headers = r2;
      }
    }
    e.exports = { HTTPParserError: y, UndiciError: t, HeadersTimeoutError: n, HeadersOverflowError: s, BodyTimeoutError: o, RequestContentLengthMismatchError: d, ConnectTimeoutError: r, ResponseStatusCodeError: i, InvalidArgumentError: a, InvalidReturnValueError: c, RequestAbortedError: l, ClientDestroyedError: m, ClientClosedError: h, InformationalError: u, SocketError: f, NotSupportedError: g, ResponseContentLengthMismatchError: p, BalancedPoolMissingUpstreamError: class extends t {
      constructor(e2) {
        super(e2), Error.captureStackTrace(this, g), this.name = "MissingUpstreamError", this.message = e2 || "No upstream has been added to the BalancedPool", this.code = "UND_ERR_BPL_MISSING_UPSTREAM";
      }
    }, ResponseExceededMaxSizeError: w, RequestRetryError: v };
  }